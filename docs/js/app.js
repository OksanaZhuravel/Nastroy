/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: icon;\n  font-display: swap;\n  src: url(\"../fonts/icon.woff2\") format(\"woff2\"), url(\"../fonts/icon.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: Muller;\n  font-display: swap;\n  src: url(\"../fonts/Muller-Black.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Black.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: Muller;\n  font-display: swap;\n  src: url(\"../fonts/Muller-ExtraBold.woff2\") format(\"woff2\"), url(\"../fonts/Muller-ExtraBold.woff\") format(\"woff\");\n  font-weight: 800;\n  font-style: normal;\n}\n@font-face {\n  font-family: Muller;\n  font-display: swap;\n  src: url(\"../fonts/Muller-Bold.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: Muller;\n  font-display: swap;\n  src: url(\"../fonts/Muller-Light.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Light.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: Muller;\n  font-display: swap;\n  src: url(\"../fonts/Muller-Medium.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: Muller;\n  font-display: swap;\n  src: url(\"../fonts/Muller-Regular.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n.social-header__link, .phones-header__phone, .mail-header__mail, [class*=_icon-]:before {\n  font-family: \"icon\";\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n[class*=_icon-]:before {\n  display: block;\n}\n\n.icon-location:before {\n  content: \"\\e907\";\n}\n\n.icon-phone:before {\n  content: \"\\e90a\";\n}\n\n.icon-user:before {\n  content: \"\\e90f\";\n}\n\n.icon-mail:before {\n  content: \"\\e909\";\n}\n\n.icon-whatsapp:before {\n  content: \"\\e910\";\n}\n\n.icon-telegram:before {\n  content: \"\\e917\";\n}\n\n.icon-viber:before {\n  content: \"\\e913\";\n}\n\n.icon-vk:before {\n  content: \"\\e900\";\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  min-width: 320px;\n}\n\nbody {\n  color: #000000;\n  line-height: 1.2;\n  font-family: Muller, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: Muller, sans-serif;\n  font-size: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  color: inherit;\n  background-color: inherit;\n}\n\na {\n  color: inherit;\n}\n\na:link,\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: inherit;\n  font-size: inherit;\n}\n\n.lock body {\n  overflow: hidden;\n  touch-action: none;\n}\n\n.visually-hidden:not(:focus):not(:active),\ninput[type=checkbox].visually-hidden,\ninput[type=radio].visually-hidden {\n  position: absolute;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n}\n\n.wrapper {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n/*\n(i) Стили будут применяться ко \nвсем классам содержащим *__container\nНапример header__container, main__container и т.д.\nСнипет (HTML): cnt\n*/\n[class*=__container] {\n  max-width: 94.375rem;\n  box-sizing: content-box;\n  margin: 0 auto;\n  padding: 0 0.9375rem;\n}\n\n.button {\n  display: inline-flex;\n  background-color: #6f6f85;\n  border-radius: 15px;\n  box-shadow: 0 0 32px rgba(0, 0, 0, 0.73);\n  font-weight: 400;\n  font-size: 0.875rem;\n  padding: 0.5rem 1.875rem;\n  line-height: 1.6;\n  transition: box-shadow 0.3s ease 0s;\n  text-align: center;\n  justify-content: center;\n  white-space: nowrap;\n}\n@media (any-hover: hover) {\n  .button:hover {\n    box-shadow: 0 4px 25px rgba(80, 81, 106, 0.9);\n  }\n}\n\nbody::after {\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: opacity 0.8s ease 0s;\n  pointer-events: none;\n  z-index: 149;\n}\n\n.popup-show body::after {\n  opacity: 1;\n}\n\n.popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 30px 10px;\n  transition: visibility 0.8s ease 0s;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.popup_show {\n  z-index: 150;\n  visibility: visible;\n  overflow: auto;\n  pointer-events: auto;\n}\n\n.popup_show .popup__content {\n  visibility: visible;\n  transform: scale(1);\n}\n\n.popup__wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100%;\n  flex: 1 1 auto;\n  width: 100%;\n  justify-content: center;\n}\n\n.popup__content {\n  visibility: hidden;\n  transform: scale(0);\n  transition: transform 0.3s ease 0s;\n  background-color: #eee;\n  padding: 20px;\n  width: 100%;\n  max-width: 900px;\n  border-radius: 20px;\n}\n.lock .popup__content {\n  visibility: visible;\n}\n\n[class*=-ibg] {\n  position: relative;\n}\n[class*=-ibg] img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  object-fit: cover;\n}\n\n[class*=-ibg_contain] img {\n  object-fit: contain;\n}\n\n.header {\n  background-color: #b3afac;\n  opacity: 0.81;\n}\n.menu-open .header {\n  background-color: #a39d9d;\n}\n.header__body {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@supports (padding-bottom: clamp( 1.875rem , 1.5471311475rem  +  1.6393442623vw , 3.125rem )) {\n  .header__body {\n    padding-bottom: clamp( 1.875rem , 1.5471311475rem  +  1.6393442623vw , 3.125rem );\n  }\n}\n@supports not (padding-bottom: clamp( 1.875rem , 1.5471311475rem  +  1.6393442623vw , 3.125rem )) {\n  .header__body {\n    padding-bottom: calc(1.875rem + 1.25 * (100vw - 20rem) / 76.25);\n  }\n}\n@supports (padding-top: clamp( 1.875rem , 2.6639344262rem  +  -0.8196721311vw , 2.5rem )) {\n  .header__body {\n    padding-top: clamp( 1.875rem , 2.6639344262rem  +  -0.8196721311vw , 2.5rem );\n  }\n}\n@supports not (padding-top: clamp( 1.875rem , 2.6639344262rem  +  -0.8196721311vw , 2.5rem )) {\n  .header__body {\n    padding-top: calc(2.5rem + -0.625 * (100vw - 20rem) / 76.25);\n  }\n}\n@media (max-width: 61.99875em) {\n  .header__body {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.875rem;\n  }\n}\n.header__social {\n  display: none;\n}\n.menu-open .header__social {\n  display: flex;\n  min-height: 3.1875rem;\n}\n.header__menu {\n  padding-bottom: 1.875rem;\n}\n.header__footer {\n  display: none;\n}\n.menu-open .header__footer {\n  display: flex;\n  padding-bottom: 1.875rem;\n}\n\n.logo-header__link img {\n  display: block;\n  width: 12.5rem;\n  height: 4.375rem;\n}\n\n@media (max-width: 47.99875em) {\n  .mail-header {\n    padding: 1.25rem 0;\n  }\n}\n.mail-header__item:not(:last-child) {\n  margin: 0 0 0.625rem 0;\n}\n.mail-header__mail {\n  display: flex;\n  align-items: flex-end;\n  font-size: 1.125rem;\n}\n.mail-header__mail::before {\n  font-size: 1.25rem;\n  margin: 0 0.9375rem 0 0;\n}\n.mail-header__feedback {\n  color: #ffffff;\n  line-height: 1.2857142857;\n  padding-bottom: 0.5rem;\n}\n@supports (font-size: clamp( 0.75rem , 0.9077868852rem  +  -0.1639344262vw , 0.875rem )) {\n  .mail-header__feedback {\n    font-size: clamp( 0.75rem , 0.9077868852rem  +  -0.1639344262vw , 0.875rem );\n  }\n}\n@supports not (font-size: clamp( 0.75rem , 0.9077868852rem  +  -0.1639344262vw , 0.875rem )) {\n  .mail-header__feedback {\n    font-size: calc(0.875rem + -0.125 * (100vw - 20rem) / 76.25);\n  }\n}\n.mail-header__feedback::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0.125rem;\n  margin: 0.3125rem 0 0 0;\n  background-color: #000000;\n  transition: width 0.8s ease 0s;\n}\n@media (any-hover: hover) {\n  .mail-header__feedback:hover {\n    color: #e37332;\n  }\n  .mail-header__feedback:hover::after {\n    width: 100%;\n    background-color: #e37332;\n  }\n}\n\n@media (max-width: 47.99875em) {\n  .phones-header {\n    display: flex;\n    align-items: baseline;\n  }\n}\n@media (min-width: 47.99875em) {\n  .phones-header__item {\n    margin: 0 0 0.625rem 0;\n  }\n}\n.phones-header__phone {\n  display: flex;\n  align-items: center;\n  font-size: 1.125rem;\n}\n.phones-header__phone::before {\n  display: none;\n}\n@media (max-width: 47.99875em) {\n  .phones-header__phone span {\n    display: none;\n  }\n  .phones-header__phone::before {\n    display: block;\n    font-size: 1.5625rem;\n    margin: 0 0.9375rem 0 0;\n    color: #ffffff;\n  }\n}\n.phones-header__callback {\n  box-sizing: border-box;\n  color: #ffffff;\n}\n@supports (font-size: clamp( 0.75rem , 1.0655737705rem  +  -0.3278688525vw , 1rem )) {\n  .phones-header__callback {\n    font-size: clamp( 0.75rem , 1.0655737705rem  +  -0.3278688525vw , 1rem );\n  }\n}\n@supports not (font-size: clamp( 0.75rem , 1.0655737705rem  +  -0.3278688525vw , 1rem )) {\n  .phones-header__callback {\n    font-size: calc(1rem + -0.25 * (100vw - 20rem) / 76.25);\n  }\n}\n@media (min-width: 61.99875em) {\n  .phones-header__callback {\n    padding-bottom: 0.5rem;\n  }\n}\n.phones-header__callback::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0.125rem;\n  margin: 0.3125rem 0 0 0;\n  background-color: #000000;\n  transition: width 0.8s ease 0s;\n}\n@media (any-hover: hover) {\n  .phones-header__callback:hover {\n    color: #e37332;\n  }\n  .phones-header__callback:hover::after {\n    width: 100%;\n    background-color: #e37332;\n  }\n}\n\n.social-header {\n  z-index: 5;\n  padding: 1.5625rem 0;\n}\n.social-header__item:not(:last-child) {\n  margin: 0 0.9375rem 0 0;\n}\n.social-header__link::before {\n  font-size: 2.25rem;\n  border-radius: 50%;\n}\n@media (max-width: 47.99875em) {\n  .menu__body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 7.5rem;\n    right: -100%;\n    overflow: auto;\n    background-color: #a39d9d;\n    padding: 1.875rem 0.9375rem;\n    transition: right 0.3s ease 0s;\n    z-index: 3;\n  }\n  .menu__body::before {\n    content: \"\";\n    position: fixed;\n    width: 100%;\n    height: 5rem;\n    top: 0;\n    right: -100%;\n    background-color: #a39d9d;\n  }\n  .menu-open .menu__body {\n    right: 0;\n  }\n  .menu-open .menu__body .menu__link {\n    color: #ffffff;\n  }\n}\n@media (max-width: 47.99875em) {\n  .menu {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: flex-end;\n  }\n}\n.menu__list {\n  display: flex;\n  row-gap: 5px;\n  justify-content: flex-start;\n}\n@supports ( column-gap: clamp( 1.25rem , 0.5942622951rem  +  3.2786885246vw , 3.75rem )) {\n  .menu__list {\n     column-gap: clamp( 1.25rem , 0.5942622951rem  +  3.2786885246vw , 3.75rem );\n  }\n}\n@supports not ( column-gap: clamp( 1.25rem , 0.5942622951rem  +  3.2786885246vw , 3.75rem )) {\n  .menu__list {\n     column-gap: calc(1.25rem + 2.5 * (100vw - 20rem) / 76.25);\n  }\n}\n@media (max-width: 47.99875em) {\n  .menu__list {\n    flex-flow: column wrap;\n    row-gap: 25px;\n  }\n}\n.menu__item::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0.125rem;\n  margin: 0.3125rem 0 0 0;\n  background-color: #000000;\n  transition: width 0.8s ease 0s;\n}\n@media (any-hover: hover) {\n  .menu__item:hover {\n    color: #e37332;\n  }\n  .menu__item:hover::after {\n    width: 100%;\n    background-color: #e37332;\n  }\n}\n.menu__link {\n  text-transform: uppercase;\n}\n@supports (font-size: clamp( 1.625rem , 2.4553571429rem  +  -1.3392857143vw , 2.1875rem )) {\n  .menu__link {\n    font-size: clamp( 1.625rem , 2.4553571429rem  +  -1.3392857143vw , 2.1875rem );\n  }\n}\n@supports not (font-size: clamp( 1.625rem , 2.4553571429rem  +  -1.3392857143vw , 2.1875rem )) {\n  .menu__link {\n    font-size: calc(2.1875rem + -0.5625 * (100vw - 20rem) / 42);\n  }\n}\n\n.header-footer {\n  z-index: 5;\n  flex-direction: column;\n  color: #ffffff;\n}\n.header-footer__text {\n  font-weight: 300;\n  font-size: 0.8125rem;\n  color: #071844;\n  line-height: 1.55;\n  margin-top: 1.25rem;\n}\n.header-footer__text p:not(:last-child) {\n  margin: 0 0 0.3125rem 0;\n}\n\n.icon-menu {\n  display: none;\n}\n@media (max-width: 47.99875em) {\n  .icon-menu {\n    display: block;\n    position: absolute;\n    top: 1.875rem;\n    right: 1.875rem;\n    width: 1.875rem;\n    height: 1.25rem;\n    cursor: pointer;\n    z-index: 5;\n  }\n  .icon-menu span, .icon-menu::before, .icon-menu::after {\n    content: \"\";\n    transition: all 0.3s ease 0s;\n    right: 0;\n    position: absolute;\n    height: 0.125rem;\n    background-color: #ffffff;\n  }\n  .icon-menu::before {\n    width: 100%;\n    top: 0;\n  }\n  .icon-menu::after {\n    bottom: 0;\n    width: 45%;\n  }\n  .icon-menu span {\n    width: 70%;\n    top: calc(50% - 0.0625rem);\n  }\n  .menu-open .icon-menu span {\n    width: 0;\n    background-color: #ffffff;\n  }\n  .menu-open .icon-menu::before, .menu-open .icon-menu::after {\n    width: 100%;\n    background-color: #ffffff;\n  }\n  .menu-open .icon-menu::before {\n    top: calc(50% - 0.0625rem);\n    transform: rotate(-45deg);\n  }\n  .menu-open .icon-menu::after {\n    bottom: calc(50% - 0.0625rem);\n    transform: rotate(45deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/fonts/fonts.scss","webpack://./src/scss/fonts/icons.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/forms/button.scss","webpack://./src/scss/base/popup.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\r\n\r\n// Подключение миксинов ===========================================================================================================================================================================================================================================================================\r\n@import 'base/mixins';\r\n\r\n// Подключение шрифтов ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - добавить при подключении через плагин\r\n\r\n// Подключить если есть локальные файлы шрифтов\r\n@import 'fonts/fonts';\r\n\r\n// Подключение иконочных шрифтов ==============================================================================================================================================================================================================================================================================\r\n// Подключить если есть файл иконочного шрифта\r\n@import 'fonts/icons';\r\n\r\n// Шрифт по умолчанию ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: Muller, sans-serif;\r\n$fontSize: rem(14); // где 14(px) - размер шрифта по умолчанию из макета\r\n$fontWeight: 400;\r\n$lineHeight: 1.2;\r\n// Основные цвета\r\n$mainColor: #000000; // Цвет шрифта по умолчанию\r\n$mainDarkColor: #141414;\r\n$lightColor: #ffffff;\r\n// $backgLightColor: #bbbbbb;\r\n$backgLightColor: #bdb9b2;\r\n// $backgColor: #d7d7d7;\r\n$backgColor: #b3afac;\r\n$butColorMain: #387391;\r\n$buttonColor: #6f6f85;\r\n$buttonColorHover: #666666;\r\n$textAccent: #071844;\r\n$accent: #e37332;\r\n$backgMenu: #a39d9d;\r\n\r\n// НАСТРОЙКИ ===============================================================================================================================================================================================================================================================================================\r\n// Минимальная ширина страницы\r\n$minWidth: 320;\r\n// Ширина полотна (макета)\r\n$maxWidth: 1920;\r\n// Ширина ограничивающего контейнера (0 = нет ограничения)\r\n$maxWidthContainer: 1510;\r\n// Общий отступ у контейнера\r\n// (30 = по 15px слева и справа, 0 = нет отступа)\r\n$containerPadding: 30;\r\n\r\n// Ширина срабатывания первого брейкпоинта\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поинты\r\n$pc: em(\r\n  $containerWidth\r\n); // ПК, ноутбуки, некоторые планшеты в горизонтальном положении\r\n$tablet: em(991.98); // Планшеты, некоторые телефоны в горизонтальном положении\r\n$mobile: em(767.98); // Телефоны L\r\n$mobileSmall: em(479.98); // Телефоны S\r\n\r\n// Тип адаптива:\r\n// 1 = отзывчивость (у контейнера нет брейкпоинтов),\r\n// 2 = по брейк-поинтам (контейнер меняет свою ширину по брейк-поинтам)\r\n$responsiveType: 1;\r\n\r\n// Обнуление и общие параметры ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import 'base/null';\r\n\r\nbody {\r\n  // Скролл заблокирован\r\n  .lock & {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n  }\r\n  // Сайт загружен\r\n  // .loaded & {\r\n  // }\r\n}\r\n.visually-hidden:not(:focus):not(:active),\r\ninput[type='checkbox'].visually-hidden,\r\ninput[type='radio'].visually-hidden {\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n}\r\n// Оболочка ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n  // Прижимаем footer\r\n  // > main {\r\n  //   flex: 1 1 auto;\r\n  // }\r\n  // // Фикс для слайдеров\r\n  // > * {\r\n  //   min-width: 0;\r\n  // }\r\n}\r\n// Ограничивающий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стили будут применяться ко \r\nвсем классам содержащим *__container\r\nНапример header__container, main__container и т.д.\r\nСнипет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n  // Отзывчивая\r\n  [class*='__container'] {\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($maxWidthContainer);\r\n      box-sizing: content-box;\r\n      margin: 0 auto;\r\n    }\r\n    @if ($containerPadding>0) {\r\n      padding: 0 rem(math.div($containerPadding, 2));\r\n    }\r\n  }\r\n} @else {\r\n  // По брейк-поинтам\r\n  [class*='__container'] {\r\n    margin: 0 auto;\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($maxWidthContainer);\r\n      box-sizing: content-box;\r\n    } @else {\r\n      @if ($containerPadding>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n    @media (max-width: $pc) {\r\n      max-width: rem(970);\r\n    }\r\n    @media (max-width: $tablet) {\r\n      max-width: rem(750);\r\n    }\r\n    @media (max-width: $mobile) {\r\n      max-width: none;\r\n      @if ($containerPadding>0 and $maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Подключение базовых стилей, шаблонов (заготовок) и вспомогательных  классов\r\n// Для подключения/отключения конкретных стилей смотри base.scss\r\n@import 'base';\r\n\r\n// Подключение стилей общих элементов проекта\r\n@import 'common';\r\n\r\n// Подключение стилей отдельных блоков\r\n@import 'header';\r\n@import 'footer';\r\n\r\n// Подключение стилей отдельных страниц\r\n@import 'main';\r\n","@font-face {\n\tfont-family: icon;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/icon.woff2\") format(\"woff2\"), url(\"../fonts/icon.woff\") format(\"woff\");\n\tfont-weight: 400;\n\tfont-style: normal;\n}\r\n@font-face {\n\tfont-family: Muller;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/Muller-Black.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Black.woff\") format(\"woff\");\n\tfont-weight: 900;\n\tfont-style: normal;\n}\r\n@font-face {\n\tfont-family: Muller;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/Muller-ExtraBold.woff2\") format(\"woff2\"), url(\"../fonts/Muller-ExtraBold.woff\") format(\"woff\");\n\tfont-weight: 800;\n\tfont-style: normal;\n}\r\n@font-face {\n\tfont-family: Muller;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/Muller-Bold.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Bold.woff\") format(\"woff\");\n\tfont-weight: 700;\n\tfont-style: normal;\n}\r\n@font-face {\n\tfont-family: Muller;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/Muller-Light.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Light.woff\") format(\"woff\");\n\tfont-weight: 300;\n\tfont-style: normal;\n}\r\n@font-face {\n\tfont-family: Muller;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/Muller-Medium.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Medium.woff\") format(\"woff\");\n\tfont-weight: 500;\n\tfont-style: normal;\n}\r\n@font-face {\n\tfont-family: Muller;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/Muller-Regular.woff2\") format(\"woff2\"), url(\"../fonts/Muller-Regular.woff\") format(\"woff\");\n\tfont-weight: 400;\n\tfont-style: normal;\n}\r\n","%ic {\r\n  font-family: 'icon';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n[class*='_icon-'] {\r\n  &:before {\r\n    @extend %ic;\r\n    display: block;\r\n  }\r\n}\r\n// .icon-logo .path1:before {\r\n//   content: '\\e901';\r\n//   color: rgb(233, 95, 6);\r\n// }\r\n// .icon-logo .path2:before {\r\n//   content: '\\e902';\r\n//   margin-left: -1.4091796875em;\r\n//   color: rgb(255, 255, 255);\r\n// }\r\n// .icon-logo .path3:before {\r\n//   content: '\\e903';\r\n//   margin-left: -1.4091796875em;\r\n//   color: rgb(255, 255, 255);\r\n// }\r\n// .icon-logo .path4:before {\r\n//   content: '\\e904';\r\n//   margin-left: -1.4091796875em;\r\n//   color: rgb(0, 0, 0);\r\n// }\r\n// .icon-logoblack .path1:before {\r\n//   content: '\\e905';\r\n//   color: rgb(0, 0, 0);\r\n// }\r\n// .icon-logoblack .path2:before {\r\n//   content: '\\e906';\r\n//   margin-left: -1.4091796875em;\r\n//   color: rgb(255, 255, 255);\r\n// }\r\n// .icon-logoblack .path3:before {\r\n//   content: '\\e908';\r\n//   margin-left: -1.4091796875em;\r\n//   color: rgb(255, 255, 255);\r\n// }\r\n// .icon-logoblack .path4:before {\r\n//   content: '\\e90b';\r\n//   margin-left: -1.4091796875em;\r\n//   color: rgb(0, 0, 0);\r\n// }\r\n// .icon-symbol:before {\r\n//   content: '\\e90c';\r\n//   color: #efe0d4;\r\n// }\r\n.icon-location:before {\r\n  content: '\\e907';\r\n}\r\n.icon-phone:before {\r\n  content: '\\e90a';\r\n}\r\n.icon-user:before {\r\n  content: '\\e90f';\r\n}\r\n.icon-mail:before {\r\n  content: '\\e909';\r\n  // color: #fff;\r\n}\r\n.icon-whatsapp:before {\r\n  content: '\\e910';\r\n}\r\n.icon-telegram:before {\r\n  content: '\\e917';\r\n}\r\n.icon-viber:before {\r\n  content: '\\e913';\r\n  // color: #665cac;\r\n}\r\n.icon-vk:before {\r\n  content: '\\e900';\r\n  // color: #4680c2;\r\n}\r\n","* {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n  // outline: none;\r\n}\r\na:focus,\r\na:active {\r\n  // outline: none;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  min-width: $minWidth + px;\r\n}\r\nbody {\r\n  color: $mainColor;\r\n  line-height: $lineHeight;\r\n  font-family: $fontFamily;\r\n  font-size: $fontSize;\r\n  font-weight: $fontWeight;\r\n  //text-rendering: optimizeLegibility;\r\n  -ms-text-size-adjust: 100%;\r\n  -moz-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n  font-family: $fontFamily;\r\n  font-size: inherit;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n  color: inherit;\r\n  background-color: inherit;\r\n}\r\na {\r\n  color: inherit;\r\n}\r\na:link,\r\na:visited {\r\n  text-decoration: none;\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n}\r\nul li {\r\n  list-style: none;\r\n}\r\nimg {\r\n  vertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: inherit;\r\n  font-size: inherit;\r\n}\r\n","//<BUTTONS (a.btn+tab)>\r\n// Снипет (HTML): btn\r\n\r\n.button {\r\n  display: inline-flex;\r\n  background-color: $buttonColor;\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 32px rgb(0, 0, 0, 0.73);\r\n  font-weight: 400;\r\n  font-size: rem(14);\r\n  padding: rem(8) rem(30);\r\n  line-height: math.div(32, 20);\r\n  transition: box-shadow 0.3s ease 0s;\r\n  text-align: center;\r\n  justify-content: center;\r\n  white-space: nowrap;\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      box-shadow: 0 4px 25px rgb(80, 81, 106, 0.9);\r\n    }\r\n  }\r\n}\r\n","body::after {\r\n  content: '';\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  transition: opacity 0.8s ease 0s;\r\n  pointer-events: none;\r\n  z-index: 149;\r\n}\r\n.popup-show body::after {\r\n  opacity: 1;\r\n}\r\n.popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  padding: 30px 10px;\r\n  transition: visibility 0.8s ease 0s;\r\n  visibility: hidden;\r\n  pointer-events: none;\r\n}\r\n.popup_show {\r\n  z-index: 150;\r\n  visibility: visible;\r\n  overflow: auto;\r\n  pointer-events: auto;\r\n}\r\n.popup_show .popup__content {\r\n  visibility: visible;\r\n  transform: scale(1);\r\n}\r\n.popup__wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 100%;\r\n  flex: 1 1 auto;\r\n  width: 100%;\r\n  // display: flex;\r\n  justify-content: center;\r\n  // align-items: center;\r\n}\r\n.popup__content {\r\n  visibility: hidden;\r\n  transform: scale(0);\r\n  transition: transform 0.3s ease 0s;\r\n  background-color: #eee;\r\n  padding: 20px;\r\n  width: 100%;\r\n  max-width: 900px;\r\n  border-radius: 20px;\r\n  .lock & {\r\n    visibility: visible;\r\n  }\r\n}\r\n","// Общий файл элементов форм\r\n// Для подключения/отключения стилей конкретного єлемента формы смотри base/forms/forms.scss\r\n@import 'base/forms/forms';\r\n\r\n// Стили попапов\r\n@import 'base/popup';\r\n\r\n// Стили спойлеров\r\n// @import \"base/spollers\";\r\n\r\n// Стили табов\r\n// @import \"base/tabs\";\r\n\r\n// Стили карт\r\n// @import \"base/maps\";\r\n\r\n// Стили блока \"показать еще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стили для полноэкранного блока\r\n// @import \"base/fullscreen\";\r\n\r\n// Стили для липкого блока\r\n// @import \"base/sticky\";\r\n\r\n// Стили для отзывчивых картинок (IBG)\r\n// Сниппет (HTML): ibg (div c картинкой и классами)\r\n// Сниппет (HTML): ibga (a c картинкой и классами)\r\n[class*='-ibg'] {\r\n  position: relative;\r\n  img {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    object-fit: cover;\r\n  }\r\n}\r\n[class*='-ibg_contain'] {\r\n  img {\r\n    object-fit: contain;\r\n  }\r\n}\r\n\r\n// Шаблоны (заготовки)\r\n// @extend %имя шаблона;\r\n// Сниппет (SCSS): ex\r\n\r\n// Счетчик для списка\r\n%listCounter {\r\n  list-style-type: none;\r\n  counter-reset: item;\r\n  li {\r\n    position: relative;\r\n    &:before {\r\n      counter-increment: item;\r\n      content: counter(item);\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n    }\r\n  }\r\n}\r\n// Адаптивное видео\r\n%responsiveVideo {\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 0;\r\n  padding-bottom: 56.25%;\r\n  video,\r\n  iframe,\r\n  object,\r\n  embed {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n// Видео в качестве фона\r\n%videoBackground {\r\n  video,\r\n  iframe,\r\n  object,\r\n  embed {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: -100;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    background-size: cover;\r\n  }\r\n}\r\n// Серый фильтр\r\n%grayfilter {\r\n  transition: all 0.3s ease 0s;\r\n  filter: grayscale(1);\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      filter: grayscale(0);\r\n    }\r\n  }\r\n}\r\n// Отменить выделение\r\n%noselect {\r\n  user-select: none;\r\n}\r\n// Зеркальное отображение\r\n%mirror {\r\n  transform: scale(-1, 1);\r\n}\r\n// Плавный скролл\r\n%smoothscroll {\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n// Скрыть скролл\r\n%hidescroll {\r\n  &::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n  background-color: $backgColor;\r\n  opacity: 0.81;\r\n  .menu-open & {\r\n    background-color: $backgMenu;\r\n  }\r\n  &__container {\r\n  }\r\n\r\n  &__body {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    // padding: rem(35) 0 0 0;\r\n    @include adaptiveValue('padding-bottom', 50, 30);\r\n    @include adaptiveValue('padding-top', 30, 40);\r\n    @media (max-width: $tablet) {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: rem(30);\r\n    }\r\n  }\r\n\r\n  &__logo {\r\n  }\r\n\r\n  &__mail {\r\n  }\r\n\r\n  &__phones {\r\n  }\r\n\r\n  &__social {\r\n    display: none;\r\n    .menu-open & {\r\n      display: flex;\r\n      min-height: rem(51);\r\n    }\r\n  }\r\n\r\n  &__menu {\r\n    padding-bottom: rem(30);\r\n  }\r\n\r\n  &__footer {\r\n    display: none;\r\n\r\n    .menu-open & {\r\n      display: flex;\r\n      padding-bottom: rem(30);\r\n    }\r\n  }\r\n}\r\n.logo-header {\r\n  // max-width: rem(320);\r\n  &__link img {\r\n    display: block;\r\n    width: rem(200);\r\n    height: rem(70);\r\n    // background: url('../img/icon/logo.svg') center / contain no-repeat;\r\n    // .menu-open & {\r\n    //   background: url('../img/icon/logo-black.svg') center / contain no-repeat;\r\n    // }\r\n    // @media (any-hover: hover) {\r\n    //   &:hover {\r\n    //     background: url('../img/icon/logo-black.svg') center / contain no-repeat;\r\n    //   }\r\n    // }\r\n    // @media (max-width: $mobile) {\r\n    //   width: rem(180);\r\n    //   height: rem(60);\r\n    // }\r\n  }\r\n}\r\n\r\n.mail-header {\r\n  @media (max-width: $mobile) {\r\n    padding: rem(20) 0;\r\n  }\r\n  &__item {\r\n    &:not(:last-child) {\r\n      margin: 0 0 rem(10) 0;\r\n    }\r\n  }\r\n  &__mail {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    font-size: rem(18);\r\n\r\n    @extend %ic;\r\n    &::before {\r\n      font-size: rem(20);\r\n      margin: 0 rem(15) 0 0;\r\n    }\r\n  }\r\n\r\n  &__feedback {\r\n    color: $lightColor;\r\n    line-height: math.div(18, 14);\r\n    padding-bottom: rem(8);\r\n    @include adaptiveValue('font-size', 12, 14);\r\n    &::after {\r\n      content: '';\r\n      display: block;\r\n      width: 0;\r\n      height: rem(2);\r\n      margin: rem(5) 0 0 0;\r\n      background-color: $mainColor;\r\n      transition: width 0.8s ease 0s;\r\n    }\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        color: $accent;\r\n        &::after {\r\n          width: 100%;\r\n          background-color: $accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.phones-header {\r\n  @media (max-width: $mobile) {\r\n    display: flex;\r\n    // flex-direction: row;\r\n    align-items: baseline;\r\n  }\r\n  &__item {\r\n    @media (min-width: $mobile) {\r\n      margin: 0 0 rem(10) 0;\r\n    }\r\n  }\r\n\r\n  &__phone {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: rem(18);\r\n    @extend %ic;\r\n    &::before {\r\n      display: none;\r\n    }\r\n    @media (max-width: $mobile) {\r\n      span {\r\n        display: none;\r\n      }\r\n      &::before {\r\n        display: block;\r\n        font-size: rem(25);\r\n        margin: 0 rem(15) 0 0;\r\n        color: $lightColor;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__callback {\r\n    box-sizing: border-box;\r\n    @include adaptiveValue('font-size', 12, 16);\r\n    color: $lightColor;\r\n    @media (min-width: $tablet) {\r\n      padding-bottom: rem(8);\r\n    }\r\n    &::after {\r\n      content: '';\r\n      display: block;\r\n      width: 0;\r\n      height: rem(2);\r\n      margin: rem(5) 0 0 0;\r\n      background-color: $mainColor;\r\n      transition: width 0.8s ease 0s;\r\n    }\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        color: $accent;\r\n        &::after {\r\n          width: 100%;\r\n          background-color: $accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.social-header {\r\n  z-index: 5;\r\n  padding: rem(25) 0;\r\n  &__item {\r\n    &:not(:last-child) {\r\n      margin: 0 rem(15) 0 0;\r\n    }\r\n  }\r\n\r\n  &__link {\r\n    @extend %ic;\r\n    &::before {\r\n      font-size: rem(36);\r\n      border-radius: 50%;\r\n      // background-color: $buttonColor;\r\n      // color: $backgMenu;\r\n    }\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        &::before {\r\n          // background-color: $backgColor;\r\n          // color: $accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.menu {\r\n  &__body {\r\n    @media (max-width: $mobile) {\r\n      position: fixed;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: rem(120);\r\n      right: -100%;\r\n      overflow: auto;\r\n      background-color: $backgMenu;\r\n      padding: rem(30) rem(15);\r\n      transition: right 0.3s ease 0s;\r\n      z-index: 3;\r\n      &::before {\r\n        content: '';\r\n        position: fixed;\r\n        width: 100%;\r\n        height: rem(80);\r\n        top: 0;\r\n        right: -100%;\r\n        background-color: $backgMenu;\r\n      }\r\n      .menu-open & {\r\n        right: 0;\r\n        &::before {\r\n          // right: 0;\r\n        }\r\n        .menu__link {\r\n          color: $lightColor;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  &__icon {\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    row-gap: 5px;\r\n    justify-content: flex-start;\r\n    @include adaptiveValue(' column-gap', 60, 20);\r\n    @media (max-width: $mobile) {\r\n      flex-flow: column wrap;\r\n      row-gap: 25px;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    &::after {\r\n      content: '';\r\n      display: block;\r\n      width: 0;\r\n      height: rem(2);\r\n      margin: rem(5) 0 0 0;\r\n      background-color: $mainColor;\r\n      transition: width 0.8s ease 0s;\r\n    }\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        color: $accent;\r\n        &::after {\r\n          width: 100%;\r\n          background-color: $accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__link {\r\n    text-transform: uppercase;\r\n    @include adaptiveValue('font-size', 26, 35, 992, 320, 1);\r\n  }\r\n}\r\n\r\n.header-footer {\r\n  z-index: 5;\r\n  flex-direction: column;\r\n  color: $lightColor;\r\n  &__feedback {\r\n  }\r\n  &__text {\r\n    font-weight: 300;\r\n    font-size: rem(13);\r\n    color: $textAccent;\r\n    line-height: 1.55;\r\n    margin-top: rem(20);\r\n    p {\r\n      &:not(:last-child) {\r\n        margin: 0 0 rem(5) 0;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n.icon-menu {\r\n  display: none;\r\n  @media (max-width: $mobile) {\r\n    display: block;\r\n    position: absolute;\r\n    top: rem($containerPadding);\r\n    right: rem($containerPadding);\r\n    width: rem(30);\r\n    height: rem(20);\r\n    cursor: pointer;\r\n    z-index: 5;\r\n    span,\r\n    &::before,\r\n    &::after {\r\n      content: '';\r\n      transition: all 0.3s ease 0s;\r\n      right: 0;\r\n      position: absolute;\r\n      height: rem(2);\r\n      background-color: $lightColor;\r\n    }\r\n    &::before {\r\n      width: 100%;\r\n      top: 0;\r\n    }\r\n    &::after {\r\n      bottom: 0;\r\n      width: 45%;\r\n    }\r\n    span {\r\n      width: 70%;\r\n      top: calc(50% - rem(1));\r\n    }\r\n    .menu-open & {\r\n      span {\r\n        width: 0;\r\n        background-color: $lightColor;\r\n      }\r\n      &::before,\r\n      &::after {\r\n        width: 100%;\r\n        background-color: $lightColor;\r\n      }\r\n      &::before {\r\n        top: calc(50% - rem(1));\r\n        transform: rotate(-45deg);\r\n      }\r\n      &::after {\r\n        bottom: calc(50% - rem(1));\r\n        transform: rotate(45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n","//Подключение шрифта\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n//Адаптивное свойство\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивное свойство (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $widthFrom: $containerWidth, $widthTo: $minWidth, $keepSize: 0) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поинты в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плавающего значения\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Получение значения свойства\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Если отрицательные значения\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Если поддерживается clamp();\r\n\t@supports (#{$property}: $propertyValue) {\r\n\t\t#{$property}: $propertyValue;\r\n\t}\r\n\t// Если не поддерживается clamp();\r\n\t@supports not (#{$property}: $propertyValue) {\r\n\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t}\r\n\r\n\t// Устанавливаем значения по умолчанию\r\n\t@if $widthFrom != $containerWidth and $widthFrom != $maxWidth and $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: inherit;\r\n\t\t}\r\n\t}\r\n\t@if $widthTo != $minWidth and $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: inherit;\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_string_replace_loader_index_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./style.scss */ "./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_string_replace_loader_index_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_string_replace_loader_index_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_string_replace_loader_index_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_string_replace_loader_index_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/files/forms/forms.js":
/*!*************************************!*\
  !*** ./src/js/files/forms/forms.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formFieldsInit": () => (/* binding */ formFieldsInit),
