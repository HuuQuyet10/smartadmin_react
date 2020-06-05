module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/RouterWithPaths.js":
/*!*******************************************!*\
  !*** ./src/components/RouterWithPaths.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    path
  } = _ref,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["path"]);

  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, typeof path === 'string' ? __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    path: path
  }, rest)) : path.map((item, index) => __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    path: item
  }, rest, {
    key: index
  }))));
});

/***/ }),

/***/ "./src/data-access/datacache-provider.js":
/*!***********************************************!*\
  !*** ./src/data-access/datacache-provider.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _JSON$stringify = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var CryptoJS = __webpack_require__(/*! crypto-js */ "crypto-js");

module.exports = {
  save(userId, key, value) {
    return new _Promise((resolve, reject) => {
      try {
        var data = {
          value
        };
        let data2 = CryptoJS.AES.encrypt(_JSON$stringify(data), "ISOFHCARE");
        localStorage.setItem(userId + "_" + key, data2.toString());
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  },

  read(userId, key, defaultValue) {
    if (localStorage.hasOwnProperty(userId + "_" + key)) {
      var item = localStorage.getItem(userId + "_" + key);
      var item = CryptoJS.AES.decrypt(item, "ISOFHCARE").toString(CryptoJS.enc.Utf8);
      if (item) try {
        var data = JSON.parse(item);

        if (data && data.value) {
          return data.value;
        }
      } catch (error) {}
    }

    return defaultValue;
  }

};

/***/ }),

/***/ "./src/data-access/user-provider.js":
/*!******************************************!*\
  !*** ./src/data-access/user-provider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/client-utils */ "./src/utils/client-utils.js");
/* harmony import */ var mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mainam-react-native-string-utils */ "mainam-react-native-string-utils");
/* harmony import */ var mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/strings */ "./src/resources/strings.js");
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_strings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datacache_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datacache-provider */ "./src/data-access/datacache-provider.js");
/* harmony import */ var _datacache_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_datacache_provider__WEBPACK_IMPORTED_MODULE_4__);






/* harmony default export */ __webpack_exports__["default"] = ({
  login(username, password) {
    let object = {
      username,
      password: password.toMd5()
    };
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
      _utils_client_utils__WEBPACK_IMPORTED_MODULE_1__["default"].requestApi("post", _resources_strings__WEBPACK_IMPORTED_MODULE_3___default.a.api.user.login, object).then(x => {
        resolve(x);
      }).catch(e => {
        reject(e);
      });
    });
  }

});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RouterWithPaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/RouterWithPaths */ "./src/components/RouterWithPaths.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @admin */ "./src/site/admin/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user */ "./src/site/user/index.js");
/* harmony import */ var _user_containers_auth_LoginScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user/containers/auth/LoginScreen */ "./src/site/user/containers/auth/LoginScreen.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Status({
  code,
  children
}) {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: ({
      staticContext
    }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }
  });
}

function NotFound() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Status, {
    code: 404
  }), __jsx("h2", null, "Not found"), ";");
}

function App() {
  const routers = [{
    path: ["/login"],
    component: _user_containers_auth_LoginScreen__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    path: ["/example", "/example/:function1", "/example/:function1/:function2", "/example/:function1/:function2/:function3"],
    component: _admin__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: ["/admin", "/admin/:function1", "/admin/:function1/:function2", "/admin/:function1/:function2/:function3"],
    component: _admin__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: ["/:function1", "/:function1/:id", "/:function1/:function2/:id"],
    component: _user__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: "/",
    component: Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(state => {
      return {
        auth: state.auth.auth || {}
      };
    })(props => {
      if (props.auth && props.auth.id) {
        props.history.replace("/admin");
      } else props.history.replace("/login");

      return __jsx("div", null);
    })
  }];
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, routers.map((route, key) => {
    if (route.component) return __jsx(_components_RouterWithPaths__WEBPACK_IMPORTED_MODULE_2__["default"], {
      exact: true,
      key: key,
      path: route.path,
      render: props => {
        return __jsx(route.component, props);
      }
    });
    return null;
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: NotFound
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/redux-store/actions/auth/index.js":
/*!***********************************************!*\
  !*** ./src/redux-store/actions/auth/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @strings */ "./src/resources/strings.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/snackbar-utils */ "./src/utils/snackbar-utils.js");
/* harmony import */ var mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mainam-react-native-string-utils */ "mainam-react-native-string-utils");
/* harmony import */ var mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_client_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/client-utils */ "./src/utils/client-utils.js");
/* harmony import */ var _data_access_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-access/user-provider */ "./src/data-access/user-provider.js");







function onLogin(username, password) {
  return (dispath, getState) => {
    if (!username || !password) {
      _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_2__["default"].show("Vui lòng nhập tài khoản và mật khẩu", "danger");
      return;
    }

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
      _data_access_user_provider__WEBPACK_IMPORTED_MODULE_5__["default"].login(username, password).then(res => {
        debugger;

        switch (res.code) {
          case 0:
            _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_2__["default"].show("Đăng nhập thành công", "success");
            dispath(updateData({
              auth: res.data,
              detail: null
            }));
            _utils_client_utils__WEBPACK_IMPORTED_MODULE_4__["default"].auth = res.data.access_token || "";
            resolve(res.data);
            break;

          default:
            _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_2__["default"].show(res.message || _strings__WEBPACK_IMPORTED_MODULE_1___default.a.text.user.login_error, "danger");
            break;
        }

        reject("Đăng nhập không thành công");
      }).catch(e => {
        reject(e);
        console.log(e);
      });
    });
  };
}

function updateData(data) {
  return dispatch => {
    dispatch({
      type: "AUTH-UPDATE-DATA",
      data: data
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  onLogin,

  onLogout() {
    return dispatch => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        dispatch(updateData({
          auth: null,
          detail: null
        }));
        _utils_client_utils__WEBPACK_IMPORTED_MODULE_4__["default"].auth = null;
        resolve();
      });
    };
  },

  updateData
});

/***/ }),

/***/ "./src/resources/images/bg_login.jpg":
/*!*******************************************!*\
  !*** ./src/resources/images/bg_login.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg_login-e56f9533a12fa8f50bcb90a8ebb1523a.jpg";

/***/ }),

/***/ "./src/resources/images/logo.png":
/*!***************************************!*\
  !*** ./src/resources/images/logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-651c9a9331ba1648b46286f75499bd39.png";

/***/ }),

/***/ "./src/resources/strings.js":
/*!**********************************!*\
  !*** ./src/resources/strings.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const prefix = "/api/may-tho/v1/";
module.exports = {
  api: {
    user: {
      login: prefix + "auth/login"
    },
    device: {
      search: prefix + "thiet-bi",
      create: prefix + "thiet-bi"
    },
    nameDevice: {
      search: prefix + "dm-thiet-bi"
    },
    unit: {
      search: prefix + "dm-don-vi-tinh"
    },
    manufacturer: {
      search: prefix + "dm-hang-san-xuat"
    },
    supplier: {
      search: prefix + "dm-don-vi-cung-cap"
    },
    country: {
      search: prefix + "dm-quoc-gia"
    },
    formType: {
      search: prefix + "dm-loai-thiet-bi"
    },
    hangSanXuat: {
      search: prefix + "dm-hang-san-xuat"
    },
    status: {
      search: prefix + "dm-trang-thai"
    }
  }
};

/***/ }),

