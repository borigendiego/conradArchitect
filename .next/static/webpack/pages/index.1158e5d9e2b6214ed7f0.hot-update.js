webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/contact/contacs.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/contact/contacs.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\n  font-family: \\\"Gotham light\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\\\"/assets/fonts/Gotham-Light.otf\\\");\\n}\\n@font-face {\\n  font-family: \\\"Gotham bold\\\";\\n  font-style: normal;\\n  font-weight: 600;\\n  src: url(\\\"/assets/fonts/Gotham-Bold.otf\\\");\\n}\\n@font-face {\\n  font-family: \\\"Gotham italic\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\\\"/assets/fonts/Gotham-BookIta.otf\\\");\\n}\\n.contacs_container__O0oEd {\\n  background-color: #e4e4e4;\\n  margin: 1% 0;\\n}\\n.contacs_container__O0oEd .contacs_item__1avXa {\\n  text-align: center;\\n  font-size: clamp(100%, 2vw, 1.5rem);\\n  padding: 1% 0;\\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));\\n  background-image: linear-gradient(#000, #000);\\n  background-position: 0 100%;\\n  background-size: 0 2px;\\n  background-repeat: no-repeat;\\n}\\n\\n.contacs_link__1CuA0:hover {\\n  cursor: pointer;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n  background-size: 2% 2px;\\n}\\n\\n.contacs_contact-black-border__2zTbI {\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  position: absolute;\\n  border: solid;\\n  margin: auto;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../css/variables.scss\",\"webpack://contacs.module.scss\"],\"names\":[],\"mappings\":\"AA0BA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,0CAAA;ACzBF;AD4BA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,yCAAA;AC1BF;AD6BA;EACE,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,4CAAA;AC3BF;AAfA;EACE,yBAAA;EACA,YAAA;AAiBF;AAfE;EACE,kBAAA;EACA,mCAAA;EACA,aAAA;EACA,uFAAA;EAAA,6CAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;AAiBJ;;AAbA;EACE,eAAA;EACA,wBAAA;EAAA,gBAAA;EAEA,uBAAA;AAeF;;AAZA;EACE,YAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;AAeF\",\"sourcesContent\":[\"@import 'helpers';\\n\\n//Colors\\n$sections-background-color: #e4e4e4;\\n$mobile-menu-background-color: #e4e4e4e6;\\n$sections-border-color: #000;\\n$white-color: #ffff;\\n$basic-font-color: rgba(0, 0, 0, 0.7);\\n\\n//Container sizes\\n$form-container: 57%;\\n$large-section-container: 100vw;\\n\\n//Text sizes\\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\\n\\n//Devices sizes\\n$xs-screen: 450px;\\n$md-screen: 700px;\\n$lg-screen: 1024px;\\n\\n//Fonts\\n$title-font-family: 'Gotham light';\\n$text-font-family: 'Gotham italic';\\n$gotham-bold: 'Gotham bold';\\n\\n@font-face {\\n  font-family: 'Gotham light';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url('/assets/fonts/Gotham-Light.otf');\\n}\\n\\n@font-face {\\n  font-family: 'Gotham bold';\\n  font-style: normal;\\n  font-weight: 600;\\n  src: url('/assets/fonts/Gotham-Bold.otf');\\n}\\n\\n@font-face {\\n  font-family: 'Gotham italic';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url('/assets/fonts/Gotham-BookIta.otf');\\n}\\n\",\"@import \\\"../../css/variables\\\";\\n\\n.container {\\n  background-color: $sections-background-color;\\n  margin: 1% 0;\\n\\n  .item {\\n    text-align: center;\\n    font-size: clamp(100%, 2vw, 1.5rem);\\n    padding: 1% 0;\\n    background-image: linear-gradient(#000, #000);\\n    background-position: 0 100%;\\n    background-size: 0 2px;\\n    background-repeat: no-repeat;\\n  }\\n}\\n\\n.link:hover {\\n  cursor: pointer;\\n  transition: 0.4s;\\n  //background-position: 100% 100%;\\n  background-size: 2% 2px;\\n}\\n\\n.contact-black-border {\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  position: absolute;\\n  border: solid;\\n  margin: auto;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"contacs_container__O0oEd\",\n\t\"item\": \"contacs_item__1avXa\",\n\t\"link\": \"contacs_link__1CuA0\",\n\t\"contact-black-border\": \"contacs_contact-black-border__2zTbI\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3MubW9kdWxlLnNjc3M/YTUxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxrQ0FBa0MsdUJBQXVCLHFCQUFxQixpREFBaUQsR0FBRyxjQUFjLGlDQUFpQyx1QkFBdUIscUJBQXFCLGdEQUFnRCxHQUFHLGNBQWMsbUNBQW1DLHVCQUF1QixxQkFBcUIsbURBQW1ELEdBQUcsNkJBQTZCLDhCQUE4QixpQkFBaUIsR0FBRyxrREFBa0QsdUJBQXVCLHdDQUF3QyxrQkFBa0IsNEZBQTRGLGtEQUFrRCxnQ0FBZ0MsMkJBQTJCLGlDQUFpQyxHQUFHLGdDQUFnQyxvQkFBb0IsNkJBQTZCLHFCQUFxQiw0QkFBNEIsR0FBRywwQ0FBMEMsaUJBQWlCLFdBQVcsWUFBWSxhQUFhLHVCQUF1QixrQkFBa0IsaUJBQWlCLEdBQUcsT0FBTywwSEFBMEgsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsMkNBQTJDLGtEQUFrRCwyQ0FBMkMsK0JBQStCLHNCQUFzQix3Q0FBd0MsNENBQTRDLGtDQUFrQyxxRUFBcUUsdUNBQXVDLG9CQUFvQixxQkFBcUIsZ0RBQWdELHFDQUFxQyw4QkFBOEIsZ0JBQWdCLGdDQUFnQyx1QkFBdUIscUJBQXFCLCtDQUErQyxHQUFHLGdCQUFnQiwrQkFBK0IsdUJBQXVCLHFCQUFxQiw4Q0FBOEMsR0FBRyxnQkFBZ0IsaUNBQWlDLHVCQUF1QixxQkFBcUIsaURBQWlELEdBQUcscUNBQXFDLGdCQUFnQixpREFBaUQsaUJBQWlCLGFBQWEseUJBQXlCLDBDQUEwQyxvQkFBb0Isb0RBQW9ELGtDQUFrQyw2QkFBNkIsbUNBQW1DLEtBQUssR0FBRyxpQkFBaUIsb0JBQW9CLHFCQUFxQixxQ0FBcUMsNEJBQTRCLEdBQUcsMkJBQTJCLGlCQUFpQixXQUFXLFlBQVksYUFBYSx1QkFBdUIsa0JBQWtCLGlCQUFpQixHQUFHLHFCQUFxQjtBQUNoMkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3MubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGxpZ2h0XFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gYm9sZFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gaXRhbGljXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGZcXFwiKTtcXG59XFxuLmNvbnRhY3NfY29udGFpbmVyX19PMG9FZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xcbiAgbWFyZ2luOiAxJSAwO1xcbn1cXG4uY29udGFjc19jb250YWluZXJfX08wb0VkIC5jb250YWNzX2l0ZW1fXzFhdlhhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMnZ3LCAxLjVyZW0pO1xcbiAgcGFkZGluZzogMSUgMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzAwMCksIHRvKCMwMDApKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwLCAjMDAwKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udGFjc19saW5rX18xQ3VBMDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyJSAycHg7XFxufVxcblxcbi5jb250YWNzX2NvbnRhY3QtYmxhY2stYm9yZGVyX18yelRiSSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vY3NzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29udGFjcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwQkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQ3pCRjtBRDRCQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDMUJGO0FENkJBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUMzQkY7QUFmQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQWlCRjtBQWZFO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSx1RkFBQTtFQUFBLDZDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBaUJKOztBQWJBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSx1QkFBQTtBQWVGOztBQVpBO0VBQ0UsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFlRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdoZWxwZXJzJztcXG5cXG4vL0NvbG9yc1xcbiRzZWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xcbiRtb2JpbGUtbWVudS1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0ZTY7XFxuJHNlY3Rpb25zLWJvcmRlci1jb2xvcjogIzAwMDtcXG4kd2hpdGUtY29sb3I6ICNmZmZmO1xcbiRiYXNpYy1mb250LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuXFxuLy9Db250YWluZXIgc2l6ZXNcXG4kZm9ybS1jb250YWluZXI6IDU3JTtcXG4kbGFyZ2Utc2VjdGlvbi1jb250YWluZXI6IDEwMHZ3O1xcblxcbi8vVGV4dCBzaXplc1xcbiRsaW5rcy1hbmQtY3RhLWZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMS4xZW0sIDI3cHgpO1xcblxcbi8vRGV2aWNlcyBzaXplc1xcbiR4cy1zY3JlZW46IDQ1MHB4O1xcbiRtZC1zY3JlZW46IDcwMHB4O1xcbiRsZy1zY3JlZW46IDEwMjRweDtcXG5cXG4vL0ZvbnRzXFxuJHRpdGxlLWZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXG4kdGV4dC1mb250LWZhbWlseTogJ0dvdGhhbSBpdGFsaWMnO1xcbiRnb3RoYW0tYm9sZDogJ0dvdGhhbSBib2xkJztcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gYm9sZCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGYnKTtcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9jc3MvdmFyaWFibGVzXFxcIjtcXG5cXG4uY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yO1xcbiAgbWFyZ2luOiAxJSAwO1xcblxcbiAgLml0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMnZ3LCAxLjVyZW0pO1xcbiAgICBwYWRkaW5nOiAxJSAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMCwgIzAwMCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDJweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIH1cXG59XFxuXFxuLmxpbms6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyJSAycHg7XFxufVxcblxcbi5jb250YWN0LWJsYWNrLWJvcmRlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjb250YWNzX2NvbnRhaW5lcl9fTzBvRWRcIixcblx0XCJpdGVtXCI6IFwiY29udGFjc19pdGVtX18xYXZYYVwiLFxuXHRcImxpbmtcIjogXCJjb250YWNzX2xpbmtfXzFDdUEwXCIsXG5cdFwiY29udGFjdC1ibGFjay1ib3JkZXJcIjogXCJjb250YWNzX2NvbnRhY3QtYmxhY2stYm9yZGVyX18yelRiSVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/contact/contacs.module.scss\n");

/***/ })

})