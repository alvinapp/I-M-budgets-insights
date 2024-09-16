"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_onboarding_OnboardingSuccess_tsx"],{

/***/ "./src/client/pages/components/onboarding/BudgetSplitChart.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/pages/components/onboarding/BudgetSplitChart.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _assets_images_white_macro_budget_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/white_macro_budget.svg */ "./src/client/assets/images/white_macro_budget.svg");


const BudgetSplitChart = ({ dimensions, doughnutThickness, values, }) => {
    const { wants, essentials, savings } = values;
    const total = wants + essentials + savings;
    const radius = dimensions / 2;
    const strokeWidth = doughnutThickness;
    const normalizedRadius = radius - strokeWidth * 2;
    const items = [
        {
            percentage: (essentials / total) * 100,
            color: "#33cbc0",
            label: "Essentials",
        },
        { percentage: (wants / total) * 100, color: "#6786c3", label: "Wants" },
        {
            percentage: (savings / total) * 100,
            color: "#036AB3",
            label: "Debt repayment",
        },
    ];
    let cumulativePercentage = 0;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ height: dimensions + 80, width: dimensions + 100 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", Object.assign({ transform: `translate(${radius + 50}, ${radius + 50})` }, { children: [items.map((item, index) => {
                    const middleX = normalizedRadius *
                        Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);
                    const middleY = normalizedRadius *
                        Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);
                    const controlPointX = (normalizedRadius + 15) *
                        Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage / 2.5)) /
                            100);
                    const controlPointY = (normalizedRadius + 15) *
                        Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage / 2.5)) /
                            100);
                    const labelX = (normalizedRadius + 50) *
                        Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);
                    const labelY = (normalizedRadius + 50) *
                        Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);
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
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, fill: "none", stroke: item.color, strokeWidth: strokeWidth, strokeLinecap: "round" }, index), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", Object.assign({ x: labelX - 30, y: labelY - 20, width: 80, height: 60 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: { textAlign: "center" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-primary text-sm tracking-wide text-skin-base font-medium", style: {
                                                color: "white",
                                            } }, { children: item.label })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-primary text-sm tracking-wide text-skin-base font-medium", style: {
                                                color: "white",
                                            } }, { children: ["(", item.percentage.toFixed(0), "%)"] }))] })) }))] }));
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", Object.assign({ x: -radius, y: -radius, width: radius * 2, height: radius * 2, xmlns: "http://www.w3.org/1999/xhtml" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            borderRadius: "50%",
                            overflow: "hidden",
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_white_macro_budget_svg__WEBPACK_IMPORTED_MODULE_1__, alt: "icon", className: "w-6 h-6" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: { color: "white" }, className: "font-primary text-sm tracking-wide mt-2 text-white font-medium" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Overall budget split" }) }))] })) }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BudgetSplitChart);


/***/ }),

/***/ "./src/client/pages/onboarding/OnboardingSuccess.tsx":
/*!***********************************************************!*\
  !*** ./src/client/pages/onboarding/OnboardingSuccess.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_budgets_insights_cloud1_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/assets/images/budgets-insights/cloud1.svg */ "./src/client/assets/images/budgets-insights/cloud1.svg");
/* harmony import */ var client_assets_images_budgets_insights_cloud2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/assets/images/budgets-insights/cloud2.svg */ "./src/client/assets/images/budgets-insights/cloud2.svg");
/* harmony import */ var client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/assets/json_lottie/clouds.json */ "./src/client/assets/json_lottie/clouds.json");
/* harmony import */ var client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/budgetSettingsStore */ "./src/client/store/budgetSettingsStore.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_onboarding_BudgetSplitChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/onboarding/BudgetSplitChart */ "./src/client/pages/components/onboarding/BudgetSplitChart.tsx");











