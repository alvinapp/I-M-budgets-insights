import React, { useState } from "react";
import NavBarTitle from "../components/NavBarTitle";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import { FiFilter } from "react-icons/fi";
import { AvailableBudgetContainer } from "../components/budget/AvailableBudgetContainer";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { HorizontalDateToggle } from "../components/budget/HorizontalDateToggle";
import Toggle from "../components/insights/Toggle";
import {
  budgetSpendTabs,
  expenditureList,
  insightsToggleTabs,
} from "client/utils/MockData";
import TabFilter from "../components/TabFilter";
import { MySpend } from "../components/insights/MySpend";
import { OthersSpend } from "../components/insights/OthersSpend";
import { ExpenditureCard } from "../components/insights/ExpenditureCard";
import ExpenditureBarGraph from "../components/ExpenditureBarGraph";
import SavingsBarGraph from "../components/SavingsBarGraph";
import CashFlowPieChart from "../components/CashFlowPieChart";
import { useNavigate } from "react-router-dom";

const InsightsView = () => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const [toggleTabId, setToggleTabId] = useState(0);
  const [budgetSpendTabId, setBudgetSpendTabId] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col mr-3.5">
        <NavBar
          children={
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <div className="mr-3">
                    <BackButton onClick={() => navigate(-1)} />
                  </div>
                  <NavBarTitle title="Insights" fontSize="text-2xl" />
                </div>
              </div>
              <div className="h-6 w-6 rounded-full flex justify-center items-center">
                <FiFilter color="#4E6783" size="1.5rem" />
              </div>
            </div>
          }
        />
      </div>
      <div className="flex-grow h-px bg-skin-accent3"></div>
      <div className="flex flex-col mt-7 mx-3.5">
        <div className="flex flex-row items-center justify-between mr-5">
          <AvailableBudgetContainer
            amount={160300}
            subtitle="Current total spending"
            currencySymbol={currencySymbol}
          />
          <Toggle
            tabs={insightsToggleTabs}
            activeTab={toggleTabId}
            onClick={(tab: any) => setToggleTabId(tab.id)}
          />
        </div>
        <div className="flex flex-row mt-4 mb-6">
          {toggleTabId === 0 ? (
            <ExpenditureBarGraph
              previousMonth={{
                essentials: {
                  spent: 350000,
                  expenseLimit: 400000,
                },
                wants: {
                  spent: 350000,
                  expenseLimit: 200000,
                },
              }}
              currentMonth={{
                essentials: {
                  spent: 250000,
                  expenseLimit: 400000,
                },
                wants: {
                  spent: 250000,
                  expenseLimit: 200000,
                },
              }}
              budgetLimit={800000}
            />
          ) : (
            <SavingsBarGraph
              previousMonthSavings={198000}
              currentMonthSavings={163000}
              savingsTarget={150000}
              budgetLimit={350000}
            />
          )}
        </div>
        <div className="flex flex-row">
          <CashFlowPieChart
            dimensions={190}
            doughnutThickness={14}
            values={{
              moneyIn: 1000000,
              moneyOut: 500000,
            }}
            percentageChange={5}
          />
        </div>
        <div className="shadow-card px-4 py-6 mb-10 rounded-lg mt-3">
          <div className="text-base text-skin-base font-semibold tracking-title font-workSans">
            Budget spend
          </div>
          <div className="mt-4.5 mx-2">
            <TabFilter
              tabs={budgetSpendTabs}
              activeTab={budgetSpendTabId}
              onClick={(tab: any) => setBudgetSpendTabId(tab.id)}
            />
          </div>
          <div className="flex flex-row mt-6 mx-2">
            {budgetSpendTabId === 0 ? <MySpend /> : <OthersSpend />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InsightsView;
