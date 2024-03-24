import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import AnimatedNumber from "../AnimatedNumber";
type ExpenditureComparisonCardProps = {
  category: string;
  icon: string;
  percentage: number;
};
export const ExpenditureComparisonCard = ({
  icon,
  category,
  percentage,
}: ExpenditureComparisonCardProps) => {
  return (
    <div className="flex flex-row items-center justify-between mb-3">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-2">
            <div>{icon}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium font-primary text-xs text-skin-base tracking-subtitle mb-1">
              {category}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <div
              className={`flex justify-center items-center rounded-full h-4.5 w-4.5  mr-2.5 ${percentage < 0 ? "bg-skin-secondary" : "bg-skin-accent4"
                }`}
            >
              {percentage < 0 ? (
                <FiArrowDownRight color="#6f5a3f" size="0.75rem" />
              ) : percentage == 0 ? (
                <FiArrowRight color="#1F5B19" size="0.75rem" />
              ) : (
                <FiArrowUpRight color="#1F5B19" size="0.75rem" />
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className={`font-bold font-primary text-xs ${percentage < 0 ? "text-skin-successAccent" : "text-skin-accent3"
                } tracking-widest`}
            >
              {`${percentage > 0 ? "+" : ""}`}<span> <AnimatedNumber target={parseFloat(percentage.toFixed(1))} duration={500} />%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
