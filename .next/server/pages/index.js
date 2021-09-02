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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/about/about.module.scss":
/*!********************************************!*\
  !*** ./components/about/about.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tile_container": "about_tile_container__2jLbV",
	"title": "about_title__38L8l",
	"container": "about_container__CjQqI",
	"team_tile": "about_team_tile__2lfYF",
	"team_picture": "about_team_picture__UWc0q",
	"team_wrapper": "about_team_wrapper__2KZKw",
	"text_wrapper": "about_text_wrapper__2mqna",
	"paragraphs": "about_paragraphs__2AxEy",
	"quote_container": "about_quote_container___unSh",
	"quote": "about_quote__3szmE",
	"quote_name": "about_quote_name__rsm7-",
	"member_tile": "about_member_tile__1oUCk",
	"tile_text_wrapper": "about_tile_text_wrapper__uoWTQ",
	"tile_link": "about_tile_link__D0m4-",
	"team_link": "about_team_link__358XA",
	"full_team": "about_full_team__BBDnb"
};


/***/ }),

/***/ "./components/about/constants.js":
/*!***************************************!*\
  !*** ./components/about/constants.js ***!
  \***************************************/
/*! exports provided: ABOUT_PARAGRAPH_ONE, ABOUT_PARAGRAPH_TWO, ABOUT_PARAGRAPH_THREE, ABOUT_PARAGRAPH_FOUR, MEMBERS, TEAM_CAROUSEL_SLIDES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT_PARAGRAPH_ONE", function() { return ABOUT_PARAGRAPH_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT_PARAGRAPH_TWO", function() { return ABOUT_PARAGRAPH_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT_PARAGRAPH_THREE", function() { return ABOUT_PARAGRAPH_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT_PARAGRAPH_FOUR", function() { return ABOUT_PARAGRAPH_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBERS", function() { return MEMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAM_CAROUSEL_SLIDES", function() { return TEAM_CAROUSEL_SLIDES; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\src\\components\\about\\constants.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ABOUT_PARAGRAPH_ONE = 'The Architectural firm, James Conrad, Architects (JCA )' + ' was founded in 1990 by James Conrad. James concurrently found a development company called Conrad Development.';
const ABOUT_PARAGRAPH_TWO = 'JCA provide highly personalized service. Our wealth of experience is invaluable in' + ' selecting the right property. We can provide guidance through all phases of building a home starting at' + ' assistance with finding the right property';
const ABOUT_PARAGRAPH_THREE = 'JCA works primarily in Southern California but has projects throughout the' + ' United States, Canada and Mexico.';
const ABOUT_PARAGRAPH_FOUR = 'The combination of experience and highly personalized service allows JCA provide' + ' a full array of services to clients wanting to build their dream home.';
const TEAM_CAROUSEL_SLIDES = [__jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, "The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by James Conrad. James concurrently found a development company called Conrad Development."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, "The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by James Conrad. James concurrently found a development company called Conrad Development."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, "The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by James Conrad. James concurrently found a development company called Conrad Development.")];
const MEMBERS = [{
  id: 3,
  name: 'Maureen',
  lastName: 'Scally',
  rol: 'Architect - Associate',
  profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/maureen-scally-scaled.jpg',
  linkToProfile: '/MaureenScallyProfile'
}, {
  id: 1,
  name: 'Jim',
  lastName: 'Conrad',
  rol: 'Architect - Founder',
  profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/jim-conrad-scaled.jpg',
  linkToProfile: '/JimConradProfile'
}, {
  id: 2,
  name: 'Ali',
  lastName: 'Ashouriha',
  rol: 'Architect - Associate',
  profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/ali-Ashouriha-scaled.jpg',
  linkToProfile: '/team-ali'
}];


/***/ }),

/***/ "./components/about/index.js":
/*!***********************************!*\
  !*** ./components/about/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.scss */ "./components/about/about.module.scss");
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_SectionLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SectionLayout */ "./components/common/SectionLayout.js");
/* harmony import */ var _common_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/carousel */ "./components/common/carousel/index.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile */ "./components/about/tile/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./components/about/constants.js");
/* harmony import */ var _public_assets_images_conrad_architect_team_min_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/images/conrad-architect-team-min.jpeg */ "./public/assets/images/conrad-architect-team-min.jpeg");
/* harmony import */ var _public_assets_images_conrad_architect_team_min_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_conrad_architect_team_min_jpeg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\about\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Styles

 //Components



 //Constant

 //Images



const About = () => {
  return __jsx(_common_SectionLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sectionTitle: 'ABOUT',
    sectionId: 'ABOUT',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: `${_about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.team_tile} ${_about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.full_team}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: 'Conrad Architect team',
    src: _public_assets_images_conrad_architect_team_min_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.team_picture,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.team_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "CONRAD ARCHITECTS"), __jsx("div", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx(_common_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slides: _constants__WEBPACK_IMPORTED_MODULE_5__["TEAM_CAROUSEL_SLIDES"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraphs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_5__["ABOUT_PARAGRAPH_ONE"]), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_5__["ABOUT_PARAGRAPH_TWO"]), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_5__["ABOUT_PARAGRAPH_THREE"])), __jsx("div", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.quote_container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.quote,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, "\u201C", _constants__WEBPACK_IMPORTED_MODULE_5__["ABOUT_PARAGRAPH_FOUR"], "\u201D"), __jsx("span", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.quote_name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, "-James Conrad, Founder"))))), __jsx("div", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tile_container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_5__["MEMBERS"].map((value, index) => __jsx(_tile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staffData: value,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 52
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/about/tile/index.js":
/*!****************************************!*\
  !*** ./components/about/tile/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about.module.scss */ "./components/about/about.module.scss");
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\about\\tile\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Tile = props => {
  const {
    key,
    name,
    lastName,
    rol,
    profilePicture,
    linkToProfile,
    id
  } = props.staffData;
  return __jsx("div", {
    id: `order-${id}`,
    className: `${_about_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.team_tile} ${_about_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.member_tile}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    alt: `${key}-profile`,
    src: profilePicture,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tile_text_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, `${name} ${lastName}`), __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, rol)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${linkToProfile}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tile_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "FULL PROFILE >")));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile);

/***/ }),

/***/ "./components/banner/Carousel.js":
/*!***************************************!*\
  !*** ./components/banner/Carousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./components/banner/constants.js");
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner.module.scss */ "./components/banner/banner.module.scss");
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\banner\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // requires a loader
//Components

 //images

 //css



const MyCarousel = () => {
  return __jsx("div", {
    className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carousel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    autoPlay: true,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: false,
    showStatus: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_3__["CAROUSEL_IMAGES"].map(item => __jsx("div", {
    className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carousel_slider,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("img", {
    id: item.id,
    alt: item.alt,
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

/***/ }),

/***/ "./components/banner/banner.module.scss":
/*!**********************************************!*\
  !*** ./components/banner/banner.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "banner_container__1-qmt",
	"content": "banner_content__fuTuz",
	"carousel_container": "banner_carousel_container__1DhAT",
	"carousel": "banner_carousel__2UdUE",
	"carousel_image": "banner_carousel_image__pVTH9",
	"carousel_root": "banner_carousel_root__1EVjQ",
	"slider_wrapper": "banner_slider_wrapper__3-YKk",
	"slider": "banner_slider__Xl36q",
	"white_border": "banner_white_border__3qcG8",
	"carousel_slider": "banner_carousel_slider__3KXK7"
};


/***/ }),

/***/ "./components/banner/constants.js":
/*!****************************************!*\
  !*** ./components/banner/constants.js ***!
  \****************************************/
/*! exports provided: CAROUSEL_IMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAROUSEL_IMAGES", function() { return CAROUSEL_IMAGES; });
/* harmony import */ var _public_assets_images_projects_DSC08584_min_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/assets/images/projects/DSC08584-min.jpg */ "./public/assets/images/projects/DSC08584-min.jpg");
/* harmony import */ var _public_assets_images_projects_DSC08584_min_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_projects_DSC08584_min_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_images_projects_405_Dartmoor_Street_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/assets/images/projects/405-Dartmoor-Street.jpg */ "./public/assets/images/projects/405-Dartmoor-Street.jpg");
/* harmony import */ var _public_assets_images_projects_405_Dartmoor_Street_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_projects_405_Dartmoor_Street_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_projects_Lopez_Residence_9118_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/assets/images/projects/Lopez Residence-9118.jpg */ "./public/assets/images/projects/Lopez Residence-9118.jpg");
/* harmony import */ var _public_assets_images_projects_Lopez_Residence_9118_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_projects_Lopez_Residence_9118_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_projects_143K5909_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/images/projects/143K5909.jpg */ "./public/assets/images/projects/143K5909.jpg");
/* harmony import */ var _public_assets_images_projects_143K5909_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_projects_143K5909_jpg__WEBPACK_IMPORTED_MODULE_3__);




const CAROUSEL_IMAGES = [{
  id: 1,
  alt: 'First Image of carousel',
  img: _public_assets_images_projects_DSC08584_min_jpg__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  id: 2,
  alt: 'Second Image of carousel',
  img: _public_assets_images_projects_405_Dartmoor_Street_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  id: 3,
  alt: 'Third Image of carousel',
  img: _public_assets_images_projects_Lopez_Residence_9118_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  id: 4,
  alt: 'Forth Image of carousel',
  img: _public_assets_images_projects_143K5909_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
}];

/***/ }),

/***/ "./components/banner/index.js":
/*!************************************!*\
  !*** ./components/banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./components/header/index.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./components/banner/Carousel.js");
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.module.scss */ "./components/banner/banner.module.scss");
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\banner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Components


 //css



const Banner = () => {
  return __jsx("div", {
    className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carousel_container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.white_border,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/common/SectionLayout.js":
/*!********************************************!*\
  !*** ./components/common/SectionLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectionLayout.module.scss */ "./components/common/sectionLayout.module.scss");
/* harmony import */ var _sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\common\\SectionLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SectionLayout = props => {
  const {
    sectionTitle,
    sectionId
  } = props;
  return __jsx("div", {
    className: 'section-container',
    id: sectionId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, sectionTitle), __jsx("div", {
    className: _sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gray_background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content_container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, props.children))));
};

SectionLayout.prototypes = {
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SectionLayout);

/***/ }),

/***/ "./components/common/carousel/index.js":
/*!*********************************************!*\
  !*** ./components/common/carousel/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel */ "pure-react-carousel");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__);
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
    className: 'carousel-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: 'sliders',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonBack"], {
    className: 'arrow back',
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
    className: 'slider-wrapper',
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
    className: 'arrow next',
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

MyCarousel.prototypes = {
  slides: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

/***/ }),

/***/ "./components/common/carousel/mobile-carousel.module.scss":
/*!****************************************************************!*\
  !*** ./components/common/carousel/mobile-carousel.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "mobile-carousel_container__D3DQP",
	"mobile-carousel_container": "mobile-carousel_mobile-carousel_container__Lp6oQ",
	"sliders": "mobile-carousel_sliders__37ujI",
	"about-paragraphs": "mobile-carousel_about-paragraphs__3svry",
	"about-quote": "mobile-carousel_about-quote__2EXpo",
	"arrow": "mobile-carousel_arrow__1QtE4",
	"back": "mobile-carousel_back__37buS",
	"next": "mobile-carousel_next__31GfJ",
	"slider-wrapper": "mobile-carousel_slider-wrapper__24SYj"
};


/***/ }),

/***/ "./components/common/sectionLayout.module.scss":
/*!*****************************************************!*\
  !*** ./components/common/sectionLayout.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "sectionLayout_wrapper__25-Ue",
	"gray_background": "sectionLayout_gray_background__3L08v",
	"content_container": "sectionLayout_content_container__3fUru",
	"content": "sectionLayout_content__3WRSZ"
};


/***/ }),

/***/ "./components/contact/contacs.module.scss":
/*!************************************************!*\
  !*** ./components/contact/contacs.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "contacs_container__O0oEd",
	"item": "contacs_item__1avXa",
	"link": "contacs_link__1CuA0",
	"contact-black-border": "contacs_contact-black-border__2zTbI"
};


/***/ }),

/***/ "./components/contact/index.js":
/*!*************************************!*\
  !*** ./components/contact/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contacs_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacs.module.scss */ "./components/contact/contacs.module.scss");
/* harmony import */ var _contacs_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contacs_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SectionLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SectionLayout */ "./components/common/SectionLayout.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\contact\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //Styles

 //Components



const Contact = () => {
  return __jsx(_common_SectionLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sectionTitle: 'CONTACT',
    sectionId: 'CONTACT',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _contacs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: `${_contacs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item} ${_contacs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }
  }, "jconradarc@gmail.com")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: `${_contacs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item} ${_contacs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  }, "(949) 233-8625")), __jsx("p", {
    className: _contacs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "1550 S. Coast Hwy. #201", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 67
    }
  }), " Laguna Beach, CA 92651")));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/header/constants.js":
/*!****************************************!*\
  !*** ./components/header/constants.js ***!
  \****************************************/
/*! exports provided: MENU_LINKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_LINKS", function() { return MENU_LINKS; });
const MENU_LINKS = [{
  label: 'HOME',
  linkTo: '#HOME'
}, {
  label: 'PROJECTS',
  linkTo: '#PROJECTS'
}, {
  label: 'ABOUT',
  linkTo: '#ABOUT'
}, {
  label: 'CONTACT',
  linkTo: '#CONTACT'
}];


/***/ }),

/***/ "./components/header/header.module.scss":
/*!**********************************************!*\
  !*** ./components/header/header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "header_container__3VBVB",
	"logo": "header_logo__eiLSq",
	"nav": "header_nav__3hxH5",
	"big-screen-menu": "header_big-screen-menu__2ICkv"
};


/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
    id: 'big-screen-menu',
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

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/mobile-menu/index.js":
/*!************************************************!*\
  !*** ./components/header/mobile-menu/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileMenu.module.scss */ "./components/header/mobile-menu/mobileMenu.module.scss");
/* harmony import */ var _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\header\\mobile-menu\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Style



