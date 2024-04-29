import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
type TotalCashFlowViewProps = {
  totalAmount: number;
};
const TotalCashFlowView = ({ totalAmount }: TotalCashFlowViewProps) => {
  const currencySymbol = useCurrencySettingsStore((state: any) => state);
  return (
    <div className="flex flex-col items-start">
      <div className="relative">
        {/* <div className="font-custom font-semibold text-xs absolute -right-6 top-1.5">
          {currencySymbol.currencySymbol}
        </div> */}
        <div className="text-3xl tracking-title font-custom font-medium text-skin-base">
          {totalAmount
            ? Number(totalAmount).toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })
            : ""}
          <sup
            style={{
              fontSize: "14px",
              verticalAlign: "super",
              marginLeft: "-4px",
            }}
          >
            {currencySymbol.currencySymbol ?? ""}
          </sup>
        </div>
      </div>
      <div className="font-primary text-xs font-medium text-skin-base tracking-subtitle">
        Total cashflow
      </div>
    </div>
  );
};

export default TotalCashFlowView;
