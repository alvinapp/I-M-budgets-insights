import React from "react";
import AnimatedNumber from "../AnimatedNumber";
type AvailableBudgetContainerProps = {
  amount?: number;
  subtitle?: string;
  currencySymbol?: string;
  isLoading?: boolean;
};
export const AvailableBudgetContainer = ({
  amount,
  subtitle,
  currencySymbol,
  isLoading,
}: AvailableBudgetContainerProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="">
        <div className="font-custom text-4xl text-skin-base font-medium">
          <AnimatedNumber target={isLoading ? 0 : amount ?? 0} duration={500} />
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
