webpackHotUpdate_N_E("pages/index",{

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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'Gotham light';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n@font-face {\n  font-family: 'Gotham bold';\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n@font-face {\n  font-family: 'Gotham italic';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n\n.mobile-carousel_container__D3DQP {\n  display: none; }\n\n@media (max-width: 700px) {\n  .mobile-carousel_container__D3DQP {\n    display: initial;\n    padding: 5% 0;\n    position: relative;\n    height: 39vh;\n    width: 100%;\n    z-index: 2; }\n  .mobile-carousel_mobile_carousel_container__3ALm7 {\n    display: initial;\n    position: absolute;\n    height: 100%;\n    width: 100%; }\n  .mobile-carousel_sliders__37ujI {\n    height: 100%; }\n  .mobile-carousel_slider-wrapper__24SYj {\n    height: 100%; }\n  .mobile-carousel_paragraphs__GqELu, .mobile-carousel_quote_container__1hp5v {\n    display: none; }\n  .mobile-carousel_arrow__1QtE4 {\n    background: none;\n    border: none;\n    position: absolute;\n    bottom: 10%;\n    height: 20px;\n    width: 40px;\n    z-index: 1; }\n  .mobile-carousel_arrow__1QtE4[disabled] {\n    display: none; }\n  .mobile-carousel_back__37buS {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    left: 0; }\n  .mobile-carousel_next__31GfJ {\n    right: 0; }\n  .mobile-carousel_arrow__1QtE4, .mobile-carousel_slider-wrapper__24SYj:focus {\n    outline: none; }\n  .mobile-carousel_slide__2Bsvw {\n    height: 100%; } }\n", "",{"version":3,"sources":["webpack://../../../css/variables.scss","webpack://mobile-carousel.module.scss"],"names":[],"mappings":"AA0BA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAgD,EAAA;;AAGlD;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;EAChB,4CAA+C,EAAA;;AAGjD;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAkD,EAAA;;AC1CpD;EAAa,aAAa,EAAA;;AAU1B;EACE;IACE,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IACE,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,WAAW,EAAA;EAGb;IACE,YAAY,EAAA;EAGd;IACE,YAAY,EAAA;EAGd;IAAgC,aAAa,EAAA;EAE7C;IACE,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IAAmB,aAAa,EAAA;EAEhC;IACE,iCAAyB;YAAzB,yBAAyB;IACzB,OAAO,EAAA;EAGT;IAAQ,QAAQ,EAAA;EAEhB;IAAgC,aAAa,EAAA;EAE7C;IAAS,YAAa,EAAA,EAAE","sourcesContent":["@import 'helpers';\r\n\r\n//Colors\r\n$sections-background-color: #e4e4e4;\r\n$mobile-menu-background-color: #e4e4e4e6;\r\n$sections-border-color: #000;\r\n$white-color: #ffff;\r\n$basic-font-color: rgba(0, 0, 0, 0.7);\r\n\r\n//Container sizes\r\n$form-container: 57%;\r\n$large-section-container: 100vw;\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$title-font-family: 'Gotham light';\r\n$text-font-family: 'Gotham italic';\r\n$gotham-bold: 'Gotham bold';\r\n\r\n@font-face {\r\n  font-family: 'Gotham light';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-Light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('../src/assets/fonts/Gotham-Bold.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham italic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-BookIta.otf');\r\n}","@import '../../../css/variables';\r\n\r\n.container { display: none; }\r\n.mobile_carousel_container{}\r\n.sliders{}\r\n.about-paragraphs{}\r\n.about-quote{}\r\n.arrow{}\r\n.back{}\r\n.slider-wrapper{}\r\n.next{}\r\n\r\n@media (max-width: $md-screen) {\r\n  .container {\r\n    display: initial;\r\n    padding: 5% 0;\r\n    position: relative;\r\n    height: 39vh;\r\n    width: 100%;\r\n    z-index: 2;\r\n  }\r\n\r\n  .mobile_carousel_container {\r\n    display: initial;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n  .sliders {\r\n    height: 100%;\r\n  }\r\n\r\n  .slider-wrapper {\r\n    height: 100%;\r\n  }\r\n\r\n  .paragraphs ,.quote_container { display: none; }\r\n\r\n  .arrow {\r\n    background: none;\r\n    border: none;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    height: 20px;\r\n    width: 40px;\r\n    z-index: 1;\r\n  }\r\n\r\n  .arrow[disabled] { display: none; }\r\n\r\n  .back {\r\n    transform: rotate(180deg);\r\n    left: 0;\r\n  }\r\n\r\n  .next { right: 0; }\r\n\r\n  .arrow, .slider-wrapper:focus { outline: none; }\r\n\r\n  .slide { height: 100% }\r\n}"],"sourceRoot":""}]);
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
	"next": "mobile-carousel_next__31GfJ",
	"slide": "mobile-carousel_slide__2Bsvw"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvbW9iaWxlLWNhcm91c2VsLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHLHNDQUFzQyxtQkFBTyxDQUFDLDZIQUErRDtBQUM3RyxvQ0FBb0MsbUJBQU8sQ0FBQyx1RkFBNEM7QUFDeEYsb0NBQW9DLG1CQUFPLENBQUMscUZBQTJDO0FBQ3ZGLG9DQUFvQyxtQkFBTyxDQUFDLDJGQUE4QztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxnQ0FBZ0MsdUJBQXVCLHFCQUFxQix5REFBeUQsRUFBRSxnQkFBZ0IsK0JBQStCLHVCQUF1QixxQkFBcUIseURBQXlELEVBQUUsZ0JBQWdCLGlDQUFpQyx1QkFBdUIscUJBQXFCLHlEQUF5RCxFQUFFLHVDQUF1QyxrQkFBa0IsRUFBRSwrQkFBK0IsdUNBQXVDLHVCQUF1QixvQkFBb0IseUJBQXlCLG1CQUFtQixrQkFBa0IsaUJBQWlCLEVBQUUsdURBQXVELHVCQUF1Qix5QkFBeUIsbUJBQW1CLGtCQUFrQixFQUFFLHFDQUFxQyxtQkFBbUIsRUFBRSw0Q0FBNEMsbUJBQW1CLEVBQUUsaUZBQWlGLG9CQUFvQixFQUFFLG1DQUFtQyx1QkFBdUIsbUJBQW1CLHlCQUF5QixrQkFBa0IsbUJBQW1CLGtCQUFrQixpQkFBaUIsRUFBRSw2Q0FBNkMsb0JBQW9CLEVBQUUsa0NBQWtDLHdDQUF3Qyx3Q0FBd0MsY0FBYyxFQUFFLGtDQUFrQyxlQUFlLEVBQUUsaUZBQWlGLG9CQUFvQixFQUFFLG1DQUFtQyxtQkFBbUIsRUFBRSxFQUFFLFNBQVMscUlBQXFJLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixPQUFPLGdCQUFnQixNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLGVBQWUsS0FBSyxZQUFZLGFBQWEsV0FBVyxlQUFlLEtBQUssZUFBZSxLQUFLLGVBQWUsS0FBSyxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxlQUFlLEtBQUssZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGdCQUFnQixLQUFLLGVBQWUsTUFBTSxnQkFBZ0IsTUFBTSwwREFBMEQsd0RBQXdELDZDQUE2QyxpQ0FBaUMsd0JBQXdCLDBDQUEwQyxrREFBa0Qsb0NBQW9DLDJFQUEyRSw2Q0FBNkMsc0JBQXNCLHVCQUF1QixzREFBc0QsdUNBQXVDLGdDQUFnQyxvQkFBb0Isa0NBQWtDLHlCQUF5Qix1QkFBdUIsdURBQXVELEtBQUssb0JBQW9CLGlDQUFpQyx5QkFBeUIsdUJBQXVCLHNEQUFzRCxLQUFLLG9CQUFvQixtQ0FBbUMseUJBQXlCLHVCQUF1Qix5REFBeUQsS0FBSyxvQ0FBb0Msb0JBQW9CLGVBQWUsRUFBRSxnQ0FBZ0MsY0FBYyx1QkFBdUIsa0JBQWtCLFlBQVksV0FBVyxxQkFBcUIsV0FBVyx3Q0FBd0Msa0JBQWtCLHlCQUF5QixzQkFBc0IsMkJBQTJCLHFCQUFxQixvQkFBb0IsbUJBQW1CLE9BQU8sc0NBQXNDLHlCQUF5QiwyQkFBMkIscUJBQXFCLG9CQUFvQixPQUFPLG9CQUFvQixxQkFBcUIsT0FBTywyQkFBMkIscUJBQXFCLE9BQU8seUNBQXlDLGVBQWUsRUFBRSxrQkFBa0IseUJBQXlCLHFCQUFxQiwyQkFBMkIsb0JBQW9CLHFCQUFxQixvQkFBb0IsbUJBQW1CLE9BQU8sNEJBQTRCLGVBQWUsRUFBRSxpQkFBaUIsa0NBQWtDLGdCQUFnQixPQUFPLGlCQUFpQixVQUFVLEVBQUUseUNBQXlDLGVBQWUsRUFBRSxrQkFBa0IsZUFBZSxLQUFLLG1CQUFtQjtBQUNsbko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNTA2NzZmOWUyMzcyOTRkNGEzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1MaWdodC5vdGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9sZC5vdGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGJvbGQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7IH1cXG5cXG4ubW9iaWxlLWNhcm91c2VsX2NvbnRhaW5lcl9fRDNEUVAge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1vYmlsZS1jYXJvdXNlbF9jb250YWluZXJfX0QzRFFQIHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gICAgcGFkZGluZzogNSUgMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDM5dmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX21vYmlsZV9jYXJvdXNlbF9jb250YWluZXJfXzNBTG03IHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX3NsaWRlcnNfXzM3dWpJIHtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX3NsaWRlci13cmFwcGVyX18yNFNZaiB7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9wYXJhZ3JhcGhzX19HcUVMdSwgLm1vYmlsZS1jYXJvdXNlbF9xdW90ZV9jb250YWluZXJfXzFocDV2IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9hcnJvd19fMVF0RTQge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHotaW5kZXg6IDE7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfYXJyb3dfXzFRdEU0W2Rpc2FibGVkXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfYmFja19fMzdidVMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgbGVmdDogMDsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9uZXh0X18zMUdmSiB7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX2Fycm93X18xUXRFNCwgLm1vYmlsZS1jYXJvdXNlbF9zbGlkZXItd3JhcHBlcl9fMjRTWWo6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX3NsaWRlX18yQnN2dyB7XFxuICAgIGhlaWdodDogMTAwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uL2Nzcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL21vYmlsZS1jYXJvdXNlbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwQkE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBZ0QsRUFBQTs7QUFHbEQ7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBK0MsRUFBQTs7QUFHakQ7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBa0QsRUFBQTs7QUMxQ3BEO0VBQWEsYUFBYSxFQUFBOztBQVUxQjtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFHWjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQUdiO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUFnQyxhQUFhLEVBQUE7RUFFN0M7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFHWjtJQUFtQixhQUFhLEVBQUE7RUFFaEM7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLE9BQU8sRUFBQTtFQUdUO0lBQVEsUUFBUSxFQUFBO0VBRWhCO0lBQWdDLGFBQWEsRUFBQTtFQUU3QztJQUFTLFlBQWEsRUFBQSxFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2hlbHBlcnMnO1xcclxcblxcclxcbi8vQ29sb3JzXFxyXFxuJHNlY3Rpb25zLWJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XFxyXFxuJG1vYmlsZS1tZW51LWJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTRlNjtcXHJcXG4kc2VjdGlvbnMtYm9yZGVyLWNvbG9yOiAjMDAwO1xcclxcbiR3aGl0ZS1jb2xvcjogI2ZmZmY7XFxyXFxuJGJhc2ljLWZvbnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG5cXHJcXG4vL0NvbnRhaW5lciBzaXplc1xcclxcbiRmb3JtLWNvbnRhaW5lcjogNTclO1xcclxcbiRsYXJnZS1zZWN0aW9uLWNvbnRhaW5lcjogMTAwdnc7XFxyXFxuXFxyXFxuLy9UZXh0IHNpemVzXFxyXFxuJGxpbmtzLWFuZC1jdGEtZm9udC1zaXplOiBjbGFtcCgxMDAlLCAxLjFlbSwgMjdweCk7XFxyXFxuXFxyXFxuLy9EZXZpY2VzIHNpemVzXFxyXFxuJHhzLXNjcmVlbjogNDUwcHg7XFxyXFxuJG1kLXNjcmVlbjogNzAwcHg7XFxyXFxuJGxnLXNjcmVlbjogMTAyNHB4O1xcclxcblxcclxcbi8vRm9udHNcXHJcXG4kdGl0bGUtZm9udC1mYW1pbHk6ICdHb3RoYW0gbGlnaHQnO1xcclxcbiR0ZXh0LWZvbnQtZmFtaWx5OiAnR290aGFtIGl0YWxpYyc7XFxyXFxuJGdvdGhhbS1ib2xkOiAnR290aGFtIGJvbGQnO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gbGlnaHQnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1MaWdodC5vdGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBib2xkJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9sZC5vdGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBpdGFsaWMnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb29rSXRhLm90ZicpO1xcclxcbn1cIixcIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5jb250YWluZXIgeyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXJ7fVxcclxcbi5zbGlkZXJze31cXHJcXG4uYWJvdXQtcGFyYWdyYXBoc3t9XFxyXFxuLmFib3V0LXF1b3Rle31cXHJcXG4uYXJyb3d7fVxcclxcbi5iYWNre31cXHJcXG4uc2xpZGVyLXdyYXBwZXJ7fVxcclxcbi5uZXh0e31cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogJG1kLXNjcmVlbikge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxyXFxuICAgIHBhZGRpbmc6IDUlIDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAzOXZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlcnMge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVyLXdyYXBwZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFyYWdyYXBocyAsLnF1b3RlX2NvbnRhaW5lciB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG5cXHJcXG4gIC5hcnJvdyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnJvd1tkaXNhYmxlZF0geyBkaXNwbGF5OiBub25lOyB9XFxyXFxuXFxyXFxuICAuYmFjayB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV4dCB7IHJpZ2h0OiAwOyB9XFxyXFxuXFxyXFxuICAuYXJyb3csIC5zbGlkZXItd3JhcHBlcjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cXHJcXG5cXHJcXG4gIC5zbGlkZSB7IGhlaWdodDogMTAwJSB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIm1vYmlsZS1jYXJvdXNlbF9jb250YWluZXJfX0QzRFFQXCIsXG5cdFwibW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lclwiOiBcIm1vYmlsZS1jYXJvdXNlbF9tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVyX18zQUxtN1wiLFxuXHRcInNsaWRlcnNcIjogXCJtb2JpbGUtY2Fyb3VzZWxfc2xpZGVyc19fMzd1aklcIixcblx0XCJzbGlkZXItd3JhcHBlclwiOiBcIm1vYmlsZS1jYXJvdXNlbF9zbGlkZXItd3JhcHBlcl9fMjRTWWpcIixcblx0XCJwYXJhZ3JhcGhzXCI6IFwibW9iaWxlLWNhcm91c2VsX3BhcmFncmFwaHNfX0dxRUx1XCIsXG5cdFwicXVvdGVfY29udGFpbmVyXCI6IFwibW9iaWxlLWNhcm91c2VsX3F1b3RlX2NvbnRhaW5lcl9fMWhwNXZcIixcblx0XCJhcnJvd1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9hcnJvd19fMVF0RTRcIixcblx0XCJiYWNrXCI6IFwibW9iaWxlLWNhcm91c2VsX2JhY2tfXzM3YnVTXCIsXG5cdFwibmV4dFwiOiBcIm1vYmlsZS1jYXJvdXNlbF9uZXh0X18zMUdmSlwiLFxuXHRcInNsaWRlXCI6IFwibW9iaWxlLWNhcm91c2VsX3NsaWRlX18yQnN2d1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=