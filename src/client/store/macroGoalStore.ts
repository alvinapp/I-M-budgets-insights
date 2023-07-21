import { Macro } from "client/models/Macro";
import { create } from "zustand";

interface MacroStoreState {
  macroGoals: Array<Macro>;
}

type IMacroStore = MacroStoreState & {
  setMacros: (data: Array<Macro>) => void;
};

const useMacrosStore = create<IMacroStore>((set) => ({
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