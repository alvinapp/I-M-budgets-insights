"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_onboarding_OnboardingSelectAccount_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css ***!
  \******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.plane-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* height: 300px; */
  position: relative;
  overflow: hidden;
}

.plane-background {
  position: absolute;
  left: 0;
  z-index: 1;
  transform: scale(0.5);
}

.bouncing-plane {
  animation: bouncing 1s infinite;
  z-index: 2;
  transform: scale(0.3);
  margin: -18%;
  visibility: hidden;
}

/* @keyframes bouncing {
    0%, 20%, 50%, 80%, 100% {
      transform: translate(0, 0);
      transition-timing-function: ease-in-out; 
    }
  
    40% {
      transform: translate(14px, -14px);
      transition-timing-function: ease-in-out; 
    }
  
    60% {
      transform: translate(7px, -7px);
      transition-timing-function: ease-in-out; 
    }
  } */
`, "",{"version":3,"sources":["webpack://./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,UAAU;EACV,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;;;;;;;;;;;;;;KAeK","sourcesContent":[".plane-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  /* height: 300px; */\n  position: relative;\n  overflow: hidden;\n}\n\n.plane-background {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  transform: scale(0.5);\n}\n\n.bouncing-plane {\n  animation: bouncing 1s infinite;\n  z-index: 2;\n  transform: scale(0.3);\n  margin: -18%;\n  visibility: hidden;\n}\n\n/* @keyframes bouncing {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translate(0, 0);\n      transition-timing-function: ease-in-out; \n    }\n  \n    40% {\n      transform: translate(14px, -14px);\n      transition-timing-function: ease-in-out; \n    }\n  \n    60% {\n      transform: translate(7px, -7px);\n      transition-timing-function: ease-in-out; \n    }\n  } */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css":
/*!**********************************************************************************!*\
  !*** ./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css ***!
  \**********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./BouncingPlane.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./BouncingPlane.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./BouncingPlane.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BouncingPlane_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/client/pages/components/AccountCard.tsx":
/*!*****************************************************!*\
  !*** ./src/client/pages/components/AccountCard.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var client_assets_images_M_pesa_ac_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/assets/images/M-pesa-ac.png */ "./src/client/assets/images/M-pesa-ac.png");
/* harmony import */ var client_assets_images_family_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/assets/images/family-icon.png */ "./src/client/assets/images/family-icon.png");





const AccountCard = ({ accountNumber, accountType, isActive: initialActiveState, isMpesa = false, backgroundColor, }) => {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialActiveState);
    // Toggle function to switch active state
    const toggleActive = () => {
        setIsActive(!isActive);
        if (isMpesa && !isActive) {
            if (window.flutter_inappwebview) {
                window.flutter_inappwebview
                    .callHandler("requestPermission")
                    .then((result) => {
                    console.log("Response from Flutter: ", result);
                })
                    .catch((error) => {
                    console.error("Error calling handler:", error);
                });
            }
        }
    };
    const bgColor = backgroundColor ? `bg-[#5f9f31]` : "bg-[#012bc4]";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ onClick: toggleActive, className: "flex flex-row justify-between items-center p-4 rounded-lg shadow-card w-full cursor-pointer mt-2 mb-2 bg-white" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `w-8 h-8 rounded-full flex items-center justify-center ${bgColor} text-white mx-2 mb-1` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: backgroundColor ? client_assets_images_M_pesa_ac_png__WEBPACK_IMPORTED_MODULE_2__ : client_assets_images_family_icon_png__WEBPACK_IMPORTED_MODULE_3__, alt: "plane" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-base font-primary" }, { children: accountNumber })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-gray-600 text-xs font-primary" }, { children: accountType }))] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `w-8 h-8 rounded-full flex items-center justify-center ${isActive ? "bg-[#2676B8] text-skin-white" : "border border-skin-base"} mb-1` }, { children: isActive ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoCheckmarkSharp, { className: "text-xl" }) : null }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountCard);


/***/ }),

/***/ "./src/client/pages/components/ArrowBack.tsx":
/*!***************************************************!*\
  !*** ./src/client/pages/components/ArrowBack.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


const ArrowBackButton = ({ onClick, background }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: `rounded-full p-3 flex items-center justify-center focus:outline-none focus:rounded-full ${background}`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiArrowLeft, { color: "#101010", size: "1.4375rem" }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowBackButton);


/***/ }),

