webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/contact/contacs.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/contact/contacs.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\n  font-family: \\\"Gotham light\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\\\"/assets/fonts/Gotham-Light.otf\\\");\\n}\\n@font-face {\\n  font-family: \\\"Gotham bold\\\";\\n  font-style: normal;\\n  font-weight: 600;\\n  src: url(\\\"/assets/fonts/Gotham-Bold.otf\\\");\\n}\\n@font-face {\\n  font-family: \\\"Gotham italic\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\\\"/assets/fonts/Gotham-BookIta.otf\\\");\\n}\\n.contacs_container__O0oEd {\\n  background-color: #e4e4e4;\\n  margin: 1% 0;\\n}\\n.contacs_container__O0oEd .contacs_item__1avXa {\\n  text-align: center;\\n  font-size: clamp(100%, 2vw, 1.5rem);\\n  padding: 1% 0;\\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));\\n  background-image: linear-gradient(#000, #000);\\n  background-position: 0 100%;\\n  background-size: 0 2px;\\n  background-repeat: no-repeat;\\n}\\n\\n.contacs_link__1CuA0:hover {\\n  cursor: pointer;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n  background-position: 50% 50%;\\n  background-size: 2% 2px;\\n}\\n\\n.contacs_contact-black-border__2zTbI {\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  position: absolute;\\n  border: solid;\\n  margin: auto;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../css/variables.scss\",\"webpack://contacs.module.scss\"],\"names\":[],\"mappings\":\"AA0BA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,0CAAA;ACzBF;AD4BA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,yCAAA;AC1BF;AD6BA;EACE,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,4CAAA;AC3BF;AAfA;EACE,yBAAA;EACA,YAAA;AAiBF;AAfE;EACE,kBAAA;EACA,mCAAA;EACA,aAAA;EACA,uFAAA;EAAA,6CAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;AAiBJ;;AAbA;EACE,eAAA;EACA,wBAAA;EAAA,gBAAA;EACA,4BAAA;EACA,uBAAA;AAgBF;;AAbA;EACE,YAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;AAgBF\",\"sourcesContent\":[\"@import 'helpers';\\n\\n//Colors\\n$sections-background-color: #e4e4e4;\\n$mobile-menu-background-color: #e4e4e4e6;\\n$sections-border-color: #000;\\n$white-color: #ffff;\\n$basic-font-color: rgba(0, 0, 0, 0.7);\\n\\n//Container sizes\\n$form-container: 57%;\\n$large-section-container: 100vw;\\n\\n//Text sizes\\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\\n\\n//Devices sizes\\n$xs-screen: 450px;\\n$md-screen: 700px;\\n$lg-screen: 1024px;\\n\\n//Fonts\\n$title-font-family: 'Gotham light';\\n$text-font-family: 'Gotham italic';\\n$gotham-bold: 'Gotham bold';\\n\\n@font-face {\\n  font-family: 'Gotham light';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url('/assets/fonts/Gotham-Light.otf');\\n}\\n\\n@font-face {\\n  font-family: 'Gotham bold';\\n  font-style: normal;\\n  font-weight: 600;\\n  src: url('/assets/fonts/Gotham-Bold.otf');\\n}\\n\\n@font-face {\\n  font-family: 'Gotham italic';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url('/assets/fonts/Gotham-BookIta.otf');\\n}\\n\",\"@import \\\"../../css/variables\\\";\\n\\n.container {\\n  background-color: $sections-background-color;\\n  margin: 1% 0;\\n\\n  .item {\\n    text-align: center;\\n    font-size: clamp(100%, 2vw, 1.5rem);\\n    padding: 1% 0;\\n    background-image: linear-gradient(#000, #000);\\n    background-position: 0 100%;\\n    background-size: 0 2px;\\n    background-repeat: no-repeat;\\n  }\\n}\\n\\n.link:hover {\\n  cursor: pointer;\\n  transition: 0.4s;\\n  background-position: 50% 50%;\\n  background-size: 2% 2px;\\n}\\n\\n.contact-black-border {\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  position: absolute;\\n  border: solid;\\n  margin: auto;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"contacs_container__O0oEd\",\n\t\"item\": \"contacs_item__1avXa\",\n\t\"link\": \"contacs_link__1CuA0\",\n\t\"contact-black-border\": \"contacs_contact-black-border__2zTbI\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3MubW9kdWxlLnNjc3M/YTUxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxrQ0FBa0MsdUJBQXVCLHFCQUFxQixpREFBaUQsR0FBRyxjQUFjLGlDQUFpQyx1QkFBdUIscUJBQXFCLGdEQUFnRCxHQUFHLGNBQWMsbUNBQW1DLHVCQUF1QixxQkFBcUIsbURBQW1ELEdBQUcsNkJBQTZCLDhCQUE4QixpQkFBaUIsR0FBRyxrREFBa0QsdUJBQXVCLHdDQUF3QyxrQkFBa0IsNEZBQTRGLGtEQUFrRCxnQ0FBZ0MsMkJBQTJCLGlDQUFpQyxHQUFHLGdDQUFnQyxvQkFBb0IsNkJBQTZCLHFCQUFxQixpQ0FBaUMsNEJBQTRCLEdBQUcsMENBQTBDLGlCQUFpQixXQUFXLFlBQVksYUFBYSx1QkFBdUIsa0JBQWtCLGlCQUFpQixHQUFHLE9BQU8sMEhBQTBILFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsNENBQTRDLGtEQUFrRCwyQ0FBMkMsK0JBQStCLHNCQUFzQix3Q0FBd0MsNENBQTRDLGtDQUFrQyxxRUFBcUUsdUNBQXVDLG9CQUFvQixxQkFBcUIsZ0RBQWdELHFDQUFxQyw4QkFBOEIsZ0JBQWdCLGdDQUFnQyx1QkFBdUIscUJBQXFCLCtDQUErQyxHQUFHLGdCQUFnQiwrQkFBK0IsdUJBQXVCLHFCQUFxQiw4Q0FBOEMsR0FBRyxnQkFBZ0IsaUNBQWlDLHVCQUF1QixxQkFBcUIsaURBQWlELEdBQUcscUNBQXFDLGdCQUFnQixpREFBaUQsaUJBQWlCLGFBQWEseUJBQXlCLDBDQUEwQyxvQkFBb0Isb0RBQW9ELGtDQUFrQyw2QkFBNkIsbUNBQW1DLEtBQUssR0FBRyxpQkFBaUIsb0JBQW9CLHFCQUFxQixpQ0FBaUMsNEJBQTRCLEdBQUcsMkJBQTJCLGlCQUFpQixXQUFXLFlBQVksYUFBYSx1QkFBdUIsa0JBQWtCLGlCQUFpQixHQUFHLHFCQUFxQjtBQUMxNEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3MubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGxpZ2h0XFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gYm9sZFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gaXRhbGljXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGZcXFwiKTtcXG59XFxuLmNvbnRhY3NfY29udGFpbmVyX19PMG9FZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xcbiAgbWFyZ2luOiAxJSAwO1xcbn1cXG4uY29udGFjc19jb250YWluZXJfX08wb0VkIC5jb250YWNzX2l0ZW1fXzFhdlhhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMnZ3LCAxLjVyZW0pO1xcbiAgcGFkZGluZzogMSUgMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzAwMCksIHRvKCMwMDApKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwLCAjMDAwKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udGFjc19saW5rX18xQ3VBMDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMiUgMnB4O1xcbn1cXG5cXG4uY29udGFjc19jb250YWN0LWJsYWNrLWJvcmRlcl9fMnpUYkkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIG1hcmdpbjogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL2Nzcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL2NvbnRhY3MubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMEJBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUN6QkY7QUQ0QkE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQzFCRjtBRDZCQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDM0JGO0FBZkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFpQkY7QUFmRTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUZBQUE7RUFBQSw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQWlCSjs7QUFiQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQWdCRjs7QUFiQTtFQUNFLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBZ0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2hlbHBlcnMnO1xcblxcbi8vQ29sb3JzXFxuJHNlY3Rpb25zLWJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XFxuJG1vYmlsZS1tZW51LWJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTRlNjtcXG4kc2VjdGlvbnMtYm9yZGVyLWNvbG9yOiAjMDAwO1xcbiR3aGl0ZS1jb2xvcjogI2ZmZmY7XFxuJGJhc2ljLWZvbnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG5cXG4vL0NvbnRhaW5lciBzaXplc1xcbiRmb3JtLWNvbnRhaW5lcjogNTclO1xcbiRsYXJnZS1zZWN0aW9uLWNvbnRhaW5lcjogMTAwdnc7XFxuXFxuLy9UZXh0IHNpemVzXFxuJGxpbmtzLWFuZC1jdGEtZm9udC1zaXplOiBjbGFtcCgxMDAlLCAxLjFlbSwgMjdweCk7XFxuXFxuLy9EZXZpY2VzIHNpemVzXFxuJHhzLXNjcmVlbjogNDUwcHg7XFxuJG1kLXNjcmVlbjogNzAwcHg7XFxuJGxnLXNjcmVlbjogMTAyNHB4O1xcblxcbi8vRm9udHNcXG4kdGl0bGUtZm9udC1mYW1pbHk6ICdHb3RoYW0gbGlnaHQnO1xcbiR0ZXh0LWZvbnQtZmFtaWx5OiAnR290aGFtIGl0YWxpYyc7XFxuJGdvdGhhbS1ib2xkOiAnR290aGFtIGJvbGQnO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gbGlnaHQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dvdGhhbS1MaWdodC5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBib2xkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9sZC5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBpdGFsaWMnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb29rSXRhLm90ZicpO1xcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL2Nzcy92YXJpYWJsZXNcXFwiO1xcblxcbi5jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb25zLWJhY2tncm91bmQtY29sb3I7XFxuICBtYXJnaW46IDElIDA7XFxuXFxuICAuaXRlbSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMDAlLCAydncsIDEuNXJlbSk7XFxuICAgIHBhZGRpbmc6IDElIDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwLCAjMDAwKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMiUgMnB4O1xcbn1cXG5cXG4uY29udGFjdC1ibGFjay1ib3JkZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFjc19jb250YWluZXJfX08wb0VkXCIsXG5cdFwiaXRlbVwiOiBcImNvbnRhY3NfaXRlbV9fMWF2WGFcIixcblx0XCJsaW5rXCI6IFwiY29udGFjc19saW5rX18xQ3VBMFwiLFxuXHRcImNvbnRhY3QtYmxhY2stYm9yZGVyXCI6IFwiY29udGFjc19jb250YWN0LWJsYWNrLWJvcmRlcl9fMnpUYklcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/contact/contacs.module.scss\n");

/***/ })

})