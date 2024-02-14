import { create } from "zustand";

interface CashflowVariablesStoreState {
  cashflowVariables: {
    startDate: string;
    endDate: string;
    accountName: string;
    dateFilter: string;
  };
  setCashflowVariables: (variables: {
    startDate: string;
    endDate: string;
    accountName: string;
    dateFilter: string;
  }) => void;
}

const defaultStartDate = new Date();
defaultStartDate.setMonth(defaultStartDate.getMonth() - 3); // 3 months ago from today
const formattedDefaultStartDate = defaultStartDate.toISOString().split("T")[0];
const formattedDefaultEndDate = new Date().toISOString().split("T")[0];

const useCashflowVariablesStore = create<CashflowVariablesStoreState>(
  (set) => ({
    cashflowVariables: {
      startDate: formattedDefaultStartDate,
      endDate: formattedDefaultEndDate,
      accountName: "All accounts",
      dateFilter: "Last 3 months",
    },
    setCashflowVariables: (variables) => {
      set({ cashflowVariables: variables });
    },
  })
);

export default useCashflowVariablesStore;
