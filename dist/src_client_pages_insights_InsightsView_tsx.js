"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_insights_InsightsView_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vs-tooltip-progress-bar {
  position: relative;
  flex-grow: 1;
  height: 4px;
  /* margin: 0 10px; */
  border-radius: 10px;
  background-color: #ccc;
}

.vs-tooltip-progress-bar-circle {
  content: "";
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #4c4c4c;
  border-radius: 50%;
  z-index: 3;
}

.vs-tooltip-progress-bar-circle2 {
  content: "";
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #6786c3;
  border-radius: 50%;
  z-index: 3;
}
`, "",{"version":3,"sources":["webpack://./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;AACZ","sourcesContent":[".vs-tooltip-progress-bar {\n  position: relative;\n  flex-grow: 1;\n  height: 4px;\n  /* margin: 0 10px; */\n  border-radius: 10px;\n  background-color: #ccc;\n}\n\n.vs-tooltip-progress-bar-circle {\n  content: \"\";\n  position: absolute;\n  right: -10px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 10px;\n  height: 10px;\n  background-color: #4c4c4c;\n  border-radius: 50%;\n  z-index: 3;\n}\n\n.vs-tooltip-progress-bar-circle2 {\n  content: \"\";\n  position: absolute;\n  right: -10px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 10px;\n  height: 10px;\n  background-color: #6786c3;\n  border-radius: 50%;\n  z-index: 3;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css":
/*!***************************************************************************************!*\
  !*** ./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./insightsVsTooltipProgress.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./insightsVsTooltipProgress.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./insightsVsTooltipProgress.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/client/api/account.ts":
/*!***********************************!*\
  !*** ./src/client/api/account.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var client_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client/api/api */ "./src/client/api/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const getAccounts = (configuration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: "/users/",
            token: configuration.token,
            publicKey: configuration.publicKey,
        });
        return result.external_linked_accounts.filter((element) => element.is_linked === true);
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        return Promise.reject(reason);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAccounts);


/***/ }),

/***/ "./src/client/api/micros.ts":
/*!**********************************!*\
  !*** ./src/client/api/micros.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchBudgetCategories: () => (/* binding */ fetchBudgetCategories),
/* harmony export */   fetchMicroGoalTotals: () => (/* binding */ fetchMicroGoalTotals),
/* harmony export */   fetchMicrosPercentile: () => (/* binding */ fetchMicrosPercentile)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/client/api/api.ts");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
 // Assuming this function exists

const fetchMicroGoalTotals = ({ configuration, start_date, end_date, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res;
        if (start_date && end_date) {
            res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/goals/micros/totals/?start_date=${start_date}&end_date=${end_date}`,
                token: configuration.token,
                publicKey: configuration.publicKey,
            });
        }
        else {
            res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/goals/micros/totals/`,
                token: configuration.token,
                publicKey: configuration.publicKey,
            });
        }
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
const fetchBudgetCategories = ({ configuration, start_date, end_date, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res;
        if (start_date && end_date) {
            res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/goals/batch_micros/?start_date=${start_date}&end_date=${end_date}`,
                token: configuration.token,
                publicKey: configuration.publicKey,
            });
        }
        else {
            res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/goals/batch_micros/`,
                token: configuration.token,
                publicKey: configuration.publicKey,
            });
        }
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
const fetchMicrosPercentile = ({ configuration, start_date, end_date, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res;
        if (start_date && end_date) {
            res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/goals/micros/percentiles/?start_date=${start_date}&end_date=${end_date}`,
                token: configuration.token,
                publicKey: configuration.publicKey,
            });
        }
        else {
            res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/goals/micros/percentiles/`,
                token: configuration.token,
                publicKey: configuration.publicKey,
            });
        }
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});


/***/ }),

/***/ "./src/client/pages/components/CashFlowPieChart.tsx":
/*!**********************************************************!*\
  !*** ./src/client/pages/components/CashFlowPieChart.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_cashFlowStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/cashFlowStore */ "./src/client/store/cashFlowStore.ts");
/* harmony import */ var client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/currencySettingsStore */ "./src/client/store/currencySettingsStore.ts");
/* harmony import */ var client_store_insightsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/insightsStore */ "./src/client/store/insightsStore.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");
/* harmony import */ var _PercentageItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PercentageItem */ "./src/client/pages/components/PercentageItem.tsx");









const CashFlowPieChart = ({ dimensions, doughnutThickness, values, percentageChange, isLoading, }) => {
    var _a, _b, _c, _d;
    let { moneyIn, moneyOut } = values;
    const emptyValus = { moneyInEmpty: 100000, moneyOutEmpty: 30000 };
    const totalEmpty = emptyValus.moneyInEmpty + emptyValus.moneyOutEmpty;
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    const total = moneyIn + moneyOut;
    const moneyOutPercentage = total > 0 ? Math.round((moneyOut / total) * 100).toFixed(1) : 0;
    const moneyInPercentage = total > 0 ? Math.round((moneyIn / total) * 100).toFixed(1) : 0;
    const radius = dimensions / 2;
    const strokeWidth = doughnutThickness;
    const normalizedRadius = radius - strokeWidth * 2;
    let cumulativePercentage = 0;
    const currencyStore = (0,client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    const cashflowVariables = client_store_cashFlowStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().cashflowVariables;
    const insightsStoreState = (0,client_store_insightsStore__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state);
    if (isLoading) {
        const animationStyles = `
        @keyframes smoothRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "shadow-card pt-5 rounded-lg pr-2.5 flex flex-col w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { children: animationStyles }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-start items-center pl-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", Object.assign({ className: "font-custom text-base font-medium" }, { children: "Cashflow" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: { transform: "scale(1.25)", marginLeft: "0.2em" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiChevronRight, { size: "0.625rem" }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ height: dimensions, width: dimensions, style: {
                                animation: "smoothRotate 2s linear infinite",
                                transformOrigin: "center center",
                            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", Object.assign({ id: "moneyInGradient", gradientTransform: "rotate(70.18)" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "20%", stopColor: "#66be5f" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "100%", stopColor: "#47a93e" })] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", Object.assign({ transform: `translate(${radius}, ${radius})` }, { children: ["moneyInEmpty", "moneyOutEmpty"].map((type, index) => {
                                        const percentage = (emptyValus[type] / totalEmpty) * 100;
                                        const color = type === "moneyInEmpty" ? "#e0e0e0" : "#f2f2f2";
                                        const startX = normalizedRadius *
                                            Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                                        const startY = normalizedRadius *
                                            Math.sin((2 * Math.PI * cumulativePercentage) / 100);
                                        const endX = normalizedRadius *
                                            Math.cos((2 * Math.PI * (cumulativePercentage + percentage)) / 100);
                                        const endY = normalizedRadius *
                                            Math.sin((2 * Math.PI * (cumulativePercentage + percentage)) / 100);
                                        const largeArcFlag = percentage > 50 ? 1 : 0;
                                        cumulativePercentage += percentage;
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, fill: "none", stroke: color, strokeWidth: strokeWidth, strokeLinecap: "round", style: {
                                                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                            } }, index));
                                    }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col justify-end items-start mt-8" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-2xl font-medium text-skin-neutral2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], { target: 0, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ style: {
                                                            fontSize: "12px",
                                                            verticalAlign: "super",
                                                            marginLeft: "-4px",
                                                        } }, { children: (_a = currencyStore.currencySymbol) !== null && _a !== void 0 ? _a : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-longest_text" }, { children: "Total cashflow" })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start mt-5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PercentageItem__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "#2676B8", percentage: 0, label: "Money in" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PercentageItem__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "#009FDC", percentage: 0, label: "Money out" })] }))] }))] }))] })));
    }
    // Render an empty chart if both moneyIn and moneyOut are zero
    if (total === 0) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "shadow-card pt-5 rounded-lg pr-2.5 flex flex-col w-full", onClick: () => navigate(`/cashflow?startDate=${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(insightsStoreState.insightsStartDate, "yyyy-MM-dd")}&endDate=${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(insightsStoreState.insightsEndDate, "yyyy-MM-dd")}&accountName=${cashflowVariables.accountName}&dateFilter=${cashflowVariables.dateFilter}`) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-start items-center pl-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", Object.assign({ className: "font-custom text-base font-medium" }, { children: "Cashflow" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: { transform: "scale(1.25)", marginLeft: "0.2em" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiChevronRight, { size: "0.625rem" }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ height: dimensions, width: dimensions }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", Object.assign({ id: "moneyInGradient", gradientTransform: "rotate(70.18)" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "20%", stopColor: "#66be5f" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "100%", stopColor: "#47a93e" })] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", Object.assign({ transform: `translate(${radius}, ${radius})` }, { children: ["moneyInEmpty", "moneyOutEmpty"].map((type, index) => {
                                        const percentage = (emptyValus[type] / totalEmpty) * 100;
                                        const color = type === "moneyInEmpty" ? "#e0e0e0" : "#f2f2f2";
                                        const startX = normalizedRadius *
                                            Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                                        const startY = normalizedRadius *
                                            Math.sin((2 * Math.PI * cumulativePercentage) / 100);
                                        const endX = normalizedRadius *
                                            Math.cos((2 * Math.PI * (cumulativePercentage + percentage)) / 100);
                                        const endY = normalizedRadius *
                                            Math.sin((2 * Math.PI * (cumulativePercentage + percentage)) / 100);
                                        const largeArcFlag = percentage > 50 ? 1 : 0;
                                        cumulativePercentage += percentage;
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, fill: "none", stroke: color, strokeWidth: strokeWidth, strokeLinecap: "round", style: {
                                                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                            } }, index));
                                    }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col justify-end items-start mt-8" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-2xl font-medium text-skin-neutral2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], { target: 0, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ style: {
                                                            fontSize: "12px",
                                                            verticalAlign: "super",
                                                            marginLeft: "-4px",
                                                        } }, { children: (_b = currencyStore.currencySymbol) !== null && _b !== void 0 ? _b : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-longest_text" }, { children: "Total cashflow" })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start mt-5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PercentageItem__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "#2676B8", percentage: 0, label: "Money in" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PercentageItem__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "#009FDC", percentage: 0, label: "Money out" })] }))] }))] }))] })));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "shadow-card pt-5 rounded-lg pr-2.5 flex flex-col w-full", onClick: () => navigate(`/cashflow?startDate=${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(insightsStoreState.insightsStartDate, "yyyy-MM-dd")}&endDate=${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(insightsStoreState.insightsEndDate, "yyyy-MM-dd")}&accountName=${cashflowVariables.accountName}&dateFilter=${cashflowVariables.dateFilter}`) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-start items-center pl-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", Object.assign({ className: "font-custom text-base font-medium" }, { children: "Cashflow" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: { transform: "scale(1.25)", marginLeft: "0.2em" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiChevronRight, { size: "0.625rem" }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ height: dimensions, width: dimensions }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", Object.assign({ id: "moneyInGradient", gradientTransform: "rotate(70.18)" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "20%", stopColor: "#66be5f" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "100%", stopColor: "#47a93e" })] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", Object.assign({ transform: `translate(${radius}, ${radius})` }, { children: [["moneyIn", "moneyOut"].map((type, index) => {
                                        const percentage = (values[type] / total) * 100;
                                        const color = type === "moneyIn" ? "#416f1f" : "#febb14";
                                        const startX = normalizedRadius *
                                            Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                                        const startY = normalizedRadius *
                                            Math.sin((2 * Math.PI * cumulativePercentage) / 100);
                                        const endX = normalizedRadius *
                                            Math.cos((2 * Math.PI * (cumulativePercentage + percentage)) / 100);
                                        const endY = normalizedRadius *
                                            Math.sin((2 * Math.PI * (cumulativePercentage + percentage)) / 100);
                                        const largeArcFlag = percentage > 50 ? 1 : 0;
                                        cumulativePercentage += percentage;
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, fill: "none", stroke: color, strokeWidth: strokeWidth, strokeLinecap: "round", style: {
                                                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                            } }, index));
                                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", Object.assign({ x: -radius, y: -radius, width: radius * 2, height: radius * 2, xmlns: "http://www.w3.org/1999/xhtml" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "100%",
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: {
                                                                width: "20px",
                                                                height: "20px",
                                                                borderRadius: "50%",
                                                                backgroundColor: "#D1D5DB",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                border: "1px solid #565656",
                                                            } }, { children: percentageChange > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiArrowUpRight, {})) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiArrowDownRight, {})) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", Object.assign({ className: "font-primary text-s tracking-wide font-medium", style: { marginLeft: "4px", color: "#565656" } }, { children: [(Math.random() * 20 + 40).toFixed(1), "%"] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xxxs tracking-longest_text mt-2", style: { color: "#565656" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "change this month" }) }))] })) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col justify-end items-start mt-8" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative flex item-start" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-2xl font-medium text-skin-neutral2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], { target: (_c = moneyIn + moneyOut) !== null && _c !== void 0 ? _c : 0, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ style: {
                                                            fontSize: "12px",
                                                            verticalAlign: "super",
                                                            marginLeft: "-4px",
                                                        } }, { children: (_d = currencyStore.currencySymbol) !== null && _d !== void 0 ? _d : "" }))] })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-longest_text" }, { children: "Total cashflow" })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start mt-5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PercentageItem__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "#2676B8", percentage: Number(moneyInPercentage), label: "Money in" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PercentageItem__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "#009FDC", percentage: Number(moneyOutPercentage), label: "Money out" })] }))] }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CashFlowPieChart);


/***/ }),

/***/ "./src/client/pages/components/GraphLegend.tsx":
/*!*****************************************************!*\
  !*** ./src/client/pages/components/GraphLegend.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const GraphLegend = ({ color, label, isGradient = false, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    background: isGradient ? `url(${color})` : color,
                    borderRadius: "50%",
                    width: 13,
                    height: 13,
                    marginRight: 4,
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-base" }, { children: label }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GraphLegend);


/***/ }),

/***/ "./src/client/pages/components/MacroPieChart.tsx":
/*!*******************************************************!*\
  !*** ./src/client/pages/components/MacroPieChart.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _assets_images_macro_budget_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/macro_budget.svg */ "./src/client/assets/images/macro_budget.svg");


