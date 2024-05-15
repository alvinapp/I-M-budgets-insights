import { create } from "zustand";
const useMonthlyIncomeStore = create((set) => ({
  currencySymbol: " KES",
  monthlyIncome: 0,
  setMonthlyIncome: (amount: number) => {
    return set((state: unknown) => {
      const result = {
        monthlyIncome: amount,
      };
      return result;
    });
  },
}));
export default useMonthlyIncomeStore;
