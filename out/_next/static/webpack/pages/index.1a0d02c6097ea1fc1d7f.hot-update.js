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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'Gotham light';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n@font-face {\n  font-family: 'Gotham bold';\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n@font-face {\n  font-family: 'Gotham italic';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n\n.mobile-carousel_container__D3DQP {\n  display: none; }\n\n@media (max-width: 700px) {\n  .mobile-carousel_container__D3DQP {\n    display: initial; }\n  .mobile-carousel_mobile_carousel_container__3ALm7 {\n    display: initial;\n    padding: 5% 0;\n    position: relative;\n    height: 39vh;\n    width: 100%;\n    z-index: 2; }\n  .mobile-carousel_sliders__37ujI {\n    height: 100%; }\n  .mobile-carousel_about-paragraphs__3svry, .mobile-carousel_about-quote__2EXpo {\n    display: none; }\n  .mobile-carousel_arrow__1QtE4 {\n    background: none;\n    border: none;\n    position: absolute;\n    bottom: 10%;\n    height: 20px;\n    width: 40px;\n    z-index: 1; }\n  .mobile-carousel_arrow__1QtE4[disabled] {\n    display: none; }\n  .mobile-carousel_back__37buS {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    left: 0; }\n  .mobile-carousel_next__31GfJ {\n    right: 0; }\n  .mobile-carousel_arrow__1QtE4, .mobile-carousel_slider-wrapper__24SYj:focus {\n    outline: none; } }\n", "",{"version":3,"sources":["webpack://../../../css/variables.scss","webpack://mobile-carousel.module.scss"],"names":[],"mappings":"AA0BA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAgD,EAAA;;AAGlD;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;EAChB,4CAA+C,EAAA;;AAGjD;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,4CAAkD,EAAA;;AC1CpD;EAAa,aAAa,EAAA;;AAU1B;EACE;IACE,gBAAgB,EAAA;EAGlB;IACE,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IAAW,YAAa,EAAA;EAExB;IAAkC,aAAa,EAAA;EAE/C;IACE,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,UAAU,EAAA;EAGZ;IAAmB,aAAa,EAAA;EAEhC;IACE,iCAAyB;YAAzB,yBAAyB;IACzB,OAAO,EAAA;EAGT;IAAQ,QAAQ,EAAA;EAEhB;IAAgC,aAAa,EAAA,EAAI","sourcesContent":["@import 'helpers';\r\n\r\n//Colors\r\n$sections-background-color: #e4e4e4;\r\n$mobile-menu-background-color: #e4e4e4e6;\r\n$sections-border-color: #000;\r\n$white-color: #ffff;\r\n$basic-font-color: rgba(0, 0, 0, 0.7);\r\n\r\n//Container sizes\r\n$form-container: 57%;\r\n$large-section-container: 100vw;\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$title-font-family: 'Gotham light';\r\n$text-font-family: 'Gotham italic';\r\n$gotham-bold: 'Gotham bold';\r\n\r\n@font-face {\r\n  font-family: 'Gotham light';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-Light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('../src/assets/fonts/Gotham-Bold.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham italic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../src/assets/fonts/Gotham-BookIta.otf');\r\n}","@import '../../../css/variables';\r\n\r\n.container { display: none; }\r\n.mobile_carousel_container{}\r\n.sliders{}\r\n.about-paragraphs{}\r\n.about-quote{}\r\n.arrow{}\r\n.back{}\r\n.slider-wrapper{}\r\n.next{}\r\n\r\n@media (max-width: $md-screen) {\r\n  .container {\r\n    display: initial;\r\n  }\r\n\r\n  .mobile_carousel_container {\r\n    display: initial;\r\n    padding: 5% 0;\r\n    position: relative;\r\n    height: 39vh;\r\n    width: 100%;\r\n    z-index: 2;\r\n  }\r\n\r\n  .sliders { height: 100% }\r\n\r\n  .about-paragraphs ,.about-quote { display: none; }\r\n\r\n  .arrow {\r\n    background: none;\r\n    border: none;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    height: 20px;\r\n    width: 40px;\r\n    z-index: 1;\r\n  }\r\n\r\n  .arrow[disabled] { display: none; }\r\n\r\n  .back {\r\n    transform: rotate(180deg);\r\n    left: 0;\r\n  }\r\n\r\n  .next { right: 0; }\r\n\r\n  .arrow, .slider-wrapper:focus { outline: none; }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vY2Fyb3VzZWwvbW9iaWxlLWNhcm91c2VsLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHLHNDQUFzQyxtQkFBTyxDQUFDLDZIQUErRDtBQUM3RyxvQ0FBb0MsbUJBQU8sQ0FBQyx1RkFBNEM7QUFDeEYsb0NBQW9DLG1CQUFPLENBQUMscUZBQTJDO0FBQ3ZGLG9DQUFvQyxtQkFBTyxDQUFDLDJGQUE4QztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxnQ0FBZ0MsdUJBQXVCLHFCQUFxQix5REFBeUQsRUFBRSxnQkFBZ0IsK0JBQStCLHVCQUF1QixxQkFBcUIseURBQXlELEVBQUUsZ0JBQWdCLGlDQUFpQyx1QkFBdUIscUJBQXFCLHlEQUF5RCxFQUFFLHVDQUF1QyxrQkFBa0IsRUFBRSwrQkFBK0IsdUNBQXVDLHVCQUF1QixFQUFFLHVEQUF1RCx1QkFBdUIsb0JBQW9CLHlCQUF5QixtQkFBbUIsa0JBQWtCLGlCQUFpQixFQUFFLHFDQUFxQyxtQkFBbUIsRUFBRSxtRkFBbUYsb0JBQW9CLEVBQUUsbUNBQW1DLHVCQUF1QixtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIsa0JBQWtCLGlCQUFpQixFQUFFLDZDQUE2QyxvQkFBb0IsRUFBRSxrQ0FBa0Msd0NBQXdDLHdDQUF3QyxjQUFjLEVBQUUsa0NBQWtDLGVBQWUsRUFBRSxpRkFBaUYsb0JBQW9CLEVBQUUsRUFBRSxTQUFTLHFJQUFxSSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxnQkFBZ0IsTUFBTSxLQUFLLGlCQUFpQixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxlQUFlLEtBQUssZUFBZSxNQUFNLGdCQUFnQixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLGVBQWUsS0FBSyxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssZUFBZSxNQUFNLDJEQUEyRCx3REFBd0QsNkNBQTZDLGlDQUFpQyx3QkFBd0IsMENBQTBDLGtEQUFrRCxvQ0FBb0MsMkVBQTJFLDZDQUE2QyxzQkFBc0IsdUJBQXVCLHNEQUFzRCx1Q0FBdUMsZ0NBQWdDLG9CQUFvQixrQ0FBa0MseUJBQXlCLHVCQUF1Qix1REFBdUQsS0FBSyxvQkFBb0IsaUNBQWlDLHlCQUF5Qix1QkFBdUIsc0RBQXNELEtBQUssb0JBQW9CLG1DQUFtQyx5QkFBeUIsdUJBQXVCLHlEQUF5RCxLQUFLLG9DQUFvQyxvQkFBb0IsZUFBZSxFQUFFLGdDQUFnQyxjQUFjLHVCQUF1QixrQkFBa0IsWUFBWSxXQUFXLHFCQUFxQixXQUFXLHdDQUF3QyxrQkFBa0IseUJBQXlCLE9BQU8sc0NBQXNDLHlCQUF5QixzQkFBc0IsMkJBQTJCLHFCQUFxQixvQkFBb0IsbUJBQW1CLE9BQU8sb0JBQW9CLGVBQWUsMkNBQTJDLGVBQWUsRUFBRSxrQkFBa0IseUJBQXlCLHFCQUFxQiwyQkFBMkIsb0JBQW9CLHFCQUFxQixvQkFBb0IsbUJBQW1CLE9BQU8sNEJBQTRCLGVBQWUsRUFBRSxpQkFBaUIsa0NBQWtDLGdCQUFnQixPQUFPLGlCQUFpQixVQUFVLEVBQUUseUNBQXlDLGVBQWUsRUFBRSxLQUFLLG1CQUFtQjtBQUM3c0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWEwZDAyYzYwOTdlYTFmYzFkN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL3NyYy9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL3NyYy9hc3NldHMvZm9udHMvR290aGFtLUJvb2tJdGEub3RmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBsaWdodCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBib2xkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGl0YWxpYyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpOyB9XFxuXFxuLm1vYmlsZS1jYXJvdXNlbF9jb250YWluZXJfX0QzRFFQIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2JpbGUtY2Fyb3VzZWxfY29udGFpbmVyX19EM0RRUCB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfbW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lcl9fM0FMbTcge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgICBwYWRkaW5nOiA1JSAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMzl2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfc2xpZGVyc19fMzd1akkge1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfYWJvdXQtcGFyYWdyYXBoc19fM3N2cnksIC5tb2JpbGUtY2Fyb3VzZWxfYWJvdXQtcXVvdGVfXzJFWHBvIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9hcnJvd19fMVF0RTQge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHotaW5kZXg6IDE7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfYXJyb3dfXzFRdEU0W2Rpc2FibGVkXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5tb2JpbGUtY2Fyb3VzZWxfYmFja19fMzdidVMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgbGVmdDogMDsgfVxcbiAgLm1vYmlsZS1jYXJvdXNlbF9uZXh0X18zMUdmSiB7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAubW9iaWxlLWNhcm91c2VsX2Fycm93X18xUXRFNCwgLm1vYmlsZS1jYXJvdXNlbF9zbGlkZXItd3JhcHBlcl9fMjRTWWo6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vY3NzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vbW9iaWxlLWNhcm91c2VsLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTBCQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUFnRCxFQUFBOztBQUdsRDtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUErQyxFQUFBOztBQUdqRDtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUFrRCxFQUFBOztBQzFDcEQ7RUFBYSxhQUFhLEVBQUE7O0FBVTFCO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBR1o7SUFBVyxZQUFhLEVBQUE7RUFFeEI7SUFBa0MsYUFBYSxFQUFBO0VBRS9DO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBR1o7SUFBbUIsYUFBYSxFQUFBO0VBRWhDO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixPQUFPLEVBQUE7RUFHVDtJQUFRLFFBQVEsRUFBQTtFQUVoQjtJQUFnQyxhQUFhLEVBQUEsRUFBSVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdoZWxwZXJzJztcXHJcXG5cXHJcXG4vL0NvbG9yc1xcclxcbiRzZWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xcclxcbiRtb2JpbGUtbWVudS1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0ZTY7XFxyXFxuJHNlY3Rpb25zLWJvcmRlci1jb2xvcjogIzAwMDtcXHJcXG4kd2hpdGUtY29sb3I6ICNmZmZmO1xcclxcbiRiYXNpYy1mb250LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuXFxyXFxuLy9Db250YWluZXIgc2l6ZXNcXHJcXG4kZm9ybS1jb250YWluZXI6IDU3JTtcXHJcXG4kbGFyZ2Utc2VjdGlvbi1jb250YWluZXI6IDEwMHZ3O1xcclxcblxcclxcbi8vVGV4dCBzaXplc1xcclxcbiRsaW5rcy1hbmQtY3RhLWZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMS4xZW0sIDI3cHgpO1xcclxcblxcclxcbi8vRGV2aWNlcyBzaXplc1xcclxcbiR4cy1zY3JlZW46IDQ1MHB4O1xcclxcbiRtZC1zY3JlZW46IDcwMHB4O1xcclxcbiRsZy1zY3JlZW46IDEwMjRweDtcXHJcXG5cXHJcXG4vL0ZvbnRzXFxyXFxuJHRpdGxlLWZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXHJcXG4kdGV4dC1mb250LWZhbWlseTogJ0dvdGhhbSBpdGFsaWMnO1xcclxcbiRnb3RoYW0tYm9sZDogJ0dvdGhhbSBib2xkJztcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gYm9sZCc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgc3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGYnKTtcXHJcXG59XCIsXCJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFyaWFibGVzJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbi5tb2JpbGVfY2Fyb3VzZWxfY29udGFpbmVye31cXHJcXG4uc2xpZGVyc3t9XFxyXFxuLmFib3V0LXBhcmFncmFwaHN7fVxcclxcbi5hYm91dC1xdW90ZXt9XFxyXFxuLmFycm93e31cXHJcXG4uYmFja3t9XFxyXFxuLnNsaWRlci13cmFwcGVye31cXHJcXG4ubmV4dHt9XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtZC1zY3JlZW4pIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcclxcbiAgICBwYWRkaW5nOiA1JSAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMzl2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVycyB7IGhlaWdodDogMTAwJSB9XFxyXFxuXFxyXFxuICAuYWJvdXQtcGFyYWdyYXBocyAsLmFib3V0LXF1b3RlIHsgZGlzcGxheTogbm9uZTsgfVxcclxcblxcclxcbiAgLmFycm93IHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMTAlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFycm93W2Rpc2FibGVkXSB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG5cXHJcXG4gIC5iYWNrIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXh0IHsgcmlnaHQ6IDA7IH1cXHJcXG5cXHJcXG4gIC5hcnJvdywgLnNsaWRlci13cmFwcGVyOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfY29udGFpbmVyX19EM0RRUFwiLFxuXHRcIm1vYmlsZV9jYXJvdXNlbF9jb250YWluZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfbW9iaWxlX2Nhcm91c2VsX2NvbnRhaW5lcl9fM0FMbTdcIixcblx0XCJzbGlkZXJzXCI6IFwibW9iaWxlLWNhcm91c2VsX3NsaWRlcnNfXzM3dWpJXCIsXG5cdFwiYWJvdXQtcGFyYWdyYXBoc1wiOiBcIm1vYmlsZS1jYXJvdXNlbF9hYm91dC1wYXJhZ3JhcGhzX18zc3ZyeVwiLFxuXHRcImFib3V0LXF1b3RlXCI6IFwibW9iaWxlLWNhcm91c2VsX2Fib3V0LXF1b3RlX18yRVhwb1wiLFxuXHRcImFycm93XCI6IFwibW9iaWxlLWNhcm91c2VsX2Fycm93X18xUXRFNFwiLFxuXHRcImJhY2tcIjogXCJtb2JpbGUtY2Fyb3VzZWxfYmFja19fMzdidVNcIixcblx0XCJuZXh0XCI6IFwibW9iaWxlLWNhcm91c2VsX25leHRfXzMxR2ZKXCIsXG5cdFwic2xpZGVyLXdyYXBwZXJcIjogXCJtb2JpbGUtY2Fyb3VzZWxfc2xpZGVyLXdyYXBwZXJfXzI0U1lqXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==