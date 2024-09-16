"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_budgets_edit-settings_EditSplitIncome_tsx"],{

/***/ "./src/client/api/goals.ts":
/*!*********************************!*\
  !*** ./src/client/api/goals.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setMacro: () => (/* binding */ setMacro)
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


const setMacro = ({ goalMacro, configuration, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
            endpoint: "/goals/macros",
            token: configuration.token,
            data: goalMacro,
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});


/***/ }),

/***/ "./src/client/pages/budgets/edit-settings/EditSplitIncome.tsx":
/*!********************************************************************!*\
  !*** ./src/client/pages/budgets/edit-settings/EditSplitIncome.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/budgetSettingsStore */ "./src/client/store/budgetSettingsStore.ts");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_ArrowBack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ArrowBack */ "./src/client/pages/components/ArrowBack.tsx");
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_api_goals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/api/goals */ "./src/client/api/goals.ts");
/* harmony import */ var _components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/SliderThumbComponent */ "./src/client/pages/components/SliderThumbComponent.tsx");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var client_store_categoriesStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/categoriesStore */ "./src/client/store/categoriesStore.ts");
/* harmony import */ var client_pages_components_DebtInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/pages/components/DebtInfo */ "./src/client/pages/components/DebtInfo.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















const EditSplitIncome = () => {
    var _a, _b, _c, _d, _e;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)((state) => state.configuration);
    const budgetSettingsStore = (0,client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_5__.useBudgetSettingsStore)();
    const { monthlyIncome, currency, incomeSplit } = budgetSettingsStore;
    const categoriesStore = (0,client_store_categoriesStore__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state);
    const split = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__.reformatBudgetSplit)((_b = (_a = categoriesStore.macros) === null || _a === void 0 ? void 0 : _a.budget_split) !== null && _b !== void 0 ? _b : "");
    const [essentialsRatio, setEssentialsRatio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(split ? parseInt(split[0]) : incomeSplit.essentials);
    const [wantsRatio, setWantsRatio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(split ? parseInt(split[1]) : incomeSplit.wants);
    const [savingsRatio, setSavingsRatio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(split ? parseInt(split[2]) : incomeSplit.savings);
    const [showPercentage, setShowPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [debouncedRatio, setDebouncedRatio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        essentialsRatio,
        wantsRatio,
        savingsRatio,
    });
    const setDebouncedRatioDebounced = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()((newRatio) => setDebouncedRatio(newRatio), 300)).current;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setDebouncedRatioDebounced({ essentialsRatio, wantsRatio, savingsRatio });
    }, [essentialsRatio, wantsRatio, savingsRatio, setDebouncedRatioDebounced]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const totalRatio = 100;
        const totalAllocated = debouncedRatio.essentialsRatio +
            debouncedRatio.wantsRatio +
            debouncedRatio.savingsRatio;
        if (totalAllocated !== totalRatio) {
            const diff = totalRatio - totalAllocated;
            // Distribute the difference proportionally among the ratios
            const essentialsAdjustment = (debouncedRatio.essentialsRatio / totalAllocated) * diff;
            const wantsAdjustment = (debouncedRatio.wantsRatio / totalAllocated) * diff;
            const savingsAdjustment = (debouncedRatio.savingsRatio / totalAllocated) * diff;
            // Adjust the ratios
            setEssentialsRatio(debouncedRatio.essentialsRatio + essentialsAdjustment);
            setWantsRatio(debouncedRatio.wantsRatio + wantsAdjustment);
            setSavingsRatio(debouncedRatio.savingsRatio + savingsAdjustment);
        }
    }, [debouncedRatio]);
    const generateSliderValues = (length = 100) => new Array(length).fill(1).map((_, i) => i + 1);
    const calculateIncomeAmount = (incomeRatio) => Math.floor((incomeRatio / 100) * monthlyIncome);
    const postAllMacros = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const macros = [
                ["Essentials", essentialsRatio],
                ["Wants", wantsRatio],
                ["Savings", savingsRatio],
            ];
            for (let i = 0; i < macros.length; i++) {
                const [macroType, macroRatio] = macros[i];
                yield (0,client_api_goals__WEBPACK_IMPORTED_MODULE_8__.setMacro)({
                    goalMacro: {
                        name: `${macroType}`,
                        type_name: macroType,
                        amount: calculateIncomeAmount(macroRatio),
                        percentage: 0,
                        share: macroRatio,
                        reset_micros: false,
                    },
                    configuration,
                });
            }
            navigate("/edit-budgets");
        }
        catch (error) {
            console.error(error);
            // Handle the error
        }
    });
    const handleSliderChange = (newValue, type) => {
        const totalRatio = 100;
        const oldValue = type === "essentials"
            ? essentialsRatio
            : type === "wants"
                ? wantsRatio
                : savingsRatio;
        const change = newValue - oldValue;
        if (newValue === totalRatio) {
            switch (type) {
                case "essentials":
                    setWantsRatio(0);
                    setSavingsRatio(0);
                    break;
                case "wants":
                    setEssentialsRatio(0);
                    setSavingsRatio(0);
                    break;
                case "savings":
                    setEssentialsRatio(0);
                    setWantsRatio(0);
                    break;
                default:
                    break;
            }
            return;
        }
        if (oldValue === totalRatio) {
            const primaryRatio = (totalRatio - newValue) * 0.7;
            const secondaryRatio = (totalRatio - newValue) * 0.3;
            switch (type) {
                case "essentials":
                    setWantsRatio(primaryRatio);
                    setSavingsRatio(secondaryRatio);
                    break;
                case "wants":
                    setEssentialsRatio(primaryRatio);
                    setSavingsRatio(secondaryRatio);
                    break;
                case "savings":
                    setEssentialsRatio(primaryRatio);
                    setWantsRatio(secondaryRatio);
                    break;
                default:
                    break;
            }
            return;
        }
        const allocateChange = (primaryType, secondaryType, change) => {
            const primaryChange = (change * 7) / 10;
            const secondaryChange = change - primaryChange;
            switch (primaryType) {
                case "essentials":
                    setEssentialsRatio(Math.max(essentialsRatio + primaryChange, 0));
                    break;
                case "wants":
                    setWantsRatio(Math.max(wantsRatio + primaryChange, 0));
                    break;
                case "savings":
                    setSavingsRatio(Math.max(savingsRatio + primaryChange, 0));
                    break;
                default:
                    break;
            }
            switch (secondaryType) {
                case "essentials":
                    setEssentialsRatio(Math.max(essentialsRatio + secondaryChange, 0));
                    break;
                case "wants":
                    setWantsRatio(Math.max(wantsRatio + secondaryChange, 0));
                    break;
                case "savings":
                    setSavingsRatio(Math.max(savingsRatio + secondaryChange, 0));
                    break;
                default:
                    break;
            }
        };
        switch (type) {
            case "essentials":
                if (change > 0) {
                    allocateChange("wants", "savings", -change);
                }
                else {
                    allocateChange("savings", "wants", -change);
                }
                setEssentialsRatio(newValue);
                break;
            case "wants":
                if (change > 0) {
                    allocateChange("essentials", "savings", -change);
                }
                else {
                    allocateChange("savings", "essentials", -change);
                }
                setWantsRatio(newValue);
                break;
            case "savings":
                if (change > 0) {
                    allocateChange("essentials", "wants", -change);
                }
                else {
                    allocateChange("wants", "essentials", -change);
                }
                setSavingsRatio(newValue);
                break;
            default:
                break;
        }
    };
    const [changeBudgetSplit, setChangeBudgetSplit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen w-screen relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-between pt-6 pb-2 pr-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ArrowBack__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: () => navigate(-1) }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-3 items-left" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__.FiPieChart, { color: "#555466" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom font-medium text-2xl text-skin-base mt-1.5 mx-3.5" }, { children: "Whoop! Here is your recommended budget split." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-sm font-primary text-skin-base tracking-wide mt-6 font-regular mx-3.5" }, { children: ["Here's a breakdown of how much you can spend on Essentials and Wants while staying on track to becoming debt free. Feel free to edit Essentials and Wants according to your lifestyle preference.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-12 mx-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "grid grid-cols-2 gap-4 w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start font-bold text-2xl text-skin-base" }, { children: "Debt repayment" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom font-bold text-2xl text-skin-base" }, { children: [(_c = calculateIncomeAmount(savingsRatio)) === null || _c === void 0 ? void 0 : _c.toLocaleString("en-us"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: "align-super -ml-1 text-xxxs" }, { children: currency !== null && currency !== void 0 ? currency : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-span-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_12__["default"], { value: savingsRatio, className: "horizontal-slider", marks: generateSliderValues(), markClassName: "example-mark", min: 0, max: 100, thumbClassName: "example-thumb", trackClassName: "example-track", renderThumb: (props, state) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_13__["default"], { valueNow: state.valueNow, props: props, showPercentage: showPercentage, backgroundColor: "#036AB3", isLocked: true })), onBeforeChange: () => setShowPercentage(true), onAfterChange: () => setShowPercentage(false), onChange: (value) => {
                                                handleSliderChange(value, "savings");
                                                setChangeBudgetSplit(true);
                                            }, disabled: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: "0" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__.formatCurrency)(monthlyIncome) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_DebtInfo__WEBPACK_IMPORTED_MODULE_14__["default"], { loanValue: calculateIncomeAmount(savingsRatio), currency: currency }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "grid grid-cols-2 gap-4 w-full mt-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start font-bold text-2xl text-skin-base" }, { children: "Essentials" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end font-bold" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-2xl text-skin-base" }, { children: [(_d = calculateIncomeAmount(essentialsRatio)) === null || _d === void 0 ? void 0 : _d.toLocaleString("en-us"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: "align-super -ml-1 text-xxxs" }, { children: currency !== null && currency !== void 0 ? currency : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-span-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_12__["default"], { value: essentialsRatio, className: "horizontal-slider", marks: generateSliderValues(), markClassName: "example-mark", min: 0, max: 100, thumbClassName: "example-thumb", trackClassName: "essential-track", renderThumb: (props, state) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_13__["default"], { valueNow: state.valueNow, props: props, showPercentage: showPercentage, backgroundColor: "#009FDC" })), onBeforeChange: () => setShowPercentage(true), onAfterChange: () => setShowPercentage(false), onChange: (value) => {
                                                handleSliderChange(value, "essentials");
                                                setChangeBudgetSplit(true);
                                            } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: "0" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__.formatCurrency)(monthlyIncome) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "grid grid-cols-2 gap-4 w-full mt-6 mb-32" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start font-bold text-2xl text-skin-base" }, { children: "Wants" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end font-bold" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-2xl text-skin-base" }, { children: [(_e = calculateIncomeAmount(wantsRatio)) === null || _e === void 0 ? void 0 : _e.toLocaleString("en-us"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: "align-super -ml-1 text-xxxs" }, { children: currency !== null && currency !== void 0 ? currency : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-span-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_12__["default"], { value: wantsRatio, className: "horizontal-slider", marks: generateSliderValues(), markClassName: "example-mark", min: 0, max: 100, thumbClassName: "example-thumb", trackClassName: "wants-track", renderThumb: (props, state) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_13__["default"], { valueNow: state.valueNow, props: props, showPercentage: showPercentage, backgroundColor: "#354AA6" })), onBeforeChange: () => setShowPercentage(true), onAfterChange: () => setShowPercentage(false), onChange: (value) => {
                                                handleSliderChange(value, "wants");
                                                setChangeBudgetSplit(true);
                                            } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: "0" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_7__.formatCurrency)(monthlyIncome) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-5 left-0 right-0 mx-3.5 text-sm z-10" }, { children: changeBudgetSplit ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_15__["default"], { title: "Save", isDisabled: false, 
                            // loading={}
                            click: () => {
                                budgetSettingsStore.setIncomeSplit({
                                    essentials: essentialsRatio,
                                    wants: wantsRatio,
                                    savings: savingsRatio,
                                });
                                postAllMacros();
                            } })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_15__["default"], { title: "Save", isDisabled: true, 
                            // loading={}
                            click: () => {
                                budgetSettingsStore.setIncomeSplit({
                                    essentials: essentialsRatio,
                                    wants: wantsRatio,
                                    savings: savingsRatio,
                                });
                                postAllMacros();
                            } })) }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditSplitIncome);


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

