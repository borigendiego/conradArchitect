webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/carousel/index.js":
/*!*********************************************!*\
  !*** ./components/common/carousel/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var _mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-carousel.module.scss */ "./components/common/carousel/mobile-carousel.module.scss");
/* harmony import */ var _mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ "./node_modules/pure-react-carousel/dist/react-carousel.es.css");
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_right_arrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/right-arrow.svg */ "./public/assets/right-arrow.svg");
/* harmony import */ var _public_assets_right_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_right_arrow_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\common\\carousel\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //Styles


 //Icons



const MyCarousel = ({
  slides
}) => {
  return __jsx("div", {
    className: _mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselProvider"], {
    naturalSlideWidth: 200,
    naturalSlideHeight: 110,
    totalSlides: slides.length,
    className: _mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobile_carousel_container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sliders,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonBack"], {
    className: `${_mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.arrow} ${_mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.back}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: 'back-arrow',
    src: _public_assets_right_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    className: _mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sliderWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, slides.map((item, index) => __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
    key: `slide-${index}`,
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, item))), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonNext"], {
    className: `${_mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.arrow} ${_mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.next}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: 'back-arrow',
    src: _public_assets_right_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  })))));
};

_c = MyCarousel;
MyCarousel.prototypes = {
  slides: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

var _c;

$RefreshReg$(_c, "MyCarousel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/common/carousel/mobile-carousel.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/common/carousel/mobile-carousel.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../../src/assets/fonts/Gotham-Light.otf */ "./src/assets/fonts/Gotham-Light.otf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../../src/assets/fonts/Gotham-Bold.otf */ "./src/assets/fonts/Gotham-Bold.otf");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../../src/assets/fonts/Gotham-BookIta.otf */ "./src/assets/fonts/Gotham-BookIta.otf");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'Gotham light';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n@font-face {\n  font-family: 'Gotham bold';\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n@font-face {\n  font-family: 'Gotham italic';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n\n.mobile-carousel_container__D3DQP {\n  display: none; }\n\n@media (max-width: 700px) {\n  .mobile-carousel_container__D3DQP {\n    display: initial;\n    padding: 5% 0;\n    position: relative;\n    height: 39vh;\n    width: 100%;\n    z-index: 2; }\n  .mobile-carousel_mobile_carousel_container__3ALm7 {\n    display: initial;\n    position: absolute;\n    height: 100%;\n    width: 100%; }\n  .mobile-carousel_sliders__37ujI {\n    height: 100%; }\n  .mobile-carousel_slider-wrapper__24SYj {\n    height: 100%; }\n  .mobile-carousel_paragraphs__GqELu, .mobile-carousel_quote_container__1hp5v {\n    display: none; }\n  .mobile-carousel_arrow__1QtE4 {\n    background: none;\n    border: none;\n    position: absolute;\n    bottom: 10%;\n    height: 20px;\n    width: 40px;\n    z-index: 1; }\n  .mobile-carousel_arrow__1QtE4[disabled] {\n    display: none; }\n  .mobile-carousel_back__37buS {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    left: 0; }\n  .mobile-carousel_next__31GfJ {\n    right: 0; }\n  .mobile-carousel_arrow__1QtE4, .mobile-carousel_slider-wrapper__24SYj:focus {\n    outline: none; } }\n", "",{"version":3,"sources":["webpack://../../../css/variables.scss","webpack://mobile-carousel.module.scss"],"names":[],"mappings":"AA0BA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAgD,EAAA;;AAGlD;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;EAChB,4CAA+C,EAAA;;AAGjD;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAkD,EAAA;;AC1CpD;EAAa,aAAa,EAAA;;AAU1B;EACE;IACE,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IACE,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,WAAW,EAAA;EAGb;IACE,YAAY,EAAA;EAGd;IACE,YAAY,EAAA;EAGd;IAAgC,aAAa,EAAA;EAE7C;IACE,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IAAmB,aAAa,EAAA;EAEhC;IACE,iCAAyB;YAAzB,yBAAyB;IACzB,OAAO,EAAA;EAGT;IAAQ,QAAQ,EAAA;EAEhB;IAAgC,aAAa,EAAA,EAAI","sourcesContent":["@import 'helpers';\r\n\r\n//Colors\r\n$sections-background-color: #e4e4e4;\r\n$mobile-menu-background-color: #e4e4e4e6;\r\n$sections-border-color: #000;\r\n$white-color: #ffff;\r\n$basic-font-color: rgba(0, 0, 0, 0.7);\r\n\r\n//Container sizes\r\n$form-container: 57%;\r\n$large-section-container: 100vw;\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$title-font-family: 'Gotham light';\r\n$text-font-family: 'Gotham italic';\r\n$gotham-bold: 'Gotham bold';\r\n\r\n@font-face {\r\n  font-family: 'Gotham light';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-Light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('../src/assets/fonts/Gotham-Bold.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham italic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-BookIta.otf');\r\n}","@import '../../../css/variables';\r\n\r\n.container { display: none; }\r\n.mobile_carousel_container{}\r\n.sliders{}\r\n.about-paragraphs{}\r\n.about-quote{}\r\n.arrow{}\r\n.back{}\r\n.slider-wrapper{}\r\n.next{}\r\n\r\n@media (max-width: $md-screen) {\r\n  .container {\r\n    display: initial;\r\n    padding: 5% 0;\r\n    position: relative;\r\n    height: 39vh;\r\n    width: 100%;\r\n    z-index: 2;\r\n  }\r\n\r\n  .mobile_carousel_container {\r\n    display: initial;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n  .sliders {\r\n    height: 100%;\r\n  }\r\n\r\n  .slider-wrapper {\r\n    height: 100%;\r\n  }\r\n\r\n  .paragraphs ,.quote_container { display: none; }\r\n\r\n  .arrow {\r\n    background: none;\r\n    border: none;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    height: 20px;\r\n    width: 40px;\r\n    z-index: 1;\r\n  }\r\n\r\n  .arrow[disabled] { display: none; }\r\n\r\n  .back {\r\n    transform: rotate(180deg);\r\n    left: 0;\r\n  }\r\n\r\n  .next { right: 0; }\r\n\r\n  .arrow, .slider-wrapper:focus { outline: none; }\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "mobile-carousel_container__D3DQP",
	"mobile_carousel_container": "mobile-carousel_mobile_carousel_container__3ALm7",
	"sliders": "mobile-carousel_sliders__37ujI",
	"slider-wrapper": "mobile-carousel_slider-wrapper__24SYj",
	"paragraphs": "mobile-carousel_paragraphs__GqELu",
	"quote_container": "mobile-carousel_quote_container__1hp5v",
	"arrow": "mobile-carousel_arrow__1QtE4",
	"back": "mobile-carousel_back__37buS",
	"next": "mobile-carousel_next__31GfJ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL2Nhcm91c2VsL21vYmlsZS1jYXJvdXNlbC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJNeUNhcm91c2VsIiwic2xpZGVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibGVuZ3RoIiwibW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lciIsInNsaWRlcnMiLCJhcnJvdyIsImJhY2siLCJBcnJvdyIsInNsaWRlcldyYXBwZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuZXh0IiwicHJvdG90eXBlcyIsIlByb3BUeXBlcyIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBUUE7O0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDL0IsU0FDSTtBQUFLLGFBQVMsRUFBRUMsbUVBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0VBQUQ7QUFDSSxxQkFBaUIsRUFBRSxHQUR2QjtBQUVJLHNCQUFrQixFQUFFLEdBRnhCO0FBR0ksZUFBVyxFQUFFRixNQUFNLENBQUNHLE1BSHhCO0FBSUksYUFBUyxFQUFFRixtRUFBTSxDQUFDRyx5QkFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JO0FBQUssYUFBUyxFQUFFSCxtRUFBTSxDQUFDSSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLGFBQVMsRUFBRyxHQUFFSixtRUFBTSxDQUFDSyxLQUFNLElBQUdMLG1FQUFNLENBQUNNLElBQUssRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QXVDLGdDQUFnQyxvQkFBb0Isa0NBQWtDLHlCQUF5Qix1QkFBdUIsdURBQXVELEtBQUssb0JBQW9CLGlDQUFpQyx5QkFBeUIsdUJBQXVCLHNEQUFzRCxLQUFLLG9CQUFvQixtQ0FBbUMseUJBQXlCLHVCQUF1Qix5REFBeUQsS0FBSyxvQ0FBb0Msb0JBQW9CLGVBQWUsRUFBRSxnQ0FBZ0MsY0FBYyx1QkFBdUIsa0JBQWtCLFlBQVksV0FBVyxxQkFBcUIsV0FBVyx3Q0FBd0Msa0JBQWtCLHlCQUF5QixzQkFBc0IsMkJBQTJCLHFCQUFxQixvQkFBb0IsbUJBQW1CLE9BQU8sc0NBQXNDLHlCQUF5QiwyQkFBMkIscUJBQXFCLG9CQUFvQixPQUFPLG9CQUFvQixxQkFBcUIsT0FBTywyQkFBMkIscUJBQXFCLE9BQU8seUNBQXlDLGVBQWUsRUFBRSxrQkFBa0IseUJBQXlCLHFCQUFxQiwyQkFBMkIsb0JBQW9CLHFCQUFxQixvQkFBb0IsbUJBQW1CLE9BQU8sNEJBQTRCLGVBQWUsRUFBRSxpQkFBaUIsa0NBQWtDLGdCQUFnQixPQUFPLGlCQUFpQixVQUFVLEVBQUUseUNBQXlDLGVBQWUsRUFBRSxXQUFXLG1CQUFtQjtBQUMxZ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTBjYzMzNzQ5OWIzM2Q1OTI4YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBDYXJvdXNlbFByb3ZpZGVyLFxyXG4gICAgU2xpZGVyLFxyXG4gICAgU2xpZGUsXHJcbiAgICBCdXR0b25CYWNrLFxyXG4gICAgQnV0dG9uTmV4dCxcclxufSBmcm9tICdwdXJlLXJlYWN0LWNhcm91c2VsJztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vYmlsZS1jYXJvdXNlbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCAncHVyZS1yZWFjdC1jYXJvdXNlbC9kaXN0L3JlYWN0LWNhcm91c2VsLmVzLmNzcyc7XHJcbi8vSWNvbnNcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvcmlnaHQtYXJyb3cuc3ZnJztcclxuXHJcbmNvbnN0IE15Q2Fyb3VzZWwgPSAoeyBzbGlkZXMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbFByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICBuYXR1cmFsU2xpZGVXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgbmF0dXJhbFNsaWRlSGVpZ2h0PXsxMTB9XHJcbiAgICAgICAgICAgICAgICB0b3RhbFNsaWRlcz17c2xpZGVzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJhY2sgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXJyb3d9ICR7c3R5bGVzLmJhY2t9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnYmFjay1hcnJvdyd9IHNyYz17QXJyb3d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyV3JhcHBlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZSBrZXk9e2BzbGlkZS0ke2luZGV4fWB9IGluZGV4PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uTmV4dCBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnJvd30gJHtzdHlsZXMubmV4dH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydiYWNrLWFycm93J30gc3JjPXtBcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbk5leHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuTXlDYXJvdXNlbC5wcm90b3R5cGVzID0ge1xyXG4gICAgc2xpZGVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNhcm91c2VsOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL3NyYy9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL3NyYy9hc3NldHMvZm9udHMvR290aGFtLUJvb2tJdGEub3RmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBsaWdodCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBib2xkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGl0YWxpYyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpOyB9XFxuXFxuLm1vYmlsZS1jYXJvdXNlbF9jb250YWluZXJfX0QzRFFQIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2JpbGUtY2Fyb3VzZWxfY29udGFpbmVyX19EM0RRUCB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICAgIHBhZGRpbmc6IDUlIDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAzOXZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyX18zQUxtNyB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9zbGlkZXJzX18zN3VqSSB7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9zbGlkZXItd3JhcHBlcl9fMjRTWWoge1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfcGFyYWdyYXBoc19fR3FFTHUsIC5tb2JpbGUtY2Fyb3VzZWxfcXVvdGVfY29udGFpbmVyX18xaHA1diB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfYXJyb3dfXzFRdEU0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX2Fycm93X18xUXRFNFtkaXNhYmxlZF0ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX2JhY2tfXzM3YnVTIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIGxlZnQ6IDA7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfbmV4dF9fMzFHZkoge1xcbiAgICByaWdodDogMDsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9hcnJvd19fMVF0RTQsIC5tb2JpbGUtY2Fyb3VzZWxfc2xpZGVyLXdyYXBwZXJfXzI0U1lqOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uL2Nzcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL21vYmlsZS1jYXJvdXNlbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwQkE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBZ0QsRUFBQTs7QUFHbEQ7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBK0MsRUFBQTs7QUFHakQ7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBa0QsRUFBQTs7QUMxQ3BEO0VBQWEsYUFBYSxFQUFBOztBQVUxQjtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFHWjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQUdiO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUFnQyxhQUFhLEVBQUE7RUFFN0M7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFHWjtJQUFtQixhQUFhLEVBQUE7RUFFaEM7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLE9BQU8sRUFBQTtFQUdUO0lBQVEsUUFBUSxFQUFBO0VBRWhCO0lBQWdDLGFBQWEsRUFBQSxFQUFJXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2hlbHBlcnMnO1xcclxcblxcclxcbi8vQ29sb3JzXFxyXFxuJHNlY3Rpb25zLWJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XFxyXFxuJG1vYmlsZS1tZW51LWJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTRlNjtcXHJcXG4kc2VjdGlvbnMtYm9yZGVyLWNvbG9yOiAjMDAwO1xcclxcbiR3aGl0ZS1jb2xvcjogI2ZmZmY7XFxyXFxuJGJhc2ljLWZvbnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG5cXHJcXG4vL0NvbnRhaW5lciBzaXplc1xcclxcbiRmb3JtLWNvbnRhaW5lcjogNTclO1xcclxcbiRsYXJnZS1zZWN0aW9uLWNvbnRhaW5lcjogMTAwdnc7XFxyXFxuXFxyXFxuLy9UZXh0IHNpemVzXFxyXFxuJGxpbmtzLWFuZC1jdGEtZm9udC1zaXplOiBjbGFtcCgxMDAlLCAxLjFlbSwgMjdweCk7XFxyXFxuXFxyXFxuLy9EZXZpY2VzIHNpemVzXFxyXFxuJHhzLXNjcmVlbjogNDUwcHg7XFxyXFxuJG1kLXNjcmVlbjogNzAwcHg7XFxyXFxuJGxnLXNjcmVlbjogMTAyNHB4O1xcclxcblxcclxcbi8vRm9udHNcXHJcXG4kdGl0bGUtZm9udC1mYW1pbHk6ICdHb3RoYW0gbGlnaHQnO1xcclxcbiR0ZXh0LWZvbnQtZmFtaWx5OiAnR290aGFtIGl0YWxpYyc7XFxyXFxuJGdvdGhhbS1ib2xkOiAnR290aGFtIGJvbGQnO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gbGlnaHQnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1MaWdodC5vdGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBib2xkJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9sZC5vdGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBpdGFsaWMnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb29rSXRhLm90ZicpO1xcclxcbn1cIixcIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5jb250YWluZXIgeyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXJ7fVxcclxcbi5zbGlkZXJze31cXHJcXG4uYWJvdXQtcGFyYWdyYXBoc3t9XFxyXFxuLmFib3V0LXF1b3Rle31cXHJcXG4uYXJyb3d7fVxcclxcbi5iYWNre31cXHJcXG4uc2xpZGVyLXdyYXBwZXJ7fVxcclxcbi5uZXh0e31cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogJG1kLXNjcmVlbikge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxyXFxuICAgIHBhZGRpbmc6IDUlIDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAzOXZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlcnMge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVyLXdyYXBwZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFyYWdyYXBocyAsLnF1b3RlX2NvbnRhaW5lciB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG5cXHJcXG4gIC5hcnJvdyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnJvd1tkaXNhYmxlZF0geyBkaXNwbGF5OiBub25lOyB9XFxyXFxuXFxyXFxuICAuYmFjayB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV4dCB7IHJpZ2h0OiAwOyB9XFxyXFxuXFxyXFxuICAuYXJyb3csIC5zbGlkZXItd3JhcHBlcjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cXHJcXG4gIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfY29udGFpbmVyX19EM0RRUFwiLFxuXHRcIm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfbW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lcl9fM0FMbTdcIixcblx0XCJzbGlkZXJzXCI6IFwibW9iaWxlLWNhcm91c2VsX3NsaWRlcnNfXzM3dWpJXCIsXG5cdFwic2xpZGVyLXdyYXBwZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfc2xpZGVyLXdyYXBwZXJfXzI0U1lqXCIsXG5cdFwicGFyYWdyYXBoc1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9wYXJhZ3JhcGhzX19HcUVMdVwiLFxuXHRcInF1b3RlX2NvbnRhaW5lclwiOiBcIm1vYmlsZS1jYXJvdXNlbF9xdW90ZV9jb250YWluZXJfXzFocDV2XCIsXG5cdFwiYXJyb3dcIjogXCJtb2JpbGUtY2Fyb3VzZWxfYXJyb3dfXzFRdEU0XCIsXG5cdFwiYmFja1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9iYWNrX18zN2J1U1wiLFxuXHRcIm5leHRcIjogXCJtb2JpbGUtY2Fyb3VzZWxfbmV4dF9fMzFHZkpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9