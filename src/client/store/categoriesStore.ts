import { Category } from "client/models/Categories";
import { create } from "zustand";
interface CategoryStoreState {
  categories: Array<Category>;
  categoryAmount: number;
  incrementalAmount: number;
  categoryBudgets: Array<any>;
  macros: any;
}
type ICategoryStore = CategoryStoreState & {
  setCategories: (data: Array<Category>) => void;
  incrementCategoryAmount: () => void;
  decrementCategoryAmount: () => void;
};
const useCategoriesStore = create<ICategoryStore>((set) => ({
  categories: [],
  categoryAmount: 0,
  incrementalAmount: 500,
  categoryBudgets: [],
  macros: {},
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
