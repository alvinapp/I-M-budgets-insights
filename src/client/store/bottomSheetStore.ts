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