const MobileMenu = props => {
  const {
    menuItems
  } = props;
  return __jsx("div", {
    id: _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuToggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("ul", {
    id: 'menu',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, menuItems.map((link, index) => __jsx("a", {
    key: index,
    href: link.linkTo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 51
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 85
    }
  }, link.label)))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./components/header/mobile-menu/mobileMenu.module.scss":
/*!**************************************************************!*\
  !*** ./components/header/mobile-menu/mobileMenu.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuToggle": "mobileMenu_menuToggle__2opJ6",
	"menu": "mobileMenu_menu__3E0a6"
};


/***/ }),

/***/ "./components/projects/API/constants.js":
/*!**********************************************!*\
  !*** ./components/projects/API/constants.js ***!
  \**********************************************/
/*! exports provided: PROJECTS_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS_DATA", function() { return PROJECTS_DATA; });
const PROJECTS_DATA = [{
  "id": 143,
  "date": "2021-08-13T00:04:39",
  "date_gmt": "2021-08-13T00:04:39",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=143"
  },
  "modified": "2021-08-14T22:30:08",
  "modified_gmt": "2021-08-14T22:30:08",
  "slug": "98-desert-mountain",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/98-desert-mountain\/",
  "title": {
    "rendered": "98 Desert Mountain"
  },
  "template": "",
  "acf": {
    "name": "98 Desert Mountain",
    "location": "Scottsdale, AZ",
    "size": "",
    "year": "2008",
    "status": "",
    "services": " Architecture and interior design",
    "main_image": {
      "ID": 15,
      "id": 15,
      "title": "hor-artboard_3",
      "filename": "hor-artboard_3.png",
      "filesize": 1581807,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3.png",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/test-proyect-1\/hor-artboard_3\/",
      "alt": "",
      "author": "1",
      "description": "",
      "caption": "",
      "name": "hor-artboard_3",
      "status": "inherit",
      "uploaded_to": 14,
      "date": "2020-11-19 03:38:05",
      "modified": "2020-11-19 03:38:05",
      "menu_order": 0,
      "mime_type": "image\/png",
      "type": "image",
      "subtype": "png",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 1150,
      "height": 768,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-150x150.png",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-300x200.png",
        "medium-width": 300,
        "medium-height": 200,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-768x513.png",
        "medium_large-width": 768,
        "medium_large-height": 513,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-1024x684.png",
        "large-width": 1024,
        "large-height": 684,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3.png",
        "1536x1536-width": 1150,
        "1536x1536-height": 768,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3.png",
        "2048x2048-width": 1150,
        "2048x2048-height": 768,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-830x554.png",
        "sydney-large-thumb-width": 830,
        "sydney-large-thumb-height": 554,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-550x400.png",
        "sydney-medium-thumb-width": 550,
        "sydney-medium-thumb-height": 400,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-230x154.png",
        "sydney-small-thumb-width": 230,
        "sydney-small-thumb-height": 154,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-350x234.png",
        "sydney-service-thumb-width": 350,
        "sydney-service-thumb-height": 234,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/hor-artboard_3-480x321.png",
        "sydney-mas-thumb-width": 480,
        "sydney-mas-thumb-height": 321
      }
    },
    "home_page_order": "8"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/98-great-room-night-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/98-Entry-court-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/143K5916-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/143K5958-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/143K6609-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/143K6616-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/great-room-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/143K5909-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9368-min.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/143"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=143"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}, {
  "id": 45,
  "date": "2021-08-02T21:34:48",
  "date_gmt": "2021-08-02T21:34:48",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=45"
  },
  "modified": "2021-08-14T00:47:34",
  "modified_gmt": "2021-08-14T00:47:34",
  "slug": "2570-park",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/2570-park\/",
  "title": {
    "rendered": "2570 Park"
  },
  "template": "",
  "acf": {
    "name": "2570 Park",
    "location": " Laguna Beach, CA",
    "size": "",
    "year": "2020",
    "status": "",
    "services": "Architecture",
    "main_image": {
      "ID": 58,
      "id": 58,
      "title": "2570park-main",
      "filename": "2570park-main.jpg",
      "filesize": 1683788,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/2570-park\/2570park-main\/",
      "alt": "",
      "author": "3",
      "description": "",
      "caption": "",
      "name": "2570park-main",
      "status": "inherit",
      "uploaded_to": 45,
      "date": "2021-08-04 16:58:33",
      "modified": "2021-08-04 16:58:33",
      "menu_order": 0,
      "mime_type": "image\/jpeg",
      "type": "image",
      "subtype": "jpeg",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 0,
      "height": 0,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "thumbnail-width": 1,
        "thumbnail-height": 1,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "medium-width": 1,
        "medium-height": 1,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "medium_large-width": 1,
        "medium_large-height": 1,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "large-width": 1,
        "large-height": 1,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "1536x1536-width": 1,
        "1536x1536-height": 1,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "2048x2048-width": 1,
        "2048x2048-height": 1,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "sydney-large-thumb-width": 1,
        "sydney-large-thumb-height": 1,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "sydney-medium-thumb-width": 1,
        "sydney-medium-thumb-height": 1,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "sydney-small-thumb-width": 1,
        "sydney-small-thumb-height": 1,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "sydney-service-thumb-width": 1,
        "sydney-service-thumb-height": 1,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/2570park-main.jpg",
        "sydney-mas-thumb-width": 1,
        "sydney-mas-thumb-height": 1
      }
    },
    "home_page_order": "1"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-2.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-1.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-8.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-7.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-6.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-5.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-4.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/257-park-3.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/45"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=45"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}, {
  "id": 44,
  "date": "2021-08-02T21:34:11",
  "date_gmt": "2021-08-02T21:34:11",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=44"
  },
  "modified": "2021-08-14T22:14:12",
  "modified_gmt": "2021-08-14T22:14:12",
  "slug": "1091-skyline-dr",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/1091-skyline-dr\/",
  "title": {
    "rendered": "1091 Skyline Dr"
  },
  "template": "",
  "acf": {
    "name": "1091 Skyline Dr",
    "location": "Laguna Beach, CA",
    "size": "",
    "year": "2014",
    "status": "",
    "services": "Architecture and interior design",
    "main_image": {
      "ID": 100,
      "id": 100,
      "title": "1091skyline-main",
      "filename": "1091skyline-main.jpg",
      "filesize": 262105,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main.jpg",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/1091-skyline-dr\/1091skyline-main\/",
      "alt": "",
      "author": "3",
      "description": "",
      "caption": "",
      "name": "1091skyline-main",
      "status": "inherit",
      "uploaded_to": 44,
      "date": "2021-08-06 16:08:15",
      "modified": "2021-08-06 16:08:15",
      "menu_order": 0,
      "mime_type": "image\/jpeg",
      "type": "image",
      "subtype": "jpeg",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 1200,
      "height": 800,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-150x150.jpg",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-300x200.jpg",
        "medium-width": 300,
        "medium-height": 200,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-768x512.jpg",
        "medium_large-width": 768,
        "medium_large-height": 512,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-1024x683.jpg",
        "large-width": 1024,
        "large-height": 683,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main.jpg",
        "1536x1536-width": 1200,
        "1536x1536-height": 800,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main.jpg",
        "2048x2048-width": 1200,
        "2048x2048-height": 800,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-830x553.jpg",
        "sydney-large-thumb-width": 830,
        "sydney-large-thumb-height": 553,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-550x400.jpg",
        "sydney-medium-thumb-width": 550,
        "sydney-medium-thumb-height": 400,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-230x153.jpg",
        "sydney-small-thumb-width": 230,
        "sydney-small-thumb-height": 153,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-350x233.jpg",
        "sydney-service-thumb-width": 350,
        "sydney-service-thumb-height": 233,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-main-480x320.jpg",
        "sydney-mas-thumb-width": 480,
        "sydney-mas-thumb-height": 320
      }
    },
    "home_page_order": "2"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-1.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-2.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-3.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-4.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/1091skyline-5.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/44"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=44"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}, {
  "id": 43,
  "date": "2021-08-02T21:33:14",
  "date_gmt": "2021-08-02T21:33:14",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=43"
  },
  "modified": "2021-08-14T22:14:48",
  "modified_gmt": "2021-08-14T22:14:48",
  "slug": "740-barracuda",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/740-barracuda\/",
  "title": {
    "rendered": "740 Barracuda"
  },
  "template": "",
  "acf": {
    "name": "740 Barracuda",
    "location": "Laguna Beach, CA",
    "size": "",
    "year": "2013",
    "status": "",
    "services": "Architecture",
    "main_image": {
      "ID": 124,
      "id": 124,
      "title": "Lopez Residence-9118 (1)-min",
      "filename": "Lopez-Residence-9118-1-min-scaled.jpg",
      "filesize": 248185,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-scaled.jpg",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/740-barracuda\/lopez-residence-9118-1-min\/",
      "alt": "",
      "author": "1",
      "description": "",
      "caption": "",
      "name": "lopez-residence-9118-1-min",
      "status": "inherit",
      "uploaded_to": 43,
      "date": "2021-08-12 11:49:20",
      "modified": "2021-08-12 11:58:40",
      "menu_order": 0,
      "mime_type": "image\/jpeg",
      "type": "image",
      "subtype": "jpeg",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 2560,
      "height": 1707,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-150x150.jpg",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-300x200.jpg",
        "medium-width": 300,
        "medium-height": 200,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-768x512.jpg",
        "medium_large-width": 768,
        "medium_large-height": 512,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-1024x683.jpg",
        "large-width": 1024,
        "large-height": 683,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-1536x1024.jpg",
        "1536x1536-width": 1536,
        "1536x1536-height": 1024,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-scaled.jpg",
        "2048x2048-width": 2048,
        "2048x2048-height": 1366,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-scaled.jpg",
        "sydney-large-thumb-width": 830,
        "sydney-large-thumb-height": 553,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-scaled.jpg",
        "sydney-medium-thumb-width": 550,
        "sydney-medium-thumb-height": 367,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-scaled.jpg",
        "sydney-small-thumb-width": 230,
        "sydney-small-thumb-height": 153,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-scaled.jpg",
        "sydney-service-thumb-width": 350,
        "sydney-service-thumb-height": 233,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9118-1-min-scaled.jpg",
        "sydney-mas-thumb-width": 480,
        "sydney-mas-thumb-height": 320
      }
    },
    "home_page_order": "7"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9126-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9134-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9135-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9150-min.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/Lopez-Residence-9368-min.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/43"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=43"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}, {
  "id": 42,
  "date": "2021-08-02T21:32:32",
  "date_gmt": "2021-08-02T21:32:32",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=42"
  },
  "modified": "2021-08-14T22:15:03",
  "modified_gmt": "2021-08-14T22:15:03",
  "slug": "721-manzanita",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/721-manzanita\/",
  "title": {
    "rendered": "721 Manzanita"
  },
  "template": "",
  "acf": {
    "name": "721 Manzanita",
    "location": "Laguna Beach, CA",
    "size": "",
    "year": "2016",
    "status": "",
    "services": "Architecture and Interior Design",
    "main_image": {
      "ID": 86,
      "id": 86,
      "title": "721manzanita-main",
      "filename": "721manzanita-main.jpg",
      "filesize": 115671,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main.jpg",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/721-manzanita\/721manzanita-main\/",
      "alt": "",
      "author": "3",
      "description": "",
      "caption": "",
      "name": "721manzanita-main",
      "status": "inherit",
      "uploaded_to": 42,
      "date": "2021-08-06 15:57:08",
      "modified": "2021-08-06 15:57:08",
      "menu_order": 0,
      "mime_type": "image\/jpeg",
      "type": "image",
      "subtype": "jpeg",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 945,
      "height": 625,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-150x150.jpg",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-300x198.jpg",
        "medium-width": 300,
        "medium-height": 198,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-768x508.jpg",
        "medium_large-width": 768,
        "medium_large-height": 508,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main.jpg",
        "large-width": 945,
        "large-height": 625,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main.jpg",
        "1536x1536-width": 945,
        "1536x1536-height": 625,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main.jpg",
        "2048x2048-width": 945,
        "2048x2048-height": 625,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-830x549.jpg",
        "sydney-large-thumb-width": 830,
        "sydney-large-thumb-height": 549,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-550x400.jpg",
        "sydney-medium-thumb-width": 550,
        "sydney-medium-thumb-height": 400,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-230x152.jpg",
        "sydney-small-thumb-width": 230,
        "sydney-small-thumb-height": 152,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-350x231.jpg",
        "sydney-service-thumb-width": 350,
        "sydney-service-thumb-height": 231,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-main-480x317.jpg",
        "sydney-mas-thumb-width": 480,
        "sydney-mas-thumb-height": 317
      }
    },
    "home_page_order": "3"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-1.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-2.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-3.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-4.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-5.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-6.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2021\/08\/721manzanita-7.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/42"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=42"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}, {
  "id": 28,
  "date": "2020-12-08T23:05:10",
  "date_gmt": "2020-12-08T23:05:10",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=28"
  },
  "modified": "2021-08-14T22:15:24",
  "modified_gmt": "2021-08-14T22:15:24",
  "slug": "test-3",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/test-3\/",
  "title": {
    "rendered": "405 Dartmoor"
  },
  "template": "",
  "acf": {
    "name": "405 Dartmoor",
    "location": "Laguna Beach, CA",
    "size": "",
    "year": "2017",
    "status": "",
    "services": "Architecture",
    "main_image": {
      "ID": 78,
      "id": 78,
      "title": "405dartmoor-main",
      "filename": "405dartmoor-main.jpg",
      "filesize": 340793,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main.jpg",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/test-3\/405dartmoor-main\/",
      "alt": "",
      "author": "3",
      "description": "",
      "caption": "",
      "name": "405dartmoor-main",
      "status": "inherit",
      "uploaded_to": 28,
      "date": "2021-08-06 15:48:59",
      "modified": "2021-08-06 15:48:59",
      "menu_order": 0,
      "mime_type": "image\/jpeg",
      "type": "image",
      "subtype": "jpeg",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 1062,
      "height": 960,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-150x150.jpg",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-300x271.jpg",
        "medium-width": 300,
        "medium-height": 271,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-768x694.jpg",
        "medium_large-width": 768,
        "medium_large-height": 694,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-1024x926.jpg",
        "large-width": 1024,
        "large-height": 926,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main.jpg",
        "1536x1536-width": 1062,
        "1536x1536-height": 960,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main.jpg",
        "2048x2048-width": 1062,
        "2048x2048-height": 960,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-830x750.jpg",
        "sydney-large-thumb-width": 830,
        "sydney-large-thumb-height": 750,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-550x400.jpg",
        "sydney-medium-thumb-width": 550,
        "sydney-medium-thumb-height": 400,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-230x208.jpg",
        "sydney-small-thumb-width": 230,
        "sydney-small-thumb-height": 208,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-350x316.jpg",
        "sydney-service-thumb-width": 350,
        "sydney-service-thumb-height": 316,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-main-480x434.jpg",
        "sydney-mas-thumb-width": 480,
        "sydney-mas-thumb-height": 434
      }
    },
    "home_page_order": "4"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-1.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-2.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-3.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-4.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-4.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-5.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-6.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/12\/405dartmoor-7.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/28"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=28"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}, {
  "id": 19,
  "date": "2020-11-23T20:07:01",
  "date_gmt": "2020-11-23T20:07:01",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=19"
  },
  "modified": "2021-08-14T22:15:39",
  "modified_gmt": "2021-08-14T22:15:39",
  "slug": "test-project-2",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/test-project-2\/",
  "title": {
    "rendered": "395 Dartmoor"
  },
  "template": "",
  "acf": {
    "name": "395 Dartmoor",
    "location": "Laguna Beach, CA",
    "size": "",
    "year": "2015",
    "status": "",
    "services": "Architecture",
    "main_image": {
      "ID": 72,
      "id": 72,
      "title": "395dartmoor-main",
      "filename": "395dartmoor-main-scaled.jpg",
      "filesize": 436969,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-scaled.jpg",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/test-project-2\/395dartmoor-main\/",
      "alt": "",
      "author": "3",
      "description": "",
      "caption": "",
      "name": "395dartmoor-main",
      "status": "inherit",
      "uploaded_to": 19,
      "date": "2021-08-06 15:42:38",
      "modified": "2021-08-06 15:42:38",
      "menu_order": 0,
      "mime_type": "image\/jpeg",
      "type": "image",
      "subtype": "jpeg",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 2560,
      "height": 1920,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-150x150.jpg",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-300x225.jpg",
        "medium-width": 300,
        "medium-height": 225,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-768x576.jpg",
        "medium_large-width": 768,
        "medium_large-height": 576,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-1024x768.jpg",
        "large-width": 1024,
        "large-height": 768,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-1536x1152.jpg",
        "1536x1536-width": 1536,
        "1536x1536-height": 1152,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-scaled.jpg",
        "2048x2048-width": 2048,
        "2048x2048-height": 1536,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-scaled.jpg",
        "sydney-large-thumb-width": 830,
        "sydney-large-thumb-height": 623,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-scaled.jpg",
        "sydney-medium-thumb-width": 533,
        "sydney-medium-thumb-height": 400,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-scaled.jpg",
        "sydney-small-thumb-width": 230,
        "sydney-small-thumb-height": 173,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-scaled.jpg",
        "sydney-service-thumb-width": 350,
        "sydney-service-thumb-height": 263,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-main-scaled.jpg",
        "sydney-mas-thumb-width": 480,
        "sydney-mas-thumb-height": 360
      }
    },
    "home_page_order": "5"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-1.png", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-2.png", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-3.png", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-4-scaled.jpg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/395dartmoor-5-scaled.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/19"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=19"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}, {
  "id": 14,
  "date": "2020-11-19T03:39:18",
  "date_gmt": "2020-11-19T03:39:18",
  "guid": {
    "rendered": "https:\/\/wp.conradarchitect.com\/?post_type=projects&#038;p=14"
  },
  "modified": "2021-08-14T22:15:54",
  "modified_gmt": "2021-08-14T22:15:54",
  "slug": "test-proyect-1",
  "status": "publish",
  "type": "projects",
  "link": "https:\/\/wp.conradarchitect.com\/projects\/test-proyect-1\/",
  "title": {
    "rendered": "195 Monarch Bay"
  },
  "template": "",
  "acf": {
    "name": "195 Monarch Bay",
    "location": "Monarch Beach, CA",
    "size": "",
    "year": "2019",
    "status": "",
    "services": "Architecture",
    "main_image": {
      "ID": 46,
      "id": 46,
      "title": "DSC08385_1-min",
      "filename": "DSC08385_1-min-scaled.jpg",
      "filesize": 1323521,
      "url": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-scaled.jpg",
      "link": "https:\/\/wp.conradarchitect.com\/projects\/test-proyect-1\/dsc08385_1-min\/",
      "alt": "",
      "author": "1",
      "description": "",
      "caption": "",
      "name": "dsc08385_1-min",
      "status": "inherit",
      "uploaded_to": 14,
      "date": "2021-08-02 21:43:05",
      "modified": "2021-08-02 21:43:05",
      "menu_order": 0,
      "mime_type": "image\/jpeg",
      "type": "image",
      "subtype": "jpeg",
      "icon": "https:\/\/wp.conradarchitect.com\/wp-includes\/images\/media\/default.png",
      "width": 2560,
      "height": 1709,
      "sizes": {
        "thumbnail": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-150x150.jpg",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-300x200.jpg",
        "medium-width": 300,
        "medium-height": 200,
        "medium_large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-768x513.jpg",
        "medium_large-width": 768,
        "medium_large-height": 513,
        "large": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-1024x683.jpg",
        "large-width": 1024,
        "large-height": 683,
        "1536x1536": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-1536x1025.jpg",
        "1536x1536-width": 1536,
        "1536x1536-height": 1025,
        "2048x2048": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-scaled.jpg",
        "2048x2048-width": 2048,
        "2048x2048-height": 1367,
        "sydney-large-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-scaled.jpg",
        "sydney-large-thumb-width": 830,
        "sydney-large-thumb-height": 554,
        "sydney-medium-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-scaled.jpg",
        "sydney-medium-thumb-width": 550,
        "sydney-medium-thumb-height": 367,
        "sydney-small-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-scaled.jpg",
        "sydney-small-thumb-width": 230,
        "sydney-small-thumb-height": 154,
        "sydney-service-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-scaled.jpg",
        "sydney-service-thumb-width": 350,
        "sydney-service-thumb-height": 234,
        "sydney-mas-thumb": "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/DSC08385_1-min-scaled.jpg",
        "sydney-mas-thumb-width": 480,
        "sydney-mas-thumb-height": 320
      }
    },
    "home_page_order": "6"
  },
  "gallery_images": ["https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch10-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch9-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch8-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch2-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch4-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch5-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch6-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch7-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch2-min-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/Monarch11-scaled.jpeg", "https:\/\/wp.conradarchitect.com\/wp-content\/uploads\/2020\/11\/195monarchbay-12-scaled.jpg"],
  "_links": {
    "self": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects\/14"
    }],
    "collection": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/projects"
    }],
    "about": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/types\/projects"
    }],
    "wp:attachment": [{
      "href": "https:\/\/wp.conradarchitect.com\/wp-json\/wp\/v2\/media?parent=14"
    }],
    "curies": [{
      "name": "wp",
      "href": "https:\/\/api.w.org\/{rel}",
      "templated": true
    }]
  }
}];

/***/ }),

