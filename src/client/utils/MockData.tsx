import { FiActivity, FiCalendar, FiTrendingUp } from "react-icons/fi";
import credit from "../assets/images/credit.svg";
import autoLoan from "../assets/images/auto-loan.svg";
import mortgage from "../assets/images/mortgage.svg";
import mortGageCover from "../assets/images/mortgage-cover.png";
import autoLoanCover from "../assets/images/auto-loan.png";
import creditCover from "../assets/images/credit-cover.png";
const date = new Date();
const yesterday = new Date(date.getTime());
yesterday.setDate(date.getDate() - 1);

export const essentials = [
  {
    id: 0,
    name: "Rent / Mortgage",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "rent",
    emoji: "🏠",
    amount: 0,
    percentage: 0,
    budget: 70000,
    spent: 70000,
  },
  {
    id: 1,
    name: "Groceries",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "groceries",
    emoji: "📚",
    amount: 4300,
    percentage: 20,
    budget: 6400,
    spent: 2100,
  },
  {
    id: 2,
    name: "Health",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "health",
    extern_id: 5,
    emoji: "💚",
    percentage: 10,
    amount: 2300,
    budget: 3500,
    spent: 1200,
  },
  {
    id: 3,
    name: "Bills & Fees",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "bills",
    extern_id: 1,
    emoji: "💳",
    amount: 2010,
    percentage: 30,
    budget: 3000,
    spent: 3000,
  },
  {
    id: 4,
    name: "Data & WiFi",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "datawifi",
    extern_id: 2,
    emoji: "🌐",
    amount: 2000,
    percentage: 70,
    budget: 2000,
    spent: 1800,
  },
];
export const wants = [
  {
    id: 0,
    name: "Family & Friends",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "familyfriends",
    extern_id: 1,
    emoji: "👨‍👩‍👧‍👦",
    amount: 4300,
    percentage: 20,
    budget: 6400,
    spent: 2100,
  },
  ,
  {
    id: 1,
    name: "Going out",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "goingout",
    extern_id: 2,
    emoji: "🍽",
    amount: 0,
    percentage: 0,
    budget: 70000,
    spent: 70000,
  },

  {
    id: 2,
    name: "Shopping",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "shopping",
    extern_id: 3,
    emoji: "🛍",
    percentage: 10,
    amount: 2300,
    budget: 3500,
    spent: 1200,
  },
  {
    id: 3,
    name: "Miscellaneous",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "miscellaneous",
    extern_id: 4,
    emoji: "🤷🏽‍",
    amount: 2010,
    percentage: 30,
    budget: 3000,
    spent: 3000,
  },
];
export const savings = [
  {
    id: 0,
    name: "Rainy day fund",
    macro_type: {
      id: 3,
      name: "Savings",
    },
    icon_name: "rainy-day",
    extern_id: 3,
    emoji: "",
    amount: 15500,
    percentage: 30,
    budget: 60000,
    spent: 15660,
  },
];
export const insightsToggleTabs = [
  { id: 0, name: "Spend" },
  { id: 1, name: "Debt" },
];
export const budgetSpendTabs = [
  { id: 0, name: "My spend", icon: <FiActivity /> },
  { id: 1, name: "Vs others", icon: <FiTrendingUp /> },
];
export const debtOverviewTabs = [
  { id: 0, name: "This month" },
  { id: 1, name: "All time" },
];
export const debtDetailsActivityTabs = [
  { id: 0, name: "Loan details" },
  { id: 1, name: "Recent activity" },
];
export const expenditureList = [
  {
    id: 0,
    name: "Rent / Mortgage",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "rent",
    emoji: "🏠",
    transactions: 1,
    budget: 70000,
    spent: 70000,
  },
  {
    id: 1,
    name: "Groceries",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "groceries",
    emoji: "📚",
    transactions: 2,
    budget: 10500,
    spent: 4100,
  },
  {
    id: 2,
    name: "Health",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "health",
    extern_id: 5,
    emoji: "💚",
    transactions: 1,
    budget: 5600,
    spent: 3400,
  },
  {
    id: 3,
    name: "Bills & Fees",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "bills",
    extern_id: 1,
    emoji: "💳",
    transactions: 5,
    budget: 2500,
    spent: 1850,
  },
  {
    id: 4,
    name: "Data & WiFi",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "datawifi",
    extern_id: 2,
    emoji: "🌐",
    transactions: 1,
    budget: 3000,
    spent: 1000,
  },
];
export const expenditureCompareList = [
  {
    id: 2,
    name: "Data & WiFi",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "datawifi",
    extern_id: 2,
    emoji: "🌐",
    percentage: 0,
  },
  {
    id: 5,
    name: "Health",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "health",
    extern_id: 5,
    emoji: "💚",
    percentage: 0,
  },
  {
    id: 8,
    name: "Education",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "education",
    extern_id: 8,
    emoji: "📚",
    percentage: 0,
  },
  {
    id: 6,
    name: "Rent / Mortgage",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "rent",
    extern_id: 6,
    emoji: "🏠",
    percentage: 0,
  },
  {
    id: 9,
    name: "Family & Friends",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "familyfriends",
    extern_id: 1,
    emoji: "👨‍👩‍👧‍👦",
    percentage: 0,
  },
  {
    id: 3,
    name: "Transport & Fuel",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "transport",
    extern_id: 3,
    emoji: "🚌",
    percentage: 0,
  },
  {
    id: 7,
    name: "Loan Repayment",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "loanrepayment",
    extern_id: 7,
    emoji: "🙌🏼",
    percentage: 0,
  },
  {
    id: 12,
    name: "Miscellaneous",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "miscellaneous",
    extern_id: 4,
    emoji: "🤷🏽‍",
    percentage: 0,
  },
  {
    name: "Gambling",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "gambling",
    extern_id: 9,
    emoji: "🎰",
    percentage: 0,
  },
  {
    id: 1,
    name: "Bills & Fees",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "bills",
    extern_id: 1,
    emoji: "💳",
    percentage: 0,
  },
  {
    id: 11,
    name: "Shopping",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "shopping",
    extern_id: 3,
    emoji: "🛍",
    percentage: 0,
  },
  {
    id: 4,
    name: "Groceries",
    macro_type: {
      id: 1,
      name: "Essentials",
    },
    icon_name: "groceries",
    extern_id: 4,
    emoji: "🥦",
    percentage: 0,
  },
  {
    id: 10,
    name: "Going out",
    macro_type: {
      id: 2,
      name: "Wants",
    },
    icon_name: "goingout",
    extern_id: 2,
    emoji: "🍽",
    percentage: 0,
  },
  {
    id: 13,
    name: "Emergency fund",
    macro_type: {
      id: 3,
      name: "Savings",
    },
    icon_name: "emergencyfund",
    extern_id: 1,
    emoji: "🎯",
    percentage: 0,
  },
];
export const dateFilters = [
  { id: 0, name: "All time" },
  { id: 1, name: "This month" },
  { id: 2, name: "Last month" },
  { id: 3, name: "Last 3 month" },
  { id: 4, name: "Last 6 months" },
  // { id: 5, name: "Custom date" },
];
export const cashflowFilters = [
  { id: 0, name: "All accounts", icon: null },
  { id: 1, name: "Last 3 month", icon: <FiCalendar /> },
  // { id: 2, name: "Clear", icon: null },
];

