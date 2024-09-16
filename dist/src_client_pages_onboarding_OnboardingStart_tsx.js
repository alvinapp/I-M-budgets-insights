"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_pages_onboarding_OnboardingStart_tsx"],{

/***/ "./src/client/api/mono.ts":
/*!********************************!*\
  !*** ./src/client/api/mono.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMonoPubKey: () => (/* binding */ getMonoPubKey),
/* harmony export */   postCode: () => (/* binding */ postCode),
/* harmony export */   syncAccount: () => (/* binding */ syncAccount),
/* harmony export */   syncAccounts: () => (/* binding */ syncAccounts),
/* harmony export */   updateAccount: () => (/* binding */ updateAccount)
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


const getMonoPubKey = (configuration, country) => __awaiter(void 0, void 0, void 0, function* () {
    return (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
        endpoint: "/mono/pub-key/" + country + "/",
        publicKey: configuration.publicKey,
    }).catch((err) => {
        console.debug(JSON.stringify(err));
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(err);
        return Promise.reject(err);
    });
});
const postCode = (configuration, code, country) => __awaiter(void 0, void 0, void 0, function* () {
    return (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
        endpoint: "/mono/code",
        token: configuration.token || null,
        data: {
            code: code,
            country: country,
        },
        publicKey: configuration.publicKey,
    }).catch((err) => {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(err);
        return Promise.reject(err);
    });
});
const syncAccounts = (configuration, country) => __awaiter(void 0, void 0, void 0, function* () {
    return (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
        endpoint: "/mono/accounts/sync",
        token: configuration.token || null,
        data: {
            country: country,
        },
        publicKey: configuration.publicKey,
    }).catch((err) => {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(err);
        return Promise.reject(err);
    });
});
const syncAccount = (configuration, account_id, country) => __awaiter(void 0, void 0, void 0, function* () {
    return (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
        endpoint: "/mono/accounts/sync/" + account_id,
        token: configuration.token || null,
        data: {
            country: country,
        },
        publicKey: configuration.publicKey,
    }).catch((err) => {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(err);
        return Promise.reject(err);
    });
});
// add /accounts/update/<string:account_id> POST
const updateAccount = (configuration, account_id, country) => __awaiter(void 0, void 0, void 0, function* () {
    return (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
        endpoint: "/mono/accounts/update/" + account_id,
        token: configuration.token || null,
        data: {
            country: country,
        },
        publicKey: configuration.publicKey,
    }).catch((err) => {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(err);
        return Promise.reject(err);
    });
});



/***/ }),

/***/ "./src/client/pages/onboarding/OnboardingStart.tsx":
/*!*********************************************************!*\
  !*** ./src/client/pages/onboarding/OnboardingStart.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_api_budget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/api/budget */ "./src/client/api/budget.ts");
/* harmony import */ var client_api_mono__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/api/mono */ "./src/client/api/mono.ts");
/* harmony import */ var client_api_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/api/token */ "./src/client/api/token.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var client_utils_Toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/utils/Toast */ "./src/client/utils/Toast.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_launch_card_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/images/launch_card.svg */ "./src/client/assets/images/launch_card.svg");
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var _components_Loader_CustomLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Loader/CustomLoader */ "./src/client/pages/components/Loader/CustomLoader.tsx");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















