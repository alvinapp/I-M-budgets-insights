"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_components_ToolTipProgressBar_TooltipProgressBar_css-src_client_pages_compon-665389"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css ***!
  \***************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.row {
  display: flex;
  align-items: center;
  width: 100%;
}

.month-start,
.month-end {
  white-space: nowrap;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
}

.tooltip-progress-bar {
  position: relative;
  flex-grow: 1;
  height: 4px;
  /* margin: 0 10px; */
  border-radius: 10px;
  background-color: #ccc;
}

.tooltip-progress-bar-progress {
  position: relative;
  height: 100%;
  border-radius: 10px;
  background-color: #4caf50;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 1px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  z-index: 3;
  opacity: 0.8;
  white-space: nowrap;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #020202 transparent transparent transparent;
}

.dotted-divider-container {
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  width: 2px;
}

.dotted-divider {
  height: 100%;
  border-left: 2px dashed rgba(0, 0, 0, 0.5);
}

@keyframes smoothRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;;EAEE,mBAAmB;EACnB,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,SAAS;EACT,2BAA2B;EAC3B,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,yDAAyD;AAC3D;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".row {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.month-start,\n.month-end {\n  white-space: nowrap;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.8rem;\n}\n\n.tooltip-progress-bar {\n  position: relative;\n  flex-grow: 1;\n  height: 4px;\n  /* margin: 0 10px; */\n  border-radius: 10px;\n  background-color: #ccc;\n}\n\n.tooltip-progress-bar-progress {\n  position: relative;\n  height: 100%;\n  border-radius: 10px;\n  background-color: #4caf50;\n}\n\n.tooltip {\n  position: absolute;\n  bottom: calc(100% + 1px);\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #000000;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n  border-radius: 6px;\n  z-index: 3;\n  opacity: 0.8;\n  white-space: nowrap;\n}\n\n.tooltip::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #020202 transparent transparent transparent;\n}\n\n.dotted-divider-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n  width: 2px;\n}\n\n.dotted-divider {\n  height: 100%;\n  border-left: 2px dashed rgba(0, 0, 0, 0.5);\n}\n\n@keyframes smoothRotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css":
/*!*******************************************************************************!*\
  !*** ./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css ***!
  \*******************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./TooltipProgressBar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./TooltipProgressBar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./TooltipProgressBar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/ToolTipProgressBar/TooltipProgressBar.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TooltipProgressBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/client/pages/components/EmptyState.tsx":
/*!****************************************************!*\
  !*** ./src/client/pages/components/EmptyState.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionEmptyState: () => (/* binding */ TransactionEmptyState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_budgets_insights_no_transactions_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/images/budgets-insights/no-transactions.svg */ "./src/client/assets/images/budgets-insights/no-transactions.svg");


const TransactionEmptyState = ({ label, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col justify-center items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex justify-center items-center h-20 w-20 bg-skin-iconPrimary rounded-full" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_budgets_insights_no_transactions_svg__WEBPACK_IMPORTED_MODULE_1__, alt: "", className: "h-16 w-16" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex-col mt-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-tiny text-label font-medium tracking-subtitle" }, { children: label })) }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/TabButton.tsx":
/*!***************************************************!*\
  !*** ./src/client/pages/components/TabButton.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const TabButton = ({ label, onClick, isActive = false, children, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${isActive ? " bg-[#2676B8] rounded-full" : "bg-transparent"} py-3 w-[11.375rem]`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${isActive ? "text-[#FFFFFF]" : "text-[#828282]"} mr-2` }, { children: children })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${isActive
                        ? "text-[#FFFFFF] font-custom text-sm font-bold tracking-tab_text"
                        : "text-[#828282] font-custom text-sm font-bold tracking-tab_text"}` }, { children: label }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabButton);


/***/ }),

/***/ "./src/client/pages/components/TabFilter.tsx":
/*!***************************************************!*\
  !*** ./src/client/pages/components/TabFilter.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_pages_components_TabButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/pages/components/TabButton */ "./src/client/pages/components/TabButton.tsx");


const TabFilter = ({ tabs, activeTab, onClick }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center bg-[#F2F2F2] rounded-full" }, { children: tabs === null || tabs === void 0 ? void 0 : tabs.map((element, i) => {
            const isActive = element.id == activeTab;
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_TabButton__WEBPACK_IMPORTED_MODULE_1__["default"], { label: element.name, children: element.icon, isActive: isActive, onClick: () => {
                    if (onClick) {
                        onClick(element);
                    }
                } }, i));
        }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabFilter);


