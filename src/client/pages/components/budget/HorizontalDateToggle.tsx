import React from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CustomDateRangePicker from "../custom-date-picker/CustomerDateRangePicker";

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
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let name = month[d.getMonth()];

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <div
          className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-base cursor-pointer"
          onClick={onPreviousMonthClick} // Call the left chevron click handler
        >
          <FiChevronLeft color="#4E6783" size="1rem" />
        </div>
      </div>
      <CustomDateRangePicker
        onDateRangeSelect={onDateRangeSelect}
        startDate={startDate}
        endDate={endDate}
        disabled={true}
        restrictToCurrentMonth={true}
        lastUpdatedEnv={lastUpdatedEnv}
      />
      <div
        className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-base cursor-pointer"
        onClick={onNextMonthClick} // Call the right chevron click handler
      >
        <FiChevronRight color="#4E6783" size="1rem" />
      </div>
    </div>
  );
};
