import React from "react";
import { ToggleButton } from "./ToggleButton";

type ToggleProps = {
  tabs?: Array<any>;
  activeTab?: any;
  onClick?: (tab: any) => void;
};
const Toggle = ({ tabs, activeTab, onClick }: ToggleProps) => {
  return (
    <div className="flex flex-row justify-between items-center rounded-full bg-[#F2F2F2]">
      {tabs?.map((element: any, i) => {
        const isActive = element.id == activeTab;
        return (
          <ToggleButton
            label={element.name}
            key={i}
            children={element.icon}
            isActive={isActive}
            onClick={() => {
              if (onClick) {
                onClick(element);
              }
            }}
          />
        );
      })}
    </div>
  );
};
export default Toggle;
