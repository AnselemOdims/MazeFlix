import FetchWrapper from './fetchWrapper.js';

/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
export default class Utils {
  #API = new FetchWrapper('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
}