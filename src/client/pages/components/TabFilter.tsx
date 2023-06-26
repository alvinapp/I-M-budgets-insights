import React from "react";
import TabButton from "client/pages/components/TabButton";
type TabFilterProps = {
  tabs?: Array<any>;
  activeTab?: any;
  onClick?: (tab: any) => void;
};
const TabFilter = ({ tabs, activeTab, onClick }: TabFilterProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      {tabs?.map((element: any, i) => {
        const isActive = element.id == activeTab;
        return (
          <TabButton
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
export default TabFilter;
