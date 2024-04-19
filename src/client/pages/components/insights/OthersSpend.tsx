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
import { differenceInMonths, startOfMonth, endOfMonth, differenceInDays } from "date-fns";
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
  plannedBudget: initialBudget,
  wantsSpend,
  essentialsSpend,
  savingsSpend,
  unallocatedSpend,
  startDate,
  endDate,
}: OthersSpendProps) => {
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const [othersData, setOthersData] = useState<any>(null);
  const [totalUserExpenditure, setTotalUserExpenditure] = useState(0);
  const [totalPeerExpenditure, setTotalPeerExpenditure] = useState(0);
  const [peerProgress, setPeerProgress] = useState(0);
  const [userProgress, setUserProgress] = useState(0);
  const [userWantsExpenditure, setUserWantsExpenditure] = useState(0);
  const [userEssentialsExpenditure, setUserEssentialsExpenditure] = useState(0);
  const [userSavingsExpenditure, setUserSavingsExpenditure] = useState(0);
  const [peerWantsExpenditure, setPeerWantsExpenditure] = useState(0);
  const [peerEssentialsExpenditure, setPeerEssentialsExpenditure] = useState(0);
  const [peerSavingsExpenditure, setPeerSavingsExpenditure] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(1);
  const [budget, setBudget] = useState(initialBudget);
  const [estimatedBudget, setEstimatedBudget] = useState(false);
  const [spendingMessage, setSpendingMessage] = useState("");

  const startDateObj = startDate ? new Date(startDate) : null;
  const endDateObj = endDate ? new Date(endDate) : null;

  const claculateTheNumberOfMonths = () => {
    if (!startDateObj || !endDateObj) return;
    const numberOfMonths = differenceInMonths(endDateObj, startDateObj) + 1;
    setNumberOfMonths(numberOfMonths);
  };

  const calculateEstimatedBudget = async () => {
    if (!startDateObj || !endDateObj) return;

    claculateTheNumberOfMonths();

    const startIsMonthStart = startDateObj.getDate() === startOfMonth(startDateObj).getDate();
    const endIsMonthEnd =
      endDateObj.getDate() === endOfMonth(endDateObj).getDate();
    if (startIsMonthStart && endIsMonthEnd && startDateObj.getMonth() === endDateObj.getMonth()) {
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
          setBudget(adjustedBudget);
          setEstimatedBudget(true);
        }//If the days are in different months, assume that the budget is divided equally between 30 days, multiply the daily budget by the number of days
        else if (startDateObj.getMonth() !== endDateObj.getMonth()) {
          const dailyBudget = initialBudget / 30;
          const adjustedBudget = dailyBudget * days;
          setBudget(adjustedBudget);
          setEstimatedBudget(true);
        }
      } else if (days > 30) {
        // If the duration is more than a month
        const months = Math.ceil(days / 30);
        const adjustedBudget = initialBudget * months;
        setBudget(adjustedBudget);
        setEstimatedBudget(true);
      }
    }
    const userProgress = calculateSpending(
      totalUserExpenditure,
      budget
    );
    const peerProgress = calculateSpending(
      totalPeerExpenditure,
      budget
    );
    setUserProgress(userProgress.expenditureProgress);
    setPeerProgress(peerProgress.expenditureProgress);
  };

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

  const updateSpendingMessage = () => {
    const userProgress = totalUserExpenditure;
    const peerProgress = totalPeerExpenditure;
    const percentageDifference = ((userProgress - peerProgress) / peerProgress) * 100;

    if (Math.abs(percentageDifference) <= 15) {
      setSpendingMessage("🎉 Nice! You're spending on par with others like you per category.");
    } else if (percentageDifference < -15) {
      setSpendingMessage("Nice! You're spending less than others like you across your budget. Way to go!");
    } else if (percentageDifference > 15) {
      setSpendingMessage("Heads up! You're currently spending above average compared to others like you.");
    }
  };

  useEffect(() => {
    updateSpendingMessage();
  }, [totalUserExpenditure, totalPeerExpenditure]);

  useEffect(() => {
    calculateEstimatedBudget();
  }, [startDate, endDate, initialBudget, totalUserExpenditure, totalPeerExpenditure]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMicrosPercentile({
          configuration: config,
          start_date: startDate,
          end_date: endDate,
        });
        let totalUserExpenditure = 0;
        let totalPeerExpenditure = 0;
        let userWantsExpenditure = 0;
        let userEssentialsExpenditure = 0;
        let userSavingsExpenditure = 0;
        let peerWantsExpenditure = 0;
        let peerEssentialsExpenditure = 0;
        let peerSavingsExpenditure = 0;

        // Iterate over data
        data.forEach((macro: any) => {
          const macroData = Object.values(macro)[0] as MacroData;
          totalUserExpenditure += macroData.total_user_expenditure_per_macro;
          totalPeerExpenditure += macroData.total_peer_expenditure_per_macro;
        });

        // Iterate over data to get total user expenditure for Wants, Essentials, and Savings; do the same for peer expenditure for Wants, Essentials, and Savings
        data.forEach((macro: any) => {
          const macroName = Object.keys(macro)[0];
          const macroData = macro[macroName];
          const categories = macroData.categories;

          // Check if the macro name is Wants, Essentials, or Savings
          if (macroName === "Wants") {
            for (const category in categories) {
              const categoryData = categories[category];
              userWantsExpenditure += categoryData.user_expenditure;
              peerWantsExpenditure += categoryData.peer_total_expenditure;
            }
          } else if (macroName === "Essentials") {
            for (const category in categories) {
              const categoryData = categories[category];
              userEssentialsExpenditure += categoryData.user_expenditure;
              peerEssentialsExpenditure += categoryData.peer_total_expenditure;
            }
          } else if (macroName === "Savings") {
            for (const category in categories) {
              const categoryData = categories[category];
              userSavingsExpenditure += categoryData.user_expenditure;
              peerSavingsExpenditure += categoryData.peer_total_expenditure;
            }
          }
        });

        setUserWantsExpenditure(userWantsExpenditure);
        setUserEssentialsExpenditure(userEssentialsExpenditure);
        setUserSavingsExpenditure(userSavingsExpenditure);
        setPeerWantsExpenditure(peerWantsExpenditure);
        setPeerEssentialsExpenditure(peerEssentialsExpenditure);
        setPeerSavingsExpenditure(peerSavingsExpenditure);
        setTotalUserExpenditure(totalUserExpenditure);
        setTotalPeerExpenditure(totalPeerExpenditure);
        const updatedExpenditureList = expenditureCompareList.map(
          (expenditure) => {
            // Find the corresponding category in the data object
            const categoryData = data.find((macro: any) => {
              const macroName = Object.keys(macro)[0];
              return macro[macroName].categories.hasOwnProperty(
                expenditure.name
              );
            });

            // If category data is found, update the percentage
            if (categoryData) {
              const macroName = Object.keys(categoryData)[0];
              const category =
                categoryData[macroName].categories[expenditure.name];
              expenditure.percentage = category.percentage_difference;
            }

            return expenditure;
          }
        );
        setOthersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [config, startDate, endDate]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-primary text-skin-base text-sm tracking-listtile_subtitle">
          {spendingMessage === "" ? "Calculating your budget spending against your peers, please wait..." : spendingMessage}
        </div>
      </div>
      <div className="mt-2.5 flex flex-row">
        <InsightsVsTooltipProgressBar
          othersProgressSpend={userProgress ?? 0}
          myProgressSpend={peerProgress ?? 0}
          startDate={startDateObj ?? new Date()}
          endDate={endDateObj ?? new Date()}
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
              background: "#101010",
              marginRight: 5,
            }}
          ></div>
          <AmountView
            caption="Other's avg spend"
            amount={totalPeerExpenditure}
          />
        </div>
        <div className="flex flex-row items-start">
          <div
            style={{
              width: 10,
              height: 10,
              marginTop: 10,
              borderRadius: 10,
              background: "#6f89a5",
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
            wants: userWantsExpenditure,
            essentials: userEssentialsExpenditure,
            savings: userSavingsExpenditure,
            unallocated: unallocatedSpend,
          }}
          peerValues={{
            wants: peerWantsExpenditure,
            essentials: peerEssentialsExpenditure,
            savings: peerSavingsExpenditure,
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
