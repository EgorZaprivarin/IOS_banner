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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testtask/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages */ \"./src/languages.js\");\n\r\n\r\n\r\n\r\nconst firstOffer = document.getElementById('offer1');\r\nconst secondOffer = document.getElementById('offer2');\r\nconst continueBtn = document.getElementsByClassName('main__btn')[0];\r\n\r\nlet selectedOffer = firstOffer.id;\r\n\r\nfirstOffer.addEventListener(\"touchend\", () => selectOffer('offer1'));\r\nsecondOffer.addEventListener(\"touchend\", () => selectOffer('offer2'));\r\ncontinueBtn.addEventListener(\"touchend\", () => confirmOffer());\r\n\r\nconst selectOffer = (offer) => {\r\n    if (selectedOffer) {\r\n        document.getElementById(selectedOffer).classList.remove('selected');\r\n    }\r\n\r\n    selectedOffer = offer;\r\n    document.getElementById(selectedOffer).classList.add('selected');\r\n}\r\n\r\nconst confirmOffer = () => {\r\n    if (selectedOffer) {\r\n        switch (selectedOffer) {\r\n            case 'offer1':\r\n                window.location.href = 'https://apple.com/';\r\n                break;\r\n            case 'offer2':\r\n                window.location.href = 'https://google.com/';\r\n                break;\r\n            default:\r\n                return;\r\n        }\r\n    }\r\n};\r\n\r\nconst getTranslation = (langCode) => {\r\n    const checkedCode = _languages__WEBPACK_IMPORTED_MODULE_1__.languages[langCode] ? langCode : 'en';\r\n\r\n    document.documentElement.setAttribute(\"lang\", checkedCode);\r\n    translatePage(_languages__WEBPACK_IMPORTED_MODULE_1__.languages[checkedCode]);\r\n    updateURL(checkedCode);\r\n};\r\n\r\nconst translatePage = (translation) => {\r\n    document.getElementsByClassName('header__title')[0].innerHTML = translation['Get Unlimited <br>Access'];\r\n    document.getElementsByClassName('advantages__card')[0].innerHTML = translation['Unlimited Art <br>Creation'];\r\n    document.getElementsByClassName('advantages__card')[1].innerHTML = translation['Exclusive <br>Styles'];\r\n    document.getElementsByClassName('advantages__card')[2].innerHTML = translation['Magic Avatars <br>With 20% Off'];\r\n    document.getElementsByClassName('card__description')[0].innerHTML = translation['YEARLY ACCESS'];\r\n    document.getElementsByClassName('card__hint')[0].innerHTML = translation['BEST OFFER'];\r\n    document.getElementsByClassName('card__price_per_year')[0].innerHTML = translation['Just {{price}} per year'].replace('{{price}}', '$39.99');\r\n    document.getElementsByClassName('card__price')[0].innerHTML = translation['{{price}} <br>per week'].replace('{{price}}', '$0.48');\r\n    document.getElementsByClassName('card__description')[1].innerHTML = translation['WEEKLY ACCESS'];\r\n    document.getElementsByClassName('card__price')[1].innerHTML = translation['{{price}} <br>per week'].replace('{{price}}', '$6.99');\r\n    continueBtn.innerHTML = translation['Continue'];\r\n    document.querySelector('[data-name=\"terms\"]').innerHTML = translation['Terms of Use'];\r\n    document.querySelector('[data-name=\"privacy\"]').innerHTML = translation['Privacy Policy'];\r\n    document.querySelector('[data-name=\"restore\"]').innerHTML = translation['Restore'];\r\n};\r\n\r\nconst updateURL = (langCode) => {\r\n    const url = new URL(window.location.href);\r\n\r\n    if (!url.searchParams.get('lang')) {\r\n        url.searchParams.set('lang', langCode);\r\n\r\n        window.location.href = url.toString();\r\n    }\r\n}\r\n\r\nfunction handleURLParamsChange() {\r\n    const urlParams = new URLSearchParams(window.location.search);\r\n    const lang = urlParams.get('lang') || navigator.language.substring(0, 2);\r\n\r\n    getTranslation(lang)\r\n}\r\n\r\nhandleURLParamsChange();\r\n\r\nwindow.addEventListener('popstate', handleURLParamsChange);\n\n//# sourceURL=webpack://testtask/./src/index.js?");

