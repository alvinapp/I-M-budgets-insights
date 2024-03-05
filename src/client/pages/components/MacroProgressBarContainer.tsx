import React from "react";
import MacroProgressBar from "./MacroProgressBar";
import useCurrencySettingsStore from "client/store/currencySettingsStore";

interface MacroProgressBarsContainerProps {
  ratios: string; // format like "50/30/20"
  budgetAmount: { [key: string]: number };
  progressPercentage?: { [key: string]: number };
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
          <MacroProgressBar
            flexValue={1}
            bgColorBottom={
              index === 0 ? "#E7EDF3" : index === 1 ? "#E7EDF3" : "#C8ECEF"
            }
            bgColorTop={
              index === 0
                ? "linear-gradient(159deg,#4053D0_0%,#051AA3_100%)"
                : index === 1
                ? "linear-gradient(159deg,#8490E2_0%,#3B4381_100%)"
                : "linear-gradient(124.2deg, #1BBFCD 0%, #0099A6 100%)"
            }
            outsideLength={
              progressPercentage[Object.keys(progressPercentage)[index]]
            }
            height={30}
          />
          <div className="flex flex-col justify-end items-start mt-3">
            <div className="relative flex items-end">
              {/* <div
                  className="absolute -right-4 -top-1.5 text-xxxs font-custom font-semibold text-skin-base"

                >
                  {currencySymbol}
                </div> */}
              <div
                className="font-custom font-medium text-base text-skin-base"
                /*  style={{
                  color:
                    index === 0
                     / ? "#056489"
                      : index === 1
                     / ? "#c77e2b"
                      : "#117C07",
                }} */
              >
                {budgetAmount[Object.keys(budgetAmount)[index]]?.toLocaleString(
                  "en-US"
                )}
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
