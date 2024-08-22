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
        isActive ? " bg-[#2676B8] rounded-full" : "bg-transparent"
      } px-4 py-1.5`}
      onClick={onClick}
    >
      <div
        className={`text-center ${
          isActive
            ? "text-[#FFFFFF] font-custom text-xxxs font-bold tracking-tab_text"
            : "text-[#868686] font-custom text-xxxs font-bold tracking-tab_text"
        }`}
      >
        {label}
      </div>
    </div>
  );
};