/***/ "./components/projects/API/index.js":
/*!******************************************!*\
  !*** ./components/projects/API/index.js ***!
  \******************************************/
/*! exports provided: getProjects, getTempProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTempProjects", function() { return getTempProjects; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/projects/API/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getProjects = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${process.env.REACT_APP_API_URL}/projects`).then(response => {
    return response.data.map(element => _objectSpread(_objectSpread({}, element.acf), {}, {
      gallery: element.gallery_images
    }));
  }).catch(err => console.log('>>error', err));
}; //TODO: This will be removed


const getTempProjects = () => {
  return _constants__WEBPACK_IMPORTED_MODULE_1__["PROJECTS_DATA"].map(element => _objectSpread(_objectSpread({}, element.acf), {}, {
    gallery: element.gallery_images
  }));
};



/***/ }),

/***/ "./components/projects/Gallery.js":
/*!****************************************!*\
  !*** ./components/projects/Gallery.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-collapsible */ "react-collapsible");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.module.scss */ "./components/projects/gallery.module.scss");
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API */ "./components/projects/API/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\projects\\Gallery.js";
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

/***/ }),

/***/ "./components/projects/gallery.module.scss":
/*!*************************************************!*\
  !*** ./components/projects/gallery.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"images_wrapper": "gallery_images_wrapper__1cRHg",
	"more_images_wrapper": "gallery_more_images_wrapper__2sXjY",
	"slide": "gallery_slide__3KdvY",
	"image": "gallery_image__3ObTU",
	"all_projects_cta": "gallery_all_projects_cta__C_vkE",
	"gallery-overlay-helper": "gallery_gallery-overlay-helper__2M6l_",
	"expandedPanel": "gallery_expandedPanel__zct4p"
};


/***/ }),

/***/ "./components/projects/index.js":
/*!**************************************!*\
  !*** ./components/projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery */ "./components/projects/Gallery.js");
/* harmony import */ var _common_SectionLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SectionLayout */ "./components/common/SectionLayout.js");
/* harmony import */ var _projects_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.module.scss */ "./components/projects/projects.module.scss");
/* harmony import */ var _projects_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_projects_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\components\\projects\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Components


 //css



const Projects = () => {
  return __jsx(_common_SectionLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sectionTitle: 'PROJECTS',
    sectionId: 'PROJECTS',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_Gallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/projects/projects.module.scss":
/*!**************************************************!*\
  !*** ./components/projects/projects.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"projects-wrapper": "projects_projects-wrapper__1KAZK"
};


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/pure-react-carousel/dist/react-carousel.es.css":
/*!*********************************************************************!*\
  !*** ./node_modules/pure-react-carousel/dist/react-carousel.es.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/banner */ "./components/banner/index.js");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projects */ "./components/projects/index.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/about */ "./components/about/index.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact */ "./components/contact/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\conradArchitect\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //Components

function App() {
  return __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx(_components_projects__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx(_components_about__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./public/assets/images/conrad-architect-team-min.jpeg":
/*!*************************************************************!*\
  !*** ./public/assets/images/conrad-architect-team-min.jpeg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/conrad-architect-team-min-173ba7e0e544555568cb0912325a05e5.jpeg";

/***/ }),

/***/ "./public/assets/images/jim-conrad-logo-light.png":
/*!********************************************************!*\
  !*** ./public/assets/images/jim-conrad-logo-light.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAAzCAYAAABrPJYlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkU1OThCNTYzQkQwMTFFNEFCMTRGODk4ODc5QjE5NUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkU1OThCNTczQkQwMTFFNEFCMTRGODk4ODc5QjE5NUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMDEyRjIwOTNCQ0YxMUU0QUIxNEY4OTg4NzlCMTk1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMDEyRjIwQTNCQ0YxMUU0QUIxNEY4OTg4NzlCMTk1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqewn4wAAAquSURBVHja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"

/***/ }),

/***/ "./public/assets/images/projects/143K5909.jpg":
/*!****************************************************!*\
  !*** ./public/assets/images/projects/143K5909.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/143K5909-92b76a0c22eeb5c1a9f0fc6fad16179d.jpg";

/***/ }),

/***/ "./public/assets/images/projects/405-Dartmoor-Street.jpg":
/*!***************************************************************!*\
  !*** ./public/assets/images/projects/405-Dartmoor-Street.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/405-Dartmoor-Street-9298438b000d7f65a12eb1122e2f1c40.jpg";

/***/ }),

/***/ "./public/assets/images/projects/DSC08584-min.jpg":
/*!********************************************************!*\
  !*** ./public/assets/images/projects/DSC08584-min.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC08584-min-70052c8b765092060c911e78e8c2d7ac.jpg";

/***/ }),

/***/ "./public/assets/images/projects/Lopez Residence-9118.jpg":
/*!****************************************************************!*\
  !*** ./public/assets/images/projects/Lopez Residence-9118.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Lopez Residence-9118-760264cccadc75bc3d512a3bb2014b02.jpg";

/***/ }),

