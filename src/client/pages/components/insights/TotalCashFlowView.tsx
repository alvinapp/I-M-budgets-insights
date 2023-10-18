import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
type TotalCashFlowViewProps = {
  totalAmount: number;
};
const TotalCashFlowView = ({ totalAmount }: TotalCashFlowViewProps) => {
  const currencySymbol = useCurrencySettingsStore((state: any) => state);
  return (
    <div className="flex flex-row justify-start">
      <div className="flex flex-col">
        <div className="flex flex-row relative">
          <div className="text-3xl tracking-title font-workSans font-semibold text-skin-base">
            {totalAmount?.toLocaleString("en-us")}
          </div>
          <div className="font-workSans font-semibold text-xs absolute -right-6 top-2">
            {currencySymbol.kenyanCurrency}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="font-poppins text-xs font-semibold text-skin-subtitle tracking-longtext">
            Total cash flow
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCashFlowView;
