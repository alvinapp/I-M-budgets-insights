import { create } from "zustand";

interface IncomeSplit {
  essentials: number;
  wants: number;
  savings: number;
}

interface BudgetSettings {
  currency: string;
  monthlyIncome: number;
  incomeSplit: IncomeSplit;
}

type IBudgetSettingsStore = BudgetSettings & {
  setMonthlyIncome: ((amount: number) => void);
  setIncomeSplit: ((split: IncomeSplit) => void);
}

const useBudgetSettingsStore = create<IBudgetSettingsStore>((set) => ({
  currency: "₦",
  monthlyIncome: 0,
  incomeSplit: {
    essentials: 50,
    wants: 30,
    savings: 20,
  },
  setMonthlyIncome: (amount: number) => {
    return set((state: BudgetSettings) => {
      const result: BudgetSettings = {
        ...state,
        monthlyIncome: amount,
      };
      return result;
    });
  },
  setIncomeSplit: (split: IncomeSplit) => {
    return set((state: BudgetSettings) => {
      const result: BudgetSettings = {
        ...state,
        incomeSplit: split,
      };
      return result;
    });
  },
}));

export {
  IncomeSplit,
  BudgetSettings,
  IBudgetSettingsStore,
  useBudgetSettingsStore,
};
