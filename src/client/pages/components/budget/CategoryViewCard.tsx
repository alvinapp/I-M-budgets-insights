import ProgressBar from "@ramonak/react-progress-bar";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { string } from "prop-types";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

type CategoryViewCardProps = {
  category?: string;
  icon?: string;
  iconBg?: string;
  amount?: number;
  progressPercentage: number;
  baseBgColor?: string;
  bgColor?: string;
  spentAmount?: number;
  budgetAmount?: number;
  primaryColor?: string;
  fadedColor?: string;
  caption?: string;
};
export const CategoryViewCard = ({
  icon,
  iconBg,
  category,
  amount,
  progressPercentage,
  baseBgColor,
  bgColor,
  budgetAmount,
  spentAmount,
  primaryColor,
  fadedColor,
  caption,
}: CategoryViewCardProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-row mb-3">
      <div className="flex flex-col mr-2">
        <div
          className={`rounded-full h-10 w-10 flex justify-center items-center ${iconBg}`}
        >
          <div>{icon}</div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center mb-2.5">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className="font-primary text-xs text-skin-base font-medium tracking-wide">
                {category}
              </div>
              <div>
                <FiChevronRight size="0.5rem" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <div className="absolute -right-1 -top-2 font-primary font-semibold text-xxxxxs text-skin-base ">
                {currencySymbol ?? ""}
              </div>
              <div className="font-primary text-xs text-skin-base font-semibold">
                {amount?.toLocaleString("en-us")}
              </div>
            </div>
          </div>
        </div>
        <ProgressBar
          completed={progressPercentage}
          height="4px"
          baseBgColor={`${baseBgColor}`}
          bgColor={`${bgColor}`}
          // bgColor="#0131a1"
          isLabelVisible={false}
        />
        <div className="flex flex-row mb-2.5 items-center"></div>
        <div className="flex flex-row items-center">
          <div
            className={`font-primary text-xs ${
              primaryColor ?? "text-skin-base"
            } font-semibold mr-1`}
          >
            {spentAmount?.toLocaleString("en-us")}
          </div>
          <div
            className={`font-primary text-xs ${
              fadedColor ?? "text-skin-base"
            } font-semibold mr-1`}
          >
            of
          </div>
          <div className="relative mr-1">
            <div
              className={`absolute -right-2.5 -top-2 font-primary text-xxxxxs ${
                fadedColor ?? "text-skin-base"
              } font-semibold`}
            >
              {currencySymbol ?? ""}
            </div>
            <div
              className={`font-primary text-xs ${
                fadedColor ?? "text-skin-base"
              } font-semibold`}
            >
              {budgetAmount?.toLocaleString("en-us")}
            </div>
          </div>
          <div
            className={`font-primary text-xs ${
              fadedColor ?? "text-skin-base"
            } font-semibold`}
          >
            {caption ?? "spent"}
          </div>
        </div>
      </div>
    </div>
  );
};
