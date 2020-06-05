exports.ids = [1];
exports.modules = {

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./src/data-access/commercial-name-provider.js":
/*!*****************************************************!*\
  !*** ./src/data-access/commercial-name-provider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/client-utils */ "./src/utils/client-utils.js");
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/strings */ "./src/resources/strings.js");
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_strings__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  getById(id) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.nameDevice.search + "/" + id;
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("get", url, {});
  },

  search(page, size, name, active, selected) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.nameDevice.search + "?";
    url += "page=" + (page || 0) + "&";
    url += "size=" + (size || 10) + "&";
    if (name) url += "name=" + name + "&";
    if (active !== undefined && active != -1) url += "active=" + (active ? 1 : 0) + "&";
    if (selected !== undefined) url += "selected=" + (selected ? 1 : 0) + "&";
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("get", url, {});
  },

  delete(id) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.nameDevice.search + "/" + id;
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("delete", url, {});
  },

  createOrEdit(id, ma, ten, tenVietTat, dmLoaiThietBiId) {
    if (!id) {
      let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.nameDevice.search;
      return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("post", url, {
        ma,
        ten,
        tenVietTat,
        dmLoaiThietBiId
      });
    } else {
      let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.nameDevice.search + "/" + id;
      return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("put", url, {
        ma,
        ten,
        tenVietTat,
        dmLoaiThietBiId
      });
    }
  }

});

/***/ }),

/***/ "./src/data-access/device-type-provider.js":
/*!*************************************************!*\
  !*** ./src/data-access/device-type-provider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/client-utils */ "./src/utils/client-utils.js");
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/strings */ "./src/resources/strings.js");
/* harmony import */ var _resources_strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_strings__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  getById(id) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.formType.search + "/" + id;
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("get", url, {});
  },

  search(page, size, ma, ten) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.formType.search + "?";
    url += "page=" + (page || 0) + "&";
    url += "size=" + (size || 10) + "&";
    if (ma) url += "ma=" + ma + "&";
    if (ten) url += "ten=" + ten;
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("get", url, {});
  },

  delete(id) {
    let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.formType.search + "/" + id;
    return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("delete", url, {});
  },

  createOrEdit(id, ma, ten) {
    if (!id) {
      let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.formType.search;
      return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("post", url, {
        ma,
        ten
      });
    } else {
      let url = _resources_strings__WEBPACK_IMPORTED_MODULE_1___default.a.api.formType.search + "/" + id;
      return _utils_client_utils__WEBPACK_IMPORTED_MODULE_0__["default"].requestApi("put", url, {
        ma,
        ten
      });
    }
  }

});

/***/ }),

