webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/header/mobile-menu/mobileMenu.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/header/mobile-menu/mobileMenu.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"Gotham light\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-Light.otf\");\n}\n@font-face {\n  font-family: \"Gotham bold\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"/assets/fonts/Gotham-Bold.otf\");\n}\n@font-face {\n  font-family: \"Gotham italic\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-BookIta.otf\");\n}\n.mobileMenu_menuToggle__2opJ6 {\n  display: none;\n}\n\n@media (max-width: 700px) {\n  .mobileMenu_menuToggle__2opJ6 {\n    display: block;\n    position: relative;\n    top: 0;\n    left: 100%;\n    width: 18%;\n    z-index: 1;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n         user-select: none;\n  }\n\n  .mobileMenu_menuToggle__2opJ6 a {\n    text-decoration: none;\n    color: #232323;\n    -webkit-transition: color 0.3s ease;\n    transition: color 0.3s ease;\n  }\n\n  .mobileMenu_menuToggle__2opJ6 input {\n    display: block;\n    width: 40px;\n    height: 32px;\n    position: absolute;\n    top: -7px;\n    left: -5px;\n    cursor: pointer;\n    opacity: 0;\n    /* hide this */\n    z-index: 2;\n    /* and place it over the hamburger */\n    -webkit-touch-callout: none;\n  }\n\n  /*\n   * Hamburger menu\n   */\n  .mobileMenu_menuToggle__2opJ6 span {\n    background: #cdcdcd;\n    display: block;\n    width: 100%;\n    height: 4px;\n    margin-bottom: 5px;\n    position: relative;\n    border-radius: 3px;\n    max-width: 34px;\n    z-index: 1;\n    -webkit-transform-origin: 4px 0;\n            transform-origin: 4px 0;\n    -webkit-transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n    transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  }\n\n  .mobileMenu_menuToggle__2opJ6 span:first-child {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n\n  .mobileMenu_menuToggle__2opJ6 span:nth-last-child(2) {\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n  }\n\n  /*\n   * Transform all the slices of hamburger\n   * into a crossmark.\n   */\n  .mobileMenu_menuToggle__2opJ6 input:checked ~ span {\n    opacity: 1;\n    -webkit-transform: rotate(45deg) translate(-2px, -1px);\n            transform: rotate(45deg) translate(-2px, -1px);\n    background: #232323;\n  }\n\n  /*\n   * Hide the middle line one.\n   */\n  .mobileMenu_menuToggle__2opJ6 input:checked ~ span:nth-last-child(3) {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n            transform: rotate(0deg) scale(0.2, 0.2);\n  }\n\n  /*\n   * Rotate line direction\n   */\n  .mobileMenu_menuToggle__2opJ6 input:checked ~ span:nth-last-child(2) {\n    -webkit-transform: rotate(-45deg) translate(0, -1px);\n            transform: rotate(-45deg) translate(0, -1px);\n  }\n\n  .mobileMenu_menu__3E0a6 {\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: -100%;\n    padding: 160% 70%;\n    list-style-type: none;\n    -webkit-font-smoothing: antialiased;\n    /* to stop flickering of text in safari */\n    -webkit-transition: all 500ms cubic-bezier(0.77, 0.2, 0.05, 1);\n    transition: all 500ms cubic-bezier(0.77, 0.2, 0.05, 1);\n  }\n\n  .mobileMenu_menu__3E0a6 li {\n    padding: 5% 0;\n    font-size: clamp(100%, 5vw, 24px);\n    font-family: \"Gotham light\";\n    visibility: hidden;\n    -webkit-transition: all 150ms;\n    transition: all 150ms;\n  }\n\n  /*\n   * Make slide came from right\n   */\n  .mobileMenu_menuToggle__2opJ6 input:checked ~ .mobileMenu_menu__3E0a6 {\n    width: 80vw;\n    height: 50vh;\n    background: #e4e4e4e6;\n    -webkit-transform: translate(-68vw, 0);\n            transform: translate(-68vw, 0);\n  }\n  .mobileMenu_menuToggle__2opJ6 input:checked ~ .mobileMenu_menu__3E0a6 li {\n    visibility: visible;\n    border-bottom: solid;\n  }\n}", "",{"version":3,"sources":["webpack://../../../css/variables.scss","webpack://mobileMenu.module.scss"],"names":[],"mappings":"AA0BA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,0CAAA;ACzBF;AD4BA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,yCAAA;AC1BF;AD6BA;EACE,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,4CAAA;AC3BF;AAfA;EACE,aAAA;AAiBF;;AAZA;EACE;IAEE,cAAA;IACA,kBAAA;IACA,MAAA;IACA,UAAA;IACA,UAAA;IACA,UAAA;IAEA,yBAAA;IACA,sBAAA;SAAA,iBAAA;EAaF;;EAVA;IAEE,qBAAA;IACA,cAAA;IAEA,mCAAA;IAAA,2BAAA;EAWF;;EAPA;IAEE,cAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,SAAA;IACA,UAAA;IACA,eAAA;IAEA,UAAA;IAAY,cAAA;IACZ,UAAA;IAAY,oCAAA;IAEZ,2BAAA;EASF;;EANA;;IAAA;EAGA;IAEE,mBAAA;IACA,cAAA;IACA,WAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;IACA,kBAAA;IACA,eAAA;IAEA,UAAA;IAEA,+BAAA;YAAA,uBAAA;IAEA,iJAAA;IAAA,yIAAA;IAAA,iIAAA;IAAA,0LAAA;EAKF;;EAAA;IAEE,6BAAA;YAAA,qBAAA;EAEF;;EACA;IAEE,gCAAA;YAAA,wBAAA;EACF;;EAEA;;;IAAA;EAIA;IAEE,UAAA;IACA,sDAAA;YAAA,8CAAA;IACA,mBAAA;EAAF;;EAGA;;IAAA;EAGA;IAEE,UAAA;IACA,+CAAA;YAAA,uCAAA;EADF;;EAIA;;IAAA;EAGA;IAEE,oDAAA;YAAA,4CAAA;EAFF;;EAKA;IAEE,kBAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;IACA,iBAAA;IAEA,qBAAA;IACA,mCAAA;IACA,yCAAA;IAEA,8DAAA;IAAA,sDAAA;EALF;;EAQA;IAEE,aAAA;IACA,iCAAA;IACA,2BDzGgB;IC0GhB,kBAAA;IACA,6BAAA;IAAA,qBAAA;EANF;;EASA;;IAAA;EAGA;IAEE,WAAA;IACA,YAAA;IACA,qBDvI2B;ICwI3B,sCAAA;YAAA,8BAAA;EAPF;EASE;IACE,mBAAA;IACA,oBAAA;EAPJ;AACF","sourcesContent":["@import 'helpers';\r\n\r\n//Colors\r\n$sections-background-color: #e4e4e4;\r\n$mobile-menu-background-color: #e4e4e4e6;\r\n$sections-border-color: #000;\r\n$white-color: #ffff;\r\n$basic-font-color: rgba(0, 0, 0, 0.7);\r\n\r\n//Container sizes\r\n$form-container: 57%;\r\n$large-section-container: 100vw;\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$title-font-family: 'Gotham light';\r\n$text-font-family: 'Gotham italic';\r\n$gotham-bold: 'Gotham bold';\r\n\r\n@font-face {\r\n  font-family: 'Gotham light';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('/assets/fonts/Gotham-Light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('/assets/fonts/Gotham-Bold.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Gotham italic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('/assets/fonts/Gotham-BookIta.otf');\r\n}\r\n","@font-face {\n  font-family: \"Gotham light\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-Light.otf\");\n}\n@font-face {\n  font-family: \"Gotham bold\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"/assets/fonts/Gotham-Bold.otf\");\n}\n@font-face {\n  font-family: \"Gotham italic\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/Gotham-BookIta.otf\");\n}\n.menuToggle {\n  display: none;\n}\n\n@media (max-width: 700px) {\n  .menuToggle {\n    display: block;\n    position: relative;\n    top: 0;\n    left: 100%;\n    width: 18%;\n    z-index: 1;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .menuToggle a {\n    text-decoration: none;\n    color: #232323;\n    transition: color 0.3s ease;\n  }\n\n  .menuToggle input {\n    display: block;\n    width: 40px;\n    height: 32px;\n    position: absolute;\n    top: -7px;\n    left: -5px;\n    cursor: pointer;\n    opacity: 0;\n    /* hide this */\n    z-index: 2;\n    /* and place it over the hamburger */\n    -webkit-touch-callout: none;\n  }\n\n  /*\n   * Hamburger menu\n   */\n  .menuToggle span {\n    background: #cdcdcd;\n    display: block;\n    width: 100%;\n    height: 4px;\n    margin-bottom: 5px;\n    position: relative;\n    border-radius: 3px;\n    max-width: 34px;\n    z-index: 1;\n    transform-origin: 4px 0;\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n  }\n\n  .menuToggle span:first-child {\n    transform-origin: 0 0;\n  }\n\n  .menuToggle span:nth-last-child(2) {\n    transform-origin: 0 100%;\n  }\n\n  /*\n   * Transform all the slices of hamburger\n   * into a crossmark.\n   */\n  .menuToggle input:checked ~ span {\n    opacity: 1;\n    transform: rotate(45deg) translate(-2px, -1px);\n    background: #232323;\n  }\n\n  /*\n   * Hide the middle line one.\n   */\n  .menuToggle input:checked ~ span:nth-last-child(3) {\n    opacity: 0;\n    transform: rotate(0deg) scale(0.2, 0.2);\n  }\n\n  /*\n   * Rotate line direction\n   */\n  .menuToggle input:checked ~ span:nth-last-child(2) {\n    transform: rotate(-45deg) translate(0, -1px);\n  }\n\n  .menu {\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: -100%;\n    padding: 160% 70%;\n    list-style-type: none;\n    -webkit-font-smoothing: antialiased;\n    /* to stop flickering of text in safari */\n    transition: all 500ms cubic-bezier(0.77, 0.2, 0.05, 1);\n  }\n\n  .menu li {\n    padding: 5% 0;\n    font-size: clamp(100%, 5vw, 24px);\n    font-family: \"Gotham light\";\n    visibility: hidden;\n    transition: all 150ms;\n  }\n\n  /*\n   * Make slide came from right\n   */\n  .menuToggle input:checked ~ .menu {\n    width: 80vw;\n    height: 50vh;\n    background: #e4e4e4e6;\n    transform: translate(-68vw, 0);\n  }\n  .menuToggle input:checked ~ .menu li {\n    visibility: visible;\n    border-bottom: solid;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"menuToggle": "mobileMenu_menuToggle__2opJ6",
	"menu": "mobileMenu_menu__3E0a6"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLW1lbnUvbW9iaWxlTWVudS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxrQ0FBa0MsdUJBQXVCLHFCQUFxQixpREFBaUQsR0FBRyxjQUFjLGlDQUFpQyx1QkFBdUIscUJBQXFCLGdEQUFnRCxHQUFHLGNBQWMsbUNBQW1DLHVCQUF1QixxQkFBcUIsbURBQW1ELEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLCtCQUErQixtQ0FBbUMscUJBQXFCLHlCQUF5QixhQUFhLGlCQUFpQixpQkFBaUIsaUJBQWlCLGdDQUFnQyw2QkFBNkIsNkJBQTZCLEtBQUssdUNBQXVDLDRCQUE0QixxQkFBcUIsMENBQTBDLGtDQUFrQyxLQUFLLDJDQUEyQyxxQkFBcUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixzQkFBc0IsaUJBQWlCLHNDQUFzQyw2RUFBNkUsS0FBSyw0RUFBNEUsMEJBQTBCLHFCQUFxQixrQkFBa0Isa0JBQWtCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHNCQUFzQixpQkFBaUIsc0NBQXNDLHNDQUFzQyx3SkFBd0osZ0pBQWdKLHdJQUF3SSxpTUFBaU0sS0FBSyxzREFBc0Qsb0NBQW9DLG9DQUFvQyxLQUFLLDREQUE0RCx1Q0FBdUMsdUNBQXVDLEtBQUssMklBQTJJLGlCQUFpQiw2REFBNkQsNkRBQTZELDBCQUEwQixLQUFLLHlIQUF5SCxpQkFBaUIsc0RBQXNELHNEQUFzRCxLQUFLLHFIQUFxSCwyREFBMkQsMkRBQTJELEtBQUssK0JBQStCLHlCQUF5QixlQUFlLGdCQUFnQixpQkFBaUIsd0JBQXdCLDRCQUE0QiwwQ0FBMEMscUhBQXFILDZEQUE2RCxLQUFLLGtDQUFrQyxvQkFBb0Isd0NBQXdDLG9DQUFvQyx5QkFB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YWNkZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gbGlnaHRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFxcXCIvYXNzZXRzL2ZvbnRzL0dvdGhhbS1MaWdodC5vdGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdvdGhhbSBib2xkXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9sZC5vdGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdvdGhhbSBpdGFsaWNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFxcXCIvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb29rSXRhLm90ZlxcXCIpO1xcbn1cXG4ubW9iaWxlTWVudV9tZW51VG9nZ2xlX18yb3BKNiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2JpbGVNZW51X21lbnVUb2dnbGVfXzJvcEo2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICB3aWR0aDogMTglO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcblxcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMm9wSjYgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxuICB9XFxuXFxuICAubW9iaWxlTWVudV9tZW51VG9nZ2xlX18yb3BKNiBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgbGVmdDogLTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAvKiBoaWRlIHRoaXMgKi9cXG4gICAgei1pbmRleDogMjtcXG4gICAgLyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICB9XFxuXFxuICAvKlxcbiAgICogSGFtYnVyZ2VyIG1lbnVcXG4gICAqL1xcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMm9wSjYgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6ICNjZGNkY2Q7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1heC13aWR0aDogMzRweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBvcGFjaXR5IDAuNTVzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIGJhY2tncm91bmQgMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSwgb3BhY2l0eSAwLjU1cyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpO1xcbiAgfVxcblxcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMm9wSjYgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIH1cXG5cXG4gIC5tb2JpbGVNZW51X21lbnVUb2dnbGVfXzJvcEo2IHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICB9XFxuXFxuICAvKlxcbiAgICogVHJhbnNmb3JtIGFsbCB0aGUgc2xpY2VzIG9mIGhhbWJ1cmdlclxcbiAgICogaW50byBhIGNyb3NzbWFyay5cXG4gICAqL1xcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMm9wSjYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJweCwgLTFweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcXG4gICAgYmFja2dyb3VuZDogIzIzMjMyMztcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBIaWRlIHRoZSBtaWRkbGUgbGluZSBvbmUuXFxuICAgKi9cXG4gIC5tb2JpbGVNZW51X21lbnVUb2dnbGVfXzJvcEo2IGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIFJvdGF0ZSBsaW5lIGRpcmVjdGlvblxcbiAgICovXFxuICAubW9iaWxlTWVudV9tZW51VG9nZ2xlX18yb3BKNiBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XFxuICB9XFxuXFxuICAubW9iaWxlTWVudV9tZW51X18zRTBhNiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgcGFkZGluZzogMTYwJSA3MCU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC8qIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpO1xcbiAgfVxcblxcbiAgLm1vYmlsZU1lbnVfbWVudV9fM0UwYTYgbGkge1xcbiAgICBwYWRkaW5nOiA1JSAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEwMCUsIDV2dywgMjRweCk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGxpZ2h0XFxcIjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIE1ha2Ugc2xpZGUgY2FtZSBmcm9tIHJpZ2h0XFxuICAgKi9cXG4gIC5tb2JpbGVNZW51X21lbnVUb2dnbGVfXzJvcEo2IGlucHV0OmNoZWNrZWQgfiAubW9iaWxlTWVudV9tZW51X18zRTBhNiB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTRlNjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjh2dywgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTY4dncsIDApO1xcbiAgfVxcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMm9wSjYgaW5wdXQ6Y2hlY2tlZCB+IC5tb2JpbGVNZW51X21lbnVfXzNFMGE2IGxpIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9jc3MvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9tb2JpbGVNZW51Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTBCQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FDekJGO0FENEJBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUMxQkY7QUQ2QkE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBQzNCRjtBQWZBO0VBQ0UsYUFBQTtBQWlCRjs7QUFaQTtFQUNFO0lBRUUsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUVBLHlCQUFBO0lBQ0Esc0JBQUE7U0FBQSxpQkFBQTtFQWFGOztFQVZBO0lBRUUscUJBQUE7SUFDQSxjQUFBO0lBRUEsbUNBQUE7SUFBQSwyQkFBQTtFQVdGOztFQVBBO0lBRUUsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFFQSxVQUFBO0lBQVksY0FBQTtJQUNaLFVBQUE7SUFBWSxvQ0FBQTtJQUVaLDJCQUFBO0VBU0Y7O0VBTkE7O0lBQUE7RUFHQTtJQUVFLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUVBLFVBQUE7SUFFQSwrQkFBQTtZQUFBLHVCQUFBO0lBRUEsaUpBQUE7SUFBQSx5SUFBQTtJQUFBLGlJQUFBO0lBQUEsMExBQUE7RUFLRjs7RUFBQTtJQUVFLDZCQUFBO1lBQUEscUJBQUE7RUFFRjs7RUFDQTtJQUVFLGdDQUFBO1lBQUEsd0JBQUE7RUFDRjs7RUFFQTs7O0lBQUE7RUFJQTtJQUVFLFVBQUE7SUFDQSxzREFBQTtZQUFBLDhDQUFBO0lBQ0EsbUJBQUE7RUFBRjs7RUFHQTs7SUFBQTtFQUdBO0lBRUUsVUFBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7RUFERjs7RUFJQTs7SUFBQTtFQUdBO0lBRUUsb0RBQUE7WUFBQSw0Q0FBQTtFQUZGOztFQUtBO0lBRUUsa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUVBLHFCQUFBO0lBQ0EsbUNBQUE7SUFDQSx5Q0FBQTtJQUVBLDhEQUFBO0lBQUEsc0RBQUE7RUFMRjs7RUFRQTtJQUVFLGFBQUE7SUFDQSxpQ0FBQTtJQUNBLDJCRHpHZ0I7SUMwR2hCLGtCQUFBO0lBQ0EsNkJBQUE7SUFBQSxxQkFBQTtFQU5GOztFQVNBOztJQUFBO0VBR0E7SUFFRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCRHZJMkI7SUN3STNCLHNDQUFBO1lBQUEsOEJBQUE7RUFQRjtFQVNFO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQVBKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnaGVscGVycyc7XFxyXFxuXFxyXFxuLy9Db2xvcnNcXHJcXG4kc2VjdGlvbnMtYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcXHJcXG4kbW9iaWxlLW1lbnUtYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNGU2O1xcclxcbiRzZWN0aW9ucy1ib3JkZXItY29sb3I6ICMwMDA7XFxyXFxuJHdoaXRlLWNvbG9yOiAjZmZmZjtcXHJcXG4kYmFzaWMtZm9udC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcblxcclxcbi8vQ29udGFpbmVyIHNpemVzXFxyXFxuJGZvcm0tY29udGFpbmVyOiA1NyU7XFxyXFxuJGxhcmdlLXNlY3Rpb24tY29udGFpbmVyOiAxMDB2dztcXHJcXG5cXHJcXG4vL1RleHQgc2l6ZXNcXHJcXG4kbGlua3MtYW5kLWN0YS1mb250LXNpemU6IGNsYW1wKDEwMCUsIDEuMWVtLCAyN3B4KTtcXHJcXG5cXHJcXG4vL0RldmljZXMgc2l6ZXNcXHJcXG4keHMtc2NyZWVuOiA0NTBweDtcXHJcXG4kbWQtc2NyZWVuOiA3MDBweDtcXHJcXG4kbGctc2NyZWVuOiAxMDI0cHg7XFxyXFxuXFxyXFxuLy9Gb250c1xcclxcbiR0aXRsZS1mb250LWZhbWlseTogJ0dvdGhhbSBsaWdodCc7XFxyXFxuJHRleHQtZm9udC1mYW1pbHk6ICdHb3RoYW0gaXRhbGljJztcXHJcXG4kZ290aGFtLWJvbGQ6ICdHb3RoYW0gYm9sZCc7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0dvdGhhbSBsaWdodCc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR290aGFtLUxpZ2h0Lm90ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGJvbGQnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb2xkLm90ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIGl0YWxpYyc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR290aGFtLUJvb2tJdGEub3RmJyk7XFxyXFxufVxcclxcblwiLFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdvdGhhbSBsaWdodFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUxpZ2h0Lm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGJvbGRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb2xkLm90ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR290aGFtIGl0YWxpY1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvR290aGFtLUJvb2tJdGEub3RmXFxcIik7XFxufVxcbi5tZW51VG9nZ2xlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1lbnVUb2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxOCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcblxcbiAgLm1lbnVUb2dnbGUgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gIH1cXG5cXG4gIC5tZW51VG9nZ2xlIGlucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBsZWZ0OiAtNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC8qIGhpZGUgdGhpcyAqL1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICAvKiBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyICovXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBIYW1idXJnZXIgbWVudVxcbiAgICovXFxuICAubWVudVRvZ2dsZSBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogI2NkY2RjZDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWF4LXdpZHRoOiAzNHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIGJhY2tncm91bmQgMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSwgb3BhY2l0eSAwLjU1cyBlYXNlO1xcbiAgfVxcblxcbiAgLm1lbnVUb2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIH1cXG5cXG4gIC5tZW51VG9nZ2xlIHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICB9XFxuXFxuICAvKlxcbiAgICogVHJhbnNmb3JtIGFsbCB0aGUgc2xpY2VzIG9mIGhhbWJ1cmdlclxcbiAgICogaW50byBhIGNyb3NzbWFyay5cXG4gICAqL1xcbiAgLm1lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIEhpZGUgdGhlIG1pZGRsZSBsaW5lIG9uZS5cXG4gICAqL1xcbiAgLm1lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bnRoLWxhc3QtY2hpbGQoMykge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XFxuICB9XFxuXFxuICAvKlxcbiAgICogUm90YXRlIGxpbmUgZGlyZWN0aW9uXFxuICAgKi9cXG4gIC5tZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTFweCk7XFxuICB9XFxuXFxuICAubWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgcGFkZGluZzogMTYwJSA3MCU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC8qIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSk7XFxuICB9XFxuXFxuICAubWVudSBsaSB7XFxuICAgIHBhZGRpbmc6IDUlIDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgNXZ3LCAyNHB4KTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoYW0gbGlnaHRcXFwiO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcztcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBNYWtlIHNsaWRlIGNhbWUgZnJvbSByaWdodFxcbiAgICovXFxuICAubWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLm1lbnUge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0ZTY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02OHZ3LCAwKTtcXG4gIH1cXG4gIC5tZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAubWVudSBsaSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZW51VG9nZ2xlXCI6IFwibW9iaWxlTWVudV9tZW51VG9nZ2xlX18yb3BKNlwiLFxuXHRcIm1lbnVcIjogXCJtb2JpbGVNZW51X21lbnVfXzNFMGE2XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==