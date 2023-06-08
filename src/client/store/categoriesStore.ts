import { Category } from "client/models/Categories";
import { create } from "zustand";
interface CategoryStoreState {
  categories: Array<Category>;
}
type ICategoryStore = CategoryStoreState & {
  setCategories: (data: Array<Category>) => void;
};
const useCategoriesStore = create<ICategoryStore>((set) => ({
  categories: [],
  setCategories: (data: Array<Category>) => {
    return set((state: CategoryStoreState) => {
      const result: CategoryStoreState = {
        ...state,
        categories: data,
      };
      return result;
    });
  },
}));
export default useCategoriesStore;