/***/ "./src/resources/images/icon/ic-search.png":
/*!*************************************************!*\
  !*** ./src/resources/images/icon/ic-search.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKMSURBVHgB7ZmNcdsgGIaftAPU3YAN4hHoBM0G1QbNBtEG6QZOJ3A3kDOBnQmsTtB0AhciuXZTPkAI/fguz917PsMZ9PLBZ0BX9EMbLY2u209ltDirr1vtjJ6MNu332WAf+t7ol9EhQVujgsb4ZCijijQDLu2N7vg3koOzaDs9DCRrqmAEFM20OIyge3py5amza6MibhrsWv3ktMAXrc6TQ0w7n4yeyYjtPLTA7fQoiZ/z2uiBuASRbR0p/EZsXUE6irCpigwomhGXOlmTb9SWgb56r6GVp/GS/Cj8hjSJaMY1csRGWjK0J3EmSA2uGR6FvE5LOqKRR0YxDjfICadTdNZCQwXjUgnPcRPbwAI5KmOj6ZmqpfDeMg2u6ERNtXfI6e8H0/DoKLNGloHfvZi5dpTXTHeI2gjlUWaUo7xmOnZCuSLAHM084941fwj87sXMHEk6AszVTNIWxpqpHeUfmRaXmd8EsGZcIb1mOqSsVRPAmnlylCtGvjU5QwvlOwJYMxuhrmAaPgvlQTMWaW8WvR/KiCLDs0i7Vc24rMiwey/IfNJLQCGfZxQd2TPQxUIEvqPzigQK5DuAoY8D0uHQGlQkUjG+oZWnz4IeKPwXgHfkQ+G/x85ykaI9HfQOfctX/IOWo4+/3OI3dFyYmngWbbv7iLatvtAR31sA23FMJqtp/p0f+f9fWnF6C2DVNc0XRt/JhCZ+JIdS5wj5UMS9ikiVXTvrMQ1ZCvJHqeK00EtGNnQ0VdEvEt9wJ4+SCQxZFI0xO0W2gYffnhkIJYGSiQy9Rr1S6ia1ZCaGclHyZmjelLwZmjclfkP6PZfDhmYvqYX64FuCOVIiROeSInNkgztCD1ww52ejykj9ARkSTRumHkFiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/site/admin/components/common/Pagination/images/left.png":
/*!*********************************************************************!*\
  !*** ./src/site/admin/components/common/Pagination/images/left.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgBvVhBVuJAEK1KYLbjEXIE5waydlA5gA59AvEEwAnE9byZHuAA8ETeLPUGznKW3kDXIrRVnSgYQ3cn6fBXkFRedf2f/KpuhB1ByskehF8uAdSJvoA4QNgBpJzvQ6gm9DPavB5AxZDD+Tklvk8nZlRWeUKzfKc5AzWoAD/l7ABC5MSRKc477UxzLcRbyKD5A5S68ka7prlWn4CCA2OggicIVkKcHk29VB7TXL93SPwPVotvnJj/lq5cjuddorBnDSSaxY9mZ/NS4eREc0Q0SyeaV6olRPMufasQ7QnNt9bECHea5ozEjNyfmhzdkEVCxxrINJ81O+a1uSZ1p/mBaBbbqt2EU+WJafBntGcMZJqXC0rcegAHWJPnoLlPNPcgB7bSntDM1e6DMak7zWmEmYnH1yeAtb9gs8iY5oYQx/+hAD5UHneiehdcaAa4EGffB1ACuJG4cprTWJsMjzi2xIBTk2nkha48ofvRElua5jTc7RXxK3jGWvPxjd2rAf/A8rnvaiI2rCt/WQj9Mhmh2txQ9DTqAZ9M5vdwNkDEc/uT2BOnh30ogUyHk6N5m+yyS3cjMD8+JRkuispgtteAerZ1ASTVsth3b22pcjjrEcVdW1wRGZz6ubsM+VpqvmEiIPtFmwu6y5B7gPQpQ6HpVUpquUFwaZUBaU5/WbS2yVBoehXiiBtMQ/dzE7hRsSnxfJC5tpIoI4OXvZrkATOgXamTJ/DkE8vgZa+m32yWgR3PjIhl+DW6bvMf74cDeWSo5GRCd71ATWwyVHImI8Qhb4UbSsHQFFf5aZRJhh0dhWV3yJ0kf1uACur8kh3HV9TVKw6/GxRH8J1EAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/site/admin/components/common/Pagination/images/right.png":
/*!**********************************************************************!*\
  !*** ./src/site/admin/components/common/Pagination/images/right.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKCSURBVHgBvVjLddpAFL1PwN4lUELSAawJSSjAhjlpACqwqABnnWNPwAXYx+CTJXQQL7MLHcTrYGv8NJJ1sJA0IzHy3QDSiPvmvu+IwJDX9+dQagwNusXz/4kQg0fUDJKL1Yw/x6nrWzzvumzAFjXCg8Io43objdbfy8VqjBrhGW7O5OJeSnnTRh3kAdT34iVqxCqs6zDA+zbs+0qZDIjcoAPTIej1C8s74oif8ZUTwyM/ORumLoKR9n9oab3Wmq+2Dc9xNtBAiN4DXJEnRsyXPojMEhP54rQ3RUVQ3o3YDedmFZKitIUrcm1AKTcoIUR/A1fkiRE1ucGKXBsg777C82YWKmy4NAsbN1iTRwZoN9zwUx8MS7egYCJOP9/CFXlihCM3VCLXBshlBx5JoxsID3jaDbLcUNhYiqAjO9h1+c83hQsVu4h7w+XiboQDuxygqhuckGsDbN2wN6hUlj2NxA1hxStG2CFl+MXZzvdh4wZx9omc7fwtvH82q5pwCC5CJ2hyEVKqU7ySZwIckWpp/AgDrtH6zanVKVyoOO95GNEmwAHiud83LuRxTQz7yUR8FLmu9U2OXPNuHxGoQbrlVpY9lnltJA4rYLD7mNXrKwVczinnEKHMZ/1xvl1lSO1l3rLMxsnGeueRzMRpZBityX6YsCIvIfOUZfZhCfMAqYuGYXKxlDmNRt4Nec0zGzV/AcZhYRN1qS9/UBLZhwZbmYEJN4gLVMThcalGmdNIiszVfDWMa7NhMuV+nVM0ykJHezmZe5VlToOsiLXMx59K08h7J7OHV5ndEofILzJhJyJMXcqcRvY7mUjm7jFpZAOdalfz5QWBhjHzHMGT/x4vAV8Ag4gxp0NzQG0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/site/admin/components/common/Pagination/index.js":
/*!**************************************************************!*\
  !*** ./src/site/admin/components/common/Pagination/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/common/Pagination/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function index(props) {
  let className = 'pagination-table ';
  if (props.className) className += props.className;

  const selectItem = item => () => {
    if (props.selectItem) {
      props.selectItem(item);
    }
  };

  let {
    page,
    size,
    total
  } = props;
  let current = (page + 1) * size;
  current = Math.min(current, total);

  let totalPage = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(total / size);

  if (totalPage * size < total) totalPage += 1;

  if (page > totalPage) {
    page = totalPage;
  }

  if (page <= 0) page = 1;

  const onClick = type => () => {
    if (props.onPageChange) {
      if (type == 0) {
        if (page > 1) props.onPageChange(page - 1);
      } else {
        if (page < totalPage) props.onPageChange(page + 1);
      }
    }
  };

  return __jsx("div", {
    className: className
  }, __jsx("label", {
    className: "label"
  }, " ", total > 0 ? `1 - ${current} trong ${total}` : '', " "), __jsx("img", {
    className: "btn-pre",
    src: __webpack_require__(/*! ./images/left.png */ "./src/site/admin/components/common/Pagination/images/left.png"),
    onClick: onClick(0)
  }), __jsx("label", {
    className: "current-page"
  }, page), __jsx("img", {
    className: "btn-next",
    src: __webpack_require__(/*! ./images/right.png */ "./src/site/admin/components/common/Pagination/images/right.png"),
    onClick: onClick(1)
  }));
}