/***/ "./src/site/admin/components/admin/AdminPage/index.js":
/*!************************************************************!*\
  !*** ./src/site/admin/components/admin/AdminPage/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/admin/AdminPage/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function index(props) {
  return __jsx("div", {
    className: `admin-page ${props.className}`
  }, props.subheader && props.header && __jsx("div", {
    className: "subheader"
  }, __jsx("h1", {
    className: "subheader-title"
  }, __jsx("i", {
    className: props.icon
  }), " ", props.header, props.subheader && __jsx("small", null, props.subheader))), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/site/admin/components/admin/AdminPage/style.scss":
/*!**************************************************************!*\
  !*** ./src/site/admin/components/admin/AdminPage/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/admin/Breadcrumbs/index.js":
/*!**************************************************************!*\
  !*** ./src/site/admin/components/admin/Breadcrumbs/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { useRouter } from 'next/router'

function index(props) {
  // const router = useRouter();
  const getBreadcrumbs = () => {
    let url = (window.location.pathname || "").toLowerCase();
    let obj = [];

    switch (url) {
      case "/admin":
      case "/admin/dashboard":
        obj = [{
          icon: "fal fa-home mr-1",
          url: "/admin",
          name: "Home"
        }, {
          url: "/dashboard",
          name: "Dashboard"
        }];
        break;

      case "/admin/manufacturer":
        obj = [{
          icon: "fal fa-home mr-1",
          url: "/admin",
          name: "Home"
        }, {
          url: "/admin/manufacturer",
          name: "Quản lý hãng sản xuất"
        }];
        break;

      case "/admin/manufacturer/create":
        obj = [{
          icon: "fal fa-home mr-1",
          url: "/admin",
          name: "Home"
        }, {
          url: "/admin/manufacturer",
          name: "Quản lý hãng sản xuất"
        }, {
          name: "Tạo mới"
        }];
        break;

      case "/admin/device-type":
        obj = [{
          icon: "fal fa-home mr-1",
          url: "/admin",
          name: "Home"
        }, {
          url: "/admin/device-type",
          name: "Quản lý loại thiết bị"
        }];
        break;

      case "/admin/device-type/create":
        obj = [{
          icon: "fal fa-home mr-1",
          url: "/admin",
          name: "Home"
        }, {
          url: "/admin/device-type",
          name: "Quản lý loại thiết bị"
        }, {
          name: "Tạo mới"
        }];
        break;

      case "/admin/device":
        obj = [{
          icon: "fal fa-home mr-1",
          url: "/admin",
          name: "Home"
        }, {
          url: "/admin/device",
          name: "Quản lý trang thiết bị"
        }];
        break;

      case "/admin/device/create":
        obj = [{
          icon: "fal fa-home mr-1",
          url: "/admin",
          name: "Home"
        }, {
          url: "/admin/device",
          name: "Quản lý trang thiết bị"
        }, {
          url: "/admin/device/create",
          name: "Tạo mới"
        }];
        break;

      default:
        if (url.indexOf("/admin/device/edit") == 0) {
          obj = [{
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Home"
          }, {
            url: "/admin/device",
            name: "Quản lý trang thiết bị"
          }, {
            name: "Chỉnh sửa thiết bị"
          }];
        } else if (url.indexOf("/admin/device/") == 0) {
          obj = [{
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Home"
          }, {
            url: "/admin/device",
            name: "Quản lý trang thiết bị"
          }, {
            name: "Chi tiết thiết bị"
          }];
        } else if (url.indexOf("/admin/manufacturer/") == 0) {
          obj = [{
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Home"
          }, {
            url: "/admin/device",
            name: "Quản lý nhà sản xuất"
          }, {
            name: "Chỉnh sửa"
          }];
        } else if (url.indexOf("/admin/device-type/") == 0) {
          obj = [{
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Home"
          }, {
            url: "/admin/device",
            name: "Quản lý loại thiết bị"
          }, {
            name: "Chỉnh sửa"
          }];
        }

        break;
    }

    return obj;
  };

  console.log(window.location.pathname);
  const breadCrumb = getBreadcrumbs();
  return __jsx("ol", {
    className: "breadcrumb bg-info-400"
  }, breadCrumb.map((item, index) => {
    if (index < breadCrumb.length - 1) return __jsx("li", {
      className: "breadcrumb-item",
      key: index
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: item.url || "#",
      className: "text-white"
    }, item.icon && __jsx("i", {
      className: "fal fa-home mr-1"
    }), item.name));
    return __jsx("li", {
      className: "breadcrumb-item active text-white",
      key: index
    }, item.name);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/site/admin/components/admin/Footer/index.js":
/*!*********************************************************!*\
  !*** ./src/site/admin/components/admin/Footer/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/admin/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function index() {
  return __jsx("footer", {
    className: "page-footer",
    role: "contentinfo"
  }, __jsx("div", {
    className: "d-flex align-items-center flex-1 text-muted"
  }, __jsx("span", {
    className: "hidden-md-down fw-700"
  }, "2020 \xA9 iSofH")));
}

/***/ }),

