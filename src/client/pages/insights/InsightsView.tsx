import { useEffect, useState } from "react";
import NavBarTitle from "../components/NavBarTitle";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import { FiCalendar } from "react-icons/fi";
import { AvailableBudgetContainer } from "../components/budget/AvailableBudgetContainer";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import Toggle from "../components/insights/Toggle";
import { budgetSpendTabs, insightsToggleTabs } from "client/utils/MockData";
import TabFilter from "../components/TabFilter";
import { MySpend } from "../components/insights/MySpend";
import { OthersSpend } from "../components/insights/OthersSpend";
import CashFlowPieChart from "../components/CashFlowPieChart";
import { useNavigate } from "react-router-dom";
import { enrichTransactions, getCashFlow } from "client/api/transactions";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useUserStore from "client/store/userStore";
import useCategoriesStore from "client/store/categoriesStore";
import useMacroGoalsStore from "client/store/macroGoalStore";
import { BottomSheet } from "react-spring-bottom-sheet";
import InsightsFilters from "./InsightsFilters";
import useAccountStore from "client/store/accountStore";
import Accounts from "client/models/Accounts";
import Account from "client/models/Account";
import { useQuery } from "react-query";
import getAccounts from "client/api/account";
import { calculateMacroTypeTotals } from "client/utils/Formatters";
import useMicroGoalsStore from "client/store/microGoalStore";
import useCashflowVariablesStore from "client/store/cashFlowStore";
import CashFlowFilterButton from "../components/insights/CashFlowFilterButton";
import InsightsExpenditureChart from "./insightsChart/InsightsExpenditureChart";
import GraphLegend from "../components/GraphLegend";
import useInsightsStore from "client/store/insightsStore";
import { format } from "date-fns";
import bankIcon from "../../assets/images/budgets-insights/bank.svg";
import InsightsSavingsChart from "./insightsChart/InsightsSavingsChart";

