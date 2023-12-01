import create from "zustand";
const useCurrencySettingsStore = create((set) => ({
  currencySymbol: "KES",
  kenyanCurrency: "KES",
}));
export default useCurrencySettingsStore;