/***/ "./src/site/admin/components/admin/Footer/style.scss":
/*!***********************************************************!*\
  !*** ./src/site/admin/components/admin/Footer/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/admin/Header/index.js":
/*!*********************************************************!*\
  !*** ./src/site/admin/components/admin/Header/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/admin/Header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @actions/auth */ "./src/redux-store/actions/auth/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function index(props) {
  return __jsx("header", {
    className: "page-header",
    role: "banner"
  }, __jsx("div", {
    className: "page-logo"
  }, __jsx("a", {
    href: "#",
    className: "page-logo-link press-scale-down d-flex align-items-center position-relative" // data-toggle="modal"
    // data-target="#modal-shortcut"

  }, __jsx("img", {
    src: "/img/logo.png",
    alt: "iSofH",
    "aria-roledescription": "logo"
  }), __jsx("span", {
    className: "page-logo-text mr-1"
  }, "iSofH"), __jsx("span", {
    className: "position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"
  }), __jsx("i", {
    className: "fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"
  }))), __jsx("div", {
    className: "hidden-md-down dropdown-icon-menu position-relative"
  }, __jsx("a", {
    href: "#",
    className: "header-btn btn js-waves-off",
    "data-action": "toggle",
    "data-class": "nav-function-hidden",
    title: "Hide Navigation"
  }, __jsx("i", {
    className: "ni ni-menu"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#",
    className: "btn js-waves-off",
    "data-action": "toggle",
    "data-class": "nav-function-minify",
    title: "Minify Navigation"
  }, __jsx("i", {
    className: "ni ni-minify-nav"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    className: "btn js-waves-off",
    "data-action": "toggle",
    "data-class": "nav-function-fixed",
    title: "Lock Navigation"
  }, __jsx("i", {
    className: "ni ni-lock-nav"
  }))))), __jsx("div", {
    className: "hidden-lg-up"
  }, __jsx("a", {
    href: "#",
    className: "header-btn btn press-scale-down waves-effect waves-themed",
    "data-action": "toggle",
    "data-class": "mobile-nav-on"
  }, __jsx("i", {
    className: "ni ni-menu"
  }))), __jsx("div", {
    className: "ml-auto d-flex"
  }, __jsx("div", {
    className: "hidden-md-down"
  }, __jsx("a", {
    href: "#",
    className: "header-icon",
    "data-toggle": "modal",
    "data-target": ".js-modal-settings"
  }, __jsx("i", {
    className: "fal fa-cog"
  }))), __jsx("div", null, __jsx("a", {
    href: "#",
    "data-toggle": "dropdown",
    title: props.auth.email,
    className: "header-icon d-flex align-items-center justify-content-center ml-2"
  }, __jsx("img", {
    src: "/img/demo/avatars/avatar-admin.png",
    className: "profile-image rounded-circle",
    alt: props.auth.full_name
  })), __jsx("div", {
    className: "dropdown-menu dropdown-menu-animated dropdown-lg"
  }, __jsx("div", {
    className: "dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top"
  }, __jsx("div", {
    className: "d-flex flex-row align-items-center mt-1 mb-1 color-white"
  }, __jsx("span", {
    className: "mr-2"
  }, __jsx("img", {
    src: "/img/demo/avatars/avatar-admin.png",
    className: "rounded-circle profile-image",
    alt: props.auth.full_name
  })), __jsx("div", {
    className: "info-card-text"
  }, __jsx("div", {
    className: "fs-lg text-truncate text-truncate-lg"
  }, props.auth.full_name), __jsx("span", {
    className: "text-truncate text-truncate-md opacity-80"
  }, props.auth.email)))), __jsx("div", {
    className: "dropdown-divider m-0"
  }), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    "data-action": "app-reset"
  }, __jsx("span", {
    "data-i18n": "drpdwn.reset_layout"
  }, "Reset Layout")), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    "data-toggle": "modal",
    "data-target": ".js-modal-settings"
  }, __jsx("span", {
    "data-i18n": "drpdwn.settings"
  }, "Settings")), __jsx("div", {
    className: "dropdown-divider m-0"
  }), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    "data-action": "app-fullscreen"
  }, __jsx("span", {
    "data-i18n": "drpdwn.fullscreen"
  }, "Fullscreen"), __jsx("i", {
    className: "float-right text-muted fw-n"
  }, "F11")), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    "data-action": "app-print"
  }, __jsx("span", {
    "data-i18n": "drpdwn.print"
  }, "Print"), __jsx("i", {
    className: "float-right text-muted fw-n"
  }, "Ctrl + P")), __jsx("div", {
    className: "dropdown-divider m-0"
  }), __jsx("a", {
    onClick: () => {
      props.onLogout();
    },
    className: "dropdown-item fw-500 pt-3 pb-3"
  }, __jsx("span", {
    "data-i18n": "drpdwn.page-logout"
  }, "Logout"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => {
  return {
    auth: state.auth.auth
  };
}, {
  onLogout: _actions_auth__WEBPACK_IMPORTED_MODULE_3__["default"].onLogout
})(index));

/***/ }),

/***/ "./src/site/admin/components/admin/Header/style.scss":
/*!***********************************************************!*\
  !*** ./src/site/admin/components/admin/Header/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/admin/ItemMenu/index.js":
/*!***********************************************************!*\
  !*** ./src/site/admin/components/admin/ItemMenu/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @kunukn/react-collapse */ "@kunukn/react-collapse");
/* harmony import */ var _kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






function index(props) {
  const {
    0: state,
    1: _setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    show: false
  });

  const setState = _state => {
    _setState(state => _objectSpread({}, state, {}, _state || {}));
  };

  const onClick = item => e => {
    if (props.toggle) {
      props.toggle(item);
    }

    if (!item.href || item.href == "#") {
      e.preventDefault();
      e.stopPropagation();
    } else {}
  };

  return __jsx("li", null, props.item.href && (!props.item.menus || !props.item.menus.length) ? __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    onClick: onClick(props.item),
    to: props.item.href,
    title: props.item.name,
    "data-filter-tags": props.item.name + " " + props.item.filter,
    className: " waves-effect waves-themed"
  }, __jsx("i", {
    className: props.item.icon
  }), __jsx("span", {
    className: "nav-link-text",
    "data-i18n": props.item.i18n
  }, props.item.name)) : __jsx("a", {
    onClick: onClick(props.item),
    href: "#",
    title: props.item.name,
    "data-filter-tags": props.item.name + " " + props.item.filter,
    className: " waves-effect waves-themed"
  }, __jsx("i", {
    className: props.item.icon
  }), __jsx("span", {
    className: "nav-link-text",
    "data-i18n": props.item.i18n
  }, props.item.name), __jsx("b", {
    class: "collapse-sign"
  }, props.item.open ? __jsx("em", {
    class: "fal fa-angle-down"
  }) : __jsx("em", {
    class: "fal fa-angle-up"
  }))), props.item.menus && props.item.menus.length ? __jsx(_kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_10___default.a, {
    elementType: "ul",
    isOpen: props.item.open,
    collapseHeight: "0px",
    transition: `height 290ms cubic-bezier(.4, 0, .2, 1)`
  }, props.item.menus.map((item, index) => {
    return __jsx("li", {
      key: index
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      onClick: onClick(item),
      to: item.href,
      title: item.name,
      "data-filter-tags": item.name + " " + item.filter,
      className: " waves-effect waves-themed"
    }, __jsx("span", {
      className: "nav-link-text",
      "data-i18n": item.i18n
    }, item.name)));
  })) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/site/admin/components/admin/Loading/index.js":
/*!**********************************************************!*\
  !*** ./src/site/admin/components/admin/Loading/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/admin/Loading/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "admin-loading"
  }, __jsx("div", {
    class: "lds-dual-ring"
  }), __jsx("div", null, "\u0110ang t\u1EA3i"));
});

/***/ }),

/***/ "./src/site/admin/components/admin/Loading/style.scss":
/*!************************************************************!*\
  !*** ./src/site/admin/components/admin/Loading/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/admin/Panel/index.js":
/*!********************************************************!*\
  !*** ./src/site/admin/components/admin/Panel/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mainam-react-native-string-utils */ "mainam-react-native-string-utils");
