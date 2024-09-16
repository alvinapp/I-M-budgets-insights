"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_insights_cashflow_Cashflow_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/insights/cashflowGraphs/Graph.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/insights/cashflowGraphs/Graph.css ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Graph.css */

.graphContainer {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 200px;
    width: 100%;
    margin-top: 20px;
    padding-top: 35px;
}

.bar {
    position: relative;
    width: 150px;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    justify-content: center;
    font-weight: bold;
    z-index: 1;
    transition: height 0.8s;
}

.bar:last-child {
    margin-left: -30px;
    z-index: 2;
}

.barValue {
    position: absolute;
    bottom: 100%;
    margin-bottom: 5px;
    opacity: 0; /* Start with opacity 0 for the fade-in effect */
    transition: opacity 0.5s; /* Adjust the duration as needed */
}

.barValue.show {
    opacity: 1; /* Show the value with opacity 1 */
}

.legend {
    display: flex;
    flex-direction: row;
    margin: 10px 10px 10px 20px;
}

.legend div {
    display: flex;
    align-items: center;
    margin: 5px 0;
    color: #878787;
}

.legend span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 5px;
}
  `, "",{"version":3,"sources":["webpack://./src/client/pages/insights/cashflowGraphs/Graph.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;IACI,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,qBAAqB;IACrB,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,uCAAuC;IACvC,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,UAAU,EAAE,gDAAgD;IAC5D,wBAAwB,EAAE,kCAAkC;AAChE;;AAEA;IACI,UAAU,EAAE,kCAAkC;AAClD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["/* Graph.css */\n\n.graphContainer {\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    height: 200px;\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 35px;\n}\n\n.bar {\n    position: relative;\n    width: 150px;\n    margin: 0 10px;\n    display: flex;\n    align-items: flex-end;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    justify-content: center;\n    font-weight: bold;\n    z-index: 1;\n    transition: height 0.8s;\n}\n\n.bar:last-child {\n    margin-left: -30px;\n    z-index: 2;\n}\n\n.barValue {\n    position: absolute;\n    bottom: 100%;\n    margin-bottom: 5px;\n    opacity: 0; /* Start with opacity 0 for the fade-in effect */\n    transition: opacity 0.5s; /* Adjust the duration as needed */\n}\n\n.barValue.show {\n    opacity: 1; /* Show the value with opacity 1 */\n}\n\n.legend {\n    display: flex;\n    flex-direction: row;\n    margin: 10px 10px 10px 20px;\n}\n\n.legend div {\n    display: flex;\n    align-items: center;\n    margin: 5px 0;\n    color: #878787;\n}\n\n.legend span {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    margin-right: 5px;\n}\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/client/pages/insights/cashflowGraphs/Graph.css":
/*!************************************************************!*\
  !*** ./src/client/pages/insights/cashflowGraphs/Graph.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./Graph.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/insights/cashflowGraphs/Graph.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./Graph.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/insights/cashflowGraphs/Graph.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./Graph.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/insights/cashflowGraphs/Graph.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Graph_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/client/pages/components/insights/AmountDisplay.tsx":
/*!****************************************************************!*\
  !*** ./src/client/pages/components/insights/AmountDisplay.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/store/currencySettingsStore */ "./src/client/store/currencySettingsStore.ts");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");



const AmountDisplay = ({ amount }) => {
    var _a;
    const currency = (0,client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], { target: amount, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ style: {
                        fontSize: "11px",
                        verticalAlign: "super",
                        marginLeft: "-4px",
                    } }, { children: (_a = currency.currencySymbol) !== null && _a !== void 0 ? _a : "" }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmountDisplay);


/***/ }),

/***/ "./src/client/pages/components/insights/TotalCashFlowView.tsx":
/*!********************************************************************!*\
  !*** ./src/client/pages/components/insights/TotalCashFlowView.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/store/currencySettingsStore */ "./src/client/store/currencySettingsStore.ts");


const TotalCashFlowView = ({ totalAmount }) => {
    var _a;
    const currencySymbol = (0,client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-3xl tracking-title font-custom font-medium text-skin-base" }, { children: [totalAmount
                            ? Number(totalAmount).toLocaleString("en-US", {
                                maximumFractionDigits: 0,
                            })
                            : "", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ style: {
                                fontSize: "14px",
                                verticalAlign: "super",
                                marginLeft: "-4px",
                            } }, { children: (_a = currencySymbol.currencySymbol) !== null && _a !== void 0 ? _a : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs font-medium text-skin-base tracking-subtitle" }, { children: "Total cashflow" }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalCashFlowView);


/***/ }),

/***/ "./src/client/pages/insights/cashflow/Cashflow.tsx":
/*!*********************************************************!*\
  !*** ./src/client/pages/insights/cashflow/Cashflow.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/pages/components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/pages/components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var client_pages_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/pages/components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx");
/* harmony import */ var client_pages_components_insights_AmountDisplay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/pages/components/insights/AmountDisplay */ "./src/client/pages/components/insights/AmountDisplay.tsx");
/* harmony import */ var client_pages_components_insights_CashFlowFilterButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/pages/components/insights/CashFlowFilterButton */ "./src/client/pages/components/insights/CashFlowFilterButton.tsx");
/* harmony import */ var client_pages_components_insights_TotalCashFlowView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/pages/components/insights/TotalCashFlowView */ "./src/client/pages/components/insights/TotalCashFlowView.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _cashflowGraphs_Graph__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cashflowGraphs/Graph */ "./src/client/pages/insights/cashflowGraphs/Graph.tsx");
/* harmony import */ var _cashflowGraphs_CashFlowRangeGraph__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../cashflowGraphs/CashFlowRangeGraph */ "./src/client/pages/insights/cashflowGraphs/CashFlowRangeGraph.tsx");
/* harmony import */ var client_api_transactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/api/transactions */ "./src/client/api/transactions.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_insightsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/insightsStore */ "./src/client/store/insightsStore.ts");
/* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-spring-bottom-sheet */ "./node_modules/react-spring-bottom-sheet/dist/index.es.js");
/* harmony import */ var _assets_images_empty_cashflow_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../assets/images/empty-cashflow.png */ "./src/client/assets/images/empty-cashflow.png");
/* harmony import */ var _InsightsFilters__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../InsightsFilters */ "./src/client/pages/insights/InsightsFilters.tsx");
/* harmony import */ var client_store_accountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/accountStore */ "./src/client/store/accountStore.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















const Cashflow = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const [earnedData, setEarnedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [totalEarned, setTotalEarned] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [totalSpent, setTotalSpent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [spentData, setSpentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [datalabels, setDatalabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [fullDataLabels, setFullDataLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    // const accountName = searchParams.get("accountName");
    // const dateFilter = searchParams.get("dateFilter");
    const config = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_3__.useConfigurationStore)((state) => state.configuration);
    const insightsStoreState = (0,client_store_insightsStore__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state);
    const accountStore = (0,client_store_accountStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state);
    const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(insightsStoreState.insightsStartDate, "yyyy-MM-dd");
    const endDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(insightsStoreState.insightsEndDate, "yyyy-MM-dd");
    const accounts = accountStore.accounts;
    const filterAccountBy = (0,client_store_accountStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state.filterBy);
    const filteredAccount = (0,client_store_accountStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state.filter);
    const [filter, openFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fetchDataFromServer = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            const linkedAccountId = null;
            const data = yield (0,client_api_transactions__WEBPACK_IMPORTED_MODULE_7__.getMicroDetailsViewData)({
                configuration: config,
                linkedAccountId,
                startDate,
                endDate,
            });
            setEarnedData(data.earnedData);
            setTotalEarned(data.totalEarned);
            setTotalSpent(data.totalSpent);
            setSpentData(data.spentData);
            setFullDataLabels(data.fullDataLabels);
            setDatalabels(data.datalabels);
            setIsLoading(false);
        }
        catch (error) {
            setIsLoading(false);
            console.error("Error fetching data:", error);
        }
    });
    const closeBottomSheet = () => {
        openFilter(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setTimeout(() => {
            fetchDataFromServer();
        }, 500);
    }, [startDate, endDate, filteredAccount]);
    const currencySymbol = "KES";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen w-screen" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mr-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-between mt-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mr-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: () => navigate(-1) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_10__["default"], { title: "Cashflow", fontSize: "text-2xl" })] })) })) })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3 mb-1" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mx-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "py-3 flex flex-wrap items-center mb-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_CashFlowFilterButton__WEBPACK_IMPORTED_MODULE_11__["default"], { label: insightsStoreState.insightsActiveInstitutionName, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__.BsBank, { color: "#101010" }), isActive: false, onClick: () => openFilter(true) }, `All accounts`), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_CashFlowFilterButton__WEBPACK_IMPORTED_MODULE_11__["default"], { label: insightsStoreState.insightsDateFilterName, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__.FiCalendar, {}), isActive: false, onClick: () => openFilter(true) }, `This month`)] })), isLoading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_TotalCashFlowView__WEBPACK_IMPORTED_MODULE_14__["default"], { totalAmount: totalEarned && totalSpent ? totalEarned + totalSpent : 0 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cashflowGraphs_Graph__WEBPACK_IMPORTED_MODULE_15__["default"], { earned: totalEarned ? totalEarned : 0, spent: totalSpent ? totalSpent : 0 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col rounded-lg bg-skin-base p-4 shadow-card" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide mb-4" }, { children: "In the selected period:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide mb-2 mr-1" }, { children: "- You've earned an average of" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_AmountDisplay__WEBPACK_IMPORTED_MODULE_16__["default"], { amount: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_17__.checkNAN)((earnedData === null || earnedData === void 0 ? void 0 : earnedData.reduce((a, b) => a + b, 0)) /
                                                        earnedData.length) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide mr-2" }, { children: "- You've spent an average of" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_AmountDisplay__WEBPACK_IMPORTED_MODULE_16__["default"], { amount: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_17__.checkNAN)((spentData === null || spentData === void 0 ? void 0 : spentData.reduce((a, b) => a + b, 0)) /
                                                        spentData.length) })] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cashflowGraphs_CashFlowRangeGraph__WEBPACK_IMPORTED_MODULE_18__["default"], { earnedData: [], spentData: [], datalabels: [], fullDataLabels: [], currencySymbol: currencySymbol })] })) : (totalEarned !== undefined && totalSpent !== undefined) && ((totalEarned + totalSpent) !== 0) ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_TotalCashFlowView__WEBPACK_IMPORTED_MODULE_14__["default"], { totalAmount: totalEarned + totalSpent }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cashflowGraphs_Graph__WEBPACK_IMPORTED_MODULE_15__["default"], { earned: totalEarned, spent: totalSpent }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col rounded-lg bg-skin-base p-4 shadow-card" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide mb-4" }, { children: "In the selected period:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide mb-2 mr-1" }, { children: "- You've earned an average of" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_AmountDisplay__WEBPACK_IMPORTED_MODULE_16__["default"], { amount: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_17__.checkNAN)(earnedData.filter((value) => value !== 0).reduce((a, b) => a + b, 0) /
                                                        (earnedData.filter((value) => value !== 0).length || 1) // Avoid division by zero
                                                    ) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide mr-2" }, { children: "- You've spent an average of" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_insights_AmountDisplay__WEBPACK_IMPORTED_MODULE_16__["default"], { amount: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_17__.checkNAN)(spentData.filter((value) => value !== 0).reduce((a, b) => a + b, 0) /
                                                        (spentData.filter((value) => value !== 0).length || 1) // Avoid division by zero
                                                    ) })] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cashflowGraphs_CashFlowRangeGraph__WEBPACK_IMPORTED_MODULE_18__["default"], { earnedData: earnedData, spentData: spentData, datalabels: datalabels, fullDataLabels: fullDataLabels, currencySymbol: currencySymbol })] })) : (totalEarned !== undefined && totalSpent !== undefined) && ((totalEarned + totalSpent) === 0) ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex-grow flex items-center justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-medium font-primary text-tiny tracking-wide text-center mx-auto flex flex-col items-center justify-center", style: { minHeight: "70vh" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "w-50 h-[6rem] mb-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_empty_cashflow_png__WEBPACK_IMPORTED_MODULE_19__, alt: "Empty Cashflow", className: "w-full h-full object-cover object-center" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "No cashflow data available yet! As soon as you have money inflows and outflows, your total earnings and spending for the selected period will be shown here." })] })) }))) : null] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__.BottomSheet, { onDismiss: () => {
                        openFilter(false);
                    }, open: filter, style: {
                        borderRadius: 24,
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InsightsFilters__WEBPACK_IMPORTED_MODULE_21__["default"], { accounts: accounts, activeAccount: filteredAccount, onClick: (account) => {
                            filterAccountBy(account);
                        }, closeBottomSheet: closeBottomSheet }), defaultSnap: 400 }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cashflow);


/***/ }),

/***/ "./src/client/pages/insights/cashflowGraphs/CashFlowRangeGraph.tsx":
/*!*************************************************************************!*\
  !*** ./src/client/pages/insights/cashflowGraphs/CashFlowRangeGraph.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var _assets_images_Loader_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/Loader.svg */ "./src/client/assets/images/Loader.svg");






const CashFlowRangeGraph = ({ earnedData, spentData, fullDataLabels, currencySymbol, }) => {
    // State to track whether data is loaded
    const [dataLoaded, setDataLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formattedDates, setFormattedDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [seriesData, setSeriesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        // Check if all necessary data is available
        if (earnedData.length > 0 &&
            spentData.length > 0 &&
            fullDataLabels.length > 0) {
            try {
                const finalFormattedDates = fullDataLabels === null || fullDataLabels === void 0 ? void 0 : fullDataLabels.map((date) => {
                    const parts = date.split(" ");
                    let formattedDate;
                    if (parts.length === 2) {
                        const monthIndex = new Date(Date.parse(parts[0] + " 1, 2000")).getMonth() + 1;
                        formattedDate = `${parts[1]}-${monthIndex
                            .toString()
                            .padStart(2, "0")}-01`;
                    }
                    else if (parts.length === 3) {
                        const monthIndex = new Date(Date.parse(parts[0] + " 1, 2000")).getMonth() + 1;
                        const day = parts[1];
                        const year = `20${parts[2]}`;
                        formattedDate = `${year}-${monthIndex
                            .toString()
                            .padStart(2, "0")}-${day.padStart(2, "0")}`;
                    }
                    return formattedDate;
                });
                setFormattedDates(finalFormattedDates);
                setDataLoaded(true);
            }
            catch (e) {
                setError("Error: " + e);
            }
        }
    }, [earnedData, spentData, fullDataLabels]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (dataLoaded) {
            const newSeries = [
                {
                    name: "Earned",
                    data: earnedData.map((value, index) => ({
                        x: formattedDates[index] || "",
                        y: value,
                    })),
                    color: "#416f1f",
                },
                {
                    name: "Spent",
                    data: spentData.map((value, index) => ({
                        x: formattedDates[index] || "",
                        y: value,
                    })),
                    color: "#febb14",
                },
            ];
            setSeriesData(newSeries);
        }
    }, [dataLoaded, formattedDates, earnedData, spentData]);
    const options = {
        chart: {
            height: 350,
            type: "bar",
            stacked: false,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 5,
                columnWidth: "70%",
                rangeBarOverlap: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            type: "datetime",
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => `${(0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(value)} `,
            },
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                let date = w.config.series[0].data[dataPointIndex].x;
                const earnedValue = series[0][dataPointIndex];
                const spentValue = series[1][dataPointIndex];
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isSameMonth)(new Date(w.config.series[0].data[0].x), new Date(w.config.series[0].data[w.config.series[0].data.length - 1].x))) {
                    date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(date), "MMM dd, yyyy");
                }
                else {
                    date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(date), "MMM, yyyy");
                }
                return `<div style="padding: 10px; background-color: #f4f9fb; border-radius: 8px;" class="custom-tooltip">
                        <div style="display: flex; align-items: center; color: #101010; text-align: right; font-weight: bold;">
                            <span> + ${Number(earnedValue).toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
                            <sup style="color: #101010; font-size: 10px; font-weight: bold;">
                                ${currencySymbol}
                            </sup>
                        </div>
                        <div style="display: flex; align-items: center; color: #101010; text-align: right;font-weight: bold;">
                            <span> - ${Number(spentValue).toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
                            <sup style="color: #101010; font-size: 10px; font-weight: bold;">
                                ${currencySymbol}
                            </sup>
                        </div>
                        <hr style="border: 1px solid #f1f1f1;"/>
                        <div style="padding-bottom: 5px; color: #101010; display: flex; justify-content:center;" class="title">${date}</div>
                    </div>`;
            },
        },
        grid: {
            borderColor: "#f1f1f1",
        },
    };
    if (error) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["Error: ", error] });
    }
    return dataLoaded ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__["default"], { options: options, series: seriesData, type: "bar", height: 300 }) })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "shadow-card px-4 py-6 mb-3 rounded-lg mt-2 items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_Loader_svg__WEBPACK_IMPORTED_MODULE_6__, alt: "loader", id: "loader-image", style: {
                width: "40px",
                height: "40px",
                display: "block",
                margin: "4.375rem auto",
            } }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CashFlowRangeGraph);


/***/ }),

/***/ "./src/client/pages/insights/cashflowGraphs/Graph.tsx":
/*!************************************************************!*\
  !*** ./src/client/pages/insights/cashflowGraphs/Graph.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Graph_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graph.css */ "./src/client/pages/insights/cashflowGraphs/Graph.css");
/* harmony import */ var client_pages_components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/pages/components/AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");

// Graph.tsx




const Graph = ({ earned, spent }) => {
    const maxVal = Math.max(earned, Math.abs(spent));
    const [earnedHeight, setEarnedHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [spentHeight, setSpentHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [showEarnedValue, setShowEarnedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showSpentValue, setShowSpentValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const delayHeight = 100; // Adjust as necessary for initial delay
        const earnedHeightTimeout = setTimeout(() => {
            setEarnedHeight((earned / maxVal) * 100);
            setShowEarnedValue(true);
        }, delayHeight);
        const spentHeightTimeout = setTimeout(() => {
            setSpentHeight((Math.abs(spent) / maxVal) * 100);
            setShowSpentValue(true);
        }, delayHeight + 50); // Staggered delay for the second bar
        return () => {
            clearTimeout(earnedHeightTimeout);
            clearTimeout(spentHeightTimeout);
        };
    }, [earned, spent, maxVal]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "graph" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "graphContainer" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "bar", style: {
                            height: `${(0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(earnedHeight)}%`,
                            background: "#416f1f",
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `barValue${showEarnedValue ? " show" : ""}` }, { children: ["+ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_4__["default"], { target: parseInt((earned).toFixed(0)), duration: 500 })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "bar", style: { height: `${(0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_3__.checkNAN)(spentHeight)}%`, background: "#febb10" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `barValue${showSpentValue ? " show" : ""}` }, { children: ["- ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_4__["default"], { target: Math.abs(parseInt((spent).toFixed(0))), duration: 500 })] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "legend" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-primary text-xs text-skin-subtitle font-medium tracking-subtitle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: {
                                    background: "#416f1f",
                                } }), " ", "Total earned"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: { marginLeft: "1rem" }, className: "font-primary text-xs text-skin-subtitle font-medium tracking-subtitle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { background: "#febb10" } }), " Total spent"] }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);


/***/ }),

/***/ "./src/client/assets/images/empty-cashflow.png":
/*!*****************************************************!*\
  !*** ./src/client/assets/images/empty-cashflow.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b2cc4e8b9dbc902de0d.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19pbnNpZ2h0c19jYXNoZmxvd19DYXNoZmxvd190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywySEFBMkgsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSx1QkFBdUIseUJBQXlCLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsOERBQThELHlCQUF5QixvQkFBb0Isa0NBQWtDLDRCQUE0QixvQkFBb0Isa0JBQWtCLHVCQUF1Qix3QkFBd0IsR0FBRyxVQUFVLHlCQUF5QixtQkFBbUIscUJBQXFCLG9CQUFvQiw0QkFBNEIseUJBQXlCLDhDQUE4Qyw4QkFBOEIsd0JBQXdCLGlC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LEVBQ04sOEVBQ0UsU0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxpRUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxnQkFFckUsK0VBQUssU0FBUyxFQUFFLFdBQVcsY0FBYyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSx1QkFDdEQsdURBQUMsOEVBQWMsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUksS0FDL0UsSUFDRixLQUNGLEVBQ04sK0VBQUssU0FBUyxFQUFDLFFBQVEsaUJBQ3JCLCtFQUFLLFNBQVMsRUFBQyx1RUFBdUUsaUJBQ3BGLGlFQUNFLEtBQUssRUFBRTtvQ0FDTCxVQUFVLEVBQUUsU0FBUztpQ0FDdEIsR0FDSyxFQUFDLEdBQUcscUJBRVIsRUFDTiwrRUFDRSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQzdCLFNBQVMsRUFBQyx1RUFBdUUsaUJBRWpGLGlFQUFNLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBUyxxQkFDM0MsS0FDRixLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9pbnNpZ2h0cy9jYXNoZmxvd0dyYXBocy9HcmFwaC5jc3MiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2luc2lnaHRzL2Nhc2hmbG93R3JhcGhzL0dyYXBoLmNzcz8xMmVhIiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2luc2lnaHRzL0Ftb3VudERpc3BsYXkudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2luc2lnaHRzL1RvdGFsQ2FzaEZsb3dWaWV3LnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvaW5zaWdodHMvY2FzaGZsb3cvQ2FzaGZsb3cudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9pbnNpZ2h0cy9jYXNoZmxvd0dyYXBocy9DYXNoRmxvd1JhbmdlR3JhcGgudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9pbnNpZ2h0cy9jYXNoZmxvd0dyYXBocy9HcmFwaC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdyYXBoLmNzcyAqL1xuXG4uZ3JhcGhDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xufVxuXG4uYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC44cztcbn1cblxuLmJhcjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmJhclZhbHVlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBvcGFjaXR5OiAwOyAvKiBTdGFydCB3aXRoIG9wYWNpdHkgMCBmb3IgdGhlIGZhZGUtaW4gZWZmZWN0ICovXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzOyAvKiBBZGp1c3QgdGhlIGR1cmF0aW9uIGFzIG5lZWRlZCAqL1xufVxuXG4uYmFyVmFsdWUuc2hvdyB7XG4gICAgb3BhY2l0eTogMTsgLyogU2hvdyB0aGUgdmFsdWUgd2l0aCBvcGFjaXR5IDEgKi9cbn1cblxuLmxlZ2VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMjBweDtcbn1cblxuLmxlZ2VuZCBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGNvbG9yOiAjODc4Nzg3O1xufVxuXG4ubGVnZW5kIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jbGllbnQvcGFnZXMvaW5zaWdodHMvY2FzaGZsb3dHcmFwaHMvR3JhcGguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7O0FBRWQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVLEVBQUUsZ0RBQWdEO0lBQzVELHdCQUF3QixFQUFFLGtDQUFrQztBQUNoRTs7QUFFQTtJQUNJLFVBQVUsRUFBRSxrQ0FBa0M7QUFDbEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdyYXBoLmNzcyAqL1xcblxcbi5ncmFwaENvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcXG59XFxuXFxuLmJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC44cztcXG59XFxuXFxuLmJhcjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYmFyVmFsdWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBvcGFjaXR5OiAwOyAvKiBTdGFydCB3aXRoIG9wYWNpdHkgMCBmb3IgdGhlIGZhZGUtaW4gZWZmZWN0ICovXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41czsgLyogQWRqdXN0IHRoZSBkdXJhdGlvbiBhcyBuZWVkZWQgKi9cXG59XFxuXFxuLmJhclZhbHVlLnNob3cge1xcbiAgICBvcGFjaXR5OiAxOyAvKiBTaG93IHRoZSB2YWx1ZSB3aXRoIG9wYWNpdHkgMSAqL1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAyMHB4O1xcbn1cXG5cXG4ubGVnZW5kIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGNvbG9yOiAjODc4Nzg3O1xcbn1cXG5cXG4ubGVnZW5kIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JhcGguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmFwaC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmFwaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgdXNlQ3VycmVuY3lTZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvY3VycmVuY3lTZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW5pbWF0ZWROdW1iZXIgZnJvbSBcIi4uL0FuaW1hdGVkTnVtYmVyXCI7XG50eXBlIEFtb3VudERpc3BsYXlQcm9wcyA9IHtcbiAgYW1vdW50OiBudW1iZXI7XG59O1xuY29uc3QgQW1vdW50RGlzcGxheSA9ICh7IGFtb3VudCB9OiBBbW91bnREaXNwbGF5UHJvcHMpID0+IHtcbiAgY29uc3QgY3VycmVuY3kgPSB1c2VDdXJyZW5jeVNldHRpbmdzU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXRpbnkgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICB7Lyoge2Ftb3VudC50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIpfSAqL31cbiAgICAgICAgPEFuaW1hdGVkTnVtYmVyIHRhcmdldD17YW1vdW50fSBkdXJhdGlvbj17NTAwfSAvPlxuICAgICAgICA8c3VwXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjExcHhcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwic3VwZXJcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTRweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y3VycmVuY3kuY3VycmVuY3lTeW1ib2wgPz8gXCJcIn1cbiAgICAgICAgPC9zdXA+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXh4eHMgYWJzb2x1dGUgLXRvcC0yIC1yaWdodC0zXCI+XG4gICAgICAgIHtjdXJyZW5jeS5jdXJyZW5jeVN5bWJvbH1cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFtb3VudERpc3BsYXk7XG4iLCJpbXBvcnQgdXNlQ3VycmVuY3lTZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvY3VycmVuY3lTZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG50eXBlIFRvdGFsQ2FzaEZsb3dWaWV3UHJvcHMgPSB7XG4gIHRvdGFsQW1vdW50OiBudW1iZXI7XG59O1xuY29uc3QgVG90YWxDYXNoRmxvd1ZpZXcgPSAoeyB0b3RhbEFtb3VudCB9OiBUb3RhbENhc2hGbG93Vmlld1Byb3BzKSA9PiB7XG4gIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gdXNlQ3VycmVuY3lTZXR0aW5nc1N0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIGZvbnQtc2VtaWJvbGQgdGV4dC14cyBhYnNvbHV0ZSAtcmlnaHQtNiB0b3AtMS41XCI+XG4gICAgICAgICAge2N1cnJlbmN5U3ltYm9sLmN1cnJlbmN5U3ltYm9sfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGl0bGUgZm9udC1jdXN0b20gZm9udC1tZWRpdW0gdGV4dC1za2luLWJhc2VcIj5cbiAgICAgICAgICB7dG90YWxBbW91bnRcbiAgICAgICAgICAgID8gTnVtYmVyKHRvdGFsQW1vdW50KS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPHN1cFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInN1cGVyXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTRweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3VycmVuY3lTeW1ib2wuY3VycmVuY3lTeW1ib2wgPz8gXCJcIn1cbiAgICAgICAgICA8L3N1cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1za2luLWJhc2UgdHJhY2tpbmctc3VidGl0bGVcIj5cbiAgICAgICAgVG90YWwgY2FzaGZsb3dcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG90YWxDYXNoRmxvd1ZpZXc7XG4iLCJpbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgTmF2QmFyVGl0bGUgZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL05hdkJhclRpdGxlXCI7XG5pbXBvcnQgQW1vdW50RGlzcGxheSBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvQW1vdW50RGlzcGxheVwiO1xuaW1wb3J0IENhc2hGbG93RmlsdGVyQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9pbnNpZ2h0cy9DYXNoRmxvd0ZpbHRlckJ1dHRvblwiO1xuaW1wb3J0IFRvdGFsQ2FzaEZsb3dWaWV3IGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9pbnNpZ2h0cy9Ub3RhbENhc2hGbG93Vmlld1wiO1xuaW1wb3J0IHsgY2FzaGZsb3dGaWx0ZXJzIH0gZnJvbSBcImNsaWVudC91dGlscy9Nb2NrRGF0YVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpQ2FsZW5kYXIsIEZpSW5mbyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi4vY2FzaGZsb3dHcmFwaHMvR3JhcGhcIjtcbmltcG9ydCBDYXNoRmxvd1JhbmdlR3JhcGggZnJvbSBcIi4uL2Nhc2hmbG93R3JhcGhzL0Nhc2hGbG93UmFuZ2VHcmFwaFwiO1xuaW1wb3J0IHsgZ2V0TWljcm9EZXRhaWxzVmlld0RhdGEgfSBmcm9tIFwiY2xpZW50L2FwaS90cmFuc2FjdGlvbnNcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHVzZUluc2lnaHRzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9pbnNpZ2h0c1N0b3JlXCI7XG5pbXBvcnQgeyBCb3R0b21TaGVldCB9IGZyb20gXCJyZWFjdC1zcHJpbmctYm90dG9tLXNoZWV0XCI7XG5pbXBvcnQgZW1wdHlDYXNoRmxvdyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9lbXB0eS1jYXNoZmxvdy5wbmdcIjtcbmltcG9ydCBJbnNpZ2h0c0ZpbHRlcnMgZnJvbSBcIi4uL0luc2lnaHRzRmlsdGVyc1wiO1xuaW1wb3J0IHVzZUFjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcImNsaWVudC9tb2RlbHMvQWNjb3VudFwiO1xuaW1wb3J0IEFjY291bnRzIGZyb20gXCJjbGllbnQvbW9kZWxzL0FjY291bnRzXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGNoZWNrTkFOIH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgeyBCc0JhbmsgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuY29uc3QgQ2FzaGZsb3cgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW2Vhcm5lZERhdGEsIHNldEVhcm5lZERhdGFdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcbiAgY29uc3QgW3RvdGFsRWFybmVkLCBzZXRUb3RhbEVhcm5lZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG90YWxTcGVudCwgc2V0VG90YWxTcGVudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3BlbnREYXRhLCBzZXRTcGVudERhdGFdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcbiAgY29uc3QgW2RhdGFsYWJlbHMsIHNldERhdGFsYWJlbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnVsbERhdGFMYWJlbHMsIHNldEZ1bGxEYXRhTGFiZWxzXSA9IHVzZVN0YXRlPERhdGVbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgLy8gY29uc3QgYWNjb3VudE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYWNjb3VudE5hbWVcIik7XG4gIC8vIGNvbnN0IGRhdGVGaWx0ZXIgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZGF0ZUZpbHRlclwiKTtcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3QgaW5zaWdodHNTdG9yZVN0YXRlID0gdXNlSW5zaWdodHNTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcbiAgY29uc3QgYWNjb3VudFN0b3JlID0gdXNlQWNjb3VudFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGZvcm1hdChpbnNpZ2h0c1N0b3JlU3RhdGUuaW5zaWdodHNTdGFydERhdGUsIFwieXl5eS1NTS1kZFwiKTtcbiAgY29uc3QgZW5kRGF0ZSA9IGZvcm1hdChpbnNpZ2h0c1N0b3JlU3RhdGUuaW5zaWdodHNFbmREYXRlLCBcInl5eXktTU0tZGRcIik7XG4gIGNvbnN0IGFjY291bnRzID0gYWNjb3VudFN0b3JlLmFjY291bnRzIGFzIEFjY291bnRzO1xuICBjb25zdCBmaWx0ZXJBY2NvdW50QnkgPSB1c2VBY2NvdW50U3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmZpbHRlckJ5KTtcbiAgY29uc3QgZmlsdGVyZWRBY2NvdW50ID0gdXNlQWNjb3VudFN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5maWx0ZXJcbiAgKSBhcyBBY2NvdW50O1xuICBjb25zdCBbZmlsdGVyLCBvcGVuRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmZXRjaERhdGFGcm9tU2VydmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCBsaW5rZWRBY2NvdW50SWQgPSBudWxsO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TWljcm9EZXRhaWxzVmlld0RhdGEoe1xuICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWcsXG4gICAgICAgIGxpbmtlZEFjY291bnRJZCxcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlLFxuICAgICAgfSk7XG5cbiAgICAgIHNldEVhcm5lZERhdGEoZGF0YS5lYXJuZWREYXRhKTtcbiAgICAgIHNldFRvdGFsRWFybmVkKGRhdGEudG90YWxFYXJuZWQpO1xuICAgICAgc2V0VG90YWxTcGVudChkYXRhLnRvdGFsU3BlbnQpO1xuICAgICAgc2V0U3BlbnREYXRhKGRhdGEuc3BlbnREYXRhKTtcbiAgICAgIHNldEZ1bGxEYXRhTGFiZWxzKGRhdGEuZnVsbERhdGFMYWJlbHMpO1xuICAgICAgc2V0RGF0YWxhYmVscyhkYXRhLmRhdGFsYWJlbHMpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsb3NlQm90dG9tU2hlZXQgPSAoKSA9PiB7XG4gICAgb3BlbkZpbHRlcihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZldGNoRGF0YUZyb21TZXJ2ZXIoKTtcbiAgICB9LCA1MDApO1xuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlLCBmaWx0ZXJlZEFjY291bnRdKTtcbiAgY29uc3QgY3VycmVuY3lTeW1ib2wgPSBcIktFU1wiO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0zLjVcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPE5hdkJhclRpdGxlIHRpdGxlPVwiQ2FzaGZsb3dcIiBmb250U2l6ZT1cInRleHQtMnhsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGgtcHggYmctc2tpbi1hY2NlbnQzIG1iLTFcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteC0zLjVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgPENhc2hGbG93RmlsdGVyQnV0dG9uXG4gICAgICAgICAgICBsYWJlbD17aW5zaWdodHNTdG9yZVN0YXRlLmluc2lnaHRzQWN0aXZlSW5zdGl0dXRpb25OYW1lfVxuICAgICAgICAgICAgaWNvbj17PEJzQmFuayBjb2xvcj1cIiMxMDEwMTBcIiAvPn1cbiAgICAgICAgICAgIGtleT17YEFsbCBhY2NvdW50c2B9XG4gICAgICAgICAgICBpc0FjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRmlsdGVyKHRydWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhc2hGbG93RmlsdGVyQnV0dG9uXG4gICAgICAgICAgICBsYWJlbD17aW5zaWdodHNTdG9yZVN0YXRlLmluc2lnaHRzRGF0ZUZpbHRlck5hbWV9XG4gICAgICAgICAgICBpY29uPXs8RmlDYWxlbmRhciAvPn1cbiAgICAgICAgICAgIGtleT17YFRoaXMgbW9udGhgfVxuICAgICAgICAgICAgaXNBY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkZpbHRlcih0cnVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFRvdGFsQ2FzaEZsb3dWaWV3XG4gICAgICAgICAgICAgIHRvdGFsQW1vdW50PXtcbiAgICAgICAgICAgICAgICB0b3RhbEVhcm5lZCAmJiB0b3RhbFNwZW50ID8gdG90YWxFYXJuZWQgKyB0b3RhbFNwZW50IDogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEdyYXBoXG4gICAgICAgICAgICAgIGVhcm5lZD17dG90YWxFYXJuZWQgPyB0b3RhbEVhcm5lZCA6IDB9XG4gICAgICAgICAgICAgIHNwZW50PXt0b3RhbFNwZW50ID8gdG90YWxTcGVudCA6IDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIGJnLXNraW4tYmFzZSBwLTQgc2hhZG93LWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXRpbnkgdHJhY2tpbmctd2lkZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgICB7LyogSW4gdGhlIGxhc3Qge2Vhcm5lZERhdGEubGVuZ3RofSBtb250aHM6ICovfVxuICAgICAgICAgICAgICAgICAgSW4gdGhlIHNlbGVjdGVkIHBlcmlvZDpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZm9udC1wcmltYXJ5IHRleHQtdGlueSB0cmFja2luZy13aWRlIG1iLTIgbXItMVwiPlxuICAgICAgICAgICAgICAgICAgICAtIFlvdSd2ZSBlYXJuZWQgYW4gYXZlcmFnZSBvZlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8QW1vdW50RGlzcGxheVxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NoZWNrTkFOKFxuICAgICAgICAgICAgICAgICAgICAgIGVhcm5lZERhdGE/LnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKyBiLCAwKSAvXG4gICAgICAgICAgICAgICAgICAgICAgZWFybmVkRGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXRpbnkgdHJhY2tpbmctd2lkZSBtci0yXCI+XG4gICAgICAgICAgICAgICAgICAgIC0gWW91J3ZlIHNwZW50IGFuIGF2ZXJhZ2Ugb2ZcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEFtb3VudERpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjaGVja05BTihcbiAgICAgICAgICAgICAgICAgICAgICBzcGVudERhdGE/LnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKyBiLCAwKSAvXG4gICAgICAgICAgICAgICAgICAgICAgc3BlbnREYXRhLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDYXNoRmxvd1JhbmdlR3JhcGhcbiAgICAgICAgICAgICAgZWFybmVkRGF0YT17W119XG4gICAgICAgICAgICAgIHNwZW50RGF0YT17W119XG4gICAgICAgICAgICAgIGRhdGFsYWJlbHM9e1tdfVxuICAgICAgICAgICAgICBmdWxsRGF0YUxhYmVscz17W119XG4gICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sPXtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAodG90YWxFYXJuZWQgIT09IHVuZGVmaW5lZCAmJiB0b3RhbFNwZW50ICE9PSB1bmRlZmluZWQpICYmICgodG90YWxFYXJuZWQgKyB0b3RhbFNwZW50KSAhPT0gMCkgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUb3RhbENhc2hGbG93VmlldyB0b3RhbEFtb3VudD17dG90YWxFYXJuZWQgKyB0b3RhbFNwZW50fSAvPlxuICAgICAgICAgICAgPEdyYXBoIGVhcm5lZD17dG90YWxFYXJuZWR9IHNwZW50PXt0b3RhbFNwZW50fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIGJnLXNraW4tYmFzZSBwLTQgc2hhZG93LWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXRpbnkgdHJhY2tpbmctd2lkZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgICB7LyogSW4gdGhlIGxhc3Qge2Vhcm5lZERhdGEubGVuZ3RofSBtb250aHM6ICovfVxuICAgICAgICAgICAgICAgICAgSW4gdGhlIHNlbGVjdGVkIHBlcmlvZDpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZm9udC1wcmltYXJ5IHRleHQtdGlueSB0cmFja2luZy13aWRlIG1iLTIgbXItMVwiPlxuICAgICAgICAgICAgICAgICAgICAtIFlvdSd2ZSBlYXJuZWQgYW4gYXZlcmFnZSBvZlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8QW1vdW50RGlzcGxheVxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NoZWNrTkFOKFxuICAgICAgICAgICAgICAgICAgICAgIGVhcm5lZERhdGEuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IDApLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC9cbiAgICAgICAgICAgICAgICAgICAgICAoZWFybmVkRGF0YS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gMCkubGVuZ3RoIHx8IDEpIC8vIEF2b2lkIGRpdmlzaW9uIGJ5IHplcm9cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtcHJpbWFyeSB0ZXh0LXRpbnkgdHJhY2tpbmctd2lkZSBtci0yXCI+XG4gICAgICAgICAgICAgICAgICAgIC0gWW91J3ZlIHNwZW50IGFuIGF2ZXJhZ2Ugb2ZcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEFtb3VudERpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjaGVja05BTihcbiAgICAgICAgICAgICAgICAgICAgICBzcGVudERhdGEuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IDApLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC9cbiAgICAgICAgICAgICAgICAgICAgICAoc3BlbnREYXRhLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSAwKS5sZW5ndGggfHwgMSkgLy8gQXZvaWQgZGl2aXNpb24gYnkgemVyb1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDYXNoRmxvd1JhbmdlR3JhcGhcbiAgICAgICAgICAgICAgZWFybmVkRGF0YT17ZWFybmVkRGF0YX1cbiAgICAgICAgICAgICAgc3BlbnREYXRhPXtzcGVudERhdGF9XG4gICAgICAgICAgICAgIGRhdGFsYWJlbHM9e2RhdGFsYWJlbHN9XG4gICAgICAgICAgICAgIGZ1bGxEYXRhTGFiZWxzPXtmdWxsRGF0YUxhYmVsc31cbiAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2w9e2N1cnJlbmN5U3ltYm9sfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6ICh0b3RhbEVhcm5lZCAhPT0gdW5kZWZpbmVkICYmIHRvdGFsU3BlbnQgIT09IHVuZGVmaW5lZCkgJiYgKCh0b3RhbEVhcm5lZCArIHRvdGFsU3BlbnQpID09PSAwKSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBmb250LXByaW1hcnkgdGV4dC10aW55IHRyYWNraW5nLXdpZGUgdGV4dC1jZW50ZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogXCI3MHZoXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUwIGgtWzZyZW1dIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2VtcHR5Q2FzaEZsb3d9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJFbXB0eSBDYXNoZmxvd1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTm8gY2FzaGZsb3cgZGF0YSBhdmFpbGFibGUgeWV0ISBBcyBzb29uIGFzIHlvdSBoYXZlIG1vbmV5XG4gICAgICAgICAgICAgICAgaW5mbG93cyBhbmQgb3V0Zmxvd3MsIHlvdXIgdG90YWwgZWFybmluZ3MgYW5kIHNwZW5kaW5nIGZvciB0aGVcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCBwZXJpb2Qgd2lsbCBiZSBzaG93biBoZXJlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICA8Qm90dG9tU2hlZXRcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5GaWx0ZXIoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb3Blbj17ZmlsdGVyfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI0LFxuICAgICAgICAgIH19XG4gICAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgICAgPEluc2lnaHRzRmlsdGVyc1xuICAgICAgICAgICAgICBhY2NvdW50cz17YWNjb3VudHN9XG4gICAgICAgICAgICAgIGFjdGl2ZUFjY291bnQ9e2ZpbHRlcmVkQWNjb3VudH1cbiAgICAgICAgICAgICAgb25DbGljaz17KGFjY291bnQ6IEFjY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJBY2NvdW50QnkoYWNjb3VudCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsb3NlQm90dG9tU2hlZXQ9e2Nsb3NlQm90dG9tU2hlZXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0U25hcD17NDAwfVxuICAgICAgICA+PC9Cb3R0b21TaGVldD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzaGZsb3c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gXCJyZWFjdC1hcGV4Y2hhcnRzXCI7XG5pbXBvcnQgeyBmb3JtYXQsIGlzU2FtZU1vbnRoIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBBcGV4T3B0aW9ucyB9IGZyb20gXCJhcGV4Y2hhcnRzXCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCBsb2FkZXJTdmcgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvTG9hZGVyLnN2Z1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlYXJuZWREYXRhOiBudW1iZXJbXTtcbiAgc3BlbnREYXRhOiBudW1iZXJbXTtcbiAgZGF0YWxhYmVsczogc3RyaW5nW107XG4gIGZ1bGxEYXRhTGFiZWxzOiBEYXRlW107XG4gIGN1cnJlbmN5U3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IENhc2hGbG93UmFuZ2VHcmFwaDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgZWFybmVkRGF0YSxcbiAgc3BlbnREYXRhLFxuICBmdWxsRGF0YUxhYmVscyxcbiAgY3VycmVuY3lTeW1ib2wsXG59KSA9PiB7XG4gIC8vIFN0YXRlIHRvIHRyYWNrIHdoZXRoZXIgZGF0YSBpcyBsb2FkZWRcbiAgY29uc3QgW2RhdGFMb2FkZWQsIHNldERhdGFMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9ybWF0dGVkRGF0ZXMsIHNldEZvcm1hdHRlZERhdGVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtzZXJpZXNEYXRhLCBzZXRTZXJpZXNEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDaGVjayBpZiBhbGwgbmVjZXNzYXJ5IGRhdGEgaXMgYXZhaWxhYmxlXG4gICAgaWYgKFxuICAgICAgZWFybmVkRGF0YS5sZW5ndGggPiAwICYmXG4gICAgICBzcGVudERhdGEubGVuZ3RoID4gMCAmJlxuICAgICAgZnVsbERhdGFMYWJlbHMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxGb3JtYXR0ZWREYXRlczogYW55ID0gZnVsbERhdGFMYWJlbHM/Lm1hcCgoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkYXRlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZTtcbiAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aEluZGV4ID1cbiAgICAgICAgICAgICAgbmV3IERhdGUoRGF0ZS5wYXJzZShwYXJ0c1swXSArIFwiIDEsIDIwMDBcIikpLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGAke3BhcnRzWzFdfS0ke21vbnRoSW5kZXhcbiAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKX0tMDFgO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aEluZGV4ID1cbiAgICAgICAgICAgICAgbmV3IERhdGUoRGF0ZS5wYXJzZShwYXJ0c1swXSArIFwiIDEsIDIwMDBcIikpLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gcGFydHNbMV07XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gYDIwJHtwYXJ0c1syXX1gO1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGAke3llYXJ9LSR7bW9udGhJbmRleFxuICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAucGFkU3RhcnQoMiwgXCIwXCIpfS0ke2RheS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRGb3JtYXR0ZWREYXRlcyhmaW5hbEZvcm1hdHRlZERhdGVzKTtcbiAgICAgICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0RXJyb3IoXCJFcnJvcjogXCIgKyBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtlYXJuZWREYXRhLCBzcGVudERhdGEsIGZ1bGxEYXRhTGFiZWxzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YUxvYWRlZCkge1xuICAgICAgY29uc3QgbmV3U2VyaWVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJFYXJuZWRcIixcbiAgICAgICAgICBkYXRhOiBlYXJuZWREYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgeDogZm9ybWF0dGVkRGF0ZXNbaW5kZXhdIHx8IFwiXCIsIC8vIFByb3ZpZGUgYSBmYWxsYmFjayBpZiBpbmRleCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICB5OiB2YWx1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgY29sb3I6IFwiIzQxNmYxZlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJTcGVudFwiLFxuICAgICAgICAgIGRhdGE6IHNwZW50RGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIHg6IGZvcm1hdHRlZERhdGVzW2luZGV4XSB8fCBcIlwiLCAvLyBQcm92aWRlIGEgZmFsbGJhY2sgaWYgaW5kZXggaXMgb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgeTogdmFsdWUsXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGNvbG9yOiBcIiNmZWJiMTRcIixcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgICBzZXRTZXJpZXNEYXRhKG5ld1Nlcmllcyk7XG4gICAgfVxuICB9LCBbZGF0YUxvYWRlZCwgZm9ybWF0dGVkRGF0ZXMsIGVhcm5lZERhdGEsIHNwZW50RGF0YV0pO1xuXG4gIGNvbnN0IG9wdGlvbnM6IEFwZXhPcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICBzdGFja2VkOiBmYWxzZSxcbiAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgem9vbToge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbG90T3B0aW9uczoge1xuICAgICAgYmFyOiB7XG4gICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIGNvbHVtbldpZHRoOiBcIjcwJVwiLFxuICAgICAgICByYW5nZUJhck92ZXJsYXA6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGF0YUxhYmVsczoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHlheGlzOiB7XG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsdWUpID0+IGAke2Zvcm1hdE51bWJlcih2YWx1ZSl9IGAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgY3VzdG9tOiAoeyBzZXJpZXMsIHNlcmllc0luZGV4LCBkYXRhUG9pbnRJbmRleCwgdyB9KSA9PiB7XG4gICAgICAgIGxldCBkYXRlID0gdy5jb25maWcuc2VyaWVzWzBdLmRhdGFbZGF0YVBvaW50SW5kZXhdLng7XG4gICAgICAgIGNvbnN0IGVhcm5lZFZhbHVlID0gc2VyaWVzWzBdW2RhdGFQb2ludEluZGV4XTtcbiAgICAgICAgY29uc3Qgc3BlbnRWYWx1ZSA9IHNlcmllc1sxXVtkYXRhUG9pbnRJbmRleF07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1NhbWVNb250aChcbiAgICAgICAgICAgIG5ldyBEYXRlKHcuY29uZmlnLnNlcmllc1swXS5kYXRhWzBdLngpLFxuICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgIHcuY29uZmlnLnNlcmllc1swXS5kYXRhW3cuY29uZmlnLnNlcmllc1swXS5kYXRhLmxlbmd0aCAtIDFdLnhcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGRhdGUgPSBmb3JtYXQobmV3IERhdGUoZGF0ZSksIFwiTU1NIGRkLCB5eXl5XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGUgPSBmb3JtYXQobmV3IERhdGUoZGF0ZSksIFwiTU1NLCB5eXl5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQtY29sb3I6ICNmNGY5ZmI7IGJvcmRlci1yYWRpdXM6IDhweDtcIiBjbGFzcz1cImN1c3RvbS10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgY29sb3I6ICMxMDEwMTA7IHRleHQtYWxpZ246IHJpZ2h0OyBmb250LXdlaWdodDogYm9sZDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKyAke051bWJlcihlYXJuZWRWYWx1ZSkudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuLVVTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cCBzdHlsZT1cImNvbG9yOiAjMTAxMDEwOyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2N1cnJlbmN5U3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgY29sb3I6ICMxMDEwMTA7IHRleHQtYWxpZ246IHJpZ2h0O2ZvbnQtd2VpZ2h0OiBib2xkO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAtICR7TnVtYmVyKHNwZW50VmFsdWUpLnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbi1VU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXAgc3R5bGU9XCJjb2xvcjogIzEwMTAxMDsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogYm9sZDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1ib3R0b206IDVweDsgY29sb3I6ICMxMDEwMTA7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDpjZW50ZXI7XCIgY2xhc3M9XCJ0aXRsZVwiPiR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjZjFmMWYxXCIsXG4gICAgfSxcbiAgfTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiBkYXRhTG9hZGVkID8gKFxuICAgIDxkaXY+XG4gICAgICA8UmVhY3RBcGV4Q2hhcnRcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgc2VyaWVzPXtzZXJpZXNEYXRhfVxuICAgICAgICB0eXBlPVwiYmFyXCJcbiAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNhcmQgcHgtNCBweS02IG1iLTMgcm91bmRlZC1sZyBtdC0yIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2xvYWRlclN2Z31cbiAgICAgICAgYWx0PVwibG9hZGVyXCJcbiAgICAgICAgaWQ9XCJsb2FkZXItaW1hZ2VcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICBtYXJnaW46IFwiNC4zNzVyZW0gYXV0b1wiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2hGbG93UmFuZ2VHcmFwaDtcbiIsIi8vIEdyYXBoLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vR3JhcGguY3NzXCI7XG5pbXBvcnQgQW5pbWF0ZWROdW1iZXIgZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL0FuaW1hdGVkTnVtYmVyXCI7XG5pbXBvcnQgeyBjaGVja05BTiB9IGZyb20gXCJjbGllbnQvdXRpbHMvRm9ybWF0dGVyc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlYXJuZWQ6IG51bWJlcjtcbiAgc3BlbnQ6IG51bWJlcjtcbn1cblxuY29uc3QgR3JhcGg6IEZDPFByb3BzPiA9ICh7IGVhcm5lZCwgc3BlbnQgfSkgPT4ge1xuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heChlYXJuZWQsIE1hdGguYWJzKHNwZW50KSk7XG5cbiAgY29uc3QgW2Vhcm5lZEhlaWdodCwgc2V0RWFybmVkSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3BlbnRIZWlnaHQsIHNldFNwZW50SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvd0Vhcm5lZFZhbHVlLCBzZXRTaG93RWFybmVkVmFsdWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1NwZW50VmFsdWUsIHNldFNob3dTcGVudFZhbHVlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRlbGF5SGVpZ2h0ID0gMTAwOyAvLyBBZGp1c3QgYXMgbmVjZXNzYXJ5IGZvciBpbml0aWFsIGRlbGF5XG4gICAgY29uc3QgZWFybmVkSGVpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RWFybmVkSGVpZ2h0KChlYXJuZWQgLyBtYXhWYWwpICogMTAwKTtcbiAgICAgIHNldFNob3dFYXJuZWRWYWx1ZSh0cnVlKTtcbiAgICB9LCBkZWxheUhlaWdodCk7XG5cbiAgICBjb25zdCBzcGVudEhlaWdodFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNwZW50SGVpZ2h0KChNYXRoLmFicyhzcGVudCkgLyBtYXhWYWwpICogMTAwKTtcbiAgICAgIHNldFNob3dTcGVudFZhbHVlKHRydWUpO1xuICAgIH0sIGRlbGF5SGVpZ2h0ICsgNTApOyAvLyBTdGFnZ2VyZWQgZGVsYXkgZm9yIHRoZSBzZWNvbmQgYmFyXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGVhcm5lZEhlaWdodFRpbWVvdXQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHNwZW50SGVpZ2h0VGltZW91dCk7XG4gICAgfTtcbiAgfSwgW2Vhcm5lZCwgc3BlbnQsIG1heFZhbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmFwaFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFwaENvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFyXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiBgJHtjaGVja05BTihlYXJuZWRIZWlnaHQpfSVgLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNDE2ZjFmXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFyVmFsdWUke3Nob3dFYXJuZWRWYWx1ZSA/IFwiIHNob3dcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICArIDxBbmltYXRlZE51bWJlciB0YXJnZXQ9e3BhcnNlSW50KChlYXJuZWQpLnRvRml4ZWQoMCkpfSBkdXJhdGlvbj17NTAwfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhclwiXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgJHtjaGVja05BTihzcGVudEhlaWdodCl9JWAsIGJhY2tncm91bmQ6IFwiI2ZlYmIxMFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJhclZhbHVlJHtzaG93U3BlbnRWYWx1ZSA/IFwiIHNob3dcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAtIDxBbmltYXRlZE51bWJlciB0YXJnZXQ9e01hdGguYWJzKHBhcnNlSW50KChzcGVudCkudG9GaXhlZCgwKSkpfSBkdXJhdGlvbj17NTAwfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1tZWRpdW0gdHJhY2tpbmctc3VidGl0bGVcIj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNDE2ZjFmXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L3NwYW4+e1wiIFwifVxuICAgICAgICAgIFRvdGFsIGVhcm5lZFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXJlbVwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXN1YnRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZlYmIxMFwiIH19Pjwvc3Bhbj4gVG90YWwgc3BlbnRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9