export const debt = [
  {
    id: 0,
    name: "Auto loan",
    amount: 17500,
    paid: 5000,
    percentage: 29,
    loanDetails: {
      monthlyPayment: 10000,
      totalRepaid: 100000,
      outstandingBalance: 20000,
      annualInterestRate: 18,
      estimatedPayoffTime: "7 years 9months",
      nextPaymentDueDate: "24.04.2024",
      monthlyPay: 40000,
    },
    recentActivity: [
      {
        id: 0,
        merchant: "Card Repayment",
        amount: 17500,
        transactedAt: "08 Jan 2024",
      },
    ],
  },
  {
    id: 0,
    name: "Mortgage",
    amount: 40000,
    paid: 10000,
    percentage: 25,
    loanDetails: {
      monthlyPayment: 10000,
      totalRepaid: 100000,
      outstandingBalance: 20000,
      annualInterestRate: 18,
      estimatedPayoffTime: "7 years 9months",
      nextPaymentDueDate: "24.04.2024",
      monthlyPay: 40000,
    },
    recentActivity: [
      {
        id: 0,
        merchant: "Card Repayment",
        amount: 10000,
        transactedAt: "08 Jan 2024",
      },
    ],
  },
];

export const allTimeDebt = [
  {
    id: 0,
    name: "Credit card",
    amount: 10000,
    paid: 7000,
    debtBalance: 100000,
    percentage: 70,
    icon: credit,
    cover: creditCover,
    loanDetails: {
      monthlyPayment: 10000,
      totalRepaid: 100000,
      outstandingBalance: 20000,
      annualInterestRate: 18,
      estimatedPayoffTime: "7 years 9months",
      nextPaymentDueDate: "24.04.2024",
    },
    recentActivity: [
      {
        id: 0,
        merchant: "Card Repayment",
        amount: 10000,
        transactedAt: "08 Jan 2024",
      },
    ],
  },
  {
    id: 0,
    name: "Auto loan",
    amount: 17500,
    paid: 5000,
    debtBalance: 1243135,
    percentage: 29,
    icon: autoLoan,
    cover: autoLoanCover,
    loanDetails: {
      monthlyPayment: 17500,
      totalRepaid: 100000,
      outstandingBalance: 20000,
      annualInterestRate: 18,
      estimatedPayoffTime: "7 years 9months",
      nextPaymentDueDate: "24.04.2024",
    },
    recentActivity: [
      {
        id: 0,
        merchant: "Card Repayment",
        amount: 10000,
        transactedAt: "08 Jan 2024",
      },
    ],
  },
  {
    id: 0,
    name: "Mortgage",
    amount: 40000,
    paid: 10000,
    debtBalance: 5327857,
    percentage: 25,
    icon: mortgage,
    cover: mortGageCover,
    loanDetails: {
      monthlyPayment: 40000,
      totalRepaid: 100000,
      outstandingBalance: 20000,
      annualInterestRate: 18,
      estimatedPayoffTime: "7 years 9months",
      nextPaymentDueDate: "24.04.2024",
    },
    recentActivity: [
      {
        id: 0,
        merchant: "Card Repayment",
        amount: 40000,
        transactedAt: "08 Jan 2024",
      },
    ],
  },
];
