import React from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const HorizontalDateToggle = () => {
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
        <div className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-neutral">
          <FiChevronLeft color="#4E6783" size="1rem" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <FiCalendar />
          <div className="font-workSans text-base text-skin-base font-semibold tracking-title ml-3">
            {name}
          </div>
        </div>
      </div>
      <div className="h-10 w-10 rounded-full flex justify-center items-center border border-skin-neutral">
        <FiChevronRight color="#4E6783" size="1rem" />
      </div>
    </div>
  );
};
