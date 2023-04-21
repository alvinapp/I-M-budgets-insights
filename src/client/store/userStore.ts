import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {},
  currencySymbol: "₦",
  setUser: (user: any) => {
    return set(() => {
      const result = {
        user: user,
      };
      return result;
    });
  },
}));
export default useUserStore;
