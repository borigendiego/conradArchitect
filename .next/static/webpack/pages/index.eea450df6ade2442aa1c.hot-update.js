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
    className: _mobile_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider_wrapper,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvaW5kZXguanMiXSwibmFtZXMiOlsiTXlDYXJvdXNlbCIsInNsaWRlcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImxlbmd0aCIsIm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXIiLCJzbGlkZXJzIiwiYXJyb3ciLCJiYWNrIiwiQXJyb3ciLCJzbGlkZXJfd3JhcHBlciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5leHQiLCJwcm90b3R5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FRQTs7QUFDQTtDQUVBOztBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUMvQixTQUNJO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvRUFBRDtBQUNJLHFCQUFpQixFQUFFLEdBRHZCO0FBRUksc0JBQWtCLEVBQUUsR0FGeEI7QUFHSSxlQUFXLEVBQUVGLE1BQU0sQ0FBQ0csTUFIeEI7QUFJSSxhQUFTLEVBQUVGLG1FQUFNLENBQUNHLHlCQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUk7QUFBSyxhQUFTLEVBQUVILG1FQUFNLENBQUNJLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQVksYUFBUyxFQUFHLEdBQUVKLG1FQUFNLENBQUNLLEtBQU0sSUFBR0wsbUVBQU0sQ0FBQ00sSUFBSyxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUUsWUFBVjtBQUF3QixPQUFHLEVBQUVDLHFFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsMERBQUQ7QUFDSSxhQUFTLEVBQUVQLG1FQUFNLENBQUNRLGNBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJUVQsTUFBTSxDQUFDVSxHQUFQLENBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ1AsTUFBQyx5REFBRDtBQUFPLE9BQUcsRUFBRyxTQUFRQSxLQUFNLEVBQTNCO0FBQThCLFNBQUssRUFBRUEsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxJQURMLENBREosQ0FKUixDQUpKLEVBZUksTUFBQyw4REFBRDtBQUFZLGFBQVMsRUFBRyxHQUFFVixtRUFBTSxDQUFDSyxLQUFNLElBQUdMLG1FQUFNLENBQUNZLElBQUssRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFLFlBQVY7QUFBd0IsT0FBRyxFQUFFTCxxRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBZkosQ0FOSixDQURKLENBREo7QUE4QkgsQ0EvQkQ7O0tBQU1ULFU7QUFpQ05BLFVBQVUsQ0FBQ2UsVUFBWCxHQUF3QjtBQUNwQmQsUUFBTSxFQUFFZSxpREFBUyxDQUFDQztBQURFLENBQXhCO0FBSWVqQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZWE0NTBkZjZhZGUyNDQyYWExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIENhcm91c2VsUHJvdmlkZXIsXHJcbiAgICBTbGlkZXIsXHJcbiAgICBTbGlkZSxcclxuICAgIEJ1dHRvbkJhY2ssXHJcbiAgICBCdXR0b25OZXh0LFxyXG59IGZyb20gJ3B1cmUtcmVhY3QtY2Fyb3VzZWwnO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9iaWxlLWNhcm91c2VsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0ICdwdXJlLXJlYWN0LWNhcm91c2VsL2Rpc3QvcmVhY3QtY2Fyb3VzZWwuZXMuY3NzJztcclxuLy9JY29uc1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9yaWdodC1hcnJvdy5zdmcnO1xyXG5cclxuY29uc3QgTXlDYXJvdXNlbCA9ICh7IHNsaWRlcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPENhcm91c2VsUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgIG5hdHVyYWxTbGlkZVdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICBuYXR1cmFsU2xpZGVIZWlnaHQ9ezExMH1cclxuICAgICAgICAgICAgICAgIHRvdGFsU2xpZGVzPXtzbGlkZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFjayBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnJvd30gJHtzdHlsZXMuYmFja31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydiYWNrLWFycm93J30gc3JjPXtBcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJfd3JhcHBlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZSBrZXk9e2BzbGlkZS0ke2luZGV4fWB9IGluZGV4PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uTmV4dCBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnJvd30gJHtzdHlsZXMubmV4dH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydiYWNrLWFycm93J30gc3JjPXtBcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbk5leHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuTXlDYXJvdXNlbC5wcm90b3R5cGVzID0ge1xyXG4gICAgc2xpZGVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiIn0=