/***/ }),

/***/ "./src/site/admin/components/common/Pagination/style.scss":
/*!****************************************************************!*\
  !*** ./src/site/admin/components/common/Pagination/style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/common/SelectSize/images/ic-dropdown.png":
/*!****************************************************************************!*\
  !*** ./src/site/admin/components/common/SelectSize/images/ic-dropdown.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAYAAACtpZ5jAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgBtdDBEYIwEIXht2u4W4IlWIKWYAemAktKCdqBLVgCJXDWMWuCMMMAIQHCf8hkk5nvsMBGkT+MuR8sqysyxZYfqr6pwrDghFzt5Mb1RahCzgTVH/6+tRteyJGghP2cqZ3dnvfg4um2fsTSGlTrS0nd91V4B/Uj9f8X4T10FJ6Nj6BBOBkPoJNwFJ9Ao3AQj6BJ8ABPQH0/gV5crhejoPwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/site/admin/components/common/SelectSize/index.js":
/*!**************************************************************!*\
  !*** ./src/site/admin/components/common/SelectSize/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/common/SelectSize/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function index(props) {
  let className = 'select-data-size ';
  if (props.className) className += props.className;

  const selectItem = item => () => {
    if (props.selectItem) {
      props.selectItem(item);
    }
  };

  return __jsx("div", {
    className: className
  }, __jsx("label", {
    className: "label"
  }, props.label || "Số hàng hiển thị", " "), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    overlay: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], null, (props.options || [10, 20, 50, 100]).map((item, key) => {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: key
      }, __jsx("a", {
        onClick: selectItem(item)
      }, item));
    }))
  }, __jsx("label", {
    className: "value",
    onClick: e => e.preventDefault()
  }, props.value, " ", __jsx("img", {
    src: __webpack_require__(/*! ./images/ic-dropdown.png */ "./src/site/admin/components/common/SelectSize/images/ic-dropdown.png")
  }))));
}

