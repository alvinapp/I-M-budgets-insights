import React from "react";
import TabButton from "client/pages/components/TabButton";
type TabFilterProps = {
  tabs?: Array<any>;
  activeTab?: any;
  onClick?: (tab: any) => void;
};
const TabFilter = ({ tabs, activeTab, onClick }: TabFilterProps) => {
  return (
    <div className="flex flex-row items-center bg-[#F2F2F2] rounded-full">
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
