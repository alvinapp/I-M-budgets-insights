import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import CloseButton from "../components/CloseButton";
import NavBarTitle from "../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import { FiPieChart, FiSettings } from "react-icons/fi";
import MacroProgressBarsContainer from "../components/MacroProgressBarContainer";
import { AvailableBudgetContainer } from "../components/budget/AvailableBudgetContainer";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { InsightsButton } from "../components/budget/InsightsButton";
import { CategoriesIconLabel } from "../components/budget/CategoriesIconLabel";
import { CategoryCardHeader } from "../components/budget/CategoryCardHeader";
import { essentials, savings, wants } from "client/utils/MockData";
import { CategoryViewCard } from "../components/budget/CategoryViewCard";
import TooltipProgressBar from "../components/ToolTipProgressBar/ToolTipProgressBar";
import { HorizontalDateToggle } from "../components/budget/HorizontalDateToggle";
import { useQuery } from "react-query";
import { fetchBudgetCategories } from "client/api/budget";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import getToken from "client/api/token";
import useUserStore from "client/store/userStore";
import { showCustomToast } from "client/utils/Toast";
import useCategoriesStore from "client/store/categoriesStore";
import { calculateSpending, checkNAN } from "client/utils/Formatters";
import useMacroGoalsStore from "client/store/macroGoalStore";
import { getMacros } from "client/api/macros";
import settings from "client/assets/images/budgets-insights/Settings.svg";
const BudgetsView = () => {
  const navigate = useNavigate();
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const categoryStore = useCategoriesStore((state: any) => state);
  const macroGoalStore = useMacroGoalsStore((state: any) => state);
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  //Remove this query for token and make sure its on the first page of this package
  // const { data } = useQuery(
  //   ["token"],
  //   () =>
  //     getToken(config).then((res) => {
  //       if (typeof res.user !== "undefined") {
  //         setUser(res.user);
  //         setToken(res.token);
  //       } else {
  //         navigate("/");
  //         showCustomToast({ message: "The sdk key is invalid" });
  //       }
  //     }),
  //   { refetchOnWindowFocus: false }
  // );
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Calculate the start_date as the first day of the current month
  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const formattedStartDate = `${startOfMonth.getFullYear()}-${(startOfMonth.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-01`;

  // Calculate the end_date as the last day of the current month
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const formattedEndDate = `${endOfMonth.getFullYear()}-${(endOfMonth.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${endOfMonth.getDate()}`;

  const { isFetching: fetchingEssentialsBudget, refetch } = useQuery(
    "essentials-budgets",
    () =>
      fetchBudgetCategories({
        configuration: config,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      }).then((result) => {
        categoryStore.setCategoryBudgets(result);
      }),
    { enabled: !!config.token }
  );

  useEffect(() => {
    refetch();
  }, [currentMonth]);
  useEffect(() => {
    const fetchMacroGoalsData = async () => {
      const { data } = await getMacros({ configuration: config });
      const result = data?.map((item: any) => item.goals).flat();
      macroGoalStore.setMacros(result && result.length > 0 ? result : []);
    };
    fetchMacroGoalsData();
  }, [config]);

  const {
    essentialTotalBudgetAmount,
    wantsTotalBudgetAmount,
    savingsTotalBudgetAmount,
    essentialTotalExpenses,
    wantsTotalExpenses,
    savingsTotalExpenses,
    totalBudget,
    totalExpenditure,
    expenditureProgress
  } = useMemo(() => {
    const essentialTotalBudgetAmount = categoryStore.categoryBudgets[0]?.total_amount;
    const wantsTotalBudgetAmount = categoryStore.categoryBudgets[1]?.total_amount;
    const savingsTotalBudgetAmount = categoryStore.categoryBudgets[2]?.total_amount;
    const essentialTotalExpenses = categoryStore.categoryBudgets[0]?.total_expense;
    const wantsTotalExpenses = categoryStore.categoryBudgets[1]?.total_expense;
    const savingsTotalExpenses = categoryStore.categoryBudgets[2]?.total_expense;

    const totalBudget = essentialTotalBudgetAmount + wantsTotalBudgetAmount + savingsTotalBudgetAmount;
    const totalExpenditure = essentialTotalExpenses + wantsTotalExpenses + savingsTotalExpenses;

    return {
      essentialTotalBudgetAmount,
      wantsTotalBudgetAmount,
      savingsTotalBudgetAmount,
      essentialTotalExpenses,
      wantsTotalExpenses,
      savingsTotalExpenses,
      totalBudget,
      totalExpenditure,
      expenditureProgress: calculateSpending(totalExpenditure, totalBudget)
    };
  }, [categoryStore.categoryBudgets]);
  const handlePreviousMonthClick = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(currentMonth.getMonth() - 1);

    setCurrentMonth(previousMonth);
  };

  const handleNextMonthClick = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);

    setCurrentMonth(nextMonth);
  };

  // Format the current month for display
  const month = currentMonth.toLocaleString("default", { month: "long" });
  return (
    <div className="h-screen w-screen">
      <div className="px-3.5 flex flex-col">
        <NavBar
          children={
            <div className="flex flex-row items-center justify-between mt-6">
              <NavBarTitle title="Budget" fontSize="text-2xl" />
              <div className="h-6 w-6 rounded-full" onClick={() => navigate('/edit-budgets')}>
                <img src={settings} />
              </div>
            </div>
          }
        />
        <div className="mt-6">
          <HorizontalDateToggle
            onPreviousMonthClick={handlePreviousMonthClick}
            onNextMonthClick={handleNextMonthClick}
            monthName={month}
          />
        </div>
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-3"></div>
      <div className="flex flex-col mx-3.5  mt-8">
        <div className="flex flex-row items-center justify-between">
          <AvailableBudgetContainer
            amount={checkNAN(
              (essentialTotalBudgetAmount + wantsTotalBudgetAmount) -
              (essentialTotalExpenses + wantsTotalExpenses)
            )}
            subtitle="Available budget spend"
            currencySymbol={currencySymbol}
          />
          <div className="flex flex-col justify-center">
            <InsightsButton onClick={() => navigate("/insights-view")} />
          </div>
        </div>
        <div className="mt-11">
          <TooltipProgressBar progressPercent={expenditureProgress.expenditureProgress} progressTooltip={expenditureProgress.expectedExpenditureProgress} activeMonth={currentMonth} />
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
          />
        </div>
        <div className="mt-8">
          <CategoriesIconLabel
            label="Categories"
            icon={<FiPieChart color="#4C4C4C" />}
            iconBg="bg-skin-accent2"
          />
        </div>
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-5">
          <CategoryCardHeader
            title="Essentials"
            amount={checkNAN(essentialTotalBudgetAmount - essentialTotalExpenses)}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {categoryStore.categoryBudgets[0]?.data &&
              categoryStore.categoryBudgets[0]?.data.length > 0
              ? categoryStore.categoryBudgets[0]?.data.map(
                (essential: any, i: any) => {
                  return (
                    <CategoryViewCard
                      key={i}
                      category={essential?.name}
                      progressPercentage={essential?.expenses / essential?.amount * 100}
                      icon={essential.category?.emoji}
                      amount={essential?.amount}
                      budgetAmount={essential.amount}
                      spentAmount={essential?.expenses}
                      iconBg="bg-skin-secondaryWithOpacity"
                      baseBgColor="#D0DDEA"
                      bgColor="#056489"
                      primaryColor="text-skin-primary"
                      fadedColor="text-skin-neutral"
                    />
                  );
                }
              )
              : null}
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3">
          <CategoryCardHeader
            title="Wants"
            amount={checkNAN(wantsTotalBudgetAmount - wantsTotalExpenses)}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {categoryStore.categoryBudgets[1]?.data &&
              categoryStore.categoryBudgets[1]?.data.length > 0
              ? categoryStore.categoryBudgets[1]?.data.map(
                (want: any, i: any) => {
                  return (
                    <CategoryViewCard
                      key={i}
                      category={want?.name}
                      progressPercentage={want?.expenses / want?.amount * 100}
                      icon={want.category?.emoji}
                      amount={want?.amount}
                      budgetAmount={want?.amount}
                      spentAmount={want?.expenses}
                      iconBg="bg-skin-secondary3WithOpacity"
                      baseBgColor="#E8E3DC"
                      bgColor="#A28D72"
                      primaryColor="text-skin-alvinBrown"
                      fadedColor="text-skin-alvinBrownFaded"
                    />
                  );
                }
              )
              : null}
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3 mb-8">
          <CategoryCardHeader
            title="Savings"
            amount={checkNAN(savingsTotalExpenses)}
            caption="Saved"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {categoryStore.categoryBudgets[2]?.data &&
              categoryStore.categoryBudgets[2]?.data.length > 0
              ? categoryStore.categoryBudgets[2]?.data.map(
                (savings: any, i: any) => {
                  return (
                    <CategoryViewCard
                      key={i}
                      category={savings?.name}
                      progressPercentage={savings.expenses / savings?.amount * 100}
                      icon={savings.category?.emoji}
                      amount={savings?.amount}
                      budgetAmount={savings.amount}
                      spentAmount={savings.expenses}
                      iconBg="bg-skin-secondaryWithOpacity"
                      baseBgColor="#D6EAD4"
                      bgColor="#33982A"
                      primaryColor="text-skin-success"
                      fadedColor="text-skin-successSecondary"
                      caption="saved"
                    />
                  );
                }
              )
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BudgetsView;
