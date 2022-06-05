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

/***/ "./src/lib/min.js":
/*!************************!*\
  !*** ./src/lib/min.js ***!
  \************************/
/***/ ((module) => {

eval("let min = (i, j) => {\n  if (i > j) return j;else return i;\n};\n\nmodule.exports = {\n  min: min\n};\n\n//# sourceURL=webpack://es6/./src/lib/min.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconsole.log(\"Hello ES6\");\r\nvar div = document.createElement(\"div\");\r\ndiv.innerHTML = \"helloworld\";\r\ndocument.body.appendChild(div);\r\n// 通过 import from 来加载module\r\n// 这段代码最重要在浏览器上执行，所以说\r\n// 写在浏览器上执行的代码，使用 import\r\n// 写在node.js中执行的代码，使用 require\r\nconst max_1 = __importDefault(__webpack_require__(/*! ./tslib/max */ \"./src/tslib/max.ts\"));\r\ndiv.setAttribute(\"style\", \"color: orange\");\r\nlet x = 10;\r\nlet y = 20;\r\ndiv = document.createElement(\"div\");\r\ndiv.innerHTML = `max(${x},${y}) = ` + (0, max_1.default)(x, y);\r\ndocument.body.append(div);\r\n// 上面的话貌似也不太对\r\n// 有了 babel，似乎即使在浏览器中，也可以使用 CommonJS module\r\n// 理论上，浏览器默认是不支持 CommonJS module的\r\n// 甚至可能有些浏览器默认也不支持 ES6的module， babel将他们统统转换为ES5标准\r\nconst { min } = __webpack_require__(/*! ./lib/min */ \"./src/lib/min.js\");\r\ndiv = document.createElement(\"div\");\r\ndiv.innerHTML = `min(${x},${y}) = ` + min(x, y);\r\ndocument.body.append(div);\r\n/*\r\n\r\n    总结：\r\n    1.babel可以将 CommonJS ES6 的module 转换为大部分浏览器都支持的的ES5代码\r\n    2.webpack将babel转换后的代码打包\r\n\r\n    module ----(babel)--->  ES5 -----(webpack)---->  package\r\n*/\r\nconst max_2 = __importDefault(__webpack_require__(/*! ./tslib/max */ \"./src/tslib/max.ts\"));\r\ndiv = document.createElement(\"div\");\r\ndiv.innerHTML = `tsmax(${x},${y}) = ` + (0, max_2.default)(x, y);\r\ndocument.body.append(div);\r\n\n\n//# sourceURL=webpack://es6/./src/index.ts?");

/***/ }),

/***/ "./src/tslib/max.ts":
/*!**************************!*\
  !*** ./src/tslib/max.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction max(i, j) {\r\n    if (i > j)\r\n        return i;\r\n    else\r\n        return j;\r\n}\r\nexports[\"default\"] = max;\r\n\n\n//# sourceURL=webpack://es6/./src/tslib/max.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;