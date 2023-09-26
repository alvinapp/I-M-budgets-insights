import React from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

interface RandomExpenditureComparisonCardProps {
  percentage: number;
}

const RandomExpenditureComparisonCard: React.FC<RandomExpenditureComparisonCardProps> = ({ percentage }) => {
  return (
      <div className="flex flex-row items-start">
        <div className="flex flex-col">
          <div
            className={`flex justify-center items-center rounded-full h-4.5 w-4.5  mr-2.5 ${
              percentage < 0 ? "bg-skin-secondary" : "bg-skin-accent4"
            }`}
          >
            {percentage < 0 ? (
              <FiArrowDownRight color="#6f5a3f" size="0.75rem" />
            ) : (
              <FiArrowUpRight color="#1F5B19" size="0.75rem" />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`font-bold font-poppins text-xs ${
              percentage < 0 ? "text-skin-successAccent" : "text-skin-accent3"
            } tracking-widest`}
          >
            {`${percentage > 0 ? "+" : ""}${percentage}%`}
          </div>
        </div>
      </div>
  );
};

export default RandomExpenditureComparisonCard;
