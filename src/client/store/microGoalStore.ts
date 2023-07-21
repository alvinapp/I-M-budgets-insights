import { MicroGoal } from "client/models/MicroGoal";
import { create } from "zustand";

interface MicroGoalStoreState {
microGoals: Array<MicroGoal>;
}

type IMicroGoalStore = MicroGoalStoreState & {
setMicroGoals: (data: Array<MicroGoal>) => void;
};

const useMicroGoalsStore = create<IMicroGoalStore>((set) => ({
microGoals: [],

setMicroGoals: (data: Array<MicroGoal>) => {
    return set((state: MicroGoalStoreState) => {
    const result: MicroGoalStoreState = {
        ...state,
        microGoals: data,
    };
    return result;
    });
},
}));

export default useMicroGoalsStore;
  