/***/ "./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.tsx":
/*!**********************************************************************************!*\
  !*** ./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BouncingPlane_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BouncingPlane.css */ "./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.css");
/* harmony import */ var client_assets_images_family_thumb_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/assets/images/family-thumb.svg */ "./src/client/assets/images/family-thumb.svg");




const BouncingPlane = () => {
    const planeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const plane = planeRef.current;
        const animate = () => {
            if (plane) {
                plane.style.animation = "bouncing 1s infinite";
            }
        };
        animate();
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-[15rem] w-[15rem] " }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_family_thumb_svg__WEBPACK_IMPORTED_MODULE_3__, alt: "plane background", className: "h-auto w-full" }) })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BouncingPlane);


/***/ }),

/***/ "./src/client/pages/components/CustomLoader/CustomLoader.tsx":
/*!*******************************************************************!*\
  !*** ./src/client/pages/components/CustomLoader/CustomLoader.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _BouncingPlane_BouncingPlane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BouncingPlane/BouncingPlane */ "./src/client/pages/components/CustomLoader/BouncingPlane/BouncingPlane.tsx");
/* harmony import */ var client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/json_lottie/clouds.json */ "./src/client/assets/json_lottie/clouds.json");
/* harmony import */ var _LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearProgress */ "./src/client/pages/components/CustomLoader/LinearProgress.tsx");




const LoadingScreen = ({ duration, color, messages, }) => {
    const planeMarginTop = "150px";
    const ballTriangleStyle = {
        position: "fixed",
        bottom: "5%",
        left: "50%",
        transform: "translateX(-50%)",
    };
    const cloudImage = {
        loop: true,
        autoplay: true,
        animationData: client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_1__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: { marginTop: planeMarginTop } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BouncingPlane_BouncingPlane__WEBPACK_IMPORTED_MODULE_2__["default"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom text-skin-base font-bold text-xl mt-7" }, { children: "Hurray! Account linked." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LinearProgress__WEBPACK_IMPORTED_MODULE_3__["default"], { color: color, duration: duration, messages: messages })] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);


/***/ }),

/***/ "./src/client/pages/components/CustomLoader/LinearProgress.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/pages/components/CustomLoader/LinearProgress.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/module.js");




const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div `
  position: fixed;
  width: 100%;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  justify-content: center;
`;
const textFadeInOut = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes) `
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
`;
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div `
  width: 300px;
  height: 3px;
  background-color: #d3d3d3;
  border-radius: 10px;
  margin-top: 1rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    animation: progressAnimation ${({ duration }) => duration}s linear forwards,
      ${({ duration }) => duration / 1.2}s infinite;
  }

  @keyframes progressAnimation {
    to {
      width: 100%;
    }
  }
`;
const LinearProgress = ({ duration, color, messages, }) => {
    const [currentMessageIndex, setCurrentMessageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => {
                if (prevIndex >= messages.length - 1) {
                    clearInterval(interval);
                    return -1;
                }
                return prevIndex + 1;
            });
        }, (duration * 1000) / messages.length);
    }, [duration, messages.length]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Container, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentWrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProgressBar, { duration: duration, color: color }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "w-full flex justify-center items-center flex-row gap-2", style: { marginTop: "1rem" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom", style: {
                                color: "#101010",
                                textAlign: "center",
                                // fontWeight: 500,
                                // animation: `fadeInOut ${(duration * 1000) / messages.length / 1.2}ms infinite`,
                            } }, { children: currentMessageIndex === -1
                                ? "Processing your request"
                                : messages[currentMessageIndex] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.BallTriangle, { height: 25, width: 25, color: color, visible: true, radius: 1.5 })] }))] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinearProgress);


/***/ }),

/***/ "./src/client/pages/onboarding/OnboardingSelectAccount.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/pages/onboarding/OnboardingSelectAccount.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_ArrowBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArrowBack */ "./src/client/pages/components/ArrowBack.tsx");
/* harmony import */ var _components_AccountCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AccountCard */ "./src/client/pages/components/AccountCard.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CustomLoader_CustomLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CustomLoader/CustomLoader */ "./src/client/pages/components/CustomLoader/CustomLoader.tsx");









