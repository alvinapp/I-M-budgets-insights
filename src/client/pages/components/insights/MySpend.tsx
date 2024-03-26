import React, { useEffect } from "react";
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
import { format } from "date-fns";

type MySpendProps = {
  spent: number;
  budget: number;
  wantsSpend: number;
  essentialsSpend: number;
  savingsSpend: number;
  unallocatedSpend: number;
  startDate?: string;
  endDate?: string;
};
export const MySpend = ({
  spent,
  budget,
  wantsSpend,
  essentialsSpend,
  savingsSpend,
  unallocatedSpend,
  startDate,
  endDate,
}: MySpendProps) => {
  const microGoals = useMicroGoalsStore((state) => state.microGoals);
  const setMicroGoals = useMicroGoalsStore((state) => state.setMicroGoals);
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const insightsStore = useInsightsStore.getState();
  const expenditureProgress = calculateSpending(spent, budget);
  const startDateObj = startDate ? new Date(startDate) : null;
  const endDateObj = endDate ? new Date(endDate) : null;

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
          🙌🏼 Sweet! You 're well within your overall budget limit for this
          month.
        </div>
      </div>
      <div className="mt-2.5 flex flex-row">
        <InsightsTooltipProgressBar
          progressPercent={expenditureProgress.expenditureProgress}
          startDate={startDateObj ?? new Date()}
        />
      </div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <AmountView caption="Spent" amount={spent} />
        <AmountView caption="Planned budget" amount={budget} flex="items-end" />
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-9 mb-4.5"></div>
      <div className="flex flex-row items-center justify-center w-full h-full -ml-5">
        <MacroPieChartWithLegend
          dimensions={190}
          doughnutThickness={14}
          showComparison={false}
          values={{
            wants: wantsSpend,
            essentials: essentialsSpend,
            savings: savingsSpend,
            unallocated: unallocatedSpend,
          }}
        />
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-9 mb-4.5"></div>
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
              Budget
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
      <div className="flex flex-col">
        {microGoals && microGoals.length > 0
          ? microGoals.slice(0, 5).map((microGoal, i: number) => {
            return (
              <ExpenditureCard
                transactions={microGoal.number_of_transactions}
                icon={microGoal.emoji}
                budget={microGoal.amount}
                spent={microGoal.total_transactions}
                key={i}
                category={microGoal.name}
              />
            );
          })
          : null}
      </div>
    </div>
  );
};
