import React from "react";
import TooltipProgressBar from "../ToolTipProgressBar/ToolTipProgressBar";
import { AmountView } from "./AmountView";
import { ExpenditureComparisonCard } from "./ExpenditureComparisonCard";
import { expenditureCompareList } from "client/utils/MockData";
import MacroPieChartWithLegend from "../MacroPieChartWithLegend";
import InsightsVsTooltipProgressBar from "./VsProgress/InsightsVsTooltipProgress";
import { calculateSpending } from "client/utils/Formatters";
type OthersSpendProps = {
  spentBudget: number;
  plannedBudget: number;
  wantsSpend: number;
  essentialsSpend: number;
  savingsSpend: number;
  unallocatedSpend: number;
};
export const OthersSpend = ({
  spentBudget,
  plannedBudget,
  wantsSpend,
  essentialsSpend,
  savingsSpend,
  unallocatedSpend,
}: OthersSpendProps) => {
  const expenditureProgress = calculateSpending(spentBudget, plannedBudget)
  const othersAverageProgress = calculateSpending(59850, plannedBudget)
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-poppins text-skin-base text-sm tracking-listtile_subtitle">
          🎉 Nice! You're spending on par with others like you per category.
        </div>
      </div>
      <div className="mt-2.5 flex flex-row">
        <InsightsVsTooltipProgressBar othersProgressSpend={expenditureProgress.expenditureProgress} myProgressSpend={othersAverageProgress.expenditureProgress} />
      </div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <div className="flex flex-row items-start">
          <div style={{
            width: 10,
            height: 10,
            marginTop: 10,
            borderRadius: 4,
            backgroundColor: "#cac969",
            marginRight: 5,
          }}>
          </div>
          <AmountView caption="Other's avg spend" amount={59850} />
        </div>
        <div className="flex flex-row items-start">
          <div style={{
            width: 10,
            height: 10,
            marginTop: 10,
            borderRadius: 4,
            backgroundColor: "#6f89a5",
            marginRight: 5,
          }}>
          </div>
          <AmountView caption="My spend" amount={spentBudget} />
        </div>
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-9 mb-4.5"></div>
      <div className="flex flex-row -ml-8">
        <MacroPieChartWithLegend
          dimensions={190}
          doughnutThickness={14}
          showComparison={true}
          showUnallocated={false}
          values={{
            wants: wantsSpend,
            essentials: essentialsSpend,
            savings: savingsSpend,
            unallocated: unallocatedSpend,
          }}
        />
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-4.5 mb-6"></div>
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="font-medium font-poppins text-xs text-skin-subtitle tracking-wide">
          Categories
        </div>
        <div className="flex flex-col items-end">
          <div className="font-medium font-poppins text-xs text-skin-subtitle tracking-wide">
            Spend difference
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {expenditureCompareList && expenditureCompareList.length > 0
          ? expenditureCompareList.map((expenditure, i: number) => {
            return (
              <ExpenditureComparisonCard
                icon={expenditure.emoji}
                key={i}
                category={expenditure.name}
                percentage={expenditure.percentage}
              />
            );
          })
          : null}
      </div>
    </div>
  );
};
