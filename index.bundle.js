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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: var(--secondary-color-4);\n}\n\nul.container > li .show-img > img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nul.container > li .show-img img:hover {\n  transform: scale(1.04, 1.04);\n  cursor: pointer;\n  transition: transform ease-out 1s 0.1s;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\nimg.badge {\n  width: 40px;\n  position: absolute;\n  top: -5px;\n  right: -18px;\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-2);\n  color: var(--secondary-color-3);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n}\n\n@media (max-width: 992px) {\n  header > nav,\n  main {\n    padding: 0 50px;\n  }\n\n  nav > ul > li {\n    font-size: 0.8rem;\n    margin: 0 5px 0 10px;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n  }\n\n  .comment-display {\n    width: 80%;\n  }\n\n  nav > .logo img {\n    width: 80%;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.6rem;\n  }\n\n  footer {\n    padding: 20px;\n    font-size: 0.7rem;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  header > nav {\n    padding: 0 10px;\n    flex-direction: column;\n  }\n\n  header > nav > ul {\n    display: none;\n  }\n\n  nav > .logo img {\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  nav .form-container {\n    margin: 0;\n  }\n\n  main {\n    padding: 0 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.5rem;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n    padding: 5px;\n    margin: 10px auto;\n  }\n\n  div.download-btn > button {\n    padding: 10px 5px;\n  }\n\n  .details {\n    margin: 0 0 25px 5px;\n  }\n\n  .details p {\n    font-size: 0.8rem;\n  }\n\n  .details div.genre {\n    padding: 5px 0;\n  }\n\n  .details div.genre > p:nth-of-type(1) {\n    padding-bottom: 5px;\n  }\n\n  .details div.summary > p {\n    padding-right: 5px;\n  }\n\n  .comment-section > h3 {\n    font-size: 1rem;\n    margin: 30px 0 10px;\n  }\n\n  .comment-display {\n    width: 95%;\n  }\n\n  #form {\n    width: 83%;\n  }\n\n  #form > input,\n  #form > textarea {\n    font-size: 0.8rem;\n  }\n\n  .img-section {\n    width: 46%;\n  }\n\n  .details h3 {\n    font-size: 1.2rem;\n  }\n\n  .details div.d-flex {\n    flex-direction: column;\n  }\n\n  footer {\n    padding: 15px;\n    font-size: 0.6rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/CSS/style.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAEhD,uBAAuB;;AAIvB,iBAAiB;AACjB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,4BAA4B;EAC5B,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,4BAA4B;EAC5B,0BAA0B;EAC1B,aAAa;EACb,4BAA4B;EAC5B,uBAAuB;EACvB,iDAAiD;AACnD;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,kBAAkB;AAClB;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;EAC/B,iDAAiD;EACjD,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,iDAAiD;EACjD,8EAA8E;EAC9E,sEAAsE;AACxE;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,eAAe;EACf,0BAA0B;EAC1B,iDAAiD;EACjD,yCAAyC;EACzC,eAAe;EACf,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,iBAAiB;EACjB,kBAAkB;EAClB,iDAAiD;EACjD,yCAAyC;EACzC,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,uFAAuF;AACzF;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,uCAAuC;EACvC,+BAA+B;EAC/B,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE;;IAEE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,8BAA8B;IAC9B,SAAS;EACX;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,eAAe;IACf,sBAAsB;EACxB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,0BAA0B;IAC1B,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;;IAEE,iBAAiB;EACnB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,iBAAiB;EACnB;AACF","sourcesContent":["/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');\n@import url('./modal.css');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: var(--secondary-color-4);\n}\n\nul.container > li .show-img > img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nul.container > li .show-img img:hover {\n  transform: scale(1.04, 1.04);\n  cursor: pointer;\n  transition: transform ease-out 1s 0.1s;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\nimg.badge {\n  width: 40px;\n  position: absolute;\n  top: -5px;\n  right: -18px;\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-2);\n  color: var(--secondary-color-3);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n}\n\n@media (max-width: 992px) {\n  header > nav,\n  main {\n    padding: 0 50px;\n  }\n\n  nav > ul > li {\n    font-size: 0.8rem;\n    margin: 0 5px 0 10px;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n  }\n\n  .comment-display {\n    width: 80%;\n  }\n\n  nav > .logo img {\n    width: 80%;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.6rem;\n  }\n\n  footer {\n    padding: 20px;\n    font-size: 0.7rem;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  header > nav {\n    padding: 0 10px;\n    flex-direction: column;\n  }\n\n  header > nav > ul {\n    display: none;\n  }\n\n  nav > .logo img {\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  nav .form-container {\n    margin: 0;\n  }\n\n  main {\n    padding: 0 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.5rem;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n    padding: 5px;\n    margin: 10px auto;\n  }\n\n  div.download-btn > button {\n    padding: 10px 5px;\n  }\n\n  .details {\n    margin: 0 0 25px 5px;\n  }\n\n  .details p {\n    font-size: 0.8rem;\n  }\n\n  .details div.genre {\n    padding: 5px 0;\n  }\n\n  .details div.genre > p:nth-of-type(1) {\n    padding-bottom: 5px;\n  }\n\n  .details div.summary > p {\n    padding-right: 5px;\n  }\n\n  .comment-section > h3 {\n    font-size: 1rem;\n    margin: 30px 0 10px;\n  }\n\n  .comment-display {\n    width: 95%;\n  }\n\n  #form {\n    width: 83%;\n  }\n\n  #form > input,\n  #form > textarea {\n    font-size: 0.8rem;\n  }\n\n  .img-section {\n    width: 46%;\n  }\n\n  .details h3 {\n    font-size: 1.2rem;\n  }\n\n  .details div.d-flex {\n    flex-direction: column;\n  }\n\n  footer {\n    padding: 15px;\n    font-size: 0.6rem;\n  }\n}\n"],"sourceRoot":""}]);
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

  /**
   * @static method
   * @param {String} id - The unique identifier
   * @param {String} name - the name of the user
   * @param {String} comment - the comment of the user
   * @returns {Boolean}
   * @memberof Comment
   */
  static async postComment(id, name, comment) {
    const data = {
      item_id: id,
      username: name,
      comment,
    };
    const response = await Comment.#API.post(`apps/${Comment.#appID}/comments`, data);
    return response;
  }

  /**
   * @static method
   * @param {String} id - the unique identifier
   * @returns {Array}
   * @memberof Comment
   */
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
/* harmony import */ var _assets_images_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/icon.svg */ "./src/assets/images/icon.svg");



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
      <div>
      <img src=${_assets_images_icon_svg__WEBPACK_IMPORTED_MODULE_1__} class="badge"/>
      </div>
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
<h3>Comments(0)</h3>
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

  /**
   * @static method
   * @param {String} input - search string
   * @returns {Object}
   * @memberof Helper
   */
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

  /**
   * @static method
   * @memberof Helper
   */
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
  static getCount(data = []) {
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

  /**
   * @static method
   * @param {Number} id - the comment id
   * @returns {Array}
   * @memberof Utils
   */
  static async getComments(id) {
    const ans = await _comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCommentOne(id);
    return ans.error ? [] : ans.map((item) => item);
  }

  /**
   * @static method
   * @param {Number} id - the comment id
   * @memberof Utils
   */
  static async display(id) {
    const data = await Utils.getComments(id);
    const space = document.querySelector('.comment-display');
    const title = document.querySelector('.comment-section h3');
    const count = Utils.getCount(data);
    title.innerHTML = `Comments(${count})`;
    space.innerHTML = data.map((item) => (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.Comment)(item)).join('');
  }

  /**
   * @static method
   * @param {HTMLELement} modal - the modal element
   * @memberof Utils
   */
  static handleClose(modal) {
    const span = document.querySelector('.close');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.innerHTML = '';
    });
  }

  /**
   * @static method
   * @param {Number} id - the comment id
   * @memberof Utils
   */
  static handleForm(id) {
    const forms = document.getElementById('form');
    forms.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const comment = document.getElementById('comment');
      if ((name.value !== '') && (comment.value !== '')) {
        await _comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].postComment(id, name.value, comment.value);
        Utils.display(id);
        forms.reset();
      }
    });
  }
}


