/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/card/card.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/card/card.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\n.card {\n  width: 100%;\n  height: auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  position: relative;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s;\n}\nbody.dark .card {\n  color: white;\n}\n.card * {\n  cursor: pointer;\n}\n.card:hover {\n  transform: translateY(-10px);\n}\n.card img {\n  position: relative;\n  width: 100%;\n  border-radius: 5px 5px 0px 0px;\n}\n.card .info-content {\n  padding: 20px;\n  margin: auto 0px;\n  display: flex;\n  flex-direction: column;\n}\n.card h4 {\n  margin-bottom: 1em;\n  font-size: 0.6em;\n}\n.card h6 {\n  font-weight: 600;\n  font-size: 0.5rem;\n}\n.card h6 small {\n  font-weight: 100;\n  font-size: 0.9em;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/components/card/card.component.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AAjCA;EACC,WAAA;EACA,YAAA;EACA,2CDEW;ECDX,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,0BAAA;AAoCD;AAlCC;EACC,YDRM;AC4CR;AAjCC;EACC,eAAA;AAmCF;AAhCC;EACC,4BAAA;AAkCF;AA/BC;EACC,kBAAA;EACA,WAAA;EACA,8BAAA;AAiCF;AA9BC;EACC,aAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;AAgCF;AA7BC;EACC,kBAAA;EACA,gBAAA;AA+BF;AA5BC;EACC,gBAAA;EACA,iBAAA;AA8BF;AA7BE;EACC,gBAAA;EACA,gBAAA;AA+BH","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\n$veryDarkBlue: hsl(207, 26%, 17%);\n$veryDarkBlueLight: hsl(200, 15%, 8%);\n$darkGray: hsl(0, 0%, 52%);\n$veryLightGray: hsl(0, 0%, 98%);\n$white: hsl(0, 0%, 100%);\n\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\n$globalPadding: 0 6%;\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 30px;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tmin-height: 100vh;\n\tbackground: $veryLightGray;\n\n\t&.dark {\n\t\tbackground: $veryDarkBlue;\n\t}\n}\n\n.container {\n\tpadding: $globalPadding;\n\tmargin: 1.5em 0;\n\tgrid-column: 1 / span 4;\n\n\tspan.spinner-container {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\n\t\tbody.dark & {\n\t\t\tcolor: $white;\n\t\t}\n\t}\n}\n\n.not-coincidences {\n\tgrid-column: 1 / span 4;\n\ttext-align: center;\n\n\tbody.dark & {\n\t\tcolor: $white;\n\t}\n}\n","@import \"../../style.scss\";\n\n.card {\n\twidth: 100%;\n\theight: auto;\n\tbox-shadow: $boxShadow;\n\tposition: relative;\n\tborder-radius: 5px;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttransition: transform 0.2s;\n\n\tbody.dark & {\n\t\tcolor: $white;\n\t}\n\n\t* {\n\t\tcursor: pointer;\n\t}\n\n\t&:hover {\n\t\ttransform: translateY(-10px);\n\t}\n\n\timg {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tborder-radius: 5px 5px 0px 0px;\n\t}\n\n\t.info-content {\n\t\tpadding: 20px;\n\t\tmargin: auto 0px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\th4 {\n\t\tmargin-bottom: 1em;\n\t\tfont-size: 0.6em;\n\t}\n\n\th6 {\n\t\tfont-weight: 600;\n\t\tfont-size: 0.5rem;\n\t\tsmall {\n\t\t\tfont-weight: 100;\n\t\t\tfont-size: 0.9em;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\nheader {\n  min-height: 80px;\n  background: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6%;\n}\nheader i,\nheader a {\n  font-size: 15px;\n}\nheader i,\nheader a,\nheader h4 {\n  cursor: pointer;\n}\n@media only screen and (max-width: 520px) {\n  header h4 {\n    font-size: 20px;\n  }\n  header i,\nheader a {\n    font-size: 12px;\n  }\n}\nbody.dark header {\n  background: #2b3945;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/components/navbar/navbar.component.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AAjCA;EACC,gBAAA;EACA,iBDCO;ECAP,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;AAoCD;AAlCC;;EAEC,eAAA;AAoCF;AAjCC;;;EAGC,eAAA;AAmCF;AAhCC;EACC;IACC,eAAA;EAkCD;EA/BA;;IAEC,eAAA;EAiCD;AACF;AA9BC;EACC,mBDlCS;ECmCT,YD9BM;AC8DR","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\n$veryDarkBlue: hsl(207, 26%, 17%);\n$veryDarkBlueLight: hsl(200, 15%, 8%);\n$darkGray: hsl(0, 0%, 52%);\n$veryLightGray: hsl(0, 0%, 98%);\n$white: hsl(0, 0%, 100%);\n\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\n$globalPadding: 0 6%;\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 30px;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tmin-height: 100vh;\n\tbackground: $veryLightGray;\n\n\t&.dark {\n\t\tbackground: $veryDarkBlue;\n\t}\n}\n\n.container {\n\tpadding: $globalPadding;\n\tmargin: 1.5em 0;\n\tgrid-column: 1 / span 4;\n\n\tspan.spinner-container {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\n\t\tbody.dark & {\n\t\t\tcolor: $white;\n\t\t}\n\t}\n}\n\n.not-coincidences {\n\tgrid-column: 1 / span 4;\n\ttext-align: center;\n\n\tbody.dark & {\n\t\tcolor: $white;\n\t}\n}\n","@import \"../../style.scss\";\n\nheader {\n\tmin-height: 80px;\n\tbackground: $white;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: $globalPadding;\n\n\ti,\n\ta {\n\t\tfont-size: 15px;\n\t}\n\n\ti,\n\ta,\n\th4 {\n\t\tcursor: pointer;\n\t}\n\n\t@media only screen and (max-width: 520px) {\n\t\th4 {\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\ti,\n\t\ta {\n\t\t\tfont-size: 12px;\n\t\t}\n\t}\n\n\tbody.dark & {\n\t\tbackground: $darkBlue;\n\t\tcolor: $white;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/country-detail/country-detail.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/country-detail/country-detail.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\n.back-container {\n  width: 100%;\n  margin-bottom: 1.5rem;\n}\n.back-container .back {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  background: white;\n  color: #858585;\n  padding: 10px 40px;\n  font-size: 0.5em;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: none;\n  text-decoration: none;\n}\nbody.dark .back-container .back {\n  background: #2b3945;\n  color: white;\n}\n.back-container i {\n  font-size: 1em;\n}\n\n.country {\n  display: flex;\n  justify-content: space-between;\n}\nbody.dark .country * {\n  color: white;\n}\n.country img {\n  width: 40%;\n}\n.country .info-detail {\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.country .info-detail h4 {\n  font-size: 1em;\n}\n.country .info-detail h6 {\n  font-weight: 900;\n  font-size: 0.5rem;\n}\n.country .info-detail h6 small {\n  font-weight: 100;\n  font-size: 0.9em;\n}\n.country .info-detail .info {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px 20px;\n  margin-top: 0.3em;\n}\n.country .info-detail .borders-content {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  margin-top: 0.3em;\n}\n.country .info-detail .borders-content .borders {\n  display: flex;\n  flex-wrap: wrap;\n}\n.country .info-detail .borders-content .borders button {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  background: white;\n  color: #858585;\n  cursor: pointer;\n  padding: 2px 10px;\n  margin: 0px 10px 10px 10px;\n  font-size: 0.5em;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  transition: all 0.2s;\n}\n.country .info-detail .borders-content .borders button:hover {\n  transform: translateY(-5px);\n}\nbody.dark .country .info-detail .borders-content .borders button {\n  background: #2b3945;\n  color: white;\n}\n@media only screen and (max-width: 790px) {\n  .country {\n    flex-direction: column;\n  }\n  .country img {\n    width: 100%;\n  }\n  .country .info-detail {\n    width: 100%;\n    margin-top: 1.5em;\n  }\n  .country .info-detail h4 {\n    margin-bottom: 1.5em;\n  }\n}\n@media only screen and (max-width: 460px) {\n  .country .info-detail .info {\n    grid-template-columns: 1fr;\n  }\n  .country .info-detail .borders-content {\n    grid-template-columns: 1fr;\n    margin-top: 1em;\n  }\n  .country .info-detail .borders-content .borders {\n    margin-top: 0.3em;\n  }\n  .country .info-detail .borders-content .borders button {\n    margin: 10px 10px 0px 0px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/pages/country-detail/country-detail.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AAjCA;EACC,WAAA;EACA,qBAAA;AAoCD;AAlCC;EACC,2CAAA;EACA,iBDHM;ECIN,cDNS;ECQT,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,oBAAA;EACA,qBAAA;AAmCF;AAjCE;EACC,mBDpBQ;ECqBR,YDhBK;ACmDR;AA/BC;EACC,cAAA;AAiCF;;AA7BA;EACC,aAAA;EACA,8BAAA;AAgCD;AA9BC;EACC,YD9BM;AC8DR;AA7BC;EACC,UAAA;AA+BF;AA5BC;EACC,UAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;AA8BF;AA5BE;EACC,cAAA;AA8BH;AA3BE;EACC,gBAAA;EACA,iBAAA;AA6BH;AA5BG;EACC,gBAAA;EACA,gBAAA;AA8BJ;AA1BE;EACC,aAAA;EACA,qCAAA;EACA,mBAAA;EACA,iBAAA;AA4BH;AAzBE;EACC,aAAA;EACA,+BAAA;EACA,iBAAA;AA2BH;AAzBG;EACC,aAAA;EACA,eAAA;AA2BJ;AAzBI;EACC,2CDvEO;ECwEP,iBD1EG;EC2EH,cD7EM;EC+EN,eAAA;EACA,iBAAA;EACA,0BAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,oBAAA;AA0BL;AAxBK;EACC,2BAAA;AA0BN;AAvBK;EACC,mBDhGK;ECiGL,YD5FE;ACqHR;AAlBC;EA1ED;IA2EE,sBAAA;EAqBA;EAnBA;IACC,WAAA;EAqBD;EAlBA;IACC,WAAA;IACA,iBAAA;EAoBD;EAlBC;IACC,oBAAA;EAoBF;AACF;AAhBC;EAEE;IACC,0BAAA;EAiBF;EAdC;IACC,0BAAA;IACA,eAAA;EAgBF;EAdE;IACC,iBAAA;EAgBH;EAfG;IACC,yBAAA;EAiBJ;AACF","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\n$veryDarkBlue: hsl(207, 26%, 17%);\n$veryDarkBlueLight: hsl(200, 15%, 8%);\n$darkGray: hsl(0, 0%, 52%);\n$veryLightGray: hsl(0, 0%, 98%);\n$white: hsl(0, 0%, 100%);\n\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\n$globalPadding: 0 6%;\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 30px;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tmin-height: 100vh;\n\tbackground: $veryLightGray;\n\n\t&.dark {\n\t\tbackground: $veryDarkBlue;\n\t}\n}\n\n.container {\n\tpadding: $globalPadding;\n\tmargin: 1.5em 0;\n\tgrid-column: 1 / span 4;\n\n\tspan.spinner-container {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\n\t\tbody.dark & {\n\t\t\tcolor: $white;\n\t\t}\n\t}\n}\n\n.not-coincidences {\n\tgrid-column: 1 / span 4;\n\ttext-align: center;\n\n\tbody.dark & {\n\t\tcolor: $white;\n\t}\n}\n","@import \"../../style.scss\";\n\n.back-container {\n\twidth: 100%;\n\tmargin-bottom: 1.5rem;\n\n\t.back {\n\t\tbox-shadow: $boxShadow;\n\t\tbackground: $white;\n\t\tcolor: $darkGray;\n\n\t\tpadding: 10px 40px;\n\t\tfont-size: 0.5em;\n\t\tborder-radius: 5px;\n\t\toutline: none;\n\t\tborder: none;\n\t\ttext-transform: none;\n\t\ttext-decoration: none;\n\n\t\tbody.dark & {\n\t\t\tbackground: $darkBlue;\n\t\t\tcolor: $white;\n\t\t}\n\t}\n\n\ti {\n\t\tfont-size: 1em;\n\t}\n}\n\n.country {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\tbody.dark & * {\n\t\tcolor: $white;\n\t}\n\n\timg {\n\t\twidth: 40%;\n\t}\n\n\t.info-detail {\n\t\twidth: 55%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\n\t\th4 {\n\t\t\tfont-size: 1em;\n\t\t}\n\n\t\th6 {\n\t\t\tfont-weight: 900;\n\t\t\tfont-size: 0.5rem;\n\t\t\tsmall {\n\t\t\t\tfont-weight: 100;\n\t\t\t\tfont-size: 0.9em;\n\t\t\t}\n\t\t}\n\n\t\t.info {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t\tgrid-gap: 10px 20px;\n\t\t\tmargin-top: 0.3em;\n\t\t}\n\n\t\t.borders-content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: auto 1fr;\n\t\t\tmargin-top: 0.3em;\n\n\t\t\t.borders {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\n\t\t\t\tbutton {\n\t\t\t\t\tbox-shadow: $boxShadow;\n\t\t\t\t\tbackground: $white;\n\t\t\t\t\tcolor: $darkGray;\n\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tpadding: 2px 10px;\n\t\t\t\t\tmargin: 0px 10px 10px 10px;\n\t\t\t\t\tfont-size: 0.5em;\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\toutline: none;\n\t\t\t\t\tborder: none;\n\t\t\t\t\ttransition: all 0.2s;\n\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\ttransform: translateY(-5px);\n\t\t\t\t\t}\n\n\t\t\t\t\tbody.dark & {\n\t\t\t\t\t\tbackground: $darkBlue;\n\t\t\t\t\t\tcolor: $white;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 790px) {\n\t\tflex-direction: column;\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.info-detail {\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 1.5em;\n\n\t\t\th4 {\n\t\t\t\tmargin-bottom: 1.5em;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 460px) {\n\t\t.info-detail {\n\t\t\t.info {\n\t\t\t\tgrid-template-columns: 1fr;\n\t\t\t}\n\n\t\t\t.borders-content {\n\t\t\t\tgrid-template-columns: 1fr;\n\t\t\t\tmargin-top: 1em;\n\n\t\t\t\t.borders {\n\t\t\t\t\tmargin-top: 0.3em;\n\t\t\t\t\tbutton {\n\t\t\t\t\t\tmargin: 10px 10px 0px 0px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/home.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/home.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\n.inputs-container {\n  display: flex;\n  justify-content: space-between;\n}\n.inputs-container .input-content {\n  width: 35%;\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  background: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  box-sizing: content-box;\n  border-radius: 5px;\n  flex-grow: 0;\n}\n.inputs-container .input-content input {\n  width: 100%;\n  outline: none;\n  border: none;\n  font-size: 0.5em;\n  font-weight: 100;\n}\n.inputs-container .input-content i {\n  color: #858585;\n  margin: 10px;\n  font-size: 15px;\n}\nbody.dark .inputs-container .input-content {\n  background: #2b3945;\n}\nbody.dark .inputs-container .input-content input,\nbody.dark .inputs-container .input-content .select-content {\n  background: #2b3945;\n  color: white;\n}\n.inputs-container .input-content:nth-child(2) {\n  justify-self: end;\n  width: 15%;\n  padding: 10px 20px;\n  position: relative;\n  flex-grow: 0;\n}\n.inputs-container .input-content:nth-child(2) * {\n  cursor: pointer;\n}\n.inputs-container .input-content:nth-child(2) .select-content {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border: none;\n  outline: none;\n  transition: all 0.3s;\n}\n.inputs-container .input-content:nth-child(2) .select-content span,\n.inputs-container .input-content:nth-child(2) .select-content i {\n  color: #858585;\n  font-size: 0.5em;\n  cursor: default;\n  transition: all 0.3s;\n}\n.inputs-container .input-content:nth-child(2) .select-content:focus i {\n  transform: rotate(180deg);\n}\n.inputs-container .input-content:nth-child(2) .dropdown {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  overflow-y: hidden;\n  flex-direction: column;\n  transform: translate(0, 65px);\n  background: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  height: 280px;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  z-index: 10;\n}\nbody.dark .inputs-container .input-content:nth-child(2) .dropdown {\n  background: #2b3945;\n}\n.inputs-container .input-content:nth-child(2) .dropdown span.option {\n  color: #858585;\n  padding: 10px 20px;\n  font-size: 0.5em;\n  cursor: pointer;\n}\n.inputs-container .input-content:nth-child(2) .dropdown span.option:hover {\n  background: #858585;\n  color: white;\n}\nbody.dark .inputs-container .input-content:nth-child(2) .dropdown span.option {\n  background: #2b3945;\n}\n.inputs-container .input-content:nth-child(2) .dropdown.expand {\n  animation-name: optionsEntrancy;\n}\n@keyframes optionsEntrancy {\n  0% {\n    display: none;\n    height: 0px;\n  }\n  100% {\n    height: 280px;\n    display: flex;\n  }\n}\n.inputs-container .input-content:nth-child(2) .dropdown.hide {\n  animation-name: optionsOut;\n}\n@keyframes optionsOut {\n  0% {\n    height: 280px;\n    display: flex;\n  }\n  100% {\n    height: 0px;\n    display: none;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .inputs-container .input-content {\n    width: 40%;\n  }\n  .inputs-container .input-content:nth-child(2) {\n    width: 20%;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .inputs-container {\n    flex-direction: column;\n  }\n  .inputs-container .input-content {\n    margin-bottom: 1.5em;\n    width: auto;\n  }\n  .inputs-container .input-content:nth-child(2) {\n    margin-bottom: 0;\n    width: 40%;\n  }\n}\n\n#cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1.5em;\n  align-items: flex-start;\n  margin: 1.5rem 0;\n}\n@media only screen and (max-width: 1000px) {\n  #cards-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media only screen and (max-width: 850px) {\n  #cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (max-width: 640px) {\n  #cards-grid {\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/pages/home/home.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AA/BA;EACC,aAAA;EACA,8BAAA;AAkCD;AAhCC;EACC,UAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBDRM;ECSN,2CDPU;ECQV,uBAAA;EACA,kBAAA;EACA,YAAA;AAkCF;AAhCE;EACC,WAAA;EACA,aAAA;EACA,YAAA;EACA,gBArBe;EAsBf,gBAAA;AAkCH;AA/BE;EACC,cDzBQ;EC0BR,YAAA;EACA,eAAA;AAiCH;AA9BE;EACC,mBDlCQ;ACkEX;AA/BG;;EAEC,mBDrCO;ECsCP,YDjCI;ACkER;AA5BC;EACC,iBAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;AA8BF;AA5BE;EACC,eAAA;AA8BH;AA3BE;EACC,aAAA;EACA,WAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;AA6BH;AA3BG;;EAEC,cD/DO;ECgEP,gBAjEc;EAkEd,eAAA;EACA,oBAAA;AA6BJ;AAzBI;EACC,yBAAA;AA2BL;AAtBE;EAGC,kBAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,iBDpFK;ECqFL,2CDnFS;ECoFT,WAAA;EACA,kBAAA;EACA,aAbiB;EAcjB,wBAAA;EACA,6BAAA;EACA,WAAA;AAsBH;AApBG;EACC,mBDnGO;ACyHX;AAnBG;EACC,cDpGO;ECqGP,kBAAA;EACA,gBAAA;EACA,eAAA;AAqBJ;AAnBI;EACC,mBD1GM;EC2GN,YAAA;AAqBL;AAlBI;EACC,mBDlHM;ACsIX;AAhBG;EAYC,+BAAA;AAOJ;AAlBI;EACC;IACC,aAAA;IACA,WAAA;EAoBJ;EAjBG;IACC,aA9Cc;IA+Cd,aAAA;EAmBJ;AACF;AAdG;EAaC,0BAAA;AAIJ;AAhBI;EACC;IACC,aAxDc;IAyDd,aAAA;EAkBJ;EAfG;IACC,WAAA;IACA,aAAA;EAiBJ;AACF;AATC;EACC;IACC,UAAA;EAWD;EATA;IACC,UAAA;EAWD;AACF;AARC;EA5JD;IA6JE,sBAAA;EAWA;EATA;IACC,oBAAA;IACA,WAAA;EAWD;EARA;IACC,gBAAA;IACA,UAAA;EAUD;AACF;;AANA;EACC,aAAA;EACA,qCAAA;EACA,eAAA;EACA,uBAAA;EACA,gBAAA;AASD;AAPC;EAPD;IAQE,qCAAA;EAUA;AACF;AARC;EAXD;IAYE,qCAAA;EAWA;AACF;AATC;EAfD;IAgBE,0BAAA;EAYA;AACF","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\n$veryDarkBlue: hsl(207, 26%, 17%);\n$veryDarkBlueLight: hsl(200, 15%, 8%);\n$darkGray: hsl(0, 0%, 52%);\n$veryLightGray: hsl(0, 0%, 98%);\n$white: hsl(0, 0%, 100%);\n\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\n$globalPadding: 0 6%;\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 30px;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tmin-height: 100vh;\n\tbackground: $veryLightGray;\n\n\t&.dark {\n\t\tbackground: $veryDarkBlue;\n\t}\n}\n\n.container {\n\tpadding: $globalPadding;\n\tmargin: 1.5em 0;\n\tgrid-column: 1 / span 4;\n\n\tspan.spinner-container {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\n\t\tbody.dark & {\n\t\t\tcolor: $white;\n\t\t}\n\t}\n}\n\n.not-coincidences {\n\tgrid-column: 1 / span 4;\n\ttext-align: center;\n\n\tbody.dark & {\n\t\tcolor: $white;\n\t}\n}\n","@import \"../../style.scss\";\n\n$font-size-input: 0.5em;\n\n.inputs-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\t.input-content {\n\t\twidth: 35%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 5px 10px;\n\t\tbackground: $white;\n\t\tbox-shadow: $boxShadow;\n\t\tbox-sizing: content-box;\n\t\tborder-radius: 5px;\n\t\tflex-grow: 0;\n\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t\toutline: none;\n\t\t\tborder: none;\n\t\t\tfont-size: $font-size-input;\n\t\t\tfont-weight: 100;\n\t\t}\n\n\t\ti {\n\t\t\tcolor: $darkGray;\n\t\t\tmargin: 10px;\n\t\t\tfont-size: 15px;\n\t\t}\n\n\t\tbody.dark & {\n\t\t\tbackground: $darkBlue;\n\t\t\tinput,\n\t\t\t.select-content {\n\t\t\t\tbackground: $darkBlue;\n\t\t\t\tcolor: $white;\n\t\t\t}\n\t\t}\n\t}\n\n\t.input-content:nth-child(2) {\n\t\tjustify-self: end;\n\t\twidth: 15%;\n\t\tpadding: 10px 20px;\n\t\tposition: relative;\n\t\tflex-grow: 0;\n\n\t\t* {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.select-content {\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tbackground: white;\n\t\t\tborder: none;\n\t\t\toutline: none;\n\t\t\ttransition: all 0.3s;\n\n\t\t\tspan,\n\t\t\ti {\n\t\t\t\tcolor: $darkGray;\n\t\t\t\tfont-size: $font-size-input;\n\t\t\t\tcursor: default;\n\t\t\t\ttransition: all 0.3s;\n\t\t\t}\n\n\t\t\t&:focus {\n\t\t\t\ti {\n\t\t\t\t\ttransform: rotate(180deg);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.dropdown {\n\t\t\t$dropdownHeight: 280px;\n\n\t\t\tposition: absolute;\n\t\t\tdisplay: none;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\toverflow-y: hidden;\n\t\t\tflex-direction: column;\n\t\t\ttransform: translate(0, 65px);\n\t\t\tbackground: $white;\n\t\t\tbox-shadow: $boxShadow;\n\t\t\twidth: 100%;\n\t\t\tborder-radius: 5px;\n\t\t\theight: $dropdownHeight;\n\t\t\tanimation-duration: 0.3s;\n\t\t\tanimation-fill-mode: forwards;\n\t\t\tz-index: 10;\n\n\t\t\tbody.dark & {\n\t\t\t\tbackground: $darkBlue;\n\t\t\t}\n\n\t\t\tspan.option {\n\t\t\t\tcolor: $darkGray;\n\t\t\t\tpadding: 10px 20px;\n\t\t\t\tfont-size: 0.5em;\n\t\t\t\tcursor: pointer;\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: $darkGray;\n\t\t\t\t\tcolor: white;\n\t\t\t\t}\n\n\t\t\t\tbody.dark & {\n\t\t\t\t\tbackground: $darkBlue;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&.expand {\n\t\t\t\t@keyframes optionsEntrancy {\n\t\t\t\t\t0% {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\theight: 0px;\n\t\t\t\t\t}\n\n\t\t\t\t\t100% {\n\t\t\t\t\t\theight: $dropdownHeight;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tanimation-name: optionsEntrancy;\n\t\t\t}\n\n\t\t\t&.hide {\n\t\t\t\t@keyframes optionsOut {\n\t\t\t\t\t0% {\n\t\t\t\t\t\theight: $dropdownHeight;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t}\n\n\t\t\t\t\t100% {\n\t\t\t\t\t\theight: 0px;\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tanimation-name: optionsOut;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 1000px) {\n\t\t.input-content {\n\t\t\twidth: 40%;\n\t\t}\n\t\t.input-content:nth-child(2) {\n\t\t\twidth: 20%;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 850px) {\n\t\tflex-direction: column;\n\n\t\t.input-content {\n\t\t\tmargin-bottom: 1.5em;\n\t\t\twidth: auto;\n\t\t}\n\n\t\t.input-content:nth-child(2) {\n\t\t\tmargin-bottom: 0;\n\t\t\twidth: 40%;\n\t\t}\n\t}\n}\n\n#cards-grid {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-gap: 1.5em;\n\talign-items: flex-start;\n\tmargin: 1.5rem 0;\n\n\t@media only screen and (max-width: 1000px) {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\t@media only screen and (max-width: 850px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t@media only screen and (max-width: 640px) {\n\t\tgrid-template-columns: 1fr;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;AAVD;;AAaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;AAOhB;AAYC;EACC,mBAvBa;AAaf;;AAcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;AAXD;AAaC;EACC,aAAA;EACA,uBAAA;AAXF;AAaE;EACC,YAjCK;AAsBR;;AAgBA;EACC,qBAAA;EACA,kBAAA;AAbD;AAeC;EACC,YA3CM;AA8BR","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\n$veryDarkBlue: hsl(207, 26%, 17%);\n$veryDarkBlueLight: hsl(200, 15%, 8%);\n$darkGray: hsl(0, 0%, 52%);\n$veryLightGray: hsl(0, 0%, 98%);\n$white: hsl(0, 0%, 100%);\n\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\n$globalPadding: 0 6%;\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 30px;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tmin-height: 100vh;\n\tbackground: $veryLightGray;\n\n\t&.dark {\n\t\tbackground: $veryDarkBlue;\n\t}\n}\n\n.container {\n\tpadding: $globalPadding;\n\tmargin: 1.5em 0;\n\tgrid-column: 1 / span 4;\n\n\tspan.spinner-container {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\n\t\tbody.dark & {\n\t\t\tcolor: $white;\n\t\t}\n\t}\n}\n\n.not-coincidences {\n\tgrid-column: 1 / span 4;\n\ttext-align: center;\n\n\tbody.dark & {\n\t\tcolor: $white;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/components/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<img src=\"{flag}\" class=\"flag\" />\n\n<div class=\"info-content\">\n\t<h4>{name}</h4>\n\n\t<h6>Population: <small>{population}</small></h6>\n\t<h6>Region: <small>{region}</small></h6>\n\t<h6>Capital: <small>{capital}</small></h6>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/card/card.component.scss":
/*!*************************************************!*\
  !*** ./src/components/card/card.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./card.component.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/card/card.component.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/components/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component.html */ "./src/components/card/card.component.html");
