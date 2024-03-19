import { create } from "zustand";

interface ActivePeriodRangeStoreState {
  activePeriodRange: {
    startDate: Date;
    endDate: Date;
  };
  setActivePeriodRange: (range: { startDate?: Date; endDate?: Date }) => void;
  setRangeStartDate: (startDate: Date) => void;
  setRangeEndDate: (endDate: Date) => void;
}

const useActivePeriodRangeStore = create<ActivePeriodRangeStoreState>(
  (set) => ({
    activePeriodRange: {
      startDate: getDefaultStartDate(),
      endDate: getDefaultEndDate(),
    },
    setActivePeriodRange: (range) => {
      set((state) => ({
        activePeriodRange: { ...state.activePeriodRange, ...range },
      }));
    },
    setRangeStartDate: (startDate) => {
      set((state) => ({
        activePeriodRange: { ...state.activePeriodRange, startDate },
      }));
    },
    setRangeEndDate: (endDate) => {
      set((state) => ({
        activePeriodRange: { ...state.activePeriodRange, endDate },
      }));
    },
  })
);

export default useActivePeriodRangeStore;

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
