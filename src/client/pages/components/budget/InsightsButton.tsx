import React from "react";
import { FiBarChart, FiChevronRight } from "react-icons/fi";

export const InsightsButton = () => {
  return (
    <div className="flex flex-row bg-skin-accent2 items-center justify-center rounded-3xl h-12 py-1 pr-3 pl-2">
      <div className="flex flex-col mr-1">
        <div className="relative">
          <div className="absolute top-0 right-0 rounded-full h-1.5 w-1.5 bg-skin-primary"></div>
          <div className="flex justify-center items-center rounded-full h-6 w-6 border border-skin-primary">
            <FiBarChart color="#056489" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="font-poppins text-xs font-medium text-skin-neutral2">
            Insights
          </div>
          <span>
            <FiChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};