/***/ "./public/assets/right-arrow.svg":
/*!***************************************!*\
  !*** ./public/assets/right-arrow.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEuNDkgMzEuNDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ5IDMxLjQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojMUUyMDFEOyIgZD0iTTIxLjIwNSw1LjAwN2MtMC40MjktMC40NDQtMS4xNDMtMC40NDQtMS41ODcsMGMtMC40MjksMC40MjktMC40MjksMS4xNDMsMCwxLjU3MWw4LjA0Nyw4LjA0N0gxLjExMQ0KCUMwLjQ5MiwxNC42MjYsMCwxNS4xMTgsMCwxNS43MzdjMCwwLjYxOSwwLjQ5MiwxLjEyNywxLjExMSwxLjEyN2gyNi41NTRsLTguMDQ3LDguMDMyYy0wLjQyOSwwLjQ0NC0wLjQyOSwxLjE1OSwwLDEuNTg3DQoJYzAuNDQ0LDAuNDQ0LDEuMTU5LDAuNDQ0LDEuNTg3LDBsOS45NTItOS45NTJjMC40NDQtMC40MjksMC40NDQtMS4xNDMsMC0xLjU3MUwyMS4yMDUsNS4wMDd6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "pure-react-carousel":
/*!**************************************!*\
  !*** external "pure-react-carousel" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-collapsible":
/*!************************************!*\
  !*** external "react-collapsible" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-collapsible");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fib3V0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWJvdXQvdGlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhbm5lci9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iYW5uZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmFubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1NlY3Rpb25MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvbW9iaWxlLWNhcm91c2VsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL3NlY3Rpb25MYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1tZW51L21vYmlsZU1lbnUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9qZWN0cy9BUEkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvamVjdHMvQVBJL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvamVjdHMvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL2dhbGxlcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb25yYWQtYXJjaGl0ZWN0LXRlYW0tbWluLmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvamltLWNvbnJhZC1sb2dvLWxpZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy8xNDNLNTkwOS5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvNDA1LURhcnRtb29yLVN0cmVldC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvRFNDMDg1ODQtbWluLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9Mb3BleiBSZXNpZGVuY2UtOTExOC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9yaWdodC1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHVyZS1yZWFjdC1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29sbGFwc2libGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiJdLCJuYW1lcyI6WyJBQk9VVF9QQVJBR1JBUEhfT05FIiwiQUJPVVRfUEFSQUdSQVBIX1RXTyIsIkFCT1VUX1BBUkFHUkFQSF9USFJFRSIsIkFCT1VUX1BBUkFHUkFQSF9GT1VSIiwiVEVBTV9DQVJPVVNFTF9TTElERVMiLCJNRU1CRVJTIiwiaWQiLCJuYW1lIiwibGFzdE5hbWUiLCJyb2wiLCJwcm9maWxlUGljdHVyZSIsImxpbmtUb1Byb2ZpbGUiLCJBYm91dCIsInN0eWxlcyIsImNvbnRhaW5lciIsInRlYW1fdGlsZSIsImZ1bGxfdGVhbSIsInRlYW0iLCJ0ZWFtX3BpY3R1cmUiLCJ0ZWFtX3dyYXBwZXIiLCJ0ZXh0X3dyYXBwZXIiLCJwYXJhZ3JhcGhzIiwicXVvdGVfY29udGFpbmVyIiwicXVvdGUiLCJxdW90ZV9uYW1lIiwidGlsZV9jb250YWluZXIiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiVGlsZSIsInByb3BzIiwia2V5Iiwic3RhZmZEYXRhIiwibWVtYmVyX3RpbGUiLCJ0aWxlX3RleHRfd3JhcHBlciIsInRpbGVfbGluayIsIk15Q2Fyb3VzZWwiLCJzdHlsZSIsImNhcm91c2VsIiwiQ0FST1VTRUxfSU1BR0VTIiwiaXRlbSIsImNhcm91c2VsX3NsaWRlciIsImFsdCIsImltZyIsInNsaWRlSW1hZ2UxIiwic2xpZGVJbWFnZTIiLCJzbGlkZUltYWdlMyIsInNsaWRlSW1hZ2U0IiwiQmFubmVyIiwiY2Fyb3VzZWxfY29udGFpbmVyIiwiY29udGVudCIsIndoaXRlX2JvcmRlciIsIlNlY3Rpb25MYXlvdXQiLCJzZWN0aW9uVGl0bGUiLCJzZWN0aW9uSWQiLCJ3cmFwcGVyIiwiZ3JheV9iYWNrZ3JvdW5kIiwiY29udGVudF9jb250YWluZXIiLCJjaGlsZHJlbiIsInByb3RvdHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJzbGlkZXMiLCJsZW5ndGgiLCJBcnJvdyIsImFycmF5IiwiQ29udGFjdCIsImxpbmsiLCJNRU5VX0xJTktTIiwibGFiZWwiLCJsaW5rVG8iLCJIZWFkZXIiLCJsb2dvIiwiTG9nbyIsIm5hdiIsIk1vYmlsZU1lbnUiLCJtZW51SXRlbXMiLCJtZW51VG9nZ2xlIiwiUFJPSkVDVFNfREFUQSIsImdldFByb2plY3RzIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZWxlbWVudCIsImFjZiIsImdhbGxlcnkiLCJnYWxsZXJ5X2ltYWdlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldFRlbXBQcm9qZWN0cyIsIkdhbGxlcnkiLCJhZGRQcm9qZWN0TGlzdCIsInNldFNpbmdsZVByb2plY3QiLCJwcm9qZWN0c0xpc3QiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInVzZVN0YXRlIiwiaW1hZ2VzX3dyYXBwZXIiLCJwcm9qZWN0Iiwic2xpZGUiLCJpbWFnZSIsIm1haW5faW1hZ2UiLCJ1cmwiLCJhbGxfcHJvamVjdHNfY3RhIiwibW9yZV9pbWFnZXNfd3JhcHBlciIsInNsaWNlIiwiUHJvamVjdHMiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLFNBQVNtRyxHQUFULEdBQWU7QUFDWCxTQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREo7QUFRSDs7QUFFY0Esa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNsQkEsd0c7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLHd3Sjs7Ozs7Ozs7Ozs7QUNBakMsc0Y7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsMEY7Ozs7Ozs7Ozs7O0FDQUEsa0c7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLG9xQzs7Ozs7Ozs7Ozs7QUNBckMsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpbGVfY29udGFpbmVyXCI6IFwiYWJvdXRfdGlsZV9jb250YWluZXJfXzJqTGJWXCIsXG5cdFwidGl0bGVcIjogXCJhYm91dF90aXRsZV9fMzhMOGxcIixcblx0XCJjb250YWluZXJcIjogXCJhYm91dF9jb250YWluZXJfX0NqUXFJXCIsXG5cdFwidGVhbV90aWxlXCI6IFwiYWJvdXRfdGVhbV90aWxlX18ybGZZRlwiLFxuXHRcInRlYW1fcGljdHVyZVwiOiBcImFib3V0X3RlYW1fcGljdHVyZV9fVVdjMHFcIixcblx0XCJ0ZWFtX3dyYXBwZXJcIjogXCJhYm91dF90ZWFtX3dyYXBwZXJfXzJLWkt3XCIsXG5cdFwidGV4dF93cmFwcGVyXCI6IFwiYWJvdXRfdGV4dF93cmFwcGVyX18ybXFuYVwiLFxuXHRcInBhcmFncmFwaHNcIjogXCJhYm91dF9wYXJhZ3JhcGhzX18yQXhFeVwiLFxuXHRcInF1b3RlX2NvbnRhaW5lclwiOiBcImFib3V0X3F1b3RlX2NvbnRhaW5lcl9fX3VuU2hcIixcblx0XCJxdW90ZVwiOiBcImFib3V0X3F1b3RlX18zc3ptRVwiLFxuXHRcInF1b3RlX25hbWVcIjogXCJhYm91dF9xdW90ZV9uYW1lX19yc203LVwiLFxuXHRcIm1lbWJlcl90aWxlXCI6IFwiYWJvdXRfbWVtYmVyX3RpbGVfXzFvVUNrXCIsXG5cdFwidGlsZV90ZXh0X3dyYXBwZXJcIjogXCJhYm91dF90aWxlX3RleHRfd3JhcHBlcl9fdW9XVFFcIixcblx0XCJ0aWxlX2xpbmtcIjogXCJhYm91dF90aWxlX2xpbmtfX0QwbTQtXCIsXG5cdFwidGVhbV9saW5rXCI6IFwiYWJvdXRfdGVhbV9saW5rX18zNThYQVwiLFxuXHRcImZ1bGxfdGVhbVwiOiBcImFib3V0X2Z1bGxfdGVhbV9fQkJEbmJcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBQk9VVF9QQVJBR1JBUEhfT05FID0gJ1RoZSBBcmNoaXRlY3R1cmFsIGZpcm0sIEphbWVzIENvbnJhZCwgQXJjaGl0ZWN0cyAoSkNBICknICtcclxuICAgICcgd2FzIGZvdW5kZWQgaW4gMTk5MCBieSBKYW1lcyBDb25yYWQuIEphbWVzIGNvbmN1cnJlbnRseSBmb3VuZCBhIGRldmVsb3BtZW50IGNvbXBhbnkgY2FsbGVkIENvbnJhZCBEZXZlbG9wbWVudC4nO1xyXG5cclxuY29uc3QgQUJPVVRfUEFSQUdSQVBIX1RXTyA9ICdKQ0EgcHJvdmlkZSBoaWdobHkgcGVyc29uYWxpemVkIHNlcnZpY2UuIE91ciB3ZWFsdGggb2YgZXhwZXJpZW5jZSBpcyBpbnZhbHVhYmxlIGluJyArXHJcbiAgICAnIHNlbGVjdGluZyB0aGUgcmlnaHQgcHJvcGVydHkuIFdlIGNhbiBwcm92aWRlIGd1aWRhbmNlIHRocm91Z2ggYWxsIHBoYXNlcyBvZiBidWlsZGluZyBhIGhvbWUgc3RhcnRpbmcgYXQnICtcclxuICAgICcgYXNzaXN0YW5jZSB3aXRoIGZpbmRpbmcgdGhlIHJpZ2h0IHByb3BlcnR5JztcclxuXHJcbmNvbnN0IEFCT1VUX1BBUkFHUkFQSF9USFJFRSA9ICdKQ0Egd29ya3MgcHJpbWFyaWx5IGluIFNvdXRoZXJuIENhbGlmb3JuaWEgYnV0IGhhcyBwcm9qZWN0cyB0aHJvdWdob3V0IHRoZScgK1xyXG4gICAgJyBVbml0ZWQgU3RhdGVzLCBDYW5hZGEgYW5kIE1leGljby4nO1xyXG5cclxuY29uc3QgQUJPVVRfUEFSQUdSQVBIX0ZPVVIgPSAnVGhlIGNvbWJpbmF0aW9uIG9mIGV4cGVyaWVuY2UgYW5kIGhpZ2hseSBwZXJzb25hbGl6ZWQgc2VydmljZSBhbGxvd3MgSkNBIHByb3ZpZGUnICtcclxuICAgICcgYSBmdWxsIGFycmF5IG9mIHNlcnZpY2VzIHRvIGNsaWVudHMgd2FudGluZyB0byBidWlsZCB0aGVpciBkcmVhbSBob21lLic7XHJcblxyXG5jb25zdCBURUFNX0NBUk9VU0VMX1NMSURFUyA9IFtcclxuICAgIDxwPlxyXG4gICAgICAgIFRoZSBBcmNoaXRlY3R1cmFsIGZpcm0sIEphbWVzIENvbnJhZCwgQXJjaGl0ZWN0cyAoSkNBICkgd2FzIGZvdW5kZWQgaW4gMTk5MCBieVxyXG4gICAgICAgIEphbWVzIENvbnJhZC4gSmFtZXMgY29uY3VycmVudGx5IGZvdW5kIGEgZGV2ZWxvcG1lbnQgY29tcGFueSBjYWxsZWQgQ29ucmFkXHJcbiAgICAgICAgRGV2ZWxvcG1lbnQuXHJcbiAgICA8L3A+LFxyXG4gICAgPHA+XHJcbiAgICAgICAgVGhlIEFyY2hpdGVjdHVyYWwgZmlybSwgSmFtZXMgQ29ucmFkLCBBcmNoaXRlY3RzIChKQ0EgKSB3YXMgZm91bmRlZCBpbiAxOTkwIGJ5XHJcbiAgICAgICAgSmFtZXMgQ29ucmFkLiBKYW1lcyBjb25jdXJyZW50bHkgZm91bmQgYSBkZXZlbG9wbWVudCBjb21wYW55IGNhbGxlZCBDb25yYWRcclxuICAgICAgICBEZXZlbG9wbWVudC5cclxuICAgIDwvcD4sXHJcbiAgICA8cD5cclxuICAgICAgICBUaGUgQXJjaGl0ZWN0dXJhbCBmaXJtLCBKYW1lcyBDb25yYWQsIEFyY2hpdGVjdHMgKEpDQSApIHdhcyBmb3VuZGVkIGluIDE5OTAgYnlcclxuICAgICAgICBKYW1lcyBDb25yYWQuIEphbWVzIGNvbmN1cnJlbnRseSBmb3VuZCBhIGRldmVsb3BtZW50IGNvbXBhbnkgY2FsbGVkIENvbnJhZFxyXG4gICAgICAgIERldmVsb3BtZW50LlxyXG4gICAgPC9wPlxyXG5dXHJcblxyXG5jb25zdCBNRU1CRVJTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdNYXVyZWVuJyxcclxuICAgICAgICBsYXN0TmFtZTogJ1NjYWxseScsXHJcbiAgICAgICAgcm9sOiAnQXJjaGl0ZWN0IC0gQXNzb2NpYXRlJyxcclxuICAgICAgICBwcm9maWxlUGljdHVyZTogJ2h0dHBzOi8vd3AuY29ucmFkYXJjaGl0ZWN0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMi9tYXVyZWVuLXNjYWxseS1zY2FsZWQuanBnJyxcclxuICAgICAgICBsaW5rVG9Qcm9maWxlOiAnL01hdXJlZW5TY2FsbHlQcm9maWxlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ0ppbScsXHJcbiAgICAgICAgbGFzdE5hbWU6ICdDb25yYWQnLFxyXG4gICAgICAgIHJvbDogJ0FyY2hpdGVjdCAtIEZvdW5kZXInLFxyXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOiAnaHR0cHM6Ly93cC5jb25yYWRhcmNoaXRlY3QuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAyL2ppbS1jb25yYWQtc2NhbGVkLmpwZycsXHJcbiAgICAgICAgbGlua1RvUHJvZmlsZTogJy9KaW1Db25yYWRQcm9maWxlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ0FsaScsXHJcbiAgICAgICAgbGFzdE5hbWU6ICdBc2hvdXJpaGEnLFxyXG4gICAgICAgIHJvbDogJ0FyY2hpdGVjdCAtIEFzc29jaWF0ZScsXHJcbiAgICAgICAgcHJvZmlsZVBpY3R1cmU6ICdodHRwczovL3dwLmNvbnJhZGFyY2hpdGVjdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDIvYWxpLUFzaG91cmloYS1zY2FsZWQuanBnJyxcclxuICAgICAgICBsaW5rVG9Qcm9maWxlOiAnL3RlYW0tYWxpJyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQge1xyXG4gICAgQUJPVVRfUEFSQUdSQVBIX09ORSxcclxuICAgIEFCT1VUX1BBUkFHUkFQSF9UV08sXHJcbiAgICBBQk9VVF9QQVJBR1JBUEhfVEhSRUUsXHJcbiAgICBBQk9VVF9QQVJBR1JBUEhfRk9VUixcclxuICAgIE1FTUJFUlMsXHJcbiAgICBURUFNX0NBUk9VU0VMX1NMSURFU1xyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hYm91dC5tb2R1bGUuc2Nzcyc7XHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgU2VjdGlvbkxheW91dCBmcm9tICcuLi9jb21tb24vU2VjdGlvbkxheW91dCc7XHJcbmltcG9ydCBNb2JpbGVDYXJvdXNlbCBmcm9tICcuLi9jb21tb24vY2Fyb3VzZWwnO1xyXG5pbXBvcnQgVGlsZSBmcm9tICcuL3RpbGUnO1xyXG4vL0NvbnN0YW50XHJcbmltcG9ydCB7XHJcbiAgICBNRU1CRVJTLFxyXG4gICAgQUJPVVRfUEFSQUdSQVBIX0ZPVVIsXHJcbiAgICBBQk9VVF9QQVJBR1JBUEhfT05FLFxyXG4gICAgQUJPVVRfUEFSQUdSQVBIX1RIUkVFLFxyXG4gICAgQUJPVVRfUEFSQUdSQVBIX1RXTyxcclxuICAgIFRFQU1fQ0FST1VTRUxfU0xJREVTLFxyXG59IGZyb20gJy4vY29uc3RhbnRzJztcclxuLy9JbWFnZXNcclxuaW1wb3J0IHRlYW0gZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvY29ucmFkLWFyY2hpdGVjdC10ZWFtLW1pbi5qcGVnJztcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VjdGlvbkxheW91dCBzZWN0aW9uVGl0bGU9eydBQk9VVCd9IHNlY3Rpb25JZD17J0FCT1VUJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGVhbV90aWxlfSAke3N0eWxlcy5mdWxsX3RlYW19YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9eydDb25yYWQgQXJjaGl0ZWN0IHRlYW0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRlYW1fcGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbV93cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNPTlJBRCBBUkNISVRFQ1RTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZUNhcm91c2VsIHNsaWRlcz17VEVBTV9DQVJPVVNFTF9TTElERVN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntBQk9VVF9QQVJBR1JBUEhfT05FfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57QUJPVVRfUEFSQUdSQVBIX1RXT308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e0FCT1VUX1BBUkFHUkFQSF9USFJFRX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvdGVfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5xdW90ZX0+JiM4MjIwO3tBQk9VVF9QQVJBR1JBUEhfRk9VUn0mIzgyMjE7PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnF1b3RlX25hbWV9Pi1KYW1lcyBDb25yYWQsIEZvdW5kZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlsZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtNRU1CRVJTLm1hcCgodmFsdWUsIGluZGV4KSA9PiA8VGlsZSBzdGFmZkRhdGE9e3ZhbHVlfSBrZXk9e2luZGV4fSAvPil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWN0aW9uTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9hYm91dC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGtleSwgbmFtZSwgbGFzdE5hbWUsIHJvbCwgcHJvZmlsZVBpY3R1cmUsIGxpbmtUb1Byb2ZpbGUsIGlkIH0gPSBwcm9wcy5zdGFmZkRhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtgb3JkZXItJHtpZH1gfSBjbGFzc05hbWU9e2Ake3N0eWxlcy50ZWFtX3RpbGV9ICR7c3R5bGVzLm1lbWJlcl90aWxlfWB9PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD17YCR7a2V5fS1wcm9maWxlYH0gc3JjPXtwcm9maWxlUGljdHVyZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbGVfdGV4dF93cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxoNT57YCR7bmFtZX0gJHtsYXN0TmFtZX1gfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDY+e3JvbH08L2g2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua1RvUHJvZmlsZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRpbGVfbGlua30+RlVMTCBQUk9GSUxFID48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzcyc7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xyXG4vL2ltYWdlc1xyXG5pbXBvcnQgeyBDQVJPVVNFTF9JTUFHRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8vY3NzXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2Jhbm5lci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBNeUNhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FST1VTRUxfSU1BR0VTLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcm91c2VsX3NsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWxcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiYmFubmVyX2NvbnRhaW5lcl9fMS1xbXRcIixcblx0XCJjb250ZW50XCI6IFwiYmFubmVyX2NvbnRlbnRfX2Z1VHV6XCIsXG5cdFwiY2Fyb3VzZWxfY29udGFpbmVyXCI6IFwiYmFubmVyX2Nhcm91c2VsX2NvbnRhaW5lcl9fMURoQVRcIixcblx0XCJjYXJvdXNlbFwiOiBcImJhbm5lcl9jYXJvdXNlbF9fMlVkVUVcIixcblx0XCJjYXJvdXNlbF9pbWFnZVwiOiBcImJhbm5lcl9jYXJvdXNlbF9pbWFnZV9fcFZUSDlcIixcblx0XCJjYXJvdXNlbF9yb290XCI6IFwiYmFubmVyX2Nhcm91c2VsX3Jvb3RfXzFFVmpRXCIsXG5cdFwic2xpZGVyX3dyYXBwZXJcIjogXCJiYW5uZXJfc2xpZGVyX3dyYXBwZXJfXzMtWUtrXCIsXG5cdFwic2xpZGVyXCI6IFwiYmFubmVyX3NsaWRlcl9fWGwzNnFcIixcblx0XCJ3aGl0ZV9ib3JkZXJcIjogXCJiYW5uZXJfd2hpdGVfYm9yZGVyX18zcWNHOFwiLFxuXHRcImNhcm91c2VsX3NsaWRlclwiOiBcImJhbm5lcl9jYXJvdXNlbF9zbGlkZXJfXzNLWEs3XCJcbn07XG4iLCJpbXBvcnQgc2xpZGVJbWFnZTEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvRFNDMDg1ODQtbWluLmpwZyc7XHJcbmltcG9ydCBzbGlkZUltYWdlMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy80MDUtRGFydG1vb3ItU3RyZWV0LmpwZyc7XHJcbmltcG9ydCBzbGlkZUltYWdlMyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9Mb3BleiBSZXNpZGVuY2UtOTExOC5qcGcnO1xyXG5pbXBvcnQgc2xpZGVJbWFnZTQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvMTQzSzU5MDkuanBnJztcclxuXHJcbmV4cG9ydCBjb25zdCBDQVJPVVNFTF9JTUFHRVMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgYWx0OiAnRmlyc3QgSW1hZ2Ugb2YgY2Fyb3VzZWwnLFxyXG4gICAgICAgIGltZzogc2xpZGVJbWFnZTFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgYWx0OiAnU2Vjb25kIEltYWdlIG9mIGNhcm91c2VsJyxcclxuICAgICAgICBpbWc6IHNsaWRlSW1hZ2UyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIGFsdDogJ1RoaXJkIEltYWdlIG9mIGNhcm91c2VsJyxcclxuICAgICAgICBpbWc6IHNsaWRlSW1hZ2UzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIGFsdDogJ0ZvcnRoIEltYWdlIG9mIGNhcm91c2VsJyxcclxuICAgICAgICBpbWc6IHNsaWRlSW1hZ2U0XHJcbiAgICB9XHJcbl1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnO1xyXG4vL2Nzc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFubmVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndoaXRlX2JvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZWN0aW9uTGF5b3V0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFNlY3Rpb25MYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgc2VjdGlvblRpdGxlLCBzZWN0aW9uSWQgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZWN0aW9uLWNvbnRhaW5lcid9IGlkPXtzZWN0aW9uSWR9PlxyXG4gICAgICAgICAgICA8aDE+e3NlY3Rpb25UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmF5X2JhY2tncm91bmR9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5TZWN0aW9uTGF5b3V0LnByb3RvdHlwZXMgPSB7XHJcbiAgc2VjdGlvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkxheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2Fyb3VzZWxQcm92aWRlcixcclxuICAgIFNsaWRlcixcclxuICAgIFNsaWRlLFxyXG4gICAgQnV0dG9uQmFjayxcclxuICAgIEJ1dHRvbk5leHQsXHJcbn0gZnJvbSAncHVyZS1yZWFjdC1jYXJvdXNlbCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2JpbGUtY2Fyb3VzZWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgJ3B1cmUtcmVhY3QtY2Fyb3VzZWwvZGlzdC9yZWFjdC1jYXJvdXNlbC5lcy5jc3MnO1xyXG4vL0ljb25zXHJcbmltcG9ydCBBcnJvdyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL3JpZ2h0LWFycm93LnN2Zyc7XHJcblxyXG5jb25zdCBNeUNhcm91c2VsID0gKHsgc2xpZGVzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxQcm92aWRlclxyXG4gICAgICAgICAgICAgICAgbmF0dXJhbFNsaWRlV2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgIG5hdHVyYWxTbGlkZUhlaWdodD17MTEwfVxyXG4gICAgICAgICAgICAgICAgdG90YWxTbGlkZXM9e3NsaWRlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjYXJvdXNlbC1jb250YWluZXInfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NsaWRlcnMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFjayBjbGFzc05hbWU9eydhcnJvdyBiYWNrJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnYmFjay1hcnJvdyd9IHNyYz17QXJyb3d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2xpZGVyLXdyYXBwZXInfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlIGtleT17YHNsaWRlLSR7aW5kZXh9YH0gaW5kZXg9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25OZXh0IGNsYXNzTmFtZT17J2Fycm93IG5leHQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydiYWNrLWFycm93J30gc3JjPXtBcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbk5leHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuTXlDYXJvdXNlbC5wcm90b3R5cGVzID0ge1xyXG4gICAgc2xpZGVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNhcm91c2VsOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIm1vYmlsZS1jYXJvdXNlbF9jb250YWluZXJfX0QzRFFQXCIsXG5cdFwibW9iaWxlLWNhcm91c2VsX2NvbnRhaW5lclwiOiBcIm1vYmlsZS1jYXJvdXNlbF9tb2JpbGUtY2Fyb3VzZWxfY29udGFpbmVyX19McDZvUVwiLFxuXHRcInNsaWRlcnNcIjogXCJtb2JpbGUtY2Fyb3VzZWxfc2xpZGVyc19fMzd1aklcIixcblx0XCJhYm91dC1wYXJhZ3JhcGhzXCI6IFwibW9iaWxlLWNhcm91c2VsX2Fib3V0LXBhcmFncmFwaHNfXzNzdnJ5XCIsXG5cdFwiYWJvdXQtcXVvdGVcIjogXCJtb2JpbGUtY2Fyb3VzZWxfYWJvdXQtcXVvdGVfXzJFWHBvXCIsXG5cdFwiYXJyb3dcIjogXCJtb2JpbGUtY2Fyb3VzZWxfYXJyb3dfXzFRdEU0XCIsXG5cdFwiYmFja1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9iYWNrX18zN2J1U1wiLFxuXHRcIm5leHRcIjogXCJtb2JpbGUtY2Fyb3VzZWxfbmV4dF9fMzFHZkpcIixcblx0XCJzbGlkZXItd3JhcHBlclwiOiBcIm1vYmlsZS1jYXJvdXNlbF9zbGlkZXItd3JhcHBlcl9fMjRTWWpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJzZWN0aW9uTGF5b3V0X3dyYXBwZXJfXzI1LVVlXCIsXG5cdFwiZ3JheV9iYWNrZ3JvdW5kXCI6IFwic2VjdGlvbkxheW91dF9ncmF5X2JhY2tncm91bmRfXzNMMDh2XCIsXG5cdFwiY29udGVudF9jb250YWluZXJcIjogXCJzZWN0aW9uTGF5b3V0X2NvbnRlbnRfY29udGFpbmVyX18zZlVydVwiLFxuXHRcImNvbnRlbnRcIjogXCJzZWN0aW9uTGF5b3V0X2NvbnRlbnRfXzNXUlNaXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjb250YWNzX2NvbnRhaW5lcl9fTzBvRWRcIixcblx0XCJpdGVtXCI6IFwiY29udGFjc19pdGVtX18xYXZYYVwiLFxuXHRcImxpbmtcIjogXCJjb250YWNzX2xpbmtfXzFDdUEwXCIsXG5cdFwiY29udGFjdC1ibGFjay1ib3JkZXJcIjogXCJjb250YWNzX2NvbnRhY3QtYmxhY2stYm9yZGVyX18yelRiSVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICAnLi9jb250YWNzLm1vZHVsZS5zY3NzJztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBTZWN0aW9uTGF5b3V0IGZyb20gJy4uL2NvbW1vbi9TZWN0aW9uTGF5b3V0JztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWN0aW9uTGF5b3V0IHNlY3Rpb25UaXRsZT17J0NPTlRBQ1QnfSBzZWN0aW9uSWQ9eydDT05UQUNUJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycnfT48cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtfSAke3N0eWxlcy5saW5rfWB9Pmpjb25yYWRhcmNAZ21haWwuY29tPC9wPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycnfT48cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtfSAke3N0eWxlcy5saW5rfWB9Pig5NDkpIDIzMy04NjI1PC9wPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PjE1NTAgUy4gQ29hc3QgSHd5LiAjMjAxPGJyLz4gTGFndW5hIEJlYWNoLCBDQSA5MjY1MTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWN0aW9uTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCJjb25zdCBNRU5VX0xJTktTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnSE9NRScsXHJcbiAgICAgICAgbGlua1RvOiAnI0hPTUUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnUFJPSkVDVFMnLFxyXG4gICAgICAgIGxpbmtUbzogJyNQUk9KRUNUUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdBQk9VVCcsXHJcbiAgICAgICAgbGlua1RvOiAnI0FCT1VUJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NPTlRBQ1QnLFxyXG4gICAgICAgIGxpbmtUbzogJyNDT05UQUNUJ1xyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBNRU5VX0xJTktTLFxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiaGVhZGVyX2NvbnRhaW5lcl9fM1ZCVkJcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fX2VpTFNxXCIsXG5cdFwibmF2XCI6IFwiaGVhZGVyX25hdl9fM2h4SDVcIixcblx0XCJiaWctc2NyZWVuLW1lbnVcIjogXCJoZWFkZXJfYmlnLXNjcmVlbi1tZW51X18ySUNrdlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTUVOVV9MSU5LUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuLy9jc3NcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbi8vaW1hZ2VzXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ppbS1jb25yYWQtbG9nby1saWdodC5wbmcnO1xyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2JpbGUtbWVudSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgcm9sZT17J25hdmlnYXRpb24nfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvJ30gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPXtMb2dvfSAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPXsnYmlnLXNjcmVlbi1tZW51J30gY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1FTlVfTElOS1MubWFwKChsaW5rLGluZGV4KSA9PiA8YSBrZXk9e2luZGV4fSBocmVmPXtsaW5rLmxpbmtUb30+PGxpPntsaW5rLmxhYmVsfTwvbGk+PC9hPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZU1lbnUgbWVudUl0ZW1zPXtNRU5VX0xJTktTfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlXHJcbmltcG9ydCAgc3R5bGVzIGZyb20gJy4vbW9iaWxlTWVudS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBNb2JpbGVNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8dWwgaWQ9eydtZW51J30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1zLm1hcCgobGluayxpbmRleCkgPT4gPGEga2V5PXtpbmRleH0gaHJlZj17bGluay5saW5rVG99PjxsaT57bGluay5sYWJlbH08L2xpPjwvYT4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbnVUb2dnbGVcIjogXCJtb2JpbGVNZW51X21lbnVUb2dnbGVfXzJvcEo2XCIsXG5cdFwibWVudVwiOiBcIm1vYmlsZU1lbnVfbWVudV9fM0UwYTZcIlxufTtcbiIsImV4cG9ydCBjb25zdCBQUk9KRUNUU19EQVRBID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjoxNDMsXHJcbiAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTEzVDAwOjA0OjM5XCIsXHJcbiAgICAgICAgXCJkYXRlX2dtdFwiOlwiMjAyMS0wOC0xM1QwMDowNDozOVwiLFxyXG4gICAgICAgIFwiZ3VpZFwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcLz9wb3N0X3R5cGU9cHJvamVjdHMmIzAzODtwPTE0M1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTE0VDIyOjMwOjA4XCIsXHJcbiAgICAgICAgXCJtb2RpZmllZF9nbXRcIjpcIjIwMjEtMDgtMTRUMjI6MzA6MDhcIixcclxuICAgICAgICBcInNsdWdcIjpcIjk4LWRlc2VydC1tb3VudGFpblwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6XCJwcm9qZWN0c1wiLFxyXG4gICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvOTgtZGVzZXJ0LW1vdW50YWluXFwvXCIsXHJcbiAgICAgICAgXCJ0aXRsZVwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiOTggRGVzZXJ0IE1vdW50YWluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGVtcGxhdGVcIjpcIlwiLFxyXG4gICAgICAgIFwiYWNmXCI6e1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIjk4IERlc2VydCBNb3VudGFpblwiLFxyXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6XCJTY290dHNkYWxlLCBBWlwiLFxyXG4gICAgICAgICAgICBcInNpemVcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMDhcIixcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInNlcnZpY2VzXCI6XCIgQXJjaGl0ZWN0dXJlIGFuZCBpbnRlcmlvciBkZXNpZ25cIixcclxuICAgICAgICAgICAgXCJtYWluX2ltYWdlXCI6e1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOjE1LFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOjE1LFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiaG9yLWFydGJvYXJkXzNcIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjpcImhvci1hcnRib2FyZF8zLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlc2l6ZVwiOjE1ODE4MDcsXHJcbiAgICAgICAgICAgICAgICBcInVybFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvaG9yLWFydGJvYXJkXzMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcL3Rlc3QtcHJveWVjdC0xXFwvaG9yLWFydGJvYXJkXzNcXC9cIixcclxuICAgICAgICAgICAgICAgIFwiYWx0XCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6XCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcImhvci1hcnRib2FyZF8zXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOlwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1cGxvYWRlZF90b1wiOjE0LFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6XCIyMDIwLTExLTE5IDAzOjM4OjA1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIwLTExLTE5IDAzOjM4OjA1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1lbnVfb3JkZXJcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvcG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjpcImltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnR5cGVcIjpcInBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtaW5jbHVkZXNcXC9pbWFnZXNcXC9tZWRpYVxcL2RlZmF1bHQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6MTE1MCxcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvaG9yLWFydGJvYXJkXzMtMTUweDE1MC5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC13aWR0aFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC1oZWlnaHRcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL2hvci1hcnRib2FyZF8zLTMwMHgyMDAucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0td2lkdGhcIjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0taGVpZ2h0XCI6MjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy03Njh4NTEzLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLWhlaWdodFwiOjUxMyxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy0xMDI0eDY4NC5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLXdpZHRoXCI6MTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLWhlaWdodFwiOjY4NCxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvaG9yLWFydGJvYXJkXzMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtd2lkdGhcIjoxMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LWhlaWdodFwiOjc2OCxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvaG9yLWFydGJvYXJkXzMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtd2lkdGhcIjoxMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LWhlaWdodFwiOjc2OCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvaG9yLWFydGJvYXJkXzMtODMweDU1NC5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi13aWR0aFwiOjgzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi1oZWlnaHRcIjo1NTQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy01NTB4NDAwLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi13aWR0aFwiOjU1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItaGVpZ2h0XCI6NDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy0yMzB4MTU0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLXdpZHRoXCI6MjMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLWhlaWdodFwiOjE1NCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy0zNTB4MjM0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItd2lkdGhcIjozNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi1oZWlnaHRcIjoyMzQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy00ODB4MzIxLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi13aWR0aFwiOjQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItaGVpZ2h0XCI6MzIxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaG9tZV9wYWdlX29yZGVyXCI6XCI4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2FsbGVyeV9pbWFnZXNcIjpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvOTgtZ3JlYXQtcm9vbS1uaWdodC1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvOTgtRW50cnktY291cnQtbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzE0M0s1OTE2LW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xNDNLNTk1OC1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTQzSzY2MDktbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzE0M0s2NjE2LW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9ncmVhdC1yb29tLW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xNDNLNTkwOS1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkzNjgtbWluLmpwZ1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIl9saW5rc1wiOntcclxuICAgICAgICAgICAgXCJzZWxmXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcXC8xNDNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC90eXBlc1xcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3cDphdHRhY2htZW50XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvbWVkaWE/cGFyZW50PTE0M1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY3VyaWVzXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOlwid3BcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL2FwaS53Lm9yZ1xcL3tyZWx9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZWRcIjp0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjo0NSxcclxuICAgICAgICBcImRhdGVcIjpcIjIwMjEtMDgtMDJUMjE6MzQ6NDhcIixcclxuICAgICAgICBcImRhdGVfZ210XCI6XCIyMDIxLTA4LTAyVDIxOjM0OjQ4XCIsXHJcbiAgICAgICAgXCJndWlkXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvP3Bvc3RfdHlwZT1wcm9qZWN0cyYjMDM4O3A9NDVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0xNFQwMDo0NzozNFwiLFxyXG4gICAgICAgIFwibW9kaWZpZWRfZ210XCI6XCIyMDIxLTA4LTE0VDAwOjQ3OjM0XCIsXHJcbiAgICAgICAgXCJzbHVnXCI6XCIyNTcwLXBhcmtcIixcclxuICAgICAgICBcInN0YXR1c1wiOlwicHVibGlzaFwiLFxyXG4gICAgICAgIFwidHlwZVwiOlwicHJvamVjdHNcIixcclxuICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcLzI1NzAtcGFya1xcL1wiLFxyXG4gICAgICAgIFwidGl0bGVcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcIjI1NzAgUGFya1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRlbXBsYXRlXCI6XCJcIixcclxuICAgICAgICBcImFjZlwiOntcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCIyNTcwIFBhcmtcIixcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOlwiIExhZ3VuYSBCZWFjaCwgQ0FcIixcclxuICAgICAgICAgICAgXCJzaXplXCI6XCJcIixcclxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCIsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6XCJcIixcclxuICAgICAgICAgICAgXCJzZXJ2aWNlc1wiOlwiQXJjaGl0ZWN0dXJlXCIsXHJcbiAgICAgICAgICAgIFwibWFpbl9pbWFnZVwiOntcclxuICAgICAgICAgICAgICAgIFwiSURcIjo1OCxcclxuICAgICAgICAgICAgICAgIFwiaWRcIjo1OCxcclxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIjI1NzBwYXJrLW1haW5cIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjpcIjI1NzBwYXJrLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVzaXplXCI6MTY4Mzc4OCxcclxuICAgICAgICAgICAgICAgIFwidXJsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC8yNTcwLXBhcmtcXC8yNTcwcGFyay1tYWluXFwvXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsdFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGhvclwiOlwiM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6XCIyNTcwcGFyay1tYWluXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOlwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1cGxvYWRlZF90b1wiOjQ1LFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTA0IDE2OjU4OjMzXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTA0IDE2OjU4OjMzXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1lbnVfb3JkZXJcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0eXBlXCI6XCJqcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1pbmNsdWRlc1xcL2ltYWdlc1xcL21lZGlhXFwvZGVmYXVsdC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bS13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0taGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2UtaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2Utd2lkdGhcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2UtaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1NzBwYXJrLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItd2lkdGhcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItaGVpZ2h0XCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1NzBwYXJrLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItaGVpZ2h0XCI6MVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhvbWVfcGFnZV9vcmRlclwiOlwiMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdhbGxlcnlfaW1hZ2VzXCI6W1xyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1Ny1wYXJrLTIuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3LXBhcmstMS5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTctcGFyay04LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1Ny1wYXJrLTcuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3LXBhcmstNi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTctcGFyay01LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1Ny1wYXJrLTQuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3LXBhcmstMy5qcGdcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJfbGlua3NcIjp7XHJcbiAgICAgICAgICAgIFwic2VsZlwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXFwvNDVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC90eXBlc1xcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3cDphdHRhY2htZW50XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvbWVkaWE/cGFyZW50PTQ1XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjdXJpZXNcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJ3cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvYXBpLncub3JnXFwve3JlbH1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlZFwiOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOjQ0LFxyXG4gICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0wMlQyMTozNDoxMVwiLFxyXG4gICAgICAgIFwiZGF0ZV9nbXRcIjpcIjIwMjEtMDgtMDJUMjE6MzQ6MTFcIixcclxuICAgICAgICBcImd1aWRcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC8/cG9zdF90eXBlPXByb2plY3RzJiMwMzg7cD00NFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTE0VDIyOjE0OjEyXCIsXHJcbiAgICAgICAgXCJtb2RpZmllZF9nbXRcIjpcIjIwMjEtMDgtMTRUMjI6MTQ6MTJcIixcclxuICAgICAgICBcInNsdWdcIjpcIjEwOTEtc2t5bGluZS1kclwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6XCJwcm9qZWN0c1wiLFxyXG4gICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvMTA5MS1za3lsaW5lLWRyXFwvXCIsXHJcbiAgICAgICAgXCJ0aXRsZVwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiMTA5MSBTa3lsaW5lIERyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGVtcGxhdGVcIjpcIlwiLFxyXG4gICAgICAgIFwiYWNmXCI6e1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIjEwOTEgU2t5bGluZSBEclwiLFxyXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6XCJMYWd1bmEgQmVhY2gsIENBXCIsXHJcbiAgICAgICAgICAgIFwic2l6ZVwiOlwiXCIsXHJcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAxNFwiLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOlwiXCIsXHJcbiAgICAgICAgICAgIFwic2VydmljZXNcIjpcIkFyY2hpdGVjdHVyZSBhbmQgaW50ZXJpb3IgZGVzaWduXCIsXHJcbiAgICAgICAgICAgIFwibWFpbl9pbWFnZVwiOntcclxuICAgICAgICAgICAgICAgIFwiSURcIjoxMDAsXHJcbiAgICAgICAgICAgICAgICBcImlkXCI6MTAwLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiMTA5MXNreWxpbmUtbWFpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOlwiMTA5MXNreWxpbmUtbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZXNpemVcIjoyNjIxMDUsXHJcbiAgICAgICAgICAgICAgICBcInVybFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvMTA5MS1za3lsaW5lLWRyXFwvMTA5MXNreWxpbmUtbWFpblxcL1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhbHRcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRob3JcIjpcIjNcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOlwiMTA5MXNreWxpbmUtbWFpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjpcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwidXBsb2FkZWRfdG9cIjo0NCxcclxuICAgICAgICAgICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0wNiAxNjowODoxNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0wNiAxNjowODoxNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtZW51X29yZGVyXCI6MCxcclxuICAgICAgICAgICAgICAgIFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOlwiaW1hZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3VidHlwZVwiOlwianBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtaW5jbHVkZXNcXC9pbWFnZXNcXC9tZWRpYVxcL2RlZmF1bHQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6MTIwMCxcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6ODAwLFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi0xNTB4MTUwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLXdpZHRoXCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLWhlaWdodFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi0zMDB4MjAwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLXdpZHRoXCI6MzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLWhlaWdodFwiOjIwMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi03Njh4NTEyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLWhlaWdodFwiOjUxMixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLTEwMjR4NjgzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2Utd2lkdGhcIjoxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2UtaGVpZ2h0XCI6NjgzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LXdpZHRoXCI6MTIwMCxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi1oZWlnaHRcIjo4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDhcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtd2lkdGhcIjoxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LWhlaWdodFwiOjgwMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi04MzB4NTUzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLXdpZHRoXCI6ODMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLWhlaWdodFwiOjU1MyxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLW1haW4tNTUweDQwMC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItd2lkdGhcIjo1NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLWhlaWdodFwiOjQwMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi0yMzB4MTUzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLXdpZHRoXCI6MjMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLWhlaWdodFwiOjE1MyxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLTM1MHgyMzMuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi13aWR0aFwiOjM1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLWhlaWdodFwiOjIzMyxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLW1haW4tNDgweDMyMC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItd2lkdGhcIjo0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLWhlaWdodFwiOjMyMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhvbWVfcGFnZV9vcmRlclwiOlwiMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdhbGxlcnlfaW1hZ2VzXCI6W1xyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLTEuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtMi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS0zLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLTQuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtNS5qcGdcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJfbGlua3NcIjp7XHJcbiAgICAgICAgICAgIFwic2VsZlwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXFwvNDRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC90eXBlc1xcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3cDphdHRhY2htZW50XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvbWVkaWE/cGFyZW50PTQ0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjdXJpZXNcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJ3cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvYXBpLncub3JnXFwve3JlbH1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlZFwiOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOjQzLFxyXG4gICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0wMlQyMTozMzoxNFwiLFxyXG4gICAgICAgIFwiZGF0ZV9nbXRcIjpcIjIwMjEtMDgtMDJUMjE6MzM6MTRcIixcclxuICAgICAgICBcImd1aWRcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC8/cG9zdF90eXBlPXByb2plY3RzJiMwMzg7cD00M1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTE0VDIyOjE0OjQ4XCIsXHJcbiAgICAgICAgXCJtb2RpZmllZF9nbXRcIjpcIjIwMjEtMDgtMTRUMjI6MTQ6NDhcIixcclxuICAgICAgICBcInNsdWdcIjpcIjc0MC1iYXJyYWN1ZGFcIixcclxuICAgICAgICBcInN0YXR1c1wiOlwicHVibGlzaFwiLFxyXG4gICAgICAgIFwidHlwZVwiOlwicHJvamVjdHNcIixcclxuICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcLzc0MC1iYXJyYWN1ZGFcXC9cIixcclxuICAgICAgICBcInRpdGxlXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCI3NDAgQmFycmFjdWRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGVtcGxhdGVcIjpcIlwiLFxyXG4gICAgICAgIFwiYWNmXCI6e1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIjc0MCBCYXJyYWN1ZGFcIixcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOlwiTGFndW5hIEJlYWNoLCBDQVwiLFxyXG4gICAgICAgICAgICBcInNpemVcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMTNcIixcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInNlcnZpY2VzXCI6XCJBcmNoaXRlY3R1cmVcIixcclxuICAgICAgICAgICAgXCJtYWluX2ltYWdlXCI6e1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOjEyNCxcclxuICAgICAgICAgICAgICAgIFwiaWRcIjoxMjQsXHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJMb3BleiBSZXNpZGVuY2UtOTExOCAoMSktbWluXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6XCJMb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVzaXplXCI6MjQ4MTg1LFxyXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvNzQwLWJhcnJhY3VkYVxcL2xvcGV6LXJlc2lkZW5jZS05MTE4LTEtbWluXFwvXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsdFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGhvclwiOlwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJsb3Blei1yZXNpZGVuY2UtOTExOC0xLW1pblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjpcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwidXBsb2FkZWRfdG9cIjo0MyxcclxuICAgICAgICAgICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0xMiAxMTo0OToyMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0xMiAxMTo1ODo0MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtZW51X29yZGVyXCI6MCxcclxuICAgICAgICAgICAgICAgIFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOlwiaW1hZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3VidHlwZVwiOlwianBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtaW5jbHVkZXNcXC9pbWFnZXNcXC9tZWRpYVxcL2RlZmF1bHQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6MjU2MCxcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6MTcwNyxcclxuICAgICAgICAgICAgICAgIFwic2l6ZXNcIjp7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLTE1MHgxNTAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtd2lkdGhcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtaGVpZ2h0XCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi0zMDB4MjAwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLXdpZHRoXCI6MzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLWhlaWdodFwiOjIwMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tNzY4eDUxMi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS13aWR0aFwiOjc2OCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS1oZWlnaHRcIjo1MTIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tMTAyNHg2ODMuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS13aWR0aFwiOjEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS1oZWlnaHRcIjo2ODMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLTE1MzZ4MTAyNC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi13aWR0aFwiOjE1MzYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtaGVpZ2h0XCI6MTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LXdpZHRoXCI6MjA0OCxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC1oZWlnaHRcIjoxMzY2LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItd2lkdGhcIjo4MzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItaGVpZ2h0XCI6NTUzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi13aWR0aFwiOjU1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItaGVpZ2h0XCI6MzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItd2lkdGhcIjoyMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItaGVpZ2h0XCI6MTUzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLXdpZHRoXCI6MzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItaGVpZ2h0XCI6MjMzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi13aWR0aFwiOjQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItaGVpZ2h0XCI6MzIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaG9tZV9wYWdlX29yZGVyXCI6XCI3XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2FsbGVyeV9pbWFnZXNcIjpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMjYtbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTM0LW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTEzNS1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxNTAtbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MzY4LW1pbi5qcGdcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJfbGlua3NcIjp7XHJcbiAgICAgICAgICAgIFwic2VsZlwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXFwvNDNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC90eXBlc1xcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3cDphdHRhY2htZW50XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvbWVkaWE/cGFyZW50PTQzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjdXJpZXNcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJ3cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvYXBpLncub3JnXFwve3JlbH1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlZFwiOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOjQyLFxyXG4gICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0wMlQyMTozMjozMlwiLFxyXG4gICAgICAgIFwiZGF0ZV9nbXRcIjpcIjIwMjEtMDgtMDJUMjE6MzI6MzJcIixcclxuICAgICAgICBcImd1aWRcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC8/cG9zdF90eXBlPXByb2plY3RzJiMwMzg7cD00MlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTE0VDIyOjE1OjAzXCIsXHJcbiAgICAgICAgXCJtb2RpZmllZF9nbXRcIjpcIjIwMjEtMDgtMTRUMjI6MTU6MDNcIixcclxuICAgICAgICBcInNsdWdcIjpcIjcyMS1tYW56YW5pdGFcIixcclxuICAgICAgICBcInN0YXR1c1wiOlwicHVibGlzaFwiLFxyXG4gICAgICAgIFwidHlwZVwiOlwicHJvamVjdHNcIixcclxuICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcLzcyMS1tYW56YW5pdGFcXC9cIixcclxuICAgICAgICBcInRpdGxlXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCI3MjEgTWFuemFuaXRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGVtcGxhdGVcIjpcIlwiLFxyXG4gICAgICAgIFwiYWNmXCI6e1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIjcyMSBNYW56YW5pdGFcIixcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOlwiTGFndW5hIEJlYWNoLCBDQVwiLFxyXG4gICAgICAgICAgICBcInNpemVcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMTZcIixcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInNlcnZpY2VzXCI6XCJBcmNoaXRlY3R1cmUgYW5kIEludGVyaW9yIERlc2lnblwiLFxyXG4gICAgICAgICAgICBcIm1haW5faW1hZ2VcIjp7XHJcbiAgICAgICAgICAgICAgICBcIklEXCI6ODYsXHJcbiAgICAgICAgICAgICAgICBcImlkXCI6ODYsXHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCI3MjFtYW56YW5pdGEtbWFpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOlwiNzIxbWFuemFuaXRhLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVzaXplXCI6MTE1NjcxLFxyXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC83MjEtbWFuemFuaXRhXFwvNzIxbWFuemFuaXRhLW1haW5cXC9cIixcclxuICAgICAgICAgICAgICAgIFwiYWx0XCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6XCIzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIjcyMW1hbnphbml0YS1tYWluXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOlwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1cGxvYWRlZF90b1wiOjQyLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTA2IDE1OjU3OjA4XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTA2IDE1OjU3OjA4XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1lbnVfb3JkZXJcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0eXBlXCI6XCJqcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1pbmNsdWRlc1xcL2ltYWdlc1xcL21lZGlhXFwvZGVmYXVsdC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjo5NDUsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOjYyNSxcclxuICAgICAgICAgICAgICAgIFwic2l6ZXNcIjp7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS1tYWluLTE1MHgxNTAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtd2lkdGhcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtaGVpZ2h0XCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi0zMDB4MTk4LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLXdpZHRoXCI6MzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLWhlaWdodFwiOjE5OCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4tNzY4eDUwOC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS13aWR0aFwiOjc2OCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS1oZWlnaHRcIjo1MDgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS13aWR0aFwiOjk0NSxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLWhlaWdodFwiOjYyNSxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtd2lkdGhcIjo5NDUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtaGVpZ2h0XCI6NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC13aWR0aFwiOjk0NSxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC1oZWlnaHRcIjo2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS1tYWluLTgzMHg1NDkuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItd2lkdGhcIjo4MzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItaGVpZ2h0XCI6NTQ5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4tNTUweDQwMC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItd2lkdGhcIjo1NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLWhlaWdodFwiOjQwMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4tMjMweDE1Mi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi13aWR0aFwiOjIzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi1oZWlnaHRcIjoxNTIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4tMzUweDIzMS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLXdpZHRoXCI6MzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItaGVpZ2h0XCI6MjMxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4tNDgweDMxNy5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItd2lkdGhcIjo0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLWhlaWdodFwiOjMxN1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhvbWVfcGFnZV9vcmRlclwiOlwiM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdhbGxlcnlfaW1hZ2VzXCI6W1xyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS0yLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS0zLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS00LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS01LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS02LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS03LmpwZ1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIl9saW5rc1wiOntcclxuICAgICAgICAgICAgXCJzZWxmXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcXC80MlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJhYm91dFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3R5cGVzXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndwOmF0dGFjaG1lbnRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9tZWRpYT9wYXJlbnQ9NDJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImN1cmllc1wiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIndwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC9hcGkudy5vcmdcXC97cmVsfVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVkXCI6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6MjgsXHJcbiAgICAgICAgXCJkYXRlXCI6XCIyMDIwLTEyLTA4VDIzOjA1OjEwXCIsXHJcbiAgICAgICAgXCJkYXRlX2dtdFwiOlwiMjAyMC0xMi0wOFQyMzowNToxMFwiLFxyXG4gICAgICAgIFwiZ3VpZFwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcLz9wb3N0X3R5cGU9cHJvamVjdHMmIzAzODtwPTI4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMTRUMjI6MTU6MjRcIixcclxuICAgICAgICBcIm1vZGlmaWVkX2dtdFwiOlwiMjAyMS0wOC0xNFQyMjoxNToyNFwiLFxyXG4gICAgICAgIFwic2x1Z1wiOlwidGVzdC0zXCIsXHJcbiAgICAgICAgXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcclxuICAgICAgICBcInR5cGVcIjpcInByb2plY3RzXCIsXHJcbiAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC90ZXN0LTNcXC9cIixcclxuICAgICAgICBcInRpdGxlXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCI0MDUgRGFydG1vb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiOlwiXCIsXHJcbiAgICAgICAgXCJhY2ZcIjp7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiNDA1IERhcnRtb29yXCIsXHJcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjpcIkxhZ3VuYSBCZWFjaCwgQ0FcIixcclxuICAgICAgICAgICAgXCJzaXplXCI6XCJcIixcclxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDE3XCIsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6XCJcIixcclxuICAgICAgICAgICAgXCJzZXJ2aWNlc1wiOlwiQXJjaGl0ZWN0dXJlXCIsXHJcbiAgICAgICAgICAgIFwibWFpbl9pbWFnZVwiOntcclxuICAgICAgICAgICAgICAgIFwiSURcIjo3OCxcclxuICAgICAgICAgICAgICAgIFwiaWRcIjo3OCxcclxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIjQwNWRhcnRtb29yLW1haW5cIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjpcIjQwNWRhcnRtb29yLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVzaXplXCI6MzQwNzkzLFxyXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcL3Rlc3QtM1xcLzQwNWRhcnRtb29yLW1haW5cXC9cIixcclxuICAgICAgICAgICAgICAgIFwiYWx0XCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6XCIzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIjQwNWRhcnRtb29yLW1haW5cIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6XCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcInVwbG9hZGVkX3RvXCI6MjgsXHJcbiAgICAgICAgICAgICAgICBcImRhdGVcIjpcIjIwMjEtMDgtMDYgMTU6NDg6NTlcIixcclxuICAgICAgICAgICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMDYgMTU6NDg6NTlcIixcclxuICAgICAgICAgICAgICAgIFwibWVudV9vcmRlclwiOjAsXHJcbiAgICAgICAgICAgICAgICBcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9qcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjpcImltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnR5cGVcIjpcImpwZWdcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWluY2x1ZGVzXFwvaW1hZ2VzXFwvbWVkaWFcXC9kZWZhdWx0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOjEwNjIsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOjk2MCxcclxuICAgICAgICAgICAgICAgIFwic2l6ZXNcIjp7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4tMTUweDE1MC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC13aWR0aFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC1oZWlnaHRcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4tMzAweDI3MS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bS13aWR0aFwiOjMwMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bS1oZWlnaHRcIjoyNzEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2VcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4tNzY4eDY5NC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS13aWR0aFwiOjc2OCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS1oZWlnaHRcIjo2OTQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi0xMDI0eDkyNi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLXdpZHRoXCI6MTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLWhlaWdodFwiOjkyNixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi13aWR0aFwiOjEwNjIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtaGVpZ2h0XCI6OTYwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LXdpZHRoXCI6MTA2MixcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC1oZWlnaHRcIjo5NjAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4tODMweDc1MC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi13aWR0aFwiOjgzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi1oZWlnaHRcIjo3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci1tYWluLTU1MHg0MDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLXdpZHRoXCI6NTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi1oZWlnaHRcIjo0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4tMjMweDIwOC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi13aWR0aFwiOjIzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi1oZWlnaHRcIjoyMDgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi0zNTB4MzE2LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItd2lkdGhcIjozNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi1oZWlnaHRcIjozMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci1tYWluLTQ4MHg0MzQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLXdpZHRoXCI6NDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi1oZWlnaHRcIjo0MzRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJob21lX3BhZ2Vfb3JkZXJcIjpcIjRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnYWxsZXJ5X2ltYWdlc1wiOltcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLTIuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItMy5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci00LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLTQuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItNS5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci02LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLTcuanBnXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiX2xpbmtzXCI6e1xyXG4gICAgICAgICAgICBcInNlbGZcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1xcLzI4XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvdHlwZXNcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid3A6YXR0YWNobWVudFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL21lZGlhP3BhcmVudD0yOFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY3VyaWVzXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOlwid3BcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL2FwaS53Lm9yZ1xcL3tyZWx9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZWRcIjp0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjoxOSxcclxuICAgICAgICBcImRhdGVcIjpcIjIwMjAtMTEtMjNUMjA6MDc6MDFcIixcclxuICAgICAgICBcImRhdGVfZ210XCI6XCIyMDIwLTExLTIzVDIwOjA3OjAxXCIsXHJcbiAgICAgICAgXCJndWlkXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvP3Bvc3RfdHlwZT1wcm9qZWN0cyYjMDM4O3A9MTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0xNFQyMjoxNTozOVwiLFxyXG4gICAgICAgIFwibW9kaWZpZWRfZ210XCI6XCIyMDIxLTA4LTE0VDIyOjE1OjM5XCIsXHJcbiAgICAgICAgXCJzbHVnXCI6XCJ0ZXN0LXByb2plY3QtMlwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6XCJwcm9qZWN0c1wiLFxyXG4gICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvdGVzdC1wcm9qZWN0LTJcXC9cIixcclxuICAgICAgICBcInRpdGxlXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCIzOTUgRGFydG1vb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiOlwiXCIsXHJcbiAgICAgICAgXCJhY2ZcIjp7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiMzk1IERhcnRtb29yXCIsXHJcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjpcIkxhZ3VuYSBCZWFjaCwgQ0FcIixcclxuICAgICAgICAgICAgXCJzaXplXCI6XCJcIixcclxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDE1XCIsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6XCJcIixcclxuICAgICAgICAgICAgXCJzZXJ2aWNlc1wiOlwiQXJjaGl0ZWN0dXJlXCIsXHJcbiAgICAgICAgICAgIFwibWFpbl9pbWFnZVwiOntcclxuICAgICAgICAgICAgICAgIFwiSURcIjo3MixcclxuICAgICAgICAgICAgICAgIFwiaWRcIjo3MixcclxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIjM5NWRhcnRtb29yLW1haW5cIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjpcIjM5NWRhcnRtb29yLW1haW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlc2l6ZVwiOjQzNjk2OSxcclxuICAgICAgICAgICAgICAgIFwidXJsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvdGVzdC1wcm9qZWN0LTJcXC8zOTVkYXJ0bW9vci1tYWluXFwvXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsdFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGhvclwiOlwiM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6XCIzOTVkYXJ0bW9vci1tYWluXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOlwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1cGxvYWRlZF90b1wiOjE5LFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTA2IDE1OjQyOjM4XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTA2IDE1OjQyOjM4XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1lbnVfb3JkZXJcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0eXBlXCI6XCJqcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1pbmNsdWRlc1xcL2ltYWdlc1xcL21lZGlhXFwvZGVmYXVsdC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjoyNTYwLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjoxOTIwLFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi0xNTB4MTUwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLXdpZHRoXCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLWhlaWdodFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi0zMDB4MjI1LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLXdpZHRoXCI6MzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLWhlaWdodFwiOjIyNSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi03Njh4NTc2LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLWhlaWdodFwiOjU3NixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLTEwMjR4NzY4LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2Utd2lkdGhcIjoxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2UtaGVpZ2h0XCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLTE1MzZ4MTE1Mi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi13aWR0aFwiOjE1MzYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtaGVpZ2h0XCI6MTE1MixcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtd2lkdGhcIjoyMDQ4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LWhlaWdodFwiOjE1MzYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLW1haW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLXdpZHRoXCI6ODMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLWhlaWdodFwiOjYyMyxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLW1haW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi13aWR0aFwiOjUzMyxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItaGVpZ2h0XCI6NDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi13aWR0aFwiOjIzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi1oZWlnaHRcIjoxNzMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi13aWR0aFwiOjM1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLWhlaWdodFwiOjI2MyxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLW1haW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi13aWR0aFwiOjQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItaGVpZ2h0XCI6MzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaG9tZV9wYWdlX29yZGVyXCI6XCI1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2FsbGVyeV9pbWFnZXNcIjpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItMS5wbmdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci0yLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLTMucG5nXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItNC1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItNS1zY2FsZWQuanBnXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiX2xpbmtzXCI6e1xyXG4gICAgICAgICAgICBcInNlbGZcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1xcLzE5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvdHlwZXNcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid3A6YXR0YWNobWVudFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL21lZGlhP3BhcmVudD0xOVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY3VyaWVzXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOlwid3BcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL2FwaS53Lm9yZ1xcL3tyZWx9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZWRcIjp0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjoxNCxcclxuICAgICAgICBcImRhdGVcIjpcIjIwMjAtMTEtMTlUMDM6Mzk6MThcIixcclxuICAgICAgICBcImRhdGVfZ210XCI6XCIyMDIwLTExLTE5VDAzOjM5OjE4XCIsXHJcbiAgICAgICAgXCJndWlkXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvP3Bvc3RfdHlwZT1wcm9qZWN0cyYjMDM4O3A9MTRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0xNFQyMjoxNTo1NFwiLFxyXG4gICAgICAgIFwibW9kaWZpZWRfZ210XCI6XCIyMDIxLTA4LTE0VDIyOjE1OjU0XCIsXHJcbiAgICAgICAgXCJzbHVnXCI6XCJ0ZXN0LXByb3llY3QtMVwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6XCJwcm9qZWN0c1wiLFxyXG4gICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvdGVzdC1wcm95ZWN0LTFcXC9cIixcclxuICAgICAgICBcInRpdGxlXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCIxOTUgTW9uYXJjaCBCYXlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiOlwiXCIsXHJcbiAgICAgICAgXCJhY2ZcIjp7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiMTk1IE1vbmFyY2ggQmF5XCIsXHJcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjpcIk1vbmFyY2ggQmVhY2gsIENBXCIsXHJcbiAgICAgICAgICAgIFwic2l6ZVwiOlwiXCIsXHJcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAxOVwiLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOlwiXCIsXHJcbiAgICAgICAgICAgIFwic2VydmljZXNcIjpcIkFyY2hpdGVjdHVyZVwiLFxyXG4gICAgICAgICAgICBcIm1haW5faW1hZ2VcIjp7XHJcbiAgICAgICAgICAgICAgICBcIklEXCI6NDYsXHJcbiAgICAgICAgICAgICAgICBcImlkXCI6NDYsXHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJEU0MwODM4NV8xLW1pblwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOlwiRFNDMDgzODVfMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlc2l6ZVwiOjEzMjM1MjEsXHJcbiAgICAgICAgICAgICAgICBcInVybFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC90ZXN0LXByb3llY3QtMVxcL2RzYzA4Mzg1XzEtbWluXFwvXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsdFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGhvclwiOlwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJkc2MwODM4NV8xLW1pblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjpcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwidXBsb2FkZWRfdG9cIjoxNCxcclxuICAgICAgICAgICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0wMiAyMTo0MzowNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0wMiAyMTo0MzowNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtZW51X29yZGVyXCI6MCxcclxuICAgICAgICAgICAgICAgIFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOlwiaW1hZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3VidHlwZVwiOlwianBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtaW5jbHVkZXNcXC9pbWFnZXNcXC9tZWRpYVxcL2RlZmF1bHQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6MjU2MCxcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6MTcwOSxcclxuICAgICAgICAgICAgICAgIFwic2l6ZXNcIjp7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL0RTQzA4Mzg1XzEtbWluLTE1MHgxNTAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtd2lkdGhcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtaGVpZ2h0XCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi0zMDB4MjAwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLXdpZHRoXCI6MzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLWhlaWdodFwiOjIwMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tNzY4eDUxMy5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS13aWR0aFwiOjc2OCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS1oZWlnaHRcIjo1MTMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tMTAyNHg2ODMuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS13aWR0aFwiOjEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS1oZWlnaHRcIjo2ODMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL0RTQzA4Mzg1XzEtbWluLTE1MzZ4MTAyNS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi13aWR0aFwiOjE1MzYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtaGVpZ2h0XCI6MTAyNSxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LXdpZHRoXCI6MjA0OCxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC1oZWlnaHRcIjoxMzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItd2lkdGhcIjo4MzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItaGVpZ2h0XCI6NTU0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi13aWR0aFwiOjU1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItaGVpZ2h0XCI6MzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItd2lkdGhcIjoyMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItaGVpZ2h0XCI6MTU0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL0RTQzA4Mzg1XzEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLXdpZHRoXCI6MzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItaGVpZ2h0XCI6MjM0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi13aWR0aFwiOjQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItaGVpZ2h0XCI6MzIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaG9tZV9wYWdlX29yZGVyXCI6XCI2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2FsbGVyeV9pbWFnZXNcIjpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvTW9uYXJjaDEwLXNjYWxlZC5qcGVnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvTW9uYXJjaDktc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoOC1zY2FsZWQuanBlZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL01vbmFyY2gyLXNjYWxlZC5qcGVnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvTW9uYXJjaDQtc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoNS1zY2FsZWQuanBlZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL01vbmFyY2g2LXNjYWxlZC5qcGVnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvTW9uYXJjaDctc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoMi1taW4tc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoMTEtc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8xOTVtb25hcmNoYmF5LTEyLXNjYWxlZC5qcGdcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJfbGlua3NcIjp7XHJcbiAgICAgICAgICAgIFwic2VsZlwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXFwvMTRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC90eXBlc1xcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3cDphdHRhY2htZW50XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvbWVkaWE/cGFyZW50PTE0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjdXJpZXNcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJ3cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvYXBpLncub3JnXFwve3JlbH1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlZFwiOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBQUk9KRUNUU19EQVRBIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1VSTH0vcHJvamVjdHNgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lbGVtZW50LmFjZixcclxuICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5OiBlbGVtZW50LmdhbGxlcnlfaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJz4+ZXJyb3InLCBlcnIpKVxyXG4gICAgKVxyXG59O1xyXG5cclxuLy9UT0RPOiBUaGlzIHdpbGwgYmUgcmVtb3ZlZFxyXG5jb25zdCBnZXRUZW1wUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gUFJPSkVDVFNfREFUQS5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICh7XHJcbiAgICAgICAgICAgIC4uLmVsZW1lbnQuYWNmLFxyXG4gICAgICAgICAgICBnYWxsZXJ5OiBlbGVtZW50LmdhbGxlcnlfaW1hZ2VzLFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0UHJvamVjdHMsXHJcbiAgICBnZXRUZW1wUHJvamVjdHMsXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb2xsYXBzaWJsZSBmcm9tICdyZWFjdC1jb2xsYXBzaWJsZSc7XHJcbi8vIGltcG9ydCB7XHJcbi8vICAgICBMaW5rXHJcbi8vIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vL1JlZHV4XHJcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCB7IGdldFByb2plY3RzTGlzdCB9IGZyb20gJy4uLy4uL3B1YmxpYy9yZWR1eC9zZWxlY3RvcnMnO1xyXG4vLyBpbXBvcnQgeyBhZGRQcm9qZWN0TGlzdCwgc2V0U2luZ2xlUHJvamVjdCB9IGZyb20gJy4uLy4uL3B1YmxpYy9yZWR1eC9hY3Rpb25zJztcclxuLy9jc3NcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2dhbGxlcnkubW9kdWxlLnNjc3MnO1xyXG4vL0FQSVxyXG5pbXBvcnQgeyBnZXRQcm9qZWN0cywgZ2V0VGVtcFByb2plY3RzIH0gZnJvbSAnLi9BUEknO1xyXG5cclxuY29uc3QgR2FsbGVyeSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRQcm9qZWN0TGlzdCwgc2V0U2luZ2xlUHJvamVjdCwgcHJvamVjdHNMaXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvKnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZFByb2plY3RMaXN0KHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJz4+ZXJyb3InLCBlcnIpKVxyXG4gICAgfSwgW2FkZFByb2plY3RMaXN0XSk7Ki9cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFwcm9qZWN0c0xpc3RcclxuICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VzX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGVtcFByb2plY3RzKCkubWFwKChwcm9qZWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvamVjdHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gYWx0PXsnYXMnfSBzcmM9e3Byb2plY3QubWFpbl9pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBjb25zb2xlLmxvZyhcIj4+REFUQVwiLCBwcm9qZWN0W2luZGV4XSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IDxoND5ObyBwcm9qZWN0cyB0byBkaXNwbGF5PC9oND5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0ICYmIHByb2plY3RzTGlzdC5sZW5ndGggPiA5ICYmXHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2libGVcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0SXNFeHBhbmRlZCghaXNFeHBhbmRlZCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWxsX3Byb2plY3RzX2N0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRXhwYW5kZWQgPyAnU0VFIExFU1MgPicgOiAnU0VFIEFMTCBQUk9KRUNUUyA+J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NQYXJlbnRTdHJpbmc9e2lzRXhwYW5kZWQgPyAnZXhwYW5kZWRQYW5lbCcgOiAnJ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vcmVfaW1hZ2VzX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHsvKiAvL1RPRE86IGNoZWNrIGxvZ2ljIGFib3V0IGluZGV4IHdoZW4gc2VsZWN0IGEgcHJvamVjdCovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHNMaXN0LnNsaWNlKDksMjApLm1hcCgocHJvamVjdCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zbGlkZX0gbW9yZS1zbGlkZXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL3Byb2plY3RzJ30gb25DbGljaz17KCkgPT4gc2V0U2luZ2xlUHJvamVjdChpbmRleCArIDMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gYWx0PXsnYXMnfSBzcmM9e3Byb2plY3QubWFpbl9pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2luZ2xlUHJvamVjdChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4vLyAgICAgcHJvamVjdHNMaXN0OiBnZXRQcm9qZWN0c0xpc3Qoc3RhdGUpLFxyXG4vLyB9KTtcclxuLy9cclxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgICAgYWRkUHJvamVjdExpc3Q6ICh2YWx1ZXMpID0+IGRpc3BhdGNoKGFkZFByb2plY3RMaXN0KHZhbHVlcykpLFxyXG4vLyAgICAgc2V0U2luZ2xlUHJvamVjdDogKHByb2plY3RJZCkgPT4gZGlzcGF0Y2goc2V0U2luZ2xlUHJvamVjdChwcm9qZWN0SWQpKSxcclxuLy8gfSk7XHJcbi8vXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbi8vICAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbi8vICAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuLy8gKShHYWxsZXJ5KVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbWFnZXNfd3JhcHBlclwiOiBcImdhbGxlcnlfaW1hZ2VzX3dyYXBwZXJfXzFjUkhnXCIsXG5cdFwibW9yZV9pbWFnZXNfd3JhcHBlclwiOiBcImdhbGxlcnlfbW9yZV9pbWFnZXNfd3JhcHBlcl9fMnNYallcIixcblx0XCJzbGlkZVwiOiBcImdhbGxlcnlfc2xpZGVfXzNLZHZZXCIsXG5cdFwiaW1hZ2VcIjogXCJnYWxsZXJ5X2ltYWdlX18zT2JUVVwiLFxuXHRcImFsbF9wcm9qZWN0c19jdGFcIjogXCJnYWxsZXJ5X2FsbF9wcm9qZWN0c19jdGFfX0NfdmtFXCIsXG5cdFwiZ2FsbGVyeS1vdmVybGF5LWhlbHBlclwiOiBcImdhbGxlcnlfZ2FsbGVyeS1vdmVybGF5LWhlbHBlcl9fMk02bF9cIixcblx0XCJleHBhbmRlZFBhbmVsXCI6IFwiZ2FsbGVyeV9leHBhbmRlZFBhbmVsX196Y3Q0cFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XHJcbmltcG9ydCBTZWN0aW9uTGF5b3V0IGZyb20gJy4uL2NvbW1vbi9TZWN0aW9uTGF5b3V0JztcclxuLy9jc3NcclxuaW1wb3J0ICcuL3Byb2plY3RzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VjdGlvbkxheW91dCBzZWN0aW9uVGl0bGU9eydQUk9KRUNUUyd9IHNlY3Rpb25JZD17J1BST0pFQ1RTJ30+XHJcbiAgICAgICAgICAgIDxHYWxsZXJ5IC8+XHJcbiAgICAgICAgPC9TZWN0aW9uTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvamVjdHMtd3JhcHBlclwiOiBcInByb2plY3RzX3Byb2plY3RzLXdyYXBwZXJfXzFLQVpLXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFubmVyU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9iYW5uZXJcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2plY3RzXCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hYm91dFwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCI7XHJcbi8vQ29tcG9uZW50c1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICA8QmFubmVyU2VjdGlvbiAvPlxyXG4gICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jb25yYWQtYXJjaGl0ZWN0LXRlYW0tbWluLTE3M2JhN2UwZTU0NDU1NTU2OGNiMDkxMjMyNWEwNWU1LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRZ0FBQUF6Q0FZQUFBQnJQSllsQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5aHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREl4SURjNUxqRTFOVGMzTWl3Z01qQXhOQzh3TVM4eE15MHhPVG8wTkRvd01DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRRZ0tFMWhZMmx1ZEc5emFDa2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZRa1UxT1RoQ05UWXpRa1F3TVRGRk5FRkNNVFJHT0RrNE9EYzVRakU1TlVJaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlFrVTFPVGhDTlRjelFrUXdNVEZGTkVGQ01UUkdPRGs0T0RjNVFqRTVOVUlpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwR01ERXlSakl3T1ROQ1EwWXhNVVUwUVVJeE5FWTRPVGc0TnpsQ01UazFRaUlnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBHTURFeVJqSXdRVE5DUTBZeE1VVTBRVUl4TkVZNE9UZzROemxDTVRrMVFpSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QcWV3bjR3QUFBcXVTVVJCVkhqYTdGM2RrZXNxRW1hbTd1TythRVBRRFlFVGdtNElPaUZvUXRDRUlJY2doMkNISUljZ2h5Qy83THNjZ3RhcWdwMCt2U0JvZnZ3ejAxMUZqY2NXQ0xxYmo2WnA0RzFaRm5HajlwYUtXMnJVWDBpWFc5cmYwdm1XVG9McGxhbThwZXFXcFBvc0xmSmUwMVhKWFA5L1p2YjlQSHBUQUtGcFZaNEJQZk9MbGVQbHFWTGdYNFB2VGdiQTE2QWgwZmRucFFkTVB4d2dWc0pmdkRHYlhwbzZaU0VLWlJYc2xFVjRkVmdhTmJBc1Z5RDVoMW5KQU1FQThiMW9CTmJBVlhWeWlqVW9sVVY1Wm9ENG1mU2VzZXgxNUpuVmFKU0NCbVVxeDNTV3lyTlR0T3A5aTJlYUNYVmJSK1plMVVmbm45VDcrb1Q4N3lQQlFVOHRkZ0YranBWL0I5Ukd6YWRCV1RWMVlMc21ZdDVHMVdkQzllZ01Nak05YTVPM2JrY3EvYTdVZTZua1cyZGM5NFBLSnpkTFh5MElsRENKd05TcS9IMUVHYmhlVTJEZVJ1VnZpZmtteElzV3BlNldSazgrU1ZEZXBQSlh0MVNyY21MNURWTnRxSGRvV2NVdERSN1BsYmQwQU84Y1ZiczByM29EUHljbEc2b2VMSXAzb1R4cFBkb0M2YURlVjZtOFUwTCs2alNvc3BvSU9abDRxK3ZkcUhvT2hqNXVsVU5PZ0lCTUxDT1pKMEZaVFVSZERvRkNjL0ZpOUZDNDJRR1lNaUZBUU43UFNubEVKTmo3QUxBR2h0TFJVWEVIR3doMWhPMlNnUjJvSXJ6SEJBQ0ZRVGVxQ1A2V3FMUEdES0tRcDF1OGFJRk9XdVdRQ3lDYXhBaGJSekFRSzI4T2dIQzFyd2RsRkk3bllzR2hNb3grSW1OcUF0NWw2bUNqSjBnc0VTQ1JDaUIwRytaRWZPNFRnWTB2UUVCZ0dyZmtrTXNIZ2VlSTJoc2VTaVg2M0JEeXRzaS9rSU4yQkg1c3JSNGNFODFsc1I4aDUvSnBEOXIxNFpsdmZmWTNxcHRFc3ZMMWN3MFo1ZXBxdzJsRDV5bHRxRGQwTmlkZERMNnBQK1R3bmtscEtxWHMxdzBtVUVnR01yQXhPSkVlb1V5Rlo5MVRCS0xKT3dJRWRLcTZsazVOSGV6VElOZlNVN0d2VHdBU1owL2dkK2xvb2ZnSCsxQjVwemFZZ1AxL2NzZ0JFRFZRbUdNaVZDd04vL3RZRWEyanN6NUNrYm9FRmhYRmdzaEZOWkpMQ0xpWmdyVnFUNEQ0L1NTV1JDeTROd0FzTHcrd0lyUitIazF5U0EwUXV1TmVGTVAyNkxkUUswSXFKbElZcUsySC9STllFSmo1blZvQ2JNVHJVcFdvZ3h3REFFNnE5MzBna0xnM1R3dGtRWVdBUXdtczdiM0JzbmdVd0ZVNUFLSkJjL0l6R2oyYlFORFJaZTBJVmtRTDZuTGVzRVpTZ0tJTHJIWUdVNzlVSnZwMHgxRS9KY2xNaWlrSkhYTnZtS2IwZHdRSmFDMmZFdlNYdmVYM1J3Q0VUQTBRQlRDWGpoWmtEWmxibFdDdXRQZTBJcUQxY0VIend4aUFNQVdlK0hid2Z5eEtWSXF2b0pzVWRMbVR4U1F6MWJjZ1REVjE1OW8vQUNSYW9HTWZBZmtyWUFsZGtJNC9BaUNNY2tnSkVOb2tPcUlPaWY5dkF4WHhqTkIyeTRwbzBiT25SSXI5aWRKTytPOTAxTkdNbjhMczBHcEZta2pLaTBlbmVsV3l0ZVhEQWhLMUo0OThPbk10dmh6d3JRTDBVSENBbmYrNE1lVXF4YU9ub1FuaklIVHdpL1JZNXkwQzFvZ2JTeURRWkZtWDd3MVJuZFQzKzhSQkZBRnhIclpBbFVYRmZNUUdOZUZZZ1J6eEQzajlYTjRod0tkeXlLSjN4RWxRZE5xSCtzakFxTmtqMEczTUdBZmh6Si9LZ29BZTdkRmdoamNSYzZ2U2dQcjdEWlJ0RFpiR09hUFpmUTBZa2ZTdXlsOGl6SXRQY2ZvVm1VYWhjNEJ6MGVYb0V5SnVXUlpiRW5oMUk3VHMxZXA3VStrWHNBQ2J3S2xoQStwbm1yYVdTRmZ2NGFNcVRYTDRLN0Z6Y3IvUldXQk1RaVA4TndGVkZvQ0FTNFd0NmhnMThqM0FEb2tCSXVYaE42RUJUanBRNVFDQUlSWWdMb0FYbWpyRFZDK0ZVNnRCOHQwRmxGTWw0aVVFQ2R3SkI4WG5GTzAvSzhEb2dlNWRoUDhxQmdUc3o0M25PalJvNUQ2c1NScWRsZ21tR05JejVoK0hYemZFK0htWEtRMDMwWlFCb2JNeG9kYXUwR2RLTEg2Sy9SaWxZZm9TRXdwODhOek1Wa1dHR1ErRU1ISnErUElNNmlzU2hGcjNnVk9zMXJPdHVQd3k4eFRES0ljVUFORjd6c2R3N1BxNCtPOHJtRHdWZEtzZVV3RHpVZ0JFVDl4ak1DN3A5MGpFekpuTERYN1ZoazVZRUgweE0yRmZSVVdVUlcveEhhUUFpQUw1WVh6M2hVeWVBeVRlVTlObEJJalNCbmF4QUZFU0VZNjZLY1dGdHFaT1VIcDA5aWtEUVBRYlpUU0wvMjdWZHNtemtRb0NFTVdoT0Rpc2p5NXcweFhtYjdQUU5xTEpDSkJJQVJCYWJqTUJJQnVpL2xGMzVZWUFCQWE2SnVWdXpwWTQ2a2xpSXpvUDlCdzhSOGd1WUNYRGQwdHZzZEdKQnNmb0FnVTBMdkZiczAyZHltWnBTY2NPMnRFVHRFd3JKNDJIVmVMenJBMGdxaVY4dDJRcWdEQ0I4SllNQjRJMVlKdEdVMVplQ29KdUdPWGdlc25rNk94endLZzNFbndSUGdwYWVTSXNsZG5DTUkrZmxiTGhRMk9tRGJBYmtCK2dCWWQ0ZEVCQU9jQUJLL0prTWJrSGtFYkQ3NVZuNXgwTS9Eb2dmbUZBTHdNdEl1cTVJSDJBWDgxM0lHc00vVVp1UEZNUlJuZmY3ZTNTSUxkWjZWaU5Ebzdwa0M1WTVlQTZrM0wxS1ArMnJFYkFXUEVMQ0RjOU96eTRwazAxZXRWaEJ6ekRFbmppZFhUbTJlSXQ3bEYrbTFkWUlzODVMQk1IYzBuaWlzS241ZjJhVi9xSWVZazh4WmVOZHVYeVZ1dUlWcGhNWWJmNnFvTlRRUG1Wb2V3emFPK1JzRHlzZFEydVhNSElXbC9ldFNyOWUyT3ByMVpKR2xaWHpoczZyazhPcjBBZDF6ei91cVgvb0JVZnpWUFhEbGg5Sm1pQlZ1VDJnSWRiZGJhdHd1Z3JEWFI3ckhYQUFGR0tQOC9GK3d4Y3VtSmlZbm84RmJGTHUrK09ZSWtqODVpSjZXVXBPdTdqZlNOWVlpZm9FWUpNVEV6ZmlQQVVROStqb085QnVES0xtSmdZSUZiUzErNkYzcUhBeE1UMFRRRkNyeTZzOU1IZ3dNVEVwQUZDZzhPNjNMSGphUVVURXhNRWlIVW5ZZWlSV1V4TVREOWdpc0hFeE1URUFNSEV4TVFBd2NURXhBREJ4TVNVazk2WkJVd0phTjBvNUhQSkMzVUQzQ3Z5d2VjVWNiM3hqQUVpTTQwaTdsajNXdng1eU83NmVkMnNOb3MwdHpScFJWaFhpZ1pWdG43SFFPd3NMYXJyV2dZK0psOWZ4QVBiNDZ1SU1YbWw0dGtFMG9LK0c4VlhwSzRJcUJNdVgvT2lleEw1YUQ3QU1yUXVMYWp1czNpVlc5VXlYdzJmTThtRUp6Q042SndBZUloTEUxaG1EZmJqbStvK0JSNEJOenBPemlvampxNEx6ZHNaMm1rNlQ2UWpISmFDNnpSWnpzcnNua2crcHZhWnpzR3NDYWRLUFRTOXNnV2hiL0ZLY1NRNE5vL2h6ZE1oU0s5SHBaMHduMXlzVDBhdUl1cHEyMGgzc2JUSmgwTHpyaU9uejg3ZlkwRFpXeHNHUTJOM2NzbUh3b2NMV3hCNTA2UkdrSVY0S3RIVzJYKzIwN1dvbCtMTW5xTndsN0N1cnRHYmNua0tOVzlGS0tkS1hLZjZpZVJURWVSVnNRV1IxeGtFVHpySzZmaWlJcjArL2NqbmxLUFBiK0tjTzJWNlZuaU94czhpbjBmeWdaMlVDQ0NPNHV2SXJpclRPMElWOEdVVTRNVXBaQ1dBNVVPZ3YxNjAzdkJtckpQNE9vOHYxUzVVN2QzZUI0d2laYURsUWFXSndTSEl6M0l2K1RCQVBGQXg5c2hVMHpjdm54TjF1a0tWKy9IRWZQaDd5N1gwRFhXMVFLRG9PMDFnK21GVGpCVUlPdkcxWHQ4bjlFT3NuZTQzZUUvTVNrREY2cFdVcmtvK2Z5TTVzWHdZSVA0d0Q5ZjBodEpKVFRGUzNOcTlXaUU3QlE1OVlINGgwdDRnenZUL2RBcTBJRmcrM3hnZ2JMY2NueEtQQ2p1bFNIV0FaYUtWMWlkK29oZHhrYUEvblM3SXI4RHlZWUF3cmlvY0NVTDNwVStnSkpTcGhoN1pTckVkQnF3dmwyRm5XUnkxUkJCbitYeFRnTkMzVTUwc0k4bEZmTjB5RkRLL3hTT1JWaVI5SkI4RkpENVUzdFlDTUdzZEQ0RW04dFV4YXBib09lb1VMalJ2am5KY1pSVktMNmlkT0tkOHFQSjZibnFocUVsNE9XcTE4VHNsRXJCRmQxR2E0dTliOWYwVUVMRlpxdkpHVU1ZSW9rQXBkM0g2MUhVeThLb2wzRjBabWhmWFlYYlVrMUlXcnRNRTBod1E2WnBMUGk1K3pxK3kvd0ttL3dvd0FGOVFPYWVRU2NMR0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8xNDNLNTkwOS05MmI3NmEwYzIyZWViNWMxYTlmMGZjNmZhZDE2MTc5ZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvNDA1LURhcnRtb29yLVN0cmVldC05Mjk4NDM4YjAwMGQ3ZjY1YTEyZWIxMTIyZTJmMWM0MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvRFNDMDg1ODQtbWluLTcwMDUyYzhiNzY1MDkyMDYwYzkxMWU3OGU4YzJkN2FjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9Mb3BleiBSZXNpZGVuY2UtOTExOC03NjAyNjRjY2NhZGM3NWJjM2Q1MTJhM2JiMjAxNGIwMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnMEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlERTVMakV1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGcwS1BITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pEWVhCaFh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWcwS0NTQjJhV1YzUW05NFBTSXdJREFnTXpFdU5Ea2dNekV1TkRraUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURNeExqUTVJRE14TGpRNU95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak1VVXlNREZFT3lJZ1pEMGlUVEl4TGpJd05TdzFMakF3TjJNdE1DNDBNamt0TUM0ME5EUXRNUzR4TkRNdE1DNDBORFF0TVM0MU9EY3NNR010TUM0ME1qa3NNQzQwTWprdE1DNDBNamtzTVM0eE5ETXNNQ3d4TGpVM01XdzRMakEwTnl3NExqQTBOMGd4TGpFeE1RMEtDVU13TGpRNU1pd3hOQzQyTWpZc01Dd3hOUzR4TVRnc01Dd3hOUzQzTXpkak1Dd3dMall4T1N3d0xqUTVNaXd4TGpFeU55d3hMakV4TVN3eExqRXlOMmd5Tmk0MU5UUnNMVGd1TURRM0xEZ3VNRE15WXkwd0xqUXlPU3d3TGpRME5DMHdMalF5T1N3eExqRTFPU3d3TERFdU5UZzNEUW9KWXpBdU5EUTBMREF1TkRRMExERXVNVFU1TERBdU5EUTBMREV1TlRnM0xEQnNPUzQ1TlRJdE9TNDVOVEpqTUM0ME5EUXRNQzQwTWprc01DNDBORFF0TVM0eE5ETXNNQzB4TGpVM01Vd3lNUzR5TURVc05TNHdNRGQ2SWk4K0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1cmUtcmVhY3QtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29sbGFwc2libGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9