/***/ }),

/***/ "./src/site/admin/components/common/SelectSize/style.scss":
/*!****************************************************************!*\
  !*** ./src/site/admin/components/common/SelectSize/style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/components/common/Table/index.js":
/*!*********************************************************!*\
  !*** ./src/site/admin/components/common/Table/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/site/admin/components/common/Table/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function index(props) {
  let className = 'custom-table ';
  if (props.className) className += props.className;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    pagination: false
  }, props, {
    className: className
  }));
}

/***/ }),

/***/ "./src/site/admin/components/common/Table/style.scss":
/*!***********************************************************!*\
  !*** ./src/site/admin/components/common/Table/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/site/admin/containers/nameDevice/index.js":
/*!*******************************************************!*\
  !*** ./src/site/admin/containers/nameDevice/index.js ***!
  \*******************************************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _admin_components_admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @admin/components/admin */ "./src/site/admin/components/admin/index.js");
/* harmony import */ var _admin_components_common_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @admin/components/common/Table */ "./src/site/admin/components/common/Table/index.js");
/* harmony import */ var _admin_components_common_SelectSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @admin/components/common/SelectSize */ "./src/site/admin/components/common/SelectSize/index.js");
/* harmony import */ var _admin_components_common_Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @admin/components/common/Pagination */ "./src/site/admin/components/common/Pagination/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_access_commercial_name_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @data-access/commercial-name-provider */ "./src/data-access/commercial-name-provider.js");
/* harmony import */ var _data_access_device_type_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @data-access/device-type-provider */ "./src/data-access/device-type-provider.js");
/* harmony import */ var _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @utils/snackbar-utils */ "./src/utils/snackbar-utils.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










const {
  confirm
} = antd__WEBPACK_IMPORTED_MODULE_13__["Modal"];