/* harmony import */ var mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/admin/Panel/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function index(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    try {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("body").smartPanel();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-original-title]").tooltip();
    } catch (e) {}
  }, []);
  let x = {};

  if (!props.sortable && props.sortable !== undefined) {
    x["data-panel-sortable"] = true;
  }

  if (props.allowClose === false) {
    x["data-panel-close"] = false;
  }

  if (props.allowFullScreen === false) {
    x["data-panel-fullscreen"] = false;
  }

  if (props.allowCollapse === false) {
    x["data-panel-collapsed"] = false;
  }

  if (props.allowSetting === false) {
    x["data-panel-setting"] = false;
  }

  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: props.id || mainam_react_native_string_utils__WEBPACK_IMPORTED_MODULE_2___default.a.guid(),
    className: "panel"
  }, x), __jsx("div", {
    className: "panel-hdr color-success-600"
  }, __jsx("h2", {
    className: "ui-sortable-handle",
    onDragOver: e => {
      console.log(e);
    }
  }, props.title), props.toolbar && __jsx("div", {
    className: "panel-toolbar"
  }, props.toolbar)), __jsx("div", {
    className: "panel-container collapse fullscreen show"
  }, __jsx("div", {
    className: "panel-content"
  }, props.children)), props.bottom, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("script", {
    src: "/js/panel.js"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/site/admin/components/admin/Panel/style.scss":
/*!**********************************************************!*\
  !*** ./src/site/admin/components/admin/Panel/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/admin/SettingLayout/index.js":
/*!****************************************************************!*\
  !*** ./src/site/admin/components/admin/SettingLayout/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Z; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Z() {
  return __jsx("div", {
    className: "setting-layout modal fade js-modal-settings modal-backdrop-transparent",
    tabIndex: "-1",
    role: "dialog",
    style1: "display: none;",
    "aria-hidden": "true"
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-right modal-md"
  }, __jsx("div", {
    className: "modal-content"
  }, __jsx("div", {
    className: "dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center w-100"
  }, __jsx("h4", {
    className: "m-0 text-center color-white"
  }, "Layout Settings", __jsx("small", {
    className: "mb-0 opacity-80"
  }, "User Interface Settings")), __jsx("button", {
    type: "button",
    className: "close text-white position-absolute pos-top pos-right p-2 m-1 mr-2",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, __jsx("span", {
    "aria-hidden": "true"
  }, __jsx("i", {
    className: "fal fa-times"
  })))), __jsx("div", {
    className: "modal-body p-0"
  }, __jsx("div", {
    className: "settings-panel"
  }, __jsx("div", {
    className: "mt-4 d-table w-100 px-5"
  }, __jsx("div", {
    className: "d-table-cell align-middle"
  }, __jsx("h5", {
    className: "p-0"
  }, "App Layout"))), __jsx("div", {
    className: "list",
    id: "fh"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "header-function-fixed"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Fixed Header"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "header is in a fixed at all times")), __jsx("div", {
    className: "list",
    id: "nff"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "nav-function-fixed"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Fixed Navigation"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "left panel is fixed")), __jsx("div", {
    className: "list",
    id: "nfm"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "nav-function-minify"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Minify Navigation"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Skew nav to maximize space")), __jsx("div", {
    className: "list",
    id: "nfh"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "nav-function-hidden"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Hide Navigation"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "roll mouse on edge to reveal")), __jsx("div", {
    className: "list",
    id: "nft"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "nav-function-top"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Top Navigation"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Relocate left pane to top")), __jsx("div", {
    className: "list",
    id: "mmb"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-main-boxed"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Boxed Layout"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Encapsulates to a container")), __jsx("div", {
    className: "expanded"
  }, __jsx("ul", {
    className: ""
  }, __jsx("li", null, __jsx("div", {
    className: "bg-fusion-50",
    "data-action": "toggle",
    "data-class": "mod-bg-1"
  })), __jsx("li", null, __jsx("div", {
    className: "bg-warning-200",
    "data-action": "toggle",
    "data-class": "mod-bg-2"
  })), __jsx("li", null, __jsx("div", {
    className: "bg-primary-200",
    "data-action": "toggle",
    "data-class": "mod-bg-3"
  })), __jsx("li", null, __jsx("div", {
    className: "bg-success-300",
    "data-action": "toggle",
    "data-class": "mod-bg-4"
  }))), __jsx("div", {
    className: "list",
    id: "mbgf"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-fixed-bg"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Fixed Background"))), __jsx("div", {
    className: "mt-4 d-table w-100 px-5"
  }, __jsx("div", {
    className: "d-table-cell align-middle"
  }, __jsx("h5", {
    className: "p-0"
  }, "Mobile Menu"))), __jsx("div", {
    className: "list",
    id: "nmp"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "nav-mobile-push"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Push Content"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Content pushed on menu reveal")), __jsx("div", {
    className: "list",
    id: "nmno"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "nav-mobile-no-overlay"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "No Overlay"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Removes mesh on menu reveal")), __jsx("div", {
    className: "list",
    id: "sldo"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "nav-mobile-slide-out"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Off-Canvas ", __jsx("sup", null, "(beta)")), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Content overlaps menu")), __jsx("div", {
    className: "mt-4 d-table w-100 px-5"
  }, __jsx("div", {
    className: "d-table-cell align-middle"
  }, __jsx("h5", {
    className: "p-0"
  }, "Accessibility"))), __jsx("div", {
    className: "list",
    id: "mbf"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-bigger-font"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Bigger Content Font"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "content fonts are bigger for readability")), __jsx("div", {
    className: "list",
    id: "mhc"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-high-contrast"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "High Contrast Text (WCAG 2 AA)"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "4.5:1 text contrast ratio")), __jsx("div", {
    className: "list",
    id: "mcb"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-color-blind"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Daltonism ", __jsx("sup", null, "(beta)"), " "), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "color vision deficiency")), __jsx("div", {
    className: "list",
    id: "mpc"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-pace-custom"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Preloader Inside"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "preloader will be inside content")), __jsx("div", {
    className: "mt-4 d-table w-100 px-5"
  }, __jsx("div", {
    className: "d-table-cell align-middle"
  }, __jsx("h5", {
    className: "p-0"
  }, "Global Modifications"))), __jsx("div", {
    className: "list",
    id: "mcbg"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-clean-page-bg"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Clean Page Background"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "adds more whitespace")), __jsx("div", {
    className: "list",
    id: "mhni"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-hide-nav-icons"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Hide Navigation Icons"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "invisible navigation icons")), __jsx("div", {
    className: "list",
    id: "dan"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-disable-animation"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Disable CSS Animation"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Disables CSS based animations")), __jsx("div", {
    className: "list",
    id: "mhic"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-hide-info-card"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Hide Info Card"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Hides info card from left panel")), __jsx("div", {
    className: "list",
    id: "mlph"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-lean-subheader"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Lean Subheader"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "distinguished page header")), __jsx("div", {
    className: "list",
    id: "mnl"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn btn-switch",
    "data-action": "toggle",
    "data-class": "mod-nav-link"
  }), __jsx("span", {
    className: "onoffswitch-title"
  }, "Hierarchical Navigation"), __jsx("span", {
    className: "onoffswitch-title-desc"
  }, "Clear breakdown of nav links")), __jsx("hr", {
    className: "mb-0 mt-4"
  }), __jsx("div", {
    className: "expanded theme-colors pl-5 pr-3"
  }, __jsx("ul", {
    className: "m-0"
  }, __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-0",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Wisteria (base css)"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-1",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-1.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Tapestry"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-2",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-2.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Atlantis"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-3",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-3.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Indigo"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-4",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-4.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Dodger Blue"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-5",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-5.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Tradewind"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-6",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-6.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Cranberry"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-7",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-7.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Oslo Gray"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-8",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-8.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Chetwode Blue"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-9",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-9.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Apricot"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-10",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-10.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Blue Smoke"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-11",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-11.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Green Smoke"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-12",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-12.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Wild Blue Yonder"
  })), __jsx("li", null, __jsx("a", {
    href: "#",
    id: "myapp-13",
    "data-action": "theme-update",
    "data-themesave": "",
    "data-theme": "/css/themes/cust-theme-13.css",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "",
    "data-original-title": "Emerald"
  })))), __jsx("hr", {
    className: "mb-0 mt-4"
  }), __jsx("div", {
    className: "pl-5 pr-3 py-3 bg-faded"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-6 pr-1"
  }, __jsx("a", {
    href: "#",
    className: "btn btn-outline-danger fw-500 btn-block waves-effect waves-themed",
    "data-action": "app-reset"
  }, "Reset Settings")), __jsx("div", {
    className: "col-6 pl-1"
  }, __jsx("a", {
    href: "#",
    className: "btn btn-danger fw-500 btn-block waves-effect waves-themed",
    "data-action": "factory-reset"
  }, "Factory Reset"))))), " ", __jsx("span", {
    id: "saving"
  })))));
}

/***/ }),

