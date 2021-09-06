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
    className: _sectionLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
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
	"mobile_carousel_container": "mobile-carousel_mobile_carousel_container__3ALm7",
	"sliders": "mobile-carousel_sliders__37ujI",
	"slider_wrapper": "mobile-carousel_slider_wrapper__3Zjzc",
	"paragraphs": "mobile-carousel_paragraphs__GqELu",
	"quote_container": "mobile-carousel_quote_container__1hp5v",
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
	"content": "sectionLayout_content__3WRSZ",
	"title": "sectionLayout_title__1tAcn"
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
	"bigScreenMenu": "header_bigScreenMenu__1lHBc"
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
    className: _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuToggle,
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
    className: _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fib3V0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWJvdXQvdGlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhbm5lci9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iYW5uZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmFubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1NlY3Rpb25MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvbW9iaWxlLWNhcm91c2VsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL3NlY3Rpb25MYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1tZW51L21vYmlsZU1lbnUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9qZWN0cy9BUEkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvamVjdHMvQVBJL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvamVjdHMvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL2dhbGxlcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb25yYWQtYXJjaGl0ZWN0LXRlYW0tbWluLmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvamltLWNvbnJhZC1sb2dvLWxpZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy8xNDNLNTkwOS5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvNDA1LURhcnRtb29yLVN0cmVldC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvRFNDMDg1ODQtbWluLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9Mb3BleiBSZXNpZGVuY2UtOTExOC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9yaWdodC1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHVyZS1yZWFjdC1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29sbGFwc2libGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiJdLCJuYW1lcyI6WyJBQk9VVF9QQVJBR1JBUEhfT05FIiwiQUJPVVRfUEFSQUdSQVBIX1RXTyIsIkFCT1VUX1BBUkFHUkFQSF9USFJFRSIsIkFCT1VUX1BBUkFHUkFQSF9GT1VSIiwiVEVBTV9DQVJPVVNFTF9TTElERVMiLCJNRU1CRVJTIiwiaWQiLCJuYW1lIiwibGFzdE5hbWUiLCJyb2wiLCJwcm9maWxlUGljdHVyZSIsImxpbmtUb1Byb2ZpbGUiLCJBYm91dCIsInN0eWxlcyIsImNvbnRhaW5lciIsInRlYW1fdGlsZSIsImZ1bGxfdGVhbSIsInRlYW0iLCJ0ZWFtX3BpY3R1cmUiLCJ0ZWFtX3dyYXBwZXIiLCJ0ZXh0X3dyYXBwZXIiLCJwYXJhZ3JhcGhzIiwicXVvdGVfY29udGFpbmVyIiwicXVvdGUiLCJxdW90ZV9uYW1lIiwidGlsZV9jb250YWluZXIiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiVGlsZSIsInByb3BzIiwia2V5Iiwic3RhZmZEYXRhIiwibWVtYmVyX3RpbGUiLCJ0aWxlX3RleHRfd3JhcHBlciIsInRpbGVfbGluayIsIk15Q2Fyb3VzZWwiLCJzdHlsZSIsImNhcm91c2VsIiwiQ0FST1VTRUxfSU1BR0VTIiwiaXRlbSIsImNhcm91c2VsX3NsaWRlciIsImFsdCIsImltZyIsInNsaWRlSW1hZ2UxIiwic2xpZGVJbWFnZTIiLCJzbGlkZUltYWdlMyIsInNsaWRlSW1hZ2U0IiwiQmFubmVyIiwiY2Fyb3VzZWxfY29udGFpbmVyIiwiY29udGVudCIsIndoaXRlX2JvcmRlciIsIlNlY3Rpb25MYXlvdXQiLCJzZWN0aW9uVGl0bGUiLCJzZWN0aW9uSWQiLCJ0aXRsZSIsIndyYXBwZXIiLCJncmF5X2JhY2tncm91bmQiLCJjb250ZW50X2NvbnRhaW5lciIsImNoaWxkcmVuIiwicHJvdG90eXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInNsaWRlcyIsImxlbmd0aCIsIm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXIiLCJzbGlkZXJzIiwiYXJyb3ciLCJiYWNrIiwiQXJyb3ciLCJzbGlkZXJfd3JhcHBlciIsIm5leHQiLCJhcnJheSIsIkNvbnRhY3QiLCJsaW5rIiwiTUVOVV9MSU5LUyIsImxhYmVsIiwibGlua1RvIiwiSGVhZGVyIiwibG9nbyIsIkxvZ28iLCJiaWdTY3JlZW5NZW51IiwibmF2IiwiTW9iaWxlTWVudSIsIm1lbnVJdGVtcyIsIm1lbnVUb2dnbGUiLCJtZW51IiwiUFJPSkVDVFNfREFUQSIsImdldFByb2plY3RzIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZWxlbWVudCIsImFjZiIsImdhbGxlcnkiLCJnYWxsZXJ5X2ltYWdlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldFRlbXBQcm9qZWN0cyIsIkdhbGxlcnkiLCJhZGRQcm9qZWN0TGlzdCIsInNldFNpbmdsZVByb2plY3QiLCJwcm9qZWN0c0xpc3QiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInVzZVN0YXRlIiwiaW1hZ2VzX3dyYXBwZXIiLCJwcm9qZWN0Iiwic2xpZGUiLCJpbWFnZSIsIm1haW5faW1hZ2UiLCJ1cmwiLCJhbGxfcHJvamVjdHNfY3RhIiwibW9yZV9pbWFnZXNfd3JhcHBlciIsInNsaWNlIiwiUHJvamVjdHMiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwicHVzaCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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Ozs7Ozs7QUNBQSxxQ0FBcUMsb3FDOzs7Ozs7Ozs7OztBQ0FyQyxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGlsZV9jb250YWluZXJcIjogXCJhYm91dF90aWxlX2NvbnRhaW5lcl9fMmpMYlZcIixcblx0XCJ0aXRsZVwiOiBcImFib3V0X3RpdGxlX18zOEw4bFwiLFxuXHRcImNvbnRhaW5lclwiOiBcImFib3V0X2NvbnRhaW5lcl9fQ2pRcUlcIixcblx0XCJ0ZWFtX3RpbGVcIjogXCJhYm91dF90ZWFtX3RpbGVfXzJsZllGXCIsXG5cdFwidGVhbV9waWN0dXJlXCI6IFwiYWJvdXRfdGVhbV9waWN0dXJlX19VV2MwcVwiLFxuXHRcInRlYW1fd3JhcHBlclwiOiBcImFib3V0X3RlYW1fd3JhcHBlcl9fMktaS3dcIixcblx0XCJ0ZXh0X3dyYXBwZXJcIjogXCJhYm91dF90ZXh0X3dyYXBwZXJfXzJtcW5hXCIsXG5cdFwicGFyYWdyYXBoc1wiOiBcImFib3V0X3BhcmFncmFwaHNfXzJBeEV5XCIsXG5cdFwicXVvdGVfY29udGFpbmVyXCI6IFwiYWJvdXRfcXVvdGVfY29udGFpbmVyX19fdW5TaFwiLFxuXHRcInF1b3RlXCI6IFwiYWJvdXRfcXVvdGVfXzNzem1FXCIsXG5cdFwicXVvdGVfbmFtZVwiOiBcImFib3V0X3F1b3RlX25hbWVfX3JzbTctXCIsXG5cdFwibWVtYmVyX3RpbGVcIjogXCJhYm91dF9tZW1iZXJfdGlsZV9fMW9VQ2tcIixcblx0XCJ0aWxlX3RleHRfd3JhcHBlclwiOiBcImFib3V0X3RpbGVfdGV4dF93cmFwcGVyX191b1dUUVwiLFxuXHRcInRpbGVfbGlua1wiOiBcImFib3V0X3RpbGVfbGlua19fRDBtNC1cIixcblx0XCJ0ZWFtX2xpbmtcIjogXCJhYm91dF90ZWFtX2xpbmtfXzM1OFhBXCIsXG5cdFwiZnVsbF90ZWFtXCI6IFwiYWJvdXRfZnVsbF90ZWFtX19CQkRuYlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFCT1VUX1BBUkFHUkFQSF9PTkUgPSAnVGhlIEFyY2hpdGVjdHVyYWwgZmlybSwgSmFtZXMgQ29ucmFkLCBBcmNoaXRlY3RzIChKQ0EgKScgK1xyXG4gICAgJyB3YXMgZm91bmRlZCBpbiAxOTkwIGJ5IEphbWVzIENvbnJhZC4gSmFtZXMgY29uY3VycmVudGx5IGZvdW5kIGEgZGV2ZWxvcG1lbnQgY29tcGFueSBjYWxsZWQgQ29ucmFkIERldmVsb3BtZW50Lic7XHJcblxyXG5jb25zdCBBQk9VVF9QQVJBR1JBUEhfVFdPID0gJ0pDQSBwcm92aWRlIGhpZ2hseSBwZXJzb25hbGl6ZWQgc2VydmljZS4gT3VyIHdlYWx0aCBvZiBleHBlcmllbmNlIGlzIGludmFsdWFibGUgaW4nICtcclxuICAgICcgc2VsZWN0aW5nIHRoZSByaWdodCBwcm9wZXJ0eS4gV2UgY2FuIHByb3ZpZGUgZ3VpZGFuY2UgdGhyb3VnaCBhbGwgcGhhc2VzIG9mIGJ1aWxkaW5nIGEgaG9tZSBzdGFydGluZyBhdCcgK1xyXG4gICAgJyBhc3Npc3RhbmNlIHdpdGggZmluZGluZyB0aGUgcmlnaHQgcHJvcGVydHknO1xyXG5cclxuY29uc3QgQUJPVVRfUEFSQUdSQVBIX1RIUkVFID0gJ0pDQSB3b3JrcyBwcmltYXJpbHkgaW4gU291dGhlcm4gQ2FsaWZvcm5pYSBidXQgaGFzIHByb2plY3RzIHRocm91Z2hvdXQgdGhlJyArXHJcbiAgICAnIFVuaXRlZCBTdGF0ZXMsIENhbmFkYSBhbmQgTWV4aWNvLic7XHJcblxyXG5jb25zdCBBQk9VVF9QQVJBR1JBUEhfRk9VUiA9ICdUaGUgY29tYmluYXRpb24gb2YgZXhwZXJpZW5jZSBhbmQgaGlnaGx5IHBlcnNvbmFsaXplZCBzZXJ2aWNlIGFsbG93cyBKQ0EgcHJvdmlkZScgK1xyXG4gICAgJyBhIGZ1bGwgYXJyYXkgb2Ygc2VydmljZXMgdG8gY2xpZW50cyB3YW50aW5nIHRvIGJ1aWxkIHRoZWlyIGRyZWFtIGhvbWUuJztcclxuXHJcbmNvbnN0IFRFQU1fQ0FST1VTRUxfU0xJREVTID0gW1xyXG4gICAgPHA+XHJcbiAgICAgICAgVGhlIEFyY2hpdGVjdHVyYWwgZmlybSwgSmFtZXMgQ29ucmFkLCBBcmNoaXRlY3RzIChKQ0EgKSB3YXMgZm91bmRlZCBpbiAxOTkwIGJ5XHJcbiAgICAgICAgSmFtZXMgQ29ucmFkLiBKYW1lcyBjb25jdXJyZW50bHkgZm91bmQgYSBkZXZlbG9wbWVudCBjb21wYW55IGNhbGxlZCBDb25yYWRcclxuICAgICAgICBEZXZlbG9wbWVudC5cclxuICAgIDwvcD4sXHJcbiAgICA8cD5cclxuICAgICAgICBUaGUgQXJjaGl0ZWN0dXJhbCBmaXJtLCBKYW1lcyBDb25yYWQsIEFyY2hpdGVjdHMgKEpDQSApIHdhcyBmb3VuZGVkIGluIDE5OTAgYnlcclxuICAgICAgICBKYW1lcyBDb25yYWQuIEphbWVzIGNvbmN1cnJlbnRseSBmb3VuZCBhIGRldmVsb3BtZW50IGNvbXBhbnkgY2FsbGVkIENvbnJhZFxyXG4gICAgICAgIERldmVsb3BtZW50LlxyXG4gICAgPC9wPixcclxuICAgIDxwPlxyXG4gICAgICAgIFRoZSBBcmNoaXRlY3R1cmFsIGZpcm0sIEphbWVzIENvbnJhZCwgQXJjaGl0ZWN0cyAoSkNBICkgd2FzIGZvdW5kZWQgaW4gMTk5MCBieVxyXG4gICAgICAgIEphbWVzIENvbnJhZC4gSmFtZXMgY29uY3VycmVudGx5IGZvdW5kIGEgZGV2ZWxvcG1lbnQgY29tcGFueSBjYWxsZWQgQ29ucmFkXHJcbiAgICAgICAgRGV2ZWxvcG1lbnQuXHJcbiAgICA8L3A+XHJcbl1cclxuXHJcbmNvbnN0IE1FTUJFUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ01hdXJlZW4nLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnU2NhbGx5JyxcclxuICAgICAgICByb2w6ICdBcmNoaXRlY3QgLSBBc3NvY2lhdGUnLFxyXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOiAnaHR0cHM6Ly93cC5jb25yYWRhcmNoaXRlY3QuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAyL21hdXJlZW4tc2NhbGx5LXNjYWxlZC5qcGcnLFxyXG4gICAgICAgIGxpbmtUb1Byb2ZpbGU6ICcvTWF1cmVlblNjYWxseVByb2ZpbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnSmltJyxcclxuICAgICAgICBsYXN0TmFtZTogJ0NvbnJhZCcsXHJcbiAgICAgICAgcm9sOiAnQXJjaGl0ZWN0IC0gRm91bmRlcicsXHJcbiAgICAgICAgcHJvZmlsZVBpY3R1cmU6ICdodHRwczovL3dwLmNvbnJhZGFyY2hpdGVjdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDIvamltLWNvbnJhZC1zY2FsZWQuanBnJyxcclxuICAgICAgICBsaW5rVG9Qcm9maWxlOiAnL0ppbUNvbnJhZFByb2ZpbGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAnQWxpJyxcclxuICAgICAgICBsYXN0TmFtZTogJ0FzaG91cmloYScsXHJcbiAgICAgICAgcm9sOiAnQXJjaGl0ZWN0IC0gQXNzb2NpYXRlJyxcclxuICAgICAgICBwcm9maWxlUGljdHVyZTogJ2h0dHBzOi8vd3AuY29ucmFkYXJjaGl0ZWN0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMi9hbGktQXNob3VyaWhhLXNjYWxlZC5qcGcnLFxyXG4gICAgICAgIGxpbmtUb1Byb2ZpbGU6ICcvdGVhbS1hbGknLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBBQk9VVF9QQVJBR1JBUEhfT05FLFxyXG4gICAgQUJPVVRfUEFSQUdSQVBIX1RXTyxcclxuICAgIEFCT1VUX1BBUkFHUkFQSF9USFJFRSxcclxuICAgIEFCT1VUX1BBUkFHUkFQSF9GT1VSLFxyXG4gICAgTUVNQkVSUyxcclxuICAgIFRFQU1fQ0FST1VTRUxfU0xJREVTXHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Fib3V0Lm1vZHVsZS5zY3NzJztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBTZWN0aW9uTGF5b3V0IGZyb20gJy4uL2NvbW1vbi9TZWN0aW9uTGF5b3V0JztcclxuaW1wb3J0IE1vYmlsZUNhcm91c2VsIGZyb20gJy4uL2NvbW1vbi9jYXJvdXNlbCc7XHJcbmltcG9ydCBUaWxlIGZyb20gJy4vdGlsZSc7XHJcbi8vQ29uc3RhbnRcclxuaW1wb3J0IHtcclxuICAgIE1FTUJFUlMsXHJcbiAgICBBQk9VVF9QQVJBR1JBUEhfRk9VUixcclxuICAgIEFCT1VUX1BBUkFHUkFQSF9PTkUsXHJcbiAgICBBQk9VVF9QQVJBR1JBUEhfVEhSRUUsXHJcbiAgICBBQk9VVF9QQVJBR1JBUEhfVFdPLFxyXG4gICAgVEVBTV9DQVJPVVNFTF9TTElERVMsXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG4vL0ltYWdlc1xyXG5pbXBvcnQgdGVhbSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb25yYWQtYXJjaGl0ZWN0LXRlYW0tbWluLmpwZWcnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWN0aW9uTGF5b3V0IHNlY3Rpb25UaXRsZT17J0FCT1VUJ30gc2VjdGlvbklkPXsnQUJPVVQnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50ZWFtX3RpbGV9ICR7c3R5bGVzLmZ1bGxfdGVhbX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17J0NvbnJhZCBBcmNoaXRlY3QgdGVhbSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGVhbV9waWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q09OUkFEIEFSQ0hJVEVDVFM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlQ2Fyb3VzZWwgc2xpZGVzPXtURUFNX0NBUk9VU0VMX1NMSURFU30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBoc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e0FCT1VUX1BBUkFHUkFQSF9PTkV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntBQk9VVF9QQVJBR1JBUEhfVFdPfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57QUJPVVRfUEFSQUdSQVBIX1RIUkVFfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW90ZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnF1b3RlfT4mIzgyMjA7e0FCT1VUX1BBUkFHUkFQSF9GT1VSfSYjODIyMTs8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucXVvdGVfbmFtZX0+LUphbWVzIENvbnJhZCwgRm91bmRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWxlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge01FTUJFUlMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxUaWxlIHN0YWZmRGF0YT17dmFsdWV9IGtleT17aW5kZXh9IC8+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NlY3Rpb25MYXlvdXQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Fib3V0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFRpbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsga2V5LCBuYW1lLCBsYXN0TmFtZSwgcm9sLCBwcm9maWxlUGljdHVyZSwgbGlua1RvUHJvZmlsZSwgaWQgfSA9IHByb3BzLnN0YWZmRGF0YTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e2BvcmRlci0ke2lkfWB9IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRlYW1fdGlsZX0gJHtzdHlsZXMubWVtYmVyX3RpbGV9YH0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PXtgJHtrZXl9LXByb2ZpbGVgfSBzcmM9e3Byb2ZpbGVQaWN0dXJlfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlsZV90ZXh0X3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1PntgJHtuYW1lfSAke2xhc3ROYW1lfWB9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNj57cm9sfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgJHtsaW5rVG9Qcm9maWxlfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGlsZV9saW5rfT5GVUxMIFBST0ZJTEUgPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJzsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XHJcbi8vaW1hZ2VzXHJcbmltcG9ydCB7IENBUk9VU0VMX0lNQUdFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuLy9jc3NcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vYmFubmVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE15Q2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJvdXNlbH0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQVJPVVNFTF9JTUFHRVMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWxfc2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDYXJvdXNlbFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJiYW5uZXJfY29udGFpbmVyX18xLXFtdFwiLFxuXHRcImNvbnRlbnRcIjogXCJiYW5uZXJfY29udGVudF9fZnVUdXpcIixcblx0XCJjYXJvdXNlbF9jb250YWluZXJcIjogXCJiYW5uZXJfY2Fyb3VzZWxfY29udGFpbmVyX18xRGhBVFwiLFxuXHRcImNhcm91c2VsXCI6IFwiYmFubmVyX2Nhcm91c2VsX18yVWRVRVwiLFxuXHRcImNhcm91c2VsX2ltYWdlXCI6IFwiYmFubmVyX2Nhcm91c2VsX2ltYWdlX19wVlRIOVwiLFxuXHRcImNhcm91c2VsX3Jvb3RcIjogXCJiYW5uZXJfY2Fyb3VzZWxfcm9vdF9fMUVWalFcIixcblx0XCJzbGlkZXJfd3JhcHBlclwiOiBcImJhbm5lcl9zbGlkZXJfd3JhcHBlcl9fMy1ZS2tcIixcblx0XCJzbGlkZXJcIjogXCJiYW5uZXJfc2xpZGVyX19YbDM2cVwiLFxuXHRcIndoaXRlX2JvcmRlclwiOiBcImJhbm5lcl93aGl0ZV9ib3JkZXJfXzNxY0c4XCIsXG5cdFwiY2Fyb3VzZWxfc2xpZGVyXCI6IFwiYmFubmVyX2Nhcm91c2VsX3NsaWRlcl9fM0tYSzdcIlxufTtcbiIsImltcG9ydCBzbGlkZUltYWdlMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9EU0MwODU4NC1taW4uanBnJztcclxuaW1wb3J0IHNsaWRlSW1hZ2UyIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3Byb2plY3RzLzQwNS1EYXJ0bW9vci1TdHJlZXQuanBnJztcclxuaW1wb3J0IHNsaWRlSW1hZ2UzIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL0xvcGV6IFJlc2lkZW5jZS05MTE4LmpwZyc7XHJcbmltcG9ydCBzbGlkZUltYWdlNCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy8xNDNLNTkwOS5qcGcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUk9VU0VMX0lNQUdFUyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBhbHQ6ICdGaXJzdCBJbWFnZSBvZiBjYXJvdXNlbCcsXHJcbiAgICAgICAgaW1nOiBzbGlkZUltYWdlMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBhbHQ6ICdTZWNvbmQgSW1hZ2Ugb2YgY2Fyb3VzZWwnLFxyXG4gICAgICAgIGltZzogc2xpZGVJbWFnZTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgYWx0OiAnVGhpcmQgSW1hZ2Ugb2YgY2Fyb3VzZWwnLFxyXG4gICAgICAgIGltZzogc2xpZGVJbWFnZTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgYWx0OiAnRm9ydGggSW1hZ2Ugb2YgY2Fyb3VzZWwnLFxyXG4gICAgICAgIGltZzogc2xpZGVJbWFnZTRcclxuICAgIH1cclxuXVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XHJcbi8vY3NzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9iYW5uZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2hpdGVfYm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlY3Rpb25MYXlvdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgU2VjdGlvbkxheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBzZWN0aW9uVGl0bGUsIHNlY3Rpb25JZCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NlY3Rpb24tY29udGFpbmVyJ30gaWQ9e3NlY3Rpb25JZH0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3NlY3Rpb25UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmF5X2JhY2tncm91bmR9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5TZWN0aW9uTGF5b3V0LnByb3RvdHlwZXMgPSB7XHJcbiAgc2VjdGlvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkxheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2Fyb3VzZWxQcm92aWRlcixcclxuICAgIFNsaWRlcixcclxuICAgIFNsaWRlLFxyXG4gICAgQnV0dG9uQmFjayxcclxuICAgIEJ1dHRvbk5leHQsXHJcbn0gZnJvbSAncHVyZS1yZWFjdC1jYXJvdXNlbCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2JpbGUtY2Fyb3VzZWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgJ3B1cmUtcmVhY3QtY2Fyb3VzZWwvZGlzdC9yZWFjdC1jYXJvdXNlbC5lcy5jc3MnO1xyXG4vL0ljb25zXHJcbmltcG9ydCBBcnJvdyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL3JpZ2h0LWFycm93LnN2Zyc7XHJcblxyXG5jb25zdCBNeUNhcm91c2VsID0gKHsgc2xpZGVzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxQcm92aWRlclxyXG4gICAgICAgICAgICAgICAgbmF0dXJhbFNsaWRlV2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgIG5hdHVyYWxTbGlkZUhlaWdodD17MTEwfVxyXG4gICAgICAgICAgICAgICAgdG90YWxTbGlkZXM9e3NsaWRlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25CYWNrIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFycm93fSAke3N0eWxlcy5iYWNrfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2JhY2stYXJyb3cnfSBzcmM9e0Fycm93fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcl93cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlIGtleT17YHNsaWRlLSR7aW5kZXh9YH0gaW5kZXg9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25OZXh0IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFycm93fSAke3N0eWxlcy5uZXh0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2JhY2stYXJyb3cnfSBzcmM9e0Fycm93fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uTmV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5NeUNhcm91c2VsLnByb3RvdHlwZXMgPSB7XHJcbiAgICBzbGlkZXM6IFByb3BUeXBlcy5hcnJheSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibW9iaWxlLWNhcm91c2VsX2NvbnRhaW5lcl9fRDNEUVBcIixcblx0XCJtb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyXCI6IFwibW9iaWxlLWNhcm91c2VsX21vYmlsZV9jYXJvdXNlbF9jb250YWluZXJfXzNBTG03XCIsXG5cdFwic2xpZGVyc1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9zbGlkZXJzX18zN3VqSVwiLFxuXHRcInNsaWRlcl93cmFwcGVyXCI6IFwibW9iaWxlLWNhcm91c2VsX3NsaWRlcl93cmFwcGVyX18zWmp6Y1wiLFxuXHRcInBhcmFncmFwaHNcIjogXCJtb2JpbGUtY2Fyb3VzZWxfcGFyYWdyYXBoc19fR3FFTHVcIixcblx0XCJxdW90ZV9jb250YWluZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfcXVvdGVfY29udGFpbmVyX18xaHA1dlwiLFxuXHRcImFycm93XCI6IFwibW9iaWxlLWNhcm91c2VsX2Fycm93X18xUXRFNFwiLFxuXHRcImJhY2tcIjogXCJtb2JpbGUtY2Fyb3VzZWxfYmFja19fMzdidVNcIixcblx0XCJuZXh0XCI6IFwibW9iaWxlLWNhcm91c2VsX25leHRfXzMxR2ZKXCIsXG5cdFwic2xpZGVyLXdyYXBwZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfc2xpZGVyLXdyYXBwZXJfXzI0U1lqXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic2VjdGlvbkxheW91dF93cmFwcGVyX18yNS1VZVwiLFxuXHRcImdyYXlfYmFja2dyb3VuZFwiOiBcInNlY3Rpb25MYXlvdXRfZ3JheV9iYWNrZ3JvdW5kX18zTDA4dlwiLFxuXHRcImNvbnRlbnRfY29udGFpbmVyXCI6IFwic2VjdGlvbkxheW91dF9jb250ZW50X2NvbnRhaW5lcl9fM2ZVcnVcIixcblx0XCJjb250ZW50XCI6IFwic2VjdGlvbkxheW91dF9jb250ZW50X18zV1JTWlwiLFxuXHRcInRpdGxlXCI6IFwic2VjdGlvbkxheW91dF90aXRsZV9fMXRBY25cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhY3NfY29udGFpbmVyX19PMG9FZFwiLFxuXHRcIml0ZW1cIjogXCJjb250YWNzX2l0ZW1fXzFhdlhhXCIsXG5cdFwibGlua1wiOiBcImNvbnRhY3NfbGlua19fMUN1QTBcIixcblx0XCJjb250YWN0LWJsYWNrLWJvcmRlclwiOiBcImNvbnRhY3NfY29udGFjdC1ibGFjay1ib3JkZXJfXzJ6VGJJXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gICcuL2NvbnRhY3MubW9kdWxlLnNjc3MnO1xyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IFNlY3Rpb25MYXlvdXQgZnJvbSAnLi4vY29tbW9uL1NlY3Rpb25MYXlvdXQnO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb25MYXlvdXQgc2VjdGlvblRpdGxlPXsnQ09OVEFDVCd9IHNlY3Rpb25JZD17J0NPTlRBQ1QnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jyd9PjxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLml0ZW19ICR7c3R5bGVzLmxpbmt9YH0+amNvbnJhZGFyY0BnbWFpbC5jb208L3A+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jyd9PjxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLml0ZW19ICR7c3R5bGVzLmxpbmt9YH0+KDk0OSkgMjMzLTg2MjU8L3A+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+MTU1MCBTLiBDb2FzdCBId3kuICMyMDE8YnIvPiBMYWd1bmEgQmVhY2gsIENBIDkyNjUxPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NlY3Rpb25MYXlvdXQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImNvbnN0IE1FTlVfTElOS1MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdIT01FJyxcclxuICAgICAgICBsaW5rVG86ICcjSE9NRSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdQUk9KRUNUUycsXHJcbiAgICAgICAgbGlua1RvOiAnI1BST0pFQ1RTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0FCT1VUJyxcclxuICAgICAgICBsaW5rVG86ICcjQUJPVVQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnQ09OVEFDVCcsXHJcbiAgICAgICAgbGlua1RvOiAnI0NPTlRBQ1QnXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIE1FTlVfTElOS1MsXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoZWFkZXJfY29udGFpbmVyX18zVkJWQlwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fZWlMU3FcIixcblx0XCJuYXZcIjogXCJoZWFkZXJfbmF2X18zaHhINVwiLFxuXHRcImJpZ1NjcmVlbk1lbnVcIjogXCJoZWFkZXJfYmlnU2NyZWVuTWVudV9fMWxIQmNcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1FTlVfTElOS1MgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8vY3NzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG4vL2ltYWdlc1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9qaW0tY29ucmFkLWxvZ28tbGlnaHQucG5nJztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9iaWxlLW1lbnUnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IHJvbGU9eyduYXZpZ2F0aW9uJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbyd9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz17TG9nb30gLz5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD17c3R5bGVzLmJpZ1NjcmVlbk1lbnV9IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNRU5VX0xJTktTLm1hcCgobGluayxpbmRleCkgPT4gPGEga2V5PXtpbmRleH0gaHJlZj17bGluay5saW5rVG99PjxsaT57bGluay5sYWJlbH08L2xpPjwvYT4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxNb2JpbGVNZW51IG1lbnVJdGVtcz17TUVOVV9MSU5LU30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZVxyXG5pbXBvcnQgIHN0eWxlcyBmcm9tICcuL21vYmlsZU1lbnUubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTW9iaWxlTWVudSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXMubWFwKChsaW5rLGluZGV4KSA9PiA8YSBrZXk9e2luZGV4fSBocmVmPXtsaW5rLmxpbmtUb30+PGxpPntsaW5rLmxhYmVsfTwvbGk+PC9hPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVudVRvZ2dsZVwiOiBcIm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMm9wSjZcIixcblx0XCJtZW51XCI6IFwibW9iaWxlTWVudV9tZW51X18zRTBhNlwiXG59O1xuIiwiZXhwb3J0IGNvbnN0IFBST0pFQ1RTX0RBVEEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOjE0MyxcclxuICAgICAgICBcImRhdGVcIjpcIjIwMjEtMDgtMTNUMDA6MDQ6MzlcIixcclxuICAgICAgICBcImRhdGVfZ210XCI6XCIyMDIxLTA4LTEzVDAwOjA0OjM5XCIsXHJcbiAgICAgICAgXCJndWlkXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvP3Bvc3RfdHlwZT1wcm9qZWN0cyYjMDM4O3A9MTQzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMTRUMjI6MzA6MDhcIixcclxuICAgICAgICBcIm1vZGlmaWVkX2dtdFwiOlwiMjAyMS0wOC0xNFQyMjozMDowOFwiLFxyXG4gICAgICAgIFwic2x1Z1wiOlwiOTgtZGVzZXJ0LW1vdW50YWluXCIsXHJcbiAgICAgICAgXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcclxuICAgICAgICBcInR5cGVcIjpcInByb2plY3RzXCIsXHJcbiAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC85OC1kZXNlcnQtbW91bnRhaW5cXC9cIixcclxuICAgICAgICBcInRpdGxlXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCI5OCBEZXNlcnQgTW91bnRhaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiOlwiXCIsXHJcbiAgICAgICAgXCJhY2ZcIjp7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiOTggRGVzZXJ0IE1vdW50YWluXCIsXHJcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjpcIlNjb3R0c2RhbGUsIEFaXCIsXHJcbiAgICAgICAgICAgIFwic2l6ZVwiOlwiXCIsXHJcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAwOFwiLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOlwiXCIsXHJcbiAgICAgICAgICAgIFwic2VydmljZXNcIjpcIiBBcmNoaXRlY3R1cmUgYW5kIGludGVyaW9yIGRlc2lnblwiLFxyXG4gICAgICAgICAgICBcIm1haW5faW1hZ2VcIjp7XHJcbiAgICAgICAgICAgICAgICBcIklEXCI6MTUsXHJcbiAgICAgICAgICAgICAgICBcImlkXCI6MTUsXHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJob3ItYXJ0Ym9hcmRfM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOlwiaG9yLWFydGJvYXJkXzMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVzaXplXCI6MTU4MTgwNyxcclxuICAgICAgICAgICAgICAgIFwidXJsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvdGVzdC1wcm95ZWN0LTFcXC9ob3ItYXJ0Ym9hcmRfM1xcL1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhbHRcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRob3JcIjpcIjFcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOlwiaG9yLWFydGJvYXJkXzNcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6XCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcInVwbG9hZGVkX3RvXCI6MTQsXHJcbiAgICAgICAgICAgICAgICBcImRhdGVcIjpcIjIwMjAtMTEtMTkgMDM6Mzg6MDVcIixcclxuICAgICAgICAgICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjAtMTEtMTkgMDM6Mzg6MDVcIixcclxuICAgICAgICAgICAgICAgIFwibWVudV9vcmRlclwiOjAsXHJcbiAgICAgICAgICAgICAgICBcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9wbmdcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOlwiaW1hZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3VidHlwZVwiOlwicG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1pbmNsdWRlc1xcL2ltYWdlc1xcL21lZGlhXFwvZGVmYXVsdC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjoxMTUwLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjo3NjgsXHJcbiAgICAgICAgICAgICAgICBcInNpemVzXCI6e1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy0xNTB4MTUwLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLXdpZHRoXCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLWhlaWdodFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvaG9yLWFydGJvYXJkXzMtMzAweDIwMC5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bS13aWR0aFwiOjMwMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bS1oZWlnaHRcIjoyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2VcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL2hvci1hcnRib2FyZF8zLTc2OHg1MTMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2Utd2lkdGhcIjo3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2UtaGVpZ2h0XCI6NTEzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2VcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL2hvci1hcnRib2FyZF8zLTEwMjR4Njg0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2Utd2lkdGhcIjoxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2UtaGVpZ2h0XCI6Njg0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi13aWR0aFwiOjExNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtaGVpZ2h0XCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC13aWR0aFwiOjExNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtaGVpZ2h0XCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9ob3ItYXJ0Ym9hcmRfMy04MzB4NTU0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLXdpZHRoXCI6ODMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLWhlaWdodFwiOjU1NCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL2hvci1hcnRib2FyZF8zLTU1MHg0MDAucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLXdpZHRoXCI6NTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi1oZWlnaHRcIjo0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL2hvci1hcnRib2FyZF8zLTIzMHgxNTQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItd2lkdGhcIjoyMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItaGVpZ2h0XCI6MTU0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL2hvci1hcnRib2FyZF8zLTM1MHgyMzQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi13aWR0aFwiOjM1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLWhlaWdodFwiOjIzNCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL2hvci1hcnRib2FyZF8zLTQ4MHgzMjEucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLXdpZHRoXCI6NDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi1oZWlnaHRcIjozMjFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJob21lX3BhZ2Vfb3JkZXJcIjpcIjhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnYWxsZXJ5X2ltYWdlc1wiOltcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC85OC1ncmVhdC1yb29tLW5pZ2h0LW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC85OC1FbnRyeS1jb3VydC1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTQzSzU5MTYtbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzE0M0s1OTU4LW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xNDNLNjYwOS1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTQzSzY2MTYtbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL2dyZWF0LXJvb20tbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzE0M0s1OTA5LW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTM2OC1taW4uanBnXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiX2xpbmtzXCI6e1xyXG4gICAgICAgICAgICBcInNlbGZcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1xcLzE0M1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJhYm91dFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3R5cGVzXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndwOmF0dGFjaG1lbnRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9tZWRpYT9wYXJlbnQ9MTQzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjdXJpZXNcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJ3cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvYXBpLncub3JnXFwve3JlbH1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlZFwiOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOjQ1LFxyXG4gICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0wMlQyMTozNDo0OFwiLFxyXG4gICAgICAgIFwiZGF0ZV9nbXRcIjpcIjIwMjEtMDgtMDJUMjE6MzQ6NDhcIixcclxuICAgICAgICBcImd1aWRcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC8/cG9zdF90eXBlPXByb2plY3RzJiMwMzg7cD00NVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTE0VDAwOjQ3OjM0XCIsXHJcbiAgICAgICAgXCJtb2RpZmllZF9nbXRcIjpcIjIwMjEtMDgtMTRUMDA6NDc6MzRcIixcclxuICAgICAgICBcInNsdWdcIjpcIjI1NzAtcGFya1wiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6XCJwcm9qZWN0c1wiLFxyXG4gICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvMjU3MC1wYXJrXFwvXCIsXHJcbiAgICAgICAgXCJ0aXRsZVwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiMjU3MCBQYXJrXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGVtcGxhdGVcIjpcIlwiLFxyXG4gICAgICAgIFwiYWNmXCI6e1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIjI1NzAgUGFya1wiLFxyXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6XCIgTGFndW5hIEJlYWNoLCBDQVwiLFxyXG4gICAgICAgICAgICBcInNpemVcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIixcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInNlcnZpY2VzXCI6XCJBcmNoaXRlY3R1cmVcIixcclxuICAgICAgICAgICAgXCJtYWluX2ltYWdlXCI6e1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOjU4LFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOjU4LFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiMjU3MHBhcmstbWFpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOlwiMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZXNpemVcIjoxNjgzNzg4LFxyXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1NzBwYXJrLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcLzI1NzAtcGFya1xcLzI1NzBwYXJrLW1haW5cXC9cIixcclxuICAgICAgICAgICAgICAgIFwiYWx0XCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6XCIzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIjI1NzBwYXJrLW1haW5cIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6XCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcInVwbG9hZGVkX3RvXCI6NDUsXHJcbiAgICAgICAgICAgICAgICBcImRhdGVcIjpcIjIwMjEtMDgtMDQgMTY6NTg6MzNcIixcclxuICAgICAgICAgICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMDQgMTY6NTg6MzNcIixcclxuICAgICAgICAgICAgICAgIFwibWVudV9vcmRlclwiOjAsXHJcbiAgICAgICAgICAgICAgICBcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9qcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjpcImltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnR5cGVcIjpcImpwZWdcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWluY2x1ZGVzXFwvaW1hZ2VzXFwvbWVkaWFcXC9kZWZhdWx0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOjAsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOjAsXHJcbiAgICAgICAgICAgICAgICBcInNpemVzXCI6e1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bS1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZS1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2VcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1NzBwYXJrLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItd2lkdGhcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTcwcGFyay1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLXdpZHRoXCI6MSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1NzBwYXJrLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi13aWR0aFwiOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi1oZWlnaHRcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3MHBhcmstbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItd2lkdGhcIjoxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi1oZWlnaHRcIjoxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaG9tZV9wYWdlX29yZGVyXCI6XCIxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2FsbGVyeV9pbWFnZXNcIjpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3LXBhcmstMi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTctcGFyay0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1Ny1wYXJrLTguanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3LXBhcmstNy5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTctcGFyay02LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzI1Ny1wYXJrLTUuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMjU3LXBhcmstNC5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8yNTctcGFyay0zLmpwZ1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIl9saW5rc1wiOntcclxuICAgICAgICAgICAgXCJzZWxmXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcXC80NVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJhYm91dFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3R5cGVzXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndwOmF0dGFjaG1lbnRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9tZWRpYT9wYXJlbnQ9NDVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImN1cmllc1wiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIndwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC9hcGkudy5vcmdcXC97cmVsfVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVkXCI6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6NDQsXHJcbiAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTAyVDIxOjM0OjExXCIsXHJcbiAgICAgICAgXCJkYXRlX2dtdFwiOlwiMjAyMS0wOC0wMlQyMTozNDoxMVwiLFxyXG4gICAgICAgIFwiZ3VpZFwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcLz9wb3N0X3R5cGU9cHJvamVjdHMmIzAzODtwPTQ0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMTRUMjI6MTQ6MTJcIixcclxuICAgICAgICBcIm1vZGlmaWVkX2dtdFwiOlwiMjAyMS0wOC0xNFQyMjoxNDoxMlwiLFxyXG4gICAgICAgIFwic2x1Z1wiOlwiMTA5MS1za3lsaW5lLWRyXCIsXHJcbiAgICAgICAgXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcclxuICAgICAgICBcInR5cGVcIjpcInByb2plY3RzXCIsXHJcbiAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC8xMDkxLXNreWxpbmUtZHJcXC9cIixcclxuICAgICAgICBcInRpdGxlXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCIxMDkxIFNreWxpbmUgRHJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiOlwiXCIsXHJcbiAgICAgICAgXCJhY2ZcIjp7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiMTA5MSBTa3lsaW5lIERyXCIsXHJcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjpcIkxhZ3VuYSBCZWFjaCwgQ0FcIixcclxuICAgICAgICAgICAgXCJzaXplXCI6XCJcIixcclxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDE0XCIsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6XCJcIixcclxuICAgICAgICAgICAgXCJzZXJ2aWNlc1wiOlwiQXJjaGl0ZWN0dXJlIGFuZCBpbnRlcmlvciBkZXNpZ25cIixcclxuICAgICAgICAgICAgXCJtYWluX2ltYWdlXCI6e1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOjEwMCxcclxuICAgICAgICAgICAgICAgIFwiaWRcIjoxMDAsXHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCIxMDkxc2t5bGluZS1tYWluXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6XCIxMDkxc2t5bGluZS1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlc2l6ZVwiOjI2MjEwNSxcclxuICAgICAgICAgICAgICAgIFwidXJsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC8xMDkxLXNreWxpbmUtZHJcXC8xMDkxc2t5bGluZS1tYWluXFwvXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsdFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGhvclwiOlwiM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6XCIxMDkxc2t5bGluZS1tYWluXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOlwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1cGxvYWRlZF90b1wiOjQ0LFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTA2IDE2OjA4OjE1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTA2IDE2OjA4OjE1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1lbnVfb3JkZXJcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0eXBlXCI6XCJqcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1pbmNsdWRlc1xcL2ltYWdlc1xcL21lZGlhXFwvZGVmYXVsdC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjoxMjAwLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjo4MDAsXHJcbiAgICAgICAgICAgICAgICBcInNpemVzXCI6e1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLTE1MHgxNTAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtd2lkdGhcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtaGVpZ2h0XCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLTMwMHgyMDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0td2lkdGhcIjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0taGVpZ2h0XCI6MjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLTc2OHg1MTIuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2Utd2lkdGhcIjo3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2UtaGVpZ2h0XCI6NTEyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2VcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLW1haW4tMTAyNHg2ODMuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS13aWR0aFwiOjEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS1oZWlnaHRcIjo2ODMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzYtd2lkdGhcIjoxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LWhlaWdodFwiOjgwMCxcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC13aWR0aFwiOjEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtaGVpZ2h0XCI6ODAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLTgzMHg1NTMuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItd2lkdGhcIjo4MzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItaGVpZ2h0XCI6NTUzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi01NTB4NDAwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi13aWR0aFwiOjU1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItaGVpZ2h0XCI6NDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS1tYWluLTIzMHgxNTMuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItd2lkdGhcIjoyMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWItaGVpZ2h0XCI6MTUzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLW1haW4tMzUweDIzMy5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLXdpZHRoXCI6MzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItaGVpZ2h0XCI6MjMzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtbWFpbi00ODB4MzIwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi13aWR0aFwiOjQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItaGVpZ2h0XCI6MzIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaG9tZV9wYWdlX29yZGVyXCI6XCIyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2FsbGVyeV9pbWFnZXNcIjpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtMS5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS0yLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzEwOTFza3lsaW5lLTMuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvMTA5MXNreWxpbmUtNC5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC8xMDkxc2t5bGluZS01LmpwZ1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIl9saW5rc1wiOntcclxuICAgICAgICAgICAgXCJzZWxmXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcXC80NFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJhYm91dFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3R5cGVzXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndwOmF0dGFjaG1lbnRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9tZWRpYT9wYXJlbnQ9NDRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImN1cmllc1wiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIndwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC9hcGkudy5vcmdcXC97cmVsfVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVkXCI6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6NDMsXHJcbiAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTAyVDIxOjMzOjE0XCIsXHJcbiAgICAgICAgXCJkYXRlX2dtdFwiOlwiMjAyMS0wOC0wMlQyMTozMzoxNFwiLFxyXG4gICAgICAgIFwiZ3VpZFwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcLz9wb3N0X3R5cGU9cHJvamVjdHMmIzAzODtwPTQzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMTRUMjI6MTQ6NDhcIixcclxuICAgICAgICBcIm1vZGlmaWVkX2dtdFwiOlwiMjAyMS0wOC0xNFQyMjoxNDo0OFwiLFxyXG4gICAgICAgIFwic2x1Z1wiOlwiNzQwLWJhcnJhY3VkYVwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6XCJwcm9qZWN0c1wiLFxyXG4gICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvNzQwLWJhcnJhY3VkYVxcL1wiLFxyXG4gICAgICAgIFwidGl0bGVcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcIjc0MCBCYXJyYWN1ZGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiOlwiXCIsXHJcbiAgICAgICAgXCJhY2ZcIjp7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiNzQwIEJhcnJhY3VkYVwiLFxyXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6XCJMYWd1bmEgQmVhY2gsIENBXCIsXHJcbiAgICAgICAgICAgIFwic2l6ZVwiOlwiXCIsXHJcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAxM1wiLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOlwiXCIsXHJcbiAgICAgICAgICAgIFwic2VydmljZXNcIjpcIkFyY2hpdGVjdHVyZVwiLFxyXG4gICAgICAgICAgICBcIm1haW5faW1hZ2VcIjp7XHJcbiAgICAgICAgICAgICAgICBcIklEXCI6MTI0LFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOjEyNCxcclxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIkxvcGV6IFJlc2lkZW5jZS05MTE4ICgxKS1taW5cIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjpcIkxvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZXNpemVcIjoyNDgxODUsXHJcbiAgICAgICAgICAgICAgICBcInVybFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC83NDAtYmFycmFjdWRhXFwvbG9wZXotcmVzaWRlbmNlLTkxMTgtMS1taW5cXC9cIixcclxuICAgICAgICAgICAgICAgIFwiYWx0XCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6XCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcImxvcGV6LXJlc2lkZW5jZS05MTE4LTEtbWluXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOlwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1cGxvYWRlZF90b1wiOjQzLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTEyIDExOjQ5OjIwXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTEyIDExOjU4OjQwXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1lbnVfb3JkZXJcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0eXBlXCI6XCJqcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1pbmNsdWRlc1xcL2ltYWdlc1xcL21lZGlhXFwvZGVmYXVsdC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjoyNTYwLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjoxNzA3LFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tMTUweDE1MC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC13aWR0aFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC1oZWlnaHRcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLTMwMHgyMDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0td2lkdGhcIjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0taGVpZ2h0XCI6MjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi03Njh4NTEyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLWhlaWdodFwiOjUxMixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi0xMDI0eDY4My5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLXdpZHRoXCI6MTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLWhlaWdodFwiOjY4MyxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tMTUzNngxMDI0LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LXdpZHRoXCI6MTUzNixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi1oZWlnaHRcIjoxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtd2lkdGhcIjoyMDQ4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LWhlaWdodFwiOjEzNjYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi13aWR0aFwiOjgzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi1oZWlnaHRcIjo1NTMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLXdpZHRoXCI6NTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi1oZWlnaHRcIjozNjcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTE4LTEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi13aWR0aFwiOjIzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi1oZWlnaHRcIjoxNTMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMTgtMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItd2lkdGhcIjozNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi1oZWlnaHRcIjoyMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTExOC0xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLXdpZHRoXCI6NDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi1oZWlnaHRcIjozMjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJob21lX3BhZ2Vfb3JkZXJcIjpcIjdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnYWxsZXJ5X2ltYWdlc1wiOltcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTEyNi1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkxMzQtbWluLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcL0xvcGV6LVJlc2lkZW5jZS05MTM1LW1pbi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC9Mb3Blei1SZXNpZGVuY2UtOTE1MC1taW4uanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvTG9wZXotUmVzaWRlbmNlLTkzNjgtbWluLmpwZ1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIl9saW5rc1wiOntcclxuICAgICAgICAgICAgXCJzZWxmXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcXC80M1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJhYm91dFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3R5cGVzXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndwOmF0dGFjaG1lbnRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9tZWRpYT9wYXJlbnQ9NDNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImN1cmllc1wiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIndwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC9hcGkudy5vcmdcXC97cmVsfVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVkXCI6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6NDIsXHJcbiAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTAyVDIxOjMyOjMyXCIsXHJcbiAgICAgICAgXCJkYXRlX2dtdFwiOlwiMjAyMS0wOC0wMlQyMTozMjozMlwiLFxyXG4gICAgICAgIFwiZ3VpZFwiOntcclxuICAgICAgICAgICAgXCJyZW5kZXJlZFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcLz9wb3N0X3R5cGU9cHJvamVjdHMmIzAzODtwPTQyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMTRUMjI6MTU6MDNcIixcclxuICAgICAgICBcIm1vZGlmaWVkX2dtdFwiOlwiMjAyMS0wOC0xNFQyMjoxNTowM1wiLFxyXG4gICAgICAgIFwic2x1Z1wiOlwiNzIxLW1hbnphbml0YVwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6XCJwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6XCJwcm9qZWN0c1wiLFxyXG4gICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvNzIxLW1hbnphbml0YVxcL1wiLFxyXG4gICAgICAgIFwidGl0bGVcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcIjcyMSBNYW56YW5pdGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiOlwiXCIsXHJcbiAgICAgICAgXCJhY2ZcIjp7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiNzIxIE1hbnphbml0YVwiLFxyXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6XCJMYWd1bmEgQmVhY2gsIENBXCIsXHJcbiAgICAgICAgICAgIFwic2l6ZVwiOlwiXCIsXHJcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAxNlwiLFxyXG4gICAgICAgICAgICBcInN0YXR1c1wiOlwiXCIsXHJcbiAgICAgICAgICAgIFwic2VydmljZXNcIjpcIkFyY2hpdGVjdHVyZSBhbmQgSW50ZXJpb3IgRGVzaWduXCIsXHJcbiAgICAgICAgICAgIFwibWFpbl9pbWFnZVwiOntcclxuICAgICAgICAgICAgICAgIFwiSURcIjo4NixcclxuICAgICAgICAgICAgICAgIFwiaWRcIjo4NixcclxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIjcyMW1hbnphbml0YS1tYWluXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6XCI3MjFtYW56YW5pdGEtbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZXNpemVcIjoxMTU2NzEsXHJcbiAgICAgICAgICAgICAgICBcInVybFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcLzcyMS1tYW56YW5pdGFcXC83MjFtYW56YW5pdGEtbWFpblxcL1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhbHRcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRob3JcIjpcIjNcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOlwiNzIxbWFuemFuaXRhLW1haW5cIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6XCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcInVwbG9hZGVkX3RvXCI6NDIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGVcIjpcIjIwMjEtMDgtMDYgMTU6NTc6MDhcIixcclxuICAgICAgICAgICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMDYgMTU6NTc6MDhcIixcclxuICAgICAgICAgICAgICAgIFwibWVudV9vcmRlclwiOjAsXHJcbiAgICAgICAgICAgICAgICBcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9qcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjpcImltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnR5cGVcIjpcImpwZWdcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWluY2x1ZGVzXFwvaW1hZ2VzXFwvbWVkaWFcXC9kZWZhdWx0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOjk0NSxcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6NjI1LFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4tMTUweDE1MC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC13aWR0aFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC1oZWlnaHRcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS1tYWluLTMwMHgxOTguanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0td2lkdGhcIjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0taGVpZ2h0XCI6MTk4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi03Njh4NTA4LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLWhlaWdodFwiOjUwOCxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLXdpZHRoXCI6OTQ1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2UtaGVpZ2h0XCI6NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi13aWR0aFwiOjk0NSxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi1oZWlnaHRcIjo2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDhcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjFcXC8wOFxcLzcyMW1hbnphbml0YS1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LXdpZHRoXCI6OTQ1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LWhlaWdodFwiOjYyNSxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLW1haW4tODMweDU0OS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi13aWR0aFwiOjgzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi1oZWlnaHRcIjo1NDksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi01NTB4NDAwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi13aWR0aFwiOjU1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItaGVpZ2h0XCI6NDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi0yMzB4MTUyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLXdpZHRoXCI6MjMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLWhlaWdodFwiOjE1MixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi0zNTB4MjMxLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItd2lkdGhcIjozNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi1oZWlnaHRcIjoyMzEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIxXFwvMDhcXC83MjFtYW56YW5pdGEtbWFpbi00ODB4MzE3LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi13aWR0aFwiOjQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItaGVpZ2h0XCI6MzE3XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaG9tZV9wYWdlX29yZGVyXCI6XCIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2FsbGVyeV9pbWFnZXNcIjpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLTEuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLTIuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLTMuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLTQuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLTUuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMVxcLzA4XFwvNzIxbWFuemFuaXRhLTcuanBnXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiX2xpbmtzXCI6e1xyXG4gICAgICAgICAgICBcInNlbGZcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1xcLzQyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvdHlwZXNcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwid3A6YXR0YWNobWVudFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL21lZGlhP3BhcmVudD00MlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY3VyaWVzXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOlwid3BcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL2FwaS53Lm9yZ1xcL3tyZWx9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZWRcIjp0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjoyOCxcclxuICAgICAgICBcImRhdGVcIjpcIjIwMjAtMTItMDhUMjM6MDU6MTBcIixcclxuICAgICAgICBcImRhdGVfZ210XCI6XCIyMDIwLTEyLTA4VDIzOjA1OjEwXCIsXHJcbiAgICAgICAgXCJndWlkXCI6e1xyXG4gICAgICAgICAgICBcInJlbmRlcmVkXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvP3Bvc3RfdHlwZT1wcm9qZWN0cyYjMDM4O3A9MjhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0xNFQyMjoxNToyNFwiLFxyXG4gICAgICAgIFwibW9kaWZpZWRfZ210XCI6XCIyMDIxLTA4LTE0VDIyOjE1OjI0XCIsXHJcbiAgICAgICAgXCJzbHVnXCI6XCJ0ZXN0LTNcIixcclxuICAgICAgICBcInN0YXR1c1wiOlwicHVibGlzaFwiLFxyXG4gICAgICAgIFwidHlwZVwiOlwicHJvamVjdHNcIixcclxuICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcL3Rlc3QtM1xcL1wiLFxyXG4gICAgICAgIFwidGl0bGVcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcIjQwNSBEYXJ0bW9vclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRlbXBsYXRlXCI6XCJcIixcclxuICAgICAgICBcImFjZlwiOntcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCI0MDUgRGFydG1vb3JcIixcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOlwiTGFndW5hIEJlYWNoLCBDQVwiLFxyXG4gICAgICAgICAgICBcInNpemVcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMTdcIixcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInNlcnZpY2VzXCI6XCJBcmNoaXRlY3R1cmVcIixcclxuICAgICAgICAgICAgXCJtYWluX2ltYWdlXCI6e1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOjc4LFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOjc4LFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiNDA1ZGFydG1vb3ItbWFpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOlwiNDA1ZGFydG1vb3ItbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwiZmlsZXNpemVcIjozNDA3OTMsXHJcbiAgICAgICAgICAgICAgICBcInVybFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3Byb2plY3RzXFwvdGVzdC0zXFwvNDA1ZGFydG1vb3ItbWFpblxcL1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhbHRcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRob3JcIjpcIjNcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOlwiNDA1ZGFydG1vb3ItbWFpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjpcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwidXBsb2FkZWRfdG9cIjoyOCxcclxuICAgICAgICAgICAgICAgIFwiZGF0ZVwiOlwiMjAyMS0wOC0wNiAxNTo0ODo1OVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2RpZmllZFwiOlwiMjAyMS0wOC0wNiAxNTo0ODo1OVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtZW51X29yZGVyXCI6MCxcclxuICAgICAgICAgICAgICAgIFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOlwiaW1hZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3VidHlwZVwiOlwianBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtaW5jbHVkZXNcXC9pbWFnZXNcXC9tZWRpYVxcL2RlZmF1bHQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6MTA2MixcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6OTYwLFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi0xNTB4MTUwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLXdpZHRoXCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsLWhlaWdodFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi0zMDB4MjcxLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLXdpZHRoXCI6MzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtLWhlaWdodFwiOjI3MSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1lZGl1bV9sYXJnZVwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi03Njh4Njk0LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLWhlaWdodFwiOjY5NCxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci1tYWluLTEwMjR4OTI2LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2Utd2lkdGhcIjoxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2UtaGVpZ2h0XCI6OTI2LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci1tYWluLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LXdpZHRoXCI6MTA2MixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi1oZWlnaHRcIjo5NjAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDhcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4uanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtd2lkdGhcIjoxMDYyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LWhlaWdodFwiOjk2MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi04MzB4NzUwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLXdpZHRoXCI6ODMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LWxhcmdlLXRodW1iLWhlaWdodFwiOjc1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4tNTUweDQwMC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tZWRpdW0tdGh1bWItd2lkdGhcIjo1NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLWhlaWdodFwiOjQwMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItbWFpbi0yMzB4MjA4LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLXdpZHRoXCI6MjMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLWhlaWdodFwiOjIwOCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci1tYWluLTM1MHgzMTYuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi13aWR0aFwiOjM1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLWhlaWdodFwiOjMxNixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLW1haW4tNDgweDQzNC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1tYXMtdGh1bWItd2lkdGhcIjo0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLWhlaWdodFwiOjQzNFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhvbWVfcGFnZV9vcmRlclwiOlwiNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdhbGxlcnlfaW1hZ2VzXCI6W1xyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLTEuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItMi5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci0zLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLTQuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItNC5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTJcXC80MDVkYXJ0bW9vci01LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMlxcLzQwNWRhcnRtb29yLTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzEyXFwvNDA1ZGFydG1vb3ItNy5qcGdcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJfbGlua3NcIjp7XHJcbiAgICAgICAgICAgIFwic2VsZlwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXFwvMjhcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC90eXBlc1xcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3cDphdHRhY2htZW50XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvbWVkaWE/cGFyZW50PTI4XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjdXJpZXNcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJ3cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvYXBpLncub3JnXFwve3JlbH1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlZFwiOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOjE5LFxyXG4gICAgICAgIFwiZGF0ZVwiOlwiMjAyMC0xMS0yM1QyMDowNzowMVwiLFxyXG4gICAgICAgIFwiZGF0ZV9nbXRcIjpcIjIwMjAtMTEtMjNUMjA6MDc6MDFcIixcclxuICAgICAgICBcImd1aWRcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC8/cG9zdF90eXBlPXByb2plY3RzJiMwMzg7cD0xOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTE0VDIyOjE1OjM5XCIsXHJcbiAgICAgICAgXCJtb2RpZmllZF9nbXRcIjpcIjIwMjEtMDgtMTRUMjI6MTU6MzlcIixcclxuICAgICAgICBcInNsdWdcIjpcInRlc3QtcHJvamVjdC0yXCIsXHJcbiAgICAgICAgXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcclxuICAgICAgICBcInR5cGVcIjpcInByb2plY3RzXCIsXHJcbiAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC90ZXN0LXByb2plY3QtMlxcL1wiLFxyXG4gICAgICAgIFwidGl0bGVcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcIjM5NSBEYXJ0bW9vclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRlbXBsYXRlXCI6XCJcIixcclxuICAgICAgICBcImFjZlwiOntcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCIzOTUgRGFydG1vb3JcIixcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOlwiTGFndW5hIEJlYWNoLCBDQVwiLFxyXG4gICAgICAgICAgICBcInNpemVcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMTVcIixcclxuICAgICAgICAgICAgXCJzdGF0dXNcIjpcIlwiLFxyXG4gICAgICAgICAgICBcInNlcnZpY2VzXCI6XCJBcmNoaXRlY3R1cmVcIixcclxuICAgICAgICAgICAgXCJtYWluX2ltYWdlXCI6e1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOjcyLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOjcyLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiMzk1ZGFydG1vb3ItbWFpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOlwiMzk1ZGFydG1vb3ItbWFpbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVzaXplXCI6NDM2OTY5LFxyXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLW1haW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC90ZXN0LXByb2plY3QtMlxcLzM5NWRhcnRtb29yLW1haW5cXC9cIixcclxuICAgICAgICAgICAgICAgIFwiYWx0XCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6XCIzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIjM5NWRhcnRtb29yLW1haW5cIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6XCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcInVwbG9hZGVkX3RvXCI6MTksXHJcbiAgICAgICAgICAgICAgICBcImRhdGVcIjpcIjIwMjEtMDgtMDYgMTU6NDI6MzhcIixcclxuICAgICAgICAgICAgICAgIFwibW9kaWZpZWRcIjpcIjIwMjEtMDgtMDYgMTU6NDI6MzhcIixcclxuICAgICAgICAgICAgICAgIFwibWVudV9vcmRlclwiOjAsXHJcbiAgICAgICAgICAgICAgICBcIm1pbWVfdHlwZVwiOlwiaW1hZ2VcXC9qcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjpcImltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnR5cGVcIjpcImpwZWdcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWluY2x1ZGVzXFwvaW1hZ2VzXFwvbWVkaWFcXC9kZWZhdWx0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOjI1NjAsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOjE5MjAsXHJcbiAgICAgICAgICAgICAgICBcInNpemVzXCI6e1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLTE1MHgxNTAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtd2lkdGhcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWwtaGVpZ2h0XCI6MTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLTMwMHgyMjUuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0td2lkdGhcIjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0taGVpZ2h0XCI6MjI1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLTc2OHg1NzYuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2Utd2lkdGhcIjo3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1fbGFyZ2UtaGVpZ2h0XCI6NTc2LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFyZ2VcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLW1haW4tMTAyNHg3NjguanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS13aWR0aFwiOjEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXJnZS1oZWlnaHRcIjo3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxNTM2eDE1MzZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLW1haW4tMTUzNngxMTUyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LXdpZHRoXCI6MTUzNixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi1oZWlnaHRcIjoxMTUyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjIwNDh4MjA0OC13aWR0aFwiOjIwNDgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtaGVpZ2h0XCI6MTUzNixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItd2lkdGhcIjo4MzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWItaGVpZ2h0XCI6NjIzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLXdpZHRoXCI6NTMzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi1oZWlnaHRcIjo0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLW1haW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLXdpZHRoXCI6MjMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNtYWxsLXRodW1iLWhlaWdodFwiOjE3MyxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci1tYWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zZXJ2aWNlLXRodW1iLXdpZHRoXCI6MzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItaGVpZ2h0XCI6MjYzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItbWFpbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLXdpZHRoXCI6NDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi1oZWlnaHRcIjozNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJob21lX3BhZ2Vfb3JkZXJcIjpcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnYWxsZXJ5X2ltYWdlc1wiOltcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci0xLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzM5NWRhcnRtb29yLTIucG5nXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvMzk1ZGFydG1vb3ItMy5wbmdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci00LXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC8zOTVkYXJ0bW9vci01LXNjYWxlZC5qcGdcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJfbGlua3NcIjp7XHJcbiAgICAgICAgICAgIFwic2VsZlwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXFwvMTlcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC90eXBlc1xcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ3cDphdHRhY2htZW50XCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvbWVkaWE/cGFyZW50PTE5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjdXJpZXNcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6XCJ3cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvYXBpLncub3JnXFwve3JlbH1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlZFwiOnRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOjE0LFxyXG4gICAgICAgIFwiZGF0ZVwiOlwiMjAyMC0xMS0xOVQwMzozOToxOFwiLFxyXG4gICAgICAgIFwiZGF0ZV9nbXRcIjpcIjIwMjAtMTEtMTlUMDM6Mzk6MThcIixcclxuICAgICAgICBcImd1aWRcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC8/cG9zdF90eXBlPXByb2plY3RzJiMwMzg7cD0xNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTE0VDIyOjE1OjU0XCIsXHJcbiAgICAgICAgXCJtb2RpZmllZF9nbXRcIjpcIjIwMjEtMDgtMTRUMjI6MTU6NTRcIixcclxuICAgICAgICBcInNsdWdcIjpcInRlc3QtcHJveWVjdC0xXCIsXHJcbiAgICAgICAgXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcclxuICAgICAgICBcInR5cGVcIjpcInByb2plY3RzXCIsXHJcbiAgICAgICAgXCJsaW5rXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvcHJvamVjdHNcXC90ZXN0LXByb3llY3QtMVxcL1wiLFxyXG4gICAgICAgIFwidGl0bGVcIjp7XHJcbiAgICAgICAgICAgIFwicmVuZGVyZWRcIjpcIjE5NSBNb25hcmNoIEJheVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRlbXBsYXRlXCI6XCJcIixcclxuICAgICAgICBcImFjZlwiOntcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCIxOTUgTW9uYXJjaCBCYXlcIixcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOlwiTW9uYXJjaCBCZWFjaCwgQ0FcIixcclxuICAgICAgICAgICAgXCJzaXplXCI6XCJcIixcclxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDE5XCIsXHJcbiAgICAgICAgICAgIFwic3RhdHVzXCI6XCJcIixcclxuICAgICAgICAgICAgXCJzZXJ2aWNlc1wiOlwiQXJjaGl0ZWN0dXJlXCIsXHJcbiAgICAgICAgICAgIFwibWFpbl9pbWFnZVwiOntcclxuICAgICAgICAgICAgICAgIFwiSURcIjo0NixcclxuICAgICAgICAgICAgICAgIFwiaWRcIjo0NixcclxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIkRTQzA4Mzg1XzEtbWluXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6XCJEU0MwODM4NV8xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVzaXplXCI6MTMyMzUyMSxcclxuICAgICAgICAgICAgICAgIFwidXJsXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmtcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC9wcm9qZWN0c1xcL3Rlc3QtcHJveWVjdC0xXFwvZHNjMDgzODVfMS1taW5cXC9cIixcclxuICAgICAgICAgICAgICAgIFwiYWx0XCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6XCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjpcImRzYzA4Mzg1XzEtbWluXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOlwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1cGxvYWRlZF90b1wiOjE0LFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6XCIyMDIxLTA4LTAyIDIxOjQzOjA1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGlmaWVkXCI6XCIyMDIxLTA4LTAyIDIxOjQzOjA1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1lbnVfb3JkZXJcIjowLFxyXG4gICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0eXBlXCI6XCJqcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1pbmNsdWRlc1xcL2ltYWdlc1xcL21lZGlhXFwvZGVmYXVsdC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjoyNTYwLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjoxNzA5LFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOntcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tMTUweDE1MC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC13aWR0aFwiOjE1MCxcclxuICAgICAgICAgICAgICAgICAgICBcInRodW1ibmFpbC1oZWlnaHRcIjoxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW1cIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL0RTQzA4Mzg1XzEtbWluLTMwMHgyMDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0td2lkdGhcIjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZWRpdW0taGVpZ2h0XCI6MjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi03Njh4NTEzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLXdpZHRoXCI6NzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWVkaXVtX2xhcmdlLWhlaWdodFwiOjUxMyxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi0xMDI0eDY4My5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLXdpZHRoXCI6MTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBcImxhcmdlLWhlaWdodFwiOjY4MyxcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tMTUzNngxMDI1LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUzNngxNTM2LXdpZHRoXCI6MTUzNixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1MzZ4MTUzNi1oZWlnaHRcIjoxMDI1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4XCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyMDQ4eDIwNDgtd2lkdGhcIjoyMDQ4LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMjA0OHgyMDQ4LWhlaWdodFwiOjEzNjcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbGFyZ2UtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL0RTQzA4Mzg1XzEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi13aWR0aFwiOjgzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1sYXJnZS10aHVtYi1oZWlnaHRcIjo1NTQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWVkaXVtLXRodW1iLXdpZHRoXCI6NTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1lZGl1bS10aHVtYi1oZWlnaHRcIjozNjcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc21hbGwtdGh1bWJcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL0RTQzA4Mzg1XzEtbWluLXNjYWxlZC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi13aWR0aFwiOjIzMCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5ZG5leS1zbWFsbC10aHVtYi1oZWlnaHRcIjoxNTQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvRFNDMDgzODVfMS1taW4tc2NhbGVkLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LXNlcnZpY2UtdGh1bWItd2lkdGhcIjozNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktc2VydmljZS10aHVtYi1oZWlnaHRcIjoyMzQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9EU0MwODM4NV8xLW1pbi1zY2FsZWQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzeWRuZXktbWFzLXRodW1iLXdpZHRoXCI6NDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lkbmV5LW1hcy10aHVtYi1oZWlnaHRcIjozMjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJob21lX3BhZ2Vfb3JkZXJcIjpcIjZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnYWxsZXJ5X2ltYWdlc1wiOltcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoMTAtc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoOS1zY2FsZWQuanBlZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL01vbmFyY2g4LXNjYWxlZC5qcGVnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvTW9uYXJjaDItc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoNC1zY2FsZWQuanBlZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL01vbmFyY2g1LXNjYWxlZC5qcGVnXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAyMFxcLzExXFwvTW9uYXJjaDYtc2NhbGVkLmpwZWdcIixcclxuICAgICAgICAgICAgXCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDIwXFwvMTFcXC9Nb25hcmNoNy1zY2FsZWQuanBlZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL01vbmFyY2gyLW1pbi1zY2FsZWQuanBlZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcL01vbmFyY2gxMS1zY2FsZWQuanBlZ1wiLFxyXG4gICAgICAgICAgICBcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMjBcXC8xMVxcLzE5NW1vbmFyY2hiYXktMTItc2NhbGVkLmpwZ1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIl9saW5rc1wiOntcclxuICAgICAgICAgICAgXCJzZWxmXCI6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOlwiaHR0cHM6XFwvXFwvd3AuY29ucmFkYXJjaGl0ZWN0LmNvbVxcL3dwLWpzb25cXC93cFxcL3YyXFwvcHJvamVjdHNcXC8xNFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJhYm91dFwiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjpcImh0dHBzOlxcL1xcL3dwLmNvbnJhZGFyY2hpdGVjdC5jb21cXC93cC1qc29uXFwvd3BcXC92MlxcL3R5cGVzXFwvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIndwOmF0dGFjaG1lbnRcIjpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC93cC5jb25yYWRhcmNoaXRlY3QuY29tXFwvd3AtanNvblxcL3dwXFwvdjJcXC9tZWRpYT9wYXJlbnQ9MTRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImN1cmllc1wiOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjpcIndwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6XCJodHRwczpcXC9cXC9hcGkudy5vcmdcXC97cmVsfVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVkXCI6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFBST0pFQ1RTX0RBVEEgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfVVJMfS9wcm9qZWN0c2ApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVsZW1lbnQuYWNmLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGxlcnk6IGVsZW1lbnQuZ2FsbGVyeV9pbWFnZXMsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnPj5lcnJvcicsIGVycikpXHJcbiAgICApXHJcbn07XHJcblxyXG4vL1RPRE86IFRoaXMgd2lsbCBiZSByZW1vdmVkXHJcbmNvbnN0IGdldFRlbXBQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBQUk9KRUNUU19EQVRBLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgKHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudC5hY2YsXHJcbiAgICAgICAgICAgIGdhbGxlcnk6IGVsZW1lbnQuZ2FsbGVyeV9pbWFnZXMsXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRQcm9qZWN0cyxcclxuICAgIGdldFRlbXBQcm9qZWN0cyxcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbGxhcHNpYmxlIGZyb20gJ3JlYWN0LWNvbGxhcHNpYmxlJztcclxuLy8gaW1wb3J0IHtcclxuLy8gICAgIExpbmtcclxuLy8gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vUmVkdXhcclxuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IHsgZ2V0UHJvamVjdHNMaXN0IH0gZnJvbSAnLi4vLi4vcHVibGljL3JlZHV4L3NlbGVjdG9ycyc7XHJcbi8vIGltcG9ydCB7IGFkZFByb2plY3RMaXN0LCBzZXRTaW5nbGVQcm9qZWN0IH0gZnJvbSAnLi4vLi4vcHVibGljL3JlZHV4L2FjdGlvbnMnO1xyXG4vL2Nzc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2FsbGVyeS5tb2R1bGUuc2Nzcyc7XHJcbi8vQVBJXHJcbmltcG9ydCB7IGdldFByb2plY3RzLCBnZXRUZW1wUHJvamVjdHMgfSBmcm9tICcuL0FQSSc7XHJcblxyXG5jb25zdCBHYWxsZXJ5ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFByb2plY3RMaXN0LCBzZXRTaW5nbGVQcm9qZWN0LCBwcm9qZWN0c0xpc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRQcm9qZWN0cygpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkUHJvamVjdExpc3QocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnPj5lcnJvcicsIGVycikpXHJcbiAgICB9LCBbYWRkUHJvamVjdExpc3RdKTsqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXByb2plY3RzTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXNfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUZW1wUHJvamVjdHMoKS5tYXAoKHByb2plY3QsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBhbHQ9eydhcyd9IHNyYz17cHJvamVjdC5tYWluX2ltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGNvbnNvbGUubG9nKFwiPj5EQVRBXCIsIHByb2plY3RbaW5kZXhdKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogPGg0Pk5vIHByb2plY3RzIHRvIGRpc3BsYXk8L2g0PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3QgJiYgcHJvamVjdHNMaXN0Lmxlbmd0aCA+IDkgJiZcclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRJc0V4cGFuZGVkKCFpc0V4cGFuZGVkKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbGxfcHJvamVjdHNfY3RhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHBhbmRlZCA/ICdTRUUgTEVTUyA+JyA6ICdTRUUgQUxMIFBST0pFQ1RTID4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc1BhcmVudFN0cmluZz17aXNFeHBhbmRlZCA/ICdleHBhbmRlZFBhbmVsJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9yZV9pbWFnZXNfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgey8qIC8vVE9ETzogY2hlY2sgbG9naWMgYWJvdXQgaW5kZXggd2hlbiBzZWxlY3QgYSBwcm9qZWN0Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0c0xpc3Quc2xpY2UoOSwyMCkubWFwKChwcm9qZWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNsaWRlfSBtb3JlLXNsaWRlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvcHJvamVjdHMnfSBvbkNsaWNrPXsoKSA9PiBzZXRTaW5nbGVQcm9qZWN0KGluZGV4ICsgMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBhbHQ9eydhcyd9IHNyYz17cHJvamVjdC5tYWluX2ltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW5nbGVQcm9qZWN0KGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgICBwcm9qZWN0c0xpc3Q6IGdldFByb2plY3RzTGlzdChzdGF0ZSksXHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbi8vICAgICBhZGRQcm9qZWN0TGlzdDogKHZhbHVlcykgPT4gZGlzcGF0Y2goYWRkUHJvamVjdExpc3QodmFsdWVzKSksXHJcbi8vICAgICBzZXRTaW5nbGVQcm9qZWN0OiAocHJvamVjdElkKSA9PiBkaXNwYXRjaChzZXRTaW5nbGVQcm9qZWN0KHByb2plY3RJZCkpLFxyXG4vLyB9KTtcclxuLy9cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuLy8gICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuLy8gICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4vLyApKEdhbGxlcnkpXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImltYWdlc193cmFwcGVyXCI6IFwiZ2FsbGVyeV9pbWFnZXNfd3JhcHBlcl9fMWNSSGdcIixcblx0XCJtb3JlX2ltYWdlc193cmFwcGVyXCI6IFwiZ2FsbGVyeV9tb3JlX2ltYWdlc193cmFwcGVyX18yc1hqWVwiLFxuXHRcInNsaWRlXCI6IFwiZ2FsbGVyeV9zbGlkZV9fM0tkdllcIixcblx0XCJpbWFnZVwiOiBcImdhbGxlcnlfaW1hZ2VfXzNPYlRVXCIsXG5cdFwiYWxsX3Byb2plY3RzX2N0YVwiOiBcImdhbGxlcnlfYWxsX3Byb2plY3RzX2N0YV9fQ192a0VcIixcblx0XCJnYWxsZXJ5LW92ZXJsYXktaGVscGVyXCI6IFwiZ2FsbGVyeV9nYWxsZXJ5LW92ZXJsYXktaGVscGVyX18yTTZsX1wiLFxuXHRcImV4cGFuZGVkUGFuZWxcIjogXCJnYWxsZXJ5X2V4cGFuZGVkUGFuZWxfX3pjdDRwXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5JztcclxuaW1wb3J0IFNlY3Rpb25MYXlvdXQgZnJvbSAnLi4vY29tbW9uL1NlY3Rpb25MYXlvdXQnO1xyXG4vL2Nzc1xyXG5pbXBvcnQgJy4vcHJvamVjdHMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWN0aW9uTGF5b3V0IHNlY3Rpb25UaXRsZT17J1BST0pFQ1RTJ30gc2VjdGlvbklkPXsnUFJPSkVDVFMnfT5cclxuICAgICAgICAgICAgPEdhbGxlcnkgLz5cclxuICAgICAgICA8L1NlY3Rpb25MYXlvdXQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9qZWN0cy13cmFwcGVyXCI6IFwicHJvamVjdHNfcHJvamVjdHMtd3JhcHBlcl9fMUtBWktcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYW5uZXJTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Jhbm5lclwiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvamVjdHNcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0XCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcclxuLy9Db21wb25lbnRzXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgIDxCYW5uZXJTZWN0aW9uIC8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbnJhZC1hcmNoaXRlY3QtdGVhbS1taW4tMTczYmE3ZTBlNTQ0NTU1NTY4Y2IwOTEyMzI1YTA1ZTUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFnQUFBQXpDQVlBQUFCclBKWWxBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlocFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ESXhJRGM1TGpFMU5UYzNNaXdnTWpBeE5DOHdNUzh4TXkweE9UbzBORG93TUNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVFFnS0UxaFkybHVkRzl6YUNraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlFrVTFPVGhDTlRZelFrUXdNVEZGTkVGQ01UUkdPRGs0T0RjNVFqRTVOVUlpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UWtVMU9UaENOVGN6UWtRd01URkZORUZDTVRSR09EazRPRGM1UWpFNU5VSWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBHTURFeVJqSXdPVE5DUTBZeE1VVTBRVUl4TkVZNE9UZzROemxDTVRrMVFpSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEdNREV5UmpJd1FUTkNRMFl4TVVVMFFVSXhORVk0T1RnNE56bENNVGsxUWlJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BxZXduNHdBQUFxdVNVUkJWSGphN0YzZGtlc3FFbWFtN3VPK2FFUFFEWUVUZ200SU9pRm9RdENFSUljZ2gyQ0hJSWNnaHlDLzdMc2NndGFxZ3AwK3ZTQm9mdnd6MDExRmpjY1dDTHFiajZacDRHMVpGbkdqOXBhS1cyclVYMGlYVzlyZjB2bVdUb0xwbGFtOHBlcVdwUG9zTGZKZTAxWEpYUDkvWnZiOVBIcFRBS0ZwVlo0QlBmT0xsZVBscVZMZ1g0UHZUZ2JBMTZBaDBmZG5wUWRNUHh3Z1ZzSmZ2REdiWHBvNlpTRUtaUlhzbEVWNGRWZ2FOYkFzVnlENWgxbkpBTUVBOGIxb0JOYkFWWFZ5aWpVb2xVVjVab0Q0bWZTZXNleDE1Sm5WYUpTQ0JtVXF4M1NXeXJOVHRPcDlpMmVhQ1hWYlIrWmUxVWZubjlUNytvVDg3eVBCUVU4dGRnRitqcFYvQjlSR3phZEJXVFYxWUxzbVl0NUcxV2RDOWVnTU1qTTlhNU8zYmtjcS9hN1VlNm5rVzJkYzk0UEtKemRMWHkwSWxEQ0p3TlNxL0gxRUdiaGVVMkRlUnVWdmlma214SXNXcGU2V1JrOCtTVkRlcFBKWHQxU3JjbUw1RFZOdHFIZG9XY1V0RFI3UGxiZDBBTzhjVmJzMHIzb0RQeWNsRzZvZUxJcDNvVHhwUGRvQzZhRGVWNm04VTBMKzZqU29zcG9JT1psNHErdmRxSG9PaGo1dWxVTk9nSUJNTENPWkowRlpUVVJkRG9GQ2MvRmk5RkM0MlFHWU1pRkFRTjdQU25sRUpOajdBTEFHaHRMUlVYRUhHd2gxaE8yU2dSMm9JcnpIQkFDRlFUZXFDUDZXcUxQR0RLS1FwMXU4YUlGT1d1V1FDeUNheEFoYlJ6QVFLMjhPZ0hDMXJ3ZGxGSTduWXNHaE1veCtJbU5xQXQ1bDZtQ2pKMGdzRVNDUkNpQjBHK1pFZk80VGdZMHZRRUJnR3Jma2tNc0hnZWVJMmhzZVNpWDYzQkR5dHNpL2tJTjJCSDVzclI0Y0U4MWxzUjhoNS9KcEQ5cjE0Wmx2ZmZZM3FwdEVzdkwxY3cwWjVlcHF3MmxENXlsdHFEZDBOaWRkREw2cFArVHdua2xwS3FYczF3MG1VRWdHTXJBeE9KRWVvVXlGWjkxVEJLTEpPd0lFZEtxNmxrNU5IZXpUSU5mU1U3R3ZUd0FTWjAvZ2QrbG9vZmdIKzFCNXB6YVlnUDEvY3NnQkVEVlFtR01pVkN3Ti8vdFlFYTJqc3o1Q2tib0VGaFhGZ3NoRk5aSkxDTGlaZ3JWcVQ0RDQvU1NXUkN5NE53QXNMdyt3SXJSK0hrMXlTQTBRdXVOZUZNUDI2TGRRSzBJcUpsSVlxSzJIL1JOWUVKajVuVm9DYk1UclVwV29neHdEQUU2cTkzMGdrTGczVHd0a1FZV0FRd21zN2IzQnNuZ1V3RlU1QUtKQmMvSXpHajJiUU5EUlplMElWa1FMNm5MZXNFWlNnS0lMckhZR1U3OVVKdnAweDFFL0pjbE1paWtKSFhOdm1LYjBkd1FKYUMyZkV2U1h2ZVgzUndDRVRBMFFCVENYamhaa0RabGJsV0N1dFBlMElxRDFjRUh6d3hpQU1BV2UrSGJ3Znl4S1ZJcXZvSnNVZExtVHhTUXoxYmNnVERWMTU5by9BQ1Jhb0dNZkFma3JZQWxka0k0L0FpQ01ja2dKRU5va09xSU9pZjl2QXhYeGpOQjJ5NHBvMGJPblJJcjlpZEpPK085MDFOR01uOExzMEdwRm1raktpMGVuZWxXeXRlWERBaEsxSjQ5OE9uTXR2aHp3clFMMFVIQ0FuZis0TWVVcXhhT25vUW5qSUhUd2kvUlk1eTBDMW9nYlN5RFFaRm1YN3cxUm5kVDMrOFJCRkFGeEhyWkFsVVhGZk1RR05lRllnUnp4RDNqOVhONGh3S2R5eUtKM3hFbFFkTnFIK3NqQXFOa2owRzNNR0FmaHpKL0tnb0FlN2RGZ2hqY1JjNnZTZ1ByN0RaUnREWmJHT2FQWmZRMFlrZlN1eWw4aXpJdFBjZm9WbVVhaGM0QnowZVhvRXlKdVdSWmJFbmgxSTdUczFlcDdVK2tYc0FDYndLbGhBK3BubXJhV1NGZnY0YU1xVFhMNEs3Rnpjci9SV1dCTVFpUDhOd0ZWRm9DQVM0V3Q2aGcxOGozQURva0JJdVhoTjZFQlRqcFE1UUNBSVJZZ0xvQVhtanJEVkMrRlU2dEI4dDBGbEZNbDRpVUVDZHdKQjhYbkZPMC9LOERvZ2U1ZGhQOHFCZ1RzejQzbk9qUm81RDZzU1JxZGxnbW1HTkl6NWgrSFh6ZkUrSG1YS1EwMzBaUUJvYk14b2RhdTBHZEtMSDZLL1JpbFlmb1NFd3A4OE56TVZrV0dHUStFTUhKcStQSU02aXNTaEZyM2dWT3Mxck90dVB3eTh4VERLSWNVQU5GN3pzZHc3UHE0K084cm1Ed1ZkS3NlVXdEelVnQkVUOXhqTUM3cDkwakV6Sm5MRFg3VmhrNVlFSDB4TTJGZlJVV1VSVy94SGFRQWlBTDVZWHozaFV5ZUF5VGVVOU5sQklqU0JuYXhBRkVTRVk2NktjV0Z0cVpPVUhwMDlpa0RRUFFiWlRTTC8yN1Zkc216a1FvQ0VNV2hPRGlzank1dzB4WG1iN1BRTnFMSkNKQklBUkJhYmpNQklCdWkvbEYzNVlZQUJBYTZKdVZ1enBZNDZrbGlJem9QOUJ3OFI4Z3VZQ1hEZDB0dnNkR0pCc2ZvQWdVMEx2RmJzMDJkeW1acFNjY08ydEVUdEV3cko0MkhWZUx6ckEwZ3FpVjh0MlFxZ0RDQjhKWU1CNEkxWUp0R1UxWmVDb0p1R09YZ2Vzbms2T3h6d0tnM0Vud1JQZ3BhZVNJc2xkbkNNSStmbGJMaFEyT21EYkFia0IrZ0JZZDRkRUJBT2NBQksvSmtNYmtIa0ViRDc1Vm41eDBNL0RvZ2ZtRkFMd010SXVxNUlIMkFYODEzSUdzTS9VWnVQRk1SUm5mZjdlM1NJTGRaNlZpTkRvN3BrQzVZNWVBNmszTDFLUCsyckViQVdQRUxDRGM5T3p5NHBrMDFldFZoQnp6REVuamlkWFRtMmVJdDdsRittMWRZSXM4NUxCTUhjMG5paXNLbjVmMmFWL3FJZVlrOHhaZU5kdVh5VnV1SVZwaE1ZYmY2cW9OVFFQbVZvZXd6YU8rUnNEeXNkUTJ1WE1ISVdsL2V0U3I5ZTJPcHIxWkpHbFpYemhzNnJrOE9yMEFkMXp6L3VxWC9vQlVmelZQWERsaDlKbWlCVnVUMmdJZGJkYmF0d3VnckRYUjdySFhBQUZHS1A4L0Yrd3hjdW1KaVlubzhGYkZMdSsrT1lJa2o4NWlKNldVcE91N2pmU05ZWWlmb0VZSk1URXpmaVBBVVE5K2pvTzlCdURLTG1KZ1lJRmJTMSs2RjNxSEF4TVQwVFFGQ3J5NnM5TUhnd01URXBBRkNnOE82M0xIamFRVVRFeE1FaUhVblllaVJXVXhNVEQ5Z2lzSEV4TVRFQU1IRXhNUUF3Y1RFeEFEQnhNU1VrOTZaQlV3SmFOMG81SFBKQzNVRDNDdnl3ZWNVY2IzeGpBRWlNNDBpN2xqM1d2eDV5Tzc2ZWQyc05vczB0elJwUlZoWGlnWlZ0bjdIUU93c0xhcnJXZ1krSmw5ZnhBUGI0NnVJTVhtbDR0a0Uwb0srRzhWWHBLNElxQk11WC9PaWV4TDVhRDdBTXJRdUxhanVzM2lWVzlVeVh3MmZNOG1FSnpDTjZKd0FlSWhMRTFobURmYmptK28rQlI0Qk56cE96aW9qanE0THpkc1oybWs2VDZRakhKYUM2elJaenNyc25rZytwdmFaenNHc0NhZEtQVFM5c2dXaGIvRktjU1E0Tm8vaHpkTWhTSzlIcFowd24xeXNUMGF1SXVwcTIwaDNzYlRKaDBMenJpT256ODdmWTBEWld4c0dRMk4zY3NtSHdvY0xXeEI1MDZSR2tJVjRLdEhXMlgrMjA3V29sK0xNbnFOd2w3Q3VydEdiY25rS05XOUZLS2RLWEtmNmllUlRFZVJWc1FXUjF4a0VUenJLNmZpaUlyMCsvY2pubEtQUGIrS2NPMlY2Vm5pT3hzOGluMGZ5Z1oyVUNDQ080dXZJcmlyVE8wSVY4R1VVNE1VcFpDV0E1VU9ndjE2MDN2Qm1ySlA0T284djFTNVU3ZDNlQjR3aVphRGxRYVdKd1NISXozSXYrVEJBUEZBeDlzaFUwemN2bnhOMXVrS1YrL0hFZlBoN3k3WDBEWFcxUUtEb08wMWcrbUZUakJVSU92RzFYdDhuOUVPc25lNDNlRS9NU2tERjZwV1Vya28rZnlNNXNYd1lJUDR3RDlmMGh0SkpUVEZTM05xOVdpRTdCUTU5WUg0aDB0NGd6dlQvZEFxMElGZyszeGdnYkxjY254S1BDanVsU0hXQVphS1YxaWQrb2hkeGthQS9uUzdJcjhEeVlZQXdyaW9jQ1VMM3BVK2dKSlNwaGg3WlNyRWRCcXd2bDJGbldSeTFSQkJuK1h4VGdOQzNVNTBzSThsRmZOMHlGREsveFNPUlZpUjlKQjhGSkQ1VTN0WUNNR3NkRDRFbTh0VXhhcGJvT2VvVUxqUnZqbkpjWlJWS0w2aWRPS2Q4cVBKNmJucWhxRWw0T1dxMThUc2xFckJGZDFHYTR1OWI5ZjBVRUxGWnF2SkdVTVlJb2tBcGQzSDYxSFV5OEtvbDNGMFptaGZYWVhiVWsxSVdydE1FMGh3UTZacExQaTUrenEreS93S20vd293QUY5UU9hZVFTY0xHQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzE0M0s1OTA5LTkyYjc2YTBjMjJlZWI1YzFhOWYwZmM2ZmFkMTYxNzlkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy80MDUtRGFydG1vb3ItU3RyZWV0LTkyOTg0MzhiMDAwZDdmNjVhMTJlYjExMjJlMmYxYzQwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9EU0MwODU4NC1taW4tNzAwNTJjOGI3NjUwOTIwNjBjOTExZTc4ZThjMmQ3YWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0xvcGV6IFJlc2lkZW5jZS05MTE4LTc2MDI2NGNjY2FkYzc1YmMzZDUxMmEzYmIyMDE0YjAyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqRXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSkRZWEJoWHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdNekV1TkRrZ016RXVORGtpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRE14TGpRNUlETXhMalE1T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStEUW84Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qTVVVeU1ERkVPeUlnWkQwaVRUSXhMakl3TlN3MUxqQXdOMk10TUM0ME1qa3RNQzQwTkRRdE1TNHhORE10TUM0ME5EUXRNUzQxT0Rjc01HTXRNQzQwTWprc01DNDBNamt0TUM0ME1qa3NNUzR4TkRNc01Dd3hMalUzTVd3NExqQTBOeXc0TGpBME4wZ3hMakV4TVEwS0NVTXdMalE1TWl3eE5DNDJNallzTUN3eE5TNHhNVGdzTUN3eE5TNDNNemRqTUN3d0xqWXhPU3d3TGpRNU1pd3hMakV5Tnl3eExqRXhNU3d4TGpFeU4yZ3lOaTQxTlRSc0xUZ3VNRFEzTERndU1ETXlZeTB3TGpReU9Td3dMalEwTkMwd0xqUXlPU3d4TGpFMU9Td3dMREV1TlRnM0RRb0pZekF1TkRRMExEQXVORFEwTERFdU1UVTVMREF1TkRRMExERXVOVGczTERCc09TNDVOVEl0T1M0NU5USmpNQzQwTkRRdE1DNDBNamtzTUM0ME5EUXRNUzR4TkRNc01DMHhMalUzTVV3eU1TNHlNRFVzTlM0d01EZDZJaTgrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVyZS1yZWFjdC1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb2xsYXBzaWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=