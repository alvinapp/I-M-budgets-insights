"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_budgets_edit-settings_EditMonthlyIncome_tsx"],{

/***/ "./src/client/pages/budgets/edit-settings/EditMonthlyIncome.tsx":
/*!**********************************************************************!*\
  !*** ./src/client/pages/budgets/edit-settings/EditMonthlyIncome.tsx ***!
  \**********************************************************************/
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
/* harmony import */ var client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/budgetSettingsStore */ "./src/client/store/budgetSettingsStore.ts");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_ArrowBack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ArrowBack */ "./src/client/pages/components/ArrowBack.tsx");
/* harmony import */ var _components_onboarding_MonthlyIncomeInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/onboarding/MonthlyIncomeInput */ "./src/client/pages/components/onboarding/MonthlyIncomeInput.tsx");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var client_api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/api/api */ "./src/client/api/api.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













const EditMonthlyIncome = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const budgetSettingsStore = (0,client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_4__.useBudgetSettingsStore)();
    const userStore = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { currency } = budgetSettingsStore;
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_6__.useConfigurationStore)((state) => state.configuration);
    const [monthlyIncomeValue, setMonthlyIncomeValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userStore.user.income);
    const [monthlyIncomeChange, setMonthlyIncomeChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const postIncome = (amount) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const response = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_7__.postData)({
                endpoint: "/users/income",
                token: configuration.token,
                data: { amount },
            });
            budgetSettingsStore.setMonthlyIncome(monthlyIncomeValue);
            setLoading(false);
            navigate(-1);
            return response;
        }
        catch (error) {
            console.error(error);
            setLoading(false);
        }
    });
    const { mutate: addIncome } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(postIncome);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen w-screen relative no-scrollbar" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-between pt-6 pb-2 pr-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ArrowBack__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: () => {
                            navigate(-1);
                        } }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-3 items-left" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiBriefcase, { color: "#101010" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom font-medium text-2xl mt-1.5 mx-3.5 text-skin-base" }, { children: "What's your monthly net income?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-sm font-primary text-skin-base tracking-wide mt-6 font-normal mx-3.5" }, { children: ["We need to use this as a base calculation for your overall monthly budget. You can always modify later.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-18 mx-4.5 items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_onboarding_MonthlyIncomeInput__WEBPACK_IMPORTED_MODULE_11__["default"], { value: monthlyIncomeValue, maxValue: Number.MAX_SAFE_INTEGER, currencySymbol: currency, onChange: (e) => {
                            setMonthlyIncomeChange(true);
                            setMonthlyIncomeValue(e);
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-sm font-primary text-skin-base text-center mt-2.5 tracking-wide" }, { children: "*equals your overall monthly budget" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-5 left-0 right-0 mx-3.5" }, { children: monthlyIncomeChange ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_12__["default"], { title: "Save", isDisabled: false, loading: loading, click: () => {
                        addIncome(monthlyIncomeValue);
                    } })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_12__["default"], { title: "Save", isDisabled: true, loading: loading, click: () => {
                        addIncome(monthlyIncomeValue);
                    } })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditMonthlyIncome);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19idWRnZXRzX2VkaXQtc2V0dGluZ3NfRWRpdE1vbnRobHlJbmNvbWVfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDWTtBQUNFO0FBRTJCO0FBQ3JCO0FBQ1I7QUFDWTtBQUN1QjtBQUNKO0FBQ2xDO0FBQ0E7QUFDUTtBQUVsRCxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtJQUM3QixNQUFNLFFBQVEsR0FBRyw2REFBVyxFQUFFLENBQUM7SUFDL0IsTUFBTSxtQkFBbUIsR0FBRyx3RkFBc0IsRUFBRSxDQUFDO0lBQ3JELE1BQU0sU0FBUyxHQUFHLGtFQUFZLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsbUJBQW1CLENBQUM7SUFDekMsTUFBTSxhQUFhLEdBQUcsaUZBQXFCLENBQ3pDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUN6QixDQUFDO0lBQ2IsTUFBTSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDLEdBQUcsK0NBQVEsQ0FDMUQsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3RCLENBQUM7SUFDRixNQUFNLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRFLE1BQU0sVUFBVSxHQUFHLENBQU8sTUFBYyxFQUFFLEVBQUU7UUFDMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLHdEQUFRLENBQUM7Z0JBQzlCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixLQUFLLEVBQUUsYUFB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QUNSLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxHQUMvQixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFPRiIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9idWRnZXRzL2VkaXQtc2V0dGluZ3MvRWRpdE1vbnRobHlJbmNvbWUudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0Fycm93QmFjay50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvb25ib2FyZGluZy9Nb250aGx5SW5jb21lSW5wdXQudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9zdG9yZS9idWRnZXRTZXR0aW5nc1N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUJyaWVmY2FzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyB1c2VCdWRnZXRTZXR0aW5nc1N0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9idWRnZXRTZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQnV0dG9uXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IEFycm93QmFja0J1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcnJvd0JhY2tcIjtcbmltcG9ydCBNb250aGx5SW5jb21lSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb25ib2FyZGluZy9Nb250aGx5SW5jb21lSW5wdXRcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSBcImNsaWVudC9hcGkvYXBpXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvdXNlclN0b3JlXCI7XG5cbmNvbnN0IEVkaXRNb250aGx5SW5jb21lID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGJ1ZGdldFNldHRpbmdzU3RvcmUgPSB1c2VCdWRnZXRTZXR0aW5nc1N0b3JlKCk7XG4gIGNvbnN0IHVzZXJTdG9yZSA9IHVzZVVzZXJTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgY3VycmVuY3kgfSA9IGJ1ZGdldFNldHRpbmdzU3RvcmU7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvbmZpZ3VyYXRpb25cbiAgKSBhcyBJQ29uZmlnO1xuICBjb25zdCBbbW9udGhseUluY29tZVZhbHVlLCBzZXRNb250aGx5SW5jb21lVmFsdWVdID0gdXNlU3RhdGUoXG4gICAgdXNlclN0b3JlLnVzZXIuaW5jb21lXG4gICk7XG4gIGNvbnN0IFttb250aGx5SW5jb21lQ2hhbmdlLCBzZXRNb250aGx5SW5jb21lQ2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBwb3N0SW5jb21lID0gYXN5bmMgKGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0RGF0YSh7XG4gICAgICAgIGVuZHBvaW50OiBcIi91c2Vycy9pbmNvbWVcIixcbiAgICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgICAgIGRhdGE6IHsgYW1vdW50IH0sXG4gICAgICB9KTtcbiAgICAgIGJ1ZGdldFNldHRpbmdzU3RvcmUuc2V0TW9udGhseUluY29tZShtb250aGx5SW5jb21lVmFsdWUpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgbXV0YXRlOiBhZGRJbmNvbWUgfSA9IHVzZU11dGF0aW9uKHBvc3RJbmNvbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiByZWxhdGl2ZSBuby1zY3JvbGxiYXJcIj5cbiAgICAgIDxOYXZCYXJcbiAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB0LTYgcGItMiBwci02XCI+XG4gICAgICAgICAgICA8QXJyb3dCYWNrQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgaC1weCBiZy1za2luLWFjY2VudDNcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0zIGl0ZW1zLWxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgaC0xMSB3LTExIGJnLXNraW4taWNvblByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtMy41XCI+XG4gICAgICAgICAgPEZpQnJpZWZjYXNlIGNvbG9yPVwiIzEwMTAxMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIGZvbnQtbWVkaXVtIHRleHQtMnhsIG10LTEuNSBteC0zLjUgdGV4dC1za2luLWJhc2VcIj5cbiAgICAgICAgICBXaGF0J3MgeW91ciBtb250aGx5IG5ldCBpbmNvbWU/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWFkZEluY29tZUJnIGJnLWNvdmVyIGJnLW5vLXJlcGVhdCBoLTM2IGJnLXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtcHJpbWFyeSB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy13aWRlIG10LTYgZm9udC1ub3JtYWwgbXgtMy41XCI+XG4gICAgICAgICAgICBXZSBuZWVkIHRvIHVzZSB0aGlzIGFzIGEgYmFzZSBjYWxjdWxhdGlvbiBmb3IgeW91ciBvdmVyYWxsIG1vbnRobHlcbiAgICAgICAgICAgIGJ1ZGdldC4gWW91IGNhbiBhbHdheXMgbW9kaWZ5IGxhdGVyLlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMTggbXgtNC41IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8TW9udGhseUluY29tZUlucHV0XG4gICAgICAgICAgdmFsdWU9e21vbnRobHlJbmNvbWVWYWx1ZX1cbiAgICAgICAgICBtYXhWYWx1ZT17TnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJ9XG4gICAgICAgICAgY3VycmVuY3lTeW1ib2w9e2N1cnJlbmN5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0TW9udGhseUluY29tZUNoYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIHNldE1vbnRobHlJbmNvbWVWYWx1ZShlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1wcmltYXJ5IHRleHQtc2tpbi1iYXNlIHRleHQtY2VudGVyIG10LTIuNSB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgKmVxdWFscyB5b3VyIG92ZXJhbGwgbW9udGhseSBidWRnZXRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNSBsZWZ0LTAgcmlnaHQtMCBteC0zLjVcIj5cbiAgICAgICAge21vbnRobHlJbmNvbWVDaGFuZ2UgPyAoXG4gICAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiU2F2ZVwiXG4gICAgICAgICAgICBpc0Rpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhZGRJbmNvbWUobW9udGhseUluY29tZVZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TWFpbkJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJTYXZlXCJcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWRkSW5jb21lKG1vbnRobHlJbmNvbWVWYWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRNb250aGx5SW5jb21lO1xuIiwiaW1wb3J0IHsgRmlBcnJvd0xlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbnR5cGUgQXJyb3dCYWNrQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xufTtcbmNvbnN0IEFycm93QmFja0J1dHRvbiA9ICh7IG9uQ2xpY2ssIGJhY2tncm91bmQgfTogQXJyb3dCYWNrQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgcC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyb3VuZGVkLWZ1bGwgJHtiYWNrZ3JvdW5kfWB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxGaUFycm93TGVmdCBjb2xvcj1cIiMxMDEwMTBcIiBzaXplPVwiMS40Mzc1cmVtXCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcnJvd0JhY2tCdXR0b247XG4iLCJpbXBvcnQgeyBmb3JtYXRUb0xvY2FsZVN0cmluZyB9IGZyb20gXCJjbGllbnQvdXRpbHMvRm9ybWF0dGVyc1wiO1xuaW1wb3J0IHsgRmlNaW51cywgRmlQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgQ3VycmVuY3lJbnB1dCBmcm9tIFwicmVhY3QtY3VycmVuY3ktaW5wdXQtZmllbGRcIjtcblxudHlwZSBBZGRNb250aGx5SW5jb21lSW5wdXRQcm9wcyA9IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbWF4VmFsdWU6IG51bWJlcjtcbiAgY3VycmVuY3lTeW1ib2w6IHN0cmluZztcbiAgb25DaGFuZ2U6IChlOiBhbnkpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgTW9udGhseUluY29tZUlucHV0ID0gKHtcbiAgdmFsdWUsXG4gIG1heFZhbHVlLFxuICBjdXJyZW5jeVN5bWJvbCxcbiAgb25DaGFuZ2UsXG59OiBBZGRNb250aGx5SW5jb21lSW5wdXRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0zLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItMSBib3JkZXItWyMyNjc2QjhdXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoTWF0aC5tYXgoMCwgdmFsdWUgLSAxKSl9XG4gICAgICA+XG4gICAgICAgIDxGaU1pbnVzIGNvbG9yPVwiIzI2NzZCOFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtMiBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8Q3VycmVuY3lJbnB1dFxuICAgICAgICAgIGlkPVwiaW5wdXQtZXhhbXBsZVwiXG4gICAgICAgICAgbmFtZT1cImlucHV0LW5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGZvbnQtY3VzdG9tIHRleHQtNHhsIHRyYWNraW5nLXRpdGxlIHRleHQtc2tpbi1iYXNlIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIHctZnVsbCBib3JkZXItYi0yIGJvcmRlci1iLXNraW4tYmFzZSBib3JkZXItbC0wIGJvcmRlci1yLTAgYm9yZGVyLXQtMCBmb2N1czpyaW5nLTAgZm9jdXM6b3V0bGluZS0wIGZvY3VzOmJvcmRlci1iLXNraW4tYmFzZSBjdXJzb3Itbm9uZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRlY2ltYWxzTGltaXQ9ezJ9XG4gICAgICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0xNCAtdG9wLTAuNSBmb250LWN1c3RvbSB0ZXh0LXNtIHRyYWNraW5nLXRpdGxlIHRleHQtc2tpbi1iYXNlIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAge2N1cnJlbmN5U3ltYm9sfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgcC00IGJvcmRlciBib3JkZXItMSBib3JkZXItWyMyNjc2QjhdXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoTWF0aC5taW4odmFsdWUgKyAxLCBtYXhWYWx1ZSkpfVxuICAgICAgPlxuICAgICAgICA8RmlQbHVzIGNvbG9yPVwiIzI2NzZCOFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlJbmNvbWVJbnB1dDtcbiIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5cbmludGVyZmFjZSBJbmNvbWVTcGxpdCB7XG4gIGVzc2VudGlhbHM6IG51bWJlcjtcbiAgd2FudHM6IG51bWJlcjtcbiAgc2F2aW5nczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQnVkZ2V0U2V0dGluZ3Mge1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICBtb250aGx5SW5jb21lOiBudW1iZXI7XG4gIGluY29tZVNwbGl0OiBJbmNvbWVTcGxpdDtcbn1cblxudHlwZSBJQnVkZ2V0U2V0dGluZ3NTdG9yZSA9IEJ1ZGdldFNldHRpbmdzICYge1xuICBzZXRNb250aGx5SW5jb21lOiAoYW1vdW50OiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldEluY29tZVNwbGl0OiAoc3BsaXQ6IEluY29tZVNwbGl0KSA9PiB2b2lkO1xufTtcblxuY29uc3QgdXNlQnVkZ2V0U2V0dGluZ3NTdG9yZSA9IGNyZWF0ZTxJQnVkZ2V0U2V0dGluZ3NTdG9yZT4oKHNldCkgPT4gKHtcbiAgY3VycmVuY3k6IFwiIEtFU1wiLFxuICBtb250aGx5SW5jb21lOiAwLFxuICBpbmNvbWVTcGxpdDoge1xuICAgIGVzc2VudGlhbHM6IDUwLFxuICAgIHdhbnRzOiAzMCxcbiAgICBzYXZpbmdzOiAyMCxcbiAgfSxcbiAgc2V0TW9udGhseUluY29tZTogKGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IEJ1ZGdldFNldHRpbmdzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IEJ1ZGdldFNldHRpbmdzID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbW9udGhseUluY29tZTogYW1vdW50LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIGdldE1vbnRobHlJbmNvbWU6ICgpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb250aGx5SW5jb21lOiBzdGF0ZS5tb250aGx5SW5jb21lLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldEluY29tZVNwbGl0OiAoc3BsaXQ6IEluY29tZVNwbGl0KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IEJ1ZGdldFNldHRpbmdzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IEJ1ZGdldFNldHRpbmdzID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5jb21lU3BsaXQ6IHNwbGl0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIGdldEluY29tZVNwbGl0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IEJ1ZGdldFNldHRpbmdzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IEJ1ZGdldFNldHRpbmdzID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5jb21lU3BsaXQ6IHN0YXRlLmluY29tZVNwbGl0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5cbmV4cG9ydCB7XG4gIEluY29tZVNwbGl0LFxuICBCdWRnZXRTZXR0aW5ncyxcbiAgSUJ1ZGdldFNldHRpbmdzU3RvcmUsXG4gIHVzZUJ1ZGdldFNldHRpbmdzU3RvcmUsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9