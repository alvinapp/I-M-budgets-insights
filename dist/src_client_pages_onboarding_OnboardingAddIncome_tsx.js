"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_onboarding_OnboardingAddIncome_tsx"],{

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

/***/ "./src/client/pages/components/onboarding/MonthlyIncomeInput.tsx":
/*!***********************************************************************!*\
  !*** ./src/client/pages/components/onboarding/MonthlyIncomeInput.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlyIncomeInput: () => (/* binding */ MonthlyIncomeInput),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");



const MonthlyIncomeInput = ({ value, maxValue, currencySymbol, onChange, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex justify-center items-center p-3.5 rounded-full border border-1 border-[#2676B8]", onClick: () => onChange(Math.max(0, value - 1)) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMinus, { color: "#2676B8" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "relative px-2 flex flex-row justify-center items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "input-example", name: "input-name", className: "bg-transparent font-custom text-4xl tracking-title text-skin-base text-center font-medium w-full border-b-2 border-b-skin-base border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-0 focus:border-b-skin-base cursor-none", placeholder: "", value: value, defaultValue: value, decimalsLimit: 2, onValueChange: (value) => {
                            onChange(value);
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute right-14 -top-0.5 font-custom text-sm tracking-title text-skin-base font-medium" }, { children: currencySymbol }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex justify-center items-center rounded-full p-4 border border-1 border-[#2676B8]", onClick: () => onChange(Math.min(value + 1, maxValue)) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiPlus, { color: "#2676B8" }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthlyIncomeInput);


/***/ }),

/***/ "./src/client/pages/onboarding/OnboardingAddIncome.tsx":
/*!*************************************************************!*\
  !*** ./src/client/pages/onboarding/OnboardingAddIncome.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/api/api */ "./src/client/api/api.ts");
/* harmony import */ var client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/budgetSettingsStore */ "./src/client/store/budgetSettingsStore.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_ArrowBack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ArrowBack */ "./src/client/pages/components/ArrowBack.tsx");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_onboarding_MonthlyIncomeInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/onboarding/MonthlyIncomeInput */ "./src/client/pages/components/onboarding/MonthlyIncomeInput.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













