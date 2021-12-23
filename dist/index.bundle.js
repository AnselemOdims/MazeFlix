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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n/* Pop Up Section */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: var(--primary-color-4);\n  padding: 0 85px;\n  backdrop-filter: blur(8px);\n}\n\n.section {\n  width: 80%;\n  position: relative;\n  border-radius: 1%;\n  font-family: var(--font-2);\n  background: var(--white);\n  padding: 5px 15px 5px 20px;\n  margin: 20px auto;\n  color: var(--secondary-color-3);\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.d-bold {\n  font-weight: bold;\n}\n\n.flex {\n  display: flex;\n}\n\n.direction {\n  flex-direction: column;\n}\n\n.close {\n  display: flex;\n  justify-content: flex-end;\n  color: var(--primary-color-1);\n  font-size: 35px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: var(--accent-color-1);\n}\n\n.top-section {\n  display: flex;\n  justify-content: space-between;\n  height: min-content;\n}\n\n.img-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 32%;\n}\n\n.details {\n  width: 65%;\n  margin-bottom: 50px;\n}\n\n.main-img {\n  width: 100%;\n  border: 4px solid white;\n  border-radius: 3%;\n  height: 73%;\n}\n\ndiv.download-btn {\n  background: var(--primary-color-3);\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 8px 5px;\n  margin-top: 5px;\n}\n\ndiv.download-btn > a {\n  border-radius: 2px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  cursor: pointer;\n  padding: 12px;\n  width: 95%;\n  font-family: var(--font-2);\n}\n\ndiv.download-btn > a:focus {\n  background: var(--accent-color-4);\n}\n\ndiv.download-btn > a:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\ndiv.download-btn > a img {\n  width: 7%;\n}\n\n.details h3 {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.details p {\n  font-size: 1rem;\n  color: var(--secondary-color-4);\n}\n\n.details div.d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.details div.genre {\n  padding: 15px 50px 15px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary {\n  margin: 5px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary > p {\n  padding: 3px 50px 0 0;\n  line-height: 1.5rem;\n  color: var(--secondary-color-4);\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -20px;\n}\n\n.comment-section > h3 {\n  font-size: 1.8rem;\n}\n\n#form {\n  padding-top: 0.8%;\n  width: 35%;\n}\n\n.comment-display {\n  margin: 5px 0 20px;\n  width: 50%;\n}\n\n.commenting {\n  padding: 2%;\n  font-size: 1rem;\n  border-left: solid 5px var(--accent-color-1);\n  margin-top: 5px;\n  background: var(--neutral-color-1);\n  width: 100%;\n}\n\n.commenting > p:nth-of-type(2) {\n  font-size: 0.9rem;\n  padding-top: 5px;\n}\n\n.commenting p.date {\n  font-size: 0.7rem;\n}\n\n#form > input,\n#form > textarea {\n  border: solid 2px var(--secondary-color-4);\n  padding: 10px;\n  font: var(--font-2);\n  margin: 10px 0 0;\n  border-radius: 10% 10% 0 0;\n}\n\n#form > input:focus,\n#form > textarea:focus {\n  border: solid 2px var(--accent-color-1);\n  outline: none;\n}\n\nbutton#adding {\n  margin: 20px 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nbutton#adding:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nbutton#adding:focus {\n  background: var(--accent-color-4);\n}\n\n.like-animate {\n  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  color: #f1c215;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-22 13:31:16\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation scale-up-center\n * ----------------------------------------\n */\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/CSS/modal.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAEhD,mBAAmB;AACnB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,cAAc;EACd,wCAAwC;EACxC,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,iBAAiB;EACjB,+BAA+B;EAC/B,8EAA8E;EAC9E,sEAAsE;AACxE;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,uFAAuF;AACzF;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,eAAe;EACf,4CAA4C;EAC5C,eAAe;EACf,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,0CAA0C;EAC1C,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;;EAEE,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,eAAe;EACf,0BAA0B;EAC1B,iDAAiD;EACjD,yCAAyC;EACzC,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,uFAAuF;AACzF;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gFAAgF;EAChF,wEAAwE;EACxE,cAAc;AAChB;;AAEA;;;;;mDAKmD;;AAEnD;;;;EAIE;AACF;EACE;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;AACF","sourcesContent":["/* stylelint-disable no-descending-specificity */\n\n/* Pop Up Section */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: var(--primary-color-4);\n  padding: 0 85px;\n  backdrop-filter: blur(8px);\n}\n\n.section {\n  width: 80%;\n  position: relative;\n  border-radius: 1%;\n  font-family: var(--font-2);\n  background: var(--white);\n  padding: 5px 15px 5px 20px;\n  margin: 20px auto;\n  color: var(--secondary-color-3);\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.d-bold {\n  font-weight: bold;\n}\n\n.flex {\n  display: flex;\n}\n\n.direction {\n  flex-direction: column;\n}\n\n.close {\n  display: flex;\n  justify-content: flex-end;\n  color: var(--primary-color-1);\n  font-size: 35px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: var(--accent-color-1);\n}\n\n.top-section {\n  display: flex;\n  justify-content: space-between;\n  height: min-content;\n}\n\n.img-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 32%;\n}\n\n.details {\n  width: 65%;\n  margin-bottom: 50px;\n}\n\n.main-img {\n  width: 100%;\n  border: 4px solid white;\n  border-radius: 3%;\n  height: 73%;\n}\n\ndiv.download-btn {\n  background: var(--primary-color-3);\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 8px 5px;\n  margin-top: 5px;\n}\n\ndiv.download-btn > a {\n  border-radius: 2px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  cursor: pointer;\n  padding: 12px;\n  width: 95%;\n  font-family: var(--font-2);\n}\n\ndiv.download-btn > a:focus {\n  background: var(--accent-color-4);\n}\n\ndiv.download-btn > a:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\ndiv.download-btn > a img {\n  width: 7%;\n}\n\n.details h3 {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.details p {\n  font-size: 1rem;\n  color: var(--secondary-color-4);\n}\n\n.details div.d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.details div.genre {\n  padding: 15px 50px 15px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary {\n  margin: 5px 0;\n  color: var(--secondary-color-4);\n}\n\n.details div.summary > p {\n  padding: 3px 50px 0 0;\n  line-height: 1.5rem;\n  color: var(--secondary-color-4);\n}\n\n.comment-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -20px;\n}\n\n.comment-section > h3 {\n  font-size: 1.8rem;\n}\n\n#form {\n  padding-top: 0.8%;\n  width: 35%;\n}\n\n.comment-display {\n  margin: 5px 0 20px;\n  width: 50%;\n}\n\n.commenting {\n  padding: 2%;\n  font-size: 1rem;\n  border-left: solid 5px var(--accent-color-1);\n  margin-top: 5px;\n  background: var(--neutral-color-1);\n  width: 100%;\n}\n\n.commenting > p:nth-of-type(2) {\n  font-size: 0.9rem;\n  padding-top: 5px;\n}\n\n.commenting p.date {\n  font-size: 0.7rem;\n}\n\n#form > input,\n#form > textarea {\n  border: solid 2px var(--secondary-color-4);\n  padding: 10px;\n  font: var(--font-2);\n  margin: 10px 0 0;\n  border-radius: 10% 10% 0 0;\n}\n\n#form > input:focus,\n#form > textarea:focus {\n  border: solid 2px var(--accent-color-1);\n  outline: none;\n}\n\nbutton#adding {\n  margin: 20px 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nbutton#adding:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nbutton#adding:focus {\n  background: var(--accent-color-4);\n}\n\n.like-animate {\n  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  color: #f1c215;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-22 13:31:16\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation scale-up-center\n * ----------------------------------------\n */\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n  min-height: 59vh;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: #ffbd35;\n}\n\nul.container > li .show-img > img {\n  width: 100%;\n  min-height: 404px;\n  margin-bottom: 20px;\n}\n\nul.container > li .show-img img:hover {\n  transform: scale(1.04, 1.04);\n  cursor: pointer;\n  transition: transform ease-out 1s 0.1s;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n  display: flex;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n/* spinners */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.loading-spin {\n  animation: rotate-forever linear infinite 1s;\n  height: 50px;\n  width: 50px;\n  border: 10px solid #6eafab;\n  border-right-color: transparent;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\nimg.badge {\n  width: 40px;\n  position: absolute;\n  top: -5px;\n  right: -18px;\n}\n\n.rotate {\n  -webkit-animation: rotate-scale-up 0.9s linear both infinite;\n  animation: rotate-scale-up 0.9s linear both infinite;\n}\n\n.fas.fa-search::before {\n  margin-right: 10px;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-23 21:56:45\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation rotate-scale-up\n * ----------------------------------------\n */\n@-webkit-keyframes rotate-scale-up {\n  0% {\n    -webkit-transform: scale(1) rotateZ(0);\n    transform: scale(1) rotateZ(0);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1) rotateZ(180deg);\n    transform: scale(1.1) rotateZ(180deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotateZ(360deg);\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-scale-up {\n  0% {\n    -webkit-transform: scale(1) rotateZ(0);\n    transform: scale(1) rotateZ(0);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1) rotateZ(180deg);\n    transform: scale(1.1) rotateZ(180deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotateZ(360deg);\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-2);\n  color: var(--secondary-color-3);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n  font-weight: 100;\n}\n\n@media (max-width: 992px) {\n  header > nav,\n  main {\n    padding: 0 50px;\n  }\n\n  .fas.fa-search::before {\n    margin-right: 3px;\n  }\n\n  nav > ul > li {\n    font-size: 0.8rem;\n    margin: 0 5px 0 10px;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n  }\n\n  .comment-display {\n    width: 80%;\n  }\n\n  nav > .logo img {\n    width: 80%;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.6rem;\n  }\n\n  footer {\n    padding: 20px;\n    font-size: 0.7rem;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  header > nav {\n    padding: 0 10px;\n    flex-direction: column;\n  }\n\n  header > nav > ul {\n    display: none;\n  }\n\n  nav > .logo img {\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  nav .form-container {\n    margin: 0;\n  }\n\n  main {\n    padding: 0 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.5rem;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n    padding: 5px;\n    margin: 10px auto;\n  }\n\n  div.download-btn > button {\n    padding: 10px 5px;\n  }\n\n  .details {\n    margin: 0 0 25px 5px;\n  }\n\n  .details p {\n    font-size: 0.8rem;\n  }\n\n  .details div.genre {\n    padding: 5px 0;\n  }\n\n  .details div.genre > p:nth-of-type(1) {\n    padding-bottom: 5px;\n  }\n\n  .details div.summary > p {\n    padding-right: 5px;\n  }\n\n  .comment-section > h3 {\n    font-size: 1rem;\n    margin: 30px 0 10px;\n  }\n\n  .comment-display {\n    width: 95%;\n  }\n\n  #form {\n    width: 83%;\n  }\n\n  #form > input,\n  #form > textarea {\n    font-size: 0.8rem;\n  }\n\n  .img-section {\n    width: 46%;\n  }\n\n  .details h3 {\n    font-size: 1.2rem;\n  }\n\n  .details div.d-flex {\n    flex-direction: column;\n  }\n\n  footer {\n    padding: 15px;\n    font-size: 0.6rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/CSS/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable no-descending-specificity */\n\n/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');\n@import url('./modal.css');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #f85f68;\n  --primary-color-2: #f5303d;\n  --primary-color-3: #f7c3c6;\n  --primary-color-4: #ac121a41;\n  --accent-color-1: #6eafab;\n  --accent-color-2: #b5ebe7;\n  --accent-color-3: #567a79;\n  --accent-color-4: #476463;\n  --secondary-color-1: #322831;\n  --secondary-color-2: #5f4d5d;\n  --secondary-color-3: #2a377f;\n  --secondary-color-4: #262d5a;\n  --neutral-color-1: #dfdfde;\n  --white: #fff;\n  --font-1: 'Lora', sans-serif;\n  --font-2: 'Sora', serif;\n  --shadow-1: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n  height: 100%;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font-2);\n  background: var(--neutral-color-1);\n  position: relative;\n  height: 100%;\n}\n\nul li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header Styles */\nheader {\n  width: 100%;\n}\n\nheader > nav {\n  display: flex;\n  width: 100%;\n  padding: 0 150px;\n  justify-content: space-between;\n}\n\nnav > .logo {\n  width: 18%;\n}\n\nnav > .logo img {\n  width: 90%;\n  padding: 20px 0;\n}\n\nnav .form-container {\n  align-self: center;\n  margin-top: 20px;\n  padding: 2px 5px 2px 2px;\n}\n\nnav .form-container > form {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: var(--shadow-1);\n}\n\nnav .form-container > form > div {\n  background: var(--primary-color-3);\n  border-radius: 2px;\n}\n\nnav .form-container > form > input {\n  border: none;\n  padding: 10px;\n  border-radius: 2px;\n  font: var(--font-2);\n}\n\nnav .form-container > form > input:focus {\n  outline: none;\n}\n\nnav .form-container > form > input::placeholder {\n  font-family: var(--font-2);\n}\n\nnav > ul {\n  display: flex;\n  align-items: center;\n}\n\nnav > ul > li {\n  margin: 0 25px;\n  font-size: 16px;\n  font-family: var(--font-2);\n  font-weight: 700;\n}\n\nnav > ul > li a:hover {\n  color: var(--secondary-color-3);\n}\n\nnav ul li a.active {\n  color: var(--secondary-color-3);\n  border-bottom: solid 3px var(--secondary-color-3);\n  transition: border-bottom ease-out 0.5s 0.1s;\n  padding-bottom: 5px;\n}\n\n.d-none {\n  display: none;\n}\n\n/* Main Section */\nmain {\n  padding: 0 150px;\n  min-height: 59vh;\n}\n\nmain .heading-container h1 {\n  text-align: center;\n  margin: 30px 0 40px;\n  color: var(--secondary-color-3);\n}\n\nmain > ul.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\nul.container > li {\n  background: var(--white);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\nul.container > li .tv-title {\n  display: flex;\n  justify-content: space-between;\n}\n\nul.container > li .tv-title p {\n  font-size: 1rem;\n  color: var(--secondary-color-3);\n}\n\nul.container > li .tv-title p:nth-of-type(1) {\n  width: 70%;\n  font-weight: 700;\n}\n\nul.container > li .tv-title p:nth-of-type(2) {\n  font-size: 0.9rem;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i {\n  margin-right: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nul.container > li .tv-title p:nth-of-type(2) i:hover {\n  color: #ffbd35;\n}\n\nul.container > li .show-img > img {\n  width: 100%;\n  min-height: 404px;\n  margin-bottom: 20px;\n}\n\nul.container > li .show-img img:hover {\n  transform: scale(1.04, 1.04);\n  cursor: pointer;\n  transition: transform ease-out 1s 0.1s;\n}\n\nul.container > li button {\n  margin: 30px 0 0;\n  background: var(--accent-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 1rem;\n  border-radius: 15% 15% 0 0;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 12px;\n}\n\nnav .form-container > form > div button {\n  margin: 5px 5px 5px 10px;\n  background: var(--primary-color-1);\n  border: none;\n  color: var(--white);\n  font-family: var(--font-2);\n  font-size: 0.9rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n  transition: background ease-out 0.5s 0.1s;\n  cursor: pointer;\n  padding: 8px 25px;\n  display: flex;\n}\n\nmain ul.container > li button:focus {\n  background: var(--accent-color-4);\n}\n\nmain ul.container > li button:hover {\n  background: var(--accent-color-3);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\nnav div.form-container > form > div button:hover {\n  background: var(--primary-color-2);\n}\n\nnav div.form-container > form > div button:focus {\n  outline: none;\n}\n\n/* spinners */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.loading-spin {\n  animation: rotate-forever linear infinite 1s;\n  height: 50px;\n  width: 50px;\n  border: 10px solid #6eafab;\n  border-right-color: transparent;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\nimg.badge {\n  width: 40px;\n  position: absolute;\n  top: -5px;\n  right: -18px;\n}\n\n.rotate {\n  -webkit-animation: rotate-scale-up 0.9s linear both infinite;\n  animation: rotate-scale-up 0.9s linear both infinite;\n}\n\n.fas.fa-search::before {\n  margin-right: 10px;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-12-23 21:56:45\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation rotate-scale-up\n * ----------------------------------------\n */\n@-webkit-keyframes rotate-scale-up {\n  0% {\n    -webkit-transform: scale(1) rotateZ(0);\n    transform: scale(1) rotateZ(0);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1) rotateZ(180deg);\n    transform: scale(1.1) rotateZ(180deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotateZ(360deg);\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-scale-up {\n  0% {\n    -webkit-transform: scale(1) rotateZ(0);\n    transform: scale(1) rotateZ(0);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1) rotateZ(180deg);\n    transform: scale(1.1) rotateZ(180deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotateZ(360deg);\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\n/* Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5% 200px;\n  background-color: var(--accent-color-2);\n  color: var(--secondary-color-3);\n  border-radius: 10% 10% 0 0;\n  margin-top: 40px;\n  font-weight: 100;\n}\n\n@media (max-width: 992px) {\n  header > nav,\n  main {\n    padding: 0 50px;\n  }\n\n  .fas.fa-search::before {\n    margin-right: 3px;\n  }\n\n  nav > ul > li {\n    font-size: 0.8rem;\n    margin: 0 5px 0 10px;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n  }\n\n  .comment-display {\n    width: 80%;\n  }\n\n  nav > .logo img {\n    width: 80%;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.6rem;\n  }\n\n  footer {\n    padding: 20px;\n    font-size: 0.7rem;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  header > nav {\n    padding: 0 10px;\n    flex-direction: column;\n  }\n\n  header > nav > ul {\n    display: none;\n  }\n\n  nav > .logo img {\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  main > ul.container {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  nav .form-container {\n    margin: 0;\n  }\n\n  main {\n    padding: 0 30px;\n  }\n\n  main .heading-container h1 {\n    font-size: 1.5rem;\n  }\n\n  .modal {\n    padding: 0;\n  }\n\n  .section {\n    width: 95%;\n    padding: 5px;\n    margin: 10px auto;\n  }\n\n  div.download-btn > button {\n    padding: 10px 5px;\n  }\n\n  .details {\n    margin: 0 0 25px 5px;\n  }\n\n  .details p {\n    font-size: 0.8rem;\n  }\n\n  .details div.genre {\n    padding: 5px 0;\n  }\n\n  .details div.genre > p:nth-of-type(1) {\n    padding-bottom: 5px;\n  }\n\n  .details div.summary > p {\n    padding-right: 5px;\n  }\n\n  .comment-section > h3 {\n    font-size: 1rem;\n    margin: 30px 0 10px;\n  }\n\n  .comment-display {\n    width: 95%;\n  }\n\n  #form {\n    width: 83%;\n  }\n\n  #form > input,\n  #form > textarea {\n    font-size: 0.8rem;\n  }\n\n  .img-section {\n    width: 46%;\n  }\n\n  .details h3 {\n    font-size: 1.2rem;\n  }\n\n  .details div.d-flex {\n    flex-direction: column;\n  }\n\n  footer {\n    padding: 15px;\n    font-size: 0.6rem;\n  }\n}\n"],"sourceRoot":""}]);
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
      <a href="#"><img src=${_assets_images_mAZEFLIX_gif__WEBPACK_IMPORTED_MODULE_0__} alt="site logo" /></a>
    </div>
    <div class="form-container">
      <form>
        <input type="search" placeholder="search" id="search"/>
        <div>
          <button type="submit" id="submit-btn"><i class="fas fa-search"></i> Search</button>
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
      <img src=${show?.image?.medium ?? 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg'} alt="show image">
      <div>
      <img src=${_assets_images_icon_svg__WEBPACK_IMPORTED_MODULE_1__} class="badge"/>
      </div>
    </div>
    <div class="tv-title">
      <p>${show?.name}</p>
      <p><i class="fas fa-thumbs-up" id="likes-btn" data-id=${show?.id}></i><span  data-id=${show?.id} class="likes-num">${likesNum}</span> likes</p>
    </div>
    <button type="button" class="btn comment-btn" data-id=${show?.id}>Comments</button>
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
  <img src="${data?.image?.medium ?? 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg'}" alt="" class="main-img">
  <div class="download-btn">
  <a href=${data?.url} target="_blank" noreferrer noopener>Download <i class="fas fa-download"></i></a>
  </div>
</div>
<div class="details">
<h3>${data.name}</h3>
<div class="d-flex genre">
  <p>Genre: <span class="d-bold">${data.genres}</span></p>
  <p>Year: <span class="d-bold">${data?.ended ?? 'unknown'}</span></p>
</div>
<div class="summary">
  <span>Summary:</span>
  <p>${data?.summary?.slice(0, 200) ?? 'Brief Info'}...</p>
</div>
<div class="d-flex genre">
  <p>Language: <span class="d-bold">${data.language}</span></p>
  <p>Rating: <span class="d-bold">${data?.rating?.average ?? 'unknown'}</span></p>
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
      document.querySelector('#lists-container').innerHTML = '<span class="loading-spin"></span>';
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
    const search = document.querySelector('.fa-search');
    try {
      search.classList.add('rotate');
      await Helper.displayData(value);
      handle();
      Helper.handleComments();
      await _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].populate();
    } catch (err) {
      throw new Error(err);
    } finally {
      search.classList.remove('rotate');
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
        try {
          const args = e.target.getAttribute('data-id');
          e.target.innerHTML = '<p>Loading <span class="loading-spinner"></span></p>';
          const data = await Helper.getInfo(args);
          modal.style.display = 'block';
          modal.innerHTML = (0,_components_js__WEBPACK_IMPORTED_MODULE_2__.Modal)(data);

          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].display(args);
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleClose(modal);
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleForm(args);
        } catch (err) {
          throw new Error(err);
        } finally {
          e.target.innerText = 'Comments';
        }
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
      try {
        e.preventDefault();
        const name = document.getElementById('name');
        const comment = document.getElementById('comment');
        if ((name.value !== '') && (comment.value !== '')) {
          e.target.children[2].innerHTML = '<p>Loading <span class="loading-spinner"></span></p>';
          await _comment_js__WEBPACK_IMPORTED_MODULE_1__["default"].postComment(id, name.value, comment.value);
          Utils.display(id);
          forms.reset();
        }
      } catch (err) {
        throw new Error(err);
      } finally {
        e.target.children[2].innerText = 'Submit';
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

const index = Math.floor(Math.random() * 4);
const items = ['a', 'b', 'c', 'd', 'e'];

window.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('header').innerHTML = (0,_JS_Modules_components_js__WEBPACK_IMPORTED_MODULE_1__.Nav)();
  await _JS_Modules_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayData(items[index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsUUFBUSxTQUFTLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxL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LEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZnQztBQUNpQjtBQUNMO0FBQ0Y7O0FBRTFDO0FBQ0EsbUJBQW1CLDZEQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MseUVBQWtCO0FBQ3BELEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLDhEQUFHO0FBQ2xELFFBQVEseUVBQWtCO0FBQzFCLFFBQVEscUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNEVBQXFCO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9hc3NldHMvQ1NTL21vZGFsLmNzcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9hc3NldHMvQ1NTL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9hc3NldHMvQ1NTL3N0eWxlLmNzcz85Zjc3Iiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvLi9zcmMvSlNfTW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL0pTX01vZHVsZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9KU19Nb2R1bGVzL2ZldGNoV3JhcHBlci5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9KU19Nb2R1bGVzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9tYXplZmxpeC8uL3NyYy9KU19Nb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL0pTX01vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWF6ZWZsaXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXplZmxpeC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hemVmbGl4L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hemVmbGl4Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcblxcbi8qIFBvcCBVcCBTZWN0aW9uICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTQpO1xcbiAgcGFkZGluZzogMCA4NXB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAxJTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDIwcHg7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbn1cXG5cXG4uZC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlyZWN0aW9uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxufVxcblxcbi50b3Atc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmltZy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMiU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgaGVpZ2h0OiA3MyU7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0zKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYSB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBhOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYSBpbWcge1xcbiAgd2lkdGg6IDclO1xcbn1cXG5cXG4uZGV0YWlscyBoMyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZXRhaWxzIHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuZ2VucmUge1xcbiAgcGFkZGluZzogMTVweCA1MHB4IDE1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5zdW1tYXJ5IHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuc3VtbWFyeSA+IHAge1xcbiAgcGFkZGluZzogM3B4IDUwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5jb21tZW50LXNlY3Rpb24gPiBoMyB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgcGFkZGluZy10b3A6IDAuOCU7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4uY29tbWVudC1kaXNwbGF5IHtcXG4gIG1hcmdpbjogNXB4IDAgMjBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb21tZW50aW5nIHtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50aW5nID4gcDpudGgtb2YtdHlwZSgyKSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5jb21tZW50aW5nIHAuZGF0ZSB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuI2Zvcm0gPiBpbnB1dCxcXG4jZm9ybSA+IHRleHRhcmVhIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250OiB2YXIoLS1mb250LTIpO1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJSAxMCUgMCAwO1xcbn1cXG5cXG4jZm9ybSA+IGlucHV0OmZvY3VzLFxcbiNmb3JtID4gdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uI2FkZGluZyB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAxNSUgMCAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1vdXQgMC41cyAwLjFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuYnV0dG9uI2FkZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbmJ1dHRvbiNhZGRpbmc6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG4ubGlrZS1hbmltYXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC44cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC44cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcbiAgY29sb3I6ICNmMWMyMTU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMi0yMiAxMzozMToxNlxcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qKlxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBhbmltYXRpb24gc2NhbGUtdXAtY2VudGVyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9DU1MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdEQUFnRDs7QUFFaEQsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsOEVBQThFO0VBQzlFLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUZBQXVGO0FBQ3pGOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsdUNBQXVDO0VBQ3ZDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixpREFBaUQ7RUFDakQseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUZBQXVGO0FBQ3pGOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0ZBQWdGO0VBQ2hGLHdFQUF3RTtFQUN4RSxjQUFjO0FBQ2hCOztBQUVBOzs7OzttREFLbUQ7O0FBRW5EOzs7O0VBSUU7QUFDRjtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuXFxuLyogUG9wIFVwIFNlY3Rpb24gKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItNCk7XFxuICBwYWRkaW5nOiAwIDg1cHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDElO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxufVxcblxcbi5kLWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXJlY3Rpb24ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG59XFxuXFxuLnRvcC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaW1nLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMyJTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5tYWluLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBoZWlnaHQ6IDczJTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTMpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxuZGl2LmRvd25sb2FkLWJ0biA+IGE6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTQpO1xcbn1cXG5cXG5kaXYuZG93bmxvYWQtYnRuID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMyk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbmRpdi5kb3dubG9hZC1idG4gPiBhIGltZyB7XFxuICB3aWR0aDogNyU7XFxufVxcblxcbi5kZXRhaWxzIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRldGFpbHMgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbn1cXG5cXG4uZGV0YWlscyBkaXYuZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXRhaWxzIGRpdi5nZW5yZSB7XFxuICBwYWRkaW5nOiAxNXB4IDUwcHggMTVweCAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LnN1bW1hcnkge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItNCk7XFxufVxcblxcbi5kZXRhaWxzIGRpdi5zdW1tYXJ5ID4gcCB7XFxuICBwYWRkaW5nOiAzcHggNTBweCAwIDA7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci00KTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4jZm9ybSB7XFxuICBwYWRkaW5nLXRvcDogMC44JTtcXG4gIHdpZHRoOiAzNSU7XFxufVxcblxcbi5jb21tZW50LWRpc3BsYXkge1xcbiAgbWFyZ2luOiA1cHggMCAyMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbW1lbnRpbmcge1xcbiAgcGFkZGluZzogMiU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItbGVmdDogc29saWQgNXB4IHZhcigtLWFjY2VudC1jb2xvci0xKTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnRpbmcgPiBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLmNvbW1lbnRpbmcgcC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4jZm9ybSA+IGlucHV0LFxcbiNmb3JtID4gdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTQpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQ6IHZhcigtLWZvbnQtMik7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlIDEwJSAwIDA7XFxufVxcblxcbiNmb3JtID4gaW5wdXQ6Zm9jdXMsXFxuI2Zvcm0gPiB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b24jYWRkaW5nIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG5idXR0b24jYWRkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci0zKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxuYnV0dG9uI2FkZGluZzpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItNCk7XFxufVxcblxcbi5saWtlLWFuaW1hdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBjb2xvcjogI2YxYzIxNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTEyLTIyIDEzOjMxOjE2XFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxcbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyoqXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIGFuaW1hdGlvbiBzY2FsZS11cC1jZW50ZXJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZmYW1pbHk9U29yYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcblxcbi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvci0xOiAjZjg1ZjY4O1xcbiAgLS1wcmltYXJ5LWNvbG9yLTI6ICNmNTMwM2Q7XFxuICAtLXByaW1hcnktY29sb3ItMzogI2Y3YzNjNjtcXG4gIC0tcHJpbWFyeS1jb2xvci00OiAjYWMxMjFhNDE7XFxuICAtLWFjY2VudC1jb2xvci0xOiAjNmVhZmFiO1xcbiAgLS1hY2NlbnQtY29sb3ItMjogI2I1ZWJlNztcXG4gIC0tYWNjZW50LWNvbG9yLTM6ICM1NjdhNzk7XFxuICAtLWFjY2VudC1jb2xvci00OiAjNDc2NDYzO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMTogIzMyMjgzMTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTI6ICM1ZjRkNWQ7XFxuICAtLXNlY29uZGFyeS1jb2xvci0zOiAjMmEzNzdmO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItNDogIzI2MmQ1YTtcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjZGZkZmRlO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udC0xOiAnTG9yYScsIHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtMjogJ1NvcmEnLCBzZXJpZjtcXG4gIC0tc2hhZG93LTE6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIgPiBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubmF2ID4gLmxvZ28ge1xcbiAgd2lkdGg6IDE4JTtcXG59XFxuXFxubmF2ID4gLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udDogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbm5hdiA+IHVsID4gbGkgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG5uYXYgdWwgbGkgYS5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTWFpbiBTZWN0aW9uICovXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE1MHB4O1xcbiAgbWluLWhlaWdodDogNTl2aDtcXG59XFxuXFxubWFpbiAuaGVhZGluZy1jb250YWluZXIgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAzMHB4IDAgNDBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbm1haW4gPiB1bC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgxKSB7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikgaTpob3ZlciB7XFxuICBjb2xvcjogI2ZmYmQzNTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnNob3ctaW1nID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAuc2hvdy1pbWcgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCwgMS4wNCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMXMgMC4xcztcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgYnV0dG9uIHtcXG4gIG1hcmdpbjogMzBweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW46IDVweCA1cHggNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4gdWwuY29udGFpbmVyID4gbGkgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxubWFpbiB1bC5jb250YWluZXIgPiBsaSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5uYXYgZGl2LmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG59XFxuXFxubmF2IGRpdi5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIHNwaW5uZXJzICovXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICBhbmltYXRpb246IHJvdGF0ZS1mb3JldmVyIGxpbmVhciBpbmZpbml0ZSAwLjhzO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmxvYWRpbmctc3BpbiB7XFxuICBhbmltYXRpb246IHJvdGF0ZS1mb3JldmVyIGxpbmVhciBpbmZpbml0ZSAxcztcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM2ZWFmYWI7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5pbWcuYmFkZ2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICByaWdodDogLTE4cHg7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1zY2FsZS11cCAwLjlzIGxpbmVhciBib3RoIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtdXAgMC45cyBsaW5lYXIgYm90aCBpbmZpbml0ZTtcXG59XFxuXFxuLmZhcy5mYS1zZWFyY2g6OmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMi0yMyAyMTo1Njo0NVxcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qKlxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBhbmltYXRpb24gcm90YXRlLXNjYWxlLXVwXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtc2NhbGUtdXAge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDApO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zY2FsZS11cCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMCk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41JSAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlIDAgMDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIGhlYWRlciA+IG5hdixcXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxuICB9XFxuXFxuICAuZmFzLmZhLXNlYXJjaDo6YmVmb3JlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICB9XFxuXFxuICBuYXYgPiB1bCA+IGxpIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbjogMCA1cHggMCAxMHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWRpc3BsYXkge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgbmF2ID4gLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgfVxcblxcbiAgbWFpbiA+IHVsLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgbWFpbiAuaGVhZGluZy1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgaGVhZGVyID4gbmF2IHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgaGVhZGVyID4gbmF2ID4gdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgbmF2ID4gLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICB9XFxuXFxuICBtYWluID4gdWwuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMzBweDtcXG4gIH1cXG5cXG4gIG5hdiAuZm9ybS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcbiAgfVxcblxcbiAgbWFpbiAuaGVhZGluZy1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB9XFxuXFxuICBkaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICB9XFxuXFxuICAuZGV0YWlscyB7XFxuICAgIG1hcmdpbjogMCAwIDI1cHggNXB4O1xcbiAgfVxcblxcbiAgLmRldGFpbHMgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LmdlbnJlIHtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZ2VucmUgPiBwOm50aC1vZi10eXBlKDEpIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGRpdi5zdW1tYXJ5ID4gcCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIH1cXG5cXG4gIC5jb21tZW50LXNlY3Rpb24gPiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiAzMHB4IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWRpc3BsYXkge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgI2Zvcm0ge1xcbiAgICB3aWR0aDogODMlO1xcbiAgfVxcblxcbiAgI2Zvcm0gPiBpbnB1dCxcXG4gICNmb3JtID4gdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG5cXG4gIC5pbWctc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA0NiU7XFxuICB9XFxuXFxuICAuZGV0YWlscyBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LmQtZmxleCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9DU1Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBp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VUFBVTtFQUNaOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuXFxuLyogR29vZ2xlIGZvbnQgaW1wb3J0ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZmFtaWx5PVNvcmE6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCcuL21vZGFsLmNzcycpO1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvci0xOiAjZjg1ZjY4O1xcbiAgLS1wcmltYXJ5LWNvbG9yLTI6ICNmNTMwM2Q7XFxuICAtLXByaW1hcnktY29sb3ItMzogI2Y3YzNjNjtcXG4gIC0tcHJpbWFyeS1jb2xvci00OiAjYWMxMjFhNDE7XFxuICAtLWFjY2VudC1jb2xvci0xOiAjNmVhZmFiO1xcbiAgLS1hY2NlbnQtY29sb3ItMjogI2I1ZWJlNztcXG4gIC0tYWNjZW50LWNvbG9yLTM6ICM1NjdhNzk7XFxuICAtLWFjY2VudC1jb2xvci00OiAjNDc2NDYzO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItMTogIzMyMjgzMTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yLTI6ICM1ZjRkNWQ7XFxuICAtLXNlY29uZGFyeS1jb2xvci0zOiAjMmEzNzdmO1xcbiAgLS1zZWNvbmRhcnktY29sb3ItNDogIzI2MmQ1YTtcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjZGZkZmRlO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udC0xOiAnTG9yYScsIHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtMjogJ1NvcmEnLCBzZXJpZjtcXG4gIC0tc2hhZG93LTE6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIgPiBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubmF2ID4gLmxvZ28ge1xcbiAgd2lkdGg6IDE4JTtcXG59XFxuXFxubmF2ID4gLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udDogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2IC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5uYXYgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbm5hdiA+IHVsID4gbGkgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG5uYXYgdWwgbGkgYS5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci0zKTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTWFpbiBTZWN0aW9uICovXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE1MHB4O1xcbiAgbWluLWhlaWdodDogNTl2aDtcXG59XFxuXFxubWFpbiAuaGVhZGluZy1jb250YWluZXIgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAzMHB4IDAgNDBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxufVxcblxcbm1haW4gPiB1bC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLTMpO1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAudHYtdGl0bGUgcDpudGgtb2YtdHlwZSgxKSB7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnVsLmNvbnRhaW5lciA+IGxpIC50di10aXRsZSBwOm50aC1vZi10eXBlKDIpIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnR2LXRpdGxlIHA6bnRoLW9mLXR5cGUoMikgaTpob3ZlciB7XFxuICBjb2xvcjogI2ZmYmQzNTtcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgLnNob3ctaW1nID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG51bC5jb250YWluZXIgPiBsaSAuc2hvdy1pbWcgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCwgMS4wNCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMXMgMC4xcztcXG59XFxuXFxudWwuY29udGFpbmVyID4gbGkgYnV0dG9uIHtcXG4gIG1hcmdpbjogMzBweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3ItMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2Utb3V0IDAuNXMgMC4xcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbm5hdiAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW46IDVweCA1cHggNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjVzIDAuMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4gdWwuY29udGFpbmVyID4gbGkgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvci00KTtcXG59XFxuXFxubWFpbiB1bC5jb250YWluZXIgPiBsaSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLTMpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG5uYXYgZGl2LmZvcm0tY29udGFpbmVyID4gZm9ybSA+IGRpdiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG59XFxuXFxubmF2IGRpdi5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiBkaXYgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIHNwaW5uZXJzICovXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICBhbmltYXRpb246IHJvdGF0ZS1mb3JldmVyIGxpbmVhciBpbmZpbml0ZSAwLjhzO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmxvYWRpbmctc3BpbiB7XFxuICBhbmltYXRpb246IHJvdGF0ZS1mb3JldmVyIGxpbmVhciBpbmZpbml0ZSAxcztcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM2ZWFmYWI7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5pbWcuYmFkZ2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICByaWdodDogLTE4cHg7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1zY2FsZS11cCAwLjlzIGxpbmVhciBib3RoIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtdXAgMC45cyBsaW5lYXIgYm90aCBpbmZpbml0ZTtcXG59XFxuXFxuLmZhcy5mYS1zZWFyY2g6OmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMi0yMyAyMTo1Njo0NVxcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qKlxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBhbmltYXRpb24gcm90YXRlLXNjYWxlLXVwXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtc2NhbGUtdXAge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDApO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zY2FsZS11cCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMCk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41JSAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlIDAgMDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIGhlYWRlciA+IG5hdixcXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxuICB9XFxuXFxuICAuZmFzLmZhLXNlYXJjaDo6YmVmb3JlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICB9XFxuXFxuICBuYXYgPiB1bCA+IGxpIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbjogMCA1cHggMCAxMHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWRpc3BsYXkge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgbmF2ID4gLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgfVxcblxcbiAgbWFpbiA+IHVsLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgbWFpbiAuaGVhZGluZy1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgaGVhZGVyID4gbmF2IHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgaGVhZGVyID4gbmF2ID4gdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgbmF2ID4gLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICB9XFxuXFxuICBtYWluID4gdWwuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMzBweDtcXG4gIH1cXG5cXG4gIG5hdiAuZm9ybS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcbiAgfVxcblxcbiAgbWFpbiAuaGVhZGluZy1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB9XFxuXFxuICBkaXYuZG93bmxvYWQtYnRuID4gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICB9XFxuXFxuICAuZGV0YWlscyB7XFxuICAgIG1hcmdpbjogMCAwIDI1cHggNXB4O1xcbiAgfVxcblxcbiAgLmRldGFpbHMgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LmdlbnJlIHtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICB9XFxuXFxuICAuZGV0YWlscyBkaXYuZ2VucmUgPiBwOm50aC1vZi10eXBlKDEpIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIGRpdi5zdW1tYXJ5ID4gcCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIH1cXG5cXG4gIC5jb21tZW50LXNlY3Rpb24gPiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiAzMHB4IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWRpc3BsYXkge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgI2Zvcm0ge1xcbiAgICB3aWR0aDogODMlO1xcbiAgfVxcblxcbiAgI2Zvcm0gPiBpbnB1dCxcXG4gICNmb3JtID4gdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG5cXG4gIC5pbWctc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA0NiU7XFxuICB9XFxuXFxuICAuZGV0YWlscyBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmRldGFpbHMgZGl2LmQtZmxleCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XG4gIHN0YXRpYyAjQVBJID0gbmV3IEZldGNoV3JhcHBlcignaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLycpO1xuXG4gIHN0YXRpYyAjYXBwSUQgPSAncmQ2NHhLT1BYeEdGbVByajhwVXQnO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBUaGUgdW5pcXVlIGlkZW50aWZpZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgdXNlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbWVudCAtIHRoZSBjb21tZW50IG9mIHRoZSB1c2VyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKiBAbWVtYmVyb2YgQ29tbWVudFxuICAgKi9cbiAgc3RhdGljIGFzeW5jIHBvc3RDb21tZW50KGlkLCBuYW1lLCBjb21tZW50KSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBDb21tZW50LiNBUEkucG9zdChgYXBwcy8ke0NvbW1lbnQuI2FwcElEfS9jb21tZW50c2AsIGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSB0aGUgdW5pcXVlIGlkZW50aWZpZXJcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKiBAbWVtYmVyb2YgQ29tbWVudFxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldENvbW1lbnRPbmUoaWQpIHtcbiAgICBjb25zdCBuZXh0ID0gYXdhaXQgQ29tbWVudC4jQVBJLmdldChgYXBwcy8ke0NvbW1lbnQuI2FwcElEfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbn1cbiIsImltcG9ydCBMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbUFaRUZMSVguZ2lmJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5zdmcnO1xuXG5leHBvcnQgY29uc3QgTmF2ID0gKCkgPT4gYFxuICA8bmF2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPSR7TG9nb30gYWx0PVwic2l0ZSBsb2dvXCIgLz48L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInNlYXJjaFwiIGlkPVwic2VhcmNoXCIvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWJ0blwiPjxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT4gU2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpbmtzIGFjdGl2ZVwiIGRhdGEtY29udGVudD1cIiNib29rc1wiPlRWIFNob3dzPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbiAgYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSAoeyBzaG93IH0gPSB7fSwgbGlrZXNOdW0gPSAwKSA9PiBgXG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2hvdy1pbWdcIj5cbiAgICAgIDxpbWcgc3JjPSR7c2hvdz8uaW1hZ2U/Lm1lZGl1bSA/PyAnaHR0cHM6Ly93d3cuZnJlZWljb25zcG5nLmNvbS91cGxvYWRzL25vLWltYWdlLWljb24tMjMuanBnJ30gYWx0PVwic2hvdyBpbWFnZVwiPlxuICAgICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPSR7SWNvbn0gY2xhc3M9XCJiYWRnZVwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0di10aXRsZVwiPlxuICAgICAgPHA+JHtzaG93Py5uYW1lfTwvcD5cbiAgICAgIDxwPjxpIGNsYXNzPVwiZmFzIGZhLXRodW1icy11cFwiIGlkPVwibGlrZXMtYnRuXCIgZGF0YS1pZD0ke3Nob3c/LmlkfT48L2k+PHNwYW4gIGRhdGEtaWQ9JHtzaG93Py5pZH0gY2xhc3M9XCJsaWtlcy1udW1cIj4ke2xpa2VzTnVtfTwvc3Bhbj4gbGlrZXM8L3A+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gY29tbWVudC1idG5cIiBkYXRhLWlkPSR7c2hvdz8uaWR9PkNvbW1lbnRzPC9idXR0b24+XG4gIDwvbGk+XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGluZyA9ICh0eXBlLCBjb3VudCA9IDUpID0+IGBcbiAgPGgxPlRpdGxlICR7dHlwZX06IFRWIFNob3dzKCR7Y291bnR9KTwvaDE+XG5gO1xuXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoZGF0YSkgPT4gYFxuPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbjxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuPGRpdiBjbGFzcz1cInRvcC1zZWN0aW9uXCI+XG48ZGl2IGNsYXNzPVwiaW1nLXNlY3Rpb25cIj5cbiAgPGltZyBzcmM9XCIke2RhdGE/LmltYWdlPy5tZWRpdW0gPz8gJ2h0dHBzOi8vd3d3LmZyZWVpY29uc3BuZy5jb20vdXBsb2Fkcy9uby1pbWFnZS1pY29uLTIzLmpwZyd9XCIgYWx0PVwiXCIgY2xhc3M9XCJtYWluLWltZ1wiPlxuICA8ZGl2IGNsYXNzPVwiZG93bmxvYWQtYnRuXCI+XG4gIDxhIGhyZWY9JHtkYXRhPy51cmx9IHRhcmdldD1cIl9ibGFua1wiIG5vcmVmZXJyZXIgbm9vcGVuZXI+RG93bmxvYWQgPGkgY2xhc3M9XCJmYXMgZmEtZG93bmxvYWRcIj48L2k+PC9hPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbjxoMz4ke2RhdGEubmFtZX08L2gzPlxuPGRpdiBjbGFzcz1cImQtZmxleCBnZW5yZVwiPlxuICA8cD5HZW5yZTogPHNwYW4gY2xhc3M9XCJkLWJvbGRcIj4ke2RhdGEuZ2VucmVzfTwvc3Bhbj48L3A+XG4gIDxwPlllYXI6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhPy5lbmRlZCA/PyAndW5rbm93bid9PC9zcGFuPjwvcD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cbiAgPHNwYW4+U3VtbWFyeTo8L3NwYW4+XG4gIDxwPiR7ZGF0YT8uc3VtbWFyeT8uc2xpY2UoMCwgMjAwKSA/PyAnQnJpZWYgSW5mbyd9Li4uPC9wPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGdlbnJlXCI+XG4gIDxwPkxhbmd1YWdlOiA8c3BhbiBjbGFzcz1cImQtYm9sZFwiPiR7ZGF0YS5sYW5ndWFnZX08L3NwYW4+PC9wPlxuICA8cD5SYXRpbmc6IDxzcGFuIGNsYXNzPVwiZC1ib2xkXCI+JHtkYXRhPy5yYXRpbmc/LmF2ZXJhZ2UgPz8gJ3Vua25vd24nfTwvc3Bhbj48L3A+XG48L2Rpdj5cbjxwPlByZW1laXJlZDogPHNwYW4gY2xhc3M9XCJkLWJvbGRcIj4ke2RhdGEucHJlbWllcmVkfTwvc3Bhbj48L3A+XG48L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNvbW1lbnQtc2VjdGlvblwiPlxuPGgzPkNvbW1lbnRzKDApPC9oMz5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnQtZGlzcGxheVwiPjwvZGl2PlxuICA8ZGl2PlxuICAgIDxoND5BZGQgTmV3IENvbW1lbnQ8L2g0PlxuICA8L2Rpdj5cbiAgPGZvcm0gaWQ9XCJmb3JtXCIgY2xhc3M9XCJmbGV4IGRpcmVjdGlvblwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCI+XG4gICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIG1heGxlbmd0aD1cIjUwMFwiIHBsYWNlaG9sZGVyPVwiWW91ciBJbnNpZ2h0XCI+PC90ZXh0YXJlYT5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImFkZGluZ1wiPlN1Ym1pdDwvYnV0dG9uPlxuICA8L2Zvcm0+XG48L2Rpdj5cbjwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSAoaXRlbSkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiY29tbWVudGluZ1wiPlxuICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7aXRlbS5jcmVhdGlvbl9kYXRlfTwvcD5cbiAgICA8cD4ke2l0ZW0udXNlcm5hbWV9IDogJHtpdGVtLmNvbW1lbnR9PC9wPlxuICA8L2Rpdj5cbmA7IiwiLyoqXG4gKiBAY2xhc3MgRmV0Y2hXcmFwcGVyIC0gY2xhc3MgdG8gaGFuZGxlIGZldGNoIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IoYmFzZVVSTCkge1xuICAgIHRoaXMuYmFzZVVSTCA9IGJhc2VVUkw7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldCAtIGltcGxlbWVudHMgdGhlIGZldGNoIGdldCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBiZSBhdHRhY2hlZCB0byB0aGUgYmFzZVVSTCB0byBmb3JtIGNvbXBsZXRlIHVybFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIHRoZSBQcm9taXNlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgYXN5bmMgZ2V0KGVuZHBvaW50KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmJhc2VVUkwgKyBlbmRwb2ludCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcG9zdCAtIGltcGxlbWVudHMgdGhlIGZldGNoIHBvc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGJhc2VVUkwgdG8gZm9ybSBjb21wbGV0ZSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSB0aGUgZGF0YSBvYmplY3QgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gdGhlIFByb21pc2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBhc3luYyBwb3N0KGVuZHBvaW50LCBkYXRhKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmJhc2VVUkwgKyBlbmRwb2ludCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLm9rO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IEZldGNoV3JhcHBlciBmcm9tICcuL2ZldGNoV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBMaXN0LCBIZWFkaW5nLCBNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy5qcyc7XG5pbXBvcnQgTGlrZXMgZnJvbSAnLi9saWtlcy5qcyc7XG5cbi8qKlxuICogQGNsYXNzIEhlbHBlciAtIHRoZSBoZWxwZXIgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVyIHtcbiAgc3RhdGljICN0dkFQSSA9IG5ldyBGZXRjaFdyYXBwZXIoJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vJyk7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0SGFuZGxlciAtIGhhbmRsZXMgdGhlIHJlZnJlc2ggYnV0dG9uIGNsaWNrIGV2ZW50XG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gdGhlIGV2ZW50IG9iamVjdFxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SGFuZGxlcihpbnB1dCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEhlbHBlci4jdHZBUEkuZ2V0KGBzZWFyY2gvc2hvd3M/cT0ke2lucHV0fWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IC0gc2VhcmNoIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5mbyhpbnB1dCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEhlbHBlci4jdHZBUEkuZ2V0KGBzaG93cy8ke2lucHV0fWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2QgLSBkaXNwbGF5cyB0aGUgcmVzdWx0IGluIHRoZSBET01cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IC0gdGhlIHNlYXJjaCBpbnB1dFxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZGlzcGxheURhdGEoaW5wdXQpIHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RzLWNvbnRhaW5lcicpLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImxvYWRpbmctc3BpblwiPjwvc3Bhbj4nO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgSGVscGVyLmdldEhhbmRsZXIoaW5wdXQpO1xuICAgICAgVXRpbHMucmVuZGVySGVhZGluZyhpbnB1dCwgSGVhZGluZywgVXRpbHMuZ2V0Q291bnQocmVzdWx0KSk7XG4gICAgICBhd2FpdCBVdGlscy5yZW5kZXIocmVzdWx0LCBMaXN0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5zdGFuY2UgbWV0aG9kIC0gaGFuZGxlcyB0aGUgc2VhcmNoIGV2ZW50XG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gdGhlIGV2ZW50IG9iamVjdFxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBhc3luYyBzZWFyY2hIYW5kbGVyKGUsIGhhbmRsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXNlYXJjaCcpO1xuICAgIHRyeSB7XG4gICAgICBzZWFyY2guY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgICBhd2FpdCBIZWxwZXIuZGlzcGxheURhdGEodmFsdWUpO1xuICAgICAgaGFuZGxlKCk7XG4gICAgICBIZWxwZXIuaGFuZGxlQ29tbWVudHMoKTtcbiAgICAgIGF3YWl0IFV0aWxzLnBvcHVsYXRlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBPYmplY3RcbiAgICogQG1lbWJlcm9mIEhlbHBlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIExpa2VIYW5kbGVyKGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IGVsZW0gPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGF3YWl0IExpa2VzLnBvc3RMaWtlcyhkYXRhKTtcbiAgICBMaWtlcy51cGRhdGVMaWtlcyhkYXRhLCBlbGVtKTtcbiAgICBVdGlscy5hZGRDbGFzcyh0YXJnZXQsICdsaWtlLWFuaW1hdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAbWVtYmVyb2YgSGVscGVyXG4gICAqL1xuICBzdGF0aWMgaGFuZGxlQ29tbWVudHMoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhcmdzID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgPHNwYW4gY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L3NwYW4+PC9wPic7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEhlbHBlci5nZXRJbmZvKGFyZ3MpO1xuICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9IE1vZGFsKGRhdGEpO1xuXG4gICAgICAgICAgVXRpbHMuZGlzcGxheShhcmdzKTtcbiAgICAgICAgICBVdGlscy5oYW5kbGVDbG9zZShtb2RhbCk7XG4gICAgICAgICAgVXRpbHMuaGFuZGxlRm9ybShhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ0NvbW1lbnRzJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcbi8qKlxuICogQGNsYXNzIExpa2VzIC0gaGFuZGxlcyBhbGwgbGlrZXMgcmVsYXRlZCBtZXRob2RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2VzIHtcbiAgc3RhdGljICNBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJyk7XG5cbiAgc3RhdGljICNhcHBJRCA9ICdyZDY0eEtPUFh4R0ZtUHJqOHBVdCc7XG5cbiAgLyoqXG4gICAqIEBpbnN0YW5jZSBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtMCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxuICAgKiBAcmV0dXJucyAtIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgcG9zdExpa2VzKHsgaWQgfSA9IHt9KSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWtlcy4jQVBJLnBvc3QoYGFwcHMvJHtMaWtlcy4jYXBwSUR9L2xpa2VzL2AsIGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcmV0dXJucyAtIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQG1lbWJlcm9mIExpa2VzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0TGlrZXNBbGwoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWtlcy4jQVBJLmdldChgYXBwcy8ke0xpa2VzLiNhcHBJRH0vbGlrZXMvYCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbTAgLSB0aGUgaWQgb2YgdGhlIGl0ZW1cbiAgICogQHJldHVybnMgLSB0aGUgbnVtYmVyIG9mIGxpa2VzXG4gICAqIEBtZW1iZXJvZiBMaWtlc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldExpa2VzT25lKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTGlrZXMuZ2V0TGlrZXNBbGwoKTtcbiAgICBjb25zdCB7IGxpa2VzIH0gPSBhd2FpdCByZXN1bHQuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBpZCkgPz8geyBsaWtlczogMCB9O1xuICAgIHJldHVybiBsaWtlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5zdGFuY2UgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbTAgLSB0aGUgaWQgb2YgdGhlIGl0ZW1cbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IGVsZW0gLSB0aGUgZWxlbWVudCB0byB1cGRhdGUgaXRzIGxpa2VzXG4gICAqIEBtZW1iZXJvZiBMaWtlc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUxpa2VzKHsgaWQgfSA9IHt9LCBlbGVtKSB7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc09uZShpZCk7XG4gICAgZWxlbS5pbm5lckhUTUwgPSBsaWtlcztcbiAgfVxufSIsImltcG9ydCBMaWtlcyBmcm9tICcuL2xpa2VzLmpzJztcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbW1lbnQuanMnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vY29tcG9uZW50cy5qcyc7XG5cbi8qKlxuICogQGNsYXNzIFV0aWxzIC0gdGhlIHV0aWxpdHkgY2xhc3MgdG8gaG9sZCBhbGwgdXRpbHRpdHkgZnVuY3Rpb25hbGl0eVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcmVuZGVyIC0gaGFuZGxlcyB0aGUgcmVuZGVyaW5nIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2Ugb24gdGhlIERPTVxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gdGhlIGFycmF5IHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgc3RhdGljIGFzeW5jIHJlbmRlcihkYXRhID0gW10sIGxpc3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdHMtY29udGFpbmVyJykuaW5uZXJIVE1MID0gZGF0YS5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gbGlzdChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZCAtIHJlbmRlcnMgdGhlIGhlYWRpbmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSB0aGUgdHlwZSBvZiBzZWFyY2hcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGVhZGluZyAtIHJldHVybnMgdGhlIGhlYWRpbmcgY29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIHJlbmRlckhlYWRpbmcodHlwZSwgaGVhZGluZywgbGVuKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmctY29udGFpbmVyJykuaW5uZXJIVE1MID0gaGVhZGluZyh0eXBlLnRvVXBwZXJDYXNlKCksIGxlbik7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIHRoZSBkYXRhIGFycmF5IGdvdHRlbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybnMge051bWJlcn0gdGhlIGxlbmd0aCBvZiB0aGUgQXJyYXlcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgZ2V0Q291bnQoZGF0YSA9IFtdKSB7XG4gICAgcmV0dXJuIGRhdGEubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEByZXR1cm5zIC0gdGhlIGFycmF5IG9mIGl0ZW1zXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXlMaWtlcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBMaWtlcy5nZXRMaWtlc0FsbCgpO1xuICAgIHJldHVybiByZXMubWFwKChpdGVtKSA9PiBpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZHNcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgcG9wdWxhdGUoKSB7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBVdGlscy5kaXNwbGF5TGlrZXMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtbnVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaWtlcy5maW5kKChkYXRhKSA9PiBkYXRhLml0ZW1faWQgPT09IGl0ZW0uZGF0YXNldC5pZCk7XG4gICAgICBpdGVtLmlubmVySFRNTCA9IGlkPy5saWtlcyA/PyAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSBlbGVtIC0gdGhlIGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSB0eXBlIG9mIGNsYXNzXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFkZENsYXNzKGVsZW0sIHR5cGUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQodHlwZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUodHlwZSksIDgwMCk7XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpYyBtZXRob2RcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIC0gdGhlIGNvbW1lbnQgaWRcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50cyhpZCkge1xuICAgIGNvbnN0IGFucyA9IGF3YWl0IENvbW1lbnRzLmdldENvbW1lbnRPbmUoaWQpO1xuICAgIHJldHVybiBhbnMuZXJyb3IgPyBbXSA6IGFucy5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCAtIHRoZSBjb21tZW50IGlkXG4gICAqIEBtZW1iZXJvZiBVdGlsc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGRpc3BsYXkoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgVXRpbHMuZ2V0Q29tbWVudHMoaWQpO1xuICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZGlzcGxheScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtc2VjdGlvbiBoMycpO1xuICAgIGNvbnN0IGNvdW50ID0gVXRpbHMuZ2V0Q291bnQoZGF0YSk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYENvbW1lbnRzKCR7Y291bnR9KWA7XG4gICAgc3BhY2UuaW5uZXJIVE1MID0gZGF0YS5tYXAoKGl0ZW0pID0+IENvbW1lbnQoaXRlbSkpLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWMgbWV0aG9kXG4gICAqIEBwYXJhbSB7SFRNTEVMZW1lbnR9IG1vZGFsIC0gdGhlIG1vZGFsIGVsZW1lbnRcbiAgICogQG1lbWJlcm9mIFV0aWxzXG4gICAqL1xuICBzdGF0aWMgaGFuZGxlQ2xvc2UobW9kYWwpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljIG1ldGhvZFxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgLSB0aGUgY29tbWVudCBpZFxuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHN0YXRpYyBoYW5kbGVGb3JtKGlkKSB7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKTtcbiAgICAgICAgaWYgKChuYW1lLnZhbHVlICE9PSAnJykgJiYgKGNvbW1lbnQudmFsdWUgIT09ICcnKSkge1xuICAgICAgICAgIGUudGFyZ2V0LmNoaWxkcmVuWzJdLmlubmVySFRNTCA9ICc8cD5Mb2FkaW5nIDxzcGFuIGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9zcGFuPjwvcD4nO1xuICAgICAgICAgIGF3YWl0IENvbW1lbnRzLnBvc3RDb21tZW50KGlkLCBuYW1lLnZhbHVlLCBjb21tZW50LnZhbHVlKTtcbiAgICAgICAgICBVdGlscy5kaXNwbGF5KGlkKTtcbiAgICAgICAgICBmb3Jtcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBlLnRhcmdldC5jaGlsZHJlblsyXS5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vYXNzZXRzL0NTUy9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9KU19Nb2R1bGVzL2NvbXBvbmVudHMuanMnO1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL0pTX01vZHVsZXMvaGVscGVyLmpzJztcbmltcG9ydCBVdGlscyBmcm9tICcuL0pTX01vZHVsZXMvdXRpbHMuanMnO1xuXG4vLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIEhlbHBlciBjbGFzc1xuY29uc3QgaGVscGVyID0gbmV3IEhlbHBlcigpO1xuXG4vLyBmdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlrZXMtYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgSGVscGVyLkxpa2VIYW5kbGVyKTtcbiAgfSk7XG59XG5cbmNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG5jb25zdCBpdGVtcyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJ107XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5pbm5lckhUTUwgPSBOYXYoKTtcbiAgYXdhaXQgSGVscGVyLmRpc3BsYXlEYXRhKGl0ZW1zW2luZGV4XSk7XG4gIGF3YWl0IFV0aWxzLnBvcHVsYXRlKCk7XG4gIGhhbmRsZUNsaWNrKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGhlbHBlci5zZWFyY2hIYW5kbGVyKGUsIGhhbmRsZUNsaWNrKTtcbiAgfSk7XG4gIEhlbHBlci5oYW5kbGVDb21tZW50cygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=