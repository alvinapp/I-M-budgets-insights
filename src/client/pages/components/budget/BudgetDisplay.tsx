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
}: BudgetDisplayProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex flex-col">
          <div className="font-workSans font-semibold text-xl text-skin-base tracking-title">
            {title}
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-row">
            <div className="relative">
              <div className="absolute -right-1 -top-3 font-workSans font-semibold text-sm text-skin-neutral2">
                {currencySymbol}
              </div>
              <div className="font-workSans font-semibold text-lg text-skin-neutral2">
                {budgetAmount?.toLocaleString("en-US")}
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="font-poppins text-xxxs font-bold text-skin-subtitle tracking-longest_text">
              {percentageOfBudgetCaption}
            </div>
          </div>
        </div>
      </div>
      <ProgressBar
        completed={progressPercentage}
        height="1.0625rem"
        baseBgColor={`#E7EDF3`}
        // bgColor={`#6F89A5`}
        bgColor="#0131a1"
        isLabelVisible={false}
      />
      <div className="flex flex-row justify-between items-center mt-6">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col mr-3 mt-1">
              <div className="rounded-full bg-[#0131a1] h-4 w-4"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="relative">
                  <div className="absolute -right-5 -top-3 font-workSans font-semibold text-sm text-skin-neutral2">
                    {currencySymbol}
                  </div>
                  <div className="font-workSans font-semibold text-lg text-skin-neutral2">
                    {allocatedAmount?.toLocaleString("en-US")}
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="font-poppins text-xs font-medium text-skin-subtitle tracking-wide">
                  {allocatedCaption}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-row relative">
            <div className="flex flex-col mr-3 mt-1">
              <div className="rounded-full bg-skin-accent h-4 w-4"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="relative">
                  <div className="absolute -right-1 -top-3  font-workSans font-semibold text-sm text-skin-neutral2">
                    {currencySymbol}
                  </div>
                  <div className="font-workSans font-semibold text-lg text-skin-neutral2">
                    {unallocatedAmount?.toLocaleString("en-US")}
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="font-poppins text-xs font-medium text-skin-subtitle tracking-wide">
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
