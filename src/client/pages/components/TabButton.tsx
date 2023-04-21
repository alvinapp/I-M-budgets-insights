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
        isActive
          ? " bg-skin-secondaryWithOpacity rounded-full mr-2.5"
          : "bg-transparent"
      } px-3.5 py-3`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        <div
          className={`${
            isActive ? "text-skin-primary" : "text-skin-neutral"
          } mr-2`}
        >
          {children}
        </div>
        <div
          className={`${
            isActive
              ? "text-skin-primary font-workSans text-sm font-semibold tracking-tab_text"
              : "text-skin-neutral font-workSans text-sm font-semibold tracking-tab_text"
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
};
export default TabButton;
