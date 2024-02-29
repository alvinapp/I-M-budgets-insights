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
        <div className="font-custom text-4xl text-skin-neutral2 font-semibold">
          {amount?.toLocaleString("en-us")}
          <sup
            style={{
              fontSize: "16px",
              verticalAlign: "super",
              marginLeft: "-4px",
            }}
          >
            {currencySymbol ? currencySymbol : ""}
          </sup>
        </div>
      </div>
      <div className="font-primary text-xs font-medium tracking-wide text-skin-subtitle">
        {subtitle}
      </div>
    </div>
  );
};
