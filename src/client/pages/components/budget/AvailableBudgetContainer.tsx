import React from "react";
type AvailableBudgetContainerProps = {
  amount?: number;
  subtitle?: string;
  currencySymbol?: string;
};
export const AvailableBudgetContainer = ({
  amount,
  subtitle,
  currencySymbol,
}: AvailableBudgetContainerProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="">
        {/* <div className="absolute -right-7 top-1.5 font-custom font-semibold text-sm text-skin-neutral2 ">
          {currencySymbol ?? ""}
        </div> */}
        <div className="font-custom text-4xl text-skin-base font-medium">
          {amount?.toLocaleString("en-us")}
          <sup className="text-xs align-super -ml-1">
            {currencySymbol ? currencySymbol : ""}
          </sup>
        </div>
      </div>
      <div className="font-primary text-xs font-medium tracking-wider text-skin-base">
        {subtitle}
      </div>
    </div>
  );
};