/***/ "./src/site/admin/components/admin/SideBar/index.js":
/*!**********************************************************!*\
  !*** ./src/site/admin/components/admin/SideBar/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/admin/SideBar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ItemMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ItemMenu */ "./src/site/admin/components/admin/ItemMenu/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








function index(props) {
  const menus = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null);
  const {
    0: state,
    1: _setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    menus: [{
      href: "/admin/dashboard",
      i18n: "nav.dashboard",
      name: "Dashboard",
      icon: "fal fa-game-board-alt",
      filter: "dashboard tổng quan"
    }, {
      href: "/admin/user",
      i18n: "nav.user",
      name: "Quản lý tài khoản",
      icon: "fal fa-game-board-alt"
    }, {
      href: "#",
      i18n: "nav.device_management",
      name: "Quản lý trang thiết bị",
      icon: "fal fa-game-board-alt",
      filter: "quan ly trang thiet bi",
      menus: [{
        href: "/admin/device/create",
        name: "Thêm thiết bị",
        i18n: "nav.device_add_new"
      }, {
        href: "/admin/device",
        name: "Danh sách thiết bị",
        i18n: "nav.list_device"
      }]
    }, {
      href: "/admin/name-device",
      i18n: "nav.name-device",
      name: "Quản lý tên thiết bị",
      icon: "fal fa-game-board-alt"
    }, {
      href: "/admin/device-type",
      i18n: "nav.device_type",
      name: "Quản lý loại thiết bị",
      icon: "fal fa-game-board-alt"
    }, {
      href: "/admin/manufacturer",
      i18n: "nav.manufacturer",
      name: "Quản lý hãng sản xuất",
      icon: "fal fa-game-board-alt"
    }, {
      href: "/admin/unit",
      i18n: "nav.unit",
      name: "Quản lý đơn vị tính",
      icon: "fal fa-game-board-alt"
    }, {
      href: "/admin/supplier",
      i18n: "nav.supplier",
      name: "Quản lý đơn vị cung cấp",
      icon: "fal fa-game-board-alt"
    }, {
      href: "/admin/status",
      i18n: "nav.status",
      name: "Quản lý trạng thái",
      icon: "fal fa-game-board-alt"
    }, {
      href: "#",
      i18n: "nav.example",
      name: "Example",
      icon: "fal fa-person-carry",
      filter: "example",
      role: 2,
      menus: [{
        href: "/example/panel",
        name: "Trong tháng"
      }]
    }],
    show: false
  });

  const setState = _state => {
    _setState(state => _objectSpread({}, state, {}, _state || {}));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    try {
      window.initApp.listFilter(jquery__WEBPACK_IMPORTED_MODULE_12___default()("#js-nav-menu"), jquery__WEBPACK_IMPORTED_MODULE_12___default()("#nav_filter_input"), jquery__WEBPACK_IMPORTED_MODULE_12___default()("#js-primary-nav"));
    } catch (error) {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (menus.current) {
      setState({
        menus: menus.current
      });
    }
  }, []);

  const toggle = item => {
    item.open = !item.open;
    menus.current = [...state.menus];
    setState({
      menus: menus.current
    });
  };

  return __jsx("aside", {
    className: "page-sidebar list-filter-active"
  }, __jsx("div", {
    className: "page-logo",
    style: {
      backgroundColor: "#FFF",
      padding: 0
    }
  }, __jsx("a", {
    href: "#",
    className: `page-logo-link 
          press-scale-down 
          d-flex align-items-center position-relative` // data-toggle="modal"
    // data-target="#modal-shortcut"
    ,
    style: {
      padding: 10
    }
  }, __jsx("img", {
    src: __webpack_require__(/*! @images/logo.png */ "./src/resources/images/logo.png"),
    alt: "iSofH",
    style: {
      height: 75
    },
    "aria-roledescription": "logo"
  }))), __jsx("nav", {
    id: "js-primary-nav",
    className: "primary-nav js-list-filter",
    role: "navigation"
  }, __jsx("div", {
    className: "nav-filter"
  }, __jsx("div", {
    className: "position-relative"
  }, __jsx("input", {
    type: "text",
    id: "nav_filter_input",
    placeholder: "T\xECm ki\u1EBFm t\xEDnh n\u0103ng",
    className: "form-control",
    tabIndex: "0"
  }), __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "btn-primary btn-search-close js-waves-off",
    "data-action": "toggle",
    "data-class": "list-filter-active",
    "data-target": ".page-sidebar"
  }, __jsx("i", {
    className: "fal fa-chevron-up"
  })))), __jsx("div", {
    className: "info-card"
  }, __jsx("img", {
    src: "/img/demo/avatars/avatar-admin.png",
    className: "profile-image rounded-circle",
    alt: props.auth.full_name
  }), __jsx("div", {
    className: "info-card-text"
  }, __jsx("a", {
    href: "#",
    className: "d-flex align-items-center text-white"
  }, __jsx("span", {
    className: "text-truncate text-truncate-sm d-inline-block"
  }, props.auth.full_name)), props.auth.email && __jsx("span", {
    className: "d-inline-block text-truncate text-truncate-sm"
  }, props.auth.email)), __jsx("img", {
    src: "/img/card-backgrounds/cover-2-lg.png",
    className: "cover",
    alt: "cover"
  }), __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    className: "pull-trigger-btn",
    "data-action": "toggle",
    "data-class": "list-filter-active",
    "data-target": ".page-sidebar",
    "data-focus": "nav_filter_input"
  }, __jsx("i", {
    className: "fal fa-angle-down"
  }))), __jsx("ul", {
    id: "js-nav-menu",
    className: "nav-menu"
  }, state.menus.map((item, index) => {
    if (props.auth.role >= item.role || !item.role) return __jsx(_ItemMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: index,
      item: item,
      toggle: toggle
    });
  })), __jsx("div", {
    className: "filter-message js-filter-message bg-success-600"
  })), __jsx("div", {
    className: "nav-footer shadow-top"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      return false;
    },
    "data-action": "toggle",
    "data-class": "nav-function-minify",
    className: "hidden-md-down"
  }, __jsx("i", {
    className: "ni ni-chevron-right"
  }), __jsx("i", {
    className: "ni ni-chevron-right"
  })), __jsx("ul", {
    className: "list-table m-auto nav-footer-buttons"
  })));
}