const InsightsView = () => {
  const insightsStoreState = useInsightsStore((state) => state);
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
  // const totalExpenses =
  //   essentialTotalExpenses + wantsTotalExpenses + savingsTotalExpenses;
  const accountStore = useAccountStore((state: any) => state);
  const accounts = accountStore.accounts as Accounts;

  const cashflowVariables =
    useCashflowVariablesStore.getState().cashflowVariables;
  const [essentialsArray, setEssentialsArray] = useState<any[]>([]);
  const [wantsArray, setWantsArray] = useState<any[]>([]);
  const [essentialsData, setEssentialsData] = useState<any[]>([]);
  const [wantsData, setWantsData] = useState<any[]>([]);
  const [savingsData, setSavingsData] = useState<any[]>([]);
  const [savingsArray, setSavingsArray] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchCashFlowData = async () => {
      setIsLoading(true);
      insightsStoreState.setInsightsLoading(true);
      await getCashFlow({
        configuration: config,
        start_date:
          format(insightsStoreState.insightsStartDate, "yyyy-MM-dd") ||
          undefined,
        end_date:
          format(insightsStoreState.insightsEndDate, "yyyy-MM-dd") || undefined,
      })
        .then((data) => {
          const macroTypeDistribution = convertTransactionsToDataSeries(
            data.transactions
          );
          const wantsData = getDataForMacroName(macroTypeDistribution, "Wants");
          const essentialsData = getDataForMacroName(
            macroTypeDistribution,
            "Essentials"
          );
          const savingsData = getDataForMacroName(
            macroTypeDistribution,
            "Savings"
          );
          setEssentialsData(essentialsData);
          setWantsData(wantsData);
          setSavingsData(savingsData);
          const essentialsArray = generateLinearProgression(essentialsData);
          const wantsArray = generateLinearProgression(wantsData);
          const savingsArray = generateLinearProgression(savingsData);
          setEssentialsArray(essentialsArray);
          setWantsArray(wantsArray);
          setSavingsArray(savingsArray);
          setCashFlowData(data);
        })
        .finally(() => {
          insightsStoreState.setInsightsLoading(false);
          setIsLoading(false);
        })
        .catch((error) => {
          insightsStoreState.setInsightsLoading(false);
          setIsLoading(false);
          console.error("Error fetching data:", error);
        });
    };
    fetchCashFlowData()
      .then(() => {
        insightsStoreState.setInsightsLoading(false);
        setIsLoading(false);
      })
      .catch((error) => {
        insightsStoreState.setInsightsLoading(false);
        setIsLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [
    insightsStoreState.insightsStartDate,
    insightsStoreState.insightsEndDate,
  ]);
  const [toggleTabId, setToggleTabId] = useState(0);
  const [budgetSpendTabId, setBudgetSpendTabId] = useState(0);
  const navigate = useNavigate();
  const [filter, openFilter] = useState(false);
  const filterAccountBy = useAccountStore((state: any) => state.filterBy);
  const filteredAccount = useAccountStore(
    (state: any) => state.filter
  ) as Account;
  const { data: fetchedAccounts } = useQuery(
    "fetch-accounts",
    () =>
      getAccounts(config).then((accounts) => {
        accountStore.init(accounts || []);
      }),
    { refetchOnWindowFocus: false }
  );
  const microGoals = useMicroGoalsStore((state) => state.microGoals);
  const macroTypeTotals = calculateMacroTypeTotals(microGoals);
  const {
    Wants: wantsTotal = 0,
    Essentials: essentialsTotal = 0,
    Savings: savingsTotal = 0,
  } = macroTypeTotals.reduce((acc, { macroType, total }) => {
    acc[macroType] = total || 0;
    return acc;
  }, {} as any);

  useEffect(() => {
    enrichTransactions({ configuration: config });
  }, []);

  const totalExpenses = wantsTotal + essentialsTotal + savingsTotal;
  const closeBottomSheet = () => {
    openFilter(false);
  };
  const debtArray = [
    {
      x: "2024-05-16",
      y: 25000,
    },
    {
      x: "2024-05-15",
      y: 30000,
    },
    {
      x: "2024-05-14",
      y: 50000,
    },
    {
      x: "2024-05-13",
      y: 50000,
    },
    {
      x: "2024-05-12",
      y: 80992,
    },
    {
      x: "2024-05-11",
      y: 85000,
    },
    {
      x: "2024-05-10",
      y: 85992,
    },
  ];
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
              {/* <div
                className="h-6 w-6 rounded-full flex justify-center items-center"
                onClick={() => openFilter(true)}
              >
                <FiFilter color="#101010" size="1.5rem" />
              </div> */}
            </div>
          }
        />
      </div>
      <div className="flex-grow h-px bg-skin-accent3"></div>
      <div className="py-3 flex flex-wrap items-center mx-3.5">
        <CashFlowFilterButton
          label={insightsStoreState.insightsActiveInstitutionName}
          icon={<img src={bankIcon} alt="" />}
          key={`All accounts`}
          isActive={false}
          onClick={() => openFilter(true)}
        />
        <CashFlowFilterButton
          label={insightsStoreState.insightsDateFilterName}
          icon={<FiCalendar color="#101010" />}
          key={`This month`}
          isActive={false}
          onClick={() => openFilter(true)}
        />
      </div>
      <div className="flex flex-col mt-2 mx-3.5">
        <div className="flex flex-row items-center justify-between mr-5">
          {toggleTabId == 0 ? (
            <AvailableBudgetContainer
              amount={
                essentialsData.reduce((a: number, b: any) => a + b.y, 0) +
                  wantsData.reduce((a: number, b: any) => a + b.y, 0) ?? 0
              }
              subtitle="Current total spending"
              currencySymbol={currencySymbol}
            />
          ) : (
            <AvailableBudgetContainer
              amount={
                25000
                // savingsData.reduce((a: number, b: any) => a + b.y, 0) ?? 0
              }
              subtitle="Total debt"
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
            <div className="flex flex-col w-full justify-center">
              <InsightsExpenditureChart
                currencySymbol={currencySymbol}
                essentialsArray={
                  insightsStoreState.insightsLoading ? [] : essentialsArray
                }
                wantsArray={
                  insightsStoreState.insightsLoading ? [] : wantsArray
                }
                isLoading={insightsStoreState.insightsLoading}
              />
              <div
                className="space-x-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0px 10px 2px 10px",
                  gap: "1.25rem",
                }}
              >
                <GraphLegend color="#00AB9E" label="Essentials spend" />
                <GraphLegend color="#345DAF" label="Wants spend" />
                <GraphLegend color="#101010" label="Total spend" />
              </div>
            </div>
          ) : (
            // <SavingsBarGraph
            //   previousMonthSavings={previousSavingsTotalExpenses}
            //   currentMonthSavings={savingsTotal}
            //   savingsTarget={savingsTotalBudgetAmount}
            //   budgetLimit={userStore.user.income}
            //   currentMonthDate={
            //     insightsStoreState.insightsStartDate ?? new Date()
            //   }
            // />
            <div className="flex flex-col w-full justify-center">
              <InsightsSavingsChart
                currencySymbol={currencySymbol}
                savingsArray={
                  insightsStoreState.insightsLoading ? [] : debtArray
                }
                isLoading={insightsStoreState.insightsLoading}
              />
              <div
                className="space-x-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0px 10px 2px 10px",
                  gap: "1.25rem",
                }}
              >
                <GraphLegend color="#97449E" label="Total debt" />
              </div>
            </div>
          )}
        </div>
        {/* <div className="shadow-card px-4 py-6 mb-10 rounded-lg mt-3">
          <div className="text-base text-skin-base font-medium tracking-title font-custom">
            debt analysis snapshot
          </div>
          <div className="font-primary text-skin-base text-sm tracking-listtile_subtitle mt-1">
            🌈 A brighter financial future ahead! You've cut down your debt significantly. Keep going!
          </div>
          <DebtChart mortgage={3000000} autoLoan={1500000} creditCard={2215992} totalDebt={6715992} />
        </div> */}
        <div className="flex flex-row">
          <CashFlowPieChart
            dimensions={190}
            doughnutThickness={14}
            values={{
              moneyIn: insightsStoreState.insightsLoading
                ? 0
                : cashFlowData?.total_credit || 0,
              moneyOut: insightsStoreState.insightsLoading
                ? 0
                : cashFlowData?.total_debit || 0,
            }}
            percentageChange={
              insightsStoreState.insightsLoading
                ? 0
                : cashFlowData?.total_change || 0
            }
            isLoading={isLoading}
          />
        </div>
        <div className="shadow-card px-4 py-6 mb-10 rounded-lg mt-3">
          <div className="text-base text-skin-base font-medium tracking-title font-custom">
            Budget spend
          </div>
          <div className="mt-4.5">
            <TabFilter
              tabs={budgetSpendTabs}
              activeTab={budgetSpendTabId}
              onClick={(tab: any) => setBudgetSpendTabId(tab.id)}
            />
          </div>
          <div className="flex flex-row mt-6 mx-2 border-skin-border">
            {budgetSpendTabId === 0 ? (
              <MySpend
                spent={totalExpenses}
                budget={totalBudgetAmount}
                wantsSpend={wantsTotal ?? 0}
                savingsSpend={savingsTotal ?? 0}
                essentialsSpend={essentialsTotal ?? 0}
                unallocatedSpend={userStore.user.income - totalBudgetAmount}
                startDate={
                  format(insightsStoreState.insightsStartDate, "yyyy-MM-dd") ??
                  undefined
                }
                endDate={
                  format(insightsStoreState.insightsEndDate, "yyyy-MM-dd") ??
                  undefined
                }
                isLoading={isLoading}
              />
            ) : (
              <OthersSpend
                spentBudget={totalExpenses}
                plannedBudget={totalBudgetAmount}
                wantsSpend={wantsTotal ?? 0}
                savingsSpend={savingsTotal ?? 0}
                essentialsSpend={essentialsTotal ?? 0}
                unallocatedSpend={0}
                startDate={
                  format(insightsStoreState.insightsStartDate, "yyyy-MM-dd") ??
                  undefined
                }
                endDate={
                  format(insightsStoreState.insightsEndDate, "yyyy-MM-dd") ??
                  undefined
                }
              />
            )}
          </div>
        </div>
      </div>
      <div className="mb-5">
        <BottomSheet
          onDismiss={() => {
            openFilter(false);
          }}
          open={filter}
          style={{
            borderRadius: 24,
          }}
          children={
            <InsightsFilters
              accounts={accounts}
              activeAccount={filteredAccount}
              onClick={(account: Account) => {
                filterAccountBy(account);
              }}
              closeBottomSheet={closeBottomSheet}
            />
          }
          defaultSnap={400}
        ></BottomSheet>
      </div>
    </div>
  );
};
export default InsightsView;