function index(props) {
  const {
    0: state,
    1: _setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    size: 10,
    page: 0,
    data: [],
    listDeviceType: []
  });
  const {
    0: dataIndex,
    1: setDataIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({});

  const setState = (data = {}) => {
    _setState(state => {
      return _objectSpread({}, state, {}, data);
    });
  };

  const onSizeChange = size => {
    onSearch("size", size);
    setState({
      size: size
    });
  };

  const onPageChange = page => {
    onSearch("page", page - 1);
    setState({
      page: page
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    onSearch(0, 10);
    getDeviceType();
  }, []);

  const onSearch = (action, item) => {
    let page = action === "page" ? item : action === "size" ? 0 : state.page;
    let size = action === "size" ? item : state.size;
    let ma = action === "ma" ? item : state.maSearch;
    let ten = action === "ten" ? item : state.tenSearch;
    _data_access_commercial_name_provider__WEBPACK_IMPORTED_MODULE_14__["default"].search(page, size, ma, ten).then(s => {
      if (s.code == 0) {
        setState({
          total: s.totalElements,
          data: s.data && s.data.length ? s.data.map((item, index) => {
            return {
              key: index,
              col1: page * size + index + 1,
              col2: item.ma,
              col3: item.ten,
              col4: item.dmLoaiThietBi && item.dmLoaiThietBi.ten,
              col5: item.tenVietTat,
              col6: new Date(item.createdAt).format("dd-MM-YYYY"),
              col7: item
            };
          }) : []
        });
      }
    }).catch(e => {});
  };

  const getDeviceType = () => {
    _data_access_device_type_provider__WEBPACK_IMPORTED_MODULE_15__["default"].search(0, 9999).then(s => {
      if (s && s.code === 0) {
        setState({
          listDeviceType: s.data
        });
      }
    }).catch(e => {});
  };

  const onDeleteItem = item => {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa tên thiết  bị ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",

        onOk() {
          _data_access_commercial_name_provider__WEBPACK_IMPORTED_MODULE_14__["default"].delete(item.id).then(s => {
            if (s && s.code === 0) {
              _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_16__["default"].show("Xóa tên thiết  bị thành công", "success");
              onSearch(0, 10);
            } else {
              _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_16__["default"].show("Xóa tên thiết  bị không thành công", "danger");
            }
          }).catch(e => {});
        },

        onCancel() {
          reject();
        }

      });
    });
  };

  const editItem = item => {
    if (item) {
      setDataIndex(item);
    } else {
      setDataIndex(item);
    }
  };

  const onClose = () => {
    setDataIndex({});
    setState({
      ma: "",
      ten: ""
    });
    props.history.push("/admin/name-device");
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
    let ma = state.ma ? state.ma : dataIndex.ma;
    let ten = state.ten ? state.ten : dataIndex.ten;
    let tenVietTat = state.tenVietTat ? state.tenVietTat : dataIndex.tenVietTat;
    let dmLoaiThietBiId = state.dmLoaiThietBiId ? state.dmLoaiThietBiId : dataIndex.dmLoaiThietBiId;
    _data_access_commercial_name_provider__WEBPACK_IMPORTED_MODULE_14__["default"].createOrEdit(dataIndex.id, ma, ten, tenVietTat, dmLoaiThietBiId).then(s => {
      if (s && s.code === 0) {
        if (dataIndex.id) {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_16__["default"].show("Cập nhật tên thiết  bị thành công", "success");
        } else {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_16__["default"].show("Thêm mới tên thiết  bị thành công", "success");
        }

        onSearch(0, 10, "", "");
        onClose();
      } else {
        if (dataIndex.id) {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_16__["default"].show("Cập nhật tên thiết  bị thất bại", "danger");
        } else {
          _utils_snackbar_utils__WEBPACK_IMPORTED_MODULE_16__["default"].show("Thêm mới tên thiết  bị thất bại", "danger");
        }
      }
    }).catch(e => {});
  };

  return __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_9__["AdminPage"], {
    icon: "subheader-icon fal fa-window",
    header: "Qu\u1EA3n l\xFD t\xEAn thi\u1EBFt  b\u1ECB",
    subheader: "Danh s\xE1ch t\xEAn thi\u1EBFt  b\u1ECB"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-8 ui-sortable sortable-grid"
  }, __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_9__["Panel"], {
    id: "panel-list-site",
    title: "DANH S\xC1CH T\xCAN THI\u1EBET B\u1ECA" // toolbar={
    //   <div className="toolbar">
    //     <Button className="button" onClick={() => editItem()}>
    //       Thêm mới
    //     </Button>
    //   </div>
    // }

  }, __jsx(_admin_components_common_Table__WEBPACK_IMPORTED_MODULE_10__["default"], {
    scroll: {
      x: 800,
      y: 500
    },
    style: {
      marginLeft: -10,
      marginRight: -10
    },
    className: "custom",
    columns: [{
      title: __jsx("div", {
        className: "custome-header"
      }, __jsx("div", {
        className: "title-box"
      }, "STT"), __jsx("div", {
        className: "addition-box"
      })),
      width: 100,
      dataIndex: "col1",
      key: "col1"
    }, {
      title: __jsx("div", {
        className: "custome-header"
      }, __jsx("div", {
        className: "title-box"
      }, "M\xE3"), __jsx("div", {
        className: "addition-box"
      }, __jsx("div", {
        className: "search-box"
      }, __jsx("img", {
        src: __webpack_require__(/*! @images/icon/ic-search.png */ "./src/resources/images/icon/ic-search.png")
      }), __jsx("input", {
        value: state.maSearch,
        onChange: e => onSearch("ma", e.target.value),
        placeholder: "T\xECm theo m\xE3"
      })))),
      width: 200,
      dataIndex: "col2",
      key: "col2"
    }, {
      title: __jsx("div", {
        className: "custome-header"
      }, __jsx("div", {
        className: "title-box"
      }, "T\xEAn g\u1ED1c"), __jsx("div", {
        className: "addition-box"
      }, __jsx("div", {
        className: "search-box"
      }, __jsx("img", {
        src: __webpack_require__(/*! @images/icon/ic-search.png */ "./src/resources/images/icon/ic-search.png")
      }), __jsx("input", {
        value: state.tenSearch,
        onChange: e => onSearch("ten", e.target.value),
        placeholder: "T\xECm theo t\xEAn g\u1ED1c"
      })))),
      width: 200,
      dataIndex: "col3",
      key: "col3"
    }, {
      title: __jsx("div", {
        className: "custome-header"
      }, __jsx("div", {
        className: "title-box"
      }, "Lo\u1EA1i thi\u1EBFt b\u1ECB"), __jsx("div", {
        className: "addition-box"
      }, __jsx("div", {
        className: "search-box"
      }, __jsx("img", {
        src: __webpack_require__(/*! @images/icon/ic-search.png */ "./src/resources/images/icon/ic-search.png")
      }), __jsx("input", {
        value: state.maSearch,
        onChange: e => onSearch("ma", e.target.value),
        placeholder: "T\xECm theo lo\u1EA1i thi\u1EBFt b\u1ECB"
      })))),
      width: 200,
      dataIndex: "col4",
      key: "col4"
    }, {
      title: __jsx("div", {
        className: "custome-header"
      }, __jsx("div", {
        className: "title-box"
      }, "T\xEAn vi\u1EBFt t\u1EAFt"), __jsx("div", {
        className: "addition-box"
      }, __jsx("div", {
        className: "search-box"
      }, __jsx("img", {
        src: __webpack_require__(/*! @images/icon/ic-search.png */ "./src/resources/images/icon/ic-search.png")
      }), __jsx("input", {
        value: state.maSearch,
        onChange: e => onSearch("ma", e.target.value),
        placeholder: "T\xECm theo t\xEAn vi\u1EBFt t\u1EAFt"
      })))),
      width: 200,
      dataIndex: "col5",
      key: "col5"
    }, {
      title: __jsx("div", {
        className: "custome-header"
      }, __jsx("div", {
        className: "title-box"
      }, "Ng\xE0y t\u1EA1o"), __jsx("div", {
        className: "addition-box"
      })),
      width: 200,
      dataIndex: "col6",
      key: "col6"
    }, {
      title: __jsx("div", {
        className: "custome-header"
      }, __jsx("div", {
        className: "title-box"
      }, "Ti\u1EC7n \xEDch"), __jsx("div", {
        className: "addition-box"
      })),
      width: 90,
      dataIndex: "col7",
      key: "col7",
      fixed: "right",
      render: item => {
        return __jsx("div", {
          className: "col-action"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
          placement: "topLeft",
          title: "Sửa"
        }, __jsx("div", null, __jsx("a", {
          onClick: () => editItem(item),
          className: "btn btn-info btn-icon waves-effect waves-themed"
        }, __jsx("i", {
          className: "fal fa-edit"
        })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], {
          placement: "topLeft",
          title: "Xóa"
        }, __jsx("div", null, __jsx("a", {
          onClick: () => onDeleteItem(item),
          className: "btn btn-info btn-icon waves-effect waves-themed"
        }, __jsx("i", {
          className: "fal fa-trash-alt"
        })))));
      }
    }],
    dataSource: state.data
  }), __jsx("div", {
    className: "footer"
  }, __jsx(_admin_components_common_SelectSize__WEBPACK_IMPORTED_MODULE_11__["default"], {
    value: state.size,
    selectItem: onSizeChange
  }), __jsx(_admin_components_common_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onPageChange: onPageChange,
    page: state.page,
    size: state.size,
    total: state.total,
    style: {
      flex: 1,
      justifyContent: "flex-end"
    }
  })))), __jsx("div", {
    className: "col-lg-4  ui-sortable sortable-grid"
  }, __jsx(_admin_components_admin__WEBPACK_IMPORTED_MODULE_9__["Panel"], {
    title: dataIndex.id ? "Chỉnh sửa" : "Thêm mới",
    id: "mgr-form-type" // allowClose={false}
    // allowCollapse={false}

  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Form"], {
    layout: "vertical",
    hideRequiredMark: true,
    onSubmit: handleSubmit
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Form"].Item, {
    label: "Lo\u1EA1i thi\u1EBFt  b\u1ECB"
  }, getFieldDecorator("dataIndex.dmLoaiThietBiId", {
    rules: [{
      required: true,
      message: "Chọn loại thiết  bị"
    }],
    initialValue: dataIndex.dmLoaiThietBiId ? dataIndex.dmLoaiThietBiId : ""
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Select"], {
    showSearch: true,
    filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
    placeholder: "Ch\u1ECDn lo\u1EA1i thi\u1EBFt b\u1ECB",
    onChange: e => {
      setState({
        dmLoaiThietBiId: e
      });
    } // value={state.dmLoaiThietBiId}

  }, state.listDeviceType && state.listDeviceType.length ? state.listDeviceType.map((item, index) => {
    return item && __jsx(Option, {
      key: index,
      value: item.id
    }, item.ten);
  }) : ""))))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Form"].Item, {
    label: "M\xE3"
  }, getFieldDecorator("dataIndex.ma", {
    rules: [{
      required: true,
      message: "Nhập mã"
    }],
    initialValue: dataIndex.ma ? dataIndex.ma : ""
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    onChange: e => setState({
      ma: e.target.value
    }),
    placeholder: "Nh\u1EADp m\xE3"
  }))))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Form"].Item, {
    label: "T\xEAn g\u1ED1c"
  }, getFieldDecorator("dataIndex.ten", {
    rules: [{
      required: true,
      message: "Nhập tên gốc"
    }],
    initialValue: dataIndex.ten ? dataIndex.ten : ""
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    onChange: e => setState({
      ten: e.target.value
    }),
    placeholder: "Nh\u1EADp g\u1ED1c"
  }))))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Form"].Item, {
    label: "T\xEAn vi\u1EBFt t\u1EAFt /k\xFD hi\u1EC7u"
  }, getFieldDecorator("dataIndex.tenVietTat", {
    // rules: [
    //   {
    //     required: true,
    //     message: "Nhập tên viết tắt /ký hiệu",
    //   },
    // ],
    initialValue: dataIndex.tenVietTat ? dataIndex.tenVietTat : ""
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    onChange: e => setState({
      tenVietTat: e.target.value
    }),
    placeholder: "Nh\u1EADp t\xEAn vi\u1EBFt t\u1EAFt /k\xFD hi\u1EC7u"
  }))))), __jsx("div", {
    style: {
      width: "100%",
      borderTop: "1px solid #e9e9e9",
      padding: "16px 16px 0px",
      background: "#fff",
      textAlign: "right"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    onClick: () => onClose(),
    style: {
      marginRight: 8
    }
  }, "H\u1EE7y"), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    type: "primary",
    htmlType: "submit",
    onClick: handleSubmit
  }, dataIndex.id ? "Lưu thay đổi" : "Tạo mới")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_13__["Form"].create()(index));

/***/ })

};;
//# sourceMappingURL=1.js.map