import create from "zustand";
const useCurrencySettingsStore = create((set) => ({
  currencySymbol: " KES",
  kenyanCurrency: " ₦",
}));
export default useCurrencySettingsStore;
