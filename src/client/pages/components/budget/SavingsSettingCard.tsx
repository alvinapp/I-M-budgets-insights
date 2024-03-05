import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";

type SavingsSettingCardProps = {
  category?: string;
  emoji?: string;
  add?: any;
  edit?: any;
  amount?: number;
  selected?: boolean;
  isAdded?: boolean;
};
export const SavingsSettingCard = ({
  category,
  emoji,
  amount = 0,
  add,
  edit,
  selected = false,
  isAdded = false,
}: SavingsSettingCardProps) => {
  const handleAdd = (event: any) => {
    event.stopPropagation();
    add();
  };
  const handleEdit = (event: any) => {
    event.stopPropagation();
    edit();
  };
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-row items-center justify-between mb-3">
      <div className="flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-2">
            <div className="h-6 w-6 rounded-full flex items-center justify-center bg-skin-iconSecondary">
              <div>{emoji}</div>
            </div>
          </div>
          <div className="flex flex-col">
            {isAdded ? (
              <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
                Rainy day fund
              </div>
            ) : (
              <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
                {category}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex flex-row items-center justify-center">
          <div className="relative">
            <div
              className={`font-custom font-medium text-sm text-skin-base tracking-longest_text`}
            >
              {amount?.toLocaleString("en-US")}
              <sup className="font-custom font-medium text-xxs text-skin-base align-super">
                {currencySymbol}
              </sup>
            </div>
          </div>
          {isAdded ? (
            <div
              className="flex justify-center items-center flex-row"
              onClick={handleEdit}
            >
              <div
                className={`font-custom font-medium text-xs text-skin-base
                 mr-2 ml-1 tracking-progress_label`}
              >
                per month
              </div>
              <FiEdit2 color="#101010" size="0.75rem" />
            </div>
          ) : (
            <div
              className="rounded-full shadow-budgetButton flex justify-center items-center flex-row p-2.5 ml-4"
              onClick={handleAdd}
            >
              <FiPlus color="#042EBD" size="1.2rem" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
