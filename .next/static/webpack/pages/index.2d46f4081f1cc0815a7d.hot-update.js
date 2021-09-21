webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/header/constants.js");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.module.scss */ "./components/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_jim_conrad_logo_light_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/images/jim-conrad-logo-light.png */ "./public/assets/images/jim-conrad-logo-light.png");
/* harmony import */ var _public_assets_images_jim_conrad_logo_light_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_jim_conrad_logo_light_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu */ "./components/header/mobile-menu/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\header\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //css

 //images

 //Components



const Header = () => {
  return __jsx("nav", {
    role: 'navigation',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: 'logo',
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
    src: _public_assets_images_jim_conrad_logo_light_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("ul", {
    id: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bigScreenMenu,
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_1__["MENU_LINKS"].map((link, index) => __jsx("a", {
    key: index,
    href: link.linkTo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 56
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 90
    }
  }, link.label)))), __jsx(_mobile_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menuItems: _constants__WEBPACK_IMPORTED_MODULE_1__["MENU_LINKS"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibG9nbyIsIkxvZ28iLCJiaWdTY3JlZW5NZW51IiwibmF2IiwiTUVOVV9MSU5LUyIsIm1hcCIsImxpbmsiLCJpbmRleCIsImxpbmtUbyIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQ0k7QUFBSyxRQUFJLEVBQUUsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRSxNQUFWO0FBQWtCLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsSUFBcEM7QUFBMEMsT0FBRyxFQUFFQyxzRkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSSxNQUFFLEVBQUVILDBEQUFNLENBQUNJLGFBQWY7QUFBOEIsYUFBUyxFQUFFSiwwREFBTSxDQUFDSyxHQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFDLHFEQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxJQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFBRyxPQUFHLEVBQUVBLEtBQVI7QUFBZSxRQUFJLEVBQUVELElBQUksQ0FBQ0UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtGLElBQUksQ0FBQ0csS0FBVixDQUFsQyxDQUEvQixDQUZSLENBRkosRUFPSSxNQUFDLG9EQUFEO0FBQVksYUFBUyxFQUFFTCxxREFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREosQ0FESjtBQWFILENBZEQ7O0tBQU1QLE07QUFnQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJkNDZmNDA4MWYxY2MwODE1YTdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNRU5VX0xJTktTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG4vL2Nzc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuLy9pbWFnZXNcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvamltLWNvbnJhZC1sb2dvLWxpZ2h0LnBuZyc7XHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL21vYmlsZS1tZW51JztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiByb2xlPXsnbmF2aWdhdGlvbid9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2xvZ28nfSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9e0xvZ299IC8+XHJcbiAgICAgICAgICAgICAgICA8dWwgaWQ9e3N0eWxlcy5iaWdTY3JlZW5NZW51fSBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTUVOVV9MSU5LUy5tYXAoKGxpbmssaW5kZXgpID0+IDxhIGtleT17aW5kZXh9IGhyZWY9e2xpbmsubGlua1RvfT48bGk+e2xpbmsubGFiZWx9PC9saT48L2E+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlTWVudSBtZW51SXRlbXM9e01FTlVfTElOS1N9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=