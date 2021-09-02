webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects/Gallery.js":
/*!****************************************!*\
  !*** ./components/projects/Gallery.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.module.scss */ "./components/projects/gallery.module.scss");
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API */ "./components/projects/API/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\projects\\Gallery.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import {
//     Link
// } from 'react-router-dom';

 //Redux
// import { connect } from 'react-redux';
// import { getProjectsList } from '../../public/redux/selectors';
// import { addProjectList, setSingleProject } from '../../public/redux/actions';
//css

 //API



const Gallery = props => {
  _s();

  const {
    addProjectList,
    setSingleProject,
    projectsList
  } = props;
  const {
    0: isExpanded,
    1: setIsExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  /*useEffect(() => {
      getProjects()
          .then(res => {
              return addProjectList(res);
          })
          .catch(err => console.log('>>error', err))
  }, [addProjectList]);*/

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !projectsList ? __jsx("div", {
    className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  }, Object(_API__WEBPACK_IMPORTED_MODULE_4__["getTempProjects"])().map((project, index) => __jsx("div", {
    key: index,
    className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/projects',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("img", {
    className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,
    alt: 'as',
    src: project.main_image.url,
    onClick: () => {
      console.log(">>DATA", project[index]);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }))))) : __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }, "No projects to display"), projectsList && projectsList.length > 9 && __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_1___default.a, {
    trigger: __jsx("h2", {
      onClick: () => {
        setIsExpanded(!isExpanded);
      },
      className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all_projects_cta,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, isExpanded ? 'SEE LESS >' : 'SEE ALL PROJECTS >'),
    classParentString: isExpanded ? 'expandedPanel' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.more_images_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, projectsList.slice(9, 20).map((project, index) => __jsx("div", {
    key: index,
    className: `${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide} more-slides`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    to: '/projects',
    onClick: () => setSingleProject(index + 3),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, __jsx("img", {
    className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,
    alt: 'as',
    src: project.main_image.url,
    onClick: () => setSingleProject(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  })))))));
};

_s(Gallery, "FPNvbbHVlWWR4LKxxNntSxiIS38=");

_c = Gallery;
/* harmony default export */ __webpack_exports__["default"] = (Gallery); // const mapStateToProps = (state) => ({
//     projectsList: getProjectsList(state),
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     addProjectList: (values) => dispatch(addProjectList(values)),
//     setSingleProject: (projectId) => dispatch(setSingleProject(projectId)),
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Gallery)

var _c;

