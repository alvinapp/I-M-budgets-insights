import React from "react";
import TooltipProgressBar from "../ToolTipProgressBar/ToolTipProgressBar";
import { AmountView } from "./AmountView";
import InsightsTooltipProgressBar from "./InsightsTooltipProgress";
import { expenditureList } from "client/utils/MockData";
import { ExpenditureCard } from "./ExpenditureCard";
type MySpendProps = {};
export const MySpend = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-poppins text-skin-base text-sm tracking-listtile_subtitle">
          🙌🏼 Sweet! You 're well within your overall budget limit for this
          month.
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
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="font-medium font-poppins text-xs text-skin-subtitle tracking-wide">
          Categories
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="font-medium font-poppins text-xs text-skin-subtitle tracking-wide mr-8">
              Budget
            </div>
            <div className="font-medium font-poppins text-xs text-skin-subtitle tracking-wide">
              Spent
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {expenditureList && expenditureList.length > 0
          ? expenditureList.map((expenditure, i: number) => {
              return (
                <ExpenditureCard
                  transactions={expenditure.transactions}
                  icon={expenditure.emoji}
                  budget={expenditure.budget}
                  spent={expenditure.spent}
                  key={i}
                  category={expenditure.name}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
