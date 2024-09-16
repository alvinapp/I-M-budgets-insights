"use strict";
(self["webpackChunkbudgets_and_insights"] = self["webpackChunkbudgets_and_insights"] || []).push([["src_client_api_transactions_ts-src_client_pages_components_AnimatedNumber_tsx-src_client_page-70bed4"],{

/***/ "./src/client/api/transactions.ts":
/*!****************************************!*\
  !*** ./src/client/api/transactions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enrichTransactions: () => (/* binding */ debouncedEnrichTransactions),
/* harmony export */   getCashFlow: () => (/* binding */ debouncedGetCashFlow),
/* harmony export */   getMicroDetailsViewData: () => (/* binding */ debouncedGetMicroDetailsViewData)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/client/api/api.ts");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



//Fetch all transactions
const getCashFlow = ({ configuration, start_date, end_date, linkedAccountId, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res;
        let endpoint = "/transactions/cash_flow/";
        if (start_date && end_date) {
            endpoint += `?start_date=${start_date}&end_date=${end_date}`;
        }
        if (linkedAccountId) {
            endpoint += `&linked_account_id=${linkedAccountId}`;
        }
        res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: endpoint,
            token: configuration.token,
            publicKey: configuration.publicKey,
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
const debouncedGetCashFlow = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_2__.debounce)(getCashFlow, 300);

const getMicroDetailsViewData = ({ configuration, linkedAccountId, startDate, endDate, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
            endpoint: "/transactions/micro_details_view",
            token: configuration.token,
            publicKey: configuration.publicKey,
            data: JSON.stringify({
                linked_account_id: linkedAccountId,
                start_date: startDate,
                end_date: endDate,
            }),
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
const debouncedGetMicroDetailsViewData = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_2__.debounce)(getMicroDetailsViewData, 300);

const enrichTransactions = ({ configuration, start_date, end_date, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (start_date && end_date) {
            const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
                endpoint: `/transactions/enrich_data/?start_date=${start_date}&end_date=${end_date}`,
                token: configuration.token,
                data: {},
            });
            return res;
        }
        else {
            const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
                endpoint: `/transactions/enrich_data/`,
                token: configuration.token,
                data: {},
            });
            return res;
        }
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
const debouncedEnrichTransactions = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_2__.debounce)(enrichTransactions, 300);



/***/ }),

/***/ "./src/client/pages/components/AnimatedNumber.tsx":
/*!********************************************************!*\
  !*** ./src/client/pages/components/AnimatedNumber.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AnimatedNumber = ({ target, duration }) => {
    const [currentValue, setCurrentValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        // Determine whether we are animating up or down
        const isAnimatingDown = currentValue > target;
        // Calculate the total animation steps needed
        const frameRate = 1000 / 60; // Assuming 60 frames per second
        const totalSteps = Math.round((duration / 10) / frameRate);
        // Determine the difference between the current value and the target, to calculate the correct step value
        const difference = target - currentValue;
        const stepValue = difference / totalSteps;
        let currentStep = 0;
        // Update the current value at each step
        const interval = setInterval(() => {
            currentStep++;
            setCurrentValue(prevValue => {
                // Determine the new value based on the direction of the animation
                const newValue = isAnimatingDown
                    ? Math.max(prevValue + stepValue, target) // Ensure it does not go below the target when animating down
                    : Math.min(prevValue + stepValue, target); // Ensure it does not exceed the target when animating up
                if (currentStep >= totalSteps) {
                    clearInterval(interval);
                    return target; // Ensure it ends exactly at the target
                }
                return newValue;
            });
        }, frameRate);
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [target, duration, currentValue]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Math.round(currentValue).toLocaleString("en-US") }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedNumber);


/***/ }),

/***/ "./src/client/pages/components/FilterButton.tsx":
/*!******************************************************!*\
  !*** ./src/client/pages/components/FilterButton.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const FilterButton = ({ label, onClick, isActive, id }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: `${isActive
            ? "bg-skin-secondaryWithOpacity rounded-full drop-shadow-lg"
            : " bg-skin-accent2 rounded-full"} px-4 py-2 mr-2 mb-3`, onClick: onClick, id: `${id}` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${isActive
                ? " text-skin-primary font-primary text-xs font-medium tracking-longtext"
                : " text-skin-base font-primary text-xs font-medium tracking-longtext"}` }, { children: label })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterButton);


/***/ }),

/***/ "./src/client/pages/components/custom-date-picker/CustomSelectDropDown.tsx":
/*!*********************************************************************************!*\
  !*** ./src/client/pages/components/custom-date-picker/CustomSelectDropDown.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



const CustomSelect = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  position: relative;
`;
const SelectButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button `
  border: 1px solid #101010;
  border-radius: 8px;
  color: white;
  background: #101010;
  appearance: none;
  min-width: 100px;
  padding: 8px 16px;
  cursor: pointer;
`;
const Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  position: absolute;
  margin-top: 5px;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #101010;
  border-radius: 8px;
  z-index: 100;
`;
const Option = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  padding: 8px 16px;
`;
const CustomSelectDropdown = ({ options, onSelect, defaultValue, isDisabled, }) => {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Specify the type of the ref
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CustomSelect, Object.assign({ className: "font-custom" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectButton, Object.assign({ className: "font-custom", onClick: isDisabled ? () => { } : toggleDropdown }, { children: selectedOption || "Select an option" })), isOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dropdown, Object.assign({ ref: dropdownRef }, { children: options.map((option, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Option, Object.assign({ className: "font-custom", onClick: () => handleSelect(option) }, { children: option }), index))) })))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSelectDropdown);


/***/ }),

/***/ "./src/client/pages/components/custom-date-picker/CustomerDateRangePicker.tsx":
/*!************************************************************************************!*\
  !*** ./src/client/pages/components/custom-date-picker/CustomerDateRangePicker.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/setYear.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/setMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isAfter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameDay.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameYear.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/getYear.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/subMonths.mjs");
/* harmony import */ var _CustomSelectDropDown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CustomSelectDropDown */ "./src/client/pages/components/custom-date-picker/CustomSelectDropDown.tsx");
/* harmony import */ var client_store_insightsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/insightsStore */ "./src/client/store/insightsStore.ts");






const DatePickerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  position: relative;
`;
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  position: absolute;
  top: 50%;
  transform: translateY(-65%);
  left: 10px;
  pointer-events: none;
`;
const DatePickerInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input `
  padding: 10px;
  font-size: 16px;
  min-width: 225px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 8px;
  //   box-shadow: 0 1px 30px rgb(7 100 137 / 30%);
  margin-bottom: 5px;
  outline: none;
`;
const CalendarModal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  position: fixed; /* Continue using fixed positioning */
  top: 50%; /* Set top to 50% of the viewport height */
  left: 50%; /* Set left to 50% of the viewport width */
  transform: translate(-50%, -50%); /* Center the modal perfectly */
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  z-index: 100; /* Ensure this z-index is higher than the parent modal if needed */
  box-shadow: 0 1px 30px rgb(7 100 137 / 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto; /* Or a specific width if needed */
  max-width: 100%; /* Ensure it doesn't overflow the viewport */
  max-height: 100%; /* Ensure it doesn't overflow the viewport */
  overflow: auto;
`;
const CalendarHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;
const MonthYearSelection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
const DayName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  width: 40px; /* Adjust width to match Day */
  text-align: center;
  margin: 5px 0;
`;
const CalendarGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  justify-items: center;
`;
const Day = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) => props.isToday ? "#e0e0e0" : props.isInRange ? "#101010" : "transparent"};
  color: ${(props) => props.isToday
    ? "black"
    : props.isInRange
        ? "#fff"
        : props.isCurrentMonth
            ? "black"
            : "#ccc"};
  border-radius: 50%;
  border: ${(props) => (props.isSelected ? "2px solid #101010" : "none")};
  &:hover {
    background: ${(props) => !props.isSelected && props.isHovered ? "#c4c4c4" : ""};
  }
`;
const CustomDateRangePicker = ({ onDateRangeSelect, startDate, endDate, disabled, restrictToCurrentMonth, lastUpdatedEnv, isActive, placeholder, }) => {
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dateRange, setDateRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        start: startDate,
        end: endDate,
    });
    const [hoverDate, setHoverDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [currentMonth, setCurrentMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [startMonth, setStartMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [lastUpdated, setLastUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lastUpdatedEnv !== null && lastUpdatedEnv !== void 0 ? lastUpdatedEnv : "props");
    const insightsStore = (0,client_store_insightsStore__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const months = Array.from(new Array(12), (_, index) => index);
    function getYears(numYears) {
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: numYears }, (_, i) => currentYear - numYears + 1 + i);
        return years.sort((a, b) => b - a);
    }
    // Helper function to generate calendar dates
    const generateCalendarDates = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currentMonth) => {
        const startDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfMonth)(currentMonth));
        const endDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.endOfWeek)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.endOfMonth)(currentMonth));
        const dates = [];
        for (let date = startDay; date <= endDay; date = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.addDays)(date, 1)) {
            dates.push(date);
        }
        return dates;
    }, [restrictToCurrentMonth]);
    // use effect for updating dateRange from startdate and endDate
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (startDate && endDate) {
            setDateRange({ start: startDate, end: endDate });
        }
    }, [startDate, endDate]);
    const handleDateSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((date) => {
        var _a, _b;
        if (dateRange.start &&
            !dateRange.end &&
            (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isBefore)(date, dateRange.start)) {
            setDateRange({ start: date, end: null });
        }
        else if (!dateRange.start || dateRange.end) {
            setDateRange({ start: date, end: null });
        }
        else {
            setDateRange({ start: dateRange.start, end: date });
            const dateFilterName = checkDateRange((_a = dateRange.start) !== null && _a !== void 0 ? _a : new Date(), date);
            if (dateFilterName) {
                insightsStore.setInsightsDateFilterName(dateFilterName);
            }
            else {
                insightsStore.setInsightsDateFilterName(renderDateInputValue(dateRange.start, date));
            }
            insightsStore.setInsightsStartDate((_b = dateRange.start) !== null && _b !== void 0 ? _b : new Date());
            insightsStore.setInsightsEndDate(date);
            setIsModalOpen(false); // Optionally close the modal
        }
    }, [dateRange]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (dateRange.start && dateRange.end && lastUpdated === "local") {
            onDateRangeSelect(dateRange);
        }
    }, [dateRange, lastUpdated]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (isModalOpen &&
                modalRef.current &&
                !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);
    const handleYearChange = (year) => {
        setCurrentMonth((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.setYear)(currentMonth, year));
    };
    const handleMonthChange = (month) => {
        const monthIndex = months.findIndex((m) => (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.setMonth)(new Date(), m), "MMMM") === month);
        setCurrentMonth((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.setMonth)(currentMonth, monthIndex));
    };
    const isInRange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((date) => {
        if (dateRange.start &&
            !dateRange.end &&
            hoverDate &&
            (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.isAfter)(hoverDate, dateRange.start) &&
            (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(date, hoverDate)) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.isAfter)(date, dateRange.start) && (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isBefore)(date, hoverDate);
        }
        if (dateRange.start && dateRange.end) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.isAfter)(date, dateRange.start) && (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isBefore)(date, dateRange.end);
        }
        return false;
    }, [dateRange.start, dateRange.end, hoverDate]);
    const isHoveredDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((date) => {
        return hoverDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(date, hoverDate) : false;
    }, [hoverDate]);
    const renderInputValue = () => {
        const startDisplay = lastUpdated === "local" ? dateRange.start : startDate;
        const endDisplay = lastUpdated === "local" ? dateRange.end : endDate;
        const formattedStart = startDisplay
            ? (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.isSameYear)(startDisplay, endDisplay) &&
                (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(startDisplay, endDisplay)
                ? (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(startDisplay, "MMM d")
                : (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(startDisplay, "MMM d, yyyy")
            : "";
        const formattedEnd = endDisplay ? (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(endDisplay, "MMM d, yyyy") : "";
        return formattedStart && formattedEnd
            ? `${formattedStart} - ${formattedEnd}`
            : "";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const newStartMonth = lastUpdated === "local" ? dateRange.start : startDate;
        if (newStartMonth && !(0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(newStartMonth, startMonth)) {
            setStartMonth(newStartMonth);
        }
    }, [lastUpdated, dateRange.start, startDate, startMonth]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (isModalOpen && startMonth) {
            setCurrentMonth((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfMonth)(startMonth));
        }
    }, [isModalOpen, startMonth]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DatePickerWrapper, Object.assign({ className: "font-custom" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: `${isActive
                    ? "bg-skin-secondaryWithOpacity rounded-full drop-shadow-lg"
                    : " bg-skin-accent2 rounded-full"} px-4 py-1 mr-2 mb-3`, onClick: () => setIsModalOpen(!isModalOpen) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${isActive
                        ? " text-skin-primary font-primary text-xs font-medium tracking-longtext"
                        : " text-skin-base font-primary text-xs font-medium tracking-longtext"}` }, { children: placeholder })) })), isModalOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CalendarModal, Object.assign({ ref: modalRef }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MonthYearSelection, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CustomSelectDropDown__WEBPACK_IMPORTED_MODULE_17__["default"], { options: months.map((month) => (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.setMonth)(new Date(), month), "MMMM")), onSelect: handleMonthChange, defaultValue: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(startMonth !== null && startMonth !== void 0 ? startMonth : currentMonth, "MMMM"), isDisabled: disabled }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CustomSelectDropDown__WEBPACK_IMPORTED_MODULE_17__["default"], { options: getYears(120), onSelect: handleYearChange, defaultValue: (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.getYear)(startMonth !== null && startMonth !== void 0 ? startMonth : currentMonth), isDisabled: disabled })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CalendarHeader, Object.assign({ className: "font-custom" }, { children: ["S", "M", "T", "W", "T", "F", "S"].map((dayName) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DayName, { children: dayName }, dayName))) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CalendarGrid, Object.assign({ className: "font-custom" }, { children: generateCalendarDates(currentMonth).map((date) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Day, Object.assign({ isToday: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(date, new Date()), isCurrentMonth: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(date, currentMonth), isSelected: !!((dateRange.start && (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(date, dateRange.start)) ||
                                (dateRange.end && (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(date, dateRange.end))), isInRange: isInRange(date), isHovered: isHoveredDate(date), onMouseEnter: () => setHoverDate(date), onMouseLeave: () => setHoverDate(null), onClick: () => handleDateSelect(date), style: {
                                opacity: restrictToCurrentMonth && !(0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(date, currentMonth)
                                    ? 0.01
                                    : 1,
                                pointerEvents: restrictToCurrentMonth && !(0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(date, currentMonth)
                                    ? "none"
                                    : "auto",
                            } }, { children: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(date, "d") }), date.toString()))) }))] })))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDateRangePicker);
const renderDateInputValue = (startDisplay, endDisplay) => {
    const formattedStart = startDisplay
        ? (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.isSameYear)(startDisplay, endDisplay) &&
            (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(startDisplay, endDisplay)
            ? (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(startDisplay, "MMM, d")
            : (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(startDisplay, "MMM d, yyyy")
        : "";
    const formattedEnd = endDisplay ? (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(endDisplay, "MMM d, yyyy") : "";
    return formattedStart && formattedEnd
        ? `${formattedStart} - ${formattedEnd}`
        : "";
};
const checkDateRange = (startDate, endDate) => {
    const today = new Date();
    const currentMonthStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfMonth)(today);
    const currentMonthEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.endOfMonth)(today);
    const lastMonthStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfMonth)((0,date_fns__WEBPACK_IMPORTED_MODULE_19__.subMonths)(today, 1));
    const lastMonthEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.endOfMonth)((0,date_fns__WEBPACK_IMPORTED_MODULE_19__.subMonths)(today, 1));
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(startDate, currentMonthStart) &&
        (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(endDate, currentMonthEnd)) {
        return "This month";
    }
    else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(startDate, lastMonthStart) &&
        (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.isSameDay)(endDate, lastMonthEnd)) {
        return "Last month";
    }
    else {
        return false; // Not exactly matching the start and end of the current or last month
    }
};


/***/ }),

/***/ "./src/client/pages/components/insights/CashFlowFilterButton.tsx":
/*!***********************************************************************!*\
  !*** ./src/client/pages/components/insights/CashFlowFilterButton.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _assets_images_bank_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/bank.svg */ "./src/client/assets/images/bank.svg");


const CashFlowFilterButton = ({ label, onClick, isActive, id, icon, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ className: `flex flex-row ${isActive
            ? "bg-skin-secondaryWithOpacity rounded-full drop-shadow-lg"
            : " bg-skin-accent2 rounded-full"} px-4 py-1 mr-2 mb-3`, onClick: onClick, id: `${id}` }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `mr-2 ${isActive ? "text-skin-primary" : "text-skin-base"}` }, { children: icon ? (icon) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom text-skin-primary font-medium tracking-title text-base mr-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_bank_svg__WEBPACK_IMPORTED_MODULE_1__ }) }))) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${isActive
                    ? " text-skin-primary font-primary text-xs font-medium tracking-wide"
                    : " text-skin-base font-primary text-xs font-medium tracking-wide"}` }, { children: label }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CashFlowFilterButton);


/***/ }),

/***/ "./src/client/pages/insights/InsightsFilters.tsx":
/*!*******************************************************!*\
  !*** ./src/client/pages/insights/InsightsFilters.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/insightsStore */ "./src/client/store/insightsStore.ts");
/* harmony import */ var client_utils_MockData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/utils/MockData */ "./src/client/utils/MockData.tsx");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _assets_images_budgets_insights_bank_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/budgets-insights/bank.svg */ "./src/client/assets/images/budgets-insights/bank.svg");
/* harmony import */ var _components_FilterButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FilterButton */ "./src/client/pages/components/FilterButton.tsx");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _components_custom_date_picker_CustomerDateRangePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/custom-date-picker/CustomerDateRangePicker */ "./src/client/pages/components/custom-date-picker/CustomerDateRangePicker.tsx");










const InsightsFilters = ({ accounts, activeAccount, onClick, closeBottomSheet, }) => {
    const insightsStore = client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState();
    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [activeAccountName, setActiveAccountName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeAccount === null || activeAccount === void 0 ? void 0 : activeAccount.name);
    const isAllAccountsActive = !activeAccount;
    const calculateDateRange = (selectedFilter) => {
        const currentDate = new Date();
        let startDate = new Date();
        let endDate = new Date();
        switch (selectedFilter.id) {
            case 1: // This month
                startDate.setDate(1);
                break;
            case 2: // Last month
                startDate.setMonth(currentDate.getMonth() - 1, 1);
                endDate.setDate(0); // Last day of last month
                break;
            case 3: // Last 3 months
                startDate.setMonth(currentDate.getMonth() - 2, 1);
                break;
            case 4: // Last 6 months
                startDate.setMonth(currentDate.getMonth() - 5, 1);
                break;
            default:
                // Custom date or All time, use default values
                startDate = new Date("2023-01-01");
                endDate = new Date();
                break;
        }
        // Format dates as "YYYY-MM-DD"
        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);
        return { formattedStartDate, formattedEndDate };
    };
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
    const allAccounts = {
        id: -1,
        account_id: "all",
        account_number: "all",
        name: "All accounts",
        type: "all",
        balance: 0,
        is_linked: false,
        created_on: "N/A",
        created_at: "N/A",
        source: "N/A",
        transactions: {
            total_debit: 0,
            total_credit: 0,
        },
    };
    const uniqueAccounts = [
        ...new Map(accounts === null || accounts === void 0 ? void 0 : accounts.map((account) => [account.name, account])).values(),
    ];
    uniqueAccounts.unshift(allAccounts);
    const selectedDateFilterName = insightsStore.insightsDateFilterName;
    const handleAccountSelection = (selectedAccount) => {
        var _a, _b;
        setUpdate(!update);
        // Update insights store with the selected account details
        client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"]
            .getState()
            .setInsightsActiveInstitutionId((_a = selectedAccount === null || selectedAccount === void 0 ? void 0 : selectedAccount.id) !== null && _a !== void 0 ? _a : null);
        client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"]
            .getState()
            .setInsightsActiveInstitutionName((_b = selectedAccount === null || selectedAccount === void 0 ? void 0 : selectedAccount.name) !== null && _b !== void 0 ? _b : "All accounts");
    };
    const handleDateFilterSelection = (selectedFilter) => {
        setUpdate(!update);
        // Now, calculate the date range based on the selected filter
        const { formattedStartDate, formattedEndDate } = calculateDateRange(selectedFilter);
        client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"]
            .getState()
            .setInsightsStartDate(new Date(formattedStartDate));
        client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().setInsightsEndDate(new Date(formattedEndDate));
        client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().setInsightsDateFilterName(selectedFilter.name);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-6 mx-4" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-xs font-primary font-medium text-skin-base tracking-longtext" }, { children: "Clear" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom text-skin-base font-medium tracking-title text-base mr-8" }, { children: "Filter by" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex flex-col" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-start items-center mt-10" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom text-skin-base font-medium tracking-title text-base mr-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_images_budgets_insights_bank_svg__WEBPACK_IMPORTED_MODULE_3__, alt: "" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom text-skin-base font-medium tracking-title text-base" }, { children: "My accounts" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "py-3 flex flex-wrap items-center mb-4" }, { children: uniqueAccounts.map((element, i) => {
                    const id = i.toString(); // Convert index to string for id
                    const isActive = id === "all"
                        ? isAllAccountsActive
                        : element.account_id === (activeAccount === null || activeAccount === void 0 ? void 0 : activeAccount.account_id);
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilterButton__WEBPACK_IMPORTED_MODULE_4__["default"], { label: element.name, isActive: activeAccountName === element.name || isActive, onClick: () => {
                            if (onClick) {
                                onClick(element);
                                handleAccountSelection(element);
                            }
                        }, id: id }, i));
                }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow h-px bg-skin-accent3 mb-6" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-start items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom text-skin-base font-medium tracking-title text-base mr-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiCalendar, {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-custom text-skin-base font-medium tracking-title text-base" }, { children: "Date" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "py-3 flex flex-wrap items-center mb-4" }, { children: [client_utils_MockData__WEBPACK_IMPORTED_MODULE_6__.dateFilters === null || client_utils_MockData__WEBPACK_IMPORTED_MODULE_6__.dateFilters === void 0 ? void 0 : client_utils_MockData__WEBPACK_IMPORTED_MODULE_6__.dateFilters.map((element, i) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilterButton__WEBPACK_IMPORTED_MODULE_4__["default"], { label: element.name, isActive: element.name === selectedDateFilterName, onClick: () => handleDateFilterSelection(element), id: element.id.toString() }, i))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_custom_date_picker_CustomerDateRangePicker__WEBPACK_IMPORTED_MODULE_7__["default"], { onDateRangeSelect: () => { }, disabled: false, startDate: insightsStore.insightsStartDate
                            ? (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(insightsStore.insightsStartDate, "yyyy-MM-dd")
                            : "", endDate: insightsStore.insightsEndDate
                            ? (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(insightsStore.insightsEndDate, "yyyy-MM-dd")
                            : "", lastUpdatedEnv: "props", placeholder: "Custom date", isActive: false, restrictToCurrentMonth: false })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_9__["default"], { title: "Apply", click: () => {
                        client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().setInsightsLoading(true);
                        closeBottomSheet();
                        client_store_insightsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().setInsightsLoading(false);
                    } }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsFilters);


/***/ }),

