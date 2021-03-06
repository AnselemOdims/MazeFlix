import Likes from './likes.js';
import Comments from './comment.js';
import { Comment } from './components.js';

/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
export default class Utils {
  /**
   * @function render - handles the rendering of the server response on the DOM
   * @param {Array} data - the array response from the server
   */
  static async render(data = [], list) {
    document.querySelector('#lists-container').innerHTML = data.map((result) => {
      const res = list(result);
      return res;
    }).join('');
  }

  /**
   * @static method - renders the heading
   * @param {String} type - the type of search
   * @param {Function} heading - returns the heading component
   * @memberof Utils
   */
  static renderHeading(type, heading, len) {
    document.querySelector('.heading-container').innerHTML = heading(type.toUpperCase(), len);
  }

  /**
   * @static method
   * @param {Array} data - the data array gotten from the server
   * @returns {Number} the length of the Array
   * @memberof Utils
   */
  static getCount(data = []) {
    return data.length;
  }

  /**
   * @static method
   * @returns - the array of items
   * @memberof Utils
   */
  static async displayLikes() {
    const res = await Likes.getLikesAll();
    return res.map((item) => item);
  }

  /**
   * @static methods
   * @memberof Utils
   */
  static async populate() {
    const likes = await Utils.displayLikes();
    document.querySelectorAll('.likes-num').forEach((item) => {
      const id = likes.find((data) => data.item_id === item.dataset.id);
      item.innerHTML = id?.likes ?? 0;
    });
  }

  /**
   * @static method
   * @param {HTML Element} elem - the element
   * @param {String} type - type of class
   * @memberof Utils
   */
  static addClass(elem, type) {
    elem.classList.add(type);
    setTimeout(() => elem.classList.remove(type), 800);
  }

  /**
   * @static method
   * @param {Number} id - the comment id
   * @returns {Array}
   * @memberof Utils
   */
  static async getComments(id) {
    const ans = await Comments.getCommentOne(id);
    return ans.error ? [] : ans.map((item) => item);
  }

  /**
   * @static method
   * @param {Number} id - the comment id
   * @memberof Utils
   */
  static async display(id) {
    const data = await Utils.getComments(id);
    const space = document.querySelector('.comment-display');
    const title = document.querySelector('.comment-section h3');
    const count = Utils.getCount(data);
    title.innerHTML = `Comments(${count})`;
    space.innerHTML = data.map((item) => Comment(item)).join('');
  }

  /**
   * @static method
   * @param {HTMLELement} modal - the modal element
   * @memberof Utils
   */
  static handleClose(modal) {
    const span = document.querySelector('.close');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.innerHTML = '';
    });
  }

  /**
   * @static method
   * @param {Number} id - the comment id
   * @memberof Utils
   */
  static handleForm(id) {
    const forms = document.getElementById('form');
    forms.addEventListener('submit', async (e) => {
      try {
        e.preventDefault();
        const name = document.getElementById('name');
        const comment = document.getElementById('comment');
        if ((name.value !== '') && (comment.value !== '')) {
          e.target.children[2].innerHTML = '<p>Loading <span class="loading-spinner"></span></p>';
          await Comments.postComment(id, name.value, comment.value);
          Utils.display(id);
          forms.reset();
        }
      } catch (err) {
        throw new Error(err);
      } finally {
        e.target.children[2].innerText = 'Submit';
      }
    });
  }
}
