import React from "react";
type CashBackBannerProps = {
  label?: string;
};
export const CashBackBanner = ({ label }: CashBackBannerProps) => {
  return (
    <div className="w-full rounded-lg py-4.5 px-3 flex items-center bg-skin-successNeutral">
      <div className="font-medium font-poppins text-tiny text-skin-successAccent">
        {label}
      </div>
    </div>
  );
};
