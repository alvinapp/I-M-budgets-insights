import { create } from "zustand";
const usePageStore = create((set) => ({
  myAccountsPage: false,
  checkIfMyAccountsPage: (page: boolean) => {
    return set((state: any) => {
      const result = {
        myAccountsPage: page,
      };
      return result;
    });
  },
}));
export default usePageStore;
