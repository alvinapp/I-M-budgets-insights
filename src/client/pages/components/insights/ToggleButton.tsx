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
      className={`flex flex-row justify-center items-center ${isActive ? " bg-[#cbf2ef] rounded-full" : "bg-transparent"
        } px-4 py-1.5`}
      onClick={onClick}
    >
      <div
        className={`text-center ${isActive
            ? "text-[#101010] font-custom text-xxxs font-medium tracking-tab_text"
            : "text-skin-base font-custom text-xxxs font-medium tracking-tab_text"
          }`}
      >
        {label}
      </div>
    </div>
  );
};