/* harmony export */   "formQuantity": () => (/* binding */ formQuantity),
/* harmony export */   "formRating": () => (/* binding */ formRating),
/* harmony export */   "formSubmit": () => (/* binding */ formSubmit),
/* harmony export */   "formValidate": () => (/* binding */ formValidate)
/* harmony export */ });
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules.js */ "./src/js/files/modules.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _scroll_gotoblock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scroll/gotoblock.js */ "./src/js/files/scroll/gotoblock.js");
// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей

// Вспомогательные функции

// Модуль прокрутки к блоку

//================================================================================================================================================================================================================================================================================================================================

/*
Документация: https://template.fls.guru/template-docs/rabota-s-formami.html
*/

// Работа с полями формы. Добавление классов, работа с placeholder
function formFieldsInit(options = { viewPass: false }) {
	// Если включено, добавляем функционал "скрыть плейсходлер при фокусе"
	const formFields = document.querySelectorAll('input[placeholder],textarea[placeholder]');
	if (formFields.length) {
		formFields.forEach(formField => {
			if (!formField.hasAttribute('data-placeholder-nohide')) {
				formField.dataset.placeholder = formField.placeholder;
			}
		});
	}
	document.body.addEventListener("focusin", function (e) {
		const targetElement = e.target;
		if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
			if (targetElement.dataset.placeholder) {
				targetElement.placeholder = '';
			}
			if (!targetElement.hasAttribute('data-no-focus-classes')) {
				targetElement.classList.add('_form-focus');
				targetElement.parentElement.classList.add('_form-focus');
			}
			formValidate.removeError(targetElement);
		}
	});
	document.body.addEventListener("focusout", function (e) {
		const targetElement = e.target;
		if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
			if (targetElement.dataset.placeholder) {
				targetElement.placeholder = targetElement.dataset.placeholder;
			}
			if (!targetElement.hasAttribute('data-no-focus-classes')) {
				targetElement.classList.remove('_form-focus');
				targetElement.parentElement.classList.remove('_form-focus');
			}
			// Моментальная валидация
			if (targetElement.hasAttribute('data-validate')) {
				formValidate.validateInput(targetElement);
			}
		}
	});

	// Если включено, добавляем функционал "Показать пароль"
	if (options.viewPass) {
		document.addEventListener("click", function (e) {
			let targetElement = e.target;
			if (targetElement.closest('[class*="__viewpass"]')) {
				let inputType = targetElement.classList.contains('_viewpass-active') ? "password" : "text";
				targetElement.parentElement.querySelector('input').setAttribute("type", inputType);
				targetElement.classList.toggle('_viewpass-active');
			}
		});
	}
}
// Валидация форм
let formValidate = {
	getErrors(form) {
		let error = 0;
		let formRequiredItems = form.querySelectorAll('*[data-required]');
		if (formRequiredItems.length) {
			formRequiredItems.forEach(formRequiredItem => {
				if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) {
					error += this.validateInput(formRequiredItem);
				}
			});
		}
		return error;
	},
	validateInput(formRequiredItem) {
		let error = 0;
		if (formRequiredItem.dataset.required === "email") {
			formRequiredItem.value = formRequiredItem.value.replace(" ", "");
			if (this.emailTest(formRequiredItem)) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		} else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
			this.addError(formRequiredItem);
			error++;
		} else {
			if (!formRequiredItem.value.trim()) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		}
		return error;
	},
	addError(formRequiredItem) {
		formRequiredItem.classList.add('_form-error');
		formRequiredItem.parentElement.classList.add('_form-error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (formRequiredItem.dataset.error) {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
		}
	},
	removeError(formRequiredItem) {
		formRequiredItem.classList.remove('_form-error');
		formRequiredItem.parentElement.classList.remove('_form-error');
		if (formRequiredItem.parentElement.querySelector('.form__error')) {
			formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form__error'));
		}
	},
	formClean(form) {
		form.reset();
		setTimeout(() => {
			let inputs = form.querySelectorAll('input,textarea');
			for (let index = 0; index < inputs.length; index++) {
				const el = inputs[index];
				el.parentElement.classList.remove('_form-focus');
				el.classList.remove('_form-focus');
				formValidate.removeError(el);
			}
			let checkboxes = form.querySelectorAll('.checkbox__input');
			if (checkboxes.length > 0) {
				for (let index = 0; index < checkboxes.length; index++) {
					const checkbox = checkboxes[index];
					checkbox.checked = false;
				}
			}
			if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.flsModules.select) {
				let selects = form.querySelectorAll('.select');
				if (selects.length) {
					for (let index = 0; index < selects.length; index++) {
						const select = selects[index].querySelector('select');
						_modules_js__WEBPACK_IMPORTED_MODULE_0__.flsModules.select.selectBuild(select);
					}
				}
			}
		}, 0);
	},
	emailTest(formRequiredItem) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
	}
}
/* Отправка форм */
function formSubmit(options = { validate: true }) {
	const forms = document.forms;
	if (forms.length) {
		for (const form of forms) {
			form.addEventListener('submit', function (e) {
				const form = e.target;
				formSubmitAction(form, e);
			});
			form.addEventListener('reset', function (e) {
				const form = e.target;
				formValidate.formClean(form);
			});
		}
	}
	async function formSubmitAction(form, e) {
		const error = !form.hasAttribute('data-no-validate') ? formValidate.getErrors(form) : 0;
		if (error === 0) {
			const ajax = form.hasAttribute('data-ajax');
			if (ajax) { // Если режим ajax
				e.preventDefault();
				const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
				const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
				const formData = new FormData(form);

				form.classList.add('_sending');
				const response = await fetch(formAction, {
					method: formMethod,
					body: formData
				});
				if (response.ok) {
					let responseResult = await response.json();
					form.classList.remove('_sending');
					formSent(form, responseResult);
				} else {
					alert("Ошибка");
					form.classList.remove('_sending');
				}
			} else if (form.hasAttribute('data-dev')) {	// Если режим разработки
				e.preventDefault();
				formSent(form);
			}
		} else {
			e.preventDefault();
			const formError = form.querySelector('._form-error');
			if (formError && form.hasAttribute('data-goto-error')) {
				(0,_scroll_gotoblock_js__WEBPACK_IMPORTED_MODULE_2__.gotoBlock)(formError, true, 1000);
			}
		}
	}
	// Действия после отправки формы
	function formSent(form, responseResult = ``) {
		// Создаем событие отправки формы
		document.dispatchEvent(new CustomEvent("formSent", {
			detail: {
				form: form
			}
		}));
		// Показываем попап, если подключен модуль попапов 
		// и для формы указана настройка
		setTimeout(() => {
			if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.flsModules.popup) {
				const popup = form.dataset.popupMessage;
				popup ? _modules_js__WEBPACK_IMPORTED_MODULE_0__.flsModules.popup.open(popup) : null;
			}
		}, 0);
		// Очищаем форму
		formValidate.formClean(form);
		// Сообщаем в консоль
		formLogging(`Форма отправлена!`);
	}
	function formLogging(message) {
		(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.FLS)(`[Формы]: ${message}`);
	}
}
/* Модуь формы "колличество" */
function formQuantity() {
	document.addEventListener("click", function (e) {
		let targetElement = e.target;
		if (targetElement.closest('.quantity__button')) {
			let value = parseInt(targetElement.closest('.quantity').querySelector('input').value);
			if (targetElement.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				--value;
				if (value < 1) value = 1;
			}
			targetElement.closest('.quantity').querySelector('input').value = value;
		}
	});
}
/* Модуь звездного рейтинга */
function formRating() {
	const ratings = document.querySelectorAll('.rating');
	if (ratings.length > 0) {
		initRatings();
	}
	// Основная функция
	function initRatings() {
		let ratingActive, ratingValue;
		// "Бегаем" по всем рейтингам на странице
		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			initRating(rating);
		}
		// Инициализируем конкретный рейтинг
		function initRating(rating) {
			initRatingVars(rating);

			setRatingActiveWidth();

			if (rating.classList.contains('rating_set')) {
				setRating(rating);
			}
		}
		// Инициализайция переменных
		function initRatingVars(rating) {
			ratingActive = rating.querySelector('.rating__active');
			ratingValue = rating.querySelector('.rating__value');
		}
		// Изменяем ширину активных звезд
		function setRatingActiveWidth(index = ratingValue.innerHTML) {
			const ratingActiveWidth = index / 0.05;
			ratingActive.style.width = `${ratingActiveWidth}%`;
		}
		// Возможность указать оценку 
		function setRating(rating) {
			const ratingItems = rating.querySelectorAll('.rating__item');
			for (let index = 0; index < ratingItems.length; index++) {
				const ratingItem = ratingItems[index];
				ratingItem.addEventListener("mouseenter", function (e) {
					// Обновление переменных
					initRatingVars(rating);
					// Обновление активных звезд
					setRatingActiveWidth(ratingItem.value);
				});
				ratingItem.addEventListener("mouseleave", function (e) {
					// Обновление активных звезд
					setRatingActiveWidth();
				});
				ratingItem.addEventListener("click", function (e) {
					// Обновление переменных
					initRatingVars(rating);

					if (rating.dataset.ajax) {
						// "Отправить" на сервер
						setRatingValue(ratingItem.value, rating);
					} else {
						// Отобразить указанную оцнку
						ratingValue.innerHTML = index + 1;
						setRatingActiveWidth();
					}
				});
			}
		}
		async function setRatingValue(value, rating) {
			if (!rating.classList.contains('rating_sending')) {
				rating.classList.add('rating_sending');

				// Отправика данных (value) на сервер
				let response = await fetch('rating.json', {
					method: 'GET',

					//body: JSON.stringify({
					//	userRating: value
					//}),
					//headers: {
					//	'content-type': 'application/json'
					//}

				});
				if (response.ok) {
					const result = await response.json();

					// Получаем новый рейтинг
					const newRating = result.newRating;

					// Вывод нового среднего результата
					ratingValue.innerHTML = newRating;

					// Обновление активных звезд
					setRatingActiveWidth();

					rating.classList.remove('rating_sending');
				} else {
					alert("Ошибка");

					rating.classList.remove('rating_sending');
				}
			}
		}
	}
}

/***/ }),

/***/ "./src/js/files/functions.js":
/*!***********************************!*\
  !*** ./src/js/files/functions.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLS": () => (/* binding */ FLS),
/* harmony export */   "_slideDown": () => (/* binding */ _slideDown),
/* harmony export */   "_slideToggle": () => (/* binding */ _slideToggle),
/* harmony export */   "_slideUp": () => (/* binding */ _slideUp),
/* harmony export */   "addLoadedClass": () => (/* binding */ addLoadedClass),
/* harmony export */   "addTouchClass": () => (/* binding */ addTouchClass),
/* harmony export */   "bodyLock": () => (/* binding */ bodyLock),
/* harmony export */   "bodyLockStatus": () => (/* binding */ bodyLockStatus),
/* harmony export */   "bodyLockToggle": () => (/* binding */ bodyLockToggle),
/* harmony export */   "bodyUnlock": () => (/* binding */ bodyUnlock),
/* harmony export */   "dataMediaQueries": () => (/* binding */ dataMediaQueries),
/* harmony export */   "fullVHfix": () => (/* binding */ fullVHfix),
/* harmony export */   "getDigFormat": () => (/* binding */ getDigFormat),
/* harmony export */   "getDigFromString": () => (/* binding */ getDigFromString),
/* harmony export */   "getHash": () => (/* binding */ getHash),
/* harmony export */   "indexInParent": () => (/* binding */ indexInParent),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isWebp": () => (/* binding */ isWebp),
/* harmony export */   "menuClose": () => (/* binding */ menuClose),
/* harmony export */   "menuInit": () => (/* binding */ menuInit),
/* harmony export */   "menuOpen": () => (/* binding */ menuOpen),
/* harmony export */   "removeClasses": () => (/* binding */ removeClasses),
/* harmony export */   "setHash": () => (/* binding */ setHash),
/* harmony export */   "showMore": () => (/* binding */ showMore),
/* harmony export */   "spollers": () => (/* binding */ spollers),
/* harmony export */   "tabs": () => (/* binding */ tabs),
/* harmony export */   "uniqArray": () => (/* binding */ uniqArray)
/* harmony export */ });
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.js */ "./src/js/files/modules.js");
// Подключение списка активных модулей


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
/* Проверка мобильного браузера */
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add('touch');
}
// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 0);
	});
}
// Получение хеша в адресе сайта
function getHash() {
	if (location.hash) { return location.hash.replace('#', ''); }
}
// Указание хеша в адресе сайта
function setHash(hash) {
	hash = hash ? `#${hash}` : window.location.href.split('#')[0];
	history.pushState('', '', hash);
}
// Учет плавающей панели на мобильных устройствах при 100vh
function fullVHfix() {
	const fullScreens = document.querySelectorAll('[data-fullscreen]');
	if (fullScreens.length && isMobile.any()) {
		window.addEventListener('resize', fixHeight);
		function fixHeight() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
		fixHeight();
	}
}
// Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
let _slideUp = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Создаем событие 
			document.dispatchEvent(new CustomEvent("slideUpDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
}
let _slideDown = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Создаем событие 
			document.dispatchEvent(new CustomEvent("slideDownDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
// Модуль работы со спойлерами =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
function spollers() {
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length) {
			initSpollers(spollersRegular);
		}
		// Получение слойлеров с медиа запросами
		let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Событие
				mdQueriesItem.matchMedia.addEventListener("change", function () {
					initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length) {
				spollerTitles = Array.from(spollerTitles).filter(item => item.closest('[data-spollers]') === spollersBlock);
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_spoller-active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.closest('[data-spoller]')) {
				const spollerTitle = el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
				const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_spoller-active');
					_slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
			const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
			if (spollerActiveTitle && !spollersBlock.querySelectorAll('._slide').length) {
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
			}
		}
		// Закрытие при клике вне спойлера
		const spollersClose = document.querySelectorAll('[data-spoller-close]');
		if (spollersClose.length) {
			document.addEventListener("click", function (e) {
				const el = e.target;
				if (!el.closest('[data-spollers]')) {
					spollersClose.forEach(spollerClose => {
						const spollersBlock = spollerClose.closest('[data-spollers]');
						const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
						spollerClose.classList.remove('_spoller-active');
						_slideUp(spollerClose.nextElementSibling, spollerSpeed);
					});
				}
			});
		}
	}
}
// Модуь работы с табами =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
function tabs() {
	const tabs = document.querySelectorAll('[data-tabs]');
	let tabsActiveHash = [];

	if (tabs.length > 0) {
		const hash = getHash();
		if (hash && hash.startsWith('tab-')) {
			tabsActiveHash = hash.replace('tab-', '').split('-');
		}
		tabs.forEach((tabsBlock, index) => {
			tabsBlock.classList.add('_tab-init');
			tabsBlock.setAttribute('data-tabs-index', index);
			tabsBlock.addEventListener("click", setTabsAction);
			initTabs(tabsBlock);
		});

		// Получение слойлеров с медиа запросами
		let mdQueriesArray = dataMediaQueries(tabs, "tabs");
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Событие
				mdQueriesItem.matchMedia.addEventListener("change", function () {
					setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
	}
	// Установка позиций заголовков
	function setTitlePosition(tabsMediaArray, matchMedia) {
		tabsMediaArray.forEach(tabsMediaItem => {
			tabsMediaItem = tabsMediaItem.item;
			let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
			let tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
			let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
			let tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
			tabsTitleItems = Array.from(tabsTitleItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
			tabsContentItems = Array.from(tabsContentItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
			tabsContentItems.forEach((tabsContentItem, index) => {
				if (matchMedia.matches) {
					tabsContent.append(tabsTitleItems[index]);
					tabsContent.append(tabsContentItem);
					tabsMediaItem.classList.add('_tab-spoller');
				} else {
					tabsTitles.append(tabsTitleItems[index]);
					tabsMediaItem.classList.remove('_tab-spoller');
				}
			});
		});
	}
	// Работа с контентом
	function initTabs(tabsBlock) {
		let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
		let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

		if (tabsActiveHashBlock) {
			const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
			tabsActiveTitle ? tabsActiveTitle.classList.remove('_tab-active') : null;
		}
		if (tabsContent.length) {
			tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
			tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
			tabsContent.forEach((tabsContentItem, index) => {
				tabsTitles[index].setAttribute('data-tabs-title', '');
				tabsContentItem.setAttribute('data-tabs-item', '');

				if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
					tabsTitles[index].classList.add('_tab-active');
				}
				tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
			});
		}
	}
	function setTabsStatus(tabsBlock) {
		let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
		let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		function isTabsAnamate(tabsBlock) {
			if (tabsBlock.hasAttribute('data-tabs-animate')) {
				return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
			}
		}
		const tabsBlockAnimate = isTabsAnamate(tabsBlock);
		if (tabsContent.length > 0) {
			const isHash = tabsBlock.hasAttribute('data-tabs-hash');
			tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
			tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
			tabsContent.forEach((tabsContentItem, index) => {
				if (tabsTitles[index].classList.contains('_tab-active')) {
					if (tabsBlockAnimate) {
						_slideDown(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = false;
					}
					if (isHash && !tabsContentItem.closest('.popup')) {
						setHash(`tab-${tabsBlockIndex}-${index}`);
					}
				} else {
					if (tabsBlockAnimate) {
						_slideUp(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = true;
					}
				}
			});
		}
	}
	function setTabsAction(e) {
		const el = e.target;
		if (el.closest('[data-tabs-title]')) {
			const tabTitle = el.closest('[data-tabs-title]');
			const tabsBlock = tabTitle.closest('[data-tabs]');
			if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelector('._slide')) {
				let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._tab-active');
				tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest('[data-tabs]') === tabsBlock) : null;
				tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_tab-active') : null;
				tabTitle.classList.add('_tab-active');
				setTabsStatus(tabsBlock);
			}
			e.preventDefault();
		}
	}
}
// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/menu-burger.html
Сниппет (HTML): menu
*/
function menuInit() {
	if (document.querySelector(".icon-menu")) {
		document.addEventListener("click", function (e) {
			if (bodyLockStatus && e.target.closest('.icon-menu')) {
				bodyLockToggle();
				document.documentElement.classList.toggle("menu-open");
			}
		});
	};
}
function menuOpen() {
	bodyLock();
	document.documentElement.classList.add("menu-open");
}
function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove("menu-open");
}
// Модуль "показать еще" =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
function showMore() {
	window.addEventListener("load", function (e) {
		const showMoreBlocks = document.querySelectorAll('[data-showmore]');
		let showMoreBlocksRegular;
		let mdQueriesArray;
		if (showMoreBlocks.length) {
			// Получение обычных объектов
			showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (item, index, self) {
				return !item.dataset.showmoreMedia;
			});
			// Инициализация обычных объектов
			showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

			document.addEventListener("click", showMoreActions);
			window.addEventListener("resize", showMoreActions);

			// Получение объектов с медиа запросами
			mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
			if (mdQueriesArray && mdQueriesArray.length) {
				mdQueriesArray.forEach(mdQueriesItem => {
					// Событие
					mdQueriesItem.matchMedia.addEventListener("change", function () {
						initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
					});
				});
				initItemsMedia(mdQueriesArray);
			}
		}
		function initItemsMedia(mdQueriesArray) {
			mdQueriesArray.forEach(mdQueriesItem => {
				initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
		function initItems(showMoreBlocks, matchMedia) {
			showMoreBlocks.forEach(showMoreBlock => {
				initItem(showMoreBlock, matchMedia);
			});
		}
		function initItem(showMoreBlock, matchMedia = false) {
			showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
			let showMoreContent = showMoreBlock.querySelectorAll('[data-showmore-content]');
			let showMoreButton = showMoreBlock.querySelectorAll('[data-showmore-button]');
			showMoreContent = Array.from(showMoreContent).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
			showMoreButton = Array.from(showMoreButton).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
			const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
			if (matchMedia.matches || !matchMedia) {
				if (hiddenHeight < getOriginalHeight(showMoreContent)) {
					_slideUp(showMoreContent, 0, hiddenHeight);
					showMoreButton.hidden = false;
				} else {
					_slideDown(showMoreContent, 0, hiddenHeight);
					showMoreButton.hidden = true;
				}
			} else {
				_slideDown(showMoreContent, 0, hiddenHeight);
				showMoreButton.hidden = true;
			}
		}
		function getHeight(showMoreBlock, showMoreContent) {
			let hiddenHeight = 0;
			const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : 'size';
			if (showMoreType === 'items') {
				const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
				const showMoreItems = showMoreContent.children;
				for (let index = 1; index < showMoreItems.length; index++) {
					const showMoreItem = showMoreItems[index - 1];
					hiddenHeight += showMoreItem.offsetHeight;
					if (index == showMoreTypeValue) break
				}
			} else {
				const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
				hiddenHeight = showMoreTypeValue;
			}
			return hiddenHeight;
		}
		function getOriginalHeight(showMoreContent) {
			let parentHidden;
			let hiddenHeight = showMoreContent.offsetHeight;
			showMoreContent.style.removeProperty('height');
			if (showMoreContent.closest(`[hidden]`)) {
				parentHidden = showMoreContent.closest(`[hidden]`);
				parentHidden.hidden = false;
			}
			let originalHeight = showMoreContent.offsetHeight;
			parentHidden ? parentHidden.hidden = true : null;
			showMoreContent.style.height = `${hiddenHeight}px`;
			return originalHeight;
		}
		function showMoreActions(e) {
			const targetEvent = e.target;
			const targetType = e.type;
			if (targetType === 'click') {
				if (targetEvent.closest('[data-showmore-button]')) {
					const showMoreButton = targetEvent.closest('[data-showmore-button]');
					const showMoreBlock = showMoreButton.closest('[data-showmore]');
					const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
					const showMoreSpeed = showMoreBlock.dataset.showmoreButton ? showMoreBlock.dataset.showmoreButton : '500';
					const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
					if (!showMoreContent.classList.contains('_slide')) {
						showMoreBlock.classList.contains('_showmore-active') ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
						showMoreBlock.classList.toggle('_showmore-active');
					}
				}
			} else if (targetType === 'resize') {
				showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
				mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
			}
		}
	});
}
//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================
// FLS (Full Logging System)
function FLS(message) {
	setTimeout(() => {
		if (window.FLS) {
			console.log(message);
		}
	}, 0);
}
// Получить цифры из строки
function getDigFromString(item) {
	return parseInt(item.replace(/[^\d]/g, ''))
}
// Форматирование цифр типа 100 000 000
function getDigFormat(item) {
	return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}
// Убрать класс из всех элементов массива
function removeClasses(array, className) {
	for (var i = 0; i < array.length; i++) {
		array[i].classList.remove(className);
	}
}
// Уникализация массива
function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}
// Функция получения индекса внутри родителя
function indexInParent(parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};
// Обработа медиа запросов из атрибутов 
function dataMediaQueries(array, dataSetValue) {
	// Получение объектов с медиа запросами
	const media = Array.from(array).filter(function (item, index, self) {
		if (item.dataset[dataSetValue]) {
			return item.dataset[dataSetValue].split(",")[0];
		}
	});
	// Инициализация объектов с медиа запросами
	if (media.length) {
		const breakpointsArray = [];
		media.forEach(item => {
			const params = item.dataset[dataSetValue];
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});
		// Получаем уникальные брейкпоинты
		let mdQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mdQueries = uniqArray(mdQueries);
		const mdQueriesArray = [];

		if (mdQueries.length) {
			// Работаем с каждым брейкпоинтом
			mdQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const itemsArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				mdQueriesArray.push({
					itemsArray,
					matchMedia
				})
			});
			return mdQueriesArray;
		}
	}
}
//================================================================================================================================================================================================================================================================================================================

/***/ }),

/***/ "./src/js/files/modules.js":
/*!*********************************!*\
  !*** ./src/js/files/modules.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flsModules": () => (/* binding */ flsModules)
/* harmony export */ });
const flsModules = {}

/***/ }),

/***/ "./src/js/files/script.js":
/*!********************************!*\
  !*** ./src/js/files/script.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.js */ "./src/js/files/modules.js");
// Подключение функционала "Чертогов Фрилансера"

// Подключение списка активных модулей


/***/ }),

/***/ "./src/js/files/scroll/gotoblock.js":
/*!******************************************!*\
  !*** ./src/js/files/scroll/gotoblock.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gotoBlock": () => (/* binding */ gotoBlock)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ "./src/js/files/functions.js");
// Подключение функционала "Чертогов Фрилансера"

// Подключение дополнения для увеличения возможностей
// Документация: https://github.com/cferdinandi/smooth-scroll
// import SmoothScroll from 'smooth-scroll';
//==============================================================================================================================================================================================================================================================================================================================

// Модуль плавной проктутки к блоку
let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = '';
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = 'header.header';
			headerItemHeight = document.querySelector(headerItem).offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed: speed,
			header: headerItem,
			offset: offsetTop,
			easing: 'easeOutQuad',
		};
		// Закрываем меню, если оно открыто
		document.documentElement.classList.contains("menu-open") ? (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.menuClose)() : null;

		if (typeof SmoothScroll !== 'undefined') {
			// Прокрутка с использованием дополнения
			new SmoothScroll().animateScroll(targetBlockElement, '', options);
		} else {
			// Прокрутка стандартными средствами
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
			targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
			window.scrollTo({
				top: targetBlockElementPosition,
				behavior: "smooth"
			});
		}
		(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.FLS)(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
	} else {
		(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.FLS)(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
	}
};

/***/ }),

/***/ "./src/js/files/scroll/scroll.js":
/*!***************************************!*\
  !*** ./src/js/files/scroll/scroll.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerScroll": () => (/* binding */ headerScroll),
/* harmony export */   "pageNavigation": () => (/* binding */ pageNavigation),
/* harmony export */   "stickyBlock": () => (/* binding */ stickyBlock)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _gotoblock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gotoblock.js */ "./src/js/files/scroll/gotoblock.js");
// Подключение функционала "Чертогов Фрилансера"

// Модуль прокрутки к блоку

// Переменная контроля добавления события window scroll.
let addWindowScrollEvent = false;
//====================================================================================================================================================================================================================================================================================================
// Плавная навигация по странице
function pageNavigation() {
	// data-goto - указать ID блока
	// data-goto-header - учитывать header
	// data-goto-top - недокрутить на указанный размер
	// data-goto-speed - скорость (только если используется доп плагин)
	// Работаем при клике на пункт
	document.addEventListener("click", pageNavigationAction);
	// Если подключен scrollWatcher, подсвечиваем текущий пукт меню
	document.addEventListener("watcherCallback", pageNavigationAction);
	// Основная функция
	function pageNavigationAction(e) {
		if (e.type === "click") {
			const targetElement = e.target;
			if (targetElement.closest('[data-goto]')) {
				const gotoLink = targetElement.closest('[data-goto]');
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : '';
				const noHeader = gotoLink.hasAttribute('data-goto-header') ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				(0,_gotoblock_js__WEBPACK_IMPORTED_MODULE_1__.gotoBlock)(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				e.preventDefault();
			}
		} else if (e.type === "watcherCallback" && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			// Обработка пунктов навигации, если указано значение navigator подсвечиваем текущий пукт меню
			if (targetElement.dataset.watch === 'navigator') {
				const navigatorActiveItem = document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) {
					navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`);
				} else if (targetElement.classList.length) {
					for (let index = 0; index < targetElement.classList.length; index++) {
						const element = targetElement.classList[index];
						if (document.querySelector(`[data-goto=".${element}"]`)) {
							navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
							break;
						}
					}
				}
				if (entry.isIntersecting) {
					// Видим объект
					// navigatorActiveItem ? navigatorActiveItem.classList.remove('_navigator-active') : null;
					navigatorCurrentItem ? navigatorCurrentItem.classList.add('_navigator-active') : null;
				} else {
					// Не видим объект
					navigatorCurrentItem ? navigatorCurrentItem.classList.remove('_navigator-active') : null;
				}
			}
		}
	}
	// Прокрутка по хешу
	if ((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.getHash)()) {
		let goToHash;
		if (document.querySelector(`#${(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.getHash)()}`)) {
			goToHash = `#${(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.getHash)()}`;
		} else if (document.querySelector(`.${(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.getHash)()}`)) {
			goToHash = `.${(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.getHash)()}`;
		}
		goToHash ? (0,_gotoblock_js__WEBPACK_IMPORTED_MODULE_1__.gotoBlock)(goToHash, true, 500, 20) : null;
	}
}
// Работа с шапкой при скроле
function headerScroll() {
	addWindowScrollEvent = true;
	const header = document.querySelector('header.header');
	const headerShow = header.hasAttribute('data-scroll-show');
	const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
	let scrollDirection = 0;
	let timer;
	document.addEventListener("windowScroll", function (e) {
		const scrollTop = window.scrollY;
		clearTimeout(timer);
		if (scrollTop >= startPoint) {
			!header.classList.contains('_header-scroll') ? header.classList.add('_header-scroll') : null;
			if (headerShow) {
				if (scrollTop > scrollDirection) {
					// downscroll code
					header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
				} else {
					// upscroll code
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}
				timer = setTimeout(() => {
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}, headerShowTimer);
			}
		} else {
			header.classList.contains('_header-scroll') ? header.classList.remove('_header-scroll') : null;
			if (headerShow) {
				header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
			}
		}
		scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
	});
}
// Прилипающий блок
function stickyBlock() {
	addWindowScrollEvent = true;
	// data-sticky для родителя внутри которого прилипает блок *
	// data-sticky-header для родителя, учитываем высоту хедера
	// data-sticky-top="" для родителя, можно указать отступ сверху
	// data-sticky-bottom="" для родителя, можно указать отступ снизу
	// data-sticky-item для прилипающего блока *
	function stickyBlockInit() {
		const stickyParents = document.querySelectorAll('[data-sticky]');
		if (stickyParents.length) {
			stickyParents.forEach(stickyParent => {
				let stickyConfig = {
					media: stickyParent.dataset.sticky ? parseInt(stickyParent.dataset.sticky) : null,
					top: stickyParent.dataset.stickyTop ? parseInt(stickyParent.dataset.stickyTop) : 0,
					bottom: stickyParent.dataset.stickyBottom ? parseInt(stickyParent.dataset.stickyBottom) : 0,
					header: stickyParent.hasAttribute('data-sticky-header') ? document.querySelector('header.header').offsetHeight : 0
				}
				stickyBlockItem(stickyParent, stickyConfig);
			});
		}
	}
	function stickyBlockItem(stickyParent, stickyConfig) {
		const stickyBlockItem = stickyParent.querySelector('[data-sticky-item]');
		const headerHeight = stickyConfig.header;
		const offsetTop = headerHeight + stickyConfig.top;
		const startPoint = stickyBlockItem.getBoundingClientRect().top + scrollY - offsetTop;

		document.addEventListener("windowScroll", stickyBlockActions);
		//window.addEventListener("resize", stickyBlockActions);

		function stickyBlockActions(e) {
			const endPoint = (stickyParent.offsetHeight + stickyParent.getBoundingClientRect().top + scrollY) - (offsetTop + stickyBlockItem.offsetHeight + stickyConfig.bottom);
			let stickyItemValues = {
				position: "relative",
				bottom: "auto",
				top: "0px",
				left: "0px",
				width: "auto"
			}
			if (!stickyConfig.media || stickyConfig.media < window.innerWidth) {
				if (offsetTop + stickyConfig.bottom + stickyBlockItem.offsetHeight < window.innerHeight) {
					if (scrollY >= startPoint && scrollY <= endPoint) {
						stickyItemValues.position = `fixed`;
						stickyItemValues.bottom = `auto`;
						stickyItemValues.top = `${offsetTop}px`;
						stickyItemValues.left = `${stickyBlockItem.getBoundingClientRect().left}px`; // Учесть разницу в ширине экрана?
						stickyItemValues.width = `${stickyBlockItem.offsetWidth}px`;
					} else if (scrollY >= endPoint) {
						stickyItemValues.position = `absolute`;
						stickyItemValues.bottom = `${stickyConfig.bottom}px`;
						stickyItemValues.top = `auto`;
						stickyItemValues.left = `0px`;
						stickyItemValues.width = `${stickyBlockItem.offsetWidth}px`;
					}
				}
			}
			stickyBlockType(stickyBlockItem, stickyItemValues);
		}
	}
	function stickyBlockType(stickyBlockItem, stickyItemValues) {
		stickyBlockItem.style.cssText = `position:${stickyItemValues.position};bottom:${stickyItemValues.bottom};top:${stickyItemValues.top};left:${stickyItemValues.left};width:${stickyItemValues.width};`;
	}
	stickyBlockInit();
}
// При подключении модуля обработчик события запустится автоматически
setTimeout(() => {
	if (addWindowScrollEvent) {
		let windowScroll = new Event("windowScroll");
		window.addEventListener("scroll", function (e) {
			document.dispatchEvent(windowScroll);
		});
	}
}, 0);

/***/ }),