const OnboardingSelectAccount = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const startLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/onboard-add-income");
        }, 3000);
    };
    const messages = ["Connecting your account", "Syncing your transactions"];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-screen w-screen relative no-scrollbar" }, { children: isLoading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CustomLoader_CustomLoader__WEBPACK_IMPORTED_MODULE_3__["default"], { messages: messages, duration: 3, color: "#2676B8" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-between pt-6 pb-2 pr-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ArrowBack__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: () => navigate(-1) }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-3 items-left" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full shadow h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiCloud, { color: "#101010" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom font-bold text-2xl mt-1.5 mx-3.5 text-skin-base" }, { children: "Let's add your first account" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-sm font-primary text-skin-base tracking-wide mt-6 font-medium mx-3.5" }, { children: ["Sync your M-Pesa transactions to your I&M On The Go app or track I&M card spending only to start", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-18 mx-4.5 items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AccountCard__WEBPACK_IMPORTED_MODULE_7__["default"], { accountNumber: "123456789", accountType: "Online Savers-Lcy", isActive: true }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AccountCard__WEBPACK_IMPORTED_MODULE_7__["default"], { accountNumber: "123456789", accountType: "Paygo-Lcy", isActive: false }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "h-1 w-[85%] bg-[#f5f5f5] mt-4 mb-4" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AccountCard__WEBPACK_IMPORTED_MODULE_7__["default"], { accountNumber: "Sync your M-Pesa transactions", accountType: "", backgroundColor: "#5f9f31", isActive: false, isMpesa: true })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-5 left-0 right-0 mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_8__["default"], { title: "Continue", isDisabled: false, click: () => {
                            startLoading();
                        } }) }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingSelectAccount);


/***/ }),

/***/ "./src/client/assets/images/family-icon.png":
/*!**************************************************!*\
  !*** ./src/client/assets/images/family-icon.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5928738f048b6b7e32f4.png";

/***/ }),

