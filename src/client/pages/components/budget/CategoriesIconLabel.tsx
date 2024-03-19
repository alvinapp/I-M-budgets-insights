import React from "react";

type CategoriesIconLabelProps = {
  label?: string;
  icon?: React.ReactNode;
  iconBg?: string;
};
export const CategoriesIconLabel = ({
  label,
  icon,
  iconBg,
}: CategoriesIconLabelProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col mr-2">
        <div
          className={`rounded-full h-8 w-8 flex justify-center items-center ${iconBg}`}
        >
          <div className="">{icon}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-custom text-base font-medium text-skin-base tracking-title">
          {label}
        </div>
      </div>
    </div>
  );
};
