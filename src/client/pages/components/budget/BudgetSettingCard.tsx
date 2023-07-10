import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type BudgetSettingCardProps = {
  category?: string;
  emoji?: string;
  increment?: any;
  decrement?: any;
  amount?: number;
  selected?: boolean;
};
export const BudgetSettingCard = ({
  category,
  emoji,
  amount = 0,
  increment,
  decrement,
  selected = false,
}: BudgetSettingCardProps) => {
  const handleIncrement = (event: any) => {
    event.stopPropagation();
    increment();
  };
  const handleDecrement = (event: any) => {
    event.stopPropagation();
    decrement();
  };
  return (
    <div className="flex flex-row items-center justify-between mb-3">
      <div className="flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col mr-2">
            <div className="h-6 w-6 rounded-full flex items-center justify-center bg-skin-iconSecondary">
              <div>{emoji}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-poppins text-xs font-medium tracking-wide text-skin-base">
              {category}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex flex-col justify-center">
          <div className="rounded-full shadow-budgetButton flex justify-center items-center flex-row px-3 py-3">
            {amount > 0 ? (
              <div className="flex flex-row items-center">
                <FiMinus
                  color="#04506E"
                  size="1rem"
                  onClick={handleDecrement}
                />
                <div className="font-poppins font-semibold text-xs mx-2">
                  {amount}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <FiPlus color="#04506E" size="1rem" onClick={handleIncrement} />
          </div>
        </div>
      </div>
    </div>
  );
};
