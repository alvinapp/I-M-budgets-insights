import React, { useEffect, useState } from "react";
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
import { BottomSheet } from "react-spring-bottom-sheet";
import EditCategory from "../components/budget/EditCategory";
import useTransactionStore from "client/store/transactionStore";
interface ViewBudgetProps {
  progress: number;
  spentAmount: number;
  totalBudgetAmount: number;
  progreesBgColor?: string;
  emoji?: string;
  category?: string;
  microGoalId?: number;
  startDate?: string;
  endDate?: string;
  onClick?: () => void;
}
const ViewBudget: React.FC<ViewBudgetProps> = ({
  progress,
  spentAmount,
  totalBudgetAmount,
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
  const [fetchingData, setFetchingData] = useState(false);
  const [transactions, setTransactions] = useState<BudgetTransaction[]>([]);
  const transactionState = useTransactionStore((state: any) => state);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchingData(true);
        const res = await fetchBudgetCategoriesTransactions({
          configuration: config,
          start_date: startDate,
          end_date: endDate,
          microgoalId: microGoalId,
        });
        setTransactions(res?.transactions);
      } catch (error) {
        console.error(error);
      } finally {
        setFetchingData(false);
      }
    };

    fetchData();
  }, [config, startDate, endDate, microGoalId]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center mt-4 mb-8">
        <div className="mr-3">{emoji}</div>
        <div className="font-custom font-bold text-xl tracking-title">
          {category ?? ""}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mx-4 mb-3">
        <AmountView
          amount={spentAmount}
          caption="Spent so far"
          flex="items-start"
        />
        <AmountView
          amount={totalBudgetAmount}
          caption="Total budget"
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
      <div
        className="flex flex-col p-4 mt-4 rounded-lg shadow-card mx-4"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        <div className="font-custom font-semibol text-base tracking-title mb-3">
          Recent activity
        </div>
        {fetchingData ? (
          Array(3)
            .fill("a")
            .map((_, i) => {
              return <BudgetTransactionCardSkeleton key={i} />;
            })
        ) : transactions && transactions.length > 0 ? (
          transactions
            .sort(
              (a, b) =>
                new Date(b.transacted_at).getTime() -
                new Date(a.transacted_at).getTime()
            )
            .map((transaction: BudgetTransaction, index) => {
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
                  onClick={() => {
                    transactionState.setUncategorizedTransaction(transaction);
                    transactionState.setRecepient(transaction.merchant?.name);
                    transactionState.setAccount(transaction.merchant?.name);
                    transactionState.setCategory(transaction.merchant?.name);
                    transactionState.setOpenEditCategorySheet(true);
                  }}
                />
              );
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
      <BottomSheet
        className="backdrop-blur-bottomSheet"
        onDismiss={() => {
          transactionState.setOpenEditCategorySheet(false);
          transactionState.setReloadCategories(!transactionState.reloadCategory)
        }}
        open={transactionState.editCategorySheet}
        style={{
          borderRadius: 24,
        }}
        children={<EditCategory />}
        defaultSnap={300}
      ></BottomSheet>
    </div>
  );
};

export default ViewBudget;
