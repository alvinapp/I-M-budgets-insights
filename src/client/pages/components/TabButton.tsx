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
        isActive ? " bg-[rgb(0,190,105,0.2)] rounded-full" : "bg-transparent"
      } py-3 w-[11.375rem]`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center">
        <div
          className={`${
            isActive ? "text-skin-primary" : "text-skin-base"
          } mr-2`}
        >
          {children}
        </div>
        <div
          className={`${
            isActive
              ? "text-[#101010] font-custom text-sm font-medium tracking-tab_text"
              : "text-skin-base font-custom text-sm font-medium tracking-tab_text"
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
};
export default TabButton;
