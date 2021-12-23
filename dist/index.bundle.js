/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/modal.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/modal.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n/* Pop Up Section */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: var(--primary-color-4);\n  padding: 0 85px;\n  backdrop-filter: blur(8px);\n}\n\n.section {\n  width: 80%;\n  position: relative;\n  border-radius: 1%;\n  font-family: var(--font-2);\n  background: var(--white);\n  padding: 5px 15px 5px 20px;\n  margin: 20px auto;\n  color: var(--secondary-color-3);\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.d-bold {\n  font-weight: bold;\n}\n\n.flex {\n  display: flex;\n}\n\n.direction {\n  flex-direction: column;\n}\n\n.close {\n  display: flex;\n  justify-content: flex-end;\n  color: var(--primary-color-1);\n  font-size: 35px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: var(--accent-color-1);\n}\n\n.top-section {\n  display: flex;\n  justify-content: space-between;\n  height: min-content;\n}\n\n.img-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 32%;\n}\n\n.details {\n  width: 65%;\n  margin-bottom: 50px;\n}\n\n.main-img {\n  width: 100%;\n  border: 4px solid white;\n  border-radius: 3%;\n  height: 73%;\n}\n\ndiv.download-btn {\n  background: var(--primary-color-3);\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 8px 5px;\n  margin-top: 5px;\n}\n\ndiv.download-btn > button {\n  border-radius: 2px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  cursor: pointer;\n  padding: 12px;\n  width: 95%;\n  font-family: var(--font-2);\n}\n\ndiv.download-btn > button:focus {\n  background: var(--accent-color-4);\n}\n\ndiv.download-btn > button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\ndiv.download-btn > button img {\n  width: 7%;\n}\n\n.details h3 {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.details p {\n  font-size: 1rem;\n  color: var(--secondary-color-4);\n}\n\n.details div.d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.details div.genre {\n  padding: 15px 50px 15px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary {\n  margin: 5px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary > p {\n  padding: 3px 50px 0 0;\n  line-height: 1.5rem;\n  color: var(--secondary-color-4);\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -20px;\n}\n\n.comment-section > h3 {\n  font-size: 1.8rem;\n}\n\n#form {\n  padding-top: 0.8%;\n  width: 35%;\n}\n\n.comment-display {\n  margin: 5px 0 20px;\n  width: 50%;\n}\n\n.commenting {\n  padding: 2%;\n  font-size: 1rem;\n  border-left: solid 5px var(--accent-color-1);\n  margin-top: 5px;\n  background: var(--neutral-color-1);\n  width: 100%;\n}\n\n.commenting > p:nth-of-type(2) {\n  font-size: 0.9rem;\n  padding-top: 5px;\n}\n\n.commenting p.date {\n  font-size: 0.7rem;\n}\n\n#form > input,\n#form > textarea {\n  border: solid 2px var(--secondary-color-4);\n  padding: 10px;\n  font: var(--font-2);\n  margin: 10px 0 0;\n  border-radius: 10% 10% 0 0;\n}\n\n#form > input:focus,\n#form > textarea:focus {\n  border: solid 2px var(--accent-color-1);\n  outline: none;\n}\n\nbutton#adding {\n  margin: 20px 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nbutton#adding:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nbutton#adding:focus {\n  background: var(--accent-color-4);\n}\n\n.like-animate {\n  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  color: #f1c215;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-22 13:31:16\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation scale-up-center\n * ----------------------------------------\n */\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/CSS/modal.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAEhD,mBAAmB;AACnB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,cAAc;EACd,wCAAwC;EACxC,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,iBAAiB;EACjB,+BAA+B;EAC/B,8EAA8E;EAC9E,sEAAsE;AACxE;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,uFAAuF;AACzF;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,eAAe;EACf,4CAA4C;EAC5C,eAAe;EACf,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,0CAA0C;EAC1C,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;;EAEE,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,eAAe;EACf,0BAA0B;EAC1B,iDAAiD;EACjD,yCAAyC;EACzC,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,uFAAuF;AACzF;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gFAAgF;EAChF,wEAAwE;EACxE,cAAc;AAChB;;AAEA;;;;;mDAKmD;;AAEnD;;;;EAIE;AACF;EACE;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;AACF","sourcesContent":["/* stylelint-disable no-descending-specificity */\n\n/* Pop Up Section */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: var(--primary-color-4);\n  padding: 0 85px;\n  backdrop-filter: blur(8px);\n}\n\n.section {\n  width: 80%;\n  position: relative;\n  border-radius: 1%;\n  font-family: var(--font-2);\n  background: var(--white);\n  padding: 5px 15px 5px 20px;\n  margin: 20px auto;\n  color: var(--secondary-color-3);\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.d-bold {\n  font-weight: bold;\n}\n\n.flex {\n  display: flex;\n}\n\n.direction {\n  flex-direction: column;\n}\n\n.close {\n  display: flex;\n  justify-content: flex-end;\n  color: var(--primary-color-1);\n  font-size: 35px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: var(--accent-color-1);\n}\n\n.top-section {\n  display: flex;\n  justify-content: space-between;\n  height: min-content;\n}\n\n.img-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 32%;\n}\n\n.details {\n  width: 65%;\n  margin-bottom: 50px;\n}\n\n.main-img {\n  width: 100%;\n  border: 4px solid white;\n  border-radius: 3%;\n  height: 73%;\n}\n\ndiv.download-btn {\n  background: var(--primary-color-3);\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 8px 5px;\n  margin-top: 5px;\n}\n\ndiv.download-btn > button {\n  border-radius: 2px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  cursor: pointer;\n  padding: 12px;\n  width: 95%;\n  font-family: var(--font-2);\n}\n\ndiv.download-btn > button:focus {\n  background: var(--accent-color-4);\n}\n\ndiv.download-btn > button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\ndiv.download-btn > button img {\n  width: 7%;\n}\n\n.details h3 {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.details p {\n  font-size: 1rem;\n  color: var(--secondary-color-4);\n}\n\n.details div.d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.details div.genre {\n  padding: 15px 50px 15px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary {\n  margin: 5px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary > p {\n  padding: 3px 50px 0 0;\n  line-height: 1.5rem;\n  color: var(--secondary-color-4);\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -20px;\n}\n\n.comment-section > h3 {\n  font-size: 1.8rem;\n}\n\n#form {\n  padding-top: 0.8%;\n  width: 35%;\n}\n\n.comment-display {\n  margin: 5px 0 20px;\n  width: 50%;\n}\n\n.commenting {\n  padding: 2%;\n  font-size: 1rem;\n  border-left: solid 5px var(--accent-color-1);\n  margin-top: 5px;\n  background: var(--neutral-color-1);\n  width: 100%;\n}\n\n.commenting > p:nth-of-type(2) {\n  font-size: 0.9rem;\n  padding-top: 5px;\n}\n\n.commenting p.date {\n  font-size: 0.7rem;\n}\n\n#form > input,\n#form > textarea {\n  border: solid 2px var(--secondary-color-4);\n  padding: 10px;\n  font: var(--font-2);\n  margin: 10px 0 0;\n  border-radius: 10% 10% 0 0;\n}\n\n#form > input:focus,\n#form > textarea:focus {\n  border: solid 2px var(--accent-color-1);\n  outline: none;\n}\n\nbutton#adding {\n  margin: 20px 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nbutton#adding:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nbutton#adding:focus {\n  background: var(--accent-color-4);\n}\n\n.like-animate {\n  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  color: #f1c215;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-22 13:31:16\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation scale-up-center\n * ----------------------------------------\n */\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/modal.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: var(--secondary-color-4);\n}\n\nul.container > li .show-img img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nul.container > li .show-img img:hover {\n  transform: scale(1.04, 1.04);\n  cursor: pointer;\n  transition: transform ease-out 1s 0.1s;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-2);\n  color: var(--secondary-color-3);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n}\n\n@media (max-width: 992px) {\n  header > nav,\n  main {\n    padding: 0 50px;\n  }\n\n  nav > ul > li {\n    font-size: 0.8rem;\n    margin: 0 5px 0 10px;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n  }\n\n  .comment-display {\n    width: 80%;\n  }\n\n  nav > .logo img {\n    width: 80%;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.6rem;\n  }\n\n  footer {\n    padding: 20px;\n    font-size: 0.7rem;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  header > nav {\n    padding: 0 10px;\n    flex-direction: column;\n  }\n\n  header > nav > ul {\n    display: none;\n  }\n\n  nav > .logo img {\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  nav .form-container {\n    margin: 0;\n  }\n\n  main {\n    padding: 0 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.5rem;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n    padding: 5px;\n    margin: 10px auto;\n  }\n\n  div.download-btn > button {\n    padding: 10px 5px;\n  }\n\n  .details {\n    margin: 0 0 25px 5px;\n  }\n\n  .details p {\n    font-size: 0.8rem;\n  }\n\n  .details div.genre {\n    padding: 5px 0;\n  }\n\n  .details div.genre > p:nth-of-type(1) {\n    padding-bottom: 5px;\n  }\n\n  .details div.summary > p {\n    padding-right: 5px;\n  }\n\n  .comment-section > h3 {\n    font-size: 1rem;\n    margin: 30px 0 10px;\n  }\n\n  .comment-display {\n    width: 95%;\n  }\n\n  #form {\n    width: 83%;\n  }\n\n  #form > input,\n  #form > textarea {\n    font-size: 0.8rem;\n  }\n\n  .img-section {\n    width: 46%;\n  }\n\n  .details h3 {\n    font-size: 1.2rem;\n  }\n\n  .details div.d-flex {\n    flex-direction: column;\n  }\n\n  footer {\n    padding: 15px;\n    font-size: 0.6rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/CSS/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');\n@import url('./modal.css');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: var(--secondary-color-4);\n}\n\nul.container > li .show-img img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nul.container > li .show-img img:hover {\n  transform: scale(1.04, 1.04);\n  cursor: pointer;\n  transition: transform ease-out 1s 0.1s;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-2);\n  color: var(--secondary-color-3);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n}\n\n@media (max-width: 992px) {\n  header > nav,\n  main {\n    padding: 0 50px;\n  }\n\n  nav > ul > li {\n    font-size: 0.8rem;\n    margin: 0 5px 0 10px;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n  }\n\n  .comment-display {\n    width: 80%;\n  }\n\n  nav > .logo img {\n    width: 80%;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.6rem;\n  }\n\n  footer {\n    padding: 20px;\n    font-size: 0.7rem;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  header > nav {\n    padding: 0 10px;\n    flex-direction: column;\n  }\n\n  header > nav > ul {\n    display: none;\n  }\n\n  nav > .logo img {\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  nav .form-container {\n    margin: 0;\n  }\n\n  main {\n    padding: 0 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.5rem;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n    padding: 5px;\n    margin: 10px auto;\n  }\n\n  div.download-btn > button {\n    padding: 10px 5px;\n  }\n\n  .details {\n    margin: 0 0 25px 5px;\n  }\n\n  .details p {\n    font-size: 0.8rem;\n  }\n\n  .details div.genre {\n    padding: 5px 0;\n  }\n\n  .details div.genre > p:nth-of-type(1) {\n    padding-bottom: 5px;\n  }\n\n  .details div.summary > p {\n    padding-right: 5px;\n  }\n\n  .comment-section > h3 {\n    font-size: 1rem;\n    margin: 30px 0 10px;\n  }\n\n  .comment-display {\n    width: 95%;\n  }\n\n  #form {\n    width: 83%;\n  }\n\n  #form > input,\n  #form > textarea {\n    font-size: 0.8rem;\n  }\n\n  .img-section {\n    width: 46%;\n  }\n\n  .details h3 {\n    font-size: 1.2rem;\n  }\n\n  .details div.d-flex {\n    flex-direction: column;\n  }\n\n  footer {\n    padding: 15px;\n    font-size: 0.6rem;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/CSS/style.css":
/*!**********************************!*\
  !*** ./src/assets/CSS/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/JS_Modules/comment.js":
/*!***********************************!*\
  !*** ./src/JS_Modules/comment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/JS_Modules/fetchWrapper.js");


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

/***/ "./src/JS_Modules/components.js":
/*!**************************************!*\
  !*** ./src/JS_Modules/components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": () => (/* binding */ Nav),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Heading": () => (/* binding */ Heading),
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "Comment": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _assets_images_mAZEFLIX_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/mAZEFLIX.gif */ "./src/assets/images/mAZEFLIX.gif");


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

const Modal = (data) => `
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
  <div class="comment-display"></div>
  <div>
    <h4>Add New Comment</h4>
  </div>
  <form id="form" class="flex direction">
    <input type="text" id="name" placeholder="Your Name">
    <textarea id="comment" maxlength="500" placeholder="Your Insight"></textarea>
    <button type="submit" id="adding">Submit</button>
  </form>
</div>
</div>
`;

const Comment = (item) => `
  <div class="commenting">
    <p class="date">${item.creation_date}</p>
    <p>${item.username} : ${item.comment}</p>
  </div>
`;

/***/ }),