/* harmony import */ var _card_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component.scss */ "./src/components/card/card.component.scss");
/* harmony import */ var _card_component_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_component_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_index_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/index.routes */ "./src/routes/index.routes.ts");



var DOMData;
(function (DOMData) {
    DOMData["Flag"] = "{flag}";
    DOMData["Name"] = "{name}";
    DOMData["Population"] = "{population}";
    DOMData["Region"] = "{region}";
    DOMData["Capital"] = "{capital}";
})(DOMData || (DOMData = {}));
class CardComponent {
    static render(country) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = country.alpha3Code;
        card.addEventListener("click", CardComponent.onCardClick);
        let viewFormat = _card_component_html__WEBPACK_IMPORTED_MODULE_0___default.a;
        viewFormat = viewFormat.replace(DOMData.Flag, country.flag);
        viewFormat = viewFormat.replace(DOMData.Capital, country.capital);
        viewFormat = viewFormat.replace(DOMData.Name, country.name);
        viewFormat = viewFormat.replace(DOMData.Population, Intl.NumberFormat().format(country.population));
        viewFormat = viewFormat.replace(DOMData.Region, country.region);
        card.innerHTML = viewFormat;
        return card;
    }
    //Handlers
    static onCardClick(event) {
        let card = event.target;
        while (!card.classList.contains("card"))
            card = card.parentNode;
        window.location.hash = `${_routes_index_routes__WEBPACK_IMPORTED_MODULE_2__["URLS"].country}${card.id}`;
    }
}


