import React, { useEffect, useState } from "react";
import TooltipProgressBar from "../ToolTipProgressBar/ToolTipProgressBar";
import { AmountView } from "./AmountView";
import { ExpenditureComparisonCard } from "./ExpenditureComparisonCard";
import { expenditureCompareList } from "client/utils/MockData";
import MacroPieChartWithLegend from "../MacroPieChartWithLegend";
import InsightsVsTooltipProgressBar from "./VsProgress/InsightsVsTooltipProgress";
import { calculateSpending } from "client/utils/Formatters";
import { fetchMicrosPercentile } from "client/api/micros";
import { IConfig, useConfigurationStore } from "client/store/configuration";
type OthersSpendProps = {
  spentBudget: number;
  plannedBudget: number;
  wantsSpend: number;
  essentialsSpend: number;
  savingsSpend: number;
  unallocatedSpend: number;
  startDate?: string;
  endDate?: string;
};
export const OthersSpend = ({
  spentBudget,
  plannedBudget,
  wantsSpend,
  essentialsSpend,
  savingsSpend,
  unallocatedSpend,
  startDate,
  endDate,
}: OthersSpendProps) => {
  const expenditureProgress = calculateSpending(spentBudget, plannedBudget);
  const othersAverageProgress = calculateSpending(319850, plannedBudget);
  const config = useConfigurationStore((state: any) => state.configuration) as IConfig;
  const [othersData, setOthersData] = useState<any>(null);
  const [totalUserExpenditure, setTotalUserExpenditure] = useState(0);
  const [totalPeerExpenditure, setTotalPeerExpenditure] = useState(0);
  const [peerProgress, setPeerProgress] = useState(0);
  const [userProgress, setUserProgress] = useState(0);

  interface CategoryData {
    percentile: number;
    user_expenditure: number;
    peer_total_expenditure: number;
    percentage_difference: number;
  }

  interface MacroData {
    total_user_expenditure_per_macro: number;
    total_peer_expenditure_per_macro: number;
    macro_percentage_difference: number;
    categories: { [category: string]: CategoryData };
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMicrosPercentile({ configuration: config, start_date: startDate, end_date: endDate });
        let totalUserExpenditure = 0;
        let totalPeerExpenditure = 0;

        // Iterate over data
        data.forEach((macro: any) => {
          const macroData = Object.values(macro)[0] as MacroData;
          totalUserExpenditure += macroData.total_user_expenditure_per_macro;
          totalPeerExpenditure += macroData.total_peer_expenditure_per_macro;
        });

        setTotalUserExpenditure(totalUserExpenditure);
        setTotalPeerExpenditure(totalPeerExpenditure);
        const userProgress = calculateSpending(totalUserExpenditure, plannedBudget);
        const peerProgress = calculateSpending(totalPeerExpenditure, plannedBudget);
        setUserProgress(userProgress.expenditureProgress);
        setPeerProgress(peerProgress.expenditureProgress);
        const updatedExpenditureList = expenditureCompareList.map((expenditure) => {
          // Find the corresponding category in the data object
          const categoryData = data.find((macro: any) => {
            const macroName = Object.keys(macro)[0];
            return macro[macroName].categories.hasOwnProperty(expenditure.name);
          });

          // If category data is found, update the percentage
          if (categoryData) {
            const macroName = Object.keys(categoryData)[0];
            const category = categoryData[macroName].categories[expenditure.name];
            expenditure.percentage = category.percentage_difference;
          }

          return expenditure;
        });
        console.log('Total user expenditure:', totalUserExpenditure, 'Total peer expenditure:', totalPeerExpenditure);
        console.log(updatedExpenditureList);

        console.log(data);
        setOthersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [config]);

  console.log(othersData);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-primary text-skin-base text-sm tracking-listtile_subtitle">
          🎉 Nice! You're spending on par with others like you per category.
        </div>
      </div>
      <div className="mt-2.5 flex flex-row">
        <InsightsVsTooltipProgressBar
          othersProgressSpend={userProgress ?? 0}
          myProgressSpend={peerProgress ?? 0}
        />
      </div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <div className="flex flex-row items-start">
          <div
            style={{
              width: 10,
              height: 10,
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: "#cac969",
              marginRight: 5,
            }}
          ></div>
          <AmountView caption="Other's avg spend" amount={totalPeerExpenditure} />
        </div>
        <div className="flex flex-row items-start">
          <div
            style={{
              width: 10,
              height: 10,
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: "#6f89a5",
              marginRight: 5,
            }}
          ></div>
          <AmountView caption="My spend" amount={totalUserExpenditure} />
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
        <div className="font-medium font-primary text-xs text-skin-subtitle tracking-wide">
          Categories
        </div>
        <div className="flex flex-col items-end">
          <div className="font-medium font-primary text-xs text-skin-subtitle tracking-wide">
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
