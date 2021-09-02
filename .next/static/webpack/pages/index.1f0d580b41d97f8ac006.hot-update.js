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
    className: 'images-wrapper',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  }, Object(_API__WEBPACK_IMPORTED_MODULE_4__["getTempProjects"])().map((project, index) => __jsx("div", {
    key: index,
    className: 'gallery-slide',
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
    className: 'gallery-image',
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
      className: 'all-projects-cta',
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
    className: 'more-images-wrapper',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, projectsList.slice(9, 20).map((project, index) => __jsx("div", {
    key: index,
    className: 'gallery-slide more-slides',
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
    className: 'gallery-image',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9HYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJwcm9wcyIsImFkZFByb2plY3RMaXN0Iiwic2V0U2luZ2xlUHJvamVjdCIsInByb2plY3RzTGlzdCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwidXNlU3RhdGUiLCJnZXRUZW1wUHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJtYWluX2ltYWdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTs7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztDQUVBOztBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0FBQUE7O0FBQ3ZCLFFBQU07QUFBRUMsa0JBQUY7QUFBa0JDLG9CQUFsQjtBQUFvQ0M7QUFBcEMsTUFBcURILEtBQTNEO0FBQ0EsUUFBTTtBQUFBLE9BQUNJLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSSxTQUNJLG1FQUVRLENBQUNILFlBQUQsR0FDTTtBQUFLLGFBQVMsRUFBRSxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSw0REFBZSxHQUFHQyxHQUFsQixDQUFzQixDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FDbkI7QUFDSSxPQUFHLEVBQUVBLEtBRFQ7QUFFSSxhQUFTLEVBQUUsZUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRSxlQUFoQjtBQUFpQyxPQUFHLEVBQUUsSUFBdEM7QUFBNEMsT0FBRyxFQUFFRCxPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLEdBQXBFO0FBQ0ssV0FBTyxFQUFFLE1BQU07QUFBRUMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkwsT0FBTyxDQUFDQyxLQUFELENBQTdCO0FBQXVDLEtBRDdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBREgsQ0FESCxDQUROLEdBZU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFqQmQsRUFxQlFQLFlBQVksSUFBSUEsWUFBWSxDQUFDWSxNQUFiLEdBQXNCLENBQXRDLElBQ0EsTUFBQyx3REFBRDtBQUNJLFdBQU8sRUFDSDtBQUNJLGFBQU8sRUFBRSxNQUFNO0FBQUNWLHFCQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQTJCLE9BRC9DO0FBRUksZUFBUyxFQUFFLGtCQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJS0EsVUFBVSxHQUFHLFlBQUgsR0FBa0Isb0JBSmpDLENBRlI7QUFTSSxxQkFBaUIsRUFBRUEsVUFBVSxHQUFHLGVBQUgsR0FBcUIsRUFUdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdJO0FBQUssYUFBUyxFQUFFLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtELFlBQVksQ0FBQ2EsS0FBYixDQUFtQixDQUFuQixFQUFxQixFQUFyQixFQUF5QlIsR0FBekIsQ0FBNkIsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQzFCO0FBQ0ksT0FBRyxFQUFFQSxLQURUO0FBRUksYUFBUyxFQUFFLDJCQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLGdEQUFEO0FBQU0sTUFBRSxFQUFFLFdBQVY7QUFBdUIsV0FBTyxFQUFFLE1BQU1SLGdCQUFnQixDQUFDUSxLQUFLLEdBQUcsQ0FBVCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUUsZUFBaEI7QUFBaUMsT0FBRyxFQUFFLElBQXRDO0FBQTRDLE9BQUcsRUFBRUQsT0FBTyxDQUFDRSxVQUFSLENBQW1CQyxHQUFwRTtBQUNLLFdBQU8sRUFBRSxNQUFNVixnQkFBZ0IsQ0FBQ1EsS0FBRCxDQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURILENBRkwsQ0FYSixDQXRCUixDQURKO0FBcURILENBakVEOztHQUFNWCxPOztLQUFBQSxPO0FBbUVTQSxzRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWYwZDU4MGI0MWQ5N2Y4YWMwMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29sbGFwc2libGUgZnJvbSAncmVhY3QtY29sbGFwc2libGUnO1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgICAgTGlua1xyXG4vLyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy9SZWR1eFxyXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgeyBnZXRQcm9qZWN0c0xpc3QgfSBmcm9tICcuLi8uLi9wdWJsaWMvcmVkdXgvc2VsZWN0b3JzJztcclxuLy8gaW1wb3J0IHsgYWRkUHJvamVjdExpc3QsIHNldFNpbmdsZVByb2plY3QgfSBmcm9tICcuLi8uLi9wdWJsaWMvcmVkdXgvYWN0aW9ucyc7XHJcbi8vY3NzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nYWxsZXJ5Lm1vZHVsZS5zY3NzJztcclxuLy9BUElcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGdldFRlbXBQcm9qZWN0cyB9IGZyb20gJy4vQVBJJztcclxuXHJcbmNvbnN0IEdhbGxlcnkgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgYWRkUHJvamVjdExpc3QsIHNldFNpbmdsZVByb2plY3QsIHByb2plY3RzTGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2plY3RzKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRQcm9qZWN0TGlzdChyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCc+PmVycm9yJywgZXJyKSlcclxuICAgIH0sIFthZGRQcm9qZWN0TGlzdF0pOyovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhcHJvamVjdHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17J2ltYWdlcy13cmFwcGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUZW1wUHJvamVjdHMoKS5tYXAoKHByb2plY3QsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnZ2FsbGVyeS1zbGlkZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17J2dhbGxlcnktaW1hZ2UnfSBhbHQ9eydhcyd9IHNyYz17cHJvamVjdC5tYWluX2ltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGNvbnNvbGUubG9nKFwiPj5EQVRBXCIsIHByb2plY3RbaW5kZXhdKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogPGg0Pk5vIHByb2plY3RzIHRvIGRpc3BsYXk8L2g0PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3QgJiYgcHJvamVjdHNMaXN0Lmxlbmd0aCA+IDkgJiZcclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRJc0V4cGFuZGVkKCFpc0V4cGFuZGVkKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhbGwtcHJvamVjdHMtY3RhJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRXhwYW5kZWQgPyAnU0VFIExFU1MgPicgOiAnU0VFIEFMTCBQUk9KRUNUUyA+J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NQYXJlbnRTdHJpbmc9e2lzRXhwYW5kZWQgPyAnZXhwYW5kZWRQYW5lbCcgOiAnJ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21vcmUtaW1hZ2VzLXdyYXBwZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7LyogLy9UT0RPOiBjaGVjayBsb2dpYyBhYm91dCBpbmRleCB3aGVuIHNlbGVjdCBhIHByb2plY3QqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzTGlzdC5zbGljZSg5LDIwKS5tYXAoKHByb2plY3QsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnZ2FsbGVyeS1zbGlkZSBtb3JlLXNsaWRlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvcHJvamVjdHMnfSBvbkNsaWNrPXsoKSA9PiBzZXRTaW5nbGVQcm9qZWN0KGluZGV4ICsgMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17J2dhbGxlcnktaW1hZ2UnfSBhbHQ9eydhcyd9IHNyYz17cHJvamVjdC5tYWluX2ltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW5nbGVQcm9qZWN0KGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgICBwcm9qZWN0c0xpc3Q6IGdldFByb2plY3RzTGlzdChzdGF0ZSksXHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbi8vICAgICBhZGRQcm9qZWN0TGlzdDogKHZhbHVlcykgPT4gZGlzcGF0Y2goYWRkUHJvamVjdExpc3QodmFsdWVzKSksXHJcbi8vICAgICBzZXRTaW5nbGVQcm9qZWN0OiAocHJvamVjdElkKSA9PiBkaXNwYXRjaChzZXRTaW5nbGVQcm9qZWN0KHByb2plY3RJZCkpLFxyXG4vLyB9KTtcclxuLy9cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuLy8gICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuLy8gICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4vLyApKEdhbGxlcnkpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=