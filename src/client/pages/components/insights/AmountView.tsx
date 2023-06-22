import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
type AmountViewProps = {
  amount?: number;
  caption?: string;
};
export const AmountView = ({ amount, caption }: AmountViewProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-col items-start">
      <div className="relative">
        <div className="absolute -top-1 -right-1 font-workSans text-xxxxxs text-skin-neutral2 font-semibold">
          {currencySymbol}
        </div>
        <div className="font-workSans text-lg text-skin-neutral2 font-semibold">
          {amount?.toLocaleString("en-us")}
        </div>
      </div>
      <div className="font-poppins text-xs text-skin-subtitle font-medium tracking-wide">
        {caption}
      </div>
    </div>
  );
};
