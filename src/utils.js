import Likes from './likes.js';
import Comments from './comment.js';
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
  static getCount(data) {
    if (Array.isArray(data)) {
      return data.length;
    }
    return 0;
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

  static async displayComments(id) {
    const ans = await Comments.getCommentOne(id);
    return ans.map((item) => item);
  }
}