const OnboardingStart = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const configurations = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)((state) => state.configuration);
    const setToken = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)((state) => state.setToken);
    const setMonoPubKey = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)((state) => state.setMonoPubKey);
    const fetchMonoToken = ({ configuration, setMonoPubKey, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return (0,client_api_mono__WEBPACK_IMPORTED_MODULE_5__.getMonoPubKey)(configuration, (_a = configuration.country) !== null && _a !== void 0 ? _a : "Nigeria")
            .then((data) => {
            if (!data) {
                return;
            }
            setMonoPubKey(data.key);
            configuration.monoPubKey = data.key;
        })
            .catch((error) => { });
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!configurations.monoPubKey) {
            fetchMonoToken({ configuration: configurations, setMonoPubKey })
                .then(() => { })
                .catch((error) => {
                console.error("Failed to fetch Mono public key:", error);
            });
        }
    }, [configurations.monoPubKey, configurations.country, setMonoPubKey]);
    // const monoConnect = useMemo(() => {
    //   if (!configurations.monoPubKey && !configurations.token) {
    //     return null;
    //   }
    //   const monoInstance = new MonoConnect({
    //     onClose: () => {},
    //     onLoad: () => {},
    //     onSuccess: ({ code }: any) => {
    //       postCode(configurations, code, configurations.country ?? "Nigeria");
    //       navigate("/onboard-add-income");
    //     },
    //     key: configurations.monoPubKey,
    //   });
    //   monoInstance.setup();
    //   return monoInstance;
    // }, [configurations.monoPubKey, configurations.token]);
    // const onClick = () => {
    //   if (monoConnect) {
    //     monoConnect.open();
    //   }
    // };
    const setUser = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state.setUser);
    // add loading
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const authenticateUser = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        const response = yield (0,client_api_token__WEBPACK_IMPORTED_MODULE_7__["default"])(configurations);
        if (response === null || response === void 0 ? void 0 : response.user) {
            setUser(response.user);
            setToken(response.token);
            yield (0,client_api_budget__WEBPACK_IMPORTED_MODULE_8__.checkIfUserHasMicros)({
                configuration: configurations,
                token: response.token,
            })
                .then((result) => {
                if (!(response === null || response === void 0 ? void 0 : response.user.is_onboarded)) {
                    navigate("/");
                }
                else if (!result.has_micro_goals && (response === null || response === void 0 ? void 0 : response.user.is_onboarded)) {
                    navigate("budget-settings");
                }
                else {
                    navigate("/budgets-view");
                }
            })
                .finally(() => {
                setLoading(false);
            });
        }
        else {
            setLoading(false);
            navigate("/");
            (0,client_utils_Toast__WEBPACK_IMPORTED_MODULE_9__.showCustomToast)({ message: "The sdk key is invalid" });
        }
    });
    const { data } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(["token"], () => authenticateUser, {
        refetchOnWindowFocus: false,
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-screen w-screen relative no-scrollbar" }, { children: loading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-screen w-screen flex justify-center items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Loader_CustomLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {}) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-1/4 absolute top-0 left-0 right-0" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between pt-5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BackButton__WEBPACK_IMPORTED_MODULE_12__["default"], { onClick: () => navigate(-1) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_13__["default"], { title: "" })] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col absolute left-0 right-0" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "w-full h-90 bg-cover bg-center overflow-hidden" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_launch_card_svg__WEBPACK_IMPORTED_MODULE_14__, className: "w-[100%] h-[100%]", alt: "Splash" }) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mt-1 mx-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center font-custom text-xl text-start font-bold tracking-title text-skin-base mr-3.5" }, { children: "Start tracking your card and M-Pesa spending here on PesaPap" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center items center text-sm font-primary tracking-wide text-start text-skin-base mt-3 font-medium mr-8" }, { children: "Add your main account and M-pesa wallet to effortlessly balance your daily spending around your Family Bank\u2019s savings and payment schedules using our powerful new budgeting and insights features." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center text-sm font-primary tracking-wide text-start text-skin-base mt-3 font-medium mb-40" }, { children: "In partnership with alvin" }))] }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-4 left-0 right-0 mx-4 bg-skin-base" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-sm font-primary tracking-wide text-start text-skin-base mt-3 font-medium ml-2 mb-4" }, { children: ["By tapping \u201CAdd my first account\u201D, I agree to Family Bank\u2019s", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "text-skin-primary text-sm font-primary tracking-wide text-start font-medium mb-2 underline" }, { children: "Terms of Use" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_15__["default"], { isDisabled: !configurations.monoPubKey && !configurations.token, 
                                // title="Link account"
                                title: "Add my first account", click: () => {
                                    navigate("/onboard-select-account");
                                    // onClick();
                                } })] })) }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingStart);


/***/ }),