/***/ }),

/***/ "./src/components/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/components/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"container\">\n\t<span class=\"spinner-container\">\n\t\t<i class=\"fas fa-spinner fa-pulse\"></i>\n\t</span>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/components/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<h4>\n\tWhere in the world?\n</h4>\n\n<a>\n\t<i class=\"far fa-moon\"></i>\n\tDark Mode\n</a>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./navbar.component.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.component.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/components/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.html */ "./src/components/navbar/navbar.component.html");
/* harmony import */ var _navbar_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "./src/components/navbar/navbar.component.scss");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__);


class NavbarComponent {
    render() {
        const header = document.createElement("header");
        header.innerHTML = _navbar_component_html__WEBPACK_IMPORTED_MODULE_0___default.a;
        header.getElementsByTagName("h4")[0].addEventListener("click", this.onGoToHome);
        header.getElementsByTagName("a")[0].addEventListener("click", this.onThemeModeChange);
        return header;
    }
    //Handlers
    onThemeModeChange() {
        document.body.classList.toggle("dark");
    }
    onGoToHome() {
        window.location.hash = "#/home";
    }
}


/***/ }),

/***/ "./src/components/no-data/no-data.component.html":
/*!*******************************************************!*\
  !*** ./src/components/no-data/no-data.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span class=\"not-coincidences\">Not coincidences</span>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/components/navbar/navbar.component.ts");
/* harmony import */ var _routes_index_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/index.routes */ "./src/routes/index.routes.ts");



class App {
    constructor() {
        this.router = new _routes_index_routes__WEBPACK_IMPORTED_MODULE_2__["Router"]();
        this.header = document.getElementById("header");
        this.header.appendChild(new _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]().render());
        window.location.hash = "#/home";
    }
    initApp() {
        this.router.navigate(window.location.hash);
        window.addEventListener("hashchange", () => this.router.navigate(window.location.hash));
    }
}
const app = new App();
app.initApp();


/***/ }),

/***/ "./src/models/countries.interfaces.ts":
/*!********************************************!*\
  !*** ./src/models/countries.interfaces.ts ***!
  \********************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
var Region;
(function (Region) {
    Region["All"] = "All";
    Region["Africa"] = "Africa";
    Region["Americas"] = "Americas";
    Region["Asia"] = "Asia";
    Region["Europe"] = "Europe";
    Region["Oceania"] = "Oceania";
    Region["Polar"] = "Polar";
})(Region || (Region = {}));


/***/ }),

/***/ "./src/pages/country-detail/country-detail.html":
/*!******************************************************!*\
  !*** ./src/pages/country-detail/country-detail.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"back-container\">\n\t<a class=\"back\" href=\"javascript:history.back()\">\n\t\t<i class=\"fas fa-arrow-left\"></i>\n\t\tBack\n\t</a>\n</div>\n\n<div class=\"country\">\n\t<img src=\"{flag}\" />\n\t<div class=\"info-detail\">\n\t\t<h4>{name}</h4>\n\n\t\t<div class=\"info\">\n\t\t\t<h6>Native Name: <small>{nativeName}</small></h6>\n\t\t\t<h6>Top Level Domain: <small>{topLevelDomain}</small></h6>\n\t\t\t<h6>Population: <small>{population}</small></h6>\n\t\t\t<h6>Currencies: <small>{currencies}</small></h6>\n\t\t\t<h6>Region: <small>{region}</small></h6>\n\t\t\t<h6>Lenguages: <small>{languages}</small></h6>\n\t\t\t<h6>Sub Region: <small>{subregion}</small></h6>\n\t\t\t<h6>Capital: <small>{capital}</small></h6>\n\t\t</div>\n\n\t\t<div class=\"borders-content\">\n\t\t\t<h6>Borders:</h6>\n\t\t\t<div class=\"borders\"></div>\n\t\t</div>\n\t</div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/pages/country-detail/country-detail.scss":
/*!******************************************************!*\
  !*** ./src/pages/country-detail/country-detail.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./country-detail.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/country-detail/country-detail.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/country-detail/country-detail.ts":
/*!****************************************************!*\
  !*** ./src/pages/country-detail/country-detail.ts ***!
  \****************************************************/
/*! exports provided: CountryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailPage", function() { return CountryDetailPage; });
/* harmony import */ var _country_detail_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-detail.html */ "./src/pages/country-detail/country-detail.html");
/* harmony import */ var _country_detail_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_country_detail_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _country_detail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-detail.scss */ "./src/pages/country-detail/country-detail.scss");
/* harmony import */ var _country_detail_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_country_detail_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_index_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/index.routes */ "./src/routes/index.routes.ts");
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/countries.service */ "./src/services/countries.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




var DOMData;
(function (DOMData) {
    DOMData["Flag"] = "{flag}";
    DOMData["Name"] = "{name}";
    DOMData["NativeName"] = "{nativeName}";
    DOMData["Population"] = "{population}";
    DOMData["Region"] = "{region}";
    DOMData["Subregion"] = "{subregion}";
    DOMData["Capital"] = "{capital}";
    DOMData["TopLevelDomain"] = "{topLevelDomain}";
    DOMData["Currencies"] = "{currencies}";
    DOMData["Languages"] = "{languages}";
})(DOMData || (DOMData = {}));
class CountryDetailPage {
    static render(code) {
        return __awaiter(this, void 0, void 0, function* () {
            let resp = (yield _services_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"].getByCode(code));
            if (resp["status"]) {
                window.location.hash = _routes_index_routes__WEBPACK_IMPORTED_MODULE_2__["URLS"].notFound;
                return;
            }
            const country = resp;
            let viewFormat = _country_detail_html__WEBPACK_IMPORTED_MODULE_0___default.a;
            viewFormat = viewFormat.replace(DOMData.Capital, country.capital);
            viewFormat = viewFormat.replace(DOMData.Flag, country.flag);
            viewFormat = viewFormat.replace(DOMData.Name, country.name);
            viewFormat = viewFormat.replace(DOMData.NativeName, country.nativeName);
            viewFormat = viewFormat.replace(DOMData.Population, Intl.NumberFormat().format(country.population));
            viewFormat = viewFormat.replace(DOMData.Region, country.region);
            viewFormat = viewFormat.replace(DOMData.Subregion, country.subregion);
            let domains = "";
            country.topLevelDomain.forEach((domain) => (domains += `${domain} `));
            viewFormat = viewFormat.replace(DOMData.TopLevelDomain, domains);
            let currencies = "";
            country.currencies.forEach((currency) => (currencies += `${currency.name} `));
            viewFormat = viewFormat.replace(DOMData.Currencies, currencies);
            let lenguages = "";
            country.languages.forEach((language) => (lenguages += `${language.name} `));
            viewFormat = viewFormat.replace(DOMData.Languages, lenguages);
            const container = document.createElement("div");
            container.classList.add("container");
            container.innerHTML = viewFormat;
            const borders = container.getElementsByClassName("borders")[0];
            country.borders.forEach((border, index) => {
                const borderButton = document.createElement("button");
                borderButton.id = border;
                borderButton.innerHTML = country.bordersSt[index];
                borderButton.addEventListener("click", CountryDetailPage.onBorderClick);
                borders.appendChild(borderButton);
            });
            return container;
        });
    }
    static onBorderClick(event) {
        const buttonTarget = event.target;
        window.location.hash = _routes_index_routes__WEBPACK_IMPORTED_MODULE_2__["URLS"].country + buttonTarget.id;
    }
}


/***/ }),

/***/ "./src/pages/home/home.html":
/*!**********************************!*\
  !*** ./src/pages/home/home.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"inputs-container\">\n\t<span class=\"input-content\">\n\t\t<i class=\"fas fa-search\"></i>\n\t\t<input type=\"text\" id=\"search-bar\" placeholder=\"Search for a country\" />\n\t</span>\n\n\t<span class=\"input-content\">\n\t\t<button class=\"select-content\">\n\t\t\t<span>Filter by region</span>\n\t\t\t<i class=\"fas fa-chevron-down\"></i>\n\t\t</button>\n\t</span>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/pages/home/home.scss":
/*!**********************************!*\
  !*** ./src/pages/home/home.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/home.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/home/home.ts":
/*!********************************!*\
  !*** ./src/pages/home/home.ts ***!
  \********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.html */ "./src/pages/home/home.html");
/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/loader/loader.component.html */ "./src/components/loader/loader.component.html");
/* harmony import */ var _components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_no_data_no_data_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/no-data/no-data.component.html */ "./src/components/no-data/no-data.component.html");
/* harmony import */ var _components_no_data_no_data_component_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_no_data_no_data_component_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.scss */ "./src/pages/home/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/countries.service */ "./src/services/countries.service.ts");
/* harmony import */ var _models_countries_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/countries.interfaces */ "./src/models/countries.interfaces.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/card/card.component */ "./src/components/card/card.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class HomePage {
    constructor() {
        this.regionSelect = null;
        this.regionOptions = document.createElement("div");
        this.conutriesData = [];
        this.initDOMObjects();
    }
    initDOMObjects() {
        this.regionOptions.id = "dropdown";
        this.regionOptions.classList.add("dropdown");
        Object.keys(_models_countries_interfaces__WEBPACK_IMPORTED_MODULE_5__["Region"]).forEach((region) => {
            var _a;
            const option = document.createElement("span");
            option.classList.add("option");
            option.textContent = region;
            option.addEventListener("click", HomePage.onOptionClick);
            (_a = this.regionOptions) === null || _a === void 0 ? void 0 : _a.appendChild(option);
        });
    }
    render() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const homeContainer = document.createElement("div");
            homeContainer.classList.add("container");
            homeContainer.innerHTML = _home_html__WEBPACK_IMPORTED_MODULE_0___default.a;
            const searchBar = homeContainer.getElementsByTagName("input")[0];
            searchBar.addEventListener("input", HomePage.onSearchCountry);
            this.regionSelect = homeContainer.getElementsByClassName("select-content")[0];
            this.regionSelect.addEventListener("focus", this.onSelectFocus);
            this.regionSelect.addEventListener("blur", this.onSelectBlur);
            (_a = this.regionSelect.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(this.regionOptions);
            const cardsContainer = document.createElement("div");
            cardsContainer.id = "cards-grid";
            this.conutriesData = yield _services_countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"].getAll();
            this.conutriesData.forEach((country) => cardsContainer.appendChild(_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"].render(country)));
            homeContainer.appendChild(cardsContainer);
            return homeContainer;
        });
    }
    //Handlers
    onSelectFocus() {
        this.regionOptions = document.getElementById("dropdown");
        this.regionOptions.style.display = "flex";
        this.regionOptions.classList.remove("hide");
        this.regionOptions.classList.add("expand");
    }
    onSelectBlur() {
        setTimeout(() => {
            this.regionOptions = document.getElementById("dropdown");
            this.regionOptions.classList.remove("expand");
            this.regionOptions.classList.add("hide");
        }, 100);
    }
    static onOptionClick(event) {
        const regionSelect = document.getElementsByClassName("select-content")[0];
        const target = event.target;
        const regionClicked = target.textContent;
        const selectTextContent = regionSelect.getElementsByTagName("span")[0];
        selectTextContent.innerHTML = regionClicked;
        const cardsContainer = document.getElementById("cards-grid");
        cardsContainer.innerHTML = _components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1___default.a;
        const countriesPromise = regionClicked == _models_countries_interfaces__WEBPACK_IMPORTED_MODULE_5__["Region"].All
            ? _services_countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"].getAll()
            : _services_countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"].getByRegion(regionClicked);
        countriesPromise.then((resp) => HomePage.changeCountriesCards(cardsContainer, resp));
    }
    static onSearchCountry() {
        const searchBar = document.getElementById("search-bar");
        const term = searchBar.value;
        const cardsContainer = document.getElementById("cards-grid");
        cardsContainer.innerHTML = _components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1___default.a;
        const countriesSearchPromise = !term || term == ""
            ? _services_countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"].getAll()
            : _services_countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"].searchByName(term);
        countriesSearchPromise.then((resp) => {
            if (resp["status"])
                resp = [];
            HomePage.changeCountriesCards(cardsContainer, resp);
        });
    }
    //Helpers
    static changeCountriesCards(container, countries) {
        container.innerHTML = "";
        if (!countries || countries.length == 0) {
            container.innerHTML = _components_no_data_no_data_component_html__WEBPACK_IMPORTED_MODULE_2___default.a;
            return null;
        }
        else
            countries.forEach((card) => container.appendChild(_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"].render(card)));
    }
}


/***/ }),

