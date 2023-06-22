import React from "react";
import TooltipProgressBar from "../ToolTipProgressBar/ToolTipProgressBar";
import { AmountView } from "./AmountView";
import InsightsTooltipProgressBar from "./InsightsTooltipProgress";
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
        <AmountView caption="Planned budget" amount={300000} />
      </div>
    </div>
  );
};
