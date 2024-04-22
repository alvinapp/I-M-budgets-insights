import React, { useEffect, useState } from "react";
import TooltipProgressBar from "../ToolTipProgressBar/ToolTipProgressBar";
import { AmountView } from "./AmountView";
import InsightsTooltipProgressBar from "./InsightsTooltipProgress";
import { expenditureList } from "client/utils/MockData";
import { ExpenditureCard } from "./ExpenditureCard";
import MacroPieChartWithLegend from "../MacroPieChartWithLegend";
import useMicroGoalsStore from "client/store/microGoalStore";
import { fetchMicroGoalTotals } from "client/api/micros";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { calculateSpending, fetchData } from "client/utils/Formatters";
import useInsightsStore from "client/store/insightsStore";
import { format, differenceInDays, startOfMonth, endOfMonth, differenceInMonths } from "date-fns";

type MySpendProps = {
  spent: number;
  budget: number;
  wantsSpend: number;
  essentialsSpend: number;
  savingsSpend: number;
  unallocatedSpend: number;
  startDate: string;
  endDate: string;
  isLoading: boolean;
};

export const MySpend = ({
  spent,
  budget: initialBudget,
  wantsSpend,
  essentialsSpend,
  savingsSpend,
  unallocatedSpend,
  startDate,
  endDate,
  isLoading,
}: MySpendProps) => {
  const microGoals = useMicroGoalsStore((state) => state.microGoals);
  const setMicroGoals = useMicroGoalsStore((state) => state.setMicroGoals);
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const insightsStore = useInsightsStore.getState();
  const [estimatedBudget, setEstimatedBudget] = useState(false);
  const [budget, setBudget] = useState(initialBudget);
  const [numberOfMonths, setNumberOfMonths] = useState(1);
  const [spendingMessage, setSpendingMessage] = useState("");
  const expenditureProgress = calculateSpending(spent, budget);
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const now = new Date();
  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Check if the period is exactly one month and matches the current month
  const isCurrentFullMonth =
    startDateObj?.getDate() === startOfCurrentMonth.getDate() &&
    endDateObj?.getDate() === endOfCurrentMonth.getDate();

  const claculateTheNumberOfMonths = () => {
    if (!startDateObj || !endDateObj) return;
    const numberOfMonths = differenceInMonths(endDateObj, startDateObj) + 1;
    setNumberOfMonths(numberOfMonths);
  };

  const calculateEstimatedBudget = () => {
    if (!startDateObj || !endDateObj) return;

    claculateTheNumberOfMonths();

    const startIsMonthStart = startDateObj.getDate() === startOfMonth(startDateObj).getDate();
    const endIsMonthEnd =
      endDateObj.getDate() === endOfMonth(endDateObj).getDate();
    if (startIsMonthStart && endIsMonthEnd && startDateObj.getMonth() === endDateObj.getMonth()) {
      // If start date is the first day of the month and end date is the last day of the same month
      const totalDaysInMonth = new Date(endDateObj.getFullYear(), endDateObj.getMonth() + 1, 0).getDate();
      const dailyBudget = initialBudget / totalDaysInMonth;
      if (isCurrentFullMonth) {
        const currentDate = now.getDate();
        const recomendedSpend = dailyBudget * currentDate;
        if (spent > recomendedSpend) {
          setSpendingMessage("🙁🏼 Heads up! You're currently spending above the recommended budget by " + (spent - recomendedSpend));
        } else if (spent > 0 && spent < recomendedSpend) {
          setSpendingMessage("🙌🏼 Sweet! You 're well within your recommended budget limit for this month.");
        }
      } else {
        const currentDate = endDateObj.getDate();
        const recomendedSpend = dailyBudget * currentDate;
        if (spent > recomendedSpend) {
          setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by " + (spent - recomendedSpend));
        } else if (spent > 0 && spent < recomendedSpend) {
          setSpendingMessage("🙌🏼 Sweet! You 're well within your overall budget limit for this month.");
        }
      }
      setBudget(initialBudget);
      setEstimatedBudget(false);
    } else {
      const days = differenceInDays(endDateObj, startDateObj);
      if (days <= 30) {
        // If the duration is less than or equal to a month
        //If the days are in the same month, assume that the budget is divided equally between the start and end dates, multiply the daily budget by the number of days
        if (startDateObj.getMonth() === endDateObj.getMonth() && startDateObj.getFullYear() === endDateObj.getFullYear()) {
          const totalDaysInMonth = new Date(endDateObj.getFullYear(), endDateObj.getMonth() + 1, 0).getDate();
          const dailyBudget = initialBudget / totalDaysInMonth;
          const adjustedBudget = dailyBudget * days;
          if (spent > adjustedBudget) {
            setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by " + (spent - adjustedBudget));
          } else {
            setSpendingMessage("🙌🏼 Sweet! You 're well within your overall budget limit for this period.");
          }
          setBudget(adjustedBudget);
          setEstimatedBudget(true);
        }//If the days are in different months, assume that the budget is divided equally between 30 days, multiply the daily budget by the number of days
        else if (startDateObj.getMonth() !== endDateObj.getMonth()) {
          const dailyBudget = initialBudget / 30;
          const adjustedBudget = dailyBudget * days;
          if (spent > adjustedBudget) {
            setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by " + (spent - adjustedBudget));
          } else if (spent > 0 && spent < adjustedBudget) {
            setSpendingMessage("🙌🏼 Sweet! You 're well within your overall budget limit for this period.");
          }
          setBudget(adjustedBudget);
          setEstimatedBudget(true);
        }
      } else if (days > 30) {
        // If the duration is more than a month
        const months = Math.ceil(days / 30);
        const adjustedBudget = initialBudget * months;
        if (spent > adjustedBudget) {
          setSpendingMessage("🙁🏼 Heads up! You're spending above your budget by " + (spent - adjustedBudget));
        } else if (spent > 0 && spent < adjustedBudget) {
          setSpendingMessage("🙌🏼 Sweet! You 're well within your overall budget limit for this period.");
        }
        setBudget(adjustedBudget);
        setEstimatedBudget(true);
      }
    }
  };

  useEffect(() => {
    calculateEstimatedBudget();
  }, [startDate, endDate, spent, initialBudget]);

  useEffect(() => {
    fetchData(
      "macros",
      fetchMicroGoalTotals,
      config,
      format(insightsStore.insightsStartDate, "yyyy-MM-dd"),
      format(insightsStore.insightsEndDate, "yyyy-MM-dd"),
      setMicroGoals
    );
  }, [startDate, endDate]);

  const budgetColumnWidth = "120px";
  const spentColumnWidth = "20%";
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-primary text-skin-base text-sm tracking-listtile_subtitle">
          {spent > 0 ? (spendingMessage || "Calculating your budget...") : "You have no expenses registered for this period. Add some expenses to get started."}
        </div>
      </div>
      <div className="mt-2.5 flex flex-row">
        <InsightsTooltipProgressBar
          progressPercent={expenditureProgress.expenditureProgress}
          startDate={startDateObj ?? new Date()}
          endDate={endDateObj ?? new Date()}
        />
      </div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <AmountView caption="Spent" amount={spent} />
        <AmountView caption={estimatedBudget ? "Estimated Budget" : "Planned budget"} amount={budget} flex="items-end" />
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-9 mb-4.5"></div>
      <div className="flex flex-row items-center justify-center w-full h-full -ml-5">
        <MacroPieChartWithLegend
          dimensions={190}
          doughnutThickness={14}
          showComparison={false}
          values={{
            wants: isLoading ? 0 : wantsSpend,
            essentials: isLoading ? 0 : essentialsSpend,
            savings: isLoading ? 0 : savingsSpend,
            unallocated: isLoading ? 0 : unallocatedSpend,
          }}
          isLoading={isLoading}
        />
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-9 mb-4.5"></div>
      <div className="flex flex-col">
        {microGoals && microGoals.length > 0 ? (
          <>
            {microGoals.some((microGoal) => microGoal.total_transactions > 0) && (
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="font-medium font-primary text-xs text-skin-subtitle tracking-wide">
                  Categories
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <div
                      className="font-medium font-primary text-xs text-skin-subtitle tracking-wide items-end"
                      style={{ width: budgetColumnWidth }}
                    >
                      {estimatedBudget ? "Est Budget" : "Budget"}
                    </div>
                    <div
                      className="font-medium font-primary text-xs text-skin-subtitle tracking-wide items-end"
                      style={{ width: spentColumnWidth }}
                    >
                      Spent
                    </div>
                  </div>
                </div>
              </div>
            )}
            {microGoals.map((microGoal, i: number) =>
              microGoal.total_transactions > 0 ? (
                <ExpenditureCard
                  transactions={microGoal.number_of_transactions}
                  icon={microGoal.emoji}
                  budget={microGoal.amount * numberOfMonths}
                  spent={microGoal.total_transactions}
                  key={i}
                  category={microGoal.name}
                />
              ) : null
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};
