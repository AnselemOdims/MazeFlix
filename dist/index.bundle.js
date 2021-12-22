/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modal.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modal.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n/* Pop Up Section */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: var(--primary-color-4);\n  padding: 0 85px;\n  backdrop-filter: blur(8px);\n}\n\n.section {\n  width: 80%;\n  position: relative;\n  border-radius: 1%;\n  font-family: var(--font-2);\n  background: var(--white);\n  padding: 5px 15px 5px 20px;\n  margin: 20px auto;\n  color: var(--secondary-color-3);\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.d-bold {\n  font-weight: bold;\n}\n\n.flex {\n  display: flex;\n}\n\n.direction {\n  flex-direction: column;\n}\n\n.close {\n  display: flex;\n  justify-content: flex-end;\n  color: var(--primary-color-1);\n  font-size: 35px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: var(--accent-color-1);\n}\n\n.top-section {\n  display: flex;\n  justify-content: space-between;\n  height: min-content;\n}\n\n.img-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 32%;\n}\n\n.details {\n  width: 65%;\n  margin-bottom: 50px;\n}\n\n.main-img {\n  width: 100%;\n  border: 4px solid white;\n  border-radius: 3%;\n  height: 73%;\n}\n\ndiv.download-btn {\n  background: var(--primary-color-3);\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 8px 5px;\n  margin-top: 5px;\n}\n\ndiv.download-btn > button {\n  border-radius: 2px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  cursor: pointer;\n  padding: 12px;\n  width: 95%;\n  font-family: var(--font-2);\n}\n\ndiv.download-btn > button:focus {\n  background: var(--accent-color-4);\n}\n\ndiv.download-btn > button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\ndiv.download-btn > button img {\n  width: 7%;\n}\n\n.details h3 {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.details p {\n  font-size: 1rem;\n  color: var(--secondary-color-4);\n}\n\n.details div.d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.details div.genre {\n  padding: 15px 50px 15px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary {\n  margin: 5px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary > p {\n  padding: 3px 50px 0 0;\n  line-height: 1.5rem;\n  color: var(--secondary-color-4);\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -20px;\n}\n\n.comment-section > h3 {\n  font-size: 1.8rem;\n}\n\n#form {\n  padding-top: 0.8%;\n  width: 35%;\n}\n\n.comment-display {\n  margin: 5px 0 20px;\n  width: 50%;\n}\n\n.commenting {\n  padding: 2%;\n  font-size: 1rem;\n  border-left: solid 5px var(--accent-color-1);\n  margin-top: 5px;\n  background: var(--neutral-color-1);\n  width: 100%;\n}\n\n.commenting > p:nth-of-type(2) {\n  font-size: 0.9rem;\n  padding-top: 5px;\n}\n\n.commenting p.date {\n  font-size: 0.7rem;\n}\n\n#form > input,\n#form > textarea {\n  border: solid 2px var(--secondary-color-4);\n  padding: 10px;\n  font: var(--font-2);\n  margin: 10px 0 0;\n  border-radius: 10% 10% 0 0;\n}\n\n#form > input:focus,\n#form > textarea:focus {\n  border: solid 2px var(--accent-color-1);\n  outline: none;\n}\n\nbutton#adding {\n  margin: 20px 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nbutton#adding:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nbutton#adding:focus {\n  background: var(--accent-color-4);\n}\n\n.like-animate {\n  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  color: #f1c215;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-22 13:31:16\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation scale-up-center\n * ----------------------------------------\n */\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAEhD,mBAAmB;AACnB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,cAAc;EACd,wCAAwC;EACxC,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,iBAAiB;EACjB,+BAA+B;EAC/B,8EAA8E;EAC9E,sEAAsE;AACxE;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,uFAAuF;AACzF;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,eAAe;EACf,4CAA4C;EAC5C,eAAe;EACf,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,0CAA0C;EAC1C,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;;EAEE,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,eAAe;EACf,0BAA0B;EAC1B,iDAAiD;EACjD,yCAAyC;EACzC,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,uFAAuF;AACzF;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gFAAgF;EAChF,wEAAwE;EACxE,cAAc;AAChB;;AAEA;;;;;mDAKmD;;AAEnD;;;;EAIE;AACF;EACE;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;AACF","sourcesContent":["/* stylelint-disable no-descending-specificity */\n\n/* Pop Up Section */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: var(--primary-color-4);\n  padding: 0 85px;\n  backdrop-filter: blur(8px);\n}\n\n.section {\n  width: 80%;\n  position: relative;\n  border-radius: 1%;\n  font-family: var(--font-2);\n  background: var(--white);\n  padding: 5px 15px 5px 20px;\n  margin: 20px auto;\n  color: var(--secondary-color-3);\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.d-bold {\n  font-weight: bold;\n}\n\n.flex {\n  display: flex;\n}\n\n.direction {\n  flex-direction: column;\n}\n\n.close {\n  display: flex;\n  justify-content: flex-end;\n  color: var(--primary-color-1);\n  font-size: 35px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: var(--accent-color-1);\n}\n\n.top-section {\n  display: flex;\n  justify-content: space-between;\n  height: min-content;\n}\n\n.img-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 32%;\n}\n\n.details {\n  width: 65%;\n  margin-bottom: 50px;\n}\n\n.main-img {\n  width: 100%;\n  border: 4px solid white;\n  border-radius: 3%;\n  height: 73%;\n}\n\ndiv.download-btn {\n  background: var(--primary-color-3);\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 8px 5px;\n  margin-top: 5px;\n}\n\ndiv.download-btn > button {\n  border-radius: 2px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  cursor: pointer;\n  padding: 12px;\n  width: 95%;\n  font-family: var(--font-2);\n}\n\ndiv.download-btn > button:focus {\n  background: var(--accent-color-4);\n}\n\ndiv.download-btn > button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\ndiv.download-btn > button img {\n  width: 7%;\n}\n\n.details h3 {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.details p {\n  font-size: 1rem;\n  color: var(--secondary-color-4);\n}\n\n.details div.d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.details div.genre {\n  padding: 15px 50px 15px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary {\n  margin: 5px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary > p {\n  padding: 3px 50px 0 0;\n  line-height: 1.5rem;\n  color: var(--secondary-color-4);\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -20px;\n}\n\n.comment-section > h3 {\n  font-size: 1.8rem;\n}\n\n#form {\n  padding-top: 0.8%;\n  width: 35%;\n}\n\n.comment-display {\n  margin: 5px 0 20px;\n  width: 50%;\n}\n\n.commenting {\n  padding: 2%;\n  font-size: 1rem;\n  border-left: solid 5px var(--accent-color-1);\n  margin-top: 5px;\n  background: var(--neutral-color-1);\n  width: 100%;\n}\n\n.commenting > p:nth-of-type(2) {\n  font-size: 0.9rem;\n  padding-top: 5px;\n}\n\n.commenting p.date {\n  font-size: 0.7rem;\n}\n\n#form > input,\n#form > textarea {\n  border: solid 2px var(--secondary-color-4);\n  padding: 10px;\n  font: var(--font-2);\n  margin: 10px 0 0;\n  border-radius: 10% 10% 0 0;\n}\n\n#form > input:focus,\n#form > textarea:focus {\n  border: solid 2px var(--accent-color-1);\n  outline: none;\n}\n\nbutton#adding {\n  margin: 20px 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nbutton#adding:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nbutton#adding:focus {\n  background: var(--accent-color-4);\n}\n\n.like-animate {\n  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  color: #f1c215;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-22 13:31:16\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation scale-up-center\n * ----------------------------------------\n */\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/modal.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: var(--secondary-color-4);\n}\n\nul.container > li .show-img img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-1);\n  color: var(--neutral-color-1);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n}\n\n@media (max-width: 992px) {\n  header > nav {\n    padding: 0 50px;\n  }\n\n  nav > .logo img {\n    width: 60%;\n    padding: 20px 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');\n@import url('./modal.css');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: var(--secondary-color-4);\n}\n\nul.container > li .show-img img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-1);\n  color: var(--neutral-color-1);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n}\n\n@media (max-width: 992px) {\n  header > nav {\n    padding: 0 50px;\n  }\n\n  nav > .logo img {\n    width: 60%;\n    padding: 20px 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/assets/images/download_120262.png":
/*!***********************************************!*\
  !*** ./src/assets/images/download_120262.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a27ef524ea2e8b757263.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_download_120262_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/download_120262.png */ "./src/assets/images/download_120262.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/components.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment.js */ "./src/comment.js");







const helper = new _helper_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

function handleClick() {
  document.querySelectorAll('#likes-btn').forEach((btn) => {
    btn.addEventListener('click', _helper_js__WEBPACK_IMPORTED_MODULE_3__["default"].LikeHandler);
  });
}

const icons = new Image();
icons.src = _assets_images_download_120262_png__WEBPACK_IMPORTED_MODULE_0__;

window.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('header').innerHTML = (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.Nav)();
  await _helper_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayData('a');
  await _utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].populate();
  handleClick();
  document.querySelector('form').addEventListener('submit', (e) => {
    helper.searchHandler(e, handleClick);
  });

  const buttons = document.querySelectorAll('.comment-btn');
  buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
      const args = e.target.getAttribute('data-id');
      _helper_js__WEBPACK_IMPORTED_MODULE_3__["default"].getInfo(args)
        .then((data) => {
          const modal = document.querySelector('.modal');
          modal.style.display = 'block';
          modal.innerHTML = `
          <div class="section">
            <span class="close">&times;</span>
          <div class="top-section">
            <div class="img-section">
              <img src="${data.image.medium}" alt="" class="main-img">
              <div class="download-btn">
              <button type="button">Download <i class="fas fa-download"></i></button>
              </div>
            </div>
          <div class="details">
            <h3>${data.name}</h3>
            <div class="d-flex genre">
              <p>Genre: <span class="d-bold">${data.genres}</span></p>
              <p>Year: <span class="d-bold">${data.ended ?? 'unknown'}</span></p>
            </div>
            <div class="summary">
              <span>Summary:</span>
              <p>${data?.summary?.slice(0, 200) ?? 'brief'}...</p>
            </div>
            <div class="d-flex genre">
              <p>Language: <span class="d-bold">${data.language}</span></p>
              <p>Rating: <span class="d-bold">${data.rating.average ?? 'unknown'}</span></p>
            </div>
            <p>Premeired: <span class="d-bold">${data.premiered}</span></p>
          </div>
        </div>
        <div class="comment-section">
          <h3>Comments</h3>
          <div class="comment-display">
          </div>
          <div>
            <h4>Add New Comment</h4>
          </div>
          <form id="form" class="flex direction">
            <input type="text" id="name" placeholder="Your Name">
            <textarea id="comment" maxlength="500" placeholder="Your Insight"></textarea>
            <button type="submit" id="adding">Submit</button>
          </form>
          </div>
        </div>`;

          const space = document.querySelector('.comment-display');

          _utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayComments(args)
            .then((data) => {
              data.forEach((element) => {
                const next = document.createElement('div');
                next.setAttribute('class', 'commenting');
                next.innerHTML = `<p class="date">${element.creation_date}</p><p>${element.username} : ${element.comment}</p>`;
                space.append(next);
              });
            });

          const span = document.querySelector('.close');
          const forms = document.getElementById('form');
          const add = document.getElementById('adding');

          span.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.innerHTML = '';
          });

          forms.addEventListener('submit', (event) => {
            event.preventDefault();
          });

          add.addEventListener('click', () => {
            const name = document.getElementById('name');
            const score = document.getElementById('comment');
            if ((name.value !== '') && (score.value !== '')) {
              _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].postComment(args, name.value, score.value)
                .then();
              const next = document.createElement('div');
              next.setAttribute('class', 'commenting');
              next.innerHTML = `<p class="date">03/11/2021</p><p>${name.value}: ${score.value}</p>`;
              space.append(next);

              forms.reset();
            }
          });
        });
    });
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwRCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxZQUFZLCtEQUFJOztBQUVoQjtBQUNBLCtDQUErQyxtREFBRztBQUNsRCxRQUFRLDhEQUFrQjtBQUMxQixRQUFRLDBEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixVQUFVO0FBQzVCO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0QsOENBQThDLHdCQUF3QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0NBQXdDO0FBQzNEO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRSxnREFBZ0QsaUNBQWlDO0FBQ2pGO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVSxpRUFBcUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsc0JBQXNCLFNBQVMsa0JBQWtCLElBQUksZ0JBQWdCO0FBQ3pIO0FBQ0EsZUFBZTtBQUNmLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtEQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVyxJQUFJLFlBQVk7QUFDOUY7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvbW9kYWwuY3NzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9mZXRjaFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL2xpa2VzLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG5cXG4vKiBQb3AgVXAgU2VjdGlvbiAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogNTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci00KTtcXG4gIHBhZGRpbmc6IDAgODVweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICB3aWR0aDogODAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMSU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG59XFxuXFxuLmQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpcmVjdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci0xKTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbn1cXG5cXG4udG9wLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5pbWctc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzIlO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1haW4taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGhlaWdodDogNzMlO1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMyk7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbiBpbWcge1xcbiAgd2lkdGg6IDclO1xcbn1cXG5cXG4uZGV0YWlscyBoMyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZXRhaWxzIHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuZ2VucmUge1xcbiAgcGFkZGluZzogMTVweCA1MHB4IDE1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5zdW1tYXJ5IHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuc3VtbWFyeSA+IHAge1xcbiAgcGFkZGluZzogM3B4IDUwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24gPiBoMyB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgcGFkZGluZy10b3A6IDAuOCU7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4uY29tbWVudC1kaXNwbGF5IHtcXG4gIG1hcmdpbjogNXB4IDAgMjBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb21tZW50aW5nIHtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50aW5nID4gcDpudGgtb2YtdHlwZSgyKSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5jb21tZW50aW5nIHAuZGF0ZSB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuI2Zvcm0gPiBpbnB1dCxcXG4jZm9ybSA+IHRleHRhcmVhIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250OiB2YXIoLS1mb250LTIpO1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJSAxMCUgMCAwO1xcbn1cXG5cXG4jZm9ybSA+IGlucHV0OmZvY3VzLFxcbiNmb3JtID4gdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uI2FkZGluZyB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAxNSUgMCAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuYnV0dG9uI2FkZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbmJ1dHRvbiNhZGRpbmc6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG4ubGlrZS1hbmltYXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC44cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC44cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgY29sb3I6ICNmMWMyMTU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMi0yMiAxMzozMToxNlxcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qKlxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBhbmltYXRpb24gc2NhbGUtdXAtY2VudGVyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnREFBZ0Q7O0FBRWhELG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFB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QkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcblxcbi8qIFBvcCBVcCBTZWN0aW9uICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTQpO1xcbiAgcGFkZGluZzogMCA4NXB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAxJTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDIwcHg7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbn1cXG5cXG4uZC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlyZWN0aW9uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxufVxcblxcbi50b3Atc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmltZy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMiU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgaGVpZ2h0OiA3MyU7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0zKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItNCk7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uIGltZyB7XFxuICB3aWR0aDogNyU7XFxufVxcblxcbi5kZXRhaWxzIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRldGFpbHMgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXRhaWxzIGRpdi5nZW5yZSB7XFxuICBwYWRkaW5nOiAxNXB4IDUwcHggMTVweCAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LnN1bW1hcnkge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5zdW1tYXJ5ID4gcCB7XFxuICBwYWRkaW5nOiAzcHggNTBweCAwIDA7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4jZm9ybSB7XFxuICBwYWRkaW5nLXRvcDogMC44JTtcXG4gIHdpZHRoOiAzNSU7XFxufVxcblxcbi5jb21tZW50LWRpc3BsYXkge1xcbiAgbWFyZ2luOiA1cHggMCAyMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbW1lbnRpbmcge1xcbiAgcGFkZGluZzogMiU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItbGVmdDogc29saWQgNXB4IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnRpbmcgPiBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLmNvbW1lbnRpbmcgcC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4jZm9ybSA+IGlucHV0LFxcbiNmb3JtID4gdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQ6IHZhcigtLWZvbnQtMik7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlIDEwJSAwIDA7XFxufVxcblxcbiNmb3JtID4gaW5wdXQ6Zm9jdXMsXFxuI2Zvcm0gPiB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b24jYWRkaW5nIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG5idXR0b24jYWRkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxuYnV0dG9uI2FkZGluZzpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItNCk7XFxufVxcblxcbi5saWtlLWFuaW1hdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBjb2xvcjogI2YxYzIxNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTEyLTIyIDEzOjMxOjE2XFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxcbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyoqXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIGFuaW1hdGlvbiBzY2FsZS11cC1jZW50ZXJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZmYW1pbHk9U29yYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcblxcbi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvci0xOiAjZjg1ZjY4O1xcbiAgLS1wcmltYXJ5LWNvbG9yLTI6ICNmNTMwM2Q7XFxuICAtLXByaW1hcnktY29sb3ItMzogI2Y3YzNjNjtcXG4gIC0tcHJpbWFyeS1jb2xvci00OiAjYWMxMjFhNDE7XFxuICAtLWFjY2VudC1jb2xvci0xOiAjNmVhZmFiO1xcbiAgLS1hY2NlbnQtY29sb3ItMjogI2I1ZWJlNztcXG4gIC0tYWNjZW50LWNvbG9yLTM6ICM1NjdhNzk7XFxuICAtLWFjY2VudC1jb2xvci00OiAjNDc2NDYzO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMTogIzMyMjgzMTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTI6ICM1ZjRkNWQ7XFxuICAtLXNlY29uZGFyeS1jb2xvci0zOiAjMmEzNzdmO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItNDogIzI2MmQ1YTtcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjZGZkZmRlO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udC0xOiAnTG9yYScsIHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtMjogJ1NvcmEnLCBzZXJpZjtcXG4gIC0tc2hhZG93LTE6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIgPiBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubmF2ID4gLmxvZ28ge1xcbiAgd2lkdGg6IDE4JTtcXG59XFxuXFxubmF2ID4gLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udDogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbm5hdiA+IHVsID4gbGkgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG5uYXYgdWwgbGkgYS5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTWFpbiBTZWN0aW9uICovXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE1MHB4O1xcbn1cXG5cXG5tYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDMwcHggMCA0MHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG59XFxuXFxubWFpbiA+IHVsLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDEpIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgyKSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgyKSBpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC5zaG93LWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSBidXR0b24ge1xcbiAgbWFyZ2luOiAzMHB4IDAgMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAxNSUgMCAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4IDVweCA1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAyNXB4O1xcbn1cXG5cXG5tYWluIHVsLmNvbnRhaW5lciA+IGxpIGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItNCk7XFxufVxcblxcbm1haW4gdWwuY29udGFpbmVyID4gbGkgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxubmF2IGRpdi5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxufVxcblxcbm5hdiBkaXYuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBzcGlubmVyICovXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICBhbmltYXRpb246IHJvdGF0ZS1mb3JldmVyIGxpbmVhciBpbmZpbml0ZSAwLjhzO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUtZm9yZXZlciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41JSAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlIDEwJSAwIDA7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIGhlYWRlciA+IG5hdiB7XFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXG4gIH1cXG5cXG4gIG5hdiA+IC5sb2dvIGltZyB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnREFBZ0Q7O0FBRWhELHVCQUF1Qjs7QUFJdkIsaUJBQWlCO0FBQ2pCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGlEQUFpRDtBQUNuRDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxr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LFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcblxcbi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmZhbWlseT1Tb3JhOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnLi9tb2RhbC5jc3MnKTtcXG5cXG4vKiBSZXNldCBTdHlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3ItMTogI2Y4NWY2ODtcXG4gIC0tcHJpbWFyeS1jb2xvci0yOiAjZjUzMDNkO1xcbiAgLS1wcmltYXJ5LWNvbG9yLTM6ICNmN2MzYzY7XFxuICAtLXByaW1hcnktY29sb3ItNDogI2FjMTIxYTQxO1xcbiAgLS1hY2NlbnQtY29sb3ItMTogIzZlYWZhYjtcXG4gIC0tYWNjZW50LWNvbG9yLTI6ICNiNWViZTc7XFxuICAtLWFjY2VudC1jb2xvci0zOiAjNTY3YTc5O1xcbiAgLS1hY2NlbnQtY29sb3ItNDogIzQ3NjQ2MztcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTE6ICMzMjI4MzE7XFxuICAtLXNlY29uZGFyeS1jb2xvci0yOiAjNWY0ZDVkO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMzogIzJhMzc3ZjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTQ6ICMyNjJkNWE7XFxuICAtLW5ldXRyYWwtY29sb3ItMTogI2RmZGZkZTtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWZvbnQtMTogJ0xvcmEnLCBzYW5zLXNlcmlmO1xcbiAgLS1mb250LTI6ICdTb3JhJywgc2VyaWY7XFxuICAtLXNoYWRvdy0xOiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbn1cXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuaHRtbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG51bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyID4gbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbm5hdiA+IC5sb2dvIHtcXG4gIHdpZHRoOiAxOCU7XFxufVxcblxcbm5hdiA+IC5sb2dvIGltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAycHggNXB4IDJweCAycHg7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMyk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQ6IHZhcigtLWZvbnQtMik7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxufVxcblxcbm5hdiA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpIHtcXG4gIG1hcmdpbjogMCAyNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG59XFxuXFxubmF2IHVsIGxpIGEuYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIE1haW4gU2VjdGlvbiAqL1xcbm1haW4ge1xcbiAgcGFkZGluZzogMCAxNTBweDtcXG59XFxuXFxubWFpbiAuaGVhZGluZy1jb250YWluZXIgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAzMHB4IDAgNDBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbm1haW4gPiB1bC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgxKSB7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikgaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAuc2hvdy1pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgYnV0dG9uIHtcXG4gIG1hcmdpbjogMzBweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW46IDVweCA1cHggNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMjVweDtcXG59XFxuXFxubWFpbiB1bC5jb250YWluZXIgPiBsaSBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG5tYWluIHVsLmNvbnRhaW5lciA+IGxpIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbm5hdiBkaXYuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbn1cXG5cXG5uYXYgZGl2LmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogc3Bpbm5lciAqL1xcbi5sb2FkaW5nLXNwaW5uZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUtZm9yZXZlciBsaW5lYXIgaW5maW5pdGUgMC44cztcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBGb290ZXIgU2VjdGlvbiAqL1xcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEuNSUgMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJSAxMCUgMCAwO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICBoZWFkZXIgPiBuYXYge1xcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxuICB9XFxuXFxuICBuYXYgPiAubG9nbyBpbWcge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEZldGNoV3JhcHBlciBmcm9tICcuL2ZldGNoV3JhcHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuICBzdGF0aWMgI0FQSSA9IG5ldyBGZXRjaFdyYXBwZXIoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nKTtcblxuICBzdGF0aWMgI2FwcElEID0gJ3JkNjR4S09QWHhHRm1Qcmo4cFV0JztcblxuICBzdGF0aWMgYXN5bmMgcG9zdENvbW1lbnQoaWQsIG5hbWUsIGNvbW1lbnQpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ29tbWVudC4jQVBJLnBvc3QoYGFwcHMvJHtDb21tZW50LiNhcHBJRH0vY29tbWVudHNgLCBkYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q29tbWVudE9uZShpZCkge1xuICAgIGNvbnN0IG5leHQgPSBhd2FpdCBDb21tZW50LiNBUEkuZ2V0KGBhcHBzLyR7Q29tbWVudC4jYXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IExvZ28gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL21BWkVGTElYLmdpZic7XG5cbmV4cG9ydCBjb25zdCBOYXYgPSAoKSA9PiBgXG4gIDxuYXY+XG4gICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgIDxpbWcgc3JjPSR7TG9nb30gYWx0PVwic2l0ZSBsb2dvXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2hcIi8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXQtYnRuXCI+U2VhcmNoIDxzcGFuIGNsYXNzPVwic3Bpbm5lclwiPjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua3MgYWN0aXZlXCIgZGF0YS1jb250ZW50PVwiI2Jvb2tzXCI+VFYgU2hvd3M8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuICBgO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9ICh7IHNob3cgfSA9IHt9LCBsaWtlc051bSA9IDApID0+IGBcbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzaG93LWltZ1wiPlxuICAgICAgPGltZyBzcmM9JHtzaG93LmltYWdlLm1lZGl1bX0gYWx0PVwic2hvdyBpbWFnZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0di10aXRsZVwiPlxuICAgICAgPHA+JHtzaG93Lm5hbWV9PC9wPlxuICAgICAgPHA+PGkgY2xhc3M9XCJmYXMgZmEtdGh1bWJzLXVwXCIgaWQ9XCJsaWtlcy1idG5cIiBkYXRhLWlkPSR7c2hvdy5pZH0+PC9pPjxzcGFuICBkYXRhLWlkPSR7c2hvdy5pZH0gY2xhc3M9XCJsaWtlcy1udW1cIj4ke2xpa2VzTnVtfTwvc3Bhbj4gbGlrZXM8L3A+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gY29tbWVudC1idG5cIiBkYXRhLWlkPSR7c2hvdy5pZH0+Q29tbWVudHM8L2J1dHRvbj5cbiAgPC9saT5cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gKHR5cGUsIGNvdW50ID0gNSkgPT4gYFxuICA8aDE+VGl0bGUgJHt0eXBlfTogVFYgU2hvd3MoJHtjb3VudH0pPC9oMT5cbmA7XG4iLCIvKipcbiAqIEBjbGFzcyBGZXRjaFdyYXBwZXIgLSBjbGFzcyB0byBoYW5kbGUgZmV0Y2ggbWV0aG9kc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaFdyYXBwZXIge1xuICBjb25zdHJ1Y3RvcihiYXNlVVJMKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gYmFzZVVSTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0IC0gaW1wbGVtZW50cyB0aGUgZmV0Y2ggZ2V0IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBiYXNlVVJMIHRvIGZvcm0gY29tcGxldGUgdXJsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gdGhlIFByb21pc2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBhc3luYyBnZXQoZW5kcG9pbnQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuYmFzZVVSTCArIGVuZHBvaW50KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwb3N0IC0gaW1wbGVtZW50cyB0aGUgZmV0Y2ggcG9zdCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBiZSBhdHRhY2hlZCB0byB0aGUgYmFzZVVSTCB0byBmb3JtIGNvbXBsZXRlIHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIHRoZSBkYXRhIG9iamVjdCB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgUHJvbWlzZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIGFzeW5jIHBvc3QoZW5kcG9pbnQsIGRhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuYmFzZVVSTCArIGVuZHBvaW50LCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2Uub2s7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcbmltcG9ydCB7IExpc3QsIEhlYWRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMuanMnO1xuaW1wb3J0IExpa2VzIGZyb20gJy4vbGlrZXMuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBIZWxwZXIgLSB0aGUgaGVscGVyIGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4gIHN0YXRpYyAjdHZBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL2FwaS50dm1hemUuY29tLycpO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEhhbmRsZXIgLSBoYW5kbGVzIHRoZSByZWZyZXNoIGJ1dHRvbiBjbGljayBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEhhbmRsZXIoaW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBIZWxwZXIuI3R2QVBJLmdldChgc2VhcmNoL3Nob3dzP3E9JHtpbnB1dH1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluZm8oaW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBIZWxwZXIuI3R2QVBJLmdldChgc2hvd3MvJHtpbnB1dH1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kIC0gZGlzcGxheXMgdGhlIHJlc3VsdCBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCAtIHRoZSBzZWFyY2ggaW5wdXRcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXlEYXRhKGlucHV0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEhlbHBlci5nZXRIYW5kbGVyKGlucHV0KTtcbiAgICAgIFV0aWxzLnJlbmRlckhlYWRpbmcoaW5wdXQsIEhlYWRpbmcsIFV0aWxzLmdldENvdW50KHJlc3VsdCkpO1xuICAgICAgYXdhaXQgVXRpbHMucmVuZGVyKHJlc3VsdCwgTGlzdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGluc3RhbmNlIG1ldGhvZCAtIGhhbmRsZXMgdGhlIHNlYXJjaCBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgYXN5bmMgc2VhcmNoSGFuZGxlcihlLCBoYW5kbGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykudmFsdWUudHJpbSgpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBIZWxwZXIuZGlzcGxheURhdGEodmFsdWUpO1xuICAgICAgaGFuZGxlKCk7XG4gICAgICBhd2FpdCBVdGlscy5wb3B1bGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gdGhlIGV2ZW50IE9iamVjdFxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgTGlrZUhhbmRsZXIoZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3QgZWxlbSA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgYXdhaXQgTGlrZXMucG9zdExpa2VzKGRhdGEpO1xuICAgIExpa2VzLnVwZGF0ZUxpa2VzKGRhdGEsIGVsZW0pO1xuICAgIFV0aWxzLmFkZENsYXNzKHRhcmdldCwgJ2xpa2UtYW5pbWF0ZScpO1xuICB9XG5cbiAgLy8gc3RhdGljIGFzeW5jIENvbW1lbnRzKGlkLCBuYW1lLCBjb21tZW50KXtcblxuICAvLyAgY29uc3QgaWRzID1cbiAgLy8gfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBGZXRjaFdyYXBwZXIgZnJvbSAnLi9mZXRjaFdyYXBwZXIuanMnO1xuLyoqXG4gKiBAY2xhc3MgTGlrZXMgLSBoYW5kbGVzIGFsbCBsaWtlcyByZWxhdGVkIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZXMge1xuICBzdGF0aWMgI0FQSSA9IG5ldyBGZXRjaFdyYXBwZXIoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nKTtcblxuICBzdGF0aWMgI2FwcElEID0gJ3JkNjR4S09QWHhHRm1Qcmo4cFV0JztcblxuICAvKipcbiAgICogQGluc3RhbmNlIG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0wIC0gdGhlIGlkIG9mIHRoZSBpdGVtXG4gICAqIEByZXR1cm5zIC0gdGhlIHNlcnZlciByZXNwb25zZVxuICAgKiBAbWVtYmVyb2YgTGlrZXNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBwb3N0TGlrZXMoeyBpZCB9ID0ge30pIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpa2VzLiNBUEkucG9zdChgYXBwcy8ke0xpa2VzLiNhcHBJRH0vbGlrZXMvYCwgZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEByZXR1cm5zIC0gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKiBAbWVtYmVyb2YgTGlrZXNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRMaWtlc0FsbCgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpa2VzLiNBUEkuZ2V0KGBhcHBzLyR7TGlrZXMuI2FwcElEfS9saWtlcy9gKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtMCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKiBAcmV0dXJucyAtIHRoZSBudW1iZXIgb2YgbGlrZXNcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0TGlrZXNPbmUoaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc0FsbCgpO1xuICAgIGNvbnN0IHsgbGlrZXMgfSA9IGF3YWl0IHJlc3VsdC5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGlkKSA/PyB7IGxpa2VzOiAwIH07XG4gICAgcmV0dXJuIGxpa2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnN0YW5jZSBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtMCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKiBAcGFyYW0ge0hUTUwgRWxlbWVudH0gZWxlbSAtIHRoZSBlbGVtZW50IHRvIHVwZGF0ZSBpdHMgbGlrZXNcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgdXBkYXRlTGlrZXMoeyBpZCB9ID0ge30sIGVsZW0pIHtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IExpa2VzLmdldExpa2VzT25lKGlkKTtcbiAgICBlbGVtLmlubmVySFRNTCA9IGxpa2VzO1xuICB9XG59IiwiaW1wb3J0IExpa2VzIGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vY29tbWVudC5qcyc7XG4vKipcbiAqIEBjbGFzcyBVdGlscyAtIHRoZSB1dGlsaXR5IGNsYXNzIHRvIGhvbGQgYWxsIHV0aWx0aXR5IGZ1bmN0aW9uYWxpdHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbmRlciAtIGhhbmRsZXMgdGhlIHJlbmRlcmluZyBvZiB0aGUgc2VydmVyIHJlc3BvbnNlIG9uIHRoZSBET01cbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIHRoZSBhcnJheSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIHN0YXRpYyBhc3luYyByZW5kZXIoZGF0YSA9IFtdLCBsaXN0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RzLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IGRhdGEubWFwKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGxpc3QocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSkuam9pbignJyk7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2QgLSByZW5kZXJzIHRoZSBoZWFkaW5nXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gdGhlIHR5cGUgb2Ygc2VhcmNoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhlYWRpbmcgLSByZXR1cm5zIHRoZSBoZWFkaW5nIGNvbXBvbmVudFxuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyByZW5kZXJIZWFkaW5nKHR5cGUsIGhlYWRpbmcsIGxlbikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkaW5nLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IGhlYWRpbmcodHlwZS50b1VwcGVyQ2FzZSgpLCBsZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgLSB0aGUgZGF0YSBhcnJheSBnb3R0ZW4gZnJvbSB0aGUgc2VydmVyXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBsZW5ndGggb2YgdGhlIEFycmF5XG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGdldENvdW50KGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHJldHVybnMgLSB0aGUgYXJyYXkgb2YgaXRlbXNcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZGlzcGxheUxpa2VzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IExpa2VzLmdldExpa2VzQWxsKCk7XG4gICAgcmV0dXJuIHJlcy5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kc1xuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBwb3B1bGF0ZSgpIHtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IFV0aWxzLmRpc3BsYXlMaWtlcygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1udW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGxpa2VzLmZpbmQoKGRhdGEpID0+IGRhdGEuaXRlbV9pZCA9PT0gaXRlbS5kYXRhc2V0LmlkKTtcbiAgICAgIGl0ZW0uaW5uZXJIVE1MID0gaWQ/Lmxpa2VzID8/IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IGVsZW0gLSB0aGUgZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIHR5cGUgb2YgY2xhc3NcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgYWRkQ2xhc3MoZWxlbSwgdHlwZSkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh0eXBlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZSh0eXBlKSwgODAwKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkaXNwbGF5Q29tbWVudHMoaWQpIHtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBDb21tZW50cy5nZXRDb21tZW50T25lKGlkKTtcbiAgICByZXR1cm4gYW5zLm1hcCgoaXRlbSkgPT4gaXRlbSk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBJY29uIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9kb3dubG9hZF8xMjAyNjIucG5nJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9jb21wb25lbnRzLmpzJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXIuanMnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vY29tbWVudC5qcyc7XG5cbmNvbnN0IGhlbHBlciA9IG5ldyBIZWxwZXIoKTtcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaWtlcy1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIZWxwZXIuTGlrZUhhbmRsZXIpO1xuICB9KTtcbn1cblxuY29uc3QgaWNvbnMgPSBuZXcgSW1hZ2UoKTtcbmljb25zLnNyYyA9IEljb247XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5pbm5lckhUTUwgPSBOYXYoKTtcbiAgYXdhaXQgSGVscGVyLmRpc3BsYXlEYXRhKCdhJyk7XG4gIGF3YWl0IFV0aWxzLnBvcHVsYXRlKCk7XG4gIGhhbmRsZUNsaWNrKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGhlbHBlci5zZWFyY2hIYW5kbGVyKGUsIGhhbmRsZUNsaWNrKTtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpO1xuICBidXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIEhlbHBlci5nZXRJbmZvKGFyZ3MpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCJcIiBjbGFzcz1cIm1haW4taW1nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3dubG9hZC1idG5cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+RG93bmxvYWQgPGkgY2xhc3M9XCJmYXMgZmEtZG93bmxvYWRcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxoMz4ke2RhdGEubmFtZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBnZW5yZVwiPlxuICAgICAgICAgICAgICA8cD5HZW5yZTogPHNwYW4gY2xhc3M9XCJkLWJvbGRcIj4ke2RhdGEuZ2VucmVzfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgIDxwPlllYXI6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhLmVuZGVkID8/ICd1bmtub3duJ308L3NwYW4+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5TdW1tYXJ5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+JHtkYXRhPy5zdW1tYXJ5Py5zbGljZSgwLCAyMDApID8/ICdicmllZid9Li4uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGdlbnJlXCI+XG4gICAgICAgICAgICAgIDxwPkxhbmd1YWdlOiA8c3BhbiBjbGFzcz1cImQtYm9sZFwiPiR7ZGF0YS5sYW5ndWFnZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8cD5SYXRpbmc6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhLnJhdGluZy5hdmVyYWdlID8/ICd1bmtub3duJ308L3NwYW4+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD5QcmVtZWlyZWQ6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhLnByZW1pZXJlZH08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtc2VjdGlvblwiPlxuICAgICAgICAgIDxoMz5Db21tZW50czwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtZGlzcGxheVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+QWRkIE5ldyBDb21tZW50PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIiBjbGFzcz1cImZsZXggZGlyZWN0aW9uXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIG1heGxlbmd0aD1cIjUwMFwiIHBsYWNlaG9sZGVyPVwiWW91ciBJbnNpZ2h0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiYWRkaW5nXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgICAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1kaXNwbGF5Jyk7XG5cbiAgICAgICAgICBVdGlscy5kaXNwbGF5Q29tbWVudHMoYXJncylcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tbWVudGluZycpO1xuICAgICAgICAgICAgICAgIG5leHQuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiZGF0ZVwiPiR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfTwvcD48cD4ke2VsZW1lbnQudXNlcm5hbWV9IDogJHtlbGVtZW50LmNvbW1lbnR9PC9wPmA7XG4gICAgICAgICAgICAgICAgc3BhY2UuYXBwZW5kKG5leHQpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICAgICAgICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkaW5nJyk7XG5cbiAgICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZm9ybXMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XG4gICAgICAgICAgICBpZiAoKG5hbWUudmFsdWUgIT09ICcnKSAmJiAoc2NvcmUudmFsdWUgIT09ICcnKSkge1xuICAgICAgICAgICAgICBDb21tZW50cy5wb3N0Q29tbWVudChhcmdzLCBuYW1lLnZhbHVlLCBzY29yZS52YWx1ZSlcbiAgICAgICAgICAgICAgICAudGhlbigpO1xuICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIG5leHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50aW5nJyk7XG4gICAgICAgICAgICAgIG5leHQuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiZGF0ZVwiPjAzLzExLzIwMjE8L3A+PHA+JHtuYW1lLnZhbHVlfTogJHtzY29yZS52YWx1ZX08L3A+YDtcbiAgICAgICAgICAgICAgc3BhY2UuYXBwZW5kKG5leHQpO1xuXG4gICAgICAgICAgICAgIGZvcm1zLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9