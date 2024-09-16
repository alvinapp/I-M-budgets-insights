"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_onboarding_OnboardingSplitIncome_tsx"],{

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

/***/ "./src/client/api/users.ts":
/*!*********************************!*\
  !*** ./src/client/api/users.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeOnboarding: () => (/* binding */ completeOnboarding),
/* harmony export */   setIncome: () => (/* binding */ setIncome)
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


const setIncome = ({ incomeAmount, configuration, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
            endpoint: "/users/income",
            token: configuration.token,
            data: { amount: incomeAmount },
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
const completeOnboarding = ({ completionTime, configuration, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
            endpoint: "/users/onboarded",
            token: configuration.token,
            data: { at: completionTime },
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

/***/ "./src/client/pages/onboarding/OnboardingSplitIncome.tsx":
/*!***************************************************************!*\
  !*** ./src/client/pages/onboarding/OnboardingSplitIncome.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_api_goals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/api/goals */ "./src/client/api/goals.ts");
/* harmony import */ var client_api_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/api/users */ "./src/client/api/users.ts");
/* harmony import */ var client_store_bottomSheetStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/bottomSheetStore */ "./src/client/store/bottomSheetStore.ts");
/* harmony import */ var client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/budgetSettingsStore */ "./src/client/store/budgetSettingsStore.ts");
/* harmony import */ var client_store_categoriesStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/store/categoriesStore */ "./src/client/store/categoriesStore.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs");
/* harmony import */ var _components_ArrowBack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ArrowBack */ "./src/client/pages/components/ArrowBack.tsx");
/* harmony import */ var _components_DebtInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/DebtInfo */ "./src/client/pages/components/DebtInfo.tsx");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/SliderThumbComponent */ "./src/client/pages/components/SliderThumbComponent.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



















