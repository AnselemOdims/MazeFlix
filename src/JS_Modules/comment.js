import FetchWrapper from './fetchWrapper.js';

export default class Comment {
  static #API = new FetchWrapper('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/');

  static #appID = 'rd64xKOPXxGFmPrj8pUt';

  static async postComment(id, name, comment) {
    const data = {
      item_id: id,
      username: name,
      comment,
    };

    const response = await Comment.#API.post(`apps/${Comment.#appID}/comments`, data);
    return response;
  }

  static async getCommentOne(id) {
    const next = await Comment.#API.get(`apps/${Comment.#appID}/comments?item_id=${id}`);
    return next;
  }
}
