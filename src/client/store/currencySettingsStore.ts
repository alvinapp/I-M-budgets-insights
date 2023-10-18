import create from "zustand";
const useCurrencySettingsStore = create((set) => ({
  currencySymbol: "₦",
  kenyanCurrency: "KES",
}));
export default useCurrencySettingsStore;
