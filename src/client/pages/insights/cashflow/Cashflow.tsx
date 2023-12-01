import BackButton from "client/pages/components/BackButton";
import NavBar from "client/pages/components/NavBar";
import NavBarTitle from "client/pages/components/NavBarTitle";
import AmountDisplay from "client/pages/components/insights/AmountDisplay";
import CashFlowFilterButton from "client/pages/components/insights/CashFlowFilterButton";
import TotalCashFlowView from "client/pages/components/insights/TotalCashFlowView";
import { cashflowFilters } from "client/utils/MockData";
import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Graph from "../cashflowGraphs/Graph";
import CashFlowRangeGraph from "../cashflowGraphs/CashFlowRangeGraph";
import { getMicroDetailsViewData } from "client/api/transactions";
import { IConfig, useConfigurationStore } from "client/store/configuration";

const Cashflow = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState({
    id: 0,
    name: "All accounts",
    icon: null,
  });
  const [earnedData, setEarnedData] = useState([]);
  const [totalEarned, setTotalEarned] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [spentData, setSpentData] = useState([]);
  const [datalabels, setDatalabels] = useState([]);
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;

  const fetchDataFromServer = async () => {
    try {
      const linkedAccountId = null;
      const startDate = "2023-09-01";
      const endDate = "2023-09-30";

      const data = await getMicroDetailsViewData({
        configuration: config,
        linkedAccountId,
        startDate,
        endDate,
      });

      console.log(
        "Fetching data from server:",
        data.earningsData,
        data.totalEarned,
        data.totalSpent,
        data.spentData,
        data.datalabels
      )

      setEarnedData(data.earnedData);
      setTotalEarned(data.totalEarned);
      setTotalSpent(data.totalSpent);
      setSpentData(data.spentData);
      setDatalabels(data.datalabels);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);
  const currencySymbol = '$';
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
                onClick={() => { }}
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
                  console.log(
                    "Active filter:",
                    element.name,
                  );
                  setActiveFilter(element);
                }}
                id={`${i}`}
              />
            );
          })}
        </div>
        <TotalCashFlowView totalAmount={totalEarned + totalSpent} />
        <Graph earned={totalEarned} spent={totalSpent} />
        <div className="mt-6">
          <div className="flex flex-col rounded-lg bg-skin-base p-4 shadow-card">
            <div className="font-medium font-poppins text-tiny tracking-wide mb-4">
              In the last {earnedData.length} months:
            </div>
            <div className="flex flex-row">
              <div className="font-medium font-poppins text-tiny tracking-wide mb-2 mr-1">
                - You've made an average of
              </div>
              <AmountDisplay amount={earnedData.reduce((a: number, b: number) => a + b, 0) / earnedData.length} />
            </div>
            <div className="flex flex-row">
              <div className="font-medium font-poppins text-tiny tracking-wide mr-2">
                - You've spent an average of
              </div>
              <AmountDisplay amount={spentData.reduce((a: number, b: number) => a + b, 0) / spentData.length} />
            </div>
          </div>
        </div>
        <CashFlowRangeGraph
          earnedData={earnedData}
          spentData={spentData}
          datalabels={datalabels}
          currencySymbol={currencySymbol}
        />
      </div>
    </div>
  );
};

export default Cashflow;
