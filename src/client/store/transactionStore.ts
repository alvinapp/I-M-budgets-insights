import create from "zustand";

import Transaction from "client/models/Transaction";
import ViewBudget from "client/pages/budgets/ViewBudget";

const useTransactionStore = create((set) => ({
  transactions: [],
  filteredTransactions: [],
  loading: false,
  loaded: false,
  filterLoading: false,
  filterLoaded: false,
  editCategorySheet: false,
  reloadcategories: false,
  displayCategoriesSheet: false,
  uncategorizedTransaction: {},
  receipient: "",
  category: {},
  account: "",
  note: "",
  viewBudgetSheet: false,
  setViewBudgetSheet: (open: boolean) => {
    return set(() => {
      const result = {
        viewBudgetSheet: open,
      };
      return result;
    });
  },
  setNote: (n: any) => {
    return set((state: any) => {
      const result = {
        note: n,
      };
      return result;
    });
  },
  setCategory: (categ: any) => {
    return set((state: any) => {
      const result = {
        category: categ,
      };

      return result;
    });
  },
  setAccount: (acc: any) => {
    return set((state: any) => {
      const result = {
        account: acc,
      };

      return result;
    });
  },
  setRecepient: (recp: any) => {
    return set((state: any) => {
      const result = {
        receipient: recp,
      };

      return result;
    });
  },
  setUncategorizedTransaction: (transaction: any) => {
    return set((state: any) => {
      const result = {
        uncategorizedTransaction: transaction,
      };

      return result;
    });
  },
  setDisplayCategoriesSheet: (display: boolean) => {
    return set((state: any) => {
      const result = {
        displayCategoriesSheet: display,
      };

      return result;
    });
  },
  setOpenEditCategorySheet: (edit: boolean) => {
    return set((state: any) => {
      const result = {
        editCategorySheet: edit,
      };

      return result;
    });
  },
  init: (transactions: Transaction[]) => {
    return set((state: any) => {
      const results = {
        transactions: transactions,
      };

      return results;
    });
  },
  setTransactionLoading: (loading: boolean) => {
    return set((state: any) => {
      const results = {
        loading: loading,
      };

      return results;
    });
  },
  setTransactionLoaded: (loaded: boolean) => {
    return set((state: any) => {
      const results = {
        loaded: loaded,
      };

      return results;
    });
  },
  setFilteredTransactions: (transactions: Transaction[]) => {
    return set((state: any) => {
      const results = {
        filteredTransactions: transactions,
      };

      return results;
    });
  },
  setFilterLoading: (loading: boolean) => {
    return set((state: any) => {
      const results = {
        filterLoading: loading,
      };

      return results;
    });
  },
  setFilterLoaded: (loaded: boolean) => {
    return set((state: any) => {
      const results = {
        filterLoaded: loaded,
      };

      return results;
    });
  },
  setReloadCategories: (reload: boolean) => {
    return set((state: any) => {
      const results = {
        reloadcategories: reload,
      };

      return results;
    });
  }
}));
export default useTransactionStore;