/***/ }),

/***/ "./src/languages.js":
/*!**************************!*\
  !*** ./src/languages.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   languages: () => (/* binding */ languages)\n/* harmony export */ });\n/* harmony import */ var _lang_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en.json */ \"./src/lang/en.json\");\n/* harmony import */ var _lang_es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/es.json */ \"./src/lang/es.json\");\n/* harmony import */ var _lang_fr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/fr.json */ \"./src/lang/fr.json\");\n/* harmony import */ var _lang_de_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/de.json */ \"./src/lang/de.json\");\n/* harmony import */ var _lang_ja_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang/ja.json */ \"./src/lang/ja.json\");\n/* harmony import */ var _lang_pt_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang/pt.json */ \"./src/lang/pt.json\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst languages = {\r\n    en: _lang_en_json__WEBPACK_IMPORTED_MODULE_0__,\r\n    es: _lang_es_json__WEBPACK_IMPORTED_MODULE_1__,\r\n    fr: _lang_fr_json__WEBPACK_IMPORTED_MODULE_2__,\r\n    de: _lang_de_json__WEBPACK_IMPORTED_MODULE_3__,\r\n    ja: _lang_ja_json__WEBPACK_IMPORTED_MODULE_4__,\r\n    pt: _lang_pt_json__WEBPACK_IMPORTED_MODULE_5__,\r\n};\n\n//# sourceURL=webpack://testtask/./src/languages.js?");

/***/ }),

/***/ "./src/lang/de.json":
/*!**************************!*\
  !*** ./src/lang/de.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Erhalten Sie unbegrenzten <br>Zugriff\",\"Unlimited Art <br>Creation\":\"Unbegrenzte <br>Kunstschaffung\",\"Exclusive <br>Styles\":\"Exklusive <br>Stile\",\"Magic Avatars <br>With 20% Off\":\"20 % Rabatt auf <br>KI-Avatare\",\"YEARLY ACCESS\":\"JÄHRLICHER ZUGRIFF\",\"BEST OFFER\":\"BESTES ANGEBOT\",\"Just {{price}} per year\":\"Nur {{price}} pro Jahr\",\"WEEKLY ACCESS\":\"WÖCHENTLICHER ZUGRIFF\",\"{{price}} <br>per week\":\"{{price}} <br>pro Woche\",\"Terms of Use\":\"Nutzungsbedingungen\",\"Privacy Policy\":\"Datenschutzrichtlinie\",\"Restore\":\"Wiederherstellen\",\"Continue\":\"Weiter\"}');\n\n//# sourceURL=webpack://testtask/./src/lang/de.json?");

/***/ }),

/***/ "./src/lang/en.json":
/*!**************************!*\
  !*** ./src/lang/en.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Get Unlimited <br>Access\",\"Unlimited Art <br>Creation\":\"Unlimited Art <br>Creation\",\"Exclusive <br>Styles\":\"Exclusive <br>Styles\",\"Magic Avatars <br>With 20% Off\":\"Magic Avatars <br>With 20% Off\",\"YEARLY ACCESS\":\"YEARLY ACCESS\",\"BEST OFFER\":\"BEST OFFER\",\"Just {{price}} per year\":\"Just {{price}} per year\",\"WEEKLY ACCESS\":\"WEEKLY ACCESS\",\"{{price}} <br>per week\":\"{{price}} <br>per week\",\"Terms of Use\":\"Terms of Use\",\"Privacy Policy\":\"Privacy Policy\",\"Restore\":\"Restore\",\"Continue\":\"Continue\"}');\n\n//# sourceURL=webpack://testtask/./src/lang/en.json?");

/***/ }),

