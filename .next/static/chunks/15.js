(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/site/user/containers/About/index.js":
/*!*************************************************!*\
  !*** ./src/site/user/containers/About/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/site/user/containers/About/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @actions/auth */ "./src/redux-store/actions/auth/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function index(props) {
  var onLogin = function onLogin() {
    props.onLogin("admin", "123456");
  };

  return __jsx("div", {
    className: "about-page"
  }, "about", props.username, props.password, __jsx("button", {
    onClick: onLogin
  }, "login"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    username: state.auth.username,
    password: state.auth.password
  };
}, {
  onLogin: _actions_auth__WEBPACK_IMPORTED_MODULE_3__["default"].onLogin,
  onLogut: _actions_auth__WEBPACK_IMPORTED_MODULE_3__["default"].onLogout
})(index));

/***/ })

}]);
//# sourceMappingURL=15.js.map