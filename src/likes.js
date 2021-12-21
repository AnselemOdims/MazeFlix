/* eslint-disable class-methods-use-this */
import FetchWrapper from './fetchWrapper.js';
/**
 * @class Likes - handles all likes related methods
 */
export default class Likes {
  static #API = new FetchWrapper('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/');

  static #appID = 'bPBKRZKblKYzssiYo25l';

  /**
   * @instance method
   * @param {String} param0 - the id of the item
   * @returns - the server response
   * @memberof Likes
   */
  async postLikes({ id } = {}) {
    const data = {
      item_id: Number(id),
    };
    const response = await Likes.#API.post(`apps/${Likes.#appID}/likes`, data);
    return response;
  }
}