/***/ "./src/client/pages/components/DebtInfo.tsx":
/*!**************************************************!*\
  !*** ./src/client/pages/components/DebtInfo.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");


const DebtInfo = ({ loanValue, currency }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row rounded-lg py-4 pl-3.5 pr-3.5 bg-skin-accent2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosInformationCircleOutline, { color: "#101010", size: "1rem" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col ml-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-primary text-xs tracking-listtile_subtitle font-medium" }, { children: ["You currently have active loans with a combined repayment of", " ", loanValue.toLocaleString("en-US"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", { children: currency }), "."] })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DebtInfo);


/***/ }),

/***/ "./src/client/pages/components/SliderThumbComponent.tsx":
/*!**************************************************************!*\
  !*** ./src/client/pages/components/SliderThumbComponent.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");



const SliderThumbComponent = ({ valueNow, showPercentage, isLocked, backgroundColor, props, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({}, props, { style: Object.assign(Object.assign({}, props === null || props === void 0 ? void 0 : props.style), { height: "27px", width: "27px", borderRadius: "50%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: {
                    height: "19px",
                    width: "19px",
                    borderRadius: "50%",
                    backgroundColor: backgroundColor ? backgroundColor : "#144CBC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "-3px",
                } }, { children: isLocked ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_go__WEBPACK_IMPORTED_MODULE_1__.GoLock, { color: "white", height: 15, width: 5 })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMoreVertical, { color: "white", height: 15, width: 5, style: { marginRight: "-8px" } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMoreVertical, { color: "white", height: 15, width: 5, style: { marginLeft: "1px" } })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: {
                    position: "absolute",
                    bottom: "110%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "fit-content",
                } }, { children: showPercentage ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ style: {
                        background: "#101010",
                        color: "white",
                        padding: "4px",
                        borderRadius: "50%",
                        fontSize: "8px",
                        fontFamily: "Poppins",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "30px",
                        width: "30px",
                        position: "relative",
                    } }, { children: [valueNow, "%", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                position: "absolute",
                                bottom: "-4px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: 0,
                                height: 0,
                                borderTop: "6px solid #101010",
                                borderRight: "6px solid transparent",
                                borderLeft: "6px solid transparent",
                            } })] }))) : null }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderThumbComponent);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19idWRnZXRzX2VkaXQtc2V0dGluZ3NfRWRpdFNwbGl0SW5jb21lX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDUztBQWFuQyxNQUFNLFFBQVEsR0FBRyxDQUFPLEVBQzdCLFNBQVMsRUFDVCxhQUFhLEdBSWQsRUFBRSxFQUFFO0lBQ0gsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sOENBQVEsQ0FBQztZQUN6QixRQUFRLEVBQUUsZUFBZTtZQUN6QixLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDMUIsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENrRDtBQUNSO0FBQ0c7QUFFMkI7QUFDckI7QUFDUjtBQUNZO0FBQ2xCO0FBQ3FDO0FBQ2pCO0FBQ2M7QUFDbEM7QUFDdUM7QUFDaEI7QUFDTjtBQUV4RCxNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7O0lBQzNCLE1BQU0sUUFBUSxHQUFHLDZEQUFXLEVBQUUsQ0FBQztJQUMvQixNQUFNLGFBQWEsR0FBRyxpRkFBcUIsQ0FDekMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3pCLENBQUM7SUFFYixNQUFNLG1CQUFtQixHQUFHLHdGQUFzQixFQUFFLENBQUM7SUFDckQsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsbUJBQW1CLENBQUM7SUFDckUsTUFBTSxlQUFlLEdBQUcsd0VBQWtCLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sS0FBSyxHQUFHLDRFQUFtQixDQUFDLDJCQUFlLENBQUMsTUFBTSwwQ0FBRSxZQUFZLG1DQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsR0FBRywrQ0FBUSxDQUNwRCxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FDcEQsQ0FBQztJQUNGLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsK0NBQVEsQ0FDMUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQy9DLENBQUM7SUFDRixNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLCtDQUFRLENBQzlDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUNqRCxDQUFDO0lBQ0YsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLCtDQUFRLENBQUM7UUFDbkQsZUFBZTtRQUNmLFVBQVU7UUFDVixZQUFZO0tBQ2IsQ0FBQyxDQUFDO0lBRUgsTUFBTSwwQkFBMEIsR0FBRyw2Q0FBTSxDQUN2QyxzREFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FDekQsQ0FBQyxPQUFPLENBQUM7SUFFVixnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLDBCQUEwQixDQUFDLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUU1RSxnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixNQUFNLGNBQWMsR0FDbEIsY0FBYyxDQUFDLGVBQWU7WUFDOUIsY0FBYyxDQUFDLFVBQVU7WUFDekIsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUU5QixJQUFJLGNBQWMsS0FBSyxVQUFVLEVBQUU7WUFDakMsTUFBTSxJQUFJLEdBQUcsVUFBVSxHQUFHLGNBQWMsQ0FBQztZQUV6Qyw0REFBNEQ7WUFDNUQsTUFBTSxvQkFBb0IsR0FDeEIsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMzRCxNQUFNLGVBQWUsR0FDbkIsQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN0RCxNQUFNLGlCQUFpQixHQUNyQixDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRXhELG9CQUFvQjtZQUNwQixrQkFBa0IsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLG9CQUFvQixDQUFDLENBQUM7WUFDMUUsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLENBQUM7WUFDM0QsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFckIsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUM1QyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pELE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUVsRCxNQUFNLGFBQWEsR0FBRyxHQUFTLEVBQUU7UUFDL0IsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUE4QjtnQkFDeEMsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUMvQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7Z0JBQ3JCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQzthQUMxQixDQUFDO1lBRUYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNLDBEQUFRLENBQUM7b0JBQ2IsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxHQUFHLFNBQVMsRUFBRTt3QkFDcEIsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVLENBQUM7d0JBQ3pDLFVBQVUsRUFBRSxDQUFDO3dCQUNiLEtBQUssRUFBRSxVQUFVO3dCQUNqQixZQUFZLEVBQUUsS0FBSztxQkFDcEI7b0JBQ0QsYUFBYTtpQkFDZCxDQUFDLENBQUM7YUFDSjtZQUNELFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixtQkFBbUI7U0FDcEI7SUFDSCxDQUFDLEVBQUM7SUFFRixNQUFNLGtCQUFrQixHQUFHLENBQUMsUUFBZ0IsRUFBRSxJQUFZLEVBQUUsRUFBRTtRQUM1RCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdkIsTUFBTSxRQUFRLEdBQ1osSUFBSSxLQUFLLFlBQVk7WUFDbkIsQ0FBQyxDQUFDLGVBQWU7WUFDakIsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPO2dCQUNsQixDQUFDLENBQUMsVUFBVTtnQkFDWixDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ25CLE1BQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFbkMsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzNCLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssWUFBWTtvQkFDZixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1Ysa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsTUFBTTtnQkFDUixLQUFLLFNBQVM7b0JBQ1osa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7WUFDRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDM0IsTUFBTSxZQUFZLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ25ELE1BQU0sY0FBYyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFlBQVk7b0JBQ2YsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM1QixlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNqQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNqQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzlCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1lBQ0QsT0FBTztTQUNSO1FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FDckIsV0FBbUIsRUFDbkIsYUFBcUIsRUFDckIsTUFBYyxFQUNkLEVBQUU7WUFDRixNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDeEMsTUFBTSxlQUFlLEdBQUcsTUFBTSxHQUFHLGFBQWEsQ0FBQztZQUUvQyxRQUFRLFdBQVcsRUFBRTtnQkFDbkIsS0FBSyxZQUFZO29CQUNmLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7WUFFRCxRQUFRLGFBQWEsRUFBRTtnQkFDckIsS0FBSyxZQUFZO29CQUNmLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pELE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUM7UUFFRixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssWUFBWTtnQkFDZixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2QsY0FBYyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0wsY0FBYyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0Qsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNkLGNBQWMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLGNBQWMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2xEO2dCQUNELGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2QsY0FBYyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEQ7cUJBQU07b0JBQ0wsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ0QsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRSxPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLDRCQUE0QixpQkFDekMsdURBQUMsMERBQU0sSUFDTCxRQUFRLEVBQ04sOEVBQUssU0FBUyxFQUFDLDJEQUEyRCxnQkFDeEUsdURBQUMsOERBQWUsSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUksSUFDNUMsR0FFUixFQUNGLGdFQUFLLFNBQVMsRUFBQyxnQ0FBZ0MsR0FBTyxFQUV0RCwrRUFBSyxTQUFTLEVBQUMsK0JBQStCLGlCQUM1Qyw4RUFBSyxTQUFTLEVBQUMsb0ZBQW9GLGdCQUNqRyx1REFBQyx1REFBVSxJQUFDLEtBQUssRUFBQyxTQUFTLEdBQUcsSUFDMUIsRUFDTiw4RUFBSyxTQUFTLEVBQUMsK0RBQStELG1FQUV4RSxFQUNOLDhFQUFLLFNBQVMsRUFBQyxvREFBb0QsZ0JBQ2pFLCtFQUFLLFNBQVMsRUFBQyw0RUFBNEUsc05BSXpGLGdFQUFTLEtBQ0wsSUFDRixFQUNOLCtFQUFLLFNBQVMsRUFBQywwQkFBMEIsaUJBQ3ZDLCtFQUFLLFNBQVMsRUFBQywrQkFBK0IsaUJBQzVDLDhFQUFLLFNBQVMsRUFBQyxzREFBc0Qsb0NBRS9ELEVBQ04sOEVBQUssU0FBUyxFQUFDLGtCQUFrQixnQkFDL0IsK0VBQUssU0FBUyxFQUFDLCtDQUErQyxpQkFDM0QsMkJBQXFCLENBQUMsWUFBWSxDQUFDLDBDQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFDN0QsOEVBQUssU0FBUyxFQUFDLDZCQUE2QixnQkFDekMsUUFBUSxhQUFSLFFBQVEsY0FBUixRQUFRLEdBQUksRUFBRSxJQUNYLEtBQ0YsSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyxZQUFZLGdCQUN6Qix1REFBQyxxREFBVyxJQUNWLEtBQUssRUFBRSxZQUFZLEVBQ25CLFNBQVMsRUFBQyxtQkFBbUIsRUFDN0IsS0FBSyxFQUFFLG9CQUFvQixFQUFFLEVBQzdCLGFBQWEsRUFBQyxjQUFjLEVBQzVCLEdBQUcsRUFBRSxDQUFDLEVBQ04sR0FBRyxFQUFFLEdBQUcsRUFDUixjQUFjLEVBQUMsZUFBZSxFQUM5QixjQUFjLEVBQUMsZUFBZSxFQUM5QixXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUM3Qix1REFBQyx5RUFBb0IsSUFDbkIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQ3hCLEtBQUssRUFBRSxLQUFLLEVBQ1osY0FBYyxFQUFFLGNBQWMsRUFDOUIsZUFBZSxFQUFDLFNBQVMsRUFDekIsUUFBUSxFQUFFLElBQUksR0FDZCxDQUNILEVBQ0QsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUM3QyxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQzdDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dEQUNsQixrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0RBQ3JDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDOzRDQUM3QixDQUFDLEVBQ0QsUUFBUSxFQUFFLElBQUksR0FDZCxJQUNFLEVBQ04sOEVBQ0UsU0FBUyxFQUFDLDZEQUE2RCxFQUN2RSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLHVCQUd4QixFQUNOLDhFQUNFLFNBQVMsRUFBQywyREFBMkQsRUFDckUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFFM0IsdUVBQWMsQ0FBQyxhQUFhLENBQUMsSUFDMUIsS0FDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyxNQUFNLGdCQUNuQix1REFBQyx5RUFBUSxJQUNQLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFDOUMsUUFBUSxFQUFFLFFBQVEsR0FDbEIsSUFDRSxFQUNOLCtFQUFLLFNBQVMsRUFBQyxvQ0FBb0MsaUJBQ2pELDhFQUFLLFNBQVMsRUFBQyxzREFBc0QsZ0NBRS9ELEVBQ04sOEVBQUssU0FBUyxFQUFDLDRCQUE0QixnQkFDekMsK0VBQUssU0FBUyxFQUFDLHFDQUFxQyxpQkFDakQsMkJBQXFCLENBQUMsZUFBZSxDQUFDLDBDQUFFLGNBQWMsQ0FDckQsT0FBTyxDQUNSLEVBQ0QsOEVBQUssU0FBUyxFQUFDLDZCQUE2QixnQkFDekMsUUFBUSxhQUFSLFFBQVEsY0FBUixRQUFRLEdBQUksRUFBRSxJQUNYLEtBQ0YsSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyxZQUFZLGdCQUN6Qix1REFBQyxxREFBVyxJQUNWLEtBQUssRUFBRSxlQUFlLEVBQ3RCLFNBQVMsRUFBQyxtQkFBbUIsRUFDN0IsS0FBSyxFQUFFLG9CQUFvQixFQUFFLEVBQzdCLGFBQWEsRUFBQyxjQUFjLEVBQzVCLEdBQUcsRUFBRSxDQUFDLEVBQ04sR0FBRyxFQUFFLEdBQUcsRUFDUixjQUFjLEVBQUMsZUFBZSxFQUM5QixjQUFjLEVBQUMsaUJBQWlCLEVBQ2hDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQzdCLHVEQUFDLHlFQUFvQixJQUNuQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFDeEIsS0FBSyxFQUFFLEtBQUssRUFDWixjQUFjLEVBQUUsY0FBYyxFQUM5QixlQUFlLEVBQUMsU0FBUyxHQUN6QixDQUNILEVBQ0QsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUM3QyxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQzdDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dEQUNsQixrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0RBQ3hDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDOzRDQUM3QixDQUFDLEdBQ0QsSUFDRSxFQUNOLDhFQUNFLFNBQVMsRUFBQyw2REFBNkQsRUFDdkUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSx1QkFHeEIsRUFDTiw4RUFDRSxTQUFTLEVBQUMsMkRBQTJELEVBQ3JFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZ0JBRTNCLHVFQUFjLENBQUMsYUFBYSxDQUFDLElBQzFCLEtBQ0YsRUFDTiwrRUFBSyxTQUFTLEVBQUMsMENBQTBDLGlCQUN2RCw4RUFBSyxTQUFTLEVBQUMsc0RBQXNELDJCQUUvRCxFQUNOLDhFQUFLLFNBQVMsRUFBQyw0QkFBNEIsZ0JBQ3pDLCtFQUFLLFNBQVMsRUFBQyxxQ0FBcUMsaUJBQ2pELDJCQUFxQixDQUFDLFVBQVUsQ0FBQywwQ0FBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQzNELDhFQUFLLFNBQVMsRUFBQyw2QkFBNkIsZ0JBQ3pDLFFBQVEsYUFBUixRQUFRLGNBQVIsUUFBUSxHQUFJLEVBQUUsSUFDWCxLQUNGLElBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsWUFBWSxnQkFDekIsdURBQUMscURBQVcsSUFDVixLQUFLLEVBQUUsVUFBVSxFQUNqQixTQUFTLEVBQUMsbUJBQW1CLEVBQzdCLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUM3QixhQUFhLEVBQUMsY0FBYyxFQUM1QixHQUFHLEVBQUUsQ0FBQyxFQUNOLEdBQUcsRUFBRSxHQUFHLEVBQ1IsY0FBYyxFQUFDLGVBQWUsRUFDOUIsY0FBYyxFQUFDLGFBQWEsRUFDNUIsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDN0IsdURBQUMseUVBQW9CLElBQ25CLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUN4QixLQUFLLEVBQUUsS0FBSyxFQUNaLGNBQWMsRUFBRSxjQUFjLEVBQzlCLGVBQWUsRUFBQyxTQUFTLEdBQ3pCLENBQ0gsRUFDRCxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQzdDLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFDN0MsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0RBQ2xCLGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnREFDbkMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7NENBQzdCLENBQUMsR0FDRCxJQUNFLEVBQ04sOEVBQ0UsU0FBUyxFQUFDLDZEQUE2RCxFQUN2RSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLHVCQUd4QixFQUNOLDhFQUNFLFNBQVMsRUFBQywyREFBMkQsRUFDckUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFFM0IsdUVBQWMsQ0FBQyxhQUFhLENBQUMsSUFDMUIsS0FDRixLQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLG1EQUFtRCxnQkFDL0QsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQ25CLHVEQUFDLCtEQUFVLElBQ1QsS0FBSyxFQUFDLE1BQU0sRUFDWixVQUFVLEVBQUUsS0FBSzs0QkFDakIsYUFBYTs0QkFDYixLQUFLLEVBQUUsR0FBRyxFQUFFO2dDQUNWLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztvQ0FDakMsVUFBVSxFQUFFLGVBQWU7b0NBQzNCLEtBQUssRUFBRSxVQUFVO29DQUNqQixPQUFPLEVBQUUsWUFBWTtpQ0FDdEIsQ0FBQyxDQUFDO2dDQUNILGFBQWEsRUFBRSxDQUFDOzRCQUNsQixDQUFDLEdBQ0QsQ0FDSCxDQUFDLENBQUMsQ0FBQyxDQUNGLHVEQUFDLCtEQUFVLElBQ1QsS0FBSyxFQUFDLE1BQU0sRUFDWixVQUFVLEVBQUUsSUFBSTs0QkFDaEIsYUFBYTs0QkFDYixLQUFLLEVBQUUsR0FBRyxFQUFFO2dDQUNWLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztvQ0FDakMsVUFBVSxFQUFFLGVBQWU7b0NBQzNCLEtBQUssRUFBRSxVQUFVO29DQUNqQixPQUFPLEVBQUUsWUFBWTtpQ0FDdEIsQ0FBQyxDQUFDO2dDQUNILGFBQWEsRUFBRSxDQUFDOzRCQUNsQixDQUFDLEdBQ0QsQ0FDSCxJQUNHLEtBQ0YsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hjYztBQUs3QyxNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBd0IsRUFBRSxFQUFFO0lBQ3hFLE9BQU8sQ0FDTCxpRkFDRSxTQUFTLEVBQUUsMkZBQTJGLFVBQVUsRUFBRSxFQUNsSCxPQUFPLEVBQUUsT0FBTyxnQkFFaEIsdURBQUMsdURBQVcsSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxXQUFXLEdBQUcsSUFDekMsQ0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZ0M7QUFPL0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWlCLEVBQUUsRUFBRTtJQUMxRCxPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLDZEQUE2RCxpQkFDMUUsOEVBQUssU0FBUyxFQUFDLGVBQWUsZ0JBQzVCLHVEQUFDLHlFQUE2QixJQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLE1BQU0sR0FBRyxJQUN6RCxFQUNOLDhFQUFLLFNBQVMsRUFBQyxvQkFBb0IsZ0JBQ2pDLCtFQUFLLFNBQVMsRUFBQyw2REFBNkQsaUZBQ2IsR0FBRyxFQUMvRCxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUNsQywwRUFBTSxRQUFRLEdBQU8sVUFDakIsSUFDRixLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0I7QUFDUjtBQVV4QyxNQUFNLG9CQUFvQixHQUF3QyxDQUFDLEVBQ2pFLFFBQVEsRUFDUixjQUFjLEVBQ2QsUUFBUSxFQUNSLGVBQWUsRUFDZixLQUFLLEdBQ04sRUFBRSxFQUFFO0lBQ0gsT0FBTyxDQUNMLGlGQUNNLEtBQUssSUFDVCxLQUFLLGtDQUNBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLEtBQ2YsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsTUFBTSxFQUNiLFlBQVksRUFBRSxLQUFLLEVBQ25CLGVBQWUsRUFBRSxPQUFPLEVBQ3hCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsY0FBYyxFQUFFLFFBQVEsRUFDeEIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsUUFBUSxFQUFFLFVBQVUsb0JBR3RCLDhFQUNFLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixZQUFZLEVBQUUsS0FBSztvQkFDbkIsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTO29CQUM5RCxPQUFPLEVBQUUsTUFBTTtvQkFDZixjQUFjLEVBQUUsUUFBUTtvQkFDeEIsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLE1BQU0sRUFBRSxNQUFNO2lCQUNmLGdCQUVBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDVix1REFBQyxrREFBTSxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFJLENBQy9DLENBQUMsQ0FBQyxDQUFDLENBQ0YsOEhBQ0UsdURBQUMsMERBQWMsSUFDYixLQUFLLEVBQUMsT0FBTyxFQUNiLE1BQU0sRUFBRSxFQUFFLEVBQ1YsS0FBSyxFQUFFLENBQUMsRUFDUixLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQzlCLEVBQ0YsdURBQUMsMERBQWMsSUFDYixLQUFLLEVBQUMsT0FBTyxFQUNiLE1BQU0sRUFBRSxFQUFFLEVBQ1YsS0FBSyxFQUFFLENBQUMsRUFDUixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQzVCLElBQ0QsQ0FDSixJQUNHLEVBQ04sOEVBQ0UsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBRSxVQUFVO29CQUNwQixNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUUsS0FBSztvQkFDWCxTQUFTLEVBQUUsa0JBQWtCO29CQUM3QixLQUFLLEVBQUUsYUFBYTtpQkFDckIsZ0JBRUEsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUNoQiwrRUFDRSxLQUFLLEVBQUU7d0JBQ0wsVUFBVSxFQUFFLFNBQVM7d0JBQ3JCLEtBQUssRUFBRSxPQUFPO3dCQUNkLE9BQU8sRUFBRSxLQUFLO3dCQUNkLFlBQVksRUFBRSxLQUFLO3dCQUNuQixRQUFRLEVBQUUsS0FBSzt3QkFDZixVQUFVLEVBQUUsU0FBUzt3QkFDckIsT0FBTyxFQUFFLE1BQU07d0JBQ2YsY0FBYyxFQUFFLFFBQVE7d0JBQ3hCLFVBQVUsRUFBRSxRQUFRO3dCQUNwQixNQUFNLEVBQUUsTUFBTTt3QkFDZCxLQUFLLEVBQUUsTUFBTTt3QkFDYixRQUFRLEVBQUUsVUFBVTtxQkFDckIsaUJBRUEsUUFBUSxPQUNULGdFQUNFLEtBQUssRUFBRTtnQ0FDTCxRQUFRLEVBQUUsVUFBVTtnQ0FDcEIsTUFBTSxFQUFFLE1BQU07Z0NBQ2QsSUFBSSxFQUFFLEtBQUs7Z0NBQ1gsU0FBUyxFQUFFLGtCQUFrQjtnQ0FDN0IsS0FBSyxFQUFFLENBQUM7Z0NBQ1IsTUFBTSxFQUFFLENBQUM7Z0NBQ1QsU0FBUyxFQUFFLG1CQUFtQjtnQ0FDOUIsV0FBVyxFQUFFLHVCQUF1QjtnQ0FDcEMsVUFBVSxFQUFFLHVCQUF1Qjs2QkFDcEMsR0FDRCxLQUNFLENBQ1AsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUNKLEtBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEg7QUFtQmpDLE1BQU0sc0JBQXNCLEdBQUcsK0NBQU0sQ0FBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEUsUUFBUSxFQUFFLE1BQU07SUFDaEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsV0FBVyxFQUFFO1FBQ1gsVUFBVSxFQUFFLEVBQUU7UUFDZCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxnQkFBZ0IsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFO1FBQ25DLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQ25DLE1BQU0sTUFBTSxtQ0FDUCxLQUFLLEtBQ1IsYUFBYSxFQUFFLE1BQU0sR0FDdEIsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUNyQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtZQUNuQyxNQUFNLE1BQU0sbUNBQ1AsS0FBSyxLQUNSLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxHQUNuQyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsY0FBYyxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFO1FBQ3JDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQ25DLE1BQU0sTUFBTSxtQ0FDUCxLQUFLLEtBQ1IsV0FBVyxFQUFFLEtBQUssR0FDbkIsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkMsTUFBTSxNQUFNLG1DQUNQLEtBQUssS0FDUixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FDL0IsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyxDQUFDO0FBT0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvYXBpL2dvYWxzLnRzIiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9idWRnZXRzL2VkaXQtc2V0dGluZ3MvRWRpdFNwbGl0SW5jb21lLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9BcnJvd0JhY2sudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0RlYnRJbmZvLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9TbGlkZXJUaHVtYkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3N0b3JlL2J1ZGdldFNldHRpbmdzU3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5cbmV4cG9ydCB0eXBlIEdvYWxNYWNyb1R5cGUgPSBcIldhbnRzXCIgfCBcIkVzc2VudGlhbHNcIiB8IFwiU2F2aW5nc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvYWxNYWNybyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZV9uYW1lOiBHb2FsTWFjcm9UeXBlO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xuICBzaGFyZTogbnVtYmVyO1xuICByZXNldF9taWNyb3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBzZXRNYWNybyA9IGFzeW5jICh7XG4gIGdvYWxNYWNybyxcbiAgY29uZmlndXJhdGlvbixcbn06IHtcbiAgZ29hbE1hY3JvOiBHb2FsTWFjcm87XG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG59KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IFwiL2dvYWxzL21hY3Jvc1wiLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgICBkYXRhOiBnb2FsTWFjcm8sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpUGllQ2hhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgdXNlQnVkZ2V0U2V0dGluZ3NTdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvYnVkZ2V0U2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkJ1dHRvblwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBBcnJvd0JhY2tCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXJyb3dCYWNrXCI7XG5pbXBvcnQgUmVhY3RTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWRlclwiO1xuaW1wb3J0IHsgdXNlQ29uZmlndXJhdGlvblN0b3JlLCBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBHb2FsTWFjcm9UeXBlLCBzZXRNYWNybyB9IGZyb20gXCJjbGllbnQvYXBpL2dvYWxzXCI7XG5pbXBvcnQgU2xpZGVyVGh1bWJDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2xpZGVyVGh1bWJDb21wb25lbnRcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCI7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgcmVmb3JtYXRCdWRnZXRTcGxpdCB9IGZyb20gXCJjbGllbnQvdXRpbHMvRm9ybWF0dGVyc1wiO1xuaW1wb3J0IHVzZUNhdGVnb3JpZXNTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2NhdGVnb3JpZXNTdG9yZVwiO1xuaW1wb3J0IERlYnRJbmZvIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9EZWJ0SW5mb1wiO1xuXG5jb25zdCBFZGl0U3BsaXRJbmNvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG5cbiAgY29uc3QgYnVkZ2V0U2V0dGluZ3NTdG9yZSA9IHVzZUJ1ZGdldFNldHRpbmdzU3RvcmUoKTtcbiAgY29uc3QgeyBtb250aGx5SW5jb21lLCBjdXJyZW5jeSwgaW5jb21lU3BsaXQgfSA9IGJ1ZGdldFNldHRpbmdzU3RvcmU7XG4gIGNvbnN0IGNhdGVnb3JpZXNTdG9yZSA9IHVzZUNhdGVnb3JpZXNTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBzcGxpdCA9IHJlZm9ybWF0QnVkZ2V0U3BsaXQoY2F0ZWdvcmllc1N0b3JlLm1hY3Jvcz8uYnVkZ2V0X3NwbGl0ID8/IFwiXCIpO1xuICBjb25zdCBbZXNzZW50aWFsc1JhdGlvLCBzZXRFc3NlbnRpYWxzUmF0aW9dID0gdXNlU3RhdGUoXG4gICAgc3BsaXQgPyBwYXJzZUludChzcGxpdFswXSkgOiBpbmNvbWVTcGxpdC5lc3NlbnRpYWxzXG4gICk7XG4gIGNvbnN0IFt3YW50c1JhdGlvLCBzZXRXYW50c1JhdGlvXSA9IHVzZVN0YXRlKFxuICAgIHNwbGl0ID8gcGFyc2VJbnQoc3BsaXRbMV0pIDogaW5jb21lU3BsaXQud2FudHNcbiAgKTtcbiAgY29uc3QgW3NhdmluZ3NSYXRpbywgc2V0U2F2aW5nc1JhdGlvXSA9IHVzZVN0YXRlKFxuICAgIHNwbGl0ID8gcGFyc2VJbnQoc3BsaXRbMl0pIDogaW5jb21lU3BsaXQuc2F2aW5nc1xuICApO1xuICBjb25zdCBbc2hvd1BlcmNlbnRhZ2UsIHNldFNob3dQZXJjZW50YWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RlYm91bmNlZFJhdGlvLCBzZXREZWJvdW5jZWRSYXRpb10gPSB1c2VTdGF0ZSh7XG4gICAgZXNzZW50aWFsc1JhdGlvLFxuICAgIHdhbnRzUmF0aW8sXG4gICAgc2F2aW5nc1JhdGlvLFxuICB9KTtcblxuICBjb25zdCBzZXREZWJvdW5jZWRSYXRpb0RlYm91bmNlZCA9IHVzZVJlZihcbiAgICBkZWJvdW5jZSgobmV3UmF0aW8pID0+IHNldERlYm91bmNlZFJhdGlvKG5ld1JhdGlvKSwgMzAwKVxuICApLmN1cnJlbnQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREZWJvdW5jZWRSYXRpb0RlYm91bmNlZCh7IGVzc2VudGlhbHNSYXRpbywgd2FudHNSYXRpbywgc2F2aW5nc1JhdGlvIH0pO1xuICB9LCBbZXNzZW50aWFsc1JhdGlvLCB3YW50c1JhdGlvLCBzYXZpbmdzUmF0aW8sIHNldERlYm91bmNlZFJhdGlvRGVib3VuY2VkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b3RhbFJhdGlvID0gMTAwO1xuICAgIGNvbnN0IHRvdGFsQWxsb2NhdGVkID1cbiAgICAgIGRlYm91bmNlZFJhdGlvLmVzc2VudGlhbHNSYXRpbyArXG4gICAgICBkZWJvdW5jZWRSYXRpby53YW50c1JhdGlvICtcbiAgICAgIGRlYm91bmNlZFJhdGlvLnNhdmluZ3NSYXRpbztcblxuICAgIGlmICh0b3RhbEFsbG9jYXRlZCAhPT0gdG90YWxSYXRpbykge1xuICAgICAgY29uc3QgZGlmZiA9IHRvdGFsUmF0aW8gLSB0b3RhbEFsbG9jYXRlZDtcblxuICAgICAgLy8gRGlzdHJpYnV0ZSB0aGUgZGlmZmVyZW5jZSBwcm9wb3J0aW9uYWxseSBhbW9uZyB0aGUgcmF0aW9zXG4gICAgICBjb25zdCBlc3NlbnRpYWxzQWRqdXN0bWVudCA9XG4gICAgICAgIChkZWJvdW5jZWRSYXRpby5lc3NlbnRpYWxzUmF0aW8gLyB0b3RhbEFsbG9jYXRlZCkgKiBkaWZmO1xuICAgICAgY29uc3Qgd2FudHNBZGp1c3RtZW50ID1cbiAgICAgICAgKGRlYm91bmNlZFJhdGlvLndhbnRzUmF0aW8gLyB0b3RhbEFsbG9jYXRlZCkgKiBkaWZmO1xuICAgICAgY29uc3Qgc2F2aW5nc0FkanVzdG1lbnQgPVxuICAgICAgICAoZGVib3VuY2VkUmF0aW8uc2F2aW5nc1JhdGlvIC8gdG90YWxBbGxvY2F0ZWQpICogZGlmZjtcblxuICAgICAgLy8gQWRqdXN0IHRoZSByYXRpb3NcbiAgICAgIHNldEVzc2VudGlhbHNSYXRpbyhkZWJvdW5jZWRSYXRpby5lc3NlbnRpYWxzUmF0aW8gKyBlc3NlbnRpYWxzQWRqdXN0bWVudCk7XG4gICAgICBzZXRXYW50c1JhdGlvKGRlYm91bmNlZFJhdGlvLndhbnRzUmF0aW8gKyB3YW50c0FkanVzdG1lbnQpO1xuICAgICAgc2V0U2F2aW5nc1JhdGlvKGRlYm91bmNlZFJhdGlvLnNhdmluZ3NSYXRpbyArIHNhdmluZ3NBZGp1c3RtZW50KTtcbiAgICB9XG4gIH0sIFtkZWJvdW5jZWRSYXRpb10pO1xuXG4gIGNvbnN0IGdlbmVyYXRlU2xpZGVyVmFsdWVzID0gKGxlbmd0aCA9IDEwMCkgPT5cbiAgICBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDEpLm1hcCgoXywgaSkgPT4gaSArIDEpO1xuICBjb25zdCBjYWxjdWxhdGVJbmNvbWVBbW91bnQgPSAoaW5jb21lUmF0aW86IG51bWJlcikgPT5cbiAgICBNYXRoLmZsb29yKChpbmNvbWVSYXRpbyAvIDEwMCkgKiBtb250aGx5SW5jb21lKTtcblxuICBjb25zdCBwb3N0QWxsTWFjcm9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYWNyb3M6IFtHb2FsTWFjcm9UeXBlLCBudW1iZXJdW10gPSBbXG4gICAgICAgIFtcIkVzc2VudGlhbHNcIiwgZXNzZW50aWFsc1JhdGlvXSxcbiAgICAgICAgW1wiV2FudHNcIiwgd2FudHNSYXRpb10sXG4gICAgICAgIFtcIlNhdmluZ3NcIiwgc2F2aW5nc1JhdGlvXSxcbiAgICAgIF07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFjcm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IFttYWNyb1R5cGUsIG1hY3JvUmF0aW9dID0gbWFjcm9zW2ldO1xuICAgICAgICBhd2FpdCBzZXRNYWNybyh7XG4gICAgICAgICAgZ29hbE1hY3JvOiB7XG4gICAgICAgICAgICBuYW1lOiBgJHttYWNyb1R5cGV9YCxcbiAgICAgICAgICAgIHR5cGVfbmFtZTogbWFjcm9UeXBlLFxuICAgICAgICAgICAgYW1vdW50OiBjYWxjdWxhdGVJbmNvbWVBbW91bnQobWFjcm9SYXRpbyksXG4gICAgICAgICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgICAgICAgc2hhcmU6IG1hY3JvUmF0aW8sXG4gICAgICAgICAgICByZXNldF9taWNyb3M6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlndXJhdGlvbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBuYXZpZ2F0ZShcIi9lZGl0LWJ1ZGdldHNcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvclxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTbGlkZXJDaGFuZ2UgPSAobmV3VmFsdWU6IG51bWJlciwgdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdG90YWxSYXRpbyA9IDEwMDtcbiAgICBjb25zdCBvbGRWYWx1ZSA9XG4gICAgICB0eXBlID09PSBcImVzc2VudGlhbHNcIlxuICAgICAgICA/IGVzc2VudGlhbHNSYXRpb1xuICAgICAgICA6IHR5cGUgPT09IFwid2FudHNcIlxuICAgICAgICA/IHdhbnRzUmF0aW9cbiAgICAgICAgOiBzYXZpbmdzUmF0aW87XG4gICAgY29uc3QgY2hhbmdlID0gbmV3VmFsdWUgLSBvbGRWYWx1ZTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdG90YWxSYXRpbykge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJlc3NlbnRpYWxzXCI6XG4gICAgICAgICAgc2V0V2FudHNSYXRpbygwKTtcbiAgICAgICAgICBzZXRTYXZpbmdzUmF0aW8oMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ3YW50c1wiOlxuICAgICAgICAgIHNldEVzc2VudGlhbHNSYXRpbygwKTtcbiAgICAgICAgICBzZXRTYXZpbmdzUmF0aW8oMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzYXZpbmdzXCI6XG4gICAgICAgICAgc2V0RXNzZW50aWFsc1JhdGlvKDApO1xuICAgICAgICAgIHNldFdhbnRzUmF0aW8oMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbHVlID09PSB0b3RhbFJhdGlvKSB7XG4gICAgICBjb25zdCBwcmltYXJ5UmF0aW8gPSAodG90YWxSYXRpbyAtIG5ld1ZhbHVlKSAqIDAuNztcbiAgICAgIGNvbnN0IHNlY29uZGFyeVJhdGlvID0gKHRvdGFsUmF0aW8gLSBuZXdWYWx1ZSkgKiAwLjM7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImVzc2VudGlhbHNcIjpcbiAgICAgICAgICBzZXRXYW50c1JhdGlvKHByaW1hcnlSYXRpbyk7XG4gICAgICAgICAgc2V0U2F2aW5nc1JhdGlvKHNlY29uZGFyeVJhdGlvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndhbnRzXCI6XG4gICAgICAgICAgc2V0RXNzZW50aWFsc1JhdGlvKHByaW1hcnlSYXRpbyk7XG4gICAgICAgICAgc2V0U2F2aW5nc1JhdGlvKHNlY29uZGFyeVJhdGlvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNhdmluZ3NcIjpcbiAgICAgICAgICBzZXRFc3NlbnRpYWxzUmF0aW8ocHJpbWFyeVJhdGlvKTtcbiAgICAgICAgICBzZXRXYW50c1JhdGlvKHNlY29uZGFyeVJhdGlvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhbGxvY2F0ZUNoYW5nZSA9IChcbiAgICAgIHByaW1hcnlUeXBlOiBzdHJpbmcsXG4gICAgICBzZWNvbmRhcnlUeXBlOiBzdHJpbmcsXG4gICAgICBjaGFuZ2U6IG51bWJlclxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcHJpbWFyeUNoYW5nZSA9IChjaGFuZ2UgKiA3KSAvIDEwO1xuICAgICAgY29uc3Qgc2Vjb25kYXJ5Q2hhbmdlID0gY2hhbmdlIC0gcHJpbWFyeUNoYW5nZTtcblxuICAgICAgc3dpdGNoIChwcmltYXJ5VHlwZSkge1xuICAgICAgICBjYXNlIFwiZXNzZW50aWFsc1wiOlxuICAgICAgICAgIHNldEVzc2VudGlhbHNSYXRpbyhNYXRoLm1heChlc3NlbnRpYWxzUmF0aW8gKyBwcmltYXJ5Q2hhbmdlLCAwKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ3YW50c1wiOlxuICAgICAgICAgIHNldFdhbnRzUmF0aW8oTWF0aC5tYXgod2FudHNSYXRpbyArIHByaW1hcnlDaGFuZ2UsIDApKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNhdmluZ3NcIjpcbiAgICAgICAgICBzZXRTYXZpbmdzUmF0aW8oTWF0aC5tYXgoc2F2aW5nc1JhdGlvICsgcHJpbWFyeUNoYW5nZSwgMCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNlY29uZGFyeVR5cGUpIHtcbiAgICAgICAgY2FzZSBcImVzc2VudGlhbHNcIjpcbiAgICAgICAgICBzZXRFc3NlbnRpYWxzUmF0aW8oTWF0aC5tYXgoZXNzZW50aWFsc1JhdGlvICsgc2Vjb25kYXJ5Q2hhbmdlLCAwKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ3YW50c1wiOlxuICAgICAgICAgIHNldFdhbnRzUmF0aW8oTWF0aC5tYXgod2FudHNSYXRpbyArIHNlY29uZGFyeUNoYW5nZSwgMCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2F2aW5nc1wiOlxuICAgICAgICAgIHNldFNhdmluZ3NSYXRpbyhNYXRoLm1heChzYXZpbmdzUmF0aW8gKyBzZWNvbmRhcnlDaGFuZ2UsIDApKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiZXNzZW50aWFsc1wiOlxuICAgICAgICBpZiAoY2hhbmdlID4gMCkge1xuICAgICAgICAgIGFsbG9jYXRlQ2hhbmdlKFwid2FudHNcIiwgXCJzYXZpbmdzXCIsIC1jaGFuZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbG9jYXRlQ2hhbmdlKFwic2F2aW5nc1wiLCBcIndhbnRzXCIsIC1jaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHNldEVzc2VudGlhbHNSYXRpbyhuZXdWYWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIndhbnRzXCI6XG4gICAgICAgIGlmIChjaGFuZ2UgPiAwKSB7XG4gICAgICAgICAgYWxsb2NhdGVDaGFuZ2UoXCJlc3NlbnRpYWxzXCIsIFwic2F2aW5nc1wiLCAtY2hhbmdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxvY2F0ZUNoYW5nZShcInNhdmluZ3NcIiwgXCJlc3NlbnRpYWxzXCIsIC1jaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHNldFdhbnRzUmF0aW8obmV3VmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzYXZpbmdzXCI6XG4gICAgICAgIGlmIChjaGFuZ2UgPiAwKSB7XG4gICAgICAgICAgYWxsb2NhdGVDaGFuZ2UoXCJlc3NlbnRpYWxzXCIsIFwid2FudHNcIiwgLWNoYW5nZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsb2NhdGVDaGFuZ2UoXCJ3YW50c1wiLCBcImVzc2VudGlhbHNcIiwgLWNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2F2aW5nc1JhdGlvKG5ld1ZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG4gIGNvbnN0IFtjaGFuZ2VCdWRnZXRTcGxpdCwgc2V0Q2hhbmdlQnVkZ2V0U3BsaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gcmVsYXRpdmVcIj5cbiAgICAgIDxOYXZCYXJcbiAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB0LTYgcGItMiBwci02XCI+XG4gICAgICAgICAgICA8QXJyb3dCYWNrQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGgtcHggYmctc2tpbi1hY2NlbnQzXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0zIGl0ZW1zLWxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgaC0xMSB3LTExIGJnLXNraW4taWNvblByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtMy41XCI+XG4gICAgICAgICAgPEZpUGllQ2hhcnQgY29sb3I9XCIjNTU1NDY2XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jdXN0b20gZm9udC1tZWRpdW0gdGV4dC0yeGwgdGV4dC1za2luLWJhc2UgbXQtMS41IG14LTMuNVwiPlxuICAgICAgICAgIFdob29wISBIZXJlIGlzIHlvdXIgcmVjb21tZW5kZWQgYnVkZ2V0IHNwbGl0LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hZGRJbmNvbWVCZyBiZy1jb3ZlciBiZy1uby1yZXBlYXQgaC0zNiBiZy1yaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXByaW1hcnkgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctd2lkZSBtdC02IGZvbnQtcmVndWxhciBteC0zLjVcIj5cbiAgICAgICAgICAgIEhlcmUncyBhIGJyZWFrZG93biBvZiBob3cgbXVjaCB5b3UgY2FuIHNwZW5kIG9uIEVzc2VudGlhbHMgYW5kIFdhbnRzXG4gICAgICAgICAgICB3aGlsZSBzdGF5aW5nIG9uIHRyYWNrIHRvIGJlY29taW5nIGRlYnQgZnJlZS4gRmVlbCBmcmVlIHRvIGVkaXRcbiAgICAgICAgICAgIEVzc2VudGlhbHMgYW5kIFdhbnRzIGFjY29yZGluZyB0byB5b3VyIGxpZmVzdHlsZSBwcmVmZXJlbmNlLlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMTIgbXgtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLXN0YXJ0IGZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LXNraW4tYmFzZVwiPlxuICAgICAgICAgICAgICBEZWJ0IHJlcGF5bWVudFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSBmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1za2luLWJhc2VcIj5cbiAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlSW5jb21lQW1vdW50KHNhdmluZ3NSYXRpbyk/LnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIil9XG4gICAgICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJhbGlnbi1zdXBlciAtbWwtMSB0ZXh0LXh4eHNcIj5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/PyBcIlwifVxuICAgICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgIDxSZWFjdFNsaWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzYXZpbmdzUmF0aW99XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbC1zbGlkZXJcIlxuICAgICAgICAgICAgICAgIG1hcmtzPXtnZW5lcmF0ZVNsaWRlclZhbHVlcygpfVxuICAgICAgICAgICAgICAgIG1hcmtDbGFzc05hbWU9XCJleGFtcGxlLW1hcmtcIlxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgICAgICB0aHVtYkNsYXNzTmFtZT1cImV4YW1wbGUtdGh1bWJcIlxuICAgICAgICAgICAgICAgIHRyYWNrQ2xhc3NOYW1lPVwiZXhhbXBsZS10cmFja1wiXG4gICAgICAgICAgICAgICAgcmVuZGVyVGh1bWI9eyhwcm9wcywgc3RhdGUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXJUaHVtYkNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZU5vdz17c3RhdGUudmFsdWVOb3d9XG4gICAgICAgICAgICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgICAgICAgICAgICAgc2hvd1BlcmNlbnRhZ2U9e3Nob3dQZXJjZW50YWdlfVxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMDM2QUIzXCJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25CZWZvcmVDaGFuZ2U9eygpID0+IHNldFNob3dQZXJjZW50YWdlKHRydWUpfVxuICAgICAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9eygpID0+IHNldFNob3dQZXJjZW50YWdlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUsIFwic2F2aW5nc1wiKTtcbiAgICAgICAgICAgICAgICAgIHNldENoYW5nZUJ1ZGdldFNwbGl0KHRydWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLXN0YXJ0IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEyJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtZW5kIHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEyJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShtb250aGx5SW5jb21lKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgPERlYnRJbmZvXG4gICAgICAgICAgICAgIGxvYW5WYWx1ZT17Y2FsY3VsYXRlSW5jb21lQW1vdW50KHNhdmluZ3NSYXRpbyl9XG4gICAgICAgICAgICAgIGN1cnJlbmN5PXtjdXJyZW5jeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00IHctZnVsbCBtdC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1zdGFydCBmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1za2luLWJhc2VcIj5cbiAgICAgICAgICAgICAgRXNzZW50aWFsc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1lbmQgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jdXN0b20gdGV4dC0yeGwgdGV4dC1za2luLWJhc2VcIj5cbiAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlSW5jb21lQW1vdW50KGVzc2VudGlhbHNSYXRpbyk/LnRvTG9jYWxlU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgXCJlbi11c1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3VwIGNsYXNzTmFtZT1cImFsaWduLXN1cGVyIC1tbC0xIHRleHQteHh4c1wiPlxuICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8/IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9zdXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgPFJlYWN0U2xpZGVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Vzc2VudGlhbHNSYXRpb31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsLXNsaWRlclwiXG4gICAgICAgICAgICAgICAgbWFya3M9e2dlbmVyYXRlU2xpZGVyVmFsdWVzKCl9XG4gICAgICAgICAgICAgICAgbWFya0NsYXNzTmFtZT1cImV4YW1wbGUtbWFya1wiXG4gICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICAgIHRodW1iQ2xhc3NOYW1lPVwiZXhhbXBsZS10aHVtYlwiXG4gICAgICAgICAgICAgICAgdHJhY2tDbGFzc05hbWU9XCJlc3NlbnRpYWwtdHJhY2tcIlxuICAgICAgICAgICAgICAgIHJlbmRlclRodW1iPXsocHJvcHMsIHN0YXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyVGh1bWJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVOb3c9e3N0YXRlLnZhbHVlTm93fVxuICAgICAgICAgICAgICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHNob3dQZXJjZW50YWdlPXtzaG93UGVyY2VudGFnZX1cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzAwOUZEQ1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25CZWZvcmVDaGFuZ2U9eygpID0+IHNldFNob3dQZXJjZW50YWdlKHRydWUpfVxuICAgICAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9eygpID0+IHNldFNob3dQZXJjZW50YWdlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUsIFwiZXNzZW50aWFsc1wiKTtcbiAgICAgICAgICAgICAgICAgIHNldENoYW5nZUJ1ZGdldFNwbGl0KHRydWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLXN0YXJ0IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEyJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtZW5kIHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEyJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShtb250aGx5SW5jb21lKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCB3LWZ1bGwgbXQtNiBtYi0zMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtc3RhcnQgZm9udC1ib2xkIHRleHQtMnhsIHRleHQtc2tpbi1iYXNlXCI+XG4gICAgICAgICAgICAgIFdhbnRzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWVuZCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSB0ZXh0LTJ4bCB0ZXh0LXNraW4tYmFzZVwiPlxuICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVJbmNvbWVBbW91bnQod2FudHNSYXRpbyk/LnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIil9XG4gICAgICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJhbGlnbi1zdXBlciAtbWwtMSB0ZXh0LXh4eHNcIj5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/PyBcIlwifVxuICAgICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgIDxSZWFjdFNsaWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt3YW50c1JhdGlvfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvcml6b250YWwtc2xpZGVyXCJcbiAgICAgICAgICAgICAgICBtYXJrcz17Z2VuZXJhdGVTbGlkZXJWYWx1ZXMoKX1cbiAgICAgICAgICAgICAgICBtYXJrQ2xhc3NOYW1lPVwiZXhhbXBsZS1tYXJrXCJcbiAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgICAgdGh1bWJDbGFzc05hbWU9XCJleGFtcGxlLXRodW1iXCJcbiAgICAgICAgICAgICAgICB0cmFja0NsYXNzTmFtZT1cIndhbnRzLXRyYWNrXCJcbiAgICAgICAgICAgICAgICByZW5kZXJUaHVtYj17KHByb3BzLCBzdGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlTm93PXtzdGF0ZS52YWx1ZU5vd31cbiAgICAgICAgICAgICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAgICAgICAgICAgICBzaG93UGVyY2VudGFnZT17c2hvd1BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMzNTRBQTZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQmVmb3JlQ2hhbmdlPXsoKSA9PiBzZXRTaG93UGVyY2VudGFnZSh0cnVlKX1cbiAgICAgICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXsoKSA9PiBzZXRTaG93UGVyY2VudGFnZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlLCBcIndhbnRzXCIpO1xuICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlQnVkZ2V0U3BsaXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtc3RhcnQgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCItMTIlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1lbmQgdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCItMTIlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KG1vbnRobHlJbmNvbWUpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS01IGxlZnQtMCByaWdodC0wIG14LTMuNSB0ZXh0LXNtIHotMTBcIj5cbiAgICAgICAgICB7Y2hhbmdlQnVkZ2V0U3BsaXQgPyAoXG4gICAgICAgICAgICA8TWFpbkJ1dHRvblxuICAgICAgICAgICAgICB0aXRsZT1cIlNhdmVcIlxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgLy8gbG9hZGluZz17fVxuICAgICAgICAgICAgICBjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1ZGdldFNldHRpbmdzU3RvcmUuc2V0SW5jb21lU3BsaXQoe1xuICAgICAgICAgICAgICAgICAgZXNzZW50aWFsczogZXNzZW50aWFsc1JhdGlvLFxuICAgICAgICAgICAgICAgICAgd2FudHM6IHdhbnRzUmF0aW8sXG4gICAgICAgICAgICAgICAgICBzYXZpbmdzOiBzYXZpbmdzUmF0aW8sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcG9zdEFsbE1hY3JvcygpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICAgICAgdGl0bGU9XCJTYXZlXCJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgLy8gbG9hZGluZz17fVxuICAgICAgICAgICAgICBjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1ZGdldFNldHRpbmdzU3RvcmUuc2V0SW5jb21lU3BsaXQoe1xuICAgICAgICAgICAgICAgICAgZXNzZW50aWFsczogZXNzZW50aWFsc1JhdGlvLFxuICAgICAgICAgICAgICAgICAgd2FudHM6IHdhbnRzUmF0aW8sXG4gICAgICAgICAgICAgICAgICBzYXZpbmdzOiBzYXZpbmdzUmF0aW8sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcG9zdEFsbE1hY3JvcygpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFNwbGl0SW5jb21lO1xuIiwiaW1wb3J0IHsgRmlBcnJvd0xlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbnR5cGUgQXJyb3dCYWNrQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xufTtcbmNvbnN0IEFycm93QmFja0J1dHRvbiA9ICh7IG9uQ2xpY2ssIGJhY2tncm91bmQgfTogQXJyb3dCYWNrQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgcC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyb3VuZGVkLWZ1bGwgJHtiYWNrZ3JvdW5kfWB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxGaUFycm93TGVmdCBjb2xvcj1cIiMxMDEwMTBcIiBzaXplPVwiMS40Mzc1cmVtXCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcnJvd0JhY2tCdXR0b247XG4iLCJpbXBvcnQgeyBJb0lvc0luZm9ybWF0aW9uQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuXG50eXBlIERlYnRJbmZvUHJvcHMgPSB7XG4gIGxvYW5WYWx1ZTogYW55O1xuICBjdXJyZW5jeTogc3RyaW5nO1xufTtcblxuY29uc3QgRGVidEluZm8gPSAoeyBsb2FuVmFsdWUsIGN1cnJlbmN5IH06IERlYnRJbmZvUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcm91bmRlZC1sZyBweS00IHBsLTMuNSBwci0zLjUgYmctc2tpbi1hY2NlbnQyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPElvSW9zSW5mb3JtYXRpb25DaXJjbGVPdXRsaW5lIGNvbG9yPVwiIzEwMTAxMFwiIHNpemU9XCIxcmVtXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1sLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXByaW1hcnkgdGV4dC14cyB0cmFja2luZy1saXN0dGlsZV9zdWJ0aXRsZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIFlvdSBjdXJyZW50bHkgaGF2ZSBhY3RpdmUgbG9hbnMgd2l0aCBhIGNvbWJpbmVkIHJlcGF5bWVudCBvZntcIiBcIn1cbiAgICAgICAgICB7bG9hblZhbHVlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIil9XG4gICAgICAgICAgPHN1cD57Y3VycmVuY3l9PC9zdXA+LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVidEluZm87XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaU1vcmVWZXJ0aWNhbCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgR29Mb2NrIH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XG5cbmludGVyZmFjZSBTbGlkZXJUaHVtYkNvbXBvbmVudFByb3BzIHtcbiAgdmFsdWVOb3c6IG51bWJlcjtcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBpc0xvY2tlZD86IGJvb2xlYW47XG4gIHNob3dQZXJjZW50YWdlPzogYm9vbGVhbjtcbiAgcHJvcHM/OiBhbnk7XG59XG5cbmNvbnN0IFNsaWRlclRodW1iQ29tcG9uZW50OiBSZWFjdC5GQzxTbGlkZXJUaHVtYkNvbXBvbmVudFByb3BzPiA9ICh7XG4gIHZhbHVlTm93LFxuICBzaG93UGVyY2VudGFnZSxcbiAgaXNMb2NrZWQsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgcHJvcHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLnByb3BzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4ucHJvcHM/LnN0eWxlLFxuICAgICAgICBoZWlnaHQ6IFwiMjdweFwiLFxuICAgICAgICB3aWR0aDogXCIyN3B4XCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogXCIxOXB4XCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTlweFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciA/IGJhY2tncm91bmRDb2xvciA6IFwiIzE0NENCQ1wiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIi0zcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2lzTG9ja2VkID8gKFxuICAgICAgICAgIDxHb0xvY2sgY29sb3I9XCJ3aGl0ZVwiIGhlaWdodD17MTV9IHdpZHRoPXs1fSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlNb3JlVmVydGljYWxcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD17MTV9XG4gICAgICAgICAgICAgIHdpZHRoPXs1fVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCItOHB4XCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmlNb3JlVmVydGljYWxcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD17MTV9XG4gICAgICAgICAgICAgIHdpZHRoPXs1fVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjFweFwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBib3R0b206IFwiMTEwJVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIixcbiAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c2hvd1BlcmNlbnRhZ2UgPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMTAxMDEwXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiOHB4XCIsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUG9wcGluc1wiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ZhbHVlTm93fSVcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogXCItNHB4XCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJUb3A6IFwiNnB4IHNvbGlkICMxMDEwMTBcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCI2cHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjZweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlclRodW1iQ29tcG9uZW50O1xuIiwiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcblxuaW50ZXJmYWNlIEluY29tZVNwbGl0IHtcbiAgZXNzZW50aWFsczogbnVtYmVyO1xuICB3YW50czogbnVtYmVyO1xuICBzYXZpbmdzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBCdWRnZXRTZXR0aW5ncyB7XG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIG1vbnRobHlJbmNvbWU6IG51bWJlcjtcbiAgaW5jb21lU3BsaXQ6IEluY29tZVNwbGl0O1xufVxuXG50eXBlIElCdWRnZXRTZXR0aW5nc1N0b3JlID0gQnVkZ2V0U2V0dGluZ3MgJiB7XG4gIHNldE1vbnRobHlJbmNvbWU6IChhbW91bnQ6IG51bWJlcikgPT4gdm9pZDtcbiAgc2V0SW5jb21lU3BsaXQ6IChzcGxpdDogSW5jb21lU3BsaXQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCB1c2VCdWRnZXRTZXR0aW5nc1N0b3JlID0gY3JlYXRlPElCdWRnZXRTZXR0aW5nc1N0b3JlPigoc2V0KSA9PiAoe1xuICBjdXJyZW5jeTogXCIgS0VTXCIsXG4gIG1vbnRobHlJbmNvbWU6IDAsXG4gIGluY29tZVNwbGl0OiB7XG4gICAgZXNzZW50aWFsczogNTAsXG4gICAgd2FudHM6IDMwLFxuICAgIHNhdmluZ3M6IDIwLFxuICB9LFxuICBzZXRNb250aGx5SW5jb21lOiAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb250aGx5SW5jb21lOiBhbW91bnQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0TW9udGhseUluY29tZTogKCkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBCdWRnZXRTZXR0aW5ncykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBCdWRnZXRTZXR0aW5ncyA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1vbnRobHlJbmNvbWU6IHN0YXRlLm1vbnRobHlJbmNvbWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0SW5jb21lU3BsaXQ6IChzcGxpdDogSW5jb21lU3BsaXQpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbmNvbWVTcGxpdDogc3BsaXQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0SW5jb21lU3BsaXQ6ICgpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbmNvbWVTcGxpdDogc3RhdGUuaW5jb21lU3BsaXQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbn0pKTtcblxuZXhwb3J0IHtcbiAgSW5jb21lU3BsaXQsXG4gIEJ1ZGdldFNldHRpbmdzLFxuICBJQnVkZ2V0U2V0dGluZ3NTdG9yZSxcbiAgdXNlQnVkZ2V0U2V0dGluZ3NTdG9yZSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=