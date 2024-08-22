import React from "react";
type TabButtonProps = {
  label?: string;
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
};
const TabButton = ({
  label,
  onClick,
  isActive = false,
  children,
}: TabButtonProps) => {
  return (
    <div
      className={`${
        isActive ? " bg-[#2676B8] rounded-full" : "bg-transparent"
      } py-3 w-[11.375rem]`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center">
        <div
          className={`${isActive ? "text-[#FFFFFF]" : "text-[#828282]"} mr-2`}
        >
          {children}
        </div>
        <div
          className={`${
            isActive
              ? "text-[#FFFFFF] font-custom text-sm font-bold tracking-tab_text"
              : "text-[#828282] font-custom text-sm font-bold tracking-tab_text"
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
};
export default TabButton;
