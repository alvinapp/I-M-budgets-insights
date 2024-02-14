import create from "zustand";
const useCurrencySettingsStore = create((set) => ({
  currencySymbol: " ₦",
  kenyanCurrency: " ₦",
}));
export default useCurrencySettingsStore;
