import React from "react";
type BookingInfoProps = {
  label?: string;
  caption?: string;
};
export const BookingInfo = ({ label, caption }: BookingInfoProps) => {
  return (
    <div className="rounded-lg px-4 py-3 bg-skin-accent2 flex flex-row justify-start mb-1">
      <div className="font-poppins text-skin-base text-tiny font-medium mr-1 tracking-listtile_subtitle">
        {label}:
      </div>
      <div className="font-poppins text-skin-base text-tiny font-medium tracking-listtile_subtitle">
        {caption}
      </div>
    </div>
  );
};
