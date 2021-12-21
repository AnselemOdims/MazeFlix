/* eslint-disable class-methods-use-this */
import Utils from './utils.js';
import FetchWrapper from './fetchWrapper.js';

/**
 * @class Helper - the helper class
 */
export default class Helper {
  #tvAPI = new FetchWrapper('https://api.tvmaze.com/');

  /**
   * @function getHandler - handles the refresh button click event
   * @param {Event Object} e - the event object
   */
  async getHandler({ input } = {}) {
    const { result } = await this.#tvAPI.get(`search/shows?q=${input}`);
    return result.json();
  }
}