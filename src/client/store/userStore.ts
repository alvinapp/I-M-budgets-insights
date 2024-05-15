import { create } from "zustand";

type UserStore = {
  user: any;
  currencySymbol: string;
  setUser: (user: any) => void;
  setCurrencySymbol: (symbol: string) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: {},
  currencySymbol: " KES",
  setUser: (user) => {
    set((state) => ({
      ...state,
      user: user,
    }));
  },
  setCurrencySymbol: (symbol) => {
    set((state) => ({
      ...state,
      currencySymbol: symbol,
    }));
  },
}));

export default useUserStore;