/***/ "./src/routes/index.routes.ts":
/*!************************************!*\
  !*** ./src/routes/index.routes.ts ***!
  \************************************/
/*! exports provided: URLS, Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLS", function() { return URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _pages_home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home/home */ "./src/pages/home/home.ts");
/* harmony import */ var _pages_country_detail_country_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/country-detail/country-detail */ "./src/pages/country-detail/country-detail.ts");
/* harmony import */ var _components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loader/loader.component.html */ "./src/components/loader/loader.component.html");
/* harmony import */ var _components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2__);



var URLS;
(function (URLS) {
    URLS["home"] = "#/home";
    URLS["country"] = "#/country/";
    URLS["notFound"] = "#/not-found";
})(URLS || (URLS = {}));
class Router {
    constructor() {
        this.appRoot = document.getElementById("root");
    }
    navigate(url) {
        this.appRoot = document.getElementById("root");
        this.appRoot.innerHTML = _components_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2___default.a;
        if (new RegExp(URLS.home).test(url)) {
            const homePage = new _pages_home_home__WEBPACK_IMPORTED_MODULE_0__["HomePage"]();
            homePage.render().then((container) => {
                this.appRoot.innerHTML = "";
                this.appRoot.appendChild(container);
            });
        }
        else if (new RegExp(URLS.country).test(url)) {
            const urlTokenized = url.split("/");
            const code = urlTokenized[urlTokenized.length - 1];
            _pages_country_detail_country_detail__WEBPACK_IMPORTED_MODULE_1__["CountryDetailPage"].render(code).then((result) => {
                if (!result)
                    return;
                this.appRoot.innerHTML = "";
                this.appRoot.appendChild(result);
            });
        }
        else {
            console.log("404");
        }
    }
}


/***/ }),

