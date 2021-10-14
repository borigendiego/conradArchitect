module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./API/index.js":
/*!**********************!*\
  !*** ./API/index.js ***!
  \**********************/
/*! exports provided: getProjects, getHomeBannerImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomeBannerImages\", function() { return getHomeBannerImages; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst cleanBlankSpaces = string => string.replace(/\\s+/g, '-');\n\nconst getHomeBannerImages = () => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://wp.conradarchitect.com/wp-json/wp/v2/home`).then(response => {\n    return response.data[0].gallery_images.map((element, index) => ({\n      id: index + 1,\n      alt: `Project ${index} main view`,\n      img: element\n    }));\n  }).catch(err => console.log('>>error', err));\n};\n\nconst getProjects = () => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://wp.conradarchitect.com/wp-json/wp/v2/projects`).then(response => {\n    return response.data.map((project, index) => _objectSpread(_objectSpread({}, project.acf), {}, {\n      gallery: project.gallery_images,\n      id: cleanBlankSpaces(project.acf.name),\n      projectIndex: index\n    }));\n  }).catch(err => console.log('>>error', err));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BUEkvaW5kZXguanM/ZjYyYSJdLCJuYW1lcyI6WyJjbGVhbkJsYW5rU3BhY2VzIiwic3RyaW5nIiwicmVwbGFjZSIsImdldEhvbWVCYW5uZXJJbWFnZXMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJnYWxsZXJ5X2ltYWdlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImlkIiwiYWx0IiwiaW1nIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvamVjdHMiLCJwcm9qZWN0IiwiYWNmIiwiZ2FsbGVyeSIsIm5hbWUiLCJwcm9qZWN0SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUlDLE1BQUQsSUFBWUEsTUFBTSxDQUFDQyxPQUFQLENBQWUsTUFBZixFQUF1QixHQUF2QixDQUFyQzs7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxNQUFNO0FBQzlCLFNBQ0lDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyxtREFBWCxFQUNLQyxJQURMLENBQ1dDLFFBQUQsSUFBYztBQUNoQixXQUFPQSxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFkLEVBQWlCQyxjQUFqQixDQUFnQ0MsR0FBaEMsQ0FBb0MsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLE1BQ3ZDO0FBQ0lDLFFBQUUsRUFBRUQsS0FBSyxHQUFHLENBRGhCO0FBRUlFLFNBQUcsRUFBRyxXQUFVRixLQUFNLFlBRjFCO0FBR0lHLFNBQUcsRUFBRUo7QUFIVCxLQUR1QyxDQUFwQyxDQUFQO0FBUUgsR0FWTCxFQVdLSyxLQVhMLENBV1dDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsR0FBdkIsQ0FYbEIsQ0FESjtBQWNILENBZkQ7O0FBaUJBLE1BQU1HLFdBQVcsR0FBRyxNQUFNO0FBQ3RCLFNBQ0loQiw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsdURBQVgsRUFDQ0MsSUFERCxDQUNPQyxRQUFELElBQWM7QUFDaEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULENBQWNFLEdBQWQsQ0FBa0IsQ0FBQ1csT0FBRCxFQUFVVCxLQUFWLHFDQUVkUyxPQUFPLENBQUNDLEdBRk07QUFHakJDLGFBQU8sRUFBRUYsT0FBTyxDQUFDWixjQUhBO0FBSWpCSSxRQUFFLEVBQUViLGdCQUFnQixDQUFDcUIsT0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQWIsQ0FKSDtBQUtqQkMsa0JBQVksRUFBRWI7QUFMRyxNQUFsQixDQUFQO0FBUUgsR0FWRCxFQVdDSSxLQVhELENBV09DLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsR0FBdkIsQ0FYZCxDQURKO0FBY0gsQ0FmRCIsImZpbGUiOiIuL0FQSS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGNsZWFuQmxhbmtTcGFjZXMgPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZSgvXFxzKy9nLCAnLScpO1xuXG5jb25zdCBnZXRIb21lQmFubmVySW1hZ2VzID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly93cC5jb25yYWRhcmNoaXRlY3QuY29tL3dwLWpzb24vd3AvdjIvaG9tZWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVswXS5nYWxsZXJ5X2ltYWdlcy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IGBQcm9qZWN0ICR7aW5kZXh9IG1haW4gdmlld2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnPj5lcnJvcicsIGVycikpXG4gICAgKVxufVxuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vd3AuY29ucmFkYXJjaGl0ZWN0LmNvbS93cC1qc29uL3dwL3YyL3Byb2plY3RzYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5tYXAoKHByb2plY3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByb2plY3QuYWNmLFxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5OiBwcm9qZWN0LmdhbGxlcnlfaW1hZ2VzLFxuICAgICAgICAgICAgICAgICAgICBpZDogY2xlYW5CbGFua1NwYWNlcyhwcm9qZWN0LmFjZi5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnPj5lcnJvcicsIGVycikpXG4gICAgKVxufTtcblxuZXhwb3J0IHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBnZXRIb21lQmFubmVySW1hZ2VzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./API/index.js\n");

/***/ }),