/***/ }),

/***/ "./src/client/pages/components/budget/AvailableBudgetContainer.tsx":
/*!*************************************************************************!*\
  !*** ./src/client/pages/components/budget/AvailableBudgetContainer.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailableBudgetContainer: () => (/* binding */ AvailableBudgetContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");


const AvailableBudgetContainer = ({ amount, subtitle, currencySymbol, isLoading, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-4xl text-skin-base font-bold" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_1__["default"], { target: isLoading ? 0 : amount !== null && amount !== void 0 ? amount : 0, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: "text-xs align-super -ml-1" }, { children: currencySymbol ? currencySymbol : "" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs font-semibold tracking-wider text-skin-base" }, { children: subtitle }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/insights/AmountView.tsx":
/*!*************************************************************!*\
  !*** ./src/client/pages/components/insights/AmountView.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmountView: () => (/* binding */ AmountView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/store/currencySettingsStore */ "./src/client/store/currencySettingsStore.ts");
/* harmony import */ var _AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimatedNumber */ "./src/client/pages/components/AnimatedNumber.tsx");



const AmountView = ({ amount, caption, flex }) => {
    const currencySymbol = (0,client_store_currencySettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state.currencySymbol);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `flex flex-col ${flex !== null && flex !== void 0 ? flex : "items-start"}` }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-lg text-skin-base font-semibold" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnimatedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], { target: amount, duration: 500 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: " text-[9px] align-super -ml-1" }, { children: currencySymbol ? currencySymbol : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-xs text-skin-base font-medium tracking-wide" }, { children: caption }))] })));
};


/***/ }),

/***/ "./src/client/store/macroGoalStore.ts":
/*!********************************************!*\
  !*** ./src/client/store/macroGoalStore.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useMacrosStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set) => ({
    macroGoals: [],
    setMacros: (data) => {
        return set((state) => {
            const result = Object.assign(Object.assign({}, state), { macroGoals: data });
            return result;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMacrosStore);


/***/ }),

