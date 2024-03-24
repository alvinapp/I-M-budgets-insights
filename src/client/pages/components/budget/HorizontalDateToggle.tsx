import React, { useMemo } from "react";
import { addMonths, isAfter } from "date-fns";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CustomDateRangePicker from "../custom-date-picker/CustomerDateRangePicker";
import MonthYearPicker from "../custom-date-picker/MonthYearPicker";

type Props = {
  onPreviousMonthClick: (event: any) => void;
  onNextMonthClick: (event: any) => void;
  onDateRangeSelect: (DateRange: any) => void;
  startDate: Date | null;
  endDate: Date | null;
  lastUpdatedEnv: "props" | "local";
};

export const HorizontalDateToggle: React.FC<Props> = ({
  onPreviousMonthClick,
  onNextMonthClick,
  onDateRangeSelect,
  startDate,
  endDate,
  lastUpdatedEnv,
}) => {

  const isNextMonthDisabled = useMemo(() => {
    const today = new Date();
    const nextMonth = addMonths(startDate ?? new Date(), 1);
    return isAfter(nextMonth, today);
  }, [startDate]);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <div
          className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-base cursor-pointer"
          onClick={onPreviousMonthClick}
        >
          <FiChevronLeft color="#4E6783" size="1rem" />
        </div>
      </div>
      <MonthYearPicker onMonthYearSubmit={onDateRangeSelect} startDate={startDate ?? new Date()} endDate={endDate ?? new Date()} />
      <div
        className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-base cursor-pointer"
        onClick={!isNextMonthDisabled ? onNextMonthClick : undefined}
        style={{ pointerEvents: isNextMonthDisabled ? "none" : "auto", backgroundColor: isNextMonthDisabled ? "#E0E0E0" : "#fff", border: isNextMonthDisabled ? "#E0E0E0" : "1px solid #101010" }}
      >
        <FiChevronRight color="#4E6783" size="1rem" />
      </div>
    </div>
  );
};
