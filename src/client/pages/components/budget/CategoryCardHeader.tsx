import React from "react";
type CategoryCardHeaderProps = {
  title?: string;
  currencySymbol?: string;
  amount: number;
  caption: string;
};
export const CategoryCardHeader = ({
  title,
  currencySymbol,
  amount,
  caption,
}: CategoryCardHeaderProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <div className="font-custom font-medium text-xl text-skin-base tracking-title">
          {title}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="relative">
          <div className="font-custom text-lg text-skin-base font-medium">
            {amount?.toLocaleString("en-us")}
            <sup className=" text-xs align-super -ml-1">
              {currencySymbol ? currencySymbol : ""}
            </sup>
          </div>
        </div>
        <div className="font-primary text-xs font-medium tracking-wider text-skin-subtitle">
          {caption}
        </div>
      </div>
    </div>
  );
};
