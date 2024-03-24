import { create } from "zustand";

interface InsightsStoreState {
  insightsStartDate: Date;
  insightsEndDate: Date;
  insightsActiveInstitutionId: any | null;
  insightsLoading: boolean;
  setInsightsStartDate: (startDate: Date) => void;
  setInsightsEndDate: (endDate: Date) => void;
  setInsightsActiveInstitutionId: (institutionId: any | null) => void;
  setInsightsVariables: (
    startDate: any,
    endDate: any,
    institutionId: any
  ) => void;
  setInsightsLoading: (loading: boolean) => void;
}

const useInsightsStore = create<InsightsStoreState>((set) => ({
  insightsStartDate: getDefaultStartDate(),
  insightsEndDate: getDefaultEndDate(),
  insightsActiveInstitutionId: null,
  insightsLoading: false,
  setInsightsLoading: (loading: boolean) => {
    set({ insightsLoading: loading });
  },
  setInsightsVariables: (startDate: any, endDate: any, institutionId: any) => {
    set({
      insightsStartDate: startDate,
      insightsEndDate: endDate,
      insightsActiveInstitutionId: institutionId,
    });
  },
  setInsightsStartDate: (startDate) => {
    set({ insightsStartDate: startDate });
  },
  setInsightsEndDate: (endDate) => {
    set({ insightsEndDate: endDate });
  },
  setInsightsActiveInstitutionId: (institutionId) => {
    set({ insightsActiveInstitutionId: institutionId });
  },
}));

export default useInsightsStore;

function getDefaultStartDate(): Date {
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  return startOfMonth;
}

function getDefaultEndDate(): Date {
  const currentDate = new Date();
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  return endOfMonth;
}