/***/ "./src/client/assets/images/family-thumb.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/images/family-thumb.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e36a191a1cbd74459a76.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19vbmJvYXJkaW5nX09uYm9hcmRpbmdTZWxlY3RBY2NvdW50X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLE9BQU8sMklBQTJJLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLG1CQUFtQiwyQ0FBMkMsa0JBQWtCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLHNCQUFzQix5QkFBeUIscUJBQXFCLEdBQUcsdUJBQXVCLHVCQUF1QixZQUFZLGVBQWUsMEJBQTBCLEdBQUcscUJBQXFCLG9DQUFvQyxlQUFlLDBCQUEwQixpQkFBaUIsdUJBQXVCLEdBQUcsNEJBQTRCLCtCQUErQixtQ0FBbUMsaURBQWlELE9BQU8sZUFBZSwwQ0FBMEMsaURBQWlELE9BQU8sZUFBZSx3Q0FBd0MsaURBQWlELE9BQU8sTUFBTSx1QkFBdUI7QUFDeHRDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0N2QyxNQUE4RztBQUM5RyxNQUFvRztBQUNwRyxNQUEyRztBQUMzRyxNQUE4SDtBQUM5SCxNQUF1SDtBQUN2SCxNQUF1SDtBQUN2SCxNQUFvTDtBQUNwTDtBQUNBOztBQUVBOztBQUVB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QyxFQUFFLEVBQ2QsZUFBZSxFQUFDLFNBQVMsRUFDekIsUUFBUSxFQUFFLEtBQUssRUFDZixPQUFPLEVBQUUsSUFBSSxHQUNiLEtBQ0UsRUFDTiw4RUFBSyxTQUFTLEVBQUMsc0NBQXNDLGdCQUNuRCx1REFBQyw4REFBVSxJQUNULEtBQUssRUFBQyxVQUFVLEVBQ2hCLFVBQVUsRUFBRSxLQUFLLEVBQ2pCLEtBQUssRUFBRSxHQUFHLEVBQUU7NEJBQ1YsWUFBWSxFQUFFLENBQUM7d0JBQ2pCLENBQUMsR0FDRCxJQUNFLElBQ0wsQ0FDSixJQUNHLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGlFQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQ3VzdG9tTG9hZGVyL0JvdW5jaW5nUGxhbmUvQm91bmNpbmdQbGFuZS5jc3MiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQ3VzdG9tTG9hZGVyL0JvdW5jaW5nUGxhbmUvQm91bmNpbmdQbGFuZS5jc3M/ZDgzYSIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9BY2NvdW50Q2FyZC50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQXJyb3dCYWNrLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9DdXN0b21Mb2FkZXIvQm91bmNpbmdQbGFuZS9Cb3VuY2luZ1BsYW5lLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9DdXN0b21Mb2FkZXIvQ3VzdG9tTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9DdXN0b21Mb2FkZXIvTGluZWFyUHJvZ3Jlc3MudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9vbmJvYXJkaW5nL09uYm9hcmRpbmdTZWxlY3RBY2NvdW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnBsYW5lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wbGFuZS1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG59XG5cbi5ib3VuY2luZy1wbGFuZSB7XG4gIGFuaW1hdGlvbjogYm91bmNpbmcgMXMgaW5maW5pdGU7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgbWFyZ2luOiAtMTglO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8qIEBrZXlmcmFtZXMgYm91bmNpbmcge1xuICAgIDAlLCAyMCUsIDUwJSwgODAlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyBcbiAgICB9XG4gIFxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNHB4LCAtMTRweCk7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxuICAgIH1cbiAgXG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgLTdweCk7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxuICAgIH1cbiAgfSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQ3VzdG9tTG9hZGVyL0JvdW5jaW5nUGxhbmUvQm91bmNpbmdQbGFuZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7S0FlS1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGxhbmUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogaGVpZ2h0OiAzMDBweDsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wbGFuZS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbn1cXG5cXG4uYm91bmNpbmctcGxhbmUge1xcbiAgYW5pbWF0aW9uOiBib3VuY2luZyAxcyBpbmZpbml0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XFxuICBtYXJnaW46IC0xOCU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi8qIEBrZXlmcmFtZXMgYm91bmNpbmcge1xcbiAgICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyBcXG4gICAgfVxcbiAgXFxuICAgIDQwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwgLTE0cHgpO1xcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgXFxuICAgIH1cXG4gIFxcbiAgICA2MCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgLTdweCk7XFxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyBcXG4gICAgfVxcbiAgfSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0JvdW5jaW5nUGxhbmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Cb3VuY2luZ1BsYW5lLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0JvdW5jaW5nUGxhbmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZFBob25lSXBob25lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBJb0NoZWNrbWFya1NoYXJwIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IGNhcmRJbWFnZSBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvSSZNLWFjcy5wbmdcIjtcbmltcG9ydCBtcGVzYUltYWdlIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9NLXBlc2EtYWMucG5nXCI7XG5pbXBvcnQgZmFtaWx5QmFuayBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvZmFtaWx5LWljb24ucG5nXCI7XG5pbnRlcmZhY2UgQWNjb3VudENhcmRQcm9wcyB7XG4gIGFjY291bnROdW1iZXI6IHN0cmluZztcbiAgYWNjb3VudFR5cGU6IHN0cmluZztcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG4gIGlzTXBlc2E/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEFjY291bnRDYXJkOiBSZWFjdC5GQzxBY2NvdW50Q2FyZFByb3BzPiA9ICh7XG4gIGFjY291bnROdW1iZXIsXG4gIGFjY291bnRUeXBlLFxuICBpc0FjdGl2ZTogaW5pdGlhbEFjdGl2ZVN0YXRlLFxuICBpc01wZXNhID0gZmFsc2UsXG4gIGJhY2tncm91bmRDb2xvcixcbn0pID0+IHtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShpbml0aWFsQWN0aXZlU3RhdGUpO1xuXG4gIC8vIFRvZ2dsZSBmdW5jdGlvbiB0byBzd2l0Y2ggYWN0aXZlIHN0YXRlXG4gIGNvbnN0IHRvZ2dsZUFjdGl2ZSA9ICgpID0+IHtcbiAgICBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpO1xuICAgIGlmIChpc01wZXNhICYmICFpc0FjdGl2ZSkge1xuICAgICAgaWYgKHdpbmRvdy5mbHV0dGVyX2luYXBwd2Vidmlldykge1xuICAgICAgICB3aW5kb3cuZmx1dHRlcl9pbmFwcHdlYnZpZXdcbiAgICAgICAgICAuY2FsbEhhbmRsZXIoXCJyZXF1ZXN0UGVybWlzc2lvblwiKVxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgZnJvbSBGbHV0dGVyOiBcIiwgcmVzdWx0KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYWxsaW5nIGhhbmRsZXI6XCIsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmdDb2xvciA9IGJhY2tncm91bmRDb2xvciA/IGBiZy1bIzVmOWYzMV1gIDogXCJiZy1bIzAxMmJjNF1cIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjdGl2ZX1cbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTQgcm91bmRlZC1sZyBzaGFkb3ctY2FyZCB3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgbXQtMiBtYi0yIGJnLXdoaXRlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3LTggaC04IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke2JnQ29sb3J9IHRleHQtd2hpdGUgbXgtMiBtYi0xYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPXtiYWNrZ3JvdW5kQ29sb3IgPyBtcGVzYUltYWdlIDogZmFtaWx5QmFua30gYWx0PVwicGxhbmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXByaW1hcnlcIj57YWNjb3VudE51bWJlcn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC14cyBmb250LXByaW1hcnlcIj5cbiAgICAgICAgICAgIHthY2NvdW50VHlwZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdy04IGgtOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICBpc0FjdGl2ZSA/IFwiYmctWyMyNjc2QjhdIHRleHQtc2tpbi13aGl0ZVwiIDogXCJib3JkZXIgYm9yZGVyLXNraW4tYmFzZVwiXG4gICAgICAgIH0gbWItMWB9XG4gICAgICA+XG4gICAgICAgIHtpc0FjdGl2ZSA/IDxJb0NoZWNrbWFya1NoYXJwIGNsYXNzTmFtZT1cInRleHQteGxcIiAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRDYXJkO1xuIiwiaW1wb3J0IHsgRmlBcnJvd0xlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbnR5cGUgQXJyb3dCYWNrQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xufTtcbmNvbnN0IEFycm93QmFja0J1dHRvbiA9ICh7IG9uQ2xpY2ssIGJhY2tncm91bmQgfTogQXJyb3dCYWNrQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgcC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyb3VuZGVkLWZ1bGwgJHtiYWNrZ3JvdW5kfWB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxGaUFycm93TGVmdCBjb2xvcj1cIiMxMDEwMTBcIiBzaXplPVwiMS40Mzc1cmVtXCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcnJvd0JhY2tCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQm91bmNpbmdQbGFuZS5jc3NcIjtcbmltcG9ydCBwbGFuZUJhY2tncm91bmQgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL2ZhbWlseS10aHVtYi5zdmdcIjtcbmltcG9ydCBwbGFuZVBORyBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvc3VjY2Vzc0hhbmQuc3ZnXCI7XG5cbmNvbnN0IEJvdW5jaW5nUGxhbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYW5lUmVmID0gdXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGxhbmUgPSBwbGFuZVJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICBpZiAocGxhbmUpIHtcbiAgICAgICAgcGxhbmUuc3R5bGUuYW5pbWF0aW9uID0gXCJib3VuY2luZyAxcyBpbmZpbml0ZVwiO1xuICAgICAgfVxuICAgIH07XG4gICAgYW5pbWF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxNXJlbV0gdy1bMTVyZW1dIFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwbGFuZUJhY2tncm91bmR9XG4gICAgICAgICAgYWx0PVwicGxhbmUgYmFja2dyb3VuZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC1hdXRvIHctZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8aW1nXG4gICAgICAgIHJlZj17cGxhbmVSZWZ9XG4gICAgICAgIHNyYz17cGxhbmVQTkd9XG4gICAgICAgIGFsdD1cInBsYW5lXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm91bmNpbmctcGxhbmVcIlxuICAgICAgLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb3VuY2luZ1BsYW5lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdW5jaW5nUGxhbmUgZnJvbSBcIi4vQm91bmNpbmdQbGFuZS9Cb3VuY2luZ1BsYW5lXCI7XG5pbXBvcnQgQ2xvdWRzIGZyb20gXCJjbGllbnQvYXNzZXRzL2pzb25fbG90dGllL2Nsb3Vkcy5qc29uXCI7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIi4vTGluZWFyUHJvZ3Jlc3NcIjtcblxuaW50ZXJmYWNlIExvYWRpbmdTY3JlZW5Qcm9wcyB7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIG1lc3NhZ2VzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgTG9hZGluZ1NjcmVlbjogUmVhY3QuRkM8TG9hZGluZ1NjcmVlblByb3BzPiA9ICh7XG4gIGR1cmF0aW9uLFxuICBjb2xvcixcbiAgbWVzc2FnZXMsXG59KSA9PiB7XG4gIGNvbnN0IHBsYW5lTWFyZ2luVG9wID0gXCIxNTBweFwiO1xuXG4gIGNvbnN0IGJhbGxUcmlhbmdsZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgYm90dG9tOiBcIjUlXCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICB9O1xuXG4gIGNvbnN0IGNsb3VkSW1hZ2UgPSB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhbmltYXRpb25EYXRhOiBDbG91ZHMsXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge1xuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZCBzbGljZVwiLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogcGxhbmVNYXJnaW5Ub3AgfX0+XG4gICAgICAgIDxCb3VuY2luZ1BsYW5lIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jdXN0b20gdGV4dC1za2luLWJhc2UgZm9udC1ib2xkIHRleHQteGwgbXQtN1wiPlxuICAgICAgICBIdXJyYXkhIEFjY291bnQgbGlua2VkLlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgY29sb3I9e2NvbG9yfSBkdXJhdGlvbj17ZHVyYXRpb259IG1lc3NhZ2VzPXttZXNzYWdlc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMsIGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQmFsbFRyaWFuZ2xlIH0gZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgdGV4dEZhZGVJbk91dCA9IGtleWZyYW1lc2BcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDEwJSB7IG9wYWNpdHk6IDE7IH1cbiAgOTAlIHsgb3BhY2l0eTogMTsgfVxuICAxMDAlIHsgb3BhY2l0eTogMDsgfVxuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSBzdHlsZWQuZGl2PHsgZHVyYXRpb246IG51bWJlcjsgY29sb3I6IHN0cmluZyB9PmBcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvcn07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBhbmltYXRpb246IHByb2dyZXNzQW5pbWF0aW9uICR7KHsgZHVyYXRpb24gfSkgPT4gZHVyYXRpb259cyBsaW5lYXIgZm9yd2FyZHMsXG4gICAgICAkeyh7IGR1cmF0aW9uIH0pID0+IGR1cmF0aW9uIC8gMS4yfXMgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHByb2dyZXNzQW5pbWF0aW9uIHtcbiAgICB0byB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IExpbmVhclByb2dyZXNzID0gKHtcbiAgZHVyYXRpb24sXG4gIGNvbG9yLFxuICBtZXNzYWdlcyxcbn06IHtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbWVzc2FnZXM6IHN0cmluZ1tdO1xufSkgPT4ge1xuICBjb25zdCBbY3VycmVudE1lc3NhZ2VJbmRleCwgc2V0Q3VycmVudE1lc3NhZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudE1lc3NhZ2VJbmRleCgocHJldkluZGV4KSA9PiB7XG4gICAgICAgIGlmIChwcmV2SW5kZXggPj0gbWVzc2FnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldkluZGV4ICsgMTtcbiAgICAgIH0pO1xuICAgIH0sIChkdXJhdGlvbiAqIDEwMDApIC8gbWVzc2FnZXMubGVuZ3RoKTtcbiAgfSwgW2R1cmF0aW9uLCBtZXNzYWdlcy5sZW5ndGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgIDxQcm9ncmVzc0JhciBkdXJhdGlvbj17ZHVyYXRpb259IGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXJvdyBnYXAtMlwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1jdXN0b21cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzEwMTAxMFwiLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uOiBgZmFkZUluT3V0ICR7KGR1cmF0aW9uICogMTAwMCkgLyBtZXNzYWdlcy5sZW5ndGggLyAxLjJ9bXMgaW5maW5pdGVgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3VycmVudE1lc3NhZ2VJbmRleCA9PT0gLTFcbiAgICAgICAgICAgICAgPyBcIlByb2Nlc3NpbmcgeW91ciByZXF1ZXN0XCJcbiAgICAgICAgICAgICAgOiBtZXNzYWdlc1tjdXJyZW50TWVzc2FnZUluZGV4XX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QmFsbFRyaWFuZ2xlXG4gICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIHJhZGl1cz17MS41fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVhclByb2dyZXNzO1xuIiwiaW1wb3J0IHsgRmlDbG91ZCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkJ1dHRvblwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBBcnJvd0JhY2tCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJyb3dCYWNrXCI7XG5pbXBvcnQgQWNjb3VudENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNjb3VudENhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DdXN0b21Mb2FkZXIvQ3VzdG9tTG9hZGVyXCI7XG5cbmNvbnN0IE9uYm9hcmRpbmdTZWxlY3RBY2NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBuYXZpZ2F0ZShcIi9vbmJvYXJkLWFkZC1pbmNvbWVcIik7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgY29uc3QgbWVzc2FnZXMgPSBbXCJDb25uZWN0aW5nIHlvdXIgYWNjb3VudFwiLCBcIlN5bmNpbmcgeW91ciB0cmFuc2FjdGlvbnNcIl07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIHJlbGF0aXZlIG5vLXNjcm9sbGJhclwiPlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdTY3JlZW4gbWVzc2FnZXM9e21lc3NhZ2VzfSBkdXJhdGlvbj17M30gY29sb3I9XCIjMjY3NkI4XCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE5hdkJhclxuICAgICAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwdC02IHBiLTIgcHItNlwiPlxuICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tCdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoLTEpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGgtcHggYmctc2tpbi1hY2NlbnQzXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTMgaXRlbXMtbGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgc2hhZG93IGgtMTEgdy0xMSBiZy1za2luLWljb25QcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LTMuNVwiPlxuICAgICAgICAgICAgICA8RmlDbG91ZCBjb2xvcj1cIiMxMDEwMTBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIGZvbnQtYm9sZCB0ZXh0LTJ4bCBtdC0xLjUgbXgtMy41IHRleHQtc2tpbi1iYXNlXCI+XG4gICAgICAgICAgICAgIExldCdzIGFkZCB5b3VyIGZpcnN0IGFjY291bnRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hZGRJbmNvbWVCZyBiZy1jb3ZlciBiZy1uby1yZXBlYXQgaC0zNiBiZy1yaWdodFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1wcmltYXJ5IHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXdpZGUgbXQtNiBmb250LW1lZGl1bSBteC0zLjVcIj5cbiAgICAgICAgICAgICAgICBTeW5jIHlvdXIgTS1QZXNhIHRyYW5zYWN0aW9ucyB0byB5b3VyIEkmTSBPbiBUaGUgR28gYXBwIG9yIHRyYWNrXG4gICAgICAgICAgICAgICAgSSZNIGNhcmQgc3BlbmRpbmcgb25seSB0byBzdGFydFxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xOCBteC00LjUgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8QWNjb3VudENhcmRcbiAgICAgICAgICAgICAgYWNjb3VudE51bWJlcj1cIjEyMzQ1Njc4OVwiXG4gICAgICAgICAgICAgIGFjY291bnRUeXBlPVwiT25saW5lIFNhdmVycy1MY3lcIlxuICAgICAgICAgICAgICBpc0FjdGl2ZT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QWNjb3VudENhcmRcbiAgICAgICAgICAgICAgYWNjb3VudE51bWJlcj1cIjEyMzQ1Njc4OVwiXG4gICAgICAgICAgICAgIGFjY291bnRUeXBlPVwiUGF5Z28tTGN5XCJcbiAgICAgICAgICAgICAgaXNBY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xIHctWzg1JV0gYmctWyNmNWY1ZjVdIG10LTQgbWItNFwiPjwvZGl2PlxuICAgICAgICAgICAgPEFjY291bnRDYXJkXG4gICAgICAgICAgICAgIGFjY291bnROdW1iZXI9XCJTeW5jIHlvdXIgTS1QZXNhIHRyYW5zYWN0aW9uc1wiXG4gICAgICAgICAgICAgIGFjY291bnRUeXBlPVwiXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzVmOWYzMVwiXG4gICAgICAgICAgICAgIGlzQWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNNcGVzYT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNSBsZWZ0LTAgcmlnaHQtMCBteC0zLjVcIj5cbiAgICAgICAgICAgIDxNYWluQnV0dG9uXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29udGludWVcIlxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzdGFydExvYWRpbmcoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uYm9hcmRpbmdTZWxlY3RBY2NvdW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9