"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/report/report"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/report/report!./src/pages/report/report.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/report/report!./src/pages/report/report.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Report; }
/* harmony export */ });
/* harmony import */ var _Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










var Report = /*#__PURE__*/function (_Component) {
  function Report() {
    var _this;
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Report);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Report, [].concat(args));
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "state", {
      department: '',
      reportType: '',
      caseNumber: '',
      patientName: '',
      caseDescription: '',
      findings: '',
      recommendations: '',
      attachments: []
    });
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "departments", ['骨科', '内科', '手术室', '感染科', '护理部', '药房', '财务科', '质管科']);
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "reportTypes", ['月度报告', '季度报告', '年度报告', '专项检查', '日常巡查']);
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "handleDepartmentChange", function (e) {
      _this.setState({
        department: _this.departments[e.detail.value]
      });
    });
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "handleReportTypeChange", function (e) {
      _this.setState({
        reportType: _this.reportTypes[e.detail.value]
      });
    });
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "handleInputChange", function (field, value) {
      _this.setState((0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, field, value));
    });
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "handleSubmit", function () {
      var _this$state = _this.state,
        department = _this$state.department,
        reportType = _this$state.reportType,
        caseNumber = _this$state.caseNumber,
        findings = _this$state.findings;
      if (!department || !reportType || !caseNumber || !findings) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '请填写必填项',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
        title: '提交中...'
      });

      // 模拟 API 调用
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        });

        // 清空表单
        _this.setState({
          department: '',
          reportType: '',
          caseNumber: '',
          patientName: '',
          caseDescription: '',
          findings: '',
          recommendations: '',
          attachments: []
        });

        // 返回列表
        setTimeout(function () {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
        }, 500);
      }, 1500);
    });
    (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "handleSaveDraft", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '草稿已保存',
        icon: 'success',
        duration: 2000
      });
    });
    return _this;
  }
  (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Report, _Component);
  return (0,_Users_peak_work_pikecode_taro_miniprogram_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Report, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state2 = this.state,
        department = _this$state2.department,
        reportType = _this$state2.reportType,
        caseNumber = _this$state2.caseNumber,
        patientName = _this$state2.patientName,
        caseDescription = _this$state2.caseDescription,
        findings = _this$state2.findings,
        recommendations = _this$state2.recommendations;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.ScrollView, {
        scrollY: true,
        className: "report-page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "form-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "form-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "section-title",
              children: "\u57FA\u672C\u4FE1\u606F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "form-label",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                  className: "required",
                  children: "*"
                }), " \u90E8\u95E8"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Picker, {
                mode: "selector",
                range: this.departments,
                onChange: this.handleDepartmentChange,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                  className: "picker-input",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                    className: department ? 'input-value' : 'placeholder',
                    children: department || '请选择部门'
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "form-label",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                  className: "required",
                  children: "*"
                }), " \u62A5\u544A\u7C7B\u578B"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Picker, {
                mode: "selector",
                range: this.reportTypes,
                onChange: this.handleReportTypeChange,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                  className: "picker-input",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                    className: reportType ? 'input-value' : 'placeholder',
                    children: reportType || '请选择报告类型'
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "form-label",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                  className: "required",
                  children: "*"
                }), " \u75C5\u6848\u7F16\u53F7"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Input, {
                type: "text",
                placeholder: "\u8BF7\u8F93\u5165\u75C5\u6848\u7F16\u53F7",
                value: caseNumber,
                onInput: function onInput(e) {
                  return _this2.handleInputChange('caseNumber', e.detail.value);
                },
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "form-label",
                children: "\u60A3\u8005\u59D3\u540D"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Input, {
                type: "text",
                placeholder: "\u8BF7\u8F93\u5165\u60A3\u8005\u59D3\u540D",
                value: patientName,
                onInput: function onInput(e) {
                  return _this2.handleInputChange('patientName', e.detail.value);
                },
                className: "form-input"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "form-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "section-title",
              children: "\u8BE6\u7EC6\u4FE1\u606F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "form-label",
                children: "\u6848\u4F8B\u63CF\u8FF0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Textarea, {
                placeholder: "\u8BF7\u8F93\u5165\u6848\u4F8B\u63CF\u8FF0...",
                value: caseDescription,
                onInput: function onInput(e) {
                  return _this2.handleInputChange('caseDescription', e.detail.value);
                },
                className: "form-textarea"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "form-label",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                  className: "required",
                  children: "*"
                }), " \u68C0\u67E5\u53D1\u73B0"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Textarea, {
                placeholder: "\u8BF7\u8F93\u5165\u68C0\u67E5\u53D1\u73B0...",
                value: findings,
                onInput: function onInput(e) {
                  return _this2.handleInputChange('findings', e.detail.value);
                },
                className: "form-textarea"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "form-label",
                children: "\u6574\u6539\u5EFA\u8BAE"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Textarea, {
                placeholder: "\u8BF7\u8F93\u5165\u6574\u6539\u5EFA\u8BAE...",
                value: recommendations,
                onInput: function onInput(e) {
                  return _this2.handleInputChange('recommendations', e.detail.value);
                },
                className: "form-textarea"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "form-actions",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "button-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                className: "btn btn-secondary",
                onClick: this.handleSaveDraft,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                  children: "\u4FDD\u5B58\u8349\u7A3F"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                className: "btn btn-primary",
                onClick: this.handleSubmit,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                  children: "\u63D0\u4EA4\u4E0A\u62A5"
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            style: {
              height: '40px'
            }
          })]
        })
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/report/report.tsx":
/*!*************************************!*\
  !*** ./src/pages/report/report.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_report_report_report_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/report/report!./report.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/report/report!./src/pages/report/report.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_report_report_report_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/report/report', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_report_report_report_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_report_report_report_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_report_report_report_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_report_report_report_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/report/report.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=report.js.map