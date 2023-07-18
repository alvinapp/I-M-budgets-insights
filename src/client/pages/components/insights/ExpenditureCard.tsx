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
  return (
    <div className="flex flex-row items-center justify-between mb-3">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-2">
            <div>{icon}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium font-poppins text-xs text-skin-base tracking-subtitle mb-1">
              {category}
            </div>
            <div className="font-medium font-poppins text-xxxs text-skin-subtitle tracking-wide">
              {`${transactions} transaction${transactions === 1 ? "" : "s"}`}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-end">
          <div className="flex flex-col relative mr-8 items-end">
            <div className="absolute -top-2 -right-1 font-bold font-poppins text-xxxs text-skin-neutral">
              {currencySymbol}
            </div>
            <div className="font-bold font-poppins text-xs text-skin-neutral tracking-widest">
              {budget?.toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col relative items-end">
            <div className="absolute -top-2 -right-1 font-bold font-poppins text-xxxs text-skin-base">
              {currencySymbol}
            </div>
            <div className="font-bold font-poppins text-xs text-skin-base tracking-widest">
              {spent?.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
