webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/header/header.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/header/header.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"Gotham light\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-Light.otf\");\n}\n@font-face {\n  font-family: \"Gotham bold\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"/assets/fonts/Gotham-Bold.otf\");\n}\n@font-face {\n  font-family: \"Gotham italic\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-BookIta.otf\");\n}\n.header_container__3VBVB {\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: justify;\n       justify-content: space-between;\n  padding: 30px 60px;\n}\n.header_container__3VBVB .header_logo__eiLSq {\n  object-fit: contain;\n}\n\n.header_nav__3hxH5 {\n  display: -moz-box;\n  display: flex;\n  list-style: none;\n  justify-content: space-around;\n  width: 40%;\n  color: white;\n}\n.header_nav__3hxH5 a {\n  text-decoration: none;\n  color: #ffff;\n  font-size: clamp(100%, 1.1em, 27px);\n}\n.header_nav__3hxH5 li {\n  font-family: \"Gotham light\";\n  display: inline-block;\n  padding-bottom: 2px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background-image: linear-gradient(#fff, #fff);\n  background-position: 0 100%;\n  background-size: 0 2px;\n  background-repeat: no-repeat;\n}\n.header_nav__3hxH5 li:hover {\n  cursor: pointer;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  background-position: 100% 100%;\n  background-size: 100% 2px;\n}\n\n@media (max-width: 700px) {\n  #header_bigScreenMenu__1lHBc {\n    display: none;\n  }\n\n  .header_container__3VBVB {\n    -moz-box-orient: vertical;\n    -moz-box-direction: reverse;\n         flex-direction: column-reverse;\n  }\n\n  .header_logo__eiLSq {\n    margin-top: 30%;\n  }\n}", "",{"version":3,"sources":["webpack://../../css/variables.scss","webpack://header.module.scss"],"names":[],"mappings":"AA0BA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,0CAAA;ACzBF;AD4BA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,yCAAA;AC1BF;AD6BA;EACE,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,4CAAA;AC3BF;AAbA;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,kBAAA;AAeF;AAbE;EACE,mBAAA;AAeJ;;AAXA;EACE,iBAAA;EAAA,aAAA;EACA,gBAAA;EACA,6BAAA;EACA,UAAA;EACA,YAAA;AAcF;AAZE;EACE,qBAAA;EACA,YDjBU;ECkBV,mCDVsB;ACwB1B;AAXE;EACE,2BDNgB;ECOhB,qBAAA;EACA,mBAAA;EACA,uFAAA;EAAA,6CAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;AAaJ;AAVE;EACE,eAAA;EACA,wBAAA;EAAA,gBAAA;EACA,8BAAA;EACA,yBAAA;AAYJ;;AARA;EACE;IACE,aAAA;EAWF;;EARA;IACE,yBAAA;IAAA,2BAAA;SAAA,8BAAA;EAWF;;EARA;IACE,eAAA;EAWF;AACF","sourcesContent":["@import 'helpers';\r\n\r\n//Colors\r\n$sections-background-color: #e4e4e4;\r\n$mobile-menu-background-color: #e4e4e4e6;\r\n$sections-border-color: #000;\r\n$white-color: #ffff;\r\n$basic-font-color: rgba(0, 0, 0, 0.7);\r\n\r\n//Container sizes\r\n$form-container: 57%;\r\n$large-section-container: 100vw;\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$title-font-family: 'Gotham light';\r\n$text-font-family: 'Gotham italic';\r\n$gotham-bold: 'Gotham bold';\r\n\r\n@font-face {\r\n  font-family: 'Gotham light';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('/assets/fonts/Gotham-Light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('/assets/fonts/Gotham-Bold.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham italic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('/assets/fonts/Gotham-BookIta.otf');\r\n}\r\n","@font-face {\n  font-family: \"Gotham light\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-Light.otf\");\n}\n@font-face {\n  font-family: \"Gotham bold\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"/assets/fonts/Gotham-Bold.otf\");\n}\n@font-face {\n  font-family: \"Gotham italic\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-BookIta.otf\");\n}\n.container {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px 60px;\n}\n.container .logo {\n  object-fit: contain;\n}\n\n.nav {\n  display: flex;\n  list-style: none;\n  justify-content: space-around;\n  width: 40%;\n  color: white;\n}\n.nav a {\n  text-decoration: none;\n  color: #ffff;\n  font-size: clamp(100%, 1.1em, 27px);\n}\n.nav li {\n  font-family: \"Gotham light\";\n  display: inline-block;\n  padding-bottom: 2px;\n  background-image: linear-gradient(#fff, #fff);\n  background-position: 0 100%;\n  background-size: 0 2px;\n  background-repeat: no-repeat;\n}\n.nav li:hover {\n  cursor: pointer;\n  transition: 0.4s;\n  background-position: 100% 100%;\n  background-size: 100% 2px;\n}\n\n@media (max-width: 700px) {\n  #bigScreenMenu {\n    display: none;\n  }\n\n  .container {\n    flex-direction: column-reverse;\n  }\n\n  .logo {\n    margin-top: 30%;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "header_container__3VBVB",
	"logo": "header_logo__eiLSq",
	"nav": "header_nav__3hxH5",
	"bigScreenMenu": "header_bigScreenMenu__1lHBc"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxlQUFlLGtDQUFrQyx1QkFBdUIscUJBQXFCLGlEQUFpRCxHQUFHLGNBQWMsaUNBQWlDLHVCQUF1QixxQkFBcUIsZ0RBQWdELEdBQUcsY0FBYyxtQ0FBbUMsdUJBQXVCLHFCQUFxQixtREFBbUQsR0FBRyw0QkFBNEIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsd0NBQXdDLHVCQUF1QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyx3QkFBd0Isc0JBQXNCLGtCQUFrQixxQkFBcUIsa0NBQWtDLGVBQWUsaUJBQWlCLEdBQUcsd0JBQXdCLDBCQUEwQixpQkFBaUIsd0NBQXdDLEdBQUcseUJBQXlCLGtDQUFrQywwQkFBMEIsd0JBQXdCLDRGQUE0RixrREFBa0QsZ0NBQWdDLDJCQUEyQixpQ0FBaUMsR0FBRywrQkFBK0Isb0JBQW9CLDZCQUE2QixxQkFBcUIsbUNBQW1DLDhCQUE4QixHQUFHLCtCQUErQixrQ0FBa0Msb0JBQW9CLEtBQUssZ0NBQWdDLGdDQUFnQyxrQ0FBa0MsMENBQTBDLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLEdBQUcsT0FBTyx5SEFBeUgsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssMkNBQTJDLHdEQUF3RCw2Q0FBNkMsaUNBQWlDLHdCQUF3QiwwQ0FBMEMsa0RBQWtELG9DQUFvQywyRUFBMkUsNkNBQTZDLHNCQUFzQix1QkFBdUIsc0RBQXNELHVDQUF1QyxnQ0FBZ0Msb0JBQW9CLGtDQUFrQyx5QkFBeUIsdUJBQXVCLGlEQUFpRCxLQUFLLG9CQUFvQixpQ0FBaUMseUJBQXlCLHVCQUF1QixnREFBZ0QsS0FBSyxvQkFBb0IsbUNBQW1DLHlCQUF5Qix1QkFBdUIsbURBQW1ELEtBQUssbUJBQW1CLGtDQUFrQyx1QkFBdUIscUJBQXFCLGlEQUFpRCxHQUFHLGNBQWMsaUNBQWlDLHVCQUF1QixxQkFBcUIsZ0RBQWdELEdBQUcsY0FBYyxtQ0FBbUMsdUJBQXVCLHFCQUFxQixtREFBbUQsR0FBRyxjQUFjLGtCQUFrQixtQ0FBbUMsdUJBQXVCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLHFCQUFxQixrQ0FBa0MsZUFBZSxpQkFBaUIsR0FBRyxVQUFVLDBCQUEwQixpQkFBaUIsd0NBQXdDLEdBQUcsV0FBVyxrQ0FBa0MsMEJBQTBCLHdCQUF3QixrREFBa0QsZ0NBQWdDLDJCQUEyQixpQ0FBaUMsR0FBRyxpQkFBaUIsb0JBQW9CLHFCQUFxQixtQ0FBbUMsOEJBQThCLEdBQUcsK0JBQStCLG9CQUFvQixvQkFBb0IsS0FBSyxrQkFBa0IscUNBQXFDLEtBQUssYUFBYSxzQkFBc0IsS0FBSyxHQUFHLG1CQUFtQjtBQUMvMko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jN2I1ZDMyMTYwODRlYjQ2NzhiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdvdGhhbSBsaWdodFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUxpZ2h0Lm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGJvbGRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb2xkLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGl0YWxpY1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUJvb2tJdGEub3RmXFxcIik7XFxufVxcbi5oZWFkZXJfY29udGFpbmVyX18zVkJWQiB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4IDYwcHg7XFxufVxcbi5oZWFkZXJfY29udGFpbmVyX18zVkJWQiAuaGVhZGVyX2xvZ29fX2VpTFNxIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5oZWFkZXJfbmF2X18zaHhINSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyX25hdl9fM2h4SDUgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZmY7XFxuICBmb250LXNpemU6IGNsYW1wKDEwMCUsIDEuMWVtLCAyN3B4KTtcXG59XFxuLmhlYWRlcl9uYXZfXzNoeEg1IGxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGxpZ2h0XFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZmYpLCB0bygjZmZmKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLmhlYWRlcl9uYXZfXzNoeEg1IGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICNoZWFkZXJfYmlnU2NyZWVuTWVudV9fMWxIQmMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9jb250YWluZXJfXzNWQlZCIHtcXG4gICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLW1vei1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5oZWFkZXJfbG9nb19fZWlMU3Ege1xcbiAgICBtYXJnaW4tdG9wOiAzMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9jc3MvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9oZWFkZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMEJBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUN6QkY7QUQ0QkE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQzFCRjtBRDZCQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDM0JGO0FBYkE7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLDhCQUFBO0VBQ0Esa0JBQUE7QUFlRjtBQWJFO0VBQ0UsbUJBQUE7QUFlSjs7QUFYQTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWNGO0FBWkU7RUFDRSxxQkFBQTtFQUNBLFlEakJVO0VDa0JWLG1DRFZzQjtBQ3dCMUI7QUFYRTtFQUNFLDJCRE5nQjtFQ09oQixxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUZBQUE7RUFBQSw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQWFKO0FBVkU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFZSjs7QUFSQTtFQUNFO0lBQ0UsYUFBQTtFQVdGOztFQVJBO0lBQ0UseUJBQUE7SUFBQSwyQkFBQTtTQUFBLDhCQUFBO0VBV0Y7O0VBUkE7SUFDRSxlQUFBO0VBV0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdoZWxwZXJzJztcXHJcXG5cXHJcXG4vL0NvbG9yc1xcclxcbiRzZWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xcclxcbiRtb2JpbGUtbWVudS1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0ZTY7XFxyXFxuJHNlY3Rpb25zLWJvcmRlci1jb2xvcjogIzAwMDtcXHJcXG4kd2hpdGUtY29sb3I6ICNmZmZmO1xcclxcbiRiYXNpYy1mb250LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuXFxyXFxuLy9Db250YWluZXIgc2l6ZXNcXHJcXG4kZm9ybS1jb250YWluZXI6IDU3JTtcXHJcXG4kbGFyZ2Utc2VjdGlvbi1jb250YWluZXI6IDEwMHZ3O1xcclxcblxcclxcbi8vVGV4dCBzaXplc1xcclxcbiRsaW5rcy1hbmQtY3RhLWZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMS4xZW0sIDI3cHgpO1xcclxcblxcclxcbi8vRGV2aWNlcyBzaXplc1xcclxcbiR4cy1zY3JlZW46IDQ1MHB4O1xcclxcbiRtZC1zY3JlZW46IDcwMHB4O1xcclxcbiRsZy1zY3JlZW46IDEwMjRweDtcXHJcXG5cXHJcXG4vL0ZvbnRzXFxyXFxuJHRpdGxlLWZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXHJcXG4kdGV4dC1mb250LWZhbWlseTogJ0dvdGhhbSBpdGFsaWMnO1xcclxcbiRnb3RoYW0tYm9sZDogJ0dvdGhhbSBib2xkJztcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGxpZ2h0JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gYm9sZCc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGYnKTtcXHJcXG59XFxyXFxuXCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGxpZ2h0XFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9Hb3RoYW0tTGlnaHQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gYm9sZFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUJvbGQub3RmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gaXRhbGljXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9va0l0YS5vdGZcXFwiKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweCA2MHB4O1xcbn1cXG4uY29udGFpbmVyIC5sb2dvIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA0MCU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5uYXYgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZmY7XFxuICBmb250LXNpemU6IGNsYW1wKDEwMCUsIDEuMWVtLCAyN3B4KTtcXG59XFxuLm5hdiBsaSB7XFxuICBmb250LWZhbWlseTogXFxcIkdvdGhhbSBsaWdodFxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZmYpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAwIDJweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5uYXYgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgI2JpZ1NjcmVlbk1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoZWFkZXJfY29udGFpbmVyX18zVkJWQlwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fZWlMU3FcIixcblx0XCJuYXZcIjogXCJoZWFkZXJfbmF2X18zaHhINVwiLFxuXHRcImJpZ1NjcmVlbk1lbnVcIjogXCJoZWFkZXJfYmlnU2NyZWVuTWVudV9fMWxIQmNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9