/***/ }),

/***/ "./src/assets/images/icon.svg":
/*!************************************!*\
  !*** ./src/assets/images/icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e20108945415bfbd1000.svg";

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





// Create an instance of the Helper class
const helper = new _JS_Modules_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

// function to handle click
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxL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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZnQztBQUNpQjtBQUNMO0FBQ0Y7O0FBRTFDO0FBQ0EsbUJBQW1CLDZEQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MseUVBQWtCO0FBQ3BELEdBQUc7QUFDSDs7QUFFQTtBQUNBLCtDQUErQyw4REFBRztBQUNsRCxRQUFRLHlFQUFrQjtBQUMxQixRQUFRLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDRFQUFxQjtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvYXNzZXRzL0NTUy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvYXNzZXRzL0NTUy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvYXNzZXRzL0NTUy9zdHlsZS5jc3M/OWY3NyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL0pTX01vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9KU19Nb2R1bGVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvSlNfTW9kdWxlcy9mZXRjaFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvSlNfTW9kdWxlcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvSlNfTW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9KU19Nb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG5cXG4vKiBQb3AgVXAgU2VjdGlvbiAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogNTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci00KTtcXG4gIHBhZGRpbmc6IDAgODVweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICB3aWR0aDogODAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMSU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG59XFxuXFxuLmQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpcmVjdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci0xKTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbn1cXG5cXG4udG9wLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5pbWctc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzIlO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1haW4taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGhlaWdodDogNzMlO1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMyk7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbiBpbWcge1xcbiAgd2lkdGg6IDclO1xcbn1cXG5cXG4uZGV0YWlscyBoMyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZXRhaWxzIHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuZ2VucmUge1xcbiAgcGFkZGluZzogMTVweCA1MHB4IDE1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5zdW1tYXJ5IHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuc3VtbWFyeSA+IHAge1xcbiAgcGFkZGluZzogM3B4IDUwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24gPiBoMyB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgcGFkZGluZy10b3A6IDAuOCU7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4uY29tbWVudC1kaXNwbGF5IHtcXG4gIG1hcmdpbjogNXB4IDAgMjBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb21tZW50aW5nIHtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50aW5nID4gcDpudGgtb2YtdHlwZSgyKSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5jb21tZW50aW5nIHAuZGF0ZSB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuI2Zvcm0gPiBpbnB1dCxcXG4jZm9ybSA+IHRleHRhcmVhIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250OiB2YXIoLS1mb250LTIpO1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJSAxMCUgMCAwO1xcbn1cXG5cXG4jZm9ybSA+IGlucHV0OmZvY3VzLFxcbiNmb3JtID4gdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uI2FkZGluZyB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAxNSUgMCAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuYnV0dG9uI2FkZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbmJ1dHRvbiNhZGRpbmc6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG4ubGlrZS1hbmltYXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC44cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC44cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgY29sb3I6ICNmMWMyMTU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMi0yMiAxMzozMToxNlxcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qKlxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBhbmltYXRpb24gc2NhbGUtdXAtY2VudGVyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9DU1MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdEQUFnRDs7QUFFaEQsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsOEVBQThFO0VBQzlFLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUZBQXVGO0FBQ3pGOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsdUNBQXVDO0VBQ3ZDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixpREFBaUQ7RUFDakQseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUZBQXVGO0FBQ3pGOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0ZBQWdGO0VBQ2hGLHdFQUF3RTtFQUN4RSxjQUFjO0FBQ2hCOztBQUVBOzs7OzttREFLbUQ7O0FBRW5EOzs7O0VBSUU7QUFDRjtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuXFxuLyogUG9wIFVwIFNlY3Rpb24gKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItNCk7XFxuICBwYWRkaW5nOiAwIDg1cHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDElO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxufVxcblxcbi5kLWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXJlY3Rpb24ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG59XFxuXFxuLnRvcC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaW1nLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMyJTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5tYWluLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBoZWlnaHQ6IDczJTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTMpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBidXR0b24gaW1nIHtcXG4gIHdpZHRoOiA3JTtcXG59XFxuXFxuLmRldGFpbHMgaDMge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGV0YWlscyBwIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRldGFpbHMgZGl2LmdlbnJlIHtcXG4gIHBhZGRpbmc6IDE1cHggNTBweCAxNXB4IDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuc3VtbWFyeSB7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LnN1bW1hcnkgPiBwIHtcXG4gIHBhZGRpbmc6IDNweCA1MHB4IDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uID4gaDMge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbiNmb3JtIHtcXG4gIHBhZGRpbmctdG9wOiAwLjglO1xcbiAgd2lkdGg6IDM1JTtcXG59XFxuXFxuLmNvbW1lbnQtZGlzcGxheSB7XFxuICBtYXJnaW46IDVweCAwIDIwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY29tbWVudGluZyB7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tbWVudGluZyA+IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4uY29tbWVudGluZyBwLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbiNmb3JtID4gaW5wdXQsXFxuI2Zvcm0gPiB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udDogdmFyKC0tZm9udC0yKTtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlIDAgMDtcXG59XFxuXFxuI2Zvcm0gPiBpbnB1dDpmb2N1cyxcXG4jZm9ybSA+IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiNhZGRpbmcge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbmJ1dHRvbiNhZGRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5idXR0b24jYWRkaW5nOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxuLmxpa2UtYW5pbWF0ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuOHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuOHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGNvbG9yOiAjZjFjMjE1O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMTItMjIgMTM6MzE6MTZcXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXFxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKipcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogYW5pbWF0aW9uIHNjYWxlLXVwLWNlbnRlclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmZhbWlseT1Tb3JhOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuXFxuLyogR29vZ2xlIGZvbnQgaW1wb3J0ICovXFxuXFxuLyogUmVzZXQgU3R5bGVzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yLTE6ICNmODVmNjg7XFxuICAtLXByaW1hcnktY29sb3ItMjogI2Y1MzAzZDtcXG4gIC0tcHJpbWFyeS1jb2xvci0zOiAjZjdjM2M2O1xcbiAgLS1wcmltYXJ5LWNvbG9yLTQ6ICNhYzEyMWE0MTtcXG4gIC0tYWNjZW50LWNvbG9yLTE6ICM2ZWFmYWI7XFxuICAtLWFjY2VudC1jb2xvci0yOiAjYjVlYmU3O1xcbiAgLS1hY2NlbnQtY29sb3ItMzogIzU2N2E3OTtcXG4gIC0tYWNjZW50LWNvbG9yLTQ6ICM0NzY0NjM7XFxuICAtLXNlY29uZGFyeS1jb2xvci0xOiAjMzIyODMxO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMjogIzVmNGQ1ZDtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTM6ICMyYTM3N2Y7XFxuICAtLXNlY29uZGFyeS1jb2xvci00OiAjMjYyZDVhO1xcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICNkZmRmZGU7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1mb250LTE6ICdMb3JhJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC0yOiAnU29yYScsIHNlcmlmO1xcbiAgLS1zaGFkb3ctMTogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciA+IG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5uYXYgPiAubG9nbyB7XFxuICB3aWR0aDogMTglO1xcbn1cXG5cXG5uYXYgPiAubG9nbyBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMnB4IDVweCAycHggMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5uYXYgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2ID4gdWwgPiBsaSB7XFxuICBtYXJnaW46IDAgMjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubmF2ID4gdWwgPiBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbm5hdiB1bCBsaSBhLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBNYWluIFNlY3Rpb24gKi9cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDAgMTUwcHg7XFxufVxcblxcbm1haW4gLmhlYWRpbmctY29udGFpbmVyIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMzBweCAwIDQwcHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG5tYWluID4gdWwuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgyKSBpIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnNob3ctaW1nID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnNob3ctaW1nIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQsIDEuMDQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDFzIDAuMXM7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIGJ1dHRvbiB7XFxuICBtYXJnaW46IDMwcHggMCAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b24ge1xcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogOHB4IDI1cHg7XFxufVxcblxcbm1haW4gdWwuY29udGFpbmVyID4gbGkgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxubWFpbiB1bC5jb250YWluZXIgPiBsaSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5uYXYgZGl2LmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG59XFxuXFxubmF2IGRpdi5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5pbWcuYmFkZ2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICByaWdodDogLTE4cHg7XFxufVxcblxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41JSAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlIDAgMDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgaGVhZGVyID4gbmF2LFxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXG4gIH1cXG5cXG4gIG5hdiA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtZGlzcGxheSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICBuYXYgPiAubG9nbyBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICB9XFxuXFxuICBtYWluID4gdWwuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICB9XFxuXFxuICBtYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBoZWFkZXIgPiBuYXYge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBoZWFkZXIgPiBuYXYgPiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYgPiAubG9nbyBpbWcge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gIH1cXG5cXG4gIG1haW4gPiB1bC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgbmF2IC5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICB9XFxuXFxuICBtYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gIH1cXG5cXG4gIGRpdi5kb3dubG9hZC1idG4gPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIHtcXG4gICAgbWFyZ2luOiAwIDAgMjVweCA1cHg7XFxuICB9XFxuXFxuICAuZGV0YWlscyBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZ2VucmUge1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGRpdi5nZW5yZSA+IHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LnN1bW1hcnkgPiBwIHtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtc2VjdGlvbiA+IGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDMwcHggMCAxMHB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtZGlzcGxheSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAjZm9ybSB7XFxuICAgIHdpZHRoOiA4MyU7XFxuICB9XFxuXFxuICAjZm9ybSA+IGlucHV0LFxcbiAgI2Zvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgLmltZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDQ2JTtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZC1mbGV4IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL0NTUy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0RBQWdEOztBQUVoRCx1QkFBdUI7O0FBSXZCLGlCQUFpQjtBQUNqQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixpREFBaUQ7QUFDbkQ7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztBQUNi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SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsU0FBUztFQUNYOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG5cXG4vKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZmYW1pbHk9U29yYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJy4vbW9kYWwuY3NzJyk7XFxuXFxuLyogUmVzZXQgU3R5bGVzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yLTE6ICNmODVmNjg7XFxuICAtLXByaW1hcnktY29sb3ItMjogI2Y1MzAzZDtcXG4gIC0tcHJpbWFyeS1jb2xvci0zOiAjZjdjM2M2O1xcbiAgLS1wcmltYXJ5LWNvbG9yLTQ6ICNhYzEyMWE0MTtcXG4gIC0tYWNjZW50LWNvbG9yLTE6ICM2ZWFmYWI7XFxuICAtLWFjY2VudC1jb2xvci0yOiAjYjVlYmU3O1xcbiAgLS1hY2NlbnQtY29sb3ItMzogIzU2N2E3OTtcXG4gIC0tYWNjZW50LWNvbG9yLTQ6ICM0NzY0NjM7XFxuICAtLXNlY29uZGFyeS1jb2xvci0xOiAjMzIyODMxO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMjogIzVmNGQ1ZDtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTM6ICMyYTM3N2Y7XFxuICAtLXNlY29uZGFyeS1jb2xvci00OiAjMjYyZDVhO1xcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICNkZmRmZGU7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1mb250LTE6ICdMb3JhJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC0yOiAnU29yYScsIHNlcmlmO1xcbiAgLS1zaGFkb3ctMTogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciA+IG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5uYXYgPiAubG9nbyB7XFxuICB3aWR0aDogMTglO1xcbn1cXG5cXG5uYXYgPiAubG9nbyBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMnB4IDVweCAycHggMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbn1cXG5cXG5uYXYgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2ID4gdWwgPiBsaSB7XFxuICBtYXJnaW46IDAgMjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubmF2ID4gdWwgPiBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbm5hdiB1bCBsaSBhLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBNYWluIFNlY3Rpb24gKi9cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDAgMTUwcHg7XFxufVxcblxcbm1haW4gLmhlYWRpbmctY29udGFpbmVyIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMzBweCAwIDQwcHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG5tYWluID4gdWwuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgyKSBpIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnNob3ctaW1nID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnNob3ctaW1nIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQsIDEuMDQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDFzIDAuMXM7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIGJ1dHRvbiB7XFxuICBtYXJnaW46IDMwcHggMCAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b24ge1xcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogOHB4IDI1cHg7XFxufVxcblxcbm1haW4gdWwuY29udGFpbmVyID4gbGkgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxubWFpbiB1bC5jb250YWluZXIgPiBsaSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5uYXYgZGl2LmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG59XFxuXFxubmF2IGRpdi5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5pbWcuYmFkZ2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICByaWdodDogLTE4cHg7XFxufVxcblxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41JSAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlIDAgMDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgaGVhZGVyID4gbmF2LFxcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXG4gIH1cXG5cXG4gIG5hdiA+IHVsID4gbGkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtZGlzcGxheSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICBuYXYgPiAubG9nbyBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICB9XFxuXFxuICBtYWluID4gdWwuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICB9XFxuXFxuICBtYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBoZWFkZXIgPiBuYXYge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBoZWFkZXIgPiBuYXYgPiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYgPiAubG9nbyBpbWcge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gIH1cXG5cXG4gIG1haW4gPiB1bC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgbmF2IC5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICB9XFxuXFxuICBtYWluIC5oZWFkaW5nLWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gIH1cXG5cXG4gIGRpdi5kb3dubG9hZC1idG4gPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIHtcXG4gICAgbWFyZ2luOiAwIDAgMjVweCA1cHg7XFxuICB9XFxuXFxuICAuZGV0YWlscyBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZ2VucmUge1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGRpdi5nZW5yZSA+IHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LnN1bW1hcnkgPiBwIHtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtc2VjdGlvbiA+IGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDMwcHggMCAxMHB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtZGlzcGxheSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAjZm9ybSB7XFxuICAgIHdpZHRoOiA4MyU7XFxuICB9XFxuXFxuICAjZm9ybSA+IGlucHV0LFxcbiAgI2Zvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgLmltZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDQ2JTtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZC1mbGV4IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBGZXRjaFdyYXBwZXIgZnJvbSAnLi9mZXRjaFdyYXBwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgc3RhdGljICNBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJyk7XG5cbiAgc3RhdGljICNhcHBJRCA9ICdyZDY0eEtPUFh4R0ZtUHJqOHBVdCc7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSB1c2VyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21tZW50IC0gdGhlIGNvbW1lbnQgb2YgdGhlIHVzZXJcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBDb21tZW50XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgcG9zdENvbW1lbnQoaWQsIG5hbWUsIGNvbW1lbnQpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENvbW1lbnQuI0FQSS5wb3N0KGBhcHBzLyR7Q29tbWVudC4jYXBwSUR9L2NvbW1lbnRzYCwgZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIHRoZSB1bmlxdWUgaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqIEBtZW1iZXJvZiBDb21tZW50XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0Q29tbWVudE9uZShpZCkge1xuICAgIGNvbnN0IG5leHQgPSBhd2FpdCBDb21tZW50LiNBUEkuZ2V0KGBhcHBzLyR7Q29tbWVudC4jYXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tQVpFRkxJWC5naWYnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBOYXYgPSAoKSA9PiBgXG4gIDxuYXY+XG4gICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgIDxpbWcgc3JjPSR7TG9nb30gYWx0PVwic2l0ZSBsb2dvXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2hcIi8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXQtYnRuXCI+U2VhcmNoIDxzcGFuIGNsYXNzPVwic3Bpbm5lclwiPjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua3MgYWN0aXZlXCIgZGF0YS1jb250ZW50PVwiI2Jvb2tzXCI+VFYgU2hvd3M8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuICBgO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9ICh7IHNob3cgfSA9IHt9LCBsaWtlc051bSA9IDApID0+IGBcbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzaG93LWltZ1wiPlxuICAgICAgPGltZyBzcmM9JHtzaG93LmltYWdlLm1lZGl1bX0gYWx0PVwic2hvdyBpbWFnZVwiPlxuICAgICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPSR7SWNvbn0gY2xhc3M9XCJiYWRnZVwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0di10aXRsZVwiPlxuICAgICAgPHA+JHtzaG93Lm5hbWV9PC9wPlxuICAgICAgPHA+PGkgY2xhc3M9XCJmYXMgZmEtdGh1bWJzLXVwXCIgaWQ9XCJsaWtlcy1idG5cIiBkYXRhLWlkPSR7c2hvdy5pZH0+PC9pPjxzcGFuICBkYXRhLWlkPSR7c2hvdy5pZH0gY2xhc3M9XCJsaWtlcy1udW1cIj4ke2xpa2VzTnVtfTwvc3Bhbj4gbGlrZXM8L3A+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gY29tbWVudC1idG5cIiBkYXRhLWlkPSR7c2hvdy5pZH0+Q29tbWVudHM8L2J1dHRvbj5cbiAgPC9saT5cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gKHR5cGUsIGNvdW50ID0gNSkgPT4gYFxuICA8aDE+VGl0bGUgJHt0eXBlfTogVFYgU2hvd3MoJHtjb3VudH0pPC9oMT5cbmA7XG5cbmV4cG9ydCBjb25zdCBNb2RhbCA9IChkYXRhKSA9PiBgXG48ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG48ZGl2IGNsYXNzPVwidG9wLXNlY3Rpb25cIj5cbjxkaXYgY2xhc3M9XCJpbWctc2VjdGlvblwiPlxuICA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiXCIgY2xhc3M9XCJtYWluLWltZ1wiPlxuICA8ZGl2IGNsYXNzPVwiZG93bmxvYWQtYnRuXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkRvd25sb2FkIDxpIGNsYXNzPVwiZmFzIGZhLWRvd25sb2FkXCI+PC9pPjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbjxoMz4ke2RhdGEubmFtZX08L2gzPlxuPGRpdiBjbGFzcz1cImQtZmxleCBnZW5yZVwiPlxuICA8cD5HZW5yZTogPHNwYW4gY2xhc3M9XCJkLWJvbGRcIj4ke2RhdGEuZ2VucmVzfTwvc3Bhbj48L3A+XG4gIDxwPlllYXI6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhLmVuZGVkID8/ICd1bmtub3duJ308L3NwYW4+PC9wPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxuICA8c3Bhbj5TdW1tYXJ5Ojwvc3Bhbj5cbiAgPHA+JHtkYXRhPy5zdW1tYXJ5Py5zbGljZSgwLCAyMDApID8/ICdicmllZid9Li4uPC9wPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGdlbnJlXCI+XG4gIDxwPkxhbmd1YWdlOiA8c3BhbiBjbGFzcz1cImQtYm9sZFwiPiR7ZGF0YS5sYW5ndWFnZX08L3NwYW4+PC9wPlxuICA8cD5SYXRpbmc6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhLnJhdGluZy5hdmVyYWdlID8/ICd1bmtub3duJ308L3NwYW4+PC9wPlxuPC9kaXY+XG48cD5QcmVtZWlyZWQ6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhLnByZW1pZXJlZH08L3NwYW4+PC9wPlxuPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb21tZW50LXNlY3Rpb25cIj5cbjxoMz5Db21tZW50cygwKTwvaDM+XG4gIDxkaXYgY2xhc3M9XCJjb21tZW50LWRpc3BsYXlcIj48L2Rpdj5cbiAgPGRpdj5cbiAgICA8aDQ+QWRkIE5ldyBDb21tZW50PC9oND5cbiAgPC9kaXY+XG4gIDxmb3JtIGlkPVwiZm9ybVwiIGNsYXNzPVwiZmxleCBkaXJlY3Rpb25cIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiPlxuICAgIDx0ZXh0YXJlYSBpZD1cImNvbW1lbnRcIiBtYXhsZW5ndGg9XCI1MDBcIiBwbGFjZWhvbGRlcj1cIllvdXIgSW5zaWdodFwiPjwvdGV4dGFyZWE+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJhZGRpbmdcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgPC9mb3JtPlxuPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBDb21tZW50ID0gKGl0ZW0pID0+IGBcbiAgPGRpdiBjbGFzcz1cImNvbW1lbnRpbmdcIj5cbiAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2l0ZW0uY3JlYXRpb25fZGF0ZX08L3A+XG4gICAgPHA+JHtpdGVtLnVzZXJuYW1lfSA6ICR7aXRlbS5jb21tZW50fTwvcD5cbiAgPC9kaXY+XG5gOyIsIi8qKlxuICogQGNsYXNzIEZldGNoV3JhcHBlciAtIGNsYXNzIHRvIGhhbmRsZSBmZXRjaCBtZXRob2RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVUkwpIHtcbiAgICB0aGlzLmJhc2VVUkwgPSBiYXNlVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXQgLSBpbXBsZW1lbnRzIHRoZSBmZXRjaCBnZXQgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGJhc2VVUkwgdG8gZm9ybSBjb21wbGV0ZSB1cmxcbiAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgUHJvbWlzZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIGFzeW5jIGdldChlbmRwb2ludCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5iYXNlVVJMICsgZW5kcG9pbnQpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHBvc3QgLSBpbXBsZW1lbnRzIHRoZSBmZXRjaCBwb3N0IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBiYXNlVVJMIHRvIGZvcm0gY29tcGxldGUgdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gdGhlIGRhdGEgb2JqZWN0IHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIHRoZSBQcm9taXNlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgYXN5bmMgcG9zdChlbmRwb2ludCwgZGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5iYXNlVVJMICsgZW5kcG9pbnQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5vaztcbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBGZXRjaFdyYXBwZXIgZnJvbSAnLi9mZXRjaFdyYXBwZXIuanMnO1xuaW1wb3J0IHsgTGlzdCwgSGVhZGluZywgTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMuanMnO1xuaW1wb3J0IExpa2VzIGZyb20gJy4vbGlrZXMuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBIZWxwZXIgLSB0aGUgaGVscGVyIGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4gIHN0YXRpYyAjdHZBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL2FwaS50dm1hemUuY29tLycpO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEhhbmRsZXIgLSBoYW5kbGVzIHRoZSByZWZyZXNoIGJ1dHRvbiBjbGljayBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEhhbmRsZXIoaW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBIZWxwZXIuI3R2QVBJLmdldChgc2VhcmNoL3Nob3dzP3E9JHtpbnB1dH1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCAtIHNlYXJjaCBzdHJpbmdcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluZm8oaW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBIZWxwZXIuI3R2QVBJLmdldChgc2hvd3MvJHtpbnB1dH1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kIC0gZGlzcGxheXMgdGhlIHJlc3VsdCBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCAtIHRoZSBzZWFyY2ggaW5wdXRcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXlEYXRhKGlucHV0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEhlbHBlci5nZXRIYW5kbGVyKGlucHV0KTtcbiAgICAgIFV0aWxzLnJlbmRlckhlYWRpbmcoaW5wdXQsIEhlYWRpbmcsIFV0aWxzLmdldENvdW50KHJlc3VsdCkpO1xuICAgICAgYXdhaXQgVXRpbHMucmVuZGVyKHJlc3VsdCwgTGlzdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGluc3RhbmNlIG1ldGhvZCAtIGhhbmRsZXMgdGhlIHNlYXJjaCBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgYXN5bmMgc2VhcmNoSGFuZGxlcihlLCBoYW5kbGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykudmFsdWUudHJpbSgpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBIZWxwZXIuZGlzcGxheURhdGEodmFsdWUpO1xuICAgICAgaGFuZGxlKCk7XG4gICAgICBIZWxwZXIuaGFuZGxlQ29tbWVudHMoKTtcbiAgICAgIGF3YWl0IFV0aWxzLnBvcHVsYXRlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtFdmVudCBPYmplY3R9IGUgLSB0aGUgZXZlbnQgT2JqZWN0XG4gICAqIEBtZW1iZXJvZiBIZWxwZXJcbiAgICovXG4gIHN0YXRpYyBhc3luYyBMaWtlSGFuZGxlcihlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGRhdGEgPSB0YXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCBlbGVtID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgICBhd2FpdCBMaWtlcy5wb3N0TGlrZXMoZGF0YSk7XG4gICAgTGlrZXMudXBkYXRlTGlrZXMoZGF0YSwgZWxlbSk7XG4gICAgVXRpbHMuYWRkQ2xhc3ModGFyZ2V0LCAnbGlrZS1hbmltYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGhhbmRsZUNvbW1lbnRzKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEhlbHBlci5nZXRJbmZvKGFyZ3MpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gTW9kYWwoZGF0YSk7XG5cbiAgICAgICAgVXRpbHMuZGlzcGxheShhcmdzKTtcbiAgICAgICAgVXRpbHMuaGFuZGxlQ2xvc2UobW9kYWwpO1xuICAgICAgICBVdGlscy5oYW5kbGVGb3JtKGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcbi8qKlxuICogQGNsYXNzIExpa2VzIC0gaGFuZGxlcyBhbGwgbGlrZXMgcmVsYXRlZCBtZXRob2RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2VzIHtcbiAgc3RhdGljICNBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJyk7XG5cbiAgc3RhdGljICNhcHBJRCA9ICdyZDY0eEtPUFh4R0ZtUHJqOHBVdCc7XG5cbiAgLyoqXG4gICAqIEBpbnN0YW5jZSBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtMCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKiBAcmV0dXJucyAtIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgcG9zdExpa2VzKHsgaWQgfSA9IHt9KSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWtlcy4jQVBJLnBvc3QoYGFwcHMvJHtMaWtlcy4jYXBwSUR9L2xpa2VzL2AsIGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcmV0dXJucyAtIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0TGlrZXNBbGwoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWtlcy4jQVBJLmdldChgYXBwcy8ke0xpa2VzLiNhcHBJRH0vbGlrZXMvYCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbTAgLSB0aGUgaWQgb2YgdGhlIGl0ZW1cbiAgICogQHJldHVybnMgLSB0aGUgbnVtYmVyIG9mIGxpa2VzXG4gICAqIEBtZW1iZXJvZiBMaWtlc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldExpa2VzT25lKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTGlrZXMuZ2V0TGlrZXNBbGwoKTtcbiAgICBjb25zdCB7IGxpa2VzIH0gPSBhd2FpdCByZXN1bHQuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBpZCkgPz8geyBsaWtlczogMCB9O1xuICAgIHJldHVybiBsaWtlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5zdGFuY2UgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbTAgLSB0aGUgaWQgb2YgdGhlIGl0ZW1cbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IGVsZW0gLSB0aGUgZWxlbWVudCB0byB1cGRhdGUgaXRzIGxpa2VzXG4gICAqIEBtZW1iZXJvZiBMaWtlc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUxpa2VzKHsgaWQgfSA9IHt9LCBlbGVtKSB7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc09uZShpZCk7XG4gICAgZWxlbS5pbm5lckhUTUwgPSBsaWtlcztcbiAgfVxufSIsImltcG9ydCBMaWtlcyBmcm9tICcuL2xpa2VzLmpzJztcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbW1lbnQuanMnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vY29tcG9uZW50cy5qcyc7XG5cbi8qKlxuICogQGNsYXNzIFV0aWxzIC0gdGhlIHV0aWxpdHkgY2xhc3MgdG8gaG9sZCBhbGwgdXRpbHRpdHkgZnVuY3Rpb25hbGl0eVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcmVuZGVyIC0gaGFuZGxlcyB0aGUgcmVuZGVyaW5nIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2Ugb24gdGhlIERPTVxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gdGhlIGFycmF5IHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIHJlbmRlcihkYXRhID0gW10sIGxpc3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdHMtY29udGFpbmVyJykuaW5uZXJIVE1MID0gZGF0YS5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gbGlzdChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZCAtIHJlbmRlcnMgdGhlIGhlYWRpbmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSB0aGUgdHlwZSBvZiBzZWFyY2hcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGVhZGluZyAtIHJldHVybnMgdGhlIGhlYWRpbmcgY29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIHJlbmRlckhlYWRpbmcodHlwZSwgaGVhZGluZywgbGVuKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmctY29udGFpbmVyJykuaW5uZXJIVE1MID0gaGVhZGluZyh0eXBlLnRvVXBwZXJDYXNlKCksIGxlbik7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIHRoZSBkYXRhIGFycmF5IGdvdHRlbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybnMge051bWJlcn0gdGhlIGxlbmd0aCBvZiB0aGUgQXJyYXlcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgZ2V0Q291bnQoZGF0YSA9IFtdKSB7XG4gICAgcmV0dXJuIGRhdGEubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEByZXR1cm5zIC0gdGhlIGFycmF5IG9mIGl0ZW1zXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXlMaWtlcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc0FsbCgpO1xuICAgIHJldHVybiByZXMubWFwKChpdGVtKSA9PiBpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZHNcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgcG9wdWxhdGUoKSB7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBVdGlscy5kaXNwbGF5TGlrZXMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtbnVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaWtlcy5maW5kKChkYXRhKSA9PiBkYXRhLml0ZW1faWQgPT09IGl0ZW0uZGF0YXNldC5pZCk7XG4gICAgICBpdGVtLmlubmVySFRNTCA9IGlkPy5saWtlcyA/PyAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSBlbGVtIC0gdGhlIGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSB0eXBlIG9mIGNsYXNzXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFkZENsYXNzKGVsZW0sIHR5cGUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQodHlwZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUodHlwZSksIDgwMCk7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIC0gdGhlIGNvbW1lbnQgaWRcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50cyhpZCkge1xuICAgIGNvbnN0IGFucyA9IGF3YWl0IENvbW1lbnRzLmdldENvbW1lbnRPbmUoaWQpO1xuICAgIHJldHVybiBhbnMuZXJyb3IgPyBbXSA6IGFucy5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCAtIHRoZSBjb21tZW50IGlkXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXkoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgVXRpbHMuZ2V0Q29tbWVudHMoaWQpO1xuICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZGlzcGxheScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtc2VjdGlvbiBoMycpO1xuICAgIGNvbnN0IGNvdW50ID0gVXRpbHMuZ2V0Q291bnQoZGF0YSk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYENvbW1lbnRzKCR7Y291bnR9KWA7XG4gICAgc3BhY2UuaW5uZXJIVE1MID0gZGF0YS5tYXAoKGl0ZW0pID0+IENvbW1lbnQoaXRlbSkpLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7SFRNTEVMZW1lbnR9IG1vZGFsIC0gdGhlIG1vZGFsIGVsZW1lbnRcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgaGFuZGxlQ2xvc2UobW9kYWwpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgLSB0aGUgY29tbWVudCBpZFxuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyBoYW5kbGVGb3JtKGlkKSB7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpO1xuICAgICAgaWYgKChuYW1lLnZhbHVlICE9PSAnJykgJiYgKGNvbW1lbnQudmFsdWUgIT09ICcnKSkge1xuICAgICAgICBhd2FpdCBDb21tZW50cy5wb3N0Q29tbWVudChpZCwgbmFtZS52YWx1ZSwgY29tbWVudC52YWx1ZSk7XG4gICAgICAgIFV0aWxzLmRpc3BsYXkoaWQpO1xuICAgICAgICBmb3Jtcy5yZXNldCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9hc3NldHMvQ1NTL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL0pTX01vZHVsZXMvY29tcG9uZW50cy5qcyc7XG5pbXBvcnQgSGVscGVyIGZyb20gJy4vSlNfTW9kdWxlcy9oZWxwZXIuanMnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vSlNfTW9kdWxlcy91dGlscy5qcyc7XG5cbi8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgSGVscGVyIGNsYXNzXG5jb25zdCBoZWxwZXIgPSBuZXcgSGVscGVyKCk7XG5cbi8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBjbGlja1xuZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaWtlcy1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIZWxwZXIuTGlrZUhhbmRsZXIpO1xuICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmlubmVySFRNTCA9IE5hdigpO1xuICBhd2FpdCBIZWxwZXIuZGlzcGxheURhdGEoJ2EnKTtcbiAgYXdhaXQgVXRpbHMucG9wdWxhdGUoKTtcbiAgaGFuZGxlQ2xpY2soKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgaGVscGVyLnNlYXJjaEhhbmRsZXIoZSwgaGFuZGxlQ2xpY2spO1xuICB9KTtcbiAgSGVscGVyLmhhbmRsZUNvbW1lbnRzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==