import BackButton from "client/pages/components/BackButton";
import NavBar from "client/pages/components/NavBar";
import NavBarTitle from "client/pages/components/NavBarTitle";
import AmountDisplay from "client/pages/components/insights/AmountDisplay";
import CashFlowFilterButton from "client/pages/components/insights/CashFlowFilterButton";
import TotalCashFlowView from "client/pages/components/insights/TotalCashFlowView";
import { cashflowFilters } from "client/utils/MockData";
import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cashflow = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState({
    id: 0,
    name: "All accounts",
    icon: null,
  });
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col mr-3.5">
        <NavBar
          children={
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <div className="mr-1">
                    <BackButton onClick={() => navigate(-1)} />
                  </div>
                  <NavBarTitle title="Cash flow" fontSize="text-2xl" />
                </div>
              </div>
              <div
                className="h-6 w-6 rounded-full flex justify-center items-center"
                onClick={() => {}}
              >
                <FiInfo color="#101010" size="1.5rem" />
              </div>
            </div>
          }
        />
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mb-1"></div>
      <div className="flex flex-col mx-3.5">
        <div className="py-3 flex flex-wrap items-center mb-3">
          {cashflowFilters?.map((element: any, i: any) => {
            const isActive = element.id === activeFilter.id;
            return (
              <CashFlowFilterButton
                label={element.name}
                icon={element.icon}
                key={i}
                isActive={isActive}
                onClick={() => {
                  setActiveFilter(element);
                }}
                id={`${i}`}
              />
            );
          })}
        </div>
        <TotalCashFlowView totalAmount={1170403} />
        <div className="mt-6">
          <div className="flex flex-col rounded-lg bg-skin-base p-4 shadow-card">
            <div className="font-medium font-poppins text-tiny tracking-wide mb-4">
              In the last 3months:
            </div>
            <div className="flex flex-row">
              <div className="font-medium font-poppins text-tiny tracking-wide mb-2 mr-1">
                - You've made an average of
              </div>
              <AmountDisplay amount={304298} />
            </div>
            <div className="flex flex-row">
              <div className="font-medium font-poppins text-tiny tracking-wide mr-2">
                - You've made an average of
              </div>
              <AmountDisplay amount={85836} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashflow;