/***/ "./src/client/assets/images/budgets-insights/no-transactions.svg":
/*!***********************************************************************!*\
  !*** ./src/client/assets/images/budgets-insights/no-transactions.svg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03a8475502ebc0c54d86.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19jb21wb25lbnRzX1Rvb2xUaXBQcm9ncmVzc0Jhcl9Ub29sdGlwUHJvZ3Jlc3NCYXJfY3NzLXNyY19jbGllbnRfcGFnZXNfY29tcG9uLTY2NTM4OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0lBQXdJLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlB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LEVBQ04sOEVBQUssU0FBUyxFQUFDLCtEQUErRCxnQkFDM0UsT0FBTyxJQUNKLEtBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekIrQjtBQVFqQyxNQUFNLGNBQWMsR0FBRywrQ0FBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLFVBQVUsRUFBRSxFQUFFO0lBRWQsU0FBUyxFQUFFLENBQUMsSUFBa0IsRUFBRSxFQUFFO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sTUFBTSxtQ0FDUCxLQUFLLEtBQ1IsVUFBVSxFQUFFLElBQUksR0FDakIsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUosaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvVG9vbFRpcFByb2dyZXNzQmFyL1Rvb2x0aXBQcm9ncmVzc0Jhci5jc3MiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvVG9vbFRpcFByb2dyZXNzQmFyL1Rvb2x0aXBQcm9ncmVzc0Jhci5jc3M/YjBjYiIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9FbXB0eVN0YXRlLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9UYWJCdXR0b24udHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL1RhYkZpbHRlci50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvYnVkZ2V0L0F2YWlsYWJsZUJ1ZGdldENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvQW1vdW50Vmlldy50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3N0b3JlL21hY3JvR29hbFN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb250aC1zdGFydCxcbi5tb250aC1lbmQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udG9vbHRpcC1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiA0cHg7XG4gIC8qIG1hcmdpbjogMCAxMHB4OyAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4udG9vbHRpcC1wcm9ncmVzcy1iYXItcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgMXB4KTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB6LWluZGV4OiAzO1xuICBvcGFjaXR5OiAwLjg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50b29sdGlwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDIwMjAyIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4uZG90dGVkLWRpdmlkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDJweDtcbn1cblxuLmRvdHRlZC1kaXZpZGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbkBrZXlmcmFtZXMgc21vb3RoUm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL1Rvb2xUaXBQcm9ncmVzc0Jhci9Ub29sdGlwUHJvZ3Jlc3NCYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsU0FBUztFQUNULDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vbnRoLXN0YXJ0LFxcbi5tb250aC1lbmQge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnRvb2x0aXAtcHJvZ3Jlc3MtYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGhlaWdodDogNHB4O1xcbiAgLyogbWFyZ2luOiAwIDEwcHg7ICovXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLnRvb2x0aXAtcHJvZ3Jlc3MtYmFyLXByb2dyZXNzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IGNhbGMoMTAwJSArIDFweCk7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB6LWluZGV4OiAzO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRvb2x0aXA6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMwMjAyMDIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5kb3R0ZWQtZGl2aWRlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAycHg7XFxufVxcblxcbi5kb3R0ZWQtZGl2aWRlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbkBrZXlmcmFtZXMgc21vb3RoUm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVG9vbHRpcFByb2dyZXNzQmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVG9vbHRpcFByb2dyZXNzQmFyLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rvb2x0aXBQcm9ncmVzc0Jhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgbm9UcmFuc2FjdGlvbnMgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL2J1ZGdldHMtaW5zaWdodHMvbm8tdHJhbnNhY3Rpb25zLnN2Z1wiO1xudHlwZSBUcmFuc2FjdGlvbkVtcHR5U3RhdGVQcm9wcyA9IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG59O1xuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uRW1wdHlTdGF0ZSA9ICh7XG4gIGxhYmVsLFxufTogVHJhbnNhY3Rpb25FbXB0eVN0YXRlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtMjAgdy0yMCBiZy1za2luLWljb25QcmltYXJ5IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICA8aW1nIHNyYz17bm9UcmFuc2FjdGlvbnN9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImgtMTYgdy0xNlwiPjwvaW1nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIG10LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC10aW55IHRleHQtbGFiZWwgZm9udC1tZWRpdW0gdHJhY2tpbmctc3VidGl0bGVcIj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudHlwZSBUYWJCdXR0b25Qcm9wcyA9IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcbmNvbnN0IFRhYkJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBvbkNsaWNrLFxuICBpc0FjdGl2ZSA9IGZhbHNlLFxuICBjaGlsZHJlbixcbn06IFRhYkJ1dHRvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgaXNBY3RpdmUgPyBcIiBiZy1bIzI2NzZCOF0gcm91bmRlZC1mdWxsXCIgOiBcImJnLXRyYW5zcGFyZW50XCJcbiAgICAgIH0gcHktMyB3LVsxMS4zNzVyZW1dYH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0FjdGl2ZSA/IFwidGV4dC1bI0ZGRkZGRl1cIiA6IFwidGV4dC1bIzgyODI4Ml1cIn0gbXItMmB9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICAgID8gXCJ0ZXh0LVsjRkZGRkZGXSBmb250LWN1c3RvbSB0ZXh0LXNtIGZvbnQtYm9sZCB0cmFja2luZy10YWJfdGV4dFwiXG4gICAgICAgICAgICAgIDogXCJ0ZXh0LVsjODI4MjgyXSBmb250LWN1c3RvbSB0ZXh0LXNtIGZvbnQtYm9sZCB0cmFja2luZy10YWJfdGV4dFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFiQnV0dG9uO1xuIiwiaW1wb3J0IFRhYkJ1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvVGFiQnV0dG9uXCI7XG50eXBlIFRhYkZpbHRlclByb3BzID0ge1xuICB0YWJzPzogQXJyYXk8YW55PjtcbiAgYWN0aXZlVGFiPzogYW55O1xuICBvbkNsaWNrPzogKHRhYjogYW55KSA9PiB2b2lkO1xufTtcbmNvbnN0IFRhYkZpbHRlciA9ICh7IHRhYnMsIGFjdGl2ZVRhYiwgb25DbGljayB9OiBUYWJGaWx0ZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgYmctWyNGMkYyRjJdIHJvdW5kZWQtZnVsbFwiPlxuICAgICAge3RhYnM/Lm1hcCgoZWxlbWVudDogYW55LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZWxlbWVudC5pZCA9PSBhY3RpdmVUYWI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRhYkJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9e2VsZW1lbnQubmFtZX1cbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXtlbGVtZW50Lmljb259XG4gICAgICAgICAgICBpc0FjdGl2ZT17aXNBY3RpdmV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFiRmlsdGVyO1xuIiwiaW1wb3J0IEFuaW1hdGVkTnVtYmVyIGZyb20gXCIuLi9BbmltYXRlZE51bWJlclwiO1xudHlwZSBBdmFpbGFibGVCdWRnZXRDb250YWluZXJQcm9wcyA9IHtcbiAgYW1vdW50PzogbnVtYmVyO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgY3VycmVuY3lTeW1ib2w/OiBzdHJpbmc7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59O1xuZXhwb3J0IGNvbnN0IEF2YWlsYWJsZUJ1ZGdldENvbnRhaW5lciA9ICh7XG4gIGFtb3VudCxcbiAgc3VidGl0bGUsXG4gIGN1cnJlbmN5U3ltYm9sLFxuICBpc0xvYWRpbmcsXG59OiBBdmFpbGFibGVCdWRnZXRDb250YWluZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSB0ZXh0LTR4bCB0ZXh0LXNraW4tYmFzZSBmb250LWJvbGRcIj5cbiAgICAgICAgPEFuaW1hdGVkTnVtYmVyIHRhcmdldD17aXNMb2FkaW5nID8gMCA6IGFtb3VudCA/PyAwfSBkdXJhdGlvbj17NTAwfSAvPlxuICAgICAgICA8c3VwIGNsYXNzTmFtZT1cInRleHQteHMgYWxpZ24tc3VwZXIgLW1sLTFcIj5cbiAgICAgICAgICB7Y3VycmVuY3lTeW1ib2wgPyBjdXJyZW5jeVN5bWJvbCA6IFwiXCJ9XG4gICAgICAgIDwvc3VwPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1za2luLWJhc2VcIj5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHVzZUN1cnJlbmN5U2V0dGluZ3NTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2N1cnJlbmN5U2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IEFuaW1hdGVkTnVtYmVyIGZyb20gXCIuLi9BbmltYXRlZE51bWJlclwiO1xudHlwZSBBbW91bnRWaWV3UHJvcHMgPSB7XG4gIGFtb3VudDogbnVtYmVyO1xuICBjYXB0aW9uPzogc3RyaW5nO1xuICBmbGV4Pzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBBbW91bnRWaWV3ID0gKHsgYW1vdW50LCBjYXB0aW9uLCBmbGV4IH06IEFtb3VudFZpZXdQcm9wcykgPT4ge1xuICBjb25zdCBjdXJyZW5jeVN5bWJvbCA9IHVzZUN1cnJlbmN5U2V0dGluZ3NTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY3VycmVuY3lTeW1ib2xcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgJHtmbGV4ID8/IFwiaXRlbXMtc3RhcnRcIn1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSB0ZXh0LWxnIHRleHQtc2tpbi1iYXNlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICA8QW5pbWF0ZWROdW1iZXIgdGFyZ2V0PXthbW91bnR9IGR1cmF0aW9uPXs1MDB9IC8+XG4gICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCIgdGV4dC1bOXB4XSBhbGlnbi1zdXBlciAtbWwtMVwiPlxuICAgICAgICAgICAge2N1cnJlbmN5U3ltYm9sID8gY3VycmVuY3lTeW1ib2wgOiBcIlwifVxuICAgICAgICAgIDwvc3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0ZXh0LXNraW4tYmFzZSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgIHtjYXB0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgTWFjcm8gfSBmcm9tIFwiY2xpZW50L21vZGVscy9NYWNyb1wiO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcblxuaW50ZXJmYWNlIE1hY3JvU3RvcmVTdGF0ZSB7XG4gIG1hY3JvR29hbHM6IEFycmF5PE1hY3JvPjtcbn1cblxuXG5cbmNvbnN0IHVzZU1hY3Jvc1N0b3JlID0gY3JlYXRlKChzZXQpID0+ICh7XG4gIG1hY3JvR29hbHM6IFtdLFxuXG4gIHNldE1hY3JvczogKGRhdGE6IEFycmF5PE1hY3JvPikgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBNYWNyb1N0b3JlU3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogTWFjcm9TdG9yZVN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFjcm9Hb2FsczogZGF0YSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNYWNyb3NTdG9yZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=