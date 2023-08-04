import React, { useEffect, useState } from "react";
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
import { getCashFlow } from "client/api/transactions";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useUserStore from "client/store/userStore";
import useCategoriesStore from "client/store/categoriesStore";
import useMacroGoalsStore from "client/store/macroGoalStore";

const InsightsView = () => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const userStore = useUserStore((state: any) => state);
  const macroGoalStore = useMacroGoalsStore((state: any) => state);

  interface ICashFlowData {
    total_credit?: number;
    total_debit?: number;
    total_change?: number;
  }

  const [cashFlowData, setCashFlowData] = useState<ICashFlowData | null>(null);
  const {
    total_credit: moneyIn = 0,
    total_debit: moneyOut = 0,
    total_change: netCashFlow = 0,
  } = cashFlowData || {};
  const categoryStore = useCategoriesStore((state: any) => state);

  const essentialTotalBudgetAmount =
    categoryStore.categoryBudgets[0]?.total_amount;
  const wantsTotalBudgetAmount = categoryStore.categoryBudgets[1]?.total_amount;
  const savingsTotalBudgetAmount =
    categoryStore.categoryBudgets[2]?.total_amount;
  const previousEssentialTotalExpenses =
    macroGoalStore.macroGoals[0].range_expense.last_month_total;
  const essentialTotalExpenses =
    macroGoalStore.macroGoals[0].range_expense.this_month_total;
  const wantsTotalExpenses =
    macroGoalStore.macroGoals[1].range_expense.this_month_total;
  const previousWantsTotalExpenses =
    macroGoalStore.macroGoals[1].range_expense.last_month_total;
  const savingsTotalExpenses =
    macroGoalStore.macroGoals[2].range_expense.this_month_total;
  const previousSavingsTotalExpenses =
    macroGoalStore.macroGoals[2].range_expense.last_month_total;

  const totalBudgetAmount =
    essentialTotalBudgetAmount +
    wantsTotalBudgetAmount +
    savingsTotalBudgetAmount;
  const totalExpenses =
    essentialTotalExpenses + wantsTotalExpenses + savingsTotalExpenses;

  useEffect(() => {
    const fetchCashFlowData = async () => {
      const data = await getCashFlow({ configuration: config });
      setCashFlowData(data);
    };
    fetchCashFlowData();
  }, []);

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
          {toggleTabId == 0 ? (
            <AvailableBudgetContainer
              amount={100000}
              subtitle="Current total spending"
              currencySymbol={currencySymbol}
            />
          ) : (
            <AvailableBudgetContainer
              amount={163000}
              subtitle="Current total savings"
              currencySymbol={currencySymbol}
            />
          )}
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
                  spent: previousEssentialTotalExpenses,
                  expenseLimit: essentialTotalBudgetAmount,
                },
                wants: {
                  spent: previousWantsTotalExpenses,
                  expenseLimit: wantsTotalBudgetAmount,
                },
              }}
              currentMonth={{
                essentials: {
                  spent: essentialTotalExpenses,
                  expenseLimit: essentialTotalBudgetAmount,
                },
                wants: {
                  spent: wantsTotalExpenses,
                  expenseLimit: wantsTotalBudgetAmount,
                },
              }}
              budgetLimit={userStore.user.income}
            />
          ) : (
            <SavingsBarGraph
              previousMonthSavings={previousSavingsTotalExpenses}
              currentMonthSavings={savingsTotalExpenses}
              savingsTarget={savingsTotalBudgetAmount}
              budgetLimit={userStore.user.income}
            />
          )}
        </div>
        <div className="flex flex-row">
          <CashFlowPieChart
            dimensions={190}
            doughnutThickness={14}
            values={{
              moneyIn: cashFlowData?.total_credit || 0,
              moneyOut: cashFlowData?.total_debit || 0,
            }}
            percentageChange={cashFlowData?.total_change || 0}
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
            {budgetSpendTabId === 0 ? (
              <MySpend
                spent={totalExpenses}
                budget={totalBudgetAmount}
                wantsSpend={wantsTotalExpenses}
                savingsSpend={savingsTotalExpenses}
                essentialsSpend={essentialTotalExpenses}
                unallocatedSpend={500}
              />
            ) : (
              <OthersSpend
                spentBudget={totalExpenses}
                plannedBudget={totalBudgetAmount}
                wantsSpend={wantsTotalExpenses}
                savingsSpend={savingsTotalExpenses}
                essentialsSpend={essentialTotalExpenses}
                unallocatedSpend={0}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InsightsView;