const MacroPieChart = ({ dimensions, doughnutThickness, values, isLoading, }) => {
    const { wants, essentials, savings, unallocated } = values;
    const total = wants + essentials + savings + unallocated;
    const radius = dimensions / 2;
    const strokeWidth = doughnutThickness;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const emptyItems = [
        { percentage: 70, color: "#e0e0e0" },
        { percentage: 30, color: "#f2f2f2" },
    ];
    let cumulativePercentage = 0;
    if (isLoading) {
        const animationStyles = `
        @keyframes smoothRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ height: dimensions, width: dimensions, style: {
                        animation: "smoothRotate 2s linear infinite",
                        transformOrigin: "center center",
                    } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", Object.assign({ transform: `translate(${radius}, ${radius})` }, { children: emptyItems.map((item, index) => {
                            if (item.percentage === 0)
                                return null; // Skip rendering for 0% segments
                            const startX = normalizedRadius *
                                Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                            const startY = normalizedRadius *
                                Math.sin((2 * Math.PI * cumulativePercentage) / 100);
                            const endX = normalizedRadius *
                                Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage)) / 100);
                            const endY = normalizedRadius *
                                Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage)) / 100);
                            const largeArcFlag = item.percentage > 50 ? 1 : 0;
                            cumulativePercentage += item.percentage;
                            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, fill: "none", stroke: item.color, strokeWidth: strokeWidth, strokeLinecap: "round", style: {
                                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                } }, index));
                        }) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { children: animationStyles })] }));
    }
    // Update: Handle all values being zero by drawing a grey doughnut
    if (total === 0) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ height: dimensions, width: dimensions }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", Object.assign({ transform: `translate(${radius}, ${radius})` }, { children: [emptyItems.map((item, index) => {
                        if (item.percentage === 0)
                            return null; // Skip rendering for 0% segments
                        const startX = normalizedRadius *
                            Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                        const startY = normalizedRadius *
                            Math.sin((2 * Math.PI * cumulativePercentage) / 100);
                        const endX = normalizedRadius *
                            Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage)) / 100);
                        const endY = normalizedRadius *
                            Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage)) / 100);
                        const largeArcFlag = item.percentage > 50 ? 1 : 0;
                        cumulativePercentage += item.percentage;
                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, fill: "none", stroke: item.color, strokeWidth: strokeWidth, strokeLinecap: "round", style: {
                                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                            } }, index));
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", Object.assign({ x: -radius, y: -radius, width: radius * 2, height: radius * 2, xmlns: "http://www.w3.org/1999/xhtml" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                borderRadius: "50%",
                                overflow: "hidden",
                            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_macro_budget_svg__WEBPACK_IMPORTED_MODULE_1__, alt: "icon", style: { width: "24px", height: "24px" } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xxxxxs text-skin-subtitle tracking-longest_text" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Budget spread" }) }))] })) }))] })) })));
    }
    const items = [
        { percentage: (unallocated / total) * 100, color: "#e7e7e7" },
        { percentage: (savings / total) * 100, color: "#036AB3" },
        { percentage: (wants / total) * 100, color: "#354AA6" },
        { percentage: (essentials / total) * 100, color: "#009FDC" },
    ];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ height: dimensions, width: dimensions }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", Object.assign({ transform: `translate(${radius}, ${radius})` }, { children: [items.map((item, index) => {
                    if (item.percentage === 0)
                        return null; // Skip rendering for 0% segments
                    const startX = normalizedRadius *
                        Math.cos((2 * Math.PI * cumulativePercentage) / 100);
                    const startY = normalizedRadius *
                        Math.sin((2 * Math.PI * cumulativePercentage) / 100);
                    const endX = normalizedRadius *
                        Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage)) / 100);
                    const endY = normalizedRadius *
                        Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage)) / 100);
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    cumulativePercentage += item.percentage;
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, fill: "none", stroke: item.color, strokeWidth: strokeWidth, strokeLinecap: "round", style: {
                            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                        } }, index));
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", Object.assign({ x: -radius, y: -radius, width: radius * 2, height: radius * 2, xmlns: "http://www.w3.org/1999/xhtml" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            borderRadius: "50%",
                            overflow: "hidden",
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_macro_budget_svg__WEBPACK_IMPORTED_MODULE_1__, alt: "icon", style: { width: "24px", height: "24px" } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xxxxxs text-skin-subtitle tracking-longest_text" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Budget spread" }) }))] })) }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacroPieChart);


/***/ }),

/***/ "./src/client/pages/components/MacroPieChartLegend.tsx":
/*!*************************************************************!*\
  !*** ./src/client/pages/components/MacroPieChartLegend.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _insights_RandomCompareComparison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insights/RandomCompareComparison */ "./src/client/pages/components/insights/RandomCompareComparison.tsx");


const MacroPieChartLegend = ({ color, text, percentage, percentageChange = 0, showUnallocated = true, showComparison = false, }) => {
    if (!showUnallocated) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-start space-x-1.5", style: {
            width: "fit-content",
        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "rounded-full bg-skin-neutral h-3 w-3", style: {
                    background: color,
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-primary text-xs text-skin-base tracking-longest_text" }, { children: [text, " (", percentage, "%)", " ", percentage !== 0 && showComparison ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_insights_RandomCompareComparison__WEBPACK_IMPORTED_MODULE_1__["default"], { percentage: percentageChange !== null && percentageChange !== void 0 ? percentageChange : 0 })) : null] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacroPieChartLegend);


/***/ }),

/***/ "./src/client/pages/components/MacroPieChartWithLegend.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/pages/components/MacroPieChartWithLegend.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var _MacroPieChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MacroPieChart */ "./src/client/pages/components/MacroPieChart.tsx");
/* harmony import */ var _MacroPieChartLegend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MacroPieChartLegend */ "./src/client/pages/components/MacroPieChartLegend.tsx");




const MacroPieChartWithLegend = ({ dimensions, doughnutThickness, values, peerValues, showComparison, showUnallocated, isLoading, }) => {
    const total = values.wants + values.essentials + values.savings + values.unallocated;
    let percentages = {
        essentials: Math.round((values.essentials / total) * 100),
        wants: Math.round((values.wants / total) * 100),
        savings: Math.round((values.savings / total) * 100),
        unallocated: Math.round((values.unallocated / total) * 100),
    };
    const totalPercentage = percentages.essentials +
        percentages.wants +
        percentages.savings +
        percentages.unallocated;
    const peerPercentageDifferences = {
        essentials: calculatePercentageDifference(values.essentials, peerValues === null || peerValues === void 0 ? void 0 : peerValues.essentials),
        wants: calculatePercentageDifference(values.wants, peerValues === null || peerValues === void 0 ? void 0 : peerValues.wants),
        savings: calculatePercentageDifference(values.savings, peerValues === null || peerValues === void 0 ? void 0 : peerValues.savings),
        unallocated: calculatePercentageDifference(values.unallocated, peerValues === null || peerValues === void 0 ? void 0 : peerValues.unallocated),
    };
    function calculatePercentageDifference(userValue, peerValue) {
        if ((peerValue === 0 || peerValue === undefined) && userValue === 0) {
            return 0;
        }
        else if ((peerValue === 0 || peerValue === undefined) && userValue > 0) {
            return 100;
        }
        return ((userValue - peerValue) / peerValue) * 100;
    }
    if (totalPercentage !== 100) {
        const diff = 100 - totalPercentage;
        percentages.unallocated += diff;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center space-x-4" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MacroPieChart__WEBPACK_IMPORTED_MODULE_1__["default"], { dimensions: dimensions, doughnutThickness: doughnutThickness, values: values, isLoading: isLoading }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col justify-between space-y-2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MacroPieChartLegend__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "#009FDC", text: "Essentials", percentage: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(percentages.essentials), showComparison: showComparison, percentageChange: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(peerPercentageDifferences.essentials.toFixed(2)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MacroPieChartLegend__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "#354AA6", text: "Wants", percentage: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(percentages.wants), showComparison: showComparison, percentageChange: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(peerPercentageDifferences.wants.toFixed(2)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MacroPieChartLegend__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "#e7e7e7", text: "Unallocated", percentage: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(percentages.unallocated), showComparison: showComparison, showUnallocated: showUnallocated, percentageChange: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(peerPercentageDifferences.unallocated.toFixed(2)) })] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacroPieChartWithLegend);


/***/ }),

/***/ "./src/client/pages/components/PercentageItem.tsx":
/*!********************************************************!*\
  !*** ./src/client/pages/components/PercentageItem.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");


const PercentageItem = ({ color, percentage, label, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: { textAlign: "center", marginTop: "0.5rem" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: {
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        background: color,
                        borderRadius: "50%",
                        width: 13,
                        height: 13,
                        marginRight: 8,
                    } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", Object.assign({ className: "font-custom font-medium text-base text-skin-base" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_1__["default"], { target: percentage !== null && percentage !== void 0 ? percentage : 0, duration: 500 }), "%"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium" }, { children: label }))] }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercentageItem);


/***/ }),

/***/ "./src/client/pages/components/insights/ExpenditureCard.tsx":
/*!******************************************************************!*\
  !*** ./src/client/pages/components/insights/ExpenditureCard.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpenditureCard: () => (/* binding */ ExpenditureCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/store/currencySettingsStore */ "./src/client/store/currencySettingsStore.ts");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");



const ExpenditureCard = ({ icon, budget, spent, category, transactions, }) => {
    const currencySymbol = (0,client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state.currencySymbol);
    const budgetColumnWidth = "90px";
    const spentColumnWidth = "90px";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mb-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-6 w-6 rounded-full bg-[#E8E3DC] mr-2 flex justify-center items-center" }, { children: icon })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xs text-skin-base tracking-subtitle mb-1" }, { children: category })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xxxs text-skin-subtitle tracking-wide" }, { children: `${transactions} transaction${transactions === 1 ? "" : "s"}` }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row min-w-[55%] justify-between" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col items-end", style: { width: budgetColumnWidth } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", Object.assign({ className: "font-semibold font-primary text-xs text-skin-subtitle tracking-widest" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], { target: budget !== null && budget !== void 0 ? budget : 0, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: " text-xxxs align-super font-medium ml-[-10%]" }, { children: currencySymbol }))] })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col items-end", style: { width: spentColumnWidth } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", Object.assign({ className: "font-semibold font-primary text-xs text-skin-base tracking-widest" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], { target: spent !== null && spent !== void 0 ? spent : 0, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: " text-xxxs align-super font-medium ml-[-10%]" }, { children: currencySymbol }))] })) })) }))] }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/insights/ExpenditureComparisonCard.tsx":
/*!****************************************************************************!*\
  !*** ./src/client/pages/components/insights/ExpenditureComparisonCard.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpenditureComparisonCard: () => (/* binding */ ExpenditureComparisonCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");



const ExpenditureComparisonCard = ({ icon, category, percentage, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mb-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mr-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-6 w-6 rounded-full bg-[#E8E3DC] mr-2 flex justify-center items-center" }, { children: icon })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xs text-skin-base tracking-subtitle mb-1" }, { children: category })) }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [percentage == 0 ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `flex justify-center items-center rounded-full h-4.5 w-4.5  mr-2.5 ${percentage < 0
                                    ? "border bg-[#fcd9de] border-[#ee3e59]"
                                    : "border bg-[#ddebd5] border-[#5f9d30]"}` }, { children: percentage < 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiArrowDownRight, { color: "#ee3e59", size: "0.75rem" })) : percentage == 0 ? (null) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiArrowUpRight, { color: "#5f9d30", size: "0.75rem" })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `font-bold font-primary text-xs ${percentage < 0 ? "text-[#ee3e59]" : "text-[#5f9d30]"} tracking-widest` }, { children: [`${percentage > 0 ? "+" : ""}`, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], { target: parseFloat(percentage.toFixed(1)), duration: 500 }), "%"] })] })) }))] })) }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/insights/InsightsTooltipProgress.tsx":
/*!**************************************************************************!*\
  !*** ./src/client/pages/components/insights/InsightsTooltipProgress.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_ToolTipProgressBar_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ToolTipProgressBar/TooltipProgressBar.css */ "./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css");


const InsightsTooltipProgressBar = ({ backgroundColor = "#E7EDF3", progressPercent, startDate, endDate, }) => {
    const now = new Date();
    const currentDay = now.getDate();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    // Check if the period is exactly one month and matches the current month
    const isCurrentFullMonth = startDate && endDate &&
        startDate.getDate() === startOfCurrentMonth.getDate() &&
        startDate.getMonth() === startOfCurrentMonth.getMonth() &&
        startDate.getFullYear() === startOfCurrentMonth.getFullYear() &&
        endDate.getDate() === endOfCurrentMonth.getDate() &&
        endDate.getMonth() === endOfCurrentMonth.getMonth() &&
        endDate.getFullYear() === endOfCurrentMonth.getFullYear();
    // Adjust progress tooltip logic
    const progressStyle = {
        background: "linear-gradient(65.42deg, rgba(11, 62, 175, 1) 0%, rgba(157, 177, 198, 1) 52.44%, rgba(20, 181, 195, 1) 100%)",
        width: `${progressPercent}%`,
    };
    const progress = (currentDay / daysInMonth) * 100;
    const tooltipStyle = {
        left: `calc(${progress}% - 2em)`,
        transform: "scale(0.8)",
        background: "black",
        height: "30px",
        width: "60px",
        fontFamily: "Poppins",
        fontSize: "14px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: isCurrentFullMonth ? "block" : "none", // Only display if isCurrentFullMonth
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-wide" }, { children: startDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-wide" }, { children: endDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row mt-2.5 w-full" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "tooltip-progress-bar", style: { backgroundColor } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tooltip-progress-bar-progress", style: progressStyle }), isCurrentFullMonth && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "tooltip", style: tooltipStyle }, { children: "Today" })))] })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsTooltipProgressBar);


/***/ }),

/***/ "./src/client/pages/components/insights/MySpend.tsx":
/*!**********************************************************!*\
  !*** ./src/client/pages/components/insights/MySpend.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MySpend: () => (/* binding */ MySpend)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AmountView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AmountView */ "./src/client/pages/components/insights/AmountView.tsx");
/* harmony import */ var _InsightsTooltipProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InsightsTooltipProgress */ "./src/client/pages/components/insights/InsightsTooltipProgress.tsx");
/* harmony import */ var _ExpenditureCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ExpenditureCard */ "./src/client/pages/components/insights/ExpenditureCard.tsx");
/* harmony import */ var _MacroPieChartWithLegend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../MacroPieChartWithLegend */ "./src/client/pages/components/MacroPieChartWithLegend.tsx");
/* harmony import */ var client_store_microGoalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/microGoalStore */ "./src/client/store/microGoalStore.ts");
/* harmony import */ var client_api_micros__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/api/micros */ "./src/client/api/micros.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var client_store_insightsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/insightsStore */ "./src/client/store/insightsStore.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInMonths.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");












const MySpend = ({ spent, budget: initialBudget, wantsSpend, essentialsSpend, savingsSpend, unallocatedSpend, startDate, endDate, isLoading, }) => {
    const microGoals = (0,client_store_microGoalStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state.microGoals);
    const setMicroGoals = (0,client_store_microGoalStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state.setMicroGoals);
    const config = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_3__.useConfigurationStore)((state) => state.configuration);
    const insightsStore = client_store_insightsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
    const [estimatedBudget, setEstimatedBudget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [budget, setBudget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBudget);
    const [numberOfMonths, setNumberOfMonths] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [spendingMessage, setSpendingMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const expenditureProgress = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__.calculateSpending)(spent, budget);
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const now = new Date();
    const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    // Check if the period is exactly one month and matches the current month
    const isCurrentFullMonth = (startDateObj === null || startDateObj === void 0 ? void 0 : startDateObj.getDate()) === startOfCurrentMonth.getDate() &&
        (endDateObj === null || endDateObj === void 0 ? void 0 : endDateObj.getDate()) === endOfCurrentMonth.getDate();
    const claculateTheNumberOfMonths = () => {
        if (!startDateObj || !endDateObj)
            return;
        const numberOfMonths = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInMonths)(endDateObj, startDateObj) + 1;
        setNumberOfMonths(numberOfMonths);
    };
    const calculateEstimatedBudget = () => {
        if (!startDateObj || !endDateObj)
            return;
        claculateTheNumberOfMonths();
        const startIsMonthStart = startDateObj.getDate() === (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfMonth)(startDateObj).getDate();
        const endIsMonthEnd = endDateObj.getDate() === (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.endOfMonth)(endDateObj).getDate();
        if (startIsMonthStart && endIsMonthEnd && startDateObj.getMonth() === endDateObj.getMonth()) {
            // If start date is the first day of the month and end date is the last day of the same month
            const totalDaysInMonth = new Date(endDateObj.getFullYear(), endDateObj.getMonth() + 1, 0).getDate();
            const dailyBudget = initialBudget / totalDaysInMonth;
            if (isCurrentFullMonth) {
                const currentDate = now.getDate();
                const recomendedSpend = dailyBudget * currentDate;
                if (spent > recomendedSpend) {
                    setSpendingMessage("🙁🏼 Heads up! You're currently spending above the recommended budget by KES " + ((spent <= initialBudget) ? spent - recomendedSpend : spent - initialBudget).toLocaleString());
                }
                else if (spent > 0 && spent < recomendedSpend) {
                    setSpendingMessage("🙌🏼 Sweet! You're well within your recommended budget limit for this month.");
                }
            }
            else {
                const currentDate = endDateObj.getDate();
                const recomendedSpend = dailyBudget * currentDate;
                if (spent > recomendedSpend) {
                    setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by KES " + ((spent <= initialBudget) ? spent - recomendedSpend : spent - initialBudget).toLocaleString());
                }
                else if (spent > 0 && spent < recomendedSpend) {
                    setSpendingMessage("🙌🏼 Sweet! You're well within your overall budget limit for this month.");
                }
            }
            setBudget(initialBudget);
            setEstimatedBudget(false);
        }
        else {
            const days = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.differenceInDays)(endDateObj, startDateObj);
            if (days <= 30) {
                // If the duration is less than or equal to a month
                //If the days are in the same month, assume that the budget is divided equally between the start and end dates, multiply the daily budget by the number of days
                if (startDateObj.getMonth() === endDateObj.getMonth() && startDateObj.getFullYear() === endDateObj.getFullYear()) {
                    const totalDaysInMonth = new Date(endDateObj.getFullYear(), endDateObj.getMonth() + 1, 0).getDate();
                    const dailyBudget = initialBudget / totalDaysInMonth;
                    const adjustedBudget = dailyBudget * days;
                    if (spent > adjustedBudget) {
                        setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by KES " + ((spent <= initialBudget) ? spent - adjustedBudget : spent - initialBudget).toLocaleString());
                    }
                    else {
                        setSpendingMessage("🙌🏼 Sweet! You're well within your overall budget limit for this period.");
                    }
                    setBudget(adjustedBudget);
                    setEstimatedBudget(true);
                } //If the days are in different months, assume that the budget is divided equally between 30 days, multiply the daily budget by the number of days
                else if (startDateObj.getMonth() !== endDateObj.getMonth()) {
                    const dailyBudget = initialBudget / 30;
                    const adjustedBudget = dailyBudget * days;
                    if (spent > adjustedBudget) {
                        setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by KES " + ((spent <= initialBudget) ? spent - adjustedBudget : spent - initialBudget).toLocaleString());
                    }
                    else if (spent > 0 && spent < adjustedBudget) {
                        setSpendingMessage("🙌🏼 Sweet! You're well within your overall budget limit for this period.");
                    }
                    setBudget(adjustedBudget);
                    setEstimatedBudget(true);
                }
            }
            else if (days > 30) {
                // If the duration is more than a month
                const months = Math.ceil(days / 30);
                const adjustedBudget = initialBudget * months;
                if (spent > adjustedBudget) {
                    setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by KES " + ((spent <= initialBudget) ? spent - adjustedBudget : spent - initialBudget).toLocaleString());
                }
                else if (spent > 0 && spent < adjustedBudget) {
                    setSpendingMessage("🙌🏼 Sweet! You're well within your overall budget limit for this period.");
                }
                setBudget(adjustedBudget);
                setEstimatedBudget(true);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        calculateEstimatedBudget();
    }, [startDate, endDate, spent, initialBudget]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__.fetchData)("macros", client_api_micros__WEBPACK_IMPORTED_MODULE_10__.fetchMicroGoalTotals, config, (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(insightsStore.insightsStartDate, "yyyy-MM-dd"), (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(insightsStore.insightsEndDate, "yyyy-MM-dd"), setMicroGoals);
    }, [startDate, endDate]);
    const budgetColumnWidth = "120px";
    const spentColumnWidth = "20%";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-skin-base text-sm tracking-listtile_subtitle" }, { children: spent > 0 ? (spendingMessage || "Calculating your budget...") : "You have no expenses registered for this period. Add some expenses to get started." })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-2.5 flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InsightsTooltipProgress__WEBPACK_IMPORTED_MODULE_12__["default"], { progressPercent: expenditureProgress.expenditureProgress, startDate: startDateObj !== null && startDateObj !== void 0 ? startDateObj : new Date(), endDate: endDateObj !== null && endDateObj !== void 0 ? endDateObj : new Date() }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mt-3 flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AmountView__WEBPACK_IMPORTED_MODULE_13__.AmountView, { caption: "Spent", amount: spent }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AmountView__WEBPACK_IMPORTED_MODULE_13__.AmountView, { caption: estimatedBudget ? "Estimated Budget" : "Planned budget", amount: budget, flex: "items-end" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3 mt-9 mb-4.5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-center w-full h-full -ml-5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MacroPieChartWithLegend__WEBPACK_IMPORTED_MODULE_14__["default"], { dimensions: 190, doughnutThickness: 14, showComparison: false, values: {
                        wants: isLoading ? 0 : wantsSpend,
                        essentials: isLoading ? 0 : essentialsSpend,
                        savings: isLoading ? 0 : savingsSpend,
                        unallocated: isLoading ? 0 : unallocatedSpend,
                    }, isLoading: isLoading }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3 mt-9 mb-4.5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: microGoals && microGoals.length > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [microGoals.some((microGoal) => microGoal.total_transactions > 0) && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mb-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xs text-skin-subtitle tracking-wide" }, { children: "Categories" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xs text-skin-subtitle tracking-wide items-end", style: { width: budgetColumnWidth } }, { children: estimatedBudget ? "Est Budget" : "Budget" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xs text-skin-subtitle tracking-wide items-end", style: { width: spentColumnWidth } }, { children: "Spent" }))] })) }))] }))), microGoals.map((microGoal, i) => {
                            const isGoingOut = (microGoal === null || microGoal === void 0 ? void 0 : microGoal.name) === "Going out";
                            return microGoal.total_transactions > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ExpenditureCard__WEBPACK_IMPORTED_MODULE_15__.ExpenditureCard, { transactions: microGoal.number_of_transactions, icon: isGoingOut ? "🤩" : microGoal.emoji, budget: microGoal.amount * numberOfMonths, spent: microGoal.total_transactions, category: isGoingOut ? "Entertainment" : microGoal.name }, i) }, i)) : null;
                        })] })) : null }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/insights/OthersSpend.tsx":
/*!**************************************************************!*\
  !*** ./src/client/pages/components/insights/OthersSpend.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OthersSpend: () => (/* binding */ OthersSpend)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AmountView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AmountView */ "./src/client/pages/components/insights/AmountView.tsx");
/* harmony import */ var _ExpenditureComparisonCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExpenditureComparisonCard */ "./src/client/pages/components/insights/ExpenditureComparisonCard.tsx");
/* harmony import */ var client_utils_MockData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/utils/MockData */ "./src/client/utils/MockData.tsx");
/* harmony import */ var _MacroPieChartWithLegend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MacroPieChartWithLegend */ "./src/client/pages/components/MacroPieChartWithLegend.tsx");
/* harmony import */ var _VsProgress_InsightsVsTooltipProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VsProgress/InsightsVsTooltipProgress */ "./src/client/pages/components/insights/VsProgress/InsightsVsTooltipProgress.tsx");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var client_api_micros__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/api/micros */ "./src/client/api/micros.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInMonths.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const OthersSpend = ({ spentBudget, plannedBudget: initialBudget, wantsSpend, essentialsSpend, savingsSpend, unallocatedSpend, startDate, endDate, }) => {
    const config = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_2__.useConfigurationStore)((state) => state.configuration);
    const [othersData, setOthersData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [totalUserExpenditure, setTotalUserExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [totalPeerExpenditure, setTotalPeerExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [peerProgress, setPeerProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userProgress, setUserProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userWantsExpenditure, setUserWantsExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [userEssentialsExpenditure, setUserEssentialsExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [userSavingsExpenditure, setUserSavingsExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [peerWantsExpenditure, setPeerWantsExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [peerEssentialsExpenditure, setPeerEssentialsExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [peerSavingsExpenditure, setPeerSavingsExpenditure] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [numberOfMonths, setNumberOfMonths] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [budget, setBudget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBudget);
    const [estimatedBudget, setEstimatedBudget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [spendingMessage, setSpendingMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;
    const claculateTheNumberOfMonths = () => {
        if (!startDateObj || !endDateObj)
            return;
        const numberOfMonths = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInMonths)(endDateObj, startDateObj) + 1;
        setNumberOfMonths(numberOfMonths);
    };
    const calculateEstimatedBudget = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!startDateObj || !endDateObj)
            return;
        claculateTheNumberOfMonths();
        const startIsMonthStart = startDateObj.getDate() === (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfMonth)(startDateObj).getDate();
        const endIsMonthEnd = endDateObj.getDate() === (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.endOfMonth)(endDateObj).getDate();
        if (startIsMonthStart && endIsMonthEnd && startDateObj.getMonth() === endDateObj.getMonth()) {
            setBudget(initialBudget);
            setEstimatedBudget(false);
        }
        else {
            const days = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInDays)(endDateObj, startDateObj);
            if (days <= 30) {
                // If the duration is less than or equal to a month
                //If the days are in the same month, assume that the budget is divided equally between the start and end dates, multiply the daily budget by the number of days
                if (startDateObj.getMonth() === endDateObj.getMonth() && startDateObj.getFullYear() === endDateObj.getFullYear()) {
                    const totalDaysInMonth = new Date(endDateObj.getFullYear(), endDateObj.getMonth() + 1, 0).getDate();
                    const dailyBudget = initialBudget / totalDaysInMonth;
                    const adjustedBudget = dailyBudget * days;
                    setBudget(adjustedBudget);
                    setEstimatedBudget(true);
                } //If the days are in different months, assume that the budget is divided equally between 30 days, multiply the daily budget by the number of days
                else if (startDateObj.getMonth() !== endDateObj.getMonth()) {
                    const dailyBudget = initialBudget / 30;
                    const adjustedBudget = dailyBudget * days;
                    setBudget(adjustedBudget);
                    setEstimatedBudget(true);
                }
            }
            else if (days > 30) {
                // If the duration is more than a month
                const months = Math.ceil(days / 30);
                const adjustedBudget = initialBudget * months;
                setBudget(adjustedBudget);
                setEstimatedBudget(true);
            }
        }
        const userProgress = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__.calculateSpending)(totalUserExpenditure, budget);
        const peerProgress = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__.calculateSpending)(totalPeerExpenditure, budget);
        setUserProgress(userProgress.expenditureProgress);
        setPeerProgress(peerProgress.expenditureProgress);
    });
    // TODO: fix this function here 
    const fetchDataAndUpdateState = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            const data = yield (0,client_api_micros__WEBPACK_IMPORTED_MODULE_8__.fetchMicrosPercentile)({
                configuration: config,
                start_date: startDate,
                end_date: endDate,
            });
            let totalUserExpenditure = 0;
            let totalPeerExpenditure = 0;
            let userWantsExpenditure = 0;
            let userEssentialsExpenditure = 0;
            let userSavingsExpenditure = 0;
            let peerWantsExpenditure = 0;
            let peerEssentialsExpenditure = 0;
            let peerSavingsExpenditure = 0;
            data.forEach((macro) => {
                const macroName = Object.keys(macro)[0]; // Assuming the name is the key
                const macroData = macro[macroName];
                totalUserExpenditure += macroData.total_user_expenditure_per_macro;
                totalPeerExpenditure += macroData.total_peer_expenditure_per_macro;
                // Check if the macro name is Wants, Essentials, or Savings
                if (macroName === "Wants") {
                    userWantsExpenditure += macroData.total_user_expenditure_per_macro;
                    peerWantsExpenditure += macroData.total_peer_expenditure_per_macro;
                }
                else if (macroName === "Essentials") {
                    userEssentialsExpenditure += macroData.total_user_expenditure_per_macro;
                    peerEssentialsExpenditure += macroData.total_peer_expenditure_per_macro;
                }
                else if (macroName === "Savings") {
                    userSavingsExpenditure += macroData.total_user_expenditure_per_macro;
                    peerSavingsExpenditure += macroData.total_peer_expenditure_per_macro;
                }
            });
            setTotalUserExpenditure(totalUserExpenditure);
            setTotalPeerExpenditure(totalPeerExpenditure);
            setUserWantsExpenditure(userWantsExpenditure);
            setUserEssentialsExpenditure(userEssentialsExpenditure);
            setUserSavingsExpenditure(userSavingsExpenditure);
            setPeerWantsExpenditure(peerWantsExpenditure);
            setPeerEssentialsExpenditure(peerEssentialsExpenditure);
            setPeerSavingsExpenditure(peerSavingsExpenditure);
            const updatedExpenditureList = client_utils_MockData__WEBPACK_IMPORTED_MODULE_9__.expenditureCompareList.map((expenditure) => {
                // Find the corresponding category in the data object
                const categoryData = data.find((macro) => {
                    const macroName = Object.keys(macro)[0];
                    return macro[macroName].categories.hasOwnProperty(expenditure.name);
                });
                // If category data is found, update the percentage
                if (categoryData) {
                    const macroName = Object.keys(categoryData)[0];
                    const category = categoryData[macroName].categories[expenditure.name];
                    expenditure.percentage = category.percentage_difference;
                }
                return expenditure;
            });
            setOthersData(data);
            // calculateEstimatedBudget();
            setIsLoading(false);
        }
        catch (error) {
            setIsLoading(false);
            console.error("Error fetching data:", error);
            setSpendingMessage("Failed to load expenditure data. Please try again later.");
        }
    });
    const calculateProgressAndSetMessage = (userExpenditure, peerExpenditure) => {
        const percentageDifference = ((userExpenditure - peerExpenditure) / peerExpenditure) * 100;
        determineMessage(userExpenditure, percentageDifference);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        calculateEstimatedBudget();
        calculateProgressAndSetMessage(totalUserExpenditure, totalPeerExpenditure);
    }, [startDate, endDate, initialBudget, totalUserExpenditure, totalPeerExpenditure]);
    const determineMessage = (userExpenditure, percentageDifference) => {
        if (userExpenditure === 0) {
            setSpendingMessage("You have no expenses registered for this period. Add some expenses to get started.");
            return;
        }
        let message = "Calculating your spending trends compared to otherslike you, please wait...";
        if (percentageDifference !== null) {
            if (Math.abs(percentageDifference) <= 15) {
                message = "🎉 Nice! You're spending on par with others like you per category.";
            }
            else if (percentageDifference < -15) {
                message = "Nice! You're spending less than others like you across your budget. Way to go!";
            }
            else if (percentageDifference > 15) {
                message = "Heads up! You're currently spending above average compared to others like you.";
            }
        }
        setSpendingMessage(message);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (startDate && endDate) {
            fetchDataAndUpdateState();
        }
    }, [startDate, endDate, config]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-skin-base text-sm tracking-listtile_subtitle" }, { children: isLoading
                        ? "Calculating your spending trends compared to otherslike you, please wait..."
                        : spendingMessage || "Ready to view spending insights!" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-2.5 flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VsProgress_InsightsVsTooltipProgress__WEBPACK_IMPORTED_MODULE_10__["default"], { othersProgressSpend: !isLoading ? userProgress !== null && userProgress !== void 0 ? userProgress : 0 : 0, myProgressSpend: !isLoading ? peerProgress !== null && peerProgress !== void 0 ? peerProgress : 0 : 0, startDate: startDateObj !== null && startDateObj !== void 0 ? startDateObj : new Date(), endDate: endDateObj !== null && endDateObj !== void 0 ? endDateObj : new Date() }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mt-3 flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                    width: 10,
                                    height: 10,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    background: "#4c4c4c",
                                    marginRight: 5,
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AmountView__WEBPACK_IMPORTED_MODULE_11__.AmountView, { caption: "My spend", amount: !isLoading ? totalUserExpenditure : 0 })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                    width: 10,
                                    height: 10,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    background: "#6786c3",
                                    marginRight: 5,
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AmountView__WEBPACK_IMPORTED_MODULE_11__.AmountView, { caption: "Other's avg spend", amount: !isLoading ? totalPeerExpenditure : 0 })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3 mt-9 mb-4.5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row -ml-8" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MacroPieChartWithLegend__WEBPACK_IMPORTED_MODULE_12__["default"], { dimensions: 190, doughnutThickness: 14, showComparison: true, showUnallocated: false, values: {
                        wants: !isLoading ? userWantsExpenditure : 0,
                        essentials: !isLoading ? userEssentialsExpenditure : 0,
                        savings: !isLoading ? userSavingsExpenditure : 0,
                        unallocated: !isLoading ? unallocatedSpend : 0,
                    }, peerValues: {
                        wants: !isLoading ? peerWantsExpenditure : 0,
                        essentials: !isLoading ? peerEssentialsExpenditure : 0,
                        savings: !isLoading ? peerSavingsExpenditure : 0,
                        unallocated: !isLoading ? unallocatedSpend : 0,
                    }, isLoading: isLoading }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3 mt-4.5 mb-6" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mb-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xs text-skin-subtitle tracking-wide" }, { children: "Categories" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col items-end" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-xs text-skin-subtitle tracking-wide" }, { children: "Spend difference" })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: client_utils_MockData__WEBPACK_IMPORTED_MODULE_9__.expenditureCompareList && client_utils_MockData__WEBPACK_IMPORTED_MODULE_9__.expenditureCompareList.length > 0
                    ? client_utils_MockData__WEBPACK_IMPORTED_MODULE_9__.expenditureCompareList.map((expenditure, i) => {
                        const isGoingOut = (expenditure === null || expenditure === void 0 ? void 0 : expenditure.name) === "Going out";
                        const isGambling = (expenditure === null || expenditure === void 0 ? void 0 : expenditure.name) === "Gambling";
                        const isEmergencyFund = (expenditure === null || expenditure === void 0 ? void 0 : expenditure.name) === "Emergency fund";
                        if (isEmergencyFund) {
                            return null;
                        }
                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ExpenditureComparisonCard__WEBPACK_IMPORTED_MODULE_13__.ExpenditureComparisonCard, { icon: isGoingOut ? "🤩" : isGambling ? "💸" : expenditure === null || expenditure === void 0 ? void 0 : expenditure.emoji, category: isGoingOut ? "Entertainment" : isGambling ? "High Risk Investment" : expenditure === null || expenditure === void 0 ? void 0 : expenditure.name, percentage: !isLoading ? expenditure.percentage : 0 }, i) }, i));
                    })
                    : null }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/insights/RandomCompareComparison.tsx":
/*!**************************************************************************!*\
  !*** ./src/client/pages/components/insights/RandomCompareComparison.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");



const RandomExpenditureComparisonCard = ({ percentage }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `flex justify-center items-center rounded-full h-4.5 w-4.5  mr-2.5 ${percentage < 0
                        ? "border bg-[#fcd9de] border-[#ee3e59]"
                        : "border bg-[#ddebd5] border-[#5f9d30]"}` }, { children: percentage < 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiArrowDownRight, { color: "#ee3e59", size: "0.75rem" })) : percentage == 0 ? (null) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiArrowUpRight, { color: "#5f9d30", size: "0.75rem" })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `font-bold font-primary text-xs ${percentage < 0 ? "text-[#ee3e59]" : "text-[#5f9d30]"} tracking-widest` }, { children: [`${percentage > 0 ? "+" : ""}`, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], { target: percentage, duration: 500 }), "%"] })] })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomExpenditureComparisonCard);


/***/ }),

/***/ "./src/client/pages/components/insights/Toggle.tsx":
/*!*********************************************************!*\
  !*** ./src/client/pages/components/insights/Toggle.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleButton */ "./src/client/pages/components/insights/ToggleButton.tsx");


const Toggle = ({ tabs, activeTab, onClick }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-between items-center rounded-full bg-[#F2F2F2]" }, { children: tabs === null || tabs === void 0 ? void 0 : tabs.map((element, i) => {
            const isActive = element.id == activeTab;
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ToggleButton__WEBPACK_IMPORTED_MODULE_1__.ToggleButton, { label: element.name, children: element.icon, isActive: isActive, onClick: () => {
                    if (onClick) {
                        onClick(element);
                    }
                } }, i));
        }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);


/***/ }),

/***/ "./src/client/pages/components/insights/ToggleButton.tsx":
/*!***************************************************************!*\
  !*** ./src/client/pages/components/insights/ToggleButton.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleButton: () => (/* binding */ ToggleButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const ToggleButton = ({ label, onClick, isActive = false, children, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `flex flex-row justify-center items-center ${isActive ? " bg-[#2676B8] rounded-full" : "bg-transparent"} px-4 py-1.5`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `text-center ${isActive
                ? "text-[#FFFFFF] font-custom text-xxxs font-bold tracking-tab_text"
                : "text-[#868686] font-custom text-xxxs font-bold tracking-tab_text"}` }, { children: label })) })));
};


/***/ }),

/***/ "./src/client/pages/components/insights/VsProgress/InsightsVsTooltipProgress.tsx":
/*!***************************************************************************************!*\
  !*** ./src/client/pages/components/insights/VsProgress/InsightsVsTooltipProgress.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _insightsVsTooltipProgress_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insightsVsTooltipProgress.css */ "./src/client/pages/components/insights/VsProgress/insightsVsTooltipProgress.css");


const InsightsVsTooltipProgressBar = ({ backgroundColor = "#E7EDF3", othersProgressSpend, myProgressSpend, // Added second progress
startDate, endDate }) => {
    const now = new Date();
    const currentDay = now.getDate();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    // Check if the period is exactly one month and matches the current month
    const isCurrentFullMonth = startDate && endDate &&
        startDate.getDate() === startOfCurrentMonth.getDate() &&
        startDate.getMonth() === startOfCurrentMonth.getMonth() &&
        startDate.getFullYear() === startOfCurrentMonth.getFullYear() &&
        endDate.getDate() === endOfCurrentMonth.getDate() &&
        endDate.getMonth() === endOfCurrentMonth.getMonth() &&
        endDate.getFullYear() === endOfCurrentMonth.getFullYear();
    const progress = (currentDay / daysInMonth) * 100;
    const defaultCircleSize = 10;
    let myCircleSize = defaultCircleSize;
    if (othersProgressSpend === 100 && myProgressSpend === 100) {
        myCircleSize += 4;
    }
    const progressStyle = {
        backgroundColor: "#6f89a5",
        width: `${othersProgressSpend}%`,
        height: `100%`,
        zIndex: othersProgressSpend < myProgressSpend ? 2 : 1,
        position: "absolute",
    };
    const progressStyle2 = Object.assign(Object.assign({}, progressStyle), { width: `${myProgressSpend}%`, zIndex: myProgressSpend < othersProgressSpend ? 2 : 1, position: "absolute" });
    const tooltipStyle = {
        left: `calc(${progress}% - 2em)`,
        transform: "scale(0.8)",
        background: "black",
        height: "30px",
        width: "60px",
        fontSize: "14px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-wide" }, { children: startDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-wide" }, { children: endDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row mt-2.5 w-full" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "vs-tooltip-progress-bar", style: { backgroundColor } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "vs-tooltip-progress-bar-progress", style: Object.assign(Object.assign({}, progressStyle), { backgroundColor: "#4c4c4c" }) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "vs-tooltip-progress-bar-circle", style: {
                                    width: `${myCircleSize}px`,
                                    height: `${myCircleSize}px`,
                                } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "vs-tooltip-progress-bar-progress2", style: Object.assign(Object.assign({}, progressStyle2), { backgroundColor: "#6786c3" }) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "vs-tooltip-progress-bar-circle2" }) })), isCurrentFullMonth && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "dotted-divider-container", style: { left: `calc(${Math.ceil(progress)}%)` } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "dotted-divider" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "tooltip", style: tooltipStyle }, { children: "Today" }))] })] })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsVsTooltipProgressBar);


/***/ }),

/***/ "./src/client/pages/insights/InsightsView.tsx":
/*!****************************************************!*\
  !*** ./src/client/pages/insights/InsightsView.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx");
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _components_budget_AvailableBudgetContainer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/budget/AvailableBudgetContainer */ "./src/client/pages/components/budget/AvailableBudgetContainer.tsx");
/* harmony import */ var client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/currencySettingsStore */ "./src/client/store/currencySettingsStore.ts");
/* harmony import */ var _components_insights_Toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/insights/Toggle */ "./src/client/pages/components/insights/Toggle.tsx");
/* harmony import */ var client_utils_MockData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! client/utils/MockData */ "./src/client/utils/MockData.tsx");
/* harmony import */ var _components_TabFilter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../components/TabFilter */ "./src/client/pages/components/TabFilter.tsx");
/* harmony import */ var _components_insights_MySpend__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../components/insights/MySpend */ "./src/client/pages/components/insights/MySpend.tsx");
/* harmony import */ var _components_insights_OthersSpend__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../components/insights/OthersSpend */ "./src/client/pages/components/insights/OthersSpend.tsx");
/* harmony import */ var _components_CashFlowPieChart__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/CashFlowPieChart */ "./src/client/pages/components/CashFlowPieChart.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_api_transactions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/api/transactions */ "./src/client/api/transactions.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var client_store_categoriesStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/store/categoriesStore */ "./src/client/store/categoriesStore.ts");
/* harmony import */ var client_store_macroGoalStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/store/macroGoalStore */ "./src/client/store/macroGoalStore.ts");
/* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-spring-bottom-sheet */ "./node_modules/react-spring-bottom-sheet/dist/index.es.js");
/* harmony import */ var _InsightsFilters__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./InsightsFilters */ "./src/client/pages/insights/InsightsFilters.tsx");
/* harmony import */ var client_store_accountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/store/accountStore */ "./src/client/store/accountStore.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var client_api_account__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/api/account */ "./src/client/api/account.ts");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var client_store_microGoalStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/store/microGoalStore */ "./src/client/store/microGoalStore.ts");
/* harmony import */ var client_store_cashFlowStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/store/cashFlowStore */ "./src/client/store/cashFlowStore.ts");
/* harmony import */ var _components_insights_CashFlowFilterButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/insights/CashFlowFilterButton */ "./src/client/pages/components/insights/CashFlowFilterButton.tsx");
/* harmony import */ var _insightsChart_InsightsExpenditureChart__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./insightsChart/InsightsExpenditureChart */ "./src/client/pages/insights/insightsChart/InsightsExpenditureChart.tsx");
/* harmony import */ var _components_GraphLegend__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/GraphLegend */ "./src/client/pages/components/GraphLegend.tsx");
/* harmony import */ var client_store_insightsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/insightsStore */ "./src/client/store/insightsStore.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _assets_images_budgets_insights_bank_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/images/budgets-insights/bank.svg */ "./src/client/assets/images/budgets-insights/bank.svg");
/* harmony import */ var _insightsChart_InsightsSavingsChart__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./insightsChart/InsightsSavingsChart */ "./src/client/pages/insights/insightsChart/InsightsSavingsChart.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



































const InsightsView = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const insightsStoreState = (0,client_store_insightsStore__WEBPACK_IMPORTED_MODULE_3__["default"])((state) => state);
    const currencySymbol = (0,client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state.currencySymbol);
    const config = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_5__.useConfigurationStore)((state) => state.configuration);
    const userStore = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state);
    const macroGoalStore = (0,client_store_macroGoalStore__WEBPACK_IMPORTED_MODULE_7__["default"])((state) => state);
    const [cashFlowData, setCashFlowData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { total_credit: moneyIn = 0, total_debit: moneyOut = 0, total_change: netCashFlow = 0, } = cashFlowData || {};
    const categoryStore = (0,client_store_categoriesStore__WEBPACK_IMPORTED_MODULE_8__["default"])((state) => state);
    const essentialTotalBudgetAmount = (_a = categoryStore.categoryBudgets[0]) === null || _a === void 0 ? void 0 : _a.total_amount;
    const wantsTotalBudgetAmount = (_b = categoryStore.categoryBudgets[1]) === null || _b === void 0 ? void 0 : _b.total_amount;
    const savingsTotalBudgetAmount = (_c = categoryStore.categoryBudgets[2]) === null || _c === void 0 ? void 0 : _c.total_amount;
    const previousEssentialTotalExpenses = categoryStore.categoryBudgets[0].range_expense.last_month_total;
    const essentialTotalExpenses = categoryStore.categoryBudgets[0].range_expense.this_month_total;
    const wantsTotalExpenses = categoryStore.categoryBudgets[1].range_expense.this_month_total;
    const previousWantsTotalExpenses = categoryStore.categoryBudgets[1].range_expense.last_month_total;
    const savingsTotalExpenses = categoryStore.categoryBudgets[2].range_expense.this_month_total;
    const previousSavingsTotalExpenses = categoryStore.categoryBudgets[2].range_expense.last_month_total;
    const totalBudgetAmount = essentialTotalBudgetAmount +
        wantsTotalBudgetAmount +
        savingsTotalBudgetAmount;
    // const totalExpenses =
    //   essentialTotalExpenses + wantsTotalExpenses + savingsTotalExpenses;
    const accountStore = (0,client_store_accountStore__WEBPACK_IMPORTED_MODULE_9__["default"])((state) => state);
    const accounts = accountStore.accounts;
    const cashflowVariables = client_store_cashFlowStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().cashflowVariables;
    const [essentialsArray, setEssentialsArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [wantsArray, setWantsArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [essentialsData, setEssentialsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [wantsData, setWantsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [savingsData, setSavingsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [savingsArray, setSavingsArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const fetchCashFlowData = () => __awaiter(void 0, void 0, void 0, function* () {
            setIsLoading(true);
            insightsStoreState.setInsightsLoading(true);
            yield (0,client_api_transactions__WEBPACK_IMPORTED_MODULE_11__.getCashFlow)({
                configuration: config,
                start_date: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(insightsStoreState.insightsStartDate, "yyyy-MM-dd") ||
                    undefined,
                end_date: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(insightsStoreState.insightsEndDate, "yyyy-MM-dd") || undefined,
            })
                .then((data) => {
                const macroTypeDistribution = convertTransactionsToDataSeries(data.transactions);
                const wantsData = getDataForMacroName(macroTypeDistribution, "Wants");
                const essentialsData = getDataForMacroName(macroTypeDistribution, "Essentials");
                const savingsData = getDataForMacroName(macroTypeDistribution, "Savings");
                setEssentialsData(essentialsData);
                setWantsData(wantsData);
                setSavingsData(savingsData);
                const essentialsArray = generateLinearProgression(essentialsData);
                const wantsArray = generateLinearProgression(wantsData);
                const savingsArray = generateLinearProgression(savingsData);
                setEssentialsArray(essentialsArray);
                setWantsArray(wantsArray);
                setSavingsArray(savingsArray);
                setCashFlowData(data);
            })
                .finally(() => {
                insightsStoreState.setInsightsLoading(false);
                setIsLoading(false);
            })
                .catch((error) => {
                insightsStoreState.setInsightsLoading(false);
                setIsLoading(false);
                console.error("Error fetching data:", error);
            });
        });
        fetchCashFlowData()
            .then(() => {
            insightsStoreState.setInsightsLoading(false);
            setIsLoading(false);
        })
            .catch((error) => {
            insightsStoreState.setInsightsLoading(false);
            setIsLoading(false);
            console.error("Error fetching data:", error);
        });
    }, [
        insightsStoreState.insightsStartDate,
        insightsStoreState.insightsEndDate,
    ]);
    const [toggleTabId, setToggleTabId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [budgetSpendTabId, setBudgetSpendTabId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
    const [filter, openFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filterAccountBy = (0,client_store_accountStore__WEBPACK_IMPORTED_MODULE_9__["default"])((state) => state.filterBy);
    const filteredAccount = (0,client_store_accountStore__WEBPACK_IMPORTED_MODULE_9__["default"])((state) => state.filter);
    const { data: fetchedAccounts } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("fetch-accounts", () => (0,client_api_account__WEBPACK_IMPORTED_MODULE_14__["default"])(config).then((accounts) => {
        accountStore.init(accounts || []);
    }), { refetchOnWindowFocus: false });
    const microGoals = (0,client_store_microGoalStore__WEBPACK_IMPORTED_MODULE_15__["default"])((state) => state.microGoals);
    const macroTypeTotals = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_16__.calculateMacroTypeTotals)(microGoals);
    const { Wants: wantsTotal = 0, Essentials: essentialsTotal = 0, Savings: savingsTotal = 0, } = macroTypeTotals.reduce((acc, { macroType, total }) => {
        acc[macroType] = total || 0;
        return acc;
    }, {});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        (0,client_api_transactions__WEBPACK_IMPORTED_MODULE_11__.enrichTransactions)({ configuration: config });
    }, []);
    const totalExpenses = wantsTotal + essentialsTotal + savingsTotal;
    const closeBottomSheet = () => {
        openFilter(false);
    };
    const debtArray = [
        {
            x: "2024-05-16",
            y: 25000,
        },
        {
            x: "2024-05-15",
            y: 30000,
        },
        {
            x: "2024-05-14",
            y: 50000,
        },
        {
            x: "2024-05-13",
            y: 50000,
        },
        {
            x: "2024-05-12",
            y: 80992,
        },
        {
            x: "2024-05-11",
            y: 85000,
        },
        {
            x: "2024-05-10",
            y: 85992,
        },
    ];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen w-screen" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mr-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_17__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-between mt-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mr-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BackButton__WEBPACK_IMPORTED_MODULE_18__["default"], { onClick: () => navigate(-1) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_19__["default"], { title: "Insights", fontSize: "text-2xl" })] })) })) })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "py-3 flex flex-wrap items-center mx-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_insights_CashFlowFilterButton__WEBPACK_IMPORTED_MODULE_20__["default"], { label: insightsStoreState.insightsActiveInstitutionName, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_budgets_insights_bank_svg__WEBPACK_IMPORTED_MODULE_21__, alt: "" }), isActive: false, onClick: () => openFilter(true) }, `All accounts`), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_insights_CashFlowFilterButton__WEBPACK_IMPORTED_MODULE_20__["default"], { label: insightsStoreState.insightsDateFilterName, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_22__.FiCalendar, { color: "#101010" }), isActive: false, onClick: () => openFilter(true) }, `This month`)] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-2 mx-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mr-5" }, { children: [toggleTabId == 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_budget_AvailableBudgetContainer__WEBPACK_IMPORTED_MODULE_23__.AvailableBudgetContainer, { amount: (_d = essentialsData.reduce((a, b) => a + b.y, 0) +
                                    wantsData.reduce((a, b) => a + b.y, 0)) !== null && _d !== void 0 ? _d : 0, subtitle: "Current total spending", currencySymbol: currencySymbol })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_budget_AvailableBudgetContainer__WEBPACK_IMPORTED_MODULE_23__.AvailableBudgetContainer, { amount: 25000, subtitle: "Total debt", currencySymbol: currencySymbol })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_insights_Toggle__WEBPACK_IMPORTED_MODULE_24__["default"], { tabs: client_utils_MockData__WEBPACK_IMPORTED_MODULE_25__.insightsToggleTabs, activeTab: toggleTabId, onClick: (tab) => setToggleTabId(tab.id) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row mt-4 mb-6" }, { children: toggleTabId === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col w-full justify-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_insightsChart_InsightsExpenditureChart__WEBPACK_IMPORTED_MODULE_26__["default"], { currencySymbol: currencySymbol, essentialsArray: isLoading ? [] : essentialsArray, wantsArray: isLoading ? [] : wantsArray, isLoading: isLoading }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "space-x-1", style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        margin: "0px 10px 2px 10px",
                                        gap: "1.25rem",
                                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GraphLegend__WEBPACK_IMPORTED_MODULE_27__["default"], { color: "#009FDC", label: "Essentials spend" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GraphLegend__WEBPACK_IMPORTED_MODULE_27__["default"], { color: "#354AA6", label: "Wants spend" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GraphLegend__WEBPACK_IMPORTED_MODULE_27__["default"], { color: "#036AB3", label: "Debt repayment" })] }))] }))) : (
                        // <SavingsBarGraph
                        //   previousMonthSavings={previousSavingsTotalExpenses}
                        //   currentMonthSavings={savingsTotal}
                        //   savingsTarget={savingsTotalBudgetAmount}
                        //   budgetLimit={userStore.user.income}
                        //   currentMonthDate={
                        //     insightsStoreState.insightsStartDate ?? new Date()
                        //   }
                        // />
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col w-full justify-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_insightsChart_InsightsSavingsChart__WEBPACK_IMPORTED_MODULE_28__["default"], { currencySymbol: currencySymbol, savingsArray: isLoading ? [] : debtArray, isLoading: isLoading }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "space-x-1", style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        margin: "0px 10px 2px 10px",
                                        gap: "1.25rem",
                                    } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GraphLegend__WEBPACK_IMPORTED_MODULE_27__["default"], { color: "#036AB3", label: "Total debt" }) }))] }))) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CashFlowPieChart__WEBPACK_IMPORTED_MODULE_29__["default"], { dimensions: 190, doughnutThickness: 14, values: {
                                moneyIn: isLoading ? 0 : (cashFlowData === null || cashFlowData === void 0 ? void 0 : cashFlowData.total_credit) || 0,
                                moneyOut: isLoading ? 0 : (cashFlowData === null || cashFlowData === void 0 ? void 0 : cashFlowData.total_debit) || 0,
                            }, percentageChange: isLoading ? 0 : (cashFlowData === null || cashFlowData === void 0 ? void 0 : cashFlowData.total_change) || 0, isLoading: isLoading }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "shadow-card px-4 py-6 mb-10 rounded-lg mt-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-base text-skin-base font-medium tracking-title font-custom" }, { children: "Budget spend" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-4.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TabFilter__WEBPACK_IMPORTED_MODULE_30__["default"], { tabs: client_utils_MockData__WEBPACK_IMPORTED_MODULE_25__.budgetSpendTabs, activeTab: budgetSpendTabId, onClick: (tab) => setBudgetSpendTabId(tab.id) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row mt-6 mx-2 border-skin-border" }, { children: budgetSpendTabId === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_insights_MySpend__WEBPACK_IMPORTED_MODULE_31__.MySpend, { spent: totalExpenses, budget: totalBudgetAmount, wantsSpend: wantsTotal !== null && wantsTotal !== void 0 ? wantsTotal : 0, savingsSpend: savingsTotal !== null && savingsTotal !== void 0 ? savingsTotal : 0, essentialsSpend: essentialsTotal !== null && essentialsTotal !== void 0 ? essentialsTotal : 0, unallocatedSpend: userStore.user.income - totalBudgetAmount, startDate: (_e = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(insightsStoreState.insightsStartDate, "yyyy-MM-dd")) !== null && _e !== void 0 ? _e : undefined, endDate: (_f = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(insightsStoreState.insightsEndDate, "yyyy-MM-dd")) !== null && _f !== void 0 ? _f : undefined, isLoading: isLoading })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_insights_OthersSpend__WEBPACK_IMPORTED_MODULE_32__.OthersSpend, { spentBudget: totalExpenses, plannedBudget: totalBudgetAmount, wantsSpend: wantsTotal !== null && wantsTotal !== void 0 ? wantsTotal : 0, savingsSpend: savingsTotal !== null && savingsTotal !== void 0 ? savingsTotal : 0, essentialsSpend: essentialsTotal !== null && essentialsTotal !== void 0 ? essentialsTotal : 0, unallocatedSpend: 0, startDate: (_g = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(insightsStoreState.insightsStartDate, "yyyy-MM-dd")) !== null && _g !== void 0 ? _g : undefined, endDate: (_h = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(insightsStoreState.insightsEndDate, "yyyy-MM-dd")) !== null && _h !== void 0 ? _h : undefined })) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__.BottomSheet, { onDismiss: () => {
                        openFilter(false);
                    }, open: filter, style: {
                        borderRadius: 24,
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InsightsFilters__WEBPACK_IMPORTED_MODULE_34__["default"], { accounts: accounts, activeAccount: filteredAccount, onClick: (account) => {
                            filterAccountBy(account);
                        }, closeBottomSheet: closeBottomSheet }), defaultSnap: 400 }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsView);
function convertTransactionsToDataSeries(transactions) {
    const dataSeries = {};
    transactions.forEach((transaction) => {
        if (!dataSeries[transaction.macro_name]) {
            dataSeries[transaction.macro_name] = [];
        }
        if (transaction.type === "debit") {
            dataSeries[transaction.macro_name].push({
                x: transaction.transacted_at,
                y: transaction.total_amount,
            });
        }
    });
    return dataSeries;
}
function getDataForMacroName(data, macroName) {
    var _a;
    return (((_a = data[macroName]) === null || _a === void 0 ? void 0 : _a.sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime())) || []);
}
function generateLinearProgression(data) {
    var _a;
    try {
        // Check if all data points are in the same month
        const sameMonth = data.every((point, index, array) => index === 0 || point.x.slice(0, 7) === array[index - 1].x.slice(0, 7));
        // If not all data points are in the same month, return the original array
        if (!sameMonth) {
            return data;
        }
        // Calculate linear progression within the same month
        const linearProgression = [];
        let sum = 0;
        let currentDate = new Date((_a = data[0]) === null || _a === void 0 ? void 0 : _a.x);
        for (let i = 0; i < data.length; i++) {
            const currentPoint = data[i];
            while (new Date(currentPoint === null || currentPoint === void 0 ? void 0 : currentPoint.x).toISOString().slice(0, 10) !==
                currentDate.toISOString().slice(0, 10)) {
                linearProgression.unshift({
                    x: currentDate.toISOString().slice(0, 10),
                    y: sum,
                });
                currentDate.setDate(currentDate.getDate() + 1); // Decrement the date
            }
            sum += currentPoint.y;
            linearProgression.unshift({ x: currentPoint === null || currentPoint === void 0 ? void 0 : currentPoint.x, y: sum });
            currentDate.setDate(currentDate.getDate() + 1); // Decrement the date
        }
        return linearProgression;
    }
    catch (error) {
        return data;
    }
}


/***/ }),

/***/ "./src/client/pages/insights/insightsChart/InsightsExpenditureChart.tsx":
/*!******************************************************************************!*\
  !*** ./src/client/pages/insights/insightsChart/InsightsExpenditureChart.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var client_pages_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/pages/components/EmptyState */ "./src/client/pages/components/EmptyState.tsx");
/* harmony import */ var _assets_images_Loader_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/Loader.svg */ "./src/client/assets/images/Loader.svg");







const InsightsExpenditureChart = ({ currencySymbol, essentialsArray, wantsArray, isLoading, }) => {
    const [dataArrayLength, setDataArrayLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        chart: {
            type: "line",
            height: 300,
            stacked: false,
            toolbar: { show: false },
            zoom: { enabled: false },
            offsetX: -15,
            offsetY: 0,
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 6,
            },
        },
        stroke: {
            width: 2,
            curve: "smooth",
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                var _a, _b, _c;
                const formattedDate = ((_a = w.config.series[0].data[dataPointIndex]) === null || _a === void 0 ? void 0 : _a.x.length) !== 7
                    ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(w.config.series[0].data[dataPointIndex].x, "dd MMMM yy")
                    : (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(w.config.series[0].data[dataPointIndex].x, "MMMM yyyy");
                const essentialsValue = (_b = w.config.series[0].data[dataPointIndex]) === null || _b === void 0 ? void 0 : _b.y;
                const wantsValue = (_c = w.config.series[1].data[dataPointIndex]) === null || _c === void 0 ? void 0 : _c.y;
                const totalSpendValue = essentialsValue + wantsValue;
                const formattedEssentialsValue = essentialsValue.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                });
                const formattedWantsValue = wantsValue.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                });
                const formattedTotalSpendValue = totalSpendValue.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                });
                return `<div style="padding: 10px; background-color: #ffffff; border-radius: 8px; font-size: 14px;" class="custom-tooltip">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <div style="display: flex; align-items: center;">
                            <span style="height: 10px; width: 10px; background-color: #009FDC; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                            <span style="color: #009FDC;margin-right: 5px;">${formattedEssentialsValue}</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <div style="display: flex; align-items: center;">
                            <span style="height: 10px; width: 10px; background-color: #354AA6; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                            <span style="color: #354AA6;margin-right: 5px;">${formattedWantsValue}</span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; align-items: center;">
                            <span style="height: 10px; width: 10px; background-color: #101010; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                            <span style="color: #101010;margin-right: 5px;">${formattedTotalSpendValue}</span>
                        </div>
                    </div>
                    <div style="padding-top: 5px; color: #101010; text-align: center; font-size: 13px" class="title">${formattedDate}</div>
                </div>`;
            },
            x: {
                show: true,
                format: "dd MMM yyyy",
                formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                    return new Date(value).toDateString();
                },
            },
            fixed: {
                offsetX: -10,
            },
        },
        xaxis: {
            type: "datetime",
            // categories: demoDataSeries.Essentials.map((p) => p.x),
            labels: {
                style: {
                    cssClass: "apexcharts-xaxis-label",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => `${(0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(value)} `,
                offsetX: -5,
            },
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "#90A4AE",
            strokeDashArray: 5,
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
    });
    const [series, setSeries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            name: "Essentials spend",
            type: "line",
            data: essentialsArray,
            color: "#009FDC",
        },
        {
            name: "Wants spend",
            type: "line",
            data: wantsArray,
            color: "#354AA6",
        },
        {
            name: "Debt repayment",
            type: "line",
            data: calculateTotalSpend(essentialsArray, wantsArray),
            color: "#036AB3",
        },
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!essentialsArray.length && !wantsArray.length) {
            return;
        }
        const [arrayLength, updatedEssentialsArray, updatedWantsArray] = alignDataArrays(essentialsArray, wantsArray);
        if (arrayLength && dataArrayLength !== arrayLength) {
            setDataArrayLength(arrayLength);
        }
        const totalSpend = calculateTotalSpend(updatedEssentialsArray, updatedWantsArray);
        setSeries([
            Object.assign(Object.assign({}, series[0]), { data: updatedEssentialsArray }),
            Object.assign(Object.assign({}, series[1]), { data: updatedWantsArray }),
            Object.assign(Object.assign({}, series[2]), { data: totalSpend }),
        ]);
    }, [essentialsArray, wantsArray, dataArrayLength]);
    if (isLoading) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "shadow-card px-4 py-6 mb-3 rounded-lg mt-2 items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_Loader_svg__WEBPACK_IMPORTED_MODULE_5__, alt: "loader", id: "loader-image", style: {
                    width: "40px",
                    height: "40px",
                    display: "block",
                    margin: "4.375rem auto",
                } }) })));
    }
    if (!essentialsArray.length && !wantsArray.length) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "shadow-card px-4 py-6 mb-3 rounded-lg mt-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.TransactionEmptyState, { label: "No data available" }) })));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__["default"], { options: options, series: series, type: "line", width: "100%", height: 200 }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsExpenditureChart);
const calculateTotalSpend = (essentials, wants) => {
    // Create a map to sum values by the same date/month
    const totalsMap = new Map();
    // Add essentials to the map
    essentials.forEach(({ x, y }) => {
        totalsMap.set(x, (totalsMap.get(x) || 0) + y);
    });
    // Add wants to the map, summing with existing essentials
    wants.forEach(({ x, y }) => {
        totalsMap.set(x, (totalsMap.get(x) || 0) + y);
    });
    // Convert the map back to an array
    return Array.from(totalsMap, ([x, y]) => ({ x, y }));
};
function alignDataArrays(essentials, wants) {
    // if (essentials.length === 0 || wants.length === 0) {
    //     return [essentials, wants];
    // }
    // Determine if the data is monthly or daily
    const isMonthly = [...essentials, ...wants].every((dp) => dp.x.length === 7);
    if (isMonthly) {
        return alignMonthDataArrays(essentials, wants);
    }
    else {
        return alignDayDataArrays(essentials, wants);
    }
}
function alignMonthDataArrays(essentials, wants) {
    // Helper to increment a month
    const incrementMonth = (ym) => {
        let [year, month] = ym.split("-").map(Number);
        month++;
        if (month > 12) {
            year++;
            month = 1;
        }
        return `${year}-${month.toString().padStart(2, "0")}`;
    };
    // Determine the range of dates
    const allMonths = [...essentials, ...wants].map((dp) => dp.x);
    if (allMonths.length === 1) {
        const previousMonth = new Date(allMonths[0]);
        previousMonth.setMonth(previousMonth.getMonth() - 1);
        allMonths.unshift(previousMonth.toISOString().substring(0, 7));
    }
    const earliestMonth = Math.min(...allMonths.map((ym) => new Date(ym).getTime()));
    const latestMonth = Math.max(...allMonths.map((ym) => new Date(ym).getTime()));
    // Align arrays
    const alignArray = (array, earliest, latest) => {
        const result = [];
        let currentDate = new Date(earliest);
        while (currentDate.getTime() <= latest) {
            const monthStr = currentDate.toISOString().substring(0, 7);
            const existingEntry = array.find((dp) => dp.x === monthStr);
            if (!existingEntry) {
                // Future months get a value of 0
                result.push({ x: monthStr, y: 0 });
            }
            else {
                result.push(existingEntry);
            }
            currentDate = new Date(incrementMonth(monthStr));
        }
        // Ensure no duplicates and return
        return Array.from(new Map(result.map((dp) => [dp.x, dp])).values());
    };
    return [
        null,
        alignArray(essentials, earliestMonth, latestMonth),
        alignArray(wants, earliestMonth, latestMonth),
    ];
}
function alignDayDataArrays(essentials, wants) {
    if (essentials.length === 0 && wants.length === 0) {
        return [0, [], []];
    }
    const isMonthly = essentials.concat(wants).every((dp) => dp.x.length === 7);
    const parseDateString = (dateStr) => new Date(dateStr + (dateStr.length === 7 ? "-01" : ""));
    // Parsing all dates directly
    const allDates = essentials.concat(wants).map((dp) => parseDateString(dp.x));
    if (allDates.length === 1) {
        allDates.unshift(new Date(allDates[0].getTime() - 24 * 60 * 60 * 1000));
    }
    const alignArray = (array, dates, monthly) => {
        const result = [];
        const dateMap = new Map();
        // Fill map with all relevant dates
        dates.forEach((date) => {
            const dateKey = monthly
                ? date.toISOString().substring(0, 7)
                : date.toISOString().substring(0, 10);
            dateMap.set(dateKey, { x: dateKey, y: 0 }); // Initialize all dates with 0
        });
        // Set actual values from the data
        array.forEach((dp) => {
            const key = monthly ? dp.x.substring(0, 7) : dp.x.substring(0, 10);
            if (dateMap.has(key)) {
                dateMap.set(key, { x: key, y: dp.y });
            }
        });
        // Carry forward the last known value if any dates were initialized to 0
        let lastValue = 0;
        dates
            .sort((a, b) => a.getTime() - b.getTime())
            .forEach((date) => {
            const dateKey = monthly
                ? date.toISOString().substring(0, 7)
                : date.toISOString().substring(0, 10);
            const currentValue = dateMap.get(dateKey);
            if (currentValue.y === 0 && lastValue !== 0) {
                dateMap.set(dateKey, { x: dateKey, y: lastValue });
            }
            else {
                lastValue = currentValue.y;
            }
        });
        // Convert map to sorted array
        result.push(...dateMap.values());
        // sort dates in ascending order
        result.sort((a, b) => a.x.localeCompare(b.x));
        return result;
    };
    const updatedEssentials = alignArray(essentials, allDates, isMonthly);
    const updatedWants = alignArray(wants, allDates, isMonthly);
    const lengthOfDateArrays = updatedEssentials.length + updatedWants.length;
    return [lengthOfDateArrays, updatedEssentials, updatedWants];
}


/***/ }),

/***/ "./src/client/pages/insights/insightsChart/InsightsSavingsChart.tsx":
/*!**************************************************************************!*\
  !*** ./src/client/pages/insights/insightsChart/InsightsSavingsChart.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var client_pages_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/pages/components/EmptyState */ "./src/client/pages/components/EmptyState.tsx");
/* harmony import */ var _assets_images_Loader_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/Loader.svg */ "./src/client/assets/images/Loader.svg");







const InsightsSavingsChart = ({ currencySymbol, savingsArray, isLoading, }) => {
    const [dataArrayLength, setDataArrayLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        chart: {
            type: "line",
            height: 300,
            stacked: false,
            toolbar: { show: false },
            zoom: { enabled: false },
            offsetX: -15,
            offsetY: 0,
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 6,
            },
        },
        stroke: {
            width: 2,
            curve: "smooth",
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                const dataPoint = w.config.series[seriesIndex].data[dataPointIndex];
                const formattedDate = dataPoint.x.length !== 7
                    ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(dataPoint.x), "dd MMMM yy")
                    : (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(dataPoint.x), "MMMM yyyy");
                const essentialsValue = Number(dataPoint.y);
                const formattedValue = essentialsValue.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                });
                return `<div style="padding: 10px; background-color: #ffffff; border-radius: 8px; font-size: 14px;" class="custom-tooltip">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <div style="display: flex; align-items: center;">
                      <span style="height: 10px; width: 10px; background-color: #036AB3; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                      <span style="color: #036AB3;margin-right: 5px;">${formattedValue}</span>
                    </div>
                  </div>
                  <div style="padding-top: 5px; color: #101010; text-align: center;font-size: 13px;" class="title">${formattedDate}</div>
                </div>`;
            },
        },
        xaxis: {
            type: "datetime",
            // categories: demoDataSeries.Essentials.map((p) => p.x),
            labels: {
                style: {
                    cssClass: "apexcharts-xaxis-label",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => `${(0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(value)} `,
                offsetX: -5,
            },
            min: 0,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "#90A4AE",
            strokeDashArray: 5,
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
    });
    const [series, setSeries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            name: "Savings spend",
            type: "line",
            data: savingsArray,
            color: "#036AB3",
        },
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!savingsArray.length) {
            return;
        }
        const [arrayLength, updatedsavingsArray] = alignDataArrays(savingsArray);
        if (arrayLength && dataArrayLength !== arrayLength) {
            setDataArrayLength(arrayLength);
        }
        const totalSpend = calculateTotalSpend(updatedsavingsArray);
        setSeries([
            Object.assign(Object.assign({}, series[0]), { data: updatedsavingsArray }),
        ]);
    }, [savingsArray, dataArrayLength]);
    if (isLoading) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "shadow-card px-4 py-6 mb-3 rounded-lg mt-2 items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_Loader_svg__WEBPACK_IMPORTED_MODULE_5__, alt: "loader", id: "loader-image", style: {
                    width: "40px",
                    height: "40px",
                    display: "block",
                    margin: "4.375rem auto",
                } }) })));
    }
    if (!savingsArray.length) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "shadow-card px-4 py-6 mb-3 rounded-lg mt-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.TransactionEmptyState, { label: "No data available" }) })));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__["default"], { options: options, series: series, type: "line", width: "100%", height: 200 }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsSavingsChart);
const calculateTotalSpend = (savings) => {
    // Create a map to sum values by the same date/month
    const totalsMap = new Map();
    // Add savings to the map
    savings.forEach(({ x, y }) => {
        totalsMap.set(x, (totalsMap.get(x) || 0) + y);
    });
    // Convert the map back to an array
    return Array.from(totalsMap, ([x, y]) => ({ x, y }));
};
function alignDataArrays(savings) {
    // if (savings.length === 0 || wants.length === 0) {
    //     return [savings, wants];
    // }
    // Determine if the data is monthly or daily
    const isMonthly = [...savings].every((dp) => dp.x.length === 7);
    if (isMonthly) {
        return alignMonthDataArrays(savings);
    }
    else {
        return alignDayDataArrays(savings);
    }
}
function alignMonthDataArrays(savings) {
    // Helper to increment a month
    const incrementMonth = (ym) => {
        let [year, month] = ym.split("-").map(Number);
        month++;
        if (month > 12) {
            year++;
            month = 1;
        }
        return `${year}-${month.toString().padStart(2, "0")}`;
    };
    // Determine the range of dates
    const allMonths = [...savings].map((dp) => dp.x);
    const earliestMonth = Math.min(...allMonths.map((ym) => new Date(ym).getTime()));
    const latestMonth = Math.max(...allMonths.map((ym) => new Date(ym).getTime()));
    // Align arrays
    const alignArray = (array, earliest, latest) => {
        const result = [];
        let currentDate = new Date(earliest);
        while (currentDate.getTime() <= latest) {
            const monthStr = currentDate.toISOString().substring(0, 7);
            const existingEntry = array.find((dp) => dp.x === monthStr);
            if (!existingEntry) {
                // Future months get a value of 0
                result.push({ x: monthStr, y: 0 });
            }
            else {
                result.push(existingEntry);
            }
            currentDate = new Date(incrementMonth(monthStr));
        }
        // Ensure no duplicates and return
        return Array.from(new Map(result.map((dp) => [dp.x, dp])).values());
    };
    return [null, alignArray(savings, earliestMonth, latestMonth)];
}
function alignDayDataArrays(savings) {
    if (savings.length === 0) {
        return [0, []];
    }
    const isMonthly = savings.every((dp) => dp.x.length === 7);
    const parseDateString = (dateStr) => new Date(dateStr + (dateStr.length === 7 ? "-01" : ""));
    // Parsing all dates directly
    const allDates = savings.map((dp) => parseDateString(dp.x));
    const alignArray = (array, dates, monthly) => {
        const result = [];
        const dateMap = new Map();
        // Fill map with all relevant dates
        dates.forEach((date) => {
            const dateKey = monthly
                ? date.toISOString().substring(0, 7)
                : date.toISOString().substring(0, 10);
            dateMap.set(dateKey, { x: dateKey, y: 0 }); // Initialize all dates with 0
        });
        // Set actual values from the data
        array.forEach((dp) => {
            const key = monthly ? dp.x.substring(0, 7) : dp.x.substring(0, 10);
            if (dateMap.has(key)) {
                dateMap.set(key, { x: key, y: dp.y });
            }
        });
        // Carry forward the last known value if any dates were initialized to 0
        let lastValue = 0;
        dates
            .sort((a, b) => a.getTime() - b.getTime())
            .forEach((date) => {
            const dateKey = monthly
                ? date.toISOString().substring(0, 7)
                : date.toISOString().substring(0, 10);
            const currentValue = dateMap.get(dateKey);
            if (currentValue.y === 0 && lastValue !== 0) {
                dateMap.set(dateKey, { x: dateKey, y: lastValue });
            }
            else {
                lastValue = currentValue.y;
            }
        });
        // Convert map to sorted array
        result.push(...dateMap.values());
        // sort dates in ascending order
        result.sort((a, b) => a.x.localeCompare(b.x));
        return result;
    };
    const updatedEssentials = alignArray(savings, allDates, isMonthly);
    const lengthOfDateArrays = updatedEssentials.length;
    return [lengthOfDateArrays, updatedEssentials];
}


/***/ }),

/***/ "./src/client/store/cashFlowStore.ts":
/*!*******************************************!*\
  !*** ./src/client/store/cashFlowStore.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const defaultStartDate = new Date();
defaultStartDate.setMonth(defaultStartDate.getMonth() - 3); // 3 months ago from today
const formattedDefaultStartDate = defaultStartDate.toISOString().split("T")[0];
const formattedDefaultEndDate = new Date().toISOString().split("T")[0];
const useCashflowVariablesStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set) => ({
    cashflowVariables: {
        startDate: formattedDefaultStartDate,
        endDate: formattedDefaultEndDate,
        accountName: "All accounts",
        dateFilter: "Last 3 months",
    },
    setCashflowVariables: (variables) => {
        set({ cashflowVariables: variables });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCashflowVariablesStore);


/***/ }),

/***/ "./src/client/store/microGoalStore.ts":
/*!********************************************!*\
  !*** ./src/client/store/microGoalStore.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useMicroGoalsStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set) => ({
    microGoals: [],
    setMicroGoals: (data) => {
        return set((state) => {
            const result = Object.assign(Object.assign({}, state), { microGoals: data });
            return result;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMicroGoalsStore);


/***/ }),

/***/ "./src/client/assets/images/macro_budget.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/images/macro_budget.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d799d3c9e88e5f78fdce.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19pbnNpZ2h0c19JbnNpZ2h0c1ZpZXdfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnSkFBZ0osWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsbURBQW1ELHVCQUF1QixpQkFBaUIsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsMkJBQTJCLEdBQUcscUNBQXFDLGtCQUFrQix1QkFBdUIsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQixpQkFBaUIsOEJBQThCLHVCQUF1QixlQUFlLEdBQUcsc0NBQXNDLGtCQUFrQix1QkFBdUIsaUJBQWlCLGFBQWEsZ0NBQWdDLGdCQUFnQixpQkFBaUIsOEJBQThCLHVCQUF1QixlQUFlLEdBQUcscUJBQXFCO0FBQzdvQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDdkMsTUFBOEc7QUFDOUcsTUFBb0c7QUFDcEcsTUFBMkc7QUFDM0csTUFBOEg7QUFDOUgsTUFBdUg7QUFDdkgsTUFBdUg7QUFDdkgsTUFBZ007QUFDaE07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3Qixr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QUUsQ0FBQyxDQUFDO0lBQ1IsaUJBQWlCLEVBQUU7UUFDakIsU0FBUyxFQUFFLHlCQUF5QjtRQUNwQyxPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFVBQVUsRUFBRSxlQUFlO0tBQzVCO0lBQ0Qsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUNsQyxHQUFHLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFDLENBQ0gsQ0FBQztBQUVGLGlFQUFlLHlCQUF5QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNSO0FBVWpDLE1BQU0sa0JBQWtCLEdBQUcsK0NBQU0sQ0FBa0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsVUFBVSxFQUFFLEVBQUU7SUFFZCxhQUFhLEVBQUUsQ0FBQyxJQUFzQixFQUFFLEVBQUU7UUFDdEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUEwQixFQUFFLEVBQUU7WUFDMUMsTUFBTSxNQUFNLG1DQUNMLEtBQUssS0FDUixVQUFVLEVBQUUsSUFBSSxHQUNuQixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDQSxDQUFDLENBQUMsQ0FBQztBQUVKLGlFQUFlLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvVnNQcm9ncmVzcy9pbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzLmNzcyIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9pbnNpZ2h0cy9Wc1Byb2dyZXNzL2luc2lnaHRzVnNUb29sdGlwUHJvZ3Jlc3MuY3NzPzRjYWQiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L2FwaS9hY2NvdW50LnRzIiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9hcGkvbWljcm9zLnRzIiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0Nhc2hGbG93UGllQ2hhcnQudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0dyYXBoTGVnZW5kLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9NYWNyb1BpZUNoYXJ0LnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9NYWNyb1BpZUNoYXJ0TGVnZW5kLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9NYWNyb1BpZUNoYXJ0V2l0aExlZ2VuZC50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvUGVyY2VudGFnZUl0ZW0udHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2luc2lnaHRzL0V4cGVuZGl0dXJlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvRXhwZW5kaXR1cmVDb21wYXJpc29uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvSW5zaWdodHNUb29sdGlwUHJvZ3Jlc3MudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2luc2lnaHRzL015U3BlbmQudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2luc2lnaHRzL090aGVyc1NwZW5kLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9pbnNpZ2h0cy9SYW5kb21Db21wYXJlQ29tcGFyaXNvbi50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvVG9nZ2xlLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9pbnNpZ2h0cy9Ub2dnbGVCdXR0b24udHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2luc2lnaHRzL1ZzUHJvZ3Jlc3MvSW5zaWdodHNWc1Rvb2x0aXBQcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2luc2lnaHRzL0luc2lnaHRzVmlldy50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2luc2lnaHRzL2luc2lnaHRzQ2hhcnQvSW5zaWdodHNFeHBlbmRpdHVyZUNoYXJ0LnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvaW5zaWdodHMvaW5zaWdodHNDaGFydC9JbnNpZ2h0c1NhdmluZ3NDaGFydC50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3N0b3JlL2Nhc2hGbG93U3RvcmUudHMiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3N0b3JlL21pY3JvR29hbFN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudnMtdG9vbHRpcC1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiA0cHg7XG4gIC8qIG1hcmdpbjogMCAxMHB4OyAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4udnMtdG9vbHRpcC1wcm9ncmVzcy1iYXItY2lyY2xlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzRjNGM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbn1cblxuLnZzLXRvb2x0aXAtcHJvZ3Jlc3MtYmFyLWNpcmNsZTIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3ODZjMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvVnNQcm9ncmVzcy9pbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52cy10b29sdGlwLXByb2dyZXNzLWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBoZWlnaHQ6IDRweDtcXG4gIC8qIG1hcmdpbjogMCAxMHB4OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi52cy10b29sdGlwLXByb2dyZXNzLWJhci1jaXJjbGUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEwcHg7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNGM0YztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi52cy10b29sdGlwLXByb2dyZXNzLWJhci1jaXJjbGUyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Nzg2YzM7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5zaWdodHNWc1Rvb2x0aXBQcm9ncmVzcy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5cbmltcG9ydCB7IElDb25maWcgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCJjbGllbnQvYXBpL2FwaVwiO1xuXG5jb25zdCBnZXRBY2NvdW50cyA9IGFzeW5jIChjb25maWd1cmF0aW9uOiBJQ29uZmlnKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hEYXRhKHtcbiAgICAgIGVuZHBvaW50OiBcIi91c2Vycy9cIixcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgICAgcHVibGljS2V5OiBjb25maWd1cmF0aW9uLnB1YmxpY0tleSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LmV4dGVybmFsX2xpbmtlZF9hY2NvdW50cy5maWx0ZXIoXG4gICAgICAoZWxlbWVudDogYW55KSA9PiBlbGVtZW50LmlzX2xpbmtlZCA9PT0gdHJ1ZVxuICAgICk7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWNjb3VudHM7XG4iLCJpbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi9hcGlcIjsgLy8gQXNzdW1pbmcgdGhpcyBmdW5jdGlvbiBleGlzdHNcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWljcm9Hb2FsVG90YWwge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xuICBlbW9qaTogc3RyaW5nO1xuICB0b3RhbF90cmFuc2FjdGlvbnM6IG51bWJlcjtcbiAgbnVtYmVyX29mX3RyYW5zYWN0aW9uczogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hNaWNyb0dvYWxUb3RhbHMgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxuICBzdGFydF9kYXRlLFxuICBlbmRfZGF0ZSxcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgc3RhcnRfZGF0ZT86IHN0cmluZztcbiAgZW5kX2RhdGU/OiBzdHJpbmc7XG59KTogUHJvbWlzZTxBcnJheTxNaWNyb0dvYWxUb3RhbD4+ID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChzdGFydF9kYXRlICYmIGVuZF9kYXRlKSB7XG4gICAgICByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgICBlbmRwb2ludDogYC9nb2Fscy9taWNyb3MvdG90YWxzLz9zdGFydF9kYXRlPSR7c3RhcnRfZGF0ZX0mZW5kX2RhdGU9JHtlbmRfZGF0ZX1gLFxuICAgICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgICAgcHVibGljS2V5OiBjb25maWd1cmF0aW9uLnB1YmxpY0tleSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgICBlbmRwb2ludDogYC9nb2Fscy9taWNyb3MvdG90YWxzL2AsXG4gICAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgICAgICBwdWJsaWNLZXk6IGNvbmZpZ3VyYXRpb24ucHVibGljS2V5LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQnVkZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICh7XG4gIGNvbmZpZ3VyYXRpb24sXG4gIHN0YXJ0X2RhdGUsXG4gIGVuZF9kYXRlLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xuICBzdGFydF9kYXRlPzogc3RyaW5nO1xuICBlbmRfZGF0ZT86IHN0cmluZztcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChzdGFydF9kYXRlICYmIGVuZF9kYXRlKSB7XG4gICAgICByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgICBlbmRwb2ludDogYC9nb2Fscy9iYXRjaF9taWNyb3MvP3N0YXJ0X2RhdGU9JHtzdGFydF9kYXRlfSZlbmRfZGF0ZT0ke2VuZF9kYXRlfWAsXG4gICAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgICAgICBwdWJsaWNLZXk6IGNvbmZpZ3VyYXRpb24ucHVibGljS2V5LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICAgIGVuZHBvaW50OiBgL2dvYWxzL2JhdGNoX21pY3Jvcy9gLFxuICAgICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgICAgcHVibGljS2V5OiBjb25maWd1cmF0aW9uLnB1YmxpY0tleSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuXG5cbmV4cG9ydCBjb25zdCBmZXRjaE1pY3Jvc1BlcmNlbnRpbGUgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxuICBzdGFydF9kYXRlLFxuICBlbmRfZGF0ZSxcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgc3RhcnRfZGF0ZT86IHN0cmluZztcbiAgZW5kX2RhdGU/OiBzdHJpbmc7XG59KSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHJlcztcbiAgICBpZiAoc3RhcnRfZGF0ZSAmJiBlbmRfZGF0ZSkge1xuICAgICAgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKHtcbiAgICAgICAgZW5kcG9pbnQ6IGAvZ29hbHMvbWljcm9zL3BlcmNlbnRpbGVzLz9zdGFydF9kYXRlPSR7c3RhcnRfZGF0ZX0mZW5kX2RhdGU9JHtlbmRfZGF0ZX1gLFxuICAgICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgICAgcHVibGljS2V5OiBjb25maWd1cmF0aW9uLnB1YmxpY0tleSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgICBlbmRwb2ludDogYC9nb2Fscy9taWNyb3MvcGVyY2VudGlsZXMvYCxcbiAgICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgICAgIHB1YmxpY0tleTogY29uZmlndXJhdGlvbi5wdWJsaWNLZXksXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcbiIsImltcG9ydCB1c2VDYXNoZmxvd1ZhcmlhYmxlc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvY2FzaEZsb3dTdG9yZVwiO1xuaW1wb3J0IHVzZUN1cnJlbmN5U2V0dGluZ3NTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2N1cnJlbmN5U2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHVzZUluc2lnaHRzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9pbnNpZ2h0c1N0b3JlXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEZpQXJyb3dEb3duUmlnaHQsXG4gIEZpQXJyb3dVcFJpZ2h0LFxuICBGaUNoZXZyb25SaWdodCxcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBBbmltYXRlZE51bWJlciBmcm9tIFwiLi9BbmltYXRlZE51bWJlclwiO1xuaW1wb3J0IFBlcmNlbnRhZ2VJdGVtIGZyb20gXCIuL1BlcmNlbnRhZ2VJdGVtXCI7XG5cbmludGVyZmFjZSBDYXNoRmxvd1BpZUNoYXJ0UHJvcHMge1xuICBkaW1lbnNpb25zOiBudW1iZXI7XG4gIGRvdWdobnV0VGhpY2tuZXNzOiBudW1iZXI7XG4gIHZhbHVlczoge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlcjtcbiAgICBtb25leUluOiBudW1iZXI7XG4gICAgbW9uZXlPdXQ6IG51bWJlcjtcbiAgfTtcbiAgcGVyY2VudGFnZUNoYW5nZTogbnVtYmVyO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IENhc2hGbG93UGllQ2hhcnQ6IFJlYWN0LkZDPENhc2hGbG93UGllQ2hhcnRQcm9wcz4gPSAoe1xuICBkaW1lbnNpb25zLFxuICBkb3VnaG51dFRoaWNrbmVzcyxcbiAgdmFsdWVzLFxuICBwZXJjZW50YWdlQ2hhbmdlLFxuICBpc0xvYWRpbmcsXG59KSA9PiB7XG4gIGxldCB7IG1vbmV5SW4sIG1vbmV5T3V0IH0gPSB2YWx1ZXM7XG5cbiAgY29uc3QgZW1wdHlWYWx1cyA9IHsgbW9uZXlJbkVtcHR5OiAxMDAwMDAsIG1vbmV5T3V0RW1wdHk6IDMwMDAwIH07XG4gIGNvbnN0IHRvdGFsRW1wdHkgPSBlbXB0eVZhbHVzLm1vbmV5SW5FbXB0eSArIGVtcHR5VmFsdXMubW9uZXlPdXRFbXB0eTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB0b3RhbCA9IG1vbmV5SW4gKyBtb25leU91dDtcbiAgY29uc3QgbW9uZXlPdXRQZXJjZW50YWdlID1cbiAgICB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKChtb25leU91dCAvIHRvdGFsKSAqIDEwMCkudG9GaXhlZCgxKSA6IDA7XG4gIGNvbnN0IG1vbmV5SW5QZXJjZW50YWdlID1cbiAgICB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKChtb25leUluIC8gdG90YWwpICogMTAwKS50b0ZpeGVkKDEpIDogMDtcbiAgY29uc3QgcmFkaXVzID0gZGltZW5zaW9ucyAvIDI7XG4gIGNvbnN0IHN0cm9rZVdpZHRoID0gZG91Z2hudXRUaGlja25lc3M7XG4gIGNvbnN0IG5vcm1hbGl6ZWRSYWRpdXMgPSByYWRpdXMgLSBzdHJva2VXaWR0aCAqIDI7XG5cbiAgbGV0IGN1bXVsYXRpdmVQZXJjZW50YWdlID0gMDtcbiAgY29uc3QgY3VycmVuY3lTdG9yZSA9IHVzZUN1cnJlbmN5U2V0dGluZ3NTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBjYXNoZmxvd1ZhcmlhYmxlcyA9XG4gICAgdXNlQ2FzaGZsb3dWYXJpYWJsZXNTdG9yZS5nZXRTdGF0ZSgpLmNhc2hmbG93VmFyaWFibGVzO1xuICBjb25zdCBpbnNpZ2h0c1N0b3JlU3RhdGUgPSB1c2VJbnNpZ2h0c1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUpO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBjb25zdCBhbmltYXRpb25TdHlsZXMgPSBgXG4gICAgICAgIEBrZXlmcmFtZXMgc21vb3RoUm90YXRlIHtcbiAgICAgICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jYXJkIHB0LTUgcm91bmRlZC1sZyBwci0yLjUgZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cbiAgICAgICAgPHN0eWxlPnthbmltYXRpb25TdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHBsLTMuNVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5DYXNoZmxvdzwvaDI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0cmFuc2Zvcm06IFwic2NhbGUoMS4yNSlcIiwgbWFyZ2luTGVmdDogXCIwLjJlbVwiIH19PlxuICAgICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IHNpemU9XCIwLjYyNXJlbVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICB7LypUT0RPOiB1cGRhdGUgdGhpcyBzZWN0aW9uIHRvIHRha2UgdGhlIDcwJSBhbmQgMzAlICovfVxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGhlaWdodD17ZGltZW5zaW9uc31cbiAgICAgICAgICAgIHdpZHRoPXtkaW1lbnNpb25zfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBcInNtb290aFJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGVcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgIGlkPVwibW9uZXlJbkdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInJvdGF0ZSg3MC4xOClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMjAlXCIgc3RvcENvbG9yPVwiIzY2YmU1ZlwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiM0N2E5M2VcIiAvPlxuICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cmFkaXVzfSwgJHtyYWRpdXN9KWB9PlxuICAgICAgICAgICAgICB7KFxuICAgICAgICAgICAgICAgIFtcIm1vbmV5SW5FbXB0eVwiLCBcIm1vbmV5T3V0RW1wdHlcIl0gYXMgQXJyYXk8XG4gICAgICAgICAgICAgICAgICBrZXlvZiB0eXBlb2YgZW1wdHlWYWx1c1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKS5tYXAoKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IChlbXB0eVZhbHVzW3R5cGVdIC8gdG90YWxFbXB0eSkgKiAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0eXBlID09PSBcIm1vbmV5SW5FbXB0eVwiID8gXCIjZTBlMGUwXCIgOiBcIiNmMmYyZjJcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9XG4gICAgICAgICAgICAgICAgICBub3JtYWxpemVkUmFkaXVzICpcbiAgICAgICAgICAgICAgICAgIE1hdGguY29zKCgyICogTWF0aC5QSSAqIGN1bXVsYXRpdmVQZXJjZW50YWdlKSAvIDEwMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRZID1cbiAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgICAgICAgTWF0aC5zaW4oKDIgKiBNYXRoLlBJICogY3VtdWxhdGl2ZVBlcmNlbnRhZ2UpIC8gMTAwKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFggPVxuICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgICAgICBNYXRoLmNvcyhcbiAgICAgICAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgcGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFkgPVxuICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgICAgICBNYXRoLnNpbihcbiAgICAgICAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgcGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGFyZ2VBcmNGbGFnID0gcGVyY2VudGFnZSA+IDUwID8gMSA6IDA7XG5cbiAgICAgICAgICAgICAgICBjdW11bGF0aXZlUGVyY2VudGFnZSArPSBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGQ9e2BNICR7c3RhcnRYfSAke3N0YXJ0WX0gQSAke25vcm1hbGl6ZWRSYWRpdXN9ICR7bm9ybWFsaXplZFJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30gMSAke2VuZFh9ICR7ZW5kWX1gfVxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT17Y29sb3J9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtc3RhcnQgbXQtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtc2tpbi1uZXV0cmFsMlwiPlxuICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVyIHRhcmdldD17MH0gZHVyYXRpb249ezUwMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzdXBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJzdXBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTRweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3lTdG9yZS5jdXJyZW5jeVN5bWJvbCA/PyBcIlwifVxuICAgICAgICAgICAgICAgICAgPC9zdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSBmb250LW1lZGl1bSB0cmFja2luZy1sb25nZXN0X3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIHtcIlRvdGFsIGNhc2hmbG93XCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnQgbXQtNVwiPlxuICAgICAgICAgICAgICB7LyogRW1wdHkgUGVyY2VudGFnZUl0ZW0gKi99XG4gICAgICAgICAgICAgIDxQZXJjZW50YWdlSXRlbSBjb2xvcj1cIiMyNjc2QjhcIiBwZXJjZW50YWdlPXswfSBsYWJlbD1cIk1vbmV5IGluXCIgLz5cbiAgICAgICAgICAgICAgey8qIEVtcHR5IFBlcmNlbnRhZ2VJdGVtICovfVxuICAgICAgICAgICAgICA8UGVyY2VudGFnZUl0ZW1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMwMDlGRENcIlxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9ezB9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNb25leSBvdXRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlbmRlciBhbiBlbXB0eSBjaGFydCBpZiBib3RoIG1vbmV5SW4gYW5kIG1vbmV5T3V0IGFyZSB6ZXJvXG4gIGlmICh0b3RhbCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1jYXJkIHB0LTUgcm91bmRlZC1sZyBwci0yLjUgZmxleCBmbGV4LWNvbCB3LWZ1bGxcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIG5hdmlnYXRlKFxuICAgICAgICAgICAgYC9jYXNoZmxvdz9zdGFydERhdGU9JHtmb3JtYXQoXG4gICAgICAgICAgICAgIGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c1N0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgXCJ5eXl5LU1NLWRkXCJcbiAgICAgICAgICAgICl9JmVuZERhdGU9JHtmb3JtYXQoXG4gICAgICAgICAgICAgIGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c0VuZERhdGUsXG4gICAgICAgICAgICAgIFwieXl5eS1NTS1kZFwiXG4gICAgICAgICAgICApfSZhY2NvdW50TmFtZT0ke2Nhc2hmbG93VmFyaWFibGVzLmFjY291bnROYW1lfSZkYXRlRmlsdGVyPSR7XG4gICAgICAgICAgICAgIGNhc2hmbG93VmFyaWFibGVzLmRhdGVGaWx0ZXJcbiAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBwbC0zLjVcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1jdXN0b20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+Q2FzaGZsb3c8L2gyPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInNjYWxlKDEuMjUpXCIsIG1hcmdpbkxlZnQ6IFwiMC4yZW1cIiB9fT5cbiAgICAgICAgICAgIDxGaUNoZXZyb25SaWdodCBzaXplPVwiMC42MjVyZW1cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgey8qVE9ETzogdXBkYXRlIHRoaXMgc2VjdGlvbiB0byB0YWtlIHRoZSA3MCUgYW5kIDMwJSAqL31cbiAgICAgICAgICA8c3ZnIGhlaWdodD17ZGltZW5zaW9uc30gd2lkdGg9e2RpbWVuc2lvbnN9PlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgIGlkPVwibW9uZXlJbkdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInJvdGF0ZSg3MC4xOClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMjAlXCIgc3RvcENvbG9yPVwiIzY2YmU1ZlwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiM0N2E5M2VcIiAvPlxuICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cmFkaXVzfSwgJHtyYWRpdXN9KWB9PlxuICAgICAgICAgICAgICB7KFxuICAgICAgICAgICAgICAgIFtcIm1vbmV5SW5FbXB0eVwiLCBcIm1vbmV5T3V0RW1wdHlcIl0gYXMgQXJyYXk8XG4gICAgICAgICAgICAgICAgICBrZXlvZiB0eXBlb2YgZW1wdHlWYWx1c1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKS5tYXAoKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IChlbXB0eVZhbHVzW3R5cGVdIC8gdG90YWxFbXB0eSkgKiAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0eXBlID09PSBcIm1vbmV5SW5FbXB0eVwiID8gXCIjZTBlMGUwXCIgOiBcIiNmMmYyZjJcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9XG4gICAgICAgICAgICAgICAgICBub3JtYWxpemVkUmFkaXVzICpcbiAgICAgICAgICAgICAgICAgIE1hdGguY29zKCgyICogTWF0aC5QSSAqIGN1bXVsYXRpdmVQZXJjZW50YWdlKSAvIDEwMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRZID1cbiAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgICAgICAgTWF0aC5zaW4oKDIgKiBNYXRoLlBJICogY3VtdWxhdGl2ZVBlcmNlbnRhZ2UpIC8gMTAwKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFggPVxuICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgICAgICBNYXRoLmNvcyhcbiAgICAgICAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgcGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFkgPVxuICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgICAgICBNYXRoLnNpbihcbiAgICAgICAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgcGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGFyZ2VBcmNGbGFnID0gcGVyY2VudGFnZSA+IDUwID8gMSA6IDA7XG5cbiAgICAgICAgICAgICAgICBjdW11bGF0aXZlUGVyY2VudGFnZSArPSBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGQ9e2BNICR7c3RhcnRYfSAke3N0YXJ0WX0gQSAke25vcm1hbGl6ZWRSYWRpdXN9ICR7bm9ybWFsaXplZFJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30gMSAke2VuZFh9ICR7ZW5kWX1gfVxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT17Y29sb3J9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtc3RhcnQgbXQtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtc2tpbi1uZXV0cmFsMlwiPlxuICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVyIHRhcmdldD17MH0gZHVyYXRpb249ezUwMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzdXBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJzdXBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTRweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3lTdG9yZS5jdXJyZW5jeVN5bWJvbCA/PyBcIlwifVxuICAgICAgICAgICAgICAgICAgPC9zdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSBmb250LW1lZGl1bSB0cmFja2luZy1sb25nZXN0X3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIHtcIlRvdGFsIGNhc2hmbG93XCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnQgbXQtNVwiPlxuICAgICAgICAgICAgICB7LyogRW1wdHkgUGVyY2VudGFnZUl0ZW0gKi99XG4gICAgICAgICAgICAgIDxQZXJjZW50YWdlSXRlbSBjb2xvcj1cIiMyNjc2QjhcIiBwZXJjZW50YWdlPXswfSBsYWJlbD1cIk1vbmV5IGluXCIgLz5cbiAgICAgICAgICAgICAgey8qIEVtcHR5IFBlcmNlbnRhZ2VJdGVtICovfVxuICAgICAgICAgICAgICA8UGVyY2VudGFnZUl0ZW1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMwMDlGRENcIlxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9ezB9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNb25leSBvdXRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWNhcmQgcHQtNSByb3VuZGVkLWxnIHByLTIuNSBmbGV4IGZsZXgtY29sIHctZnVsbFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBuYXZpZ2F0ZShcbiAgICAgICAgICBgL2Nhc2hmbG93P3N0YXJ0RGF0ZT0ke2Zvcm1hdChcbiAgICAgICAgICAgIGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c1N0YXJ0RGF0ZSxcbiAgICAgICAgICAgIFwieXl5eS1NTS1kZFwiXG4gICAgICAgICAgKX0mZW5kRGF0ZT0ke2Zvcm1hdChcbiAgICAgICAgICAgIGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c0VuZERhdGUsXG4gICAgICAgICAgICBcInl5eXktTU0tZGRcIlxuICAgICAgICAgICl9JmFjY291bnROYW1lPSR7Y2FzaGZsb3dWYXJpYWJsZXMuYWNjb3VudE5hbWV9JmRhdGVGaWx0ZXI9JHtcbiAgICAgICAgICAgIGNhc2hmbG93VmFyaWFibGVzLmRhdGVGaWx0ZXJcbiAgICAgICAgICB9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHBsLTMuNVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1jdXN0b20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+Q2FzaGZsb3c8L2gyPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRyYW5zZm9ybTogXCJzY2FsZSgxLjI1KVwiLCBtYXJnaW5MZWZ0OiBcIjAuMmVtXCIgfX0+XG4gICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IHNpemU9XCIwLjYyNXJlbVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgPHN2ZyBoZWlnaHQ9e2RpbWVuc2lvbnN9IHdpZHRoPXtkaW1lbnNpb25zfT5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICBpZD1cIm1vbmV5SW5HcmFkaWVudFwiXG4gICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwicm90YXRlKDcwLjE4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjIwJVwiIHN0b3BDb2xvcj1cIiM2NmJlNWZcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiIzQ3YTkzZVwiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyYWRpdXN9LCAke3JhZGl1c30pYH0+XG4gICAgICAgICAgICB7W1wibW9uZXlJblwiLCBcIm1vbmV5T3V0XCJdLm1hcCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICh2YWx1ZXNbdHlwZV0gLyB0b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdHlwZSA9PT0gXCJtb25leUluXCIgPyBcIiM0MTZmMWZcIiA6IFwiI2ZlYmIxNFwiO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgICAgTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogY3VtdWxhdGl2ZVBlcmNlbnRhZ2UpIC8gMTAwKTtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnRZID1cbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUmFkaXVzICpcbiAgICAgICAgICAgICAgICBNYXRoLnNpbigoMiAqIE1hdGguUEkgKiBjdW11bGF0aXZlUGVyY2VudGFnZSkgLyAxMDApO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGVuZFggPVxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgICAgIE1hdGguY29zKFxuICAgICAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgcGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uc3QgZW5kWSA9XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgICAgTWF0aC5zaW4oXG4gICAgICAgICAgICAgICAgICAoMiAqIE1hdGguUEkgKiAoY3VtdWxhdGl2ZVBlcmNlbnRhZ2UgKyBwZXJjZW50YWdlKSkgLyAxMDBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGxhcmdlQXJjRmxhZyA9IHBlcmNlbnRhZ2UgPiA1MCA/IDEgOiAwO1xuXG4gICAgICAgICAgICAgIGN1bXVsYXRpdmVQZXJjZW50YWdlICs9IHBlcmNlbnRhZ2U7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGQ9e2BNICR7c3RhcnRYfSAke3N0YXJ0WX0gQSAke25vcm1hbGl6ZWRSYWRpdXN9ICR7bm9ybWFsaXplZFJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30gMSAke2VuZFh9ICR7ZW5kWX1gfVxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGZvcmVpZ25PYmplY3RcbiAgICAgICAgICAgICAgeD17LXJhZGl1c31cbiAgICAgICAgICAgICAgeT17LXJhZGl1c31cbiAgICAgICAgICAgICAgd2lkdGg9e3JhZGl1cyAqIDJ9XG4gICAgICAgICAgICAgIGhlaWdodD17cmFkaXVzICogMn1cbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0QxRDVEQlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNTY1NjU2XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwZXJjZW50YWdlQ2hhbmdlID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8RmlBcnJvd1VwUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8RmlBcnJvd0Rvd25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC1zIHRyYWNraW5nLXdpZGUgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjRweFwiLCBjb2xvcjogXCIjNTY1NjU2XCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeyhNYXRoLnJhbmRvbSgpICogMjAgKyA0MCkudG9GaXhlZCgxKX0lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQteHh4cyB0cmFja2luZy1sb25nZXN0X3RleHQgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNTY1NjU2XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5jaGFuZ2UgdGhpcyBtb250aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLXN0YXJ0IG10LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbS1zdGFydFwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtcmlnaHQtNiAtdG9wLTIgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y3VycmVuY3lTdG9yZS5jdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LXNraW4tbmV1dHJhbDJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiB7Y2hlY2tOQU4obW9uZXlJbiArIG1vbmV5T3V0KS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpfSAqL31cbiAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e21vbmV5SW4gKyBtb25leU91dCA/PyAwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzdXBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJzdXBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTRweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3lTdG9yZS5jdXJyZW5jeVN5bWJvbCA/PyBcIlwifVxuICAgICAgICAgICAgICAgICAgPC9zdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1tZWRpdW0gdHJhY2tpbmctbG9uZ2VzdF90ZXh0XCI+XG4gICAgICAgICAgICAgICAge1wiVG90YWwgY2FzaGZsb3dcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnQgbXQtNVwiPlxuICAgICAgICAgICAgPFBlcmNlbnRhZ2VJdGVtXG4gICAgICAgICAgICAgIGNvbG9yPVwiIzI2NzZCOFwiXG4gICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e051bWJlcihtb25leUluUGVyY2VudGFnZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTW9uZXkgaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQZXJjZW50YWdlSXRlbVxuICAgICAgICAgICAgICBjb2xvcj1cIiMwMDlGRENcIlxuICAgICAgICAgICAgICBwZXJjZW50YWdlPXtOdW1iZXIobW9uZXlPdXRQZXJjZW50YWdlKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJNb25leSBvdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2hGbG93UGllQ2hhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBHcmFwaExlZ2VuZFByb3BzIHtcbiAgY29sb3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaXNHcmFkaWVudD86IGJvb2xlYW47XG59XG5cbmNvbnN0IEdyYXBoTGVnZW5kOiBSZWFjdC5GQzxHcmFwaExlZ2VuZFByb3BzPiA9ICh7XG4gIGNvbG9yLFxuICBsYWJlbCxcbiAgaXNHcmFkaWVudCA9IGZhbHNlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBpc0dyYWRpZW50ID8gYHVybCgke2NvbG9yfSlgIDogY29sb3IsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIHdpZHRoOiAxMyxcbiAgICAgICAgICBoZWlnaHQ6IDEzLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgICB9fVxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tYmFzZVwiPntsYWJlbH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoTGVnZW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1hY3JvQnVkZ2V0IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21hY3JvX2J1ZGdldC5zdmdcIjtcblxuaW50ZXJmYWNlIE1hY3JvUGllQ2hhcnRQcm9wcyB7XG4gIGRpbWVuc2lvbnM6IG51bWJlcjtcbiAgZG91Z2hudXRUaGlja25lc3M6IG51bWJlcjtcbiAgdmFsdWVzOiB7XG4gICAgd2FudHM6IG51bWJlcjtcbiAgICBlc3NlbnRpYWxzOiBudW1iZXI7XG4gICAgc2F2aW5nczogbnVtYmVyO1xuICAgIHVuYWxsb2NhdGVkOiBudW1iZXI7XG4gIH07XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgTWFjcm9QaWVDaGFydDogUmVhY3QuRkM8TWFjcm9QaWVDaGFydFByb3BzPiA9ICh7XG4gIGRpbWVuc2lvbnMsXG4gIGRvdWdobnV0VGhpY2tuZXNzLFxuICB2YWx1ZXMsXG4gIGlzTG9hZGluZyxcbn0pID0+IHtcbiAgY29uc3QgeyB3YW50cywgZXNzZW50aWFscywgc2F2aW5ncywgdW5hbGxvY2F0ZWQgfSA9IHZhbHVlcztcbiAgY29uc3QgdG90YWwgPSB3YW50cyArIGVzc2VudGlhbHMgKyBzYXZpbmdzICsgdW5hbGxvY2F0ZWQ7XG5cbiAgY29uc3QgcmFkaXVzID0gZGltZW5zaW9ucyAvIDI7XG4gIGNvbnN0IHN0cm9rZVdpZHRoID0gZG91Z2hudXRUaGlja25lc3M7XG4gIGNvbnN0IG5vcm1hbGl6ZWRSYWRpdXMgPSByYWRpdXMgLSBzdHJva2VXaWR0aCAqIDI7XG4gIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSBub3JtYWxpemVkUmFkaXVzICogMiAqIE1hdGguUEk7XG5cbiAgY29uc3QgZW1wdHlJdGVtcyA9IFtcbiAgICB7IHBlcmNlbnRhZ2U6IDcwLCBjb2xvcjogXCIjZTBlMGUwXCIgfSxcbiAgICB7IHBlcmNlbnRhZ2U6IDMwLCBjb2xvcjogXCIjZjJmMmYyXCIgfSxcbiAgXTtcblxuICBsZXQgY3VtdWxhdGl2ZVBlcmNlbnRhZ2UgPSAwO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBjb25zdCBhbmltYXRpb25TdHlsZXMgPSBgXG4gICAgICAgIEBrZXlmcmFtZXMgc21vb3RoUm90YXRlIHtcbiAgICAgICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zfVxuICAgICAgICAgIHdpZHRoPXtkaW1lbnNpb25zfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBhbmltYXRpb246IFwic21vb3RoUm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cmFkaXVzfSwgJHtyYWRpdXN9KWB9PlxuICAgICAgICAgICAge2VtcHR5SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5wZXJjZW50YWdlID09PSAwKSByZXR1cm4gbnVsbDsgLy8gU2tpcCByZW5kZXJpbmcgZm9yIDAlIHNlZ21lbnRzXG5cbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnRYID1cbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUmFkaXVzICpcbiAgICAgICAgICAgICAgICBNYXRoLmNvcygoMiAqIE1hdGguUEkgKiBjdW11bGF0aXZlUGVyY2VudGFnZSkgLyAxMDApO1xuICAgICAgICAgICAgICBjb25zdCBzdGFydFkgPVxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgICAgIE1hdGguc2luKCgyICogTWF0aC5QSSAqIGN1bXVsYXRpdmVQZXJjZW50YWdlKSAvIDEwMCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgZW5kWCA9XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgICAgTWF0aC5jb3MoXG4gICAgICAgICAgICAgICAgICAoMiAqIE1hdGguUEkgKiAoY3VtdWxhdGl2ZVBlcmNlbnRhZ2UgKyBpdGVtLnBlcmNlbnRhZ2UpKSAvIDEwMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZFkgPVxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgICAgIE1hdGguc2luKFxuICAgICAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgaXRlbS5wZXJjZW50YWdlKSkgLyAxMDBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGxhcmdlQXJjRmxhZyA9IGl0ZW0ucGVyY2VudGFnZSA+IDUwID8gMSA6IDA7XG5cbiAgICAgICAgICAgICAgY3VtdWxhdGl2ZVBlcmNlbnRhZ2UgKz0gaXRlbS5wZXJjZW50YWdlO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBkPXtgTSAke3N0YXJ0WH0gJHtzdGFydFl9IEEgJHtub3JtYWxpemVkUmFkaXVzfSAke25vcm1hbGl6ZWRSYWRpdXN9IDAgJHtsYXJnZUFyY0ZsYWd9IDEgJHtlbmRYfSAke2VuZFl9YH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT17aXRlbS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzdHlsZT57YW5pbWF0aW9uU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gVXBkYXRlOiBIYW5kbGUgYWxsIHZhbHVlcyBiZWluZyB6ZXJvIGJ5IGRyYXdpbmcgYSBncmV5IGRvdWdobnV0XG4gIGlmICh0b3RhbCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3ZnIGhlaWdodD17ZGltZW5zaW9uc30gd2lkdGg9e2RpbWVuc2lvbnN9PlxuICAgICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyYWRpdXN9LCAke3JhZGl1c30pYH0+XG4gICAgICAgICAge2VtcHR5SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGVyY2VudGFnZSA9PT0gMCkgcmV0dXJuIG51bGw7IC8vIFNraXAgcmVuZGVyaW5nIGZvciAwJSBzZWdtZW50c1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydFggPVxuICAgICAgICAgICAgICBub3JtYWxpemVkUmFkaXVzICpcbiAgICAgICAgICAgICAgTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogY3VtdWxhdGl2ZVBlcmNlbnRhZ2UpIC8gMTAwKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9XG4gICAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgICBNYXRoLnNpbigoMiAqIE1hdGguUEkgKiBjdW11bGF0aXZlUGVyY2VudGFnZSkgLyAxMDApO1xuXG4gICAgICAgICAgICBjb25zdCBlbmRYID1cbiAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgIE1hdGguY29zKFxuICAgICAgICAgICAgICAgICgyICogTWF0aC5QSSAqIChjdW11bGF0aXZlUGVyY2VudGFnZSArIGl0ZW0ucGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBlbmRZID1cbiAgICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICAgIE1hdGguc2luKFxuICAgICAgICAgICAgICAgICgyICogTWF0aC5QSSAqIChjdW11bGF0aXZlUGVyY2VudGFnZSArIGl0ZW0ucGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhcmdlQXJjRmxhZyA9IGl0ZW0ucGVyY2VudGFnZSA+IDUwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGN1bXVsYXRpdmVQZXJjZW50YWdlICs9IGl0ZW0ucGVyY2VudGFnZTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGQ9e2BNICR7c3RhcnRYfSAke3N0YXJ0WX0gQSAke25vcm1hbGl6ZWRSYWRpdXN9ICR7bm9ybWFsaXplZFJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30gMSAke2VuZFh9ICR7ZW5kWX1gfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9e2l0ZW0uY29sb3J9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxmb3JlaWduT2JqZWN0XG4gICAgICAgICAgICB4PXstcmFkaXVzfVxuICAgICAgICAgICAgeT17LXJhZGl1c31cbiAgICAgICAgICAgIHdpZHRoPXtyYWRpdXMgKiAyfVxuICAgICAgICAgICAgaGVpZ2h0PXtyYWRpdXMgKiAyfVxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXttYWNyb0J1ZGdldH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14eHh4eHMgdGV4dC1za2luLXN1YnRpdGxlIHRyYWNraW5nLWxvbmdlc3RfdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkJ1ZGdldCBzcHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JlaWduT2JqZWN0PlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaXRlbXMgPSBbXG4gICAgeyBwZXJjZW50YWdlOiAodW5hbGxvY2F0ZWQgLyB0b3RhbCkgKiAxMDAsIGNvbG9yOiBcIiNlN2U3ZTdcIiB9LFxuICAgIHsgcGVyY2VudGFnZTogKHNhdmluZ3MgLyB0b3RhbCkgKiAxMDAsIGNvbG9yOiBcIiMwMzZBQjNcIiB9LFxuICAgIHsgcGVyY2VudGFnZTogKHdhbnRzIC8gdG90YWwpICogMTAwLCBjb2xvcjogXCIjMzU0QUE2XCIgfSxcbiAgICB7IHBlcmNlbnRhZ2U6IChlc3NlbnRpYWxzIC8gdG90YWwpICogMTAwLCBjb2xvcjogXCIjMDA5RkRDXCIgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgaGVpZ2h0PXtkaW1lbnNpb25zfSB3aWR0aD17ZGltZW5zaW9uc30+XG4gICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyYWRpdXN9LCAke3JhZGl1c30pYH0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucGVyY2VudGFnZSA9PT0gMCkgcmV0dXJuIG51bGw7IC8vIFNraXAgcmVuZGVyaW5nIGZvciAwJSBzZWdtZW50c1xuXG4gICAgICAgICAgY29uc3Qgc3RhcnRYID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogY3VtdWxhdGl2ZVBlcmNlbnRhZ2UpIC8gMTAwKTtcbiAgICAgICAgICBjb25zdCBzdGFydFkgPVxuICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICBNYXRoLnNpbigoMiAqIE1hdGguUEkgKiBjdW11bGF0aXZlUGVyY2VudGFnZSkgLyAxMDApO1xuXG4gICAgICAgICAgY29uc3QgZW5kWCA9XG4gICAgICAgICAgICBub3JtYWxpemVkUmFkaXVzICpcbiAgICAgICAgICAgIE1hdGguY29zKFxuICAgICAgICAgICAgICAoMiAqIE1hdGguUEkgKiAoY3VtdWxhdGl2ZVBlcmNlbnRhZ2UgKyBpdGVtLnBlcmNlbnRhZ2UpKSAvIDEwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBlbmRZID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgTWF0aC5zaW4oXG4gICAgICAgICAgICAgICgyICogTWF0aC5QSSAqIChjdW11bGF0aXZlUGVyY2VudGFnZSArIGl0ZW0ucGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgbGFyZ2VBcmNGbGFnID0gaXRlbS5wZXJjZW50YWdlID4gNTAgPyAxIDogMDtcblxuICAgICAgICAgIGN1bXVsYXRpdmVQZXJjZW50YWdlICs9IGl0ZW0ucGVyY2VudGFnZTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkPXtgTSAke3N0YXJ0WH0gJHtzdGFydFl9IEEgJHtub3JtYWxpemVkUmFkaXVzfSAke25vcm1hbGl6ZWRSYWRpdXN9IDAgJHtsYXJnZUFyY0ZsYWd9IDEgJHtlbmRYfSAke2VuZFl9YH1cbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2U9e2l0ZW0uY29sb3J9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxmb3JlaWduT2JqZWN0XG4gICAgICAgICAgeD17LXJhZGl1c31cbiAgICAgICAgICB5PXstcmFkaXVzfVxuICAgICAgICAgIHdpZHRoPXtyYWRpdXMgKiAyfVxuICAgICAgICAgIGhlaWdodD17cmFkaXVzICogMn1cbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17bWFjcm9CdWRnZXR9XG4gICAgICAgICAgICAgIGFsdD1cImljb25cIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXh4eHh4cyB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctbG9uZ2VzdF90ZXh0XCI+XG4gICAgICAgICAgICAgIDxzcGFuPkJ1ZGdldCBzcHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JlaWduT2JqZWN0PlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9QaWVDaGFydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYW5kb21FeHBlbmRpdHVyZUNvbXBhcmlzb25DYXJkIGZyb20gXCIuL2luc2lnaHRzL1JhbmRvbUNvbXBhcmVDb21wYXJpc29uXCI7XG5cbmludGVyZmFjZSBNYWNyb1BpZUNoYXJ0TGVnZW5kUHJvcHMge1xuICBjb2xvcjogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcGVyY2VudGFnZUNoYW5nZTogbnVtYmVyO1xuICBzaG93Q29tcGFyaXNvbj86IGJvb2xlYW47XG4gIHNob3dVbmFsbG9jYXRlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IE1hY3JvUGllQ2hhcnRMZWdlbmQ6IFJlYWN0LkZDPE1hY3JvUGllQ2hhcnRMZWdlbmRQcm9wcz4gPSAoe1xuICBjb2xvcixcbiAgdGV4dCxcbiAgcGVyY2VudGFnZSxcbiAgcGVyY2VudGFnZUNoYW5nZSA9IDAsXG4gIHNob3dVbmFsbG9jYXRlZCA9IHRydWUsXG4gIHNob3dDb21wYXJpc29uID0gZmFsc2UsXG59KSA9PiB7XG4gIGlmICghc2hvd1VuYWxsb2NhdGVkKSB7XG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBzcGFjZS14LTEuNVwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1za2luLW5ldXRyYWwgaC0zIHctM1wiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogY29sb3IsXG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXhzIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLWxvbmdlc3RfdGV4dFwiPlxuICAgICAgICB7dGV4dH0gKHtwZXJjZW50YWdlfSUpe1wiIFwifVxuICAgICAgICB7cGVyY2VudGFnZSAhPT0gMCAmJiBzaG93Q29tcGFyaXNvbiA/IChcbiAgICAgICAgICA8UmFuZG9tRXhwZW5kaXR1cmVDb21wYXJpc29uQ2FyZCBwZXJjZW50YWdlPXtwZXJjZW50YWdlQ2hhbmdlID8/IDB9IC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWNyb1BpZUNoYXJ0TGVnZW5kO1xuIiwiaW1wb3J0IHsgY2hlY2tOQU4gfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWNyb1BpZUNoYXJ0IGZyb20gXCIuL01hY3JvUGllQ2hhcnRcIjtcbmltcG9ydCBNYWNyb1BpZUNoYXJ0TGVnZW5kIGZyb20gXCIuL01hY3JvUGllQ2hhcnRMZWdlbmRcIjtcblxuaW50ZXJmYWNlIFZhbHVlcyB7XG4gIHdhbnRzOiBudW1iZXI7XG4gIGVzc2VudGlhbHM6IG51bWJlcjtcbiAgc2F2aW5nczogbnVtYmVyO1xuICB1bmFsbG9jYXRlZDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTWFjcm9QaWVDaGFydFdpdGhMZWdlbmRQcm9wcyB7XG4gIGRpbWVuc2lvbnM6IG51bWJlcjtcbiAgZG91Z2hudXRUaGlja25lc3M6IG51bWJlcjtcbiAgdmFsdWVzOiBWYWx1ZXM7XG4gIHBlZXJWYWx1ZXM/OiBWYWx1ZXM7XG4gIHNob3dDb21wYXJpc29uPzogYm9vbGVhbjtcbiAgc2hvd1VuYWxsb2NhdGVkPzogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBNYWNyb1BpZUNoYXJ0V2l0aExlZ2VuZDogUmVhY3QuRkM8TWFjcm9QaWVDaGFydFdpdGhMZWdlbmRQcm9wcz4gPSAoe1xuICBkaW1lbnNpb25zLFxuICBkb3VnaG51dFRoaWNrbmVzcyxcbiAgdmFsdWVzLFxuICBwZWVyVmFsdWVzLFxuICBzaG93Q29tcGFyaXNvbixcbiAgc2hvd1VuYWxsb2NhdGVkLFxuICBpc0xvYWRpbmcsXG59KSA9PiB7XG4gIGNvbnN0IHRvdGFsID1cbiAgICB2YWx1ZXMud2FudHMgKyB2YWx1ZXMuZXNzZW50aWFscyArIHZhbHVlcy5zYXZpbmdzICsgdmFsdWVzLnVuYWxsb2NhdGVkO1xuXG4gIGxldCBwZXJjZW50YWdlcyA9IHtcbiAgICBlc3NlbnRpYWxzOiBNYXRoLnJvdW5kKCh2YWx1ZXMuZXNzZW50aWFscyAvIHRvdGFsKSAqIDEwMCksXG4gICAgd2FudHM6IE1hdGgucm91bmQoKHZhbHVlcy53YW50cyAvIHRvdGFsKSAqIDEwMCksXG4gICAgc2F2aW5nczogTWF0aC5yb3VuZCgodmFsdWVzLnNhdmluZ3MgLyB0b3RhbCkgKiAxMDApLFxuICAgIHVuYWxsb2NhdGVkOiBNYXRoLnJvdW5kKCh2YWx1ZXMudW5hbGxvY2F0ZWQgLyB0b3RhbCkgKiAxMDApLFxuICB9O1xuXG4gIGNvbnN0IHRvdGFsUGVyY2VudGFnZSA9XG4gICAgcGVyY2VudGFnZXMuZXNzZW50aWFscyArXG4gICAgcGVyY2VudGFnZXMud2FudHMgK1xuICAgIHBlcmNlbnRhZ2VzLnNhdmluZ3MgK1xuICAgIHBlcmNlbnRhZ2VzLnVuYWxsb2NhdGVkO1xuXG4gIGNvbnN0IHBlZXJQZXJjZW50YWdlRGlmZmVyZW5jZXMgPSB7XG4gICAgZXNzZW50aWFsczogY2FsY3VsYXRlUGVyY2VudGFnZURpZmZlcmVuY2UoXG4gICAgICB2YWx1ZXMuZXNzZW50aWFscyxcbiAgICAgIHBlZXJWYWx1ZXM/LmVzc2VudGlhbHNcbiAgICApLFxuICAgIHdhbnRzOiBjYWxjdWxhdGVQZXJjZW50YWdlRGlmZmVyZW5jZSh2YWx1ZXMud2FudHMsIHBlZXJWYWx1ZXM/LndhbnRzKSxcbiAgICBzYXZpbmdzOiBjYWxjdWxhdGVQZXJjZW50YWdlRGlmZmVyZW5jZSh2YWx1ZXMuc2F2aW5ncywgcGVlclZhbHVlcz8uc2F2aW5ncyksXG4gICAgdW5hbGxvY2F0ZWQ6IGNhbGN1bGF0ZVBlcmNlbnRhZ2VEaWZmZXJlbmNlKFxuICAgICAgdmFsdWVzLnVuYWxsb2NhdGVkLFxuICAgICAgcGVlclZhbHVlcz8udW5hbGxvY2F0ZWRcbiAgICApLFxuICB9O1xuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVBlcmNlbnRhZ2VEaWZmZXJlbmNlKHVzZXJWYWx1ZTogYW55LCBwZWVyVmFsdWU6IGFueSkge1xuICAgIGlmICgocGVlclZhbHVlID09PSAwIHx8IHBlZXJWYWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiB1c2VyVmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoKHBlZXJWYWx1ZSA9PT0gMCB8fCBwZWVyVmFsdWUgPT09IHVuZGVmaW5lZCkgJiYgdXNlclZhbHVlID4gMCkge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuICgodXNlclZhbHVlIC0gcGVlclZhbHVlKSAvIHBlZXJWYWx1ZSkgKiAxMDA7XG4gIH1cblxuICBpZiAodG90YWxQZXJjZW50YWdlICE9PSAxMDApIHtcbiAgICBjb25zdCBkaWZmID0gMTAwIC0gdG90YWxQZXJjZW50YWdlO1xuICAgIHBlcmNlbnRhZ2VzLnVuYWxsb2NhdGVkICs9IGRpZmY7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICA8TWFjcm9QaWVDaGFydFxuICAgICAgICBkaW1lbnNpb25zPXtkaW1lbnNpb25zfVxuICAgICAgICBkb3VnaG51dFRoaWNrbmVzcz17ZG91Z2hudXRUaGlja25lc3N9XG4gICAgICAgIHZhbHVlcz17dmFsdWVzfVxuICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMlwiPlxuICAgICAgICA8TWFjcm9QaWVDaGFydExlZ2VuZFxuICAgICAgICAgIGNvbG9yPVwiIzAwOUZEQ1wiXG4gICAgICAgICAgdGV4dD1cIkVzc2VudGlhbHNcIlxuICAgICAgICAgIHBlcmNlbnRhZ2U9e2NoZWNrTkFOKHBlcmNlbnRhZ2VzLmVzc2VudGlhbHMpfVxuICAgICAgICAgIHNob3dDb21wYXJpc29uPXtzaG93Q29tcGFyaXNvbn1cbiAgICAgICAgICBwZXJjZW50YWdlQ2hhbmdlPXtjaGVja05BTihcbiAgICAgICAgICAgIHBlZXJQZXJjZW50YWdlRGlmZmVyZW5jZXMuZXNzZW50aWFscy50b0ZpeGVkKDIpXG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1hY3JvUGllQ2hhcnRMZWdlbmRcbiAgICAgICAgICBjb2xvcj1cIiMzNTRBQTZcIlxuICAgICAgICAgIHRleHQ9XCJXYW50c1wiXG4gICAgICAgICAgcGVyY2VudGFnZT17Y2hlY2tOQU4ocGVyY2VudGFnZXMud2FudHMpfVxuICAgICAgICAgIHNob3dDb21wYXJpc29uPXtzaG93Q29tcGFyaXNvbn1cbiAgICAgICAgICBwZXJjZW50YWdlQ2hhbmdlPXtjaGVja05BTihcbiAgICAgICAgICAgIHBlZXJQZXJjZW50YWdlRGlmZmVyZW5jZXMud2FudHMudG9GaXhlZCgyKVxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8TWFjcm9QaWVDaGFydExlZ2VuZFxuICAgICAgICAgIGNvbG9yPVwiI2U1YTcxMVwiXG4gICAgICAgICAgdGV4dD1cIkRlYnQgcmVwYXltZW50XCJcbiAgICAgICAgICBwZXJjZW50YWdlPXtjaGVja05BTihwZXJjZW50YWdlcy5zYXZpbmdzKX1cbiAgICAgICAgICBzaG93Q29tcGFyaXNvbj17c2hvd0NvbXBhcmlzb259XG4gICAgICAgICAgcGVyY2VudGFnZUNoYW5nZT17Y2hlY2tOQU4oXG4gICAgICAgICAgICBwZWVyUGVyY2VudGFnZURpZmZlcmVuY2VzLnNhdmluZ3MudG9GaXhlZCgyKVxuICAgICAgICAgICl9XG4gICAgICAgIC8+ICovfVxuICAgICAgICA8TWFjcm9QaWVDaGFydExlZ2VuZFxuICAgICAgICAgIGNvbG9yPVwiI2U3ZTdlN1wiXG4gICAgICAgICAgdGV4dD1cIlVuYWxsb2NhdGVkXCJcbiAgICAgICAgICBwZXJjZW50YWdlPXtjaGVja05BTihwZXJjZW50YWdlcy51bmFsbG9jYXRlZCl9XG4gICAgICAgICAgc2hvd0NvbXBhcmlzb249e3Nob3dDb21wYXJpc29ufVxuICAgICAgICAgIHNob3dVbmFsbG9jYXRlZD17c2hvd1VuYWxsb2NhdGVkfVxuICAgICAgICAgIHBlcmNlbnRhZ2VDaGFuZ2U9e2NoZWNrTkFOKFxuICAgICAgICAgICAgcGVlclBlcmNlbnRhZ2VEaWZmZXJlbmNlcy51bmFsbG9jYXRlZC50b0ZpeGVkKDIpXG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9QaWVDaGFydFdpdGhMZWdlbmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5pbWF0ZWROdW1iZXIgZnJvbSBcIi4vQW5pbWF0ZWROdW1iZXJcIjtcblxuaW50ZXJmYWNlIFBlcmNlbnRhZ2VJdGVtUHJvcHMge1xuICBjb2xvcjogc3RyaW5nO1xuICBwZXJjZW50YWdlOiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBlcmNlbnRhZ2VJdGVtOiBSZWFjdC5GQzxQZXJjZW50YWdlSXRlbVByb3BzPiA9ICh7XG4gIGNvbG9yLFxuICBwZXJjZW50YWdlLFxuICBsYWJlbCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjAuNXJlbVwiIH19PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgIHdpZHRoOiAxMyxcbiAgICAgICAgICAgIGhlaWdodDogMTMsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogOCxcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIGZvbnQtbWVkaXVtIHRleHQtYmFzZSB0ZXh0LXNraW4tYmFzZVwiPlxuICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVyIHRhcmdldD17cGVyY2VudGFnZSA/PyAwfSBkdXJhdGlvbj17NTAwfSAvPlxuICAgICAgICAgICAge1wiJVwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50YWdlSXRlbTtcbiIsImltcG9ydCB1c2VDdXJyZW5jeVNldHRpbmdzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9jdXJyZW5jeVNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbmltYXRlZE51bWJlciBmcm9tIFwiLi4vQW5pbWF0ZWROdW1iZXJcIjtcblxudHlwZSBFeHBlbmRpdHVyZUNhcmRQcm9wcyA9IHtcbiAgYnVkZ2V0PzogbnVtYmVyO1xuICBzcGVudD86IG51bWJlcjtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25zOiBudW1iZXI7XG4gIGljb246IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBFeHBlbmRpdHVyZUNhcmQgPSAoe1xuICBpY29uLFxuICBidWRnZXQsXG4gIHNwZW50LFxuICBjYXRlZ29yeSxcbiAgdHJhbnNhY3Rpb25zLFxufTogRXhwZW5kaXR1cmVDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgY3VycmVuY3lTeW1ib2wgPSB1c2VDdXJyZW5jeVNldHRpbmdzU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmN1cnJlbmN5U3ltYm9sXG4gICk7XG4gIGNvbnN0IGJ1ZGdldENvbHVtbldpZHRoID0gXCI5MHB4XCI7XG4gIGNvbnN0IHNwZW50Q29sdW1uV2lkdGggPSBcIjkwcHhcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgIHsvKiBDYXRlZ29yeSBhbmQgdHJhbnNhY3Rpb25zIHNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHsvKiBJY29uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNiB3LTYgcm91bmRlZC1mdWxsIGJnLVsjRThFM0RDXSBtci0yIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAge2ljb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogQ2F0ZWdvcnkgYW5kIHRyYW5zYWN0aW9uIGNvdW50ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXhzIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXN1YnRpdGxlIG1iLTFcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXh4eHMgdGV4dC1za2luLXN1YnRpdGxlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgIHtgJHt0cmFuc2FjdGlvbnN9IHRyYW5zYWN0aW9uJHt0cmFuc2FjdGlvbnMgPT09IDEgPyBcIlwiIDogXCJzXCJ9YH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEJ1ZGdldCBhbmQgc3BlbnQgc2VjdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtaW4tdy1bNTUlXSBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgey8qIEJ1ZGdldCAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYnVkZ2V0Q29sdW1uV2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC1wcmltYXJ5IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXIgdGFyZ2V0PXtidWRnZXQgPz8gMH0gZHVyYXRpb249ezUwMH0gLz5cbiAgICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCIgdGV4dC14eHhzIGFsaWduLXN1cGVyIGZvbnQtbWVkaXVtIG1sLVstMTAlXVwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICAgICAgPC9zdXA+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU3BlbnQgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZFwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHNwZW50Q29sdW1uV2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC1wcmltYXJ5IHRleHQteHMgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlciB0YXJnZXQ9e3NwZW50ID8/IDB9IGR1cmF0aW9uPXs1MDB9IC8+XG4gICAgICAgICAgICAgIDxzdXAgY2xhc3NOYW1lPVwiIHRleHQteHh4cyBhbGlnbi1zdXBlciBmb250LW1lZGl1bSBtbC1bLTEwJV1cIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVuY3lTeW1ib2x9XG4gICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB1c2VDdXJyZW5jeVNldHRpbmdzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9jdXJyZW5jeVNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpQXJyb3dEb3duUmlnaHQsIEZpQXJyb3dVcFJpZ2h0LCBGaUFycm93UmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBBbmltYXRlZE51bWJlciBmcm9tIFwiLi4vQW5pbWF0ZWROdW1iZXJcIjtcbnR5cGUgRXhwZW5kaXR1cmVDb21wYXJpc29uQ2FyZFByb3BzID0ge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbn07XG5leHBvcnQgY29uc3QgRXhwZW5kaXR1cmVDb21wYXJpc29uQ2FyZCA9ICh7XG4gIGljb24sXG4gIGNhdGVnb3J5LFxuICBwZXJjZW50YWdlLFxufTogRXhwZW5kaXR1cmVDb21wYXJpc29uQ2FyZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYgdy02IHJvdW5kZWQtZnVsbCBiZy1bI0U4RTNEQ10gbXItMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy1zdWJ0aXRsZSBtYi0xXCI+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7cGVyY2VudGFnZSA9PSAwID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgaC00LjUgdy00LjUgIG1yLTIuNSAke3BlcmNlbnRhZ2UgPCAwXG4gICAgICAgICAgICAgICAgPyBcImJvcmRlciBiZy1bI2ZjZDlkZV0gYm9yZGVyLVsjZWUzZTU5XVwiXG4gICAgICAgICAgICAgICAgOiBcImJvcmRlciBiZy1bI2RkZWJkNV0gYm9yZGVyLVsjNWY5ZDMwXVwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwZXJjZW50YWdlIDwgMCA/IChcbiAgICAgICAgICAgICAgICA8RmlBcnJvd0Rvd25SaWdodCBjb2xvcj1cIiNlZTNlNTlcIiBzaXplPVwiMC43NXJlbVwiIC8+XG4gICAgICAgICAgICAgICkgOiBwZXJjZW50YWdlID09IDAgPyAoXG4gICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxGaUFycm93VXBSaWdodCBjb2xvcj1cIiM1ZjlkMzBcIiBzaXplPVwiMC43NXJlbVwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtYm9sZCBmb250LXByaW1hcnkgdGV4dC14cyAke3BlcmNlbnRhZ2UgPCAwID8gXCJ0ZXh0LVsjZWUzZTU5XVwiIDogXCJ0ZXh0LVsjNWY5ZDMwXVwiXG4gICAgICAgICAgICAgICAgfSB0cmFja2luZy13aWRlc3RgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YCR7cGVyY2VudGFnZSA+IDAgPyBcIitcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9e3BhcnNlRmxvYXQocGVyY2VudGFnZS50b0ZpeGVkKDEpKX1cbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvVG9vbFRpcFByb2dyZXNzQmFyL1Rvb2x0aXBQcm9ncmVzc0Jhci5jc3NcIjtcblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9ncmVzc0JhclByb3BzIHtcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBwcm9ncmVzc1BlcmNlbnQ6IG51bWJlcjtcbiAgc3RhcnREYXRlOiBEYXRlO1xuICBlbmREYXRlOiBEYXRlO1xufVxuXG5jb25zdCBJbnNpZ2h0c1Rvb2x0aXBQcm9ncmVzc0JhcjogUmVhY3QuRkM8VG9vbHRpcFByb2dyZXNzQmFyUHJvcHM+ID0gKHtcbiAgYmFja2dyb3VuZENvbG9yID0gXCIjRTdFREYzXCIsXG4gIHByb2dyZXNzUGVyY2VudCxcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxufSkgPT4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBjdXJyZW50RGF5ID0gbm93LmdldERhdGUoKTtcbiAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCk7XG4gIGNvbnN0IHN0YXJ0T2ZDdXJyZW50TW9udGggPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIDEpO1xuICBjb25zdCBlbmRPZkN1cnJlbnRNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIDApO1xuXG4gIC8vIENoZWNrIGlmIHRoZSBwZXJpb2QgaXMgZXhhY3RseSBvbmUgbW9udGggYW5kIG1hdGNoZXMgdGhlIGN1cnJlbnQgbW9udGhcbiAgY29uc3QgaXNDdXJyZW50RnVsbE1vbnRoID0gc3RhcnREYXRlICYmIGVuZERhdGUgJiZcbiAgICBzdGFydERhdGUuZ2V0RGF0ZSgpID09PSBzdGFydE9mQ3VycmVudE1vbnRoLmdldERhdGUoKSAmJlxuICAgIHN0YXJ0RGF0ZS5nZXRNb250aCgpID09PSBzdGFydE9mQ3VycmVudE1vbnRoLmdldE1vbnRoKCkgJiZcbiAgICBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gc3RhcnRPZkN1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpICYmXG4gICAgZW5kRGF0ZS5nZXREYXRlKCkgPT09IGVuZE9mQ3VycmVudE1vbnRoLmdldERhdGUoKSAmJlxuICAgIGVuZERhdGUuZ2V0TW9udGgoKSA9PT0gZW5kT2ZDdXJyZW50TW9udGguZ2V0TW9udGgoKSAmJlxuICAgIGVuZERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZW5kT2ZDdXJyZW50TW9udGguZ2V0RnVsbFllYXIoKTtcblxuICAvLyBBZGp1c3QgcHJvZ3Jlc3MgdG9vbHRpcCBsb2dpY1xuICBjb25zdCBwcm9ncmVzc1N0eWxlID0ge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBcImxpbmVhci1ncmFkaWVudCg2NS40MmRlZywgcmdiYSgxMSwgNjIsIDE3NSwgMSkgMCUsIHJnYmEoMTU3LCAxNzcsIDE5OCwgMSkgNTIuNDQlLCByZ2JhKDIwLCAxODEsIDE5NSwgMSkgMTAwJSlcIixcbiAgICB3aWR0aDogYCR7cHJvZ3Jlc3NQZXJjZW50fSVgLFxuICB9O1xuXG4gIGNvbnN0IHByb2dyZXNzID0gKGN1cnJlbnREYXkgLyBkYXlzSW5Nb250aCkgKiAxMDA7XG5cbiAgY29uc3QgdG9vbHRpcFN0eWxlID0ge1xuICAgIGxlZnQ6IGBjYWxjKCR7cHJvZ3Jlc3N9JSAtIDJlbSlgLCAvLyBVc2UgcHJvZ3Jlc3NQZXJjZW50IGZvciB0b29sdGlwIHBvc2l0aW9uXG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOClcIixcbiAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgZm9udEZhbWlseTogXCJQb3BwaW5zXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXG4gICAgZGlzcGxheTogaXNDdXJyZW50RnVsbE1vbnRoID8gXCJibG9ja1wiIDogXCJub25lXCIsIC8vIE9ubHkgZGlzcGxheSBpZiBpc0N1cnJlbnRGdWxsTW9udGhcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICB7c3RhcnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgIHtlbmREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG10LTIuNSB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLXByb2dyZXNzLWJhclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwLXByb2dyZXNzLWJhci1wcm9ncmVzc1wiXG4gICAgICAgICAgICBzdHlsZT17cHJvZ3Jlc3NTdHlsZX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAge2lzQ3VycmVudEZ1bGxNb250aCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBcIiBzdHlsZT17dG9vbHRpcFN0eWxlfT5cbiAgICAgICAgICAgICAgVG9kYXlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0c1Rvb2x0aXBQcm9ncmVzc0JhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9vbHRpcFByb2dyZXNzQmFyIGZyb20gXCIuLi9Ub29sVGlwUHJvZ3Jlc3NCYXIvVG9vbFRpcFByb2dyZXNzQmFyXCI7XG5pbXBvcnQgeyBBbW91bnRWaWV3IH0gZnJvbSBcIi4vQW1vdW50Vmlld1wiO1xuaW1wb3J0IEluc2lnaHRzVG9vbHRpcFByb2dyZXNzQmFyIGZyb20gXCIuL0luc2lnaHRzVG9vbHRpcFByb2dyZXNzXCI7XG5pbXBvcnQgeyBleHBlbmRpdHVyZUxpc3QgfSBmcm9tIFwiY2xpZW50L3V0aWxzL01vY2tEYXRhXCI7XG5pbXBvcnQgeyBFeHBlbmRpdHVyZUNhcmQgfSBmcm9tIFwiLi9FeHBlbmRpdHVyZUNhcmRcIjtcbmltcG9ydCBNYWNyb1BpZUNoYXJ0V2l0aExlZ2VuZCBmcm9tIFwiLi4vTWFjcm9QaWVDaGFydFdpdGhMZWdlbmRcIjtcbmltcG9ydCB1c2VNaWNyb0dvYWxzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9taWNyb0dvYWxTdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hNaWNyb0dvYWxUb3RhbHMgfSBmcm9tIFwiY2xpZW50L2FwaS9taWNyb3NcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlU3BlbmRpbmcsIGZldGNoRGF0YSB9IGZyb20gXCJjbGllbnQvdXRpbHMvRm9ybWF0dGVyc1wiO1xuaW1wb3J0IHVzZUluc2lnaHRzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9pbnNpZ2h0c1N0b3JlXCI7XG5pbXBvcnQgeyBmb3JtYXQsIGRpZmZlcmVuY2VJbkRheXMsIHN0YXJ0T2ZNb250aCwgZW5kT2ZNb250aCwgZGlmZmVyZW5jZUluTW9udGhzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbnR5cGUgTXlTcGVuZFByb3BzID0ge1xuICBzcGVudDogbnVtYmVyO1xuICBidWRnZXQ6IG51bWJlcjtcbiAgd2FudHNTcGVuZDogbnVtYmVyO1xuICBlc3NlbnRpYWxzU3BlbmQ6IG51bWJlcjtcbiAgc2F2aW5nc1NwZW5kOiBudW1iZXI7XG4gIHVuYWxsb2NhdGVkU3BlbmQ6IG51bWJlcjtcbiAgc3RhcnREYXRlOiBzdHJpbmc7XG4gIGVuZERhdGU6IHN0cmluZztcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IE15U3BlbmQgPSAoe1xuICBzcGVudCxcbiAgYnVkZ2V0OiBpbml0aWFsQnVkZ2V0LFxuICB3YW50c1NwZW5kLFxuICBlc3NlbnRpYWxzU3BlbmQsXG4gIHNhdmluZ3NTcGVuZCxcbiAgdW5hbGxvY2F0ZWRTcGVuZCxcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxuICBpc0xvYWRpbmcsXG59OiBNeVNwZW5kUHJvcHMpID0+IHtcbiAgY29uc3QgbWljcm9Hb2FscyA9IHVzZU1pY3JvR29hbHNTdG9yZSgoc3RhdGUpID0+IHN0YXRlLm1pY3JvR29hbHMpO1xuICBjb25zdCBzZXRNaWNyb0dvYWxzID0gdXNlTWljcm9Hb2Fsc1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuc2V0TWljcm9Hb2Fscyk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IGluc2lnaHRzU3RvcmUgPSB1c2VJbnNpZ2h0c1N0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IFtlc3RpbWF0ZWRCdWRnZXQsIHNldEVzdGltYXRlZEJ1ZGdldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtidWRnZXQsIHNldEJ1ZGdldF0gPSB1c2VTdGF0ZShpbml0aWFsQnVkZ2V0KTtcbiAgY29uc3QgW251bWJlck9mTW9udGhzLCBzZXROdW1iZXJPZk1vbnRoc10gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3NwZW5kaW5nTWVzc2FnZSwgc2V0U3BlbmRpbmdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBleHBlbmRpdHVyZVByb2dyZXNzID0gY2FsY3VsYXRlU3BlbmRpbmcoc3BlbnQsIGJ1ZGdldCk7XG4gIGNvbnN0IHN0YXJ0RGF0ZU9iaiA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gIGNvbnN0IGVuZERhdGVPYmogPSBuZXcgRGF0ZShlbmREYXRlKTtcblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzdGFydE9mQ3VycmVudE1vbnRoID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxKTtcbiAgY29uc3QgZW5kT2ZDdXJyZW50TW9udGggPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCAwKTtcblxuICAvLyBDaGVjayBpZiB0aGUgcGVyaW9kIGlzIGV4YWN0bHkgb25lIG1vbnRoIGFuZCBtYXRjaGVzIHRoZSBjdXJyZW50IG1vbnRoXG4gIGNvbnN0IGlzQ3VycmVudEZ1bGxNb250aCA9XG4gICAgc3RhcnREYXRlT2JqPy5nZXREYXRlKCkgPT09IHN0YXJ0T2ZDdXJyZW50TW9udGguZ2V0RGF0ZSgpICYmXG4gICAgZW5kRGF0ZU9iaj8uZ2V0RGF0ZSgpID09PSBlbmRPZkN1cnJlbnRNb250aC5nZXREYXRlKCk7XG5cbiAgY29uc3QgY2xhY3VsYXRlVGhlTnVtYmVyT2ZNb250aHMgPSAoKSA9PiB7XG4gICAgaWYgKCFzdGFydERhdGVPYmogfHwgIWVuZERhdGVPYmopIHJldHVybjtcbiAgICBjb25zdCBudW1iZXJPZk1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhlbmREYXRlT2JqLCBzdGFydERhdGVPYmopICsgMTtcbiAgICBzZXROdW1iZXJPZk1vbnRocyhudW1iZXJPZk1vbnRocyk7XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlRXN0aW1hdGVkQnVkZ2V0ID0gKCkgPT4ge1xuICAgIGlmICghc3RhcnREYXRlT2JqIHx8ICFlbmREYXRlT2JqKSByZXR1cm47XG5cbiAgICBjbGFjdWxhdGVUaGVOdW1iZXJPZk1vbnRocygpO1xuXG4gICAgY29uc3Qgc3RhcnRJc01vbnRoU3RhcnQgPSBzdGFydERhdGVPYmouZ2V0RGF0ZSgpID09PSBzdGFydE9mTW9udGgoc3RhcnREYXRlT2JqKS5nZXREYXRlKCk7XG4gICAgY29uc3QgZW5kSXNNb250aEVuZCA9XG4gICAgICBlbmREYXRlT2JqLmdldERhdGUoKSA9PT0gZW5kT2ZNb250aChlbmREYXRlT2JqKS5nZXREYXRlKCk7XG4gICAgaWYgKHN0YXJ0SXNNb250aFN0YXJ0ICYmIGVuZElzTW9udGhFbmQgJiYgc3RhcnREYXRlT2JqLmdldE1vbnRoKCkgPT09IGVuZERhdGVPYmouZ2V0TW9udGgoKSkge1xuICAgICAgLy8gSWYgc3RhcnQgZGF0ZSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aCBhbmQgZW5kIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIHRoZSBzYW1lIG1vbnRoXG4gICAgICBjb25zdCB0b3RhbERheXNJbk1vbnRoID0gbmV3IERhdGUoZW5kRGF0ZU9iai5nZXRGdWxsWWVhcigpLCBlbmREYXRlT2JqLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCk7XG4gICAgICBjb25zdCBkYWlseUJ1ZGdldCA9IGluaXRpYWxCdWRnZXQgLyB0b3RhbERheXNJbk1vbnRoO1xuICAgICAgaWYgKGlzQ3VycmVudEZ1bGxNb250aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IHJlY29tZW5kZWRTcGVuZCA9IGRhaWx5QnVkZ2V0ICogY3VycmVudERhdGU7XG4gICAgICAgIGlmIChzcGVudCA+IHJlY29tZW5kZWRTcGVuZCkge1xuICAgICAgICAgIHNldFNwZW5kaW5nTWVzc2FnZShcIvCfmYHwn4+8IEhlYWRzIHVwISBZb3UncmUgY3VycmVudGx5IHNwZW5kaW5nIGFib3ZlIHRoZSByZWNvbW1lbmRlZCBidWRnZXQgYnkgS0VTIFwiICsgKChzcGVudCA8PSBpbml0aWFsQnVkZ2V0KSA/IHNwZW50IC0gcmVjb21lbmRlZFNwZW5kIDogc3BlbnQgLSBpbml0aWFsQnVkZ2V0KS50b0xvY2FsZVN0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChzcGVudCA+IDAgJiYgc3BlbnQgPCByZWNvbWVuZGVkU3BlbmQpIHtcbiAgICAgICAgICBzZXRTcGVuZGluZ01lc3NhZ2UoXCLwn5mM8J+PvCBTd2VldCEgWW91J3JlIHdlbGwgd2l0aGluIHlvdXIgcmVjb21tZW5kZWQgYnVkZ2V0IGxpbWl0IGZvciB0aGlzIG1vbnRoLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBlbmREYXRlT2JqLmdldERhdGUoKTtcbiAgICAgICAgY29uc3QgcmVjb21lbmRlZFNwZW5kID0gZGFpbHlCdWRnZXQgKiBjdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHNwZW50ID4gcmVjb21lbmRlZFNwZW5kKSB7XG4gICAgICAgICAgc2V0U3BlbmRpbmdNZXNzYWdlKFwi8J+ZgfCfj7wgSGVhZHMgdXAhIFlvdSdyZSBzcGVuZGluZyBhYm92ZSB5b3VyIGJ1ZGdldCBieSBLRVMgXCIgKyAoKHNwZW50IDw9IGluaXRpYWxCdWRnZXQpID8gc3BlbnQgLSByZWNvbWVuZGVkU3BlbmQgOiBzcGVudCAtIGluaXRpYWxCdWRnZXQpLnRvTG9jYWxlU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHNwZW50ID4gMCAmJiBzcGVudCA8IHJlY29tZW5kZWRTcGVuZCkge1xuICAgICAgICAgIHNldFNwZW5kaW5nTWVzc2FnZShcIvCfmYzwn4+8IFN3ZWV0ISBZb3UncmUgd2VsbCB3aXRoaW4geW91ciBvdmVyYWxsIGJ1ZGdldCBsaW1pdCBmb3IgdGhpcyBtb250aC5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldEJ1ZGdldChpbml0aWFsQnVkZ2V0KTtcbiAgICAgIHNldEVzdGltYXRlZEJ1ZGdldChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRheXMgPSBkaWZmZXJlbmNlSW5EYXlzKGVuZERhdGVPYmosIHN0YXJ0RGF0ZU9iaik7XG4gICAgICBpZiAoZGF5cyA8PSAzMCkge1xuICAgICAgICAvLyBJZiB0aGUgZHVyYXRpb24gaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGEgbW9udGhcbiAgICAgICAgLy9JZiB0aGUgZGF5cyBhcmUgaW4gdGhlIHNhbWUgbW9udGgsIGFzc3VtZSB0aGF0IHRoZSBidWRnZXQgaXMgZGl2aWRlZCBlcXVhbGx5IGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMsIG11bHRpcGx5IHRoZSBkYWlseSBidWRnZXQgYnkgdGhlIG51bWJlciBvZiBkYXlzXG4gICAgICAgIGlmIChzdGFydERhdGVPYmouZ2V0TW9udGgoKSA9PT0gZW5kRGF0ZU9iai5nZXRNb250aCgpICYmIHN0YXJ0RGF0ZU9iai5nZXRGdWxsWWVhcigpID09PSBlbmREYXRlT2JqLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICBjb25zdCB0b3RhbERheXNJbk1vbnRoID0gbmV3IERhdGUoZW5kRGF0ZU9iai5nZXRGdWxsWWVhcigpLCBlbmREYXRlT2JqLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCk7XG4gICAgICAgICAgY29uc3QgZGFpbHlCdWRnZXQgPSBpbml0aWFsQnVkZ2V0IC8gdG90YWxEYXlzSW5Nb250aDtcbiAgICAgICAgICBjb25zdCBhZGp1c3RlZEJ1ZGdldCA9IGRhaWx5QnVkZ2V0ICogZGF5cztcbiAgICAgICAgICBpZiAoc3BlbnQgPiBhZGp1c3RlZEJ1ZGdldCkge1xuICAgICAgICAgICAgc2V0U3BlbmRpbmdNZXNzYWdlKFwi8J+ZgfCfj7wgSGVhZHMgdXAhIFlvdSdyZSBzcGVuZGluZyBhYm92ZSB5b3VyIGJ1ZGdldCBieSBLRVMgXCIgKyAoKHNwZW50IDw9IGluaXRpYWxCdWRnZXQpID8gc3BlbnQgLSBhZGp1c3RlZEJ1ZGdldCA6IHNwZW50IC0gaW5pdGlhbEJ1ZGdldCkudG9Mb2NhbGVTdHJpbmcoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNwZW5kaW5nTWVzc2FnZShcIvCfmYzwn4+8IFN3ZWV0ISBZb3UncmUgd2VsbCB3aXRoaW4geW91ciBvdmVyYWxsIGJ1ZGdldCBsaW1pdCBmb3IgdGhpcyBwZXJpb2QuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRCdWRnZXQoYWRqdXN0ZWRCdWRnZXQpO1xuICAgICAgICAgIHNldEVzdGltYXRlZEJ1ZGdldCh0cnVlKTtcbiAgICAgICAgfS8vSWYgdGhlIGRheXMgYXJlIGluIGRpZmZlcmVudCBtb250aHMsIGFzc3VtZSB0aGF0IHRoZSBidWRnZXQgaXMgZGl2aWRlZCBlcXVhbGx5IGJldHdlZW4gMzAgZGF5cywgbXVsdGlwbHkgdGhlIGRhaWx5IGJ1ZGdldCBieSB0aGUgbnVtYmVyIG9mIGRheXNcbiAgICAgICAgZWxzZSBpZiAoc3RhcnREYXRlT2JqLmdldE1vbnRoKCkgIT09IGVuZERhdGVPYmouZ2V0TW9udGgoKSkge1xuICAgICAgICAgIGNvbnN0IGRhaWx5QnVkZ2V0ID0gaW5pdGlhbEJ1ZGdldCAvIDMwO1xuICAgICAgICAgIGNvbnN0IGFkanVzdGVkQnVkZ2V0ID0gZGFpbHlCdWRnZXQgKiBkYXlzO1xuICAgICAgICAgIGlmIChzcGVudCA+IGFkanVzdGVkQnVkZ2V0KSB7XG4gICAgICAgICAgICBzZXRTcGVuZGluZ01lc3NhZ2UoXCLwn5mB8J+PvCBIZWFkcyB1cCEgWW91J3JlIHNwZW5kaW5nIGFib3ZlIHlvdXIgYnVkZ2V0IGJ5IEtFUyBcIiArICgoc3BlbnQgPD0gaW5pdGlhbEJ1ZGdldCkgPyBzcGVudCAtIGFkanVzdGVkQnVkZ2V0IDogc3BlbnQgLSBpbml0aWFsQnVkZ2V0KS50b0xvY2FsZVN0cmluZygpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNwZW50ID4gMCAmJiBzcGVudCA8IGFkanVzdGVkQnVkZ2V0KSB7XG4gICAgICAgICAgICBzZXRTcGVuZGluZ01lc3NhZ2UoXCLwn5mM8J+PvCBTd2VldCEgWW91J3JlIHdlbGwgd2l0aGluIHlvdXIgb3ZlcmFsbCBidWRnZXQgbGltaXQgZm9yIHRoaXMgcGVyaW9kLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0QnVkZ2V0KGFkanVzdGVkQnVkZ2V0KTtcbiAgICAgICAgICBzZXRFc3RpbWF0ZWRCdWRnZXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGF5cyA+IDMwKSB7XG4gICAgICAgIC8vIElmIHRoZSBkdXJhdGlvbiBpcyBtb3JlIHRoYW4gYSBtb250aFxuICAgICAgICBjb25zdCBtb250aHMgPSBNYXRoLmNlaWwoZGF5cyAvIDMwKTtcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRCdWRnZXQgPSBpbml0aWFsQnVkZ2V0ICogbW9udGhzO1xuICAgICAgICBpZiAoc3BlbnQgPiBhZGp1c3RlZEJ1ZGdldCkge1xuICAgICAgICAgIHNldFNwZW5kaW5nTWVzc2FnZShcIvCfmYHwn4+8IEhlYWRzIHVwISBZb3UncmUgc3BlbmRpbmcgYWJvdmUgeW91ciBidWRnZXQgYnkgS0VTIFwiICsgKChzcGVudCA8PSBpbml0aWFsQnVkZ2V0KSA/IHNwZW50IC0gYWRqdXN0ZWRCdWRnZXQgOiBzcGVudCAtIGluaXRpYWxCdWRnZXQpLnRvTG9jYWxlU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHNwZW50ID4gMCAmJiBzcGVudCA8IGFkanVzdGVkQnVkZ2V0KSB7XG4gICAgICAgICAgc2V0U3BlbmRpbmdNZXNzYWdlKFwi8J+ZjPCfj7wgU3dlZXQhIFlvdSdyZSB3ZWxsIHdpdGhpbiB5b3VyIG92ZXJhbGwgYnVkZ2V0IGxpbWl0IGZvciB0aGlzIHBlcmlvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0QnVkZ2V0KGFkanVzdGVkQnVkZ2V0KTtcbiAgICAgICAgc2V0RXN0aW1hdGVkQnVkZ2V0KHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhbGN1bGF0ZUVzdGltYXRlZEJ1ZGdldCgpO1xuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlLCBzcGVudCwgaW5pdGlhbEJ1ZGdldF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKFxuICAgICAgXCJtYWNyb3NcIixcbiAgICAgIGZldGNoTWljcm9Hb2FsVG90YWxzLFxuICAgICAgY29uZmlnLFxuICAgICAgZm9ybWF0KGluc2lnaHRzU3RvcmUuaW5zaWdodHNTdGFydERhdGUsIFwieXl5eS1NTS1kZFwiKSxcbiAgICAgIGZvcm1hdChpbnNpZ2h0c1N0b3JlLmluc2lnaHRzRW5kRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpLFxuICAgICAgc2V0TWljcm9Hb2Fsc1xuICAgICk7XG4gIH0sIFtzdGFydERhdGUsIGVuZERhdGVdKTtcblxuICBjb25zdCBidWRnZXRDb2x1bW5XaWR0aCA9IFwiMTIwcHhcIjtcbiAgY29uc3Qgc3BlbnRDb2x1bW5XaWR0aCA9IFwiMjAlXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC1za2luLWJhc2UgdGV4dC1zbSB0cmFja2luZy1saXN0dGlsZV9zdWJ0aXRsZVwiPlxuICAgICAgICAgIHtzcGVudCA+IDAgPyAoc3BlbmRpbmdNZXNzYWdlIHx8IFwiQ2FsY3VsYXRpbmcgeW91ciBidWRnZXQuLi5cIikgOiBcIllvdSBoYXZlIG5vIGV4cGVuc2VzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgcGVyaW9kLiBBZGQgc29tZSBleHBlbnNlcyB0byBnZXQgc3RhcnRlZC5cIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMi41IGZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPEluc2lnaHRzVG9vbHRpcFByb2dyZXNzQmFyXG4gICAgICAgICAgcHJvZ3Jlc3NQZXJjZW50PXtleHBlbmRpdHVyZVByb2dyZXNzLmV4cGVuZGl0dXJlUHJvZ3Jlc3N9XG4gICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGVPYmogPz8gbmV3IERhdGUoKX1cbiAgICAgICAgICBlbmREYXRlPXtlbmREYXRlT2JqID8/IG5ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEFtb3VudFZpZXcgY2FwdGlvbj1cIlNwZW50XCIgYW1vdW50PXtzcGVudH0gLz5cbiAgICAgICAgPEFtb3VudFZpZXcgY2FwdGlvbj17ZXN0aW1hdGVkQnVkZ2V0ID8gXCJFc3RpbWF0ZWQgQnVkZ2V0XCIgOiBcIlBsYW5uZWQgYnVkZ2V0XCJ9IGFtb3VudD17YnVkZ2V0fSBmbGV4PVwiaXRlbXMtZW5kXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgaC1weCBiZy1za2luLWFjY2VudDMgbXQtOSBtYi00LjVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCAtbWwtNVwiPlxuICAgICAgICA8TWFjcm9QaWVDaGFydFdpdGhMZWdlbmRcbiAgICAgICAgICBkaW1lbnNpb25zPXsxOTB9XG4gICAgICAgICAgZG91Z2hudXRUaGlja25lc3M9ezE0fVxuICAgICAgICAgIHNob3dDb21wYXJpc29uPXtmYWxzZX1cbiAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgIHdhbnRzOiBpc0xvYWRpbmcgPyAwIDogd2FudHNTcGVuZCxcbiAgICAgICAgICAgIGVzc2VudGlhbHM6IGlzTG9hZGluZyA/IDAgOiBlc3NlbnRpYWxzU3BlbmQsXG4gICAgICAgICAgICBzYXZpbmdzOiBpc0xvYWRpbmcgPyAwIDogc2F2aW5nc1NwZW5kLFxuICAgICAgICAgICAgdW5hbGxvY2F0ZWQ6IGlzTG9hZGluZyA/IDAgOiB1bmFsbG9jYXRlZFNwZW5kLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGgtcHggYmctc2tpbi1hY2NlbnQzIG10LTkgbWItNC41XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAge21pY3JvR29hbHMgJiYgbWljcm9Hb2Fscy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7bWljcm9Hb2Fscy5zb21lKChtaWNyb0dvYWwpID0+IG1pY3JvR29hbC50b3RhbF90cmFuc2FjdGlvbnMgPiAwKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctd2lkZSBpdGVtcy1lbmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBidWRnZXRDb2x1bW5XaWR0aCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2VzdGltYXRlZEJ1ZGdldCA/IFwiRXN0IEJ1ZGdldFwiIDogXCJCdWRnZXRcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctd2lkZSBpdGVtcy1lbmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBzcGVudENvbHVtbldpZHRoIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTcGVudFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bWljcm9Hb2Fscy5tYXAoKG1pY3JvR29hbCwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0dvaW5nT3V0ID0gbWljcm9Hb2FsPy5uYW1lID09PSBcIkdvaW5nIG91dFwiO1xuICAgICAgICAgICAgICByZXR1cm4gbWljcm9Hb2FsLnRvdGFsX3RyYW5zYWN0aW9ucyA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8RXhwZW5kaXR1cmVDYXJkXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9ucz17bWljcm9Hb2FsLm51bWJlcl9vZl90cmFuc2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGljb249e2lzR29pbmdPdXQgPyBcIvCfpKlcIiA6IG1pY3JvR29hbC5lbW9qaX1cbiAgICAgICAgICAgICAgICAgICAgYnVkZ2V0PXttaWNyb0dvYWwuYW1vdW50ICogbnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgICAgICAgIHNwZW50PXttaWNyb0dvYWwudG90YWxfdHJhbnNhY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpc0dvaW5nT3V0ID8gXCJFbnRlcnRhaW5tZW50XCIgOiBtaWNyb0dvYWwubmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvb2x0aXBQcm9ncmVzc0JhciBmcm9tIFwiLi4vVG9vbFRpcFByb2dyZXNzQmFyL1Rvb2xUaXBQcm9ncmVzc0JhclwiO1xuaW1wb3J0IHsgQW1vdW50VmlldyB9IGZyb20gXCIuL0Ftb3VudFZpZXdcIjtcbmltcG9ydCB7IEV4cGVuZGl0dXJlQ29tcGFyaXNvbkNhcmQgfSBmcm9tIFwiLi9FeHBlbmRpdHVyZUNvbXBhcmlzb25DYXJkXCI7XG5pbXBvcnQgeyBleHBlbmRpdHVyZUNvbXBhcmVMaXN0IH0gZnJvbSBcImNsaWVudC91dGlscy9Nb2NrRGF0YVwiO1xuaW1wb3J0IE1hY3JvUGllQ2hhcnRXaXRoTGVnZW5kIGZyb20gXCIuLi9NYWNyb1BpZUNoYXJ0V2l0aExlZ2VuZFwiO1xuaW1wb3J0IEluc2lnaHRzVnNUb29sdGlwUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vVnNQcm9ncmVzcy9JbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVTcGVuZGluZywgY2hlY2tOQU4gfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB7IGZldGNoTWljcm9zUGVyY2VudGlsZSB9IGZyb20gXCJjbGllbnQvYXBpL21pY3Jvc1wiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5Nb250aHMsIHN0YXJ0T2ZNb250aCwgZW5kT2ZNb250aCwgZGlmZmVyZW5jZUluRGF5cywgc2V0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG50eXBlIE90aGVyc1NwZW5kUHJvcHMgPSB7XG4gIHNwZW50QnVkZ2V0OiBudW1iZXI7XG4gIHBsYW5uZWRCdWRnZXQ6IG51bWJlcjtcbiAgd2FudHNTcGVuZDogbnVtYmVyO1xuICBlc3NlbnRpYWxzU3BlbmQ6IG51bWJlcjtcbiAgc2F2aW5nc1NwZW5kOiBudW1iZXI7XG4gIHVuYWxsb2NhdGVkU3BlbmQ6IG51bWJlcjtcbiAgc3RhcnREYXRlPzogc3RyaW5nO1xuICBlbmREYXRlPzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBPdGhlcnNTcGVuZCA9ICh7XG4gIHNwZW50QnVkZ2V0LFxuICBwbGFubmVkQnVkZ2V0OiBpbml0aWFsQnVkZ2V0LFxuICB3YW50c1NwZW5kLFxuICBlc3NlbnRpYWxzU3BlbmQsXG4gIHNhdmluZ3NTcGVuZCxcbiAgdW5hbGxvY2F0ZWRTcGVuZCxcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxufTogT3RoZXJzU3BlbmRQcm9wcykgPT4ge1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvbmZpZ3VyYXRpb25cbiAgKSBhcyBJQ29uZmlnO1xuICBjb25zdCBbb3RoZXJzRGF0YSwgc2V0T3RoZXJzRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbdG90YWxVc2VyRXhwZW5kaXR1cmUsIHNldFRvdGFsVXNlckV4cGVuZGl0dXJlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG90YWxQZWVyRXhwZW5kaXR1cmUsIHNldFRvdGFsUGVlckV4cGVuZGl0dXJlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcGVlclByb2dyZXNzLCBzZXRQZWVyUHJvZ3Jlc3NdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3VzZXJQcm9ncmVzcywgc2V0VXNlclByb2dyZXNzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1c2VyV2FudHNFeHBlbmRpdHVyZSwgc2V0VXNlcldhbnRzRXhwZW5kaXR1cmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt1c2VyRXNzZW50aWFsc0V4cGVuZGl0dXJlLCBzZXRVc2VyRXNzZW50aWFsc0V4cGVuZGl0dXJlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlclNhdmluZ3NFeHBlbmRpdHVyZSwgc2V0VXNlclNhdmluZ3NFeHBlbmRpdHVyZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BlZXJXYW50c0V4cGVuZGl0dXJlLCBzZXRQZWVyV2FudHNFeHBlbmRpdHVyZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BlZXJFc3NlbnRpYWxzRXhwZW5kaXR1cmUsIHNldFBlZXJFc3NlbnRpYWxzRXhwZW5kaXR1cmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwZWVyU2F2aW5nc0V4cGVuZGl0dXJlLCBzZXRQZWVyU2F2aW5nc0V4cGVuZGl0dXJlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbnVtYmVyT2ZNb250aHMsIHNldE51bWJlck9mTW9udGhzXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYnVkZ2V0LCBzZXRCdWRnZXRdID0gdXNlU3RhdGUoaW5pdGlhbEJ1ZGdldCk7XG4gIGNvbnN0IFtlc3RpbWF0ZWRCdWRnZXQsIHNldEVzdGltYXRlZEJ1ZGdldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzcGVuZGluZ01lc3NhZ2UsIHNldFNwZW5kaW5nTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzdGFydERhdGVPYmogPSBzdGFydERhdGUgPyBuZXcgRGF0ZShzdGFydERhdGUpIDogbnVsbDtcbiAgY29uc3QgZW5kRGF0ZU9iaiA9IGVuZERhdGUgPyBuZXcgRGF0ZShlbmREYXRlKSA6IG51bGw7XG5cbiAgY29uc3QgY2xhY3VsYXRlVGhlTnVtYmVyT2ZNb250aHMgPSAoKSA9PiB7XG4gICAgaWYgKCFzdGFydERhdGVPYmogfHwgIWVuZERhdGVPYmopIHJldHVybjtcbiAgICBjb25zdCBudW1iZXJPZk1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhlbmREYXRlT2JqLCBzdGFydERhdGVPYmopICsgMTtcbiAgICBzZXROdW1iZXJPZk1vbnRocyhudW1iZXJPZk1vbnRocyk7XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlRXN0aW1hdGVkQnVkZ2V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc3RhcnREYXRlT2JqIHx8ICFlbmREYXRlT2JqKSByZXR1cm47XG5cbiAgICBjbGFjdWxhdGVUaGVOdW1iZXJPZk1vbnRocygpO1xuXG4gICAgY29uc3Qgc3RhcnRJc01vbnRoU3RhcnQgPSBzdGFydERhdGVPYmouZ2V0RGF0ZSgpID09PSBzdGFydE9mTW9udGgoc3RhcnREYXRlT2JqKS5nZXREYXRlKCk7XG4gICAgY29uc3QgZW5kSXNNb250aEVuZCA9XG4gICAgICBlbmREYXRlT2JqLmdldERhdGUoKSA9PT0gZW5kT2ZNb250aChlbmREYXRlT2JqKS5nZXREYXRlKCk7XG4gICAgaWYgKHN0YXJ0SXNNb250aFN0YXJ0ICYmIGVuZElzTW9udGhFbmQgJiYgc3RhcnREYXRlT2JqLmdldE1vbnRoKCkgPT09IGVuZERhdGVPYmouZ2V0TW9udGgoKSkge1xuICAgICAgc2V0QnVkZ2V0KGluaXRpYWxCdWRnZXQpO1xuICAgICAgc2V0RXN0aW1hdGVkQnVkZ2V0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF5cyA9IGRpZmZlcmVuY2VJbkRheXMoZW5kRGF0ZU9iaiwgc3RhcnREYXRlT2JqKTtcbiAgICAgIGlmIChkYXlzIDw9IDMwKSB7XG4gICAgICAgIC8vIElmIHRoZSBkdXJhdGlvbiBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYSBtb250aFxuICAgICAgICAvL0lmIHRoZSBkYXlzIGFyZSBpbiB0aGUgc2FtZSBtb250aCwgYXNzdW1lIHRoYXQgdGhlIGJ1ZGdldCBpcyBkaXZpZGVkIGVxdWFsbHkgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcywgbXVsdGlwbHkgdGhlIGRhaWx5IGJ1ZGdldCBieSB0aGUgbnVtYmVyIG9mIGRheXNcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZU9iai5nZXRNb250aCgpID09PSBlbmREYXRlT2JqLmdldE1vbnRoKCkgJiYgc3RhcnREYXRlT2JqLmdldEZ1bGxZZWFyKCkgPT09IGVuZERhdGVPYmouZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgIGNvbnN0IHRvdGFsRGF5c0luTW9udGggPSBuZXcgRGF0ZShlbmREYXRlT2JqLmdldEZ1bGxZZWFyKCksIGVuZERhdGVPYmouZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKTtcbiAgICAgICAgICBjb25zdCBkYWlseUJ1ZGdldCA9IGluaXRpYWxCdWRnZXQgLyB0b3RhbERheXNJbk1vbnRoO1xuICAgICAgICAgIGNvbnN0IGFkanVzdGVkQnVkZ2V0ID0gZGFpbHlCdWRnZXQgKiBkYXlzO1xuICAgICAgICAgIHNldEJ1ZGdldChhZGp1c3RlZEJ1ZGdldCk7XG4gICAgICAgICAgc2V0RXN0aW1hdGVkQnVkZ2V0KHRydWUpO1xuICAgICAgICB9Ly9JZiB0aGUgZGF5cyBhcmUgaW4gZGlmZmVyZW50IG1vbnRocywgYXNzdW1lIHRoYXQgdGhlIGJ1ZGdldCBpcyBkaXZpZGVkIGVxdWFsbHkgYmV0d2VlbiAzMCBkYXlzLCBtdWx0aXBseSB0aGUgZGFpbHkgYnVkZ2V0IGJ5IHRoZSBudW1iZXIgb2YgZGF5c1xuICAgICAgICBlbHNlIGlmIChzdGFydERhdGVPYmouZ2V0TW9udGgoKSAhPT0gZW5kRGF0ZU9iai5nZXRNb250aCgpKSB7XG4gICAgICAgICAgY29uc3QgZGFpbHlCdWRnZXQgPSBpbml0aWFsQnVkZ2V0IC8gMzA7XG4gICAgICAgICAgY29uc3QgYWRqdXN0ZWRCdWRnZXQgPSBkYWlseUJ1ZGdldCAqIGRheXM7XG4gICAgICAgICAgc2V0QnVkZ2V0KGFkanVzdGVkQnVkZ2V0KTtcbiAgICAgICAgICBzZXRFc3RpbWF0ZWRCdWRnZXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGF5cyA+IDMwKSB7XG4gICAgICAgIC8vIElmIHRoZSBkdXJhdGlvbiBpcyBtb3JlIHRoYW4gYSBtb250aFxuICAgICAgICBjb25zdCBtb250aHMgPSBNYXRoLmNlaWwoZGF5cyAvIDMwKTtcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRCdWRnZXQgPSBpbml0aWFsQnVkZ2V0ICogbW9udGhzO1xuICAgICAgICBzZXRCdWRnZXQoYWRqdXN0ZWRCdWRnZXQpO1xuICAgICAgICBzZXRFc3RpbWF0ZWRCdWRnZXQodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHVzZXJQcm9ncmVzcyA9IGNhbGN1bGF0ZVNwZW5kaW5nKFxuICAgICAgdG90YWxVc2VyRXhwZW5kaXR1cmUsXG4gICAgICBidWRnZXRcbiAgICApO1xuICAgIGNvbnN0IHBlZXJQcm9ncmVzcyA9IGNhbGN1bGF0ZVNwZW5kaW5nKFxuICAgICAgdG90YWxQZWVyRXhwZW5kaXR1cmUsXG4gICAgICBidWRnZXRcbiAgICApO1xuICAgIHNldFVzZXJQcm9ncmVzcyh1c2VyUHJvZ3Jlc3MuZXhwZW5kaXR1cmVQcm9ncmVzcyk7XG4gICAgc2V0UGVlclByb2dyZXNzKHBlZXJQcm9ncmVzcy5leHBlbmRpdHVyZVByb2dyZXNzKTtcbiAgfTtcblxuICBpbnRlcmZhY2UgQ2F0ZWdvcnlEYXRhIHtcbiAgICBwZXJjZW50aWxlOiBudW1iZXI7XG4gICAgdXNlcl9leHBlbmRpdHVyZTogbnVtYmVyO1xuICAgIHBlZXJfdG90YWxfZXhwZW5kaXR1cmU6IG51bWJlcjtcbiAgICBwZXJjZW50YWdlX2RpZmZlcmVuY2U6IG51bWJlcjtcbiAgfVxuXG4gIGludGVyZmFjZSBNYWNyb0RhdGEge1xuICAgIHRvdGFsX3VzZXJfZXhwZW5kaXR1cmVfcGVyX21hY3JvOiBudW1iZXI7XG4gICAgdG90YWxfcGVlcl9leHBlbmRpdHVyZV9wZXJfbWFjcm86IG51bWJlcjtcbiAgICBtYWNyb19wZXJjZW50YWdlX2RpZmZlcmVuY2U6IG51bWJlcjtcbiAgICBjYXRlZ29yaWVzOiB7IFtjYXRlZ29yeTogc3RyaW5nXTogQ2F0ZWdvcnlEYXRhIH07XG4gIH1cblxuICAvLyBUT0RPOiBmaXggdGhpcyBmdW5jdGlvbiBoZXJlIFxuICBjb25zdCBmZXRjaERhdGFBbmRVcGRhdGVTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoTWljcm9zUGVyY2VudGlsZSh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZyxcbiAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnREYXRlLFxuICAgICAgICBlbmRfZGF0ZTogZW5kRGF0ZSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgdG90YWxVc2VyRXhwZW5kaXR1cmUgPSAwO1xuICAgICAgbGV0IHRvdGFsUGVlckV4cGVuZGl0dXJlID0gMDtcbiAgICAgIGxldCB1c2VyV2FudHNFeHBlbmRpdHVyZSA9IDA7XG4gICAgICBsZXQgdXNlckVzc2VudGlhbHNFeHBlbmRpdHVyZSA9IDA7XG4gICAgICBsZXQgdXNlclNhdmluZ3NFeHBlbmRpdHVyZSA9IDA7XG4gICAgICBsZXQgcGVlcldhbnRzRXhwZW5kaXR1cmUgPSAwO1xuICAgICAgbGV0IHBlZXJFc3NlbnRpYWxzRXhwZW5kaXR1cmUgPSAwO1xuICAgICAgbGV0IHBlZXJTYXZpbmdzRXhwZW5kaXR1cmUgPSAwO1xuXG4gICAgICBkYXRhLmZvckVhY2goKG1hY3JvOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgbWFjcm9OYW1lID0gT2JqZWN0LmtleXMobWFjcm8pWzBdOyAvLyBBc3N1bWluZyB0aGUgbmFtZSBpcyB0aGUga2V5XG4gICAgICAgIGNvbnN0IG1hY3JvRGF0YSA9IG1hY3JvW21hY3JvTmFtZV07XG5cbiAgICAgICAgdG90YWxVc2VyRXhwZW5kaXR1cmUgKz0gbWFjcm9EYXRhLnRvdGFsX3VzZXJfZXhwZW5kaXR1cmVfcGVyX21hY3JvO1xuICAgICAgICB0b3RhbFBlZXJFeHBlbmRpdHVyZSArPSBtYWNyb0RhdGEudG90YWxfcGVlcl9leHBlbmRpdHVyZV9wZXJfbWFjcm87XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1hY3JvIG5hbWUgaXMgV2FudHMsIEVzc2VudGlhbHMsIG9yIFNhdmluZ3NcbiAgICAgICAgaWYgKG1hY3JvTmFtZSA9PT0gXCJXYW50c1wiKSB7XG4gICAgICAgICAgdXNlcldhbnRzRXhwZW5kaXR1cmUgKz0gbWFjcm9EYXRhLnRvdGFsX3VzZXJfZXhwZW5kaXR1cmVfcGVyX21hY3JvO1xuICAgICAgICAgIHBlZXJXYW50c0V4cGVuZGl0dXJlICs9IG1hY3JvRGF0YS50b3RhbF9wZWVyX2V4cGVuZGl0dXJlX3Blcl9tYWNybztcbiAgICAgICAgfSBlbHNlIGlmIChtYWNyb05hbWUgPT09IFwiRXNzZW50aWFsc1wiKSB7XG4gICAgICAgICAgdXNlckVzc2VudGlhbHNFeHBlbmRpdHVyZSArPSBtYWNyb0RhdGEudG90YWxfdXNlcl9leHBlbmRpdHVyZV9wZXJfbWFjcm87XG4gICAgICAgICAgcGVlckVzc2VudGlhbHNFeHBlbmRpdHVyZSArPSBtYWNyb0RhdGEudG90YWxfcGVlcl9leHBlbmRpdHVyZV9wZXJfbWFjcm87XG4gICAgICAgIH0gZWxzZSBpZiAobWFjcm9OYW1lID09PSBcIlNhdmluZ3NcIikge1xuICAgICAgICAgIHVzZXJTYXZpbmdzRXhwZW5kaXR1cmUgKz0gbWFjcm9EYXRhLnRvdGFsX3VzZXJfZXhwZW5kaXR1cmVfcGVyX21hY3JvO1xuICAgICAgICAgIHBlZXJTYXZpbmdzRXhwZW5kaXR1cmUgKz0gbWFjcm9EYXRhLnRvdGFsX3BlZXJfZXhwZW5kaXR1cmVfcGVyX21hY3JvO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2V0VG90YWxVc2VyRXhwZW5kaXR1cmUodG90YWxVc2VyRXhwZW5kaXR1cmUpO1xuICAgICAgc2V0VG90YWxQZWVyRXhwZW5kaXR1cmUodG90YWxQZWVyRXhwZW5kaXR1cmUpO1xuICAgICAgc2V0VXNlcldhbnRzRXhwZW5kaXR1cmUodXNlcldhbnRzRXhwZW5kaXR1cmUpO1xuICAgICAgc2V0VXNlckVzc2VudGlhbHNFeHBlbmRpdHVyZSh1c2VyRXNzZW50aWFsc0V4cGVuZGl0dXJlKTtcbiAgICAgIHNldFVzZXJTYXZpbmdzRXhwZW5kaXR1cmUodXNlclNhdmluZ3NFeHBlbmRpdHVyZSk7XG4gICAgICBzZXRQZWVyV2FudHNFeHBlbmRpdHVyZShwZWVyV2FudHNFeHBlbmRpdHVyZSk7XG4gICAgICBzZXRQZWVyRXNzZW50aWFsc0V4cGVuZGl0dXJlKHBlZXJFc3NlbnRpYWxzRXhwZW5kaXR1cmUpO1xuICAgICAgc2V0UGVlclNhdmluZ3NFeHBlbmRpdHVyZShwZWVyU2F2aW5nc0V4cGVuZGl0dXJlKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRFeHBlbmRpdHVyZUxpc3QgPSBleHBlbmRpdHVyZUNvbXBhcmVMaXN0Lm1hcChcbiAgICAgICAgKGV4cGVuZGl0dXJlKSA9PiB7XG4gICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBjYXRlZ29yeSBpbiB0aGUgZGF0YSBvYmplY3RcbiAgICAgICAgICBjb25zdCBjYXRlZ29yeURhdGEgPSBkYXRhLmZpbmQoKG1hY3JvOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hY3JvTmFtZSA9IE9iamVjdC5rZXlzKG1hY3JvKVswXTtcbiAgICAgICAgICAgIHJldHVybiBtYWNyb1ttYWNyb05hbWVdLmNhdGVnb3JpZXMuaGFzT3duUHJvcGVydHkoXG4gICAgICAgICAgICAgIGV4cGVuZGl0dXJlLm5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBJZiBjYXRlZ29yeSBkYXRhIGlzIGZvdW5kLCB1cGRhdGUgdGhlIHBlcmNlbnRhZ2VcbiAgICAgICAgICBpZiAoY2F0ZWdvcnlEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBtYWNyb05hbWUgPSBPYmplY3Qua2V5cyhjYXRlZ29yeURhdGEpWzBdO1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPVxuICAgICAgICAgICAgICBjYXRlZ29yeURhdGFbbWFjcm9OYW1lXS5jYXRlZ29yaWVzW2V4cGVuZGl0dXJlLm5hbWVdO1xuICAgICAgICAgICAgZXhwZW5kaXR1cmUucGVyY2VudGFnZSA9IGNhdGVnb3J5LnBlcmNlbnRhZ2VfZGlmZmVyZW5jZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZXhwZW5kaXR1cmU7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBzZXRPdGhlcnNEYXRhKGRhdGEpO1xuICAgICAgLy8gY2FsY3VsYXRlRXN0aW1hdGVkQnVkZ2V0KCk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIHNldFNwZW5kaW5nTWVzc2FnZShcIkZhaWxlZCB0byBsb2FkIGV4cGVuZGl0dXJlIGRhdGEuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGNhbGN1bGF0ZVByb2dyZXNzQW5kU2V0TWVzc2FnZSA9ICh1c2VyRXhwZW5kaXR1cmU6IG51bWJlciwgcGVlckV4cGVuZGl0dXJlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBwZXJjZW50YWdlRGlmZmVyZW5jZSA9ICgodXNlckV4cGVuZGl0dXJlIC0gcGVlckV4cGVuZGl0dXJlKSAvIHBlZXJFeHBlbmRpdHVyZSkgKiAxMDA7XG4gICAgZGV0ZXJtaW5lTWVzc2FnZSh1c2VyRXhwZW5kaXR1cmUsIHBlcmNlbnRhZ2VEaWZmZXJlbmNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhbGN1bGF0ZUVzdGltYXRlZEJ1ZGdldCgpO1xuICAgIGNhbGN1bGF0ZVByb2dyZXNzQW5kU2V0TWVzc2FnZSh0b3RhbFVzZXJFeHBlbmRpdHVyZSwgdG90YWxQZWVyRXhwZW5kaXR1cmUpO1xuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlLCBpbml0aWFsQnVkZ2V0LCB0b3RhbFVzZXJFeHBlbmRpdHVyZSwgdG90YWxQZWVyRXhwZW5kaXR1cmVdKTtcblxuICBjb25zdCBkZXRlcm1pbmVNZXNzYWdlID0gKHVzZXJFeHBlbmRpdHVyZTogbnVtYmVyLCBwZXJjZW50YWdlRGlmZmVyZW5jZTogbnVtYmVyIHwgbnVsbCkgPT4ge1xuICAgIGlmICh1c2VyRXhwZW5kaXR1cmUgPT09IDApIHtcbiAgICAgIHNldFNwZW5kaW5nTWVzc2FnZShcIllvdSBoYXZlIG5vIGV4cGVuc2VzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgcGVyaW9kLiBBZGQgc29tZSBleHBlbnNlcyB0byBnZXQgc3RhcnRlZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2UgPSBcIkNhbGN1bGF0aW5nIHlvdXIgc3BlbmRpbmcgdHJlbmRzIGNvbXBhcmVkIHRvIG90aGVyc2xpa2UgeW91LCBwbGVhc2Ugd2FpdC4uLlwiO1xuICAgIGlmIChwZXJjZW50YWdlRGlmZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKE1hdGguYWJzKHBlcmNlbnRhZ2VEaWZmZXJlbmNlKSA8PSAxNSkge1xuICAgICAgICBtZXNzYWdlID0gXCLwn46JIE5pY2UhIFlvdSdyZSBzcGVuZGluZyBvbiBwYXIgd2l0aCBvdGhlcnMgbGlrZSB5b3UgcGVyIGNhdGVnb3J5LlwiO1xuICAgICAgfSBlbHNlIGlmIChwZXJjZW50YWdlRGlmZmVyZW5jZSA8IC0xNSkge1xuICAgICAgICBtZXNzYWdlID0gXCJOaWNlISBZb3UncmUgc3BlbmRpbmcgbGVzcyB0aGFuIG90aGVycyBsaWtlIHlvdSBhY3Jvc3MgeW91ciBidWRnZXQuIFdheSB0byBnbyFcIjtcbiAgICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZURpZmZlcmVuY2UgPiAxNSkge1xuICAgICAgICBtZXNzYWdlID0gXCJIZWFkcyB1cCEgWW91J3JlIGN1cnJlbnRseSBzcGVuZGluZyBhYm92ZSBhdmVyYWdlIGNvbXBhcmVkIHRvIG90aGVycyBsaWtlIHlvdS5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTcGVuZGluZ01lc3NhZ2UobWVzc2FnZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGZldGNoRGF0YUFuZFVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlLCBjb25maWddKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXNraW4tYmFzZSB0ZXh0LXNtIHRyYWNraW5nLWxpc3R0aWxlX3N1YnRpdGxlXCI+XG4gICAgICAgICAge2lzTG9hZGluZ1xuICAgICAgICAgICAgPyBcIkNhbGN1bGF0aW5nIHlvdXIgc3BlbmRpbmcgdHJlbmRzIGNvbXBhcmVkIHRvIG90aGVyc2xpa2UgeW91LCBwbGVhc2Ugd2FpdC4uLlwiXG4gICAgICAgICAgICA6IHNwZW5kaW5nTWVzc2FnZSB8fCBcIlJlYWR5IHRvIHZpZXcgc3BlbmRpbmcgaW5zaWdodHMhXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIuNSBmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxJbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzQmFyXG4gICAgICAgICAgb3RoZXJzUHJvZ3Jlc3NTcGVuZD17IWlzTG9hZGluZyA/IHVzZXJQcm9ncmVzcyA/PyAwIDogMH1cbiAgICAgICAgICBteVByb2dyZXNzU3BlbmQ9eyFpc0xvYWRpbmcgPyBwZWVyUHJvZ3Jlc3MgPz8gMCA6IDB9XG4gICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGVPYmogPz8gbmV3IERhdGUoKX1cbiAgICAgICAgICBlbmREYXRlPXtlbmREYXRlT2JqID8/IG5ldyBEYXRlKCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiM0YzRjNGNcIixcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8QW1vdW50VmlldyBjYXB0aW9uPVwiTXkgc3BlbmRcIiBhbW91bnQ9eyFpc0xvYWRpbmcgPyB0b3RhbFVzZXJFeHBlbmRpdHVyZSA6IDB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzY3ODZjM1wiLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxBbW91bnRWaWV3XG4gICAgICAgICAgICBjYXB0aW9uPVwiT3RoZXIncyBhdmcgc3BlbmRcIlxuICAgICAgICAgICAgYW1vdW50PXshaXNMb2FkaW5nID8gdG90YWxQZWVyRXhwZW5kaXR1cmUgOiAwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBoLXB4IGJnLXNraW4tYWNjZW50MyBtdC05IG1iLTQuNVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IC1tbC04XCI+XG4gICAgICAgIDxNYWNyb1BpZUNoYXJ0V2l0aExlZ2VuZFxuICAgICAgICAgIGRpbWVuc2lvbnM9ezE5MH1cbiAgICAgICAgICBkb3VnaG51dFRoaWNrbmVzcz17MTR9XG4gICAgICAgICAgc2hvd0NvbXBhcmlzb249e3RydWV9XG4gICAgICAgICAgc2hvd1VuYWxsb2NhdGVkPXtmYWxzZX1cbiAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgIHdhbnRzOiAhaXNMb2FkaW5nID8gdXNlcldhbnRzRXhwZW5kaXR1cmUgOiAwLFxuICAgICAgICAgICAgZXNzZW50aWFsczogIWlzTG9hZGluZyA/IHVzZXJFc3NlbnRpYWxzRXhwZW5kaXR1cmUgOiAwLFxuICAgICAgICAgICAgc2F2aW5nczogIWlzTG9hZGluZyA/IHVzZXJTYXZpbmdzRXhwZW5kaXR1cmUgOiAwLFxuICAgICAgICAgICAgdW5hbGxvY2F0ZWQ6ICFpc0xvYWRpbmcgPyB1bmFsbG9jYXRlZFNwZW5kIDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHBlZXJWYWx1ZXM9e3tcbiAgICAgICAgICAgIHdhbnRzOiAhaXNMb2FkaW5nID8gcGVlcldhbnRzRXhwZW5kaXR1cmUgOiAwLFxuICAgICAgICAgICAgZXNzZW50aWFsczogIWlzTG9hZGluZyA/IHBlZXJFc3NlbnRpYWxzRXhwZW5kaXR1cmUgOiAwLFxuICAgICAgICAgICAgc2F2aW5nczogIWlzTG9hZGluZyA/IHBlZXJTYXZpbmdzRXhwZW5kaXR1cmUgOiAwLFxuICAgICAgICAgICAgdW5hbGxvY2F0ZWQ6ICFpc0xvYWRpbmcgPyB1bmFsbG9jYXRlZFNwZW5kIDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBoLXB4IGJnLXNraW4tYWNjZW50MyBtdC00LjUgbWItNlwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZm9udC1wcmltYXJ5IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgIFNwZW5kIGRpZmZlcmVuY2VcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICB7ZXhwZW5kaXR1cmVDb21wYXJlTGlzdCAmJiBleHBlbmRpdHVyZUNvbXBhcmVMaXN0Lmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGV4cGVuZGl0dXJlQ29tcGFyZUxpc3QubWFwKChleHBlbmRpdHVyZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0dvaW5nT3V0ID0gZXhwZW5kaXR1cmU/Lm5hbWUgPT09IFwiR29pbmcgb3V0XCI7XG4gICAgICAgICAgICBjb25zdCBpc0dhbWJsaW5nID0gZXhwZW5kaXR1cmU/Lm5hbWUgPT09IFwiR2FtYmxpbmdcIjtcbiAgICAgICAgICAgIGNvbnN0IGlzRW1lcmdlbmN5RnVuZCA9IGV4cGVuZGl0dXJlPy5uYW1lID09PSBcIkVtZXJnZW5jeSBmdW5kXCI7XG4gICAgICAgICAgICBpZiAoaXNFbWVyZ2VuY3lGdW5kKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgPEV4cGVuZGl0dXJlQ29tcGFyaXNvbkNhcmRcbiAgICAgICAgICAgICAgICAgIGljb249e2lzR29pbmdPdXQgPyBcIvCfpKlcIiA6IGlzR2FtYmxpbmcgPyBcIvCfkrhcIiA6IGV4cGVuZGl0dXJlPy5lbW9qaX1cbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpc0dvaW5nT3V0ID8gXCJFbnRlcnRhaW5tZW50XCIgOiBpc0dhbWJsaW5nID8gXCJIaWdoIFJpc2sgSW52ZXN0bWVudFwiIDogZXhwZW5kaXR1cmU/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXshaXNMb2FkaW5nID8gZXhwZW5kaXR1cmUucGVyY2VudGFnZSA6IDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUFycm93RG93blJpZ2h0LCBGaUFycm93VXBSaWdodCwgRmlBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgQW5pbWF0ZWROdW1iZXIgZnJvbSBcIi4uL0FuaW1hdGVkTnVtYmVyXCI7XG5cbmludGVyZmFjZSBSYW5kb21FeHBlbmRpdHVyZUNvbXBhcmlzb25DYXJkUHJvcHMge1xuICBwZXJjZW50YWdlOiBudW1iZXI7XG59XG5cbmNvbnN0IFJhbmRvbUV4cGVuZGl0dXJlQ29tcGFyaXNvbkNhcmQ6IFJlYWN0LkZDPFxuICBSYW5kb21FeHBlbmRpdHVyZUNvbXBhcmlzb25DYXJkUHJvcHNcbj4gPSAoeyBwZXJjZW50YWdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGgtNC41IHctNC41ICBtci0yLjUgJHtwZXJjZW50YWdlIDwgMFxuICAgICAgICAgICAgPyBcImJvcmRlciBiZy1bI2ZjZDlkZV0gYm9yZGVyLVsjZWUzZTU5XVwiXG4gICAgICAgICAgICA6IFwiYm9yZGVyIGJnLVsjZGRlYmQ1XSBib3JkZXItWyM1ZjlkMzBdXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge3BlcmNlbnRhZ2UgPCAwID8gKFxuICAgICAgICAgICAgPEZpQXJyb3dEb3duUmlnaHQgY29sb3I9XCIjZWUzZTU5XCIgc2l6ZT1cIjAuNzVyZW1cIiAvPlxuICAgICAgICAgICkgOiBwZXJjZW50YWdlID09IDAgPyAoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGaUFycm93VXBSaWdodCBjb2xvcj1cIiM1ZjlkMzBcIiBzaXplPVwiMC43NXJlbVwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1ib2xkIGZvbnQtcHJpbWFyeSB0ZXh0LXhzICR7cGVyY2VudGFnZSA8IDAgPyBcInRleHQtWyNlZTNlNTldXCIgOiBcInRleHQtWyM1ZjlkMzBdXCJcbiAgICAgICAgICAgIH0gdHJhY2tpbmctd2lkZXN0YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtgJHtwZXJjZW50YWdlID4gMCA/IFwiK1wiIDogXCJcIn1gfVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVyXG4gICAgICAgICAgICAgIHRhcmdldD17cGVyY2VudGFnZX1cbiAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAlXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZG9tRXhwZW5kaXR1cmVDb21wYXJpc29uQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbiB9IGZyb20gXCIuL1RvZ2dsZUJ1dHRvblwiO1xuXG50eXBlIFRvZ2dsZVByb3BzID0ge1xuICB0YWJzPzogQXJyYXk8YW55PjtcbiAgYWN0aXZlVGFiPzogYW55O1xuICBvbkNsaWNrPzogKHRhYjogYW55KSA9PiB2b2lkO1xufTtcbmNvbnN0IFRvZ2dsZSA9ICh7IHRhYnMsIGFjdGl2ZVRhYiwgb25DbGljayB9OiBUb2dnbGVQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1bI0YyRjJGMl1cIj5cbiAgICAgIHt0YWJzPy5tYXAoKGVsZW1lbnQ6IGFueSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGVsZW1lbnQuaWQgPT0gYWN0aXZlVGFiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPXtlbGVtZW50Lm5hbWV9XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBjaGlsZHJlbj17ZWxlbWVudC5pY29ufVxuICAgICAgICAgICAgaXNBY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2soZWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBUb2dnbGVCdXR0b25Qcm9wcyA9IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcbmV4cG9ydCBjb25zdCBUb2dnbGVCdXR0b24gPSAoe1xuICBsYWJlbCxcbiAgb25DbGljayxcbiAgaXNBY3RpdmUgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG59OiBUb2dnbGVCdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICR7XG4gICAgICAgIGlzQWN0aXZlID8gXCIgYmctWyMyNjc2QjhdIHJvdW5kZWQtZnVsbFwiIDogXCJiZy10cmFuc3BhcmVudFwiXG4gICAgICB9IHB4LTQgcHktMS41YH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciAke1xuICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICA/IFwidGV4dC1bI0ZGRkZGRl0gZm9udC1jdXN0b20gdGV4dC14eHhzIGZvbnQtYm9sZCB0cmFja2luZy10YWJfdGV4dFwiXG4gICAgICAgICAgICA6IFwidGV4dC1bIzg2ODY4Nl0gZm9udC1jdXN0b20gdGV4dC14eHhzIGZvbnQtYm9sZCB0cmFja2luZy10YWJfdGV4dFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9pbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzLmNzc1wiO1xuXG5pbnRlcmZhY2UgVG9vbHRpcFByb2dyZXNzQmFyUHJvcHMge1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIG90aGVyc1Byb2dyZXNzU3BlbmQ6IG51bWJlcjtcbiAgbXlQcm9ncmVzc1NwZW5kOiBudW1iZXI7IC8vIEFkZGVkIHNlY29uZCBwcm9ncmVzc1xuICBzdGFydERhdGU6IERhdGU7XG4gIGVuZERhdGU6IERhdGU7XG59XG5cbmNvbnN0IEluc2lnaHRzVnNUb29sdGlwUHJvZ3Jlc3NCYXI6IFJlYWN0LkZDPFRvb2x0aXBQcm9ncmVzc0JhclByb3BzPiA9ICh7XG4gIGJhY2tncm91bmRDb2xvciA9IFwiI0U3RURGM1wiLFxuICBvdGhlcnNQcm9ncmVzc1NwZW5kLFxuICBteVByb2dyZXNzU3BlbmQsIC8vIEFkZGVkIHNlY29uZCBwcm9ncmVzc1xuICBzdGFydERhdGUsXG4gIGVuZERhdGVcbn0pID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgY3VycmVudERheSA9IG5vdy5nZXREYXRlKCk7XG4gIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICBjb25zdCBzdGFydE9mQ3VycmVudE1vbnRoID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxKTtcbiAgY29uc3QgZW5kT2ZDdXJyZW50TW9udGggPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCAwKTtcblxuICAvLyBDaGVjayBpZiB0aGUgcGVyaW9kIGlzIGV4YWN0bHkgb25lIG1vbnRoIGFuZCBtYXRjaGVzIHRoZSBjdXJyZW50IG1vbnRoXG4gIGNvbnN0IGlzQ3VycmVudEZ1bGxNb250aCA9XG4gICAgc3RhcnREYXRlICYmIGVuZERhdGUgJiZcbiAgICBzdGFydERhdGUuZ2V0RGF0ZSgpID09PSBzdGFydE9mQ3VycmVudE1vbnRoLmdldERhdGUoKSAmJlxuICAgIHN0YXJ0RGF0ZS5nZXRNb250aCgpID09PSBzdGFydE9mQ3VycmVudE1vbnRoLmdldE1vbnRoKCkgJiZcbiAgICBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gc3RhcnRPZkN1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpICYmXG4gICAgZW5kRGF0ZS5nZXREYXRlKCkgPT09IGVuZE9mQ3VycmVudE1vbnRoLmdldERhdGUoKSAmJlxuICAgIGVuZERhdGUuZ2V0TW9udGgoKSA9PT0gZW5kT2ZDdXJyZW50TW9udGguZ2V0TW9udGgoKSAmJlxuICAgIGVuZERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZW5kT2ZDdXJyZW50TW9udGguZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBwcm9ncmVzcyA9IChjdXJyZW50RGF5IC8gZGF5c0luTW9udGgpICogMTAwO1xuXG4gIGNvbnN0IGRlZmF1bHRDaXJjbGVTaXplID0gMTA7XG4gIGxldCBteUNpcmNsZVNpemUgPSBkZWZhdWx0Q2lyY2xlU2l6ZTtcblxuICBpZiAob3RoZXJzUHJvZ3Jlc3NTcGVuZCA9PT0gMTAwICYmIG15UHJvZ3Jlc3NTcGVuZCA9PT0gMTAwKSB7XG4gICAgbXlDaXJjbGVTaXplICs9IDQ7XG4gIH1cblxuICBjb25zdCBwcm9ncmVzc1N0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNmY4OWE1XCIsXG4gICAgd2lkdGg6IGAke290aGVyc1Byb2dyZXNzU3BlbmR9JWAsXG4gICAgaGVpZ2h0OiBgMTAwJWAsXG4gICAgekluZGV4OiBvdGhlcnNQcm9ncmVzc1NwZW5kIDwgbXlQcm9ncmVzc1NwZW5kID8gMiA6IDEsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiBhcyBcImFic29sdXRlXCIsXG4gIH07XG5cbiAgY29uc3QgcHJvZ3Jlc3NTdHlsZTI6IENTU1Byb3BlcnRpZXMgPSB7XG4gICAgLi4ucHJvZ3Jlc3NTdHlsZSxcbiAgICB3aWR0aDogYCR7bXlQcm9ncmVzc1NwZW5kfSVgLFxuICAgIHpJbmRleDogbXlQcm9ncmVzc1NwZW5kIDwgb3RoZXJzUHJvZ3Jlc3NTcGVuZCA/IDIgOiAxLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIgYXMgXCJhYnNvbHV0ZVwiLFxuICB9O1xuXG4gIGNvbnN0IHRvb2x0aXBTdHlsZSA9IHtcbiAgICBsZWZ0OiBgY2FsYygke3Byb2dyZXNzfSUgLSAyZW0pYCxcbiAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC44KVwiLFxuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICB7c3RhcnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgIHtlbmREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG10LTIuNSB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2cy10b29sdGlwLXByb2dyZXNzLWJhclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2cy10b29sdGlwLXByb2dyZXNzLWJhci1wcm9ncmVzc1wiXG4gICAgICAgICAgICBzdHlsZT17eyAuLi5wcm9ncmVzc1N0eWxlLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRjNGM0Y1wiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2cy10b29sdGlwLXByb2dyZXNzLWJhci1jaXJjbGVcIiBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogYCR7bXlDaXJjbGVTaXplfXB4YCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtteUNpcmNsZVNpemV9cHhgLFxuICAgICAgICAgICAgfX0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidnMtdG9vbHRpcC1wcm9ncmVzcy1iYXItcHJvZ3Jlc3MyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnByb2dyZXNzU3R5bGUyLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzY3ODZjM1wiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2cy10b29sdGlwLXByb2dyZXNzLWJhci1jaXJjbGUyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzQ3VycmVudEZ1bGxNb250aCAmJiA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb3R0ZWQtZGl2aWRlci1jb250YWluZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgY2FsYygke01hdGguY2VpbChwcm9ncmVzcyl9JSlgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90dGVkLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwXCIgc3R5bGU9e3Rvb2x0aXBTdHlsZX0+XG4gICAgICAgICAgICAgIFRvZGF5XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0c1ZzVG9vbHRpcFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkJhclRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclRpdGxlXCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgRmlDYWxlbmRhciB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQXZhaWxhYmxlQnVkZ2V0Q29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnVkZ2V0L0F2YWlsYWJsZUJ1ZGdldENvbnRhaW5lclwiO1xuaW1wb3J0IHVzZUN1cnJlbmN5U2V0dGluZ3NTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2N1cnJlbmN5U2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnNpZ2h0cy9Ub2dnbGVcIjtcbmltcG9ydCB7IGJ1ZGdldFNwZW5kVGFicywgaW5zaWdodHNUb2dnbGVUYWJzIH0gZnJvbSBcImNsaWVudC91dGlscy9Nb2NrRGF0YVwiO1xuaW1wb3J0IFRhYkZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJGaWx0ZXJcIjtcbmltcG9ydCB7IE15U3BlbmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnNpZ2h0cy9NeVNwZW5kXCI7XG5pbXBvcnQgeyBPdGhlcnNTcGVuZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2luc2lnaHRzL090aGVyc1NwZW5kXCI7XG5pbXBvcnQgQ2FzaEZsb3dQaWVDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXNoRmxvd1BpZUNoYXJ0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBlbnJpY2hUcmFuc2FjdGlvbnMsIGdldENhc2hGbG93IH0gZnJvbSBcImNsaWVudC9hcGkvdHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VVc2VyU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS91c2VyU3RvcmVcIjtcbmltcG9ydCB1c2VDYXRlZ29yaWVzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9jYXRlZ29yaWVzU3RvcmVcIjtcbmltcG9ydCB1c2VNYWNyb0dvYWxzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9tYWNyb0dvYWxTdG9yZVwiO1xuaW1wb3J0IHsgQm90dG9tU2hlZXQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nLWJvdHRvbS1zaGVldFwiO1xuaW1wb3J0IEluc2lnaHRzRmlsdGVycyBmcm9tIFwiLi9JbnNpZ2h0c0ZpbHRlcnNcIjtcbmltcG9ydCB1c2VBY2NvdW50U3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9hY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50cyBmcm9tIFwiY2xpZW50L21vZGVscy9BY2NvdW50c1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcImNsaWVudC9tb2RlbHMvQWNjb3VudFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBnZXRBY2NvdW50cyBmcm9tIFwiY2xpZW50L2FwaS9hY2NvdW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNYWNyb1R5cGVUb3RhbHMgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB1c2VNaWNyb0dvYWxzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9taWNyb0dvYWxTdG9yZVwiO1xuaW1wb3J0IHVzZUNhc2hmbG93VmFyaWFibGVzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9jYXNoRmxvd1N0b3JlXCI7XG5pbXBvcnQgQ2FzaEZsb3dGaWx0ZXJCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zaWdodHMvQ2FzaEZsb3dGaWx0ZXJCdXR0b25cIjtcbmltcG9ydCBJbnNpZ2h0c0V4cGVuZGl0dXJlQ2hhcnQgZnJvbSBcIi4vaW5zaWdodHNDaGFydC9JbnNpZ2h0c0V4cGVuZGl0dXJlQ2hhcnRcIjtcbmltcG9ydCBHcmFwaExlZ2VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmFwaExlZ2VuZFwiO1xuaW1wb3J0IHVzZUluc2lnaHRzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9pbnNpZ2h0c1N0b3JlXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBiYW5rSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9idWRnZXRzLWluc2lnaHRzL2Jhbmsuc3ZnXCI7XG5pbXBvcnQgSW5zaWdodHNTYXZpbmdzQ2hhcnQgZnJvbSBcIi4vaW5zaWdodHNDaGFydC9JbnNpZ2h0c1NhdmluZ3NDaGFydFwiO1xuXG5jb25zdCBJbnNpZ2h0c1ZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IGluc2lnaHRzU3RvcmVTdGF0ZSA9IHVzZUluc2lnaHRzU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZSk7XG4gIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gdXNlQ3VycmVuY3lTZXR0aW5nc1N0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jdXJyZW5jeVN5bWJvbFxuICApO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvbmZpZ3VyYXRpb25cbiAgKSBhcyBJQ29uZmlnO1xuICBjb25zdCB1c2VyU3RvcmUgPSB1c2VVc2VyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgbWFjcm9Hb2FsU3RvcmUgPSB1c2VNYWNyb0dvYWxzU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcblxuICBpbnRlcmZhY2UgSUNhc2hGbG93RGF0YSB7XG4gICAgdG90YWxfY3JlZGl0PzogbnVtYmVyO1xuICAgIHRvdGFsX2RlYml0PzogbnVtYmVyO1xuICAgIHRvdGFsX2NoYW5nZT86IG51bWJlcjtcbiAgfVxuXG4gIGNvbnN0IFtjYXNoRmxvd0RhdGEsIHNldENhc2hGbG93RGF0YV0gPSB1c2VTdGF0ZTxJQ2FzaEZsb3dEYXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHtcbiAgICB0b3RhbF9jcmVkaXQ6IG1vbmV5SW4gPSAwLFxuICAgIHRvdGFsX2RlYml0OiBtb25leU91dCA9IDAsXG4gICAgdG90YWxfY2hhbmdlOiBuZXRDYXNoRmxvdyA9IDAsXG4gIH0gPSBjYXNoRmxvd0RhdGEgfHwge307XG4gIGNvbnN0IGNhdGVnb3J5U3RvcmUgPSB1c2VDYXRlZ29yaWVzU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgZXNzZW50aWFsVG90YWxCdWRnZXRBbW91bnQgPVxuICAgIGNhdGVnb3J5U3RvcmUuY2F0ZWdvcnlCdWRnZXRzWzBdPy50b3RhbF9hbW91bnQ7XG4gIGNvbnN0IHdhbnRzVG90YWxCdWRnZXRBbW91bnQgPSBjYXRlZ29yeVN0b3JlLmNhdGVnb3J5QnVkZ2V0c1sxXT8udG90YWxfYW1vdW50O1xuICBjb25zdCBzYXZpbmdzVG90YWxCdWRnZXRBbW91bnQgPVxuICAgIGNhdGVnb3J5U3RvcmUuY2F0ZWdvcnlCdWRnZXRzWzJdPy50b3RhbF9hbW91bnQ7XG4gIGNvbnN0IHByZXZpb3VzRXNzZW50aWFsVG90YWxFeHBlbnNlcyA9XG4gICAgY2F0ZWdvcnlTdG9yZS5jYXRlZ29yeUJ1ZGdldHNbMF0ucmFuZ2VfZXhwZW5zZS5sYXN0X21vbnRoX3RvdGFsO1xuICBjb25zdCBlc3NlbnRpYWxUb3RhbEV4cGVuc2VzID1cbiAgICBjYXRlZ29yeVN0b3JlLmNhdGVnb3J5QnVkZ2V0c1swXS5yYW5nZV9leHBlbnNlLnRoaXNfbW9udGhfdG90YWw7XG4gIGNvbnN0IHdhbnRzVG90YWxFeHBlbnNlcyA9XG4gICAgY2F0ZWdvcnlTdG9yZS5jYXRlZ29yeUJ1ZGdldHNbMV0ucmFuZ2VfZXhwZW5zZS50aGlzX21vbnRoX3RvdGFsO1xuICBjb25zdCBwcmV2aW91c1dhbnRzVG90YWxFeHBlbnNlcyA9XG4gICAgY2F0ZWdvcnlTdG9yZS5jYXRlZ29yeUJ1ZGdldHNbMV0ucmFuZ2VfZXhwZW5zZS5sYXN0X21vbnRoX3RvdGFsO1xuICBjb25zdCBzYXZpbmdzVG90YWxFeHBlbnNlcyA9XG4gICAgY2F0ZWdvcnlTdG9yZS5jYXRlZ29yeUJ1ZGdldHNbMl0ucmFuZ2VfZXhwZW5zZS50aGlzX21vbnRoX3RvdGFsO1xuICBjb25zdCBwcmV2aW91c1NhdmluZ3NUb3RhbEV4cGVuc2VzID1cbiAgICBjYXRlZ29yeVN0b3JlLmNhdGVnb3J5QnVkZ2V0c1syXS5yYW5nZV9leHBlbnNlLmxhc3RfbW9udGhfdG90YWw7XG5cbiAgY29uc3QgdG90YWxCdWRnZXRBbW91bnQgPVxuICAgIGVzc2VudGlhbFRvdGFsQnVkZ2V0QW1vdW50ICtcbiAgICB3YW50c1RvdGFsQnVkZ2V0QW1vdW50ICtcbiAgICBzYXZpbmdzVG90YWxCdWRnZXRBbW91bnQ7XG4gIC8vIGNvbnN0IHRvdGFsRXhwZW5zZXMgPVxuICAvLyAgIGVzc2VudGlhbFRvdGFsRXhwZW5zZXMgKyB3YW50c1RvdGFsRXhwZW5zZXMgKyBzYXZpbmdzVG90YWxFeHBlbnNlcztcbiAgY29uc3QgYWNjb3VudFN0b3JlID0gdXNlQWNjb3VudFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IGFjY291bnRzID0gYWNjb3VudFN0b3JlLmFjY291bnRzIGFzIEFjY291bnRzO1xuXG4gIGNvbnN0IGNhc2hmbG93VmFyaWFibGVzID1cbiAgICB1c2VDYXNoZmxvd1ZhcmlhYmxlc1N0b3JlLmdldFN0YXRlKCkuY2FzaGZsb3dWYXJpYWJsZXM7XG4gIGNvbnN0IFtlc3NlbnRpYWxzQXJyYXksIHNldEVzc2VudGlhbHNBcnJheV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbd2FudHNBcnJheSwgc2V0V2FudHNBcnJheV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbZXNzZW50aWFsc0RhdGEsIHNldEVzc2VudGlhbHNEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFt3YW50c0RhdGEsIHNldFdhbnRzRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbc2F2aW5nc0RhdGEsIHNldFNhdmluZ3NEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtzYXZpbmdzQXJyYXksIHNldFNhdmluZ3NBcnJheV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ2FzaEZsb3dEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgaW5zaWdodHNTdG9yZVN0YXRlLnNldEluc2lnaHRzTG9hZGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IGdldENhc2hGbG93KHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlnLFxuICAgICAgICBzdGFydF9kYXRlOlxuICAgICAgICAgIGZvcm1hdChpbnNpZ2h0c1N0b3JlU3RhdGUuaW5zaWdodHNTdGFydERhdGUsIFwieXl5eS1NTS1kZFwiKSB8fFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgZW5kX2RhdGU6XG4gICAgICAgICAgZm9ybWF0KGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c0VuZERhdGUsIFwieXl5eS1NTS1kZFwiKSB8fCB1bmRlZmluZWQsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hY3JvVHlwZURpc3RyaWJ1dGlvbiA9IGNvbnZlcnRUcmFuc2FjdGlvbnNUb0RhdGFTZXJpZXMoXG4gICAgICAgICAgICBkYXRhLnRyYW5zYWN0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3Qgd2FudHNEYXRhID0gZ2V0RGF0YUZvck1hY3JvTmFtZShtYWNyb1R5cGVEaXN0cmlidXRpb24sIFwiV2FudHNcIik7XG4gICAgICAgICAgY29uc3QgZXNzZW50aWFsc0RhdGEgPSBnZXREYXRhRm9yTWFjcm9OYW1lKFxuICAgICAgICAgICAgbWFjcm9UeXBlRGlzdHJpYnV0aW9uLFxuICAgICAgICAgICAgXCJFc3NlbnRpYWxzXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHNhdmluZ3NEYXRhID0gZ2V0RGF0YUZvck1hY3JvTmFtZShcbiAgICAgICAgICAgIG1hY3JvVHlwZURpc3RyaWJ1dGlvbixcbiAgICAgICAgICAgIFwiU2F2aW5nc1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRFc3NlbnRpYWxzRGF0YShlc3NlbnRpYWxzRGF0YSk7XG4gICAgICAgICAgc2V0V2FudHNEYXRhKHdhbnRzRGF0YSk7XG4gICAgICAgICAgc2V0U2F2aW5nc0RhdGEoc2F2aW5nc0RhdGEpO1xuICAgICAgICAgIGNvbnN0IGVzc2VudGlhbHNBcnJheSA9IGdlbmVyYXRlTGluZWFyUHJvZ3Jlc3Npb24oZXNzZW50aWFsc0RhdGEpO1xuICAgICAgICAgIGNvbnN0IHdhbnRzQXJyYXkgPSBnZW5lcmF0ZUxpbmVhclByb2dyZXNzaW9uKHdhbnRzRGF0YSk7XG4gICAgICAgICAgY29uc3Qgc2F2aW5nc0FycmF5ID0gZ2VuZXJhdGVMaW5lYXJQcm9ncmVzc2lvbihzYXZpbmdzRGF0YSk7XG4gICAgICAgICAgc2V0RXNzZW50aWFsc0FycmF5KGVzc2VudGlhbHNBcnJheSk7XG4gICAgICAgICAgc2V0V2FudHNBcnJheSh3YW50c0FycmF5KTtcbiAgICAgICAgICBzZXRTYXZpbmdzQXJyYXkoc2F2aW5nc0FycmF5KTtcbiAgICAgICAgICBzZXRDYXNoRmxvd0RhdGEoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBpbnNpZ2h0c1N0b3JlU3RhdGUuc2V0SW5zaWdodHNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgaW5zaWdodHNTdG9yZVN0YXRlLnNldEluc2lnaHRzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGZldGNoQ2FzaEZsb3dEYXRhKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaW5zaWdodHNTdG9yZVN0YXRlLnNldEluc2lnaHRzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpbnNpZ2h0c1N0b3JlU3RhdGUuc2V0SW5zaWdodHNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXG4gICAgaW5zaWdodHNTdG9yZVN0YXRlLmluc2lnaHRzU3RhcnREYXRlLFxuICAgIGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c0VuZERhdGUsXG4gIF0pO1xuICBjb25zdCBbdG9nZ2xlVGFiSWQsIHNldFRvZ2dsZVRhYklkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYnVkZ2V0U3BlbmRUYWJJZCwgc2V0QnVkZ2V0U3BlbmRUYWJJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBbZmlsdGVyLCBvcGVuRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZmlsdGVyQWNjb3VudEJ5ID0gdXNlQWNjb3VudFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5maWx0ZXJCeSk7XG4gIGNvbnN0IGZpbHRlcmVkQWNjb3VudCA9IHVzZUFjY291bnRTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuZmlsdGVyXG4gICkgYXMgQWNjb3VudDtcbiAgY29uc3QgeyBkYXRhOiBmZXRjaGVkQWNjb3VudHMgfSA9IHVzZVF1ZXJ5KFxuICAgIFwiZmV0Y2gtYWNjb3VudHNcIixcbiAgICAoKSA9PlxuICAgICAgZ2V0QWNjb3VudHMoY29uZmlnKS50aGVuKChhY2NvdW50cykgPT4ge1xuICAgICAgICBhY2NvdW50U3RvcmUuaW5pdChhY2NvdW50cyB8fCBbXSk7XG4gICAgICB9KSxcbiAgICB7IHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSB9XG4gICk7XG4gIGNvbnN0IG1pY3JvR29hbHMgPSB1c2VNaWNyb0dvYWxzU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5taWNyb0dvYWxzKTtcbiAgY29uc3QgbWFjcm9UeXBlVG90YWxzID0gY2FsY3VsYXRlTWFjcm9UeXBlVG90YWxzKG1pY3JvR29hbHMpO1xuICBjb25zdCB7XG4gICAgV2FudHM6IHdhbnRzVG90YWwgPSAwLFxuICAgIEVzc2VudGlhbHM6IGVzc2VudGlhbHNUb3RhbCA9IDAsXG4gICAgU2F2aW5nczogc2F2aW5nc1RvdGFsID0gMCxcbiAgfSA9IG1hY3JvVHlwZVRvdGFscy5yZWR1Y2UoKGFjYywgeyBtYWNyb1R5cGUsIHRvdGFsIH0pID0+IHtcbiAgICBhY2NbbWFjcm9UeXBlXSA9IHRvdGFsIHx8IDA7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgYW55KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGVucmljaFRyYW5zYWN0aW9ucyh7IGNvbmZpZ3VyYXRpb246IGNvbmZpZyB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvdGFsRXhwZW5zZXMgPSB3YW50c1RvdGFsICsgZXNzZW50aWFsc1RvdGFsICsgc2F2aW5nc1RvdGFsO1xuICBjb25zdCBjbG9zZUJvdHRvbVNoZWV0ID0gKCkgPT4ge1xuICAgIG9wZW5GaWx0ZXIoZmFsc2UpO1xuICB9O1xuICBjb25zdCBkZWJ0QXJyYXkgPSBbXG4gICAge1xuICAgICAgeDogXCIyMDI0LTA1LTE2XCIsXG4gICAgICB5OiAyNTAwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IFwiMjAyNC0wNS0xNVwiLFxuICAgICAgeTogMzAwMDAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBcIjIwMjQtMDUtMTRcIixcbiAgICAgIHk6IDUwMDAwLFxuICAgIH0sXG4gICAge1xuICAgICAgeDogXCIyMDI0LTA1LTEzXCIsXG4gICAgICB5OiA1MDAwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IFwiMjAyNC0wNS0xMlwiLFxuICAgICAgeTogODA5OTIsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBcIjIwMjQtMDUtMTFcIixcbiAgICAgIHk6IDg1MDAwLFxuICAgIH0sXG4gICAge1xuICAgICAgeDogXCIyMDI0LTA1LTEwXCIsXG4gICAgICB5OiA4NTk5MixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0zLjVcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPE5hdkJhclRpdGxlIHRpdGxlPVwiSW5zaWdodHNcIiBmb250U2l6ZT1cInRleHQtMnhsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5GaWx0ZXIodHJ1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlGaWx0ZXIgY29sb3I9XCIjMTAxMDEwXCIgc2l6ZT1cIjEuNXJlbVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgaC1weCBiZy1za2luLWFjY2VudDNcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMyBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgbXgtMy41XCI+XG4gICAgICAgIDxDYXNoRmxvd0ZpbHRlckJ1dHRvblxuICAgICAgICAgIGxhYmVsPXtpbnNpZ2h0c1N0b3JlU3RhdGUuaW5zaWdodHNBY3RpdmVJbnN0aXR1dGlvbk5hbWV9XG4gICAgICAgICAgaWNvbj17PGltZyBzcmM9e2JhbmtJY29ufSBhbHQ9XCJcIiAvPn1cbiAgICAgICAgICBrZXk9e2BBbGwgYWNjb3VudHNgfVxuICAgICAgICAgIGlzQWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRmlsdGVyKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FzaEZsb3dGaWx0ZXJCdXR0b25cbiAgICAgICAgICBsYWJlbD17aW5zaWdodHNTdG9yZVN0YXRlLmluc2lnaHRzRGF0ZUZpbHRlck5hbWV9XG4gICAgICAgICAgaWNvbj17PEZpQ2FsZW5kYXIgY29sb3I9XCIjMTAxMDEwXCIgLz59XG4gICAgICAgICAga2V5PXtgVGhpcyBtb250aGB9XG4gICAgICAgICAgaXNBY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5GaWx0ZXIodHJ1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yIG14LTMuNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtci01XCI+XG4gICAgICAgICAge3RvZ2dsZVRhYklkID09IDAgPyAoXG4gICAgICAgICAgICA8QXZhaWxhYmxlQnVkZ2V0Q29udGFpbmVyXG4gICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgZXNzZW50aWFsc0RhdGEucmVkdWNlKChhOiBudW1iZXIsIGI6IGFueSkgPT4gYSArIGIueSwgMCkgK1xuICAgICAgICAgICAgICAgICAgd2FudHNEYXRhLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBhbnkpID0+IGEgKyBiLnksIDApID8/IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdWJ0aXRsZT1cIkN1cnJlbnQgdG90YWwgc3BlbmRpbmdcIlxuICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbD17Y3VycmVuY3lTeW1ib2x9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QXZhaWxhYmxlQnVkZ2V0Q29udGFpbmVyXG4gICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgMjUwMDBcbiAgICAgICAgICAgICAgICAvLyBzYXZpbmdzRGF0YS5yZWR1Y2UoKGE6IG51bWJlciwgYjogYW55KSA9PiBhICsgYi55LCAwKSA/PyAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3VidGl0bGU9XCJUb3RhbCBkZWJ0XCJcbiAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2w9e2N1cnJlbmN5U3ltYm9sfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgIHRhYnM9e2luc2lnaHRzVG9nZ2xlVGFic31cbiAgICAgICAgICAgIGFjdGl2ZVRhYj17dG9nZ2xlVGFiSWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsodGFiOiBhbnkpID0+IHNldFRvZ2dsZVRhYklkKHRhYi5pZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtdC00IG1iLTZcIj5cbiAgICAgICAgICB7dG9nZ2xlVGFiSWQgPT09IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxJbnNpZ2h0c0V4cGVuZGl0dXJlQ2hhcnRcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbD17Y3VycmVuY3lTeW1ib2x9XG4gICAgICAgICAgICAgICAgZXNzZW50aWFsc0FycmF5PXtpc0xvYWRpbmcgPyBbXSA6IGVzc2VudGlhbHNBcnJheX1cbiAgICAgICAgICAgICAgICB3YW50c0FycmF5PXtpc0xvYWRpbmcgPyBbXSA6IHdhbnRzQXJyYXl9XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS14LTFcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMTBweCAycHggMTBweFwiLFxuICAgICAgICAgICAgICAgICAgZ2FwOiBcIjEuMjVyZW1cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdyYXBoTGVnZW5kIGNvbG9yPVwiIzAwOUZEQ1wiIGxhYmVsPVwiRXNzZW50aWFscyBzcGVuZFwiIC8+XG4gICAgICAgICAgICAgICAgPEdyYXBoTGVnZW5kIGNvbG9yPVwiIzM1NEFBNlwiIGxhYmVsPVwiV2FudHMgc3BlbmRcIiAvPlxuICAgICAgICAgICAgICAgIDxHcmFwaExlZ2VuZCBjb2xvcj1cIiMwMzZBQjNcIiBsYWJlbD1cIkRlYnQgcmVwYXltZW50XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgLy8gPFNhdmluZ3NCYXJHcmFwaFxuICAgICAgICAgICAgLy8gICBwcmV2aW91c01vbnRoU2F2aW5ncz17cHJldmlvdXNTYXZpbmdzVG90YWxFeHBlbnNlc31cbiAgICAgICAgICAgIC8vICAgY3VycmVudE1vbnRoU2F2aW5ncz17c2F2aW5nc1RvdGFsfVxuICAgICAgICAgICAgLy8gICBzYXZpbmdzVGFyZ2V0PXtzYXZpbmdzVG90YWxCdWRnZXRBbW91bnR9XG4gICAgICAgICAgICAvLyAgIGJ1ZGdldExpbWl0PXt1c2VyU3RvcmUudXNlci5pbmNvbWV9XG4gICAgICAgICAgICAvLyAgIGN1cnJlbnRNb250aERhdGU9e1xuICAgICAgICAgICAgLy8gICAgIGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c1N0YXJ0RGF0ZSA/PyBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxJbnNpZ2h0c1NhdmluZ3NDaGFydFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sPXtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICAgICAgICBzYXZpbmdzQXJyYXk9e2lzTG9hZGluZyA/IFtdIDogZGVidEFycmF5fVxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BhY2UteC0xXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDEwcHggMnB4IDEwcHhcIixcbiAgICAgICAgICAgICAgICAgIGdhcDogXCIxLjI1cmVtXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHcmFwaExlZ2VuZCBjb2xvcj1cIiMwMzZBQjNcIiBsYWJlbD1cIlRvdGFsIGRlYnRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY2FyZCBweC00IHB5LTYgbWItMTAgcm91bmRlZC1sZyBtdC0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1za2luLWJhc2UgZm9udC1tZWRpdW0gdHJhY2tpbmctdGl0bGUgZm9udC1jdXN0b21cIj5cbiAgICAgICAgICAgIGRlYnQgYW5hbHlzaXMgc25hcHNob3RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXNraW4tYmFzZSB0ZXh0LXNtIHRyYWNraW5nLWxpc3R0aWxlX3N1YnRpdGxlIG10LTFcIj5cbiAgICAgICAgICAgIPCfjIggQSBicmlnaHRlciBmaW5hbmNpYWwgZnV0dXJlIGFoZWFkISBZb3UndmUgY3V0IGRvd24geW91ciBkZWJ0IHNpZ25pZmljYW50bHkuIEtlZXAgZ29pbmchXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERlYnRDaGFydCBtb3J0Z2FnZT17MzAwMDAwMH0gYXV0b0xvYW49ezE1MDAwMDB9IGNyZWRpdENhcmQ9ezIyMTU5OTJ9IHRvdGFsRGVidD17NjcxNTk5Mn0gLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICA8Q2FzaEZsb3dQaWVDaGFydFxuICAgICAgICAgICAgZGltZW5zaW9ucz17MTkwfVxuICAgICAgICAgICAgZG91Z2hudXRUaGlja25lc3M9ezE0fVxuICAgICAgICAgICAgdmFsdWVzPXt7XG4gICAgICAgICAgICAgIG1vbmV5SW46IGlzTG9hZGluZyA/IDAgOiBjYXNoRmxvd0RhdGE/LnRvdGFsX2NyZWRpdCB8fCAwLFxuICAgICAgICAgICAgICBtb25leU91dDogaXNMb2FkaW5nID8gMCA6IGNhc2hGbG93RGF0YT8udG90YWxfZGViaXQgfHwgMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwZXJjZW50YWdlQ2hhbmdlPXtpc0xvYWRpbmcgPyAwIDogY2FzaEZsb3dEYXRhPy50b3RhbF9jaGFuZ2UgfHwgMH1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jYXJkIHB4LTQgcHktNiBtYi0xMCByb3VuZGVkLWxnIG10LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LXNraW4tYmFzZSBmb250LW1lZGl1bSB0cmFja2luZy10aXRsZSBmb250LWN1c3RvbVwiPlxuICAgICAgICAgICAgQnVkZ2V0IHNwZW5kXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00LjVcIj5cbiAgICAgICAgICAgIDxUYWJGaWx0ZXJcbiAgICAgICAgICAgICAgdGFicz17YnVkZ2V0U3BlbmRUYWJzfVxuICAgICAgICAgICAgICBhY3RpdmVUYWI9e2J1ZGdldFNwZW5kVGFiSWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyh0YWI6IGFueSkgPT4gc2V0QnVkZ2V0U3BlbmRUYWJJZCh0YWIuaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbXQtNiBteC0yIGJvcmRlci1za2luLWJvcmRlclwiPlxuICAgICAgICAgICAge2J1ZGdldFNwZW5kVGFiSWQgPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxNeVNwZW5kXG4gICAgICAgICAgICAgICAgc3BlbnQ9e3RvdGFsRXhwZW5zZXN9XG4gICAgICAgICAgICAgICAgYnVkZ2V0PXt0b3RhbEJ1ZGdldEFtb3VudH1cbiAgICAgICAgICAgICAgICB3YW50c1NwZW5kPXt3YW50c1RvdGFsID8/IDB9XG4gICAgICAgICAgICAgICAgc2F2aW5nc1NwZW5kPXtzYXZpbmdzVG90YWwgPz8gMH1cbiAgICAgICAgICAgICAgICBlc3NlbnRpYWxzU3BlbmQ9e2Vzc2VudGlhbHNUb3RhbCA/PyAwfVxuICAgICAgICAgICAgICAgIHVuYWxsb2NhdGVkU3BlbmQ9e3VzZXJTdG9yZS51c2VyLmluY29tZSAtIHRvdGFsQnVkZ2V0QW1vdW50fVxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17XG4gICAgICAgICAgICAgICAgICBmb3JtYXQoaW5zaWdodHNTdG9yZVN0YXRlLmluc2lnaHRzU3RhcnREYXRlLCBcInl5eXktTU0tZGRcIikgPz9cbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmREYXRlPXtcbiAgICAgICAgICAgICAgICAgIGZvcm1hdChpbnNpZ2h0c1N0b3JlU3RhdGUuaW5zaWdodHNFbmREYXRlLCBcInl5eXktTU0tZGRcIikgPz9cbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxPdGhlcnNTcGVuZFxuICAgICAgICAgICAgICAgIHNwZW50QnVkZ2V0PXt0b3RhbEV4cGVuc2VzfVxuICAgICAgICAgICAgICAgIHBsYW5uZWRCdWRnZXQ9e3RvdGFsQnVkZ2V0QW1vdW50fVxuICAgICAgICAgICAgICAgIHdhbnRzU3BlbmQ9e3dhbnRzVG90YWwgPz8gMH1cbiAgICAgICAgICAgICAgICBzYXZpbmdzU3BlbmQ9e3NhdmluZ3NUb3RhbCA/PyAwfVxuICAgICAgICAgICAgICAgIGVzc2VudGlhbHNTcGVuZD17ZXNzZW50aWFsc1RvdGFsID8/IDB9XG4gICAgICAgICAgICAgICAgdW5hbGxvY2F0ZWRTcGVuZD17MH1cbiAgICAgICAgICAgICAgICBzdGFydERhdGU9e1xuICAgICAgICAgICAgICAgICAgZm9ybWF0KGluc2lnaHRzU3RvcmVTdGF0ZS5pbnNpZ2h0c1N0YXJ0RGF0ZSwgXCJ5eXl5LU1NLWRkXCIpID8/XG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5kRGF0ZT17XG4gICAgICAgICAgICAgICAgICBmb3JtYXQoaW5zaWdodHNTdG9yZVN0YXRlLmluc2lnaHRzRW5kRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpID8/XG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgIDxCb3R0b21TaGVldFxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4ge1xuICAgICAgICAgICAgb3BlbkZpbHRlcihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvcGVuPXtmaWx0ZXJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjQsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgICA8SW5zaWdodHNGaWx0ZXJzXG4gICAgICAgICAgICAgIGFjY291bnRzPXthY2NvdW50c31cbiAgICAgICAgICAgICAgYWN0aXZlQWNjb3VudD17ZmlsdGVyZWRBY2NvdW50fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoYWNjb3VudDogQWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbHRlckFjY291bnRCeShhY2NvdW50KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xvc2VCb3R0b21TaGVldD17Y2xvc2VCb3R0b21TaGVldH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHRTbmFwPXs0MDB9XG4gICAgICAgID48L0JvdHRvbVNoZWV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHNWaWV3O1xuXG5pbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICB0b3RhbF9hbW91bnQ6IG51bWJlcjtcbiAgdHJhbnNhY3RlZF9hdDogc3RyaW5nO1xuICBtYWNyb19uYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHg6IHN0cmluZztcbiAgeTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRGF0YVNlcmllcyB7XG4gIFttYWNyb19uYW1lOiBzdHJpbmddOiBEYXRhUG9pbnRbXTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRyYW5zYWN0aW9uc1RvRGF0YVNlcmllcyhcbiAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdXG4pOiBEYXRhU2VyaWVzIHtcbiAgY29uc3QgZGF0YVNlcmllczogRGF0YVNlcmllcyA9IHt9O1xuXG4gIHRyYW5zYWN0aW9ucy5mb3JFYWNoKCh0cmFuc2FjdGlvbikgPT4ge1xuICAgIGlmICghZGF0YVNlcmllc1t0cmFuc2FjdGlvbi5tYWNyb19uYW1lXSkge1xuICAgICAgZGF0YVNlcmllc1t0cmFuc2FjdGlvbi5tYWNyb19uYW1lXSA9IFtdO1xuICAgIH1cbiAgICBpZiAodHJhbnNhY3Rpb24udHlwZSA9PT0gXCJkZWJpdFwiKSB7XG4gICAgICBkYXRhU2VyaWVzW3RyYW5zYWN0aW9uLm1hY3JvX25hbWVdLnB1c2goe1xuICAgICAgICB4OiB0cmFuc2FjdGlvbi50cmFuc2FjdGVkX2F0LFxuICAgICAgICB5OiB0cmFuc2FjdGlvbi50b3RhbF9hbW91bnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhU2VyaWVzO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRm9yTWFjcm9OYW1lKGRhdGE6IERhdGFTZXJpZXMsIG1hY3JvTmFtZTogc3RyaW5nKTogRGF0YVBvaW50W10ge1xuICByZXR1cm4gKFxuICAgIGRhdGFbbWFjcm9OYW1lXT8uc29ydChcbiAgICAgIChhLCBiKSA9PiBuZXcgRGF0ZShhLngpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIueCkuZ2V0VGltZSgpXG4gICAgKSB8fCBbXVxuICApO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxpbmVhclByb2dyZXNzaW9uKGRhdGE6IERhdGFQb2ludFtdKTogRGF0YVBvaW50W10ge1xuICB0cnkge1xuICAgIC8vIENoZWNrIGlmIGFsbCBkYXRhIHBvaW50cyBhcmUgaW4gdGhlIHNhbWUgbW9udGhcbiAgICBjb25zdCBzYW1lTW9udGggPSBkYXRhLmV2ZXJ5KFxuICAgICAgKHBvaW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgIGluZGV4ID09PSAwIHx8IHBvaW50Lnguc2xpY2UoMCwgNykgPT09IGFycmF5W2luZGV4IC0gMV0ueC5zbGljZSgwLCA3KVxuICAgICk7XG5cbiAgICAvLyBJZiBub3QgYWxsIGRhdGEgcG9pbnRzIGFyZSBpbiB0aGUgc2FtZSBtb250aCwgcmV0dXJuIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgIGlmICghc2FtZU1vbnRoKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgbGluZWFyIHByb2dyZXNzaW9uIHdpdGhpbiB0aGUgc2FtZSBtb250aFxuICAgIGNvbnN0IGxpbmVhclByb2dyZXNzaW9uOiBEYXRhUG9pbnRbXSA9IFtdO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGFbMF0/LngpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50UG9pbnQgPSBkYXRhW2ldO1xuICAgICAgd2hpbGUgKFxuICAgICAgICBuZXcgRGF0ZShjdXJyZW50UG9pbnQ/LngpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApICE9PVxuICAgICAgICBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgICAgKSB7XG4gICAgICAgIGxpbmVhclByb2dyZXNzaW9uLnVuc2hpZnQoe1xuICAgICAgICAgIHg6IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgICAgIHk6IHN1bSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSk7IC8vIERlY3JlbWVudCB0aGUgZGF0ZVxuICAgICAgfVxuICAgICAgc3VtICs9IGN1cnJlbnRQb2ludC55O1xuICAgICAgbGluZWFyUHJvZ3Jlc3Npb24udW5zaGlmdCh7IHg6IGN1cnJlbnRQb2ludD8ueCwgeTogc3VtIH0pO1xuICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTsgLy8gRGVjcmVtZW50IHRoZSBkYXRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVhclByb2dyZXNzaW9uO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJyZWFjdC1hcGV4Y2hhcnRzXCI7XG5pbXBvcnQgeyBBcGV4T3B0aW9ucyB9IGZyb20gXCJhcGV4Y2hhcnRzXCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25FbXB0eVN0YXRlIH0gZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL0VtcHR5U3RhdGVcIjtcbmltcG9ydCBsb2FkZXJTdmcgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvTG9hZGVyLnN2Z1wiO1xuaW1wb3J0IEN1c3RvbUxvYWRlciBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvTG9hZGVyL0N1c3RvbUxvYWRlclwiO1xuXG5pbnRlcmZhY2UgRGF0YVBvaW50IHtcbiAgeDogc3RyaW5nO1xuICB5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJbnNpZ2h0c0V4cGVuZGl0dXJlQ2hhcnRQcm9wcyB7XG4gIGN1cnJlbmN5U3ltYm9sOiBzdHJpbmc7XG4gIGVzc2VudGlhbHNBcnJheTogRGF0YVBvaW50W107XG4gIHdhbnRzQXJyYXk6IERhdGFQb2ludFtdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IEluc2lnaHRzRXhwZW5kaXR1cmVDaGFydDogUmVhY3QuRkM8SW5zaWdodHNFeHBlbmRpdHVyZUNoYXJ0UHJvcHM+ID0gKHtcbiAgY3VycmVuY3lTeW1ib2wsXG4gIGVzc2VudGlhbHNBcnJheSxcbiAgd2FudHNBcnJheSxcbiAgaXNMb2FkaW5nLFxufSkgPT4ge1xuICBjb25zdCBbZGF0YUFycmF5TGVuZ3RoLCBzZXREYXRhQXJyYXlMZW5ndGhdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8QXBleE9wdGlvbnM+KHtcbiAgICBjaGFydDoge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIHN0YWNrZWQ6IGZhbHNlLFxuICAgICAgdG9vbGJhcjogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgem9vbTogeyBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgb2Zmc2V0WDogLTE1LFxuICAgICAgb2Zmc2V0WTogMCxcbiAgICB9LFxuICAgIG1hcmtlcnM6IHtcbiAgICAgIHNpemU6IDAsIC8vIEhpZGUgYWxsIG1hcmtlcnMgYnkgZGVmYXVsdFxuICAgICAgc3Ryb2tlV2lkdGg6IDMsXG4gICAgICBob3Zlcjoge1xuICAgICAgICBzaXplOiA2LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN0cm9rZToge1xuICAgICAgd2lkdGg6IDIsIC8vIEFkanVzdCBsaW5lIHdpZHRoIGhlcmVcbiAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgY3VzdG9tOiAoeyBzZXJpZXMsIHNlcmllc0luZGV4LCBkYXRhUG9pbnRJbmRleCwgdyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPVxuICAgICAgICAgIHcuY29uZmlnLnNlcmllc1swXS5kYXRhW2RhdGFQb2ludEluZGV4XT8ueC5sZW5ndGggIT09IDdcbiAgICAgICAgICAgID8gZm9ybWF0KHcuY29uZmlnLnNlcmllc1swXS5kYXRhW2RhdGFQb2ludEluZGV4XS54LCBcImRkIE1NTU0geXlcIilcbiAgICAgICAgICAgIDogZm9ybWF0KHcuY29uZmlnLnNlcmllc1swXS5kYXRhW2RhdGFQb2ludEluZGV4XS54LCBcIk1NTU0geXl5eVwiKTtcblxuICAgICAgICBjb25zdCBlc3NlbnRpYWxzVmFsdWUgPSB3LmNvbmZpZy5zZXJpZXNbMF0uZGF0YVtkYXRhUG9pbnRJbmRleF0/Lnk7XG4gICAgICAgIGNvbnN0IHdhbnRzVmFsdWUgPSB3LmNvbmZpZy5zZXJpZXNbMV0uZGF0YVtkYXRhUG9pbnRJbmRleF0/Lnk7XG4gICAgICAgIGNvbnN0IHRvdGFsU3BlbmRWYWx1ZSA9IGVzc2VudGlhbHNWYWx1ZSArIHdhbnRzVmFsdWU7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEVzc2VudGlhbHNWYWx1ZSA9IGVzc2VudGlhbHNWYWx1ZS50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICBcImVuLVVTXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkV2FudHNWYWx1ZSA9IHdhbnRzVmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFRvdGFsU3BlbmRWYWx1ZSA9IHRvdGFsU3BlbmRWYWx1ZS50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICBcImVuLVVTXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBib3JkZXItcmFkaXVzOiA4cHg7IGZvbnQtc2l6ZTogMTRweDtcIiBjbGFzcz1cImN1c3RvbS10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDRweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiaGVpZ2h0OiAxMHB4OyB3aWR0aDogMTBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwOUZEQzsgYm9yZGVyLXJhZGl1czogNTAlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi1yaWdodDogNXB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMDA5RkRDO21hcmdpbi1yaWdodDogNXB4O1wiPiR7Zm9ybWF0dGVkRXNzZW50aWFsc1ZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogNHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJoZWlnaHQ6IDEwcHg7IHdpZHRoOiAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0QUE2OyBib3JkZXItcmFkaXVzOiA1MCU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luLXJpZ2h0OiA1cHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICMzNTRBQTY7bWFyZ2luLXJpZ2h0OiA1cHg7XCI+JHtmb3JtYXR0ZWRXYW50c1ZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiaGVpZ2h0OiAxMHB4OyB3aWR0aDogMTBweDsgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDsgYm9yZGVyLXJhZGl1czogNTAlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi1yaWdodDogNXB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMTAxMDEwO21hcmdpbi1yaWdodDogNXB4O1wiPiR7Zm9ybWF0dGVkVG90YWxTcGVuZFZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctdG9wOiA1cHg7IGNvbG9yOiAjMTAxMDEwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTNweFwiIGNsYXNzPVwidGl0bGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH0sXG4gICAgICB4OiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGZvcm1hdDogXCJkZCBNTU0geXl5eVwiLFxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uIChcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB7IHNlcmllcywgc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4LCB3IH1cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmaXhlZDoge1xuICAgICAgICBvZmZzZXRYOiAtMTAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgIC8vIGNhdGVnb3JpZXM6IGRlbW9EYXRhU2VyaWVzLkVzc2VudGlhbHMubWFwKChwKSA9PiBwLngpLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgY3NzQ2xhc3M6IFwiYXBleGNoYXJ0cy14YXhpcy1sYWJlbFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZSkgPT4gYCR7Zm9ybWF0TnVtYmVyKHZhbHVlKX0gYCxcbiAgICAgICAgb2Zmc2V0WDogLTUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiM5MEE0QUVcIixcbiAgICAgIHN0cm9rZURhc2hBcnJheTogNSxcbiAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiRXNzZW50aWFscyBzcGVuZFwiLFxuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBkYXRhOiBlc3NlbnRpYWxzQXJyYXksXG4gICAgICBjb2xvcjogXCIjMDA5RkRDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIldhbnRzIHNwZW5kXCIsXG4gICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgIGRhdGE6IHdhbnRzQXJyYXksXG4gICAgICBjb2xvcjogXCIjMzU0QUE2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkRlYnQgcmVwYXltZW50XCIsXG4gICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgIGRhdGE6IGNhbGN1bGF0ZVRvdGFsU3BlbmQoZXNzZW50aWFsc0FycmF5LCB3YW50c0FycmF5KSxcbiAgICAgIGNvbG9yOiBcIiMwMzZBQjNcIixcbiAgICB9LFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZXNzZW50aWFsc0FycmF5Lmxlbmd0aCAmJiAhd2FudHNBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgW2FycmF5TGVuZ3RoLCB1cGRhdGVkRXNzZW50aWFsc0FycmF5LCB1cGRhdGVkV2FudHNBcnJheV0gPVxuICAgICAgYWxpZ25EYXRhQXJyYXlzKGVzc2VudGlhbHNBcnJheSwgd2FudHNBcnJheSk7XG5cbiAgICBpZiAoYXJyYXlMZW5ndGggJiYgZGF0YUFycmF5TGVuZ3RoICE9PSBhcnJheUxlbmd0aCkge1xuICAgICAgc2V0RGF0YUFycmF5TGVuZ3RoKGFycmF5TGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbFNwZW5kID0gY2FsY3VsYXRlVG90YWxTcGVuZChcbiAgICAgIHVwZGF0ZWRFc3NlbnRpYWxzQXJyYXksXG4gICAgICB1cGRhdGVkV2FudHNBcnJheVxuICAgICk7XG4gICAgc2V0U2VyaWVzKFtcbiAgICAgIHtcbiAgICAgICAgLi4uc2VyaWVzWzBdLFxuICAgICAgICBkYXRhOiB1cGRhdGVkRXNzZW50aWFsc0FycmF5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLi4uc2VyaWVzWzFdLFxuICAgICAgICBkYXRhOiB1cGRhdGVkV2FudHNBcnJheSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC4uLnNlcmllc1syXSxcbiAgICAgICAgZGF0YTogdG90YWxTcGVuZCxcbiAgICAgIH0sXG4gICAgXSk7XG4gIH0sIFtlc3NlbnRpYWxzQXJyYXksIHdhbnRzQXJyYXksIGRhdGFBcnJheUxlbmd0aF0pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY2FyZCBweC00IHB5LTYgbWItMyByb3VuZGVkLWxnIG10LTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2xvYWRlclN2Z31cbiAgICAgICAgICBhbHQ9XCJsb2FkZXJcIlxuICAgICAgICAgIGlkPVwibG9hZGVyLWltYWdlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCI0LjM3NXJlbSBhdXRvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoIWVzc2VudGlhbHNBcnJheS5sZW5ndGggJiYgIXdhbnRzQXJyYXkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNhcmQgcHgtNCBweS02IG1iLTMgcm91bmRlZC1sZyBtdC0yXCI+XG4gICAgICAgIDxUcmFuc2FjdGlvbkVtcHR5U3RhdGUgbGFiZWw9XCJObyBkYXRhIGF2YWlsYWJsZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENoYXJ0XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHNlcmllcz17c2VyaWVzfVxuICAgICAgICB0eXBlPVwibGluZVwiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzRXhwZW5kaXR1cmVDaGFydDtcblxuY29uc3QgY2FsY3VsYXRlVG90YWxTcGVuZCA9IChcbiAgZXNzZW50aWFsczogeyB4OiBhbnk7IHk6IGFueSB9W10sXG4gIHdhbnRzOiB7IHg6IGFueTsgeTogYW55IH1bXVxuKSA9PiB7XG4gIC8vIENyZWF0ZSBhIG1hcCB0byBzdW0gdmFsdWVzIGJ5IHRoZSBzYW1lIGRhdGUvbW9udGhcbiAgY29uc3QgdG90YWxzTWFwID0gbmV3IE1hcCgpO1xuXG4gIC8vIEFkZCBlc3NlbnRpYWxzIHRvIHRoZSBtYXBcbiAgZXNzZW50aWFscy5mb3JFYWNoKCh7IHgsIHkgfSkgPT4ge1xuICAgIHRvdGFsc01hcC5zZXQoeCwgKHRvdGFsc01hcC5nZXQoeCkgfHwgMCkgKyB5KTtcbiAgfSk7XG5cbiAgLy8gQWRkIHdhbnRzIHRvIHRoZSBtYXAsIHN1bW1pbmcgd2l0aCBleGlzdGluZyBlc3NlbnRpYWxzXG4gIHdhbnRzLmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgdG90YWxzTWFwLnNldCh4LCAodG90YWxzTWFwLmdldCh4KSB8fCAwKSArIHkpO1xuICB9KTtcblxuICAvLyBDb252ZXJ0IHRoZSBtYXAgYmFjayB0byBhbiBhcnJheVxuICByZXR1cm4gQXJyYXkuZnJvbSh0b3RhbHNNYXAsIChbeCwgeV0pID0+ICh7IHgsIHkgfSkpO1xufTtcblxuaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHg6IHN0cmluZzsgLy8gRGF0ZSBpbiBZWVlZLU1NIG9yIFlZWVktTU0tREQgZm9ybWF0XG4gIHk6IG51bWJlcjsgLy8gQW1vdW50XG59XG5cbmZ1bmN0aW9uIGFsaWduRGF0YUFycmF5cyhcbiAgZXNzZW50aWFsczogRGF0YVBvaW50W10sXG4gIHdhbnRzOiBEYXRhUG9pbnRbXVxuKTogW2FueSwgRGF0YVBvaW50W10sIERhdGFQb2ludFtdXSB7XG4gIC8vIGlmIChlc3NlbnRpYWxzLmxlbmd0aCA9PT0gMCB8fCB3YW50cy5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgIHJldHVybiBbZXNzZW50aWFscywgd2FudHNdO1xuICAvLyB9XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBkYXRhIGlzIG1vbnRobHkgb3IgZGFpbHlcbiAgY29uc3QgaXNNb250aGx5ID0gWy4uLmVzc2VudGlhbHMsIC4uLndhbnRzXS5ldmVyeSgoZHApID0+IGRwLngubGVuZ3RoID09PSA3KTtcblxuICBpZiAoaXNNb250aGx5KSB7XG4gICAgcmV0dXJuIGFsaWduTW9udGhEYXRhQXJyYXlzKGVzc2VudGlhbHMsIHdhbnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYWxpZ25EYXlEYXRhQXJyYXlzKGVzc2VudGlhbHMsIHdhbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGlnbk1vbnRoRGF0YUFycmF5cyhcbiAgZXNzZW50aWFsczogRGF0YVBvaW50W10sXG4gIHdhbnRzOiBEYXRhUG9pbnRbXVxuKTogW2FueSwgRGF0YVBvaW50W10sIERhdGFQb2ludFtdXSB7XG4gIC8vIEhlbHBlciB0byBpbmNyZW1lbnQgYSBtb250aFxuICBjb25zdCBpbmNyZW1lbnRNb250aCA9ICh5bTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBsZXQgW3llYXIsIG1vbnRoXSA9IHltLnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgICBtb250aCsrO1xuICAgIGlmIChtb250aCA+IDEyKSB7XG4gICAgICB5ZWFyKys7XG4gICAgICBtb250aCA9IDE7XG4gICAgfVxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSByYW5nZSBvZiBkYXRlc1xuICBjb25zdCBhbGxNb250aHMgPSBbLi4uZXNzZW50aWFscywgLi4ud2FudHNdLm1hcCgoZHApID0+IGRwLngpO1xuICBpZiAoYWxsTW9udGhzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IHByZXZpb3VzTW9udGggPSBuZXcgRGF0ZShhbGxNb250aHNbMF0pO1xuICAgIHByZXZpb3VzTW9udGguc2V0TW9udGgocHJldmlvdXNNb250aC5nZXRNb250aCgpIC0gMSk7XG4gICAgYWxsTW9udGhzLnVuc2hpZnQocHJldmlvdXNNb250aC50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCA3KSk7XG4gIH1cbiAgY29uc3QgZWFybGllc3RNb250aCA9IE1hdGgubWluKFxuICAgIC4uLmFsbE1vbnRocy5tYXAoKHltKSA9PiBuZXcgRGF0ZSh5bSkuZ2V0VGltZSgpKVxuICApO1xuICBjb25zdCBsYXRlc3RNb250aCA9IE1hdGgubWF4KFxuICAgIC4uLmFsbE1vbnRocy5tYXAoKHltKSA9PiBuZXcgRGF0ZSh5bSkuZ2V0VGltZSgpKVxuICApO1xuXG4gIC8vIEFsaWduIGFycmF5c1xuICBjb25zdCBhbGlnbkFycmF5ID0gKFxuICAgIGFycmF5OiBEYXRhUG9pbnRbXSxcbiAgICBlYXJsaWVzdDogbnVtYmVyLFxuICAgIGxhdGVzdDogbnVtYmVyXG4gICk6IERhdGFQb2ludFtdID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IERhdGFQb2ludFtdID0gW107XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZWFybGllc3QpO1xuXG4gICAgd2hpbGUgKGN1cnJlbnREYXRlLmdldFRpbWUoKSA8PSBsYXRlc3QpIHtcbiAgICAgIGNvbnN0IG1vbnRoU3RyID0gY3VycmVudERhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgNyk7XG4gICAgICBjb25zdCBleGlzdGluZ0VudHJ5ID0gYXJyYXkuZmluZCgoZHApID0+IGRwLnggPT09IG1vbnRoU3RyKTtcbiAgICAgIGlmICghZXhpc3RpbmdFbnRyeSkge1xuICAgICAgICAvLyBGdXR1cmUgbW9udGhzIGdldCBhIHZhbHVlIG9mIDBcbiAgICAgICAgcmVzdWx0LnB1c2goeyB4OiBtb250aFN0ciwgeTogMCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGV4aXN0aW5nRW50cnkpO1xuICAgICAgfVxuICAgICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZShpbmNyZW1lbnRNb250aChtb250aFN0cikpO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBubyBkdXBsaWNhdGVzIGFuZCByZXR1cm5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgTWFwKHJlc3VsdC5tYXAoKGRwKSA9PiBbZHAueCwgZHBdKSkudmFsdWVzKCkpO1xuICB9O1xuXG4gIHJldHVybiBbXG4gICAgbnVsbCxcbiAgICBhbGlnbkFycmF5KGVzc2VudGlhbHMsIGVhcmxpZXN0TW9udGgsIGxhdGVzdE1vbnRoKSxcbiAgICBhbGlnbkFycmF5KHdhbnRzLCBlYXJsaWVzdE1vbnRoLCBsYXRlc3RNb250aCksXG4gIF07XG59XG5cbmZ1bmN0aW9uIGFsaWduRGF5RGF0YUFycmF5cyhcbiAgZXNzZW50aWFsczogRGF0YVBvaW50W10sXG4gIHdhbnRzOiBEYXRhUG9pbnRbXVxuKTogW251bWJlciwgRGF0YVBvaW50W10sIERhdGFQb2ludFtdXSB7XG4gIGlmIChlc3NlbnRpYWxzLmxlbmd0aCA9PT0gMCAmJiB3YW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gWzAsIFtdLCBbXV07XG4gIH1cblxuICBjb25zdCBpc01vbnRobHkgPSBlc3NlbnRpYWxzLmNvbmNhdCh3YW50cykuZXZlcnkoKGRwKSA9PiBkcC54Lmxlbmd0aCA9PT0gNyk7XG4gIGNvbnN0IHBhcnNlRGF0ZVN0cmluZyA9IChkYXRlU3RyOiBzdHJpbmcpOiBEYXRlID0+XG4gICAgbmV3IERhdGUoZGF0ZVN0ciArIChkYXRlU3RyLmxlbmd0aCA9PT0gNyA/IFwiLTAxXCIgOiBcIlwiKSk7XG5cbiAgLy8gUGFyc2luZyBhbGwgZGF0ZXMgZGlyZWN0bHlcbiAgY29uc3QgYWxsRGF0ZXMgPSBlc3NlbnRpYWxzLmNvbmNhdCh3YW50cykubWFwKChkcCkgPT4gcGFyc2VEYXRlU3RyaW5nKGRwLngpKTtcblxuICBpZiAoYWxsRGF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgYWxsRGF0ZXMudW5zaGlmdChuZXcgRGF0ZShhbGxEYXRlc1swXS5nZXRUaW1lKCkgLSAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gIH1cblxuICBjb25zdCBhbGlnbkFycmF5ID0gKFxuICAgIGFycmF5OiBEYXRhUG9pbnRbXSxcbiAgICBkYXRlczogRGF0ZVtdLFxuICAgIG1vbnRobHk6IGJvb2xlYW5cbiAgKTogRGF0YVBvaW50W10gPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogRGF0YVBvaW50W10gPSBbXTtcbiAgICBjb25zdCBkYXRlTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gRmlsbCBtYXAgd2l0aCBhbGwgcmVsZXZhbnQgZGF0ZXNcbiAgICBkYXRlcy5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICBjb25zdCBkYXRlS2V5ID0gbW9udGhseVxuICAgICAgICA/IGRhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgNylcbiAgICAgICAgOiBkYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICAgIGRhdGVNYXAuc2V0KGRhdGVLZXksIHsgeDogZGF0ZUtleSwgeTogMCB9KTsgLy8gSW5pdGlhbGl6ZSBhbGwgZGF0ZXMgd2l0aCAwXG4gICAgfSk7XG5cbiAgICAvLyBTZXQgYWN0dWFsIHZhbHVlcyBmcm9tIHRoZSBkYXRhXG4gICAgYXJyYXkuZm9yRWFjaCgoZHApID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG1vbnRobHkgPyBkcC54LnN1YnN0cmluZygwLCA3KSA6IGRwLnguc3Vic3RyaW5nKDAsIDEwKTtcbiAgICAgIGlmIChkYXRlTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIGRhdGVNYXAuc2V0KGtleSwgeyB4OiBrZXksIHk6IGRwLnkgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDYXJyeSBmb3J3YXJkIHRoZSBsYXN0IGtub3duIHZhbHVlIGlmIGFueSBkYXRlcyB3ZXJlIGluaXRpYWxpemVkIHRvIDBcbiAgICBsZXQgbGFzdFZhbHVlID0gMDtcbiAgICBkYXRlc1xuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCkpXG4gICAgICAuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlS2V5ID0gbW9udGhseVxuICAgICAgICAgID8gZGF0ZS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCA3KVxuICAgICAgICAgIDogZGF0ZS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGRhdGVNYXAuZ2V0KGRhdGVLZXkpO1xuICAgICAgICBpZiAoY3VycmVudFZhbHVlLnkgPT09IDAgJiYgbGFzdFZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgZGF0ZU1hcC5zZXQoZGF0ZUtleSwgeyB4OiBkYXRlS2V5LCB5OiBsYXN0VmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFZhbHVlID0gY3VycmVudFZhbHVlLnk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gQ29udmVydCBtYXAgdG8gc29ydGVkIGFycmF5XG4gICAgcmVzdWx0LnB1c2goLi4uZGF0ZU1hcC52YWx1ZXMoKSk7XG4gICAgLy8gc29ydCBkYXRlcyBpbiBhc2NlbmRpbmcgb3JkZXJcbiAgICByZXN1bHQuc29ydCgoYSwgYikgPT4gYS54LmxvY2FsZUNvbXBhcmUoYi54KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVkRXNzZW50aWFscyA9IGFsaWduQXJyYXkoZXNzZW50aWFscywgYWxsRGF0ZXMsIGlzTW9udGhseSk7XG4gIGNvbnN0IHVwZGF0ZWRXYW50cyA9IGFsaWduQXJyYXkod2FudHMsIGFsbERhdGVzLCBpc01vbnRobHkpO1xuXG4gIGNvbnN0IGxlbmd0aE9mRGF0ZUFycmF5cyA9IHVwZGF0ZWRFc3NlbnRpYWxzLmxlbmd0aCArIHVwZGF0ZWRXYW50cy5sZW5ndGg7XG5cbiAgcmV0dXJuIFtsZW5ndGhPZkRhdGVBcnJheXMsIHVwZGF0ZWRFc3NlbnRpYWxzLCB1cGRhdGVkV2FudHNdO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xuaW1wb3J0IHsgQXBleE9wdGlvbnMgfSBmcm9tIFwiYXBleGNoYXJ0c1wiO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uRW1wdHlTdGF0ZSB9IGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9FbXB0eVN0YXRlXCI7XG5pbXBvcnQgbG9hZGVyU3ZnIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xvYWRlci5zdmdcIjtcbmltcG9ydCBDdXN0b21Mb2FkZXIgZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL0xvYWRlci9DdXN0b21Mb2FkZXJcIjtcblxuaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHg6IHN0cmluZztcbiAgeTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSW5zaWdodHNTYXZpbmdzQ2hhcnRQcm9wcyB7XG4gIGN1cnJlbmN5U3ltYm9sOiBzdHJpbmc7XG4gIHNhdmluZ3NBcnJheTogRGF0YVBvaW50W107XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgSW5zaWdodHNTYXZpbmdzQ2hhcnQ6IFJlYWN0LkZDPEluc2lnaHRzU2F2aW5nc0NoYXJ0UHJvcHM+ID0gKHtcbiAgY3VycmVuY3lTeW1ib2wsXG4gIHNhdmluZ3NBcnJheSxcbiAgaXNMb2FkaW5nLFxufSkgPT4ge1xuICBjb25zdCBbZGF0YUFycmF5TGVuZ3RoLCBzZXREYXRhQXJyYXlMZW5ndGhdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8QXBleE9wdGlvbnM+KHtcbiAgICBjaGFydDoge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIHN0YWNrZWQ6IGZhbHNlLFxuICAgICAgdG9vbGJhcjogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgem9vbTogeyBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgb2Zmc2V0WDogLTE1LFxuICAgICAgb2Zmc2V0WTogMCxcbiAgICB9LFxuICAgIG1hcmtlcnM6IHtcbiAgICAgIHNpemU6IDAsIC8vIEhpZGUgYWxsIG1hcmtlcnMgYnkgZGVmYXVsdFxuICAgICAgc3Ryb2tlV2lkdGg6IDMsXG4gICAgICBob3Zlcjoge1xuICAgICAgICBzaXplOiA2LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN0cm9rZToge1xuICAgICAgd2lkdGg6IDIsIC8vIEFkanVzdCBsaW5lIHdpZHRoIGhlcmVcbiAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgY3VzdG9tOiAoeyBzZXJpZXMsIHNlcmllc0luZGV4LCBkYXRhUG9pbnRJbmRleCwgdyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFQb2ludCA9IHcuY29uZmlnLnNlcmllc1tzZXJpZXNJbmRleF0uZGF0YVtkYXRhUG9pbnRJbmRleF07XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPVxuICAgICAgICAgIGRhdGFQb2ludC54Lmxlbmd0aCAhPT0gN1xuICAgICAgICAgICAgPyBmb3JtYXQobmV3IERhdGUoZGF0YVBvaW50LngpLCBcImRkIE1NTU0geXlcIilcbiAgICAgICAgICAgIDogZm9ybWF0KG5ldyBEYXRlKGRhdGFQb2ludC54KSwgXCJNTU1NIHl5eXlcIik7XG5cbiAgICAgICAgY29uc3QgZXNzZW50aWFsc1ZhbHVlID0gTnVtYmVyKGRhdGFQb2ludC55KTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBlc3NlbnRpYWxzVmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDE0cHg7XCIgY2xhc3M9XCJjdXN0b20tdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogNHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImhlaWdodDogMTBweDsgd2lkdGg6IDEwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMzZBQjM7IGJvcmRlci1yYWRpdXM6IDUwJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW4tcmlnaHQ6IDVweDtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzAzNkFCMzttYXJnaW4tcmlnaHQ6IDVweDtcIj4ke2Zvcm1hdHRlZFZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLXRvcDogNXB4OyBjb2xvcjogIzEwMTAxMDsgdGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMTNweDtcIiBjbGFzcz1cInRpdGxlXCI+JHtmb3JtYXR0ZWREYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9LFxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgIC8vIGNhdGVnb3JpZXM6IGRlbW9EYXRhU2VyaWVzLkVzc2VudGlhbHMubWFwKChwKSA9PiBwLngpLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgY3NzQ2xhc3M6IFwiYXBleGNoYXJ0cy14YXhpcy1sYWJlbFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHlheGlzOiB7XG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsdWUpID0+IGAke2Zvcm1hdE51bWJlcih2YWx1ZSl9IGAsXG4gICAgICAgIG9mZnNldFg6IC01LFxuICAgICAgfSxcbiAgICAgIG1pbjogMCxcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjOTBBNEFFXCIsXG4gICAgICBzdHJva2VEYXNoQXJyYXk6IDUsXG4gICAgICBwYWRkaW5nOiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgW3Nlcmllcywgc2V0U2VyaWVzXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlNhdmluZ3Mgc3BlbmRcIixcbiAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgZGF0YTogc2F2aW5nc0FycmF5LFxuICAgICAgY29sb3I6IFwiIzAzNkFCM1wiLFxuICAgIH0sXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzYXZpbmdzQXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFthcnJheUxlbmd0aCwgdXBkYXRlZHNhdmluZ3NBcnJheV0gPSBhbGlnbkRhdGFBcnJheXMoc2F2aW5nc0FycmF5KTtcblxuICAgIGlmIChhcnJheUxlbmd0aCAmJiBkYXRhQXJyYXlMZW5ndGggIT09IGFycmF5TGVuZ3RoKSB7XG4gICAgICBzZXREYXRhQXJyYXlMZW5ndGgoYXJyYXlMZW5ndGgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsU3BlbmQgPSBjYWxjdWxhdGVUb3RhbFNwZW5kKHVwZGF0ZWRzYXZpbmdzQXJyYXkpO1xuICAgIHNldFNlcmllcyhbXG4gICAgICB7XG4gICAgICAgIC4uLnNlcmllc1swXSxcbiAgICAgICAgZGF0YTogdXBkYXRlZHNhdmluZ3NBcnJheSxcbiAgICAgIH0sXG4gICAgXSk7XG4gIH0sIFtzYXZpbmdzQXJyYXksIGRhdGFBcnJheUxlbmd0aF0pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY2FyZCBweC00IHB5LTYgbWItMyByb3VuZGVkLWxnIG10LTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2xvYWRlclN2Z31cbiAgICAgICAgICBhbHQ9XCJsb2FkZXJcIlxuICAgICAgICAgIGlkPVwibG9hZGVyLWltYWdlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCI0LjM3NXJlbSBhdXRvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoIXNhdmluZ3NBcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY2FyZCBweC00IHB5LTYgbWItMyByb3VuZGVkLWxnIG10LTJcIj5cbiAgICAgICAgPFRyYW5zYWN0aW9uRW1wdHlTdGF0ZSBsYWJlbD1cIk5vIGRhdGEgYXZhaWxhYmxlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2hhcnRcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgc2VyaWVzPXtzZXJpZXN9XG4gICAgICAgIHR5cGU9XCJsaW5lXCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHNTYXZpbmdzQ2hhcnQ7XG5cbmNvbnN0IGNhbGN1bGF0ZVRvdGFsU3BlbmQgPSAoc2F2aW5nczogeyB4OiBhbnk7IHk6IGFueSB9W10pID0+IHtcbiAgLy8gQ3JlYXRlIGEgbWFwIHRvIHN1bSB2YWx1ZXMgYnkgdGhlIHNhbWUgZGF0ZS9tb250aFxuICBjb25zdCB0b3RhbHNNYXAgPSBuZXcgTWFwKCk7XG5cbiAgLy8gQWRkIHNhdmluZ3MgdG8gdGhlIG1hcFxuICBzYXZpbmdzLmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgdG90YWxzTWFwLnNldCh4LCAodG90YWxzTWFwLmdldCh4KSB8fCAwKSArIHkpO1xuICB9KTtcblxuICAvLyBDb252ZXJ0IHRoZSBtYXAgYmFjayB0byBhbiBhcnJheVxuICByZXR1cm4gQXJyYXkuZnJvbSh0b3RhbHNNYXAsIChbeCwgeV0pID0+ICh7IHgsIHkgfSkpO1xufTtcblxuaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHg6IHN0cmluZzsgLy8gRGF0ZSBpbiBZWVlZLU1NIG9yIFlZWVktTU0tREQgZm9ybWF0XG4gIHk6IG51bWJlcjsgLy8gQW1vdW50XG59XG5cbmZ1bmN0aW9uIGFsaWduRGF0YUFycmF5cyhzYXZpbmdzOiBEYXRhUG9pbnRbXSk6IFthbnksIERhdGFQb2ludFtdXSB7XG4gIC8vIGlmIChzYXZpbmdzLmxlbmd0aCA9PT0gMCB8fCB3YW50cy5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgIHJldHVybiBbc2F2aW5ncywgd2FudHNdO1xuICAvLyB9XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBkYXRhIGlzIG1vbnRobHkgb3IgZGFpbHlcbiAgY29uc3QgaXNNb250aGx5ID0gWy4uLnNhdmluZ3NdLmV2ZXJ5KChkcCkgPT4gZHAueC5sZW5ndGggPT09IDcpO1xuXG4gIGlmIChpc01vbnRobHkpIHtcbiAgICByZXR1cm4gYWxpZ25Nb250aERhdGFBcnJheXMoc2F2aW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFsaWduRGF5RGF0YUFycmF5cyhzYXZpbmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGlnbk1vbnRoRGF0YUFycmF5cyhzYXZpbmdzOiBEYXRhUG9pbnRbXSk6IFthbnksIERhdGFQb2ludFtdXSB7XG4gIC8vIEhlbHBlciB0byBpbmNyZW1lbnQgYSBtb250aFxuICBjb25zdCBpbmNyZW1lbnRNb250aCA9ICh5bTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBsZXQgW3llYXIsIG1vbnRoXSA9IHltLnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgICBtb250aCsrO1xuICAgIGlmIChtb250aCA+IDEyKSB7XG4gICAgICB5ZWFyKys7XG4gICAgICBtb250aCA9IDE7XG4gICAgfVxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSByYW5nZSBvZiBkYXRlc1xuICBjb25zdCBhbGxNb250aHMgPSBbLi4uc2F2aW5nc10ubWFwKChkcCkgPT4gZHAueCk7XG4gIGNvbnN0IGVhcmxpZXN0TW9udGggPSBNYXRoLm1pbihcbiAgICAuLi5hbGxNb250aHMubWFwKCh5bSkgPT4gbmV3IERhdGUoeW0pLmdldFRpbWUoKSlcbiAgKTtcbiAgY29uc3QgbGF0ZXN0TW9udGggPSBNYXRoLm1heChcbiAgICAuLi5hbGxNb250aHMubWFwKCh5bSkgPT4gbmV3IERhdGUoeW0pLmdldFRpbWUoKSlcbiAgKTtcblxuICAvLyBBbGlnbiBhcnJheXNcbiAgY29uc3QgYWxpZ25BcnJheSA9IChcbiAgICBhcnJheTogRGF0YVBvaW50W10sXG4gICAgZWFybGllc3Q6IG51bWJlcixcbiAgICBsYXRlc3Q6IG51bWJlclxuICApOiBEYXRhUG9pbnRbXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBEYXRhUG9pbnRbXSA9IFtdO1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGVhcmxpZXN0KTtcblxuICAgIHdoaWxlIChjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPD0gbGF0ZXN0KSB7XG4gICAgICBjb25zdCBtb250aFN0ciA9IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDcpO1xuICAgICAgY29uc3QgZXhpc3RpbmdFbnRyeSA9IGFycmF5LmZpbmQoKGRwKSA9PiBkcC54ID09PSBtb250aFN0cik7XG4gICAgICBpZiAoIWV4aXN0aW5nRW50cnkpIHtcbiAgICAgICAgLy8gRnV0dXJlIG1vbnRocyBnZXQgYSB2YWx1ZSBvZiAwXG4gICAgICAgIHJlc3VsdC5wdXNoKHsgeDogbW9udGhTdHIsIHk6IDAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChleGlzdGluZ0VudHJ5KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoaW5jcmVtZW50TW9udGgobW9udGhTdHIpKTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgbm8gZHVwbGljYXRlcyBhbmQgcmV0dXJuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IE1hcChyZXN1bHQubWFwKChkcCkgPT4gW2RwLngsIGRwXSkpLnZhbHVlcygpKTtcbiAgfTtcblxuICByZXR1cm4gW251bGwsIGFsaWduQXJyYXkoc2F2aW5ncywgZWFybGllc3RNb250aCwgbGF0ZXN0TW9udGgpXTtcbn1cblxuZnVuY3Rpb24gYWxpZ25EYXlEYXRhQXJyYXlzKHNhdmluZ3M6IERhdGFQb2ludFtdKTogW251bWJlciwgRGF0YVBvaW50W11dIHtcbiAgaWYgKHNhdmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFswLCBbXV07XG4gIH1cblxuICBjb25zdCBpc01vbnRobHkgPSBzYXZpbmdzLmV2ZXJ5KChkcCkgPT4gZHAueC5sZW5ndGggPT09IDcpO1xuICBjb25zdCBwYXJzZURhdGVTdHJpbmcgPSAoZGF0ZVN0cjogc3RyaW5nKTogRGF0ZSA9PlxuICAgIG5ldyBEYXRlKGRhdGVTdHIgKyAoZGF0ZVN0ci5sZW5ndGggPT09IDcgPyBcIi0wMVwiIDogXCJcIikpO1xuXG4gIC8vIFBhcnNpbmcgYWxsIGRhdGVzIGRpcmVjdGx5XG4gIGNvbnN0IGFsbERhdGVzID0gc2F2aW5ncy5tYXAoKGRwKSA9PiBwYXJzZURhdGVTdHJpbmcoZHAueCkpO1xuXG4gIGNvbnN0IGFsaWduQXJyYXkgPSAoXG4gICAgYXJyYXk6IERhdGFQb2ludFtdLFxuICAgIGRhdGVzOiBEYXRlW10sXG4gICAgbW9udGhseTogYm9vbGVhblxuICApOiBEYXRhUG9pbnRbXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBEYXRhUG9pbnRbXSA9IFtdO1xuICAgIGNvbnN0IGRhdGVNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAvLyBGaWxsIG1hcCB3aXRoIGFsbCByZWxldmFudCBkYXRlc1xuICAgIGRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IGRhdGVLZXkgPSBtb250aGx5XG4gICAgICAgID8gZGF0ZS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCA3KVxuICAgICAgICA6IGRhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgZGF0ZU1hcC5zZXQoZGF0ZUtleSwgeyB4OiBkYXRlS2V5LCB5OiAwIH0pOyAvLyBJbml0aWFsaXplIGFsbCBkYXRlcyB3aXRoIDBcbiAgICB9KTtcblxuICAgIC8vIFNldCBhY3R1YWwgdmFsdWVzIGZyb20gdGhlIGRhdGFcbiAgICBhcnJheS5mb3JFYWNoKChkcCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gbW9udGhseSA/IGRwLnguc3Vic3RyaW5nKDAsIDcpIDogZHAueC5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgaWYgKGRhdGVNYXAuaGFzKGtleSkpIHtcbiAgICAgICAgZGF0ZU1hcC5zZXQoa2V5LCB7IHg6IGtleSwgeTogZHAueSB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENhcnJ5IGZvcndhcmQgdGhlIGxhc3Qga25vd24gdmFsdWUgaWYgYW55IGRhdGVzIHdlcmUgaW5pdGlhbGl6ZWQgdG8gMFxuICAgIGxldCBsYXN0VmFsdWUgPSAwO1xuICAgIGRhdGVzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSlcbiAgICAgIC5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVLZXkgPSBtb250aGx5XG4gICAgICAgICAgPyBkYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDcpXG4gICAgICAgICAgOiBkYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gZGF0ZU1hcC5nZXQoZGF0ZUtleSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUueSA9PT0gMCAmJiBsYXN0VmFsdWUgIT09IDApIHtcbiAgICAgICAgICBkYXRlTWFwLnNldChkYXRlS2V5LCB7IHg6IGRhdGVLZXksIHk6IGxhc3RWYWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0VmFsdWUgPSBjdXJyZW50VmFsdWUueTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBDb252ZXJ0IG1hcCB0byBzb3J0ZWQgYXJyYXlcbiAgICByZXN1bHQucHVzaCguLi5kYXRlTWFwLnZhbHVlcygpKTtcbiAgICAvLyBzb3J0IGRhdGVzIGluIGFzY2VuZGluZyBvcmRlclxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiBhLngubG9jYWxlQ29tcGFyZShiLngpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZWRFc3NlbnRpYWxzID0gYWxpZ25BcnJheShzYXZpbmdzLCBhbGxEYXRlcywgaXNNb250aGx5KTtcblxuICBjb25zdCBsZW5ndGhPZkRhdGVBcnJheXMgPSB1cGRhdGVkRXNzZW50aWFscy5sZW5ndGg7XG5cbiAgcmV0dXJuIFtsZW5ndGhPZkRhdGVBcnJheXMsIHVwZGF0ZWRFc3NlbnRpYWxzXTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5cbmludGVyZmFjZSBDYXNoZmxvd1ZhcmlhYmxlc1N0b3JlU3RhdGUge1xuICBjYXNoZmxvd1ZhcmlhYmxlczoge1xuICAgIHN0YXJ0RGF0ZTogc3RyaW5nO1xuICAgIGVuZERhdGU6IHN0cmluZztcbiAgICBhY2NvdW50TmFtZTogc3RyaW5nO1xuICAgIGRhdGVGaWx0ZXI6IHN0cmluZztcbiAgfTtcbiAgc2V0Q2FzaGZsb3dWYXJpYWJsZXM6ICh2YXJpYWJsZXM6IHtcbiAgICBzdGFydERhdGU6IHN0cmluZztcbiAgICBlbmREYXRlOiBzdHJpbmc7XG4gICAgYWNjb3VudE5hbWU6IHN0cmluZztcbiAgICBkYXRlRmlsdGVyOiBzdHJpbmc7XG4gIH0pID0+IHZvaWQ7XG59XG5cbmNvbnN0IGRlZmF1bHRTdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuZGVmYXVsdFN0YXJ0RGF0ZS5zZXRNb250aChkZWZhdWx0U3RhcnREYXRlLmdldE1vbnRoKCkgLSAzKTsgLy8gMyBtb250aHMgYWdvIGZyb20gdG9kYXlcbmNvbnN0IGZvcm1hdHRlZERlZmF1bHRTdGFydERhdGUgPSBkZWZhdWx0U3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuY29uc3QgZm9ybWF0dGVkRGVmYXVsdEVuZERhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG5jb25zdCB1c2VDYXNoZmxvd1ZhcmlhYmxlc1N0b3JlID0gY3JlYXRlPENhc2hmbG93VmFyaWFibGVzU3RvcmVTdGF0ZT4oXG4gIChzZXQpID0+ICh7XG4gICAgY2FzaGZsb3dWYXJpYWJsZXM6IHtcbiAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0dGVkRGVmYXVsdFN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IGZvcm1hdHRlZERlZmF1bHRFbmREYXRlLFxuICAgICAgYWNjb3VudE5hbWU6IFwiQWxsIGFjY291bnRzXCIsXG4gICAgICBkYXRlRmlsdGVyOiBcIkxhc3QgMyBtb250aHNcIixcbiAgICB9LFxuICAgIHNldENhc2hmbG93VmFyaWFibGVzOiAodmFyaWFibGVzKSA9PiB7XG4gICAgICBzZXQoeyBjYXNoZmxvd1ZhcmlhYmxlczogdmFyaWFibGVzIH0pO1xuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYXNoZmxvd1ZhcmlhYmxlc1N0b3JlO1xuIiwiaW1wb3J0IHsgTWljcm9Hb2FsIH0gZnJvbSBcImNsaWVudC9tb2RlbHMvTWljcm9Hb2FsXCI7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xuXG5pbnRlcmZhY2UgTWljcm9Hb2FsU3RvcmVTdGF0ZSB7XG5taWNyb0dvYWxzOiBBcnJheTxNaWNyb0dvYWw+O1xufVxuXG50eXBlIElNaWNyb0dvYWxTdG9yZSA9IE1pY3JvR29hbFN0b3JlU3RhdGUgJiB7XG5zZXRNaWNyb0dvYWxzOiAoZGF0YTogQXJyYXk8TWljcm9Hb2FsPikgPT4gdm9pZDtcbn07XG5cbmNvbnN0IHVzZU1pY3JvR29hbHNTdG9yZSA9IGNyZWF0ZTxJTWljcm9Hb2FsU3RvcmU+KChzZXQpID0+ICh7XG5taWNyb0dvYWxzOiBbXSxcblxuc2V0TWljcm9Hb2FsczogKGRhdGE6IEFycmF5PE1pY3JvR29hbD4pID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogTWljcm9Hb2FsU3RvcmVTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogTWljcm9Hb2FsU3RvcmVTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1pY3JvR29hbHM6IGRhdGEsXG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTWljcm9Hb2Fsc1N0b3JlO1xuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=