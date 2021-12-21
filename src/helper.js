/* eslint-disable class-methods-use-this */
import Utils from './utils.js';
import FetchWrapper from './fetchWrapper.js';
import { List, Heading } from './components.js';

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
   * @instance method - displays the result in the DOM
   * @param {String} input - the search input
   * @memberof Helper
   */
  static async displayData(input) {
    try {
      const result = await Helper.getHandler(input);
      Utils.renderHeading(input, Heading, result.length);
      Utils.render(result, List);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * @instance method - handles the search event
   * @param {Event Object} e - the event object
   * @memberof Helper
   */
  async searchHandler(e) {
    e.preventDefault();
    const value = document.querySelector('#search').value.trim();
    try {
      await Helper.displayData(value);
    } catch (err) {
      throw new Error(err);
    }
  }
}