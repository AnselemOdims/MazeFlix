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
  static async postLikes({ id } = {}) {
    const data = {
      item_id: id,
    };
    const response = await Likes.#API.post(`apps/${Likes.#appID}/likes/`, data);
    console.log(response)
  }

  /**
   * @static method
   * @returns - the response from the server
   * @memberof Likes
   */
  static async getLikesAll() {
    const response = await Likes.#API.get(`apps/${Likes.#appID}/likes/`);
    return response;
  }

  /**
   * @static method
   * @param {String} param0 - the id of the item
   * @returns - the number of likes
   * @memberof Likes
   */
  static async getLikesOne(id) {
    const result = await Likes.getLikesAll();
    const { likes } = result.find((item) => item.item_id === id);
    return likes;
  }

  /**
   * @instance method
   * @param {String} param0 - the id of the item
   * @param {HTML Element} elem - the element to update its likes
   * @memberof Likes
   */
  static async updateLikes({ id } = {}, elem) {
    const likes = await Likes.getLikesOne(id);
    elem.innerHTML = likes;
  }
}