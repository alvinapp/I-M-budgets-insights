import ProgressBar from "@ramonak/react-progress-bar";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
type BudgetDisplayProps = {
  title?: string;
  budgetAmount?: number;
  percentageOfBudgetCaption?: string;
  progressPercentage?: number;
  unallocatedCaption?: string;
  allocatedCaption?: string;
  allocatedAmount?: number;
  unallocatedAmount?: number;
  indicatorColor?: string;
  progressColor?: string;
};
export const BudgetDisplay = ({
  title,
  budgetAmount,
  unallocatedAmount,
  unallocatedCaption,
  allocatedAmount,
  allocatedCaption,
  percentageOfBudgetCaption,
  progressPercentage = 0,
  indicatorColor,
  progressColor,
}: BudgetDisplayProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex flex-col">
          <div className="font-custom font-medium text-xl text-skin-base tracking-title">
            {title}
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-row">
            <div className="font-custom font-medium text-lg text-skin-base">
              {budgetAmount?.toLocaleString("en-US")}
              <sup className="font-custom font-medium text-xxxs text-skin-base align-super">
                {currencySymbol}
              </sup>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="font-primary text-sm font-medium text-skin-subtitle tracking-wider">
              {percentageOfBudgetCaption}
            </div>
          </div>
        </div>
      </div>
      <ProgressBar
        completed={progressPercentage}
        height="1.0625rem"
        baseBgColor={`#E7E7E7`}
        bgColor={progressColor}
        isLabelVisible={false}
      />
      <div className="flex flex-row justify-between items-center mt-6">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col mr-3 mt-1">
              <div
                className={`rounded-full ${indicatorColor ?? "bg-[#0131a1]"
                  }  h-4 w-4`}
              ></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="font-custom font-medium text-lg text-skin-base">
                  {allocatedAmount?.toLocaleString("en-US")}
                  <sup className="font-custom font-medium text-xxs text-skin-base align-super">
                    {currencySymbol}
                  </sup>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="font-primary text-sm font-medium text-skin-subtitle tracking-wider">
                  {allocatedCaption}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-row relative">
            <div className="flex flex-col mr-3 mt-1">
              <div className="rounded-full bg-[#E7E7E7] h-4 w-4"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="relative">
                  <div className="font-custom font-medium text-lg text-skin-base">
                    {unallocatedAmount?.toLocaleString("en-US")}
                    <sup className="font-custom font-medium text-xxs text-skin-base align-super">
                      {currencySymbol}
                    </sup>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="font-primary text-sm font-medium text-skin-subtitle tracking-wider">
                  {unallocatedCaption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
