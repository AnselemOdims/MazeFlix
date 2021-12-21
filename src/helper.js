/* eslint-disable class-methods-use-this */
import Utils from './utils.js';
import FetchWrapper from './fetchWrapper.js';
import { List, Heading } from './components.js';

/**
 * @class Helper - the helper class
 */
export default class Helper {
  #tvAPI = new FetchWrapper('https://api.tvmaze.com/');

  /**
   * @method getHandler - handles the refresh button click event
   * @param {Event Object} e - the event object
   * @memberof Helper
   */
  async getHandler(input) {
    const result = await this.#tvAPI.get(`search/shows?q=${input}`);
    return result;
  }

  /**
   * @instance method - displays the result in the DOM
   * @param {String} input - the search input
   * @memberof Helper
   */
  async display(input) {
    const result = await this.getHandler(input);
    Utils.renderHeading(input, Heading);
    Utils.render(result, List);
  }
}