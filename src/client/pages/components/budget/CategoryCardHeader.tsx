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
        <div className="font-custom font-semibold text-xl text-skin-base tracking-title">
          {title}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="relative">
          <div className="absolute right-0 -top-1.5 font-custom font-semibold text-xxxxxs text-skin-neutral2 ">
            {currencySymbol ?? ""}
          </div>
          <div className="font-custom text-lg text-skin-neutral2 font-semibold">
            {amount?.toLocaleString("en-us")}
          </div>
        </div>
        <div className="font-primary text-xxxs font-bold tracking-longest_text text-skin-subtitle">
          {caption}
        </div>
      </div>
    </div>
  );
};