/***/ "./src/js/libs/dynamic_adapt.js":
/*!**************************************!*\
  !*** ./src/js/libs/dynamic_adapt.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle


function DynamicAdapt(type) {
	this.type = type;
}
DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");
	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}
	this.arraySort(this.оbjects);
	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});
	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];
		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		//for (let i = 0; i < оbjects.length; i++) {
		for (let i = оbjects.length - 1; i >= 0; i--) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};
// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}
// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}
// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};
// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};
const da = new DynamicAdapt("max");
da.init();

/***/ }),

/***/ "./src/js/libs/popup.js":
/*!******************************!*\
  !*** ./src/js/libs/popup.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _files_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/modules.js */ "./src/js/files/modules.js");
// Модуль попапов
// (c) Фрилансер по жизни, Хмурый Кот
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/funkcional-popup.html
// Сниппет (HTML): pl

// Подключение функционала "Чертогов Фрилансера"



// Класс Popup
class Popup {
	constructor(options) {
		let config = {
			logging: true,
			init: true,
			// Для кнопок 
			attributeOpenButton: 'data-popup', // Атрибут для кнопки, которая вызывает попап
			attributeCloseButton: 'data-close', // Атрибут для кнопки, которая закрывает попап
			// Для сторонних объектов
			fixElementSelector: '[data-lp]', // Атрибут для элементов с левым паддингом (которые fixed)
			// Для объекта попапа
			youtubeAttribute: 'data-popup-youtube', // Атрибут для кода youtube
			youtubePlaceAttribute: 'data-popup-youtube-place', // Атрибут для вставки ролика youtube
			setAutoplayYoutube: true,
			// Изменение классов
			classes: {
				popup: 'popup',
				// popupWrapper: 'popup__wrapper',
				popupContent: 'popup__content',
				popupActive: 'popup_show', // Добавляется для попапа, когда он открывается
				bodyActive: 'popup-show', // Добавляется для боди, когда попап открыт
			},
			focusCatch: true, // Фокус внутри попапа зациклен
			closeEsc: true, // Закрытие по ESC
			bodyLock: true, // Блокировка скролла
			hashSettings: {
				location: true, // Хэш в адресной строке
				goHash: true, // Переход по наличию в адресной строке
			},
			on: { // События
				beforeOpen: function () { },
				afterOpen: function () { },
				beforeClose: function () { },
				afterClose: function () { },
			},
		}
		this.youTubeCode;
		this.isOpen = false;
		// Текущее окно
		this.targetOpen = {
			selector: false,
			element: false,
		}
		// Предыдущее открытое
		this.previousOpen = {
			selector: false,
			element: false,
		}
		// Последнее закрытое
		this.lastClosed = {
			selector: false,
			element: false,
		}
		this._dataValue = false;
		this.hash = false;

		this._reopen = false;
		this._selectorOpen = false;

		this.lastFocusEl = false;
		this._focusEl = [
			'a[href]',
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			'button:not([disabled]):not([aria-hidden])',
			'select:not([disabled]):not([aria-hidden])',
			'textarea:not([disabled]):not([aria-hidden])',
			'area[href]',
			'iframe',
			'object',
			'embed',
			'[contenteditable]',
			'[tabindex]:not([tabindex^="-"])'
		];
		//this.options = Object.assign(config, options);
		this.options = {
			...config,
			...options,
			classes: {
				...config.classes,
				...options?.classes,
			},
			hashSettings: {
				...config.hashSettings,
				...options?.hashSettings,
			},
			on: {
				...config.on,
				...options?.on,
			}
		}
		this.bodyLock = false;
		this.options.init ? this.initPopups() : null
	}
	initPopups() {
		this.popupLogging(`Проснулся`);
		this.eventsPopup();
	}
	eventsPopup() {
		// Клик на всем документе
		document.addEventListener("click", function (e) {
			// Клик по кнопке "открыть"
			const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
			if (buttonOpen) {
				e.preventDefault();
				this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ?
					buttonOpen.getAttribute(this.options.attributeOpenButton) :
					'error';
				this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ?
					buttonOpen.getAttribute(this.options.youtubeAttribute) :
					null;
				if (this._dataValue !== 'error') {
					if (!this.isOpen) this.lastFocusEl = buttonOpen;
					this.targetOpen.selector = `${this._dataValue}`;
					this._selectorOpen = true;
					this.open();
					return;

				} else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);

				return;
			}
			// Закрытие на пустом месте (popup__wrapper) и кнопки закрытия (popup__close) для закрытия
			const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
			if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
				e.preventDefault();
				this.close();
				return;
			}
		}.bind(this));
		// Закрытие по ESC
		document.addEventListener("keydown", function (e) {
			if (this.options.closeEsc && e.which == 27 && e.code === 'Escape' && this.isOpen) {
				e.preventDefault();
				this.close();
				return;
			}
			if (this.options.focusCatch && e.which == 9 && this.isOpen) {
				this._focusCatch(e);
				return;
			}
		}.bind(this))

		// Открытие по хешу
		if (this.options.hashSettings.goHash) {
			// Проверка изменения адресной строки
			window.addEventListener('hashchange', function () {
				if (window.location.hash) {
					this._openToHash();
				} else {
					this.close(this.targetOpen.selector);
				}
			}.bind(this))

			window.addEventListener('load', function () {
				if (window.location.hash) {
					this._openToHash();
				}
			}.bind(this))
		}
	}
	open(selectorValue) {
		if (_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLockStatus) {
			// Если перед открытием попапа был режим lock
			this.bodyLock = document.documentElement.classList.contains('lock') && !this.isOpen ? true : false;

			// Если ввести значение селектора (селектор настраивается в options)
			if (selectorValue && typeof (selectorValue) === "string" && selectorValue.trim() !== "") {
				this.targetOpen.selector = selectorValue;
				this._selectorOpen = true;
			}
			if (this.isOpen) {
				this._reopen = true;
				this.close();
			}
			if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
			if (!this._reopen) this.previousActiveElement = document.activeElement;

			this.targetOpen.element = document.querySelector(this.targetOpen.selector);

			if (this.targetOpen.element) {
				// YouTube
				if (this.youTubeCode) {
					const codeVideo = this.youTubeCode;
					const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`
					const iframe = document.createElement('iframe');
					iframe.setAttribute('allowfullscreen', '');

					const autoplay = this.options.setAutoplayYoutube ? 'autoplay;' : '';
					iframe.setAttribute('allow', `${autoplay}; encrypted-media`);

					iframe.setAttribute('src', urlVideo);

					if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
						const youtubePlace = this.targetOpen.element.querySelector('.popup__text').setAttribute(`${this.options.youtubePlaceAttribute}`, '');
					}
					this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
				}
				if (this.options.hashSettings.location) {
					// Получение хэша и его выставление 
					this._getHash();
					this._setHash();
				}

				// До открытия
				this.options.on.beforeOpen(this);
				// Создаем свое событие после открытия попапа
				document.dispatchEvent(new CustomEvent("beforePopupOpen", {
					detail: {
						popup: this
					}
				}));

				this.targetOpen.element.classList.add(this.options.classes.popupActive);
				document.documentElement.classList.add(this.options.classes.bodyActive);

				if (!this._reopen) {
					!this.bodyLock ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLock)() : null;
				}
				else this._reopen = false;

				this.targetOpen.element.setAttribute('aria-hidden', 'false');

				// Запоминаю это открытое окно. Оно будет последним открытым
				this.previousOpen.selector = this.targetOpen.selector;
				this.previousOpen.element = this.targetOpen.element;

				this._selectorOpen = false;

				this.isOpen = true;

				setTimeout(() => {
					this._focusTrap();
				}, 50);

				// После открытия
				this.options.on.afterOpen(this);
				// Создаем свое событие после открытия попапа
				document.dispatchEvent(new CustomEvent("afterPopupOpen", {
					detail: {
						popup: this
					}
				}));
				this.popupLogging(`Открыл попап`);

			} else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
		}
	}
	close(selectorValue) {
		if (selectorValue && typeof (selectorValue) === "string" && selectorValue.trim() !== "") {
			this.previousOpen.selector = selectorValue;
		}
		if (!this.isOpen || !_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLockStatus) {
			return;
		}
		// До закрытия
		this.options.on.beforeClose(this);
		// Создаем свое событие перед закрытием попапа
		document.dispatchEvent(new CustomEvent("beforePopupClose", {
			detail: {
				popup: this
			}
		}));

		// YouTube
		if (this.youTubeCode) {
			if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`))
				this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = '';
		}
		this.previousOpen.element.classList.remove(this.options.classes.popupActive);
		// aria-hidden
		this.previousOpen.element.setAttribute('aria-hidden', 'true');
		if (!this._reopen) {
			document.documentElement.classList.remove(this.options.classes.bodyActive);
			!this.bodyLock ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyUnlock)() : null;
			this.isOpen = false;
		}
		// Очищение адресной строки
		this._removeHash();
		if (this._selectorOpen) {
			this.lastClosed.selector = this.previousOpen.selector;
			this.lastClosed.element = this.previousOpen.element;

		}
		// После закрытия
		this.options.on.afterClose(this);
		// Создаем свое событие после закрытия попапа
		document.dispatchEvent(new CustomEvent("afterPopupClose", {
			detail: {
				popup: this
			}
		}));

		setTimeout(() => {
			this._focusTrap();
		}, 50);

		this.popupLogging(`Закрыл попап`);
	}
	// Получение хэша 
	_getHash() {
		if (this.options.hashSettings.location) {
			this.hash = this.targetOpen.selector.includes('#') ?
				this.targetOpen.selector : this.targetOpen.selector.replace('.', '#')
		}
	}
	_openToHash() {
		let classInHash = document.querySelector(`.${window.location.hash.replace('#', '')}`) ? `.${window.location.hash.replace('#', '')}` :
			document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` :
				null;

		const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace('.', "#")}"]`);
		if (buttons && classInHash) this.open(classInHash);
	}
	// Утсановка хэша
	_setHash() {
		history.pushState('', '', this.hash);
	}
	_removeHash() {
		history.pushState('', '', window.location.href.split('#')[0])
	}
	_focusCatch(e) {
		const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
		const focusArray = Array.prototype.slice.call(focusable);
		const focusedIndex = focusArray.indexOf(document.activeElement);

		if (e.shiftKey && focusedIndex === 0) {
			focusArray[focusArray.length - 1].focus();
			e.preventDefault();
		}
		if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
			focusArray[0].focus();
			e.preventDefault();
		}
	}
	_focusTrap() {
		const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
		if (!this.isOpen && this.lastFocusEl) {
			this.lastFocusEl.focus();
		} else {
			focusable[0].focus();
		}
	}
	// Функция вывода в консоль
	popupLogging(message) {
		this.options.logging ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.FLS)(`[Попапос]: ${message}`) : null;
	}
}
// Запускаем и добавляем в объект модулей
_files_modules_js__WEBPACK_IMPORTED_MODULE_1__.flsModules.popup = new Popup({});

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _libs_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/popup.js */ "./src/js/libs/popup.js");
/* harmony import */ var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/forms/forms.js */ "./src/js/files/forms/forms.js");
/* harmony import */ var _files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/scroll/scroll.js */ "./src/js/files/scroll/scroll.js");
/* harmony import */ var _libs_dynamic_adapt_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/dynamic_adapt.js */ "./src/js/libs/dynamic_adapt.js");
/* harmony import */ var _files_script_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/script.js */ "./src/js/files/script.js");
/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
// window['FLS'] = true;

// Подключение основного файла стилей


// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль работы с табами
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
// flsFunctions.tabs();

/*
Модуль "показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Попапы
Документация: https://template.fls.guru/template-docs/funkcional-popup.html
Сниппет (HTML): pl
*/


/*
Модуль параллакса мышью
Документация: 
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formFieldsInit({ viewPass: false });

/* Oтправка формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом


// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: 
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html


/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */

//============================================================================================================================================================================================================================================

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sYUFBYSxPQUFPLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxhQUFhLE9BQU8sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sYUFBYSxPQUFPLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0s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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWUsR0FBRyxNQUFNO0FBQzdDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL25hc3Ryb3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25hc3Ryb3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz80OTA2Iiwid2VicGFjazovL25hc3Ryb3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmFzdHJveS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmFzdHJveS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25hc3Ryb3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmFzdHJveS8uL3NyYy9qcy9maWxlcy9mb3Jtcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vc3JjL2pzL2ZpbGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vc3JjL2pzL2ZpbGVzL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vbmFzdHJveS8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vbmFzdHJveS8uL3NyYy9qcy9maWxlcy9zY3JvbGwvZ290b2Jsb2NrLmpzIiwid2VicGFjazovL25hc3Ryb3kvLi9zcmMvanMvZmlsZXMvc2Nyb2xsL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vc3JjL2pzL2xpYnMvZHluYW1pY19hZGFwdC5qcyIsIndlYnBhY2s6Ly9uYXN0cm95Ly4vc3JjL2pzL2xpYnMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vbmFzdHJveS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uYXN0cm95L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25hc3Ryb3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25hc3Ryb3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uYXN0cm95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmFzdHJveS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmFzdHJveS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGljb247XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvaWNvbi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9pY29uLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE11bGxlcjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9NdWxsZXItQmxhY2sud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvTXVsbGVyLUJsYWNrLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE11bGxlcjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9NdWxsZXItRXh0cmFCb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1FeHRyYUJvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTXVsbGVyO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1Cb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE11bGxlcjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9NdWxsZXItTGlnaHQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvTXVsbGVyLUxpZ2h0LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE11bGxlcjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9NdWxsZXItTWVkaXVtLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1NZWRpdW0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTXVsbGVyO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5zb2NpYWwtaGVhZGVyX19saW5rLCAucGhvbmVzLWhlYWRlcl9fcGhvbmUsIC5tYWlsLWhlYWRlcl9fbWFpbCwgW2NsYXNzKj1faWNvbi1dOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcImljb25cXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuW2NsYXNzKj1faWNvbi1dOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmljb24tbG9jYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwN1xcXCI7XFxufVxcblxcbi5pY29uLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGFcXFwiO1xcbn1cXG5cXG4uaWNvbi11c2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGZcXFwiO1xcbn1cXG5cXG4uaWNvbi1tYWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDlcXFwiO1xcbn1cXG5cXG4uaWNvbi13aGF0c2FwcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlOTEwXFxcIjtcXG59XFxuXFxuLmljb24tdGVsZWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkxN1xcXCI7XFxufVxcblxcbi5pY29uLXZpYmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MTNcXFwiO1xcbn1cXG5cXG4uaWNvbi12azpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlOTAwXFxcIjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgZm9udC1mYW1pbHk6IE11bGxlciwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogTXVsbGVyLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hOmxpbmssXFxuYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLmxvY2sgYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4udmlzdWFsbHktaGlkZGVuOm5vdCg6Zm9jdXMpOm5vdCg6YWN0aXZlKSxcXG5pbnB1dFt0eXBlPWNoZWNrYm94XS52aXN1YWxseS1oaWRkZW4sXFxuaW5wdXRbdHlwZT1yYWRpb10udmlzdWFsbHktaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qXFxuKGkpINCh0YLQuNC70Lgg0LHRg9C00YPRgiDQv9GA0LjQvNC10L3Rj9GC0YzRgdGPINC60L4gXFxu0LLRgdC10Lwg0LrQu9Cw0YHRgdCw0Lwg0YHQvtC00LXRgNC20LDRidC40LwgKl9fY29udGFpbmVyXFxu0J3QsNC/0YDQuNC80LXRgCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINC4INGCLtC0LlxcbtCh0L3QuNC/0LXRgiAoSFRNTCk6IGNudFxcbiovXFxuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xcbiAgbWF4LXdpZHRoOiA5NC4zNzVyZW07XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XFxufVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY2Zjg1O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAzMnB4IHJnYmEoMCwgMCwgMCwgMC43Myk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSAwcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2JhKDgwLCA4MSwgMTA2LCAwLjkpO1xcbiAgfVxcbn1cXG5cXG5ib2R5OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMTQ5O1xcbn1cXG5cXG4ucG9wdXAtc2hvdyBib2R5OjphZnRlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjhzIGVhc2UgMHM7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBvcHVwX3Nob3cge1xcbiAgei1pbmRleDogMTUwO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5wb3B1cF9zaG93IC5wb3B1cF9fY29udGVudCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnBvcHVwX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cF9fY29udGVudCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSAwcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmxvY2sgLnBvcHVwX19jb250ZW50IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbltjbGFzcyo9LWliZ10ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5bY2xhc3MqPS1pYmddIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2FmYWM7XFxuICBvcGFjaXR5OiAwLjgxO1xcbn1cXG4ubWVudS1vcGVuIC5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzOWQ5ZDtcXG59XFxuLmhlYWRlcl9fYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMS41NDcxMzExNDc1cmVtICArICAxLjYzOTM0NDI2MjN2dyAsIDMuMTI1cmVtICkpIHtcXG4gIC5oZWFkZXJfX2JvZHkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMS41NDcxMzExNDc1cmVtICArICAxLjYzOTM0NDI2MjN2dyAsIDMuMTI1cmVtICk7XFxuICB9XFxufVxcbkBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAxLjU0NzEzMTE0NzVyZW0gICsgIDEuNjM5MzQ0MjYyM3Z3ICwgMy4xMjVyZW0gKSkge1xcbiAgLmhlYWRlcl9fYm9keSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuODc1cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc2LjI1KTtcXG4gIH1cXG59XFxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuODc1cmVtICwgMi42NjM5MzQ0MjYycmVtICArICAtMC44MTk2NzIxMzExdncgLCAyLjVyZW0gKSkge1xcbiAgLmhlYWRlcl9fYm9keSB7XFxuICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS44NzVyZW0gLCAyLjY2MzkzNDQyNjJyZW0gICsgIC0wLjgxOTY3MjEzMTF2dyAsIDIuNXJlbSApO1xcbiAgfVxcbn1cXG5Ac3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuODc1cmVtICwgMi42NjM5MzQ0MjYycmVtICArICAtMC44MTk2NzIxMzExdncgLCAyLjVyZW0gKSkge1xcbiAgLmhlYWRlcl9fYm9keSB7XFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIC0wLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc2LjI1KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYxLjk5ODc1ZW0pIHtcXG4gIC5oZWFkZXJfX2JvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxLjg3NXJlbTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fc29jaWFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZW51LW9wZW4gLmhlYWRlcl9fc29jaWFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAzLjE4NzVyZW07XFxufVxcbi5oZWFkZXJfX21lbnUge1xcbiAgcGFkZGluZy1ib3R0b206IDEuODc1cmVtO1xcbn1cXG4uaGVhZGVyX19mb290ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1lbnUtb3BlbiAuaGVhZGVyX19mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcXG59XFxuXFxuLmxvZ28taGVhZGVyX19saW5rIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMi41cmVtO1xcbiAgaGVpZ2h0OiA0LjM3NXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcXG4gIC5tYWlsLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcXG4gIH1cXG59XFxuLm1haWwtaGVhZGVyX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luOiAwIDAgMC42MjVyZW0gMDtcXG59XFxuLm1haWwtaGVhZGVyX19tYWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4ubWFpbC1oZWFkZXJfX21haWw6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW46IDAgMC45Mzc1cmVtIDAgMDtcXG59XFxuLm1haWwtaGVhZGVyX19mZWVkYmFjayB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI4NTcxNDI4NTc7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5Ac3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjkwNzc4Njg4NTJyZW0gICsgIC0wLjE2MzkzNDQyNjJ2dyAsIDAuODc1cmVtICkpIHtcXG4gIC5tYWlsLWhlYWRlcl9fZmVlZGJhY2sge1xcbiAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC45MDc3ODY4ODUycmVtICArICAtMC4xNjM5MzQ0MjYydncgLCAwLjg3NXJlbSApO1xcbiAgfVxcbn1cXG5Ac3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC45MDc3ODY4ODUycmVtICArICAtMC4xNjM5MzQ0MjYydncgLCAwLjg3NXJlbSApKSB7XFxuICAubWFpbC1oZWFkZXJfX2ZlZWRiYWNrIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuODc1cmVtICsgLTAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzYuMjUpO1xcbiAgfVxcbn1cXG4ubWFpbC1oZWFkZXJfX2ZlZWRiYWNrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDAuMTI1cmVtO1xcbiAgbWFyZ2luOiAwLjMxMjVyZW0gMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC44cyBlYXNlIDBzO1xcbn1cXG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gIC5tYWlsLWhlYWRlcl9fZmVlZGJhY2s6aG92ZXIge1xcbiAgICBjb2xvcjogI2UzNzMzMjtcXG4gIH1cXG4gIC5tYWlsLWhlYWRlcl9fZmVlZGJhY2s6aG92ZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzczMzI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XFxuICAucGhvbmVzLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcXG4gIC5waG9uZXMtaGVhZGVyX19pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDAgMC42MjVyZW0gMDtcXG4gIH1cXG59XFxuLnBob25lcy1oZWFkZXJfX3Bob25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLnBob25lcy1oZWFkZXJfX3Bob25lOjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcXG4gIC5waG9uZXMtaGVhZGVyX19waG9uZSBzcGFuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5waG9uZXMtaGVhZGVyX19waG9uZTo6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMS41NjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMC45Mzc1cmVtIDAgMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxufVxcbi5waG9uZXMtaGVhZGVyX19jYWxsYmFjayB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbkBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDEuMDY1NTczNzcwNXJlbSAgKyAgLTAuMzI3ODY4ODUyNXZ3ICwgMXJlbSApKSB7XFxuICAucGhvbmVzLWhlYWRlcl9fY2FsbGJhY2sge1xcbiAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMS4wNjU1NzM3NzA1cmVtICArICAtMC4zMjc4Njg4NTI1dncgLCAxcmVtICk7XFxuICB9XFxufVxcbkBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAxLjA2NTU3Mzc3MDVyZW0gICsgIC0wLjMyNzg2ODg1MjV2dyAsIDFyZW0gKSkge1xcbiAgLnBob25lcy1oZWFkZXJfX2NhbGxiYWNrIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAtMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc2LjI1KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYxLjk5ODc1ZW0pIHtcXG4gIC5waG9uZXMtaGVhZGVyX19jYWxsYmFjayB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICB9XFxufVxcbi5waG9uZXMtaGVhZGVyX19jYWxsYmFjazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwLjEyNXJlbTtcXG4gIG1hcmdpbjogMC4zMTI1cmVtIDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuOHMgZWFzZSAwcztcXG59XFxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAucGhvbmVzLWhlYWRlcl9fY2FsbGJhY2s6aG92ZXIge1xcbiAgICBjb2xvcjogI2UzNzMzMjtcXG4gIH1cXG4gIC5waG9uZXMtaGVhZGVyX19jYWxsYmFjazpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNzMzMjtcXG4gIH1cXG59XFxuXFxuLnNvY2lhbC1oZWFkZXIge1xcbiAgei1pbmRleDogNTtcXG4gIHBhZGRpbmc6IDEuNTYyNXJlbSAwO1xcbn1cXG4uc29jaWFsLWhlYWRlcl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbjogMCAwLjkzNzVyZW0gMCAwO1xcbn1cXG4uc29jaWFsLWhlYWRlcl9fbGluazo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcXG4gIC5tZW51X19ib2R5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDcuNXJlbTtcXG4gICAgcmlnaHQ6IC0xMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzOWQ5ZDtcXG4gICAgcGFkZGluZzogMS44NzVyZW0gMC45Mzc1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UgMHM7XFxuICAgIHotaW5kZXg6IDM7XFxuICB9XFxuICAubWVudV9fYm9keTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogLTEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzlkOWQ7XFxuICB9XFxuICAubWVudS1vcGVuIC5tZW51X19ib2R5IHtcXG4gICAgcmlnaHQ6IDA7XFxuICB9XFxuICAubWVudS1vcGVuIC5tZW51X19ib2R5IC5tZW51X19saW5rIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XFxuICAubWVudSB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG4ubWVudV9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcm93LWdhcDogNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5Ac3VwcG9ydHMgKCBjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNTk0MjYyMjk1MXJlbSAgKyAgMy4yNzg2ODg1MjQ2dncgLCAzLjc1cmVtICkpIHtcXG4gIC5tZW51X19saXN0IHtcXG4gICAgIGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC41OTQyNjIyOTUxcmVtICArICAzLjI3ODY4ODUyNDZ2dyAsIDMuNzVyZW0gKTtcXG4gIH1cXG59XFxuQHN1cHBvcnRzIG5vdCAoIGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC41OTQyNjIyOTUxcmVtICArICAzLjI3ODY4ODUyNDZ2dyAsIDMuNzVyZW0gKSkge1xcbiAgLm1lbnVfX2xpc3Qge1xcbiAgICAgY29sdW1uLWdhcDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzYuMjUpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xcbiAgLm1lbnVfX2xpc3Qge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICByb3ctZ2FwOiAyNXB4O1xcbiAgfVxcbn1cXG4ubWVudV9faXRlbTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwLjEyNXJlbTtcXG4gIG1hcmdpbjogMC4zMTI1cmVtIDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuOHMgZWFzZSAwcztcXG59XFxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAubWVudV9faXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZTM3MzMyO1xcbiAgfVxcbiAgLm1lbnVfX2l0ZW06aG92ZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzczMzI7XFxuICB9XFxufVxcbi5tZW51X19saW5rIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbkBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS42MjVyZW0gLCAyLjQ1NTM1NzE0MjlyZW0gICsgIC0xLjMzOTI4NTcxNDN2dyAsIDIuMTg3NXJlbSApKSB7XFxuICAubWVudV9fbGluayB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuNjI1cmVtICwgMi40NTUzNTcxNDI5cmVtICArICAtMS4zMzkyODU3MTQzdncgLCAyLjE4NzVyZW0gKTtcXG4gIH1cXG59XFxuQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS42MjVyZW0gLCAyLjQ1NTM1NzE0MjlyZW0gICsgIC0xLjMzOTI4NTcxNDN2dyAsIDIuMTg3NXJlbSApKSB7XFxuICAubWVudV9fbGluayB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygyLjE4NzVyZW0gKyAtMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNDIpO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyLWZvb3RlciB7XFxuICB6LWluZGV4OiA1O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaGVhZGVyLWZvb3Rlcl9fdGV4dCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XFxuICBjb2xvcjogIzA3MTg0NDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuLmhlYWRlci1mb290ZXJfX3RleHQgcDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbjogMCAwIDAuMzEyNXJlbSAwO1xcbn1cXG5cXG4uaWNvbi1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XFxuICAuaWNvbi1tZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxLjg3NXJlbTtcXG4gICAgcmlnaHQ6IDEuODc1cmVtO1xcbiAgICB3aWR0aDogMS44NzVyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgfVxcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMC4xMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgfVxcbiAgLmljb24tbWVudTo6YWZ0ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA0NSU7XFxuICB9XFxuICAuaWNvbi1tZW51IHNwYW4ge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcXG4gIH1cXG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSwgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YWZ0ZXIge1xcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9mb250cy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9mb250cy9pY29ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL251bGwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9mb3Jtcy9idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9wb3B1cC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5RkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURFRDtBQ0FBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREVEO0FDQUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUhBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FE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QUZGO0lBR0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VQeVNGO0VPeFNFO0lBR0UsV0FBQTtJQUNBLDRCQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QlByVE87RUE2bEJYO0VPdFNFO0lBQ0UsV0FBQTtJQUNBLE1BQUE7RVB3U0o7RU90U0U7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFUHdTSjtFT3RTRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFUHdTSjtFT3JTSTtJQUNFLFFBQUE7SUFDQSx5QlB0VUs7RUE2bUJYO0VPclNJO0lBRUUsV0FBQTtJQUNBLHlCUDNVSztFQWluQlg7RU9wU0k7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0VQc1NOO0VPcFNJO0lBQ0UsNkJBQUE7SUFDQSx3QkFBQTtFUHNTTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxyXFxuXFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQvNC40LrRgdC40L3QvtCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgJ2Jhc2UvbWl4aW5zJztcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGI0YDQuNGE0YLQvtCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QsdCw0LLQuNGC0Ywg0L/RgNC4INC/0L7QtNC60LvRjtGH0LXQvdC40Lgg0YfQtdGA0LXQtyDQv9C70LDQs9C40L1cXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C40YLRjCDQtdGB0LvQuCDQtdGB0YLRjCDQu9C+0LrQsNC70YzQvdGL0LUg0YTQsNC50LvRiyDRiNGA0LjRhNGC0L7QslxcclxcbkBpbXBvcnQgJ2ZvbnRzL2ZvbnRzJztcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC40LrQvtC90L7Rh9C90YvRhSDRiNGA0LjRhNGC0L7QsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C40YLRjCDQtdGB0LvQuCDQtdGB0YLRjCDRhNCw0LnQuyDQuNC60L7QvdC+0YfQvdC+0LPQviDRiNGA0LjRhNGC0LBcXHJcXG5AaW1wb3J0ICdmb250cy9pY29ucyc7XFxyXFxuXFxyXFxuLy8g0KjRgNC40YTRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogTXVsbGVyLCBzYW5zLXNlcmlmO1xcclxcbiRmb250U2l6ZTogcmVtKDE0KTsgLy8g0LPQtNC1IDE0KHB4KSAtINGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LjQtyDQvNCw0LrQtdGC0LBcXHJcXG4kZm9udFdlaWdodDogNDAwO1xcclxcbiRsaW5lSGVpZ2h0OiAxLjI7XFxyXFxuLy8g0J7RgdC90L7QstC90YvQtSDRhtCy0LXRgtCwXFxyXFxuJG1haW5Db2xvcjogIzAwMDAwMDsgLy8g0KbQstC10YIg0YjRgNC40YTRgtCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXFxyXFxuJG1haW5EYXJrQ29sb3I6ICMxNDE0MTQ7XFxyXFxuJGxpZ2h0Q29sb3I6ICNmZmZmZmY7XFxyXFxuLy8gJGJhY2tnTGlnaHRDb2xvcjogI2JiYmJiYjtcXHJcXG4kYmFja2dMaWdodENvbG9yOiAjYmRiOWIyO1xcclxcbi8vICRiYWNrZ0NvbG9yOiAjZDdkN2Q3O1xcclxcbiRiYWNrZ0NvbG9yOiAjYjNhZmFjO1xcclxcbiRidXRDb2xvck1haW46ICMzODczOTE7XFxyXFxuJGJ1dHRvbkNvbG9yOiAjNmY2Zjg1O1xcclxcbiRidXR0b25Db2xvckhvdmVyOiAjNjY2NjY2O1xcclxcbiR0ZXh0QWNjZW50OiAjMDcxODQ0O1xcclxcbiRhY2NlbnQ6ICNlMzczMzI7XFxyXFxuJGJhY2tnTWVudTogI2EzOWQ5ZDtcXHJcXG5cXHJcXG4vLyDQndCQ0KHQotCg0J7QmdCa0JggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQnNC40L3QuNC80LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDRgdGC0YDQsNC90LjRhtGLXFxyXFxuJG1pbldpZHRoOiAzMjA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC/0L7Qu9C+0YLQvdCwICjQvNCw0LrQtdGC0LApXFxyXFxuJG1heFdpZHRoOiAxOTIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCz0YDQsNC90LjRh9C40LLQsNGO0YnQtdCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10YIg0L7Qs9GA0LDQvdC40YfQtdC90LjRjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDE1MTA7XFxyXFxuLy8g0J7QsdGJ0LjQuSDQvtGC0YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXHJcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0YHQu9C10LLQsCDQuCDRgdC/0YDQsNCy0LAsIDAgPSDQvdC10YIg0L7RgtGB0YLRg9C/0LApXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40Y8g0L/QtdGA0LLQvtCz0L4g0LHRgNC10LnQutC/0L7QuNC90YLQsFxcclxcbiRjb250YWluZXJXaWR0aDogJG1heFdpZHRoQ29udGFpbmVyICsgJGNvbnRhaW5lclBhZGRpbmc7XFxyXFxuXFxyXFxuLy8g0JHRgNC10LnQui3Qv9C+0LjQvdGC0YtcXHJcXG4kcGM6IGVtKFxcclxcbiAgJGNvbnRhaW5lcldpZHRoXFxyXFxuKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0L3QtdC60L7RgtC+0YDRi9C1INC/0LvQsNC90YjQtdGC0Ysg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvCDQv9C+0LvQvtC20LXQvdC40LhcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtGLLCDQvdC10LrQvtGC0L7RgNGL0LUg0YLQtdC70LXRhNC+0L3RiyDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC8INC/0L7Qu9C+0LbQtdC90LjQuFxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90YsgTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3RiyBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INC+0YLQt9GL0LLRh9C40LLQvtGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdGCINCx0YDQtdC50LrQv9C+0LjQvdGC0L7QsiksXFxyXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQui3Qv9C+0LjQvdGC0LDQvCAo0LrQvtC90YLQtdC50L3QtdGAINC80LXQvdGP0LXRgiDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7QuNC90YLQsNC8KVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC40LUg0Lgg0L7QsdGJ0LjQtSDQv9Cw0YDQsNC80LXRgtGA0YsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgJ2Jhc2UvbnVsbCc7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC9XFxyXFxuICAubG9jayAmIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcclxcbiAgfVxcclxcbiAgLy8g0KHQsNC50YIg0LfQsNCz0YDRg9C20LXQvVxcclxcbiAgLy8gLmxvYWRlZCAmIHtcXHJcXG4gIC8vIH1cXHJcXG59XFxyXFxuLnZpc3VhbGx5LWhpZGRlbjpub3QoOmZvY3VzKTpub3QoOmFjdGl2ZSksXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXS52aXN1YWxseS1oaWRkZW4sXFxyXFxuaW5wdXRbdHlwZT0ncmFkaW8nXS52aXN1YWxseS1oaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIG1hcmdpbjogLTFweDtcXHJcXG59XFxyXFxuLy8g0J7QsdC+0LvQvtGH0LrQsCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAvLyDQn9GA0LjQttC40LzQsNC10LwgZm9vdGVyXFxyXFxuICAvLyA+IG1haW4ge1xcclxcbiAgLy8gICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIC8vIH1cXHJcXG4gIC8vIC8vINCk0LjQutGBINC00LvRjyDRgdC70LDQudC00LXRgNC+0LJcXHJcXG4gIC8vID4gKiB7XFxyXFxuICAvLyAgIG1pbi13aWR0aDogMDtcXHJcXG4gIC8vIH1cXHJcXG59XFxyXFxuLy8g0J7Qs9GA0LDQvdC40YfQuNCy0LDRjtGJ0LjQuSDQutC+0L3RgtC10LnQvdC10YAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8qXFxyXFxuKGkpINCh0YLQuNC70Lgg0LHRg9C00YPRgiDQv9GA0LjQvNC10L3Rj9GC0YzRgdGPINC60L4gXFxyXFxu0LLRgdC10Lwg0LrQu9Cw0YHRgdCw0Lwg0YHQvtC00LXRgNC20LDRidC40LwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC80LXRgCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINC4INGCLtC0LlxcclxcbtCh0L3QuNC/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG4gIC8vINCe0YLQt9GL0LLRh9C40LLQsNGPXFxyXFxuICBbY2xhc3MqPSdfX2NvbnRhaW5lciddIHtcXHJcXG4gICAgQGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKCRtYXhXaWR0aENvbnRhaW5lcik7XFxyXFxuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgQGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuICAgICAgcGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn0gQGVsc2Uge1xcclxcbiAgLy8g0J/QviDQsdGA0LXQudC6LdC/0L7QuNC90YLQsNC8XFxyXFxuICBbY2xhc3MqPSdfX2NvbnRhaW5lciddIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSgkbWF4V2lkdGhDb250YWluZXIpO1xcclxcbiAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICB9IEBlbHNlIHtcXHJcXG4gICAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSg5NzApO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjAgYW5kICRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INCx0LDQt9C+0LLRi9GFINGB0YLQuNC70LXQuSwg0YjQsNCx0LvQvtC90L7QsiAo0LfQsNCz0L7RgtC+0LLQvtC6KSDQuCDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0YUgINC60LvQsNGB0YHQvtCyXFxyXFxuLy8g0JTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8v0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvtC90LrRgNC10YLQvdGL0YUg0YHRgtC40LvQtdC5INGB0LzQvtGC0YDQuCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0ICdiYXNlJztcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0YLQuNC70LXQuSDQvtCx0YnQuNGFINGN0LvQtdC80LXQvdGC0L7QsiDQv9GA0L7QtdC60YLQsFxcclxcbkBpbXBvcnQgJ2NvbW1vbic7XFxyXFxuXFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdGC0LjQu9C10Lkg0L7RgtC00LXQu9GM0L3Ri9GFINCx0LvQvtC60L7QslxcclxcbkBpbXBvcnQgJ2hlYWRlcic7XFxyXFxuQGltcG9ydCAnZm9vdGVyJztcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0YLQuNC70LXQuSDQvtGC0LTQtdC70YzQvdGL0YUg0YHRgtGA0LDQvdC40YZcXHJcXG5AaW1wb3J0ICdtYWluJztcXHJcXG5cIixcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBpY29uO1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvaWNvbi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9pY29uLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IE11bGxlcjtcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7XFxuXFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1CbGFjay53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9NdWxsZXItQmxhY2sud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXHJcXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogTXVsbGVyO1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvTXVsbGVyLUV4dHJhQm9sZC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9NdWxsZXItRXh0cmFCb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IE11bGxlcjtcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7XFxuXFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1Cb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IE11bGxlcjtcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7XFxuXFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1MaWdodC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9NdWxsZXItTGlnaHQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXHJcXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogTXVsbGVyO1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvTXVsbGVyLU1lZGl1bS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9NdWxsZXItTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IE11bGxlcjtcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7XFxuXFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL011bGxlci1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxyXFxuXCIsXCIlaWMge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpY29uJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbltjbGFzcyo9J19pY29uLSddIHtcXHJcXG4gICY6YmVmb3JlIHtcXHJcXG4gICAgQGV4dGVuZCAlaWM7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG4vLyAuaWNvbi1sb2dvIC5wYXRoMTpiZWZvcmUge1xcclxcbi8vICAgY29udGVudDogJ1xcXFxlOTAxJztcXHJcXG4vLyAgIGNvbG9yOiByZ2IoMjMzLCA5NSwgNik7XFxyXFxuLy8gfVxcclxcbi8vIC5pY29uLWxvZ28gLnBhdGgyOmJlZm9yZSB7XFxyXFxuLy8gICBjb250ZW50OiAnXFxcXGU5MDInO1xcclxcbi8vICAgbWFyZ2luLWxlZnQ6IC0xLjQwOTE3OTY4NzVlbTtcXHJcXG4vLyAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuLy8gfVxcclxcbi8vIC5pY29uLWxvZ28gLnBhdGgzOmJlZm9yZSB7XFxyXFxuLy8gICBjb250ZW50OiAnXFxcXGU5MDMnO1xcclxcbi8vICAgbWFyZ2luLWxlZnQ6IC0xLjQwOTE3OTY4NzVlbTtcXHJcXG4vLyAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuLy8gfVxcclxcbi8vIC5pY29uLWxvZ28gLnBhdGg0OmJlZm9yZSB7XFxyXFxuLy8gICBjb250ZW50OiAnXFxcXGU5MDQnO1xcclxcbi8vICAgbWFyZ2luLWxlZnQ6IC0xLjQwOTE3OTY4NzVlbTtcXHJcXG4vLyAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuLy8gfVxcclxcbi8vIC5pY29uLWxvZ29ibGFjayAucGF0aDE6YmVmb3JlIHtcXHJcXG4vLyAgIGNvbnRlbnQ6ICdcXFxcZTkwNSc7XFxyXFxuLy8gICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbi8vIH1cXHJcXG4vLyAuaWNvbi1sb2dvYmxhY2sgLnBhdGgyOmJlZm9yZSB7XFxyXFxuLy8gICBjb250ZW50OiAnXFxcXGU5MDYnO1xcclxcbi8vICAgbWFyZ2luLWxlZnQ6IC0xLjQwOTE3OTY4NzVlbTtcXHJcXG4vLyAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuLy8gfVxcclxcbi8vIC5pY29uLWxvZ29ibGFjayAucGF0aDM6YmVmb3JlIHtcXHJcXG4vLyAgIGNvbnRlbnQ6ICdcXFxcZTkwOCc7XFxyXFxuLy8gICBtYXJnaW4tbGVmdDogLTEuNDA5MTc5Njg3NWVtO1xcclxcbi8vICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4vLyB9XFxyXFxuLy8gLmljb24tbG9nb2JsYWNrIC5wYXRoNDpiZWZvcmUge1xcclxcbi8vICAgY29udGVudDogJ1xcXFxlOTBiJztcXHJcXG4vLyAgIG1hcmdpbi1sZWZ0OiAtMS40MDkxNzk2ODc1ZW07XFxyXFxuLy8gICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbi8vIH1cXHJcXG4vLyAuaWNvbi1zeW1ib2w6YmVmb3JlIHtcXHJcXG4vLyAgIGNvbnRlbnQ6ICdcXFxcZTkwYyc7XFxyXFxuLy8gICBjb2xvcjogI2VmZTBkNDtcXHJcXG4vLyB9XFxyXFxuLmljb24tbG9jYXRpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcZTkwNyc7XFxyXFxufVxcclxcbi5pY29uLXBob25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXGU5MGEnO1xcclxcbn1cXHJcXG4uaWNvbi11c2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXGU5MGYnO1xcclxcbn1cXHJcXG4uaWNvbi1tYWlsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXGU5MDknO1xcclxcbiAgLy8gY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5pY29uLXdoYXRzYXBwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnXFxcXGU5MTAnO1xcclxcbn1cXHJcXG4uaWNvbi10ZWxlZ3JhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ1xcXFxlOTE3JztcXHJcXG59XFxyXFxuLmljb24tdmliZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcZTkxMyc7XFxyXFxuICAvLyBjb2xvcjogIzY2NWNhYztcXHJcXG59XFxyXFxuLmljb24tdms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcZTkwMCc7XFxyXFxuICAvLyBjb2xvcjogIzQ2ODBjMjtcXHJcXG59XFxyXFxuXCIsXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsXFxyXFxuOmFjdGl2ZSB7XFxyXFxuICAvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcbiAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0O1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XFxyXFxuICAvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuYTpsaW5rLFxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy88QlVUVE9OUyAoYS5idG4rdGFiKT5cXHJcXG4vLyDQodC90LjQv9C10YIgKEhUTUwpOiBidG5cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkNvbG9yO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzMnB4IHJnYigwLCAwLCAwLCAwLjczKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IHJlbSgxNCk7XFxyXFxuICBwYWRkaW5nOiByZW0oOCkgcmVtKDMwKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigzMiwgMjApO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UgMHM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2IoODAsIDgxLCAxMDYsIDAuOSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJib2R5OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgei1pbmRleDogMTQ5O1xcclxcbn1cXHJcXG4ucG9wdXAtc2hvdyBib2R5OjphZnRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgcGFkZGluZzogMzBweCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjhzIGVhc2UgMHM7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLnBvcHVwX3Nob3cge1xcclxcbiAgei1pbmRleDogMTUwO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcbi5wb3B1cF9zaG93IC5wb3B1cF9fY29udGVudCB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuLnBvcHVwX193cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgLy8gZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBvcHVwX19jb250ZW50IHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlIDBzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgLmxvY2sgJiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy8g0J7QsdGJ0LjQuSDRhNCw0LnQuyDRjdC70LXQvNC10L3RgtC+0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjy/QvtGC0LrQu9GO0YfQtdC90LjRjyDRgdGC0LjQu9C10Lkg0LrQvtC90LrRgNC10YLQvdC+0LPQviDRlNC70LXQvNC10L3RgtCwINGE0L7RgNC80Ysg0YHQvNC+0YLRgNC4IGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgJ2Jhc2UvZm9ybXMvZm9ybXMnO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0L/QvtC/0LDQv9C+0LJcXHJcXG5AaW1wb3J0ICdiYXNlL3BvcHVwJztcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9C4INGB0L/QvtC50LvQtdGA0L7Qslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0YLQsNCx0L7Qslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDQutCw0YDRglxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDQsdC70L7QutCwIFxcXCLQv9C+0LrQsNC30LDRgtGMINC10YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9C4INC00LvRjyDQv9C+0LvQvdC+0Y3QutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60LBcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60LBcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDQtNC70Y8g0L7RgtC30YvQstGH0LjQstGL0YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3QuNC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYgYyDQutCw0YDRgtC40L3QutC+0Lkg0Lgg0LrQu9Cw0YHRgdCw0LzQuClcXHJcXG4vLyDQodC90LjQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEgYyDQutCw0YDRgtC40L3QutC+0Lkg0Lgg0LrQu9Cw0YHRgdCw0LzQuClcXHJcXG5bY2xhc3MqPSctaWJnJ10ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5bY2xhc3MqPSctaWJnX2NvbnRhaW4nXSB7XFxyXFxuICBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQqNCw0LHQu9C+0L3RiyAo0LfQsNCz0L7RgtC+0LLQutC4KVxcclxcbi8vIEBleHRlbmQgJdC40LzRjyDRiNCw0LHQu9C+0L3QsDtcXHJcXG4vLyDQodC90LjQv9C/0LXRgiAoU0NTUyk6IGV4XFxyXFxuXFxyXFxuLy8g0KHRh9C10YLRh9C40Log0LTQu9GPINGB0L/QuNGB0LrQsFxcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcbiAgbGkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICBjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG4gICAgICBjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90L7QtSDQstC40LTQtdC+XFxyXFxuJXJlc3BvbnNpdmVWaWRlbyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG4gIHZpZGVvLFxcclxcbiAgaWZyYW1lLFxcclxcbiAgb2JqZWN0LFxcclxcbiAgZW1iZWQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8g0JLQuNC00LXQviDQsiDQutCw0YfQtdGB0YLQstC1INGE0L7QvdCwXFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuICB2aWRlbyxcXHJcXG4gIGlmcmFtZSxcXHJcXG4gIG9iamVjdCxcXHJcXG4gIGVtYmVkIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHotaW5kZXg6IC0xMDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4vLyDQodC10YDRi9C5INGE0LjQu9GM0YLRgFxcclxcbiVncmF5ZmlsdGVyIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG4gIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4vLyDQntGC0LzQtdC90LjRgtGMINCy0YvQtNC10LvQtdC90LjQtVxcclxcbiVub3NlbGVjdCB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLy8g0JfQtdGA0LrQsNC70YzQvdC+0LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtVxcclxcbiVtaXJyb3Ige1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG4vLyDQodC60YDRi9GC0Ywg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tnQ29sb3I7XFxyXFxuICBvcGFjaXR5OiAwLjgxO1xcclxcbiAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tnTWVudTtcXHJcXG4gIH1cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAvLyBwYWRkaW5nOiByZW0oMzUpIDAgMCAwO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKCdwYWRkaW5nLWJvdHRvbScsIDUwLCAzMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoJ3BhZGRpbmctdG9wJywgMzAsIDQwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGdhcDogcmVtKDMwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbG9nbyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19tYWlsIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3Bob25lcyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zb2NpYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAubWVudS1vcGVuICYge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgbWluLWhlaWdodDogcmVtKDUxKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbWVudSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiByZW0oMzApO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiByZW0oMzApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5sb2dvLWhlYWRlciB7XFxyXFxuICAvLyBtYXgtd2lkdGg6IHJlbSgzMjApO1xcclxcbiAgJl9fbGluayBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IHJlbSgyMDApO1xcclxcbiAgICBoZWlnaHQ6IHJlbSg3MCk7XFxyXFxuICAgIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL2ljb24vbG9nby5zdmcnKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgLy8gLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgLy8gICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9pY29uL2xvZ28tYmxhY2suc3ZnJykgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIC8vIH1cXHJcXG4gICAgLy8gQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgIC8vICAgJjpob3ZlciB7XFxyXFxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9pY29uL2xvZ28tYmxhY2suc3ZnJykgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIC8vICAgfVxcclxcbiAgICAvLyB9XFxyXFxuICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIC8vICAgd2lkdGg6IHJlbSgxODApO1xcclxcbiAgICAvLyAgIGhlaWdodDogcmVtKDYwKTtcXHJcXG4gICAgLy8gfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbC1oZWFkZXIge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgcGFkZGluZzogcmVtKDIwKSAwO1xcclxcbiAgfVxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDAgcmVtKDEwKSAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19tYWlsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFxyXFxuICAgIEBleHRlbmQgJWljO1xcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDIwKTtcXHJcXG4gICAgICBtYXJnaW46IDAgcmVtKDE1KSAwIDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZlZWRiYWNrIHtcXHJcXG4gICAgY29sb3I6ICRsaWdodENvbG9yO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMTgsIDE0KTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IHJlbSg4KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZSgnZm9udC1zaXplJywgMTIsIDE0KTtcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgIGhlaWdodDogcmVtKDIpO1xcclxcbiAgICAgIG1hcmdpbjogcmVtKDUpIDAgMCAwO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC44cyBlYXNlIDBzO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY29sb3I6ICRhY2NlbnQ7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4ucGhvbmVzLWhlYWRlciB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICB9XFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBtYXJnaW46IDAgMCByZW0oMTApIDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3Bob25lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMTgpO1xcclxcbiAgICBAZXh0ZW5kICVpYztcXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgc3BhbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBmb250LXNpemU6IHJlbSgyNSk7XFxyXFxuICAgICAgICBtYXJnaW46IDAgcmVtKDE1KSAwIDA7XFxyXFxuICAgICAgICBjb2xvcjogJGxpZ2h0Q29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jYWxsYmFjayB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoJ2ZvbnQtc2l6ZScsIDEyLCAxNik7XFxyXFxuICAgIGNvbG9yOiAkbGlnaHRDb2xvcjtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogcmVtKDgpO1xcclxcbiAgICB9XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogMDtcXHJcXG4gICAgICBoZWlnaHQ6IHJlbSgyKTtcXHJcXG4gICAgICBtYXJnaW46IHJlbSg1KSAwIDAgMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xcclxcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuOHMgZWFzZSAwcztcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNvY2lhbC1oZWFkZXIge1xcclxcbiAgei1pbmRleDogNTtcXHJcXG4gIHBhZGRpbmc6IHJlbSgyNSkgMDtcXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgIG1hcmdpbjogMCByZW0oMTUpIDAgMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIEBleHRlbmQgJWljO1xcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDM2KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkNvbG9yO1xcclxcbiAgICAgIC8vIGNvbG9yOiAkYmFja2dNZW51O1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGJhY2tnQ29sb3I7XFxyXFxuICAgICAgICAgIC8vIGNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuICAmX19ib2R5IHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHRvcDogcmVtKDEyMCk7XFxyXFxuICAgICAgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ01lbnU7XFxyXFxuICAgICAgcGFkZGluZzogcmVtKDMwKSByZW0oMTUpO1xcclxcbiAgICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZSAwcztcXHJcXG4gICAgICB6LWluZGV4OiAzO1xcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiByZW0oODApO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tnTWVudTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgLy8gcmlnaHQ6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubWVudV9fbGluayB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkbGlnaHRDb2xvcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faWNvbiB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcm93LWdhcDogNXB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoJyBjb2x1bW4tZ2FwJywgNjAsIDIwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICAgIHJvdy1nYXA6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiByZW0oMik7XFxyXFxuICAgICAgbWFyZ2luOiByZW0oNSkgMCAwIDA7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvcjtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjhzIGVhc2UgMHM7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZSgnZm9udC1zaXplJywgMjYsIDM1LCA5OTIsIDMyMCwgMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItZm9vdGVyIHtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgY29sb3I6ICRsaWdodENvbG9yO1xcclxcbiAgJl9fZmVlZGJhY2sge1xcclxcbiAgfVxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogcmVtKDEzKTtcXHJcXG4gICAgY29sb3I6ICR0ZXh0QWNjZW50O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41NTtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDIwKTtcXHJcXG4gICAgcCB7XFxyXFxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIHJlbSg1KSAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcbi5pY29uLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogcmVtKCRjb250YWluZXJQYWRkaW5nKTtcXHJcXG4gICAgcmlnaHQ6IHJlbSgkY29udGFpbmVyUGFkZGluZyk7XFxyXFxuICAgIHdpZHRoOiByZW0oMzApO1xcclxcbiAgICBoZWlnaHQ6IHJlbSgyMCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gICAgc3BhbixcXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgaGVpZ2h0OiByZW0oMik7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Q29sb3I7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICB3aWR0aDogNDUlO1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgdG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Q29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6OmJlZm9yZSxcXHJcXG4gICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodENvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBib3R0b206IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvL9Cf0L7QtNC60LvRjtGH0LXQvdC40LUg0YjRgNC40YTRgtCwXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8v0JDQtNCw0L/RgtC40LLQvdC+0LUg0YHQstC+0LnRgdGC0LLQvlxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QvtC1INGB0LLQvtC50YHRgtCy0L4gKGNsYW1wKVxcclxcbkBtaXhpbiBhZGFwdGl2ZVZhbHVlKCRwcm9wZXJ0eSwgJHN0YXJ0U2l6ZSwgJG1pblNpemUsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCwgJGtlZXBTaXplOiAwKSB7XFxyXFxuXFx0QGlmICgkc3RhcnRTaXplPT0wKSB7XFxyXFxuXFx0XFx0JHN0YXJ0U2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdEBpZiAoJG1pblNpemU9PTApIHtcXHJcXG5cXHRcXHQkbWluU2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCU0LvRjyBjYWxjKCk7XFxyXFxuXFx0JGFkZFNpemU6IG1hdGguZGl2KCRzdGFydFNpemUgLSAkbWluU2l6ZSwgMTYpO1xcclxcblxcclxcblxcdEBpZiAoJHdpZHRoRnJvbSA9PSAkY29udGFpbmVyV2lkdGggYW5kICRtYXhXaWR0aENvbnRhaW5lciA9PSAwKSB7XFxyXFxuXFx0XFx0JHdpZHRoRnJvbTogJG1heFdpZHRoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7QuNC90YLRiyDQsiBFTVxcclxcblxcdCR3aWR0aEZyb21NZWRpYTogZW0oJHdpZHRoRnJvbSk7XFxyXFxuXFx0JHdpZHRoVG9NZWRpYTogZW0oJHdpZHRoVG8pO1xcclxcblxcclxcblxcdC8vINCk0L7RgNC80YPQu9CwINC/0LvQsNCy0LDRjtGJ0LXQs9C+INC30L3QsNGH0LXQvdC40Y9cXHJcXG5cXHQvLyDQmNGB0YLQvtGH0L3QuNC6OiBodHRwczovL2Nzcy10cmlja3MuY29tL2xpbmVhcmx5LXNjYWxlLWZvbnQtc2l6ZS13aXRoLWNzcy1jbGFtcC1iYXNlZC1vbi10aGUtdmlld3BvcnQvXFxyXFxuXFx0JHNsb3BlOiBtYXRoLmRpdigoJHN0YXJ0U2l6ZSAtICRtaW5TaXplKSwgKCR3aWR0aEZyb20gLSAkd2lkdGhUbykpO1xcclxcblxcdCR5SW50ZXJzZWN0aW9uOiAtJHdpZHRoVG8gKiAkc2xvcGUgKyAkbWluU2l6ZTtcXHJcXG5cXHRAaWYgKCR5SW50ZXJzZWN0aW9uPT0wKSB7XFxyXFxuXFx0XFx0JHlJbnRlcnNlY3Rpb246IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHQkZmx5VmFsdWU6ICN7cmVtKCR5SW50ZXJzZWN0aW9uKX1cXFwiICsgXFxcIiAjeyRzbG9wZSAqIDEwMH12dztcXHJcXG5cXHJcXG5cXHQvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LfQvdCw0YfQtdC90LjRjyDRgdCy0L7QudGB0YLQstCwXFxyXFxuXFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHQvLyDQldGB0LvQuCDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQtSDQt9C90LDRh9C10L3QuNGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQldGB0LvQuCDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPIGNsYW1wKCk7XFxyXFxuXFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JXRgdC70Lgg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPIGNsYW1wKCk7XFxyXFxuXFx0QHN1cHBvcnRzIG5vdCAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdCN7JHByb3BlcnR5fTogY2FsYygje3JlbSgkbWluU2l6ZSl9ICsgI3skYWRkU2l6ZX0gKiAoMTAwdncgLSAje3JlbSgkd2lkdGhUbyl9KSAvICN7bWF0aC5kaXYoJHdpZHRoRnJvbSwgMTYpIC0gbWF0aC5kaXYoJHdpZHRoVG8sIDE2KX0pO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNGPINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXFxyXFxuXFx0QGlmICR3aWR0aEZyb20gIT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkd2lkdGhGcm9tICE9ICRtYXhXaWR0aCBhbmQgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBpbmhlcml0O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0QGlmICR3aWR0aFRvICE9ICRtaW5XaWR0aCBhbmQgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogaW5oZXJpdDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvc3RyaW5nLXJlcGxhY2UtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvc3RyaW5nLXJlcGxhY2UtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQv9C40YHQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQvtC00YPQu9C10LlcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuLi9tb2R1bGVzLmpzXCI7XHJcbi8vINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDRhNGD0L3QutGG0LjQuFxyXG5pbXBvcnQgeyBpc01vYmlsZSwgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSwgRkxTIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQnNC+0LTRg9C70Ywg0L/RgNC+0LrRgNGD0YLQutC4INC6INCx0LvQvtC60YNcclxuaW1wb3J0IHsgZ290b0Jsb2NrIH0gZnJvbSBcIi4uL3Njcm9sbC9nb3RvYmxvY2suanNcIjtcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sXHJcbiovXHJcblxyXG4vLyDQoNCw0LHQvtGC0LAg0YEg0L/QvtC70Y/QvNC4INGE0L7RgNC80YsuINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQvtCyLCDRgNCw0LHQvtGC0LAg0YEgcGxhY2Vob2xkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1GaWVsZHNJbml0KG9wdGlvbnMgPSB7IHZpZXdQYXNzOiBmYWxzZSB9KSB7XHJcblx0Ly8g0JXRgdC70Lgg0LLQutC70Y7Rh9C10L3Qviwg0LTQvtCx0LDQstC70Y/QtdC8INGE0YPQvdC60YbQuNC+0L3QsNC7IFwi0YHQutGA0YvRgtGMINC/0LvQtdC50YHRhdC+0LTQu9C10YAg0L/RgNC4INGE0L7QutGD0YHQtVwiXHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3BsYWNlaG9sZGVyXSx0ZXh0YXJlYVtwbGFjZWhvbGRlcl0nKTtcclxuXHRpZiAoZm9ybUZpZWxkcy5sZW5ndGgpIHtcclxuXHRcdGZvcm1GaWVsZHMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xyXG5cdFx0XHRpZiAoIWZvcm1GaWVsZC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGxhY2Vob2xkZXItbm9oaWRlJykpIHtcclxuXHRcdFx0XHRmb3JtRmllbGQuZGF0YXNldC5wbGFjZWhvbGRlciA9IGZvcm1GaWVsZC5wbGFjZWhvbGRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHRcdGlmICgodGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnIHx8IHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykpIHtcclxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuZGF0YXNldC5wbGFjZWhvbGRlcikge1xyXG5cdFx0XHRcdHRhcmdldEVsZW1lbnQucGxhY2Vob2xkZXIgPSAnJztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW5vLWZvY3VzLWNsYXNzZXMnKSkge1xyXG5cdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZm9jdXMnKTtcclxuXHRcdFx0XHR0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZm9jdXMnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3JtVmFsaWRhdGUucmVtb3ZlRXJyb3IodGFyZ2V0RWxlbWVudCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHRcdGlmICgodGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnIHx8IHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykpIHtcclxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuZGF0YXNldC5wbGFjZWhvbGRlcikge1xyXG5cdFx0XHRcdHRhcmdldEVsZW1lbnQucGxhY2Vob2xkZXIgPSB0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1mb2N1cy1jbGFzc2VzJykpIHtcclxuXHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XHJcblx0XHRcdFx0dGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g0JzQvtC80LXQvdGC0LDQu9GM0L3QsNGPINCy0LDQu9C40LTQsNGG0LjRj1xyXG5cdFx0XHRpZiAodGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xyXG5cdFx0XHRcdGZvcm1WYWxpZGF0ZS52YWxpZGF0ZUlucHV0KHRhcmdldEVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vINCV0YHQu9C4INCy0LrQu9GO0YfQtdC90L4sINC00L7QsdCw0LLQu9GP0LXQvCDRhNGD0L3QutGG0LjQvtC90LDQuyBcItCf0L7QutCw0LfQsNGC0Ywg0L/QsNGA0L7Qu9GMXCJcclxuXHRpZiAob3B0aW9ucy52aWV3UGFzcykge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcblx0XHRcdGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tjbGFzcyo9XCJfX3ZpZXdwYXNzXCJdJykpIHtcclxuXHRcdFx0XHRsZXQgaW5wdXRUeXBlID0gdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ192aWV3cGFzcy1hY3RpdmUnKSA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwiO1xyXG5cdFx0XHRcdHRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRUeXBlKTtcclxuXHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ192aWV3cGFzcy1hY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbi8vINCS0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvFxyXG5leHBvcnQgbGV0IGZvcm1WYWxpZGF0ZSA9IHtcclxuXHRnZXRFcnJvcnMoZm9ybSkge1xyXG5cdFx0bGV0IGVycm9yID0gMDtcclxuXHRcdGxldCBmb3JtUmVxdWlyZWRJdGVtcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLXJlcXVpcmVkXScpO1xyXG5cdFx0aWYgKGZvcm1SZXF1aXJlZEl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRmb3JtUmVxdWlyZWRJdGVtcy5mb3JFYWNoKGZvcm1SZXF1aXJlZEl0ZW0gPT4ge1xyXG5cdFx0XHRcdGlmICgoZm9ybVJlcXVpcmVkSXRlbS5vZmZzZXRQYXJlbnQgIT09IG51bGwgfHwgZm9ybVJlcXVpcmVkSXRlbS50YWdOYW1lID09PSBcIlNFTEVDVFwiKSAmJiAhZm9ybVJlcXVpcmVkSXRlbS5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdFx0ZXJyb3IgKz0gdGhpcy52YWxpZGF0ZUlucHV0KGZvcm1SZXF1aXJlZEl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZXJyb3I7XHJcblx0fSxcclxuXHR2YWxpZGF0ZUlucHV0KGZvcm1SZXF1aXJlZEl0ZW0pIHtcclxuXHRcdGxldCBlcnJvciA9IDA7XHJcblx0XHRpZiAoZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LnJlcXVpcmVkID09PSBcImVtYWlsXCIpIHtcclxuXHRcdFx0Zm9ybVJlcXVpcmVkSXRlbS52YWx1ZSA9IGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUucmVwbGFjZShcIiBcIiwgXCJcIik7XHJcblx0XHRcdGlmICh0aGlzLmVtYWlsVGVzdChmb3JtUmVxdWlyZWRJdGVtKSkge1xyXG5cdFx0XHRcdHRoaXMuYWRkRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XHJcblx0XHRcdFx0ZXJyb3IrKztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGZvcm1SZXF1aXJlZEl0ZW0udHlwZSA9PT0gXCJjaGVja2JveFwiICYmICFmb3JtUmVxdWlyZWRJdGVtLmNoZWNrZWQpIHtcclxuXHRcdFx0dGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcclxuXHRcdFx0ZXJyb3IrKztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghZm9ybVJlcXVpcmVkSXRlbS52YWx1ZS50cmltKCkpIHtcclxuXHRcdFx0XHR0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xyXG5cdFx0XHRcdGVycm9yKys7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVycm9yO1xyXG5cdH0sXHJcblx0YWRkRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSkge1xyXG5cdFx0Zm9ybVJlcXVpcmVkSXRlbS5jbGFzc0xpc3QuYWRkKCdfZm9ybS1lcnJvcicpO1xyXG5cdFx0Zm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19mb3JtLWVycm9yJyk7XHJcblx0XHRsZXQgaW5wdXRFcnJvciA9IGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZXJyb3InKTtcclxuXHRcdGlmIChpbnB1dEVycm9yKSBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5wdXRFcnJvcik7XHJcblx0XHRpZiAoZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yKSB7XHJcblx0XHRcdGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8ZGl2IGNsYXNzPVwiZm9ybV9fZXJyb3JcIj4ke2Zvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5lcnJvcn08L2Rpdj5gKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pIHtcclxuXHRcdGZvcm1SZXF1aXJlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZXJyb3InKTtcclxuXHRcdGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1lcnJvcicpO1xyXG5cdFx0aWYgKGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZXJyb3InKSkge1xyXG5cdFx0XHRmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19lcnJvcicpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGZvcm1DbGVhbihmb3JtKSB7XHJcblx0XHRmb3JtLnJlc2V0KCk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0bGV0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsdGV4dGFyZWEnKTtcclxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGlucHV0c1tpbmRleF07XHJcblx0XHRcdFx0ZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xyXG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XHJcblx0XHRcdFx0Zm9ybVZhbGlkYXRlLnJlbW92ZUVycm9yKGVsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY2hlY2tib3hlcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X19pbnB1dCcpO1xyXG5cdFx0XHRpZiAoY2hlY2tib3hlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjaGVja2JveCA9IGNoZWNrYm94ZXNbaW5kZXhdO1xyXG5cdFx0XHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZmxzTW9kdWxlcy5zZWxlY3QpIHtcclxuXHRcdFx0XHRsZXQgc2VsZWN0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG5cdFx0XHRcdGlmIChzZWxlY3RzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlbGVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdCA9IHNlbGVjdHNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cdFx0XHRcdFx0XHRmbHNNb2R1bGVzLnNlbGVjdC5zZWxlY3RCdWlsZChzZWxlY3QpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSwgMCk7XHJcblx0fSxcclxuXHRlbWFpbFRlc3QoZm9ybVJlcXVpcmVkSXRlbSkge1xyXG5cdFx0cmV0dXJuICEvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsOH0pKyQvLnRlc3QoZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSk7XHJcblx0fVxyXG59XHJcbi8qINCe0YLQv9GA0LDQstC60LAg0YTQvtGA0LwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXQob3B0aW9ucyA9IHsgdmFsaWRhdGU6IHRydWUgfSkge1xyXG5cdGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuZm9ybXM7XHJcblx0aWYgKGZvcm1zLmxlbmd0aCkge1xyXG5cdFx0Zm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRjb25zdCBmb3JtID0gZS50YXJnZXQ7XHJcblx0XHRcdFx0Zm9ybVN1Ym1pdEFjdGlvbihmb3JtLCBlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcclxuXHRcdFx0XHRmb3JtVmFsaWRhdGUuZm9ybUNsZWFuKGZvcm0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0YXN5bmMgZnVuY3Rpb24gZm9ybVN1Ym1pdEFjdGlvbihmb3JtLCBlKSB7XHJcblx0XHRjb25zdCBlcnJvciA9ICFmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1uby12YWxpZGF0ZScpID8gZm9ybVZhbGlkYXRlLmdldEVycm9ycyhmb3JtKSA6IDA7XHJcblx0XHRpZiAoZXJyb3IgPT09IDApIHtcclxuXHRcdFx0Y29uc3QgYWpheCA9IGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLWFqYXgnKTtcclxuXHRcdFx0aWYgKGFqYXgpIHsgLy8g0JXRgdC70Lgg0YDQtdC20LjQvCBhamF4XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1BY3Rpb24gPSBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykgPyBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykudHJpbSgpIDogJyMnO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1NZXRob2QgPSBmb3JtLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykgPyBmb3JtLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykudHJpbSgpIDogJ0dFVCc7XHJcblx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnX3NlbmRpbmcnKTtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm1BY3Rpb24sIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogZm9ybU1ldGhvZCxcclxuXHRcdFx0XHRcdGJvZHk6IGZvcm1EYXRhXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdFx0XHRsZXQgcmVzcG9uc2VSZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZW5kaW5nJyk7XHJcblx0XHRcdFx0XHRmb3JtU2VudChmb3JtLCByZXNwb25zZVJlc3VsdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFsZXJ0KFwi0J7RiNC40LHQutCwXCIpO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VuZGluZycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1kZXYnKSkge1x0Ly8g0JXRgdC70Lgg0YDQtdC20LjQvCDRgNCw0LfRgNCw0LHQvtGC0LrQuFxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRmb3JtU2VudChmb3JtKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCBmb3JtRXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5fZm9ybS1lcnJvcicpO1xyXG5cdFx0XHRpZiAoZm9ybUVycm9yICYmIGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLWdvdG8tZXJyb3InKSkge1xyXG5cdFx0XHRcdGdvdG9CbG9jayhmb3JtRXJyb3IsIHRydWUsIDEwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCU0LXQudGB0YLQstC40Y8g0L/QvtGB0LvQtSDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80YtcclxuXHRmdW5jdGlvbiBmb3JtU2VudChmb3JtLCByZXNwb25zZVJlc3VsdCA9IGBgKSB7XHJcblx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdC+0LHRi9GC0LjQtSDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80YtcclxuXHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZm9ybVNlbnRcIiwge1xyXG5cdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRmb3JtOiBmb3JtXHJcblx0XHRcdH1cclxuXHRcdH0pKTtcclxuXHRcdC8vINCf0L7QutCw0LfRi9Cy0LDQtdC8INC/0L7Qv9Cw0L8sINC10YHQu9C4INC/0L7QtNC60LvRjtGH0LXQvSDQvNC+0LTRg9C70Ywg0L/QvtC/0LDQv9C+0LIgXHJcblx0XHQvLyDQuCDQtNC70Y8g0YTQvtGA0LzRiyDRg9C60LDQt9Cw0L3QsCDQvdCw0YHRgtGA0L7QudC60LBcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRpZiAoZmxzTW9kdWxlcy5wb3B1cCkge1xyXG5cdFx0XHRcdGNvbnN0IHBvcHVwID0gZm9ybS5kYXRhc2V0LnBvcHVwTWVzc2FnZTtcclxuXHRcdFx0XHRwb3B1cCA/IGZsc01vZHVsZXMucG9wdXAub3Blbihwb3B1cCkgOiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAwKTtcclxuXHRcdC8vINCe0YfQuNGJ0LDQtdC8INGE0L7RgNC80YNcclxuXHRcdGZvcm1WYWxpZGF0ZS5mb3JtQ2xlYW4oZm9ybSk7XHJcblx0XHQvLyDQodC+0L7QsdGJ0LDQtdC8INCyINC60L7QvdGB0L7Qu9GMXHJcblx0XHRmb3JtTG9nZ2luZyhg0KTQvtGA0LzQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCFgKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gZm9ybUxvZ2dpbmcobWVzc2FnZSkge1xyXG5cdFx0RkxTKGBb0KTQvtGA0LzRi106ICR7bWVzc2FnZX1gKTtcclxuXHR9XHJcbn1cclxuLyog0JzQvtC00YPRjCDRhNC+0YDQvNGLIFwi0LrQvtC70LvQuNGH0LXRgdGC0LLQvlwiICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtUXVhbnRpdHkoKSB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLnF1YW50aXR5X19idXR0b24nKSkge1xyXG5cdFx0XHRsZXQgdmFsdWUgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5xdWFudGl0eScpLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUpO1xyXG5cdFx0XHRpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3F1YW50aXR5X19idXR0b25fcGx1cycpKSB7XHJcblx0XHRcdFx0dmFsdWUrKztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQtLXZhbHVlO1xyXG5cdFx0XHRcdGlmICh2YWx1ZSA8IDEpIHZhbHVlID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5xdWFudGl0eScpLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vKiDQnNC+0LTRg9GMINC30LLQtdC30LTQvdC+0LPQviDRgNC10LnRgtC40L3Qs9CwICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtUmF0aW5nKCkge1xyXG5cdGNvbnN0IHJhdGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0aW5nJyk7XHJcblx0aWYgKHJhdGluZ3MubGVuZ3RoID4gMCkge1xyXG5cdFx0aW5pdFJhdGluZ3MoKTtcclxuXHR9XHJcblx0Ly8g0J7RgdC90L7QstC90LDRjyDRhNGD0L3QutGG0LjRj1xyXG5cdGZ1bmN0aW9uIGluaXRSYXRpbmdzKCkge1xyXG5cdFx0bGV0IHJhdGluZ0FjdGl2ZSwgcmF0aW5nVmFsdWU7XHJcblx0XHQvLyBcItCR0LXQs9Cw0LXQvFwiINC/0L4g0LLRgdC10Lwg0YDQtdC50YLQuNC90LPQsNC8INC90LAg0YHRgtGA0LDQvdC40YbQtVxyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJhdGluZ3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IHJhdGluZyA9IHJhdGluZ3NbaW5kZXhdO1xyXG5cdFx0XHRpbml0UmF0aW5nKHJhdGluZyk7XHJcblx0XHR9XHJcblx0XHQvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60L7QvdC60YDQtdGC0L3Ri9C5INGA0LXQudGC0LjQvdCzXHJcblx0XHRmdW5jdGlvbiBpbml0UmF0aW5nKHJhdGluZykge1xyXG5cdFx0XHRpbml0UmF0aW5nVmFycyhyYXRpbmcpO1xyXG5cclxuXHRcdFx0c2V0UmF0aW5nQWN0aXZlV2lkdGgoKTtcclxuXHJcblx0XHRcdGlmIChyYXRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdyYXRpbmdfc2V0JykpIHtcclxuXHRcdFx0XHRzZXRSYXRpbmcocmF0aW5nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8g0JjQvdC40YbQuNCw0LvQuNC30LDQudGG0LjRjyDQv9C10YDQtdC80LXQvdC90YvRhVxyXG5cdFx0ZnVuY3Rpb24gaW5pdFJhdGluZ1ZhcnMocmF0aW5nKSB7XHJcblx0XHRcdHJhdGluZ0FjdGl2ZSA9IHJhdGluZy5xdWVyeVNlbGVjdG9yKCcucmF0aW5nX19hY3RpdmUnKTtcclxuXHRcdFx0cmF0aW5nVmFsdWUgPSByYXRpbmcucXVlcnlTZWxlY3RvcignLnJhdGluZ19fdmFsdWUnKTtcclxuXHRcdH1cclxuXHRcdC8vINCY0LfQvNC10L3Rj9C10Lwg0YjQuNGA0LjQvdGDINCw0LrRgtC40LLQvdGL0YUg0LfQstC10LfQtFxyXG5cdFx0ZnVuY3Rpb24gc2V0UmF0aW5nQWN0aXZlV2lkdGgoaW5kZXggPSByYXRpbmdWYWx1ZS5pbm5lckhUTUwpIHtcclxuXHRcdFx0Y29uc3QgcmF0aW5nQWN0aXZlV2lkdGggPSBpbmRleCAvIDAuMDU7XHJcblx0XHRcdHJhdGluZ0FjdGl2ZS5zdHlsZS53aWR0aCA9IGAke3JhdGluZ0FjdGl2ZVdpZHRofSVgO1xyXG5cdFx0fVxyXG5cdFx0Ly8g0JLQvtC30LzQvtC20L3QvtGB0YLRjCDRg9C60LDQt9Cw0YLRjCDQvtGG0LXQvdC60YMgXHJcblx0XHRmdW5jdGlvbiBzZXRSYXRpbmcocmF0aW5nKSB7XHJcblx0XHRcdGNvbnN0IHJhdGluZ0l0ZW1zID0gcmF0aW5nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYXRpbmdfX2l0ZW0nKTtcclxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJhdGluZ0l0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRcdGNvbnN0IHJhdGluZ0l0ZW0gPSByYXRpbmdJdGVtc1tpbmRleF07XHJcblx0XHRcdFx0cmF0aW5nSXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0Ly8g0J7QsdC90L7QstC70LXQvdC40LUg0L/QtdGA0LXQvNC10L3QvdGL0YVcclxuXHRcdFx0XHRcdGluaXRSYXRpbmdWYXJzKHJhdGluZyk7XHJcblx0XHRcdFx0XHQvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQsNC60YLQuNCy0L3Ri9GFINC30LLQtdC30LRcclxuXHRcdFx0XHRcdHNldFJhdGluZ0FjdGl2ZVdpZHRoKHJhdGluZ0l0ZW0udmFsdWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJhdGluZ0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdC8vINCe0LHQvdC+0LLQu9C10L3QuNC1INCw0LrRgtC40LLQvdGL0YUg0LfQstC10LfQtFxyXG5cdFx0XHRcdFx0c2V0UmF0aW5nQWN0aXZlV2lkdGgoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyYXRpbmdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0Ly8g0J7QsdC90L7QstC70LXQvdC40LUg0L/QtdGA0LXQvNC10L3QvdGL0YVcclxuXHRcdFx0XHRcdGluaXRSYXRpbmdWYXJzKHJhdGluZyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJhdGluZy5kYXRhc2V0LmFqYXgpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXCLQntGC0L/RgNCw0LLQuNGC0YxcIiDQvdCwINGB0LXRgNCy0LXRgFxyXG5cdFx0XHRcdFx0XHRzZXRSYXRpbmdWYWx1ZShyYXRpbmdJdGVtLnZhbHVlLCByYXRpbmcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g0J7RgtC+0LHRgNCw0LfQuNGC0Ywg0YPQutCw0LfQsNC90L3Rg9GOINC+0YbQvdC60YNcclxuXHRcdFx0XHRcdFx0cmF0aW5nVmFsdWUuaW5uZXJIVE1MID0gaW5kZXggKyAxO1xyXG5cdFx0XHRcdFx0XHRzZXRSYXRpbmdBY3RpdmVXaWR0aCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRhc3luYyBmdW5jdGlvbiBzZXRSYXRpbmdWYWx1ZSh2YWx1ZSwgcmF0aW5nKSB7XHJcblx0XHRcdGlmICghcmF0aW5nLmNsYXNzTGlzdC5jb250YWlucygncmF0aW5nX3NlbmRpbmcnKSkge1xyXG5cdFx0XHRcdHJhdGluZy5jbGFzc0xpc3QuYWRkKCdyYXRpbmdfc2VuZGluZycpO1xyXG5cclxuXHRcdFx0XHQvLyDQntGC0L/RgNCw0LLQuNC60LAg0LTQsNC90L3Ri9GFICh2YWx1ZSkg0L3QsCDRgdC10YDQstC10YBcclxuXHRcdFx0XHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgncmF0aW5nLmpzb24nLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cclxuXHRcdFx0XHRcdC8vYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFx0Ly9cdHVzZXJSYXRpbmc6IHZhbHVlXHJcblx0XHRcdFx0XHQvL30pLFxyXG5cdFx0XHRcdFx0Ly9oZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQvL1x0J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHRcdFx0Ly99XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdFx0XHRcdC8vINCf0L7Qu9GD0YfQsNC10Lwg0L3QvtCy0YvQuSDRgNC10LnRgtC40L3Qs1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3UmF0aW5nID0gcmVzdWx0Lm5ld1JhdGluZztcclxuXHJcblx0XHRcdFx0XHQvLyDQktGL0LLQvtC0INC90L7QstC+0LPQviDRgdGA0LXQtNC90LXQs9C+INGA0LXQt9GD0LvRjNGC0LDRgtCwXHJcblx0XHRcdFx0XHRyYXRpbmdWYWx1ZS5pbm5lckhUTUwgPSBuZXdSYXRpbmc7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0J7QsdC90L7QstC70LXQvdC40LUg0LDQutGC0LjQstC90YvRhSDQt9Cy0LXQt9C0XHJcblx0XHRcdFx0XHRzZXRSYXRpbmdBY3RpdmVXaWR0aCgpO1xyXG5cclxuXHRcdFx0XHRcdHJhdGluZy5jbGFzc0xpc3QucmVtb3ZlKCdyYXRpbmdfc2VuZGluZycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbGVydChcItCe0YjQuNCx0LrQsFwiKTtcclxuXHJcblx0XHRcdFx0XHRyYXRpbmcuY2xhc3NMaXN0LnJlbW92ZSgncmF0aW5nX3NlbmRpbmcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQsNC60YLQuNCy0L3Ri9GFINC80L7QtNGD0LvQtdC5XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzLmpzXCI7XHJcblxyXG4vKiDQn9GA0L7QstC10YDQutCwINC/0L7QtNC00LXRgNC20LrQuCB3ZWJwLCDQtNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0LAgd2VicCDQuNC70Lggbm8td2VicCDQtNC70Y8gSFRNTCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNXZWJwKCkge1xyXG5cdC8vINCf0YDQvtCy0LXRgNC60LAg0L/QvtC00LTQtdGA0LbQutC4IHdlYnBcclxuXHRmdW5jdGlvbiB0ZXN0V2ViUChjYWxsYmFjaykge1xyXG5cdFx0bGV0IHdlYlAgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHdlYlAub25sb2FkID0gd2ViUC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjYWxsYmFjayh3ZWJQLmhlaWdodCA9PSAyKTtcclxuXHRcdH07XHJcblx0XHR3ZWJQLnNyYyA9IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmpvQUFBQlhSVUpRVmxBNElDNEFBQUN5QWdDZEFTb0NBQUlBTG1rMG1rMGlJaUlpSWdCb1N5Z0FCYzZXV2dBQS92ZWZmLzBQUDhiQS8vTHdZQUFBXCI7XHJcblx0fVxyXG5cdC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQsCBfd2VicCDQuNC70LggX25vLXdlYnAg0LTQu9GPIEhUTUxcclxuXHR0ZXN0V2ViUChmdW5jdGlvbiAoc3VwcG9ydCkge1xyXG5cdFx0bGV0IGNsYXNzTmFtZSA9IHN1cHBvcnQgPT09IHRydWUgPyAnd2VicCcgOiAnbm8td2VicCc7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cdH0pO1xyXG59XHJcbi8qINCf0YDQvtCy0LXRgNC60LAg0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LHRgNCw0YPQt9C10YDQsCAqL1xyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0geyBBbmRyb2lkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpOyB9LCBCbGFja0JlcnJ5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpOyB9LCBpT1M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7IH0sIE9wZXJhOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW5pL2kpOyB9LCBXaW5kb3dzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTsgfSwgYW55OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7IH0gfTtcclxuLyog0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwIHRvdWNoINC00LvRjyBIVE1MINC10YHQu9C4INCx0YDQsNGD0LfQtdGAINC80L7QsdC40LvRjNC90YvQuSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG91Y2hDbGFzcygpIHtcclxuXHQvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0LAgX3RvdWNoINC00LvRjyBIVE1MINC10YHQu9C4INCx0YDQsNGD0LfQtdGAINC80L7QsdC40LvRjNC90YvQuVxyXG5cdGlmIChpc01vYmlsZS5hbnkoKSkgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvdWNoJyk7XHJcbn1cclxuLy8g0JTQvtCx0LDQstC70LXQvdC40LUgbG9hZGVkINC00LvRjyBIVE1MINC/0L7RgdC70LUg0L/QvtC70L3QvtC5INC30LDQs9GA0YPQt9C60Lgg0YHRgtGA0LDQvdC40YbRi1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9hZGVkQ2xhc3MoKSB7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XHJcblx0XHR9LCAwKTtcclxuXHR9KTtcclxufVxyXG4vLyDQn9C+0LvRg9GH0LXQvdC40LUg0YXQtdGI0LAg0LIg0LDQtNGA0LXRgdC1INGB0LDQudGC0LBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhc2goKSB7XHJcblx0aWYgKGxvY2F0aW9uLmhhc2gpIHsgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTsgfVxyXG59XHJcbi8vINCj0LrQsNC30LDQvdC40LUg0YXQtdGI0LAg0LIg0LDQtNGA0LXRgdC1INGB0LDQudGC0LBcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEhhc2goaGFzaCkge1xyXG5cdGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcblx0aGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcclxufVxyXG4vLyDQo9GH0LXRgiDQv9C70LDQstCw0Y7RidC10Lkg0L/QsNC90LXQu9C4INC90LAg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQstCw0YUg0L/RgNC4IDEwMHZoXHJcbmV4cG9ydCBmdW5jdGlvbiBmdWxsVkhmaXgoKSB7XHJcblx0Y29uc3QgZnVsbFNjcmVlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mdWxsc2NyZWVuXScpO1xyXG5cdGlmIChmdWxsU2NyZWVucy5sZW5ndGggJiYgaXNNb2JpbGUuYW55KCkpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhIZWlnaHQpO1xyXG5cdFx0ZnVuY3Rpb24gZml4SGVpZ2h0KCkge1xyXG5cdFx0XHRsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xyXG5cdFx0fVxyXG5cdFx0Zml4SGVpZ2h0KCk7XHJcblx0fVxyXG59XHJcbi8vINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDQvNC+0LTRg9C70Lgg0L/Qu9Cw0LLQvdC+0LPQviDRgNCw0YHRgdC60YDRi9GC0LjRjyDQuCDQt9Cw0LrRgNGL0YLQuNGPINC+0LHRitC10LrRgtCwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGxldCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuXHRpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XHJcblx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XHJcblx0XHR0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuXHRcdHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XHJcblx0XHR0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0dGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1weGAgOiBgMHB4YDtcclxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcblx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdCFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG5cdFx0XHR0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG5cdFx0XHQhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xyXG5cdFx0XHR0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuXHRcdFx0Ly8g0KHQvtC30LTQsNC10Lwg0YHQvtCx0YvRgtC40LUgXHJcblx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2xpZGVVcERvbmVcIiwge1xyXG5cdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiB0YXJnZXRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pKTtcclxuXHRcdH0sIGR1cmF0aW9uKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGxldCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG5cdGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuXHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuXHRcdHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsO1xyXG5cdFx0c2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuXHRcdGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0dGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1weGAgOiBgMHB4YDtcclxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcblx0XHR0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0dGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuXHRcdHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuXHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuXHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuXHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcblx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcblx0XHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0L7QsdGL0YLQuNC1IFxyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNsaWRlRG93bkRvbmVcIiwge1xyXG5cdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiB0YXJnZXRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pKTtcclxuXHRcdH0sIGR1cmF0aW9uKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGxldCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG5cdGlmICh0YXJnZXQuaGlkZGVuKSB7XHJcblx0XHRyZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG5cdH1cclxufVxyXG4vLyDQktGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0LUg0LzQvtC00YPQu9C4INCx0LvQvtC60LjRgNC+0LLQutC4INC/0YDQvtC60YDRg9GC0LrQuCDQuCDRgdC60L7Rh9C60LAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG5leHBvcnQgbGV0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcblx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xyXG5cdFx0Ym9keVVubG9jayhkZWxheSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGJvZHlMb2NrKGRlbGF5KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGxldCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcblx0bGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHRpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuXHRcdGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbHBdXCIpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2NrX3BhZGRpbmcubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0Y29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdO1xyXG5cdFx0XHRcdGVsLnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHRcdGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Ym9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG5cdFx0fSwgZGVsYXkpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgbGV0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcblx0bGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHRpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuXHRcdGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbHBdXCIpO1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdO1xyXG5cdFx0XHRlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0fVxyXG5cdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpO1xyXG5cclxuXHRcdGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Ym9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG5cdFx0fSwgZGVsYXkpO1xyXG5cdH1cclxufVxyXG4vLyDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGB0L4g0YHQv9C+0LnQu9C10YDQsNC80LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtc3BvamxlcnkuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHNwb2xsZXJzXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcG9sbGVycygpIHtcclxuXHRjb25zdCBzcG9sbGVyc0FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3BvbGxlcnNdJyk7XHJcblx0aWYgKHNwb2xsZXJzQXJyYXkubGVuZ3RoID4gMCkge1xyXG5cdFx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INC+0LHRi9GH0L3Ri9GFINGB0LvQvtC50LvQtdGA0L7QslxyXG5cdFx0Y29uc3Qgc3BvbGxlcnNSZWd1bGFyID0gQXJyYXkuZnJvbShzcG9sbGVyc0FycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcblx0XHRcdHJldHVybiAhaXRlbS5kYXRhc2V0LnNwb2xsZXJzLnNwbGl0KFwiLFwiKVswXTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGL0YfQvdGL0YUg0YHQu9C+0LnQu9C10YDQvtCyXHJcblx0XHRpZiAoc3BvbGxlcnNSZWd1bGFyLmxlbmd0aCkge1xyXG5cdFx0XHRpbml0U3BvbGxlcnMoc3BvbGxlcnNSZWd1bGFyKTtcclxuXHRcdH1cclxuXHRcdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC70L7QudC70LXRgNC+0LIg0YEg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNC80LhcclxuXHRcdGxldCBtZFF1ZXJpZXNBcnJheSA9IGRhdGFNZWRpYVF1ZXJpZXMoc3BvbGxlcnNBcnJheSwgXCJzcG9sbGVyc1wiKTtcclxuXHRcdGlmIChtZFF1ZXJpZXNBcnJheSAmJiBtZFF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcclxuXHRcdFx0bWRRdWVyaWVzQXJyYXkuZm9yRWFjaChtZFF1ZXJpZXNJdGVtID0+IHtcclxuXHRcdFx0XHQvLyDQodC+0LHRi9GC0LjQtVxyXG5cdFx0XHRcdG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGluaXRTcG9sbGVycyhtZFF1ZXJpZXNJdGVtLml0ZW1zQXJyYXksIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aW5pdFNwb2xsZXJzKG1kUXVlcmllc0l0ZW0uaXRlbXNBcnJheSwgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHQvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xyXG5cdFx0ZnVuY3Rpb24gaW5pdFNwb2xsZXJzKHNwb2xsZXJzQXJyYXksIG1hdGNoTWVkaWEgPSBmYWxzZSkge1xyXG5cdFx0XHRzcG9sbGVyc0FycmF5LmZvckVhY2goc3BvbGxlcnNCbG9jayA9PiB7XHJcblx0XHRcdFx0c3BvbGxlcnNCbG9jayA9IG1hdGNoTWVkaWEgPyBzcG9sbGVyc0Jsb2NrLml0ZW0gOiBzcG9sbGVyc0Jsb2NrO1xyXG5cdFx0XHRcdGlmIChtYXRjaE1lZGlhLm1hdGNoZXMgfHwgIW1hdGNoTWVkaWEpIHtcclxuXHRcdFx0XHRcdHNwb2xsZXJzQmxvY2suY2xhc3NMaXN0LmFkZCgnX3Nwb2xsZXItaW5pdCcpO1xyXG5cdFx0XHRcdFx0aW5pdFNwb2xsZXJCb2R5KHNwb2xsZXJzQmxvY2spO1xyXG5cdFx0XHRcdFx0c3BvbGxlcnNCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V0U3BvbGxlckFjdGlvbik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNwb2xsZXJzQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnX3Nwb2xsZXItaW5pdCcpO1xyXG5cdFx0XHRcdFx0aW5pdFNwb2xsZXJCb2R5KHNwb2xsZXJzQmxvY2ssIGZhbHNlKTtcclxuXHRcdFx0XHRcdHNwb2xsZXJzQmxvY2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldFNwb2xsZXJBY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHQvLyDQoNCw0LHQvtGC0LAg0YEg0LrQvtC90YLQtdC90YLQvtC8XHJcblx0XHRmdW5jdGlvbiBpbml0U3BvbGxlckJvZHkoc3BvbGxlcnNCbG9jaywgaGlkZVNwb2xsZXJCb2R5ID0gdHJ1ZSkge1xyXG5cdFx0XHRsZXQgc3BvbGxlclRpdGxlcyA9IHNwb2xsZXJzQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3BvbGxlcl0nKTtcclxuXHRcdFx0aWYgKHNwb2xsZXJUaXRsZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0c3BvbGxlclRpdGxlcyA9IEFycmF5LmZyb20oc3BvbGxlclRpdGxlcykuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbG9zZXN0KCdbZGF0YS1zcG9sbGVyc10nKSA9PT0gc3BvbGxlcnNCbG9jayk7XHJcblx0XHRcdFx0c3BvbGxlclRpdGxlcy5mb3JFYWNoKHNwb2xsZXJUaXRsZSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoaGlkZVNwb2xsZXJCb2R5KSB7XHJcblx0XHRcdFx0XHRcdHNwb2xsZXJUaXRsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XHJcblx0XHRcdFx0XHRcdGlmICghc3BvbGxlclRpdGxlLmNsYXNzTGlzdC5jb250YWlucygnX3Nwb2xsZXItYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdFx0XHRzcG9sbGVyVGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNwb2xsZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcblx0XHRcdFx0XHRcdHNwb2xsZXJUaXRsZS5uZXh0RWxlbWVudFNpYmxpbmcuaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIHNldFNwb2xsZXJBY3Rpb24oZSkge1xyXG5cdFx0XHRjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG5cdFx0XHRpZiAoZWwuY2xvc2VzdCgnW2RhdGEtc3BvbGxlcl0nKSkge1xyXG5cdFx0XHRcdGNvbnN0IHNwb2xsZXJUaXRsZSA9IGVsLmNsb3Nlc3QoJ1tkYXRhLXNwb2xsZXJdJyk7XHJcblx0XHRcdFx0Y29uc3Qgc3BvbGxlcnNCbG9jayA9IHNwb2xsZXJUaXRsZS5jbG9zZXN0KCdbZGF0YS1zcG9sbGVyc10nKTtcclxuXHRcdFx0XHRjb25zdCBvbmVTcG9sbGVyID0gc3BvbGxlcnNCbG9jay5oYXNBdHRyaWJ1dGUoJ2RhdGEtb25lLXNwb2xsZXInKTtcclxuXHRcdFx0XHRjb25zdCBzcG9sbGVyU3BlZWQgPSBzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuc3BvbGxlcnNTcGVlZCA/IHBhcnNlSW50KHNwb2xsZXJzQmxvY2suZGF0YXNldC5zcG9sbGVyc1NwZWVkKSA6IDUwMDtcclxuXHRcdFx0XHRpZiAoIXNwb2xsZXJzQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLl9zbGlkZScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0aWYgKG9uZVNwb2xsZXIgJiYgIXNwb2xsZXJUaXRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ19zcG9sbGVyLWFjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHRcdGhpZGVTcG9sbGVyc0JvZHkoc3BvbGxlcnNCbG9jayk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzcG9sbGVyVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnX3Nwb2xsZXItYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRfc2xpZGVUb2dnbGUoc3BvbGxlclRpdGxlLm5leHRFbGVtZW50U2libGluZywgc3BvbGxlclNwZWVkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBoaWRlU3BvbGxlcnNCb2R5KHNwb2xsZXJzQmxvY2spIHtcclxuXHRcdFx0Y29uc3Qgc3BvbGxlckFjdGl2ZVRpdGxlID0gc3BvbGxlcnNCbG9jay5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zcG9sbGVyXS5fc3BvbGxlci1hY3RpdmUnKTtcclxuXHRcdFx0Y29uc3Qgc3BvbGxlclNwZWVkID0gc3BvbGxlcnNCbG9jay5kYXRhc2V0LnNwb2xsZXJzU3BlZWQgPyBwYXJzZUludChzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuc3BvbGxlcnNTcGVlZCkgOiA1MDA7XHJcblx0XHRcdGlmIChzcG9sbGVyQWN0aXZlVGl0bGUgJiYgIXNwb2xsZXJzQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLl9zbGlkZScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdHNwb2xsZXJBY3RpdmVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdfc3BvbGxlci1hY3RpdmUnKTtcclxuXHRcdFx0XHRfc2xpZGVVcChzcG9sbGVyQWN0aXZlVGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLCBzcG9sbGVyU3BlZWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyDQl9Cw0LrRgNGL0YLQuNC1INC/0YDQuCDQutC70LjQutC1INCy0L3QtSDRgdC/0L7QudC70LXRgNCwXHJcblx0XHRjb25zdCBzcG9sbGVyc0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3BvbGxlci1jbG9zZV0nKTtcclxuXHRcdGlmIChzcG9sbGVyc0Nsb3NlLmxlbmd0aCkge1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG5cdFx0XHRcdGlmICghZWwuY2xvc2VzdCgnW2RhdGEtc3BvbGxlcnNdJykpIHtcclxuXHRcdFx0XHRcdHNwb2xsZXJzQ2xvc2UuZm9yRWFjaChzcG9sbGVyQ2xvc2UgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBzcG9sbGVyc0Jsb2NrID0gc3BvbGxlckNsb3NlLmNsb3Nlc3QoJ1tkYXRhLXNwb2xsZXJzXScpO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBzcG9sbGVyU3BlZWQgPSBzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuc3BvbGxlcnNTcGVlZCA/IHBhcnNlSW50KHNwb2xsZXJzQmxvY2suZGF0YXNldC5zcG9sbGVyc1NwZWVkKSA6IDUwMDtcclxuXHRcdFx0XHRcdFx0c3BvbGxlckNsb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ19zcG9sbGVyLWFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHRfc2xpZGVVcChzcG9sbGVyQ2xvc2UubmV4dEVsZW1lbnRTaWJsaW5nLCBzcG9sbGVyU3BlZWQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLy8g0JzQvtC00YPRjCDRgNCw0LHQvtGC0Ysg0YEg0YLQsNCx0LDQvNC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXRhYnkuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHRhYnNcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYnMoKSB7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYnNdJyk7XHJcblx0bGV0IHRhYnNBY3RpdmVIYXNoID0gW107XHJcblxyXG5cdGlmICh0YWJzLmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnN0IGhhc2ggPSBnZXRIYXNoKCk7XHJcblx0XHRpZiAoaGFzaCAmJiBoYXNoLnN0YXJ0c1dpdGgoJ3RhYi0nKSkge1xyXG5cdFx0XHR0YWJzQWN0aXZlSGFzaCA9IGhhc2gucmVwbGFjZSgndGFiLScsICcnKS5zcGxpdCgnLScpO1xyXG5cdFx0fVxyXG5cdFx0dGFicy5mb3JFYWNoKCh0YWJzQmxvY2ssIGluZGV4KSA9PiB7XHJcblx0XHRcdHRhYnNCbG9jay5jbGFzc0xpc3QuYWRkKCdfdGFiLWluaXQnKTtcclxuXHRcdFx0dGFic0Jsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS10YWJzLWluZGV4JywgaW5kZXgpO1xyXG5cdFx0XHR0YWJzQmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldFRhYnNBY3Rpb24pO1xyXG5cdFx0XHRpbml0VGFicyh0YWJzQmxvY2spO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INGB0LvQvtC50LvQtdGA0L7QsiDRgSDQvNC10LTQuNCwINC30LDQv9GA0L7RgdCw0LzQuFxyXG5cdFx0bGV0IG1kUXVlcmllc0FycmF5ID0gZGF0YU1lZGlhUXVlcmllcyh0YWJzLCBcInRhYnNcIik7XHJcblx0XHRpZiAobWRRdWVyaWVzQXJyYXkgJiYgbWRRdWVyaWVzQXJyYXkubGVuZ3RoKSB7XHJcblx0XHRcdG1kUXVlcmllc0FycmF5LmZvckVhY2gobWRRdWVyaWVzSXRlbSA9PiB7XHJcblx0XHRcdFx0Ly8g0KHQvtCx0YvRgtC40LVcclxuXHRcdFx0XHRtZFF1ZXJpZXNJdGVtLm1hdGNoTWVkaWEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRzZXRUaXRsZVBvc2l0aW9uKG1kUXVlcmllc0l0ZW0uaXRlbXNBcnJheSwgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaXRsZVBvc2l0aW9uKG1kUXVlcmllc0l0ZW0uaXRlbXNBcnJheSwgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCj0YHRgtCw0L3QvtCy0LrQsCDQv9C+0LfQuNGG0LjQuSDQt9Cw0LPQvtC70L7QstC60L7QslxyXG5cdGZ1bmN0aW9uIHNldFRpdGxlUG9zaXRpb24odGFic01lZGlhQXJyYXksIG1hdGNoTWVkaWEpIHtcclxuXHRcdHRhYnNNZWRpYUFycmF5LmZvckVhY2godGFic01lZGlhSXRlbSA9PiB7XHJcblx0XHRcdHRhYnNNZWRpYUl0ZW0gPSB0YWJzTWVkaWFJdGVtLml0ZW07XHJcblx0XHRcdGxldCB0YWJzVGl0bGVzID0gdGFic01lZGlhSXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YWJzLXRpdGxlc10nKTtcclxuXHRcdFx0bGV0IHRhYnNUaXRsZUl0ZW1zID0gdGFic01lZGlhSXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJzLXRpdGxlXScpO1xyXG5cdFx0XHRsZXQgdGFic0NvbnRlbnQgPSB0YWJzTWVkaWFJdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhYnMtYm9keV0nKTtcclxuXHRcdFx0bGV0IHRhYnNDb250ZW50SXRlbXMgPSB0YWJzTWVkaWFJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYnMtaXRlbV0nKTtcclxuXHRcdFx0dGFic1RpdGxlSXRlbXMgPSBBcnJheS5mcm9tKHRhYnNUaXRsZUl0ZW1zKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsb3Nlc3QoJ1tkYXRhLXRhYnNdJykgPT09IHRhYnNNZWRpYUl0ZW0pO1xyXG5cdFx0XHR0YWJzQ29udGVudEl0ZW1zID0gQXJyYXkuZnJvbSh0YWJzQ29udGVudEl0ZW1zKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsb3Nlc3QoJ1tkYXRhLXRhYnNdJykgPT09IHRhYnNNZWRpYUl0ZW0pO1xyXG5cdFx0XHR0YWJzQ29udGVudEl0ZW1zLmZvckVhY2goKHRhYnNDb250ZW50SXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XHJcblx0XHRcdFx0XHR0YWJzQ29udGVudC5hcHBlbmQodGFic1RpdGxlSXRlbXNbaW5kZXhdKTtcclxuXHRcdFx0XHRcdHRhYnNDb250ZW50LmFwcGVuZCh0YWJzQ29udGVudEl0ZW0pO1xyXG5cdFx0XHRcdFx0dGFic01lZGlhSXRlbS5jbGFzc0xpc3QuYWRkKCdfdGFiLXNwb2xsZXInKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGFic1RpdGxlcy5hcHBlbmQodGFic1RpdGxlSXRlbXNbaW5kZXhdKTtcclxuXHRcdFx0XHRcdHRhYnNNZWRpYUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX3RhYi1zcG9sbGVyJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvLyDQoNCw0LHQvtGC0LAg0YEg0LrQvtC90YLQtdC90YLQvtC8XHJcblx0ZnVuY3Rpb24gaW5pdFRhYnModGFic0Jsb2NrKSB7XHJcblx0XHRsZXQgdGFic1RpdGxlcyA9IHRhYnNCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJzLXRpdGxlc10+KicpO1xyXG5cdFx0bGV0IHRhYnNDb250ZW50ID0gdGFic0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYnMtYm9keV0+KicpO1xyXG5cdFx0Y29uc3QgdGFic0Jsb2NrSW5kZXggPSB0YWJzQmxvY2suZGF0YXNldC50YWJzSW5kZXg7XHJcblx0XHRjb25zdCB0YWJzQWN0aXZlSGFzaEJsb2NrID0gdGFic0FjdGl2ZUhhc2hbMF0gPT0gdGFic0Jsb2NrSW5kZXg7XHJcblxyXG5cdFx0aWYgKHRhYnNBY3RpdmVIYXNoQmxvY2spIHtcclxuXHRcdFx0Y29uc3QgdGFic0FjdGl2ZVRpdGxlID0gdGFic0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhYnMtdGl0bGVzXT4uX3RhYi1hY3RpdmUnKTtcclxuXHRcdFx0dGFic0FjdGl2ZVRpdGxlID8gdGFic0FjdGl2ZVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ190YWItYWN0aXZlJykgOiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRhYnNDb250ZW50Lmxlbmd0aCkge1xyXG5cdFx0XHR0YWJzQ29udGVudCA9IEFycmF5LmZyb20odGFic0NvbnRlbnQpLmZpbHRlcihpdGVtID0+IGl0ZW0uY2xvc2VzdCgnW2RhdGEtdGFic10nKSA9PT0gdGFic0Jsb2NrKTtcclxuXHRcdFx0dGFic1RpdGxlcyA9IEFycmF5LmZyb20odGFic1RpdGxlcykuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbG9zZXN0KCdbZGF0YS10YWJzXScpID09PSB0YWJzQmxvY2spO1xyXG5cdFx0XHR0YWJzQ29udGVudC5mb3JFYWNoKCh0YWJzQ29udGVudEl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0dGFic1RpdGxlc1tpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXRhYnMtdGl0bGUnLCAnJyk7XHJcblx0XHRcdFx0dGFic0NvbnRlbnRJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10YWJzLWl0ZW0nLCAnJyk7XHJcblxyXG5cdFx0XHRcdGlmICh0YWJzQWN0aXZlSGFzaEJsb2NrICYmIGluZGV4ID09IHRhYnNBY3RpdmVIYXNoWzFdKSB7XHJcblx0XHRcdFx0XHR0YWJzVGl0bGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfdGFiLWFjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0YWJzQ29udGVudEl0ZW0uaGlkZGVuID0gIXRhYnNUaXRsZXNbaW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnX3RhYi1hY3RpdmUnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNldFRhYnNTdGF0dXModGFic0Jsb2NrKSB7XHJcblx0XHRsZXQgdGFic1RpdGxlcyA9IHRhYnNCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJzLXRpdGxlXScpO1xyXG5cdFx0bGV0IHRhYnNDb250ZW50ID0gdGFic0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYnMtaXRlbV0nKTtcclxuXHRcdGNvbnN0IHRhYnNCbG9ja0luZGV4ID0gdGFic0Jsb2NrLmRhdGFzZXQudGFic0luZGV4O1xyXG5cdFx0ZnVuY3Rpb24gaXNUYWJzQW5hbWF0ZSh0YWJzQmxvY2spIHtcclxuXHRcdFx0aWYgKHRhYnNCbG9jay5oYXNBdHRyaWJ1dGUoJ2RhdGEtdGFicy1hbmltYXRlJykpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGFic0Jsb2NrLmRhdGFzZXQudGFic0FuaW1hdGUgPiAwID8gTnVtYmVyKHRhYnNCbG9jay5kYXRhc2V0LnRhYnNBbmltYXRlKSA6IDUwMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdGFic0Jsb2NrQW5pbWF0ZSA9IGlzVGFic0FuYW1hdGUodGFic0Jsb2NrKTtcclxuXHRcdGlmICh0YWJzQ29udGVudC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGNvbnN0IGlzSGFzaCA9IHRhYnNCbG9jay5oYXNBdHRyaWJ1dGUoJ2RhdGEtdGFicy1oYXNoJyk7XHJcblx0XHRcdHRhYnNDb250ZW50ID0gQXJyYXkuZnJvbSh0YWJzQ29udGVudCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbG9zZXN0KCdbZGF0YS10YWJzXScpID09PSB0YWJzQmxvY2spO1xyXG5cdFx0XHR0YWJzVGl0bGVzID0gQXJyYXkuZnJvbSh0YWJzVGl0bGVzKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsb3Nlc3QoJ1tkYXRhLXRhYnNdJykgPT09IHRhYnNCbG9jayk7XHJcblx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnNDb250ZW50SXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRpZiAodGFic1RpdGxlc1tpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdfdGFiLWFjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHRpZiAodGFic0Jsb2NrQW5pbWF0ZSkge1xyXG5cdFx0XHRcdFx0XHRfc2xpZGVEb3duKHRhYnNDb250ZW50SXRlbSwgdGFic0Jsb2NrQW5pbWF0ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YWJzQ29udGVudEl0ZW0uaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoaXNIYXNoICYmICF0YWJzQ29udGVudEl0ZW0uY2xvc2VzdCgnLnBvcHVwJykpIHtcclxuXHRcdFx0XHRcdFx0c2V0SGFzaChgdGFiLSR7dGFic0Jsb2NrSW5kZXh9LSR7aW5kZXh9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0YWJzQmxvY2tBbmltYXRlKSB7XHJcblx0XHRcdFx0XHRcdF9zbGlkZVVwKHRhYnNDb250ZW50SXRlbSwgdGFic0Jsb2NrQW5pbWF0ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YWJzQ29udGVudEl0ZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBzZXRUYWJzQWN0aW9uKGUpIHtcclxuXHRcdGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcblx0XHRpZiAoZWwuY2xvc2VzdCgnW2RhdGEtdGFicy10aXRsZV0nKSkge1xyXG5cdFx0XHRjb25zdCB0YWJUaXRsZSA9IGVsLmNsb3Nlc3QoJ1tkYXRhLXRhYnMtdGl0bGVdJyk7XHJcblx0XHRcdGNvbnN0IHRhYnNCbG9jayA9IHRhYlRpdGxlLmNsb3Nlc3QoJ1tkYXRhLXRhYnNdJyk7XHJcblx0XHRcdGlmICghdGFiVGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdfdGFiLWFjdGl2ZScpICYmICF0YWJzQmxvY2sucXVlcnlTZWxlY3RvcignLl9zbGlkZScpKSB7XHJcblx0XHRcdFx0bGV0IHRhYkFjdGl2ZVRpdGxlID0gdGFic0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYnMtdGl0bGVdLl90YWItYWN0aXZlJyk7XHJcblx0XHRcdFx0dGFiQWN0aXZlVGl0bGUubGVuZ3RoID8gdGFiQWN0aXZlVGl0bGUgPSBBcnJheS5mcm9tKHRhYkFjdGl2ZVRpdGxlKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsb3Nlc3QoJ1tkYXRhLXRhYnNdJykgPT09IHRhYnNCbG9jaykgOiBudWxsO1xyXG5cdFx0XHRcdHRhYkFjdGl2ZVRpdGxlLmxlbmd0aCA/IHRhYkFjdGl2ZVRpdGxlWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ190YWItYWN0aXZlJykgOiBudWxsO1xyXG5cdFx0XHRcdHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ190YWItYWN0aXZlJyk7XHJcblx0XHRcdFx0c2V0VGFic1N0YXR1cyh0YWJzQmxvY2spO1xyXG5cdFx0XHR9XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLy8g0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDQvNC10L3RjiAo0LHRg9GA0LPQtdGAKSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tZW51LWJ1cmdlci5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogbWVudVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVudUluaXQoKSB7XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1tZW51XCIpKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aWYgKGJvZHlMb2NrU3RhdHVzICYmIGUudGFyZ2V0LmNsb3Nlc3QoJy5pY29uLW1lbnUnKSkge1xyXG5cdFx0XHRcdGJvZHlMb2NrVG9nZ2xlKCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LW9wZW5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVPcGVuKCkge1xyXG5cdGJvZHlMb2NrKCk7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LW9wZW5cIik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcclxuXHRib2R5VW5sb2NrKCk7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5cIik7XHJcbn1cclxuLy8g0JzQvtC00YPQu9GMIFwi0L/QvtC60LDQt9Cw0YLRjCDQtdGJ0LVcIiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2themF0LWVzaGhqby5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogc2hvd21vcmVcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb3JlKCkge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0Y29uc3Qgc2hvd01vcmVCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zaG93bW9yZV0nKTtcclxuXHRcdGxldCBzaG93TW9yZUJsb2Nrc1JlZ3VsYXI7XHJcblx0XHRsZXQgbWRRdWVyaWVzQXJyYXk7XHJcblx0XHRpZiAoc2hvd01vcmVCbG9ja3MubGVuZ3RoKSB7XHJcblx0XHRcdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQvtCx0YvRh9C90YvRhSDQvtCx0YrQtdC60YLQvtCyXHJcblx0XHRcdHNob3dNb3JlQmxvY2tzUmVndWxhciA9IEFycmF5LmZyb20oc2hvd01vcmVCbG9ja3MpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuXHRcdFx0XHRyZXR1cm4gIWl0ZW0uZGF0YXNldC5zaG93bW9yZU1lZGlhO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGL0YfQvdGL0YUg0L7QsdGK0LXQutGC0L7QslxyXG5cdFx0XHRzaG93TW9yZUJsb2Nrc1JlZ3VsYXIubGVuZ3RoID8gaW5pdEl0ZW1zKHNob3dNb3JlQmxvY2tzUmVndWxhcikgOiBudWxsO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNb3JlQWN0aW9ucyk7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNob3dNb3JlQWN0aW9ucyk7XHJcblxyXG5cdFx0XHQvLyDQn9C+0LvRg9GH0LXQvdC40LUg0L7QsdGK0LXQutGC0L7QsiDRgSDQvNC10LTQuNCwINC30LDQv9GA0L7RgdCw0LzQuFxyXG5cdFx0XHRtZFF1ZXJpZXNBcnJheSA9IGRhdGFNZWRpYVF1ZXJpZXMoc2hvd01vcmVCbG9ja3MsIFwic2hvd21vcmVNZWRpYVwiKTtcclxuXHRcdFx0aWYgKG1kUXVlcmllc0FycmF5ICYmIG1kUXVlcmllc0FycmF5Lmxlbmd0aCkge1xyXG5cdFx0XHRcdG1kUXVlcmllc0FycmF5LmZvckVhY2gobWRRdWVyaWVzSXRlbSA9PiB7XHJcblx0XHRcdFx0XHQvLyDQodC+0LHRi9GC0LjQtVxyXG5cdFx0XHRcdFx0bWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRpbml0SXRlbXMobWRRdWVyaWVzSXRlbS5pdGVtc0FycmF5LCBtZFF1ZXJpZXNJdGVtLm1hdGNoTWVkaWEpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aW5pdEl0ZW1zTWVkaWEobWRRdWVyaWVzQXJyYXkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBpbml0SXRlbXNNZWRpYShtZFF1ZXJpZXNBcnJheSkge1xyXG5cdFx0XHRtZFF1ZXJpZXNBcnJheS5mb3JFYWNoKG1kUXVlcmllc0l0ZW0gPT4ge1xyXG5cdFx0XHRcdGluaXRJdGVtcyhtZFF1ZXJpZXNJdGVtLml0ZW1zQXJyYXksIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gaW5pdEl0ZW1zKHNob3dNb3JlQmxvY2tzLCBtYXRjaE1lZGlhKSB7XHJcblx0XHRcdHNob3dNb3JlQmxvY2tzLmZvckVhY2goc2hvd01vcmVCbG9jayA9PiB7XHJcblx0XHRcdFx0aW5pdEl0ZW0oc2hvd01vcmVCbG9jaywgbWF0Y2hNZWRpYSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gaW5pdEl0ZW0oc2hvd01vcmVCbG9jaywgbWF0Y2hNZWRpYSA9IGZhbHNlKSB7XHJcblx0XHRcdHNob3dNb3JlQmxvY2sgPSBtYXRjaE1lZGlhID8gc2hvd01vcmVCbG9jay5pdGVtIDogc2hvd01vcmVCbG9jaztcclxuXHRcdFx0bGV0IHNob3dNb3JlQ29udGVudCA9IHNob3dNb3JlQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2hvd21vcmUtY29udGVudF0nKTtcclxuXHRcdFx0bGV0IHNob3dNb3JlQnV0dG9uID0gc2hvd01vcmVCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zaG93bW9yZS1idXR0b25dJyk7XHJcblx0XHRcdHNob3dNb3JlQ29udGVudCA9IEFycmF5LmZyb20oc2hvd01vcmVDb250ZW50KS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsb3Nlc3QoJ1tkYXRhLXNob3dtb3JlXScpID09PSBzaG93TW9yZUJsb2NrKVswXTtcclxuXHRcdFx0c2hvd01vcmVCdXR0b24gPSBBcnJheS5mcm9tKHNob3dNb3JlQnV0dG9uKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsb3Nlc3QoJ1tkYXRhLXNob3dtb3JlXScpID09PSBzaG93TW9yZUJsb2NrKVswXTtcclxuXHRcdFx0Y29uc3QgaGlkZGVuSGVpZ2h0ID0gZ2V0SGVpZ2h0KHNob3dNb3JlQmxvY2ssIHNob3dNb3JlQ29udGVudCk7XHJcblx0XHRcdGlmIChtYXRjaE1lZGlhLm1hdGNoZXMgfHwgIW1hdGNoTWVkaWEpIHtcclxuXHRcdFx0XHRpZiAoaGlkZGVuSGVpZ2h0IDwgZ2V0T3JpZ2luYWxIZWlnaHQoc2hvd01vcmVDb250ZW50KSkge1xyXG5cdFx0XHRcdFx0X3NsaWRlVXAoc2hvd01vcmVDb250ZW50LCAwLCBoaWRkZW5IZWlnaHQpO1xyXG5cdFx0XHRcdFx0c2hvd01vcmVCdXR0b24uaGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9zbGlkZURvd24oc2hvd01vcmVDb250ZW50LCAwLCBoaWRkZW5IZWlnaHQpO1xyXG5cdFx0XHRcdFx0c2hvd01vcmVCdXR0b24uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X3NsaWRlRG93bihzaG93TW9yZUNvbnRlbnQsIDAsIGhpZGRlbkhlaWdodCk7XHJcblx0XHRcdFx0c2hvd01vcmVCdXR0b24uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gZ2V0SGVpZ2h0KHNob3dNb3JlQmxvY2ssIHNob3dNb3JlQ29udGVudCkge1xyXG5cdFx0XHRsZXQgaGlkZGVuSGVpZ2h0ID0gMDtcclxuXHRcdFx0Y29uc3Qgc2hvd01vcmVUeXBlID0gc2hvd01vcmVCbG9jay5kYXRhc2V0LnNob3dtb3JlID8gc2hvd01vcmVCbG9jay5kYXRhc2V0LnNob3dtb3JlIDogJ3NpemUnO1xyXG5cdFx0XHRpZiAoc2hvd01vcmVUeXBlID09PSAnaXRlbXMnKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2hvd01vcmVUeXBlVmFsdWUgPSBzaG93TW9yZUNvbnRlbnQuZGF0YXNldC5zaG93bW9yZUNvbnRlbnQgPyBzaG93TW9yZUNvbnRlbnQuZGF0YXNldC5zaG93bW9yZUNvbnRlbnQgOiAzO1xyXG5cdFx0XHRcdGNvbnN0IHNob3dNb3JlSXRlbXMgPSBzaG93TW9yZUNvbnRlbnQuY2hpbGRyZW47XHJcblx0XHRcdFx0Zm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHNob3dNb3JlSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzaG93TW9yZUl0ZW0gPSBzaG93TW9yZUl0ZW1zW2luZGV4IC0gMV07XHJcblx0XHRcdFx0XHRoaWRkZW5IZWlnaHQgKz0gc2hvd01vcmVJdGVtLm9mZnNldEhlaWdodDtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA9PSBzaG93TW9yZVR5cGVWYWx1ZSkgYnJlYWtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3Qgc2hvd01vcmVUeXBlVmFsdWUgPSBzaG93TW9yZUNvbnRlbnQuZGF0YXNldC5zaG93bW9yZUNvbnRlbnQgPyBzaG93TW9yZUNvbnRlbnQuZGF0YXNldC5zaG93bW9yZUNvbnRlbnQgOiAxNTA7XHJcblx0XHRcdFx0aGlkZGVuSGVpZ2h0ID0gc2hvd01vcmVUeXBlVmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGhpZGRlbkhlaWdodDtcclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIGdldE9yaWdpbmFsSGVpZ2h0KHNob3dNb3JlQ29udGVudCkge1xyXG5cdFx0XHRsZXQgcGFyZW50SGlkZGVuO1xyXG5cdFx0XHRsZXQgaGlkZGVuSGVpZ2h0ID0gc2hvd01vcmVDb250ZW50Lm9mZnNldEhlaWdodDtcclxuXHRcdFx0c2hvd01vcmVDb250ZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuXHRcdFx0aWYgKHNob3dNb3JlQ29udGVudC5jbG9zZXN0KGBbaGlkZGVuXWApKSB7XHJcblx0XHRcdFx0cGFyZW50SGlkZGVuID0gc2hvd01vcmVDb250ZW50LmNsb3Nlc3QoYFtoaWRkZW5dYCk7XHJcblx0XHRcdFx0cGFyZW50SGlkZGVuLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBvcmlnaW5hbEhlaWdodCA9IHNob3dNb3JlQ29udGVudC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRcdHBhcmVudEhpZGRlbiA/IHBhcmVudEhpZGRlbi5oaWRkZW4gPSB0cnVlIDogbnVsbDtcclxuXHRcdFx0c2hvd01vcmVDb250ZW50LnN0eWxlLmhlaWdodCA9IGAke2hpZGRlbkhlaWdodH1weGA7XHJcblx0XHRcdHJldHVybiBvcmlnaW5hbEhlaWdodDtcclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIHNob3dNb3JlQWN0aW9ucyhlKSB7XHJcblx0XHRcdGNvbnN0IHRhcmdldEV2ZW50ID0gZS50YXJnZXQ7XHJcblx0XHRcdGNvbnN0IHRhcmdldFR5cGUgPSBlLnR5cGU7XHJcblx0XHRcdGlmICh0YXJnZXRUeXBlID09PSAnY2xpY2snKSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldEV2ZW50LmNsb3Nlc3QoJ1tkYXRhLXNob3dtb3JlLWJ1dHRvbl0nKSkge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2hvd01vcmVCdXR0b24gPSB0YXJnZXRFdmVudC5jbG9zZXN0KCdbZGF0YS1zaG93bW9yZS1idXR0b25dJyk7XHJcblx0XHRcdFx0XHRjb25zdCBzaG93TW9yZUJsb2NrID0gc2hvd01vcmVCdXR0b24uY2xvc2VzdCgnW2RhdGEtc2hvd21vcmVdJyk7XHJcblx0XHRcdFx0XHRjb25zdCBzaG93TW9yZUNvbnRlbnQgPSBzaG93TW9yZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNob3dtb3JlLWNvbnRlbnRdJyk7XHJcblx0XHRcdFx0XHRjb25zdCBzaG93TW9yZVNwZWVkID0gc2hvd01vcmVCbG9jay5kYXRhc2V0LnNob3dtb3JlQnV0dG9uID8gc2hvd01vcmVCbG9jay5kYXRhc2V0LnNob3dtb3JlQnV0dG9uIDogJzUwMCc7XHJcblx0XHRcdFx0XHRjb25zdCBoaWRkZW5IZWlnaHQgPSBnZXRIZWlnaHQoc2hvd01vcmVCbG9jaywgc2hvd01vcmVDb250ZW50KTtcclxuXHRcdFx0XHRcdGlmICghc2hvd01vcmVDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuXHRcdFx0XHRcdFx0c2hvd01vcmVCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ19zaG93bW9yZS1hY3RpdmUnKSA/IF9zbGlkZVVwKHNob3dNb3JlQ29udGVudCwgc2hvd01vcmVTcGVlZCwgaGlkZGVuSGVpZ2h0KSA6IF9zbGlkZURvd24oc2hvd01vcmVDb250ZW50LCBzaG93TW9yZVNwZWVkLCBoaWRkZW5IZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRzaG93TW9yZUJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ19zaG93bW9yZS1hY3RpdmUnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuXHRcdFx0XHRzaG93TW9yZUJsb2Nrc1JlZ3VsYXIgJiYgc2hvd01vcmVCbG9ja3NSZWd1bGFyLmxlbmd0aCA/IGluaXRJdGVtcyhzaG93TW9yZUJsb2Nrc1JlZ3VsYXIpIDogbnVsbDtcclxuXHRcdFx0XHRtZFF1ZXJpZXNBcnJheSAmJiBtZFF1ZXJpZXNBcnJheS5sZW5ndGggPyBpbml0SXRlbXNNZWRpYShtZFF1ZXJpZXNBcnJheSkgOiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCf0YDQvtGH0LjQtSDQv9C+0LvQtdC30L3Ri9C1INGE0YPQvdC60YbQuNC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZMUyAoRnVsbCBMb2dnaW5nIFN5c3RlbSlcclxuZXhwb3J0IGZ1bmN0aW9uIEZMUyhtZXNzYWdlKSB7XHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRpZiAod2luZG93LkZMUykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9LCAwKTtcclxufVxyXG4vLyDQn9C+0LvRg9GH0LjRgtGMINGG0LjRhNGA0Ysg0LjQtyDRgdGC0YDQvtC60LhcclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpZ0Zyb21TdHJpbmcoaXRlbSkge1xyXG5cdHJldHVybiBwYXJzZUludChpdGVtLnJlcGxhY2UoL1teXFxkXS9nLCAnJykpXHJcbn1cclxuLy8g0KTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjQtSDRhtC40YTRgCDRgtC40L/QsCAxMDAgMDAwIDAwMFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlnRm9ybWF0KGl0ZW0pIHtcclxuXHRyZXR1cm4gaXRlbS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgXCIkMSBcIik7XHJcbn1cclxuLy8g0KPQsdGA0LDRgtGMINC60LvQsNGB0YEg0LjQtyDQstGB0LXRhSDRjdC70LXQvNC10L3RgtC+0LIg0LzQsNGB0YHQuNCy0LBcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoYXJyYXksIGNsYXNzTmFtZSkge1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdGFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHR9XHJcbn1cclxuLy8g0KPQvdC40LrQsNC70LjQt9Cw0YbQuNGPINC80LDRgdGB0LjQstCwXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxQXJyYXkoYXJyYXkpIHtcclxuXHRyZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG5cdFx0cmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXg7XHJcblx0fSk7XHJcbn1cclxuLy8g0KTRg9C90LrRhtC40Y8g0L/QvtC70YPRh9C10L3QuNGPINC40L3QtNC10LrRgdCwINCy0L3Rg9GC0YDQuCDRgNC+0LTQuNGC0LXQu9GPXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmRleEluUGFyZW50KHBhcmVudCwgZWxlbWVudCkge1xyXG5cdGNvbnN0IGFycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcclxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XHJcbn07XHJcbi8vINCe0LHRgNCw0LHQvtGC0LAg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQvtCyINC40Lcg0LDRgtGA0LjQsdGD0YLQvtCyIFxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YU1lZGlhUXVlcmllcyhhcnJheSwgZGF0YVNldFZhbHVlKSB7XHJcblx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INC+0LHRitC10LrRgtC+0LIg0YEg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNC80LhcclxuXHRjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuXHRcdGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xyXG5cdFx0XHRyZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoXCIsXCIpWzBdO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRitC10LrRgtC+0LIg0YEg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNC80LhcclxuXHRpZiAobWVkaWEubGVuZ3RoKSB7XHJcblx0XHRjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XHJcblx0XHRtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRjb25zdCBwYXJhbXMgPSBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXTtcclxuXHRcdFx0Y29uc3QgYnJlYWtwb2ludCA9IHt9O1xyXG5cdFx0XHRjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdChcIixcIik7XHJcblx0XHRcdGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcclxuXHRcdFx0YnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiBcIm1heFwiO1xyXG5cdFx0XHRicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xyXG5cdFx0XHRicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XHJcblx0XHR9KTtcclxuXHRcdC8vINCf0L7Qu9GD0YfQsNC10Lwg0YPQvdC40LrQsNC70YzQvdGL0LUg0LHRgNC10LnQutC/0L7QuNC90YLRi1xyXG5cdFx0bGV0IG1kUXVlcmllcyA9IGJyZWFrcG9pbnRzQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdHJldHVybiAnKCcgKyBpdGVtLnR5cGUgKyBcIi13aWR0aDogXCIgKyBpdGVtLnZhbHVlICsgXCJweCksXCIgKyBpdGVtLnZhbHVlICsgJywnICsgaXRlbS50eXBlO1xyXG5cdFx0fSk7XHJcblx0XHRtZFF1ZXJpZXMgPSB1bmlxQXJyYXkobWRRdWVyaWVzKTtcclxuXHRcdGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XHJcblxyXG5cdFx0aWYgKG1kUXVlcmllcy5sZW5ndGgpIHtcclxuXHRcdFx0Ly8g0KDQsNCx0L7RgtCw0LXQvCDRgSDQutCw0LbQtNGL0Lwg0LHRgNC10LnQutC/0L7QuNC90YLQvtC8XHJcblx0XHRcdG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHBhcmFtc0FycmF5ID0gYnJlYWtwb2ludC5zcGxpdChcIixcIik7XHJcblx0XHRcdFx0Y29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XHJcblx0XHRcdFx0Y29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XHJcblx0XHRcdFx0Y29uc3QgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBhcmFtc0FycmF5WzBdKTtcclxuXHRcdFx0XHQvLyDQntCx0YrQtdC60YLRiyDRgSDQvdGD0LbQvdGL0LzQuCDRg9GB0LvQvtCy0LjRj9C80LhcclxuXHRcdFx0XHRjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0bWRRdWVyaWVzQXJyYXkucHVzaCh7XHJcblx0XHRcdFx0XHRpdGVtc0FycmF5LFxyXG5cdFx0XHRcdFx0bWF0Y2hNZWRpYVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gbWRRdWVyaWVzQXJyYXk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSIsImV4cG9ydCBjb25zdCBmbHNNb2R1bGVzID0ge30iLCIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGE0YPQvdC60YbQuNC+0L3QsNC70LAgXCLQp9C10YDRgtC+0LPQvtCyINCk0YDQuNC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0LDQutGC0LjQstC90YvRhSDQvNC+0LTRg9C70LXQuVxyXG5pbXBvcnQgeyBmbHNNb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlcy5qc1wiOyIsIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YTRg9C90LrRhtC40L7QvdCw0LvQsCBcItCn0LXRgNGC0L7Qs9C+0LIg0KTRgNC40LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSwgbWVudUNsb3NlLCBnZXRIYXNoLCBGTFMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zLmpzXCI7XHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0LTQvtC/0L7Qu9C90LXQvdC40Y8g0LTQu9GPINGD0LLQtdC70LjRh9C10L3QuNGPINCy0L7Qt9C80L7QttC90L7RgdGC0LXQuVxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vZ2l0aHViLmNvbS9jZmVyZGluYW5kaS9zbW9vdGgtc2Nyb2xsXHJcbi8vIGltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnc21vb3RoLXNjcm9sbCc7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyDQnNC+0LTRg9C70Ywg0L/Qu9Cw0LLQvdC+0Lkg0L/RgNC+0LrRgtGD0YLQutC4INC6INCx0LvQvtC60YNcclxuZXhwb3J0IGxldCBnb3RvQmxvY2sgPSAodGFyZ2V0QmxvY2ssIG5vSGVhZGVyID0gZmFsc2UsIHNwZWVkID0gNTAwLCBvZmZzZXRUb3AgPSAwKSA9PiB7XHJcblx0Y29uc3QgdGFyZ2V0QmxvY2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRCbG9jayk7XHJcblx0aWYgKHRhcmdldEJsb2NrRWxlbWVudCkge1xyXG5cdFx0bGV0IGhlYWRlckl0ZW0gPSAnJztcclxuXHRcdGxldCBoZWFkZXJJdGVtSGVpZ2h0ID0gMDtcclxuXHRcdGlmIChub0hlYWRlcikge1xyXG5cdFx0XHRoZWFkZXJJdGVtID0gJ2hlYWRlci5oZWFkZXInO1xyXG5cdFx0XHRoZWFkZXJJdGVtSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXJJdGVtKS5vZmZzZXRIZWlnaHQ7XHJcblx0XHR9XHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0c3BlZWRBc0R1cmF0aW9uOiB0cnVlLFxyXG5cdFx0XHRzcGVlZDogc3BlZWQsXHJcblx0XHRcdGhlYWRlcjogaGVhZGVySXRlbSxcclxuXHRcdFx0b2Zmc2V0OiBvZmZzZXRUb3AsXHJcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcclxuXHRcdH07XHJcblx0XHQvLyDQl9Cw0LrRgNGL0LLQsNC10Lwg0LzQtdC90Y4sINC10YHQu9C4INC+0L3QviDQvtGC0LrRgNGL0YLQvlxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtb3BlblwiKSA/IG1lbnVDbG9zZSgpIDogbnVsbDtcclxuXHJcblx0XHRpZiAodHlwZW9mIFNtb290aFNjcm9sbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0Ly8g0J/RgNC+0LrRgNGD0YLQutCwINGBINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10Lwg0LTQvtC/0L7Qu9C90LXQvdC40Y9cclxuXHRcdFx0bmV3IFNtb290aFNjcm9sbCgpLmFuaW1hdGVTY3JvbGwodGFyZ2V0QmxvY2tFbGVtZW50LCAnJywgb3B0aW9ucyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyDQn9GA0L7QutGA0YPRgtC60LAg0YHRgtCw0L3QtNCw0YDRgtC90YvQvNC4INGB0YDQtdC00YHRgtCy0LDQvNC4XHJcblx0XHRcdGxldCB0YXJnZXRCbG9ja0VsZW1lbnRQb3NpdGlvbiA9IHRhcmdldEJsb2NrRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGxZO1xyXG5cdFx0XHR0YXJnZXRCbG9ja0VsZW1lbnRQb3NpdGlvbiA9IGhlYWRlckl0ZW1IZWlnaHQgPyB0YXJnZXRCbG9ja0VsZW1lbnRQb3NpdGlvbiAtIGhlYWRlckl0ZW1IZWlnaHQgOiB0YXJnZXRCbG9ja0VsZW1lbnRQb3NpdGlvbjtcclxuXHRcdFx0dGFyZ2V0QmxvY2tFbGVtZW50UG9zaXRpb24gPSBvZmZzZXRUb3AgPyB0YXJnZXRCbG9ja0VsZW1lbnRQb3NpdGlvbiAtIG9mZnNldFRvcCA6IHRhcmdldEJsb2NrRWxlbWVudFBvc2l0aW9uO1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHRcdHRvcDogdGFyZ2V0QmxvY2tFbGVtZW50UG9zaXRpb24sXHJcblx0XHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCJcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRGTFMoYFtnb3RvQmxvY2tdOiDQrtGF0YPRgy4uLtC10LTQtdC8INC6ICR7dGFyZ2V0QmxvY2t9YCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdEZMUyhgW2dvdG9CbG9ja106INCe0Lkg0L7QuS4u0KLQsNC60L7Qs9C+INCx0LvQvtC60LAg0L3QtdGCINC90LAg0YHRgtGA0LDQvdC40YbQtTogJHt0YXJnZXRCbG9ja31gKTtcclxuXHR9XHJcbn07IiwiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlLCBnZXRIYXNoIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQnNC+0LTRg9C70Ywg0L/RgNC+0LrRgNGD0YLQutC4INC6INCx0LvQvtC60YNcclxuaW1wb3J0IHsgZ290b0Jsb2NrIH0gZnJvbSBcIi4vZ290b2Jsb2NrLmpzXCI7XHJcbi8vINCf0LXRgNC10LzQtdC90L3QsNGPINC60L7QvdGC0YDQvtC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0YHQvtCx0YvRgtC40Y8gd2luZG93IHNjcm9sbC5cclxubGV0IGFkZFdpbmRvd1Njcm9sbEV2ZW50ID0gZmFsc2U7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQn9C70LDQstC90LDRjyDQvdCw0LLQuNCz0LDRhtC40Y8g0L/QviDRgdGC0YDQsNC90LjRhtC1XHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTmF2aWdhdGlvbigpIHtcclxuXHQvLyBkYXRhLWdvdG8gLSDRg9C60LDQt9Cw0YLRjCBJRCDQsdC70L7QutCwXHJcblx0Ly8gZGF0YS1nb3RvLWhlYWRlciAtINGD0YfQuNGC0YvQstCw0YLRjCBoZWFkZXJcclxuXHQvLyBkYXRhLWdvdG8tdG9wIC0g0L3QtdC00L7QutGA0YPRgtC40YLRjCDQvdCwINGD0LrQsNC30LDQvdC90YvQuSDRgNCw0LfQvNC10YBcclxuXHQvLyBkYXRhLWdvdG8tc3BlZWQgLSDRgdC60L7RgNC+0YHRgtGMICjRgtC+0LvRjNC60L4g0LXRgdC70Lgg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPINC00L7QvyDQv9C70LDQs9C40L0pXHJcblx0Ly8g0KDQsNCx0L7RgtCw0LXQvCDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC/0YPQvdC60YJcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGFnZU5hdmlnYXRpb25BY3Rpb24pO1xyXG5cdC8vINCV0YHQu9C4INC/0L7QtNC60LvRjtGH0LXQvSBzY3JvbGxXYXRjaGVyLCDQv9C+0LTRgdCy0LXRh9C40LLQsNC10Lwg0YLQtdC60YPRidC40Lkg0L/Rg9C60YIg0LzQtdC90Y5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2F0Y2hlckNhbGxiYWNrXCIsIHBhZ2VOYXZpZ2F0aW9uQWN0aW9uKTtcclxuXHQvLyDQntGB0L3QvtCy0L3QsNGPINGE0YPQvdC60YbQuNGPXHJcblx0ZnVuY3Rpb24gcGFnZU5hdmlnYXRpb25BY3Rpb24oZSkge1xyXG5cdFx0aWYgKGUudHlwZSA9PT0gXCJjbGlja1wiKSB7XHJcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtZ290b10nKSkge1xyXG5cdFx0XHRcdGNvbnN0IGdvdG9MaW5rID0gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCdbZGF0YS1nb3RvXScpO1xyXG5cdFx0XHRcdGNvbnN0IGdvdG9MaW5rU2VsZWN0b3IgPSBnb3RvTGluay5kYXRhc2V0LmdvdG8gPyBnb3RvTGluay5kYXRhc2V0LmdvdG8gOiAnJztcclxuXHRcdFx0XHRjb25zdCBub0hlYWRlciA9IGdvdG9MaW5rLmhhc0F0dHJpYnV0ZSgnZGF0YS1nb3RvLWhlYWRlcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdGNvbnN0IGdvdG9TcGVlZCA9IGdvdG9MaW5rLmRhdGFzZXQuZ290b1NwZWVkID8gZ290b0xpbmsuZGF0YXNldC5nb3RvU3BlZWQgOiA1MDA7XHJcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0VG9wID0gZ290b0xpbmsuZGF0YXNldC5nb3RvVG9wID8gcGFyc2VJbnQoZ290b0xpbmsuZGF0YXNldC5nb3RvVG9wKSA6IDA7XHJcblx0XHRcdFx0Z290b0Jsb2NrKGdvdG9MaW5rU2VsZWN0b3IsIG5vSGVhZGVyLCBnb3RvU3BlZWQsIG9mZnNldFRvcCk7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGUudHlwZSA9PT0gXCJ3YXRjaGVyQ2FsbGJhY2tcIiAmJiBlLmRldGFpbCkge1xyXG5cdFx0XHRjb25zdCBlbnRyeSA9IGUuZGV0YWlsLmVudHJ5O1xyXG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50ID0gZW50cnkudGFyZ2V0O1xyXG5cdFx0XHQvLyDQntCx0YDQsNCx0L7RgtC60LAg0L/Rg9C90LrRgtC+0LIg0L3QsNCy0LjQs9Cw0YbQuNC4LCDQtdGB0LvQuCDRg9C60LDQt9Cw0L3QviDQt9C90LDRh9C10L3QuNC1IG5hdmlnYXRvciDQv9C+0LTRgdCy0LXRh9C40LLQsNC10Lwg0YLQtdC60YPRidC40Lkg0L/Rg9C60YIg0LzQtdC90Y5cclxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuZGF0YXNldC53YXRjaCA9PT0gJ25hdmlnYXRvcicpIHtcclxuXHRcdFx0XHRjb25zdCBuYXZpZ2F0b3JBY3RpdmVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZ290b10uX25hdmlnYXRvci1hY3RpdmVgKTtcclxuXHRcdFx0XHRsZXQgbmF2aWdhdG9yQ3VycmVudEl0ZW07XHJcblx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuaWQgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZ290bz1cIiMke3RhcmdldEVsZW1lbnQuaWR9XCJdYCkpIHtcclxuXHRcdFx0XHRcdG5hdmlnYXRvckN1cnJlbnRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZ290bz1cIiMke3RhcmdldEVsZW1lbnQuaWR9XCJdYCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0W2luZGV4XTtcclxuXHRcdFx0XHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWdvdG89XCIuJHtlbGVtZW50fVwiXWApKSB7XHJcblx0XHRcdFx0XHRcdFx0bmF2aWdhdG9yQ3VycmVudEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1nb3RvPVwiLiR7ZWxlbWVudH1cIl1gKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHRcdFx0XHRcdC8vINCS0LjQtNC40Lwg0L7QsdGK0LXQutGCXHJcblx0XHRcdFx0XHQvLyBuYXZpZ2F0b3JBY3RpdmVJdGVtID8gbmF2aWdhdG9yQWN0aXZlSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfbmF2aWdhdG9yLWFjdGl2ZScpIDogbnVsbDtcclxuXHRcdFx0XHRcdG5hdmlnYXRvckN1cnJlbnRJdGVtID8gbmF2aWdhdG9yQ3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnX25hdmlnYXRvci1hY3RpdmUnKSA6IG51bGw7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vINCd0LUg0LLQuNC00LjQvCDQvtCx0YrQtdC60YJcclxuXHRcdFx0XHRcdG5hdmlnYXRvckN1cnJlbnRJdGVtID8gbmF2aWdhdG9yQ3VycmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX25hdmlnYXRvci1hY3RpdmUnKSA6IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCf0YDQvtC60YDRg9GC0LrQsCDQv9C+INGF0LXRiNGDXHJcblx0aWYgKGdldEhhc2goKSkge1xyXG5cdFx0bGV0IGdvVG9IYXNoO1xyXG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldEhhc2goKX1gKSkge1xyXG5cdFx0XHRnb1RvSGFzaCA9IGAjJHtnZXRIYXNoKCl9YDtcclxuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Z2V0SGFzaCgpfWApKSB7XHJcblx0XHRcdGdvVG9IYXNoID0gYC4ke2dldEhhc2goKX1gO1xyXG5cdFx0fVxyXG5cdFx0Z29Ub0hhc2ggPyBnb3RvQmxvY2soZ29Ub0hhc2gsIHRydWUsIDUwMCwgMjApIDogbnVsbDtcclxuXHR9XHJcbn1cclxuLy8g0KDQsNCx0L7RgtCwINGBINGI0LDQv9C60L7QuSDQv9GA0Lgg0YHQutGA0L7Qu9C1XHJcbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJTY3JvbGwoKSB7XHJcblx0YWRkV2luZG93U2Nyb2xsRXZlbnQgPSB0cnVlO1xyXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlci5oZWFkZXInKTtcclxuXHRjb25zdCBoZWFkZXJTaG93ID0gaGVhZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtc2hvdycpO1xyXG5cdGNvbnN0IGhlYWRlclNob3dUaW1lciA9IGhlYWRlci5kYXRhc2V0LnNjcm9sbFNob3cgPyBoZWFkZXIuZGF0YXNldC5zY3JvbGxTaG93IDogNTAwO1xyXG5cdGNvbnN0IHN0YXJ0UG9pbnQgPSBoZWFkZXIuZGF0YXNldC5zY3JvbGwgPyBoZWFkZXIuZGF0YXNldC5zY3JvbGwgOiAxO1xyXG5cdGxldCBzY3JvbGxEaXJlY3Rpb24gPSAwO1xyXG5cdGxldCB0aW1lcjtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2luZG93U2Nyb2xsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XHJcblx0XHRpZiAoc2Nyb2xsVG9wID49IHN0YXJ0UG9pbnQpIHtcclxuXHRcdFx0IWhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ19oZWFkZXItc2Nyb2xsJykgPyBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnX2hlYWRlci1zY3JvbGwnKSA6IG51bGw7XHJcblx0XHRcdGlmIChoZWFkZXJTaG93KSB7XHJcblx0XHRcdFx0aWYgKHNjcm9sbFRvcCA+IHNjcm9sbERpcmVjdGlvbikge1xyXG5cdFx0XHRcdFx0Ly8gZG93bnNjcm9sbCBjb2RlXHJcblx0XHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdfaGVhZGVyLXNob3cnKSA/IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdfaGVhZGVyLXNob3cnKSA6IG51bGw7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHVwc2Nyb2xsIGNvZGVcclxuXHRcdFx0XHRcdCFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdfaGVhZGVyLXNob3cnKSA/IGhlYWRlci5jbGFzc0xpc3QuYWRkKCdfaGVhZGVyLXNob3cnKSA6IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQhaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnX2hlYWRlci1zaG93JykgPyBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnX2hlYWRlci1zaG93JykgOiBudWxsO1xyXG5cdFx0XHRcdH0sIGhlYWRlclNob3dUaW1lcik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ19oZWFkZXItc2Nyb2xsJykgPyBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2hlYWRlci1zY3JvbGwnKSA6IG51bGw7XHJcblx0XHRcdGlmIChoZWFkZXJTaG93KSB7XHJcblx0XHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnX2hlYWRlci1zaG93JykgPyBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2hlYWRlci1zaG93JykgOiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzY3JvbGxEaXJlY3Rpb24gPSBzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3A7XHJcblx0fSk7XHJcbn1cclxuLy8g0J/RgNC40LvQuNC/0LDRjtGJ0LjQuSDQsdC70L7QulxyXG5leHBvcnQgZnVuY3Rpb24gc3RpY2t5QmxvY2soKSB7XHJcblx0YWRkV2luZG93U2Nyb2xsRXZlbnQgPSB0cnVlO1xyXG5cdC8vIGRhdGEtc3RpY2t5INC00LvRjyDRgNC+0LTQuNGC0LXQu9GPINCy0L3Rg9GC0YDQuCDQutC+0YLQvtGA0L7Qs9C+INC/0YDQuNC70LjQv9Cw0LXRgiDQsdC70L7QuiAqXHJcblx0Ly8gZGF0YS1zdGlja3ktaGVhZGVyINC00LvRjyDRgNC+0LTQuNGC0LXQu9GPLCDRg9GH0LjRgtGL0LLQsNC10Lwg0LLRi9GB0L7RgtGDINGF0LXQtNC10YDQsFxyXG5cdC8vIGRhdGEtc3RpY2t5LXRvcD1cIlwiINC00LvRjyDRgNC+0LTQuNGC0LXQu9GPLCDQvNC+0LbQvdC+INGD0LrQsNC30LDRgtGMINC+0YLRgdGC0YPQvyDRgdCy0LXRgNGF0YNcclxuXHQvLyBkYXRhLXN0aWNreS1ib3R0b209XCJcIiDQtNC70Y8g0YDQvtC00LjRgtC10LvRjywg0LzQvtC20L3QviDRg9C60LDQt9Cw0YLRjCDQvtGC0YHRgtGD0L8g0YHQvdC40LfRg1xyXG5cdC8vIGRhdGEtc3RpY2t5LWl0ZW0g0LTQu9GPINC/0YDQuNC70LjQv9Cw0Y7RidC10LPQviDQsdC70L7QutCwICpcclxuXHRmdW5jdGlvbiBzdGlja3lCbG9ja0luaXQoKSB7XHJcblx0XHRjb25zdCBzdGlja3lQYXJlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3RpY2t5XScpO1xyXG5cdFx0aWYgKHN0aWNreVBhcmVudHMubGVuZ3RoKSB7XHJcblx0XHRcdHN0aWNreVBhcmVudHMuZm9yRWFjaChzdGlja3lQYXJlbnQgPT4ge1xyXG5cdFx0XHRcdGxldCBzdGlja3lDb25maWcgPSB7XHJcblx0XHRcdFx0XHRtZWRpYTogc3RpY2t5UGFyZW50LmRhdGFzZXQuc3RpY2t5ID8gcGFyc2VJbnQoc3RpY2t5UGFyZW50LmRhdGFzZXQuc3RpY2t5KSA6IG51bGwsXHJcblx0XHRcdFx0XHR0b3A6IHN0aWNreVBhcmVudC5kYXRhc2V0LnN0aWNreVRvcCA/IHBhcnNlSW50KHN0aWNreVBhcmVudC5kYXRhc2V0LnN0aWNreVRvcCkgOiAwLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBzdGlja3lQYXJlbnQuZGF0YXNldC5zdGlja3lCb3R0b20gPyBwYXJzZUludChzdGlja3lQYXJlbnQuZGF0YXNldC5zdGlja3lCb3R0b20pIDogMCxcclxuXHRcdFx0XHRcdGhlYWRlcjogc3RpY2t5UGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zdGlja3ktaGVhZGVyJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIuaGVhZGVyJykub2Zmc2V0SGVpZ2h0IDogMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdGlja3lCbG9ja0l0ZW0oc3RpY2t5UGFyZW50LCBzdGlja3lDb25maWcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gc3RpY2t5QmxvY2tJdGVtKHN0aWNreVBhcmVudCwgc3RpY2t5Q29uZmlnKSB7XHJcblx0XHRjb25zdCBzdGlja3lCbG9ja0l0ZW0gPSBzdGlja3lQYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3RpY2t5LWl0ZW1dJyk7XHJcblx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSBzdGlja3lDb25maWcuaGVhZGVyO1xyXG5cdFx0Y29uc3Qgb2Zmc2V0VG9wID0gaGVhZGVySGVpZ2h0ICsgc3RpY2t5Q29uZmlnLnRvcDtcclxuXHRcdGNvbnN0IHN0YXJ0UG9pbnQgPSBzdGlja3lCbG9ja0l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgc2Nyb2xsWSAtIG9mZnNldFRvcDtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2luZG93U2Nyb2xsXCIsIHN0aWNreUJsb2NrQWN0aW9ucyk7XHJcblx0XHQvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHN0aWNreUJsb2NrQWN0aW9ucyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gc3RpY2t5QmxvY2tBY3Rpb25zKGUpIHtcclxuXHRcdFx0Y29uc3QgZW5kUG9pbnQgPSAoc3RpY2t5UGFyZW50Lm9mZnNldEhlaWdodCArIHN0aWNreVBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGxZKSAtIChvZmZzZXRUb3AgKyBzdGlja3lCbG9ja0l0ZW0ub2Zmc2V0SGVpZ2h0ICsgc3RpY2t5Q29uZmlnLmJvdHRvbSk7XHJcblx0XHRcdGxldCBzdGlja3lJdGVtVmFsdWVzID0ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcblx0XHRcdFx0Ym90dG9tOiBcImF1dG9cIixcclxuXHRcdFx0XHR0b3A6IFwiMHB4XCIsXHJcblx0XHRcdFx0bGVmdDogXCIwcHhcIixcclxuXHRcdFx0XHR3aWR0aDogXCJhdXRvXCJcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXN0aWNreUNvbmZpZy5tZWRpYSB8fCBzdGlja3lDb25maWcubWVkaWEgPCB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cdFx0XHRcdGlmIChvZmZzZXRUb3AgKyBzdGlja3lDb25maWcuYm90dG9tICsgc3RpY2t5QmxvY2tJdGVtLm9mZnNldEhlaWdodCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG5cdFx0XHRcdFx0aWYgKHNjcm9sbFkgPj0gc3RhcnRQb2ludCAmJiBzY3JvbGxZIDw9IGVuZFBvaW50KSB7XHJcblx0XHRcdFx0XHRcdHN0aWNreUl0ZW1WYWx1ZXMucG9zaXRpb24gPSBgZml4ZWRgO1xyXG5cdFx0XHRcdFx0XHRzdGlja3lJdGVtVmFsdWVzLmJvdHRvbSA9IGBhdXRvYDtcclxuXHRcdFx0XHRcdFx0c3RpY2t5SXRlbVZhbHVlcy50b3AgPSBgJHtvZmZzZXRUb3B9cHhgO1xyXG5cdFx0XHRcdFx0XHRzdGlja3lJdGVtVmFsdWVzLmxlZnQgPSBgJHtzdGlja3lCbG9ja0l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH1weGA7IC8vINCj0YfQtdGB0YLRjCDRgNCw0LfQvdC40YbRgyDQsiDRiNC40YDQuNC90LUg0Y3QutGA0LDQvdCwP1xyXG5cdFx0XHRcdFx0XHRzdGlja3lJdGVtVmFsdWVzLndpZHRoID0gYCR7c3RpY2t5QmxvY2tJdGVtLm9mZnNldFdpZHRofXB4YDtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsWSA+PSBlbmRQb2ludCkge1xyXG5cdFx0XHRcdFx0XHRzdGlja3lJdGVtVmFsdWVzLnBvc2l0aW9uID0gYGFic29sdXRlYDtcclxuXHRcdFx0XHRcdFx0c3RpY2t5SXRlbVZhbHVlcy5ib3R0b20gPSBgJHtzdGlja3lDb25maWcuYm90dG9tfXB4YDtcclxuXHRcdFx0XHRcdFx0c3RpY2t5SXRlbVZhbHVlcy50b3AgPSBgYXV0b2A7XHJcblx0XHRcdFx0XHRcdHN0aWNreUl0ZW1WYWx1ZXMubGVmdCA9IGAwcHhgO1xyXG5cdFx0XHRcdFx0XHRzdGlja3lJdGVtVmFsdWVzLndpZHRoID0gYCR7c3RpY2t5QmxvY2tJdGVtLm9mZnNldFdpZHRofXB4YDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0c3RpY2t5QmxvY2tUeXBlKHN0aWNreUJsb2NrSXRlbSwgc3RpY2t5SXRlbVZhbHVlcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHN0aWNreUJsb2NrVHlwZShzdGlja3lCbG9ja0l0ZW0sIHN0aWNreUl0ZW1WYWx1ZXMpIHtcclxuXHRcdHN0aWNreUJsb2NrSXRlbS5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOiR7c3RpY2t5SXRlbVZhbHVlcy5wb3NpdGlvbn07Ym90dG9tOiR7c3RpY2t5SXRlbVZhbHVlcy5ib3R0b219O3RvcDoke3N0aWNreUl0ZW1WYWx1ZXMudG9wfTtsZWZ0OiR7c3RpY2t5SXRlbVZhbHVlcy5sZWZ0fTt3aWR0aDoke3N0aWNreUl0ZW1WYWx1ZXMud2lkdGh9O2A7XHJcblx0fVxyXG5cdHN0aWNreUJsb2NrSW5pdCgpO1xyXG59XHJcbi8vINCf0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INC80L7QtNGD0LvRjyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQt9Cw0L/Rg9GB0YLQuNGC0YHRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuFxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRpZiAoYWRkV2luZG93U2Nyb2xsRXZlbnQpIHtcclxuXHRcdGxldCB3aW5kb3dTY3JvbGwgPSBuZXcgRXZlbnQoXCJ3aW5kb3dTY3JvbGxcIik7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHdpbmRvd1Njcm9sbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0sIDApOyIsIi8vIER5bmFtaWMgQWRhcHQgdi4xXHJcbi8vIEhUTUwgZGF0YS1kYT1cIndoZXJlKHVuaXEgY2xhc3MgbmFtZSksd2hlbihicmVha3BvaW50KSxwb3NpdGlvbihkaWdpKVwiXHJcbi8vIGUueC4gZGF0YS1kYT1cIi5pdGVtLDk5MiwyXCJcclxuLy8gQW5kcmlrYW55Y2ggWWV2aGVuIDIwMjBcclxuLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9mcmVlbGFuY2VybGlmZXN0eWxlXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gRHluYW1pY0FkYXB0KHR5cGUpIHtcclxuXHR0aGlzLnR5cGUgPSB0eXBlO1xyXG59XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0Ly8g0LzQsNGB0YHQuNCyINC+0LHRitC10LrRgtC+0LJcclxuXHR0aGlzLtC+YmplY3RzID0gW107XHJcblx0dGhpcy5kYUNsYXNzbmFtZSA9IFwiX2R5bmFtaWNfYWRhcHRfXCI7XHJcblx0Ly8g0LzQsNGB0YHQuNCyIERPTS3RjdC70LXQvNC10L3RgtC+0LJcclxuXHR0aGlzLm5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRhXVwiKTtcclxuXHQvLyDQvdCw0L/QvtC70L3QtdC90LjQtSDQvmJqZWN0cyDQvtCx0YrQutGC0LDQvNC4XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpXTtcclxuXHRcdGNvbnN0IGRhdGEgPSBub2RlLmRhdGFzZXQuZGEudHJpbSgpO1xyXG5cdFx0Y29uc3QgZGF0YUFycmF5ID0gZGF0YS5zcGxpdChcIixcIik7XHJcblx0XHRjb25zdCDQvmJqZWN0ID0ge307XHJcblx0XHTQvmJqZWN0LmVsZW1lbnQgPSBub2RlO1xyXG5cdFx00L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcblx0XHTQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcclxuXHRcdNC+YmplY3QuYnJlYWtwb2ludCA9IGRhdGFBcnJheVsxXSA/IGRhdGFBcnJheVsxXS50cmltKCkgOiBcIjc2N1wiO1xyXG5cdFx00L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiBcImxhc3RcIjtcclxuXHRcdNC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcblx0XHR0aGlzLtC+YmplY3RzLnB1c2go0L5iamVjdCk7XHJcblx0fVxyXG5cdHRoaXMuYXJyYXlTb3J0KHRoaXMu0L5iamVjdHMpO1xyXG5cdC8vINC80LDRgdGB0LjQsiDRg9C90LjQutCw0LvRjNC90YvRhSDQvNC10LTQuNCwLdC30LDQv9GA0L7RgdC+0LJcclxuXHR0aGlzLm1lZGlhUXVlcmllcyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0aGlzLtC+YmplY3RzLCBmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0cmV0dXJuICcoJyArIHRoaXMudHlwZSArIFwiLXdpZHRoOiBcIiArIGl0ZW0uYnJlYWtwb2ludCArIFwicHgpLFwiICsgaXRlbS5icmVha3BvaW50O1xyXG5cdH0sIHRoaXMpO1xyXG5cdHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMubWVkaWFRdWVyaWVzLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHNlbGYsIGl0ZW0pID09PSBpbmRleDtcclxuXHR9KTtcclxuXHQvLyDQvdCw0LLQtdGI0LjQstCw0L3QuNC1INGB0LvRg9GI0LDRgtC10LvRjyDQvdCwINC80LXQtNC40LAt0LfQsNC/0YDQvtGBXHJcblx0Ly8g0Lgg0LLRi9C30L7QsiDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINC/0YDQuCDQv9C10YDQstC+0Lwg0LfQsNC/0YPRgdC60LVcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWFRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xyXG5cdFx0Y29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcclxuXHRcdGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVNwbGl0WzBdKTtcclxuXHRcdGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XHJcblx0XHQvLyDQvNCw0YHRgdC40LIg0L7QsdGK0LXQutGC0L7QsiDRgSDQv9C+0LTRhdC+0LTRj9GJ0LjQvCDQsdGA0LXQudC60L/QvtC40L3RgtC+0LxcclxuXHRcdGNvbnN0INC+YmplY3RzRmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMu0L5iamVjdHMsIGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdHJldHVybiBpdGVtLmJyZWFrcG9pbnQgPT09IG1lZGlhQnJlYWtwb2ludDtcclxuXHRcdH0pO1xyXG5cdFx0bWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF90aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubWVkaWFIYW5kbGVyKG1hdGNoTWVkaWEsINC+YmplY3RzRmlsdGVyKTtcclxuXHR9XHJcbn07XHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKG1hdGNoTWVkaWEsINC+YmplY3RzKSB7XHJcblx0aWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcblx0XHRcdNC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcblx0XHRcdHRoaXMubW92ZVRvKNC+YmplY3QucGxhY2UsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5kZXN0aW5hdGlvbik7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vZm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Zm9yIChsZXQgaSA9INC+YmplY3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuXHRcdFx0aWYgKNC+YmplY3QuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5kYUNsYXNzbmFtZSkpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmVCYWNrKNC+YmplY3QucGFyZW50LCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuaW5kZXgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4vLyDQpNGD0L3QutGG0LjRjyDQv9C10YDQtdC80LXRidC10L3QuNGPXHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBsYWNlLCBlbGVtZW50LCBkZXN0aW5hdGlvbikge1xyXG5cdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmRhQ2xhc3NuYW1lKTtcclxuXHRpZiAocGxhY2UgPT09ICdsYXN0JyB8fCBwbGFjZSA+PSBkZXN0aW5hdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdGRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGlmIChwbGFjZSA9PT0gJ2ZpcnN0Jykge1xyXG5cdFx0ZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGRlc3RpbmF0aW9uLmNoaWxkcmVuW3BsYWNlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcbn1cclxuLy8g0KTRg9C90LrRhtC40Y8g0LLQvtC30LLRgNCw0YLQsFxyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVCYWNrID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCwgaW5kZXgpIHtcclxuXHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XHJcblx0aWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cGFyZW50LmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG5cdH1cclxufVxyXG4vLyDQpNGD0L3QutGG0LjRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LjQvdC00LXQutGB0LAg0LLQvdGD0YLRgNC4INGA0L7QtNC40YLQtdC70Y9cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbmRleEluUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCkge1xyXG5cdGNvbnN0IGFycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcclxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgZWxlbWVudCk7XHJcbn07XHJcbi8vINCk0YPQvdC60YbQuNGPINGB0L7RgNGC0LjRgNC+0LLQutC4INC80LDRgdGB0LjQstCwINC/0L4gYnJlYWtwb2ludCDQuCBwbGFjZSBcclxuLy8g0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOINC00LvRjyB0aGlzLnR5cGUgPSBtaW5cclxuLy8g0L/QviDRg9Cx0YvQstCw0L3QuNGOINC00LvRjyB0aGlzLnR5cGUgPSBtYXhcclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5hcnJheVNvcnQgPSBmdW5jdGlvbiAoYXJyKSB7XHJcblx0aWYgKHRoaXMudHlwZSA9PT0gXCJtaW5cIikge1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG5cdFx0XHRcdGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChhLnBsYWNlID09PSBcImZpcnN0XCIgfHwgYi5wbGFjZSA9PT0gXCJsYXN0XCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChhLnBsYWNlID09PSBcImxhc3RcIiB8fCBiLnBsYWNlID09PSBcImZpcnN0XCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGEucGxhY2UgLSBiLnBsYWNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYS5icmVha3BvaW50IC0gYi5icmVha3BvaW50O1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwoYXJyLCBmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcclxuXHRcdFx0XHRpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoYS5wbGFjZSA9PT0gXCJmaXJzdFwiIHx8IGIucGxhY2UgPT09IFwibGFzdFwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChhLnBsYWNlID09PSBcImxhc3RcIiB8fCBiLnBsYWNlID09PSBcImZpcnN0XCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBiLnBsYWNlIC0gYS5wbGFjZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludDtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxufTtcclxuY29uc3QgZGEgPSBuZXcgRHluYW1pY0FkYXB0KFwibWF4XCIpO1xyXG5kYS5pbml0KCk7IiwiLy8g0JzQvtC00YPQu9GMINC/0L7Qv9Cw0L/QvtCyXHJcbi8vIChjKSDQpNGA0LjQu9Cw0L3RgdC10YAg0L/QviDQttC40LfQvdC4LCDQpdC80YPRgNGL0Lkg0JrQvtGCXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2Z1bmtjaW9uYWwtcG9wdXAuaHRtbFxyXG4vLyDQodC90LjQv9C/0LXRgiAoSFRNTCk6IHBsXHJcblxyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGE0YPQvdC60YbQuNC+0L3QsNC70LAgXCLQp9C10YDRgtC+0LPQvtCyINCk0YDQuNC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUsIGJvZHlMb2NrU3RhdHVzLCBib2R5TG9jaywgYm9keVVubG9jaywgYm9keUxvY2tUb2dnbGUsIEZMUyB9IGZyb20gXCIuLi9maWxlcy9mdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuLi9maWxlcy9tb2R1bGVzLmpzXCI7XHJcblxyXG4vLyDQmtC70LDRgdGBIFBvcHVwXHJcbmNsYXNzIFBvcHVwIHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcblx0XHRsZXQgY29uZmlnID0ge1xyXG5cdFx0XHRsb2dnaW5nOiB0cnVlLFxyXG5cdFx0XHRpbml0OiB0cnVlLFxyXG5cdFx0XHQvLyDQlNC70Y8g0LrQvdC+0L/QvtC6IFxyXG5cdFx0XHRhdHRyaWJ1dGVPcGVuQnV0dG9uOiAnZGF0YS1wb3B1cCcsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDQutC90L7Qv9C60LgsINC60L7RgtC+0YDQsNGPINCy0YvQt9GL0LLQsNC10YIg0L/QvtC/0LDQv1xyXG5cdFx0XHRhdHRyaWJ1dGVDbG9zZUJ1dHRvbjogJ2RhdGEtY2xvc2UnLCAvLyDQkNGC0YDQuNCx0YPRgiDQtNC70Y8g0LrQvdC+0L/QutC4LCDQutC+0YLQvtGA0LDRjyDQt9Cw0LrRgNGL0LLQsNC10YIg0L/QvtC/0LDQv1xyXG5cdFx0XHQvLyDQlNC70Y8g0YHRgtC+0YDQvtC90L3QuNGFINC+0LHRitC10LrRgtC+0LJcclxuXHRcdFx0Zml4RWxlbWVudFNlbGVjdG9yOiAnW2RhdGEtbHBdJywgLy8g0JDRgtGA0LjQsdGD0YIg0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiDRgSDQu9C10LLRi9C8INC/0LDQtNC00LjQvdCz0L7QvCAo0LrQvtGC0L7RgNGL0LUgZml4ZWQpXHJcblx0XHRcdC8vINCU0LvRjyDQvtCx0YrQtdC60YLQsCDQv9C+0L/QsNC/0LBcclxuXHRcdFx0eW91dHViZUF0dHJpYnV0ZTogJ2RhdGEtcG9wdXAteW91dHViZScsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDQutC+0LTQsCB5b3V0dWJlXHJcblx0XHRcdHlvdXR1YmVQbGFjZUF0dHJpYnV0ZTogJ2RhdGEtcG9wdXAteW91dHViZS1wbGFjZScsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDQstGB0YLQsNCy0LrQuCDRgNC+0LvQuNC60LAgeW91dHViZVxyXG5cdFx0XHRzZXRBdXRvcGxheVlvdXR1YmU6IHRydWUsXHJcblx0XHRcdC8vINCY0LfQvNC10L3QtdC90LjQtSDQutC70LDRgdGB0L7QslxyXG5cdFx0XHRjbGFzc2VzOiB7XHJcblx0XHRcdFx0cG9wdXA6ICdwb3B1cCcsXHJcblx0XHRcdFx0Ly8gcG9wdXBXcmFwcGVyOiAncG9wdXBfX3dyYXBwZXInLFxyXG5cdFx0XHRcdHBvcHVwQ29udGVudDogJ3BvcHVwX19jb250ZW50JyxcclxuXHRcdFx0XHRwb3B1cEFjdGl2ZTogJ3BvcHVwX3Nob3cnLCAvLyDQlNC+0LHQsNCy0LvRj9C10YLRgdGPINC00LvRjyDQv9C+0L/QsNC/0LAsINC60L7Qs9C00LAg0L7QvSDQvtGC0LrRgNGL0LLQsNC10YLRgdGPXHJcblx0XHRcdFx0Ym9keUFjdGl2ZTogJ3BvcHVwLXNob3cnLCAvLyDQlNC+0LHQsNCy0LvRj9C10YLRgdGPINC00LvRjyDQsdC+0LTQuCwg0LrQvtCz0LTQsCDQv9C+0L/QsNC/INC+0YLQutGA0YvRglxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb2N1c0NhdGNoOiB0cnVlLCAvLyDQpNC+0LrRg9GBINCy0L3Rg9GC0YDQuCDQv9C+0L/QsNC/0LAg0LfQsNGG0LjQutC70LXQvVxyXG5cdFx0XHRjbG9zZUVzYzogdHJ1ZSwgLy8g0JfQsNC60YDRi9GC0LjQtSDQv9C+IEVTQ1xyXG5cdFx0XHRib2R5TG9jazogdHJ1ZSwgLy8g0JHQu9C+0LrQuNGA0L7QstC60LAg0YHQutGA0L7Qu9C70LBcclxuXHRcdFx0aGFzaFNldHRpbmdzOiB7XHJcblx0XHRcdFx0bG9jYXRpb246IHRydWUsIC8vINCl0Y3RiCDQsiDQsNC00YDQtdGB0L3QvtC5INGB0YLRgNC+0LrQtVxyXG5cdFx0XHRcdGdvSGFzaDogdHJ1ZSwgLy8g0J/QtdGA0LXRhdC+0LQg0L/QviDQvdCw0LvQuNGH0LjRjiDQsiDQsNC00YDQtdGB0L3QvtC5INGB0YLRgNC+0LrQtVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbjogeyAvLyDQodC+0LHRi9GC0LjRj1xyXG5cdFx0XHRcdGJlZm9yZU9wZW46IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0XHRhZnRlck9wZW46IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0XHRiZWZvcmVDbG9zZTogZnVuY3Rpb24gKCkgeyB9LFxyXG5cdFx0XHRcdGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHRcdHRoaXMueW91VHViZUNvZGU7XHJcblx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0Ly8g0KLQtdC60YPRidC10LUg0L7QutC90L5cclxuXHRcdHRoaXMudGFyZ2V0T3BlbiA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IGZhbHNlLFxyXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdC8vINCf0YDQtdC00YvQtNGD0YnQtdC1INC+0YLQutGA0YvRgtC+0LVcclxuXHRcdHRoaXMucHJldmlvdXNPcGVuID0ge1xyXG5cdFx0XHRzZWxlY3RvcjogZmFsc2UsXHJcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxyXG5cdFx0fVxyXG5cdFx0Ly8g0J/QvtGB0LvQtdC00L3QtdC1INC30LDQutGA0YvRgtC+0LVcclxuXHRcdHRoaXMubGFzdENsb3NlZCA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IGZhbHNlLFxyXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdHRoaXMuX2RhdGFWYWx1ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5oYXNoID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5fcmVvcGVuID0gZmFsc2U7XHJcblx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmxhc3RGb2N1c0VsID0gZmFsc2U7XHJcblx0XHR0aGlzLl9mb2N1c0VsID0gW1xyXG5cdFx0XHQnYVtocmVmXScsXHJcblx0XHRcdCdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQnc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXHJcblx0XHRcdCdhcmVhW2hyZWZdJyxcclxuXHRcdFx0J2lmcmFtZScsXHJcblx0XHRcdCdvYmplY3QnLFxyXG5cdFx0XHQnZW1iZWQnLFxyXG5cdFx0XHQnW2NvbnRlbnRlZGl0YWJsZV0nLFxyXG5cdFx0XHQnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ1xyXG5cdFx0XTtcclxuXHRcdC8vdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihjb25maWcsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdC4uLm9wdGlvbnMsXHJcblx0XHRcdGNsYXNzZXM6IHtcclxuXHRcdFx0XHQuLi5jb25maWcuY2xhc3NlcyxcclxuXHRcdFx0XHQuLi5vcHRpb25zPy5jbGFzc2VzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYXNoU2V0dGluZ3M6IHtcclxuXHRcdFx0XHQuLi5jb25maWcuaGFzaFNldHRpbmdzLFxyXG5cdFx0XHRcdC4uLm9wdGlvbnM/Lmhhc2hTZXR0aW5ncyxcclxuXHRcdFx0fSxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHQuLi5jb25maWcub24sXHJcblx0XHRcdFx0Li4ub3B0aW9ucz8ub24sXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuYm9keUxvY2sgPSBmYWxzZTtcclxuXHRcdHRoaXMub3B0aW9ucy5pbml0ID8gdGhpcy5pbml0UG9wdXBzKCkgOiBudWxsXHJcblx0fVxyXG5cdGluaXRQb3B1cHMoKSB7XHJcblx0XHR0aGlzLnBvcHVwTG9nZ2luZyhg0J/RgNC+0YHQvdGD0LvRgdGPYCk7XHJcblx0XHR0aGlzLmV2ZW50c1BvcHVwKCk7XHJcblx0fVxyXG5cdGV2ZW50c1BvcHVwKCkge1xyXG5cdFx0Ly8g0JrQu9C40Log0L3QsCDQstGB0LXQvCDQtNC+0LrRg9C80LXQvdGC0LVcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHQvLyDQmtC70LjQuiDQv9C+INC60L3QvtC/0LrQtSBcItC+0YLQutGA0YvRgtGMXCJcclxuXHRcdFx0Y29uc3QgYnV0dG9uT3BlbiA9IGUudGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufV1gKTtcclxuXHRcdFx0aWYgKGJ1dHRvbk9wZW4pIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5fZGF0YVZhbHVlID0gYnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b24pID9cclxuXHRcdFx0XHRcdGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9uKSA6XHJcblx0XHRcdFx0XHQnZXJyb3InO1xyXG5cdFx0XHRcdHRoaXMueW91VHViZUNvZGUgPSBidXR0b25PcGVuLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMueW91dHViZUF0dHJpYnV0ZSkgP1xyXG5cdFx0XHRcdFx0YnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnlvdXR1YmVBdHRyaWJ1dGUpIDpcclxuXHRcdFx0XHRcdG51bGw7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2RhdGFWYWx1ZSAhPT0gJ2Vycm9yJykge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmlzT3BlbikgdGhpcy5sYXN0Rm9jdXNFbCA9IGJ1dHRvbk9wZW47XHJcblx0XHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IgPSBgJHt0aGlzLl9kYXRhVmFsdWV9YDtcclxuXHRcdFx0XHRcdHRoaXMuX3NlbGVjdG9yT3BlbiA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLm9wZW4oKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHRoaXMucG9wdXBMb2dnaW5nKGDQntC5INC+0LksINC90LUg0LfQsNC/0L7Qu9C90LXQvSDQsNGC0YDQuNCx0YPRgiDRgyAke2J1dHRvbk9wZW4uY2xhc3NMaXN0fWApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g0JfQsNC60YDRi9GC0LjQtSDQvdCwINC/0YPRgdGC0L7QvCDQvNC10YHRgtC1IChwb3B1cF9fd3JhcHBlcikg0Lgg0LrQvdC+0L/QutC4INC30LDQutGA0YvRgtC40Y8gKHBvcHVwX19jbG9zZSkg0LTQu9GPINC30LDQutGA0YvRgtC40Y9cclxuXHRcdFx0Y29uc3QgYnV0dG9uQ2xvc2UgPSBlLnRhcmdldC5jbG9zZXN0KGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlQ2xvc2VCdXR0b259XWApO1xyXG5cdFx0XHRpZiAoYnV0dG9uQ2xvc2UgfHwgIWUudGFyZ2V0LmNsb3Nlc3QoYC4ke3RoaXMub3B0aW9ucy5jbGFzc2VzLnBvcHVwQ29udGVudH1gKSAmJiB0aGlzLmlzT3Blbikge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0Ly8g0JfQsNC60YDRi9GC0LjQtSDQv9C+IEVTQ1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jbG9zZUVzYyAmJiBlLndoaWNoID09IDI3ICYmIGUuY29kZSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc09wZW4pIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZvY3VzQ2F0Y2ggJiYgZS53aGljaCA9PSA5ICYmIHRoaXMuaXNPcGVuKSB7XHJcblx0XHRcdFx0dGhpcy5fZm9jdXNDYXRjaChlKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH0uYmluZCh0aGlzKSlcclxuXHJcblx0XHQvLyDQntGC0LrRgNGL0YLQuNC1INC/0L4g0YXQtdGI0YNcclxuXHRcdGlmICh0aGlzLm9wdGlvbnMuaGFzaFNldHRpbmdzLmdvSGFzaCkge1xyXG5cdFx0XHQvLyDQn9GA0L7QstC10YDQutCwINC40LfQvNC10L3QtdC90LjRjyDQsNC00YDQtdGB0L3QvtC5INGB0YLRgNC+0LrQuFxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuXHRcdFx0XHRcdHRoaXMuX29wZW5Ub0hhc2goKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jbG9zZSh0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fS5iaW5kKHRoaXMpKVxyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9vcGVuVG9IYXNoKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LmJpbmQodGhpcykpXHJcblx0XHR9XHJcblx0fVxyXG5cdG9wZW4oc2VsZWN0b3JWYWx1ZSkge1xyXG5cdFx0aWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcblx0XHRcdC8vINCV0YHQu9C4INC/0LXRgNC10LQg0L7RgtC60YDRi9GC0LjQtdC8INC/0L7Qv9Cw0L/QsCDQsdGL0Lsg0YDQtdC20LjQvCBsb2NrXHJcblx0XHRcdHRoaXMuYm9keUxvY2sgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrJykgJiYgIXRoaXMuaXNPcGVuID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly8g0JXRgdC70Lgg0LLQstC10YHRgtC4INC30L3QsNGH0LXQvdC40LUg0YHQtdC70LXQutGC0L7RgNCwICjRgdC10LvQtdC60YLQvtGAINC90LDRgdGC0YDQsNC40LLQsNC10YLRgdGPINCyIG9wdGlvbnMpXHJcblx0XHRcdGlmIChzZWxlY3RvclZhbHVlICYmIHR5cGVvZiAoc2VsZWN0b3JWYWx1ZSkgPT09IFwic3RyaW5nXCIgJiYgc2VsZWN0b3JWYWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuXHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IgPSBzZWxlY3RvclZhbHVlO1xyXG5cdFx0XHRcdHRoaXMuX3NlbGVjdG9yT3BlbiA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuaXNPcGVuKSB7XHJcblx0XHRcdFx0dGhpcy5fcmVvcGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aGlzLl9zZWxlY3Rvck9wZW4pIHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA9IHRoaXMubGFzdENsb3NlZC5zZWxlY3RvcjtcclxuXHRcdFx0aWYgKCF0aGlzLl9yZW9wZW4pIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuXHJcblx0XHRcdHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50KSB7XHJcblx0XHRcdFx0Ly8gWW91VHViZVxyXG5cdFx0XHRcdGlmICh0aGlzLnlvdVR1YmVDb2RlKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjb2RlVmlkZW8gPSB0aGlzLnlvdVR1YmVDb2RlO1xyXG5cdFx0XHRcdFx0Y29uc3QgdXJsVmlkZW8gPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtjb2RlVmlkZW99P3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MWBcclxuXHRcdFx0XHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdFx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGF1dG9wbGF5ID0gdGhpcy5vcHRpb25zLnNldEF1dG9wbGF5WW91dHViZSA/ICdhdXRvcGxheTsnIDogJyc7XHJcblx0XHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvdycsIGAke2F1dG9wbGF5fTsgZW5jcnlwdGVkLW1lZGlhYCk7XHJcblxyXG5cdFx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsVmlkZW8pO1xyXG5cclxuXHRcdFx0XHRcdGlmICghdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYCkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgeW91dHViZVBsYWNlID0gdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0Jykuc2V0QXR0cmlidXRlKGAke3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9YCwgJycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYCkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5oYXNoU2V0dGluZ3MubG9jYXRpb24pIHtcclxuXHRcdFx0XHRcdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDRhdGN0YjQsCDQuCDQtdCz0L4g0LLRi9GB0YLQsNCy0LvQtdC90LjQtSBcclxuXHRcdFx0XHRcdHRoaXMuX2dldEhhc2goKTtcclxuXHRcdFx0XHRcdHRoaXMuX3NldEhhc2goKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vINCU0L4g0L7RgtC60YDRi9GC0LjRj1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vbi5iZWZvcmVPcGVuKHRoaXMpO1xyXG5cdFx0XHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0LLQvtC1INGB0L7QsdGL0YLQuNC1INC/0L7RgdC70LUg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LBcclxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJlZm9yZVBvcHVwT3BlblwiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSk7XHJcblxyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmNsYXNzZXMucG9wdXBBY3RpdmUpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmUpO1xyXG5cclxuXHRcdFx0XHRpZiAoIXRoaXMuX3Jlb3Blbikge1xyXG5cdFx0XHRcdFx0IXRoaXMuYm9keUxvY2sgPyBib2R5TG9jaygpIDogbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB0aGlzLl9yZW9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuXHRcdFx0XHQvLyDQl9Cw0L/QvtC80LjQvdCw0Y4g0Y3RgtC+INC+0YLQutGA0YvRgtC+0LUg0L7QutC90L4uINCe0L3QviDQsdGD0LTQtdGCINC/0L7RgdC70LXQtNC90LjQvCDQvtGC0LrRgNGL0YLRi9C8XHJcblx0XHRcdFx0dGhpcy5wcmV2aW91c09wZW4uc2VsZWN0b3IgPSB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3I7XHJcblx0XHRcdFx0dGhpcy5wcmV2aW91c09wZW4uZWxlbWVudCA9IHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50O1xyXG5cclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2ZvY3VzVHJhcCgpO1xyXG5cdFx0XHRcdH0sIDUwKTtcclxuXHJcblx0XHRcdFx0Ly8g0J/QvtGB0LvQtSDQvtGC0LrRgNGL0YLQuNGPXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9uLmFmdGVyT3Blbih0aGlzKTtcclxuXHRcdFx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdCy0L7QtSDRgdC+0LHRi9GC0LjQtSDQv9C+0YHQu9C1INC+0YLQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9CwXHJcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJhZnRlclBvcHVwT3BlblwiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cExvZ2dpbmcoYNCe0YLQutGA0YvQuyDQv9C+0L/QsNC/YCk7XHJcblxyXG5cdFx0XHR9IGVsc2UgdGhpcy5wb3B1cExvZ2dpbmcoYNCe0Lkg0L7QuSwg0YLQsNC60L7Qs9C+INC/0L7Qv9Cw0L/QsCDQvdC10YIu0J/RgNC+0LLQtdGA0YzRgtC1INC60L7RgNGA0LXQutGC0L3QvtGB0YLRjCDQstCy0L7QtNCwLiBgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2xvc2Uoc2VsZWN0b3JWYWx1ZSkge1xyXG5cdFx0aWYgKHNlbGVjdG9yVmFsdWUgJiYgdHlwZW9mIChzZWxlY3RvclZhbHVlKSA9PT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvclZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG5cdFx0XHR0aGlzLnByZXZpb3VzT3Blbi5zZWxlY3RvciA9IHNlbGVjdG9yVmFsdWU7XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuaXNPcGVuIHx8ICFib2R5TG9ja1N0YXR1cykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvLyDQlNC+INC30LDQutGA0YvRgtC40Y9cclxuXHRcdHRoaXMub3B0aW9ucy5vbi5iZWZvcmVDbG9zZSh0aGlzKTtcclxuXHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0LLQvtC1INGB0L7QsdGL0YLQuNC1INC/0LXRgNC10LQg0LfQsNC60YDRi9GC0LjQtdC8INC/0L7Qv9Cw0L/QsFxyXG5cdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJiZWZvcmVQb3B1cENsb3NlXCIsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSkpO1xyXG5cclxuXHRcdC8vIFlvdVR1YmVcclxuXHRcdGlmICh0aGlzLnlvdVR1YmVDb2RlKSB7XHJcblx0XHRcdGlmICh0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKSlcclxuXHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKS5pbm5lckhUTUwgPSAnJztcclxuXHRcdH1cclxuXHRcdHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuY2xhc3Nlcy5wb3B1cEFjdGl2ZSk7XHJcblx0XHQvLyBhcmlhLWhpZGRlblxyXG5cdFx0dGhpcy5wcmV2aW91c09wZW4uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHRcdGlmICghdGhpcy5fcmVvcGVuKSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmUpO1xyXG5cdFx0XHQhdGhpcy5ib2R5TG9jayA/IGJvZHlVbmxvY2soKSA6IG51bGw7XHJcblx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHQvLyDQntGH0LjRidC10L3QuNC1INCw0LTRgNC10YHQvdC+0Lkg0YHRgtGA0L7QutC4XHJcblx0XHR0aGlzLl9yZW1vdmVIYXNoKCk7XHJcblx0XHRpZiAodGhpcy5fc2VsZWN0b3JPcGVuKSB7XHJcblx0XHRcdHRoaXMubGFzdENsb3NlZC5zZWxlY3RvciA9IHRoaXMucHJldmlvdXNPcGVuLnNlbGVjdG9yO1xyXG5cdFx0XHR0aGlzLmxhc3RDbG9zZWQuZWxlbWVudCA9IHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQ7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly8g0J/QvtGB0LvQtSDQt9Cw0LrRgNGL0YLQuNGPXHJcblx0XHR0aGlzLm9wdGlvbnMub24uYWZ0ZXJDbG9zZSh0aGlzKTtcclxuXHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0LLQvtC1INGB0L7QsdGL0YLQuNC1INC/0L7RgdC70LUg0LfQsNC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LBcclxuXHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYWZ0ZXJQb3B1cENsb3NlXCIsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSkpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9mb2N1c1RyYXAoKTtcclxuXHRcdH0sIDUwKTtcclxuXHJcblx0XHR0aGlzLnBvcHVwTG9nZ2luZyhg0JfQsNC60YDRi9C7INC/0L7Qv9Cw0L9gKTtcclxuXHR9XHJcblx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INGF0Y3RiNCwIFxyXG5cdF9nZXRIYXNoKCkge1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5oYXNoU2V0dGluZ3MubG9jYXRpb24pIHtcclxuXHRcdFx0dGhpcy5oYXNoID0gdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yLmluY2x1ZGVzKCcjJykgP1xyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA6IHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvci5yZXBsYWNlKCcuJywgJyMnKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRfb3BlblRvSGFzaCgpIHtcclxuXHRcdGxldCBjbGFzc0luSGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyl9YCkgPyBgLiR7d2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKX1gIDpcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKSA/IGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWAgOlxyXG5cdFx0XHRcdG51bGw7XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaH1cIl1gKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaH1cIl1gKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaC5yZXBsYWNlKCcuJywgXCIjXCIpfVwiXWApO1xyXG5cdFx0aWYgKGJ1dHRvbnMgJiYgY2xhc3NJbkhhc2gpIHRoaXMub3BlbihjbGFzc0luSGFzaCk7XHJcblx0fVxyXG5cdC8vINCj0YLRgdCw0L3QvtCy0LrQsCDRhdGN0YjQsFxyXG5cdF9zZXRIYXNoKCkge1xyXG5cdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCB0aGlzLmhhc2gpO1xyXG5cdH1cclxuXHRfcmVtb3ZlSGFzaCgpIHtcclxuXHRcdGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXSlcclxuXHR9XHJcblx0X2ZvY3VzQ2F0Y2goZSkge1xyXG5cdFx0Y29uc3QgZm9jdXNhYmxlID0gdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9mb2N1c0VsKTtcclxuXHRcdGNvbnN0IGZvY3VzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmb2N1c2FibGUpO1xyXG5cdFx0Y29uc3QgZm9jdXNlZEluZGV4ID0gZm9jdXNBcnJheS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuXHRcdGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gMCkge1xyXG5cdFx0XHRmb2N1c0FycmF5W2ZvY3VzQXJyYXkubGVuZ3RoIC0gMV0uZm9jdXMoKTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gZm9jdXNBcnJheS5sZW5ndGggLSAxKSB7XHJcblx0XHRcdGZvY3VzQXJyYXlbMF0uZm9jdXMoKTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfZm9jdXNUcmFwKCkge1xyXG5cdFx0Y29uc3QgZm9jdXNhYmxlID0gdGhpcy5wcmV2aW91c09wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2ZvY3VzRWwpO1xyXG5cdFx0aWYgKCF0aGlzLmlzT3BlbiAmJiB0aGlzLmxhc3RGb2N1c0VsKSB7XHJcblx0XHRcdHRoaXMubGFzdEZvY3VzRWwuZm9jdXMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvY3VzYWJsZVswXS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDQpNGD0L3QutGG0LjRjyDQstGL0LLQvtC00LAg0LIg0LrQvtC90YHQvtC70YxcclxuXHRwb3B1cExvZ2dpbmcobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5vcHRpb25zLmxvZ2dpbmcgPyBGTFMoYFvQn9C+0L/QsNC/0L7RgV06ICR7bWVzc2FnZX1gKSA6IG51bGw7XHJcblx0fVxyXG59XHJcbi8vINCX0LDQv9GD0YHQutCw0LXQvCDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0L7QsdGK0LXQutGCINC80L7QtNGD0LvQtdC5XHJcbmZsc01vZHVsZXMucG9wdXAgPSBuZXcgUG9wdXAoe30pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qXHJcbihpKSDQmtC+0LQg0L/QvtC/0LDQtNCw0LXRgiDQsiDQuNGC0L7Qs9C+0LLRi9C5INGE0LDQudC7LFxyXG7RgtC+0LvRjNC60L4g0LrQvtCz0LTQsCDQstGL0LfQstCw0L3QsCDRhNGD0L3QutGG0LjRjyxcclxu0L3QsNC/0YDQuNC80LXRgCBmbHNGdW5jdGlvbnMuc3BvbGxlcnMoKTtcclxu0JjQu9C4INC60L7Qs9C00LAg0LjQvNC/0L7RgNGC0LjRgNC+0LLQsNC9INCy0LXRgdGMINGE0LDQudC7LFxyXG7QvdCw0L/RgNC40LzQtdGAIGltcG9ydCBcImZpbGVzL3NjcmlwdC5qc1wiO1xyXG7QndC10LjRgdC/0L7Qu9GM0LfRg9C10LzRi9C5ICjQvdC1INCy0YvQt9Cy0LDQvdC90YvQuSlcclxu0LrQvtC0INCyINC40YLQvtCz0L7QstGL0Lkg0YTQsNC50Lsg0L3QtSDQv9C+0L/QsNC00LDQtdGCLlxyXG5cclxu0JXRgdC70Lgg0LzRiyDRhdC+0YLQuNC8INC00L7QsdCw0LLQuNGC0Ywg0LzQvtC00YPQu9GMXHJcbtGB0LvQtdC00YPQtdGCINC10LPQviDRgNCw0YHRgdC60L7QvNC10L3RgtC40YDQvtCy0LDRgtGMXHJcbiovXHJcblxyXG4vLyDQktC60LvRjtGH0LjRgtGML9Cy0YvQutC70Y7Rh9C40YLRjCBGTFMgKEZ1bGwgTG9nZ2luZyBTeXN0ZW0pICjQsiDRgNCw0LHQvtGC0LUpXHJcbi8vIHdpbmRvd1snRkxTJ10gPSB0cnVlO1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQvtGB0L3QvtCy0L3QvtCz0L4g0YTQsNC50LvQsCDRgdGC0LjQu9C10LlcclxuaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KTRg9C90LrRhtC40L7QvdCw0LsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICogYXMgZmxzRnVuY3Rpb25zIGZyb20gJy4vZmlsZXMvZnVuY3Rpb25zLmpzJztcclxuXHJcbi8qINCf0YDQvtCy0LXRgNC60LAg0L/QvtC00LTQtdGA0LbQutC4IHdlYnAsINC00L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQsCB3ZWJwINC40LvQuCBuby13ZWJwINC00LvRjyBIVE1MICovXHJcbi8qIChpKSDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNGPIHdlYnAg0LjQtyBjc3MgICovXHJcbmZsc0Z1bmN0aW9ucy5pc1dlYnAoKTtcclxuLyog0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwIHRvdWNoINC00LvRjyBIVE1MINC10YHQu9C4INCx0YDQsNGD0LfQtdGAINC80L7QsdC40LvRjNC90YvQuSAqL1xyXG4vLyBmbHNGdW5jdGlvbnMuYWRkVG91Y2hDbGFzcygpO1xyXG4vKiDQlNC+0LHQsNCy0LvQtdC90LjQtSBsb2FkZWQg0LTQu9GPIEhUTUwg0L/QvtGB0LvQtSDQv9C+0LvQvdC+0Lkg0LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtGLICovXHJcbi8vIGZsc0Z1bmN0aW9ucy5hZGRMb2FkZWRDbGFzcygpO1xyXG4vKiDQnNC+0LTRg9C70Ywg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDQvNC10L3RjiAo0JHRg9GA0LPQtdGAKSAqL1xyXG5mbHNGdW5jdGlvbnMubWVudUluaXQoKTtcclxuLyog0KPRh9C10YIg0L/Qu9Cw0LLQsNGO0YnQtdC5INC/0LDQvdC10LvQuCDQvdCwINC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LLQsNGFINC/0YDQuCAxMDB2aCAqL1xyXG4vLyBmbHNGdW5jdGlvbnMuZnVsbFZIZml4KCk7XHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGB0L4g0YHQv9C+0LnQu9C10YDQsNC80Lhcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtc3BvamxlcnkuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHNwb2xsZXJzXHJcbiovXHJcbi8vIGZsc0Z1bmN0aW9ucy5zcG9sbGVycygpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDRgtCw0LHQsNC80Lhcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtdGFieS5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogdGFic1xyXG4qL1xyXG4vLyBmbHNGdW5jdGlvbnMudGFicygpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0L/QvtC60LDQt9Cw0YLRjCDQtdGJ0LVcIlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2themF0LWVzaGhqby5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogc2hvd21vcmVcclxuKi9cclxuLy8gZmxzRnVuY3Rpb25zLnNob3dNb3JlKCk7XHJcblxyXG4vKlxyXG7Qn9C+0L/QsNC/0Ytcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvZnVua2Npb25hbC1wb3B1cC5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogcGxcclxuKi9cclxuaW1wb3J0ICcuL2xpYnMvcG9wdXAuanMnO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMINC/0LDRgNCw0LvQu9Cw0LrRgdCwINC80YvRiNGM0Y5cclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBcclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiBcclxuKi9cclxuLy8gaW1wb3J0ICcuL2xpYnMvcGFyYWxsYXgtbW91c2UuanMnXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQoNCw0LHQvtGC0LAg0YEg0YTQvtGA0LzQsNC80LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICogYXMgZmxzRm9ybXMgZnJvbSAnLi9maWxlcy9mb3Jtcy9mb3Jtcy5qcyc7XHJcblxyXG4vKiDQoNCw0LHQvtGC0LAg0YEg0L/QvtC70Y/QvNC4INGE0L7RgNC80YsgKi9cclxuLyog0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xyXG5cclxuLyogT9GC0L/RgNCw0LLQutCwINGE0L7RgNC80YsgKi9cclxuLyog0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1TdWJtaXQoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRhNC+0YDQvNGLIFwi0LrQvtC70LvQuNGH0LXRgdGC0LLQvlwiICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1RdWFudGl0eSgpO1xyXG5cclxuLyog0JzQvtC00YPQu9GMINC30LLQtdC30LTQvdC+0LPQviDRgNC10LnRgtC40L3Qs9CwICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1SYXRpbmcoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YEgc2VsZWN0LiAqL1xyXG4vLyBpbXBvcnQgJy4vbGlicy9zZWxlY3QuanMnXHJcblxyXG4vKiAo0JIg0YDQsNCx0L7RgtC1KSDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBINC80LDRgdC60LDQvNC4LiovXHJcbi8qXHJcbtCf0L7QtNC60LvRjtGH0LXQvdC40LUg0Lgg0L3QsNGB0YLRgNC+0LnQutCwINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0YTQsNC50LvQtSBqcy9maWxlcy9mb3Jtcy9pbnB1dG1hc2suanNcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvaW5wdXRtYXNrXHJcbtCh0L3QuNC/0L/QtdGCKEhUTUwpOlxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL2Zvcm1zL2lucHV0bWFzay5qc1wiO1xyXG5cclxuLyog0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDQv9C+0LvQt9GD0L3QutC+0LwgKi9cclxuLypcclxu0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQuCDQvdCw0YHRgtGA0L7QudC60LAg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQsiDRhNCw0LnQu9C1IGpzL2ZpbGVzL2Zvcm1zL3JhbmdlLmpzXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTpcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL3JlZnJlc2hsZXNzLmNvbS9ub3Vpc2xpZGVyL1xyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHJhbmdlXHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvZm9ybXMvcmFuZ2UuanNcIjtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YEg0L/QvtC00YHQutCw0LfQutCw0LzQuCAodGlwcHkpICovXHJcbi8qXHJcbtCf0L7QtNC60LvRjtGH0LXQvdC40LUg0L/Qu9Cw0LPQuNC90LAgVGlwcHkuanMg0Lgg0L3QsNGB0YLRgNC+0LnQutCwINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0YTQsNC50LvQtSBqcy9maWxlcy90aXBweS5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL1xyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHRpcCAo0LTQvtCx0LDQstC70Y/QtdGCINCw0YLRgNC40LHRg9GCINGBINC/0L7QtNGB0LrQsNC30LrQvtC5INC00LvRjyBodG1sINGC0LXQs9CwKVxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL3RpcHB5LmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQoNCw0LHQvtGC0LAg0YHQviDRgdC70LDQudC00LXRgNC+0LwgKFN3aXBlcikgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLypcclxu0J3QsNGB0YLRgNC+0LnQutCwINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0L/Qu9Cw0LPQuNC90LAg0YHQu9Cw0LnQtNC10YDQsCBTd2lwZXIg0Lgg0L3QvtCy0YvRhSDRgdC70LDQudC00LXRgNC+0LIg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQsiDRhNCw0LnQu9C1IGpzL2ZpbGVzL3NsaWRlcnMuanNcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXNvLXNsYWpkZXJvbS1zd2lwZXIuaHRtbFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG7QodC90LjQv9C/0LXRgihIVE1MKTogc3dpcGVyXHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvc2xpZGVycy5qc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0JzQvtC00YPQu9C4INGA0LDQsdC+0YLRiyDRgSDQv9GA0L7QutGA0YPRgtC60L7QuSDRgdGC0YDQsNC90LjRhtGLID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKlxyXG7QmNC30LzQtdC90LXQvdC40LUg0LTQuNC30LDQudC90LAg0YHQutGA0L7Qu9C70LHQsNGA0LBcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OiDQkiBIVE1MINC00L7QsdCw0LLQu9GP0LXQvCDQuiDQsdC70L7QutGDINCw0YLRgNC40LHRg9GCIGRhdGEtc2ltcGxlYmFyXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly9naXRodWIuY29tL0dyc210by9zaW1wbGViYXIvdHJlZS9tYXN0ZXIvcGFja2FnZXMvc2ltcGxlYmFyXHJcbtCh0L3QuNC/0L/QtdGCKEhUTUwpOiBcclxuKi9cclxuLy8gaW1wb3J0ICcuL2ZpbGVzL3Njcm9sbC9zaW1wbGViYXIuanMnO1xyXG5cclxuLy8g0JvQtdC90LjQstCw0Y8gKNC+0YLQu9C+0LbQtdC90L3QsNGPKSDQt9Cw0LPRgNGD0LfQutCwINC60LDRgNGC0LjQvdC+0LpcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtbGVuaXZheWEtcG9kZ3J1emthLWxhenktbG9hZGluZy5odG1sXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly9naXRodWIuY29tL3Zlcmxvay92YW5pbGxhLWxhenlsb2FkXHJcbi8vINCh0L3QuNC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vZmlsZXMvc2Nyb2xsL2xhenlsb2FkLmpzJztcclxuXHJcbi8vINCd0LDQsdC70Y7QtNCw0YLQtdC70Ywg0LfQsCDQvtCx0YrQtdC60YLQsNC80LggYyDQsNGC0YDQuNCx0YPRgtC+0LwgZGF0YS13YXRjaFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1uYWJsanVkYXRlbC16YS1wb3lhdmxlbmllbS1lbGVtZW50YS1wcmktc2tyb2xsZS5odG1sXHJcbi8vINCh0L3QuNC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vbGlicy93YXRjaGVyLmpzJ1xyXG5cclxuLy8g0KTRg9C90LrRhtC40Lgg0YDQsNCx0L7RgtGLINGB0LrRgNC+0LvQu9C+0LxcclxuaW1wb3J0ICogYXMgZmxzU2Nyb2xsIGZyb20gJy4vZmlsZXMvc2Nyb2xsL3Njcm9sbC5qcyc7XHJcblxyXG4vLyDQn9C70LDQstC90LDRjyDQvdCw0LLQuNCz0LDRhtC40Y8g0L/QviDRgdGC0YDQsNC90LjRhtC1XHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXBsYXZub2otbmF2aWdhY2lpLXBvLXN0cmFuaWNlLmh0bWxcclxuLy8gZmxzU2Nyb2xsLnBhZ2VOYXZpZ2F0aW9uKCk7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjQvtC90LDQuyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutC70LDRgdGB0L7QsiDQuiDRhdC10LTQtdGA0YMg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtVxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1kb2Jhdmxlbml5YS1rbGFzc292LWstc2hhcGtlLXByaS1wcm9rcnV0a2Utc3RyYW5pY3kuaHRtbFxyXG4vLyBmbHNTY3JvbGwuaGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjQvtC90LDQuyDQu9C40L/QutC+0LPQviDQsdC70L7QutCwXHJcbi8vIGZsc1Njcm9sbC5zdGlja3lCbG9jaygpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0JPQsNC70LXRgNC10Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OiBcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL3d3dy5saWdodGdhbGxlcnlqcy5jb20vZG9jcy9cclxu0KHQvdC40L/Qv9C10YIoSFRNTCk6XHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvZ2FsbGVyeS5qc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0J/RgNC+0YfQuNC1INC/0LvQsNCz0LjQvdGLID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyog0JTQuNC90LDQvNC40YfQtdGB0LrQuNC5INCw0LTQsNC/0YLQuNCyICovXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2RpbmFtaWNoZXNraWotYWRhcHRpdi5odG1sXHJcbmltcG9ydCAnLi9saWJzL2R5bmFtaWNfYWRhcHQuanMnO1xyXG5cclxuLyog0KTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjQtSDRh9C40YHQtdC7ICovXHJcbi8vIGltcG9ydCAnLi9saWJzL3dOdW1iLm1pbi5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQn9GA0L7Rh9C10LUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLyog0J/QvtC00LrQu9GO0YfQsNC10Lwg0YTQsNC50LvRiyDRgdC+INGB0LLQvtC40Lwg0LrQvtC00L7QvCAqL1xyXG5pbXBvcnQgJy4vZmlsZXMvc2NyaXB0LmpzJztcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=