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
import emptyCashFlow from "../../../assets/images/empty-cashflow.png";
import InsightsFilters from "../InsightsFilters";
import useAccountStore from "client/store/accountStore";
import Account from "client/models/Account";
import Accounts from "client/models/Accounts";
import { format } from "date-fns";
import { checkNAN } from "client/utils/Formatters";
import { BsBank } from "react-icons/bs";

const Cashflow = () => {
  const navigate = useNavigate();
  const [earnedData, setEarnedData] = useState<number[]>([]);
  const [totalEarned, setTotalEarned] = useState();
  const [totalSpent, setTotalSpent] = useState();
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
                  <NavBarTitle title="Cashflow" fontSize="text-2xl" />
                </div>
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
            icon={<BsBank color="#101010" />}
            key={`All accounts`}
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
        {isLoading ? (
          <>
            <TotalCashFlowView
              totalAmount={
                totalEarned && totalSpent ? totalEarned + totalSpent : 0
              }
            />
            <Graph
              earned={totalEarned ? totalEarned : 0}
              spent={totalSpent ? totalSpent : 0}
            />
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
                    amount={checkNAN(
                      earnedData?.reduce((a: number, b: number) => a + b, 0) /
                        earnedData.length
                    )}
                  />
                </div>
                <div className="flex flex-row">
                  <div className="font-medium font-primary text-tiny tracking-wide mr-2">
                    - You've spent an average of
                  </div>
                  <AmountDisplay
                    amount={checkNAN(
                      spentData?.reduce((a: number, b: number) => a + b, 0) /
                        spentData.length
                    )}
                  />
                </div>
              </div>
            </div>
            <CashFlowRangeGraph
              earnedData={[]}
              spentData={[]}
              datalabels={[]}
              fullDataLabels={[]}
              currencySymbol={currencySymbol}
            />
          </>
        ) : totalEarned && totalSpent && totalEarned + totalSpent > 0 ? (
          <div>
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
                    amount={checkNAN(
                      earnedData?.reduce((a: number, b: number) => a + b, 0) /
                        earnedData.length
                    )}
                  />
                </div>
                <div className="flex flex-row">
                  <div className="font-medium font-primary text-tiny tracking-wide mr-2">
                    - You've spent an average of
                  </div>
                  <AmountDisplay
                    amount={checkNAN(
                      spentData?.reduce((a: number, b: number) => a + b, 0) /
                        spentData.length
                    )}
                  />
                </div>
              </div>
            </div>
            <CashFlowRangeGraph
              earnedData={earnedData}
              spentData={spentData}
              datalabels={datalabels}
              fullDataLabels={fullDataLabels}
              currencySymbol={currencySymbol}
            />
          </div>
        ) : (totalEarned && totalSpent && totalEarned + totalSpent) === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <div
              className="font-medium font-primary text-tiny tracking-wide text-center mx-auto flex flex-col items-center justify-center"
              style={{ minHeight: "70vh" }}
            >
              <div className="w-50 h-[6rem] mb-2">
                <img
                  src={emptyCashFlow}
                  alt="Empty Cashflow"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p>
                No cashflow data available yet! As soon as you have money
                inflows and outflows, your total earnings and spending for the
                selected period will be shown here.
              </p>
            </div>
          </div>
        ) : null}
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