$RefreshReg$(_c, "Gallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9HYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJwcm9wcyIsImFkZFByb2plY3RMaXN0Iiwic2V0U2luZ2xlUHJvamVjdCIsInByb2plY3RzTGlzdCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJpbWFnZXNfd3JhcHBlciIsImdldFRlbXBQcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInNsaWRlIiwiaW1hZ2UiLCJtYWluX2ltYWdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImFsbF9wcm9qZWN0c19jdGEiLCJtb3JlX2ltYWdlc193cmFwcGVyIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTtBQUNBOztDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0NBRUE7O0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDdkIsUUFBTTtBQUFFQyxrQkFBRjtBQUFrQkMsb0JBQWxCO0FBQW9DQztBQUFwQyxNQUFxREgsS0FBM0Q7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJLFNBQ0ksbUVBRVEsQ0FBQ0gsWUFBRCxHQUNNO0FBQUssYUFBUyxFQUFFSSwyREFBTSxDQUFDQyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDREQUFlLEdBQUdDLEdBQWxCLENBQXNCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUNuQjtBQUNJLE9BQUcsRUFBRUEsS0FEVDtBQUVJLGFBQVMsRUFBRUwsMkRBQU0sQ0FBQ00sS0FGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVOLDJEQUFNLENBQUNPLEtBQXZCO0FBQThCLE9BQUcsRUFBRSxJQUFuQztBQUF5QyxPQUFHLEVBQUVILE9BQU8sQ0FBQ0ksVUFBUixDQUFtQkMsR0FBakU7QUFDSyxXQUFPLEVBQUUsTUFBTTtBQUFFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCUCxPQUFPLENBQUNDLEtBQUQsQ0FBN0I7QUFBdUMsS0FEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESCxDQURILENBRE4sR0FlTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWpCZCxFQXFCUVQsWUFBWSxJQUFJQSxZQUFZLENBQUNnQixNQUFiLEdBQXNCLENBQXRDLElBQ0EsTUFBQyx3REFBRDtBQUNJLFdBQU8sRUFDSDtBQUNJLGFBQU8sRUFBRSxNQUFNO0FBQUNkLHFCQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQTJCLE9BRC9DO0FBRUksZUFBUyxFQUFFRywyREFBTSxDQUFDYSxnQkFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlLaEIsVUFBVSxHQUFHLFlBQUgsR0FBa0Isb0JBSmpDLENBRlI7QUFTSSxxQkFBaUIsRUFBRUEsVUFBVSxHQUFHLGVBQUgsR0FBcUIsRUFUdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdJO0FBQUssYUFBUyxFQUFFRywyREFBTSxDQUFDYyxtQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLbEIsWUFBWSxDQUFDbUIsS0FBYixDQUFtQixDQUFuQixFQUFxQixFQUFyQixFQUF5QlosR0FBekIsQ0FBNkIsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQzFCO0FBQ0ksT0FBRyxFQUFFQSxLQURUO0FBRUksYUFBUyxFQUFHLEdBQUVMLDJEQUFNLENBQUNNLEtBQU0sY0FGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLEVBQUUsV0FBVjtBQUF1QixXQUFPLEVBQUUsTUFBTVgsZ0JBQWdCLENBQUNVLEtBQUssR0FBRyxDQUFULENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUwsMkRBQU0sQ0FBQ08sS0FBdkI7QUFBOEIsT0FBRyxFQUFFLElBQW5DO0FBQXlDLE9BQUcsRUFBRUgsT0FBTyxDQUFDSSxVQUFSLENBQW1CQyxHQUFqRTtBQUNLLFdBQU8sRUFBRSxNQUFNZCxnQkFBZ0IsQ0FBQ1UsS0FBRCxDQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURILENBRkwsQ0FYSixDQXRCUixDQURKO0FBcURILENBakVEOztHQUFNYixPOztLQUFBQSxPO0FBbUVTQSxzRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODY3ZTQwNWE3ZDE3Mzg1YjU5YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29sbGFwc2libGUgZnJvbSAncmVhY3QtY29sbGFwc2libGUnO1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgICAgTGlua1xyXG4vLyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy9SZWR1eFxyXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgeyBnZXRQcm9qZWN0c0xpc3QgfSBmcm9tICcuLi8uLi9wdWJsaWMvcmVkdXgvc2VsZWN0b3JzJztcclxuLy8gaW1wb3J0IHsgYWRkUHJvamVjdExpc3QsIHNldFNpbmdsZVByb2plY3QgfSBmcm9tICcuLi8uLi9wdWJsaWMvcmVkdXgvYWN0aW9ucyc7XHJcbi8vY3NzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nYWxsZXJ5Lm1vZHVsZS5zY3NzJztcclxuLy9BUElcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGdldFRlbXBQcm9qZWN0cyB9IGZyb20gJy4vQVBJJztcclxuXHJcbmNvbnN0IEdhbGxlcnkgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgYWRkUHJvamVjdExpc3QsIHNldFNpbmdsZVByb2plY3QsIHByb2plY3RzTGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2plY3RzKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRQcm9qZWN0TGlzdChyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCc+PmVycm9yJywgZXJyKSlcclxuICAgIH0sIFthZGRQcm9qZWN0TGlzdF0pOyovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhcHJvamVjdHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldFRlbXBQcm9qZWN0cygpLm1hcCgocHJvamVjdCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2plY3RzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IGFsdD17J2FzJ30gc3JjPXtwcm9qZWN0Lm1haW5faW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgY29uc29sZS5sb2coXCI+PkRBVEFcIiwgcHJvamVjdFtpbmRleF0pIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aDQ+Tm8gcHJvamVjdHMgdG8gZGlzcGxheTwvaDQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdCAmJiBwcm9qZWN0c0xpc3QubGVuZ3RoID4gOSAmJlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldElzRXhwYW5kZWQoIWlzRXhwYW5kZWQpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsbF9wcm9qZWN0c19jdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0V4cGFuZGVkID8gJ1NFRSBMRVNTID4nIDogJ1NFRSBBTEwgUFJPSkVDVFMgPid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzUGFyZW50U3RyaW5nPXtpc0V4cGFuZGVkID8gJ2V4cGFuZGVkUGFuZWwnIDogJyd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3JlX2ltYWdlc193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7LyogLy9UT0RPOiBjaGVjayBsb2dpYyBhYm91dCBpbmRleCB3aGVuIHNlbGVjdCBhIHByb2plY3QqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzTGlzdC5zbGljZSg5LDIwKS5tYXAoKHByb2plY3QsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2xpZGV9IG1vcmUtc2xpZGVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9wcm9qZWN0cyd9IG9uQ2xpY2s9eygpID0+IHNldFNpbmdsZVByb2plY3QoaW5kZXggKyAzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IGFsdD17J2FzJ30gc3JjPXtwcm9qZWN0Lm1haW5faW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbmdsZVByb2plY3QoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuLy8gICAgIHByb2plY3RzTGlzdDogZ2V0UHJvamVjdHNMaXN0KHN0YXRlKSxcclxuLy8gfSk7XHJcbi8vXHJcbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuLy8gICAgIGFkZFByb2plY3RMaXN0OiAodmFsdWVzKSA9PiBkaXNwYXRjaChhZGRQcm9qZWN0TGlzdCh2YWx1ZXMpKSxcclxuLy8gICAgIHNldFNpbmdsZVByb2plY3Q6IChwcm9qZWN0SWQpID0+IGRpc3BhdGNoKHNldFNpbmdsZVByb2plY3QocHJvamVjdElkKSksXHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4vLyAgICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4vLyAgICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbi8vICkoR2FsbGVyeSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==