function mapStateToProps(state) {
  return {
    auth: state.auth.auth
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(index));

/***/ }),

/***/ "./src/site/admin/components/admin/SideBar/style.scss":
/*!************************************************************!*\
  !*** ./src/site/admin/components/admin/SideBar/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/admin/index.js":
/*!**************************************************!*\
  !*** ./src/site/admin/components/admin/index.js ***!
  \**************************************************/
/*! exports provided: AdminPage, Breadcrumbs, Footer, Header, ItemMenu, Panel, SettingLayout, SideBar, Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPage */ "./src/site/admin/components/admin/AdminPage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return _AdminPage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/site/admin/components/admin/Breadcrumbs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/site/admin/components/admin/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/site/admin/components/admin/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ItemMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemMenu */ "./src/site/admin/components/admin/ItemMenu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemMenu", function() { return _ItemMenu__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Panel */ "./src/site/admin/components/admin/Panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _Panel__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SettingLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SettingLayout */ "./src/site/admin/components/admin/SettingLayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingLayout", function() { return _SettingLayout__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideBar */ "./src/site/admin/components/admin/SideBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return _SideBar__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loading */ "./src/site/admin/components/admin/Loading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./src/site/admin/index.js":
/*!*********************************!*\
  !*** ./src/site/admin/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_RouterWithPaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/RouterWithPaths */ "./src/components/RouterWithPaths.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @admin/components/admin */ "./src/site/admin/components/admin/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mainam_react_native_date_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mainam-react-native-date-utils */ "mainam-react-native-date-utils");
/* harmony import */ var mainam_react_native_date_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mainam_react_native_date_utils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function index(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    global.registerEvent();
  });
  const routers = [{
    path: ["/admin", "/admin/dashboard"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! @admin/containers/dashboard */ "./src/site/admin/containers/dashboard/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/device"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @admin/containers/device */ "./src/site/admin/containers/device/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/device/create", "/admin/device/edit/:id"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! @admin/containers/CreateDevice */ "./src/site/admin/containers/CreateDevice/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/device/:id"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! @admin/containers/device/detail */ "./src/site/admin/containers/device/detail/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/device-type"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @admin/containers/device-type */ "./src/site/admin/containers/device-type/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/device-type/create", "/admin/device-type/:id"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! @admin/containers/device-type/create */ "./src/site/admin/containers/device-type/create/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/manufacturer"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @admin/containers/manufacturer */ "./src/site/admin/containers/manufacturer/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/manufacturer/create", "/admin/manufacturer/:id"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @admin/containers/manufacturer/create */ "./src/site/admin/containers/manufacturer/create/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/supplier"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! @admin/containers/supplier */ "./src/site/admin/containers/supplier/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/name-device"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @admin/containers/nameDevice */ "./src/site/admin/containers/nameDevice/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/status"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @admin/containers/status */ "./src/site/admin/containers/status/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/unit"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @admin/containers/unit */ "./src/site/admin/containers/unit/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/user"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @admin/containers/user */ "./src/site/admin/containers/user/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }, {
    path: ["/admin/user/create", "/admin/user/:id"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! @admin/containers/user/create */ "./src/site/admin/containers/user/create/index.js")),
      loading: _admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Loading"]
    })
  }];

  if (!props.auth || !props.auth.id) {
    props.history.push("/login");
    return null;
  }

  return __jsx("div", null, __jsx("div", {
    className: "page-wrapper"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("script", {
    src: "/js/vendors.bundle.js"
  }), __jsx("script", {
    src: "/js/app.bundle.js"
  }), __jsx("script", {
    src: "/js/load-theme.js"
  })), __jsx("div", {
    className: "page-inner"
  }, __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["SideBar"], null), __jsx("div", {
    className: "page-content-wrapper"
  }, __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Header"], null), __jsx("main", {
    id: "js-page-content",
    role: "main",
    className: "page-content"
  }, __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Breadcrumbs"], null), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, routers.map((route, key) => {
    if (route.component) return __jsx(_components_RouterWithPaths__WEBPACK_IMPORTED_MODULE_4__["default"], {
      exact: true,
      key: key,
      path: route.path,
      render: props => {
        return __jsx(route.component, props);
      }
    });
    return null;
  }))), __jsx("div", {
    className: "page-content-overlay",
    "data-action": "toggle",
    "data-class": "mobile-nav-on"
  }), __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["Footer"], null), __jsx("div", {
    className: "modal fade modal-backdrop-transparent",
    id: "modal-shortcut",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "modal-shortcut",
    "aria-hidden": "true"
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-top modal-transparent",
    role: "document"
  }, __jsx("div", {
    className: "modal-content"
  }, __jsx("div", {
    className: "modal-body"
  }, __jsx("ul", {
    className: "app-list w-auto h-auto p-0 text-left"
  }, __jsx("li", null, __jsx("a", {
    href: "intel_introduction.html",
    className: "app-list-item text-white border-0 m-0"
  }, __jsx("div", {
    className: "icon-stack"
  }, __jsx("i", {
    className: "base base-7 icon-stack-3x opacity-100 color-primary-500 "
  }), __jsx("i", {
    className: "base base-7 icon-stack-2x opacity-100 color-primary-300 "
  }), __jsx("i", {
    className: "fal fa-home icon-stack-1x opacity-100 color-white"
  })), __jsx("span", {
    className: "app-list-name"
  }, "Home"))), __jsx("li", null, __jsx("a", {
    href: "page_inbox_general.html",
    className: "app-list-item text-white border-0 m-0"
  }, __jsx("div", {
    className: "icon-stack"
  }, __jsx("i", {
    className: "base base-7 icon-stack-3x opacity-100 color-success-500 "
  }), __jsx("i", {
    className: "base base-7 icon-stack-2x opacity-100 color-success-300 "
  }), __jsx("i", {
    className: "ni ni-envelope icon-stack-1x text-white"
  })), __jsx("span", {
    className: "app-list-name"
  }, "Inbox"))), __jsx("li", null, __jsx("a", {
    href: "intel_introduction.html",
    className: "app-list-item text-white border-0 m-0"
  }, __jsx("div", {
    className: "icon-stack"
  }, __jsx("i", {
    className: "base base-7 icon-stack-2x opacity-100 color-primary-300 "
  }), __jsx("i", {
    className: "fal fa-plus icon-stack-1x opacity-100 color-white"
  })), __jsx("span", {
    className: "app-list-name"
  }, "Add More")))))))), __jsx("p", {
    id: "js-color-profile",
    className: "d-none"
  }, __jsx("span", {
    className: "color-primary-50"
  }), __jsx("span", {
    className: "color-primary-100"
  }), __jsx("span", {
    className: "color-primary-200"
  }), __jsx("span", {
    className: "color-primary-300"
  }), __jsx("span", {
    className: "color-primary-400"
  }), __jsx("span", {
    className: "color-primary-500"
  }), __jsx("span", {
    className: "color-primary-600"
  }), __jsx("span", {
    className: "color-primary-700"
  }), __jsx("span", {
    className: "color-primary-800"
  }), __jsx("span", {
    className: "color-primary-900"
  }), __jsx("span", {
    className: "color-info-50"
  }), __jsx("span", {
    className: "color-info-100"
  }), __jsx("span", {
    className: "color-info-200"
  }), __jsx("span", {
    className: "color-info-300"
  }), __jsx("span", {
    className: "color-info-400"
  }), __jsx("span", {
    className: "color-info-500"
  }), __jsx("span", {
    className: "color-info-600"
  }), __jsx("span", {
    className: "color-info-700"
  }), __jsx("span", {
    className: "color-info-800"
  }), __jsx("span", {
    className: "color-info-900"
  }), __jsx("span", {
    className: "color-danger-50"
  }), __jsx("span", {
    className: "color-danger-100"
  }), __jsx("span", {
    className: "color-danger-200"
  }), __jsx("span", {
    className: "color-danger-300"
  }), __jsx("span", {
    className: "color-danger-400"
  }), __jsx("span", {
    className: "color-danger-500"
  }), __jsx("span", {
    className: "color-danger-600"
  }), __jsx("span", {
    className: "color-danger-700"
  }), __jsx("span", {
    className: "color-danger-800"
  }), __jsx("span", {
    className: "color-danger-900"
  }), __jsx("span", {
    className: "color-warning-50"
  }), __jsx("span", {
    className: "color-warning-100"
  }), __jsx("span", {
    className: "color-warning-200"
  }), __jsx("span", {
    className: "color-warning-300"
  }), __jsx("span", {
    className: "color-warning-400"
  }), __jsx("span", {
    className: "color-warning-500"
  }), __jsx("span", {
    className: "color-warning-600"
  }), __jsx("span", {
    className: "color-warning-700"
  }), __jsx("span", {
    className: "color-warning-800"
  }), __jsx("span", {
    className: "color-warning-900"
  }), __jsx("span", {
    className: "color-success-50"
  }), __jsx("span", {
    className: "color-success-100"
  }), __jsx("span", {
    className: "color-success-200"
  }), __jsx("span", {
    className: "color-success-300"
  }), __jsx("span", {
    className: "color-success-400"
  }), __jsx("span", {
    className: "color-success-500"
  }), __jsx("span", {
    className: "color-success-600"
  }), __jsx("span", {
    className: "color-success-700"
  }), __jsx("span", {
    className: "color-success-800"
  }), __jsx("span", {
    className: "color-success-900"
  }), __jsx("span", {
    className: "color-fusion-50"
  }), __jsx("span", {
    className: "color-fusion-100"
  }), __jsx("span", {
    className: "color-fusion-200"
  }), __jsx("span", {
    className: "color-fusion-300"
  }), __jsx("span", {
    className: "color-fusion-400"
  }), __jsx("span", {
    className: "color-fusion-500"
  }), __jsx("span", {
    className: "color-fusion-600"
  }), __jsx("span", {
    className: "color-fusion-700"
  }), __jsx("span", {
    className: "color-fusion-800"
  }), __jsx("span", {
    className: "color-fusion-900"
  }))))), __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_6__["SettingLayout"], null));
}

