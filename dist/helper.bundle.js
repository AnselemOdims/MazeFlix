/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/fetchWrapper.js");


class Comment {
  static #API = new _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/');

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


/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": () => (/* binding */ Nav),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Heading": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var _assets_images_mAZEFLIX_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/mAZEFLIX.gif */ "./src/assets/images/mAZEFLIX.gif");


const Nav = () => `
  <nav>
    <div class="logo">
      <img src=${_assets_images_mAZEFLIX_gif__WEBPACK_IMPORTED_MODULE_0__} alt="site logo" />
    </div>
    <div class="form-container">
      <form>
        <input type="search" placeholder="search" id="search"/>
        <div>
          <button type="submit" id="submit-btn">Search <span class="spinner"></span></button>
        </div>
      </form>
    </div>
    <ul>
      <li>
        <a href="#" class="links active" data-content="#books">TV Shows</a>
      </li>
    </ul>
  </nav>
  `;

const List = ({ show } = {}, likesNum = 0) => `
  <li>
    <div class="show-img">
      <img src=${show.image.medium} alt="show image">
    </div>
    <div class="tv-title">
      <p>${show.name}</p>
      <p><i class="fas fa-thumbs-up" id="likes-btn" data-id=${show.id}></i><span  data-id=${show.id} class="likes-num">${likesNum}</span> likes</p>
    </div>
    <button type="button" class="btn comment-btn" data-id=${show.id}>Comments</button>
  </li>
`;

const Heading = (type, count = 5) => `
  <h1>Title ${type}: TV Shows(${count})</h1>
`;


/***/ }),

/***/ "./src/fetchWrapper.js":
/*!*****************************!*\
  !*** ./src/fetchWrapper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchWrapper)
/* harmony export */ });
/**
 * @class FetchWrapper - class to handle fetch methods
 */
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  /**
   * @function get - implements the fetch get request
   * @param {string} endpoint - the endpoint to be attached to the baseURL to form complete url
   * @returns {object} - the Promise response from the server
   */
  async get(endpoint) {
    const response = await fetch(this.baseURL + endpoint);
    return response.json();
  }

  /**
   * @function post - implements the fetch post request
   * @param {string} endpoint - the endpoint to be attached to the baseURL to form complete url
   * @param {object} data - the data object to be sent to the server
   * @returns {object} - the Promise response from the server
   */
  async post(endpoint, data) {
    const response = await fetch(this.baseURL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  }
}

/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Likes)
/* harmony export */ });
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/fetchWrapper.js");
/* eslint-disable class-methods-use-this */

/**
 * @class Likes - handles all likes related methods
 */
class Likes {
  static #API = new _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/');

  static #appID = 'rd64xKOPXxGFmPrj8pUt';

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
    return response;
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
    const { likes } = await result.find((item) => item.item_id === id) ?? { likes: 0 };
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

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ "./src/likes.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ "./src/comment.js");


/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
class Utils {
  /**
   * @function render - handles the rendering of the server response on the DOM
   * @param {Array} data - the array response from the server
   */
  static async render(data = [], list) {
    document.querySelector('#lists-container').innerHTML = data.map((result) => {
      const res = list(result);
      return res;
    }).join('');
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

  /**
   * @static method
   * @returns - the array of items
   * @memberof Utils
   */
  static async displayLikes() {
    const res = await _likes_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLikesAll();
    return res.map((item) => item);
  }

  /**
   * @static methods
   * @memberof Utils
   */
  static async populate() {
    const likes = await Utils.displayLikes();
    document.querySelectorAll('.likes-num').forEach((item) => {
      const id = likes.find((data) => data.item_id === item.dataset.id);
      item.innerHTML = id?.likes ?? 0;
    });
  }

  /**
   * @static method
   * @param {HTML Element} elem - the element
   * @param {String} type - type of class
   * @memberof Utils
   */
  static addClass(elem, type) {
    elem.classList.add(type);
    setTimeout(() => elem.classList.remove(type), 800);
  }

  static async displayComments(id) {
    const ans = await _comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCommentOne(id);
    return ans.map((item) => item);
  }
}

/***/ }),

/***/ "./src/assets/images/mAZEFLIX.gif":
/*!****************************************!*\
  !*** ./src/assets/images/mAZEFLIX.gif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c504ca14f325ea0625b1.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/fetchWrapper.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/components.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ "./src/likes.js");
/* eslint-disable class-methods-use-this */





/**
 * @class Helper - the helper class
 */
class Helper {
  static #tvAPI = new _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__["default"]('https://api.tvmaze.com/');

