import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import NavBarTitle from "../../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getCategories } from "client/api/categories";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useCategoriesStore from "client/store/categoriesStore";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { fetchMacros, saveBudget } from "client/api/budget";
import getToken from "client/api/token";
import { showCustomToast } from "client/utils/Toast";
import useUserStore from "client/store/userStore";
import { loanRepaymentDebt } from "client/utils/MockData";
import loanIcon from "client/assets/images/budgets-insights/Loan-icon.png";
import CloseButton from "client/pages/components/CloseButton";
import DebtDisplayCard from "client/pages/components/DebtDisplayCard";
import MainButton from "client/pages/components/MainButton";
import { LoanRepaymentCategoryCard } from "client/pages/components/LoanRepaymentCategoryCard";
import { useLoanRepaymentPromptStore } from "client/store/bottomSheetStore";
import { fetchLoanRepaymentAdjustments } from "client/api/micros";
const LoanRepaymentPrompt = () => {
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const categoriesStore = useCategoriesStore((state: any) => state);
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const userStore = useUserStore((state: any) => state);
  const setUser = userStore.setUser;
  const { data } = useQuery(
    ["token"],
    () =>
      getToken(configurations).then((res) => {
        if (typeof res.user !== "undefined") {
          setUser(res.user);
          setToken(res.token);
        } else {
          navigate("/");
          showCustomToast({ message: "The sdk key is invalid" });
        }
      }),
    { refetchOnWindowFocus: false }
  );
  const mapCategoryToData = (category: any, index: number) => [
    `data${index}`,
    {
      amount: category?.amount || 0,
      contribution_amount: 0,
      percentage: 0,
      category_id: category?.category.id,
      name: category?.name,
      pseudo_name: category?.name + " " + category?.category.emoji,
      extern_id: category?.category.id,
      order: 0,
      contribution_at: "",
      is_contribute_customized: true,
    },
  ];
  const { isFetching: fetchingCategories } = useQuery(
    "fetch-categories",
    () =>
      getCategories({ configuration: configurations }).then((result) => {
        categoriesStore.setCategories(result);

        const mapper = (type: string) => (category: any, index: number) => {
          category.macro_type?.name === type
            ? mapCategoryToData(category, index)
            : null;
        };

        const essentialsData = result.map(mapper("Essentials")).filter(Boolean);
        const wantsData = result.map(mapper("Wants")).filter(Boolean);

        setEssentialsMapState(new Map(essentialsData));
        setWantsMapState(new Map(wantsData));
      }),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    const initializeMapState = (index: number, setStateFn: Function) => {
      if (
        categoriesStore.categoryBudgets &&
        categoriesStore.categoryBudgets.length > index
      ) {
        const initialData =
          categoriesStore.categoryBudgets[index].data.map(mapCategoryToData);
        setStateFn(new Map(initialData));
      }
    };

    initializeMapState(0, setEssentialsMapState);
    initializeMapState(1, setWantsMapState);
  }, [categoriesStore.categoryBudgets]);

  const { isFetching: fetchingMacros } = useQuery(
    "fetch-macros",
    () =>
      fetchMacros({ configuration: configurations }).then((res) => {
        categoriesStore.setMacros(res);
      }),
    { refetchOnWindowFocus: false, enabled: !!configurations.token }
  );
  const navigate = useNavigate();
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const [essentialsMapState, setEssentialsMapState] = useState(new Map());
  const [wantsMapState, setWantsMapState] = useState(new Map());
  const updateCategoriesMap = (i: number, data: any) => {
    setEssentialsMapState((map) => new Map(map.set(`data${i}`, data)));
  };
  //essentials
  const essentialsList = Array.from(essentialsMapState, ([key, value]) => {
    return { [key]: value };
  }).map((element: any, i: number) => {
    return element[`data${i}`];
  });

  //wants
  const wantsList = Array.from(wantsMapState, ([key, value]) => {
    return { [key]: value };
  }).map((element: any, i: number) => {
    return element[`data${i}`];
  });
  const macroData = categoriesStore.macros?.data ?? [];
  const essentialMacro = macroData[0];
  const essentialGoals = essentialMacro?.goals ?? [];
  const essentialBudgetAmount = essentialGoals[0]?.amount ?? "";
  const [allocatedCategories, setAllocatedCategories] = useState(
    typeof categoriesStore.categoryBudgets[0] !== undefined
      ? categoriesStore?.categoryBudgets[0].total_amount
      : 0
  );

  const { isFetching: savingBudgetDetails, refetch: saveBudgetInfo } = useQuery(
    "save-budget",
    () => {
      const macrotypeEntries = [];

      if (essentialsList.some((item) => Object.keys(item).length > 0)) {
        macrotypeEntries.push({
          macrotype_name: "Essentials",
          data: essentialsList,
        });
      }

      if (wantsList.some((item) => Object.keys(item).length > 0)) {
        macrotypeEntries.push({
          macrotype_name: "Wants",
          data: wantsList,
        });
      }

      return saveBudget({
        configuration: configurations,
        data: {
          macrotype_entries: macrotypeEntries,
        },
      });
    },
    { refetchOnWindowFocus: false, enabled: false }
  );
  const essentials = categoriesStore.categoryBudgets[0]?.data;
  const totalCategories = essentials.concat(
    categoriesStore.categoryBudgets[1]?.data
  );
  const bottomSheet = useLoanRepaymentPromptStore((state: any) => state);
  const { isFetching: fetchingLoan } = useQuery(
    "loan-repayment",
    () =>
      fetchLoanRepaymentAdjustments({
        configuration: configurations,
        data: {
          change_amount: -10000,
          operation: "decrease",
        },
      }).then((result: any) => {
        console.log("LOAN REPAYMENT CATEGORIES", result);
        categoriesStore.setLoanCategoryBudgets(result);
      }),
    { refetchOnWindowFocus: false }
  );
  const totalChangeAmount = loanRepaymentDebt.reduce(
    (acc, curr) => acc + curr.change,
    0
  );
  console.log("TOTAL CHANGE AMOUNT", totalChangeAmount);
  return (
    <div className="w-screen">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-3 pb-2 pr-3.5">
            <CloseButton
              onClick={() => {
                bottomSheet.setRepaymentLoanPromptSheet(false);
              }}
            />
            <NavBarTitle title="Review & Adjust Budget" />
            <div
              className="h-6 w-6 rounded-full flex items-center justify-center"
              // onClick={() => navigate("/view-info")}
            >
              {/* <FiInfo color="#101010" size="1.5rem" /> */}
            </div>
          </div>
        }
      />
      <div className="flex flex-col mx-3.5 mt-4">
        <div className="shadow-card px-5 pt-5 pb-3 rounded-lg mb-20">
          <div className="flex flex-row justify-center items-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-skin-iconPrimary">
              <img src={loanIcon} alt="" />
            </div>
          </div>
          <div className="text-skin-base font-primary text-sm tracking-wide text-center mt-3">
            Your monthly debt repayment has decreased by KES 10,000 due to
            recent changes in policy.To help maintain your budget balance, we've
            adjusted your 'Essentials' and 'Wants' categories accordingly,
            except for Rent/Mortgage.
          </div>
          <div className="mt-4">
            {loanRepaymentDebt?.map((loan: any, i: number) => {
              return (
                <DebtDisplayCard
                  goal={loan?.name}
                  amount={loan?.amount}
                  percentageChange={loan?.percentageChange}
                  change={loan?.change}
                  icon={loan?.icon}
                />
              );
            })}
          </div>
          <div className="flex flex-row items-center justify-center mt-4 mb-4">
            <div className="text-skin-base font-primary text-xs tracking-wide text-center">
              please review and customize these changes in your budget below, to
              ensure they fit your financial goals.
            </div>
          </div>
          <div className="border mt-4 mb-4.5"></div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-primary">
              Categories
            </div>
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-primary">
              Budget allocation
            </div>
          </div>
          <div className="flex flex-col">
            {categoriesStore.loanRepaymentCategories &&
            categoriesStore.loanRepaymentCategories.length > 0
              ? categoriesStore.loanRepaymentCategories.map(
                  (category: any, i: any) => {
                    const data = essentialsMapState.get(`data${i}`);
                    const initialAmount = category?.amount || 0;
                    const adjustment = data?.amount || 0;

                    return (
                      <LoanRepaymentCategoryCard
                        key={i}
                        category={category?.name}
                        emoji={category?.category.emoji}
                        amount={data?.amount}
                        maxValue={Number.MAX_SAFE_INTEGER}
                        percentageChange={category?.percentage_change}
                        change={category?.change_amount}
                        unallocatedAmount={
                          typeof parseInt(essentialBudgetAmount) === "number" &&
                          essentialBudgetAmount > 0
                            ? Math.max(
                                essentialBudgetAmount - allocatedCategories,
                                0
                              )
                            : 0
                        }
                        addValue={(e) => {
                          updateCategoriesMap(i, {
                            ...data,
                            amount: e,
                          });
                          setAllocatedCategories(allocatedCategories + e);
                        }}
                        updateValue={(newValue) => {
                          const oldValue = data?.amount || 0;
                          const valueDifference = newValue - oldValue;

                          const newAllocatedEssentials = Math.max(
                            0,
                            allocatedCategories + valueDifference
                          );

                          if (newAllocatedEssentials <= essentialBudgetAmount) {
                            setAllocatedCategories(newAllocatedEssentials);
                            updateCategoriesMap(i, {
                              ...data,
                              amount: newValue,
                            });
                          } else {
                            showCustomToast({
                              message: "Budget limit exceeded",
                            });
                          }
                        }}
                        increment={() => {
                          const newAmount =
                            (data?.amount || 0) +
                            categoriesStore.incrementalAmount;
                          const totalAllocated =
                            allocatedCategories +
                            categoriesStore.incrementalAmount;

                          if (totalAllocated <= essentialBudgetAmount) {
                            setAllocatedCategories(totalAllocated);

                            updateCategoriesMap(i, {
                              ...data,
                              amount: newAmount,
                            });
                          } else {
                            // If the new total allocated budget exceeds the limit
                            showCustomToast({
                              message: "Budget limit exceeded",
                            });
                          }
                        }}
                        decrement={() => {
                          updateCategoriesMap(i, {
                            ...data,
                            amount: Math.max(
                              adjustment - categoriesStore.incrementalAmount,
                              0
                            ),
                          });
                          setAllocatedCategories(
                            allocatedCategories -
                              categoriesStore.incrementalAmount
                          );
                        }}
                        actionButtonColor="#00beaf"
                      />
                    );
                  }
                )
              : null}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 px-3.5 bg-skin-base pb-4">
          <MainButton title="My budget looks great!" />
        </div>
      </div>
    </div>
  );
};
export default LoanRepaymentPrompt;
