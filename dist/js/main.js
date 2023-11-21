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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/valid */ \"./modules/valid.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"20 december 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_valid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toggleMenu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  body.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".menu\")) {\r\n      menu.classList.add(\"active-menu\");\r\n    } else if (\r\n      !e.target.closest(\".active-menu\") ||\r\n      e.target.classList.contains(\"close-btn\")\r\n    ) {\r\n      menu.classList.remove(\"active-menu\");\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modalContent = document.querySelector(\".popup-content\");\r\n\r\n  let width = document.documentElement.clientWidth;\r\n\r\n  let idInterval;\r\n  let count = 0;\r\n\r\n  const openPopup = () => {\r\n    count++;\r\n    idInterval = requestAnimationFrame(openPopup);\r\n\r\n    if (count <= 23) {\r\n      modalContent.style.top = count * 0.8 + \"%\";\r\n    } else {\r\n      cancelAnimationFrame(idInterval);\r\n    }\r\n  };\r\n\r\n  const listener = () => {\r\n    buttons.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        width = document.documentElement.clientWidth;\r\n        modal.style.display = `block`;\r\n        if (width > 768) {\r\n          openPopup();\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = `none`;\r\n      count = 0;\r\n      listener();\r\n    }\r\n  });\r\n\r\n  listener();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  const scrollBtn = document.querySelector('a[href*=\"#service-block\"]');\r\n  const serviceBlock = document.querySelector(\"#service-block\");\r\n\r\n  for (let item of menuItems) {\r\n    item.addEventListener(\"click\", function (event) {\r\n      event.preventDefault();\r\n      const blockId = item.getAttribute(\"href\");\r\n      document.querySelector(\"\" + blockId).scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      });\r\n    });\r\n  }\r\n\r\n  scrollBtn.addEventListener(\"click\", function (event) {\r\n    event.preventDefault();\r\n    serviceBlock.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = function () {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const dots = document.querySelectorAll(\".dot\");\r\n\r\n  let timeInterval = 2000;\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = function (elems, index, strClass) {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = function (elems, index, strClass) {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = function () {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const startSlide = function (timer = 1500) {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = function () {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(\".dot\", \"portfolio-btn\")) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide = currentSlide - 1;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = function () {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      tabs.forEach((item, index) => {\r\n        if (item === tabBtn) {\r\n          item.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          item.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n  const timerDays = document.getElementById(\"timer-days\");\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = function () {\r\n    let dateStop = new Date(deadLine).getTime();\r\n    let dateNow = new Date().getTime();\r\n\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    if (days < 10) {\r\n      days = \"0\" + days;\r\n    }\r\n    if (hours < 10) {\r\n      hours = \"0\" + hours;\r\n    }\r\n    if (minutes < 10) {\r\n      minutes = \"0\" + minutes;\r\n    }\r\n    if (seconds < 10) {\r\n      seconds = \"0\" + seconds;\r\n    }\r\n\r\n    return {\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n      timeRemaining,\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n      setInterval(function () {\r\n        getTime = getTimeRemaining();\r\n        timerDays.textContent = getTime.days;\r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n      }, 1000);\r\n    }\r\n  };\r\n\r\n  updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/valid.js":
/*!**************************!*\
  !*** ./modules/valid.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\r\n  const calcInputs = document.querySelectorAll(\".calc-block>input[type=text]\");\r\n\r\n  calcInputs.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/g, \"\");\r\n    });\r\n  });\r\n\r\n  const validInput = function () {\r\n    const inputs = document.querySelectorAll(\"input\");\r\n\r\n    inputs.forEach((input) => {\r\n      if (input.type === \"text\") {\r\n        input.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(/[^а-яА-Я-\\s]+/g, \"\");\r\n        });\r\n        input.onblur = function () {\r\n          input.value = input.value.replace(/--+/g, \"-\");\r\n          input.value = input.value.replace(/\\s\\s+/g, \" \");\r\n          input.value = input.value.replace(/^[\\s-]+/, \"\");\r\n          input.value = input.value.replace(/[\\s-]+$/, \"\");\r\n          input.value = input.value.replace(/( |^)[а-яёa-z]/g, function (x) {\r\n            return x.toUpperCase();\r\n          });\r\n        };\r\n      } else if (input.type === \"tel\") {\r\n        input.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(/[^0-9()-]+/g, \"\");\r\n        });\r\n        input.onblur = function () {\r\n          input.value = input.value.replace(/--+/g, \"-\");\r\n          input.value = input.value.replace(/\\s\\s+/g, \" \");\r\n          input.value = input.value.replace(/^[\\s-]+/, \"\");\r\n          input.value = input.value.replace(/[\\s-]+$/, \"\");\r\n        };\r\n      } else if (input.type === \"email\") {\r\n        input.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(/[^a-zA-Z0-9-@_.!~*']+/g, \"\");\r\n        });\r\n        input.onblur = function () {\r\n          input.value = input.value.replace(/--+/g, \"-\");\r\n          input.value = input.value.replace(/\\s\\s+/g, \" \");\r\n          input.value = input.value.replace(/^[\\s-]+/, \"\");\r\n          input.value = input.value.replace(/[\\s-]+$/, \"\");\r\n        };\r\n      }\r\n    });\r\n  };\r\n\r\n  validInput();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\r\n\n\n//# sourceURL=webpack:///./modules/valid.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;