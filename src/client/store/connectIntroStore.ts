import { create } from "zustand";

const useConnectInfoStore = create((set) => ({
  infoSlideIndex: 0,
  slideIndex: 0,
  setSlideIndex: (index: any) => {
    return set(() => {
      const result = {
        slideIndex: index,
      };
      return result;
    });
  },
  setInfoSlideIndex: (index: any) => {
    return set(() => {
      const result = {
        infoSlideIndex: index,
      };
      return result;
    });
  },
}));
export default useConnectInfoStore;
