import React from "react";
type FilterPillProps = {
  label?: string;
  icon?: React.ReactNode;
  selected?: boolean;
};
export const FilterPill = ({
  label,
  selected = false,
  icon,
}: FilterPillProps) => {
  return (
    <div
      className={`flex flex-row rounded-3xl justify-center items-center mr-3 mb-3 px-3.5 py-1 text-tiny font-workSans font-semibold ${
        selected
          ? "bg-skin-secondary2WithOpacity text-skin-primary"
          : "bg-skin-accent2WithOpacity text-skin-subtitle"
      }`}
    >
      <div className="mr-2">{icon}</div>
      <div className="">{label}</div>
    </div>
  );
};
