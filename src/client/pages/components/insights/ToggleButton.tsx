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
      className={`flex flex-row justify-center items-center py-1 px-1.5 ${
        isActive ? "bg-skin-base  shadow-knob rounded-3xl" : "bg-transparent"
      }`}
      onClick={onClick}
    >
      <div
        className={`text-center ${
          isActive
            ? "text-skin-primary font-custom text-xxxs font-semibold tracking-tab_text"
            : "text-[#B0B0B0] font-custom text-xxxs font-semibold tracking-tab_text"
        }`}
      >
        {label}
      </div>
    </div>
  );
};
