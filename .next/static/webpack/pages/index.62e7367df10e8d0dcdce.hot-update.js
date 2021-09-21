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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'Gotham light';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n@font-face {\n  font-family: 'Gotham bold';\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n@font-face {\n  font-family: 'Gotham italic';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n\n.mobile-carousel_container__D3DQP {\n  display: none; }\n\n@media (max-width: 700px) {\n  .mobile-carousel_mobile_carousel_container__3ALm7 {\n    display: initial;\n    padding: 5% 0;\n    position: relative;\n    height: 39vh;\n    width: 100%;\n    z-index: 2; }\n  .mobile-carousel_sliders__37ujI {\n    height: 100%; }\n  .mobile-carousel_about-paragraphs__3svry, .mobile-carousel_about-quote__2EXpo {\n    display: none; }\n  .mobile-carousel_arrow__1QtE4 {\n    background: none;\n    border: none;\n    position: absolute;\n    bottom: 10%;\n    height: 20px;\n    width: 40px;\n    z-index: 1; }\n  .mobile-carousel_arrow__1QtE4[disabled] {\n    display: none; }\n  .mobile-carousel_back__37buS {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    left: 0; }\n  .mobile-carousel_next__31GfJ {\n    right: 0; }\n  .mobile-carousel_arrow__1QtE4, .mobile-carousel_slider-wrapper__24SYj:focus {\n    outline: none; } }\n", "",{"version":3,"sources":["webpack://../../../css/variables.scss","webpack://mobile-carousel.module.scss"],"names":[],"mappings":"AA0BA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAgD,EAAA;;AAGlD;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;EAChB,4CAA+C,EAAA;;AAGjD;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAkD,EAAA;;AC1CpD;EAAa,aAAa,EAAA;;AAU1B;EACE;IACE,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IAAW,YAAa,EAAA;EAExB;IAAkC,aAAa,EAAA;EAE/C;IACE,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IAAmB,aAAa,EAAA;EAEhC;IACE,iCAAyB;YAAzB,yBAAyB;IACzB,OAAO,EAAA;EAGT;IAAQ,QAAQ,EAAA;EAEhB;IAAgC,aAAa,EAAA,EAAI","sourcesContent":["@import 'helpers';\r\n\r\n//Colors\r\n$sections-background-color: #e4e4e4;\r\n$mobile-menu-background-color: #e4e4e4e6;\r\n$sections-border-color: #000;\r\n$white-color: #ffff;\r\n$basic-font-color: rgba(0, 0, 0, 0.7);\r\n\r\n//Container sizes\r\n$form-container: 57%;\r\n$large-section-container: 100vw;\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$title-font-family: 'Gotham light';\r\n$text-font-family: 'Gotham italic';\r\n$gotham-bold: 'Gotham bold';\r\n\r\n@font-face {\r\n  font-family: 'Gotham light';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-Light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('../src/assets/fonts/Gotham-Bold.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham italic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-BookIta.otf');\r\n}","@import '../../../css/variables';\r\n\r\n.container { display: none; }\r\n.mobile_carousel_container{}\r\n.sliders{}\r\n.about-paragraphs{}\r\n.about-quote{}\r\n.arrow{}\r\n.back{}\r\n.slider-wrapper{}\r\n.next{}\r\n\r\n@media (max-width: $md-screen) {\r\n  .mobile_carousel_container {\r\n    display: initial;\r\n    padding: 5% 0;\r\n    position: relative;\r\n    height: 39vh;\r\n    width: 100%;\r\n    z-index: 2;\r\n  }\r\n\r\n  .sliders { height: 100% }\r\n\r\n  .about-paragraphs ,.about-quote { display: none; }\r\n\r\n  .arrow {\r\n    background: none;\r\n    border: none;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    height: 20px;\r\n    width: 40px;\r\n    z-index: 1;\r\n  }\r\n\r\n  .arrow[disabled] { display: none; }\r\n\r\n  .back {\r\n    transform: rotate(180deg);\r\n    left: 0;\r\n  }\r\n\r\n  .next { right: 0; }\r\n\r\n  .arrow, .slider-wrapper:focus { outline: none; }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "mobile-carousel_container__D3DQP",
	"mobile_carousel_container": "mobile-carousel_mobile_carousel_container__3ALm7",
	"sliders": "mobile-carousel_sliders__37ujI",
	"about-paragraphs": "mobile-carousel_about-paragraphs__3svry",
	"about-quote": "mobile-carousel_about-quote__2EXpo",
	"arrow": "mobile-carousel_arrow__1QtE4",
	"back": "mobile-carousel_back__37buS",
	"next": "mobile-carousel_next__31GfJ",
	"slider-wrapper": "mobile-carousel_slider-wrapper__24SYj"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL2Nhcm91c2VsL21vYmlsZS1jYXJvdXNlbC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJNeUNhcm91c2VsIiwic2xpZGVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibGVuZ3RoIiwibW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lciIsInNsaWRlcnMiLCJhcnJvdyIsImJhY2siLCJBcnJvdyIsInNsaWRlcldyYXBwZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuZXh0IiwicHJvdG90eXBlcyIsIlByb3BUeXBlcyIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBUUE7O0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDL0IsU0FDSTtBQUFLLGFBQVMsRUFBRUMsbUVBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0VBQUQ7QUFDSSxxQkFBaUIsRUFBRSxHQUR2QjtBQUVJLHNCQUFrQixFQUFFLEdBRnhCO0FBR0ksZUFBVyxFQUFFRixNQUFNLENBQUNHLE1BSHhCO0FBSUksYUFBUyxFQUFFRixtRUFBTSxDQUFDRyx5QkFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JO0FBQUssYUFBUyxFQUFFSCxtRUFBTSxDQUFDSSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLGFBQVMsRUFBRyxHQUFFSixtRUFBTSxDQUFDSyxLQUFNLElBQUdMLG1FQUFNLENBQUNNLElBQUssRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFLFlBQVY7QUFBd0IsT0FBRyxFQUFFQyxxRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLDBEQUFEO0FBQ0ksYUFBUyxFQUFFUCxtRUFBTSxDQUFDUSxhQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSVFULE1BQU0sQ0FBQ1UsR0FBUCxDQUFXLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUNQLE1BQUMseURBQUQ7QUFBTyxPQUFHLEVBQUcsU0FBUUEsS0FBTSxFQUEzQjtBQUE4QixTQUFLLEVBQUVBLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsSUFETCxDQURKLENBSlIsQ0FKSixFQWVJLE1BQUMsOERBQUQ7QUFBWSxhQUFTLEVBQUcsR0FBRVYsbUVBQU0sQ0FBQ0ssS0FBTSxJQUFHTCxtRUFBTSxDQUFDWSxJQUFLLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRSxZQUFWO0FBQXdCLE9BQUcsRUFBRUwscUVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWZKLENBTkosQ0FESixDQURKO0FBOEJILENBL0JEOztLQUFNVCxVO0FBaUNOQSxVQUFVLENBQUNlLFVBQVgsR0FBd0I7QUFDcEJkLFFBQU0sRUFBRWUsaURBQVMsQ0FBQ0M7QUFERSxDQUF4QjtBQUllakIseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RyxzQ0FBc0MsbUJBQU8sQ0FBQyw2SEFBK0Q7QUFDN0csb0NBQW9DLG1CQUFPLENBQUMsdUZBQTRDO0FBQ3hGLG9DQUFvQyxtQkFBTyxDQUFDLHFGQUEyQztBQUN2RixvQ0FBb0MsbUJBQU8sQ0FBQywyRkFBOEM7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFTLGVBQWUsZ0NBQWdDLHVCQUF1QixxQkFBcUIseURBQXlELEVBQUUsZ0JBQWdCLCtCQUErQix1QkFBdUIscUJBQXFCLHlEQUF5RCxFQUFFLGdCQUFnQixpQ0FBaUMsdUJBQXVCLHFCQUFxQix5REFBeUQsRUFBRSx1Q0FBdUMsa0JBQWtCLEVBQUUsK0JBQStCLHVEQUF1RCx1QkFBdUIsb0JBQW9CLHlCQUF5QixtQkFBbUIsa0JBQWtCLGlCQUFpQixFQUFFLHFDQUFxQyxtQkFBbUIsRUFBRSxtRkFBbUYsb0JBQW9CLEVBQUUsbUNBQW1DLHVCQUF1QixtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIsa0JBQWtCLGlCQUFpQixFQUFFLDZDQUE2QyxvQkFBb0IsRUFBRSxrQ0FBa0Msd0NBQXdDLHdDQUF3QyxjQUFjLEVBQUUsa0NBQWtDLGVBQWUsRUFBRSxpRkFBaUYsb0JBQW9CLEVBQUUsRUFBRSxTQUFTLHFJQUFxSSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxnQkFBZ0IsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxlQUFlLEtBQUssZUFBZSxNQUFNLGdCQUFnQixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLGVBQWUsS0FBSyxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssZUFBZSxNQUFNLDJEQUEyRCx3REFBd0QsNkNBQTZDLGlDQUFpQyx3QkFBd0IsMENBQTBDLGtEQUFrRCxvQ0FBb0MsMkVBQTJFLDZDQUE2QyxzQkFBc0IsdUJBQXVCLHNEQUFzRCx1Q0FBdUMsZ0NBQWdDLG9CQUFvQixrQ0FBa0MseUJBQXlCLHVCQUF1Qix1REFBdUQsS0FBSyxvQkFBb0IsaUNBQWlDLHlCQUF5Qix1QkFBdUIsc0RBQXNELEtBQUssb0JBQW9CLG1DQUFtQyx5QkFBeUIsdUJBQXVCLHlEQUF5RCxLQUFLLG9DQUFvQyxvQkFBb0IsZUFBZSxFQUFFLGdDQUFnQyxjQUFjLHVCQUF1QixrQkFBa0IsWUFBWSxXQUFXLHFCQUFxQixXQUFXLHdDQUF3QyxrQ0FBa0MseUJBQXlCLHNCQUFzQiwyQkFBMkIscUJBQXFCLG9CQUFvQixtQkFBbUIsT0FBTyxvQkFBb0IsZUFBZSwyQ0FBMkMsZUFBZSxFQUFFLGtCQUFrQix5QkFBeUIscUJBQXFCLDJCQUEyQixvQkFBb0IscUJBQXFCLG9CQUFvQixtQkFBbUIsT0FBTyw0QkFBNEIsZUFBZSxFQUFFLGlCQUFpQixrQ0FBa0MsZ0JBQWdCLE9BQU8saUJBQWlCLFVBQVUsRUFBRSx5Q0FBeUMsZUFBZSxFQUFFLEtBQUssbUJBQW1CO0FBQ2hrSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MmU3MzY3ZGYxMGU4ZDBkY2RjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIENhcm91c2VsUHJvdmlkZXIsXHJcbiAgICBTbGlkZXIsXHJcbiAgICBTbGlkZSxcclxuICAgIEJ1dHRvbkJhY2ssXHJcbiAgICBCdXR0b25OZXh0LFxyXG59IGZyb20gJ3B1cmUtcmVhY3QtY2Fyb3VzZWwnO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9iaWxlLWNhcm91c2VsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0ICdwdXJlLXJlYWN0LWNhcm91c2VsL2Rpc3QvcmVhY3QtY2Fyb3VzZWwuZXMuY3NzJztcclxuLy9JY29uc1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9yaWdodC1hcnJvdy5zdmcnO1xyXG5cclxuY29uc3QgTXlDYXJvdXNlbCA9ICh7IHNsaWRlcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPENhcm91c2VsUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgIG5hdHVyYWxTbGlkZVdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICBuYXR1cmFsU2xpZGVIZWlnaHQ9ezExMH1cclxuICAgICAgICAgICAgICAgIHRvdGFsU2xpZGVzPXtzbGlkZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFjayBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnJvd30gJHtzdHlsZXMuYmFja31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydiYWNrLWFycm93J30gc3JjPXtBcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJXcmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlIGtleT17YHNsaWRlLSR7aW5kZXh9YH0gaW5kZXg9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25OZXh0IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFycm93fSAke3N0eWxlcy5uZXh0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2JhY2stYXJyb3cnfSBzcmM9e0Fycm93fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uTmV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5NeUNhcm91c2VsLnByb3RvdHlwZXMgPSB7XHJcbiAgICBzbGlkZXM6IFByb3BUeXBlcy5hcnJheSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1MaWdodC5vdGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9sZC5vdGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGJvbGQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7IH1cXG5cXG4ubW9iaWxlLWNhcm91c2VsX2NvbnRhaW5lcl9fRDNEUVAge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1vYmlsZS1jYXJvdXNlbF9tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyX18zQUxtNyB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICAgIHBhZGRpbmc6IDUlIDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAzOXZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9zbGlkZXJzX18zN3VqSSB7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9hYm91dC1wYXJhZ3JhcGhzX18zc3ZyeSwgLm1vYmlsZS1jYXJvdXNlbF9hYm91dC1xdW90ZV9fMkVYcG8ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX2Fycm93X18xUXRFNCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwJTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9hcnJvd19fMVF0RTRbZGlzYWJsZWRdIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9iYWNrX18zN2J1UyB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICBsZWZ0OiAwOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX25leHRfXzMxR2ZKIHtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfYXJyb3dfXzFRdEU0LCAubW9iaWxlLWNhcm91c2VsX3NsaWRlci13cmFwcGVyX18yNFNZajpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9jc3MvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9tb2JpbGUtY2Fyb3VzZWwubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMEJBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQWdELEVBQUE7O0FBR2xEO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQStDLEVBQUE7O0FBR2pEO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQWtELEVBQUE7O0FDMUNwRDtFQUFhLGFBQWEsRUFBQTs7QUFVMUI7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBR1o7SUFBVyxZQUFhLEVBQUE7RUFFeEI7SUFBa0MsYUFBYSxFQUFBO0VBRS9DO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBR1o7SUFBbUIsYUFBYSxFQUFBO0VBRWhDO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixPQUFPLEVBQUE7RUFHVDtJQUFRLFFBQVEsRUFBQTtFQUVoQjtJQUFnQyxhQUFhLEVBQUEsRUFBSVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdoZWxwZXJzJztcXHJcXG5cXHJcXG4vL0NvbG9yc1xcclxcbiRzZWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xcclxcbiRtb2JpbGUtbWVudS1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0ZTY7XFxyXFxuJHNlY3Rpb25zLWJvcmRlci1jb2xvcjogIzAwMDtcXHJcXG4kd2hpdGUtY29sb3I6ICNmZmZmO1xcclxcbiRiYXNpYy1mb250LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuXFxyXFxuLy9Db250YWluZXIgc2l6ZXNcXHJcXG4kZm9ybS1jb250YWluZXI6IDU3JTtcXHJcXG4kbGFyZ2Utc2VjdGlvbi1jb250YWluZXI6IDEwMHZ3O1xcclxcblxcclxcbi8vVGV4dCBzaXplc1xcclxcbiRsaW5rcy1hbmQtY3RhLWZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMS4xZW0sIDI3cHgpO1xcclxcblxcclxcbi8vRGV2aWNlcyBzaXplc1xcclxcbiR4cy1zY3JlZW46IDQ1MHB4O1xcclxcbiRtZC1zY3JlZW46IDcwMHB4O1xcclxcbiRsZy1zY3JlZW46IDEwMjRweDtcXHJcXG5cXHJcXG4vL0ZvbnRzXFxyXFxuJHRpdGxlLWZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXHJcXG4kdGV4dC1mb250LWZhbWlseTogJ0dvdGhhbSBpdGFsaWMnO1xcclxcbiRnb3RoYW0tYm9sZDogJ0dvdGhhbSBib2xkJztcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gYm9sZCc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgc3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGYnKTtcXHJcXG59XCIsXCJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFyaWFibGVzJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbi5tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVye31cXHJcXG4uc2xpZGVyc3t9XFxyXFxuLmFib3V0LXBhcmFncmFwaHN7fVxcclxcbi5hYm91dC1xdW90ZXt9XFxyXFxuLmFycm93e31cXHJcXG4uYmFja3t9XFxyXFxuLnNsaWRlci13cmFwcGVye31cXHJcXG4ubmV4dHt9XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtZC1zY3JlZW4pIHtcXHJcXG4gIC5tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXHJcXG4gICAgcGFkZGluZzogNSUgMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDM5dmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlcnMgeyBoZWlnaHQ6IDEwMCUgfVxcclxcblxcclxcbiAgLmFib3V0LXBhcmFncmFwaHMgLC5hYm91dC1xdW90ZSB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG5cXHJcXG4gIC5hcnJvdyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnJvd1tkaXNhYmxlZF0geyBkaXNwbGF5OiBub25lOyB9XFxyXFxuXFxyXFxuICAuYmFjayB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV4dCB7IHJpZ2h0OiAwOyB9XFxyXFxuXFxyXFxuICAuYXJyb3csIC5zbGlkZXItd3JhcHBlcjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibW9iaWxlLWNhcm91c2VsX2NvbnRhaW5lcl9fRDNEUVBcIixcblx0XCJtb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyXCI6IFwibW9iaWxlLWNhcm91c2VsX21vYmlsZV9jYXJvdXNlbF9jb250YWluZXJfXzNBTG03XCIsXG5cdFwic2xpZGVyc1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9zbGlkZXJzX18zN3VqSVwiLFxuXHRcImFib3V0LXBhcmFncmFwaHNcIjogXCJtb2JpbGUtY2Fyb3VzZWxfYWJvdXQtcGFyYWdyYXBoc19fM3N2cnlcIixcblx0XCJhYm91dC1xdW90ZVwiOiBcIm1vYmlsZS1jYXJvdXNlbF9hYm91dC1xdW90ZV9fMkVYcG9cIixcblx0XCJhcnJvd1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9hcnJvd19fMVF0RTRcIixcblx0XCJiYWNrXCI6IFwibW9iaWxlLWNhcm91c2VsX2JhY2tfXzM3YnVTXCIsXG5cdFwibmV4dFwiOiBcIm1vYmlsZS1jYXJvdXNlbF9uZXh0X18zMUdmSlwiLFxuXHRcInNsaWRlci13cmFwcGVyXCI6IFwibW9iaWxlLWNhcm91c2VsX3NsaWRlci13cmFwcGVyX18yNFNZalwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=