/***/ "./src/JS_Modules/fetchWrapper.js":
/*!****************************************!*\
  !*** ./src/JS_Modules/fetchWrapper.js ***!
  \****************************************/
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

/***/ "./src/JS_Modules/helper.js":
/*!**********************************!*\
  !*** ./src/JS_Modules/helper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/JS_Modules/utils.js");
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/JS_Modules/fetchWrapper.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/JS_Modules/components.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ "./src/JS_Modules/likes.js");
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
      Helper.handleComments();
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

  static handleComments() {
    const buttons = document.querySelectorAll('.comment-btn');
    const modal = document.querySelector('.modal');
    buttons.forEach((element) => {
      element.addEventListener('click', async (e) => {
        const args = e.target.getAttribute('data-id');
        const data = await Helper.getInfo(args);
        modal.style.display = 'block';
        modal.innerHTML = (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.Modal)(data);

        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].display(args);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleClose(modal);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleForm(args);
      });
    });
  }
}

/***/ }),

/***/ "./src/JS_Modules/likes.js":
/*!*********************************!*\
  !*** ./src/JS_Modules/likes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Likes)
/* harmony export */ });
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/JS_Modules/fetchWrapper.js");
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

/***/ "./src/JS_Modules/utils.js":
/*!*********************************!*\
  !*** ./src/JS_Modules/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ "./src/JS_Modules/likes.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ "./src/JS_Modules/comment.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/JS_Modules/components.js");




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
    return data.length ?? 0;
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

  static async getComments(id) {
    const ans = await _comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCommentOne(id);
    return ans.map((item) => item);
  }

  static async display(args) {
    const data = await Utils.getComments(args);
    const space = document.querySelector('.comment-display');
    const title = document.querySelector('.comment-section h3');
    let count = 0;
    count = Utils.getCount(data);
    title.innerHTML = `<h3>Comment(${count})</h3>`;
    space.innerHTML = data.map((item) => (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.Comment)(item)).join('');
  }

  static handleClose(modal) {
    const span = document.querySelector('.close');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.innerHTML = '';
    });
  }

  static handleForm(args) {
    const forms = document.getElementById('form');
    forms.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const comment = document.getElementById('comment');
      if ((name.value !== '') && (comment.value !== '')) {
        await _comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].postComment(args, name.value, comment.value);
        Utils.display(args);
        forms.reset();
      }
    });
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
/* harmony import */ var _assets_CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/CSS/style.css */ "./src/assets/CSS/style.css");
/* harmony import */ var _JS_Modules_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS_Modules/components.js */ "./src/JS_Modules/components.js");
/* harmony import */ var _JS_Modules_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS_Modules/helper.js */ "./src/JS_Modules/helper.js");
/* harmony import */ var _JS_Modules_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JS_Modules/utils.js */ "./src/JS_Modules/utils.js");





