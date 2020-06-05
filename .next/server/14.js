exports.ids = [14];
exports.modules = {

/***/ "./src/data-access/manufacturer-provider.js":
/*!**************************************************!*\
  !*** ./src/data-access/manufacturer-provider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/client-utils */ "./src/utils/client-utils.js");
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/strings */ "./src/resources/strings.js");
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_strings__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  getById(id) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.manufacturer.search + "/" + id;
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("get", url, {});
  },

  search(page, size, name, active, selected) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.manufacturer.search + "?";
    url += "page=" + (page || 0) + "&";
    url += "size=" + (size || 10) + "&";
    if (name) url += "name=" + name + "&";
    if (active !== undefined && active != -1) url += "active=" + (active ? 1 : 0) + "&";
    if (selected !== undefined) url += "selected=" + (selected ? 1 : 0) + "&";
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("get", url, {});
  },

  delete(id) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.manufacturer.search + "/" + id;
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("delete", url, {});
  },

  createOrEdit(id, ma, ten) {
    if (!id) {
      let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.manufacturer.search;
      return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("post", url, {
        ma,
        ten
      });
    } else {
      let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.manufacturer.search + "/" + id;
      return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("put", url, {
        ma,
        ten
      });
    }
  }

});

/***/ }),

/***/ "./src/site/admin/containers/user/create/index.js":
/*!********************************************************!*\
  !*** ./src/site/admin/containers/user/create/index.js ***!
  \********************************************************/
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_access_manufacturer_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @data-access/manufacturer-provider */ "./src/data-access/manufacturer-provider.js");
/* harmony import */ var _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @utils/snackbar-utils */ "./src/utils/snackbar-utils.js");
/* harmony import */ var mainam_react_native_date_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mainam-react-native-date-utils */ "mainam-react-native-date-utils");
/* harmony import */ var mainam_react_native_date_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mainam_react_native_date_utils__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _admin_components_admin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @admin/components/admin */ "./src/site/admin/components/admin/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








function index(props) {
  const id = props.match.params.id;
  const {
    0: state,
    1: _setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    data: [],
    ma: "",
    ten: ""
  });

  const setState = (data = {}) => {
    _setState(state => {
      return _objectSpread({}, state, {}, data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (id) {
      getDetail(id);
    }
  }, []);

  const getDetail = id => {
    _data_access_manufacturer_provider__WEBPACK_IMPORTED_MODULE_9__["default"].getById(id).then(s => {
      if (s && s.code === 0) {
        setState(s.data);
      }
    }).catch(e => {});
  };

  const onClose = () => () => {
    props.history.push("/admin/hang-san-xuat");
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        create();
      }
    });
  };

  const {
    getFieldDecorator
  } = props.form;

  const create = () => {
    _data_access_manufacturer_provider__WEBPACK_IMPORTED_MODULE_9__["default"].createOrEdit(id, state.ma, state.ten).then(s => {
      if (s && s.code === 0) {
        if (id) {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_10__["default"].show("Cập nhật tài khoản thành công", "success");
        } else {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_10__["default"].show("Thêm mới tài khoản thành công", "success");
        }

        props.history.push("/admin/hang-san-xuat");
      } else {
        if (id) {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_10__["default"].show("Cập nhật tài khoản thất bại", "danger");
        } else {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_10__["default"].show("Thêm mới tài khoản thất bại", "danger");
        }
      }
    }).catch(e => {});
  };

  return __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_12__["AdminPage"], {
    className: "mgr-manufacturer"
  }, __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_12__["Panel"], {
    title: id ? "Chỉnh sửa tài khoản" : "Thêm mới tài khoản",
    id: "mgr-manufacturer",
    allowClose: false,
    allowCollapse: false
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Form"], {
    layout: "vertical",
    hideRequiredMark: true,
    onSubmit: handleSubmit
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Form"].Item, {
    label: "M\xE3 t\xE0i kho\u1EA3n"
  }, getFieldDecorator("ma", {
    rules: [{
      required: true,
      message: "Nhập mã tài khoản"
    }],
    initialValue: state.ma
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    onChange: e => setState(_objectSpread({}, state, {
      ma: e.target.value
    })),
    placeholder: "Nh\u1EADp m\xE3 t\xE0i kho\u1EA3n"
  }))))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Form"].Item, {
    label: "Lo\u1EA1i form"
  }, getFieldDecorator("ten", {
    rules: [{
      required: true,
      message: "Nhập tài khoản"
    }],
    initialValue: state.ten
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    onChange: e => setState(_objectSpread({}, state, {
      ten: e.target.value
    })),
    placeholder: "Nh\u1EADp t\xE0i kho\u1EA3n"
  }))))), __jsx("div", {
    style: {
      width: "100%",
      borderTop: "1px solid #e9e9e9",
      padding: "16px 16px 0px",
      background: "#fff",
      textAlign: "right"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: onClose(false),
    style: {
      marginRight: 8
    }
  }, "H\u1EE7y"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    type: "primary",
    htmlType: "submit",
    onClick: handleSubmit
  }, id ? "Lưu thay đổi" : "Tạo mới")))));
}

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_8__["Form"].create()(index));

/***/ })

};;
//# sourceMappingURL=14.js.map