/***/ "./components/AppContext.js":
/*!**********************************!*\
  !*** ./components/AppContext.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  projectsData: [],\n  setProjectData: () => {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRleHQuanM/NDJjNCJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJwcm9qZWN0c0RhdGEiLCJzZXRQcm9qZWN0RGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDO0FBQzlCQyxjQUFZLEVBQUUsRUFEZ0I7QUFFOUJDLGdCQUFjLEVBQUUsTUFBTSxDQUFFO0FBRk0sQ0FBRCxDQUFqQztBQUtlSCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgcHJvamVjdHNEYXRhOiBbXSxcbiAgICBzZXRQcm9qZWN0RGF0YTogKCkgPT4ge31cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppContext.js\n");

/***/ }),

/***/ "./css/global-styles.scss":
/*!********************************!*\
  !*** ./css/global-styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9nbG9iYWwtc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/global-styles.scss\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContext */ \"./components/AppContext.js\");\n/* harmony import */ var _css_global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/global-styles.scss */ \"./css/global-styles.scss\");\n/* harmony import */ var _css_global_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_global_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API */ \"./API/index.js\");\n\nvar _jsxFileName = \"/Users/diegoborigen/Personal/Projects/ConradArchitect/conradArchitect/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //Styles\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: projects,\n    1: setProjects\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    async function fetchProjectsAPI() {\n      let response = await Object(_API__WEBPACK_IMPORTED_MODULE_4__[\"getProjects\"])(); //response = await response.json()\n\n      setProjects(response);\n    }\n\n    fetchProjectsAPI();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n    value: {\n      projectsData: projects\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 13\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2plY3RzQVBJIiwicmVzcG9uc2UiLCJnZXRQcm9qZWN0cyIsInByb2plY3RzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUNyQyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDWixtQkFBZUMsZ0JBQWYsR0FBa0M7QUFDOUIsVUFBSUMsUUFBUSxHQUFHLE1BQU1DLHdEQUFXLEVBQWhDLENBRDhCLENBRTlCOztBQUNBTCxpQkFBVyxDQUFDSSxRQUFELENBQVg7QUFDSDs7QUFFREQsb0JBQWdCO0FBQ25CLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxzQkFDUSxxRUFBQyw4REFBRCxDQUFZLFFBQVo7QUFBcUIsU0FBSyxFQUFFO0FBQUVHLGtCQUFZLEVBQUVQO0FBQWhCLEtBQTVCO0FBQUEsMkJBQ0kscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBS0g7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBDb250ZXh0Jztcbi8vU3R5bGVzXG5pbXBvcnQgJy4uL2Nzcy9nbG9iYWwtc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tICcuLi9BUEknO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2plY3RzQVBJKCkge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgIC8vcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFByb2plY3RzKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoUHJvamVjdHNBUEkoKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9qZWN0c0RhdGE6IHByb2plY3RzIH19PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });