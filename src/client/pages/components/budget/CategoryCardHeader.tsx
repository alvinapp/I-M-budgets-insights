import React from "react";
import AnimatedNumber from "../AnimatedNumber";
type CategoryCardHeaderProps = {
  title?: string;
  currencySymbol?: string;
  amount: number;
  caption: string;
  isloading: boolean;
};
export const CategoryCardHeader = ({
  title,
  currencySymbol,
  amount,
  caption,
  isloading,
}: CategoryCardHeaderProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <div className="font-custom font-bold text-xl text-skin-base tracking-title">
          {title}
        </div>
      </div>
      <div className="flex flex-row font-custom text-lg text-skin-base">
        <div className="flex flex-col items-end">
          <div className="relative">
            <div className="font-custom text-lg text-skin-base font-bold">
              <AnimatedNumber
                target={isloading ? 0 : amount ?? 0}
                duration={500}
              />
            </div>
          </div>
          <div className="font-primary text-xs font-medium tracking-wider text-skin-subtitle">
            {caption}
          </div>
        </div>
        <sup className="text-xxxs align-super -ml-2">
          {currencySymbol ? currencySymbol : ""}
        </sup>
      </div>
    </div>
  );
};
