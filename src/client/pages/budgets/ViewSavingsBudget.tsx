import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { AmountView } from "../components/insights/AmountView";
import { FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { fetchBudgetCategoriesTransactions } from "client/api/budget";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { Transaction } from "@sentry/browser";
import BudgetTransactionCard from "../components/BudgetTransactionCard";
import { BudgetTransaction } from "client/models/Budget";
import TransactionCardSkeleton from "../components/BudgetTransactionCardSkeleton";
import BudgetTransactionCardSkeleton from "../components/BudgetTransactionCardSkeleton";
import { TransactionEmptyState } from "../components/EmptyState";
interface ViewSavingsBudgetProps {
  progress: number;
  savedAmount: number;
  targetAmount: number;
  progreesBgColor?: string;
  emoji?: string;
  category?: string;
  microGoalId?: number;
  startDate?: string;
  endDate?: string;
  onClick?: () => void;
}
const ViewSavingsBudget: React.FC<ViewSavingsBudgetProps> = ({
  progress,
  savedAmount,
  targetAmount,
  progreesBgColor,
  emoji,
  category,
  microGoalId,
  startDate,
  endDate,
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
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center mt-4 mb-8">
        <div className="mr-3">{emoji}</div>
        <div className="font-custom font-medium text-xl tracking-title">
          {category ?? ""}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mx-4 mb-3">
        <AmountView
          amount={savedAmount}
          caption="Saved so far"
          flex="items-start"
        />
        <AmountView
          amount={targetAmount}
          caption="Target amount"
          flex="items-end"
        />
      </div>
      <ProgressBar
        className="mx-4"
        completed={progress}
        height="4px"
        baseBgColor="#E7E7E7"
        bgColor={`${progreesBgColor ?? "#0131A1"}`}
        isLabelVisible={false}
      />
      <div className="flex flex-col p-4 mt-4 rounded-lg shadow-card mx-4">
        <div className="font-custom font-medium text-base tracking-title mb-3">
          Recent activity
        </div>
        {transactions && transactions.length > 0 ? (
          transactions.slice(0, 7).map((transaction: BudgetTransaction) => {
            return (
              <BudgetTransactionCard
                id={transaction?.id}
                amount={transaction?.amount}
                merchant={{
                  id: transaction.merchant?.id,
                  name: transaction.merchant?.name,
                }}
                category={transaction?.category}
                transacted_at={transaction?.transacted_at}
                type={transaction?.type}
              />
            );
          })
        ) : fetchingTransactions ? (
          Array(10)
            .fill("a")
            .map((_, i) => {
              return <BudgetTransactionCardSkeleton key={i} />;
            })
        ) : (
          <TransactionEmptyState label="No recent transactions registered!" />
        )}
      </div>
      <div className="flex flex-row justify-center items-center mt-4 mb-5">
        <div
          className="rounded-full w-10 h-10 bg-[#E7E7E7] flex justify-center items-center"
          onClick={onClick}
        >
          <FiX color="#101010" size="1rem" />
        </div>
      </div>
    </div>
  );
};

export default ViewSavingsBudget;