  /**
   * @method getHandler - handles the refresh button click event
   * @param {Event Object} e - the event object
   * @memberof Helper
   */
  static async getHandler(input) {
    const result = await Helper.#tvAPI.get(`search/shows?q=${input}`);
    return result;
  }

  static async getInfo(input) {
    const result = await Helper.#tvAPI.get(`shows/${input}`);
    return result;
  }

  /**
   * @static method - displays the result in the DOM
   * @param {String} input - the search input
   * @memberof Helper
   */
  static async displayData(input) {
    try {
      const result = await Helper.getHandler(input);
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderHeading(input, _components_js__WEBPACK_IMPORTED_MODULE_2__.Heading, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCount(result));
      await _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(result, _components_js__WEBPACK_IMPORTED_MODULE_2__.List);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * @instance method - handles the search event
   * @param {Event Object} e - the event object
   * @memberof Helper
   */
  async searchHandler(e, handle) {
    e.preventDefault();
    const value = document.querySelector('#search').value.trim();
    try {
      await Helper.displayData(value);
      handle();
      await _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].populate();
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * @static method
   * @param {Event Object} e - the event Object
   * @memberof Helper
   */
  static async LikeHandler(e) {
    const target = e.currentTarget;
    const data = target.dataset;
    const elem = target.nextElementSibling;
    await _likes_js__WEBPACK_IMPORTED_MODULE_3__["default"].postLikes(data);
    _likes_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateLikes(data, elem);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(target, 'like-animate');
  }

  // static async Comments(id, name, comment){

  //  const ids =
  // }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL21hemVmbGl4Ly4vc3JjL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9mZXRjaFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL2hlbHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XG4gIHN0YXRpYyAjQVBJID0gbmV3IEZldGNoV3JhcHBlcignaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLycpO1xuXG4gIHN0YXRpYyAjYXBwSUQgPSAncmQ2NHhLT1BYeEdGbVByajhwVXQnO1xuXG4gIHN0YXRpYyBhc3luYyBwb3N0Q29tbWVudChpZCwgbmFtZSwgY29tbWVudCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBDb21tZW50LiNBUEkucG9zdChgYXBwcy8ke0NvbW1lbnQuI2FwcElEfS9jb21tZW50c2AsIGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50T25lKGlkKSB7XG4gICAgY29uc3QgbmV4dCA9IGF3YWl0IENvbW1lbnQuI0FQSS5nZXQoYGFwcHMvJHtDb21tZW50LiNhcHBJRH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG59XG4iLCJpbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbUFaRUZMSVguZ2lmJztcblxuZXhwb3J0IGNvbnN0IE5hdiA9ICgpID0+IGBcbiAgPG5hdj5cbiAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgPGltZyBzcmM9JHtMb2dvfSBhbHQ9XCJzaXRlIGxvZ29cIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiBpZD1cInNlYXJjaFwiLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1idG5cIj5TZWFyY2ggPHNwYW4gY2xhc3M9XCJzcGlubmVyXCI+PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaW5rcyBhY3RpdmVcIiBkYXRhLWNvbnRlbnQ9XCIjYm9va3NcIj5UViBTaG93czwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9uYXY+XG4gIGA7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gKHsgc2hvdyB9ID0ge30sIGxpa2VzTnVtID0gMCkgPT4gYFxuICA8bGk+XG4gICAgPGRpdiBjbGFzcz1cInNob3ctaW1nXCI+XG4gICAgICA8aW1nIHNyYz0ke3Nob3cuaW1hZ2UubWVkaXVtfSBhbHQ9XCJzaG93IGltYWdlXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInR2LXRpdGxlXCI+XG4gICAgICA8cD4ke3Nob3cubmFtZX08L3A+XG4gICAgICA8cD48aSBjbGFzcz1cImZhcyBmYS10aHVtYnMtdXBcIiBpZD1cImxpa2VzLWJ0blwiIGRhdGEtaWQ9JHtzaG93LmlkfT48L2k+PHNwYW4gIGRhdGEtaWQ9JHtzaG93LmlkfSBjbGFzcz1cImxpa2VzLW51bVwiPiR7bGlrZXNOdW19PC9zcGFuPiBsaWtlczwvcD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBjb21tZW50LWJ0blwiIGRhdGEtaWQ9JHtzaG93LmlkfT5Db21tZW50czwvYnV0dG9uPlxuICA8L2xpPlxuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSAodHlwZSwgY291bnQgPSA1KSA9PiBgXG4gIDxoMT5UaXRsZSAke3R5cGV9OiBUViBTaG93cygke2NvdW50fSk8L2gxPlxuYDtcbiIsIi8qKlxuICogQGNsYXNzIEZldGNoV3JhcHBlciAtIGNsYXNzIHRvIGhhbmRsZSBmZXRjaCBtZXRob2RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVUkwpIHtcbiAgICB0aGlzLmJhc2VVUkwgPSBiYXNlVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXQgLSBpbXBsZW1lbnRzIHRoZSBmZXRjaCBnZXQgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGJhc2VVUkwgdG8gZm9ybSBjb21wbGV0ZSB1cmxcbiAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgUHJvbWlzZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIGFzeW5jIGdldChlbmRwb2ludCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5iYXNlVVJMICsgZW5kcG9pbnQpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHBvc3QgLSBpbXBsZW1lbnRzIHRoZSBmZXRjaCBwb3N0IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBiYXNlVVJMIHRvIGZvcm0gY29tcGxldGUgdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gdGhlIGRhdGEgb2JqZWN0IHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIHRoZSBQcm9taXNlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgYXN5bmMgcG9zdChlbmRwb2ludCwgZGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5iYXNlVVJMICsgZW5kcG9pbnQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5vaztcbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBGZXRjaFdyYXBwZXIgZnJvbSAnLi9mZXRjaFdyYXBwZXIuanMnO1xuLyoqXG4gKiBAY2xhc3MgTGlrZXMgLSBoYW5kbGVzIGFsbCBsaWtlcyByZWxhdGVkIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZXMge1xuICBzdGF0aWMgI0FQSSA9IG5ldyBGZXRjaFdyYXBwZXIoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nKTtcblxuICBzdGF0aWMgI2FwcElEID0gJ3JkNjR4S09QWHhHRm1Qcmo4cFV0JztcblxuICAvKipcbiAgICogQGluc3RhbmNlIG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0wIC0gdGhlIGlkIG9mIHRoZSBpdGVtXG4gICAqIEByZXR1cm5zIC0gdGhlIHNlcnZlciByZXNwb25zZVxuICAgKiBAbWVtYmVyb2YgTGlrZXNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBwb3N0TGlrZXMoeyBpZCB9ID0ge30pIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpa2VzLiNBUEkucG9zdChgYXBwcy8ke0xpa2VzLiNhcHBJRH0vbGlrZXMvYCwgZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEByZXR1cm5zIC0gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKiBAbWVtYmVyb2YgTGlrZXNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRMaWtlc0FsbCgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpa2VzLiNBUEkuZ2V0KGBhcHBzLyR7TGlrZXMuI2FwcElEfS9saWtlcy9gKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtMCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKiBAcmV0dXJucyAtIHRoZSBudW1iZXIgb2YgbGlrZXNcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0TGlrZXNPbmUoaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc0FsbCgpO1xuICAgIGNvbnN0IHsgbGlrZXMgfSA9IGF3YWl0IHJlc3VsdC5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGlkKSA/PyB7IGxpa2VzOiAwIH07XG4gICAgcmV0dXJuIGxpa2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnN0YW5jZSBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtMCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKiBAcGFyYW0ge0hUTUwgRWxlbWVudH0gZWxlbSAtIHRoZSBlbGVtZW50IHRvIHVwZGF0ZSBpdHMgbGlrZXNcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgdXBkYXRlTGlrZXMoeyBpZCB9ID0ge30sIGVsZW0pIHtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IExpa2VzLmdldExpa2VzT25lKGlkKTtcbiAgICBlbGVtLmlubmVySFRNTCA9IGxpa2VzO1xuICB9XG59IiwiaW1wb3J0IExpa2VzIGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vY29tbWVudC5qcyc7XG4vKipcbiAqIEBjbGFzcyBVdGlscyAtIHRoZSB1dGlsaXR5IGNsYXNzIHRvIGhvbGQgYWxsIHV0aWx0aXR5IGZ1bmN0aW9uYWxpdHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbmRlciAtIGhhbmRsZXMgdGhlIHJlbmRlcmluZyBvZiB0aGUgc2VydmVyIHJlc3BvbnNlIG9uIHRoZSBET01cbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIHRoZSBhcnJheSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIHN0YXRpYyBhc3luYyByZW5kZXIoZGF0YSA9IFtdLCBsaXN0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RzLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IGRhdGEubWFwKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGxpc3QocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSkuam9pbignJyk7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2QgLSByZW5kZXJzIHRoZSBoZWFkaW5nXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gdGhlIHR5cGUgb2Ygc2VhcmNoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhlYWRpbmcgLSByZXR1cm5zIHRoZSBoZWFkaW5nIGNvbXBvbmVudFxuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyByZW5kZXJIZWFkaW5nKHR5cGUsIGhlYWRpbmcsIGxlbikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkaW5nLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IGhlYWRpbmcodHlwZS50b1VwcGVyQ2FzZSgpLCBsZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgLSB0aGUgZGF0YSBhcnJheSBnb3R0ZW4gZnJvbSB0aGUgc2VydmVyXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBsZW5ndGggb2YgdGhlIEFycmF5XG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGdldENvdW50KGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHJldHVybnMgLSB0aGUgYXJyYXkgb2YgaXRlbXNcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZGlzcGxheUxpa2VzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IExpa2VzLmdldExpa2VzQWxsKCk7XG4gICAgcmV0dXJuIHJlcy5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kc1xuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBwb3B1bGF0ZSgpIHtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IFV0aWxzLmRpc3BsYXlMaWtlcygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1udW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGxpa2VzLmZpbmQoKGRhdGEpID0+IGRhdGEuaXRlbV9pZCA9PT0gaXRlbS5kYXRhc2V0LmlkKTtcbiAgICAgIGl0ZW0uaW5uZXJIVE1MID0gaWQ/Lmxpa2VzID8/IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IGVsZW0gLSB0aGUgZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIHR5cGUgb2YgY2xhc3NcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgYWRkQ2xhc3MoZWxlbSwgdHlwZSkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh0eXBlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZSh0eXBlKSwgODAwKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkaXNwbGF5Q29tbWVudHMoaWQpIHtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBDb21tZW50cy5nZXRDb21tZW50T25lKGlkKTtcbiAgICByZXR1cm4gYW5zLm1hcCgoaXRlbSkgPT4gaXRlbSk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcbmltcG9ydCB7IExpc3QsIEhlYWRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMuanMnO1xuaW1wb3J0IExpa2VzIGZyb20gJy4vbGlrZXMuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBIZWxwZXIgLSB0aGUgaGVscGVyIGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4gIHN0YXRpYyAjdHZBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL2FwaS50dm1hemUuY29tLycpO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEhhbmRsZXIgLSBoYW5kbGVzIHRoZSByZWZyZXNoIGJ1dHRvbiBjbGljayBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEhhbmRsZXIoaW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBIZWxwZXIuI3R2QVBJLmdldChgc2VhcmNoL3Nob3dzP3E9JHtpbnB1dH1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluZm8oaW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBIZWxwZXIuI3R2QVBJLmdldChgc2hvd3MvJHtpbnB1dH1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kIC0gZGlzcGxheXMgdGhlIHJlc3VsdCBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCAtIHRoZSBzZWFyY2ggaW5wdXRcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXlEYXRhKGlucHV0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEhlbHBlci5nZXRIYW5kbGVyKGlucHV0KTtcbiAgICAgIFV0aWxzLnJlbmRlckhlYWRpbmcoaW5wdXQsIEhlYWRpbmcsIFV0aWxzLmdldENvdW50KHJlc3VsdCkpO1xuICAgICAgYXdhaXQgVXRpbHMucmVuZGVyKHJlc3VsdCwgTGlzdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGluc3RhbmNlIG1ldGhvZCAtIGhhbmRsZXMgdGhlIHNlYXJjaCBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgYXN5bmMgc2VhcmNoSGFuZGxlcihlLCBoYW5kbGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykudmFsdWUudHJpbSgpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBIZWxwZXIuZGlzcGxheURhdGEodmFsdWUpO1xuICAgICAgaGFuZGxlKCk7XG4gICAgICBhd2FpdCBVdGlscy5wb3B1bGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gdGhlIGV2ZW50IE9iamVjdFxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgTGlrZUhhbmRsZXIoZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3QgZWxlbSA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgYXdhaXQgTGlrZXMucG9zdExpa2VzKGRhdGEpO1xuICAgIExpa2VzLnVwZGF0ZUxpa2VzKGRhdGEsIGVsZW0pO1xuICAgIFV0aWxzLmFkZENsYXNzKHRhcmdldCwgJ2xpa2UtYW5pbWF0ZScpO1xuICB9XG5cbiAgLy8gc3RhdGljIGFzeW5jIENvbW1lbnRzKGlkLCBuYW1lLCBjb21tZW50KXtcblxuICAvLyAgY29uc3QgaWRzID1cbiAgLy8gfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==