function mapStateToProps(state) {
  return {
    auth: state.auth.auth
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(index));

/***/ }),

/***/ "./src/site/user/containers/auth/LoginScreen.js":
/*!******************************************************!*\
  !*** ./src/site/user/containers/auth/LoginScreen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./src/site/user/containers/auth/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_util_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/util.css */ "./src/site/user/containers/auth/css/util.css");
/* harmony import */ var _css_util_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_util_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @actions/auth */ "./src/redux-store/actions/auth/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function LoginScreen(props) {
  const {
    0: username,
    1: setUserName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const onLogin = () => {
    props.onLogin(username, password).then(s => {
      location.href = "/admin";
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.auth) {
      location.href = "/admin";
    }
  }, []);

  const onKeyDown = e => {
    if (e.nativeEvent.code == "Enter") {
      onLogin();
    }
  };

  return __jsx("div", {
    className: "login-page"
  }, __jsx("div", {
    className: "container-login100",
    style: {
      backgroundImage: `url(${__webpack_require__(/*! @images/bg_login.jpg */ "./src/resources/images/bg_login.jpg")})`
    }
  }, __jsx("div", {
    className: "wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54"
  }, __jsx("div", {
    className: "login100-form validate-form"
  }, __jsx("span", {
    className: "login100-form-title p-b-49"
  }, "\u0110\u0102NG NH\u1EACP"), __jsx("div", {
    className: "wrap-input100 validate-input m-b-23",
    "data-validate": "Username is reauired"
  }, __jsx("span", {
    className: "label-input100"
  }, "T\xE0i kho\u1EA3n"), __jsx("input", {
    className: "input100",
    type: "text",
    name: "username",
    value: username,
    placeholder: "Nh\u1EADp t\xE0i kho\u1EA3n",
    onKeyDown: onKeyDown,
    onChange: e => {
      setUserName(e.target.value);
    }
  })), __jsx("div", {
    className: "wrap-input100 validate-input",
    "data-validate": "Password is required"
  }, __jsx("span", {
    className: "label-input100"
  }, "M\u1EADt kh\u1EA9u"), __jsx("input", {
    className: "input100",
    type: "password",
    name: "pass",
    value: password,
    placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u",
    onChange: e => {
      setPassword(e.target.value);
    },
    onKeyDown: onKeyDown
  })), __jsx("div", {
    className: "text-right p-t-8 p-b-31"
  }), __jsx("div", {
    className: "container-login100-form-btn"
  }, __jsx("div", {
    className: "wrap-login100-form-btn"
  }, __jsx("div", {
    className: "login100-form-bgbtn"
  }), __jsx("button", {
    onClick: onLogin,
    className: "login100-form-btn"
  }, "\u0110\u0103ng nh\u1EADp")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => ({
  auth: state.auth.auth
}), {
  onLogin: _actions_auth__WEBPACK_IMPORTED_MODULE_4__["default"].onLogin
})(LoginScreen));

/***/ }),

/***/ "./src/site/user/containers/auth/css/main.scss":
/*!*****************************************************!*\
  !*** ./src/site/user/containers/auth/css/main.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/user/containers/auth/css/util.css":
/*!****************************************************!*\
  !*** ./src/site/user/containers/auth/css/util.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/user/index.js":
/*!********************************!*\
  !*** ./src/site/user/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_RouterWithPaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/RouterWithPaths */ "./src/components/RouterWithPaths.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import Header from '@user/components/Header';
// import Footer from '@user/components/Footer';



function Loading() {
  return __jsx("div", null);
}

function index(props) {
  const routers = [{
    path: ["/gioi-thieu"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! @user/containers/About */ "./src/site/user/containers/About/index.js")),
      loading: Loading
    })
  }, {
    path: ["/tin-tuc", "/tin-tuc/:alias", "/tin-tuc/:function1/:function1"],
    component: react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
      loader: () => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! @user/containers/News */ "./src/site/user/containers/News/index.js")),
      loading: Loading
    })
  }];
  return __jsx("div", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, routers.map((route, key) => {
    if (route.component) return __jsx(_components_RouterWithPaths__WEBPACK_IMPORTED_MODULE_4__["default"], {
      exact: true,
      key: key,
      path: route.path,
      render: props => {
        return __jsx(route.component, props);
      }
    });
    return null;
  })));
}

