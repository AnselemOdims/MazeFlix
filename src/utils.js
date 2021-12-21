/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
export default class Utils {
  #search = document.querySelector('#search');

  /**
   * @function render - handles the rendering of the server response on the DOM
   * @param {Array} data - the array response from the server
   */
  static render(data = [], list) {
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

  /**
   * @function stopLoader - handles the stop of the spinner loading
   * @param {HTMLElement} elem1 - the first HTMLElement
   * @param {HTMLElement} elem2 - the second HTMLElement
   * @param {String} value - the string value to insert into the DOM
   */
  static stopLoader(elem1, elem2, value) {
    elem2.classList.remove('loading-spinner');
    elem1.innerHTML = value;
  }

  /**
   * @function clearFields - handles clearing the input after submit
   */
  static clearFields() {
    this.#search.value = '';
  }

  /**
   * @static method - renders the heading
   * @param {String} type - the type of search
   * @param {Function} heading - returns the heading component
   * @memberof Utils
   */
  static renderHeading(type, heading) {
    document.querySelector('main').insertAdjacentHTML('afterbegin', heading(type.toUpperCase()));
  }
}