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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getFetch: () => (/* binding */ getFetch),\n/* harmony export */   \"сomments\": () => (/* binding */ сomments)\n/* harmony export */ });\n\n\n\nuserAutorisation();\n\nlet isAutorizated = false;\n\nconst listElements = document.getElementById(\"list\");\nconst nameElement = document.querySelector(\".add-form-name\");\nconst textElement = document.querySelector(\".add-form-text\");\nconst buttonElements = document.querySelector(\".add-form-button\");\nconst deleteButtonElement = document.querySelector(\".delete-button\");\nlet comments = [];\n\nfunction getComments() {\n  return comments;\n}\n\nconst сomments = (newComments) => {\n  comments = newComments;\n};\n\nfunction getFetch() {\n  // showLoadingIndicator();\n  // hideAddForm();\n\n  getElements()\n    .then((responseData) => {\n      const appComment = responseData.comments.map((comment) => {\n        return {\n          name: comment.author.name,\n          date: format(new Date(comment.date), \"dd/MM/yyyy hh:mm\"),\n          text: comment.text,\n          likes: comment.likes,\n          islike: false,\n        };\n      });\n      comments = appComment;\n      renderComments(comments);\n      deleteLoadingIndicator();\n    })\n    .catch((error) => {\n      console.log(error);\n    });\n}\ngetFetch();\n\nconst listElement = document.getElementById(\"list\");\nconst nameInputElement = document.getElementById(\"name-input\");\nconst commentInputElement = document.getElementById(\"comment-input\");\n\n\n//# sourceURL=webpack://hw2-16/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;