const BookingSuccess = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const configurations = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)((state) => state.configuration);
    const budgetSettingsStore = (0,client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_5__.useBudgetSettingsStore)();
    const user = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state.user);
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const timeOutCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        setTimer((currTimer) => currTimer - 1);
    }, []);
    const cloudImage = {
        loop: true,
        autoplay: true,
        animationData: client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_7__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    // turn is loading off after 2 seconds
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        timer > 0 && setTimeout(timeOutCallback, 5000);
        if (timer === 0) {
            setLoading(false);
            navigate("/budget-settings");
        }
    }, [timer, timeOutCallback]);
    const chartDimensions = 230;
    const doughnutThickness = 18;
    const budgetValues = Object.assign({}, budgetSettingsStore.incomeSplit);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen bg-successBg bg-cover w-screen relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute top-20 right-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_budgets_insights_cloud2_svg__WEBPACK_IMPORTED_MODULE_8__, alt: "" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute top-24 left-10" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_budgets_insights_cloud1_svg__WEBPACK_IMPORTED_MODULE_9__, alt: "" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mx-9 absolute top-28 left-0 right-0" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-10 flex flex-row justify-center align-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_onboarding_BudgetSplitChart__WEBPACK_IMPORTED_MODULE_10__["default"], { dimensions: chartDimensions, doughnutThickness: doughnutThickness, values: budgetValues }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-14 flex flex-row justify-center mx-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-skin-white text-xl text-center font-semibold" }, { children: ["Great job, ", user.first_name, "!"] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-xs font-custom tracking-longtext text-skin-white text-center mt-4" }, { children: "This looks like a very balanced budget and a great roadmap for you to hit your financial goals. We'll notify you whenever you may be overspending in a category so you can stay on track." }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-12 left-0 right-0 flex flex-col justify-end items-center mx-3.5" }, { children: loading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.BallTriangle, { height: 35, width: 35, radius: 1.6, color: "#ffffff", ariaLabel: "ball-triangle-loading", wrapperStyle: {}, wrapperClass: "", visible: true })) : null }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingSuccess);


/***/ }),

/***/ "./src/client/store/budgetSettingsStore.ts":
/*!*************************************************!*\
  !*** ./src/client/store/budgetSettingsStore.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBudgetSettingsStore: () => (/* binding */ useBudgetSettingsStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useBudgetSettingsStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set) => ({
    currency: " KES",
    monthlyIncome: 0,
    incomeSplit: {
        essentials: 50,
        wants: 30,
        savings: 20,
    },
    setMonthlyIncome: (amount) => {
        return set((state) => {
            const result = Object.assign(Object.assign({}, state), { monthlyIncome: amount });
            return result;
        });
    },
    getMonthlyIncome: () => {
        return set((state) => {
            const result = Object.assign(Object.assign({}, state), { monthlyIncome: state.monthlyIncome });
            return result;
        });
    },
    setIncomeSplit: (split) => {
        return set((state) => {
            const result = Object.assign(Object.assign({}, state), { incomeSplit: split });
            return result;
        });
    },
    getIncomeSplit: () => {
        return set((state) => {
            const result = Object.assign(Object.assign({}, state), { incomeSplit: state.incomeSplit });
            return result;
        });
    },
}));



/***/ }),

/***/ "./src/client/assets/images/budgets-insights/cloud1.svg":
/*!**************************************************************!*\
  !*** ./src/client/assets/images/budgets-insights/cloud1.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb1b57ce936b9dc9331e.svg";

/***/ }),

/***/ "./src/client/assets/images/budgets-insights/cloud2.svg":
/*!**************************************************************!*\
  !*** ./src/client/assets/images/budgets-insights/cloud2.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5614e3b595142eae6c3e.svg";

/***/ }),

