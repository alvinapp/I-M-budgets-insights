import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
type AmountDisplayProps = {
  amount: number;
};
const AmountDisplay = ({ amount }: AmountDisplayProps) => {
  const currency = useCurrencySettingsStore((state: any) => state);
  return (
    <div className="relative">
      <div className="font-medium font-primary text-tiny tracking-wide">
        {amount.toLocaleString("en-us")}
        <sup
          style={{
            fontSize: "11px",
            verticalAlign: "super",
            marginLeft: "-4px",
          }}
        >
          {currency.currencySymbol ?? ""}
        </sup>
      </div>
      {/* <div className="font-medium font-primary text-xxxs absolute -top-2 -right-3">
        {currency.currencySymbol}
      </div> */}
    </div>
  );
};

export default AmountDisplay;
