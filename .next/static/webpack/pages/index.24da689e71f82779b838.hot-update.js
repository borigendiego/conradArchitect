webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/header/header.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/header/header.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\n  font-family: \\\"Gotham light\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\\\"/assets/fonts/Gotham-Light.otf\\\");\\n}\\n@font-face {\\n  font-family: \\\"Gotham bold\\\";\\n  font-style: normal;\\n  font-weight: 600;\\n  src: url(\\\"/assets/fonts/Gotham-Bold.otf\\\");\\n}\\n@font-face {\\n  font-family: \\\"Gotham italic\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\\\"/assets/fonts/Gotham-BookIta.otf\\\");\\n}\\n.header_container__3VBVB {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  padding: 30px 60px;\\n}\\n.header_container__3VBVB .header_logo__eiLSq {\\n  object-fit: contain;\\n}\\n\\n.header_nav__3hxH5 {\\n  display: -moz-box;\\n  display: flex;\\n  list-style: none;\\n  justify-content: space-around;\\n  width: 40%;\\n  color: white;\\n}\\n.header_nav__3hxH5 a {\\n  text-decoration: none;\\n  color: #ffff;\\n  font-size: clamp(100%, 1.1em, 27px);\\n}\\n.header_nav__3hxH5 li {\\n  font-family: \\\"Gotham light\\\";\\n  display: inline-block;\\n  padding-bottom: 2px;\\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\\n  background-image: linear-gradient(#fff, #fff);\\n  background-position: 0 100%;\\n  /*OR bottom left*/\\n  background-size: 0 2px;\\n  background-repeat: no-repeat;\\n}\\n.header_nav__3hxH5 li:hover {\\n  cursor: pointer;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n  background-position: 100% 100%;\\n  /*OR bottom right*/\\n  background-size: 100% 2px;\\n}\\n\\n@media (max-width: 450px) {\\n  #header_bigScreenMenu__1lHBc {\\n    display: none;\\n  }\\n\\n  .header_container__3VBVB {\\n    -moz-box-orient: vertical;\\n    -moz-box-direction: reverse;\\n         flex-direction: column-reverse;\\n  }\\n\\n  .header_logo__eiLSq {\\n    margin-top: 30%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../css/variables.scss\",\"webpack://header.module.scss\"],\"names\":[],\"mappings\":\"AA0BA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,0CAAA;ACzBF;AD4BA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,yCAAA;AC1BF;AD6BA;EACE,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,4CAAA;AC3BF;AAbA;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,kBAAA;AAeF;AAbE;EACE,mBAAA;AAeJ;;AAXA;EACE,iBAAA;EAAA,aAAA;EACA,gBAAA;EACA,6BAAA;EACA,UAAA;EACA,YAAA;AAcF;AAZE;EACE,qBAAA;EACA,YDjBU;ECkBV,mCDVsB;ACwB1B;AAXE;EACE,2BDNgB;ECOhB,qBAAA;EACA,mBAAA;EACA,uFAAA;EAAA,6CAAA;EACA,2BAAA;EAA6B,iBAAA;EAC7B,sBAAA;EACA,4BAAA;AAcJ;AAXE;EACE,eAAA;EACA,wBAAA;EAAA,gBAAA;EACA,8BAAA;EAAgC,kBAAA;EAChC,yBAAA;AAcJ;;AAVA;EACE;IACE,aAAA;EAaF;;EAVA;IACE,yBAAA;IAAA,2BAAA;SAAA,8BAAA;EAaF;;EAVA;IACE,eAAA;EAaF;AACF\",\"sourcesContent\":[\"@import 'helpers';\\n\\n//Colors\\n$sections-background-color: #e4e4e4;\\n$mobile-menu-background-color: #e4e4e4e6;\\n$sections-border-color: #000;\\n$white-color: #ffff;\\n$basic-font-color: rgba(0, 0, 0, 0.7);\\n\\n//Container sizes\\n$form-container: 57%;\\n$large-section-container: 100vw;\\n\\n//Text sizes\\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\\n\\n//Devices sizes\\n$xs-screen: 450px;\\n$md-screen: 700px;\\n$lg-screen: 1024px;\\n\\n//Fonts\\n$title-font-family: 'Gotham light';\\n$text-font-family: 'Gotham italic';\\n$gotham-bold: 'Gotham bold';\\n\\n@font-face {\\n  font-family: 'Gotham light';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url('/assets/fonts/Gotham-Light.otf');\\n}\\n\\n@font-face {\\n  font-family: 'Gotham bold';\\n  font-style: normal;\\n  font-weight: 600;\\n  src: url('/assets/fonts/Gotham-Bold.otf');\\n}\\n\\n@font-face {\\n  font-family: 'Gotham italic';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url('/assets/fonts/Gotham-BookIta.otf');\\n}\\n\",\"@import '../../css/variables';\\n\\n#bigScreenMenu{}\\n\\n.container {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 30px 60px;\\n\\n  .logo {\\n    object-fit: contain;\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  list-style: none;\\n  justify-content: space-around;\\n  width: 40%;\\n  color: white;\\n\\n  a {\\n    text-decoration: none;\\n    color: $white-color;\\n    font-size: $links-and-cta-font-size;\\n  }\\n\\n  li {\\n    font-family: $title-font-family;\\n    display: inline-block;\\n    padding-bottom:2px;\\n    background-image: linear-gradient(#fff, #fff);\\n    background-position: 0 100%; /*OR bottom left*/\\n    background-size: 0 2px;\\n    background-repeat: no-repeat;\\n  }\\n\\n  li:hover {\\n    cursor: pointer;\\n    transition: 0.4s;\\n    background-position: 100% 100%; /*OR bottom right*/\\n    background-size: 100% 2px;\\n  }\\n}\\n\\n@media (max-width: $xs-screen) {\\n  #bigScreenMenu {\\n    display: none;\\n  }\\n\\n  .container {\\n    flex-direction: column-reverse;\\n  }\\n\\n  .logo {\\n    margin-top: 30%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"header_container__3VBVB\",\n\t\"logo\": \"header_logo__eiLSq\",\n\t\"nav\": \"header_nav__3hxH5\",\n\t\"bigScreenMenu\": \"header_bigScreenMenu__1lHBc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZS5zY3NzP2NmZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLGVBQWUsa0NBQWtDLHVCQUF1QixxQkFBcUIsaURBQWlELEdBQUcsY0FBYyxpQ0FBaUMsdUJBQXVCLHFCQUFxQixnREFBZ0QsR0FBRyxjQUFjLG1DQUFtQyx1QkFBdUIscUJBQXFCLG1EQUFtRCxHQUFHLDRCQUE0QixzQkFBc0Isa0JBQWtCLDJCQUEyQix3Q0FBd0MsdUJBQXVCLEdBQUcsZ0RBQWdELHdCQUF3QixHQUFHLHdCQUF3QixzQkFBc0Isa0JBQWtCLHFCQUFxQixrQ0FBa0MsZUFBZSxpQkFBaUIsR0FBRyx3QkFBd0IsMEJBQTBCLGlCQUFpQix3Q0FBd0MsR0FBRyx5QkFBeUIsa0NBQWtDLDBCQUEwQix3QkFBd0IsNEZBQTRGLGtEQUFrRCxnQ0FBZ0MsaURBQWlELGlDQUFpQyxHQUFHLCtCQUErQixvQkFBb0IsNkJBQTZCLHFCQUFxQixtQ0FBbUMscURBQXFELEdBQUcsK0JBQStCLGtDQUFrQyxvQkFBb0IsS0FBSyxnQ0FBZ0MsZ0NBQWdDLGtDQUFrQywwQ0FBMEMsS0FBSywyQkFBMkIsc0JBQXNCLEtBQUssR0FBRyxPQUFPLHlIQUF5SCxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssMkNBQTJDLGtEQUFrRCwyQ0FBMkMsK0JBQStCLHNCQUFzQix3Q0FBd0MsNENBQTRDLGtDQUFrQyxxRUFBcUUsdUNBQXVDLG9CQUFvQixxQkFBcUIsZ0RBQWdELHFDQUFxQyw4QkFBOEIsZ0JBQWdCLGdDQUFnQyx1QkFBdUIscUJBQXFCLCtDQUErQyxHQUFHLGdCQUFnQiwrQkFBK0IsdUJBQXVCLHFCQUFxQiw4Q0FBOEMsR0FBRyxnQkFBZ0IsaUNBQWlDLHVCQUF1QixxQkFBcUIsaURBQWlELEdBQUcsbUNBQW1DLG9CQUFvQixnQkFBZ0Isa0JBQWtCLG1DQUFtQyx1QkFBdUIsYUFBYSwwQkFBMEIsS0FBSyxHQUFHLFVBQVUsa0JBQWtCLHFCQUFxQixrQ0FBa0MsZUFBZSxpQkFBaUIsU0FBUyw0QkFBNEIsMEJBQTBCLDBDQUEwQyxLQUFLLFVBQVUsc0NBQXNDLDRCQUE0Qix5QkFBeUIsb0RBQW9ELGtDQUFrQyxnREFBZ0QsbUNBQW1DLEtBQUssZ0JBQWdCLHNCQUFzQix1QkFBdUIscUNBQXFDLG9EQUFvRCxLQUFLLEdBQUcsb0NBQW9DLG9CQUFvQixvQkFBb0IsS0FBSyxrQkFBa0IscUNBQXFDLEtBQUssYUFBYSxzQkFBc0IsS0FBSyxHQUFHLHFCQUFxQjtBQUNqako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdvdGhhbSBsaWdodFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUxpZ2h0Lm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGJvbGRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb2xkLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGl0YWxpY1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUJvb2tJdGEub3RmXFxcIik7XFxufVxcbi5oZWFkZXJfY29udGFpbmVyX18zVkJWQiB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4IDYwcHg7XFxufVxcbi5oZWFkZXJfY29udGFpbmVyX18zVkJWQiAuaGVhZGVyX2xvZ29fX2VpTFNxIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5oZWFkZXJfbmF2X18zaHhINSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyX25hdl9fM2h4SDUgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZmY7XFxuICBmb250LXNpemU6IGNsYW1wKDEwMCUsIDEuMWVtLCAyN3B4KTtcXG59XFxuLmhlYWRlcl9uYXZfXzNoeEg1IGxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGxpZ2h0XFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZmYpLCB0bygjZmZmKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XFxuICAvKk9SIGJvdHRvbSBsZWZ0Ki9cXG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uaGVhZGVyX25hdl9fM2h4SDUgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcXG4gIC8qT1IgYm90dG9tIHJpZ2h0Ki9cXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgI2hlYWRlcl9iaWdTY3JlZW5NZW51X18xbEhCYyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaGVhZGVyX2NvbnRhaW5lcl9fM1ZCVkIge1xcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9sb2dvX19laUxTcSB7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL2Nzcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL2hlYWRlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwQkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQ3pCRjtBRDRCQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDMUJGO0FENkJBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUMzQkY7QUFiQTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsOEJBQUE7RUFDQSxrQkFBQTtBQWVGO0FBYkU7RUFDRSxtQkFBQTtBQWVKOztBQVhBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBY0Y7QUFaRTtFQUNFLHFCQUFBO0VBQ0EsWURqQlU7RUNrQlYsbUNEVnNCO0FDd0IxQjtBQVhFO0VBQ0UsMkJETmdCO0VDT2hCLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RkFBQTtFQUFBLDZDQUFBO0VBQ0EsMkJBQUE7RUFBNkIsaUJBQUE7RUFDN0Isc0JBQUE7RUFDQSw0QkFBQTtBQWNKO0FBWEU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDhCQUFBO0VBQWdDLGtCQUFBO0VBQ2hDLHlCQUFBO0FBY0o7O0FBVkE7RUFDRTtJQUNFLGFBQUE7RUFhRjs7RUFWQTtJQUNFLHlCQUFBO0lBQUEsMkJBQUE7U0FBQSw4QkFBQTtFQWFGOztFQVZBO0lBQ0UsZUFBQTtFQWFGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnaGVscGVycyc7XFxuXFxuLy9Db2xvcnNcXG4kc2VjdGlvbnMtYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcXG4kbW9iaWxlLW1lbnUtYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNGU2O1xcbiRzZWN0aW9ucy1ib3JkZXItY29sb3I6ICMwMDA7XFxuJHdoaXRlLWNvbG9yOiAjZmZmZjtcXG4kYmFzaWMtZm9udC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcblxcbi8vQ29udGFpbmVyIHNpemVzXFxuJGZvcm0tY29udGFpbmVyOiA1NyU7XFxuJGxhcmdlLXNlY3Rpb24tY29udGFpbmVyOiAxMDB2dztcXG5cXG4vL1RleHQgc2l6ZXNcXG4kbGlua3MtYW5kLWN0YS1mb250LXNpemU6IGNsYW1wKDEwMCUsIDEuMWVtLCAyN3B4KTtcXG5cXG4vL0RldmljZXMgc2l6ZXNcXG4keHMtc2NyZWVuOiA0NTBweDtcXG4kbWQtc2NyZWVuOiA3MDBweDtcXG4kbGctc2NyZWVuOiAxMDI0cHg7XFxuXFxuLy9Gb250c1xcbiR0aXRsZS1mb250LWZhbWlseTogJ0dvdGhhbSBsaWdodCc7XFxuJHRleHQtZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXG4kZ290aGFtLWJvbGQ6ICdHb3RoYW0gYm9sZCc7XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBsaWdodCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR290aGFtLUxpZ2h0Lm90ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGJvbGQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb2xkLm90ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGl0YWxpYyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR290aGFtLUJvb2tJdGEub3RmJyk7XFxufVxcblwiLFwiQGltcG9ydCAnLi4vLi4vY3NzL3ZhcmlhYmxlcyc7XFxuXFxuI2JpZ1NjcmVlbk1lbnV7fVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHggNjBweDtcXG5cXG4gIC5sb2dvIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIH1cXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogJGxpbmtzLWFuZC1jdGEtZm9udC1zaXplO1xcbiAgfVxcblxcbiAgbGkge1xcbiAgICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQtZmFtaWx5O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOjJweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZmYpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7IC8qT1IgYm90dG9tIGxlZnQqL1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcblxcbiAgbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTsgLypPUiBib3R0b20gcmlnaHQqL1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJHhzLXNjcmVlbikge1xcbiAgI2JpZ1NjcmVlbk1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoZWFkZXJfY29udGFpbmVyX18zVkJWQlwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fZWlMU3FcIixcblx0XCJuYXZcIjogXCJoZWFkZXJfbmF2X18zaHhINVwiLFxuXHRcImJpZ1NjcmVlbk1lbnVcIjogXCJoZWFkZXJfYmlnU2NyZWVuTWVudV9fMWxIQmNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/header/header.module.scss\n");

/***/ })

})