/***/ "./src/client/assets/images/white_macro_budget.svg":
/*!*********************************************************!*\
  !*** ./src/client/assets/images/white_macro_budget.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e1902a9ee3b4f86c544.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19vbmJvYXJkaW5nX09uYm9hcmRpbmdTdWNjZXNzX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dFO0FBWXhFLE1BQU0sZ0JBQWdCLEdBQW9DLENBQUMsRUFDekQsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixNQUFNLEdBQ1AsRUFBRSxFQUFFO0lBQ0gsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBQzlDLE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBRTNDLE1BQU0sTUFBTSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDOUIsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUM7SUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUVsRCxNQUFNLEtBQUssR0FBRztRQUNaO1lBQ0UsVUFBVSxFQUFFLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUc7WUFDdEMsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFlBQVk7U0FDcEI7UUFDRCxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ3ZFO1lBQ0UsVUFBVSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUc7WUFDbkMsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLGdCQUFnQjtTQUN4QjtLQUNGLENBQUM7SUFFRixJQUFJLG9CQUFvQixHQUFHLENBQUMsQ0FBQztJQUU3QixPQUFPLENBQ0wsOEVBQUssTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsR0FBRyxHQUFHLGdCQUNuRCw2RUFBRyxTQUFTLEVBQUUsYUFB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QUFnQixFQUFFLEdBQUcsRUFBRTtRQUNyQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtZQUNuQyxNQUFNLE1BQU0sbUNBQ1AsS0FBSyxLQUNSLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxHQUNuQyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsY0FBYyxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFO1FBQ3JDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQ25DLE1BQU0sTUFBTSxtQ0FDUCxLQUFLLEtBQ1IsV0FBVyxFQUFFLEtBQUssR0FDbkIsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkMsTUFBTSxNQUFNLG1DQUNQLEtBQUssS0FDUixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FDL0IsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyxDQUFDO0FBT0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9vbmJvYXJkaW5nL0J1ZGdldFNwbGl0Q2hhcnQudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9vbmJvYXJkaW5nL09uYm9hcmRpbmdTdWNjZXNzLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvc3RvcmUvYnVkZ2V0U2V0dGluZ3NTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbWFjcm9CdWRnZXQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2hpdGVfbWFjcm9fYnVkZ2V0LnN2Z1wiO1xuXG5pbnRlcmZhY2UgQnVkZ2V0U3BsaXRDaGFydFByb3BzIHtcbiAgZGltZW5zaW9uczogbnVtYmVyO1xuICBkb3VnaG51dFRoaWNrbmVzczogbnVtYmVyO1xuICB2YWx1ZXM6IHtcbiAgICB3YW50czogbnVtYmVyO1xuICAgIGVzc2VudGlhbHM6IG51bWJlcjtcbiAgICBzYXZpbmdzOiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IEJ1ZGdldFNwbGl0Q2hhcnQ6IFJlYWN0LkZDPEJ1ZGdldFNwbGl0Q2hhcnRQcm9wcz4gPSAoe1xuICBkaW1lbnNpb25zLFxuICBkb3VnaG51dFRoaWNrbmVzcyxcbiAgdmFsdWVzLFxufSkgPT4ge1xuICBjb25zdCB7IHdhbnRzLCBlc3NlbnRpYWxzLCBzYXZpbmdzIH0gPSB2YWx1ZXM7XG4gIGNvbnN0IHRvdGFsID0gd2FudHMgKyBlc3NlbnRpYWxzICsgc2F2aW5ncztcblxuICBjb25zdCByYWRpdXMgPSBkaW1lbnNpb25zIC8gMjtcbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSBkb3VnaG51dFRoaWNrbmVzcztcbiAgY29uc3Qgbm9ybWFsaXplZFJhZGl1cyA9IHJhZGl1cyAtIHN0cm9rZVdpZHRoICogMjtcblxuICBjb25zdCBpdGVtcyA9IFtcbiAgICB7XG4gICAgICBwZXJjZW50YWdlOiAoZXNzZW50aWFscyAvIHRvdGFsKSAqIDEwMCxcbiAgICAgIGNvbG9yOiBcIiMzM2NiYzBcIixcbiAgICAgIGxhYmVsOiBcIkVzc2VudGlhbHNcIixcbiAgICB9LFxuICAgIHsgcGVyY2VudGFnZTogKHdhbnRzIC8gdG90YWwpICogMTAwLCBjb2xvcjogXCIjNjc4NmMzXCIsIGxhYmVsOiBcIldhbnRzXCIgfSxcbiAgICB7XG4gICAgICBwZXJjZW50YWdlOiAoc2F2aW5ncyAvIHRvdGFsKSAqIDEwMCxcbiAgICAgIGNvbG9yOiBcIiMwMzZBQjNcIixcbiAgICAgIGxhYmVsOiBcIkRlYnQgcmVwYXltZW50XCIsXG4gICAgfSxcbiAgXTtcblxuICBsZXQgY3VtdWxhdGl2ZVBlcmNlbnRhZ2UgPSAwO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyBoZWlnaHQ9e2RpbWVuc2lvbnMgKyA4MH0gd2lkdGg9e2RpbWVuc2lvbnMgKyAxMDB9PlxuICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cmFkaXVzICsgNTB9LCAke3JhZGl1cyArIDUwfSlgfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBtaWRkbGVYID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgTWF0aC5jb3MoXG4gICAgICAgICAgICAgICgyICogTWF0aC5QSSAqIChjdW11bGF0aXZlUGVyY2VudGFnZSArIGl0ZW0ucGVyY2VudGFnZSAvIDIpKSAvIDEwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBtaWRkbGVZID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgTWF0aC5zaW4oXG4gICAgICAgICAgICAgICgyICogTWF0aC5QSSAqIChjdW11bGF0aXZlUGVyY2VudGFnZSArIGl0ZW0ucGVyY2VudGFnZSAvIDIpKSAvIDEwMFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGNvbnRyb2xQb2ludFggPVxuICAgICAgICAgICAgKG5vcm1hbGl6ZWRSYWRpdXMgKyAxNSkgKlxuICAgICAgICAgICAgTWF0aC5jb3MoXG4gICAgICAgICAgICAgICgyICogTWF0aC5QSSAqIChjdW11bGF0aXZlUGVyY2VudGFnZSArIGl0ZW0ucGVyY2VudGFnZSAvIDIuNSkpIC9cbiAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgY29udHJvbFBvaW50WSA9XG4gICAgICAgICAgICAobm9ybWFsaXplZFJhZGl1cyArIDE1KSAqXG4gICAgICAgICAgICBNYXRoLnNpbihcbiAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgaXRlbS5wZXJjZW50YWdlIC8gMi41KSkgL1xuICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGxhYmVsWCA9XG4gICAgICAgICAgICAobm9ybWFsaXplZFJhZGl1cyArIDUwKSAqXG4gICAgICAgICAgICBNYXRoLmNvcyhcbiAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgaXRlbS5wZXJjZW50YWdlIC8gMikpIC8gMTAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGxhYmVsWSA9XG4gICAgICAgICAgICAobm9ybWFsaXplZFJhZGl1cyArIDUwKSAqXG4gICAgICAgICAgICBNYXRoLnNpbihcbiAgICAgICAgICAgICAgKDIgKiBNYXRoLlBJICogKGN1bXVsYXRpdmVQZXJjZW50YWdlICsgaXRlbS5wZXJjZW50YWdlIC8gMikpIC8gMTAwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3Qgc3RhcnRYID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogY3VtdWxhdGl2ZVBlcmNlbnRhZ2UpIC8gMTAwKTtcbiAgICAgICAgICBjb25zdCBzdGFydFkgPVxuICAgICAgICAgICAgbm9ybWFsaXplZFJhZGl1cyAqXG4gICAgICAgICAgICBNYXRoLnNpbigoMiAqIE1hdGguUEkgKiBjdW11bGF0aXZlUGVyY2VudGFnZSkgLyAxMDApO1xuXG4gICAgICAgICAgY29uc3QgZW5kWCA9XG4gICAgICAgICAgICBub3JtYWxpemVkUmFkaXVzICpcbiAgICAgICAgICAgIE1hdGguY29zKFxuICAgICAgICAgICAgICAoMiAqIE1hdGguUEkgKiAoY3VtdWxhdGl2ZVBlcmNlbnRhZ2UgKyBpdGVtLnBlcmNlbnRhZ2UpKSAvIDEwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBlbmRZID1cbiAgICAgICAgICAgIG5vcm1hbGl6ZWRSYWRpdXMgKlxuICAgICAgICAgICAgTWF0aC5zaW4oXG4gICAgICAgICAgICAgICgyICogTWF0aC5QSSAqIChjdW11bGF0aXZlUGVyY2VudGFnZSArIGl0ZW0ucGVyY2VudGFnZSkpIC8gMTAwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgbGFyZ2VBcmNGbGFnID0gaXRlbS5wZXJjZW50YWdlID4gNTAgPyAxIDogMDtcblxuICAgICAgICAgIGN1bXVsYXRpdmVQZXJjZW50YWdlICs9IGl0ZW0ucGVyY2VudGFnZTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgZD17YE0gJHtzdGFydFh9ICR7c3RhcnRZfSBBICR7bm9ybWFsaXplZFJhZGl1c30gJHtub3JtYWxpemVkUmFkaXVzfSAwICR7bGFyZ2VBcmNGbGFnfSAxICR7ZW5kWH0gJHtlbmRZfWB9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17aXRlbS5jb2xvcn1cbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgey8qIDxwYXRoXG4gICAgICAgICAgICAgICAgZD17YE0gJHttaWRkbGVYfSAke21pZGRsZVl9IFEgJHtjb250cm9sUG9pbnRYfSAke2NvbnRyb2xQb2ludFl9LCAke2xhYmVsWH0gJHtsYWJlbFl9YH1cbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjV9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCJcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0XG4gICAgICAgICAgICAgICAgeD17bGFiZWxYIC0gMzB9XG4gICAgICAgICAgICAgICAgeT17bGFiZWxZIC0gMjB9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezgwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQtc20gdHJhY2tpbmctd2lkZSB0ZXh0LXNraW4tYmFzZSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQtc20gdHJhY2tpbmctd2lkZSB0ZXh0LXNraW4tYmFzZSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgKHtpdGVtLnBlcmNlbnRhZ2UudG9GaXhlZCgwKX0lKVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8Zm9yZWlnbk9iamVjdFxuICAgICAgICAgIHg9ey1yYWRpdXN9XG4gICAgICAgICAgeT17LXJhZGl1c31cbiAgICAgICAgICB3aWR0aD17cmFkaXVzICogMn1cbiAgICAgICAgICBoZWlnaHQ9e3JhZGl1cyAqIDJ9XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e21hY3JvQnVkZ2V0fSBhbHQ9XCJpY29uXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5IHRleHQtc20gdHJhY2tpbmctd2lkZSBtdC0yIHRleHQtd2hpdGUgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj5PdmVyYWxsIGJ1ZGdldCBzcGxpdDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdWRnZXRTcGxpdENoYXJ0O1xuIiwiaW1wb3J0IGNsb3VkMSBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvYnVkZ2V0cy1pbnNpZ2h0cy9jbG91ZDEuc3ZnXCI7XG5pbXBvcnQgY2xvdWQyIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9idWRnZXRzLWluc2lnaHRzL2Nsb3VkMi5zdmdcIjtcbmltcG9ydCBDbG91ZHMgZnJvbSBcImNsaWVudC9hc3NldHMvanNvbl9sb3R0aWUvY2xvdWRzLmpzb25cIjtcbmltcG9ydCB7IHVzZUJ1ZGdldFNldHRpbmdzU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2J1ZGdldFNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHVzZVVzZXJTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL3VzZXJTdG9yZVwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhbGxUcmlhbmdsZSB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJ1ZGdldFNwbGl0Q2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvb25ib2FyZGluZy9CdWRnZXRTcGxpdENoYXJ0XCI7XG5jb25zdCBCb29raW5nU3VjY2VzcyA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3QgYnVkZ2V0U2V0dGluZ3NTdG9yZSA9IHVzZUJ1ZGdldFNldHRpbmdzU3RvcmUoKTtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXJTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdGltZU91dENhbGxiYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFRpbWVyKChjdXJyVGltZXIpOiBudW1iZXIgPT4gY3VyclRpbWVyIC0gMSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY2xvdWRJbWFnZSA9IHtcbiAgICBsb29wOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGFuaW1hdGlvbkRhdGE6IENsb3VkcyxcbiAgICByZW5kZXJlclNldHRpbmdzOiB7XG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcInhNaWRZTWlkIHNsaWNlXCIsXG4gICAgfSxcbiAgfTtcbiAgLy8gdHVybiBpcyBsb2FkaW5nIG9mZiBhZnRlciAyIHNlY29uZHNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRpbWVyID4gMCAmJiBzZXRUaW1lb3V0KHRpbWVPdXRDYWxsYmFjaywgNTAwMCk7XG4gICAgaWYgKHRpbWVyID09PSAwKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIG5hdmlnYXRlKFwiL2J1ZGdldC1zZXR0aW5nc1wiKTtcbiAgICB9XG4gIH0sIFt0aW1lciwgdGltZU91dENhbGxiYWNrXSk7XG4gIGNvbnN0IGNoYXJ0RGltZW5zaW9ucyA9IDIzMDtcbiAgY29uc3QgZG91Z2hudXRUaGlja25lc3MgPSAxODtcbiAgY29uc3QgYnVkZ2V0VmFsdWVzID0geyAuLi5idWRnZXRTZXR0aW5nc1N0b3JlLmluY29tZVNwbGl0IH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1zdWNjZXNzQmcgYmctY292ZXIgdy1zY3JlZW4gcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIwIHJpZ2h0LTRcIj5cbiAgICAgICAgPGltZyBzcmM9e2Nsb3VkMn0gYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjQgbGVmdC0xMFwiPlxuICAgICAgICA8aW1nIHNyYz17Y2xvdWQxfSBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtOSBhYnNvbHV0ZSB0b3AtMjggbGVmdC0wIHJpZ2h0LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgIDxCdWRnZXRTcGxpdENoYXJ0XG4gICAgICAgICAgICBkaW1lbnNpb25zPXtjaGFydERpbWVuc2lvbnN9XG4gICAgICAgICAgICBkb3VnaG51dFRoaWNrbmVzcz17ZG91Z2hudXRUaGlja25lc3N9XG4gICAgICAgICAgICB2YWx1ZXM9e2J1ZGdldFZhbHVlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG14LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIHRleHQtc2tpbi13aGl0ZSB0ZXh0LXhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIEdyZWF0IGpvYiwge3VzZXIuZmlyc3RfbmFtZX0hXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1jdXN0b20gdHJhY2tpbmctbG9uZ3RleHQgdGV4dC1za2luLXdoaXRlIHRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICBUaGlzIGxvb2tzIGxpa2UgYSB2ZXJ5IGJhbGFuY2VkIGJ1ZGdldCBhbmQgYSBncmVhdCByb2FkbWFwIGZvciB5b3UgdG9cbiAgICAgICAgICBoaXQgeW91ciBmaW5hbmNpYWwgZ29hbHMuIFdlJ2xsIG5vdGlmeSB5b3Ugd2hlbmV2ZXIgeW91IG1heSBiZVxuICAgICAgICAgIG92ZXJzcGVuZGluZyBpbiBhIGNhdGVnb3J5IHNvIHlvdSBjYW4gc3RheSBvbiB0cmFjay5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTEyIGxlZnQtMCByaWdodC0wIGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIG14LTMuNVwiPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8QmFsbFRyaWFuZ2xlXG4gICAgICAgICAgICBoZWlnaHQ9ezM1fVxuICAgICAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICAgICAgcmFkaXVzPXsxLjZ9XG4gICAgICAgICAgICBjb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgYXJpYUxhYmVsPVwiYmFsbC10cmlhbmdsZS1sb2FkaW5nXCJcbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdTdWNjZXNzO1xuIiwiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcblxuaW50ZXJmYWNlIEluY29tZVNwbGl0IHtcbiAgZXNzZW50aWFsczogbnVtYmVyO1xuICB3YW50czogbnVtYmVyO1xuICBzYXZpbmdzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBCdWRnZXRTZXR0aW5ncyB7XG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIG1vbnRobHlJbmNvbWU6IG51bWJlcjtcbiAgaW5jb21lU3BsaXQ6IEluY29tZVNwbGl0O1xufVxuXG50eXBlIElCdWRnZXRTZXR0aW5nc1N0b3JlID0gQnVkZ2V0U2V0dGluZ3MgJiB7XG4gIHNldE1vbnRobHlJbmNvbWU6IChhbW91bnQ6IG51bWJlcikgPT4gdm9pZDtcbiAgc2V0SW5jb21lU3BsaXQ6IChzcGxpdDogSW5jb21lU3BsaXQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCB1c2VCdWRnZXRTZXR0aW5nc1N0b3JlID0gY3JlYXRlPElCdWRnZXRTZXR0aW5nc1N0b3JlPigoc2V0KSA9PiAoe1xuICBjdXJyZW5jeTogXCIgS0VTXCIsXG4gIG1vbnRobHlJbmNvbWU6IDAsXG4gIGluY29tZVNwbGl0OiB7XG4gICAgZXNzZW50aWFsczogNTAsXG4gICAgd2FudHM6IDMwLFxuICAgIHNhdmluZ3M6IDIwLFxuICB9LFxuICBzZXRNb250aGx5SW5jb21lOiAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb250aGx5SW5jb21lOiBhbW91bnQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0TW9udGhseUluY29tZTogKCkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBCdWRnZXRTZXR0aW5ncykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBCdWRnZXRTZXR0aW5ncyA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1vbnRobHlJbmNvbWU6IHN0YXRlLm1vbnRobHlJbmNvbWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0SW5jb21lU3BsaXQ6IChzcGxpdDogSW5jb21lU3BsaXQpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbmNvbWVTcGxpdDogc3BsaXQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0SW5jb21lU3BsaXQ6ICgpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbmNvbWVTcGxpdDogc3RhdGUuaW5jb21lU3BsaXQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbn0pKTtcblxuZXhwb3J0IHtcbiAgSW5jb21lU3BsaXQsXG4gIEJ1ZGdldFNldHRpbmdzLFxuICBJQnVkZ2V0U2V0dGluZ3NTdG9yZSxcbiAgdXNlQnVkZ2V0U2V0dGluZ3NTdG9yZSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=