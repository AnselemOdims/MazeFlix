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

  /**
   * @static method
   * @returns - the response from the server
   * @memberof Likes
   */
  static async getLikesAll() {
    const response = await Likes.#API.get(`apps/${Likes.#appID}/likes`);
    return response.json();
  }

  /**
   * @static method
   * @param {String} param0 - the id of the item
   * @returns - the number of likes
   * @memberof Likes
   */
  static async getLikesOne({ id } = {}) {
    const { likes } = await Likes.getLikesAll().find((item) => item.item_id === Number(id));
    return likes;
  }

  /**
   * @instance method
   * @param {String} param0 - the id of the item
   * @param {HTML Element} elem - the element to update its likes
   * @memberof Likes
   */
  async updateLikes({ id } = {}, elem) {
    const likes = await Likes.getLikesOne(id);
    elem.innerHTML = likes;
  }
}