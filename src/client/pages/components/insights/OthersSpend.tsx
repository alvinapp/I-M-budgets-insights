import React, { useEffect, useState } from "react";
import TooltipProgressBar from "../ToolTipProgressBar/ToolTipProgressBar";
import { AmountView } from "./AmountView";
import { ExpenditureComparisonCard } from "./ExpenditureComparisonCard";
import { expenditureCompareList } from "client/utils/MockData";
import MacroPieChartWithLegend from "../MacroPieChartWithLegend";
import InsightsVsTooltipProgressBar from "./VsProgress/InsightsVsTooltipProgress";
import { calculateSpending, checkNAN } from "client/utils/Formatters";
import { fetchMicrosPercentile } from "client/api/micros";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { differenceInMonths, startOfMonth, endOfMonth, differenceInDays, set } from "date-fns";
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
  const [peerProgress, setPeerProgress] = useState();
  const [userProgress, setUserProgress] = useState();
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
  const [isLoading, setIsLoading] = useState(false);

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

  // TODO: fix this function here 
  const fetchDataAndUpdateState = async () => {
    try {
      setIsLoading(true);
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

      data.forEach((macro: any) => {
        const macroName = Object.keys(macro)[0]; // Assuming the name is the key
        const macroData = macro[macroName];

        totalUserExpenditure += macroData.total_user_expenditure_per_macro;
        totalPeerExpenditure += macroData.total_peer_expenditure_per_macro;

        // Check if the macro name is Wants, Essentials, or Savings
        if (macroName === "Wants") {
          userWantsExpenditure += macroData.total_user_expenditure_per_macro;
          peerWantsExpenditure += macroData.total_peer_expenditure_per_macro;
        } else if (macroName === "Essentials") {
          userEssentialsExpenditure += macroData.total_user_expenditure_per_macro;
          peerEssentialsExpenditure += macroData.total_peer_expenditure_per_macro;
        } else if (macroName === "Savings") {
          userSavingsExpenditure += macroData.total_user_expenditure_per_macro;
          peerSavingsExpenditure += macroData.total_peer_expenditure_per_macro;
        }
      });

      setTotalUserExpenditure(totalUserExpenditure);
      setTotalPeerExpenditure(totalPeerExpenditure);
      setUserWantsExpenditure(userWantsExpenditure);
      setUserEssentialsExpenditure(userEssentialsExpenditure);
      setUserSavingsExpenditure(userSavingsExpenditure);
      setPeerWantsExpenditure(peerWantsExpenditure);
      setPeerEssentialsExpenditure(peerEssentialsExpenditure);
      setPeerSavingsExpenditure(peerSavingsExpenditure);
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
      // calculateEstimatedBudget();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
      setSpendingMessage("Failed to load expenditure data. Please try again later.");
    }
  };


  const calculateProgressAndSetMessage = (userExpenditure: number, peerExpenditure: number) => {
    const percentageDifference = ((userExpenditure - peerExpenditure) / peerExpenditure) * 100;
    determineMessage(userExpenditure, percentageDifference);
  };

  useEffect(() => {
    calculateEstimatedBudget();
    calculateProgressAndSetMessage(totalUserExpenditure, totalPeerExpenditure);
  }, [startDate, endDate, initialBudget, totalUserExpenditure, totalPeerExpenditure]);

  const determineMessage = (userExpenditure: number, percentageDifference: number | null) => {
    if (userExpenditure === 0) {
      setSpendingMessage("You have no expenses registered for this period. Add some expenses to get started.");
      return;
    }

    let message = "Calculating your budget spending against your peers, please wait...";
    if (percentageDifference !== null) {
      if (Math.abs(percentageDifference) <= 15) {
        message = "🎉 Nice! You're spending on par with others like you per category.";
      } else if (percentageDifference < -15) {
        message = "Nice! You're spending less than others like you across your budget. Way to go!";
      } else if (percentageDifference > 15) {
        message = "Heads up! You're currently spending above average compared to others like you.";
      }
    }

    setSpendingMessage(message);
  };

  useEffect(() => {
    if (startDate && endDate) {
      fetchDataAndUpdateState();
    }
  }, [startDate, endDate, config]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-primary text-skin-base text-sm tracking-listtile_subtitle">
          {isLoading
            ? "Calculating your budget spending against your peers, please wait..."
            : spendingMessage || "Ready to view spending insights!"}
        </div>
      </div>
      <div className="mt-2.5 flex flex-row">
        <InsightsVsTooltipProgressBar
          othersProgressSpend={!isLoading ? userProgress ?? 0 : 0}
          myProgressSpend={!isLoading ? peerProgress ?? 0 : 0}
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
            amount={!isLoading ? totalPeerExpenditure : 0}
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
          <AmountView caption="My spend" amount={!isLoading ? totalUserExpenditure : 0} />
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
            wants: !isLoading ? userWantsExpenditure : 0,
            essentials: !isLoading ? userEssentialsExpenditure : 0,
            savings: !isLoading ? userSavingsExpenditure : 0,
            unallocated: !isLoading ? unallocatedSpend : 0,
          }}
          peerValues={{
            wants: !isLoading ? peerWantsExpenditure : 0,
            essentials: !isLoading ? peerEssentialsExpenditure : 0,
            savings: !isLoading ? peerSavingsExpenditure : 0,
            unallocated: !isLoading ? unallocatedSpend : 0,
          }}
          isLoading={isLoading}
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
            const isGoingOut = expenditure?.name === "Going out";
            return (
              <React.Fragment key={i}>
                <ExpenditureComparisonCard
                  icon={isGoingOut ? "🤩" : expenditure.emoji}
                  key={i}
                  category={isGoingOut ? "Entertainment" : expenditure.name}
                  percentage={!isLoading ? expenditure.percentage : 0}
                />
              </React.Fragment>
            );
          })
          : null}
      </div>
    </div>
  );
};
