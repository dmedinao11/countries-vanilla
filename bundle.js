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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\n.card {\n  width: 100%;\n  height: auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  position: relative;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s;\n}\nbody.dark .card {\n  color: white;\n}\n.card * {\n  cursor: pointer;\n}\n.card:hover {\n  transform: translateY(-10px);\n}\n.card img {\n  position: relative;\n  width: 100%;\n  border-radius: 5px 5px 0px 0px;\n}\n.card .info-content {\n  padding: 20px;\n  margin: auto 0px;\n  display: flex;\n  flex-direction: column;\n}\n.card h4 {\n  margin-bottom: 1em;\n  font-size: 0.6em;\n}\n.card h6 {\n  font-weight: 600;\n  font-size: 0.5rem;\n}\n.card h6 small {\n  font-weight: 100;\n  font-size: 0.9em;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/components/card/card.component.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AAjCA;EACC,WAAA;EACA,YAAA;EACA,2CDEW;ECDX,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,0BAAA;AAoCD;AAlCC;EACC,YDRM;AC4CR;AAjCC;EACC,eAAA;AAmCF;AAhCC;EACC,4BAAA;AAkCF;AA/BC;EACC,kBAAA;EACA,WAAA;EACA,8BAAA;AAiCF;AA9BC;EACC,aAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;AAgCF;AA7BC;EACC,kBAAA;EACA,gBAAA;AA+BF;AA5BC;EACC,gBAAA;EACA,iBAAA;AA8BF;AA7BE;EACC,gBAAA;EACA,gBAAA;AA+BH","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\r\n$veryDarkBlue: hsl(207, 26%, 17%);\r\n$veryDarkBlueLight: hsl(200, 15%, 8%);\r\n$darkGray: hsl(0, 0%, 52%);\r\n$veryLightGray: hsl(0, 0%, 98%);\r\n$white: hsl(0, 0%, 100%);\r\n\r\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n\r\n$globalPadding: 0 6%;\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 30px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Nunito Sans\", sans-serif;\r\n\tmin-height: 100vh;\r\n\tbackground: $veryLightGray;\r\n\r\n\t&.dark {\r\n\t\tbackground: $veryDarkBlue;\r\n\t}\r\n}\r\n\r\n.container {\r\n\tpadding: $globalPadding;\r\n\tmargin: 1.5em 0;\r\n\tgrid-column: 1 / span 4;\r\n\r\n\tspan.spinner-container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\r\n\t\tbody.dark & {\r\n\t\t\tcolor: $white;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.not-coincidences {\r\n\tgrid-column: 1 / span 4;\r\n\ttext-align: center;\r\n\r\n\tbody.dark & {\r\n\t\tcolor: $white;\r\n\t}\r\n}\r\n","@import \"../../style.scss\";\r\n\r\n.card {\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tbox-shadow: $boxShadow;\r\n\tposition: relative;\r\n\tborder-radius: 5px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\ttransition: transform 0.2s;\r\n\r\n\tbody.dark & {\r\n\t\tcolor: $white;\r\n\t}\r\n\r\n\t* {\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t&:hover {\r\n\t\ttransform: translateY(-10px);\r\n\t}\r\n\r\n\timg {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\tborder-radius: 5px 5px 0px 0px;\r\n\t}\r\n\r\n\t.info-content {\r\n\t\tpadding: 20px;\r\n\t\tmargin: auto 0px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\th4 {\r\n\t\tmargin-bottom: 1em;\r\n\t\tfont-size: 0.6em;\r\n\t}\r\n\r\n\th6 {\r\n\t\tfont-weight: 600;\r\n\t\tfont-size: 0.5rem;\r\n\t\tsmall {\r\n\t\t\tfont-weight: 100;\r\n\t\t\tfont-size: 0.9em;\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\nheader {\n  min-height: 80px;\n  background: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6%;\n}\nheader i,\nheader a {\n  font-size: 15px;\n}\nheader i,\nheader a,\nheader h4 {\n  cursor: pointer;\n}\n@media only screen and (max-width: 520px) {\n  header h4 {\n    font-size: 20px;\n  }\n  header i,\nheader a {\n    font-size: 12px;\n  }\n}\nbody.dark header {\n  background: #2b3945;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/components/navbar/navbar.component.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AAjCA;EACC,gBAAA;EACA,iBDCO;ECAP,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;AAoCD;AAlCC;;EAEC,eAAA;AAoCF;AAjCC;;;EAGC,eAAA;AAmCF;AAhCC;EACC;IACC,eAAA;EAkCD;EA/BA;;IAEC,eAAA;EAiCD;AACF;AA9BC;EACC,mBDlCS;ECmCT,YD9BM;AC8DR","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\r\n$veryDarkBlue: hsl(207, 26%, 17%);\r\n$veryDarkBlueLight: hsl(200, 15%, 8%);\r\n$darkGray: hsl(0, 0%, 52%);\r\n$veryLightGray: hsl(0, 0%, 98%);\r\n$white: hsl(0, 0%, 100%);\r\n\r\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n\r\n$globalPadding: 0 6%;\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 30px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Nunito Sans\", sans-serif;\r\n\tmin-height: 100vh;\r\n\tbackground: $veryLightGray;\r\n\r\n\t&.dark {\r\n\t\tbackground: $veryDarkBlue;\r\n\t}\r\n}\r\n\r\n.container {\r\n\tpadding: $globalPadding;\r\n\tmargin: 1.5em 0;\r\n\tgrid-column: 1 / span 4;\r\n\r\n\tspan.spinner-container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\r\n\t\tbody.dark & {\r\n\t\t\tcolor: $white;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.not-coincidences {\r\n\tgrid-column: 1 / span 4;\r\n\ttext-align: center;\r\n\r\n\tbody.dark & {\r\n\t\tcolor: $white;\r\n\t}\r\n}\r\n","@import \"../../style.scss\";\r\n\r\nheader {\r\n\tmin-height: 80px;\r\n\tbackground: $white;\r\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: $globalPadding;\r\n\r\n\ti,\r\n\ta {\r\n\t\tfont-size: 15px;\r\n\t}\r\n\r\n\ti,\r\n\ta,\r\n\th4 {\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t@media only screen and (max-width: 520px) {\r\n\t\th4 {\r\n\t\t\tfont-size: 20px;\r\n\t\t}\r\n\r\n\t\ti,\r\n\t\ta {\r\n\t\t\tfont-size: 12px;\r\n\t\t}\r\n\t}\r\n\r\n\tbody.dark & {\r\n\t\tbackground: $darkBlue;\r\n\t\tcolor: $white;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\n.back-container {\n  width: 100%;\n  margin-bottom: 1.5rem;\n}\n.back-container .back {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  background: white;\n  color: #858585;\n  padding: 10px 40px;\n  font-size: 0.5em;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: none;\n  text-decoration: none;\n}\nbody.dark .back-container .back {\n  background: #2b3945;\n  color: white;\n}\n.back-container i {\n  font-size: 1em;\n}\n\n.country {\n  display: flex;\n  justify-content: space-between;\n}\nbody.dark .country * {\n  color: white;\n}\n.country img {\n  width: 40%;\n}\n.country .info-detail {\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.country .info-detail h4 {\n  font-size: 1em;\n}\n.country .info-detail h6 {\n  font-weight: 900;\n  font-size: 0.5rem;\n}\n.country .info-detail h6 small {\n  font-weight: 100;\n  font-size: 0.9em;\n}\n.country .info-detail .info {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px 20px;\n  margin-top: 0.3em;\n}\n.country .info-detail .borders-content {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  margin-top: 0.3em;\n}\n.country .info-detail .borders-content .borders {\n  display: flex;\n  flex-wrap: wrap;\n}\n.country .info-detail .borders-content .borders button {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  background: white;\n  color: #858585;\n  cursor: pointer;\n  padding: 2px 10px;\n  margin: 0px 10px 10px 10px;\n  font-size: 0.5em;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  transition: all 0.2s;\n}\n.country .info-detail .borders-content .borders button:hover {\n  transform: translateY(-5px);\n}\nbody.dark .country .info-detail .borders-content .borders button {\n  background: #2b3945;\n  color: white;\n}\n@media only screen and (max-width: 790px) {\n  .country {\n    flex-direction: column;\n  }\n  .country img {\n    width: 100%;\n  }\n  .country .info-detail {\n    width: 100%;\n    margin-top: 1.5em;\n  }\n  .country .info-detail h4 {\n    margin-bottom: 1.5em;\n  }\n}\n@media only screen and (max-width: 460px) {\n  .country .info-detail .info {\n    grid-template-columns: 1fr;\n  }\n  .country .info-detail .borders-content {\n    grid-template-columns: 1fr;\n    margin-top: 1em;\n  }\n  .country .info-detail .borders-content .borders {\n    margin-top: 0.3em;\n  }\n  .country .info-detail .borders-content .borders button {\n    margin: 10px 10px 0px 0px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/pages/country-detail/country-detail.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AAjCA;EACC,WAAA;EACA,qBAAA;AAoCD;AAlCC;EACC,2CAAA;EACA,iBDHM;ECIN,cDNS;ECQT,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,oBAAA;EACA,qBAAA;AAmCF;AAjCE;EACC,mBDpBQ;ECqBR,YDhBK;ACmDR;AA/BC;EACC,cAAA;AAiCF;;AA7BA;EACC,aAAA;EACA,8BAAA;AAgCD;AA9BC;EACC,YD9BM;AC8DR;AA7BC;EACC,UAAA;AA+BF;AA5BC;EACC,UAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;AA8BF;AA5BE;EACC,cAAA;AA8BH;AA3BE;EACC,gBAAA;EACA,iBAAA;AA6BH;AA5BG;EACC,gBAAA;EACA,gBAAA;AA8BJ;AA1BE;EACC,aAAA;EACA,qCAAA;EACA,mBAAA;EACA,iBAAA;AA4BH;AAzBE;EACC,aAAA;EACA,+BAAA;EACA,iBAAA;AA2BH;AAzBG;EACC,aAAA;EACA,eAAA;AA2BJ;AAzBI;EACC,2CDvEO;ECwEP,iBD1EG;EC2EH,cD7EM;EC+EN,eAAA;EACA,iBAAA;EACA,0BAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,oBAAA;AA0BL;AAxBK;EACC,2BAAA;AA0BN;AAvBK;EACC,mBDhGK;ECiGL,YD5FE;ACqHR;AAlBC;EA1ED;IA2EE,sBAAA;EAqBA;EAnBA;IACC,WAAA;EAqBD;EAlBA;IACC,WAAA;IACA,iBAAA;EAoBD;EAlBC;IACC,oBAAA;EAoBF;AACF;AAhBC;EAEE;IACC,0BAAA;EAiBF;EAdC;IACC,0BAAA;IACA,eAAA;EAgBF;EAdE;IACC,iBAAA;EAgBH;EAfG;IACC,yBAAA;EAiBJ;AACF","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\r\n$veryDarkBlue: hsl(207, 26%, 17%);\r\n$veryDarkBlueLight: hsl(200, 15%, 8%);\r\n$darkGray: hsl(0, 0%, 52%);\r\n$veryLightGray: hsl(0, 0%, 98%);\r\n$white: hsl(0, 0%, 100%);\r\n\r\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n\r\n$globalPadding: 0 6%;\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 30px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Nunito Sans\", sans-serif;\r\n\tmin-height: 100vh;\r\n\tbackground: $veryLightGray;\r\n\r\n\t&.dark {\r\n\t\tbackground: $veryDarkBlue;\r\n\t}\r\n}\r\n\r\n.container {\r\n\tpadding: $globalPadding;\r\n\tmargin: 1.5em 0;\r\n\tgrid-column: 1 / span 4;\r\n\r\n\tspan.spinner-container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\r\n\t\tbody.dark & {\r\n\t\t\tcolor: $white;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.not-coincidences {\r\n\tgrid-column: 1 / span 4;\r\n\ttext-align: center;\r\n\r\n\tbody.dark & {\r\n\t\tcolor: $white;\r\n\t}\r\n}\r\n","@import \"../../style.scss\";\r\n\r\n.back-container {\r\n\twidth: 100%;\r\n\tmargin-bottom: 1.5rem;\r\n\r\n\t.back {\r\n\t\tbox-shadow: $boxShadow;\r\n\t\tbackground: $white;\r\n\t\tcolor: $darkGray;\r\n\r\n\t\tpadding: 10px 40px;\r\n\t\tfont-size: 0.5em;\r\n\t\tborder-radius: 5px;\r\n\t\toutline: none;\r\n\t\tborder: none;\r\n\t\ttext-transform: none;\r\n\t\ttext-decoration: none;\r\n\r\n\t\tbody.dark & {\r\n\t\t\tbackground: $darkBlue;\r\n\t\t\tcolor: $white;\r\n\t\t}\r\n\t}\r\n\r\n\ti {\r\n\t\tfont-size: 1em;\r\n\t}\r\n}\r\n\r\n.country {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\r\n\tbody.dark & * {\r\n\t\tcolor: $white;\r\n\t}\r\n\r\n\timg {\r\n\t\twidth: 40%;\r\n\t}\r\n\r\n\t.info-detail {\r\n\t\twidth: 55%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-around;\r\n\r\n\t\th4 {\r\n\t\t\tfont-size: 1em;\r\n\t\t}\r\n\r\n\t\th6 {\r\n\t\t\tfont-weight: 900;\r\n\t\t\tfont-size: 0.5rem;\r\n\t\t\tsmall {\r\n\t\t\t\tfont-weight: 100;\r\n\t\t\t\tfont-size: 0.9em;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.info {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\tgrid-gap: 10px 20px;\r\n\t\t\tmargin-top: 0.3em;\r\n\t\t}\r\n\r\n\t\t.borders-content {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: auto 1fr;\r\n\t\t\tmargin-top: 0.3em;\r\n\r\n\t\t\t.borders {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-wrap: wrap;\r\n\r\n\t\t\t\tbutton {\r\n\t\t\t\t\tbox-shadow: $boxShadow;\r\n\t\t\t\t\tbackground: $white;\r\n\t\t\t\t\tcolor: $darkGray;\r\n\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\tpadding: 2px 10px;\r\n\t\t\t\t\tmargin: 0px 10px 10px 10px;\r\n\t\t\t\t\tfont-size: 0.5em;\r\n\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t\toutline: none;\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\ttransition: all 0.2s;\r\n\r\n\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\ttransform: translateY(-5px);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tbody.dark & {\r\n\t\t\t\t\t\tbackground: $darkBlue;\r\n\t\t\t\t\t\tcolor: $white;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@media only screen and (max-width: 790px) {\r\n\t\tflex-direction: column;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t.info-detail {\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin-top: 1.5em;\r\n\r\n\t\t\th4 {\r\n\t\t\t\tmargin-bottom: 1.5em;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@media only screen and (max-width: 460px) {\r\n\t\t.info-detail {\r\n\t\t\t.info {\r\n\t\t\t\tgrid-template-columns: 1fr;\r\n\t\t\t}\r\n\r\n\t\t\t.borders-content {\r\n\t\t\t\tgrid-template-columns: 1fr;\r\n\t\t\t\tmargin-top: 1em;\r\n\r\n\t\t\t\t.borders {\r\n\t\t\t\t\tmargin-top: 0.3em;\r\n\t\t\t\t\tbutton {\r\n\t\t\t\t\t\tmargin: 10px 10px 0px 0px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}\n\n.inputs-container {\n  display: flex;\n  justify-content: space-between;\n}\n.inputs-container .input-content {\n  width: 35%;\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  background: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  box-sizing: content-box;\n  border-radius: 5px;\n  flex-grow: 0;\n}\n.inputs-container .input-content input {\n  width: 100%;\n  outline: none;\n  border: none;\n  font-size: 0.5em;\n  font-weight: 100;\n}\n.inputs-container .input-content i {\n  color: #858585;\n  margin: 10px;\n  font-size: 15px;\n}\nbody.dark .inputs-container .input-content {\n  background: #2b3945;\n}\nbody.dark .inputs-container .input-content input,\nbody.dark .inputs-container .input-content .select-content {\n  background: #2b3945;\n  color: white;\n}\n.inputs-container .input-content:nth-child(2) {\n  justify-self: end;\n  width: 15%;\n  padding: 10px 20px;\n  position: relative;\n  flex-grow: 0;\n}\n.inputs-container .input-content:nth-child(2) * {\n  cursor: pointer;\n}\n.inputs-container .input-content:nth-child(2) .select-content {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border: none;\n  outline: none;\n  transition: all 0.3s;\n}\n.inputs-container .input-content:nth-child(2) .select-content span,\n.inputs-container .input-content:nth-child(2) .select-content i {\n  color: #858585;\n  font-size: 0.5em;\n  cursor: default;\n  transition: all 0.3s;\n}\n.inputs-container .input-content:nth-child(2) .select-content:focus i {\n  transform: rotate(180deg);\n}\n.inputs-container .input-content:nth-child(2) .dropdown {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  overflow-y: hidden;\n  flex-direction: column;\n  transform: translate(0, 65px);\n  background: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  height: 280px;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  z-index: 10;\n}\nbody.dark .inputs-container .input-content:nth-child(2) .dropdown {\n  background: #2b3945;\n}\n.inputs-container .input-content:nth-child(2) .dropdown span.option {\n  color: #858585;\n  padding: 10px 20px;\n  font-size: 0.5em;\n  cursor: pointer;\n}\n.inputs-container .input-content:nth-child(2) .dropdown span.option:hover {\n  background: #858585;\n  color: white;\n}\nbody.dark .inputs-container .input-content:nth-child(2) .dropdown span.option {\n  background: #2b3945;\n}\n.inputs-container .input-content:nth-child(2) .dropdown.expand {\n  animation-name: optionsEntrancy;\n}\n@keyframes optionsEntrancy {\n  0% {\n    display: none;\n    height: 0px;\n  }\n  100% {\n    height: 280px;\n    display: flex;\n  }\n}\n.inputs-container .input-content:nth-child(2) .dropdown.hide {\n  animation-name: optionsOut;\n}\n@keyframes optionsOut {\n  0% {\n    height: 280px;\n    display: flex;\n  }\n  100% {\n    height: 0px;\n    display: none;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .inputs-container .input-content {\n    width: 40%;\n  }\n  .inputs-container .input-content:nth-child(2) {\n    width: 20%;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .inputs-container {\n    flex-direction: column;\n  }\n  .inputs-container .input-content {\n    margin-bottom: 1.5em;\n    width: auto;\n  }\n  .inputs-container .input-content:nth-child(2) {\n    margin-bottom: 0;\n    width: 40%;\n  }\n}\n\n#cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1.5em;\n  align-items: flex-start;\n  margin: 1.5rem 0;\n}\n@media only screen and (max-width: 1000px) {\n  #cards-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media only screen and (max-width: 850px) {\n  #cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (max-width: 640px) {\n  #cards-grid {\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/pages/home/home.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;ACVD;;ADaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;ACOhB;ADYC;EACC,mBAvBa;ACaf;;ADcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;ACXD;ADaC;EACC,aAAA;EACA,uBAAA;ACXF;ADaE;EACC,YAjCK;ACsBR;;ADgBA;EACC,qBAAA;EACA,kBAAA;ACbD;ADeC;EACC,YA3CM;AC8BR;;AA/BA;EACC,aAAA;EACA,8BAAA;AAkCD;AAhCC;EACC,UAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBDRM;ECSN,2CDPU;ECQV,uBAAA;EACA,kBAAA;EACA,YAAA;AAkCF;AAhCE;EACC,WAAA;EACA,aAAA;EACA,YAAA;EACA,gBArBe;EAsBf,gBAAA;AAkCH;AA/BE;EACC,cDzBQ;EC0BR,YAAA;EACA,eAAA;AAiCH;AA9BE;EACC,mBDlCQ;ACkEX;AA/BG;;EAEC,mBDrCO;ECsCP,YDjCI;ACkER;AA5BC;EACC,iBAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;AA8BF;AA5BE;EACC,eAAA;AA8BH;AA3BE;EACC,aAAA;EACA,WAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;AA6BH;AA3BG;;EAEC,cD/DO;ECgEP,gBAjEc;EAkEd,eAAA;EACA,oBAAA;AA6BJ;AAzBI;EACC,yBAAA;AA2BL;AAtBE;EAGC,kBAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,iBDpFK;ECqFL,2CDnFS;ECoFT,WAAA;EACA,kBAAA;EACA,aAbiB;EAcjB,wBAAA;EACA,6BAAA;EACA,WAAA;AAsBH;AApBG;EACC,mBDnGO;ACyHX;AAnBG;EACC,cDpGO;ECqGP,kBAAA;EACA,gBAAA;EACA,eAAA;AAqBJ;AAnBI;EACC,mBD1GM;EC2GN,YAAA;AAqBL;AAlBI;EACC,mBDlHM;ACsIX;AAhBG;EAYC,+BAAA;AAOJ;AAlBI;EACC;IACC,aAAA;IACA,WAAA;EAoBJ;EAjBG;IACC,aA9Cc;IA+Cd,aAAA;EAmBJ;AACF;AAdG;EAaC,0BAAA;AAIJ;AAhBI;EACC;IACC,aAxDc;IAyDd,aAAA;EAkBJ;EAfG;IACC,WAAA;IACA,aAAA;EAiBJ;AACF;AATC;EACC;IACC,UAAA;EAWD;EATA;IACC,UAAA;EAWD;AACF;AARC;EA5JD;IA6JE,sBAAA;EAWA;EATA;IACC,oBAAA;IACA,WAAA;EAWD;EARA;IACC,gBAAA;IACA,UAAA;EAUD;AACF;;AANA;EACC,aAAA;EACA,qCAAA;EACA,eAAA;EACA,uBAAA;EACA,gBAAA;AASD;AAPC;EAPD;IAQE,qCAAA;EAUA;AACF;AARC;EAXD;IAYE,qCAAA;EAWA;AACF;AATC;EAfD;IAgBE,0BAAA;EAYA;AACF","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\r\n$veryDarkBlue: hsl(207, 26%, 17%);\r\n$veryDarkBlueLight: hsl(200, 15%, 8%);\r\n$darkGray: hsl(0, 0%, 52%);\r\n$veryLightGray: hsl(0, 0%, 98%);\r\n$white: hsl(0, 0%, 100%);\r\n\r\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n\r\n$globalPadding: 0 6%;\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 30px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Nunito Sans\", sans-serif;\r\n\tmin-height: 100vh;\r\n\tbackground: $veryLightGray;\r\n\r\n\t&.dark {\r\n\t\tbackground: $veryDarkBlue;\r\n\t}\r\n}\r\n\r\n.container {\r\n\tpadding: $globalPadding;\r\n\tmargin: 1.5em 0;\r\n\tgrid-column: 1 / span 4;\r\n\r\n\tspan.spinner-container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\r\n\t\tbody.dark & {\r\n\t\t\tcolor: $white;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.not-coincidences {\r\n\tgrid-column: 1 / span 4;\r\n\ttext-align: center;\r\n\r\n\tbody.dark & {\r\n\t\tcolor: $white;\r\n\t}\r\n}\r\n","@import \"../../style.scss\";\r\n\r\n$font-size-input: 0.5em;\r\n\r\n.inputs-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\r\n\t.input-content {\r\n\t\twidth: 35%;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tpadding: 5px 10px;\r\n\t\tbackground: $white;\r\n\t\tbox-shadow: $boxShadow;\r\n\t\tbox-sizing: content-box;\r\n\t\tborder-radius: 5px;\r\n\t\tflex-grow: 0;\r\n\r\n\t\tinput {\r\n\t\t\twidth: 100%;\r\n\t\t\toutline: none;\r\n\t\t\tborder: none;\r\n\t\t\tfont-size: $font-size-input;\r\n\t\t\tfont-weight: 100;\r\n\t\t}\r\n\r\n\t\ti {\r\n\t\t\tcolor: $darkGray;\r\n\t\t\tmargin: 10px;\r\n\t\t\tfont-size: 15px;\r\n\t\t}\r\n\r\n\t\tbody.dark & {\r\n\t\t\tbackground: $darkBlue;\r\n\t\t\tinput,\r\n\t\t\t.select-content {\r\n\t\t\t\tbackground: $darkBlue;\r\n\t\t\t\tcolor: $white;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.input-content:nth-child(2) {\r\n\t\tjustify-self: end;\r\n\t\twidth: 15%;\r\n\t\tpadding: 10px 20px;\r\n\t\tposition: relative;\r\n\t\tflex-grow: 0;\r\n\r\n\t\t* {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.select-content {\r\n\t\t\tdisplay: flex;\r\n\t\t\twidth: 100%;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tbackground: white;\r\n\t\t\tborder: none;\r\n\t\t\toutline: none;\r\n\t\t\ttransition: all 0.3s;\r\n\r\n\t\t\tspan,\r\n\t\t\ti {\r\n\t\t\t\tcolor: $darkGray;\r\n\t\t\t\tfont-size: $font-size-input;\r\n\t\t\t\tcursor: default;\r\n\t\t\t\ttransition: all 0.3s;\r\n\t\t\t}\r\n\r\n\t\t\t&:focus {\r\n\t\t\t\ti {\r\n\t\t\t\t\ttransform: rotate(180deg);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.dropdown {\r\n\t\t\t$dropdownHeight: 280px;\r\n\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: none;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\toverflow-y: hidden;\r\n\t\t\tflex-direction: column;\r\n\t\t\ttransform: translate(0, 65px);\r\n\t\t\tbackground: $white;\r\n\t\t\tbox-shadow: $boxShadow;\r\n\t\t\twidth: 100%;\r\n\t\t\tborder-radius: 5px;\r\n\t\t\theight: $dropdownHeight;\r\n\t\t\tanimation-duration: 0.3s;\r\n\t\t\tanimation-fill-mode: forwards;\r\n\t\t\tz-index: 10;\r\n\r\n\t\t\tbody.dark & {\r\n\t\t\t\tbackground: $darkBlue;\r\n\t\t\t}\r\n\r\n\t\t\tspan.option {\r\n\t\t\t\tcolor: $darkGray;\r\n\t\t\t\tpadding: 10px 20px;\r\n\t\t\t\tfont-size: 0.5em;\r\n\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground: $darkGray;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tbody.dark & {\r\n\t\t\t\t\tbackground: $darkBlue;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t&.expand {\r\n\t\t\t\t@keyframes optionsEntrancy {\r\n\t\t\t\t\t0% {\r\n\t\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\t\theight: 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t100% {\r\n\t\t\t\t\t\theight: $dropdownHeight;\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tanimation-name: optionsEntrancy;\r\n\t\t\t}\r\n\r\n\t\t\t&.hide {\r\n\t\t\t\t@keyframes optionsOut {\r\n\t\t\t\t\t0% {\r\n\t\t\t\t\t\theight: $dropdownHeight;\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t100% {\r\n\t\t\t\t\t\theight: 0px;\r\n\t\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tanimation-name: optionsOut;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@media only screen and (max-width: 1000px) {\r\n\t\t.input-content {\r\n\t\t\twidth: 40%;\r\n\t\t}\r\n\t\t.input-content:nth-child(2) {\r\n\t\t\twidth: 20%;\r\n\t\t}\r\n\t}\r\n\r\n\t@media only screen and (max-width: 850px) {\r\n\t\tflex-direction: column;\r\n\r\n\t\t.input-content {\r\n\t\t\tmargin-bottom: 1.5em;\r\n\t\t\twidth: auto;\r\n\t\t}\r\n\r\n\t\t.input-content:nth-child(2) {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t\twidth: 40%;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n#cards-grid {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(4, 1fr);\r\n\tgrid-gap: 1.5em;\r\n\talign-items: flex-start;\r\n\tmargin: 1.5rem 0;\r\n\r\n\t@media only screen and (max-width: 1000px) {\r\n\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t}\r\n\r\n\t@media only screen and (max-width: 850px) {\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t}\r\n\r\n\t@media only screen and (max-width: 640px) {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito Sans\", sans-serif;\n  min-height: 100vh;\n  background: #fafafa;\n}\nbody.dark {\n  background: #202c37;\n}\n\n.container {\n  padding: 0 6%;\n  margin: 1.5em 0;\n  grid-column: 1/span 4;\n}\n.container span.spinner-container {\n  display: flex;\n  justify-content: center;\n}\nbody.dark .container span.spinner-container {\n  color: white;\n}\n\n.not-coincidences {\n  grid-column: 1/span 4;\n  text-align: center;\n}\nbody.dark .not-coincidences {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAWA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;AAVD;;AAaA;EACC,sCAAA;EACA,iBAAA;EACA,mBAjBe;AAOhB;AAYC;EACC,mBAvBa;AAaf;;AAcA;EACC,aApBe;EAqBf,eAAA;EACA,qBAAA;AAXD;AAaC;EACC,aAAA;EACA,uBAAA;AAXF;AAaE;EACC,YAjCK;AAsBR;;AAgBA;EACC,qBAAA;EACA,kBAAA;AAbD;AAeC;EACC,YA3CM;AA8BR","sourcesContent":["$darkBlue: hsl(209, 23%, 22%);\r\n$veryDarkBlue: hsl(207, 26%, 17%);\r\n$veryDarkBlueLight: hsl(200, 15%, 8%);\r\n$darkGray: hsl(0, 0%, 52%);\r\n$veryLightGray: hsl(0, 0%, 98%);\r\n$white: hsl(0, 0%, 100%);\r\n\r\n$boxShadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n\r\n$globalPadding: 0 6%;\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 30px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Nunito Sans\", sans-serif;\r\n\tmin-height: 100vh;\r\n\tbackground: $veryLightGray;\r\n\r\n\t&.dark {\r\n\t\tbackground: $veryDarkBlue;\r\n\t}\r\n}\r\n\r\n.container {\r\n\tpadding: $globalPadding;\r\n\tmargin: 1.5em 0;\r\n\tgrid-column: 1 / span 4;\r\n\r\n\tspan.spinner-container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\r\n\t\tbody.dark & {\r\n\t\t\tcolor: $white;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.not-coincidences {\r\n\tgrid-column: 1 / span 4;\r\n\ttext-align: center;\r\n\r\n\tbody.dark & {\r\n\t\tcolor: $white;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<img src=\"{flag}\" class=\"flag\" />\r\n\r\n<div class=\"info-content\">\r\n\t<h4>{name}</h4>\r\n\r\n\t<h6>Population: <small>{population}</small></h6>\r\n\t<h6>Region: <small>{region}</small></h6>\r\n\t<h6>Capital: <small>{capital}</small></h6>\r\n</div>\r\n";
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
var code = "<div class=\"container\">\r\n\t<span class=\"spinner-container\">\r\n\t\t<i class=\"fas fa-spinner fa-pulse\"></i>\r\n\t</span>\r\n</div>\r\n";
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
var code = "<h4>\r\n\tWhere in the world?\r\n</h4>\r\n\r\n<a>\r\n\t<i class=\"far fa-moon\"></i>\r\n\tDark Mode\r\n</a>\r\n";
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
var code = "<span class=\"not-coincidences\">Not coincidences</span>\r\n";
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
var code = "<div class=\"back-container\">\r\n\t<a class=\"back\" href=\"javascript:history.back()\">\r\n\t\t<i class=\"fas fa-arrow-left\"></i>\r\n\t\tBack\r\n\t</a>\r\n</div>\r\n\r\n<div class=\"country\">\r\n\t<img src=\"{flag}\" />\r\n\t<div class=\"info-detail\">\r\n\t\t<h4>{name}</h4>\r\n\r\n\t\t<div class=\"info\">\r\n\t\t\t<h6>Native Name: <small>{nativeName}</small></h6>\r\n\t\t\t<h6>Top Level Domain: <small>{topLevelDomain}</small></h6>\r\n\t\t\t<h6>Population: <small>{population}</small></h6>\r\n\t\t\t<h6>Currencies: <small>{currencies}</small></h6>\r\n\t\t\t<h6>Region: <small>{region}</small></h6>\r\n\t\t\t<h6>Lenguages: <small>{languages}</small></h6>\r\n\t\t\t<h6>Sub Region: <small>{subregion}</small></h6>\r\n\t\t\t<h6>Capital: <small>{capital}</small></h6>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"borders-content\">\r\n\t\t\t<h6>Borders:</h6>\r\n\t\t\t<div class=\"borders\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
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
var code = "<div class=\"inputs-container\">\r\n\t<span class=\"input-content\">\r\n\t\t<i class=\"fas fa-search\"></i>\r\n\t\t<input type=\"text\" id=\"search-bar\" placeholder=\"Search for a country\" />\r\n\t</span>\r\n\r\n\t<span class=\"input-content\">\r\n\t\t<button class=\"select-content\">\r\n\t\t\t<span>Filter by region</span>\r\n\t\t\t<i class=\"fas fa-chevron-down\"></i>\r\n\t\t</button>\r\n\t</span>\r\n</div>\r\n";
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
const API_MAIN_ROUTE = "https://restcountries.com/v2";
const API_ROUTES = {
    all: API_MAIN_ROUTE + "/all",
    byRegion: API_MAIN_ROUTE + "/region",
    byName: API_MAIN_ROUTE + "/name",
    byCode: API_MAIN_ROUTE + "/alpha",
    fields: "?fields=name,population,region,capital,flag,alpha3Code"
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
                data = yield fetch(`${API_ROUTES.byCode}/${code}${API_ROUTES.fields},languages,currencies,topLevelDomain,subregion,nativeName,borders`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvdW50cnktZGV0YWlsL2NvdW50cnktZGV0YWlsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3M/YzM1OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzPzY5NzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm8tZGF0YS9uby1kYXRhLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvdW50cmllcy5pbnRlcmZhY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb3VudHJ5LWRldGFpbC9jb3VudHJ5LWRldGFpbC5odG1sIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb3VudHJ5LWRldGFpbC9jb3VudHJ5LWRldGFpbC5zY3NzPzQ0ZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvdW50cnktZGV0YWlsL2NvdW50cnktZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9ob21lLnNjc3M/Yzk4MCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaW5kZXgucm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb3VudHJpZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QixpQ0FBaUMsS0FBSyxHQUFHLE9BQU8sd0hBQXdILFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFL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Q0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDcEQsT0FBTyxJQUFJLENBQUM7Z0JBQ2IsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNmLElBQUksR0FBRyxJQUFJLENBQUM7YUFDWjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLGFBQWEsQ0FBQyxJQUFZOztZQUN0QyxPQUFPLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDOUQsSUFBSSxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtDQUNEOzs7Ozs7Ozs7Ozs7QUNqRUQsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxtTUFBK0Y7O0FBRWpJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG5ib2R5LmRhcmsge1xcbiAgYmFja2dyb3VuZDogIzIwMmMzNztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDYlO1xcbiAgbWFyZ2luOiAxLjVlbSAwO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbn1cXG4uY29udGFpbmVyIHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbn1cXG5ib2R5LmRhcmsgLmNhcmQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2FyZCAqIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxuLmNhcmQgaW1nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbn1cXG4uY2FyZCAuaW5mby1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IGF1dG8gMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jYXJkIGg0IHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGZvbnQtc2l6ZTogMC42ZW07XFxufVxcbi5jYXJkIGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuLmNhcmQgaDYgc21hbGwge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0E7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ1ZEOztBRGFBO0VBQ0Msc0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQWpCZTtBQ09oQjtBRFlDO0VBQ0MsbUJBdkJhO0FDYWY7O0FEY0E7RUFDQyxhQXBCZTtFQXFCZixlQUFBO0VBQ0EscUJBQUE7QUNYRDtBRGFDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FDWEY7QURhRTtFQUNDLFlBakNLO0FDc0JSOztBRGdCQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7QUNiRDtBRGVDO0VBQ0MsWUEzQ007QUM4QlI7O0FBakNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0RFVztFQ0RYLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQW9DRDtBQWxDQztFQUNDLFlEUk07QUM0Q1I7QUFqQ0M7RUFDQyxlQUFBO0FBbUNGO0FBaENDO0VBQ0MsNEJBQUE7QUFrQ0Y7QUEvQkM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQWlDRjtBQTlCQztFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWdDRjtBQTdCQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUErQkY7QUE1QkM7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FBOEJGO0FBN0JFO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQStCSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZGFya0JsdWU6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4kdmVyeURhcmtCbHVlOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxyXFxuJHZlcnlEYXJrQmx1ZUxpZ2h0OiBoc2woMjAwLCAxNSUsIDglKTtcXHJcXG4kZGFya0dyYXk6IGhzbCgwLCAwJSwgNTIlKTtcXHJcXG4kdmVyeUxpZ2h0R3JheTogaHNsKDAsIDAlLCA5OCUpO1xcclxcbiR3aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG5cXHJcXG4kYm94U2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcblxcclxcbiRnbG9iYWxQYWRkaW5nOiAwIDYlO1xcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAkdmVyeUxpZ2h0R3JheTtcXHJcXG5cXHJcXG5cXHQmLmRhcmsge1xcclxcblxcdFxcdGJhY2tncm91bmQ6ICR2ZXJ5RGFya0JsdWU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAkZ2xvYmFsUGFkZGluZztcXHJcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxyXFxuXFxyXFxuXFx0c3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRib2R5LmRhcmsgJiB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICR3aGl0ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4ubm90LWNvaW5jaWRlbmNlcyB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcdGJvZHkuZGFyayAmIHtcXHJcXG5cXHRcXHRjb2xvcjogJHdoaXRlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZS5zY3NzXFxcIjtcXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxyXFxuXFxyXFxuXFx0Ym9keS5kYXJrICYge1xcclxcblxcdFxcdGNvbG9yOiAkd2hpdGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCoge1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaW5mby1jb250ZW50IHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdFxcdG1hcmdpbjogYXV0byAwcHg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRoNCB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMC42ZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGg2IHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMC41cmVtO1xcclxcblxcdFxcdHNtYWxsIHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMTAwO1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuYm9keS5kYXJrIHtcXG4gIGJhY2tncm91bmQ6ICMyMDJjMzc7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMCA2JTtcXG4gIG1hcmdpbjogMS41ZW0gMDtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gNDtcXG59XFxuLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuYm9keS5kYXJrIC5jb250YWluZXIgc3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ub3QtY29pbmNpZGVuY2VzIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYm9keS5kYXJrIC5ub3QtY29pbmNpZGVuY2VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgNiU7XFxufVxcbmhlYWRlciBpLFxcbmhlYWRlciBhIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuaGVhZGVyIGksXFxuaGVhZGVyIGEsXFxuaGVhZGVyIGg0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xcbiAgaGVhZGVyIGg0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgaGVhZGVyIGksXFxuaGVhZGVyIGEge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcbmJvZHkuZGFyayBoZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzJiMzk0NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0E7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ1ZEOztBRGFBO0VBQ0Msc0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQWpCZTtBQ09oQjtBRFlDO0VBQ0MsbUJBdkJhO0FDYWY7O0FEY0E7RUFDQyxhQXBCZTtFQXFCZixlQUFBO0VBQ0EscUJBQUE7QUNYRDtBRGFDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FDWEY7QURhRTtFQUNDLFlBakNLO0FDc0JSOztBRGdCQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7QUNiRDtBRGVDO0VBQ0MsWUEzQ007QUM4QlI7O0FBakNBO0VBQ0MsZ0JBQUE7RUFDQSxpQkRDTztFQ0FQLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBb0NEO0FBbENDOztFQUVDLGVBQUE7QUFvQ0Y7QUFqQ0M7OztFQUdDLGVBQUE7QUFtQ0Y7QUFoQ0M7RUFDQztJQUNDLGVBQUE7RUFrQ0Q7RUEvQkE7O0lBRUMsZUFBQTtFQWlDRDtBQUNGO0FBOUJDO0VBQ0MsbUJEbENTO0VDbUNULFlEOUJNO0FDOERSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRkYXJrQmx1ZTogaHNsKDIwOSwgMjMlLCAyMiUpO1xcclxcbiR2ZXJ5RGFya0JsdWU6IGhzbCgyMDcsIDI2JSwgMTclKTtcXHJcXG4kdmVyeURhcmtCbHVlTGlnaHQ6IGhzbCgyMDAsIDE1JSwgOCUpO1xcclxcbiRkYXJrR3JheTogaHNsKDAsIDAlLCA1MiUpO1xcclxcbiR2ZXJ5TGlnaHRHcmF5OiBoc2woMCwgMCUsIDk4JSk7XFxyXFxuJHdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcblxcclxcbiRib3hTaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuXFxyXFxuJGdsb2JhbFBhZGRpbmc6IDAgNiU7XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcdGJhY2tncm91bmQ6ICR2ZXJ5TGlnaHRHcmF5O1xcclxcblxcclxcblxcdCYuZGFyayB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogJHZlcnlEYXJrQmx1ZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6ICRnbG9iYWxQYWRkaW5nO1xcclxcblxcdG1hcmdpbjogMS41ZW0gMDtcXHJcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXHJcXG5cXHJcXG5cXHRzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcblxcdFxcdGJvZHkuZGFyayAmIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJHdoaXRlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5ub3QtY29pbmNpZGVuY2VzIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0Ym9keS5kYXJrICYge1xcclxcblxcdFxcdGNvbG9yOiAkd2hpdGU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlLnNjc3NcXFwiO1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuXFx0bWluLWhlaWdodDogODBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAkd2hpdGU7XFxyXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmc6ICRnbG9iYWxQYWRkaW5nO1xcclxcblxcclxcblxcdGksXFxyXFxuXFx0YSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRpLFxcclxcblxcdGEsXFxyXFxuXFx0aDQge1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xcclxcblxcdFxcdGg0IHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGksXFxyXFxuXFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ym9keS5kYXJrICYge1xcclxcblxcdFxcdGJhY2tncm91bmQ6ICRkYXJrQmx1ZTtcXHJcXG5cXHRcXHRjb2xvcjogJHdoaXRlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuYm9keS5kYXJrIHtcXG4gIGJhY2tncm91bmQ6ICMyMDJjMzc7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMCA2JTtcXG4gIG1hcmdpbjogMS41ZW0gMDtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gNDtcXG59XFxuLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuYm9keS5kYXJrIC5jb250YWluZXIgc3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ub3QtY29pbmNpZGVuY2VzIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYm9keS5kYXJrIC5ub3QtY29pbmNpZGVuY2VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJhY2stY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG4uYmFjay1jb250YWluZXIgLmJhY2sge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6ICM4NTg1ODU7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5ib2R5LmRhcmsgLmJhY2stY29udGFpbmVyIC5iYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMyYjM5NDU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5iYWNrLWNvbnRhaW5lciBpIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5ib2R5LmRhcmsgLmNvdW50cnkgKiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb3VudHJ5IGltZyB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG4uY291bnRyeSAuaW5mby1kZXRhaWwge1xcbiAgd2lkdGg6IDU1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5jb3VudHJ5IC5pbmZvLWRldGFpbCBoNCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLmNvdW50cnkgLmluZm8tZGV0YWlsIGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuLmNvdW50cnkgLmluZm8tZGV0YWlsIGg2IHNtYWxsIHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG4uY291bnRyeSAuaW5mby1kZXRhaWwgLmluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWdhcDogMTBweCAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMC4zZW07XFxufVxcbi5jb3VudHJ5IC5pbmZvLWRldGFpbCAuYm9yZGVycy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgbWFyZ2luLXRvcDogMC4zZW07XFxufVxcbi5jb3VudHJ5IC5pbmZvLWRldGFpbCAuYm9yZGVycy1jb250ZW50IC5ib3JkZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5jb3VudHJ5IC5pbmZvLWRldGFpbCAuYm9yZGVycy1jb250ZW50IC5ib3JkZXJzIGJ1dHRvbiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzg1ODU4NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG4uY291bnRyeSAuaW5mby1kZXRhaWwgLmJvcmRlcnMtY29udGVudCAuYm9yZGVycyBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5ib2R5LmRhcmsgLmNvdW50cnkgLmluZm8tZGV0YWlsIC5ib3JkZXJzLWNvbnRlbnQgLmJvcmRlcnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMyYjM5NDU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jb3VudHJ5IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5jb3VudHJ5IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmNvdW50cnkgLmluZm8tZGV0YWlsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgfVxcbiAgLmNvdW50cnkgLmluZm8tZGV0YWlsIGg0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcXG4gIC5jb3VudHJ5IC5pbmZvLWRldGFpbCAuaW5mbyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgLmNvdW50cnkgLmluZm8tZGV0YWlsIC5ib3JkZXJzLWNvbnRlbnQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgfVxcbiAgLmNvdW50cnkgLmluZm8tZGV0YWlsIC5ib3JkZXJzLWNvbnRlbnQgLmJvcmRlcnMge1xcbiAgICBtYXJnaW4tdG9wOiAwLjNlbTtcXG4gIH1cXG4gIC5jb3VudHJ5IC5pbmZvLWRldGFpbCAuYm9yZGVycy1jb250ZW50IC5ib3JkZXJzIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvY291bnRyeS1kZXRhaWwvY291bnRyeS1kZXRhaWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDVkQ7O0FEYUE7RUFDQyxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBakJlO0FDT2hCO0FEWUM7RUFDQyxtQkF2QmE7QUNhZjs7QURjQTtFQUNDLGFBcEJlO0VBcUJmLGVBQUE7RUFDQSxxQkFBQTtBQ1hEO0FEYUM7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7QUNYRjtBRGFFO0VBQ0MsWUFqQ0s7QUNzQlI7O0FEZ0JBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtBQ2JEO0FEZUM7RUFDQyxZQTNDTTtBQzhCUjs7QUFqQ0E7RUFDQyxXQUFBO0VBQ0EscUJBQUE7QUFvQ0Q7QUFsQ0M7RUFDQywyQ0FBQTtFQUNBLGlCREhNO0VDSU4sY0ROUztFQ1FULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQW1DRjtBQWpDRTtFQUNDLG1CRHBCUTtFQ3FCUixZRGhCSztBQ21EUjtBQS9CQztFQUNDLGNBQUE7QUFpQ0Y7O0FBN0JBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBZ0NEO0FBOUJDO0VBQ0MsWUQ5Qk07QUM4RFI7QUE3QkM7RUFDQyxVQUFBO0FBK0JGO0FBNUJDO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBOEJGO0FBNUJFO0VBQ0MsY0FBQTtBQThCSDtBQTNCRTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUE2Qkg7QUE1Qkc7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FBOEJKO0FBMUJFO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTRCSDtBQXpCRTtFQUNDLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBMkJIO0FBekJHO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUEyQko7QUF6Qkk7RUFDQywyQ0R2RU87RUN3RVAsaUJEMUVHO0VDMkVILGNEN0VNO0VDK0VOLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUEwQkw7QUF4Qks7RUFDQywyQkFBQTtBQTBCTjtBQXZCSztFQUNDLG1CRGhHSztFQ2lHTCxZRDVGRTtBQ3FIUjtBQWxCQztFQTFFRDtJQTJFRSxzQkFBQTtFQXFCQTtFQW5CQTtJQUNDLFdBQUE7RUFxQkQ7RUFsQkE7SUFDQyxXQUFBO0lBQ0EsaUJBQUE7RUFvQkQ7RUFsQkM7SUFDQyxvQkFBQTtFQW9CRjtBQUNGO0FBaEJDO0VBRUU7SUFDQywwQkFBQTtFQWlCRjtFQWRDO0lBQ0MsMEJBQUE7SUFDQSxlQUFBO0VBZ0JGO0VBZEU7SUFDQyxpQkFBQTtFQWdCSDtFQWZHO0lBQ0MseUJBQUE7RUFpQko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZGFya0JsdWU6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4kdmVyeURhcmtCbHVlOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxyXFxuJHZlcnlEYXJrQmx1ZUxpZ2h0OiBoc2woMjAwLCAxNSUsIDglKTtcXHJcXG4kZGFya0dyYXk6IGhzbCgwLCAwJSwgNTIlKTtcXHJcXG4kdmVyeUxpZ2h0R3JheTogaHNsKDAsIDAlLCA5OCUpO1xcclxcbiR3aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG5cXHJcXG4kYm94U2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcblxcclxcbiRnbG9iYWxQYWRkaW5nOiAwIDYlO1xcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAkdmVyeUxpZ2h0R3JheTtcXHJcXG5cXHJcXG5cXHQmLmRhcmsge1xcclxcblxcdFxcdGJhY2tncm91bmQ6ICR2ZXJ5RGFya0JsdWU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAkZ2xvYmFsUGFkZGluZztcXHJcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxyXFxuXFxyXFxuXFx0c3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRib2R5LmRhcmsgJiB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICR3aGl0ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4ubm90LWNvaW5jaWRlbmNlcyB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcdGJvZHkuZGFyayAmIHtcXHJcXG5cXHRcXHRjb2xvcjogJHdoaXRlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZS5zY3NzXFxcIjtcXHJcXG5cXHJcXG4uYmFjay1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG5cXHJcXG5cXHQuYmFjayB7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogJGJveFNoYWRvdztcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkd2hpdGU7XFxyXFxuXFx0XFx0Y29sb3I6ICRkYXJrR3JheTtcXHJcXG5cXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAwLjVlbTtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcblxcdFxcdGJvZHkuZGFyayAmIHtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICR3aGl0ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGkge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMWVtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50cnkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcblxcdGJvZHkuZGFyayAmICoge1xcclxcblxcdFxcdGNvbG9yOiAkd2hpdGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0d2lkdGg6IDQwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmluZm8tZGV0YWlsIHtcXHJcXG5cXHRcXHR3aWR0aDogNTUlO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHJcXG5cXHRcXHRoNCB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGg2IHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogOTAwO1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMC41cmVtO1xcclxcblxcdFxcdFxcdHNtYWxsIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogMTAwO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuaW5mbyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdFxcdFxcdGdyaWQtZ2FwOiAxMHB4IDIwcHg7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMC4zZW07XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5ib3JkZXJzLWNvbnRlbnQge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAwLjNlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQuYm9yZGVycyB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0YnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3gtc2hhZG93OiAkYm94U2hhZG93O1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICR3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogJGRhcmtHcmF5O1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAycHggMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDAuNWVtO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRvdXRsaW5lOiBub25lO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdGJvZHkuZGFyayAmIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6ICR3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5pbmZvLWRldGFpbCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMS41ZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0aDQge1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcXHJcXG5cXHRcXHQuaW5mby1kZXRhaWwge1xcclxcblxcdFxcdFxcdC5pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmJvcmRlcnMtY29udGVudCB7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogMWVtO1xcclxcblxcclxcblxcdFxcdFxcdFxcdC5ib3JkZXJzIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiAwLjNlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRidXR0b24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMTBweCAxMHB4IDBweCAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuYm9keS5kYXJrIHtcXG4gIGJhY2tncm91bmQ6ICMyMDJjMzc7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMCA2JTtcXG4gIG1hcmdpbjogMS41ZW0gMDtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gNDtcXG59XFxuLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuYm9keS5kYXJrIC5jb250YWluZXIgc3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ub3QtY29pbmNpZGVuY2VzIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYm9keS5kYXJrIC5ub3QtY29pbmNpZGVuY2VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmlucHV0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQge1xcbiAgd2lkdGg6IDM1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50IGkge1xcbiAgY29sb3I6ICM4NTg1ODU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbmJvZHkuZGFyayAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjMmIzOTQ1O1xcbn1cXG5ib2R5LmRhcmsgLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQgaW5wdXQsXFxuYm9keS5kYXJrIC5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50IC5zZWxlY3QtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjMmIzOTQ1O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB3aWR0aDogMTUlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuc2VsZWN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLnNlbGVjdC1jb250ZW50IHNwYW4sXFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIC5zZWxlY3QtY29udGVudCBpIHtcXG4gIGNvbG9yOiAjODU4NTg1O1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLnNlbGVjdC1jb250ZW50OmZvY3VzIGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIC5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA2NXB4KTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgei1pbmRleDogMTA7XFxufVxcbmJvZHkuZGFyayAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLmRyb3Bkb3duIHtcXG4gIGJhY2tncm91bmQ6ICMyYjM5NDU7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuZHJvcGRvd24gc3Bhbi5vcHRpb24ge1xcbiAgY29sb3I6ICM4NTg1ODU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLmRyb3Bkb3duIHNwYW4ub3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NTg1ODU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmJvZHkuZGFyayAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikgLmRyb3Bkb3duIHNwYW4ub3B0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICMyYjM5NDU7XFxufVxcbi5pbnB1dHMtY29udGFpbmVyIC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSAuZHJvcGRvd24uZXhwYW5kIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvcHRpb25zRW50cmFuY3k7XFxufVxcbkBrZXlmcmFtZXMgb3B0aW9uc0VudHJhbmN5IHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIC5kcm9wZG93bi5oaWRlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvcHRpb25zT3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIG9wdGlvbnNPdXQge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDI4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbiAgLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgLmlucHV0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmlucHV0cy1jb250YWluZXIgLmlucHV0LWNvbnRlbnQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGVudDpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cXG5cXG4jY2FyZHMtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtZ2FwOiAxLjVlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxLjVyZW0gMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNjYXJkcy1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgI2NhcmRzLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxuICAjY2FyZHMtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNWRDs7QURhQTtFQUNDLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFqQmU7QUNPaEI7QURZQztFQUNDLG1CQXZCYTtBQ2FmOztBRGNBO0VBQ0MsYUFwQmU7RUFxQmYsZUFBQTtFQUNBLHFCQUFBO0FDWEQ7QURhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtBQ1hGO0FEYUU7RUFDQyxZQWpDSztBQ3NCUjs7QURnQkE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0FDYkQ7QURlQztFQUNDLFlBM0NNO0FDOEJSOztBQS9CQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtBQWtDRDtBQWhDQztFQUNDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCRFJNO0VDU04sMkNEUFU7RUNRVix1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWtDRjtBQWhDRTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQXJCZTtFQXNCZixnQkFBQTtBQWtDSDtBQS9CRTtFQUNDLGNEekJRO0VDMEJSLFlBQUE7RUFDQSxlQUFBO0FBaUNIO0FBOUJFO0VBQ0MsbUJEbENRO0FDa0VYO0FBL0JHOztFQUVDLG1CRHJDTztFQ3NDUCxZRGpDSTtBQ2tFUjtBQTVCQztFQUNDLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBOEJGO0FBNUJFO0VBQ0MsZUFBQTtBQThCSDtBQTNCRTtFQUNDLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQTZCSDtBQTNCRzs7RUFFQyxjRC9ETztFQ2dFUCxnQkFqRWM7RUFrRWQsZUFBQTtFQUNBLG9CQUFBO0FBNkJKO0FBekJJO0VBQ0MseUJBQUE7QUEyQkw7QUF0QkU7RUFHQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCRHBGSztFQ3FGTCwyQ0RuRlM7RUNvRlQsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFiaUI7RUFjakIsd0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFzQkg7QUFwQkc7RUFDQyxtQkRuR087QUN5SFg7QUFuQkc7RUFDQyxjRHBHTztFQ3FHUCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXFCSjtBQW5CSTtFQUNDLG1CRDFHTTtFQzJHTixZQUFBO0FBcUJMO0FBbEJJO0VBQ0MsbUJEbEhNO0FDc0lYO0FBaEJHO0VBWUMsK0JBQUE7QUFPSjtBQWxCSTtFQUNDO0lBQ0MsYUFBQTtJQUNBLFdBQUE7RUFvQko7RUFqQkc7SUFDQyxhQTlDYztJQStDZCxhQUFBO0VBbUJKO0FBQ0Y7QUFkRztFQWFDLDBCQUFBO0FBSUo7QUFoQkk7RUFDQztJQUNDLGFBeERjO0lBeURkLGFBQUE7RUFrQko7RUFmRztJQUNDLFdBQUE7SUFDQSxhQUFBO0VBaUJKO0FBQ0Y7QUFUQztFQUNDO0lBQ0MsVUFBQTtFQVdEO0VBVEE7SUFDQyxVQUFBO0VBV0Q7QUFDRjtBQVJDO0VBNUpEO0lBNkpFLHNCQUFBO0VBV0E7RUFUQTtJQUNDLG9CQUFBO0lBQ0EsV0FBQTtFQVdEO0VBUkE7SUFDQyxnQkFBQTtJQUNBLFVBQUE7RUFVRDtBQUNGOztBQU5BO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFTRDtBQVBDO0VBUEQ7SUFRRSxxQ0FBQTtFQVVBO0FBQ0Y7QUFSQztFQVhEO0lBWUUscUNBQUE7RUFXQTtBQUNGO0FBVEM7RUFmRDtJQWdCRSwwQkFBQTtFQVlBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGRhcmtCbHVlOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxyXFxuJHZlcnlEYXJrQmx1ZTogaHNsKDIwNywgMjYlLCAxNyUpO1xcclxcbiR2ZXJ5RGFya0JsdWVMaWdodDogaHNsKDIwMCwgMTUlLCA4JSk7XFxyXFxuJGRhcmtHcmF5OiBoc2woMCwgMCUsIDUyJSk7XFxyXFxuJHZlcnlMaWdodEdyYXk6IGhzbCgwLCAwJSwgOTglKTtcXHJcXG4kd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuXFxyXFxuJGJveFNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG5cXHJcXG4kZ2xvYmFsUGFkZGluZzogMCA2JTtcXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDMwcHg7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0YmFja2dyb3VuZDogJHZlcnlMaWdodEdyYXk7XFxyXFxuXFxyXFxuXFx0Ji5kYXJrIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkdmVyeURhcmtCbHVlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogJGdsb2JhbFBhZGRpbmc7XFxyXFxuXFx0bWFyZ2luOiAxLjVlbSAwO1xcclxcblxcdGdyaWQtY29sdW1uOiAxIC8gc3BhbiA0O1xcclxcblxcclxcblxcdHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0XFx0Ym9keS5kYXJrICYge1xcclxcblxcdFxcdFxcdGNvbG9yOiAkd2hpdGU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1jb2luY2lkZW5jZXMge1xcclxcblxcdGdyaWQtY29sdW1uOiAxIC8gc3BhbiA0O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHRib2R5LmRhcmsgJiB7XFxyXFxuXFx0XFx0Y29sb3I6ICR3aGl0ZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGUuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuJGZvbnQtc2l6ZS1pbnB1dDogMC41ZW07XFxyXFxuXFxyXFxuLmlucHV0cy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcblxcdC5pbnB1dC1jb250ZW50IHtcXHJcXG5cXHRcXHR3aWR0aDogMzUlO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkd2hpdGU7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogJGJveFNoYWRvdztcXHJcXG5cXHRcXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0ZmxleC1ncm93OiAwO1xcclxcblxcclxcblxcdFxcdGlucHV0IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRvdXRsaW5lOiBub25lO1xcclxcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6ICRmb250LXNpemUtaW5wdXQ7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDEwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRkYXJrR3JheTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDEwcHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRib2R5LmRhcmsgJiB7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogJGRhcmtCbHVlO1xcclxcblxcdFxcdFxcdGlucHV0LFxcclxcblxcdFxcdFxcdC5zZWxlY3QtY29udGVudCB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogJGRhcmtCbHVlO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkd2hpdGU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG5cXHRcXHR3aWR0aDogMTUlO1xcclxcblxcdFxcdHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0ZmxleC1ncm93OiAwO1xcclxcblxcclxcblxcdFxcdCoge1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnNlbGVjdC1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6IHdoaXRlO1xcclxcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRvdXRsaW5lOiBub25lO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcblxcclxcblxcdFxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICRkYXJrR3JheTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6ICRmb250LXNpemUtaW5wdXQ7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmZvY3VzIHtcXHJcXG5cXHRcXHRcXHRcXHRpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5kcm9wZG93biB7XFxyXFxuXFx0XFx0XFx0JGRyb3Bkb3duSGVpZ2h0OiAyODBweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA2NXB4KTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAkd2hpdGU7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogJGJveFNoYWRvdztcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAkZHJvcGRvd25IZWlnaHQ7XFxyXFxuXFx0XFx0XFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcblxcdFxcdFxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDEwO1xcclxcblxcclxcblxcdFxcdFxcdGJvZHkuZGFyayAmIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdHNwYW4ub3B0aW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJGRhcmtHcmF5O1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDAuNWVtO1xcclxcblxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAkZGFya0dyYXk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRib2R5LmRhcmsgJiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZDogJGRhcmtCbHVlO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Ji5leHBhbmQge1xcclxcblxcdFxcdFxcdFxcdEBrZXlmcmFtZXMgb3B0aW9uc0VudHJhbmN5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQwJSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0MTAwJSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAkZHJvcGRvd25IZWlnaHQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdGFuaW1hdGlvbi1uYW1lOiBvcHRpb25zRW50cmFuY3k7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdCYuaGlkZSB7XFxyXFxuXFx0XFx0XFx0XFx0QGtleWZyYW1lcyBvcHRpb25zT3V0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQwJSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAkZHJvcGRvd25IZWlnaHQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0MTAwJSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdGFuaW1hdGlvbi1uYW1lOiBvcHRpb25zT3V0O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxyXFxuXFx0XFx0LmlucHV0LWNvbnRlbnQge1xcclxcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5pbnB1dC1jb250ZW50Om50aC1jaGlsZCgyKSB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDIwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcblxcdFxcdC5pbnB1dC1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmlucHV0LWNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRzLWdyaWQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG5cXHRncmlkLWdhcDogMS41ZW07XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0bWFyZ2luOiAxLjVyZW0gMDtcXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG5ib2R5LmRhcmsge1xcbiAgYmFja2dyb3VuZDogIzIwMmMzNztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDYlO1xcbiAgbWFyZ2luOiAxLjVlbSAwO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbn1cXG4uY29udGFpbmVyIHNwYW4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLmNvbnRhaW5lciBzcGFuLnNwaW5uZXItY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5ib2R5LmRhcmsgLm5vdC1jb2luY2lkZW5jZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBVkQ7O0FBYUE7RUFDQyxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBakJlO0FBT2hCO0FBWUM7RUFDQyxtQkF2QmE7QUFhZjs7QUFjQTtFQUNDLGFBcEJlO0VBcUJmLGVBQUE7RUFDQSxxQkFBQTtBQVhEO0FBYUM7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7QUFYRjtBQWFFO0VBQ0MsWUFqQ0s7QUFzQlI7O0FBZ0JBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtBQWJEO0FBZUM7RUFDQyxZQTNDTTtBQThCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZGFya0JsdWU6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4kdmVyeURhcmtCbHVlOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxyXFxuJHZlcnlEYXJrQmx1ZUxpZ2h0OiBoc2woMjAwLCAxNSUsIDglKTtcXHJcXG4kZGFya0dyYXk6IGhzbCgwLCAwJSwgNTIlKTtcXHJcXG4kdmVyeUxpZ2h0R3JheTogaHNsKDAsIDAlLCA5OCUpO1xcclxcbiR3aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG5cXHJcXG4kYm94U2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcblxcclxcbiRnbG9iYWxQYWRkaW5nOiAwIDYlO1xcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAkdmVyeUxpZ2h0R3JheTtcXHJcXG5cXHJcXG5cXHQmLmRhcmsge1xcclxcblxcdFxcdGJhY2tncm91bmQ6ICR2ZXJ5RGFya0JsdWU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAkZ2xvYmFsUGFkZGluZztcXHJcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxyXFxuXFxyXFxuXFx0c3Bhbi5zcGlubmVyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRib2R5LmRhcmsgJiB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICR3aGl0ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4ubm90LWNvaW5jaWRlbmNlcyB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcdGJvZHkuZGFyayAmIHtcXHJcXG5cXHRcXHRjb2xvcjogJHdoaXRlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGltZyBzcmM9XFxcIntmbGFnfVxcXCIgY2xhc3M9XFxcImZsYWdcXFwiIC8+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaW5mby1jb250ZW50XFxcIj5cXHJcXG5cXHQ8aDQ+e25hbWV9PC9oND5cXHJcXG5cXHJcXG5cXHQ8aDY+UG9wdWxhdGlvbjogPHNtYWxsPntwb3B1bGF0aW9ufTwvc21hbGw+PC9oNj5cXHJcXG5cXHQ8aDY+UmVnaW9uOiA8c21hbGw+e3JlZ2lvbn08L3NtYWxsPjwvaDY+XFxyXFxuXFx0PGg2PkNhcGl0YWw6IDxzbWFsbD57Y2FwaXRhbH08L3NtYWxsPjwvaDY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLmNvbXBvbmVudC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgVmlldyBmcm9tIFwiLi9jYXJkLmNvbXBvbmVudC5odG1sXCI7XHJcbmltcG9ydCBcIi4vY2FyZC5jb21wb25lbnQuc2Nzc1wiO1xyXG5pbXBvcnQgeyBJQ291bnRyeSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291bnRyaWVzLmludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgVVJMUyB9IGZyb20gXCIuLi8uLi9yb3V0ZXMvaW5kZXgucm91dGVzXCI7XHJcblxyXG5lbnVtIERPTURhdGEge1xyXG5cdEZsYWcgPSBcIntmbGFnfVwiLFxyXG5cdE5hbWUgPSBcIntuYW1lfVwiLFxyXG5cdFBvcHVsYXRpb24gPSBcIntwb3B1bGF0aW9ufVwiLFxyXG5cdFJlZ2lvbiA9IFwie3JlZ2lvbn1cIixcclxuXHRDYXBpdGFsID0gXCJ7Y2FwaXRhbH1cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XHJcblx0c3RhdGljIHJlbmRlcihjb3VudHJ5OiBJQ291bnRyeSk6IEhUTUxEaXZFbGVtZW50IHtcclxuXHRcdGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuXHRcdGNhcmQuaWQgPSBjb3VudHJ5LmFscGhhM0NvZGU7XHJcblx0XHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDYXJkQ29tcG9uZW50Lm9uQ2FyZENsaWNrKTtcclxuXHJcblx0XHRsZXQgdmlld0Zvcm1hdCA9IFZpZXc7XHJcblxyXG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLkZsYWcsIGNvdW50cnkuZmxhZyk7XHJcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuQ2FwaXRhbCwgY291bnRyeS5jYXBpdGFsKTtcclxuXHRcdHZpZXdGb3JtYXQgPSB2aWV3Rm9ybWF0LnJlcGxhY2UoRE9NRGF0YS5OYW1lLCBjb3VudHJ5Lm5hbWUpO1xyXG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShcclxuXHRcdFx0RE9NRGF0YS5Qb3B1bGF0aW9uLFxyXG5cdFx0XHRJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChjb3VudHJ5LnBvcHVsYXRpb24pXHJcblx0XHQpO1xyXG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLlJlZ2lvbiwgY291bnRyeS5yZWdpb24pO1xyXG5cclxuXHRcdGNhcmQuaW5uZXJIVE1MID0gdmlld0Zvcm1hdDtcclxuXHRcdHJldHVybiBjYXJkO1xyXG5cdH1cclxuXHJcblx0Ly9IYW5kbGVyc1xyXG5cdHN0YXRpYyBvbkNhcmRDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG5cdFx0bGV0IGNhcmQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR3aGlsZSAoIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FyZFwiKSkgY2FyZCA9IGNhcmQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7VVJMUy5jb3VudHJ5fSR7Y2FyZC5pZH1gO1xyXG5cdH1cclxufVxyXG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJzcGlubmVyLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0PGkgY2xhc3M9XFxcImZhcyBmYS1zcGlubmVyIGZhLXB1bHNlXFxcIj48L2k+XFxyXFxuXFx0PC9zcGFuPlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxoND5cXHJcXG5cXHRXaGVyZSBpbiB0aGUgd29ybGQ/XFxyXFxuPC9oND5cXHJcXG5cXHJcXG48YT5cXHJcXG5cXHQ8aSBjbGFzcz1cXFwiZmFyIGZhLW1vb25cXFwiPjwvaT5cXHJcXG5cXHREYXJrIE1vZGVcXHJcXG48L2E+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB2aWV3IGZyb20gXCIuL25hdmJhci5jb21wb25lbnQuaHRtbFwiO1xyXG5pbXBvcnQgXCIuL25hdmJhci5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7XHJcblx0cHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcblx0XHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cdFx0aGVhZGVyLmlubmVySFRNTCA9IHZpZXc7XHJcblxyXG5cdFx0aGVhZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaDRcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Hb1RvSG9tZSk7XHJcblx0XHRoZWFkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uVGhlbWVNb2RlQ2hhbmdlKTtcclxuXHJcblx0XHRyZXR1cm4gaGVhZGVyO1xyXG5cdH1cclxuXHJcblx0Ly9IYW5kbGVyc1xyXG5cdHB1YmxpYyBvblRoZW1lTW9kZUNoYW5nZSgpIHtcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Hb1RvSG9tZSgpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjL2hvbWVcIjtcclxuXHR9XHJcbn1cclxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHNwYW4gY2xhc3M9XFxcIm5vdC1jb2luY2lkZW5jZXNcXFwiPk5vdCBjb2luY2lkZW5jZXM8L3NwYW4+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vcm91dGVzL2luZGV4LnJvdXRlc1wiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG5cdHByaXZhdGUgaGVhZGVyOiBIVE1MRWxlbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHRcdHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChuZXcgTmF2YmFyQ29tcG9uZW50KCkucmVuZGVyKCkpO1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIiMvaG9tZVwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXRBcHAoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZSh3aW5kb3cubG9jYXRpb24uaGFzaCk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT5cclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUod2luZG93LmxvY2F0aW9uLmhhc2gpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdEFwcCgpO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElDb3VudHJ5IHtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0cG9wdWxhdGlvbjogbnVtYmVyO1xyXG5cdHJlZ2lvbjogUmVnaW9uO1xyXG5cdGNhcGl0YWw6IHN0cmluZztcclxuXHRmbGFnOiBzdHJpbmc7XHJcblx0YWxwaGEzQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudHJ5RGV0YWlsIHtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0cG9wdWxhdGlvbjogbnVtYmVyO1xyXG5cdHJlZ2lvbjogUmVnaW9uO1xyXG5cdGNhcGl0YWw6IHN0cmluZztcclxuXHRmbGFnOiBzdHJpbmc7XHJcblx0YWxwaGEzQ29kZTogc3RyaW5nO1xyXG5cdGxhbmd1YWdlczogSUxhbmd1YWdlW107XHJcblx0Y3VycmVuY2llczogSUN1cnJlbmN5W107XHJcblx0dG9wTGV2ZWxEb21haW46IHN0cmluZ1tdO1xyXG5cdHN1YnJlZ2lvbjogc3RyaW5nO1xyXG5cdG5hdGl2ZU5hbWU6IHN0cmluZztcclxuXHRib3JkZXJzOiBzdHJpbmdbXTtcclxuXHRib3JkZXJzU3Q6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDdXJyZW5jeSB7XHJcblx0Y29kZTogbnVsbCB8IHN0cmluZztcclxuXHRuYW1lOiBudWxsIHwgc3RyaW5nO1xyXG5cdHN5bWJvbDogbnVsbCB8IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTGFuZ3VhZ2Uge1xyXG5cdGlzbzYzOV8xOiBudWxsIHwgc3RyaW5nO1xyXG5cdGlzbzYzOV8yOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG5hdGl2ZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVnaW9uIHtcclxuXHRBbGwgPSBcIkFsbFwiLFxyXG5cdEFmcmljYSA9IFwiQWZyaWNhXCIsXHJcblx0QW1lcmljYXMgPSBcIkFtZXJpY2FzXCIsXHJcblx0QXNpYSA9IFwiQXNpYVwiLFxyXG5cdEV1cm9wZSA9IFwiRXVyb3BlXCIsXHJcblx0T2NlYW5pYSA9IFwiT2NlYW5pYVwiLFxyXG5cdFBvbGFyID0gXCJQb2xhclwiXHJcbn1cclxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiYmFjay1jb250YWluZXJcXFwiPlxcclxcblxcdDxhIGNsYXNzPVxcXCJiYWNrXFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXFxcIj5cXHJcXG5cXHRcXHQ8aSBjbGFzcz1cXFwiZmFzIGZhLWFycm93LWxlZnRcXFwiPjwvaT5cXHJcXG5cXHRcXHRCYWNrXFxyXFxuXFx0PC9hPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvdW50cnlcXFwiPlxcclxcblxcdDxpbWcgc3JjPVxcXCJ7ZmxhZ31cXFwiIC8+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiaW5mby1kZXRhaWxcXFwiPlxcclxcblxcdFxcdDxoND57bmFtZX08L2g0PlxcclxcblxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImluZm9cXFwiPlxcclxcblxcdFxcdFxcdDxoNj5OYXRpdmUgTmFtZTogPHNtYWxsPntuYXRpdmVOYW1lfTwvc21hbGw+PC9oNj5cXHJcXG5cXHRcXHRcXHQ8aDY+VG9wIExldmVsIERvbWFpbjogPHNtYWxsPnt0b3BMZXZlbERvbWFpbn08L3NtYWxsPjwvaDY+XFxyXFxuXFx0XFx0XFx0PGg2PlBvcHVsYXRpb246IDxzbWFsbD57cG9wdWxhdGlvbn08L3NtYWxsPjwvaDY+XFxyXFxuXFx0XFx0XFx0PGg2PkN1cnJlbmNpZXM6IDxzbWFsbD57Y3VycmVuY2llc308L3NtYWxsPjwvaDY+XFxyXFxuXFx0XFx0XFx0PGg2PlJlZ2lvbjogPHNtYWxsPntyZWdpb259PC9zbWFsbD48L2g2PlxcclxcblxcdFxcdFxcdDxoNj5MZW5ndWFnZXM6IDxzbWFsbD57bGFuZ3VhZ2VzfTwvc21hbGw+PC9oNj5cXHJcXG5cXHRcXHRcXHQ8aDY+U3ViIFJlZ2lvbjogPHNtYWxsPntzdWJyZWdpb259PC9zbWFsbD48L2g2PlxcclxcblxcdFxcdFxcdDxoNj5DYXBpdGFsOiA8c21hbGw+e2NhcGl0YWx9PC9zbWFsbD48L2g2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImJvcmRlcnMtY29udGVudFxcXCI+XFxyXFxuXFx0XFx0XFx0PGg2PkJvcmRlcnM6PC9oNj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJib3JkZXJzXFxcIj48L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvdW50cnktZGV0YWlsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBWaWV3IGZyb20gXCIuL2NvdW50cnktZGV0YWlsLmh0bWxcIjtcclxuaW1wb3J0IFwiLi9jb3VudHJ5LWRldGFpbC5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBVUkxTIH0gZnJvbSBcIi4uLy4uL3JvdXRlcy9pbmRleC5yb3V0ZXNcIjtcclxuXHJcbmltcG9ydCB7IENvdW50cmllc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291bnRyaWVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUNvdW50cnlEZXRhaWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdW50cmllcy5pbnRlcmZhY2VzXCI7XHJcblxyXG5lbnVtIERPTURhdGEge1xyXG5cdEZsYWcgPSBcIntmbGFnfVwiLFxyXG5cdE5hbWUgPSBcIntuYW1lfVwiLFxyXG5cdE5hdGl2ZU5hbWUgPSBcIntuYXRpdmVOYW1lfVwiLFxyXG5cdFBvcHVsYXRpb24gPSBcIntwb3B1bGF0aW9ufVwiLFxyXG5cdFJlZ2lvbiA9IFwie3JlZ2lvbn1cIixcclxuXHRTdWJyZWdpb24gPSBcIntzdWJyZWdpb259XCIsXHJcblx0Q2FwaXRhbCA9IFwie2NhcGl0YWx9XCIsXHJcblx0VG9wTGV2ZWxEb21haW4gPSBcInt0b3BMZXZlbERvbWFpbn1cIixcclxuXHRDdXJyZW5jaWVzID0gXCJ7Y3VycmVuY2llc31cIixcclxuXHRMYW5ndWFnZXMgPSBcIntsYW5ndWFnZXN9XCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvdW50cnlEZXRhaWxQYWdlIHtcclxuXHRzdGF0aWMgYXN5bmMgcmVuZGVyKGNvZGU6IHN0cmluZykge1xyXG5cdFx0bGV0IHJlc3AgPSAoYXdhaXQgQ291bnRyaWVzU2VydmljZS5nZXRCeUNvZGUoY29kZSkpIGFzIGFueTtcclxuXHRcdGlmIChyZXNwW1wic3RhdHVzXCJdKSB7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gVVJMUy5ub3RGb3VuZDtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGNvdW50cnkgPSByZXNwIGFzIElDb3VudHJ5RGV0YWlsO1xyXG5cdFx0bGV0IHZpZXdGb3JtYXQgPSBWaWV3O1xyXG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLkNhcGl0YWwsIGNvdW50cnkuY2FwaXRhbCk7XHJcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuRmxhZywgY291bnRyeS5mbGFnKTtcclxuXHRcdHZpZXdGb3JtYXQgPSB2aWV3Rm9ybWF0LnJlcGxhY2UoRE9NRGF0YS5OYW1lLCBjb3VudHJ5Lm5hbWUpO1xyXG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLk5hdGl2ZU5hbWUsIGNvdW50cnkubmF0aXZlTmFtZSk7XHJcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKFxyXG5cdFx0XHRET01EYXRhLlBvcHVsYXRpb24sXHJcblx0XHRcdEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGNvdW50cnkucG9wdWxhdGlvbilcclxuXHRcdCk7XHJcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuUmVnaW9uLCBjb3VudHJ5LnJlZ2lvbik7XHJcblx0XHR2aWV3Rm9ybWF0ID0gdmlld0Zvcm1hdC5yZXBsYWNlKERPTURhdGEuU3VicmVnaW9uLCBjb3VudHJ5LnN1YnJlZ2lvbik7XHJcblxyXG5cdFx0bGV0IGRvbWFpbnMgPSBcIlwiO1xyXG5cdFx0Y291bnRyeS50b3BMZXZlbERvbWFpbi5mb3JFYWNoKChkb21haW4pID0+IChkb21haW5zICs9IGAke2RvbWFpbn0gYCkpO1xyXG5cdFx0dmlld0Zvcm1hdCA9IHZpZXdGb3JtYXQucmVwbGFjZShET01EYXRhLlRvcExldmVsRG9tYWluLCBkb21haW5zKTtcclxuXHJcblx0XHRsZXQgY3VycmVuY2llcyA9IFwiXCI7XHJcblx0XHRjb3VudHJ5LmN1cnJlbmNpZXMuZm9yRWFjaCgoY3VycmVuY3kpID0+IChjdXJyZW5jaWVzICs9IGAke2N1cnJlbmN5Lm5hbWV9IGApKTtcclxuXHRcdHZpZXdGb3JtYXQgPSB2aWV3Rm9ybWF0LnJlcGxhY2UoRE9NRGF0YS5DdXJyZW5jaWVzLCBjdXJyZW5jaWVzKTtcclxuXHJcblx0XHRsZXQgbGVuZ3VhZ2VzID0gXCJcIjtcclxuXHRcdGNvdW50cnkubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiAobGVuZ3VhZ2VzICs9IGAke2xhbmd1YWdlLm5hbWV9IGApKTtcclxuXHRcdHZpZXdGb3JtYXQgPSB2aWV3Rm9ybWF0LnJlcGxhY2UoRE9NRGF0YS5MYW5ndWFnZXMsIGxlbmd1YWdlcyk7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cdFx0Y29udGFpbmVyLmlubmVySFRNTCA9IHZpZXdGb3JtYXQ7XHJcblxyXG5cdFx0Y29uc3QgYm9yZGVycyA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9yZGVyc1wiKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcblx0XHRjb3VudHJ5LmJvcmRlcnMuZm9yRWFjaCgoYm9yZGVyLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBib3JkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cdFx0XHRib3JkZXJCdXR0b24uaWQgPSBib3JkZXI7XHJcblx0XHRcdGJvcmRlckJ1dHRvbi5pbm5lckhUTUwgPSBjb3VudHJ5LmJvcmRlcnNTdFtpbmRleF07XHJcblx0XHRcdGJvcmRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQ291bnRyeURldGFpbFBhZ2Uub25Cb3JkZXJDbGljayk7XHJcblx0XHRcdGJvcmRlcnMuYXBwZW5kQ2hpbGQoYm9yZGVyQnV0dG9uKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgb25Cb3JkZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG5cdFx0Y29uc3QgYnV0dG9uVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBVUkxTLmNvdW50cnkgKyBidXR0b25UYXJnZXQuaWQ7XHJcblx0fVxyXG59XHJcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImlucHV0cy1jb250YWluZXJcXFwiPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1jb250ZW50XFxcIj5cXHJcXG5cXHRcXHQ8aSBjbGFzcz1cXFwiZmFzIGZhLXNlYXJjaFxcXCI+PC9pPlxcclxcblxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwic2VhcmNoLWJhclxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBmb3IgYSBjb3VudHJ5XFxcIiAvPlxcclxcblxcdDwvc3Bhbj5cXHJcXG5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtY29udGVudFxcXCI+XFxyXFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VsZWN0LWNvbnRlbnRcXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuPkZpbHRlciBieSByZWdpb248L3NwYW4+XFxyXFxuXFx0XFx0XFx0PGkgY2xhc3M9XFxcImZhcyBmYS1jaGV2cm9uLWRvd25cXFwiPjwvaT5cXHJcXG5cXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHQ8L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUuaHRtbFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50Lmh0bWxcIjtcclxuaW1wb3J0IE5vdERhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbm8tZGF0YS9uby1kYXRhLmNvbXBvbmVudC5odG1sXCI7XHJcbmltcG9ydCBcIi4vaG9tZS5zY3NzXCI7XHJcbmltcG9ydCB7IENvdW50cmllc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291bnRyaWVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUNvdW50cnksIFJlZ2lvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291bnRyaWVzLmludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XHJcblx0cHJpdmF0ZSByZWdpb25TZWxlY3Q6IEVsZW1lbnQgfCBudWxsO1xyXG5cdHByaXZhdGUgcmVnaW9uT3B0aW9uczogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBjb251dHJpZXNEYXRhOiBJQ291bnRyeVtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVnaW9uU2VsZWN0ID0gbnVsbDtcclxuXHRcdHRoaXMucmVnaW9uT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHR0aGlzLmNvbnV0cmllc0RhdGEgPSBbXTtcclxuXHRcdHRoaXMuaW5pdERPTU9iamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbml0RE9NT2JqZWN0cygpIHtcclxuXHRcdHRoaXMucmVnaW9uT3B0aW9ucy5pZCA9IFwiZHJvcGRvd25cIjtcclxuXHRcdHRoaXMucmVnaW9uT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XHJcblxyXG5cdFx0T2JqZWN0LmtleXMoUmVnaW9uKS5mb3JFYWNoKChyZWdpb24pID0+IHtcclxuXHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpO1xyXG5cdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPSByZWdpb247XHJcblx0XHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSG9tZVBhZ2Uub25PcHRpb25DbGljayk7XHJcblx0XHRcdHRoaXMucmVnaW9uT3B0aW9ucz8uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIHJlbmRlcigpOiBQcm9taXNlPEhUTUxEaXZFbGVtZW50PiB7XHJcblx0XHRjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHRcdGhvbWVDb250YWluZXIuaW5uZXJIVE1MID0gSG9tZTtcclxuXHJcblx0XHRjb25zdCBzZWFyY2hCYXIgPSBob21lQ29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XHJcblx0XHRzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIEhvbWVQYWdlLm9uU2VhcmNoQ291bnRyeSk7XHJcblxyXG5cdFx0dGhpcy5yZWdpb25TZWxlY3QgPSBob21lQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3QtY29udGVudFwiKVswXTtcclxuXHRcdHRoaXMucmVnaW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLm9uU2VsZWN0Rm9jdXMpO1xyXG5cdFx0dGhpcy5yZWdpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5vblNlbGVjdEJsdXIpO1xyXG5cdFx0dGhpcy5yZWdpb25TZWxlY3QucGFyZW50RWxlbWVudD8uYXBwZW5kQ2hpbGQ8RWxlbWVudD4odGhpcy5yZWdpb25PcHRpb25zIGFzIEVsZW1lbnQpO1xyXG5cclxuXHRcdGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGNhcmRzQ29udGFpbmVyLmlkID0gXCJjYXJkcy1ncmlkXCI7XHJcblxyXG5cdFx0dGhpcy5jb251dHJpZXNEYXRhID0gYXdhaXQgQ291bnRyaWVzU2VydmljZS5nZXRBbGwoKTtcclxuXHRcdHRoaXMuY29udXRyaWVzRGF0YS5mb3JFYWNoKChjb3VudHJ5KSA9PlxyXG5cdFx0XHRjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChDYXJkQ29tcG9uZW50LnJlbmRlcihjb3VudHJ5KSlcclxuXHRcdCk7XHJcblxyXG5cdFx0aG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcik7XHJcblxyXG5cdFx0cmV0dXJuIGhvbWVDb250YWluZXI7XHJcblx0fVxyXG5cclxuXHQvL0hhbmRsZXJzXHJcblx0cHVibGljIG9uU2VsZWN0Rm9jdXMoKSB7XHJcblx0XHR0aGlzLnJlZ2lvbk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cdFx0dGhpcy5yZWdpb25PcHRpb25zLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHRcdHRoaXMucmVnaW9uT3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuXHRcdHRoaXMucmVnaW9uT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kXCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9uU2VsZWN0Qmx1cigpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlZ2lvbk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHRcdFx0dGhpcy5yZWdpb25PcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRcIik7XHJcblx0XHRcdHRoaXMucmVnaW9uT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuXHRcdH0sIDEwMCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgb25PcHRpb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG5cdFx0Y29uc3QgcmVnaW9uU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdC1jb250ZW50XCIpWzBdO1xyXG5cclxuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xyXG5cdFx0Y29uc3QgcmVnaW9uQ2xpY2tlZCA9IHRhcmdldC50ZXh0Q29udGVudCBhcyBSZWdpb247XHJcblxyXG5cdFx0Y29uc3Qgc2VsZWN0VGV4dENvbnRlbnQgPSByZWdpb25TZWxlY3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXHJcblx0XHRcdFwic3BhblwiXHJcblx0XHQpWzBdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHRcdHNlbGVjdFRleHRDb250ZW50LmlubmVySFRNTCA9IHJlZ2lvbkNsaWNrZWQ7XHJcblxyXG5cdFx0Y29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRzLWdyaWRcIikgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHRjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSBMb2FkZXI7XHJcblxyXG5cdFx0Y29uc3QgY291bnRyaWVzUHJvbWlzZSA9XHJcblx0XHRcdHJlZ2lvbkNsaWNrZWQgPT0gUmVnaW9uLkFsbFxyXG5cdFx0XHRcdD8gQ291bnRyaWVzU2VydmljZS5nZXRBbGwoKVxyXG5cdFx0XHRcdDogQ291bnRyaWVzU2VydmljZS5nZXRCeVJlZ2lvbihyZWdpb25DbGlja2VkKTtcclxuXHJcblx0XHRjb3VudHJpZXNQcm9taXNlLnRoZW4oKHJlc3ApID0+IEhvbWVQYWdlLmNoYW5nZUNvdW50cmllc0NhcmRzKGNhcmRzQ29udGFpbmVyLCByZXNwKSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgb25TZWFyY2hDb3VudHJ5KCkge1xyXG5cdFx0Y29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0XHRjb25zdCB0ZXJtID0gc2VhcmNoQmFyLnZhbHVlO1xyXG5cclxuXHRcdGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkcy1ncmlkXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0Y2FyZHNDb250YWluZXIuaW5uZXJIVE1MID0gTG9hZGVyO1xyXG5cclxuXHRcdGNvbnN0IGNvdW50cmllc1NlYXJjaFByb21pc2UgPVxyXG5cdFx0XHQhdGVybSB8fCB0ZXJtID09IFwiXCJcclxuXHRcdFx0XHQ/IENvdW50cmllc1NlcnZpY2UuZ2V0QWxsKClcclxuXHRcdFx0XHQ6IENvdW50cmllc1NlcnZpY2Uuc2VhcmNoQnlOYW1lKHRlcm0pO1xyXG5cclxuXHRcdGNvdW50cmllc1NlYXJjaFByb21pc2UudGhlbigocmVzcCkgPT4ge1xyXG5cdFx0XHRpZiAocmVzcFtcInN0YXR1c1wiXSkgcmVzcCA9IFtdO1xyXG5cclxuXHRcdFx0SG9tZVBhZ2UuY2hhbmdlQ291bnRyaWVzQ2FyZHMoY2FyZHNDb250YWluZXIsIHJlc3ApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL0hlbHBlcnNcclxuXHRzdGF0aWMgY2hhbmdlQ291bnRyaWVzQ2FyZHMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY291bnRyaWVzOiBJQ291bnRyeVtdKSB7XHJcblx0XHRjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0XHRpZiAoIWNvdW50cmllcyB8fCBjb3VudHJpZXMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0Y29udGFpbmVyLmlubmVySFRNTCA9IE5vdERhdGE7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fSBlbHNlIGNvdW50cmllcy5mb3JFYWNoKChjYXJkKSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ2FyZENvbXBvbmVudC5yZW5kZXIoY2FyZCkpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvaG9tZS9ob21lXCI7XHJcbmltcG9ydCB7IENvdW50cnlEZXRhaWxQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL2NvdW50cnktZGV0YWlsL2NvdW50cnktZGV0YWlsXCI7XHJcbmltcG9ydCBsb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuaHRtbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gVVJMUyB7XHJcblx0aG9tZSA9IFwiIy9ob21lXCIsXHJcblx0Y291bnRyeSA9IFwiIy9jb3VudHJ5L1wiLFxyXG5cdG5vdEZvdW5kID0gXCIjL25vdC1mb3VuZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xyXG5cdHByaXZhdGUgYXBwUm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5hcHBSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5hdmlnYXRlKHVybDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmFwcFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmFwcFJvb3QuaW5uZXJIVE1MID0gbG9hZGVyO1xyXG5cclxuXHRcdGlmIChuZXcgUmVnRXhwKFVSTFMuaG9tZSkudGVzdCh1cmwpKSB7XHJcblx0XHRcdGNvbnN0IGhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKCk7XHJcblx0XHRcdGhvbWVQYWdlLnJlbmRlcigpLnRoZW4oKGNvbnRhaW5lcikgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYXBwUm9vdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0XHRcdHRoaXMuYXBwUm9vdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChVUkxTLmNvdW50cnkpLnRlc3QodXJsKSkge1xyXG5cdFx0XHRjb25zdCB1cmxUb2tlbml6ZWQgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG5cdFx0XHRjb25zdCBjb2RlID0gdXJsVG9rZW5pemVkW3VybFRva2VuaXplZC5sZW5ndGggLSAxXTtcclxuXHRcdFx0Q291bnRyeURldGFpbFBhZ2UucmVuZGVyKGNvZGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGlmICghcmVzdWx0KSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5hcHBSb290LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdHRoaXMuYXBwUm9vdC5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiNDA0XCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJQ291bnRyeSwgUmVnaW9uLCBJQ291bnRyeURldGFpbCB9IGZyb20gXCIuLi9tb2RlbHMvY291bnRyaWVzLmludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IEFQSV9NQUlOX1JPVVRFID0gXCJodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YyXCI7XHJcbmNvbnN0IEFQSV9ST1VURVMgPSB7XHJcblx0YWxsOiBBUElfTUFJTl9ST1VURSArIFwiL2FsbFwiLFxyXG5cdGJ5UmVnaW9uOiBBUElfTUFJTl9ST1VURSArIFwiL3JlZ2lvblwiLFxyXG5cdGJ5TmFtZTogQVBJX01BSU5fUk9VVEUgKyBcIi9uYW1lXCIsXHJcblx0YnlDb2RlOiBBUElfTUFJTl9ST1VURSArIFwiL2FscGhhXCIsXHJcblx0ZmllbGRzOiBcIj9maWVsZHM9bmFtZSxwb3B1bGF0aW9uLHJlZ2lvbixjYXBpdGFsLGZsYWcsYWxwaGEzQ29kZVwiXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ291bnRyaWVzU2VydmljZSB7XHJcblx0c3RhdGljIGdldEFsbCgpOiBQcm9taXNlPElDb3VudHJ5W10+IHtcclxuXHRcdHJldHVybiBmZXRjaChBUElfUk9VVEVTLmFsbCArIEFQSV9ST1VURVMuZmllbGRzKVxyXG5cdFx0XHQudGhlbigocmVzcDogUmVzcG9uc2UpID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHQudGhlbigocmVzcDogSUNvdW50cnlbXSkgPT4gcmVzcCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0QnlSZWdpb24ocmVnaW9uOiBSZWdpb24pOiBQcm9taXNlPElDb3VudHJ5W10+IHtcclxuXHRcdHJldHVybiBmZXRjaChgJHtBUElfUk9VVEVTLmJ5UmVnaW9ufS8ke3JlZ2lvbn0ke0FQSV9ST1VURVMuZmllbGRzfWApXHJcblx0XHRcdC50aGVuKChyZXNwOiBSZXNwb25zZSkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdC50aGVuKChyZXNwOiBJQ291bnRyeVtdKSA9PiByZXNwKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyBzZWFyY2hCeU5hbWUodGVybTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdGxldCBkYXRhOiBJQ291bnRyeVtdO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0ZGF0YSA9IGF3YWl0IGZldGNoKGAke0FQSV9ST1VURVMuYnlOYW1lfS8ke3Rlcm19JHtBUElfUk9VVEVTLmZpZWxkc31gKVxyXG5cdFx0XHRcdC50aGVuKChyZXNwOiBSZXNwb25zZSkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3A6IElDb3VudHJ5W10pID0+IHJlc3ApXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IFtdKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGRhdGEgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyBnZXRCeUNvZGUoY29kZTogc3RyaW5nKSB7XHJcblx0XHRsZXQgZGF0YTogSUNvdW50cnlEZXRhaWwgfCBudWxsO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0ZGF0YSA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcdGAke0FQSV9ST1VURVMuYnlDb2RlfS8ke2NvZGV9JHtBUElfUk9VVEVTLmZpZWxkc30sbGFuZ3VhZ2VzLGN1cnJlbmNpZXMsdG9wTGV2ZWxEb21haW4sc3VicmVnaW9uLG5hdGl2ZU5hbWUsYm9yZGVyc2BcclxuXHRcdFx0KVxyXG5cdFx0XHRcdC50aGVuKChyZXNwOiBSZXNwb25zZSkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oYXN5bmMgKHJlc3A6IElDb3VudHJ5RGV0YWlsKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBib3JkZXJzUHJvbWlzZXM6IFByb21pc2U8YW55PltdID0gW107XHJcblx0XHRcdFx0XHRyZXNwLmJvcmRlcnMuZm9yRWFjaCgoYm9yZGVyQ29kZSkgPT5cclxuXHRcdFx0XHRcdFx0Ym9yZGVyc1Byb21pc2VzLnB1c2goQ291bnRyaWVzU2VydmljZS5nZXROYW1lQnlDb2RlKGJvcmRlckNvZGUpKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHJlc3AuYm9yZGVyc1N0ID0gYXdhaXQgUHJvbWlzZS5hbGwoYm9yZGVyc1Byb21pc2VzKTtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0ZGF0YSA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgZ2V0TmFtZUJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cdFx0cmV0dXJuIGZldGNoKGAke0FQSV9ST1VURVMuYnlDb2RlfS8ke2NvZGV9JHtBUElfUk9VVEVTLmZpZWxkc31gKVxyXG5cdFx0XHQudGhlbigocmVzcDogUmVzcG9uc2UpID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHQudGhlbigocmVzcDogSUNvdW50cnkpID0+IHJlc3AubmFtZSk7XHJcblx0fVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==