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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/valid */ \"./modules/valid.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst portfolioSliderClasses = {\r\n  sliderBlockClass: `.portfolio-content`,\r\n  slideClass: `.portfolio-item`,\r\n  dotsBlockClass: `.portfolio-dots`,\r\n  activeSlideClass: `portfolio-item-active`,\r\n  dotClass: `.dot`,\r\n  activeDotClass: `dot-active`,\r\n  buttonClass: `.portfolio-btn`,\r\n};\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"20 december 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_valid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\r\n  portfolioSliderClasses.sliderBlockClass,\r\n  portfolioSliderClasses.slideClass,\r\n  portfolioSliderClasses.dotsBlockClass,\r\n  portfolioSliderClasses.activeSlideClass,\r\n  portfolioSliderClasses.dotClass,\r\n  portfolioSliderClasses.activeDotClass,\r\n  portfolioSliderClasses.buttonClass\r\n);\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: \"form1\", someElem: [{ type: \"block\", id: \"total\" }] });\r\n\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form2\",\r\n  someElem: [\r\n    { type: \"block\", id: \"total\" },\r\n    { type: \"input\", id: \"form2-message\" },\r\n  ],\r\n});\r\n\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form2\",\r\n  someElem: [\r\n    { type: \"block\", id: \"total\" },\r\n    { type: \"input\", id: \"form2-message\" },\r\n  ],\r\n});\r\n\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form3\",\r\n  someElem: [{ type: \"block\", id: \"total\" }],\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n  const time = 1;\r\n  let step = 100;\r\n\r\n  const outNum = (num) => {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 100,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        total.textContent = Math.round(progress * num);\r\n      },\r\n    });\r\n  };\r\n\r\n  const countCalc = function () {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n    let totalSec = 0;\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += calcCount.value / 10;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalSec =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n      outNum(totalSec);\r\n    } else {\r\n      total.textContent = 0;\r\n    }\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modalContent = document.querySelector(\".popup-content\");\r\n\r\n  let width = document.documentElement.clientWidth;\r\n\r\n  let count = 0;\r\n\r\n  const openPopup = () => {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 100,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        modalContent.style.top = 25 * progress + \"%\";\r\n        modalContent.style.left = 41 + \"%\";\r\n      },\r\n    });\r\n  };\r\n\r\n  const listener = () => {\r\n    buttons.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        width = document.documentElement.clientWidth;\r\n        modal.style.display = `block`;\r\n        if (width > 768) {\r\n          openPopup();\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = `none`;\r\n      count = 0;\r\n      listener();\r\n    }\r\n  });\r\n\r\n  listener();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  const scrollBtn = document.querySelector('a[href*=\"#service-block\"]');\r\n  const serviceBlock = document.querySelector(\"#service-block\");\r\n\r\n  for (let item of menuItems) {\r\n    item.addEventListener(\"click\", function (event) {\r\n      event.preventDefault();\r\n      const blockId = item.getAttribute(\"href\");\r\n      document.querySelector(\"\" + blockId).scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      });\r\n    });\r\n  }\r\n\r\n  scrollBtn.addEventListener(\"click\", function (event) {\r\n    event.preventDefault();\r\n    serviceBlock.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const preloader = document.getElementById(\"preloader\");\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"div\");\r\n  const loadText = \"Загрузка...\";\r\n  const errorText = \"Ошибка...\";\r\n  const successText =\r\n    \"Спасибо, наш менеджер свяжется с вами в течение 5 минут!\";\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll(\"input\");\r\n\r\n    console.log(preloader);\r\n\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    preloader.style.display = \"block\";\r\n    form.append(preloader);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n\r\n      if (elem.type === \"block\") {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === \"inputs\") {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          preloader.style.display = \"none\";\r\n          statusBlock.classList.add(\"statusBlock\");\r\n          statusBlock.textContent = successText;\r\n          form.append(statusBlock);\r\n\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      alert(\"Данные не валидны!!!\");\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Верните форму на место!\");\r\n    }\r\n\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = function (\r\n  sliderBlockClass,\r\n  slideClass,\r\n  dotsBlockClass,\r\n  activeSlideClass,\r\n  dotClass,\r\n  activeDotClass,\r\n  buttonClass\r\n) {\r\n  const sliderBlock = document.querySelector(sliderBlockClass);\r\n  const dotsBlock = document.querySelector(dotsBlockClass);\r\n\r\n  let slides = document.querySelectorAll(slideClass);\r\n  let dots = document.querySelectorAll(dotClass);\r\n\r\n  let timeInterval = 2000;\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  if (\r\n    sliderBlockClass !== `.portfolio-content` ||\r\n    slideClass !== `.portfolio-item` ||\r\n    dotsBlockClass !== `.portfolio-dots` ||\r\n    activeSlideClass !== `portfolio-item-active` ||\r\n    dotClass !== `.dot` ||\r\n    activeDotClass !== `dot-active` ||\r\n    buttonClass !== `.portfolio-btn`\r\n  ) {\r\n    return;\r\n  }\r\n\r\n  const removeDots = function () {\r\n    dots = document.querySelectorAll(\".dot\");\r\n    dots.forEach((dot) => {\r\n      dotsBlock.removeChild(dot);\r\n    });\r\n  };\r\n\r\n  const addDots = function () {\r\n    slides = document.querySelectorAll(slideClass);\r\n    for (let i = 0; i <= slides.length - 1; i++) {\r\n      let dot = document.createElement(\"li\");\r\n      dot.classList.add(\"dot\");\r\n      if (slides[i].classList.contains(activeSlideClass)) {\r\n        dot.classList.add(activeDotClass);\r\n      }\r\n      dotsBlock.append(dot);\r\n    }\r\n  };\r\n\r\n  const prevSlide = function (elems, index, strClass) {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = function (elems, index, strClass) {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = function () {\r\n    prevSlide(slides, currentSlide, activeSlideClass);\r\n    prevSlide(dots, currentSlide, activeDotClass);\r\n\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, activeSlideClass);\r\n    nextSlide(dots, currentSlide, activeDotClass);\r\n    removeDots();\r\n    addDots();\r\n  };\r\n\r\n  const startSlide = function (timer = 1500) {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = function () {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, activeSlideClass);\r\n    removeDots();\r\n    addDots();\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, activeSlideClass);\r\n    removeDots();\r\n    addDots();\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\r\n  const calcInputs = document.querySelectorAll(\".calc-block>input[type=text]\");\r\n\r\n  calcInputs.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/g, \"\");\r\n    });\r\n  });\r\n\r\n  const validInput = function () {\r\n    const inputs = document.querySelectorAll(\"input\");\r\n\r\n    inputs.forEach((input) => {\r\n      if (\r\n        input.name === \"user_name\" &&\r\n        !input.classList.contains(\"calc-item\")\r\n      ) {\r\n        input.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(/[^а-яА-Я\\s]+/g, \"\");\r\n        });\r\n        input.onblur = function () {\r\n          input.value = input.value.replace(/--+/g, \"-\");\r\n          input.value = input.value.replace(/\\s\\s+/g, \" \");\r\n          input.value = input.value.replace(/^[\\s-]+/, \"\");\r\n          input.value = input.value.replace(/[\\s-]+$/, \"\");\r\n          input.value = input.value.replace(/( |^)[а-яa-z]/g, function (x) {\r\n            return x.toUpperCase();\r\n          });\r\n        };\r\n      } else if (input.name === \"user_phone\") {\r\n        input.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(/[^0-9()+-]+/g, \"\");\r\n        });\r\n        input.onblur = function () {\r\n          input.value = input.value.replace(/--+/g, \"-\");\r\n          input.value = input.value.replace(/\\s\\s+/g, \" \");\r\n          input.value = input.value.replace(/^[\\s-]+/, \"\");\r\n          input.value = input.value.replace(/[\\s-]+$/, \"\");\r\n        };\r\n      } else if (input.type === \"email\") {\r\n        input.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(/[^a-zA-Z0-9-@_.!~*']+/g, \"\");\r\n        });\r\n        input.onblur = function () {\r\n          input.value = input.value.replace(/--+/g, \"-\");\r\n          input.value = input.value.replace(/\\s\\s+/g, \" \");\r\n          input.value = input.value.replace(/^[\\s-]+/, \"\");\r\n          input.value = input.value.replace(/[\\s-]+$/, \"\");\r\n        };\r\n      } else if (input.name === \"user_message\") {\r\n        input.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(/[^а-яА-Я0-9-,.!?\\s]+/g, \"\");\r\n        });\r\n      }\r\n    });\r\n  };\r\n\r\n  validInput();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\r\n\n\n//# sourceURL=webpack:///./modules/valid.js?");

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