interface Transaction {
  total_amount: number;
  transacted_at: string;
  macro_name: string;
  type: string;
}

interface DataPoint {
  x: string;
  y: number;
}

interface DataSeries {
  [macro_name: string]: DataPoint[];
}

function convertTransactionsToDataSeries(
  transactions: Transaction[]
): DataSeries {
  const dataSeries: DataSeries = {};

  transactions.forEach((transaction) => {
    if (!dataSeries[transaction.macro_name]) {
      dataSeries[transaction.macro_name] = [];
    }
    if (transaction.type === "debit") {
      dataSeries[transaction.macro_name].push({
        x: transaction.transacted_at,
        y: transaction.total_amount,
      });
    }
  });

  return dataSeries;
}

function getDataForMacroName(data: DataSeries, macroName: string): DataPoint[] {
  return (
    data[macroName]?.sort(
      (a, b) => new Date(a.x).getTime() - new Date(b.x).getTime()
    ) || []
  );
}

function generateLinearProgression(data: DataPoint[]): DataPoint[] {
  try {
    // Check if all data points are in the same month
    const sameMonth = data.every(
      (point, index, array) =>
        index === 0 || point.x.slice(0, 7) === array[index - 1].x.slice(0, 7)
    );

    // If not all data points are in the same month, return the original array
    if (!sameMonth) {
      return data;
    }

    // Calculate linear progression within the same month
    const linearProgression: DataPoint[] = [];
    let sum = 0;
    let currentDate = new Date(data[0]?.x);

    for (let i = 0; i < data.length; i++) {
      const currentPoint = data[i];
      while (
        new Date(currentPoint?.x).toISOString().slice(0, 10) !==
        currentDate.toISOString().slice(0, 10)
      ) {
        linearProgression.unshift({
          x: currentDate.toISOString().slice(0, 10),
          y: sum,
        });
        currentDate.setDate(currentDate.getDate() + 1); // Decrement the date
      }
      sum += currentPoint.y;
      linearProgression.unshift({ x: currentPoint?.x, y: sum });
      currentDate.setDate(currentDate.getDate() + 1); // Decrement the date
    }

    return linearProgression;
  } catch (error) {
    return data;
  }
}
