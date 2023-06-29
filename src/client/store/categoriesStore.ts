import { Category } from "client/models/Categories";
import { create } from "zustand";
interface CategoryStoreState {
  categories: Array<Category>;
  categoryAmount: number;
}
type ICategoryStore = CategoryStoreState & {
  setCategories: (data: Array<Category>) => void;
  incrementCategoryAmount: () => void;
  decrementCategoryAmount: () => void;
};
const useCategoriesStore = create<ICategoryStore>((set) => ({
  categories: [],
  categoryAmount: 0,
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
      categoryAmount: state.categoryAmount + 500,
    }));
  },

  decrementCategoryAmount: () => {
    return set((state: CategoryStoreState) => ({
      categoryAmount: state.categoryAmount - 500,
    }));
  },
}));
export default useCategoriesStore;
