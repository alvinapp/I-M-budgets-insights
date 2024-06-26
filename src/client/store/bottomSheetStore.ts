import { create } from "zustand";

const useBottomSheetStore = create((set) => ({
  successBottomSheet: false,
  disableEventPointers: false,
  setDisableEventPointers: (add: boolean) => {
    return set(() => {
      const result = {
        disableEventPointers: add,
      };
      return result;
    });
  },
  setSuccessBottomSheet: (open: boolean) => {
    return set(() => {
      const result = {
        successBottomSheet: open,
      };

      return result;
    });
  },
}));

export default useBottomSheetStore;

export const useSavingsBottomSheetStore = create((set) => ({
  savingsBottomSheet: false,
  setSavingsBottomSheet: (open: boolean) => {
    return set(() => {
      const result = {
        savingsBottomSheet: open,
      };
      return result;
    });
  },
}));

export const useBudgetSavingsSheetStore = create((set) => ({
  savingsBottomSheet: false,
  setSavingsBottomSheet: (open: boolean) => {
    return set(() => {
      const result = {
        savingsBottomSheet: open,
      };
      return result;
    });
  },
}));

export const useLoanRepaymentPromptStore = create((set) => ({
  repaymentLoanPrompt: true,
  setRepaymentLoanPromptSheet: (open: boolean) => {
    return set(() => {
      const result = {
        repaymentLoanPrompt: open,
      };
      return result;
    });
  },
}));
