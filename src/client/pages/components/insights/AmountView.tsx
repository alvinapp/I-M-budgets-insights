import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
type AmountViewProps = {
  amount: number;
  caption?: string;
  flex?: string;
};
export const AmountView = ({ amount, caption, flex }: AmountViewProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className={`flex flex-col ${flex ?? "items-start"}`}>
      <div className="relative">
        <div className="font-custom text-lg text-skin-base font-medium">
          {amount?.toLocaleString("en-us")}
          <sup className=" text-xs align-super -ml-1">
            {currencySymbol ? currencySymbol : ""}
          </sup>
        </div>
      </div>
      <div className="font-primary text-xs text-skin-base font-medium tracking-wide">
        {caption}
      </div>
    </div>
  );
};
