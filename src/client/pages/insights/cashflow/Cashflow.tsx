import BackButton from "client/pages/components/BackButton";
import NavBar from "client/pages/components/NavBar";
import NavBarTitle from "client/pages/components/NavBarTitle";
import AmountDisplay from "client/pages/components/insights/AmountDisplay";
import CashFlowFilterButton from "client/pages/components/insights/CashFlowFilterButton";
import TotalCashFlowView from "client/pages/components/insights/TotalCashFlowView";
import { cashflowFilters } from "client/utils/MockData";
import React, { useEffect, useState } from "react";
import { FiCalendar, FiInfo } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Graph from "../cashflowGraphs/Graph";
import CashFlowRangeGraph from "../cashflowGraphs/CashFlowRangeGraph";
import { getMicroDetailsViewData } from "client/api/transactions";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useInsightsStore from "client/store/insightsStore";
import { BottomSheet } from "react-spring-bottom-sheet";
import InsightsFilters from "../InsightsFilters";
import useAccountStore from "client/store/accountStore";
import Account from "client/models/Account";
import Accounts from "client/models/Accounts";
import { format } from "date-fns";

const Cashflow = () => {
  const navigate = useNavigate();
  const [earnedData, setEarnedData] = useState<number[]>([]);
  const [totalEarned, setTotalEarned] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [spentData, setSpentData] = useState<number[]>([]);
  const [datalabels, setDatalabels] = useState([]);
  const [fullDataLabels, setFullDataLabels] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // const accountName = searchParams.get("accountName");
  // const dateFilter = searchParams.get("dateFilter");
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const insightsStoreState = useInsightsStore((state) => state);
  const accountStore = useAccountStore((state: any) => state);
  const startDate = format(insightsStoreState.insightsStartDate, "yyyy-MM-dd");
  const endDate = format(insightsStoreState.insightsEndDate, "yyyy-MM-dd");
  const accounts = accountStore.accounts as Accounts;
  const filterAccountBy = useAccountStore((state: any) => state.filterBy);
  const filteredAccount = useAccountStore(
    (state: any) => state.filter
  ) as Account;
  const [filter, openFilter] = useState(false);

  const fetchDataFromServer = async () => {
    try {
      setIsLoading(true);
      console.log("Fetching data...", insightsStoreState.insightsActiveInstitutionId);
      const linkedAccountId = null;

      const data = await getMicroDetailsViewData({
        configuration: config,
        linkedAccountId,
        startDate,
        endDate,
      });

      setEarnedData(data.earnedData);
      setTotalEarned(data.totalEarned);
      setTotalSpent(data.totalSpent);
      setSpentData(data.spentData);
      setFullDataLabels(data.fullDataLabels);
      setDatalabels(data.datalabels);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const closeBottomSheet = () => {
    openFilter(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchDataFromServer();
    }, 500);
  }, [startDate, endDate, filteredAccount]);
  const currencySymbol = "₦";
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
          <CashFlowFilterButton
            label={insightsStoreState.insightsActiveInstitutionName}
            icon={null}
            key={`all institutions`}
            isActive={false}
            onClick={() => openFilter(true)}
          />
          <CashFlowFilterButton
            label={insightsStoreState.insightsDateFilterName}
            icon={<FiCalendar />}
            key={`This month`}
            isActive={false}
            onClick={() => openFilter(true)}
          />
        </div>
        <TotalCashFlowView totalAmount={totalEarned + totalSpent} />
        <Graph earned={totalEarned} spent={totalSpent} />
        <div className="mt-6">
          <div className="flex flex-col rounded-lg bg-skin-base p-4 shadow-card">
            <div className="font-medium font-primary text-tiny tracking-wide mb-4">
              {/* In the last {earnedData.length} months: */}
              In the selected period:
            </div>
            <div className="flex flex-row">
              <div className="font-medium font-primary text-tiny tracking-wide mb-2 mr-1">
                - You've made an average of
              </div>
              <AmountDisplay
                amount={
                  earnedData.reduce((a: number, b: number) => a + b, 0) /
                  earnedData.length
                }
              />
            </div>
            <div className="flex flex-row">
              <div className="font-medium font-primary text-tiny tracking-wide mr-2">
                - You've spent an average of
              </div>
              <AmountDisplay
                amount={
                  spentData.reduce((a: number, b: number) => a + b, 0) /
                  spentData.length
                }
              />
            </div>
          </div>
        </div>
        <CashFlowRangeGraph
          earnedData={isLoading ? [] : earnedData}
          spentData={isLoading ? [] : spentData}
          datalabels={isLoading ? [] : datalabels}
          fullDataLabels={isLoading ? [] : fullDataLabels}
          currencySymbol={currencySymbol}
        />
      </div>
      <div className="mb-5">
        <BottomSheet
          onDismiss={() => {
            openFilter(false);
          }}
          open={filter}
          style={{
            borderRadius: 24,
          }}
          children={
            <InsightsFilters
              accounts={accounts}
              activeAccount={filteredAccount}
              onClick={(account: Account) => {
                filterAccountBy(account);
              }}
              closeBottomSheet={closeBottomSheet}
            />
          }
          defaultSnap={400}
        ></BottomSheet>
      </div>
    </div>
  );
};

export default Cashflow;