const OnboardingAddIncome = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const budgetSettingsStore = (0,client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_4__.useBudgetSettingsStore)();
    const { currency } = budgetSettingsStore;
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_5__.useConfigurationStore)((state) => state.configuration);
    const defaultIncome = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_6__.setDefaultIncomeValue)(currency);
    const [monthlyIncomeValue, setMonthlyIncomeValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(budgetSettingsStore.monthlyIncome || defaultIncome);
    const postIncome = (amount) => __awaiter(void 0, void 0, void 0, function* () {
        const finalAmount = parseInt(amount);
        try {
            const response = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_7__.postData)({
                endpoint: "/users/income",
                token: configuration.token,
                data: { amount: finalAmount },
            });
            return response;
        }
        catch (error) {
            console.error(error);
        }
    });
    const { isFetching: settingIncome, refetch: addIncome } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("set-monthly-income", () => postIncome(monthlyIncomeValue), {
        enabled: false,
        refetchOnWindowFocus: false,
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen w-screen relative no-scrollbar" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-between pt-6 pb-2 pr-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ArrowBack__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: () => navigate(-1) }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-3 items-left" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiBriefcase, { color: "#101010" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom font-bold text-2xl mt-1.5 mx-3.5 text-skin-base" }, { children: "What's your monthly net income?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-sm font-primary text-skin-base tracking-wide mt-6 font-medium mx-3.5" }, { children: ["We use your monthly net income as the basis for your overall monthly budget. You can always edit this later from Settings.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-18 mx-4.5 items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_onboarding_MonthlyIncomeInput__WEBPACK_IMPORTED_MODULE_11__["default"], { value: monthlyIncomeValue, maxValue: Number.MAX_SAFE_INTEGER, currencySymbol: currency, onChange: setMonthlyIncomeValue }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-sm font-primary text-skin-base text-center mt-2.5 tracking-wide" }, { children: "*equals your overall monthly budget" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-5 left-0 right-0 mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_12__["default"], { title: "Continue", isDisabled: false, loading: settingIncome, click: () => {
                        budgetSettingsStore.setMonthlyIncome(monthlyIncomeValue);
                        addIncome().then((response) => {
                            if (response === null || response === void 0 ? void 0 : response.data.errors) {
                                return;
                            }
                            else {
                                navigate("/onboard-split-income");
                            }
                        });
                    } }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingAddIncome);


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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19vbmJvYXJkaW5nX09uYm9hcmRpbmdBZGRJbmNvbWVfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFLN0MsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQXdCLEVBQUUsRUFBRTtJQUN4RSxPQUFPLENBQ0wsaUZBQ0UsU0FBUyxFQUFFLDJGQUEyRixVQUFVLEVBQUUsRUFDbEgsT0FBTyxFQUFFLE9BQU8sZ0JBRWhCLHVEQUFDLHVEQUFXLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsV0FBVyxHQUFHLElBQ3pDLENBQ1YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNka0I7QUFDTTtBQVNoRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsRUFDakMsS0FBSyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsUUFBUSxHQUNtQixFQUFFLEVBQUU7SUFDL0IsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyw0QkFBNEIsaUJBQ3pDLDhFQUNFLFNBQVMsRUFBQyxzRkFBc0YsRUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBRS9DLHVEQUFDLG1EQUFPLElBQUMsS0FBSyxFQUFDLFNBQVMsR0FBRyxJQUN2QixFQUNOLCtFQUFLLFNBQVMsRUFBQyx5REFBeUQsaUJBQ3RFLHVEQUFDLGtFQUFhLElBQ1osRUFBRSxFQUFDLGVBQWUsRUFDbEIsSUFBSSxFQUFDLFlBQVksRUFDakIsU0FBUyxFQUFDLG1PQUFtTyxFQUM3TyxXQUFXLEVBQUMsRUFBRSxFQUNkLEtBQUssRUFBRSxLQUFLLEVBQ1osWUFBWSxFQUFFLEtBQUssRUFDbkIsYUFBYSxFQUFFLENBQUMsRUFDaEIsYUFBYSxFQUFFLENB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QUFFLEVBQUU7UUFDbkMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkMsTUFBTSxNQUFNLG1DQUNQLEtBQUssS0FDUixhQUFhLEVBQUUsTUFBTSxHQUN0QixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3JCLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQ25DLE1BQU0sTUFBTSxtQ0FDUCxLQUFLLEtBQ1IsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEdBQ25DLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxjQUFjLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUU7UUFDckMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkMsTUFBTSxNQUFNLG1DQUNQLEtBQUssS0FDUixXQUFXLEVBQUUsS0FBSyxHQUNuQixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtZQUNuQyxNQUFNLE1BQU0sbUNBQ1AsS0FBSyxLQUNSLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxHQUMvQixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFPRiIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0Fycm93QmFjay50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvb25ib2FyZGluZy9Nb250aGx5SW5jb21lSW5wdXQudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9vbmJvYXJkaW5nL09uYm9hcmRpbmdBZGRJbmNvbWUudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9zdG9yZS9idWRnZXRTZXR0aW5nc1N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpQXJyb3dMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG50eXBlIEFycm93QmFja0J1dHRvblByb3BzID0ge1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbn07XG5jb25zdCBBcnJvd0JhY2tCdXR0b24gPSAoeyBvbkNsaWNrLCBiYWNrZ3JvdW5kIH06IEFycm93QmFja0J1dHRvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsIHAtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cm91bmRlZC1mdWxsICR7YmFja2dyb3VuZH1gfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8RmlBcnJvd0xlZnQgY29sb3I9XCIjMTAxMDEwXCIgc2l6ZT1cIjEuNDM3NXJlbVwiIC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXJyb3dCYWNrQnV0dG9uO1xuIiwiaW1wb3J0IHsgZm9ybWF0VG9Mb2NhbGVTdHJpbmcgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB7IEZpTWludXMsIEZpUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IEN1cnJlbmN5SW5wdXQgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkXCI7XG5cbnR5cGUgQWRkTW9udGhseUluY29tZUlucHV0UHJvcHMgPSB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG1heFZhbHVlOiBudW1iZXI7XG4gIGN1cnJlbmN5U3ltYm9sOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAoZTogYW55KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IE1vbnRobHlJbmNvbWVJbnB1dCA9ICh7XG4gIHZhbHVlLFxuICBtYXhWYWx1ZSxcbiAgY3VycmVuY3lTeW1ib2wsXG4gIG9uQ2hhbmdlLFxufTogQWRkTW9udGhseUluY29tZUlucHV0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMy41IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLVsjMjY3NkI4XVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKE1hdGgubWF4KDAsIHZhbHVlIC0gMSkpfVxuICAgICAgPlxuICAgICAgICA8RmlNaW51cyBjb2xvcj1cIiMyNjc2QjhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTIgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEN1cnJlbmN5SW5wdXRcbiAgICAgICAgICBpZD1cImlucHV0LWV4YW1wbGVcIlxuICAgICAgICAgIG5hbWU9XCJpbnB1dC1uYW1lXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBmb250LWN1c3RvbSB0ZXh0LTR4bCB0cmFja2luZy10aXRsZSB0ZXh0LXNraW4tYmFzZSB0ZXh0LWNlbnRlciBmb250LW1lZGl1bSB3LWZ1bGwgYm9yZGVyLWItMiBib3JkZXItYi1za2luLWJhc2UgYm9yZGVyLWwtMCBib3JkZXItci0wIGJvcmRlci10LTAgZm9jdXM6cmluZy0wIGZvY3VzOm91dGxpbmUtMCBmb2N1czpib3JkZXItYi1za2luLWJhc2UgY3Vyc29yLW5vbmVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkZWNpbWFsc0xpbWl0PXsyfVxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMTQgLXRvcC0wLjUgZm9udC1jdXN0b20gdGV4dC1zbSB0cmFja2luZy10aXRsZSB0ZXh0LXNraW4tYmFzZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIHtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIHAtNCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLVsjMjY3NkI4XVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKE1hdGgubWluKHZhbHVlICsgMSwgbWF4VmFsdWUpKX1cbiAgICAgID5cbiAgICAgICAgPEZpUGx1cyBjb2xvcj1cIiMyNjc2QjhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb250aGx5SW5jb21lSW5wdXQ7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlCcmllZmNhc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tIFwiY2xpZW50L2FwaS9hcGlcIjtcbmltcG9ydCB7IHVzZUJ1ZGdldFNldHRpbmdzU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2J1ZGdldFNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgc2V0RGVmYXVsdEluY29tZVZhbHVlIH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IEFycm93QmFja0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnJvd0JhY2tcIjtcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5CdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgTW9udGhseUluY29tZUlucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL29uYm9hcmRpbmcvTW9udGhseUluY29tZUlucHV0XCI7XG5cbmNvbnN0IE9uYm9hcmRpbmdBZGRJbmNvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgYnVkZ2V0U2V0dGluZ3NTdG9yZSA9IHVzZUJ1ZGdldFNldHRpbmdzU3RvcmUoKTtcbiAgY29uc3QgeyBjdXJyZW5jeSB9ID0gYnVkZ2V0U2V0dGluZ3NTdG9yZTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IGRlZmF1bHRJbmNvbWUgPSBzZXREZWZhdWx0SW5jb21lVmFsdWUoY3VycmVuY3kpO1xuICBjb25zdCBbbW9udGhseUluY29tZVZhbHVlLCBzZXRNb250aGx5SW5jb21lVmFsdWVdID0gdXNlU3RhdGUoXG4gICAgYnVkZ2V0U2V0dGluZ3NTdG9yZS5tb250aGx5SW5jb21lIHx8IGRlZmF1bHRJbmNvbWVcbiAgKTtcblxuICBjb25zdCBwb3N0SW5jb21lID0gYXN5bmMgKGFtb3VudDogYW55KSA9PiB7XG4gICAgY29uc3QgZmluYWxBbW91bnQgPSBwYXJzZUludChhbW91bnQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3REYXRhKHtcbiAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJzL2luY29tZVwiLFxuICAgICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgICAgZGF0YTogeyBhbW91bnQ6IGZpbmFsQW1vdW50IH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuICBjb25zdCB7IGlzRmV0Y2hpbmc6IHNldHRpbmdJbmNvbWUsIHJlZmV0Y2g6IGFkZEluY29tZSB9ID0gdXNlUXVlcnkoXG4gICAgXCJzZXQtbW9udGhseS1pbmNvbWVcIixcbiAgICAoKSA9PiBwb3N0SW5jb21lKG1vbnRobHlJbmNvbWVWYWx1ZSksXG4gICAge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiByZWxhdGl2ZSBuby1zY3JvbGxiYXJcIj5cbiAgICAgIDxOYXZCYXJcbiAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB0LTYgcGItMiBwci02XCI+XG4gICAgICAgICAgICA8QXJyb3dCYWNrQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGgtcHggYmctc2tpbi1hY2NlbnQzXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMyBpdGVtcy1sZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTEgdy0xMSBiZy1za2luLWljb25QcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LTMuNVwiPlxuICAgICAgICAgIDxGaUJyaWVmY2FzZSBjb2xvcj1cIiMxMDEwMTBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSBmb250LWJvbGQgdGV4dC0yeGwgbXQtMS41IG14LTMuNSB0ZXh0LXNraW4tYmFzZVwiPlxuICAgICAgICAgIFdoYXQncyB5b3VyIG1vbnRobHkgbmV0IGluY29tZT9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYWRkSW5jb21lQmcgYmctY292ZXIgYmctbm8tcmVwZWF0IGgtMzYgYmctcmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1wcmltYXJ5IHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXdpZGUgbXQtNiBmb250LW1lZGl1bSBteC0zLjVcIj5cbiAgICAgICAgICAgIFdlIHVzZSB5b3VyIG1vbnRobHkgbmV0IGluY29tZSBhcyB0aGUgYmFzaXMgZm9yIHlvdXIgb3ZlcmFsbCBtb250aGx5XG4gICAgICAgICAgICBidWRnZXQuIFlvdSBjYW4gYWx3YXlzIGVkaXQgdGhpcyBsYXRlciBmcm9tIFNldHRpbmdzLlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMTggbXgtNC41IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8TW9udGhseUluY29tZUlucHV0XG4gICAgICAgICAgdmFsdWU9e21vbnRobHlJbmNvbWVWYWx1ZX1cbiAgICAgICAgICBtYXhWYWx1ZT17TnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJ9XG4gICAgICAgICAgY3VycmVuY3lTeW1ib2w9e2N1cnJlbmN5fVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRNb250aGx5SW5jb21lVmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXByaW1hcnkgdGV4dC1za2luLWJhc2UgdGV4dC1jZW50ZXIgbXQtMi41IHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAqZXF1YWxzIHlvdXIgb3ZlcmFsbCBtb250aGx5IGJ1ZGdldFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS01IGxlZnQtMCByaWdodC0wIG14LTMuNVwiPlxuICAgICAgICA8TWFpbkJ1dHRvblxuICAgICAgICAgIHRpdGxlPVwiQ29udGludWVcIlxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgIGxvYWRpbmc9e3NldHRpbmdJbmNvbWV9XG4gICAgICAgICAgY2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGJ1ZGdldFNldHRpbmdzU3RvcmUuc2V0TW9udGhseUluY29tZShtb250aGx5SW5jb21lVmFsdWUpO1xuICAgICAgICAgICAgYWRkSW5jb21lKCkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2U/LmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL29uYm9hcmQtc3BsaXQtaW5jb21lXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPbmJvYXJkaW5nQWRkSW5jb21lO1xuIiwiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcblxuaW50ZXJmYWNlIEluY29tZVNwbGl0IHtcbiAgZXNzZW50aWFsczogbnVtYmVyO1xuICB3YW50czogbnVtYmVyO1xuICBzYXZpbmdzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBCdWRnZXRTZXR0aW5ncyB7XG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIG1vbnRobHlJbmNvbWU6IG51bWJlcjtcbiAgaW5jb21lU3BsaXQ6IEluY29tZVNwbGl0O1xufVxuXG50eXBlIElCdWRnZXRTZXR0aW5nc1N0b3JlID0gQnVkZ2V0U2V0dGluZ3MgJiB7XG4gIHNldE1vbnRobHlJbmNvbWU6IChhbW91bnQ6IG51bWJlcikgPT4gdm9pZDtcbiAgc2V0SW5jb21lU3BsaXQ6IChzcGxpdDogSW5jb21lU3BsaXQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCB1c2VCdWRnZXRTZXR0aW5nc1N0b3JlID0gY3JlYXRlPElCdWRnZXRTZXR0aW5nc1N0b3JlPigoc2V0KSA9PiAoe1xuICBjdXJyZW5jeTogXCIgS0VTXCIsXG4gIG1vbnRobHlJbmNvbWU6IDAsXG4gIGluY29tZVNwbGl0OiB7XG4gICAgZXNzZW50aWFsczogNTAsXG4gICAgd2FudHM6IDMwLFxuICAgIHNhdmluZ3M6IDIwLFxuICB9LFxuICBzZXRNb250aGx5SW5jb21lOiAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb250aGx5SW5jb21lOiBhbW91bnQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0TW9udGhseUluY29tZTogKCkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBCdWRnZXRTZXR0aW5ncykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBCdWRnZXRTZXR0aW5ncyA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1vbnRobHlJbmNvbWU6IHN0YXRlLm1vbnRobHlJbmNvbWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0SW5jb21lU3BsaXQ6IChzcGxpdDogSW5jb21lU3BsaXQpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbmNvbWVTcGxpdDogc3BsaXQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0SW5jb21lU3BsaXQ6ICgpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbmNvbWVTcGxpdDogc3RhdGUuaW5jb21lU3BsaXQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbn0pKTtcblxuZXhwb3J0IHtcbiAgSW5jb21lU3BsaXQsXG4gIEJ1ZGdldFNldHRpbmdzLFxuICBJQnVkZ2V0U2V0dGluZ3NTdG9yZSxcbiAgdXNlQnVkZ2V0U2V0dGluZ3NTdG9yZSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=