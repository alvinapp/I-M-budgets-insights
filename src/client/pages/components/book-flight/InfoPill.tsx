import React from "react";
type InfoPillProps = {
  label?: string;
  selected?: boolean;
};
export const InfoPill = ({ label, selected = false }: InfoPillProps) => {
  return (
    <div
      className={`rounded-3xl flex justify-center items-center border mr-3 px-4.5 py-1 text-base font-workSans font-semibold ${
        selected
          ? "border-skin-primary text-skin-primary"
          : "border-skin-base text-skin-subtitle"
      }`}
    >
      {label}
    </div>
  );
};
