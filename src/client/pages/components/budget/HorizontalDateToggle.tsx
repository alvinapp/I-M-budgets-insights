import React from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
  onPreviousMonthClick: () => void;
  onNextMonthClick: () => void;
  monthName: string;
};

export const HorizontalDateToggle: React.FC<Props> = ({
  onPreviousMonthClick,
  onNextMonthClick,
  monthName,
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
          className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-neutral cursor-pointer"
          onClick={onPreviousMonthClick} // Call the left chevron click handler
        >
          <FiChevronLeft color="#4E6783" size="1rem" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <FiCalendar />
          <div className="font-custom text-base text-skin-base font-semibold tracking-title ml-3">
            {monthName ? monthName : name}
          </div>
        </div>
      </div>
      <div
        className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-neutral cursor-pointer"
        onClick={onNextMonthClick} // Call the right chevron click handler
      >
        <FiChevronRight color="#4E6783" size="1rem" />
      </div>
    </div>
  );
};