/***/ "./src/services/countries.service.ts":
/*!*******************************************!*\
  !*** ./src/services/countries.service.ts ***!
  \*******************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_MAIN_ROUTE = "https://restcountries.eu/rest/v2";
const API_ROUTES = {
    all: API_MAIN_ROUTE + "/all",
    byRegion: API_MAIN_ROUTE + "/region",
    byName: API_MAIN_ROUTE + "/name",
    byCode: API_MAIN_ROUTE + "/alpha",
    fields: "?fields=name;population;region;capital;flag;alpha3Code"
};
class CountriesService {
    static getAll() {
        return fetch(API_ROUTES.all + API_ROUTES.fields)
            .then((resp) => resp.json())
            .then((resp) => resp);
    }
    static getByRegion(region) {
        return fetch(`${API_ROUTES.byRegion}/${region}${API_ROUTES.fields}`)
            .then((resp) => resp.json())
            .then((resp) => resp);
    }
    static searchByName(term) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                data = yield fetch(`${API_ROUTES.byName}/${term}${API_ROUTES.fields}`)
                    .then((resp) => resp.json())
                    .then((resp) => resp)
                    .catch(() => []);
            }
            catch (error) {
                data = [];
            }
            return data;
        });
    }
    static getByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                data = yield fetch(`${API_ROUTES.byCode}/${code}${API_ROUTES.fields};languages;currencies;topLevelDomain;subregion;nativeName;borders`)
                    .then((resp) => resp.json())
                    .then((resp) => __awaiter(this, void 0, void 0, function* () {
                    const bordersPromises = [];
                    resp.borders.forEach((borderCode) => bordersPromises.push(CountriesService.getNameByCode(borderCode)));
                    resp.bordersSt = yield Promise.all(bordersPromises);
                    return resp;
                }));
            }
            catch (error) {
                data = null;
            }
            return data;
        });
    }
    static getNameByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(`${API_ROUTES.byCode}/${code}${API_ROUTES.fields}`)
                .then((resp) => resp.json())
                .then((resp) => resp.name);
        });
    }
}


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvdW50cnktZGV0YWlsL2NvdW50cnktZGV0YWlsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3M/YzM1OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzPzY5NzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm8tZGF0YS9uby1kYXRhLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvdW50cmllcy5pbnRlcmZhY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb3VudHJ5LWRldGFpbC9jb3VudHJ5LWRldGFpbC5odG1sIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb3VudHJ5LWRldGFpbC9jb3VudHJ5LWRldGFpbC5zY3NzPzQ0ZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvdW50cnktZGV0YWlsL2NvdW50cnktZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9ob21lLnNjc3M/Yzk4MCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaW5kZXgucm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb3VudHJpZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxL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Q0FBQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNaO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sYUFBYSxDQUFDLElBQVk7O1lBQ3RDLE9BQU8sS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUM5RCxJQUFJLENBQUMsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDckMsSUFBSSxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBQ0Q7Ozs7Ozs7Ozs7OztBQ2pFRCxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLG1NQUErRjs7QUFFakk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcbmJvZHkuZGFyayB7XFxuICBiYWNrZ3JvdW5kOiAjMjAyYzM3O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgNiU7XFxuICBtYXJnaW46IDEuNWVtIDA7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDQ7XFxufVxcbi5jb250YWluZXIgc3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmJvZHkuZGFyayAuY29udGFpbmVyIHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubm90LWNvaW5jaWRlbmNlcyB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmJvZHkuZGFyayAubm90LWNvaW5jaWRlbmNlcyB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxufVxcbmJvZHkuZGFyayAuY2FyZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jYXJkICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbn1cXG4uY2FyZCBpbWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XFxufVxcbi5jYXJkIC5pbmZvLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogYXV0byAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNhcmQgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAwLjZlbTtcXG59XFxuLmNhcmQgaDYge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG4uY2FyZCBoNiBzbWFsbCB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDVkQ7O0FEYUE7RUFDQyxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBakJlO0FDT2hCO0FEWUM7RUFDQyxtQkF2QmE7QUNhZjs7QURjQTtFQUNDLGFBcEJlO0VBcUJmLGVBQUE7RUFDQSxxQkFBQTtBQ1hEO0FEYUM7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7QUNYRjtBRGFFO0VBQ0MsWUFqQ0s7QUNzQlI7O0FEZ0JBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtBQ2JEO0FEZUM7RUFDQyxZQTNDTTtBQzhCUjs7QUFqQ0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJDREVXO0VDRFgsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBb0NEO0FBbENDO0VBQ0MsWURSTTtBQzRDUjtBQWpDQztFQUNDLGVBQUE7QUFtQ0Y7QUFoQ0M7RUFDQyw0QkFBQTtBQWtDRjtBQS9CQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBaUNGO0FBOUJDO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBZ0NGO0FBN0JDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQStCRjtBQTVCQztFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUE4QkY7QUE3QkU7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FBK0JIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRkYXJrQmx1ZTogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiR2ZXJ5RGFya0JsdWU6IGhzbCgyMDcsIDI2JSwgMTclKTtcXG4kdmVyeURhcmtCbHVlTGlnaHQ6IGhzbCgyMDAsIDE1JSwgOCUpO1xcbiRkYXJrR3JheTogaHNsKDAsIDAlLCA1MiUpO1xcbiR2ZXJ5TGlnaHRHcmF5OiBoc2woMCwgMCUsIDk4JSk7XFxuJHdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcblxcbiRib3hTaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuJGdsb2JhbFBhZGRpbmc6IDAgNiU7XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6ICR2ZXJ5TGlnaHRHcmF5O1xcblxcblxcdCYuZGFyayB7XFxuXFx0XFx0YmFja2dyb3VuZDogJHZlcnlEYXJrQmx1ZTtcXG5cXHR9XFxufVxcblxcbi5jb250YWluZXIge1xcblxcdHBhZGRpbmc6ICRnbG9iYWxQYWRkaW5nO1xcblxcdG1hcmdpbjogMS41ZW0gMDtcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG5cXG5cXHRzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdFxcdGJvZHkuZGFyayAmIHtcXG5cXHRcXHRcXHRjb2xvcjogJHdoaXRlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5ub3QtY29pbmNpZGVuY2VzIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0Ym9keS5kYXJrICYge1xcblxcdFxcdGNvbG9yOiAkd2hpdGU7XFxuXFx0fVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlLnNjc3NcXFwiO1xcblxcbi5jYXJkIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Ym94LXNoYWRvdzogJGJveFNoYWRvdztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG5cXG5cXHRib2R5LmRhcmsgJiB7XFxuXFx0XFx0Y29sb3I6ICR3aGl0ZTtcXG5cXHR9XFxuXFxuXFx0KiB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdH1cXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcblxcdH1cXG5cXG5cXHRpbWcge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XFxuXFx0fVxcblxcblxcdC5pbmZvLWNvbnRlbnQge1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0XFx0bWFyZ2luOiBhdXRvIDBweDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdGg0IHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0XFx0Zm9udC1zaXplOiAwLjZlbTtcXG5cXHR9XFxuXFxuXFx0aDYge1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjVyZW07XFxuXFx0XFx0c21hbGwge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAwLjllbTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG5ib2R5LmRhcmsge1xcbiAgYmFja2dyb3VuZDogIzIwMmMzNztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDYlO1xcbiAgbWFyZ2luOiAxLjVlbSAwO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbn1cXG4uY29udGFpbmVyIHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCA2JTtcXG59XFxuaGVhZGVyIGksXFxuaGVhZGVyIGEge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5oZWFkZXIgaSxcXG5oZWFkZXIgYSxcXG5oZWFkZXIgaDQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxuICBoZWFkZXIgaDQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICBoZWFkZXIgaSxcXG5oZWFkZXIgYSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG59XFxuYm9keS5kYXJrIGhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjMmIzOTQ1O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDVkQ7O0FEYUE7RUFDQyxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBakJlO0FDT2hCO0FEWUM7RUFDQyxtQkF2QmE7QUNhZjs7QURjQTtFQUNDLGFBcEJlO0VBcUJmLGVBQUE7RUFDQSxxQkFBQTtBQ1hEO0FEYUM7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7QUNYRjtBRGFFO0VBQ0MsWUFqQ0s7QUNzQlI7O0FEZ0JBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtBQ2JEO0FEZUM7RUFDQyxZQTNDTTtBQzhCUjs7QUFqQ0E7RUFDQyxnQkFBQTtFQUNBLGlCRENPO0VDQVAsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFvQ0Q7QUFsQ0M7O0VBRUMsZUFBQTtBQW9DRjtBQWpDQzs7O0VBR0MsZUFBQTtBQW1DRjtBQWhDQztFQUNDO0lBQ0MsZUFBQTtFQWtDRDtFQS9CQTs7SUFFQyxlQUFBO0VBaUNEO0FBQ0Y7QUE5QkM7RUFDQyxtQkRsQ1M7RUNtQ1QsWUQ5Qk07QUM4RFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGRhcmtCbHVlOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxuJHZlcnlEYXJrQmx1ZTogaHNsKDIwNywgMjYlLCAxNyUpO1xcbiR2ZXJ5RGFya0JsdWVMaWdodDogaHNsKDIwMCwgMTUlLCA4JSk7XFxuJGRhcmtHcmF5OiBoc2woMCwgMCUsIDUyJSk7XFxuJHZlcnlMaWdodEdyYXk6IGhzbCgwLCAwJSwgOTglKTtcXG4kd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxuXFxuJGJveFNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG5cXG4kZ2xvYmFsUGFkZGluZzogMCA2JTtcXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogJHZlcnlMaWdodEdyYXk7XFxuXFxuXFx0Ji5kYXJrIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkdmVyeURhcmtCbHVlO1xcblxcdH1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0cGFkZGluZzogJGdsb2JhbFBhZGRpbmc7XFxuXFx0bWFyZ2luOiAxLjVlbSAwO1xcblxcdGdyaWQtY29sdW1uOiAxIC8gc3BhbiA0O1xcblxcblxcdHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0XFx0Ym9keS5kYXJrICYge1xcblxcdFxcdFxcdGNvbG9yOiAkd2hpdGU7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLm5vdC1jb2luY2lkZW5jZXMge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gc3BhbiA0O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXHRib2R5LmRhcmsgJiB7XFxuXFx0XFx0Y29sb3I6ICR3aGl0ZTtcXG5cXHR9XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGUuc2Nzc1xcXCI7XFxuXFxuaGVhZGVyIHtcXG5cXHRtaW4taGVpZ2h0OiA4MHB4O1xcblxcdGJhY2tncm91bmQ6ICR3aGl0ZTtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZzogJGdsb2JhbFBhZGRpbmc7XFxuXFxuXFx0aSxcXG5cXHRhIHtcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxuXFx0fVxcblxcblxcdGksXFxuXFx0YSxcXG5cXHRoNCB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxuXFx0XFx0aDQge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aSxcXG5cXHRcXHRhIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IDEycHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRib2R5LmRhcmsgJiB7XFxuXFx0XFx0YmFja2dyb3VuZDogJGRhcmtCbHVlO1xcblxcdFxcdGNvbG9yOiAkd2hpdGU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG5ib2R5LmRhcmsge1xcbiAgYmFja2dyb3VuZDogIzIwMmMzNztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDYlO1xcbiAgbWFyZ2luOiAxLjVlbSAwO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbn1cXG4uY29udGFpbmVyIHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmFjay1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi5iYWNrLWNvbnRhaW5lciAuYmFjayB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzg1ODU4NTtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmJvZHkuZGFyayAuYmFjay1jb250YWluZXIgLmJhY2sge1xcbiAgYmFja2dyb3VuZDogIzJiMzk0NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJhY2stY29udGFpbmVyIGkge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5jb3VudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmJvZHkuZGFyayAuY291bnRyeSAqIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNvdW50cnkgaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcbi5jb3VudHJ5IC5pbmZvLWRldGFpbCB7XFxuICB3aWR0aDogNTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmNvdW50cnkgLmluZm8tZGV0YWlsIGg0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4uY291bnRyeSAuaW5mby1kZXRhaWwgaDYge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG4uY291bnRyeSAuaW5mby1kZXRhaWwgaDYgc21hbGwge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcbi5jb3VudHJ5IC5pbmZvLWRldGFpbCAuaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtZ2FwOiAxMHB4IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAwLjNlbTtcXG59XFxuLmNvdW50cnkgLmluZm8tZGV0YWlsIC5ib3JkZXJzLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBtYXJnaW4tdG9wOiAwLjNlbTtcXG59XFxuLmNvdW50cnkgLmluZm8tZGV0YWlsIC5ib3JkZXJzLWNvbnRlbnQgLmJvcmRlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvdW50cnkgLmluZm8tZGV0YWlsIC5ib3JkZXJzLWNvbnRlbnQgLmJvcmRlcnMgYnV0dG9uIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjODU4NTg1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbi5jb3VudHJ5IC5pbmZvLWRldGFpbCAuYm9yZGVycy1jb250ZW50IC5ib3JkZXJzIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcbmJvZHkuZGFyayAuY291bnRyeSAuaW5mby1kZXRhaWwgLmJvcmRlcnMtY29udGVudCAuYm9yZGVycyBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzJiMzk0NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNvdW50cnkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmNvdW50cnkgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuY291bnRyeSAuaW5mby1kZXRhaWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICB9XFxuICAuY291bnRyeSAuaW5mby1kZXRhaWwgaDQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgLmNvdW50cnkgLmluZm8tZGV0YWlsIC5pbmZvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICAuY291bnRyeSAuaW5mby1kZXRhaWwgLmJvcmRlcnMtY29udGVudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICB9XFxuICAuY291bnRyeSAuaW5mby1kZXRhaWwgLmJvcmRlcnMtY29udGVudCAuYm9yZGVycyB7XFxuICAgIG1hcmdpbi10b3A6IDAuM2VtO1xcbiAgfVxcbiAgLmNvdW50cnkgLmluZm8tZGV0YWlsIC5ib3JkZXJzLWNvbnRlbnQgLmJvcmRlcnMgYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9jb3VudHJ5LWRldGFpbC9jb3VudHJ5LWRldGFpbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNWRDs7QURhQTtFQUNDLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFqQmU7QUNPaEI7QURZQztFQUNDLG1CQXZCYTtBQ2FmOztBRGNBO0VBQ0MsYUFwQmU7RUFxQmYsZUFBQTtFQUNBLHFCQUFBO0FDWEQ7QURhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtBQ1hGO0FEYUU7RUFDQyxZQWpDSztBQ3NCUjs7QURnQkE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0FDYkQ7QURlQztFQUNDLFlBM0NNO0FDOEJSOztBQWpDQTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtBQW9DRDtBQWxDQztFQUNDLDJDQUFBO0VBQ0EsaUJESE07RUNJTixjRE5TO0VDUVQsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBbUNGO0FBakNFO0VBQ0MsbUJEcEJRO0VDcUJSLFlEaEJLO0FDbURSO0FBL0JDO0VBQ0MsY0FBQTtBQWlDRjs7QUE3QkE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7QUFnQ0Q7QUE5QkM7RUFDQyxZRDlCTTtBQzhEUjtBQTdCQztFQUNDLFVBQUE7QUErQkY7QUE1QkM7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUE4QkY7QUE1QkU7RUFDQyxjQUFBO0FBOEJIO0FBM0JFO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQTZCSDtBQTVCRztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUE4Qko7QUExQkU7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBNEJIO0FBekJFO0VBQ0MsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUEyQkg7QUF6Qkc7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQTJCSjtBQXpCSTtFQUNDLDJDRHZFTztFQ3dFUCxpQkQxRUc7RUMyRUgsY0Q3RU07RUMrRU4sZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQTBCTDtBQXhCSztFQUNDLDJCQUFBO0FBMEJOO0FBdkJLO0VBQ0MsbUJEaEdLO0VDaUdMLFlENUZFO0FDcUhSO0FBbEJDO0VBMUVEO0lBMkVFLHNCQUFBO0VBcUJBO0VBbkJBO0lBQ0MsV0FBQTtFQXFCRDtFQWxCQTtJQUNDLFdBQUE7SUFDQSxpQkFBQTtFQW9CRDtFQWxCQztJQUNDLG9CQUFBO0VBb0JGO0FBQ0Y7QUFoQkM7RUFFRTtJQUNDLDBCQUFBO0VBaUJGO0VBZEM7SUFDQywwQkFBQTtJQUNBLGVBQUE7RUFnQkY7RUFkRTtJQUNDLGlCQUFBO0VBZ0JIO0VBZkc7SUFDQyx5QkFBQTtFQWlCSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRkYXJrQmx1ZTogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiR2ZXJ5RGFya0JsdWU6IGhzbCgyMDcsIDI2JSwgMTclKTtcXG4kdmVyeURhcmtCbHVlTGlnaHQ6IGhzbCgyMDAsIDE1JSwgOCUpO1xcbiRkYXJrR3JheTogaHNsKDAsIDAlLCA1MiUpO1xcbiR2ZXJ5TGlnaHRHcmF5OiBoc2woMCwgMCUsIDk4JSk7XFxuJHdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcblxcbiRib3hTaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuJGdsb2JhbFBhZGRpbmc6IDAgNiU7XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6ICR2ZXJ5TGlnaHRHcmF5O1xcblxcblxcdCYuZGFyayB7XFxuXFx0XFx0YmFja2dyb3VuZDogJHZlcnlEYXJrQmx1ZTtcXG5cXHR9XFxufVxcblxcbi5jb250YWluZXIge1xcblxcdHBhZGRpbmc6ICRnbG9iYWxQYWRkaW5nO1xcblxcdG1hcmdpbjogMS41ZW0gMDtcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG5cXG5cXHRzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdFxcdGJvZHkuZGFyayAmIHtcXG5cXHRcXHRcXHRjb2xvcjogJHdoaXRlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5ub3QtY29pbmNpZGVuY2VzIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0Ym9keS5kYXJrICYge1xcblxcdFxcdGNvbG9yOiAkd2hpdGU7XFxuXFx0fVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlLnNjc3NcXFwiO1xcblxcbi5iYWNrLWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xcblxcblxcdC5iYWNrIHtcXG5cXHRcXHRib3gtc2hhZG93OiAkYm94U2hhZG93O1xcblxcdFxcdGJhY2tncm91bmQ6ICR3aGl0ZTtcXG5cXHRcXHRjb2xvcjogJGRhcmtHcmF5O1xcblxcblxcdFxcdHBhZGRpbmc6IDEwcHggNDBweDtcXG5cXHRcXHRmb250LXNpemU6IDAuNWVtO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuXFx0XFx0Ym9keS5kYXJrICYge1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICRkYXJrQmx1ZTtcXG5cXHRcXHRcXHRjb2xvcjogJHdoaXRlO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0aSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxZW07XFxuXFx0fVxcbn1cXG5cXG4uY291bnRyeSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0Ym9keS5kYXJrICYgKiB7XFxuXFx0XFx0Y29sb3I6ICR3aGl0ZTtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogNDAlO1xcblxcdH1cXG5cXG5cXHQuaW5mby1kZXRhaWwge1xcblxcdFxcdHdpZHRoOiA1NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcblxcdFxcdGg0IHtcXG5cXHRcXHRcXHRmb250LXNpemU6IDFlbTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDYge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAwLjVyZW07XFxuXFx0XFx0XFx0c21hbGwge1xcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAwLjllbTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5pbmZvIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuXFx0XFx0XFx0Z3JpZC1nYXA6IDEwcHggMjBweDtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAwLjNlbTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmJvcmRlcnMtY29udGVudCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDAuM2VtO1xcblxcblxcdFxcdFxcdC5ib3JkZXJzIHtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXG5cXHRcXHRcXHRcXHRidXR0b24ge1xcblxcdFxcdFxcdFxcdFxcdGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZDogJHdoaXRlO1xcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiAkZGFya0dyYXk7XFxuXFxuXFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDJweCAxMHB4O1xcblxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMHB4IDEwcHggMTBweCAxMHB4O1xcblxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC41ZW07XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdFxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xcblxcblxcdFxcdFxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0XFx0XFx0Ym9keS5kYXJrICYge1xcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICRkYXJrQmx1ZTtcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogJHdoaXRlO1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmluZm8tZGV0YWlsIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxLjVlbTtcXG5cXG5cXHRcXHRcXHRoNCB7XFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMS41ZW07XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcblxcdFxcdC5pbmZvLWRldGFpbCB7XFxuXFx0XFx0XFx0LmluZm8ge1xcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQuYm9yZGVycy1jb250ZW50IHtcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiAxZW07XFxuXFxuXFx0XFx0XFx0XFx0LmJvcmRlcnMge1xcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IDAuM2VtO1xcblxcdFxcdFxcdFxcdFxcdGJ1dHRvbiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAxMHB4IDEwcHggMHB4IDBweDtcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG5ib2R5LmRhcmsge1xcbiAgYmFja2dyb3VuZDogIzIwMmMzNztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDYlO1xcbiAgbWFyZ2luOiAxLjVlbSAwO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbn1cXG4uY29udGFpbmVyIHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5wdXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudCB7XFxuICB3aWR0aDogMzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQgaSB7XFxuICBjb2xvcjogIzg1ODU4NTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuYm9keS5kYXJrIC5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICMyYjM5NDU7XFxufVxcbmJvZHkuZGFyayAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudCBpbnB1dCxcXG5ib2R5LmRhcmsgLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQgLnNlbGVjdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICMyYjM5NDU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHdpZHRoOiAxNSU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWdyb3c6IDA7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAqIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIC5zZWxlY3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuc2VsZWN0LWNvbnRlbnQgc3BhbixcXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLnNlbGVjdC1jb250ZW50IGkge1xcbiAgY29sb3I6ICM4NTg1ODU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuc2VsZWN0LWNvbnRlbnQ6Zm9jdXMgaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDY1cHgpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuYm9keS5kYXJrIC5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuZHJvcGRvd24ge1xcbiAgYmFja2dyb3VuZDogIzJiMzk0NTtcXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIC5kcm9wZG93biBzcGFuLm9wdGlvbiB7XFxuICBjb2xvcjogIzg1ODU4NTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuZHJvcGRvd24gc3Bhbi5vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg1ODU4NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYm9keS5kYXJrIC5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuZHJvcGRvd24gc3Bhbi5vcHRpb24ge1xcbiAgYmFja2dyb3VuZDogIzJiMzk0NTtcXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIC5kcm9wZG93bi5leHBhbmQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9wdGlvbnNFbnRyYW5jeTtcXG59XFxuQGtleWZyYW1lcyBvcHRpb25zRW50cmFuY3kge1xcbiAgMCUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDI4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLmRyb3Bkb3duLmhpZGUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9wdGlvbnNPdXQ7XFxufVxcbkBrZXlmcmFtZXMgb3B0aW9uc091dCB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogMjgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxuICAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAuaW5wdXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxufVxcblxcbiNjYXJkcy1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDEuNWVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgI2NhcmRzLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAjY2FyZHMtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXG4gICNjYXJkcy1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvaG9tZS9ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0E7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ1ZEOztBRGFBO0VBQ0Msc0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQWpCZTtBQ09oQjtBRFlDO0VBQ0MsbUJBdkJhO0FDYWY7O0FEY0E7RUFDQyxhQXBCZTtFQXFCZixlQUFBO0VBQ0EscUJBQUE7QUNYRDtBRGFDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FDWEY7QURhRTtFQUNDLFlBakNLO0FDc0JSOztBRGdCQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7QUNiRDtBRGVDO0VBQ0MsWUEzQ007QUM4QlI7O0FBL0JBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBa0NEO0FBaENDO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJEUk07RUNTTiwyQ0RQVTtFQ1FWLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBa0NGO0FBaENFO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBckJlO0VBc0JmLGdCQUFBO0FBa0NIO0FBL0JFO0VBQ0MsY0R6QlE7RUMwQlIsWUFBQTtFQUNBLGVBQUE7QUFpQ0g7QUE5QkU7RUFDQyxtQkRsQ1E7QUNrRVg7QUEvQkc7O0VBRUMsbUJEckNPO0VDc0NQLFlEakNJO0FDa0VSO0FBNUJDO0VBQ0MsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUE4QkY7QUE1QkU7RUFDQyxlQUFBO0FBOEJIO0FBM0JFO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBNkJIO0FBM0JHOztFQUVDLGNEL0RPO0VDZ0VQLGdCQWpFYztFQWtFZCxlQUFBO0VBQ0Esb0JBQUE7QUE2Qko7QUF6Qkk7RUFDQyx5QkFBQTtBQTJCTDtBQXRCRTtFQUdDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJEcEZLO0VDcUZMLDJDRG5GUztFQ29GVCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQWJpQjtFQWNqQix3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQXNCSDtBQXBCRztFQUNDLG1CRG5HTztBQ3lIWDtBQW5CRztFQUNDLGNEcEdPO0VDcUdQLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBcUJKO0FBbkJJO0VBQ0MsbUJEMUdNO0VDMkdOLFlBQUE7QUFxQkw7QUFsQkk7RUFDQyxtQkRsSE07QUNzSVg7QUFoQkc7RUFZQywrQkFBQTtBQU9KO0FBbEJJO0VBQ0M7SUFDQyxhQUFBO0lBQ0EsV0FBQTtFQW9CSjtFQWpCRztJQUNDLGFBOUNjO0lBK0NkLGFBQUE7RUFtQko7QUFDRjtBQWRHO0VBYUMsMEJBQUE7QUFJSjtBQWhCSTtFQUNDO0lBQ0MsYUF4RGM7SUF5RGQsYUFBQTtFQWtCSjtFQWZHO0lBQ0MsV0FBQTtJQUNBLGFBQUE7RUFpQko7QUFDRjtBQVRDO0VBQ0M7SUFDQyxVQUFBO0VBV0Q7RUFUQTtJQUNDLFVBQUE7RUFXRDtBQUNGO0FBUkM7RUE1SkQ7SUE2SkUsc0JBQUE7RUFXQTtFQVRBO0lBQ0Msb0JBQUE7SUFDQSxXQUFBO0VBV0Q7RUFSQTtJQUNDLGdCQUFBO0lBQ0EsVUFBQTtFQVVEO0FBQ0Y7O0FBTkE7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVNEO0FBUEM7RUFQRDtJQVFFLHFDQUFBO0VBVUE7QUFDRjtBQVJDO0VBWEQ7SUFZRSxxQ0FBQTtFQVdBO0FBQ0Y7QUFUQztFQWZEO0lBZ0JFLDBCQUFBO0VBWUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZGFya0JsdWU6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4kdmVyeURhcmtCbHVlOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxuJHZlcnlEYXJrQmx1ZUxpZ2h0OiBoc2woMjAwLCAxNSUsIDglKTtcXG4kZGFya0dyYXk6IGhzbCgwLCAwJSwgNTIlKTtcXG4kdmVyeUxpZ2h0R3JheTogaHNsKDAsIDAlLCA5OCUpO1xcbiR3aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG5cXG4kYm94U2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcbiRnbG9iYWxQYWRkaW5nOiAwIDYlO1xcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiAkdmVyeUxpZ2h0R3JheTtcXG5cXG5cXHQmLmRhcmsge1xcblxcdFxcdGJhY2tncm91bmQ6ICR2ZXJ5RGFya0JsdWU7XFxuXFx0fVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiAkZ2xvYmFsUGFkZGluZztcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxuXFxuXFx0c3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRcXHRib2R5LmRhcmsgJiB7XFxuXFx0XFx0XFx0Y29sb3I6ICR3aGl0ZTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4ubm90LWNvaW5jaWRlbmNlcyB7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcdGJvZHkuZGFyayAmIHtcXG5cXHRcXHRjb2xvcjogJHdoaXRlO1xcblxcdH1cXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZS5zY3NzXFxcIjtcXG5cXG4kZm9udC1zaXplLWlucHV0OiAwLjVlbTtcXG5cXG4uaW5wdXRzLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0LmlucHV0LWNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiAzNSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHBhZGRpbmc6IDVweCAxMHB4O1xcblxcdFxcdGJhY2tncm91bmQ6ICR3aGl0ZTtcXG5cXHRcXHRib3gtc2hhZG93OiAkYm94U2hhZG93O1xcblxcdFxcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRcXHRmbGV4LWdyb3c6IDA7XFxuXFxuXFx0XFx0aW5wdXQge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1pbnB1dDtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMTAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRpIHtcXG5cXHRcXHRcXHRjb2xvcjogJGRhcmtHcmF5O1xcblxcdFxcdFxcdG1hcmdpbjogMTBweDtcXG5cXHRcXHRcXHRmb250LXNpemU6IDE1cHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdGJvZHkuZGFyayAmIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XFxuXFx0XFx0XFx0aW5wdXQsXFxuXFx0XFx0XFx0LnNlbGVjdC1jb250ZW50IHtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICR3aGl0ZTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikge1xcblxcdFxcdGp1c3RpZnktc2VsZjogZW5kO1xcblxcdFxcdHdpZHRoOiAxNSU7XFxuXFx0XFx0cGFkZGluZzogMTBweCAyMHB4O1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRmbGV4LWdyb3c6IDA7XFxuXFxuXFx0XFx0KiB7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2VsZWN0LWNvbnRlbnQge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogd2hpdGU7XFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuXFx0XFx0XFx0c3BhbixcXG5cXHRcXHRcXHRpIHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogJGRhcmtHcmF5O1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1pbnB1dDtcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdCY6Zm9jdXMge1xcblxcdFxcdFxcdFxcdGkge1xcblxcdFxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmRyb3Bkb3duIHtcXG5cXHRcXHRcXHQkZHJvcGRvd25IZWlnaHQ6IDI4MHB4O1xcblxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdFxcdHRvcDogMDtcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcblxcdFxcdFxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDY1cHgpO1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICR3aGl0ZTtcXG5cXHRcXHRcXHRib3gtc2hhZG93OiAkYm94U2hhZG93O1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRcXHRcXHRoZWlnaHQ6ICRkcm9wZG93bkhlaWdodDtcXG5cXHRcXHRcXHRhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuXFx0XFx0XFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFx0XFx0XFx0ei1pbmRleDogMTA7XFxuXFxuXFx0XFx0XFx0Ym9keS5kYXJrICYge1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICRkYXJrQmx1ZTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0c3Bhbi5vcHRpb24ge1xcblxcdFxcdFxcdFxcdGNvbG9yOiAkZGFya0dyYXk7XFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMTBweCAyMHB4O1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC41ZW07XFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcblxcdFxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICRkYXJrR3JheTtcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdFxcdGJvZHkuZGFyayAmIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQmLmV4cGFuZCB7XFxuXFx0XFx0XFx0XFx0QGtleWZyYW1lcyBvcHRpb25zRW50cmFuY3kge1xcblxcdFxcdFxcdFxcdFxcdDAlIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMHB4O1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRcXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6ICRkcm9wZG93bkhlaWdodDtcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0YW5pbWF0aW9uLW5hbWU6IG9wdGlvbnNFbnRyYW5jeTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Ji5oaWRlIHtcXG5cXHRcXHRcXHRcXHRAa2V5ZnJhbWVzIG9wdGlvbnNPdXQge1xcblxcdFxcdFxcdFxcdFxcdDAlIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6ICRkcm9wZG93bkhlaWdodDtcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRcXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDBweDtcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0XFx0YW5pbWF0aW9uLW5hbWU6IG9wdGlvbnNPdXQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG5cXHRcXHQuaW5wdXQtY29udGVudCB7XFxuXFx0XFx0XFx0d2lkdGg6IDQwJTtcXG5cXHRcXHR9XFxuXFx0XFx0LmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcXG5cXHRcXHRcXHR3aWR0aDogMjAlO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0XFx0LmlucHV0LWNvbnRlbnQge1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xcblxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikge1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDA7XFxuXFx0XFx0XFx0d2lkdGg6IDQwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4jY2FyZHMtZ3JpZCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdGdyaWQtZ2FwOiAxLjVlbTtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRtYXJnaW46IDEuNXJlbSAwO1xcblxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuXFx0fVxcblxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcbmJvZHkuZGFyayB7XFxuICBiYWNrZ3JvdW5kOiAjMjAyYzM3O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgNiU7XFxuICBtYXJnaW46IDEuNWVtIDA7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDQ7XFxufVxcbi5jb250YWluZXIgc3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmJvZHkuZGFyayAuY29udGFpbmVyIHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubm90LWNvaW5jaWRlbmNlcyB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmJvZHkuZGFyayAubm90LWNvaW5jaWRlbmNlcyB7XFxuICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFWRDs7QUFhQTtFQUNDLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFqQmU7QUFPaEI7QUFZQztFQUNDLG1CQXZCYTtBQWFmOztBQWNBO0VBQ0MsYUFwQmU7RUFxQmYsZUFBQTtFQUNBLHFCQUFBO0FBWEQ7QUFhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtBQVhGO0FBYUU7RUFDQyxZQWpDSztBQXNCUjs7QUFnQkE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0FBYkQ7QUFlQztFQUNDLFlBM0NNO0FBOEJSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRkYXJrQmx1ZTogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiR2ZXJ5RGFya0JsdWU6IGhzbCgyMDcsIDI2JSwgMTclKTtcXG4kdmVyeURhcmtCbHVlTGlnaHQ6IGhzbCgyMDAsIDE1JSwgOCUpO1xcbiRkYXJrR3JheTogaHNsKDAsIDAlLCA1MiUpO1xcbiR2ZXJ5TGlnaHRHcmF5OiBoc2woMCwgMCUsIDk4JSk7XFxuJHdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcblxcbiRib3hTaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuJGdsb2JhbFBhZGRpbmc6IDAgNiU7XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6ICR2ZXJ5TGlnaHRHcmF5O1xcblxcblxcdCYuZGFyayB7XFxuXFx0XFx0YmFja2dyb3VuZDogJHZlcnlEYXJrQmx1ZTtcXG5cXHR9XFxufVxcblxcbi5jb250YWluZXIge1xcblxcdHBhZGRpbmc6ICRnbG9iYWxQYWRkaW5nO1xcblxcdG1hcmdpbjogMS41ZW0gMDtcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG5cXG5cXHRzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdFxcdGJvZHkuZGFyayAmIHtcXG5cXHRcXHRcXHRjb2xvcjogJHdoaXRlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5ub3QtY29pbmNpZGVuY2VzIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0Ym9keS5kYXJrICYge1xcblxcdFxcdGNvbG9yOiAkd2hpdGU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aW1nIHNyYz1cXFwie2ZsYWd9XFxcIiBjbGFzcz1cXFwiZmxhZ1xcXCIgLz5cXG5cXG48ZGl2IGNsYXNzPVxcXCJpbmZvLWNvbnRlbnRcXFwiPlxcblxcdDxoND57bmFtZX08L2g0PlxcblxcblxcdDxoNj5Qb3B1bGF0aW9uOiA8c21hbGw+e3BvcHVsYXRpb259PC9zbWFsbD48L2g2PlxcblxcdDxoNj5SZWdpb246IDxzbWFsbD57cmVnaW9ufTwvc21hbGw+PC9oNj5cXG5cXHQ8aDY+Q2FwaXRhbDogPHNtYWxsPntjYXBpdGFsfTwvc21hbGw+PC9oNj5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBWaWV3IGZyb20gXCIuL2NhcmQuY29tcG9uZW50Lmh0bWxcIjtcbmltcG9ydCBcIi4vY2FyZC5jb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IHsgSUNvdW50cnkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdW50cmllcy5pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBVUkxTIH0gZnJvbSBcIi4uLy4uL3JvdXRlcy9pbmRleC5yb3V0ZXNcIjtcblxuZW51bSBET01EYXRhIHtcblx0RmxhZyA9IFwie2ZsYWd9XCIsXG5cdE5hbWUgPSBcIntuYW1lfVwiLFxuXHRQb3B1bGF0aW9uID0gXCJ7cG9wdWxhdGlvbn1cIixcblx0UmVnaW9uID0gXCJ7cmVnaW9ufVwiLFxuXHRDYXBpdGFsID0gXCJ7Y2FwaXRhbH1cIlxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG5cdHN0YXRpYyByZW5kZXIoY291bnRyeTogSUNvdW50cnkpOiBIVE1MRGl2RWxlbWVudCB7XG5cdFx0Y29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblx0XHRjYXJkLmlkID0gY291bnRyeS5hbHBoYTNDb2RlO1xuXHRcdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIENhcmRDb21wb25lbnQub25DYXJkQ2xpY2spO1xuXG5cdFx0bGV0IHZpZXdGb3JtYXQgPSBWaWV3O1xuXG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLkZsYWcsIGNvdW50cnkuZmxhZyk7XG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLkNhcGl0YWwsIGNvdW50cnkuY2FwaXRhbCk7XG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLk5hbWUsIGNvdW50cnkubmFtZSk7XG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShcblx0XHRcdERPTURhdGEuUG9wdWxhdGlvbixcblx0XHRcdEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGNvdW50cnkucG9wdWxhdGlvbilcblx0XHQpO1xuXHRcdHZpZXdGb3JtYXQgPSB2aWV3Rm9ybWF0LnJlcGxhY2UoRE9NRGF0YS5SZWdpb24sIGNvdW50cnkucmVnaW9uKTtcblxuXHRcdGNhcmQuaW5uZXJIVE1MID0gdmlld0Zvcm1hdDtcblx0XHRyZXR1cm4gY2FyZDtcblx0fVxuXG5cdC8vSGFuZGxlcnNcblx0c3RhdGljIG9uQ2FyZENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0bGV0IGNhcmQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0d2hpbGUgKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImNhcmRcIikpIGNhcmQgPSBjYXJkLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBgJHtVUkxTLmNvdW50cnl9JHtjYXJkLmlkfWA7XG5cdH1cbn1cbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXFx0PHNwYW4gY2xhc3M9XFxcInNwaW5uZXItY29udGFpbmVyXFxcIj5cXG5cXHRcXHQ8aSBjbGFzcz1cXFwiZmFzIGZhLXNwaW5uZXIgZmEtcHVsc2VcXFwiPjwvaT5cXG5cXHQ8L3NwYW4+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGg0PlxcblxcdFdoZXJlIGluIHRoZSB3b3JsZD9cXG48L2g0PlxcblxcbjxhPlxcblxcdDxpIGNsYXNzPVxcXCJmYXIgZmEtbW9vblxcXCI+PC9pPlxcblxcdERhcmsgTW9kZVxcbjwvYT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jb21wb25lbnQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHZpZXcgZnJvbSBcIi4vbmF2YmFyLmNvbXBvbmVudC5odG1sXCI7XG5pbXBvcnQgXCIuL25hdmJhci5jb21wb25lbnQuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcblx0cHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblx0XHRoZWFkZXIuaW5uZXJIVE1MID0gdmlldztcblxuXHRcdGhlYWRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImg0XCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uR29Ub0hvbWUpO1xuXHRcdGhlYWRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25UaGVtZU1vZGVDaGFuZ2UpO1xuXG5cdFx0cmV0dXJuIGhlYWRlcjtcblx0fVxuXG5cdC8vSGFuZGxlcnNcblx0cHVibGljIG9uVGhlbWVNb2RlQ2hhbmdlKCkge1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdH1cblxuXHRwdWJsaWMgb25Hb1RvSG9tZSgpIHtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiIy9ob21lXCI7XG5cdH1cbn1cbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxzcGFuIGNsYXNzPVxcXCJub3QtY29pbmNpZGVuY2VzXFxcIj5Ob3QgY29pbmNpZGVuY2VzPC9zcGFuPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vcm91dGVzL2luZGV4LnJvdXRlc1wiO1xuXG5jbGFzcyBBcHAge1xuXHRwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuXHRwcml2YXRlIGhlYWRlcjogSFRNTEVsZW1lbnQ7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cdFx0dGhpcy5oZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKSBhcyBIVE1MRWxlbWVudDtcblx0XHR0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChuZXcgTmF2YmFyQ29tcG9uZW50KCkucmVuZGVyKCkpO1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjL2hvbWVcIjtcblx0fVxuXG5cdHB1YmxpYyBpbml0QXBwKCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT5cblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmluaXRBcHAoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUNvdW50cnkge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBvcHVsYXRpb246IG51bWJlcjtcblx0cmVnaW9uOiBSZWdpb247XG5cdGNhcGl0YWw6IHN0cmluZztcblx0ZmxhZzogc3RyaW5nO1xuXHRhbHBoYTNDb2RlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvdW50cnlEZXRhaWwge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBvcHVsYXRpb246IG51bWJlcjtcblx0cmVnaW9uOiBSZWdpb247XG5cdGNhcGl0YWw6IHN0cmluZztcblx0ZmxhZzogc3RyaW5nO1xuXHRhbHBoYTNDb2RlOiBzdHJpbmc7XG5cdGxhbmd1YWdlczogSUxhbmd1YWdlW107XG5cdGN1cnJlbmNpZXM6IElDdXJyZW5jeVtdO1xuXHR0b3BMZXZlbERvbWFpbjogc3RyaW5nW107XG5cdHN1YnJlZ2lvbjogc3RyaW5nO1xuXHRuYXRpdmVOYW1lOiBzdHJpbmc7XG5cdGJvcmRlcnM6IHN0cmluZ1tdO1xuXHRib3JkZXJzU3Q6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDdXJyZW5jeSB7XG5cdGNvZGU6IG51bGwgfCBzdHJpbmc7XG5cdG5hbWU6IG51bGwgfCBzdHJpbmc7XG5cdHN5bWJvbDogbnVsbCB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGFuZ3VhZ2Uge1xuXHRpc282MzlfMTogbnVsbCB8IHN0cmluZztcblx0aXNvNjM5XzI6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRuYXRpdmVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFJlZ2lvbiB7XG5cdEFsbCA9IFwiQWxsXCIsXG5cdEFmcmljYSA9IFwiQWZyaWNhXCIsXG5cdEFtZXJpY2FzID0gXCJBbWVyaWNhc1wiLFxuXHRBc2lhID0gXCJBc2lhXCIsXG5cdEV1cm9wZSA9IFwiRXVyb3BlXCIsXG5cdE9jZWFuaWEgPSBcIk9jZWFuaWFcIixcblx0UG9sYXIgPSBcIlBvbGFyXCJcbn1cbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImJhY2stY29udGFpbmVyXFxcIj5cXG5cXHQ8YSBjbGFzcz1cXFwiYmFja1xcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDpoaXN0b3J5LmJhY2soKVxcXCI+XFxuXFx0XFx0PGkgY2xhc3M9XFxcImZhcyBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+XFxuXFx0XFx0QmFja1xcblxcdDwvYT5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb3VudHJ5XFxcIj5cXG5cXHQ8aW1nIHNyYz1cXFwie2ZsYWd9XFxcIiAvPlxcblxcdDxkaXYgY2xhc3M9XFxcImluZm8tZGV0YWlsXFxcIj5cXG5cXHRcXHQ8aDQ+e25hbWV9PC9oND5cXG5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJpbmZvXFxcIj5cXG5cXHRcXHRcXHQ8aDY+TmF0aXZlIE5hbWU6IDxzbWFsbD57bmF0aXZlTmFtZX08L3NtYWxsPjwvaDY+XFxuXFx0XFx0XFx0PGg2PlRvcCBMZXZlbCBEb21haW46IDxzbWFsbD57dG9wTGV2ZWxEb21haW59PC9zbWFsbD48L2g2PlxcblxcdFxcdFxcdDxoNj5Qb3B1bGF0aW9uOiA8c21hbGw+e3BvcHVsYXRpb259PC9zbWFsbD48L2g2PlxcblxcdFxcdFxcdDxoNj5DdXJyZW5jaWVzOiA8c21hbGw+e2N1cnJlbmNpZXN9PC9zbWFsbD48L2g2PlxcblxcdFxcdFxcdDxoNj5SZWdpb246IDxzbWFsbD57cmVnaW9ufTwvc21hbGw+PC9oNj5cXG5cXHRcXHRcXHQ8aDY+TGVuZ3VhZ2VzOiA8c21hbGw+e2xhbmd1YWdlc308L3NtYWxsPjwvaDY+XFxuXFx0XFx0XFx0PGg2PlN1YiBSZWdpb246IDxzbWFsbD57c3VicmVnaW9ufTwvc21hbGw+PC9oNj5cXG5cXHRcXHRcXHQ8aDY+Q2FwaXRhbDogPHNtYWxsPntjYXBpdGFsfTwvc21hbGw+PC9oNj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJib3JkZXJzLWNvbnRlbnRcXFwiPlxcblxcdFxcdFxcdDxoNj5Cb3JkZXJzOjwvaDY+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYm9yZGVyc1xcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb3VudHJ5LWRldGFpbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgVmlldyBmcm9tIFwiLi9jb3VudHJ5LWRldGFpbC5odG1sXCI7XG5pbXBvcnQgXCIuL2NvdW50cnktZGV0YWlsLnNjc3NcIjtcblxuaW1wb3J0IHsgVVJMUyB9IGZyb20gXCIuLi8uLi9yb3V0ZXMvaW5kZXgucm91dGVzXCI7XG5cbmltcG9ydCB7IENvdW50cmllc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291bnRyaWVzLnNlcnZpY2VcIjtcbmltcG9ydCB7IElDb3VudHJ5RGV0YWlsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3VudHJpZXMuaW50ZXJmYWNlc1wiO1xuXG5lbnVtIERPTURhdGEge1xuXHRGbGFnID0gXCJ7ZmxhZ31cIixcblx0TmFtZSA9IFwie25hbWV9XCIsXG5cdE5hdGl2ZU5hbWUgPSBcIntuYXRpdmVOYW1lfVwiLFxuXHRQb3B1bGF0aW9uID0gXCJ7cG9wdWxhdGlvbn1cIixcblx0UmVnaW9uID0gXCJ7cmVnaW9ufVwiLFxuXHRTdWJyZWdpb24gPSBcIntzdWJyZWdpb259XCIsXG5cdENhcGl0YWwgPSBcIntjYXBpdGFsfVwiLFxuXHRUb3BMZXZlbERvbWFpbiA9IFwie3RvcExldmVsRG9tYWlufVwiLFxuXHRDdXJyZW5jaWVzID0gXCJ7Y3VycmVuY2llc31cIixcblx0TGFuZ3VhZ2VzID0gXCJ7bGFuZ3VhZ2VzfVwiXG59XG5cbmV4cG9ydCBjbGFzcyBDb3VudHJ5RGV0YWlsUGFnZSB7XG5cdHN0YXRpYyBhc3luYyByZW5kZXIoY29kZTogc3RyaW5nKSB7XG5cdFx0bGV0IHJlc3AgPSAoYXdhaXQgQ291bnRyaWVzU2VydmljZS5nZXRCeUNvZGUoY29kZSkpIGFzIGFueTtcblx0XHRpZiAocmVzcFtcInN0YXR1c1wiXSkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBVUkxTLm5vdEZvdW5kO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvdW50cnkgPSByZXNwIGFzIElDb3VudHJ5RGV0YWlsO1xuXHRcdGxldCB2aWV3Rm9ybWF0ID0gVmlldztcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuQ2FwaXRhbCwgY291bnRyeS5jYXBpdGFsKTtcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuRmxhZywgY291bnRyeS5mbGFnKTtcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuTmFtZSwgY291bnRyeS5uYW1lKTtcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuTmF0aXZlTmFtZSwgY291bnRyeS5uYXRpdmVOYW1lKTtcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKFxuXHRcdFx0RE9NRGF0YS5Qb3B1bGF0aW9uLFxuXHRcdFx0SW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQoY291bnRyeS5wb3B1bGF0aW9uKVxuXHRcdCk7XG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLlJlZ2lvbiwgY291bnRyeS5yZWdpb24pO1xuXHRcdHZpZXdGb3JtYXQgPSB2aWV3Rm9ybWF0LnJlcGxhY2UoRE9NRGF0YS5TdWJyZWdpb24sIGNvdW50cnkuc3VicmVnaW9uKTtcblxuXHRcdGxldCBkb21haW5zID0gXCJcIjtcblx0XHRjb3VudHJ5LnRvcExldmVsRG9tYWluLmZvckVhY2goKGRvbWFpbikgPT4gKGRvbWFpbnMgKz0gYCR7ZG9tYWlufSBgKSk7XG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLlRvcExldmVsRG9tYWluLCBkb21haW5zKTtcblxuXHRcdGxldCBjdXJyZW5jaWVzID0gXCJcIjtcblx0XHRjb3VudHJ5LmN1cnJlbmNpZXMuZm9yRWFjaCgoY3VycmVuY3kpID0+IChjdXJyZW5jaWVzICs9IGAke2N1cnJlbmN5Lm5hbWV9IGApKTtcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuQ3VycmVuY2llcywgY3VycmVuY2llcyk7XG5cblx0XHRsZXQgbGVuZ3VhZ2VzID0gXCJcIjtcblx0XHRjb3VudHJ5Lmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4gKGxlbmd1YWdlcyArPSBgJHtsYW5ndWFnZS5uYW1lfSBgKSk7XG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLkxhbmd1YWdlcywgbGVuZ3VhZ2VzKTtcblxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cdFx0Y29udGFpbmVyLmlubmVySFRNTCA9IHZpZXdGb3JtYXQ7XG5cblx0XHRjb25zdCBib3JkZXJzID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJib3JkZXJzXCIpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuXG5cdFx0Y291bnRyeS5ib3JkZXJzLmZvckVhY2goKGJvcmRlciwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGJvcmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdFx0XHRib3JkZXJCdXR0b24uaWQgPSBib3JkZXI7XG5cdFx0XHRib3JkZXJCdXR0b24uaW5uZXJIVE1MID0gY291bnRyeS5ib3JkZXJzU3RbaW5kZXhdO1xuXHRcdFx0Ym9yZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDb3VudHJ5RGV0YWlsUGFnZS5vbkJvcmRlckNsaWNrKTtcblx0XHRcdGJvcmRlcnMuYXBwZW5kQ2hpbGQoYm9yZGVyQnV0dG9uKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb250YWluZXI7XG5cdH1cblxuXHRzdGF0aWMgb25Cb3JkZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuXHRcdGNvbnN0IGJ1dHRvblRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IFVSTFMuY291bnRyeSArIGJ1dHRvblRhcmdldC5pZDtcblx0fVxufVxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiaW5wdXRzLWNvbnRhaW5lclxcXCI+XFxuXFx0PHNwYW4gY2xhc3M9XFxcImlucHV0LWNvbnRlbnRcXFwiPlxcblxcdFxcdDxpIGNsYXNzPVxcXCJmYXMgZmEtc2VhcmNoXFxcIj48L2k+XFxuXFx0XFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJzZWFyY2gtYmFyXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGZvciBhIGNvdW50cnlcXFwiIC8+XFxuXFx0PC9zcGFuPlxcblxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1jb250ZW50XFxcIj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzZWxlY3QtY29udGVudFxcXCI+XFxuXFx0XFx0XFx0PHNwYW4+RmlsdGVyIGJ5IHJlZ2lvbjwvc3Bhbj5cXG5cXHRcXHRcXHQ8aSBjbGFzcz1cXFwiZmFzIGZhLWNoZXZyb24tZG93blxcXCI+PC9pPlxcblxcdFxcdDwvYnV0dG9uPlxcblxcdDwvc3Bhbj5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS5odG1sXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50Lmh0bWxcIjtcbmltcG9ydCBOb3REYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25vLWRhdGEvbm8tZGF0YS5jb21wb25lbnQuaHRtbFwiO1xuaW1wb3J0IFwiLi9ob21lLnNjc3NcIjtcbmltcG9ydCB7IENvdW50cmllc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291bnRyaWVzLnNlcnZpY2VcIjtcbmltcG9ydCB7IElDb3VudHJ5LCBSZWdpb24gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdW50cmllcy5pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuXHRwcml2YXRlIHJlZ2lvblNlbGVjdDogRWxlbWVudCB8IG51bGw7XG5cdHByaXZhdGUgcmVnaW9uT3B0aW9uczogSFRNTERpdkVsZW1lbnQ7XG5cdHByaXZhdGUgY29udXRyaWVzRGF0YTogSUNvdW50cnlbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlZ2lvblNlbGVjdCA9IG51bGw7XG5cdFx0dGhpcy5yZWdpb25PcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0aGlzLmNvbnV0cmllc0RhdGEgPSBbXTtcblx0XHR0aGlzLmluaXRET01PYmplY3RzKCk7XG5cdH1cblxuXHRwdWJsaWMgaW5pdERPTU9iamVjdHMoKSB7XG5cdFx0dGhpcy5yZWdpb25PcHRpb25zLmlkID0gXCJkcm9wZG93blwiO1xuXHRcdHRoaXMucmVnaW9uT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG5cblx0XHRPYmplY3Qua2V5cyhSZWdpb24pLmZvckVhY2goKHJlZ2lvbikgPT4ge1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRvcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcblx0XHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IHJlZ2lvbjtcblx0XHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSG9tZVBhZ2Uub25PcHRpb25DbGljayk7XG5cdFx0XHR0aGlzLnJlZ2lvbk9wdGlvbnM/LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8SFRNTERpdkVsZW1lbnQ+IHtcblx0XHRjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cdFx0aG9tZUNvbnRhaW5lci5pbm5lckhUTUwgPSBIb21lO1xuXG5cdFx0Y29uc3Qgc2VhcmNoQmFyID0gaG9tZUNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuXHRcdHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgSG9tZVBhZ2Uub25TZWFyY2hDb3VudHJ5KTtcblxuXHRcdHRoaXMucmVnaW9uU2VsZWN0ID0gaG9tZUNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0LWNvbnRlbnRcIilbMF07XG5cdFx0dGhpcy5yZWdpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMub25TZWxlY3RGb2N1cyk7XG5cdFx0dGhpcy5yZWdpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5vblNlbGVjdEJsdXIpO1xuXHRcdHRoaXMucmVnaW9uU2VsZWN0LnBhcmVudEVsZW1lbnQ/LmFwcGVuZENoaWxkPEVsZW1lbnQ+KHRoaXMucmVnaW9uT3B0aW9ucyBhcyBFbGVtZW50KTtcblxuXHRcdGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjYXJkc0NvbnRhaW5lci5pZCA9IFwiY2FyZHMtZ3JpZFwiO1xuXG5cdFx0dGhpcy5jb251dHJpZXNEYXRhID0gYXdhaXQgQ291bnRyaWVzU2VydmljZS5nZXRBbGwoKTtcblx0XHR0aGlzLmNvbnV0cmllc0RhdGEuZm9yRWFjaCgoY291bnRyeSkgPT5cblx0XHRcdGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKENhcmRDb21wb25lbnQucmVuZGVyKGNvdW50cnkpKVxuXHRcdCk7XG5cblx0XHRob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcblxuXHRcdHJldHVybiBob21lQ29udGFpbmVyO1xuXHR9XG5cblx0Ly9IYW5kbGVyc1xuXHRwdWJsaWMgb25TZWxlY3RGb2N1cygpIHtcblx0XHR0aGlzLnJlZ2lvbk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuXHRcdHRoaXMucmVnaW9uT3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0dGhpcy5yZWdpb25PcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXHRcdHRoaXMucmVnaW9uT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kXCIpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0Qmx1cigpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMucmVnaW9uT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5cblx0XHRcdHRoaXMucmVnaW9uT3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kXCIpO1xuXHRcdFx0dGhpcy5yZWdpb25PcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXHRcdH0sIDEwMCk7XG5cdH1cblxuXHRzdGF0aWMgb25PcHRpb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xuXHRcdGNvbnN0IHJlZ2lvblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3QtY29udGVudFwiKVswXTtcblxuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuXHRcdGNvbnN0IHJlZ2lvbkNsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgYXMgUmVnaW9uO1xuXG5cdFx0Y29uc3Qgc2VsZWN0VGV4dENvbnRlbnQgPSByZWdpb25TZWxlY3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXG5cdFx0XHRcInNwYW5cIlxuXHRcdClbMF0gYXMgSFRNTFNwYW5FbGVtZW50O1xuXHRcdHNlbGVjdFRleHRDb250ZW50LmlubmVySFRNTCA9IHJlZ2lvbkNsaWNrZWQ7XG5cblx0XHRjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZHMtZ3JpZFwiKSBhcyBIVE1MRWxlbWVudDtcblx0XHRjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSBMb2FkZXI7XG5cblx0XHRjb25zdCBjb3VudHJpZXNQcm9taXNlID1cblx0XHRcdHJlZ2lvbkNsaWNrZWQgPT0gUmVnaW9uLkFsbFxuXHRcdFx0XHQ/IENvdW50cmllc1NlcnZpY2UuZ2V0QWxsKClcblx0XHRcdFx0OiBDb3VudHJpZXNTZXJ2aWNlLmdldEJ5UmVnaW9uKHJlZ2lvbkNsaWNrZWQpO1xuXG5cdFx0Y291bnRyaWVzUHJvbWlzZS50aGVuKChyZXNwKSA9PiBIb21lUGFnZS5jaGFuZ2VDb3VudHJpZXNDYXJkcyhjYXJkc0NvbnRhaW5lciwgcmVzcCkpO1xuXHR9XG5cblx0c3RhdGljIG9uU2VhcmNoQ291bnRyeSgpIHtcblx0XHRjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRjb25zdCB0ZXJtID0gc2VhcmNoQmFyLnZhbHVlO1xuXG5cdFx0Y29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRzLWdyaWRcIikgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0Y2FyZHNDb250YWluZXIuaW5uZXJIVE1MID0gTG9hZGVyO1xuXG5cdFx0Y29uc3QgY291bnRyaWVzU2VhcmNoUHJvbWlzZSA9XG5cdFx0XHQhdGVybSB8fCB0ZXJtID09IFwiXCJcblx0XHRcdFx0PyBDb3VudHJpZXNTZXJ2aWNlLmdldEFsbCgpXG5cdFx0XHRcdDogQ291bnRyaWVzU2VydmljZS5zZWFyY2hCeU5hbWUodGVybSk7XG5cblx0XHRjb3VudHJpZXNTZWFyY2hQcm9taXNlLnRoZW4oKHJlc3ApID0+IHtcblx0XHRcdGlmIChyZXNwW1wic3RhdHVzXCJdKSByZXNwID0gW107XG5cblx0XHRcdEhvbWVQYWdlLmNoYW5nZUNvdW50cmllc0NhcmRzKGNhcmRzQ29udGFpbmVyLCByZXNwKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vSGVscGVyc1xuXHRzdGF0aWMgY2hhbmdlQ291bnRyaWVzQ2FyZHMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY291bnRyaWVzOiBJQ291bnRyeVtdKSB7XG5cdFx0Y29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHRpZiAoIWNvdW50cmllcyB8fCBjb3VudHJpZXMubGVuZ3RoID09IDApIHtcblx0XHRcdGNvbnRhaW5lci5pbm5lckhUTUwgPSBOb3REYXRhO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSBlbHNlIGNvdW50cmllcy5mb3JFYWNoKChjYXJkKSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ2FyZENvbXBvbmVudC5yZW5kZXIoY2FyZCkpKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvaG9tZS9ob21lXCI7XG5pbXBvcnQgeyBDb3VudHJ5RGV0YWlsUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9jb3VudHJ5LWRldGFpbC9jb3VudHJ5LWRldGFpbFwiO1xuaW1wb3J0IGxvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5odG1sXCI7XG5cbmV4cG9ydCBlbnVtIFVSTFMge1xuXHRob21lID0gXCIjL2hvbWVcIixcblx0Y291bnRyeSA9IFwiIy9jb3VudHJ5L1wiLFxuXHRub3RGb3VuZCA9IFwiIy9ub3QtZm91bmRcIlxufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcblx0cHJpdmF0ZSBhcHBSb290OiBIVE1MRWxlbWVudDtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFwcFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikgYXMgSFRNTEVsZW1lbnQ7XG5cdH1cblxuXHRwdWJsaWMgbmF2aWdhdGUodXJsOiBzdHJpbmcpIHtcblx0XHR0aGlzLmFwcFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0dGhpcy5hcHBSb290LmlubmVySFRNTCA9IGxvYWRlcjtcblxuXHRcdGlmIChuZXcgUmVnRXhwKFVSTFMuaG9tZSkudGVzdCh1cmwpKSB7XG5cdFx0XHRjb25zdCBob21lUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xuXHRcdFx0aG9tZVBhZ2UucmVuZGVyKCkudGhlbigoY29udGFpbmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuYXBwUm9vdC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0XHR0aGlzLmFwcFJvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChVUkxTLmNvdW50cnkpLnRlc3QodXJsKSkge1xuXHRcdFx0Y29uc3QgdXJsVG9rZW5pemVkID0gdXJsLnNwbGl0KFwiL1wiKTtcblx0XHRcdGNvbnN0IGNvZGUgPSB1cmxUb2tlbml6ZWRbdXJsVG9rZW5pemVkLmxlbmd0aCAtIDFdO1xuXHRcdFx0Q291bnRyeURldGFpbFBhZ2UucmVuZGVyKGNvZGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlc3VsdCkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmFwcFJvb3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0XHR0aGlzLmFwcFJvb3QuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIjQwNFwiKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IElDb3VudHJ5LCBSZWdpb24sIElDb3VudHJ5RGV0YWlsIH0gZnJvbSBcIi4uL21vZGVscy9jb3VudHJpZXMuaW50ZXJmYWNlc1wiO1xuXG5jb25zdCBBUElfTUFJTl9ST1VURSA9IFwiaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjJcIjtcbmNvbnN0IEFQSV9ST1VURVMgPSB7XG5cdGFsbDogQVBJX01BSU5fUk9VVEUgKyBcIi9hbGxcIixcblx0YnlSZWdpb246IEFQSV9NQUlOX1JPVVRFICsgXCIvcmVnaW9uXCIsXG5cdGJ5TmFtZTogQVBJX01BSU5fUk9VVEUgKyBcIi9uYW1lXCIsXG5cdGJ5Q29kZTogQVBJX01BSU5fUk9VVEUgKyBcIi9hbHBoYVwiLFxuXHRmaWVsZHM6IFwiP2ZpZWxkcz1uYW1lO3BvcHVsYXRpb247cmVnaW9uO2NhcGl0YWw7ZmxhZzthbHBoYTNDb2RlXCJcbn07XG5cbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNTZXJ2aWNlIHtcblx0c3RhdGljIGdldEFsbCgpOiBQcm9taXNlPElDb3VudHJ5W10+IHtcblx0XHRyZXR1cm4gZmV0Y2goQVBJX1JPVVRFUy5hbGwgKyBBUElfUk9VVEVTLmZpZWxkcylcblx0XHRcdC50aGVuKChyZXNwOiBSZXNwb25zZSkgPT4gcmVzcC5qc29uKCkpXG5cdFx0XHQudGhlbigocmVzcDogSUNvdW50cnlbXSkgPT4gcmVzcCk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0QnlSZWdpb24ocmVnaW9uOiBSZWdpb24pOiBQcm9taXNlPElDb3VudHJ5W10+IHtcblx0XHRyZXR1cm4gZmV0Y2goYCR7QVBJX1JPVVRFUy5ieVJlZ2lvbn0vJHtyZWdpb259JHtBUElfUk9VVEVTLmZpZWxkc31gKVxuXHRcdFx0LnRoZW4oKHJlc3A6IFJlc3BvbnNlKSA9PiByZXNwLmpzb24oKSlcblx0XHRcdC50aGVuKChyZXNwOiBJQ291bnRyeVtdKSA9PiByZXNwKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBzZWFyY2hCeU5hbWUodGVybTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcblx0XHRsZXQgZGF0YTogSUNvdW50cnlbXTtcblx0XHR0cnkge1xuXHRcdFx0ZGF0YSA9IGF3YWl0IGZldGNoKGAke0FQSV9ST1VURVMuYnlOYW1lfS8ke3Rlcm19JHtBUElfUk9VVEVTLmZpZWxkc31gKVxuXHRcdFx0XHQudGhlbigocmVzcDogUmVzcG9uc2UpID0+IHJlc3AuanNvbigpKVxuXHRcdFx0XHQudGhlbigocmVzcDogSUNvdW50cnlbXSkgPT4gcmVzcClcblx0XHRcdFx0LmNhdGNoKCgpID0+IFtdKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZGF0YSA9IFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldEJ5Q29kZShjb2RlOiBzdHJpbmcpIHtcblx0XHRsZXQgZGF0YTogSUNvdW50cnlEZXRhaWwgfCBudWxsO1xuXHRcdHRyeSB7XG5cdFx0XHRkYXRhID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRcdGAke0FQSV9ST1VURVMuYnlDb2RlfS8ke2NvZGV9JHtBUElfUk9VVEVTLmZpZWxkc307bGFuZ3VhZ2VzO2N1cnJlbmNpZXM7dG9wTGV2ZWxEb21haW47c3VicmVnaW9uO25hdGl2ZU5hbWU7Ym9yZGVyc2Bcblx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHJlc3A6IFJlc3BvbnNlKSA9PiByZXNwLmpzb24oKSlcblx0XHRcdFx0LnRoZW4oYXN5bmMgKHJlc3A6IElDb3VudHJ5RGV0YWlsKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgYm9yZGVyc1Byb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuXHRcdFx0XHRcdHJlc3AuYm9yZGVycy5mb3JFYWNoKChib3JkZXJDb2RlKSA9PlxuXHRcdFx0XHRcdFx0Ym9yZGVyc1Byb21pc2VzLnB1c2goQ291bnRyaWVzU2VydmljZS5nZXROYW1lQnlDb2RlKGJvcmRlckNvZGUpKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmVzcC5ib3JkZXJzU3QgPSBhd2FpdCBQcm9taXNlLmFsbChib3JkZXJzUHJvbWlzZXMpO1xuXHRcdFx0XHRcdHJldHVybiByZXNwO1xuXHRcdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZGF0YSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0TmFtZUJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiBmZXRjaChgJHtBUElfUk9VVEVTLmJ5Q29kZX0vJHtjb2RlfSR7QVBJX1JPVVRFUy5maWVsZHN9YClcblx0XHRcdC50aGVuKChyZXNwOiBSZXNwb25zZSkgPT4gcmVzcC5qc29uKCkpXG5cdFx0XHQudGhlbigocmVzcDogSUNvdW50cnkpID0+IHJlc3AubmFtZSk7XG5cdH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==