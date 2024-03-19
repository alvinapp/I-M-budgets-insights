import React from "react";
import { FiBarChart, FiChevronRight } from "react-icons/fi";
type InsightsButtonProps = {
  onClick?: () => void;
};
export const InsightsButton = ({ onClick }: InsightsButtonProps) => {
  return (
    <button
      className="flex flex-row bg-skin-accent2 items-center justify-center rounded-3xl h-12 py-1 pr-3 pl-2"
      onClick={onClick}
    >
      <div className="flex flex-col mr-1.5">
        <div className="relative">
          {/* <div className="absolute top-0 right-0.5 rounded-full h-1.5 w-1.5 bg-skin-primary"></div> */}
          <div className="flex justify-center items-center rounded-full h-6 w-6 border border-[#0d0d0d]">
            <FiBarChart color="#0d0d0d" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="font-primary text-xs font-medium text-skin-base">
            Insights
          </div>
          <span>
            <FiChevronRight size="0.725rem" />
          </span>
        </div>
      </div>
    </button>
  );
};
