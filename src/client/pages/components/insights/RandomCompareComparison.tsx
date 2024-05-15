import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import AnimatedNumber from "../AnimatedNumber";

interface RandomExpenditureComparisonCardProps {
  percentage: number;
}

const RandomExpenditureComparisonCard: React.FC<
  RandomExpenditureComparisonCardProps
> = ({ percentage }) => {
  return (
    <div className="flex flex-row items-start">
      <div className="flex flex-col">
        <div
          className={`flex justify-center items-center rounded-full h-4.5 w-4.5  mr-2.5 ${percentage < 0
            ? "border bg-[#fcd9de] border-[#ee3e59]"
            : "border bg-[#ddebd5] border-[#5f9d30]"
            }`}
        >
          {percentage < 0 ? (
            <FiArrowDownRight color="#ee3e59" size="0.75rem" />
          ) : percentage == 0 ? (
            null
          ) : (
            <FiArrowUpRight color="#5f9d30" size="0.75rem" />
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className={`font-bold font-primary text-xs ${percentage < 0 ? "text-[#ee3e59]" : "text-[#5f9d30]"
            } tracking-widest`}
        >
          {`${percentage > 0 ? "+" : ""}`}
          <span>
            <AnimatedNumber
              target={percentage}
              duration={500}
            />
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default RandomExpenditureComparisonCard;
