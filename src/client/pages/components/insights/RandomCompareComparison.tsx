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
          className={`flex justify-center items-center rounded-full h-4.5 w-4.5  mr-2.5 ${
            percentage < 0 ? "bg-skin-secondary" : "bg-skin-accent4"
          }`}
        >
          {percentage < 0 ? (
            <FiArrowDownRight color="#6f5a3f" size="0.75rem" />
          ) : percentage === 0 || percentage == 0.0 ? (
            <FiArrowRight color="#1F5B19" size="0.75rem" />
          ) : (
            <FiArrowUpRight color="#1F5B19" size="0.75rem" />
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className={`font-bold font-primary text-xs ${
            percentage < 0 ? "text-skin-successAccent" : "text-skin-accent3"
          } tracking-widest`}
        >
          {`${
            percentage > 0
              ? "+"
              : percentage === 0 || percentage == 0.0
              ? ""
              : "-"
          }`}
          <span>
            {" "}
            <AnimatedNumber target={percentage} duration={500} />%
          </span>
        </div>
      </div>
    </div>
  );
};

export default RandomExpenditureComparisonCard;
