import { useSavingsBottomSheetStore } from "client/store/bottomSheetStore";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";

type SavingsSettingCardProps = {
  goal?: string;
  emoji?: string;
  add?: any;
  edit?: any;
  amount?: number;
  selected?: boolean;
  isAdded?: boolean;
};
export const SavingsSettingCard = ({
  goal,
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
  const savingsBottomSheetStore = useSavingsBottomSheetStore(
    (state: any) => state
  );
  return (
    <div className="flex flex-row items-center justify-between mb-3">
      <div className="flex-col">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className="flex flex-col mr-2">
                <div className="h-8 w-8 relative overflow-hidden rounded-full bg-skin-iconSecondary">
                  <img
                    src={emoji}
                    alt=""
                    className=" inline m-auto h-full w-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
                  {goal}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div
              className="rounded-full shadow-budgetButton flex justify-center items-center flex-row ml-4 w-7 h-7"
              onClick={() =>
                savingsBottomSheetStore.setSavingsBottomSheet(true)
              }
            >
              <FiPlus color="#639186" size="1rem" />
            </div>
          </div>
        </div>
        <div className="flex flex-row font-custom text-sm tracking-wide font-normal mt-3">
          <div>
            The goal is calculated from your Essentials budget.Prepare for rainy
            days by saving {amount.toLocaleString("en-us")}
            <sup className="align-super text-xxxxxs font-custom font-normal -ml-1">
              {currencySymbol}
            </sup>{" "}
            per month!
          </div>
        </div>
      </div>
    </div>
  );
};
