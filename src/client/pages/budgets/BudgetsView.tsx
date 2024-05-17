import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import { FiPieChart } from "react-icons/fi";
import MacroProgressBarsContainer from "../components/MacroProgressBarContainer";
import { AvailableBudgetContainer } from "../components/budget/AvailableBudgetContainer";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { InsightsButton } from "../components/budget/InsightsButton";
import { CategoriesIconLabel } from "../components/budget/CategoriesIconLabel";
import { CategoryCardHeader } from "../components/budget/CategoryCardHeader";
import { CategoryViewCard } from "../components/budget/CategoryViewCard";
import TooltipProgressBar from "../components/ToolTipProgressBar/ToolTipProgressBar";
import { HorizontalDateToggle } from "../components/budget/HorizontalDateToggle";
import { useQuery } from "react-query";
import { fetchBudgetCategories } from "client/api/budget";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useCategoriesStore from "client/store/categoriesStore";
import {
  calculateSpending,
  calculateTotalMacroBudget,
  checkNAN,
  fetchData,
} from "client/utils/Formatters";
import useMacroGoalsStore from "client/store/macroGoalStore";
import { getMacros } from "client/api/macros";
import settings from "client/assets/images/budgets-insights/Settings.svg";
import { AddBudgetCard } from "../components/budget/AddBudgetCard";
import useMacrosStore from "client/store/macroGoalStore";
import useMicroGoalsStore from "client/store/microGoalStore";
import { BottomSheet } from "react-spring-bottom-sheet";
import ViewBudget from "./ViewBudget";
import {
  startOfMonth,
  endOfMonth,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import useActivePeriodRangeStore from "client/store/activePeriodRangeStore";
import ViewSavingsBudget from "./ViewSavingsBudget";
import { enrichTransactions } from "client/api/transactions";
import useInsightsStore from "client/store/insightsStore";
import { DebtRepaymentCard } from "../components/budget/DebtRepaymentCard";
import { allTimeDebt, debt, debtOverviewTabs } from "client/utils/MockData";
import TabFilter from "../components/TabFilter";
import { divide } from "lodash";
import ViewDebt from "../components/ViewDebt";
import LoanDetails from "../components/LoanDetails";
import useTransactionStore from "client/store/transactionStore";
const BudgetsView = () => {
  const navigate = useNavigate();
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const categoryStore = useCategoriesStore((state: any) => state);
  const macroGoalStore = useMacroGoalsStore((state: any) => state);
  const macroData = macroGoalStore.macroGoals ?? [];
  const essentialMacro = macroData[0];
  const wantsMacro = macroData[1];
  const savingsMacro = macroData[2];
  const essentialBudgetAmount = essentialMacro?.amount;
  const wantsBudgetAmount = essentialMacro?.amount;
  const savingsBudgetAmount = savingsMacro?.amount;
  const setMicroGoals = useMicroGoalsStore((state) => state.setMicroGoals);
  const insightsStoreState = useInsightsStore((state) => state);
  const transactionState = useTransactionStore((state: any) => state);
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const { activePeriodRange, setRangeStartDate, setRangeEndDate } =
    useActivePeriodRangeStore();
  const [startDate, setStartDate] = useState<Date>(activePeriodRange.startDate);
  const [endDate, setEndDate] = useState<Date>(activePeriodRange.endDate);
  const [updatedEvironment, setUpdatedEnvironment] = React.useState<
    "local" | "props"
  >("props");
  const [isLoading, setIsLoading] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Calculate the start_date as the first day of the current month
  const formattedStartDate = format(startDate, "yyyy-MM-dd");
  const formattedEndDate = format(endDate, "yyyy-MM-dd");

  const formattedInsightsStartDate = format(
    insightsStoreState.insightsStartDate ?? currentMonth,
    "yyyy-MM-dd"
  );
  const formattedInsightsEndDate = format(
    insightsStoreState.insightsEndDate ?? endOfMonth(currentMonth),
    "yyyy-MM-dd"
  );

  const navigateToInsightsView = () => {
    navigate(
      `/insights-view?startDate=${formattedInsightsStartDate}&endDate=${formattedInsightsEndDate}`
    );
  };

  const { isFetching: fetchingEssentialsBudget } = useQuery(
    "essentials-budgets",
    () =>
      fetchData(
        "essentials-budgets",
        fetchBudgetCategories,
        config,
        formattedStartDate,
        formattedEndDate,
        categoryStore.setCategoryBudgets
      ),
    { enabled: !!config.token }
  );

  const fetchMacroGoalsData = async () => {
    try {
      const { data } = await getMacros({
        configuration: config,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      });
      const result =
        data?.map((item: { goals: any }) => item.goals).flat() || [];
      macroGoalStore.setMacros(result);
    } catch (error) { }
  };
  useEffect(() => {
    const fetchDataAndUpdateMacroGoals = async () => {
      if (!transactionState.displayCategoriesSheet) {
        setIsLoading(true);
        await Promise.all([
          fetchData(
            "essentials-budgets",
            fetchBudgetCategories,
            config,
            formattedStartDate,
            formattedEndDate,
            categoryStore.setCategoryBudgets
          ),
          fetchMacroGoalsData(),
        ]);
        setIsLoading(false);
      }
    };

    fetchDataAndUpdateMacroGoals();
  }, [config.token, startDate, endDate, transactionState.displayCategoriesSheet]);
  useEffect(() => {
    enrichTransactions({
      configuration: config,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    });
  }, [config.token, startDate, endDate]);

  const {
    essentialTotalBudgetAmount,
    wantsTotalBudgetAmount,
    savingsTotalBudgetAmount,
    essentialTotalExpenses,
    wantsTotalExpenses,
    savingsTotalExpenses,
    expenditureProgress,
  } = useMemo(() => {
    const essentialTotalBudgetAmount =
      categoryStore.categoryBudgets[0]?.total_amount;
    const wantsTotalBudgetAmount =
      categoryStore.categoryBudgets[1]?.total_amount;
    const savingsTotalBudgetAmount =
      categoryStore.categoryBudgets[2]?.total_amount;
    const essentialTotalExpenses =
      categoryStore.categoryBudgets[0]?.total_expense;
    const wantsTotalExpenses = categoryStore.categoryBudgets[1]?.total_expense;
    const savingsTotalExpenses =
      categoryStore.categoryBudgets[2]?.total_expense;

    const totalBudget =
      essentialTotalBudgetAmount +
      wantsTotalBudgetAmount +
      savingsTotalBudgetAmount;
    const totalExpenditure =
      essentialTotalExpenses + wantsTotalExpenses + savingsTotalExpenses;
    return {
      essentialTotalBudgetAmount,
      wantsTotalBudgetAmount,
      savingsTotalBudgetAmount,
      essentialTotalExpenses,
      wantsTotalExpenses,
      savingsTotalExpenses,
      totalBudget,
      totalExpenditure,
      expenditureProgress: calculateSpending(totalExpenditure, totalBudget),
    };
  }, [categoryStore.categoryBudgets]);
  const handlePreviousMonthClick = (e: any) => {
    const newStartDate = startOfMonth(subMonths(startDate, 1));
    setStartDate(newStartDate);
    setRangeStartDate(new Date(format(newStartDate, "yyyy-MM-dd")));
    const newEndDate = endOfMonth(subMonths(startDate, 1));
    setEndDate(newEndDate);
    setRangeEndDate(new Date(format(newEndDate, "yyyy-MM-dd")));
    setUpdatedEnvironment("props");
  };

  const handleNextMonthClick = (e: any) => {
    const newStartDate = startOfMonth(addMonths(startDate, 1));
    setStartDate(newStartDate);
    setRangeStartDate(new Date(format(newStartDate, "yyyy-MM-dd")));
    const newEndDate = endOfMonth(addMonths(startDate, 1));
    setEndDate(newEndDate);
    setRangeEndDate(new Date(format(newEndDate, "yyyy-MM-dd")));
    setUpdatedEnvironment("props");
  };

  const onDateRangeSelect = (dateRange: any) => {
    setRangeStartDate(dateRange.start);
    setStartDate(dateRange.start);
    setEndDate(dateRange.end);
    setRangeEndDate(dateRange.end);
    setUpdatedEnvironment("local");
  };

  const onDateChangeSelect = (dateRange: any) => {
    setRangeStartDate(dateRange.startDate);
    setStartDate(dateRange.startDate);
    setEndDate(dateRange.endDate);
    setRangeEndDate(dateRange.endDate);
    setUpdatedEnvironment("local");
  };

  // Format the current month for display

  const month = currentMonth.toLocaleString("default", { month: "long" });
  const essentialBudgets = categoryStore.categoryBudgets[0]?.data.filter(
    (essential: any) => essential?.amount !== 0
  );
  const wantsBudgets = categoryStore.categoryBudgets[1]?.data.filter(
    (wants: any) => wants?.amount !== 0
  );
  const savingsBudgets = categoryStore.categoryBudgets[2]?.data.filter(
    (savings: any) => savings?.amount !== 0
  );
  const macroStore = useMacrosStore((state: any) => state);
  const [viewBudgetSheet, openViewBudgetSheet] = useState(false);

  const [viewDebtSheet, openViewDebtSheet] = useState(false);
  const budgetDetails = {
    spentAmount: 0,
    totalBudgetAmount: 0,
    progress: 0,
    category: "",
    emoji: "",
    startDate: formattedStartDate,
    endDate: formattedEndDate,
    microGoal: 0,
    progressColor: "",
  };
  const debtDetails = {
    id: 0,
    name: "",
    amount: 0,
    paid: 0,
    debtBalance: 0,
    percentage: 0,
    icon: "",
    cover: "",
    loanDetails: {},
    recentActivities: {},
  };
  const [budgetDetailsData, setBudgetDetailsData] = useState(budgetDetails);
  const [debtDetailsData, setDebtDetailsData] = useState(debtDetails);
  const [debtViewTabId, setDebtViewTabId] = useState(0);
  const totalDebt = debt.reduce((accumulator, item) => {
    return (accumulator += item.amount);
  }, 0);
  const editCategoryStore = useTransactionStore((state: any) => state);
  return (
    <div className="h-screen w-screen">
      <div className="px-3.5 flex flex-col">
        <NavBar
          children={
            <div className="flex flex-row items-center justify-between mt-6">
              <NavBarTitle title="Budget" fontSize="text-2xl" />
              <div
                className="h-6 w-6 rounded-full"
                onClick={() => {
                  if (
                    categoryStore.categoryBudgets[0]?.data.length === 0 &&
                    categoryStore.categoryBudgets[1]?.data.length === 0 &&
                    categoryStore.categoryBudgets[2]?.data.length === 0
                  ) {
                    navigate("/empty-budgets");
                  } else {
                    navigate("/edit-budgets");
                  }
                }}
              >
                <img src={settings} />
              </div>
            </div>
          }
        />
        <div className="mt-6">
          <HorizontalDateToggle
            onPreviousMonthClick={handlePreviousMonthClick}
            onNextMonthClick={handleNextMonthClick}
            startDate={activePeriodRange.startDate}
            endDate={activePeriodRange.endDate}
            onDateRangeSelect={(date: any) => {
              onDateChangeSelect(date);
            }}
            lastUpdatedEnv={updatedEvironment}
          />
        </div>
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-3"></div>
      <div className="flex flex-col mx-3.5  mt-8">
        <div className="flex flex-row items-center justify-between">
          <AvailableBudgetContainer
            amount={checkNAN(
              Math.max(
                0,
                essentialTotalBudgetAmount +
                wantsTotalBudgetAmount +
                savingsTotalBudgetAmount -
                (essentialTotalExpenses +
                  wantsTotalExpenses +
                  savingsTotalExpenses)
              )
            )}
            subtitle="Available budget"
            currencySymbol={currencySymbol}
            isLoading={isLoading}
          />
          <div className="flex flex-col justify-center">
            <InsightsButton
              onClick={() => (isLoading ? null : navigateToInsightsView())}
            />
          </div>
        </div>
        <div className="mt-11">
          <TooltipProgressBar
            progressPercent={
              isLoading ? 0 : expenditureProgress.expenditureProgress
            }
            progressTooltip={
              isLoading ? 0 : expenditureProgress.expectedExpenditureProgress
            }
            activeMonth={startDate}
            showProgressTooltip={
              isLoading
                ? false
                : startDate.getMonth() === new Date().getMonth() &&
                startDate.getFullYear() === new Date().getFullYear()
            }
          />
        </div>
        <div className="mt-2">
          <MacroProgressBarsContainer
            ratios={`33/33/33`}
            budgetAmount={{
              savingsBudget: savingsTotalExpenses,
              essentialsBudget: essentialTotalExpenses,
              wantsBudget: wantsTotalExpenses,
            }}
            progressPercentage={{
              savingsProgress:
                checkNAN(savingsTotalExpenses / savingsTotalBudgetAmount) * 100,
              essentialsProgress:
                checkNAN(essentialTotalExpenses / essentialTotalBudgetAmount) *
                100,
              wantsProgress:
                checkNAN(wantsTotalExpenses / wantsTotalBudgetAmount) * 100,
            }}
            isLoading={isLoading}
          />
        </div>
        <div className="mt-8">
          <CategoriesIconLabel
            label="Categories"
            icon={<FiPieChart color="#101010" />}
            iconBg="bg-skin-iconPrimary"
          />
        </div>

        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3">
          <CategoryCardHeader
            title="Debt Repayment"
            amount={checkNAN(totalDebt)}
            caption="Available"
            currencySymbol={currencySymbol}
            isloading={isLoading}
          />
          <div className="mt-4">
            <TabFilter
              tabs={debtOverviewTabs}
              activeTab={debtViewTabId}
              onClick={(tab: any) => setDebtViewTabId(tab.id)}
            />
          </div>
          {debtViewTabId === 0 ? (
            <div className="mt-6 flex flex-col">
              {allTimeDebt && allTimeDebt.length > 0
                ? allTimeDebt.map((debt: any, i: any) => {
                  return (
                    <DebtRepaymentCard
                      key={i}
                      category={debt?.name}
                      progressPercentage={
                        isLoading ? 0 : checkNAN(debt?.percentage)
                      }
                      amount={debt?.amount}
                      budgetAmount={debt?.amount}
                      spentAmount={debt?.paid}
                      iconBg="bg-skin-iconPrimary"
                      baseBgColor="#E7EDF3"
                      bgColor="#6F89A5"
                      primaryColor="text-skin-base"
                      fadedColor="text-skin-subtitle"
                      caption="repaid"
                      icon={debt?.icon}
                      onClick={() => {
                        openViewDebtSheet(true);
                        setDebtDetailsData({
                          id: debt?.id,
                          name: debt?.name,
                          amount: debt?.amount,
                          paid: debt?.paid,
                          debtBalance: debt?.debtBalance,
                          percentage: debt?.percentage,
                          icon: debt?.icon,
                          cover: debt?.cover,
                          loanDetails: debt?.loanDetails,
                          recentActivities: debt?.recentActivity,
                        });
                      }}
                    />
                  );
                })
                : null}
            </div>
          ) : (
            <div className="mt-6 flex flex-col">
              {allTimeDebt && debt.length > 0
                ? allTimeDebt.map((debt: any, i: any) => {
                  return (
                    <DebtRepaymentCard
                      key={i}
                      category={debt?.name}
                      progressPercentage={
                        isLoading ? 0 : checkNAN(debt?.percentage)
                      }
                      amount={debt?.amount}
                      budgetAmount={debt?.amount}
                      spentAmount={debt?.paid}
                      iconBg="bg-skin-iconPrimary"
                      baseBgColor="#E7EDF3"
                      bgColor="#6F89A5"
                      primaryColor="text-skin-base"
                      fadedColor="text-skin-subtitle"
                      caption="repaid"
                      icon={debt?.icon}
                      onClick={() => {
                        openViewDebtSheet(true);
                        setDebtDetailsData({
                          id: debt?.id,
                          name: debt?.name,
                          amount: debt?.amount,
                          paid: debt?.paid,
                          debtBalance: debt?.debtBalance,
                          percentage: debt?.percentage,
                          icon: debt?.icon,
                          cover: debt?.cover,
                          loanDetails: debt?.loanDetails,
                          recentActivities: debt?.recentActivity,
                        });
                      }}
                    />
                  );
                })
                : null}
            </div>
          )}
        </div>
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3">
          <CategoryCardHeader
            title="Essentials"
            amount={checkNAN(
              Math.max(0, essentialTotalBudgetAmount - essentialTotalExpenses)
            )}
            caption="Available"
            currencySymbol={currencySymbol}
            isloading={isLoading}
          />
          <div className="mt-6 flex flex-col">
            {essentialBudgets && essentialBudgets.length > 0
              ? essentialBudgets?.map((essential: any, i: any) => {
                return (
                  <CategoryViewCard
                    key={i}
                    category={essential?.name}
                    progressPercentage={
                      isLoading
                        ? 0
                        : checkNAN(
                          (essential?.expenses / essential?.amount) * 100
                        )
                    }
                    icon={essential.category?.emoji}
                    amount={essential?.amount}
                    budgetAmount={essential.amount}
                    spentAmount={isLoading ? 0 : essential?.expenses}
                    iconBg="bg-skin-iconPrimary"
                    baseBgColor="#E7EDF3"
                    bgColor="#00AB9E"
                    primaryColor="text-skin-base"
                    fadedColor="text-skin-subtitle"
                    onClick={() => {
                      editCategoryStore.setViewBudgetSheet(true);
                      setBudgetDetailsData({
                        spentAmount: essential?.expenses,
                        totalBudgetAmount: essential?.amount,
                        progress: checkNAN(
                          (essential?.expenses / essential?.amount) * 100
                        ),
                        category: essential?.name,
                        emoji: essential.category?.emoji,
                        startDate: formattedStartDate,
                        endDate: formattedEndDate,
                        microGoal: essential?.id,
                        progressColor: "#00AB9E",
                      });
                    }}
                  />
                );
              })
              : null}
          </div>
          <div className="flex flex-col">
            {essentialBudgets?.length !==
              categoryStore.categoryBudgets[0]?.data.length &&
              calculateTotalMacroBudget(essentialBudgets, essentialBudgetAmount) >
              0 ? (
              <>
                <div className="flex-grow h-px bg-skin-accent3 my-3"></div>
                <AddBudgetCard
                  fadedColor="text-skin-subtitle"
                  icon="🚀"
                  iconBg="bg-skin-iconPrimary"
                  budgetAmount={checkNAN(
                    macroStore.macroGoals[0]?.amount -
                    categoryStore.categoryBudgets[0]?.total_amount
                  )}
                  onClick={() => navigate("/edit-budgets")}
                />
              </>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3 mb-5">
          <CategoryCardHeader
            title="Wants"
            amount={checkNAN(
              Math.max(0, wantsTotalBudgetAmount - wantsTotalExpenses)
            )}
            caption="Available"
            currencySymbol={currencySymbol}
            isloading={isLoading}
          />
          <div className="mt-6 flex flex-col">
            {wantsBudgets && wantsBudgets.length > 0
              ? wantsBudgets.map((want: any, i: any) => {
                const isGoingOut = want?.name === "Going out";
                return (
                  <CategoryViewCard
                    key={i}
                    category={isGoingOut ? "Entertainment" : want?.name}
                    progressPercentage={
                      isLoading
                        ? 0
                        : checkNAN((want?.expenses / want?.amount) * 100)
                    }
                    icon={isGoingOut ? "🤩" : want.category?.emoji}
                    amount={want?.amount}
                    budgetAmount={want?.amount}
                    spentAmount={isLoading ? 0 : want?.expenses}
                    iconBg="bg-skin-iconPrimary"
                    baseBgColor="#E7EDF3"
                    bgColor="#345DAF"
                    primaryColor="text-skin-base"
                    fadedColor="text-skin-subtitle"
                    onClick={() => {
                      editCategoryStore.setViewBudgetSheet(true);
                      setBudgetDetailsData({
                        spentAmount: want?.expenses,
                        totalBudgetAmount: want?.amount,
                        progress: checkNAN(
                          (want?.expenses / want?.amount) * 100
                        ),
                        category: isGoingOut ? "Entertainment" : want?.name,
                        emoji: isGoingOut ? "🤩" : want.category?.emoji,
                        startDate: formattedStartDate,
                        endDate: formattedEndDate,
                        microGoal: want?.id,
                        progressColor: "#345DAF",
                      });
                    }}
                  />
                );
              })
              : null}
          </div>
          <div className="flex flex-col">
            {wantsBudgets?.length !==
              categoryStore.categoryBudgets[1]?.data.length &&
              calculateTotalMacroBudget(wantsBudgets, wantsBudgetAmount) > 0 ? (
              <>
                <div className="flex-grow h-px bg-skin-accent3 my-3"></div>
                <AddBudgetCard
                  fadedColor="text-skin-subtitle"
                  icon="🚀"
                  iconBg="bg-skin-icon-primary"
                  plusColor="#8490E2"
                  budgetAmount={checkNAN(
                    macroStore.macroGoals[1]?.amount -
                    categoryStore.categoryBudgets[1]?.total_amount
                  )}
                  onClick={() => navigate("/edit-budgets")}
                />
              </>
            ) : null}
          </div>
        </div>
        <BottomSheet
          onDismiss={() => {
            editCategoryStore.setViewBudgetSheet(false);
          }}
          open={editCategoryStore.viewBudgetSheet}
          style={{
            borderRadius: 24,
          }}
          children={
            <ViewBudget
              spentAmount={budgetDetailsData?.spentAmount}
              totalBudgetAmount={budgetDetailsData?.totalBudgetAmount}
              progress={budgetDetailsData?.progress}
              category={budgetDetailsData?.category}
              emoji={budgetDetailsData?.emoji}
              microGoalId={budgetDetailsData.microGoal}
              startDate={budgetDetailsData?.startDate}
              endDate={budgetDetailsData?.endDate}
              progreesBgColor={budgetDetailsData?.progressColor}
              onClick={() => {
                editCategoryStore.setViewBudgetSheet(false);
              }}
            />
          }
          defaultSnap={400}
        ></BottomSheet>
        <BottomSheet
          onDismiss={() => {
            openViewDebtSheet(false);
          }}
          open={viewDebtSheet}
          style={{
            borderRadius: 24,
          }}
          children={
            <ViewDebt
              repaid={debtDetailsData?.paid}
              outStandingDebt={debtDetailsData?.amount}
              outStandingBalance={debtDetailsData?.debtBalance}
              cover={debtDetailsData?.cover}
              progress={debtDetailsData?.percentage}
              name={debtDetailsData?.name}
              loanDetails={debtDetailsData?.loanDetails}
              recentActivities={debtDetailsData?.recentActivities}
              onClick={() => {
                openViewDebtSheet(false);
              }}
            />
          }
          defaultSnap={400}
        ></BottomSheet>
      </div>
    </div>
  );
};
export default BudgetsView;
