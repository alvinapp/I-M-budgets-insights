import ProgressBar from "@ramonak/react-progress-bar";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface SavingsCategoryCardProps {
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
  onClick?: () => void;
}
const SavingsCategoryViewCard: React.FC<SavingsCategoryCardProps> = ({
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
  onClick,
}) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-row mb-3" onClick={onClick}>
      <div className="flex flex-col mr-2">
        <div className="h-8 w-8 relative overflow-hidden rounded-full bg-skin-iconSecondary">
          <img src={icon} alt="" className=" inline m-auto h-full w-auto" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center mb-2.5">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className="font-primary text-sm text-skin-base font-medium tracking-wide">
                {category}
              </div>
              <FiChevronRight size="0.75rem" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <div className="font-primary text-sm text-skin-base font-medium">
                {amount?.toLocaleString("en-us")}
                <sup className=" align-super -ml-1 text-xxs">
                  {currencySymbol ?? ""}
                </sup>
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
            className={`font-primary text-sm ${
              primaryColor ?? "text-skin-base"
            } font-medium mr-1`}
          >
            {spentAmount?.toLocaleString("en-us")}
          </div>
          <div
            className={`font-primary text-sm ${
              fadedColor ?? "text-skin-base"
            } font-medium mr-1`}
          >
            of
          </div>
          <div className="relative mr-1">
            <div
              className={`font-primary text-sm ${
                fadedColor ?? "text-skin-base"
              } font-medium`}
            >
              {budgetAmount?.toLocaleString("en-us")}
              <sup className=" align-super -ml-1 text-xxs">
                {currencySymbol ?? ""}
              </sup>
            </div>
          </div>
          <div
            className={`font-primary text-sm ${
              fadedColor ?? "text-skin-base"
            } font-medium`}
          >
            {caption ?? "spent"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCategoryViewCard;
