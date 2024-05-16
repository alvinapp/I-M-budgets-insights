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
            <div className="h-6 w-6 rounded-full bg-[#E8E3DC] mr-2 flex justify-center items-center">
              {icon}
            </div>
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
          {percentage == 0 ? null : <div className="flex flex-col">
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
          </div>}
          <div className="flex flex-col">
            <div
              className={`font-bold font-primary text-xs ${percentage < 0 ? "text-[#ee3e59]" : "text-[#5f9d30]"
                } tracking-widest`}
            >
              {`${percentage > 0 ? "+" : ""}`}
              <span>
                <AnimatedNumber
                  target={parseFloat(percentage.toFixed(1))}
                  duration={500}
                />
                %
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
