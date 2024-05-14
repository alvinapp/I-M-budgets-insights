import React, { useState } from "react";
import { AmountView } from "../components/insights/AmountView";
import { useQuery } from "react-query";
import { fetchBudgetCategoriesTransactions } from "client/api/budget";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import TabFilter from "./TabFilter";
import {
  debtDetailsActivityTabs,
  debtOverviewTabs,
} from "client/utils/MockData";
import ActionButton from "./ActionButton";
import LoanDetails from "./LoanDetails";
import SegmentedProgressBar from "./SegmentedProgress";
import ActivityCard from "./ActivityCard";
interface ViewDebtProps {
  progress: number;
  repaid: number;
  outStandingDebt: number;
  progreesBgColor?: string;
  name?: string;
  microGoalId?: number;
  startDate?: string;
  endDate?: string;
  loanDetails: any;
  recentActivities: any;
  cover: any;
  onClick?: () => void;
}
const ViewDebt: React.FC<ViewDebtProps> = ({
  progress,
  repaid,
  outStandingDebt,
  progreesBgColor,
  name,
  microGoalId,
  startDate,
  endDate,
  loanDetails,
  recentActivities,
  cover,
  onClick,
}) => {
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const [transactions, setTransactions] = useState([]);
  const { isFetching: fetchingTransactions } = useQuery(
    "fetching-budgetTransactions",
    () =>
      fetchBudgetCategoriesTransactions({
        configuration: config,
        start_date: startDate,
        end_date: endDate,
        microgoalId: microGoalId,
      }).then((res) => {
        setTransactions(res?.transactions);
      }),
    { refetchOnWindowFocus: false }
  );
  const [debtViewTabId, setDebtViewTabId] = useState(0);
  const [debtDetailsViewTabId, setDebtDetailsViewTabId] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row rounded-b-lg rounded-t-3xl h-20 fixed top-0 left-0 right-0">
        <img
          className="object-fit h-20 w-full rounded-t-3xl rounded-b-lg"
          src={cover}
          alt=""
        />
      </div>
      <div className="flex flex-row justify-center items-center absolute top-10 left-0 right-0 mx-4">
        <div className="font-custom font-medium text-lg tracking-title text-skin-white">
          {name ?? ""}
        </div>
      </div>
      <div className="flex flex-col shadow-card rounded-lg mx-2 mt-18">
        <div className="mx-2 mt-3">
          <TabFilter
            tabs={debtOverviewTabs}
            activeTab={debtViewTabId}
            onClick={(tab: any) => setDebtViewTabId(tab.id)}
          />
        </div>
        <div className="flex flex-row justify-between items-center mx-3.5 mb-3 mt-4">
          <AmountView
            amount={repaid}
            caption="Repaid so far"
            flex="items-start"
          />
          <AmountView
            amount={outStandingDebt}
            caption="Outstanding monthly"
            flex="items-end"
          />
        </div>
        <div className="mx-3.5 mb-4">
          <SegmentedProgressBar
            percentage={0}
            height={4}
            progressColorTop={"#CB96OF"}
            progressColorBottom={"#f2f2f2"}
          />
        </div>
      </div>
      <div className="flex flex-col p-3 mt-4 rounded-lg shadow-card mx-3">
        <TabFilter
          tabs={debtDetailsActivityTabs}
          activeTab={debtDetailsViewTabId}
          onClick={(tab: any) => setDebtDetailsViewTabId(tab.id)}
        />
        <div className="mt-4">
          {debtDetailsViewTabId === 0 ? (
            <LoanDetails
              monthlyPayment={loanDetails?.monthlyPayment}
              totalRepaid={loanDetails?.totalRepaid}
              outStandingBalance={loanDetails?.outStandingBalance}
              annualInterestRate={loanDetails?.annualInterestRate}
              estimatedPayoffTime={loanDetails?.estimatedPayoffTime}
              nextPaymentDueDate={loanDetails?.nextPaymentDueDate}
            />
          ) : (
            <>
              {recentActivities.map((activity: any, index: number) => {
                return (
                  <ActivityCard
                    merchant={activity?.merchant}
                    transacted_at={activity?.transactedAt}
                    amount={activity?.amount}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-4 mb-5 mx-2">
        <ActionButton
          title="Close"
          bgColor="bg-[#e7e7e7]"
          titleColor="bg-skin-base"
        />
      </div>
    </div>
  );
};

export default ViewDebt;
