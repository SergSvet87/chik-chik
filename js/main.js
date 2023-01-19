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

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/scripts/modules/slider.js\");\n/*--------------------------------- \r\nMain JavaScript \r\n-----------------------------*/\r\n\r\n// import mobileMenu from \"./modules/mobileMenu\";\r\n\r\n// mobileMenu();\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', _modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://chik-chik/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/slider.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/slider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addPreload = (el) => {\r\n  el.classList.add('preload');\r\n}\r\n\r\nconst removePreload = (el) => {\r\n  el.classList.remove('preload');\r\n}\r\n\r\nconst startSlider = () => {\r\n  const sliderItems = document.querySelectorAll('.slider__item');\r\n  const sliderList = document.querySelector('.slider__list');\r\n  const sliderLeftBtn = document.querySelector('.slider__arrow_left');\r\n  const sliderRightBtn = document.querySelector('.slider__arrow_right');\r\n\r\n  let activeSlide = 1;\r\n  let position = 0;\r\n\r\n  const checkSlider = () => {\r\n    if ((activeSlide + 2 === sliderItems.length && document.documentElement.offsetWidth > 560) || activeSlide === sliderItems.length) {\r\n      sliderRightBtn.style.display = 'none'\r\n    } else {\r\n      sliderRightBtn.style.display = ''\r\n    }\r\n\r\n    if (activeSlide === 1) {\r\n      sliderLeftBtn.style.display = 'none'\r\n    } else {\r\n      sliderLeftBtn.style.display = ''\r\n    }\r\n  }\r\n\r\n  checkSlider();\r\n\r\n  const nextSlide = () => {\r\n    sliderItems[activeSlide]?.classList.remove('slider__item_active')\r\n\r\n    position = -sliderItems[0].clientWidth * activeSlide;\r\n    sliderList.style.transform = `translateX(${position}px)`\r\n\r\n    activeSlide++;\r\n    sliderItems[activeSlide]?.classList.add('slider__item_active')\r\n\r\n    checkSlider()\r\n  }\r\n\r\n  const prevSlide = () => {\r\n    sliderItems[activeSlide]?.classList.remove('slider__item_active')\r\n\r\n    position = -sliderItems[0].clientWidth * (activeSlide - 2);\r\n    sliderList.style.transform = `translateX(${position}px)`;\r\n\r\n    activeSlide--;\r\n    sliderItems[activeSlide]?.classList.add('slider__item_active');\r\n\r\n    checkSlider();\r\n  }\r\n\r\n  sliderLeftBtn.addEventListener('click', prevSlide)\r\n  sliderRightBtn.addEventListener('click', nextSlide)\r\n\r\n  window.addEventListener('resize', () => {\r\n\r\n    if (activeSlide + 2 > sliderItems.length && document.documentElement.offsetWidth > 560){\r\n      activeSlide = sliderItems.length -2;\r\n      sliderItems[activeSlide]?.classList.add('slider__item_active');\r\n    }\r\n\r\n    position = -sliderItems[0].clientWidth * (activeSlide - 1);\r\n\r\n    sliderList.style.transform = `translateX(${position}px)`;\r\n\r\n    checkSlider();\r\n  })\r\n}\r\n\r\nconst slider = () => {\r\n  const slider = document.querySelector('.slider');\r\n  const sliderContainer = document.querySelector('.slider__container')\r\n\r\n  sliderContainer.style.display = 'none'\r\n\r\n  addPreload(slider);\r\n\r\n  window.addEventListener('load', () => {\r\n    setTimeout(() => removePreload(slider), 1000);\r\n    setTimeout(() => { sliderContainer.style.display = '' }, 1200);\r\n\r\n    startSlider()\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://chik-chik/./src/scripts/modules/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;