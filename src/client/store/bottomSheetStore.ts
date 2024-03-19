import { create } from "zustand";

const useBottomSheetStore = create((set) => ({
  successBottomSheet: false,
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
