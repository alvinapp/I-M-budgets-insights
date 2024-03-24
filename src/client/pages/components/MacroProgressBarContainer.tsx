import React from "react";
import MacroProgressBar from "./MacroProgressBar";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import AnimatedNumber from "./AnimatedNumber";
import { checkNAN } from "client/utils/Formatters";

interface MacroProgressBarsContainerProps {
  ratios: string; // format like "50/30/20"
  budgetAmount: { [key: string]: number };
  progressPercentage?: { [key: string]: number };
  isLoading: boolean;
}

const MacroProgressBarsContainer: React.FC<MacroProgressBarsContainerProps> = ({
  ratios,
  budgetAmount = {
    wantsBudget: 60000,
    essentialsBudget: 69617,
    savingsBudget: 15660,
  },
  progressPercentage = {
    wantsProgress: 0,
    essentialsProgress: 0,
    savingsProgress: 0,
  },
  isLoading,
}) => {
  const ratioArray = ratios.split("/").map(Number);
  const currencyStore = useCurrencySettingsStore((state: any) => state);
  const currencySymbol = currencyStore.currencySymbol;
  const progressString = ["Essentials spend", "Wants spend", "Saved"];

  return (
    <div
      className="flex flex-row justify-between items-center mt-2 space-x-2"
      style={{ display: "flex" }}
    >
      {ratioArray.map((flexValue, index) => (
        <div key={index} className="flex flex-col" style={{ flex: flexValue }}>
          {isLoading ? (
            <div className="bg-silver animate-pulse h-[1.875rem] rounded-[1.375rem] bg-[#d2d2d2] min-w-[7.5rem]" />
          ) : (
            <MacroProgressBar
              flexValue={1}
              bgColorBottom={
                index === 0 ? "#E7EDF3" : index === 1 ? "#E7EDF3" : "#C8ECEF"
              }
              bgColorTop={
                index === 0
                  ? "linear-gradient(159deg, #4053D0 0%, #051AA3 100%)"
                  : index === 1
                    ? "linear-gradient(159deg, #8490E2 0%, #3B4381 100%)"
                    : "linear-gradient(124.2deg, #1BBFCD 0%, #0099A6 100%)"
              }
              outsideLength={
                progressPercentage[Object.keys(progressPercentage)[index]]
              }
              height={30}
            />
          )}
          <div className="flex flex-col justify-end items-start mt-3">
            <div className="relative flex items-end">
              <div
                className="font-custom font-medium text-base text-skin-base"
              >
                <AnimatedNumber target={isLoading ? 0 : checkNAN(budgetAmount[Object.keys(budgetAmount)[index]] ?? 0)} duration={500} />
                <sup
                  style={{
                    fontSize: "12px",
                    verticalAlign: "super",
                    marginLeft: "-4px",
                  }}
                >
                  {currencySymbol ? currencySymbol : ""}
                </sup>
              </div>
            </div>
            <div className="font-primary text-xs text-skin-base tracking-progress_label">
              {progressString[index]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MacroProgressBarsContainer;