/***/ }),

/***/ "./src/utils/client-utils.js":
/*!***********************************!*\
  !*** ./src/utils/client-utils.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 // if (typeof window === "undefined") {
//   global.window = {};
// }

const server_url = "https://dhy3.demo.isofh.vn"; // const server_url = window.location.origin;

String.prototype.absoluteUrl = String.prototype.absolute || function (defaultValue) {
  var _this = this.toString();

  if (_this == "") if (defaultValue != undefined) return defaultValue;else return _this;

  if (_this.startsWith("http") || _this.startsWith("blob")) {
    return _this;
  }

  if (_this.endsWith(".jpg") || _this.endsWith(".png") || _this.endsWith(".JPG") || _this.endsWith(".PNG") || _this.endsWith(".gif")) {
    return (_this + "").resolveResource();
  }

  if (!_this.endsWith(".jpg") || !_this.endsWith(".png") || _this.endsWith(".JPG") || _this.endsWith(".PNG") || !_this.endsWith(".gif")) {
    return defaultValue;
  }

  if (_this.startsWith("jira.isofh.com.vn")) return "htts://" + _this + ""; // if(this.startsWith("user"))
  //     return

  return server_url + _this + "";
};

String.prototype.absoluteFileUrl = String.prototype.absoluteFileUrl || function (defaultValue) {
  var _this = this.toString();

  if (_this == "") if (defaultValue != undefined) return defaultValue;else return _this;

  if (_this.startsWith("http") || _this.startsWith("blob")) {
    return _this;
  }

  return server_url + "/api/may-tho/v1/files/" + _this + "";
};

String.prototype.getServiceUrl = String.prototype.absolute || function (defaultValue) {
  if (this == "") if (defaultValue != undefined) return defaultValue;else return this;

  if (this.startsWith("http") || this.startsWith("blob")) {
    return this;
  }

  return server_url + this;
};

String.prototype.resolveResource = String.prototype.resolveResource || function (defaultValue) {
  if (this == "") if (defaultValue != undefined) return defaultValue;else return this;

  if (this.startsWith("http") || this.startsWith("blob")) {
    return this;
  }

  return server_url + "/view-image/" + this;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  // auth: "eyJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiaXNvZmhDYXJlIiwiY3JlYXRlZCI6MTU1MzA3MDc0Mzc4NiwidHlwZSI6MCwidXNlcklkIjo1NX0.k8B3Cm5M-22ckpKk3W1fhgHoHq7LGVdKIjhLZUl0abKES5nSCC5RhupsRXctTK6skQMvCZ8f-TuZGbDcNgdlsb_Kc0ogFmaPmGI4ao7MKrCb9nCr4fxztUN0ABWUERA1wnQNFljgVR9FIrNKnf2hx_aTHIrwS9Ol1JOaKJVnj83cK5vg2ExvN7ralb1yoyuHEZoODlDBVHCIxeG5X3oaJE6-BKfcafXau_cmYz-Ovg31VtZpu1lCffaOj2uLSefPBvqfL2d2U1sswiUrV95rankTjOomr31lP4xiCN71-7YX_6Hx7EraRFhmclmaOjGUWM83VB0fvY8hIEHiE8yB8w",
  auth: "",
  serverApi: server_url,

  uploadFile(url, file) {
    const formData = new FormData();
    formData.append("files", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: this.auth // 'MobileMode': 'vendorPortal'

      }
    };
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url.getServiceUrl(), formData, config);
  },

  requestApi(methodType, url, body) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
      var dataBody = "";
      if (!body) body = {};
      dataBody = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body);
      this.requestFetch(methodType, url && url.indexOf("http") == 0 ? url : url, {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.auth // 'MobileMode': 'vendorPortal'

      }, dataBody).then(s => {
        // ;
        s.json().then(val => {
          resolve(val);
        }).catch(e => {
          reject(e);
        });
      }).catch(e => {
        reject(e);
      });
    });
  },

  requestFetch(methodType, url, headers, body) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
      let fetchParam = {
        method: methodType,
        headers
      };

      if (methodType.toLowerCase() !== "get") {
        fetchParam.body = body;
      }

      return fetch(url.getServiceUrl(), fetchParam).then(json => {
        if (!json.ok) {
          reject(json);
        } else resolve(json);
      }).catch(e => {
        reject(e);
      });
    });
  },

  requestService(url) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(server_url + url).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

});

/***/ }),

/***/ "./src/utils/snackbar-utils.js":
/*!*************************************!*\
  !*** ./src/utils/snackbar-utils.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
// import { Toast } from 'native-base';

/* harmony default export */ __webpack_exports__["default"] = ({
  showShort(message, type) {
    this.show(message, type, 3000);
  },

  showLong(message, type) {
    this.show(message, type, 6000);
  },

  show(message, type, duration) {
    if (duration != 0 && !duration) duration = 3000;
    let _type = "info";

    switch (type) {
      case "warning":
      case "info":
      case "success":
      case "danger":
        _type = type;
        break;
    }

    this.showWithTitle("iSofH Hrm", message, _type, duration); // Toast.show({
    //     text: message,
    //     duration: 3000,
    //     type: _type
    // });
  },

  showWithTitle(message, description, type, duration) {
    let func = react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success;

    switch (type) {
      case "danger":
        func = react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error;
        break;

      case "info":
        func = react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].info;
        break;

      case "warning":
        func = react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warn;
        break;
    }

    func(description, {
      position: react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].POSITION.TOP_RIGHT
    });
  }

});

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\iSofh\source\project-react-js-device-management\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "@kunukn/react-collapse":
/*!*****************************************!*\
  !*** external "@kunukn/react-collapse" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@kunukn/react-collapse");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "mainam-react-native-date-utils":
/*!*************************************************!*\
  !*** external "mainam-react-native-date-utils" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mainam-react-native-date-utils");

/***/ }),

/***/ "mainam-react-native-string-utils":
/*!***************************************************!*\
  !*** external "mainam-react-native-string-utils" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mainam-react-native-string-utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map