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

  /**
 * @function startLoader - handles the start of the spinner loading
 * @param {HTMLElement} elem1 - the first HTMLElement
 * @param {HTMLElement} elem2 - the second HTMLElement
 */
  static startLoader(elem1, elem2) {
    elem2.classList.add('loading-spinner');
    elem1.innerHTML = 'Loading';
  }
}