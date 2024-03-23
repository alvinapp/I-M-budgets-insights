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
import { calculateSpending, checkNAN } from "client/utils/Formatters";
import useMacroGoalsStore from "client/store/macroGoalStore";
import { getMacros } from "client/api/macros";
import settings from "client/assets/images/budgets-insights/Settings.svg";
import { AddBudgetCard } from "../components/budget/AddBudgetCard";
import useMacrosStore from "client/store/macroGoalStore";
import { MicroGoalTotal, fetchMicroGoalTotals } from "client/api/micros";
import useMicroGoalsStore from "client/store/microGoalStore";
import { SavingsSettingCard } from "../components/budget/SavingsSettingCard";
import SavingsCategoryViewCard from "../components/budget/SavingsCategoryViewCard";
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
import { MicroGoal } from "client/models/MicroGoal";
import ViewSavingsBudget from "./ViewSavingsBudget";
const BudgetsView = () => {
  const navigate = useNavigate();
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const categoryStore = useCategoriesStore((state: any) => state);
  const macroGoalStore = useMacroGoalsStore((state: any) => state);
  const macroData = macroGoalStore.macroGoals ?? [];
  const essentialMacro = macroData[0];
  const essentialBudgetAmount = essentialMacro?.amount;
  const setMicroGoals = useMicroGoalsStore((state) => state.setMicroGoals);
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
  const navigateToInsightsView = () => {
    navigate(
      `/insights-view?startDate=${formattedStartDate}&endDate=${formattedEndDate}`
    );
  };
  const fetchData = async (
    queryKey: string,
    fetchFunction: {
      ({
        configuration,
        start_date,
        end_date,
      }: {
        configuration: IConfig;
        start_date?: string | undefined;
        end_date?: string | undefined;
      }): Promise<any>;
      ({
        configuration,
        start_date,
        end_date,
      }: {
        configuration: IConfig;
        start_date?: string | undefined;
        end_date?: string | undefined;
      }): Promise<MicroGoalTotal[]>;
      ({
        configuration,
        start_date,
        end_date,
      }: {
        configuration: IConfig;
        start_date?: string | undefined;
        end_date?: string | undefined;
      }): Promise<any>;
      ({
        configuration,
        start_date,
        end_date,
      }: {
        configuration: IConfig;
        start_date?: string | undefined;
        end_date?: string | undefined;
      }): Promise<MicroGoalTotal[]>;
      (arg0: { configuration: any; start_date: any; end_date: any }): any;
    },
    config: IConfig,
    formattedStartDate: string,
    formattedEndDate: string,
    setDataCallback: {
      (data: MicroGoal[]): void;
      (data: MicroGoal[]): void;
      (arg0: any): void;
    }
  ) => {
    try {
      const result = await fetchFunction({
        configuration: config,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      });
      setDataCallback(result);
    } catch (error) {}
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

  const { isFetching: fetchingMacros } = useQuery(
    "macros",
    () =>
      fetchData(
        "macros",
        fetchMicroGoalTotals,
        config,
        formattedStartDate,
        formattedEndDate,
        setMicroGoals
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
    } catch (error) {}
  };
  useEffect(() => {
    const fetchDataAndUpdateMacroGoals = async () => {
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
        fetchData(
          "macros",
          fetchMicroGoalTotals,
          config,
          formattedStartDate,
          formattedEndDate,
          setMicroGoals
        ),
        fetchMacroGoalsData(),
      ]);
      setIsLoading(false);
    };
    fetchDataAndUpdateMacroGoals();
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
  const [viewSavingsBudgetSheet, openViewSavingsBudgetSheet] = useState(false);
  const budgetDetails = {
    spentAmount: 0,
    totalBudgetAmount: 0,
    progress: 0,
    category: "",
    emoji: "",
    startDate: formattedStartDate,
    endDate: formattedEndDate,
    microGoal: 0,
  };
  const savingsGoalDetails = {
    spentAmount: 0,
    totalBudgetAmount: 0,
    progress: 0,
    category: "",
    emoji: "",
    startDate: formattedStartDate,
    endDate: formattedEndDate,
    microGoal: 0,
  };
  const [budgetDetailsData, setBudgetDetailsData] = useState(budgetDetails);
  const [savingsGoalData, setSavingsGoalData] = useState(savingsGoalDetails);
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
              onDateRangeSelect(date);
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
                  wantsTotalBudgetAmount -
                  (essentialTotalExpenses + wantsTotalExpenses)
              )
            )}
            subtitle="Available budget"
            currencySymbol={currencySymbol}
          />
          <div className="flex flex-col justify-center">
            <InsightsButton onClick={() => navigateToInsightsView()} />
          </div>
        </div>
        <div className="mt-11">
          <TooltipProgressBar
            progressPercent={expenditureProgress.expenditureProgress}
            progressTooltip={expenditureProgress.expectedExpenditureProgress}
            activeMonth={startDate}
            showProgressTooltip={
              currentMonth.getMonth() === new Date().getMonth()
            }
          />
        </div>
        <div className="mt-2">
          <MacroProgressBarsContainer
            ratios={`${categoryStore.categoryBudgets[0]?.percentage}/${categoryStore.categoryBudgets[1]?.percentage}/${categoryStore.categoryBudgets[2]?.percentage}`}
            budgetAmount={{
              wantsBudget: essentialTotalExpenses,
              essentialsBudget: wantsTotalExpenses,
              savingsBudget: savingsTotalExpenses,
            }}
            progressPercentage={{
              wantsProgress:
                checkNAN(essentialTotalExpenses / essentialTotalBudgetAmount) *
                100,
              essentialsProgress:
                checkNAN(wantsTotalExpenses / wantsTotalBudgetAmount) * 100,
              savingsProgress:
                checkNAN(savingsTotalExpenses / savingsTotalBudgetAmount) * 100,
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
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-5">
          <CategoryCardHeader
            title="Essentials"
            amount={checkNAN(
              Math.max(0, essentialTotalBudgetAmount - essentialTotalExpenses)
            )}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {essentialBudgets && essentialBudgets.length > 0
              ? essentialBudgets?.map((essential: any, i: any) => {
                  return (
                    <CategoryViewCard
                      key={i}
                      category={essential?.name}
                      progressPercentage={checkNAN(
                        (essential?.expenses / essential?.amount) * 100
                      )}
                      icon={essential.category?.emoji}
                      amount={essential?.amount}
                      budgetAmount={essential.amount}
                      spentAmount={essential?.expenses}
                      iconBg="bg-skin-iconPrimary"
                      baseBgColor="#E7EDF3"
                      bgColor="#0131A1"
                      primaryColor="text-skin-base"
                      fadedColor="text-skin-subtitle"
                      onClick={() => {
                        openViewBudgetSheet(true);
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
                        });
                      }}
                    />
                  );
                })
              : null}
          </div>
          <div className="flex flex-col">
            {essentialBudgets?.length !==
            categoryStore.categoryBudgets[0]?.data.length ? (
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
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3">
          <CategoryCardHeader
            title="Wants"
            amount={checkNAN(
              Math.max(0, wantsTotalBudgetAmount - wantsTotalExpenses)
            )}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {wantsBudgets && wantsBudgets.length > 0
              ? wantsBudgets.map((want: any, i: any) => {
                  return (
                    <CategoryViewCard
                      key={i}
                      category={want?.name}
                      progressPercentage={checkNAN(
                        (want?.expenses / want?.amount) * 100
                      )}
                      icon={want.category?.emoji}
                      amount={want?.amount}
                      budgetAmount={want?.amount}
                      spentAmount={want?.expenses}
                      iconBg="bg-skin-iconPrimary"
                      baseBgColor="#E7EDF3"
                      bgColor="#6F89A5"
                      primaryColor="text-skin-base"
                      fadedColor="text-skin-subtitle"
                      onClick={() => {
                        openViewBudgetSheet(true);
                        setBudgetDetailsData({
                          spentAmount: want?.expenses,
                          totalBudgetAmount: want?.amount,
                          progress: checkNAN(
                            (want?.expenses / want?.amount) * 100
                          ),
                          category: want?.name,
                          emoji: want.category?.emoji,
                          startDate: formattedStartDate,
                          endDate: formattedEndDate,
                          microGoal: want?.id,
                        });
                      }}
                    />
                  );
                })
              : null}
          </div>
          <div className="flex flex-col">
            {wantsBudgets?.length !==
            categoryStore.categoryBudgets[1]?.data.length ? (
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
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3 mb-8">
          <CategoryCardHeader
            title="Savings"
            amount={Math.max(
              checkNAN(essentialBudgetAmount * 3 - savingsTotalExpenses),
              0
            )}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {categoryStore.categoryBudgets[2]?.data &&
            categoryStore.categoryBudgets[2]?.data.length > 0 ? (
              categoryStore.categoryBudgets[2]?.data.map(
                (savings: any, i: any) => {
                  return (
                    <SavingsCategoryViewCard
                      key={i}
                      category={
                        savings?.name === "Emergency fund"
                          ? "Rainy day fund"
                          : ""
                      }
                      progressPercentage={checkNAN(
                        Math.min(
                          (savings.expenses / savings?.amount) * 100,
                          100
                        )
                      )}
                      icon="https://images.unsplash.com/photo-1508698308649-689249ec5455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDcxNTg0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                      amount={savings?.amount}
                      budgetAmount={essentialBudgetAmount * 3}
                      spentAmount={savings.expenses}
                      iconBg="bg-skin-iconPrimary"
                      baseBgColor="#E7EDF3"
                      bgColor="#84C1B2"
                      primaryColor="text-skin-base"
                      fadedColor="text-skin-subtitle"
                      caption="saved"
                      onClick={() => {
                        openViewSavingsBudgetSheet(true);
                        setSavingsGoalData({
                          spentAmount: savings?.expenses,
                          totalBudgetAmount: savings?.amount,
                          progress: checkNAN(
                            (savings?.expenses / savings?.amount) * 100
                          ),
                          category: savings?.name,
                          emoji: savings.category?.emoji,
                          startDate: formattedStartDate,
                          endDate: formattedEndDate,
                          microGoal: savings?.id,
                        });
                      }}
                    />
                  );
                }
              )
            ) : (
              <SavingsSettingCard
                emoji="https://images.unsplash.com/photo-1508698308649-689249ec5455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDcxNTg0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                goal="Create a Rainy day fund goal"
                onClick={() => {
                  navigate("/edit-budgets");
                }}
              />
            )}
          </div>
        </div>
        <BottomSheet
          onDismiss={() => {
            openViewBudgetSheet(false);
          }}
          open={viewBudgetSheet}
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
              onClick={() => {
                openViewBudgetSheet(false);
              }}
            />
          }
          defaultSnap={400}
        ></BottomSheet>
        <BottomSheet
          onDismiss={() => {
            openViewSavingsBudgetSheet(false);
          }}
          open={viewSavingsBudgetSheet}
          style={{
            borderRadius: 24,
          }}
          children={
            <ViewSavingsBudget
              savedAmount={savingsGoalData?.spentAmount}
              targetAmount={essentialBudgetAmount * 3}
              progress={savingsGoalData?.progress}
              category={savingsGoalData?.category}
              emoji={savingsGoalData?.emoji}
              microGoalId={savingsGoalData.microGoal}
              startDate={savingsGoalData?.startDate}
              endDate={savingsGoalData?.endDate}
              onClick={() => {
                openViewSavingsBudgetSheet(false);
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