/***/ "./src/client/store/accountStore.ts":
/*!******************************************!*\
  !*** ./src/client/store/accountStore.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useAccountStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
    accounts: [],
    balance: 0,
    isStale: true,
    filter: null,
    loading: false,
    account_id: "",
    account_name: "",
    openAccountBottomSheet: false,
    setOpenAccountBottomSheet: (open) => {
        return set((state) => {
            return {
                openAccountBottomSheet: open,
            };
        });
    },
    init: (accounts) => {
        return set((state) => {
            // const newState = (accounts || []).map((account: Account) => {
            //   return [account.account_id, account];
            // });
            // const currentState = (state.accounts || []).map((account: Account) => {
            //   return [account.account_id, account];
            // });
            // const nextState = new Map([...newState, ...currentState]);
            const results = {
                accounts: accounts,
            };
            return results;
        });
    },
    setStale: (stale) => {
        return set((state) => {
            const results = {
                isStale: stale,
            };
            return results;
        });
    },
    filterBy: (account) => {
        return set((state) => {
            const results = {
                filter: account,
            };
            return results;
        });
    },
    setBalance: (balance) => {
        return set((state) => {
            const result = {
                balance: balance,
            };
            return result;
        });
    },
    setAccountLoading: (loading) => {
        return set((state) => {
            const results = {
                loading: loading,
            };
            return results;
        });
    },
    selectAccount: (account) => {
        return set((state) => {
            const results = {
                account_id: account.account_id,
                account_name: account.name,
            };
            return results;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAccountStore);


/***/ }),

/***/ "./src/client/store/insightsStore.ts":
/*!*******************************************!*\
  !*** ./src/client/store/insightsStore.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useInsightsStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set) => ({
    insightsStartDate: getDefaultStartDate(),
    insightsEndDate: getDefaultEndDate(),
    insightsActiveInstitutionId: null,
    insightsLoading: false,
    insightsActiveInstitutionName: "All accounts",
    insightsDateFilterName: "This month",
    insightsDateFilterId: "0",
    setInsightsLoading: (loading) => {
        set({ insightsLoading: loading });
    },
    setInsightsVariables: (startDate, endDate, institutionId) => {
        set({
            insightsStartDate: startDate,
            insightsEndDate: endDate,
            insightsActiveInstitutionId: institutionId,
        });
    },
    setInsightsStartDate: (startDate) => {
        set({ insightsStartDate: startDate });
    },
    setInsightsEndDate: (endDate) => {
        set({ insightsEndDate: endDate });
    },
    setInsightsActiveInstitutionId: (institutionId) => {
        set({ insightsActiveInstitutionId: institutionId });
    },
    setInsightsActiveInstitutionName: (institutionName) => {
        set({ insightsActiveInstitutionName: institutionName });
    },
    setInsightsDateFilterName: (dateFilterName) => {
        set({ insightsDateFilterName: dateFilterName });
    },
    setInsightsDateFilterId: (dateFilterId) => {
        set({ insightsDateFilterId: dateFilterId });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInsightsStore);
function getDefaultStartDate() {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    return startOfMonth;
}
function getDefaultEndDate() {
    const currentDate = new Date();
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    return endOfMonth;
}


/***/ }),

/***/ "./src/client/assets/images/bank.svg":
/*!*******************************************!*\
  !*** ./src/client/assets/images/bank.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a423f6c8ed525d91a78.svg";

/***/ }),