/***/ "./src/client/assets/images/launch_card.svg":
/*!**************************************************!*\
  !*** ./src/client/assets/images/launch_card.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb060ed2cca975bc982d.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19vbmJvYXJkaW5nX09uYm9hcmRpbmdTdGFydF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUdXO0FBRXJELE1BQU0sYUFBYSxHQUFHLENBQU8sYUFBc0IsRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUN0RSxPQUFPLHlEQUFTLENBQUM7UUFDZixRQUFRLEVBQUUsZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLEdBQUc7UUFDMUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxTQUFTO0tBQ25DLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLDZEQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUVGLE1BQU0sUUFBUSxHQUFHLENBQ2YsYUFBc0IsRUFDdEIsSUFBWSxFQUNaLE9BQWUsRUFDZixFQUFFO0lBQ0YsT0FBTyx3REFBUSxDQUFDO1FBQ2QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLLElBQUksSUFBSTtRQUNsQyxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxPQUFPO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLGFBQWEsQ0FBQyxTQUFTO0tBQ25DLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNmLDZEQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUVGLE1B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RUFBQyxlQUFlLGlCQUM1QiwrRUFBSyxTQUFTLEVBQUMseUZBQXlGLCtGQUMxQyxHQUFHLEVBQy9ELCtFQUFNLFNBQVMsRUFBQyw0RkFBNEYsa0NBRXJHLEtBQ0gsRUFJTix1REFBQywrREFBVSxJQUNULFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSztnQ0FDL0QsdUJBQXVCO2dDQUN2QixLQUFLLEVBQUMsc0JBQXNCLEVBQzVCLEtBQUssRUFBRSxHQUFHLEVBQUU7b0NBQ1YsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0NBQ3BDLGFBQWE7Z0NBQ2YsQ0FBQyxHQUNELEtBV0UsSUFDRixJQUNMLENBQ0osSUFDRyxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvYXBpL21vbm8udHMiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL29uYm9hcmRpbmcvT25ib2FyZGluZ1N0YXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBmZXRjaERhdGEsIHBvc3REYXRhIH0gZnJvbSBcImNsaWVudC9hcGkvYXBpXCI7XG5cbmNvbnN0IGdldE1vbm9QdWJLZXkgPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZywgY291bnRyeTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBmZXRjaERhdGEoe1xuICAgIGVuZHBvaW50OiBcIi9tb25vL3B1Yi1rZXkvXCIgKyBjb3VudHJ5ICsgXCIvXCIsXG4gICAgcHVibGljS2V5OiBjb25maWd1cmF0aW9uLnB1YmxpY0tleSxcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHBvc3RDb2RlID0gYXN5bmMgKFxuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnLFxuICBjb2RlOiBzdHJpbmcsXG4gIGNvdW50cnk6IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBwb3N0RGF0YSh7XG4gICAgZW5kcG9pbnQ6IFwiL21vbm8vY29kZVwiLFxuICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuIHx8IG51bGwsXG4gICAgZGF0YToge1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIGNvdW50cnk6IGNvdW50cnksXG4gICAgfSxcbiAgICBwdWJsaWNLZXk6IGNvbmZpZ3VyYXRpb24ucHVibGljS2V5LFxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHN5bmNBY2NvdW50cyA9IGFzeW5jIChjb25maWd1cmF0aW9uOiBJQ29uZmlnLCBjb3VudHJ5OiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHBvc3REYXRhKHtcbiAgICBlbmRwb2ludDogXCIvbW9uby9hY2NvdW50cy9zeW5jXCIsXG4gICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4gfHwgbnVsbCxcbiAgICBkYXRhOiB7XG4gICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuICAgIH0sXG4gICAgcHVibGljS2V5OiBjb25maWd1cmF0aW9uLnB1YmxpY0tleSxcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGVycik7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzeW5jQWNjb3VudCA9IGFzeW5jIChcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZyxcbiAgYWNjb3VudF9pZDogc3RyaW5nLFxuICBjb3VudHJ5OiBzdHJpbmdcbikgPT4ge1xuICByZXR1cm4gcG9zdERhdGEoe1xuICAgIGVuZHBvaW50OiBcIi9tb25vL2FjY291bnRzL3N5bmMvXCIgKyBhY2NvdW50X2lkLFxuICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuIHx8IG51bGwsXG4gICAgZGF0YToge1xuICAgICAgY291bnRyeTogY291bnRyeSxcbiAgICB9LFxuICAgIHB1YmxpY0tleTogY29uZmlndXJhdGlvbi5wdWJsaWNLZXksXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihlcnIpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gIH0pO1xufTtcblxuLy8gYWRkIC9hY2NvdW50cy91cGRhdGUvPHN0cmluZzphY2NvdW50X2lkPiBQT1NUXG5jb25zdCB1cGRhdGVBY2NvdW50ID0gYXN5bmMgKFxuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnLFxuICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gIGNvdW50cnk6IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBwb3N0RGF0YSh7XG4gICAgZW5kcG9pbnQ6IFwiL21vbm8vYWNjb3VudHMvdXBkYXRlL1wiICsgYWNjb3VudF9pZCxcbiAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbiB8fCBudWxsLFxuICAgIGRhdGE6IHtcbiAgICAgIGNvdW50cnk6IGNvdW50cnksXG4gICAgfSxcbiAgICBwdWJsaWNLZXk6IGNvbmZpZ3VyYXRpb24ucHVibGljS2V5LFxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHBvc3RDb2RlLCBnZXRNb25vUHViS2V5LCBzeW5jQWNjb3VudHMsIHN5bmNBY2NvdW50LCB1cGRhdGVBY2NvdW50IH07XG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBjaGVja0lmVXNlckhhc01pY3JvcyB9IGZyb20gXCJjbGllbnQvYXBpL2J1ZGdldFwiO1xuaW1wb3J0IHsgZ2V0TW9ub1B1YktleSB9IGZyb20gXCJjbGllbnQvYXBpL21vbm9cIjtcbmltcG9ydCBnZXRUb2tlbiBmcm9tIFwiY2xpZW50L2FwaS90b2tlblwiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvdXNlclN0b3JlXCI7XG5pbXBvcnQgeyBzaG93Q3VzdG9tVG9hc3QgfSBmcm9tIFwiY2xpZW50L3V0aWxzL1RvYXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3BsYXNoSW1hZ2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvb25ib2FyZGluZy1ncmFwaGljLnBuZ1wiO1xuaW1wb3J0IExhdW5jaENhcmQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbGF1bmNoX2NhcmQuc3ZnXCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgQ3VzdG9tTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlci9DdXN0b21Mb2FkZXJcIjtcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5CdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgTmF2QmFyVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyVGl0bGVcIjtcblxuY29uc3QgT25ib2FyZGluZ1N0YXJ0ID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3Qgc2V0VG9rZW4gPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNldFRva2VuKTtcbiAgY29uc3Qgc2V0TW9ub1B1YktleSA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2V0TW9ub1B1YktleVxuICApO1xuICBjb25zdCBmZXRjaE1vbm9Ub2tlbiA9IGFzeW5jICh7XG4gICAgY29uZmlndXJhdGlvbixcbiAgICBzZXRNb25vUHViS2V5LFxuICB9OiB7XG4gICAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgICBzZXRNb25vUHViS2V5OiBhbnk7XG4gIH0pID0+IHtcbiAgICByZXR1cm4gZ2V0TW9ub1B1YktleShjb25maWd1cmF0aW9uLCBjb25maWd1cmF0aW9uLmNvdW50cnkgPz8gXCJOaWdlcmlhXCIpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0TW9ub1B1YktleShkYXRhLmtleSk7XG4gICAgICAgIGNvbmZpZ3VyYXRpb24ubW9ub1B1YktleSA9IGRhdGEua2V5O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb25zLm1vbm9QdWJLZXkpIHtcbiAgICAgIGZldGNoTW9ub1Rva2VuKHsgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbnMsIHNldE1vbm9QdWJLZXkgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge30pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIE1vbm8gcHVibGljIGtleTpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtjb25maWd1cmF0aW9ucy5tb25vUHViS2V5LCBjb25maWd1cmF0aW9ucy5jb3VudHJ5LCBzZXRNb25vUHViS2V5XSk7XG4gIC8vIGNvbnN0IG1vbm9Db25uZWN0ID0gdXNlTWVtbygoKSA9PiB7XG4gIC8vICAgaWYgKCFjb25maWd1cmF0aW9ucy5tb25vUHViS2V5ICYmICFjb25maWd1cmF0aW9ucy50b2tlbikge1xuICAvLyAgICAgcmV0dXJuIG51bGw7XG4gIC8vICAgfVxuICAvLyAgIGNvbnN0IG1vbm9JbnN0YW5jZSA9IG5ldyBNb25vQ29ubmVjdCh7XG4gIC8vICAgICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgLy8gICAgIG9uTG9hZDogKCkgPT4ge30sXG4gIC8vICAgICBvblN1Y2Nlc3M6ICh7IGNvZGUgfTogYW55KSA9PiB7XG4gIC8vICAgICAgIHBvc3RDb2RlKGNvbmZpZ3VyYXRpb25zLCBjb2RlLCBjb25maWd1cmF0aW9ucy5jb3VudHJ5ID8/IFwiTmlnZXJpYVwiKTtcbiAgLy8gICAgICAgbmF2aWdhdGUoXCIvb25ib2FyZC1hZGQtaW5jb21lXCIpO1xuICAvLyAgICAgfSxcbiAgLy8gICAgIGtleTogY29uZmlndXJhdGlvbnMubW9ub1B1YktleSxcbiAgLy8gICB9KTtcbiAgLy8gICBtb25vSW5zdGFuY2Uuc2V0dXAoKTtcblxuICAvLyAgIHJldHVybiBtb25vSW5zdGFuY2U7XG4gIC8vIH0sIFtjb25maWd1cmF0aW9ucy5tb25vUHViS2V5LCBjb25maWd1cmF0aW9ucy50b2tlbl0pO1xuXG4gIC8vIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gIC8vICAgaWYgKG1vbm9Db25uZWN0KSB7XG4gIC8vICAgICBtb25vQ29ubmVjdC5vcGVuKCk7XG4gIC8vICAgfVxuICAvLyB9O1xuICBjb25zdCBzZXRVc2VyID0gdXNlVXNlclN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuc2V0VXNlcik7XG4gIC8vIGFkZCBsb2FkaW5nXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYXV0aGVudGljYXRlVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0VG9rZW4oY29uZmlndXJhdGlvbnMpO1xuICAgIGlmIChyZXNwb25zZT8udXNlcikge1xuICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcbiAgICAgIHNldFRva2VuKHJlc3BvbnNlLnRva2VuKTtcbiAgICAgIGF3YWl0IGNoZWNrSWZVc2VySGFzTWljcm9zKHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbnMsXG4gICAgICAgIHRva2VuOiByZXNwb25zZS50b2tlbixcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlPy51c2VyLmlzX29uYm9hcmRlZCkge1xuICAgICAgICAgICAgbmF2aWdhdGUoXCIvXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc3VsdC5oYXNfbWljcm9fZ29hbHMgJiYgcmVzcG9uc2U/LnVzZXIuaXNfb25ib2FyZGVkKSB7XG4gICAgICAgICAgICBuYXZpZ2F0ZShcImJ1ZGdldC1zZXR0aW5nc1wiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdGUoXCIvYnVkZ2V0cy12aWV3XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBuYXZpZ2F0ZShcIi9cIik7XG4gICAgICBzaG93Q3VzdG9tVG9hc3QoeyBtZXNzYWdlOiBcIlRoZSBzZGsga2V5IGlzIGludmFsaWRcIiB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShbXCJ0b2tlblwiXSwgKCkgPT4gYXV0aGVudGljYXRlVXNlciwge1xuICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIHJlbGF0aXZlIG5vLXNjcm9sbGJhclwiPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8Q3VzdG9tTG9hZGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMS80IGFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wXCI+XG4gICAgICAgICAgICA8TmF2QmFyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwdC01XCI+XG4gICAgICAgICAgICAgICAgICA8QmFja0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9IC8+XG4gICAgICAgICAgICAgICAgICA8TmF2QmFyVGl0bGUgdGl0bGU9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGFic29sdXRlIGxlZnQtMCByaWdodC0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtOTAgYmctY292ZXIgYmctY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e0xhdW5jaENhcmR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEwMCVdIGgtWzEwMCVdXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiU3BsYXNoXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgbXgtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBmb250LWN1c3RvbSB0ZXh0LXhsIHRleHQtc3RhcnQgZm9udC1ib2xkIHRyYWNraW5nLXRpdGxlIHRleHQtc2tpbi1iYXNlIG1yLTMuNVwiPlxuICAgICAgICAgICAgICAgICAgU3RhcnQgdHJhY2tpbmcgeW91ciBjYXJkIGFuZCBNLVBlc2Egc3BlbmRpbmcgaGVyZSBvbiBQZXNhUGFwXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zIGNlbnRlciB0ZXh0LXNtIGZvbnQtcHJpbWFyeSB0cmFja2luZy13aWRlIHRleHQtc3RhcnQgdGV4dC1za2luLWJhc2UgbXQtMyBmb250LW1lZGl1bSBtci04XCI+XG4gICAgICAgICAgICAgICAgICBBZGQgeW91ciBtYWluIGFjY291bnQgYW5kIE0tcGVzYSB3YWxsZXQgdG8gZWZmb3J0bGVzc2x5XG4gICAgICAgICAgICAgICAgICBiYWxhbmNlIHlvdXIgZGFpbHkgc3BlbmRpbmcgYXJvdW5kIHlvdXIgRmFtaWx5IEJhbmvigJlzIHNhdmluZ3NcbiAgICAgICAgICAgICAgICAgIGFuZCBwYXltZW50IHNjaGVkdWxlcyB1c2luZyBvdXIgcG93ZXJmdWwgbmV3IGJ1ZGdldGluZyBhbmRcbiAgICAgICAgICAgICAgICAgIGluc2lnaHRzIGZlYXR1cmVzLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgdGV4dC1zbSBmb250LXByaW1hcnkgdHJhY2tpbmctd2lkZSB0ZXh0LXN0YXJ0IHRleHQtc2tpbi1iYXNlIG10LTMgZm9udC1tZWRpdW0gbWItNDBcIj5cbiAgICAgICAgICAgICAgICAgIEluIHBhcnRuZXJzaGlwIHdpdGggYWx2aW5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IGxlZnQtMCByaWdodC0wIG14LTQgYmctc2tpbi1iYXNlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtcHJpbWFyeSB0cmFja2luZy13aWRlIHRleHQtc3RhcnQgdGV4dC1za2luLWJhc2UgbXQtMyBmb250LW1lZGl1bSBtbC0yIG1iLTRcIj5cbiAgICAgICAgICAgICAgICBCeSB0YXBwaW5nIOKAnEFkZCBteSBmaXJzdCBhY2NvdW504oCdLCBJIGFncmVlIHRvIEZhbWlseSBCYW5r4oCZc3tcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNraW4tcHJpbWFyeSB0ZXh0LXNtIGZvbnQtcHJpbWFyeSB0cmFja2luZy13aWRlIHRleHQtc3RhcnQgZm9udC1tZWRpdW0gbWItMiB1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIFRlcm1zIG9mIFVzZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2tpbi1wcmltYXJ5IHRleHQtc20gZm9udC1wcmltYXJ5IHRyYWNraW5nLXdpZGUgdGV4dC1zdGFydCBmb250LW1lZGl1bSBtbC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICBUZXJtcyBvZiBVc2VcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICA8TWFpbkJ1dHRvblxuICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9eyFjb25maWd1cmF0aW9ucy5tb25vUHViS2V5ICYmICFjb25maWd1cmF0aW9ucy50b2tlbn1cbiAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIkxpbmsgYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgbXkgZmlyc3QgYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL29uYm9hcmQtc2VsZWN0LWFjY291bnRcIik7XG4gICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCJiZy1bI2YyZjJmMl1cIlxuICAgICAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cInRleHQtc2tpbi1iYXNlXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2tpcCBmb3Igbm93XCJcbiAgICAgICAgICAgICAgICAgIGNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL29uYm9hcmQtYWRkLWluY29tZVwiKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uYm9hcmRpbmdTdGFydDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==