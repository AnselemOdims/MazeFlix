/* eslint-disable class-methods-use-this */
import Utils from './utils.js';
import FetchWrapper from './fetchWrapper.js';
import { List, Heading, Modal } from './components.js';
import Likes from './likes.js';

/**
 * @class Helper - the helper class
 */
export default class Helper {
  static #tvAPI = new FetchWrapper('https://api.tvmaze.com/');

  /**
   * @method getHandler - handles the refresh button click event
   * @param {Event Object} e - the event object
   * @memberof Helper
   */
  static async getHandler(input) {
    const result = await Helper.#tvAPI.get(`search/shows?q=${input}`);
    return result;
  }

  /**
   * @static method
   * @param {String} input - search string
   * @returns {Object}
   * @memberof Helper
   */
  static async getInfo(input) {
    const result = await Helper.#tvAPI.get(`shows/${input}`);
    return result;
  }

  /**
   * @static method - displays the result in the DOM
   * @param {String} input - the search input
   * @memberof Helper
   */
  static async displayData(input) {
    try {
      const result = await Helper.getHandler(input);
      Utils.renderHeading(input, Heading, Utils.getCount(result));
      await Utils.render(result, List);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * @instance method - handles the search event
   * @param {Event Object} e - the event object
   * @memberof Helper
   */
  async searchHandler(e, handle) {
    e.preventDefault();
    const value = document.querySelector('#search').value.trim();
    try {
      await Helper.displayData(value);
      handle();
      Helper.handleComments();
      await Utils.populate();
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * @static method
   * @param {Event Object} e - the event Object
   * @memberof Helper
   */
  static async LikeHandler(e) {
    const target = e.currentTarget;
    const data = target.dataset;
    const elem = target.nextElementSibling;
    await Likes.postLikes(data);
    Likes.updateLikes(data, elem);
    Utils.addClass(target, 'like-animate');
  }

  /**
   * @static method
   * @memberof Helper
   */
  static handleComments() {
    const buttons = document.querySelectorAll('.comment-btn');
    const modal = document.querySelector('.modal');
    buttons.forEach((element) => {
      element.addEventListener('click', async (e) => {
        const args = e.target.getAttribute('data-id');
        const data = await Helper.getInfo(args);
        modal.style.display = 'block';
        modal.innerHTML = Modal(data);

        Utils.display(args);
        Utils.handleClose(modal);
        Utils.handleForm(args);
      });
    });
  }
}