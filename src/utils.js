import FetchWrapper from './fetchWrapper.js';

/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
export default class Utils {
  #tvAPI = new FetchWrapper('https://api.tvmaze.com/search/shows?q=a');

  /**
   * @function render - handles the rendering of the server response on the DOM
   * @param {Array} data - the array response from the server
   */
  static render({ data, list } = {}) {
    document.querySelector('#lists-container').innerHTML = data.map((result) => list(result))
      .join('');
  }
}