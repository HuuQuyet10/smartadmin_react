exports.ids = [10];
exports.modules = {

/***/ "./src/site/user/containers/About/index.js":
/*!*************************************************!*\
  !*** ./src/site/user/containers/About/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/site/user/containers/About/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @actions/auth */ "./src/redux-store/actions/auth/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function index(props) {
  const onLogin = () => {
    props.onLogin("admin", "123456");
  };

  return __jsx("div", {
    className: "about-page"
  }, "about", props.username, props.password, __jsx("button", {
    onClick: onLogin
  }, "login"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => {
  return {
    username: state.auth.username,
    password: state.auth.password
  };
}, {
  onLogin: _actions_auth__WEBPACK_IMPORTED_MODULE_3__["default"].onLogin,
  onLogut: _actions_auth__WEBPACK_IMPORTED_MODULE_3__["default"].onLogout
})(index));

/***/ }),

/***/ "./src/site/user/containers/About/style.scss":
/*!***************************************************!*\
  !*** ./src/site/user/containers/About/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=10.js.map