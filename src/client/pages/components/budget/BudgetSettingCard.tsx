import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type BudgetSettingCardProps = {
  category?: string;
  emoji?: string;
  increment?: any;
  decrement?: any;
  amount?: number;
  selected?: boolean;
  addValue: (e: any) => void;
  maxValue: number;
  updateValue?: (value: number) => void;
};
export const BudgetSettingCard = ({
  category,
  emoji,
  amount = 0,
  increment,
  decrement,
  selected = false,
  addValue,
  maxValue,
  updateValue,
}: BudgetSettingCardProps) => {
  const handleIncrement = (event: any) => {
    event.stopPropagation();
    increment();
  };
  const handleDecrement = (event: any) => {
    event.stopPropagation();
    decrement();
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
            <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
              {category}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex flex-col justify-center">
          <div className="rounded-full shadow-budgetButton flex justify-center items-center flex-row p-2.5">
            {amount > 0 ? (
              <div className="flex flex-row items-center">
                <FiMinus
                  color="#042EBD"
                  size="1.2rem"
                  onClick={handleDecrement}
                />
                <div className="font-primary font-semibold text-xs mx-2">
                  <input
                    className="bg-transparent font-custom text-sm tracking-longest_text text-skin-base text-center font-medium border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-0 focus:border-b-0 w-20 h-5 cursor-none"
                    type="number"
                    value={amount}
                    min={0}
                    max={maxValue}
                    onChange={(e) => {
                      if (parseInt(e.target.value) > 0) {
                        addValue(parseInt(e.target.value));
                        if (updateValue) {
                          updateValue(parseInt(e.target.value));
                        }
                      }
                    }}
                  />
                  <sup className="font-custom font-medium text-xxs text-skin-base align-super">
                    {currencySymbol}
                  </sup>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <FiPlus color="#042EBD" size="1.2rem" onClick={handleIncrement} />
          </div>
        </div>
      </div>
    </div>
  );
};
