import { Category } from "client/models/Categories";
import { create } from "zustand";
interface CategoryStoreState {
  categories: Array<Category>;
  categoryAmount: number;
  incrementalAmount: number;
  categoryBudgets: Array<any>;
  macros: any;
  loanRepaymentCategories: Array<any>;
}
type ICategoryStore = CategoryStoreState & {
  setLoanCategoryBudgets: (data: Array<Category>) => void;
  setCategories: (data: Array<Category>) => void;
  incrementCategoryAmount: () => void;
  decrementCategoryAmount: () => void;
};
const useCategoriesStore = create<ICategoryStore>((set) => ({
  categories: [],
  categoryAmount: 0,
  incrementalAmount: 500,
  loanRepaymentCategories: [],
  categoryBudgets: [
    {
      id: 247,
      type_id: 1,
      macrotype_name: "Essentials",
      total_expense: 0,
      total_amount: 1000,
      percentage: 50,
      range_expense: {
        last_month_total: 0,
        this_month_total: 0,
      },
      data: [
        {
          id: 641,
          name: "Bills & Fees",
          pseudo_name: "Bills & Fees 💳",
          extern_id: 1,
          amount: 0,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 1,
            name: "Bills & Fees",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "bills",
            extern_id: 1,
            emoji: "💳",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 642,
          name: "Data & WiFi",
          pseudo_name: "Data & WiFi 🌐",
          extern_id: 2,
          amount: 0,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 2,
            name: "Data & WiFi",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "datawifi",
            extern_id: 2,
            emoji: "🌐",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 636,
          name: "Education",
          pseudo_name: "Education 📚",
          extern_id: 8,
          amount: 500,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 8,
            name: "Education",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "education",
            extern_id: 8,
            emoji: "📚",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 639,
          name: "Groceries",
          pseudo_name: "Groceries 🥦",
          extern_id: 4,
          amount: 0,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 4,
            name: "Groceries",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "groceries",
            extern_id: 4,
            emoji: "🥦",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 637,
          name: "Health",
          pseudo_name: "Health 💚",
          extern_id: 5,
          amount: 500,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 5,
            name: "Health",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "health",
            extern_id: 5,
            emoji: "💚",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 640,
          name: "Loan Repayment",
          pseudo_name: "Loan Repayment 🙌🏼",
          extern_id: 7,
          amount: 0,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 7,
            name: "Loan Repayment",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "loanrepayment",
            extern_id: 7,
            emoji: "🙌🏼",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 638,
          name: "Rent / Mortgage",
          pseudo_name: "Rent / Mortgage 🏠",
          extern_id: 6,
          amount: 0,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 6,
            name: "Rent / Mortgage",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "rent",
            extern_id: 6,
            emoji: "🏠",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 643,
          name: "Transport & Fuel",
          pseudo_name: "Transport & Fuel 🚌",
          extern_id: 3,
          amount: 0,
          percentage: 0,
          macro_goal_id: 247,
          macro_name: "Essentials",
          category: {
            id: 3,
            name: "Transport & Fuel",
            macro_type: {
              id: 1,
              name: "Essentials",
            },
            icon_name: "transport",
            extern_id: 3,
            emoji: "🚌",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
      ],
    },
    {
      id: 248,
      type_id: 2,
      macrotype_name: "Wants",
      total_expense: 0,
      total_amount: 1000,
      percentage: 30,
      range_expense: {
        last_month_total: 0,
        this_month_total: 0,
      },
      data: [
        {
          id: 648,
          name: "Family & Friends",
          pseudo_name: "Family & Friends 👨‍👩‍👧‍👦",
          extern_id: 9,
          amount: 0,
          percentage: 0,
          macro_goal_id: 248,
          macro_name: "Wants",
          category: {
            id: 9,
            name: "Family & Friends",
            macro_type: {
              id: 2,
              name: "Wants",
            },
            icon_name: "familyfriends",
            extern_id: 1,
            emoji: "👨‍👩‍👧‍👦",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 644,
          name: "Gambling",
          pseudo_name: "Gambling 🎰",
          extern_id: 14,
          amount: 500,
          percentage: 0,
          macro_goal_id: 248,
          macro_name: "Wants",
          category: {
            id: 14,
            name: "Gambling",
            macro_type: {
              id: 2,
              name: "Wants",
            },
            icon_name: "gambling",
            extern_id: 9,
            emoji: "🎰",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 645,
          name: "Going out",
          pseudo_name: "Going out 🍽",
          extern_id: 10,
          amount: 500,
          percentage: 0,
          macro_goal_id: 248,
          macro_name: "Wants",
          category: {
            id: 10,
            name: "Going out",
            macro_type: {
              id: 2,
              name: "Wants",
            },
            icon_name: "goingout",
            extern_id: 2,
            emoji: "🍽",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 646,
          name: "Miscellaneous",
          pseudo_name: "Miscellaneous 🤷🏽‍",
          extern_id: 12,
          amount: 0,
          percentage: 0,
          macro_goal_id: 248,
          macro_name: "Wants",
          category: {
            id: 12,
            name: "Miscellaneous",
            macro_type: {
              id: 2,
              name: "Wants",
            },
            icon_name: "miscellaneous",
            extern_id: 4,
            emoji: "🤷🏽‍",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
        {
          id: 647,
          name: "Shopping",
          pseudo_name: "Shopping 🛍",
          extern_id: 11,
          amount: 0,
          percentage: 0,
          macro_goal_id: 248,
          macro_name: "Wants",
          category: {
            id: 11,
            name: "Shopping",
            macro_type: {
              id: 2,
              name: "Wants",
            },
            icon_name: "shopping",
            extern_id: 3,
            emoji: "🛍",
          },
          expenses: 0,
          order: 0,
          contribution_setting: null,
          progress: 0,
          is_contribute_customized: true,
          streak: 0,
          transactions: [],
        },
      ],
    },
    {
      id: 249,
      type_id: 3,
      macrotype_name: "Savings",
      total_expense: 0,
      total_amount: 0,
      percentage: 20,
      range_expense: {
        last_month_total: 0,
        this_month_total: 0,
      },
      data: [],
    },
  ],
  macros: {},
  setLoanCategoryBudgets: (categories: Array<any>) => {
    return set((state: CategoryStoreState) => {
      const result: CategoryStoreState = {
        ...state,
        loanRepaymentCategories: categories,
      };
      return result;
    });
  },
  setMacros: (macrosList: Array<any>) => {
    return set((state: CategoryStoreState) => {
      const result: CategoryStoreState = {
        ...state,
        macros: macrosList,
      };
      return result;
    });
  },
  setCategoryBudgets: (budgets: Array<any>) => {
    return set((state: CategoryStoreState) => {
      const result: CategoryStoreState = {
        ...state,
        categoryBudgets: budgets,
      };
      return result;
    });
  },
  setCategories: (data: Array<Category>) => {
    return set((state: CategoryStoreState) => {
      const result: CategoryStoreState = {
        ...state,
        categories: data,
      };
      return result;
    });
  },
  incrementCategoryAmount: () => {
    return set((state: CategoryStoreState) => ({
      categoryAmount: state.categoryAmount + state.incrementalAmount,
    }));
  },

  decrementCategoryAmount: () => {
    return set((state: CategoryStoreState) => ({
      categoryAmount: state.categoryAmount - state.incrementalAmount,
    }));
  },
}));
export default useCategoriesStore;
