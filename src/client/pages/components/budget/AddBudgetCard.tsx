import ProgressBar from "@ramonak/react-progress-bar";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { string } from "prop-types";
import React from "react";
import { FiChevronRight, FiPlus } from "react-icons/fi";

type AddBudgetCardProps = {
  category?: string;
  icon?: string;
  iconBg?: string;
  budgetAmount?: number;
  fadedColor?: string;
  plusColor?: string;
  onClick?: () => void;
};
export const AddBudgetCard = ({
  icon,
  iconBg,
  budgetAmount,
  fadedColor,
  plusColor,
  onClick,
}: AddBudgetCardProps) => {
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
      <div className="flex flex-col w-full justify-center">
        <div className="flex flex-row items-center">
          <div className="font-primary text-sm text-skin-base font-medium tracking-wide">
            Add more budgets
          </div>
        </div>
        <div className="flex flex-row items-center mt-2">
          <div className="relative">
            <div
              className={`font-primary text-sm ${
                fadedColor ?? "text-skin-base"
              } font-medium`}
            >
              {budgetAmount?.toLocaleString("en-us")}{" "}
              <sup className=" align-super -ml-1 text-xxs">
                {currencySymbol ?? ""}
              </sup>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full shadow-budgetButton flex justify-center items-center flex-row w-7 h-7">
          <FiPlus
            color={`${plusColor ?? "#0539EC"}`}
            size="1rem"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
