import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import AnimatedNumber from "../AnimatedNumber";

type ExpenditureCardProps = {
  budget?: number;
  spent?: number;
  category: string;
  transactions: number;
  icon: string;
};

export const ExpenditureCard = ({
  icon,
  budget,
  spent,
  category,
  transactions,
}: ExpenditureCardProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const budgetColumnWidth = "90px";
  const spentColumnWidth = "90px";

  return (
    <div className="flex flex-row items-center justify-between mb-3">
      {/* Category and transactions section */}
      <div className="flex flex-row items-center">
        {/* Icon */}
        <div className="h-6 w-6 rounded-full bg-[#E8E3DC] mr-2 flex justify-center items-center">
          {icon}
        </div>
        {/* Category and transaction count */}
        <div className="flex flex-col">
          <div className="font-medium font-primary text-xs text-skin-base tracking-subtitle mb-1">
            {category}
          </div>
          <div className="font-medium font-primary text-xxxs text-skin-subtitle tracking-wide">
            {`${transactions} transaction${transactions === 1 ? "" : "s"}`}
          </div>
        </div>
      </div>

      {/* Budget and spent section */}
      <div className="flex flex-row min-w-[55%] justify-between">
        {/* Budget */}
        <div
          className="flex flex-col items-end"
          style={{ width: budgetColumnWidth }}
        >
          <div className="relative">
            <span className="font-semibold font-primary text-xs text-skin-subtitle tracking-widest">
              <AnimatedNumber target={budget ?? 0} duration={500} />
              <sup className=" text-xxxs align-super font-medium ml-[-10%]">
                {currencySymbol}
              </sup>
            </span>
          </div>
        </div>
        {/* Spent */}
        <div
          className="flex flex-col items-end"
          style={{ width: spentColumnWidth }}
        >
          <div className="relative">
            <span className="font-semibold font-primary text-xs text-skin-base tracking-widest">
              <AnimatedNumber target={spent ?? 0} duration={500} />
              <sup className=" text-xxxs align-super font-medium ml-[-10%]">
                {currencySymbol}
              </sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
