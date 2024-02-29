import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";

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
  const budgetColumnWidth = "80px";
  const spentColumnWidth = "80px";

  return (
    <div className="flex flex-row items-center justify-between mb-3">
      {/* Category and transactions section */}
      <div className="flex flex-row items-center">
        {/* Icon */}
        <div className="mr-2">{icon}</div>
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
      <div className="flex">
        {/* Budget */}
        <div
          className="flex flex-col items-center"
          style={{ width: budgetColumnWidth }}
        >
          <div className="relative">
            <span className="font-bold font-primary text-xs text-skin-neutral tracking-widest">
              {budget?.toLocaleString()}
            </span>
            <span className="absolute -top-2 -right-1 font-bold font-primary text-xxxs text-skin-neutral">
              {currencySymbol}
            </span>
          </div>
        </div>
        {/* Spent */}
        <div
          className="flex flex-col items-center"
          style={{ width: spentColumnWidth }}
        >
          <div className="relative">
            <span className="font-bold font-primary text-xs text-skin-base tracking-widest">
              {spent?.toLocaleString()}
            </span>
            <span className="absolute -top-2 -right-1 font-bold font-primary text-xxxs text-skin-base">
              {currencySymbol}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
