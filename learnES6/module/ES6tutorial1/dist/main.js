/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_max__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/max */ \"./src/lib/max.js\");\n/* harmony import */ var _lib_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/min */ \"./src/lib/min.js\");\n/* harmony import */ var _lib_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_min__WEBPACK_IMPORTED_MODULE_1__);\nconsole.log(\"Hello ES6\");\r\n\r\nvar div = document.createElement(\"div\");\r\ndiv.innerHTML = \"helloworld\";\r\ndiv.setAttribute(\"style\", \"color: orange\");\r\n\r\ndocument.body.appendChild(div);\r\n\r\n// 通过 import from 来加载module\r\n// 这段代码最重要在浏览器上执行，所以说\r\n// 写在浏览器上执行的代码，使用 import\r\n// 写在node.js中执行的代码，使用 require\r\n\r\n// const {min} = require(\"./lib/min\");\r\n\r\n\r\nlet x = 10;\r\nlet y = 20;\r\n\r\ndiv = document.createElement(\"div\");\r\ndiv.innerHTML = `max(${x},${y}) = ` + (0,_lib_max__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, y);\r\n\r\ndocument.body.append(div);\r\n\r\n\r\n// 上面的话貌似也不太对\r\n// 在仅仅使用 webpack的情况下，可以同时使用  import 和 require\r\n\r\n\r\n\r\n\r\ndiv = document.createElement(\"div\");\r\ndiv.innerHTML = `min(${x},${y}) = ` + _lib_min__WEBPACK_IMPORTED_MODULE_1___default()(x, y);\r\n\r\ndocument.body.append(div);\r\n\r\n\r\n/*\r\n\r\n    总结：\r\n    1.babel可以将 CommonJS ES6 的module 转换为大部分浏览器都支持的的ES5代码\r\n    2.webpack将babel转换后的代码打包\r\n\r\n    module ----(babel)--->  ES5 -----(webpack)---->  package\r\n*/\r\n\n\n//# sourceURL=webpack://es6/./src/index.js?");

/***/ }),

/***/ "./src/lib/max.js":
/*!************************!*\
  !*** ./src/lib/max.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet max = function (i, j) {\r\n    if (i > j) return i;\r\n    else return j;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (max);\n\n//# sourceURL=webpack://es6/./src/lib/max.js?");

/***/ }),

/***/ "./src/lib/min.js":
/*!************************!*\
  !*** ./src/lib/min.js ***!
  \************************/
/***/ ((module) => {

eval("\r\nlet min = (i, j) => {\r\n    if (i > j) return j;\r\n    else return i;\r\n}\r\n\r\nmodule.exports = {\r\n    min: min,\r\n}\n\n//# sourceURL=webpack://es6/./src/lib/min.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;