import { create } from "zustand";

interface InsightsStoreState {
  insightsStartDate: Date;
  insightsEndDate: Date;
  insightsActiveInstitutionId: any | null;
  insightsActiveInstitutionName: string;
  insightsDateFilterName: string;
  insightsLoading: boolean;
  insightsDateFilterId: string;
  setInsightsStartDate: (startDate: Date) => void;
  setInsightsEndDate: (endDate: Date) => void;
  setInsightsActiveInstitutionId: (institutionId: any | null) => void;
  setInsightsVariables: (
    startDate: any,
    endDate: any,
    institutionId: any
  ) => void;
  setInsightsLoading: (loading: boolean) => void;
  setInsightsActiveInstitutionName: (institutionName: any) => void;
  setInsightsDateFilterName: (dateFilterName: string) => void;
  setInsightsDateFilterId: (dateFilterId: string) => void;
}

const useInsightsStore = create<InsightsStoreState>((set) => ({
  insightsStartDate: getDefaultStartDate(),
  insightsEndDate: getDefaultEndDate(),
  insightsActiveInstitutionId: null,
  insightsLoading: false,
  insightsActiveInstitutionName: "All accounts",
  insightsDateFilterName: "This month",
  insightsDateFilterId: "0",
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
  setInsightsActiveInstitutionName: (institutionName: any) => {
    set({ insightsActiveInstitutionName: institutionName });
  },
  setInsightsDateFilterName: (dateFilterName: string) => {
    set({ insightsDateFilterName: dateFilterName });
  },
  setInsightsDateFilterId: (dateFilterId: string) => {
    set({ insightsDateFilterId: dateFilterId });
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
