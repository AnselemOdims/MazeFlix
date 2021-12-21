import Likes from './likes.js';
/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
export default class Utils {
  static #search = document.querySelector('#search');

  /**
   * @function render - handles the rendering of the server response on the DOM
   * @param {Array} data - the array response from the server
   */
  static render(data = [], list) {
  
    document.querySelector('#lists-container').innerHTML = data.map((result) => {
      return list(result);
    })
      .join('');
  }

  /**
   * @function clearFields - handles clearing the input after submit
   */
  static clearFields() {
    Utils.#search.value = '';
  }

  /**
   * @static method - renders the heading
   * @param {String} type - the type of search
   * @param {Function} heading - returns the heading component
   * @memberof Utils
   */
  static renderHeading(type, heading, len) {
    document.querySelector('.heading-container').innerHTML = heading(type.toUpperCase(), len);
  }

  /**
   * @static method
   * @param {Array} data - the data array gotten from the server
   * @returns {Number} the length of the Array
   * @memberof Utils
   */
  static getCount(data) {
    return data.length;
  }

}