/***/ "./src/client/assets/images/budgets-insights/bank.svg":
/*!************************************************************!*\
  !*** ./src/client/assets/images/budgets-insights/bank.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3435a965fab55c6e45c.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9hcGlfdHJhbnNhY3Rpb25zX3RzLXNyY19jbGllbnRfcGFnZXNfY29tcG9uZW50c19BbmltYXRlZE51bWJlcl90c3gtc3JjX2NsaWVudF9wYWdlLTcwYmVkNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRjtBQUNTO0FBQ25ELHdCQUF3QjtBQUN4QixNQUFNLFdBQVcsR0FBRyxDQUFPLEVBQ3pCLGFBQWEsRUFDYixVQUFVLEVBQ1YsUUFBUSxFQUNSLGVBQWUsR0FNaEIsRUFBRSxFQUFFO0lBQ0gsSUFBSTtRQUNGLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxRQUFRLEdBQUcsMEJBQTBCLENBQUM7UUFDMUMsSUFBSSxVQUFVLElBQUksUUFBUSxFQUFFO1lBQzFCLFFBQVEsSUFBSSxlQUFlLFVBQVUsYUFBYSxRQUFRLEVBQUUsQ0FBQztTQUM5RDtRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLFFBQVEsSUFBSSxzQkFBc0IsZUFBZSxFQUFFLENBQUM7U0FDckQ7UUFDRCxHQUFHLEdBQUcsTUFBTSwrQ0FBUyxDQUFDO1lBQ3BCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztZQUMxQixTQUFTLEVBQUUsYUFBYSxDQUFDLFNBQVM7U0FDbkMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBRUYsTUFBTSxvQkFBb0IsR0FBRyxpRUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVUO0FBRS9DLE1BQU0sdUJBQXVCLEdBQUcsQ0FBTyxFQUNyQyxh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cy8uL3NyYy9jbGllbnQvYXBpL3RyYW5zYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9BbmltYXRlZE51bWJlci50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9idWRnZXRzLWFuZC1pbnNpZ2h0cy8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9jdXN0b20tZGF0ZS1waWNrZXIvQ3VzdG9tU2VsZWN0RHJvcERvd24udHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2N1c3RvbS1kYXRlLXBpY2tlci9DdXN0b21lckRhdGVSYW5nZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvaW5zaWdodHMvQ2FzaEZsb3dGaWx0ZXJCdXR0b24udHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9wYWdlcy9pbnNpZ2h0cy9JbnNpZ2h0c0ZpbHRlcnMudHN4Iiwid2VicGFjazovL2J1ZGdldHMtYW5kLWluc2lnaHRzLy4vc3JjL2NsaWVudC9zdG9yZS9hY2NvdW50U3RvcmUudHMiLCJ3ZWJwYWNrOi8vYnVkZ2V0cy1hbmQtaW5zaWdodHMvLi9zcmMvY2xpZW50L3N0b3JlL2luc2lnaHRzU3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhLCBwb3N0RGF0YSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L2Jyb3dzZXJcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG4vL0ZldGNoIGFsbCB0cmFuc2FjdGlvbnNcbmNvbnN0IGdldENhc2hGbG93ID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgc3RhcnRfZGF0ZSxcbiAgZW5kX2RhdGUsXG4gIGxpbmtlZEFjY291bnRJZCxcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgc3RhcnRfZGF0ZT86IHN0cmluZztcbiAgZW5kX2RhdGU/OiBzdHJpbmc7XG4gIGxpbmtlZEFjY291bnRJZD86IGFueTtcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzO1xuICAgIGxldCBlbmRwb2ludCA9IFwiL3RyYW5zYWN0aW9ucy9jYXNoX2Zsb3cvXCI7XG4gICAgaWYgKHN0YXJ0X2RhdGUgJiYgZW5kX2RhdGUpIHtcbiAgICAgIGVuZHBvaW50ICs9IGA/c3RhcnRfZGF0ZT0ke3N0YXJ0X2RhdGV9JmVuZF9kYXRlPSR7ZW5kX2RhdGV9YDtcbiAgICB9XG4gICAgaWYgKGxpbmtlZEFjY291bnRJZCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW5rZWRfYWNjb3VudF9pZD0ke2xpbmtlZEFjY291bnRJZH1gO1xuICAgIH1cbiAgICByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgICBwdWJsaWNLZXk6IGNvbmZpZ3VyYXRpb24ucHVibGljS2V5LFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbmNvbnN0IGRlYm91bmNlZEdldENhc2hGbG93ID0gZGVib3VuY2UoZ2V0Q2FzaEZsb3csIDMwMCk7XG5cbmV4cG9ydCB7IGRlYm91bmNlZEdldENhc2hGbG93IGFzIGdldENhc2hGbG93IH07XG5cbmNvbnN0IGdldE1pY3JvRGV0YWlsc1ZpZXdEYXRhID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgbGlua2VkQWNjb3VudElkLFxuICBzdGFydERhdGUsXG4gIGVuZERhdGUsXG59OiB7XG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG4gIGxpbmtlZEFjY291bnRJZDogYW55O1xuICBzdGFydERhdGU6IGFueTtcbiAgZW5kRGF0ZTogYW55O1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKHtcbiAgICAgIGVuZHBvaW50OiBcIi90cmFuc2FjdGlvbnMvbWljcm9fZGV0YWlsc192aWV3XCIsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgIHB1YmxpY0tleTogY29uZmlndXJhdGlvbi5wdWJsaWNLZXksXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGxpbmtlZF9hY2NvdW50X2lkOiBsaW5rZWRBY2NvdW50SWQsXG4gICAgICAgIHN0YXJ0X2RhdGU6IHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kX2RhdGU6IGVuZERhdGUsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuY29uc3QgZGVib3VuY2VkR2V0TWljcm9EZXRhaWxzVmlld0RhdGEgPSBkZWJvdW5jZShnZXRNaWNyb0RldGFpbHNWaWV3RGF0YSwgMzAwKTtcblxuZXhwb3J0IHsgZGVib3VuY2VkR2V0TWljcm9EZXRhaWxzVmlld0RhdGEgYXMgZ2V0TWljcm9EZXRhaWxzVmlld0RhdGEgfTtcblxuY29uc3QgZW5yaWNoVHJhbnNhY3Rpb25zID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgc3RhcnRfZGF0ZSxcbiAgZW5kX2RhdGUsXG59OiB7XG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG4gIHN0YXJ0X2RhdGU/OiBzdHJpbmc7XG4gIGVuZF9kYXRlPzogc3RyaW5nO1xufSkgPT4ge1xuICB0cnkge1xuICAgIGlmIChzdGFydF9kYXRlICYmIGVuZF9kYXRlKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSh7XG4gICAgICAgIGVuZHBvaW50OiBgL3RyYW5zYWN0aW9ucy9lbnJpY2hfZGF0YS8/c3RhcnRfZGF0ZT0ke3N0YXJ0X2RhdGV9JmVuZF9kYXRlPSR7ZW5kX2RhdGV9YCxcbiAgICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSh7XG4gICAgICAgIGVuZHBvaW50OiBgL3RyYW5zYWN0aW9ucy9lbnJpY2hfZGF0YS9gLFxuICAgICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgICAgZGF0YToge30sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuY29uc3QgZGVib3VuY2VkRW5yaWNoVHJhbnNhY3Rpb25zID0gZGVib3VuY2UoZW5yaWNoVHJhbnNhY3Rpb25zLCAzMDApO1xuXG5leHBvcnQgeyBkZWJvdW5jZWRFbnJpY2hUcmFuc2FjdGlvbnMgYXMgZW5yaWNoVHJhbnNhY3Rpb25zIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEFuaW1hdGVkTnVtYmVyUHJvcHMge1xuICAgIHRhcmdldDogbnVtYmVyOyAvLyBUaGUgZmluYWwgbnVtYmVyIHlvdSB3YW50IHRvIGFuaW1hdGUgdG9cbiAgICBkdXJhdGlvbjogbnVtYmVyOyAvLyBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kc1xufVxuXG5jb25zdCBBbmltYXRlZE51bWJlcjogUmVhY3QuRkM8QW5pbWF0ZWROdW1iZXJQcm9wcz4gPSAoeyB0YXJnZXQsIGR1cmF0aW9uIH0pID0+IHtcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLCBzZXRDdXJyZW50VmFsdWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB3ZSBhcmUgYW5pbWF0aW5nIHVwIG9yIGRvd25cbiAgICAgICAgY29uc3QgaXNBbmltYXRpbmdEb3duID0gY3VycmVudFZhbHVlID4gdGFyZ2V0O1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgYW5pbWF0aW9uIHN0ZXBzIG5lZWRlZFxuICAgICAgICBjb25zdCBmcmFtZVJhdGUgPSAxMDAwIC8gNjA7IC8vIEFzc3VtaW5nIDYwIGZyYW1lcyBwZXIgc2Vjb25kXG4gICAgICAgIGNvbnN0IHRvdGFsU3RlcHMgPSBNYXRoLnJvdW5kKChkdXJhdGlvbiAvIDEwKSAvIGZyYW1lUmF0ZSk7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBjdXJyZW50IHZhbHVlIGFuZCB0aGUgdGFyZ2V0LCB0byBjYWxjdWxhdGUgdGhlIGNvcnJlY3Qgc3RlcCB2YWx1ZVxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gdGFyZ2V0IC0gY3VycmVudFZhbHVlO1xuICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBkaWZmZXJlbmNlIC8gdG90YWxTdGVwcztcblxuICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSAwO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSBhdCBlYWNoIHN0ZXBcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50U3RlcCsrO1xuICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKHByZXZWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGRpcmVjdGlvbiBvZiB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBpc0FuaW1hdGluZ0Rvd25cbiAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1heChwcmV2VmFsdWUgKyBzdGVwVmFsdWUsIHRhcmdldCkgLy8gRW5zdXJlIGl0IGRvZXMgbm90IGdvIGJlbG93IHRoZSB0YXJnZXQgd2hlbiBhbmltYXRpbmcgZG93blxuICAgICAgICAgICAgICAgICAgICA6IE1hdGgubWluKHByZXZWYWx1ZSArIHN0ZXBWYWx1ZSwgdGFyZ2V0KTsgLy8gRW5zdXJlIGl0IGRvZXMgbm90IGV4Y2VlZCB0aGUgdGFyZ2V0IHdoZW4gYW5pbWF0aW5nIHVwXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwID49IHRvdGFsU3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7IC8vIEVuc3VyZSBpdCBlbmRzIGV4YWN0bHkgYXQgdGhlIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnJhbWVSYXRlKTtcblxuICAgICAgICAvLyBDbGVhbnVwIHRoZSBpbnRlcnZhbCBvbiBjb21wb25lbnQgdW5tb3VudFxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW3RhcmdldCwgZHVyYXRpb24sIGN1cnJlbnRWYWx1ZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtNYXRoLnJvdW5kKGN1cnJlbnRWYWx1ZSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkTnVtYmVyO1xuIiwidHlwZSBGaWx0ZXJCdXR0b25Qcm9wcyA9IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xufTtcbmNvbnN0IEZpbHRlckJ1dHRvbiA9ICh7IGxhYmVsLCBvbkNsaWNrLCBpc0FjdGl2ZSwgaWQgfTogRmlsdGVyQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgID8gXCJiZy1za2luLXNlY29uZGFyeVdpdGhPcGFjaXR5IHJvdW5kZWQtZnVsbCBkcm9wLXNoYWRvdy1sZ1wiXG4gICAgICAgICAgOiBcIiBiZy1za2luLWFjY2VudDIgcm91bmRlZC1mdWxsXCJcbiAgICAgIH0gcHgtNCBweS0yIG1yLTIgbWItM2B9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgaWQ9e2Ake2lkfWB9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICA/IFwiIHRleHQtc2tpbi1wcmltYXJ5IGZvbnQtcHJpbWFyeSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYWNraW5nLWxvbmd0ZXh0XCJcbiAgICAgICAgICAgIDogXCIgdGV4dC1za2luLWJhc2UgZm9udC1wcmltYXJ5IHRleHQteHMgZm9udC1tZWRpdW0gdHJhY2tpbmctbG9uZ3RleHRcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ3VzdG9tU2VsZWN0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU2VsZWN0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwMTAxMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBEcm9wZG93biA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDEwMTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogMTAwO1xuYDtcblxuY29uc3QgT3B0aW9uID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogOHB4IDE2cHg7XG5gO1xuXG5jb25zdCBDdXN0b21TZWxlY3REcm9wZG93biA9ICh7XG4gIG9wdGlvbnMsXG4gIG9uU2VsZWN0LFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzRGlzYWJsZWQsXG59OiB7XG4gIG9wdGlvbnM6IGFueTtcbiAgb25TZWxlY3Q6IGFueTtcbiAgZGVmYXVsdFZhbHVlOiBhbnk7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcbiAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpOyAvLyBTcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSByZWZcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBkcm9wZG93blJlZi5jdXJyZW50ICYmXG4gICAgICAgICFkcm9wZG93blJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxuICAgICAgKSB7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAob3B0aW9uOiBhbnkpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgb25TZWxlY3Qob3B0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDdXN0b21TZWxlY3QgY2xhc3NOYW1lPVwiZm9udC1jdXN0b21cIj5cbiAgICAgIDxTZWxlY3RCdXR0b24gY2xhc3NOYW1lPVwiZm9udC1jdXN0b21cIiBvbkNsaWNrPXtpc0Rpc2FibGVkID8gKCkgPT4geyB9IDogdG9nZ2xlRHJvcGRvd259PlxuICAgICAgICB7c2VsZWN0ZWRPcHRpb24gfHwgXCJTZWxlY3QgYW4gb3B0aW9uXCJ9XG4gICAgICA8L1NlbGVjdEJ1dHRvbj5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8RHJvcGRvd24gcmVmPXtkcm9wZG93blJlZn0+XG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb246IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgPE9wdGlvbiBjbGFzc05hbWU9XCJmb250LWN1c3RvbVwiIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChvcHRpb24pfT5cbiAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgKX1cbiAgICA8L0N1c3RvbVNlbGVjdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNlbGVjdERyb3Bkb3duO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpQ2FsZW5kYXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBmb3JtYXQsXG4gIGdldFllYXIsXG4gIHN0YXJ0T2ZNb250aCxcbiAgc3RhcnRPZldlZWssXG4gIGVuZE9mTW9udGgsXG4gIGVuZE9mV2VlayxcbiAgYWRkRGF5cyxcbiAgc2V0WWVhcixcbiAgc2V0TW9udGgsXG4gIGlzU2FtZU1vbnRoLFxuICBpc1NhbWVZZWFyLFxuICBpc1NhbWVEYXksXG4gIGlzQmVmb3JlLFxuICBpc0FmdGVyLFxuICBzdWJNb250aHMsXG59IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IEN1c3RvbVNlbGVjdERyb3Bkb3duIGZyb20gXCIuL0N1c3RvbVNlbGVjdERyb3BEb3duXCI7XG5pbXBvcnQgdXNlSW5zaWdodHNTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2luc2lnaHRzU3RvcmVcIjtcblxuY29uc3QgRGF0ZVBpY2tlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpO1xuICBsZWZ0OiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbmA7XG5cbmNvbnN0IERhdGVQaWNrZXJJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtaW4td2lkdGg6IDIyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvLyAgIGJveC1zaGFkb3c6IDAgMXB4IDMwcHggcmdiKDcgMTAwIDEzNyAvIDMwJSk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IENhbGVuZGFyTW9kYWwgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIENvbnRpbnVlIHVzaW5nIGZpeGVkIHBvc2l0aW9uaW5nICovXG4gIHRvcDogNTAlOyAvKiBTZXQgdG9wIHRvIDUwJSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXG4gIGxlZnQ6IDUwJTsgLyogU2V0IGxlZnQgdG8gNTAlIG9mIHRoZSB2aWV3cG9ydCB3aWR0aCAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogQ2VudGVyIHRoZSBtb2RhbCBwZXJmZWN0bHkgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogMTAwOyAvKiBFbnN1cmUgdGhpcyB6LWluZGV4IGlzIGhpZ2hlciB0aGFuIHRoZSBwYXJlbnQgbW9kYWwgaWYgbmVlZGVkICovXG4gIGJveC1zaGFkb3c6IDAgMXB4IDMwcHggcmdiKDcgMTAwIDEzNyAvIDMwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvOyAvKiBPciBhIHNwZWNpZmljIHdpZHRoIGlmIG5lZWRlZCAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIEVuc3VyZSBpdCBkb2Vzbid0IG92ZXJmbG93IHRoZSB2aWV3cG9ydCAqL1xuICBtYXgtaGVpZ2h0OiAxMDAlOyAvKiBFbnN1cmUgaXQgZG9lc24ndCBvdmVyZmxvdyB0aGUgdmlld3BvcnQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuXG5jb25zdCBDYWxlbmRhckhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgTW9udGhZZWFyU2VsZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5cbmNvbnN0IERheU5hbWUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDBweDsgLyogQWRqdXN0IHdpZHRoIHRvIG1hdGNoIERheSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDA7XG5gO1xuXG5jb25zdCBDYWxlbmRhckdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICBnYXA6IDVweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRGF5ID0gc3R5bGVkLmRpdjx7XG4gIGlzVG9kYXk6IGJvb2xlYW47XG4gIGlzQ3VycmVudE1vbnRoOiBib29sZWFuO1xuICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICBpc0luUmFuZ2U6IGJvb2xlYW47XG4gIGlzSG92ZXJlZDogYm9vbGVhbjtcbn0+YFxuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5pc1RvZGF5ID8gXCIjZTBlMGUwXCIgOiBwcm9wcy5pc0luUmFuZ2UgPyBcIiMxMDEwMTBcIiA6IFwidHJhbnNwYXJlbnRcIn07XG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5pc1RvZGF5XG4gICAgICA/IFwiYmxhY2tcIlxuICAgICAgOiBwcm9wcy5pc0luUmFuZ2VcbiAgICAgID8gXCIjZmZmXCJcbiAgICAgIDogcHJvcHMuaXNDdXJyZW50TW9udGhcbiAgICAgID8gXCJibGFja1wiXG4gICAgICA6IFwiI2NjY1wifTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNTZWxlY3RlZCA/IFwiMnB4IHNvbGlkICMxMDEwMTBcIiA6IFwibm9uZVwiKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxuICAgICAgIXByb3BzLmlzU2VsZWN0ZWQgJiYgcHJvcHMuaXNIb3ZlcmVkID8gXCIjYzRjNGM0XCIgOiBcIlwifTtcbiAgfVxuYDtcblxuLy8gVHlwZXNcbmludGVyZmFjZSBEYXRlUmFuZ2Uge1xuICBzdGFydDogRGF0ZSB8IG51bGw7XG4gIGVuZDogRGF0ZSB8IG51bGw7XG59XG5cbmludGVyZmFjZSBDdXN0b21EYXRlUmFuZ2VQaWNrZXJQcm9wcyB7XG4gIG9uRGF0ZVJhbmdlU2VsZWN0OiAocmFuZ2U6IERhdGVSYW5nZSkgPT4gdm9pZDtcbiAgc3RhcnREYXRlOiBhbnk7XG4gIGVuZERhdGU6IGFueTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHJlc3RyaWN0VG9DdXJyZW50TW9udGg/OiBib29sZWFuO1xuICBsYXN0VXBkYXRlZEVudjogXCJwcm9wc1wiIHwgXCJsb2NhbFwiO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbn1cblxuY29uc3QgQ3VzdG9tRGF0ZVJhbmdlUGlja2VyOiBSZWFjdC5GQzxDdXN0b21EYXRlUmFuZ2VQaWNrZXJQcm9wcz4gPSAoe1xuICBvbkRhdGVSYW5nZVNlbGVjdCxcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxuICBkaXNhYmxlZCxcbiAgcmVzdHJpY3RUb0N1cnJlbnRNb250aCxcbiAgbGFzdFVwZGF0ZWRFbnYsXG4gIGlzQWN0aXZlLFxuICBwbGFjZWhvbGRlcixcbn0pID0+IHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRlUmFuZ2UsIHNldERhdGVSYW5nZV0gPSB1c2VTdGF0ZTxEYXRlUmFuZ2U+KHtcbiAgICBzdGFydDogc3RhcnREYXRlLFxuICAgIGVuZDogZW5kRGF0ZSxcbiAgfSk7XG4gIGNvbnN0IFtob3ZlckRhdGUsIHNldEhvdmVyRGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50TW9udGgsIHNldEN1cnJlbnRNb250aF0gPSB1c2VTdGF0ZTxEYXRlPihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgW3N0YXJ0TW9udGgsIHNldFN0YXJ0TW9udGhdID0gdXNlU3RhdGU8RGF0ZT4obmV3IERhdGUoKSk7XG4gIGNvbnN0IFtsYXN0VXBkYXRlZCwgc2V0TGFzdFVwZGF0ZWRdID0gdXNlU3RhdGU8XCJwcm9wc1wiIHwgXCJsb2NhbFwiPihcbiAgICBsYXN0VXBkYXRlZEVudiA/PyBcInByb3BzXCJcbiAgKTtcblxuICBjb25zdCBpbnNpZ2h0c1N0b3JlID0gdXNlSW5zaWdodHNTdG9yZSgpO1xuXG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBtb250aHMgPSBBcnJheS5mcm9tKG5ldyBBcnJheSgxMiksIChfLCBpbmRleCkgPT4gaW5kZXgpO1xuXG4gIHR5cGUgWWVhciA9IG51bWJlcjtcblxuICBmdW5jdGlvbiBnZXRZZWFycyhudW1ZZWFyczogbnVtYmVyKTogWWVhcltdIHtcbiAgICBjb25zdCBjdXJyZW50WWVhcjogWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB5ZWFycyA9IEFycmF5LmZyb20oXG4gICAgICB7IGxlbmd0aDogbnVtWWVhcnMgfSxcbiAgICAgIChfLCBpKSA9PiBjdXJyZW50WWVhciAtIG51bVllYXJzICsgMSArIGlcbiAgICApO1xuICAgIHJldHVybiB5ZWFycy5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgY2FsZW5kYXIgZGF0ZXNcbiAgY29uc3QgZ2VuZXJhdGVDYWxlbmRhckRhdGVzID0gdXNlQ2FsbGJhY2soXG4gICAgKGN1cnJlbnRNb250aDogRGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnREYXkgPSBzdGFydE9mV2VlayhzdGFydE9mTW9udGgoY3VycmVudE1vbnRoKSk7XG4gICAgICBjb25zdCBlbmREYXkgPSBlbmRPZldlZWsoZW5kT2ZNb250aChjdXJyZW50TW9udGgpKTtcbiAgICAgIGNvbnN0IGRhdGVzOiBEYXRlW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGRhdGUgPSBzdGFydERheTsgZGF0ZSA8PSBlbmREYXk7IGRhdGUgPSBhZGREYXlzKGRhdGUsIDEpKSB7XG4gICAgICAgIGRhdGVzLnB1c2goZGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0ZXM7XG4gICAgfSxcbiAgICBbcmVzdHJpY3RUb0N1cnJlbnRNb250aF1cbiAgKTtcblxuICAvLyB1c2UgZWZmZWN0IGZvciB1cGRhdGluZyBkYXRlUmFuZ2UgZnJvbSBzdGFydGRhdGUgYW5kIGVuZERhdGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIHNldERhdGVSYW5nZSh7IHN0YXJ0OiBzdGFydERhdGUsIGVuZDogZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH0sIFtzdGFydERhdGUsIGVuZERhdGVdKTtcblxuICBjb25zdCBoYW5kbGVEYXRlU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGU6IERhdGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZGF0ZVJhbmdlLnN0YXJ0ICYmXG4gICAgICAgICFkYXRlUmFuZ2UuZW5kICYmXG4gICAgICAgIGlzQmVmb3JlKGRhdGUsIGRhdGVSYW5nZS5zdGFydClcbiAgICAgICkge1xuICAgICAgICBzZXREYXRlUmFuZ2UoeyBzdGFydDogZGF0ZSwgZW5kOiBudWxsIH0pO1xuICAgICAgfSBlbHNlIGlmICghZGF0ZVJhbmdlLnN0YXJ0IHx8IGRhdGVSYW5nZS5lbmQpIHtcbiAgICAgICAgc2V0RGF0ZVJhbmdlKHsgc3RhcnQ6IGRhdGUsIGVuZDogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERhdGVSYW5nZSh7IHN0YXJ0OiBkYXRlUmFuZ2Uuc3RhcnQsIGVuZDogZGF0ZSB9KTtcbiAgICAgICAgY29uc3QgZGF0ZUZpbHRlck5hbWUgPSBjaGVja0RhdGVSYW5nZShcbiAgICAgICAgICBkYXRlUmFuZ2Uuc3RhcnQgPz8gbmV3IERhdGUoKSxcbiAgICAgICAgICBkYXRlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkYXRlRmlsdGVyTmFtZSkge1xuICAgICAgICAgIGluc2lnaHRzU3RvcmUuc2V0SW5zaWdodHNEYXRlRmlsdGVyTmFtZShkYXRlRmlsdGVyTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zaWdodHNTdG9yZS5zZXRJbnNpZ2h0c0RhdGVGaWx0ZXJOYW1lKFxuICAgICAgICAgICAgcmVuZGVyRGF0ZUlucHV0VmFsdWUoZGF0ZVJhbmdlLnN0YXJ0LCBkYXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zaWdodHNTdG9yZS5zZXRJbnNpZ2h0c1N0YXJ0RGF0ZShkYXRlUmFuZ2Uuc3RhcnQgPz8gbmV3IERhdGUoKSk7XG4gICAgICAgIGluc2lnaHRzU3RvcmUuc2V0SW5zaWdodHNFbmREYXRlKGRhdGUpO1xuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7IC8vIE9wdGlvbmFsbHkgY2xvc2UgdGhlIG1vZGFsXG4gICAgICB9XG4gICAgfSxcbiAgICBbZGF0ZVJhbmdlXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGVSYW5nZS5zdGFydCAmJiBkYXRlUmFuZ2UuZW5kICYmIGxhc3RVcGRhdGVkID09PSBcImxvY2FsXCIpIHtcbiAgICAgIG9uRGF0ZVJhbmdlU2VsZWN0KGRhdGVSYW5nZSk7XG4gICAgfVxuICB9LCBbZGF0ZVJhbmdlLCBsYXN0VXBkYXRlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGlzTW9kYWxPcGVuICYmXG4gICAgICAgIG1vZGFsUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgIW1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpXG4gICAgICApIHtcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW2lzTW9kYWxPcGVuXSk7XG5cbiAgY29uc3QgaGFuZGxlWWVhckNoYW5nZSA9ICh5ZWFyOiBudW1iZXIpID0+IHtcbiAgICBzZXRDdXJyZW50TW9udGgoc2V0WWVhcihjdXJyZW50TW9udGgsIHllYXIpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb250aENoYW5nZSA9IChtb250aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbW9udGhJbmRleCA9IG1vbnRocy5maW5kSW5kZXgoXG4gICAgICAobSkgPT4gZm9ybWF0KHNldE1vbnRoKG5ldyBEYXRlKCksIG0pLCBcIk1NTU1cIikgPT09IG1vbnRoXG4gICAgKTtcbiAgICBzZXRDdXJyZW50TW9udGgoc2V0TW9udGgoY3VycmVudE1vbnRoLCBtb250aEluZGV4KSk7XG4gIH07XG5cbiAgY29uc3QgaXNJblJhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGU6IERhdGUpOiBib29sZWFuID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZGF0ZVJhbmdlLnN0YXJ0ICYmXG4gICAgICAgICFkYXRlUmFuZ2UuZW5kICYmXG4gICAgICAgIGhvdmVyRGF0ZSAmJlxuICAgICAgICBpc0FmdGVyKGhvdmVyRGF0ZSwgZGF0ZVJhbmdlLnN0YXJ0KSAmJlxuICAgICAgICBpc1NhbWVNb250aChkYXRlLCBob3ZlckRhdGUpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGlzQWZ0ZXIoZGF0ZSwgZGF0ZVJhbmdlLnN0YXJ0KSAmJiBpc0JlZm9yZShkYXRlLCBob3ZlckRhdGUpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGVSYW5nZS5zdGFydCAmJiBkYXRlUmFuZ2UuZW5kKSB7XG4gICAgICAgIHJldHVybiBpc0FmdGVyKGRhdGUsIGRhdGVSYW5nZS5zdGFydCkgJiYgaXNCZWZvcmUoZGF0ZSwgZGF0ZVJhbmdlLmVuZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBbZGF0ZVJhbmdlLnN0YXJ0LCBkYXRlUmFuZ2UuZW5kLCBob3ZlckRhdGVdXG4gICk7XG5cbiAgY29uc3QgaXNIb3ZlcmVkRGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChkYXRlOiBEYXRlKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gaG92ZXJEYXRlID8gaXNTYW1lRGF5KGRhdGUsIGhvdmVyRGF0ZSkgOiBmYWxzZTtcbiAgICB9LFxuICAgIFtob3ZlckRhdGVdXG4gICk7XG5cbiAgY29uc3QgcmVuZGVySW5wdXRWYWx1ZSA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHN0YXJ0RGlzcGxheSA9IGxhc3RVcGRhdGVkID09PSBcImxvY2FsXCIgPyBkYXRlUmFuZ2Uuc3RhcnQgOiBzdGFydERhdGU7XG4gICAgY29uc3QgZW5kRGlzcGxheSA9IGxhc3RVcGRhdGVkID09PSBcImxvY2FsXCIgPyBkYXRlUmFuZ2UuZW5kIDogZW5kRGF0ZTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZFN0YXJ0ID0gc3RhcnREaXNwbGF5XG4gICAgICA/IGlzU2FtZVllYXIoc3RhcnREaXNwbGF5LCBlbmREaXNwbGF5KSAmJlxuICAgICAgICBpc1NhbWVNb250aChzdGFydERpc3BsYXksIGVuZERpc3BsYXkpXG4gICAgICAgID8gZm9ybWF0KHN0YXJ0RGlzcGxheSwgXCJNTU0gZFwiKVxuICAgICAgICA6IGZvcm1hdChzdGFydERpc3BsYXksIFwiTU1NIGQsIHl5eXlcIilcbiAgICAgIDogXCJcIjtcbiAgICBjb25zdCBmb3JtYXR0ZWRFbmQgPSBlbmREaXNwbGF5ID8gZm9ybWF0KGVuZERpc3BsYXksIFwiTU1NIGQsIHl5eXlcIikgOiBcIlwiO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFN0YXJ0ICYmIGZvcm1hdHRlZEVuZFxuICAgICAgPyBgJHtmb3JtYXR0ZWRTdGFydH0gLSAke2Zvcm1hdHRlZEVuZH1gXG4gICAgICA6IFwiXCI7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdTdGFydE1vbnRoID0gbGFzdFVwZGF0ZWQgPT09IFwibG9jYWxcIiA/IGRhdGVSYW5nZS5zdGFydCA6IHN0YXJ0RGF0ZTtcbiAgICBpZiAobmV3U3RhcnRNb250aCAmJiAhaXNTYW1lTW9udGgobmV3U3RhcnRNb250aCwgc3RhcnRNb250aCkpIHtcbiAgICAgIHNldFN0YXJ0TW9udGgobmV3U3RhcnRNb250aCk7XG4gICAgfVxuICB9LCBbbGFzdFVwZGF0ZWQsIGRhdGVSYW5nZS5zdGFydCwgc3RhcnREYXRlLCBzdGFydE1vbnRoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNNb2RhbE9wZW4gJiYgc3RhcnRNb250aCkge1xuICAgICAgc2V0Q3VycmVudE1vbnRoKHN0YXJ0T2ZNb250aChzdGFydE1vbnRoKSk7XG4gICAgfVxuICB9LCBbaXNNb2RhbE9wZW4sIHN0YXJ0TW9udGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyV3JhcHBlciBjbGFzc05hbWU9XCJmb250LWN1c3RvbVwiPlxuICAgICAgey8qIDxJY29uQ29udGFpbmVyPlxuICAgICAgICA8RmlDYWxlbmRhciAvPlxuICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgPERhdGVQaWNrZXJJbnB1dFxuICAgICAgICB2YWx1ZT17cmVuZGVySW5wdXRWYWx1ZSgpfVxuICAgICAgICByZWFkT25seVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsT3BlbighaXNNb2RhbE9wZW4pfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBkYXRlIHJhbmdlXCJcbiAgICAgIC8+ICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICA/IFwiYmctc2tpbi1zZWNvbmRhcnlXaXRoT3BhY2l0eSByb3VuZGVkLWZ1bGwgZHJvcC1zaGFkb3ctbGdcIlxuICAgICAgICAgICAgOiBcIiBiZy1za2luLWFjY2VudDIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgfSBweC00IHB5LTEgbXItMiBtYi0zYH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbE9wZW4oIWlzTW9kYWxPcGVuKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICA/IFwiIHRleHQtc2tpbi1wcmltYXJ5IGZvbnQtcHJpbWFyeSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYWNraW5nLWxvbmd0ZXh0XCJcbiAgICAgICAgICAgICAgOiBcIiB0ZXh0LXNraW4tYmFzZSBmb250LXByaW1hcnkgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy1sb25ndGV4dFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNNb2RhbE9wZW4gJiYgKFxuICAgICAgICA8Q2FsZW5kYXJNb2RhbCByZWY9e21vZGFsUmVmfT5cbiAgICAgICAgICA8TW9udGhZZWFyU2VsZWN0aW9uPlxuICAgICAgICAgICAgPEN1c3RvbVNlbGVjdERyb3Bkb3duXG4gICAgICAgICAgICAgIG9wdGlvbnM9e21vbnRocy5tYXAoKG1vbnRoKSA9PlxuICAgICAgICAgICAgICAgIGZvcm1hdChzZXRNb250aChuZXcgRGF0ZSgpLCBtb250aCksIFwiTU1NTVwiKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Zm9ybWF0KHN0YXJ0TW9udGggPz8gY3VycmVudE1vbnRoLCBcIk1NTU1cIil9XG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDdXN0b21TZWxlY3REcm9wZG93blxuICAgICAgICAgICAgICBvcHRpb25zPXtnZXRZZWFycygxMjApfVxuICAgICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlWWVhckNoYW5nZX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtnZXRZZWFyKHN0YXJ0TW9udGggPz8gY3VycmVudE1vbnRoKX1cbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTW9udGhZZWFyU2VsZWN0aW9uPlxuICAgICAgICAgIDxDYWxlbmRhckhlYWRlciBjbGFzc05hbWU9XCJmb250LWN1c3RvbVwiPlxuICAgICAgICAgICAge1tcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0ubWFwKChkYXlOYW1lKSA9PiAoXG4gICAgICAgICAgICAgIDxEYXlOYW1lIGtleT17ZGF5TmFtZX0+e2RheU5hbWV9PC9EYXlOYW1lPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DYWxlbmRhckhlYWRlcj5cbiAgICAgICAgICA8Q2FsZW5kYXJHcmlkIGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tXCI+XG4gICAgICAgICAgICB7Z2VuZXJhdGVDYWxlbmRhckRhdGVzKGN1cnJlbnRNb250aCkubWFwKChkYXRlKSA9PiAoXG4gICAgICAgICAgICAgIDxEYXlcbiAgICAgICAgICAgICAgICBrZXk9e2RhdGUudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICBpc1RvZGF5PXtpc1NhbWVEYXkoZGF0ZSwgbmV3IERhdGUoKSl9XG4gICAgICAgICAgICAgICAgaXNDdXJyZW50TW9udGg9e2lzU2FtZU1vbnRoKGRhdGUsIGN1cnJlbnRNb250aCl9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17XG4gICAgICAgICAgICAgICAgICAhIShcbiAgICAgICAgICAgICAgICAgICAgKGRhdGVSYW5nZS5zdGFydCAmJiBpc1NhbWVEYXkoZGF0ZSwgZGF0ZVJhbmdlLnN0YXJ0KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGRhdGVSYW5nZS5lbmQgJiYgaXNTYW1lRGF5KGRhdGUsIGRhdGVSYW5nZS5lbmQpKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0luUmFuZ2U9e2lzSW5SYW5nZShkYXRlKX1cbiAgICAgICAgICAgICAgICBpc0hvdmVyZWQ9e2lzSG92ZXJlZERhdGUoZGF0ZSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlckRhdGUoZGF0ZSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlckRhdGUobnVsbCl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGF0ZVNlbGVjdChkYXRlKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTpcbiAgICAgICAgICAgICAgICAgICAgcmVzdHJpY3RUb0N1cnJlbnRNb250aCAmJiAhaXNTYW1lTW9udGgoZGF0ZSwgY3VycmVudE1vbnRoKVxuICAgICAgICAgICAgICAgICAgICAgID8gMC4wMVxuICAgICAgICAgICAgICAgICAgICAgIDogMSxcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6XG4gICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0VG9DdXJyZW50TW9udGggJiYgIWlzU2FtZU1vbnRoKGRhdGUsIGN1cnJlbnRNb250aClcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Zvcm1hdChkYXRlLCBcImRcIil9XG4gICAgICAgICAgICAgIDwvRGF5PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DYWxlbmRhckdyaWQ+XG4gICAgICAgIDwvQ2FsZW5kYXJNb2RhbD5cbiAgICAgICl9XG4gICAgPC9EYXRlUGlja2VyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbURhdGVSYW5nZVBpY2tlcjtcblxuY29uc3QgcmVuZGVyRGF0ZUlucHV0VmFsdWUgPSAoc3RhcnREaXNwbGF5OiBhbnksIGVuZERpc3BsYXk6IGFueSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGZvcm1hdHRlZFN0YXJ0ID0gc3RhcnREaXNwbGF5XG4gICAgPyBpc1NhbWVZZWFyKHN0YXJ0RGlzcGxheSwgZW5kRGlzcGxheSkgJiZcbiAgICAgIGlzU2FtZU1vbnRoKHN0YXJ0RGlzcGxheSwgZW5kRGlzcGxheSlcbiAgICAgID8gZm9ybWF0KHN0YXJ0RGlzcGxheSwgXCJNTU0sIGRcIilcbiAgICAgIDogZm9ybWF0KHN0YXJ0RGlzcGxheSwgXCJNTU0gZCwgeXl5eVwiKVxuICAgIDogXCJcIjtcbiAgY29uc3QgZm9ybWF0dGVkRW5kID0gZW5kRGlzcGxheSA/IGZvcm1hdChlbmREaXNwbGF5LCBcIk1NTSBkLCB5eXl5XCIpIDogXCJcIjtcblxuICByZXR1cm4gZm9ybWF0dGVkU3RhcnQgJiYgZm9ybWF0dGVkRW5kXG4gICAgPyBgJHtmb3JtYXR0ZWRTdGFydH0gLSAke2Zvcm1hdHRlZEVuZH1gXG4gICAgOiBcIlwiO1xufTtcblxuY29uc3QgY2hlY2tEYXRlUmFuZ2UgPSAoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgY3VycmVudE1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgodG9kYXkpO1xuICBjb25zdCBjdXJyZW50TW9udGhFbmQgPSBlbmRPZk1vbnRoKHRvZGF5KTtcbiAgY29uc3QgbGFzdE1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgoc3ViTW9udGhzKHRvZGF5LCAxKSk7XG4gIGNvbnN0IGxhc3RNb250aEVuZCA9IGVuZE9mTW9udGgoc3ViTW9udGhzKHRvZGF5LCAxKSk7XG5cbiAgaWYgKFxuICAgIGlzU2FtZURheShzdGFydERhdGUsIGN1cnJlbnRNb250aFN0YXJ0KSAmJlxuICAgIGlzU2FtZURheShlbmREYXRlLCBjdXJyZW50TW9udGhFbmQpXG4gICkge1xuICAgIHJldHVybiBcIlRoaXMgbW9udGhcIjtcbiAgfSBlbHNlIGlmIChcbiAgICBpc1NhbWVEYXkoc3RhcnREYXRlLCBsYXN0TW9udGhTdGFydCkgJiZcbiAgICBpc1NhbWVEYXkoZW5kRGF0ZSwgbGFzdE1vbnRoRW5kKVxuICApIHtcbiAgICByZXR1cm4gXCJMYXN0IG1vbnRoXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBOb3QgZXhhY3RseSBtYXRjaGluZyB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgY3VycmVudCBvciBsYXN0IG1vbnRoXG4gIH1cbn07XG4iLCJpbXBvcnQgYmFuayBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5rLnN2Z1wiO1xuXG50eXBlIEZpbHRlckJ1dHRvblByb3BzID0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgaWQ/OiBzdHJpbmc7XG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuY29uc3QgQ2FzaEZsb3dGaWx0ZXJCdXR0b24gPSAoe1xuICBsYWJlbCxcbiAgb25DbGljayxcbiAgaXNBY3RpdmUsXG4gIGlkLFxuICBpY29uLFxufTogRmlsdGVyQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93ICR7XG4gICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgPyBcImJnLXNraW4tc2Vjb25kYXJ5V2l0aE9wYWNpdHkgcm91bmRlZC1mdWxsIGRyb3Atc2hhZG93LWxnXCJcbiAgICAgICAgICA6IFwiIGJnLXNraW4tYWNjZW50MiByb3VuZGVkLWZ1bGxcIlxuICAgICAgfSBweC00IHB5LTEgbXItMiBtYi0zYH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBpZD17YCR7aWR9YH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1yLTIgJHtpc0FjdGl2ZSA/IFwidGV4dC1za2luLXByaW1hcnlcIiA6IFwidGV4dC1za2luLWJhc2VcIn1gfVxuICAgICAgPlxuICAgICAgICB7aWNvbiA/IChcbiAgICAgICAgICBpY29uXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWN1c3RvbSB0ZXh0LXNraW4tcHJpbWFyeSBmb250LW1lZGl1bSB0cmFja2luZy10aXRsZSB0ZXh0LWJhc2UgbXItMVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Jhbmt9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgPyBcIiB0ZXh0LXNraW4tcHJpbWFyeSBmb250LXByaW1hcnkgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy13aWRlXCJcbiAgICAgICAgICAgIDogXCIgdGV4dC1za2luLWJhc2UgZm9udC1wcmltYXJ5IHRleHQteHMgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZVwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYXNoRmxvd0ZpbHRlckJ1dHRvbjtcbiIsImltcG9ydCBBY2NvdW50IGZyb20gXCJjbGllbnQvbW9kZWxzL0FjY291bnRcIjtcbmltcG9ydCB1c2VJbnNpZ2h0c1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvaW5zaWdodHNTdG9yZVwiO1xuaW1wb3J0IHsgZGF0ZUZpbHRlcnMgfSBmcm9tIFwiY2xpZW50L3V0aWxzL01vY2tEYXRhXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUNhbGVuZGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgYmFua0ljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVkZ2V0cy1pbnNpZ2h0cy9iYW5rLnN2Z1wiO1xuaW1wb3J0IEZpbHRlckJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJCdXR0b25cIjtcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5CdXR0b25cIjtcbmltcG9ydCBDdXN0b21EYXRlUmFuZ2VQaWNrZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY3VzdG9tLWRhdGUtcGlja2VyL0N1c3RvbWVyRGF0ZVJhbmdlUGlja2VyXCI7XG5pbnRlcmZhY2UgSW5zaWdodHNGaWx0ZXJzUHJvcHMge1xuICBhY2NvdW50czogYW55OyAvLyByZXBsYWNlICdhbnknIHdpdGggdGhlIGFjdHVhbCB0eXBlXG4gIGFjdGl2ZUFjY291bnQ6IGFueTsgLy8gcmVwbGFjZSAnYW55JyB3aXRoIHRoZSBhY3R1YWwgdHlwZVxuICBvbkNsaWNrOiBhbnk7IC8vIHJlcGxhY2UgJ2FueScgd2l0aCB0aGUgYWN0dWFsIHR5cGVcbiAgY2xvc2VCb3R0b21TaGVldDogYW55OyAvLyByZXBsYWNlICdhbnknIHdpdGggdGhlIGFjdHVhbCB0eXBlXG59XG5jb25zdCBJbnNpZ2h0c0ZpbHRlcnMgPSAoe1xuICBhY2NvdW50cyxcbiAgYWN0aXZlQWNjb3VudCxcbiAgb25DbGljayxcbiAgY2xvc2VCb3R0b21TaGVldCxcbn06IEluc2lnaHRzRmlsdGVyc1Byb3BzKSA9PiB7XG4gIGNvbnN0IGluc2lnaHRzU3RvcmUgPSB1c2VJbnNpZ2h0c1N0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IFt1cGRhdGUsIHNldFVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthY3RpdmVBY2NvdW50TmFtZSwgc2V0QWN0aXZlQWNjb3VudE5hbWVdID0gdXNlU3RhdGUoXG4gICAgYWN0aXZlQWNjb3VudD8ubmFtZVxuICApO1xuICBjb25zdCBpc0FsbEFjY291bnRzQWN0aXZlID0gIWFjdGl2ZUFjY291bnQ7XG5cbiAgY29uc3QgY2FsY3VsYXRlRGF0ZVJhbmdlID0gKHNlbGVjdGVkRmlsdGVyOiBhbnkpID0+IHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgc3dpdGNoIChzZWxlY3RlZEZpbHRlci5pZCkge1xuICAgICAgY2FzZSAxOiAvLyBUaGlzIG1vbnRoXG4gICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogLy8gTGFzdCBtb250aFxuICAgICAgICBzdGFydERhdGUuc2V0TW9udGgoY3VycmVudERhdGUuZ2V0TW9udGgoKSAtIDEsIDEpO1xuICAgICAgICBlbmREYXRlLnNldERhdGUoMCk7IC8vIExhc3QgZGF5IG9mIGxhc3QgbW9udGhcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IC8vIExhc3QgMyBtb250aHNcbiAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgLSAyLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IC8vIExhc3QgNiBtb250aHNcbiAgICAgICAgc3RhcnREYXRlLnNldE1vbnRoKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgLSA1LCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBDdXN0b20gZGF0ZSBvciBBbGwgdGltZSwgdXNlIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyMy0wMS0wMVwiKTtcbiAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEZvcm1hdCBkYXRlcyBhcyBcIllZWVktTU0tRERcIlxuICAgIGNvbnN0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRFbmREYXRlID0gZm9ybWF0RGF0ZShlbmREYXRlKTtcblxuICAgIHJldHVybiB7IGZvcm1hdHRlZFN0YXJ0RGF0ZSwgZm9ybWF0dGVkRW5kRGF0ZSB9O1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIH07XG5cbiAgY29uc3QgYWxsQWNjb3VudHM6IEFjY291bnQgPSB7XG4gICAgaWQ6IC0xLFxuICAgIGFjY291bnRfaWQ6IFwiYWxsXCIsXG4gICAgYWNjb3VudF9udW1iZXI6IFwiYWxsXCIsXG4gICAgbmFtZTogXCJBbGwgYWNjb3VudHNcIixcbiAgICB0eXBlOiBcImFsbFwiLFxuICAgIGJhbGFuY2U6IDAsXG4gICAgaXNfbGlua2VkOiBmYWxzZSxcbiAgICBjcmVhdGVkX29uOiBcIk4vQVwiLFxuICAgIGNyZWF0ZWRfYXQ6IFwiTi9BXCIsXG4gICAgc291cmNlOiBcIk4vQVwiLFxuICAgIHRyYW5zYWN0aW9uczoge1xuICAgICAgdG90YWxfZGViaXQ6IDAsXG4gICAgICB0b3RhbF9jcmVkaXQ6IDAsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCB1bmlxdWVBY2NvdW50cyA9IFtcbiAgICAuLi5uZXcgTWFwKFxuICAgICAgYWNjb3VudHM/Lm1hcCgoYWNjb3VudDogeyBuYW1lOiBhbnkgfSkgPT4gW2FjY291bnQubmFtZSwgYWNjb3VudF0pXG4gICAgKS52YWx1ZXMoKSxcbiAgXTtcbiAgdW5pcXVlQWNjb3VudHMudW5zaGlmdChhbGxBY2NvdW50cyk7XG5cbiAgY29uc3Qgc2VsZWN0ZWREYXRlRmlsdGVyTmFtZSA9IGluc2lnaHRzU3RvcmUuaW5zaWdodHNEYXRlRmlsdGVyTmFtZTtcblxuICBjb25zdCBoYW5kbGVBY2NvdW50U2VsZWN0aW9uID0gKHNlbGVjdGVkQWNjb3VudDogQWNjb3VudCkgPT4ge1xuICAgIHNldFVwZGF0ZSghdXBkYXRlKTtcbiAgICAvLyBVcGRhdGUgaW5zaWdodHMgc3RvcmUgd2l0aCB0aGUgc2VsZWN0ZWQgYWNjb3VudCBkZXRhaWxzXG4gICAgdXNlSW5zaWdodHNTdG9yZVxuICAgICAgLmdldFN0YXRlKClcbiAgICAgIC5zZXRJbnNpZ2h0c0FjdGl2ZUluc3RpdHV0aW9uSWQoc2VsZWN0ZWRBY2NvdW50Py5pZCA/PyBudWxsKTtcbiAgICB1c2VJbnNpZ2h0c1N0b3JlXG4gICAgICAuZ2V0U3RhdGUoKVxuICAgICAgLnNldEluc2lnaHRzQWN0aXZlSW5zdGl0dXRpb25OYW1lKFxuICAgICAgICBzZWxlY3RlZEFjY291bnQ/Lm5hbWUgPz8gXCJBbGwgYWNjb3VudHNcIlxuICAgICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEYXRlRmlsdGVyU2VsZWN0aW9uID0gKHNlbGVjdGVkRmlsdGVyOiBhbnkpID0+IHtcbiAgICBzZXRVcGRhdGUoIXVwZGF0ZSk7XG4gICAgLy8gTm93LCBjYWxjdWxhdGUgdGhlIGRhdGUgcmFuZ2UgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGZpbHRlclxuICAgIGNvbnN0IHsgZm9ybWF0dGVkU3RhcnREYXRlLCBmb3JtYXR0ZWRFbmREYXRlIH0gPVxuICAgICAgY2FsY3VsYXRlRGF0ZVJhbmdlKHNlbGVjdGVkRmlsdGVyKTtcbiAgICB1c2VJbnNpZ2h0c1N0b3JlXG4gICAgICAuZ2V0U3RhdGUoKVxuICAgICAgLnNldEluc2lnaHRzU3RhcnREYXRlKG5ldyBEYXRlKGZvcm1hdHRlZFN0YXJ0RGF0ZSkpO1xuICAgIHVzZUluc2lnaHRzU3RvcmUuZ2V0U3RhdGUoKS5zZXRJbnNpZ2h0c0VuZERhdGUobmV3IERhdGUoZm9ybWF0dGVkRW5kRGF0ZSkpO1xuICAgIHVzZUluc2lnaHRzU3RvcmUuZ2V0U3RhdGUoKS5zZXRJbnNpZ2h0c0RhdGVGaWx0ZXJOYW1lKHNlbGVjdGVkRmlsdGVyLm5hbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTYgbXgtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtcHJpbWFyeSBmb250LW1lZGl1bSB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy1sb25ndGV4dFwiPlxuICAgICAgICAgIENsZWFyXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIHRleHQtc2tpbi1iYXNlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXRpdGxlIHRleHQtYmFzZSBtci04XCI+XG4gICAgICAgICAgRmlsdGVyIGJ5XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jdXN0b20gdGV4dC1za2luLWJhc2UgZm9udC1tZWRpdW0gdHJhY2tpbmctdGl0bGUgdGV4dC1iYXNlIG1yLTFcIj5cbiAgICAgICAgICA8aW1nIHNyYz17YmFua0ljb259IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIHRleHQtc2tpbi1iYXNlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXRpdGxlIHRleHQtYmFzZVwiPlxuICAgICAgICAgIE15IGFjY291bnRzXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTMgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAge3VuaXF1ZUFjY291bnRzLm1hcCgoZWxlbWVudDogYW55LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpLnRvU3RyaW5nKCk7IC8vIENvbnZlcnQgaW5kZXggdG8gc3RyaW5nIGZvciBpZFxuXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAgICAgaWQgPT09IFwiYWxsXCJcbiAgICAgICAgICAgICAgPyBpc0FsbEFjY291bnRzQWN0aXZlXG4gICAgICAgICAgICAgIDogZWxlbWVudC5hY2NvdW50X2lkID09PSBhY3RpdmVBY2NvdW50Py5hY2NvdW50X2lkO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGaWx0ZXJCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9e2VsZW1lbnQubmFtZX1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlQWNjb3VudE5hbWUgPT09IGVsZW1lbnQubmFtZSB8fCBpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlQWNjb3VudFNlbGVjdGlvbihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGgtcHggYmctc2tpbi1hY2NlbnQzIG1iLTZcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY3VzdG9tIHRleHQtc2tpbi1iYXNlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXRpdGxlIHRleHQtYmFzZSBtci0xXCI+XG4gICAgICAgICAgPEZpQ2FsZW5kYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jdXN0b20gdGV4dC1za2luLWJhc2UgZm9udC1tZWRpdW0gdHJhY2tpbmctdGl0bGUgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgRGF0ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgIHtkYXRlRmlsdGVycz8ubWFwKChlbGVtZW50OiBhbnksIGk6IGFueSkgPT4gKFxuICAgICAgICAgIDxGaWx0ZXJCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPXtlbGVtZW50Lm5hbWV9XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBpc0FjdGl2ZT17ZWxlbWVudC5uYW1lID09PSBzZWxlY3RlZERhdGVGaWx0ZXJOYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGF0ZUZpbHRlclNlbGVjdGlvbihlbGVtZW50KX1cbiAgICAgICAgICAgIGlkPXtlbGVtZW50LmlkLnRvU3RyaW5nKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxDdXN0b21EYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICBvbkRhdGVSYW5nZVNlbGVjdD17KCkgPT4ge319XG4gICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgIHN0YXJ0RGF0ZT17XG4gICAgICAgICAgICBpbnNpZ2h0c1N0b3JlLmluc2lnaHRzU3RhcnREYXRlXG4gICAgICAgICAgICAgID8gZm9ybWF0KGluc2lnaHRzU3RvcmUuaW5zaWdodHNTdGFydERhdGUsIFwieXl5eS1NTS1kZFwiKVxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgZW5kRGF0ZT17XG4gICAgICAgICAgICBpbnNpZ2h0c1N0b3JlLmluc2lnaHRzRW5kRGF0ZVxuICAgICAgICAgICAgICA/IGZvcm1hdChpbnNpZ2h0c1N0b3JlLmluc2lnaHRzRW5kRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0VXBkYXRlZEVudj17XCJwcm9wc1wifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkN1c3RvbSBkYXRlXCJ9XG4gICAgICAgICAgaXNBY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgIHJlc3RyaWN0VG9DdXJyZW50TW9udGg9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICB0aXRsZT1cIkFwcGx5XCJcbiAgICAgICAgICBjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdXNlSW5zaWdodHNTdG9yZS5nZXRTdGF0ZSgpLnNldEluc2lnaHRzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNsb3NlQm90dG9tU2hlZXQoKTtcbiAgICAgICAgICAgIHVzZUluc2lnaHRzU3RvcmUuZ2V0U3RhdGUoKS5zZXRJbnNpZ2h0c0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzRmlsdGVycztcbiIsImltcG9ydCBjcmVhdGUgZnJvbSBcInp1c3RhbmRcIjtcblxuaW1wb3J0IEFjY291bnQgZnJvbSBcImNsaWVudC9tb2RlbHMvQWNjb3VudFwiO1xuXG5jb25zdCB1c2VBY2NvdW50U3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgYWNjb3VudHM6IFtdLFxuICBiYWxhbmNlOiAwLFxuICBpc1N0YWxlOiB0cnVlLFxuICBmaWx0ZXI6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBhY2NvdW50X2lkOiBcIlwiLFxuICBhY2NvdW50X25hbWU6IFwiXCIsXG4gIG9wZW5BY2NvdW50Qm90dG9tU2hlZXQ6IGZhbHNlLFxuICBzZXRPcGVuQWNjb3VudEJvdHRvbVNoZWV0OiAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW5BY2NvdW50Qm90dG9tU2hlZXQ6IG9wZW4sXG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuICBpbml0OiAoYWNjb3VudHM6IEFjY291bnRbXSkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIC8vIGNvbnN0IG5ld1N0YXRlID0gKGFjY291bnRzIHx8IFtdKS5tYXAoKGFjY291bnQ6IEFjY291bnQpID0+IHtcbiAgICAgIC8vICAgcmV0dXJuIFthY2NvdW50LmFjY291bnRfaWQsIGFjY291bnRdO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IChzdGF0ZS5hY2NvdW50cyB8fCBbXSkubWFwKChhY2NvdW50OiBBY2NvdW50KSA9PiB7XG4gICAgICAvLyAgIHJldHVybiBbYWNjb3VudC5hY2NvdW50X2lkLCBhY2NvdW50XTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gY29uc3QgbmV4dFN0YXRlID0gbmV3IE1hcChbLi4ubmV3U3RhdGUsIC4uLmN1cnJlbnRTdGF0ZV0pO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgYWNjb3VudHM6IGFjY291bnRzLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxuICBzZXRTdGFsZTogKHN0YWxlOiBib29sZWFuKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgaXNTdGFsZTogc3RhbGUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG4gIGZpbHRlckJ5OiAoYWNjb3VudDogQWNjb3VudCkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIGZpbHRlcjogYWNjb3VudCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfSxcbiAgc2V0QmFsYW5jZTogKGJhbGFuY2U6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgYmFsYW5jZTogYmFsYW5jZSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRBY2NvdW50TG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0ge1xuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxuICBzZWxlY3RBY2NvdW50OiAoYWNjb3VudDogQWNjb3VudCkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIGFjY291bnRfaWQ6IGFjY291bnQuYWNjb3VudF9pZCxcbiAgICAgICAgYWNjb3VudF9uYW1lOiBhY2NvdW50Lm5hbWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFjY291bnRTdG9yZTtcbiIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5cbmludGVyZmFjZSBJbnNpZ2h0c1N0b3JlU3RhdGUge1xuICBpbnNpZ2h0c1N0YXJ0RGF0ZTogRGF0ZTtcbiAgaW5zaWdodHNFbmREYXRlOiBEYXRlO1xuICBpbnNpZ2h0c0FjdGl2ZUluc3RpdHV0aW9uSWQ6IGFueSB8IG51bGw7XG4gIGluc2lnaHRzQWN0aXZlSW5zdGl0dXRpb25OYW1lOiBzdHJpbmc7XG4gIGluc2lnaHRzRGF0ZUZpbHRlck5hbWU6IHN0cmluZztcbiAgaW5zaWdodHNMb2FkaW5nOiBib29sZWFuO1xuICBpbnNpZ2h0c0RhdGVGaWx0ZXJJZDogc3RyaW5nO1xuICBzZXRJbnNpZ2h0c1N0YXJ0RGF0ZTogKHN0YXJ0RGF0ZTogRGF0ZSkgPT4gdm9pZDtcbiAgc2V0SW5zaWdodHNFbmREYXRlOiAoZW5kRGF0ZTogRGF0ZSkgPT4gdm9pZDtcbiAgc2V0SW5zaWdodHNBY3RpdmVJbnN0aXR1dGlvbklkOiAoaW5zdGl0dXRpb25JZDogYW55IHwgbnVsbCkgPT4gdm9pZDtcbiAgc2V0SW5zaWdodHNWYXJpYWJsZXM6IChcbiAgICBzdGFydERhdGU6IGFueSxcbiAgICBlbmREYXRlOiBhbnksXG4gICAgaW5zdGl0dXRpb25JZDogYW55XG4gICkgPT4gdm9pZDtcbiAgc2V0SW5zaWdodHNMb2FkaW5nOiAobG9hZGluZzogYm9vbGVhbikgPT4gdm9pZDtcbiAgc2V0SW5zaWdodHNBY3RpdmVJbnN0aXR1dGlvbk5hbWU6IChpbnN0aXR1dGlvbk5hbWU6IGFueSkgPT4gdm9pZDtcbiAgc2V0SW5zaWdodHNEYXRlRmlsdGVyTmFtZTogKGRhdGVGaWx0ZXJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldEluc2lnaHRzRGF0ZUZpbHRlcklkOiAoZGF0ZUZpbHRlcklkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IHVzZUluc2lnaHRzU3RvcmUgPSBjcmVhdGU8SW5zaWdodHNTdG9yZVN0YXRlPigoc2V0KSA9PiAoe1xuICBpbnNpZ2h0c1N0YXJ0RGF0ZTogZ2V0RGVmYXVsdFN0YXJ0RGF0ZSgpLFxuICBpbnNpZ2h0c0VuZERhdGU6IGdldERlZmF1bHRFbmREYXRlKCksXG4gIGluc2lnaHRzQWN0aXZlSW5zdGl0dXRpb25JZDogbnVsbCxcbiAgaW5zaWdodHNMb2FkaW5nOiBmYWxzZSxcbiAgaW5zaWdodHNBY3RpdmVJbnN0aXR1dGlvbk5hbWU6IFwiQWxsIGFjY291bnRzXCIsXG4gIGluc2lnaHRzRGF0ZUZpbHRlck5hbWU6IFwiVGhpcyBtb250aFwiLFxuICBpbnNpZ2h0c0RhdGVGaWx0ZXJJZDogXCIwXCIsXG4gIHNldEluc2lnaHRzTG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHtcbiAgICBzZXQoeyBpbnNpZ2h0c0xvYWRpbmc6IGxvYWRpbmcgfSk7XG4gIH0sXG4gIHNldEluc2lnaHRzVmFyaWFibGVzOiAoc3RhcnREYXRlOiBhbnksIGVuZERhdGU6IGFueSwgaW5zdGl0dXRpb25JZDogYW55KSA9PiB7XG4gICAgc2V0KHtcbiAgICAgIGluc2lnaHRzU3RhcnREYXRlOiBzdGFydERhdGUsXG4gICAgICBpbnNpZ2h0c0VuZERhdGU6IGVuZERhdGUsXG4gICAgICBpbnNpZ2h0c0FjdGl2ZUluc3RpdHV0aW9uSWQ6IGluc3RpdHV0aW9uSWQsXG4gICAgfSk7XG4gIH0sXG4gIHNldEluc2lnaHRzU3RhcnREYXRlOiAoc3RhcnREYXRlKSA9PiB7XG4gICAgc2V0KHsgaW5zaWdodHNTdGFydERhdGU6IHN0YXJ0RGF0ZSB9KTtcbiAgfSxcbiAgc2V0SW5zaWdodHNFbmREYXRlOiAoZW5kRGF0ZSkgPT4ge1xuICAgIHNldCh7IGluc2lnaHRzRW5kRGF0ZTogZW5kRGF0ZSB9KTtcbiAgfSxcbiAgc2V0SW5zaWdodHNBY3RpdmVJbnN0aXR1dGlvbklkOiAoaW5zdGl0dXRpb25JZCkgPT4ge1xuICAgIHNldCh7IGluc2lnaHRzQWN0aXZlSW5zdGl0dXRpb25JZDogaW5zdGl0dXRpb25JZCB9KTtcbiAgfSxcbiAgc2V0SW5zaWdodHNBY3RpdmVJbnN0aXR1dGlvbk5hbWU6IChpbnN0aXR1dGlvbk5hbWU6IGFueSkgPT4ge1xuICAgIHNldCh7IGluc2lnaHRzQWN0aXZlSW5zdGl0dXRpb25OYW1lOiBpbnN0aXR1dGlvbk5hbWUgfSk7XG4gIH0sXG4gIHNldEluc2lnaHRzRGF0ZUZpbHRlck5hbWU6IChkYXRlRmlsdGVyTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0KHsgaW5zaWdodHNEYXRlRmlsdGVyTmFtZTogZGF0ZUZpbHRlck5hbWUgfSk7XG4gIH0sXG4gIHNldEluc2lnaHRzRGF0ZUZpbHRlcklkOiAoZGF0ZUZpbHRlcklkOiBzdHJpbmcpID0+IHtcbiAgICBzZXQoeyBpbnNpZ2h0c0RhdGVGaWx0ZXJJZDogZGF0ZUZpbHRlcklkIH0pO1xuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnNpZ2h0c1N0b3JlO1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0U3RhcnREYXRlKCk6IERhdGUge1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHN0YXJ0T2ZNb250aCA9IG5ldyBEYXRlKFxuICAgIGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSxcbiAgICAxXG4gICk7XG4gIHJldHVybiBzdGFydE9mTW9udGg7XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRFbmREYXRlKCk6IERhdGUge1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGVuZE9mTW9udGggPSBuZXcgRGF0ZShcbiAgICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgIDBcbiAgKTtcbiAgcmV0dXJuIGVuZE9mTW9udGg7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=