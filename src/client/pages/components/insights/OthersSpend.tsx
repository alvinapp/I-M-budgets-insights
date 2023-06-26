import React from "react";
import TooltipProgressBar from "../ToolTipProgressBar/ToolTipProgressBar";
import { AmountView } from "./AmountView";
import InsightsTooltipProgressBar from "./InsightsTooltipProgress";
import { ExpenditureComparisonCard } from "./ExpenditureComparisonCard";
import { expenditureCompareList } from "client/utils/MockData";
import MacroPieChartWithLegend from "../MacroPieChartWithLegend";
type OthersSpendProps = {
  spentBudget?: number;
  plannedBudget?: number;
};
export const OthersSpend = ({
  spentBudget,
  plannedBudget,
}: OthersSpendProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-poppins text-skin-base text-sm tracking-listtile_subtitle">
          🎉 Nice! You're spending on par with others like you per category.
        </div>
      </div>
      <div className="mt-2.5 flex flex-row">
        <InsightsTooltipProgressBar progressPercent={25} />
      </div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <AmountView caption="Spent" amount={160300} />
        <AmountView caption="Planned budget" amount={300000} flex="items-end" />
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-9 mb-4.5"></div>
      <div className="flex flex-row">
        <MacroPieChartWithLegend
          dimensions={190}
          doughnutThickness={12}
          values={{
            wants: 120000,
            essentials: 90000,
            savings: 60000,
            unallocated: 40000,
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