const OnboardingSplitIncome = () => {
    var _a, _b, _c, _d, _e;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)((state) => state.configuration);
    const bottomSheetStore = (0,client_store_bottomSheetStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state);
    const budgetSettingsStore = (0,client_store_budgetSettingsStore__WEBPACK_IMPORTED_MODULE_6__.useBudgetSettingsStore)();
    const categoriesStore = (0,client_store_categoriesStore__WEBPACK_IMPORTED_MODULE_7__["default"])((state) => state);
    const userStore = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_8__["default"])((state) => state);
    const { currency, incomeSplit } = budgetSettingsStore;
    const [monthlyIncome, setMonthlyIncomeValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(budgetSettingsStore.monthlyIncome || userStore.user.income);
    const split = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_9__.reformatBudgetSplit)((_b = (_a = categoriesStore.macros) === null || _a === void 0 ? void 0 : _a.budget_split) !== null && _b !== void 0 ? _b : "");
    const [essentialsRatio, setEssentialsRatio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(split ? parseInt(split[0]) : 30);
    const [wantsRatio, setWantsRatio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(split ? parseInt(split[1]) : 25);
    const [savingsRatio, setSavingsRatio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(split ? parseInt(split[2]) : 45);
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
    const saveOnboardingData = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0,client_api_users__WEBPACK_IMPORTED_MODULE_10__.setIncome)({ incomeAmount: monthlyIncome, configuration });
        const macros = [
            ["Essentials", essentialsRatio],
            ["Wants", wantsRatio],
            ["Savings", savingsRatio],
        ];
        for (let i = 0; i < macros.length; i++) {
            const [macroType, macroRatio] = macros[i];
            yield (0,client_api_goals__WEBPACK_IMPORTED_MODULE_11__.setMacro)({
                goalMacro: {
                    name: `${macroType} Total`,
                    type_name: macroType,
                    amount: calculateIncomeAmount(macroRatio),
                    percentage: 0,
                    share: macroRatio,
                    reset_micros: false,
                },
                configuration,
            });
        }
        yield (0,client_api_users__WEBPACK_IMPORTED_MODULE_10__.completeOnboarding)({ completionTime: new Date(), configuration });
    });
    const postAllMacros = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0,client_api_users__WEBPACK_IMPORTED_MODULE_10__.setIncome)({ incomeAmount: monthlyIncome, configuration });
            const macros = [
                ["Essentials", essentialsRatio],
                ["Wants", wantsRatio],
                ["Savings", savingsRatio],
            ];
            for (let i = 0; i < macros.length; i++) {
                const [macroType, macroRatio] = macros[i];
                yield (0,client_api_goals__WEBPACK_IMPORTED_MODULE_11__.setMacro)({
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
            yield (0,client_api_users__WEBPACK_IMPORTED_MODULE_10__.completeOnboarding)({ completionTime: new Date(), configuration });
            if (userStore.user.is_onboarded) {
                navigate("/budget-settings");
            }
            else {
                navigate("/onboard-success");
            }
        }
        catch (error) {
            console.error(error);
            // Handle the error
        }
    });
    const handleSliderChange = (newValue, type) => {
        const totalRatio = 100;
        const fixedSavingsRatio = 45; // Fixed savings ratio
        if (type === "savings") {
            console.error("Savings ratio is fixed and cannot be changed.");
            return; // Prevent any changes to savings
        }
        const oldValue = type === "essentials" ? essentialsRatio : wantsRatio;
        const change = newValue - oldValue;
        if (newValue === totalRatio - fixedSavingsRatio) {
            if (type === "essentials") {
                setWantsRatio(0);
            }
            else if (type === "wants") {
                setEssentialsRatio(0);
            }
            setSavingsRatio(fixedSavingsRatio);
            return;
        }
        if (oldValue === totalRatio - fixedSavingsRatio) {
            const adjustedRatio = totalRatio - fixedSavingsRatio - newValue;
            if (type === "essentials") {
                setWantsRatio(adjustedRatio);
            }
            else if (type === "wants") {
                setEssentialsRatio(adjustedRatio);
            }
            setSavingsRatio(fixedSavingsRatio);
            return;
        }
        const allocateChange = (change) => {
            // Proportionally allocate change to the non-affected ratio
            if (type === "essentials") {
                setWantsRatio(Math.max(wantsRatio - change, 0));
            }
            else if (type === "wants") {
                setEssentialsRatio(Math.max(essentialsRatio - change, 0));
            }
        };
        // Apply the new value and allocate change to the other ratio
        if (type === "essentials") {
            setEssentialsRatio(Math.max(newValue, 0));
            allocateChange(change);
        }
        else if (type === "wants") {
            setWantsRatio(Math.max(newValue, 0));
            allocateChange(change);
        }
        // Ensure savings ratio is always fixed at 45
        setSavingsRatio(fixedSavingsRatio);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-between pt-6 pb-2 pr-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ArrowBack__WEBPACK_IMPORTED_MODULE_13__["default"], { onClick: () => navigate(-1) }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-3 items-left" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiPieChart, { color: "#555466" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom font-bold text-2xl text-skin-base mt-1.5 mx-3.5" }, { children: "Whoop! Here is your recommended budget split." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-sm font-primary text-skin-base tracking-wide mt-4 font-medium mx-3.5" }, { children: ["Here's a breakdown of how much you can spend on Essentials and Wants while staying on track to becoming debt free. Feel free to edit Essentials and Wants according to your lifestyle preference.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-12 mx-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "grid grid-cols-2 gap-4 w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start font-bold text-2xl text-skin-base" }, { children: "Debt repayment" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom font-bold text-2xl text-skin-base" }, { children: [(_c = calculateIncomeAmount(savingsRatio)) === null || _c === void 0 ? void 0 : _c.toLocaleString("en-us"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: "align-super -ml-1 text-xxxs" }, { children: currency !== null && currency !== void 0 ? currency : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-span-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_15__["default"], { value: savingsRatio, className: "horizontal-slider", marks: generateSliderValues(), markClassName: "example-mark", min: 0, max: 100, thumbClassName: "example-thumb", trackClassName: "example-track", renderThumb: (props, state) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_16__["default"], { valueNow: state.valueNow, props: props, showPercentage: showPercentage, backgroundColor: "#036AB3", isLocked: true })), onBeforeChange: () => setShowPercentage(true), onAfterChange: () => setShowPercentage(false), onChange: (value) => handleSliderChange(value, "savings"), disabled: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: "0" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_9__.formatCurrency)(monthlyIncome) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DebtInfo__WEBPACK_IMPORTED_MODULE_17__["default"], { loanValue: calculateIncomeAmount(savingsRatio), currency: currency }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "grid grid-cols-2 gap-4 w-full mt-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start font-bold text-2xl text-skin-base" }, { children: "Essentials" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end font-bold" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-2xl text-skin-base" }, { children: [(_d = calculateIncomeAmount(essentialsRatio)) === null || _d === void 0 ? void 0 : _d.toLocaleString("en-us"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: "align-super -ml-1 text-xxxs" }, { children: currency !== null && currency !== void 0 ? currency : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-span-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_15__["default"], { value: essentialsRatio, className: "horizontal-slider", marks: generateSliderValues(), markClassName: "example-mark", min: 0, max: 100, thumbClassName: "example-thumb", trackClassName: "essential-track", renderThumb: (props, state) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_16__["default"], { valueNow: state.valueNow, props: props, showPercentage: showPercentage, backgroundColor: "#009FDC" })), onBeforeChange: () => setShowPercentage(true), onAfterChange: () => setShowPercentage(false), onChange: (value) => handleSliderChange(value, "essentials") }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: "0" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_9__.formatCurrency)(monthlyIncome) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "grid grid-cols-2 gap-4 w-full mt-6 mb-32" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start font-bold text-2xl text-skin-base" }, { children: "Wants" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end font-bold" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "font-custom text-2xl text-skin-base" }, { children: [(_e = calculateIncomeAmount(wantsRatio)) === null || _e === void 0 ? void 0 : _e.toLocaleString("en-us"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", Object.assign({ className: "align-super -ml-1 text-xxxs" }, { children: currency !== null && currency !== void 0 ? currency : "" }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-span-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_15__["default"], { value: wantsRatio, className: "horizontal-slider", marks: generateSliderValues(), markClassName: "example-mark", min: 0, max: 100, thumbClassName: "example-thumb", trackClassName: "wants-track", renderThumb: (props, state) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SliderThumbComponent__WEBPACK_IMPORTED_MODULE_16__["default"], { valueNow: state.valueNow, props: props, showPercentage: showPercentage, backgroundColor: "#354AA6" })), onBeforeChange: () => setShowPercentage(true), onAfterChange: () => setShowPercentage(false), onChange: (value) => handleSliderChange(value, "wants") }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-start text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: "0" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "justify-self-end text-xs text-skin-subtitle font-semibold", style: { marginTop: "-12%" } }, { children: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_9__.formatCurrency)(monthlyIncome) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-5 left-0 right-0 mx-3.5 text-sm z-10" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_18__["default"], { title: "Continue", isDisabled: false, click: () => {
                                budgetSettingsStore.setIncomeSplit({
                                    essentials: essentialsRatio,
                                    wants: wantsRatio,
                                    savings: savingsRatio,
                                });
                                postAllMacros();
                            } }) }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingSplitIncome);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19vbmJvYXJkaW5nX09uYm9hcmRpbmdTcGxpdEluY29tZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ1M7QUFhbkMsTUFBTSxRQUFRLEdBQUcsQ0FBTyxFQUM3QixTQUFTLEVBQ1QsYUFBYSxHQUlkLEVBQUUsRUFBRTtJQUNILElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLDhDQUFRLENBQUM7WUFDekIsUUFBUSxFQUFFLGVBQWU7WUFDekIsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1lBQzFCLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFBQyxPQUFPLE1BQVcsRUFBRTtRQUNwQiw2REFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakN3QztBQUNBO0FBR25DLE1BQU0sU0FBUyxHQUFHLENBQU8sRUFDOUIsWUFBWSxFQUNaLGFBQWEsR0FJZCxFQUFFLEVBQUU7SUFDSCxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSw4Q0FBUSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztZQUMxQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1NBQy9CLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFBQyxPQUFPLE1BQVcsRUFBRTtRQUNwQiw2REFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxD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SUFDTCxDQUFDO0lBQ0QsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtZQUNuQyxNQUFNLE1BQU0sbUNBQ1AsS0FBSyxLQUNSLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxHQUMvQixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFPRiIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9hcGkvZ29hbHMudHMiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L2FwaS91c2Vycy50cyIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9BcnJvd0JhY2sudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0RlYnRJbmZvLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9TbGlkZXJUaHVtYkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL29uYm9hcmRpbmcvT25ib2FyZGluZ1NwbGl0SW5jb21lLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvc3RvcmUvYnVkZ2V0U2V0dGluZ3NTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBwb3N0RGF0YSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L2Jyb3dzZXJcIjtcblxuZXhwb3J0IHR5cGUgR29hbE1hY3JvVHlwZSA9IFwiV2FudHNcIiB8IFwiRXNzZW50aWFsc1wiIHwgXCJTYXZpbmdzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29hbE1hY3JvIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlX25hbWU6IEdvYWxNYWNyb1R5cGU7XG4gIGFtb3VudDogbnVtYmVyO1xuICBwZXJjZW50YWdlOiBudW1iZXI7XG4gIHNoYXJlOiBudW1iZXI7XG4gIHJlc2V0X21pY3JvczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IHNldE1hY3JvID0gYXN5bmMgKHtcbiAgZ29hbE1hY3JvLFxuICBjb25maWd1cmF0aW9uLFxufToge1xuICBnb2FsTWFjcm86IEdvYWxNYWNybztcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSh7XG4gICAgICBlbmRwb2ludDogXCIvZ29hbHMvbWFjcm9zXCIsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgIGRhdGE6IGdvYWxNYWNybyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59OyIsImltcG9ydCB7IElDb25maWcgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IHBvc3REYXRhLCBwdXREYXRhIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvYnJvd3NlclwiO1xuXG5cbmV4cG9ydCBjb25zdCBzZXRJbmNvbWUgPSBhc3luYyAoe1xuICBpbmNvbWVBbW91bnQsXG4gIGNvbmZpZ3VyYXRpb24sXG59OiB7XG4gIGluY29tZUFtb3VudDogbnVtYmVyO1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKHtcbiAgICAgIGVuZHBvaW50OiBcIi91c2Vycy9pbmNvbWVcIixcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgICAgZGF0YTogeyBhbW91bnQ6IGluY29tZUFtb3VudCB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb21wbGV0ZU9uYm9hcmRpbmcgPSBhc3luYyAoe1xuICBjb21wbGV0aW9uVGltZSxcbiAgY29uZmlndXJhdGlvbixcbn06IHtcbiAgY29tcGxldGlvblRpbWU6IERhdGUsXG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG59KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJzL29uYm9hcmRlZFwiLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgICBkYXRhOiB7IGF0OiBjb21wbGV0aW9uVGltZSB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBGaUFycm93TGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xudHlwZSBBcnJvd0JhY2tCdXR0b25Qcm9wcyA9IHtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG59O1xuY29uc3QgQXJyb3dCYWNrQnV0dG9uID0gKHsgb25DbGljaywgYmFja2dyb3VuZCB9OiBBcnJvd0JhY2tCdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtZnVsbCBwLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJvdW5kZWQtZnVsbCAke2JhY2tncm91bmR9YH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPEZpQXJyb3dMZWZ0IGNvbG9yPVwiIzEwMTAxMFwiIHNpemU9XCIxLjQzNzVyZW1cIiAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFycm93QmFja0J1dHRvbjtcbiIsImltcG9ydCB7IElvSW9zSW5mb3JtYXRpb25DaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5cbnR5cGUgRGVidEluZm9Qcm9wcyA9IHtcbiAgbG9hblZhbHVlOiBhbnk7XG4gIGN1cnJlbmN5OiBzdHJpbmc7XG59O1xuXG5jb25zdCBEZWJ0SW5mbyA9ICh7IGxvYW5WYWx1ZSwgY3VycmVuY3kgfTogRGVidEluZm9Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyByb3VuZGVkLWxnIHB5LTQgcGwtMy41IHByLTMuNSBiZy1za2luLWFjY2VudDJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8SW9Jb3NJbmZvcm1hdGlvbkNpcmNsZU91dGxpbmUgY29sb3I9XCIjMTAxMDEwXCIgc2l6ZT1cIjFyZW1cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWwtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcHJpbWFyeSB0ZXh0LXhzIHRyYWNraW5nLWxpc3R0aWxlX3N1YnRpdGxlIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgWW91IGN1cnJlbnRseSBoYXZlIGFjdGl2ZSBsb2FucyB3aXRoIGEgY29tYmluZWQgcmVwYXltZW50IG9me1wiIFwifVxuICAgICAgICAgIHtsb2FuVmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKX1cbiAgICAgICAgICA8c3VwPntjdXJyZW5jeX08L3N1cD4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWJ0SW5mbztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpTW9yZVZlcnRpY2FsIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBHb0xvY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcblxuaW50ZXJmYWNlIFNsaWRlclRodW1iQ29tcG9uZW50UHJvcHMge1xuICB2YWx1ZU5vdzogbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIGlzTG9ja2VkPzogYm9vbGVhbjtcbiAgc2hvd1BlcmNlbnRhZ2U/OiBib29sZWFuO1xuICBwcm9wcz86IGFueTtcbn1cblxuY29uc3QgU2xpZGVyVGh1bWJDb21wb25lbnQ6IFJlYWN0LkZDPFNsaWRlclRodW1iQ29tcG9uZW50UHJvcHM+ID0gKHtcbiAgdmFsdWVOb3csXG4gIHNob3dQZXJjZW50YWdlLFxuICBpc0xvY2tlZCxcbiAgYmFja2dyb3VuZENvbG9yLFxuICBwcm9wcyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5wcm9wcz8uc3R5bGUsXG4gICAgICAgIGhlaWdodDogXCIyN3B4XCIsXG4gICAgICAgIHdpZHRoOiBcIjI3cHhcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBcIjE5cHhcIixcbiAgICAgICAgICB3aWR0aDogXCIxOXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yID8gYmFja2dyb3VuZENvbG9yIDogXCIjMTQ0Q0JDXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW46IFwiLTNweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aXNMb2NrZWQgPyAoXG4gICAgICAgICAgPEdvTG9jayBjb2xvcj1cIndoaXRlXCIgaGVpZ2h0PXsxNX0gd2lkdGg9ezV9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGaU1vcmVWZXJ0aWNhbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNX1cbiAgICAgICAgICAgICAgd2lkdGg9ezV9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIi04cHhcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaU1vcmVWZXJ0aWNhbFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNX1cbiAgICAgICAgICAgICAgd2lkdGg9ezV9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXB4XCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIGJvdHRvbTogXCIxMTAlXCIsXG4gICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtzaG93UGVyY2VudGFnZSA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxMDEwMTBcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCI4cHhcIixcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJQb3BwaW5zXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmFsdWVOb3d9JVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgYm90dG9tOiBcIi00cHhcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC01MCUpXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogXCI2cHggc29saWQgIzEwMTAxMFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBcIjZweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiNnB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyVGh1bWJDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpUGllQ2hhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgR29hbE1hY3JvVHlwZSwgc2V0TWFjcm8gfSBmcm9tIFwiY2xpZW50L2FwaS9nb2Fsc1wiO1xuaW1wb3J0IHsgY29tcGxldGVPbmJvYXJkaW5nLCBzZXRJbmNvbWUgfSBmcm9tIFwiY2xpZW50L2FwaS91c2Vyc1wiO1xuaW1wb3J0IHVzZUJvdHRvbVNoZWV0U3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9ib3R0b21TaGVldFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VCdWRnZXRTZXR0aW5nc1N0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9idWRnZXRTZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgdXNlQ2F0ZWdvcmllc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvY2F0ZWdvcmllc1N0b3JlXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VVc2VyU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS91c2VyU3RvcmVcIjtcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCByZWZvcm1hdEJ1ZGdldFNwbGl0IH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xuaW1wb3J0IFJlYWN0U2xpZGVyIGZyb20gXCJyZWFjdC1zbGlkZXJcIjtcbmltcG9ydCBBcnJvd0JhY2tCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJyb3dCYWNrXCI7XG5pbXBvcnQgRGVidEluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvRGVidEluZm9cIjtcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5CdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgU2xpZGVyVGh1bWJDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVyVGh1bWJDb21wb25lbnRcIjtcblxuY29uc3QgT25ib2FyZGluZ1NwbGl0SW5jb21lID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvbmZpZ3VyYXRpb25cbiAgKSBhcyBJQ29uZmlnO1xuICBjb25zdCBib3R0b21TaGVldFN0b3JlID0gdXNlQm90dG9tU2hlZXRTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBidWRnZXRTZXR0aW5nc1N0b3JlID0gdXNlQnVkZ2V0U2V0dGluZ3NTdG9yZSgpO1xuICBjb25zdCBjYXRlZ29yaWVzU3RvcmUgPSB1c2VDYXRlZ29yaWVzU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgdXNlclN0b3JlID0gdXNlVXNlclN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IHsgY3VycmVuY3ksIGluY29tZVNwbGl0IH0gPSBidWRnZXRTZXR0aW5nc1N0b3JlO1xuICBjb25zdCBbbW9udGhseUluY29tZSwgc2V0TW9udGhseUluY29tZVZhbHVlXSA9IHVzZVN0YXRlKFxuICAgIGJ1ZGdldFNldHRpbmdzU3RvcmUubW9udGhseUluY29tZSB8fCB1c2VyU3RvcmUudXNlci5pbmNvbWVcbiAgKTtcbiAgY29uc3Qgc3BsaXQgPSByZWZvcm1hdEJ1ZGdldFNwbGl0KGNhdGVnb3JpZXNTdG9yZS5tYWNyb3M/LmJ1ZGdldF9zcGxpdCA/PyBcIlwiKTtcbiAgY29uc3QgW2Vzc2VudGlhbHNSYXRpbywgc2V0RXNzZW50aWFsc1JhdGlvXSA9IHVzZVN0YXRlKFxuICAgIHNwbGl0ID8gcGFyc2VJbnQoc3BsaXRbMF0pIDogMzBcbiAgKTtcbiAgY29uc3QgW3dhbnRzUmF0aW8sIHNldFdhbnRzUmF0aW9dID0gdXNlU3RhdGUoc3BsaXQgPyBwYXJzZUludChzcGxpdFsxXSkgOiAyNSk7XG4gIGNvbnN0IFtzYXZpbmdzUmF0aW8sIHNldFNhdmluZ3NSYXRpb10gPSB1c2VTdGF0ZShcbiAgICBzcGxpdCA/IHBhcnNlSW50KHNwbGl0WzJdKSA6IDQ1XG4gICk7XG4gIGNvbnN0IFtzaG93UGVyY2VudGFnZSwgc2V0U2hvd1BlcmNlbnRhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGVib3VuY2VkUmF0aW8sIHNldERlYm91bmNlZFJhdGlvXSA9IHVzZVN0YXRlKHtcbiAgICBlc3NlbnRpYWxzUmF0aW8sXG4gICAgd2FudHNSYXRpbyxcbiAgICBzYXZpbmdzUmF0aW8sXG4gIH0pO1xuICBjb25zdCBzZXREZWJvdW5jZWRSYXRpb0RlYm91bmNlZCA9IHVzZVJlZihcbiAgICBkZWJvdW5jZSgobmV3UmF0aW8pID0+IHNldERlYm91bmNlZFJhdGlvKG5ld1JhdGlvKSwgMzAwKVxuICApLmN1cnJlbnQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREZWJvdW5jZWRSYXRpb0RlYm91bmNlZCh7IGVzc2VudGlhbHNSYXRpbywgd2FudHNSYXRpbywgc2F2aW5nc1JhdGlvIH0pO1xuICB9LCBbZXNzZW50aWFsc1JhdGlvLCB3YW50c1JhdGlvLCBzYXZpbmdzUmF0aW8sIHNldERlYm91bmNlZFJhdGlvRGVib3VuY2VkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b3RhbFJhdGlvID0gMTAwO1xuICAgIGNvbnN0IHRvdGFsQWxsb2NhdGVkID1cbiAgICAgIGRlYm91bmNlZFJhdGlvLmVzc2VudGlhbHNSYXRpbyArXG4gICAgICBkZWJvdW5jZWRSYXRpby53YW50c1JhdGlvICtcbiAgICAgIGRlYm91bmNlZFJhdGlvLnNhdmluZ3NSYXRpbztcblxuICAgIGlmICh0b3RhbEFsbG9jYXRlZCAhPT0gdG90YWxSYXRpbykge1xuICAgICAgY29uc3QgZGlmZiA9IHRvdGFsUmF0aW8gLSB0b3RhbEFsbG9jYXRlZDtcblxuICAgICAgLy8gRGlzdHJpYnV0ZSB0aGUgZGlmZmVyZW5jZSBwcm9wb3J0aW9uYWxseSBhbW9uZyB0aGUgcmF0aW9zXG4gICAgICBjb25zdCBlc3NlbnRpYWxzQWRqdXN0bWVudCA9XG4gICAgICAgIChkZWJvdW5jZWRSYXRpby5lc3NlbnRpYWxzUmF0aW8gLyB0b3RhbEFsbG9jYXRlZCkgKiBkaWZmO1xuICAgICAgY29uc3Qgd2FudHNBZGp1c3RtZW50ID1cbiAgICAgICAgKGRlYm91bmNlZFJhdGlvLndhbnRzUmF0aW8gLyB0b3RhbEFsbG9jYXRlZCkgKiBkaWZmO1xuICAgICAgY29uc3Qgc2F2aW5nc0FkanVzdG1lbnQgPVxuICAgICAgICAoZGVib3VuY2VkUmF0aW8uc2F2aW5nc1JhdGlvIC8gdG90YWxBbGxvY2F0ZWQpICogZGlmZjtcblxuICAgICAgLy8gQWRqdXN0IHRoZSByYXRpb3NcbiAgICAgIHNldEVzc2VudGlhbHNSYXRpbyhkZWJvdW5jZWRSYXRpby5lc3NlbnRpYWxzUmF0aW8gKyBlc3NlbnRpYWxzQWRqdXN0bWVudCk7XG4gICAgICBzZXRXYW50c1JhdGlvKGRlYm91bmNlZFJhdGlvLndhbnRzUmF0aW8gKyB3YW50c0FkanVzdG1lbnQpO1xuICAgICAgc2V0U2F2aW5nc1JhdGlvKGRlYm91bmNlZFJhdGlvLnNhdmluZ3NSYXRpbyArIHNhdmluZ3NBZGp1c3RtZW50KTtcbiAgICB9XG4gIH0sIFtkZWJvdW5jZWRSYXRpb10pO1xuXG4gIGNvbnN0IGdlbmVyYXRlU2xpZGVyVmFsdWVzID0gKGxlbmd0aCA9IDEwMCkgPT5cbiAgICBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDEpLm1hcCgoXywgaSkgPT4gaSArIDEpO1xuICBjb25zdCBjYWxjdWxhdGVJbmNvbWVBbW91bnQgPSAoaW5jb21lUmF0aW86IG51bWJlcikgPT5cbiAgICBNYXRoLmZsb29yKChpbmNvbWVSYXRpbyAvIDEwMCkgKiBtb250aGx5SW5jb21lKTtcbiAgY29uc3Qgc2F2ZU9uYm9hcmRpbmdEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNldEluY29tZSh7IGluY29tZUFtb3VudDogbW9udGhseUluY29tZSwgY29uZmlndXJhdGlvbiB9KTtcbiAgICBjb25zdCBtYWNyb3M6IFtHb2FsTWFjcm9UeXBlLCBudW1iZXJdW10gPSBbXG4gICAgICBbXCJFc3NlbnRpYWxzXCIsIGVzc2VudGlhbHNSYXRpb10sXG4gICAgICBbXCJXYW50c1wiLCB3YW50c1JhdGlvXSxcbiAgICAgIFtcIlNhdmluZ3NcIiwgc2F2aW5nc1JhdGlvXSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYWNyb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IFttYWNyb1R5cGUsIG1hY3JvUmF0aW9dID0gbWFjcm9zW2ldO1xuICAgICAgYXdhaXQgc2V0TWFjcm8oe1xuICAgICAgICBnb2FsTWFjcm86IHtcbiAgICAgICAgICBuYW1lOiBgJHttYWNyb1R5cGV9IFRvdGFsYCxcbiAgICAgICAgICB0eXBlX25hbWU6IG1hY3JvVHlwZSxcbiAgICAgICAgICBhbW91bnQ6IGNhbGN1bGF0ZUluY29tZUFtb3VudChtYWNyb1JhdGlvKSxcbiAgICAgICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgICAgIHNoYXJlOiBtYWNyb1JhdGlvLFxuICAgICAgICAgIHJlc2V0X21pY3JvczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCBjb21wbGV0ZU9uYm9hcmRpbmcoeyBjb21wbGV0aW9uVGltZTogbmV3IERhdGUoKSwgY29uZmlndXJhdGlvbiB9KTtcbiAgfTtcblxuICBjb25zdCBwb3N0QWxsTWFjcm9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXRJbmNvbWUoeyBpbmNvbWVBbW91bnQ6IG1vbnRobHlJbmNvbWUsIGNvbmZpZ3VyYXRpb24gfSk7XG5cbiAgICAgIGNvbnN0IG1hY3JvczogW0dvYWxNYWNyb1R5cGUsIG51bWJlcl1bXSA9IFtcbiAgICAgICAgW1wiRXNzZW50aWFsc1wiLCBlc3NlbnRpYWxzUmF0aW9dLFxuICAgICAgICBbXCJXYW50c1wiLCB3YW50c1JhdGlvXSxcbiAgICAgICAgW1wiU2F2aW5nc1wiLCBzYXZpbmdzUmF0aW9dLFxuICAgICAgXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYWNyb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgW21hY3JvVHlwZSwgbWFjcm9SYXRpb10gPSBtYWNyb3NbaV07XG4gICAgICAgIGF3YWl0IHNldE1hY3JvKHtcbiAgICAgICAgICBnb2FsTWFjcm86IHtcbiAgICAgICAgICAgIG5hbWU6IGAke21hY3JvVHlwZX1gLFxuICAgICAgICAgICAgdHlwZV9uYW1lOiBtYWNyb1R5cGUsXG4gICAgICAgICAgICBhbW91bnQ6IGNhbGN1bGF0ZUluY29tZUFtb3VudChtYWNyb1JhdGlvKSxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgICAgICAgICBzaGFyZTogbWFjcm9SYXRpbyxcbiAgICAgICAgICAgIHJlc2V0X21pY3JvczogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWd1cmF0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgY29tcGxldGVPbmJvYXJkaW5nKHsgY29tcGxldGlvblRpbWU6IG5ldyBEYXRlKCksIGNvbmZpZ3VyYXRpb24gfSk7XG5cbiAgICAgIGlmICh1c2VyU3RvcmUudXNlci5pc19vbmJvYXJkZWQpIHtcbiAgICAgICAgbmF2aWdhdGUoXCIvYnVkZ2V0LXNldHRpbmdzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2aWdhdGUoXCIvb25ib2FyZC1zdWNjZXNzXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3JcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKG5ld1ZhbHVlOiBudW1iZXIsIHR5cGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRvdGFsUmF0aW8gPSAxMDA7XG4gICAgY29uc3QgZml4ZWRTYXZpbmdzUmF0aW8gPSA0NTsgLy8gRml4ZWQgc2F2aW5ncyByYXRpb1xuXG4gICAgaWYgKHR5cGUgPT09IFwic2F2aW5nc1wiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiU2F2aW5ncyByYXRpbyBpcyBmaXhlZCBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXCIpO1xuICAgICAgcmV0dXJuOyAvLyBQcmV2ZW50IGFueSBjaGFuZ2VzIHRvIHNhdmluZ3NcbiAgICB9XG5cbiAgICBjb25zdCBvbGRWYWx1ZSA9IHR5cGUgPT09IFwiZXNzZW50aWFsc1wiID8gZXNzZW50aWFsc1JhdGlvIDogd2FudHNSYXRpbztcblxuICAgIGNvbnN0IGNoYW5nZSA9IG5ld1ZhbHVlIC0gb2xkVmFsdWU7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHRvdGFsUmF0aW8gLSBmaXhlZFNhdmluZ3NSYXRpbykge1xuICAgICAgaWYgKHR5cGUgPT09IFwiZXNzZW50aWFsc1wiKSB7XG4gICAgICAgIHNldFdhbnRzUmF0aW8oMCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwid2FudHNcIikge1xuICAgICAgICBzZXRFc3NlbnRpYWxzUmF0aW8oMCk7XG4gICAgICB9XG4gICAgICBzZXRTYXZpbmdzUmF0aW8oZml4ZWRTYXZpbmdzUmF0aW8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbGRWYWx1ZSA9PT0gdG90YWxSYXRpbyAtIGZpeGVkU2F2aW5nc1JhdGlvKSB7XG4gICAgICBjb25zdCBhZGp1c3RlZFJhdGlvID0gdG90YWxSYXRpbyAtIGZpeGVkU2F2aW5nc1JhdGlvIC0gbmV3VmFsdWU7XG4gICAgICBpZiAodHlwZSA9PT0gXCJlc3NlbnRpYWxzXCIpIHtcbiAgICAgICAgc2V0V2FudHNSYXRpbyhhZGp1c3RlZFJhdGlvKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ3YW50c1wiKSB7XG4gICAgICAgIHNldEVzc2VudGlhbHNSYXRpbyhhZGp1c3RlZFJhdGlvKTtcbiAgICAgIH1cbiAgICAgIHNldFNhdmluZ3NSYXRpbyhmaXhlZFNhdmluZ3NSYXRpbyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWxsb2NhdGVDaGFuZ2UgPSAoY2hhbmdlOiBudW1iZXIpID0+IHtcbiAgICAgIC8vIFByb3BvcnRpb25hbGx5IGFsbG9jYXRlIGNoYW5nZSB0byB0aGUgbm9uLWFmZmVjdGVkIHJhdGlvXG4gICAgICBpZiAodHlwZSA9PT0gXCJlc3NlbnRpYWxzXCIpIHtcbiAgICAgICAgc2V0V2FudHNSYXRpbyhNYXRoLm1heCh3YW50c1JhdGlvIC0gY2hhbmdlLCAwKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwid2FudHNcIikge1xuICAgICAgICBzZXRFc3NlbnRpYWxzUmF0aW8oTWF0aC5tYXgoZXNzZW50aWFsc1JhdGlvIC0gY2hhbmdlLCAwKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFwcGx5IHRoZSBuZXcgdmFsdWUgYW5kIGFsbG9jYXRlIGNoYW5nZSB0byB0aGUgb3RoZXIgcmF0aW9cbiAgICBpZiAodHlwZSA9PT0gXCJlc3NlbnRpYWxzXCIpIHtcbiAgICAgIHNldEVzc2VudGlhbHNSYXRpbyhNYXRoLm1heChuZXdWYWx1ZSwgMCkpO1xuICAgICAgYWxsb2NhdGVDaGFuZ2UoY2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwid2FudHNcIikge1xuICAgICAgc2V0V2FudHNSYXRpbyhNYXRoLm1heChuZXdWYWx1ZSwgMCkpO1xuICAgICAgYWxsb2NhdGVDaGFuZ2UoY2hhbmdlKTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgc2F2aW5ncyByYXRpbyBpcyBhbHdheXMgZml4ZWQgYXQgNDVcbiAgICBzZXRTYXZpbmdzUmF0aW8oZml4ZWRTYXZpbmdzUmF0aW8pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPE5hdkJhclxuICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtNiBwYi0yIHByLTZcIj5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tCdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoLTEpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgaC1weCBiZy1za2luLWFjY2VudDNcIj48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTMgaXRlbXMtbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTExIHctMTEgYmctc2tpbi1pY29uUHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC0zLjVcIj5cbiAgICAgICAgICA8RmlQaWVDaGFydCBjb2xvcj1cIiM1NTU0NjZcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSBmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1za2luLWJhc2UgbXQtMS41IG14LTMuNVwiPlxuICAgICAgICAgIFdob29wISBIZXJlIGlzIHlvdXIgcmVjb21tZW5kZWQgYnVkZ2V0IHNwbGl0LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hZGRJbmNvbWVCZyBiZy1jb3ZlciBiZy1uby1yZXBlYXQgaC0zNiBiZy1yaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXByaW1hcnkgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctd2lkZSBtdC00IGZvbnQtbWVkaXVtIG14LTMuNVwiPlxuICAgICAgICAgICAgSGVyZSdzIGEgYnJlYWtkb3duIG9mIGhvdyBtdWNoIHlvdSBjYW4gc3BlbmQgb24gRXNzZW50aWFscyBhbmQgV2FudHNcbiAgICAgICAgICAgIHdoaWxlIHN0YXlpbmcgb24gdHJhY2sgdG8gYmVjb21pbmcgZGVidCBmcmVlLiBGZWVsIGZyZWUgdG8gZWRpdFxuICAgICAgICAgICAgRXNzZW50aWFscyBhbmQgV2FudHMgYWNjb3JkaW5nIHRvIHlvdXIgbGlmZXN0eWxlIHByZWZlcmVuY2UuXG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xMiBteC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtc3RhcnQgZm9udC1ib2xkIHRleHQtMnhsIHRleHQtc2tpbi1iYXNlXCI+XG4gICAgICAgICAgICAgIERlYnQgcmVwYXltZW50XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIGZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LXNraW4tYmFzZVwiPlxuICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVJbmNvbWVBbW91bnQoc2F2aW5nc1JhdGlvKT8udG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiKX1cbiAgICAgICAgICAgICAgICA8c3VwIGNsYXNzTmFtZT1cImFsaWduLXN1cGVyIC1tbC0xIHRleHQteHh4c1wiPlxuICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8/IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9zdXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgPFJlYWN0U2xpZGVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NhdmluZ3NSYXRpb31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsLXNsaWRlclwiXG4gICAgICAgICAgICAgICAgbWFya3M9e2dlbmVyYXRlU2xpZGVyVmFsdWVzKCl9XG4gICAgICAgICAgICAgICAgbWFya0NsYXNzTmFtZT1cImV4YW1wbGUtbWFya1wiXG4gICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICAgIHRodW1iQ2xhc3NOYW1lPVwiZXhhbXBsZS10aHVtYlwiXG4gICAgICAgICAgICAgICAgdHJhY2tDbGFzc05hbWU9XCJleGFtcGxlLXRyYWNrXCJcbiAgICAgICAgICAgICAgICByZW5kZXJUaHVtYj17KHByb3BzLCBzdGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlTm93PXtzdGF0ZS52YWx1ZU5vd31cbiAgICAgICAgICAgICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAgICAgICAgICAgICBzaG93UGVyY2VudGFnZT17c2hvd1BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMwMzZBQjNcIlxuICAgICAgICAgICAgICAgICAgICBpc0xvY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBvbkJlZm9yZUNoYW5nZT17KCkgPT4gc2V0U2hvd1BlcmNlbnRhZ2UodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25BZnRlckNoYW5nZT17KCkgPT4gc2V0U2hvd1BlcmNlbnRhZ2UoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSwgXCJzYXZpbmdzXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1zdGFydCB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi0xMiVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWVuZCB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi0xMiVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kobW9udGhseUluY29tZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgIDxEZWJ0SW5mb1xuICAgICAgICAgICAgICBsb2FuVmFsdWU9e2NhbGN1bGF0ZUluY29tZUFtb3VudChzYXZpbmdzUmF0aW8pfVxuICAgICAgICAgICAgICBjdXJyZW5jeT17Y3VycmVuY3l9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCB3LWZ1bGwgbXQtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtc3RhcnQgZm9udC1ib2xkIHRleHQtMnhsIHRleHQtc2tpbi1iYXNlXCI+XG4gICAgICAgICAgICAgIEVzc2VudGlhbHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtZW5kIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIHRleHQtMnhsIHRleHQtc2tpbi1iYXNlXCI+XG4gICAgICAgICAgICAgICAge2NhbGN1bGF0ZUluY29tZUFtb3VudChlc3NlbnRpYWxzUmF0aW8pPy50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgICAgIFwiZW4tdXNcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJhbGlnbi1zdXBlciAtbWwtMSB0ZXh0LXh4eHNcIj5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/PyBcIlwifVxuICAgICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgIDxSZWFjdFNsaWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlc3NlbnRpYWxzUmF0aW99XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbC1zbGlkZXJcIlxuICAgICAgICAgICAgICAgIG1hcmtzPXtnZW5lcmF0ZVNsaWRlclZhbHVlcygpfVxuICAgICAgICAgICAgICAgIG1hcmtDbGFzc05hbWU9XCJleGFtcGxlLW1hcmtcIlxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgICAgICB0aHVtYkNsYXNzTmFtZT1cImV4YW1wbGUtdGh1bWJcIlxuICAgICAgICAgICAgICAgIHRyYWNrQ2xhc3NOYW1lPVwiZXNzZW50aWFsLXRyYWNrXCJcbiAgICAgICAgICAgICAgICByZW5kZXJUaHVtYj17KHByb3BzLCBzdGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlTm93PXtzdGF0ZS52YWx1ZU5vd31cbiAgICAgICAgICAgICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAgICAgICAgICAgICBzaG93UGVyY2VudGFnZT17c2hvd1BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMwMDlGRENcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQmVmb3JlQ2hhbmdlPXsoKSA9PiBzZXRTaG93UGVyY2VudGFnZSh0cnVlKX1cbiAgICAgICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXsoKSA9PiBzZXRTaG93UGVyY2VudGFnZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlLCBcImVzc2VudGlhbHNcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLXN0YXJ0IHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEyJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtZW5kIHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTEyJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShtb250aGx5SW5jb21lKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCB3LWZ1bGwgbXQtNiBtYi0zMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtc3RhcnQgZm9udC1ib2xkIHRleHQtMnhsIHRleHQtc2tpbi1iYXNlXCI+XG4gICAgICAgICAgICAgIFdhbnRzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWVuZCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSB0ZXh0LTJ4bCB0ZXh0LXNraW4tYmFzZVwiPlxuICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVJbmNvbWVBbW91bnQod2FudHNSYXRpbyk/LnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIil9XG4gICAgICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJhbGlnbi1zdXBlciAtbWwtMSB0ZXh0LXh4eHNcIj5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/PyBcIlwifVxuICAgICAgICAgICAgICAgIDwvc3VwPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgIDxSZWFjdFNsaWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt3YW50c1JhdGlvfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvcml6b250YWwtc2xpZGVyXCJcbiAgICAgICAgICAgICAgICBtYXJrcz17Z2VuZXJhdGVTbGlkZXJWYWx1ZXMoKX1cbiAgICAgICAgICAgICAgICBtYXJrQ2xhc3NOYW1lPVwiZXhhbXBsZS1tYXJrXCJcbiAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgICAgdGh1bWJDbGFzc05hbWU9XCJleGFtcGxlLXRodW1iXCJcbiAgICAgICAgICAgICAgICB0cmFja0NsYXNzTmFtZT1cIndhbnRzLXRyYWNrXCJcbiAgICAgICAgICAgICAgICByZW5kZXJUaHVtYj17KHByb3BzLCBzdGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlTm93PXtzdGF0ZS52YWx1ZU5vd31cbiAgICAgICAgICAgICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAgICAgICAgICAgICBzaG93UGVyY2VudGFnZT17c2hvd1BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMzNTRBQTZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQmVmb3JlQ2hhbmdlPXsoKSA9PiBzZXRTaG93UGVyY2VudGFnZSh0cnVlKX1cbiAgICAgICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXsoKSA9PiBzZXRTaG93UGVyY2VudGFnZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlLCBcIndhbnRzXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1zdGFydCB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi0xMiVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWVuZCB0ZXh0LXhzIHRleHQtc2tpbi1zdWJ0aXRsZSBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi0xMiVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kobW9udGhseUluY29tZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTUgbGVmdC0wIHJpZ2h0LTAgbXgtMy41IHRleHQtc20gei0xMFwiPlxuICAgICAgICAgIDxNYWluQnV0dG9uXG4gICAgICAgICAgICB0aXRsZT1cIkNvbnRpbnVlXCJcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYnVkZ2V0U2V0dGluZ3NTdG9yZS5zZXRJbmNvbWVTcGxpdCh7XG4gICAgICAgICAgICAgICAgZXNzZW50aWFsczogZXNzZW50aWFsc1JhdGlvLFxuICAgICAgICAgICAgICAgIHdhbnRzOiB3YW50c1JhdGlvLFxuICAgICAgICAgICAgICAgIHNhdmluZ3M6IHNhdmluZ3NSYXRpbyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHBvc3RBbGxNYWNyb3MoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uYm9hcmRpbmdTcGxpdEluY29tZTtcbiIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5cbmludGVyZmFjZSBJbmNvbWVTcGxpdCB7XG4gIGVzc2VudGlhbHM6IG51bWJlcjtcbiAgd2FudHM6IG51bWJlcjtcbiAgc2F2aW5nczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQnVkZ2V0U2V0dGluZ3Mge1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICBtb250aGx5SW5jb21lOiBudW1iZXI7XG4gIGluY29tZVNwbGl0OiBJbmNvbWVTcGxpdDtcbn1cblxudHlwZSBJQnVkZ2V0U2V0dGluZ3NTdG9yZSA9IEJ1ZGdldFNldHRpbmdzICYge1xuICBzZXRNb250aGx5SW5jb21lOiAoYW1vdW50OiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldEluY29tZVNwbGl0OiAoc3BsaXQ6IEluY29tZVNwbGl0KSA9PiB2b2lkO1xufTtcblxuY29uc3QgdXNlQnVkZ2V0U2V0dGluZ3NTdG9yZSA9IGNyZWF0ZTxJQnVkZ2V0U2V0dGluZ3NTdG9yZT4oKHNldCkgPT4gKHtcbiAgY3VycmVuY3k6IFwiIEtFU1wiLFxuICBtb250aGx5SW5jb21lOiAwLFxuICBpbmNvbWVTcGxpdDoge1xuICAgIGVzc2VudGlhbHM6IDUwLFxuICAgIHdhbnRzOiAzMCxcbiAgICBzYXZpbmdzOiAyMCxcbiAgfSxcbiAgc2V0TW9udGhseUluY29tZTogKGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IEJ1ZGdldFNldHRpbmdzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IEJ1ZGdldFNldHRpbmdzID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbW9udGhseUluY29tZTogYW1vdW50LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIGdldE1vbnRobHlJbmNvbWU6ICgpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogQnVkZ2V0U2V0dGluZ3MpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogQnVkZ2V0U2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb250aGx5SW5jb21lOiBzdGF0ZS5tb250aGx5SW5jb21lLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldEluY29tZVNwbGl0OiAoc3BsaXQ6IEluY29tZVNwbGl0KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IEJ1ZGdldFNldHRpbmdzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IEJ1ZGdldFNldHRpbmdzID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5jb21lU3BsaXQ6IHNwbGl0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIGdldEluY29tZVNwbGl0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IEJ1ZGdldFNldHRpbmdzKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IEJ1ZGdldFNldHRpbmdzID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5jb21lU3BsaXQ6IHN0YXRlLmluY29tZVNwbGl0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5cbmV4cG9ydCB7XG4gIEluY29tZVNwbGl0LFxuICBCdWRnZXRTZXR0aW5ncyxcbiAgSUJ1ZGdldFNldHRpbmdzU3RvcmUsXG4gIHVzZUJ1ZGdldFNldHRpbmdzU3RvcmUsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9