/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _max = __webpack_require__(/*! ./lib/max */ \"./src/lib/max.js\");\n\nvar _max2 = _interopRequireDefault(_max);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(\"Hello ES6\");\nvar div = document.createElement(\"div\");\ndiv.innerHTML = \"helloworld\";\ndiv.setAttribute(\"style\", \"color: orange\");\ndocument.body.appendChild(div); // 通过 import from 来加载module\n// 这段代码最重要在浏览器上执行，所以说\n// 写在浏览器上执行的代码，使用 import\n// 写在node.js中执行的代码，使用 require\n// CommonJS : require   module.exports\n// ES6      : import    export\n// 如果是在原生的 node 中，只能使用  CommonJS\n// 如果是在原生的 浏览器中，只能使用  ES5！！！（除非你的浏览器足够新，可以支持ES6）\n\nvar _require = __webpack_require__(/*! ./lib/min */ \"./src/lib/min.js\");\n\nconst min = _require.min;\nlet x = 10;\nlet y = 20;\ndiv = document.createElement(\"div\");\ndiv.innerHTML = `max(${x},${y}) = ` + (0, _max2.default)(x, y);\ndocument.body.append(div);\ndiv = document.createElement(\"div\");\ndiv.innerHTML = `min(${x},${y}) = ` + min(x, y);\ndocument.body.append(div);\n/*\r\n\r\n//     总结：\r\n//     1.babel可以将 CommonJS ES6 的module 转换为大部分浏览器都支持的的ES5代码\r\n//     2.webpack将babel转换后的代码打包\r\n\r\n//     module ----(babel)--->  ES5 -----(webpack)---->  package\r\n// */\n\nlet set = new Set();\nlet arr = [1, 2, 2, 2, 3, 3, 3, 5, 1, 5, 2, 3];\narr.map(x => {\n  set.add(x);\n});\nconsole.log(set);\n\n//# sourceURL=webpack://es6/./src/index.js?");

/***/ }),

/***/ "./src/lib/max.js":
/*!************************!*\
  !*** ./src/lib/max.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nlet max = function max(i, j) {\n  if (i > j) return i;else return j;\n}; // ES6  export\n\n\nexports[\"default\"] = max;\n\n//# sourceURL=webpack://es6/./src/lib/max.js?");

/***/ }),

/***/ "./src/lib/min.js":
/*!************************!*\
  !*** ./src/lib/min.js ***!
  \************************/
/***/ ((module) => {

eval("\n\nlet min = (i, j) => {\n  if (i > j) return j;else return i;\n}; // CommonJS  module.exports\n\n\nmodule.exports = {\n  min: min\n};\n\n//# sourceURL=webpack://es6/./src/lib/min.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;