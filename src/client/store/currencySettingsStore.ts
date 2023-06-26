import create from "zustand";
const useCurrencySettingsStore = create((set) => ({
  currencySymbol: "₦",
}));
export default useCurrencySettingsStore;