const helper = new _JS_Modules_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

function handleClick() {
  document.querySelectorAll('#likes-btn').forEach((btn) => {
    btn.addEventListener('click', _JS_Modules_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].LikeHandler);
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('header').innerHTML = (0,_JS_Modules_components_js__WEBPACK_IMPORTED_MODULE_1__.Nav)();
  await _JS_Modules_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayData('a');
  await _JS_Modules_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].populate();
  handleClick();
  document.querySelector('form').addEventListener('submit', (e) => {
    helper.searchHandler(e, handleClick);
  });
  _JS_Modules_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleComments();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0RBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmdDO0FBQ2lCO0FBQ0w7QUFDRjs7QUFFMUMsbUJBQW1CLDZEQUFNOztBQUV6QjtBQUNBO0FBQ0Esa0NBQWtDLHlFQUFrQjtBQUNwRCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSwrQ0FBK0MsOERBQUc7QUFDbEQsUUFBUSx5RUFBa0I7QUFDMUIsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw0RUFBcUI7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hemVmbGl4Ly4vc3JjL2Fzc2V0cy9DU1MvbW9kYWwuY3NzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL2Fzc2V0cy9DU1Mvc3R5bGUuY3NzIiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL2Fzc2V0cy9DU1Mvc3R5bGUuY3NzPzlmNzciLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9KU19Nb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvSlNfTW9kdWxlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL0pTX01vZHVsZXMvZmV0Y2hXcmFwcGVyLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL0pTX01vZHVsZXMvaGVscGVyLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL0pTX01vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvSlNfTW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuXFxuLyogUG9wIFVwIFNlY3Rpb24gKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItNCk7XFxuICBwYWRkaW5nOiAwIDg1cHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDElO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxufVxcblxcbi5kLWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXJlY3Rpb24ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG59XFxuXFxuLnRvcC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaW1nLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMyJTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5tYWluLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBoZWlnaHQ6IDczJTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTMpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b24gaW1nIHtcXG4gIHdpZHRoOiA3JTtcXG59XFxuXFxuLmRldGFpbHMgaDMge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGV0YWlscyBwIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRldGFpbHMgZGl2LmdlbnJlIHtcXG4gIHBhZGRpbmc6IDE1cHggNTBweCAxNXB4IDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuc3VtbWFyeSB7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LnN1bW1hcnkgPiBwIHtcXG4gIHBhZGRpbmc6IDNweCA1MHB4IDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uID4gaDMge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbiNmb3JtIHtcXG4gIHBhZGRpbmctdG9wOiAwLjglO1xcbiAgd2lkdGg6IDM1JTtcXG59XFxuXFxuLmNvbW1lbnQtZGlzcGxheSB7XFxuICBtYXJnaW46IDVweCAwIDIwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY29tbWVudGluZyB7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tbWVudGluZyA+IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4uY29tbWVudGluZyBwLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbiNmb3JtID4gaW5wdXQsXFxuI2Zvcm0gPiB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udDogdmFyKC0tZm9udC0yKTtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlIDAgMDtcXG59XFxuXFxuI2Zvcm0gPiBpbnB1dDpmb2N1cyxcXG4jZm9ybSA+IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiNhZGRpbmcge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbmJ1dHRvbiNhZGRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5idXR0b24jYWRkaW5nOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxuLmxpa2UtYW5pbWF0ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuOHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuOHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGNvbG9yOiAjZjFjMjE1O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMTItMjIgMTM6MzE6MTZcXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXFxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKipcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogYW5pbWF0aW9uIHNjYWxlLXVwLWNlbnRlclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvQ1NTL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnREFB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bURBS21EOztBQUVuRDs7OztFQUlFO0FBQ0Y7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcblxcbi8qIFBvcCBVcCBTZWN0aW9uICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTQpO1xcbiAgcGFkZGluZzogMCA4NXB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAxJTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDIwcHg7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbn1cXG5cXG4uZC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlyZWN0aW9uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxufVxcblxcbi50b3Atc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmltZy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMiU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgaGVpZ2h0OiA3MyU7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0zKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItNCk7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uIGltZyB7XFxuICB3aWR0aDogNyU7XFxufVxcblxcbi5kZXRhaWxzIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRldGFpbHMgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXRhaWxzIGRpdi5nZW5yZSB7XFxuICBwYWRkaW5nOiAxNXB4IDUwcHggMTVweCAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LnN1bW1hcnkge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5zdW1tYXJ5ID4gcCB7XFxuICBwYWRkaW5nOiAzcHggNTBweCAwIDA7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4jZm9ybSB7XFxuICBwYWRkaW5nLXRvcDogMC44JTtcXG4gIHdpZHRoOiAzNSU7XFxufVxcblxcbi5jb21tZW50LWRpc3BsYXkge1xcbiAgbWFyZ2luOiA1cHggMCAyMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbW1lbnRpbmcge1xcbiAgcGFkZGluZzogMiU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItbGVmdDogc29saWQgNXB4IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnRpbmcgPiBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLmNvbW1lbnRpbmcgcC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4jZm9ybSA+IGlucHV0LFxcbiNmb3JtID4gdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQ6IHZhcigtLWZvbnQtMik7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlIDEwJSAwIDA7XFxufVxcblxcbiNmb3JtID4gaW5wdXQ6Zm9jdXMsXFxuI2Zvcm0gPiB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b24jYWRkaW5nIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG5idXR0b24jYWRkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxuYnV0dG9uI2FkZGluZzpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItNCk7XFxufVxcblxcbi5saWtlLWFuaW1hdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBjb2xvcjogI2YxYzIxNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTEyLTIyIDEzOjMxOjE2XFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxcbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyoqXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIGFuaW1hdGlvbiBzY2FsZS11cC1jZW50ZXJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZmYW1pbHk9U29yYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcblxcbi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvci0xOiAjZjg1ZjY4O1xcbiAgLS1wcmltYXJ5LWNvbG9yLTI6ICNmNTMwM2Q7XFxuICAtLXByaW1hcnktY29sb3ItMzogI2Y3YzNjNjtcXG4gIC0tcHJpbWFyeS1jb2xvci00OiAjYWMxMjFhNDE7XFxuICAtLWFjY2VudC1jb2xvci0xOiAjNmVhZmFiO1xcbiAgLS1hY2NlbnQtY29sb3ItMjogI2I1ZWJlNztcXG4gIC0tYWNjZW50LWNvbG9yLTM6ICM1NjdhNzk7XFxuICAtLWFjY2VudC1jb2xvci00OiAjNDc2NDYzO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMTogIzMyMjgzMTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTI6ICM1ZjRkNWQ7XFxuICAtLXNlY29uZGFyeS1jb2xvci0zOiAjMmEzNzdmO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItNDogIzI2MmQ1YTtcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjZGZkZmRlO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udC0xOiAnTG9yYScsIHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtMjogJ1NvcmEnLCBzZXJpZjtcXG4gIC0tc2hhZG93LTE6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIgPiBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubmF2ID4gLmxvZ28ge1xcbiAgd2lkdGg6IDE4JTtcXG59XFxuXFxubmF2ID4gLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udDogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbm5hdiA+IHVsID4gbGkgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG5uYXYgdWwgbGkgYS5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTWFpbiBTZWN0aW9uICovXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE1MHB4O1xcbn1cXG5cXG5tYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDMwcHggMCA0MHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG59XFxuXFxubWFpbiA+IHVsLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDEpIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgyKSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgyKSBpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC5zaG93LWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAuc2hvdy1pbWcgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCwgMS4wNCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMXMgMC4xcztcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgYnV0dG9uIHtcXG4gIG1hcmdpbjogMzBweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW46IDVweCA1cHggNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMjVweDtcXG59XFxuXFxubWFpbiB1bC5jb250YWluZXIgPiBsaSBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG5tYWluIHVsLmNvbnRhaW5lciA+IGxpIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbm5hdiBkaXYuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbn1cXG5cXG5uYXYgZGl2LmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUtZm9yZXZlciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41JSAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlIDAgMDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgaGVhZGVyID4gbmF2LFxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXG4gIH1cXG5cXG4gIG5hdiA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtZGlzcGxheSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICBuYXYgPiAubG9nbyBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICB9XFxuXFxuICBtYWluID4gdWwuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICB9XFxuXFxuICBtYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBoZWFkZXIgPiBuYXYge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBoZWFkZXIgPiBuYXYgPiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYgPiAubG9nbyBpbWcge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gIH1cXG5cXG4gIG1haW4gPiB1bC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgbmF2IC5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICB9XFxuXFxuICBtYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gIH1cXG5cXG4gIGRpdi5kb3dubG9hZC1idG4gPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIHtcXG4gICAgbWFyZ2luOiAwIDAgMjVweCA1cHg7XFxuICB9XFxuXFxuICAuZGV0YWlscyBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZ2VucmUge1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGRpdi5nZW5yZSA+IHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LnN1bW1hcnkgPiBwIHtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtc2VjdGlvbiA+IGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDMwcHggMCAxMHB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtZGlzcGxheSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAjZm9ybSB7XFxuICAgIHdpZHRoOiA4MyU7XFxuICB9XFxuXFxuICAjZm9ybSA+IGlucHV0LFxcbiAgI2Zvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgLmltZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDQ2JTtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZC1mbGV4IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL0NTUy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0RBQWdEOztBQUVoRCx1QkFBdUI7O0FBSXZCLGlCQUFpQjtBQUNqQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VB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Q1o7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG5cXG4vKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZmYW1pbHk9U29yYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJy4vbW9kYWwuY3NzJyk7XFxuXFxuLyogUmVzZXQgU3R5bGVzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yLTE6ICNmODVmNjg7XFxuICAtLXByaW1hcnktY29sb3ItMjogI2Y1MzAzZDtcXG4gIC0tcHJpbWFyeS1jb2xvci0zOiAjZjdjM2M2O1xcbiAgLS1wcmltYXJ5LWNvbG9yLTQ6ICNhYzEyMWE0MTtcXG4gIC0tYWNjZW50LWNvbG9yLTE6ICM2ZWFmYWI7XFxuICAtLWFjY2VudC1jb2xvci0yOiAjYjVlYmU3O1xcbiAgLS1hY2NlbnQtY29sb3ItMzogIzU2N2E3OTtcXG4gIC0tYWNjZW50LWNvbG9yLTQ6ICM0NzY0NjM7XFxuICAtLXNlY29uZGFyeS1jb2xvci0xOiAjMzIyODMxO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMjogIzVmNGQ1ZDtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTM6ICMyYTM3N2Y7XFxuICAtLXNlY29uZGFyeS1jb2xvci00OiAjMjYyZDVhO1xcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICNkZmRmZGU7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1mb250LTE6ICdMb3JhJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC0yOiAnU29yYScsIHNlcmlmO1xcbiAgLS1zaGFkb3ctMTogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciA+IG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5uYXYgPiAubG9nbyB7XFxuICB3aWR0aDogMTglO1xcbn1cXG5cXG5uYXYgPiAubG9nbyBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMnB4IDVweCAycHggMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5uYXYgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2ID4gdWwgPiBsaSB7XFxuICBtYXJnaW46IDAgMjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubmF2ID4gdWwgPiBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbm5hdiB1bCBsaSBhLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBNYWluIFNlY3Rpb24gKi9cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDAgMTUwcHg7XFxufVxcblxcbm1haW4gLmhlYWRpbmctY29udGFpbmVyIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMzBweCAwIDQwcHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG5tYWluID4gdWwuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgyKSBpIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnNob3ctaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC5zaG93LWltZyBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0LCAxLjA0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCAxcyAwLjFzO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSBidXR0b24ge1xcbiAgbWFyZ2luOiAzMHB4IDAgMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAxNSUgMCAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4IDVweCA1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAyNXB4O1xcbn1cXG5cXG5tYWluIHVsLmNvbnRhaW5lciA+IGxpIGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItNCk7XFxufVxcblxcbm1haW4gdWwuY29udGFpbmVyID4gbGkgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxubmF2IGRpdi5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxufVxcblxcbm5hdiBkaXYuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogRm9vdGVyIFNlY3Rpb24gKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxLjUlIDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLTIpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJSAxMCUgMCAwO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICBoZWFkZXIgPiBuYXYsXFxuICBtYWluIHtcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcbiAgfVxcblxcbiAgbmF2ID4gdWwgPiBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW46IDAgNXB4IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAuY29tbWVudC1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIG5hdiA+IC5sb2dvIGltZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gIH1cXG5cXG4gIG1haW4gPiB1bC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMzBweDtcXG4gIH1cXG5cXG4gIG1haW4gLmhlYWRpbmctY29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIGhlYWRlciA+IG5hdiB7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGhlYWRlciA+IG5hdiA+IHVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIG5hdiA+IC5sb2dvIGltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgfVxcblxcbiAgbWFpbiA+IHVsLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICB9XFxuXFxuICBuYXYgLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXG4gIH1cXG5cXG4gIG1haW4gLmhlYWRpbmctY29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgfVxcblxcbiAgZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgfVxcblxcbiAgLmRldGFpbHMge1xcbiAgICBtYXJnaW46IDAgMCAyNXB4IDVweDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIHAge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGRpdi5nZW5yZSB7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LmdlbnJlID4gcDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuc3VtbWFyeSA+IHAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICAuY29tbWVudC1zZWN0aW9uID4gaDMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMzBweCAwIDEwcHg7XFxuICB9XFxuXFxuICAuY29tbWVudC1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gICNmb3JtIHtcXG4gICAgd2lkdGg6IDgzJTtcXG4gIH1cXG5cXG4gICNmb3JtID4gaW5wdXQsXFxuICAjZm9ybSA+IHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAuaW1nLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogNDYlO1xcbiAgfVxcblxcbiAgLmRldGFpbHMgaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGRpdi5kLWZsZXgge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEZldGNoV3JhcHBlciBmcm9tICcuL2ZldGNoV3JhcHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuICBzdGF0aWMgI0FQSSA9IG5ldyBGZXRjaFdyYXBwZXIoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nKTtcblxuICBzdGF0aWMgI2FwcElEID0gJ3JkNjR4S09QWHhHRm1Qcmo4cFV0JztcblxuICBzdGF0aWMgYXN5bmMgcG9zdENvbW1lbnQoaWQsIG5hbWUsIGNvbW1lbnQpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ29tbWVudC4jQVBJLnBvc3QoYGFwcHMvJHtDb21tZW50LiNhcHBJRH0vY29tbWVudHNgLCBkYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q29tbWVudE9uZShpZCkge1xuICAgIGNvbnN0IG5leHQgPSBhd2FpdCBDb21tZW50LiNBUEkuZ2V0KGBhcHBzLyR7Q29tbWVudC4jYXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tQVpFRkxJWC5naWYnO1xuXG5leHBvcnQgY29uc3QgTmF2ID0gKCkgPT4gYFxuICA8bmF2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICA8aW1nIHNyYz0ke0xvZ299IGFsdD1cInNpdGUgbG9nb1wiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInNlYXJjaFwiIGlkPVwic2VhcmNoXCIvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWJ0blwiPlNlYXJjaCA8c3BhbiBjbGFzcz1cInNwaW5uZXJcIj48L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpbmtzIGFjdGl2ZVwiIGRhdGEtY29udGVudD1cIiNib29rc1wiPlRWIFNob3dzPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbiAgYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSAoeyBzaG93IH0gPSB7fSwgbGlrZXNOdW0gPSAwKSA9PiBgXG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2hvdy1pbWdcIj5cbiAgICAgIDxpbWcgc3JjPSR7c2hvdy5pbWFnZS5tZWRpdW19IGFsdD1cInNob3cgaW1hZ2VcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHYtdGl0bGVcIj5cbiAgICAgIDxwPiR7c2hvdy5uYW1lfTwvcD5cbiAgICAgIDxwPjxpIGNsYXNzPVwiZmFzIGZhLXRodW1icy11cFwiIGlkPVwibGlrZXMtYnRuXCIgZGF0YS1pZD0ke3Nob3cuaWR9PjwvaT48c3BhbiAgZGF0YS1pZD0ke3Nob3cuaWR9IGNsYXNzPVwibGlrZXMtbnVtXCI+JHtsaWtlc051bX08L3NwYW4+IGxpa2VzPC9wPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGNvbW1lbnQtYnRuXCIgZGF0YS1pZD0ke3Nob3cuaWR9PkNvbW1lbnRzPC9idXR0b24+XG4gIDwvbGk+XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGluZyA9ICh0eXBlLCBjb3VudCA9IDUpID0+IGBcbiAgPGgxPlRpdGxlICR7dHlwZX06IFRWIFNob3dzKCR7Y291bnR9KTwvaDE+XG5gO1xuXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoZGF0YSkgPT4gYFxuPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbjxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuPGRpdiBjbGFzcz1cInRvcC1zZWN0aW9uXCI+XG48ZGl2IGNsYXNzPVwiaW1nLXNlY3Rpb25cIj5cbiAgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlwiIGNsYXNzPVwibWFpbi1pbWdcIj5cbiAgPGRpdiBjbGFzcz1cImRvd25sb2FkLWJ0blwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Eb3dubG9hZCA8aSBjbGFzcz1cImZhcyBmYS1kb3dubG9hZFwiPjwvaT48L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG48aDM+JHtkYXRhLm5hbWV9PC9oMz5cbjxkaXYgY2xhc3M9XCJkLWZsZXggZ2VucmVcIj5cbiAgPHA+R2VucmU6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhLmdlbnJlc308L3NwYW4+PC9wPlxuICA8cD5ZZWFyOiA8c3BhbiBjbGFzcz1cImQtYm9sZFwiPiR7ZGF0YS5lbmRlZCA/PyAndW5rbm93bid9PC9zcGFuPjwvcD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cbiAgPHNwYW4+U3VtbWFyeTo8L3NwYW4+XG4gIDxwPiR7ZGF0YT8uc3VtbWFyeT8uc2xpY2UoMCwgMjAwKSA/PyAnYnJpZWYnfS4uLjwvcD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImQtZmxleCBnZW5yZVwiPlxuICA8cD5MYW5ndWFnZTogPHNwYW4gY2xhc3M9XCJkLWJvbGRcIj4ke2RhdGEubGFuZ3VhZ2V9PC9zcGFuPjwvcD5cbiAgPHA+UmF0aW5nOiA8c3BhbiBjbGFzcz1cImQtYm9sZFwiPiR7ZGF0YS5yYXRpbmcuYXZlcmFnZSA/PyAndW5rbm93bid9PC9zcGFuPjwvcD5cbjwvZGl2PlxuPHA+UHJlbWVpcmVkOiA8c3BhbiBjbGFzcz1cImQtYm9sZFwiPiR7ZGF0YS5wcmVtaWVyZWR9PC9zcGFuPjwvcD5cbjwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XG48aDM+Q29tbWVudHM8L2gzPlxuICA8ZGl2IGNsYXNzPVwiY29tbWVudC1kaXNwbGF5XCI+PC9kaXY+XG4gIDxkaXY+XG4gICAgPGg0PkFkZCBOZXcgQ29tbWVudDwvaDQ+XG4gIDwvZGl2PlxuICA8Zm9ybSBpZD1cImZvcm1cIiBjbGFzcz1cImZsZXggZGlyZWN0aW9uXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIj5cbiAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50XCIgbWF4bGVuZ3RoPVwiNTAwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEluc2lnaHRcIj48L3RleHRhcmVhPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiYWRkaW5nXCI+U3VibWl0PC9idXR0b24+XG4gIDwvZm9ybT5cbjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5leHBvcnQgY29uc3QgQ29tbWVudCA9IChpdGVtKSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJjb21tZW50aW5nXCI+XG4gICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtpdGVtLmNyZWF0aW9uX2RhdGV9PC9wPlxuICAgIDxwPiR7aXRlbS51c2VybmFtZX0gOiAke2l0ZW0uY29tbWVudH08L3A+XG4gIDwvZGl2PlxuYDsiLCIvKipcbiAqIEBjbGFzcyBGZXRjaFdyYXBwZXIgLSBjbGFzcyB0byBoYW5kbGUgZmV0Y2ggbWV0aG9kc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaFdyYXBwZXIge1xuICBjb25zdHJ1Y3RvcihiYXNlVVJMKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gYmFzZVVSTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0IC0gaW1wbGVtZW50cyB0aGUgZmV0Y2ggZ2V0IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBiYXNlVVJMIHRvIGZvcm0gY29tcGxldGUgdXJsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gdGhlIFByb21pc2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBhc3luYyBnZXQoZW5kcG9pbnQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuYmFzZVVSTCArIGVuZHBvaW50KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwb3N0IC0gaW1wbGVtZW50cyB0aGUgZmV0Y2ggcG9zdCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBiZSBhdHRhY2hlZCB0byB0aGUgYmFzZVVSTCB0byBmb3JtIGNvbXBsZXRlIHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIHRoZSBkYXRhIG9iamVjdCB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgUHJvbWlzZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIGFzeW5jIHBvc3QoZW5kcG9pbnQsIGRhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuYmFzZVVSTCArIGVuZHBvaW50LCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2Uub2s7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcbmltcG9ydCB7IExpc3QsIEhlYWRpbmcsIE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzLmpzJztcbmltcG9ydCBMaWtlcyBmcm9tICcuL2xpa2VzLmpzJztcblxuLyoqXG4gKiBAY2xhc3MgSGVscGVyIC0gdGhlIGhlbHBlciBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuICBzdGF0aWMgI3R2QVBJID0gbmV3IEZldGNoV3JhcHBlcignaHR0cHM6Ly9hcGkudHZtYXplLmNvbS8nKTtcblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRIYW5kbGVyIC0gaGFuZGxlcyB0aGUgcmVmcmVzaCBidXR0b24gY2xpY2sgZXZlbnRcbiAgICogQHBhcmFtIHtFdmVudCBPYmplY3R9IGUgLSB0aGUgZXZlbnQgb2JqZWN0XG4gICAqIEBtZW1iZXJvZiBIZWxwZXJcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRIYW5kbGVyKGlucHV0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgSGVscGVyLiN0dkFQSS5nZXQoYHNlYXJjaC9zaG93cz9xPSR7aW5wdXR9YCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbmZvKGlucHV0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgSGVscGVyLiN0dkFQSS5nZXQoYHNob3dzLyR7aW5wdXR9YCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZCAtIGRpc3BsYXlzIHRoZSByZXN1bHQgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgLSB0aGUgc2VhcmNoIGlucHV0XG4gICAqIEBtZW1iZXJvZiBIZWxwZXJcbiAgICovXG4gIHN0YXRpYyBhc3luYyBkaXNwbGF5RGF0YShpbnB1dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBIZWxwZXIuZ2V0SGFuZGxlcihpbnB1dCk7XG4gICAgICBVdGlscy5yZW5kZXJIZWFkaW5nKGlucHV0LCBIZWFkaW5nLCBVdGlscy5nZXRDb3VudChyZXN1bHQpKTtcbiAgICAgIGF3YWl0IFV0aWxzLnJlbmRlcihyZXN1bHQsIExpc3QpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpbnN0YW5jZSBtZXRob2QgLSBoYW5kbGVzIHRoZSBzZWFyY2ggZXZlbnRcbiAgICogQHBhcmFtIHtFdmVudCBPYmplY3R9IGUgLSB0aGUgZXZlbnQgb2JqZWN0XG4gICAqIEBtZW1iZXJvZiBIZWxwZXJcbiAgICovXG4gIGFzeW5jIHNlYXJjaEhhbmRsZXIoZSwgaGFuZGxlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLnZhbHVlLnRyaW0oKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgSGVscGVyLmRpc3BsYXlEYXRhKHZhbHVlKTtcbiAgICAgIGhhbmRsZSgpO1xuICAgICAgSGVscGVyLmhhbmRsZUNvbW1lbnRzKCk7XG4gICAgICBhd2FpdCBVdGlscy5wb3B1bGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gdGhlIGV2ZW50IE9iamVjdFxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgTGlrZUhhbmRsZXIoZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3QgZWxlbSA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgYXdhaXQgTGlrZXMucG9zdExpa2VzKGRhdGEpO1xuICAgIExpa2VzLnVwZGF0ZUxpa2VzKGRhdGEsIGVsZW0pO1xuICAgIFV0aWxzLmFkZENsYXNzKHRhcmdldCwgJ2xpa2UtYW5pbWF0ZScpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUNvbW1lbnRzKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEhlbHBlci5nZXRJbmZvKGFyZ3MpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gTW9kYWwoZGF0YSk7XG5cbiAgICAgICAgVXRpbHMuZGlzcGxheShhcmdzKTtcbiAgICAgICAgVXRpbHMuaGFuZGxlQ2xvc2UobW9kYWwpO1xuICAgICAgICBVdGlscy5oYW5kbGVGb3JtKGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcbi8qKlxuICogQGNsYXNzIExpa2VzIC0gaGFuZGxlcyBhbGwgbGlrZXMgcmVsYXRlZCBtZXRob2RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2VzIHtcbiAgc3RhdGljICNBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJyk7XG5cbiAgc3RhdGljICNhcHBJRCA9ICdyZDY0eEtPUFh4R0ZtUHJqOHBVdCc7XG5cbiAgLyoqXG4gICAqIEBpbnN0YW5jZSBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtMCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKiBAcmV0dXJucyAtIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgcG9zdExpa2VzKHsgaWQgfSA9IHt9KSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWtlcy4jQVBJLnBvc3QoYGFwcHMvJHtMaWtlcy4jYXBwSUR9L2xpa2VzL2AsIGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcmV0dXJucyAtIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0TGlrZXNBbGwoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWtlcy4jQVBJLmdldChgYXBwcy8ke0xpa2VzLiNhcHBJRH0vbGlrZXMvYCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbTAgLSB0aGUgaWQgb2YgdGhlIGl0ZW1cbiAgICogQHJldHVybnMgLSB0aGUgbnVtYmVyIG9mIGxpa2VzXG4gICAqIEBtZW1iZXJvZiBMaWtlc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldExpa2VzT25lKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTGlrZXMuZ2V0TGlrZXNBbGwoKTtcbiAgICBjb25zdCB7IGxpa2VzIH0gPSBhd2FpdCByZXN1bHQuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBpZCkgPz8geyBsaWtlczogMCB9O1xuICAgIHJldHVybiBsaWtlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5zdGFuY2UgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbTAgLSB0aGUgaWQgb2YgdGhlIGl0ZW1cbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IGVsZW0gLSB0aGUgZWxlbWVudCB0byB1cGRhdGUgaXRzIGxpa2VzXG4gICAqIEBtZW1iZXJvZiBMaWtlc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUxpa2VzKHsgaWQgfSA9IHt9LCBlbGVtKSB7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc09uZShpZCk7XG4gICAgZWxlbS5pbm5lckhUTUwgPSBsaWtlcztcbiAgfVxufSIsImltcG9ydCBMaWtlcyBmcm9tICcuL2xpa2VzLmpzJztcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbW1lbnQuanMnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vY29tcG9uZW50cy5qcyc7XG5cbi8qKlxuICogQGNsYXNzIFV0aWxzIC0gdGhlIHV0aWxpdHkgY2xhc3MgdG8gaG9sZCBhbGwgdXRpbHRpdHkgZnVuY3Rpb25hbGl0eVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcmVuZGVyIC0gaGFuZGxlcyB0aGUgcmVuZGVyaW5nIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2Ugb24gdGhlIERPTVxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gdGhlIGFycmF5IHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIHJlbmRlcihkYXRhID0gW10sIGxpc3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdHMtY29udGFpbmVyJykuaW5uZXJIVE1MID0gZGF0YS5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gbGlzdChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZCAtIHJlbmRlcnMgdGhlIGhlYWRpbmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSB0aGUgdHlwZSBvZiBzZWFyY2hcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGVhZGluZyAtIHJldHVybnMgdGhlIGhlYWRpbmcgY29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIHJlbmRlckhlYWRpbmcodHlwZSwgaGVhZGluZywgbGVuKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmctY29udGFpbmVyJykuaW5uZXJIVE1MID0gaGVhZGluZyh0eXBlLnRvVXBwZXJDYXNlKCksIGxlbik7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIHRoZSBkYXRhIGFycmF5IGdvdHRlbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybnMge051bWJlcn0gdGhlIGxlbmd0aCBvZiB0aGUgQXJyYXlcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgZ2V0Q291bnQoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLmxlbmd0aCA/PyAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEByZXR1cm5zIC0gdGhlIGFycmF5IG9mIGl0ZW1zXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXlMaWtlcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc0FsbCgpO1xuICAgIHJldHVybiByZXMubWFwKChpdGVtKSA9PiBpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZHNcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgcG9wdWxhdGUoKSB7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBVdGlscy5kaXNwbGF5TGlrZXMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtbnVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaWtlcy5maW5kKChkYXRhKSA9PiBkYXRhLml0ZW1faWQgPT09IGl0ZW0uZGF0YXNldC5pZCk7XG4gICAgICBpdGVtLmlubmVySFRNTCA9IGlkPy5saWtlcyA/PyAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSBlbGVtIC0gdGhlIGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSB0eXBlIG9mIGNsYXNzXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFkZENsYXNzKGVsZW0sIHR5cGUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQodHlwZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUodHlwZSksIDgwMCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q29tbWVudHMoaWQpIHtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBDb21tZW50cy5nZXRDb21tZW50T25lKGlkKTtcbiAgICByZXR1cm4gYW5zLm1hcCgoaXRlbSkgPT4gaXRlbSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZGlzcGxheShhcmdzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFV0aWxzLmdldENvbW1lbnRzKGFyZ3MpO1xuICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZGlzcGxheScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtc2VjdGlvbiBoMycpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgPSBVdGlscy5nZXRDb3VudChkYXRhKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgPGgzPkNvbW1lbnQoJHtjb3VudH0pPC9oMz5gO1xuICAgIHNwYWNlLmlubmVySFRNTCA9IGRhdGEubWFwKChpdGVtKSA9PiBDb21tZW50KGl0ZW0pKS5qb2luKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVDbG9zZShtb2RhbCkge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUZvcm0oYXJncykge1xuICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICBmb3Jtcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKTtcbiAgICAgIGlmICgobmFtZS52YWx1ZSAhPT0gJycpICYmIChjb21tZW50LnZhbHVlICE9PSAnJykpIHtcbiAgICAgICAgYXdhaXQgQ29tbWVudHMucG9zdENvbW1lbnQoYXJncywgbmFtZS52YWx1ZSwgY29tbWVudC52YWx1ZSk7XG4gICAgICAgIFV0aWxzLmRpc3BsYXkoYXJncyk7XG4gICAgICAgIGZvcm1zLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Fzc2V0cy9DU1Mvc3R5bGUuY3NzJztcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vSlNfTW9kdWxlcy9jb21wb25lbnRzLmpzJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9KU19Nb2R1bGVzL2hlbHBlci5qcyc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9KU19Nb2R1bGVzL3V0aWxzLmpzJztcblxuY29uc3QgaGVscGVyID0gbmV3IEhlbHBlcigpO1xuXG5mdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpa2VzLWJ0bicpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEhlbHBlci5MaWtlSGFuZGxlcik7XG4gIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuaW5uZXJIVE1MID0gTmF2KCk7XG4gIGF3YWl0IEhlbHBlci5kaXNwbGF5RGF0YSgnYScpO1xuICBhd2FpdCBVdGlscy5wb3B1bGF0ZSgpO1xuICBoYW5kbGVDbGljaygpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBoZWxwZXIuc2VhcmNoSGFuZGxlcihlLCBoYW5kbGVDbGljayk7XG4gIH0pO1xuICBIZWxwZXIuaGFuZGxlQ29tbWVudHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9