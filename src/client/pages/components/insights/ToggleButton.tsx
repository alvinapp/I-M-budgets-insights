import React from "react";

type ToggleButtonProps = {
  label?: string;
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
};
export const ToggleButton = ({
  label,
  onClick,
  isActive = false,
  children,
}: ToggleButtonProps) => {
  return (
    <div
      className={`flex flex-row justify-center items-center ${
        isActive ? " bg-[rgb(155,176,247,0.3)] rounded-full" : "bg-transparent"
      } px-4 py-1.5`}
      onClick={onClick}
    >
      <div
        className={`text-center ${
          isActive
            ? "text-[#001D82] font-custom text-xxxs font-medium tracking-tab_text"
            : "text-skin-base font-custom text-xxxs font-medium tracking-tab_text"
        }`}
      >
        {label}
      </div>
    </div>
  );
};
