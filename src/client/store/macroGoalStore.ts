import { Macro } from "client/models/Macro";
import { create } from "zustand";

interface MacroStoreState {
  macroGoals: Array<Macro>;
}



const useMacrosStore = create((set) => ({
  macroGoals: [],

  setMacros: (data: Array<Macro>) => {
    return set((state: MacroStoreState) => {
      const result: MacroStoreState = {
        ...state,
        macroGoals: data,
      };
      return result;
    });
  },
}));

export default useMacrosStore;