/***/ "./src/lang/es.json":
/*!**************************!*\
  !*** ./src/lang/es.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtén acceso <br>ilimitado\",\"Unlimited Art <br>Creation\":\"Ilimitada creación <br>de arte\",\"Exclusive <br>Styles\":\"Estilos <br>exclusivos\",\"Magic Avatars <br>With 20% Off\":\"20 % de descuento en <br>avatares de IA\",\"YEARLY ACCESS\":\"ACCESO ANUAL\",\"BEST OFFER\":\"MEJOR OFERTA\",\"Just {{price}} per year\":\"Solo {{price}} por año\",\"WEEKLY ACCESS\":\"ACCESO SEMANAL\",\"{{price}} <br>per week\":\"{{price}} <br>por semana\",\"Terms of Use\":\"Términos de uso\",\"Privacy Policy\":\"Política de privacidad\",\"Restore\":\"Restaurar\",\"Continue\":\"Continuar\"}');\n\n//# sourceURL=webpack://testtask/./src/lang/es.json?");

/***/ }),

/***/ "./src/lang/fr.json":
/*!**************************!*\
  !*** ./src/lang/fr.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtenez un accès <br>illimité\",\"Unlimited Art <br>Creation\":\"Création artistique <br>illimitée\",\"Exclusive <br>Styles\":\"Styles <br>exclusifs\",\"Magic Avatars <br>With 20% Off\":\"20&nbsp;% de réduction <br>sur les avatars IA\",\"YEARLY ACCESS\":\"ACCÈS ANNUEL\",\"BEST OFFER\":\"MEILLEURE OFFRE\",\"Just {{price}} per year\":\"Seulement {{price}} par an\",\"WEEKLY ACCESS\":\"ACCÈS HEBDOMADAIRE\",\"{{price}} <br>per week\":\"{{price}} <br>par semaine\",\"Terms of Use\":\"Conditions d’utilisation\",\"Privacy Policy\":\"Politique de confidentialité\",\"Restore\":\"Restaurer\",\"Continue\":\"Continuer\"}');\n\n//# sourceURL=webpack://testtask/./src/lang/fr.json?");

/***/ }),

/***/ "./src/lang/ja.json":
/*!**************************!*\
  !*** ./src/lang/ja.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"無制限アクセス<br>を入手\",\"Unlimited Art <br>Creation\":\"アート作品を<br>無制限に創造\",\"Exclusive <br>Styles\":\"特別な<br>スタイル\",\"Magic Avatars <br>With 20% Off\":\"AIアバターが<br>20%オフ\",\"YEARLY ACCESS\":\"年間アクセス\",\"BEST OFFER\":\"ベストオファー\",\"Just {{price}} per year\":\"わずか{{price}}/年\",\"WEEKLY ACCESS\":\"週ごとのアクセス\",\"{{price}} <br>per week\":\"{{price}}/週<br>\",\"Terms of Use\":\"利用規約\",\"Privacy Policy\":\"プライバシーポリシー\",\"Restore\":\"復元する\",\"Continue\":\"続行する\"}');\n\n//# sourceURL=webpack://testtask/./src/lang/ja.json?");

/***/ }),

/***/ "./src/lang/pt.json":
/*!**************************!*\
  !*** ./src/lang/pt.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtenha Acesso <br>Ilimitado\",\"Unlimited Art <br>Creation\":\"Criação de Arte <br>Ilimitada\",\"Exclusive <br>Styles\":\"Estilos <br>Exclusivos\",\"Magic Avatars <br>With 20% Off\":\"20% de Desconto em <br>Avatares de IA\",\"YEARLY ACCESS\":\"ACESSO ANUAL\",\"BEST OFFER\":\"MELHOR OFERTA\",\"Just {{price}} per year\":\"Apenas {{price}} por ano\",\"WEEKLY ACCESS\":\"ACESSO SEMANAL\",\"{{price}} <br>per week\":\"{{price}} <br>por semana\",\"Terms of Use\":\"Termos de Uso\",\"Privacy Policy\":\"Política de Privacidade\",\"Restore\":\"Restaurar\",\"Continue\":\"Continuar\"}');\n\n//# sourceURL=webpack://testtask/./src/lang/pt.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;