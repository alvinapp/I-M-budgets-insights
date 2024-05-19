import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import NavBarTitle from "../../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import { FiBriefcase, FiCloud, FiInfo, FiPieChart } from "react-icons/fi";
import { BudgetDisplay } from "../../components/budget/BudgetDisplay";
import { useQuery } from "react-query";
import { getCategories } from "client/api/categories";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useCategoriesStore from "client/store/categoriesStore";
import { BudgetSettingCard } from "../../components/budget/BudgetSettingCard";
import { GeneralInfoCard } from "../../components/budget/GeneralInfoCard";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { fetchMacros, saveBudget } from "client/api/budget";
import getToken from "client/api/token";
import { showCustomToast } from "client/utils/Toast";
import useUserStore from "client/store/userStore";
import { SavingsSettingCard } from "../../components/budget/SavingsSettingCard";
import BackButton from "client/pages/components/BackButton";
import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import { useSavingsBottomSheetStore } from "client/store/bottomSheetStore";
import { BottomSheet } from "react-spring-bottom-sheet";
import SavingsGoalConfirmation from "../SavingsGoalConfirmation";
import SuccessfullCreatedView from "client/pages/components/budget/SuccessfullCreatedView";
import successIcon from "client/assets/images/success-icon.svg";
import EditSavingsViewCard from "./EditSavingsViewCard";
import { allTimeDebt } from "client/utils/MockData";
import DebtViewCard from "client/pages/components/DebtViewCard";
import { checkNAN } from "client/utils/Formatters";

const EditBudgetSettings = () => {
  const [savingsSuccess, setSavingsSuccess] = useState(false);
  const savingsBottomSheetStore = useSavingsBottomSheetStore(
    (state: any) => state
  );
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const categoriesStore = useCategoriesStore((state: any) => state);
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const userStore = useUserStore((state: any) => state);
  const budgetSettingsStore = useBudgetSettingsStore();
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
  const updateEssentialsMap = (i: number, data: any) => {
    setEssentialsMapState((map) => new Map(map.set(`data${i}`, data)));
  };
  const updateWantsMap = (i: number, data: any) => {
    setWantsMapState((map) => new Map(map.set(`data${i}`, data)));
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
  const navigator = useNavigate();
  const macroData = categoriesStore.macros?.data ?? [];
  const essentialMacro = macroData[0];
  const wantslMacro = macroData[1];
  const savingsMacro = macroData[2];
  const essentialGoals = essentialMacro?.goals ?? [];
  const wantsGoals = wantslMacro?.goals ?? [];
  const savingsGoals = savingsMacro?.goals ?? [];
  const essentialBudgetAmount = essentialGoals[0]?.amount ?? "";
  const [allocatedEssentials, setAllocatedEssentials] = useState(
    typeof categoriesStore.categoryBudgets[0] !== undefined
      ? categoriesStore?.categoryBudgets[0].total_amount
      : 0
  );
  const wantsBudgetAmount = wantsGoals[0]?.amount ?? "";
  const [allocatedWants, setAllocatedWants] = useState(
    typeof categoriesStore.categoryBudgets[1] !== undefined
      ? categoriesStore?.categoryBudgets[1]?.total_amount
      : 0
  );
  const savingsBudgetAmount = savingsGoals[0]?.amount ?? "";
  const [allocatedSavings, setAllocatedSavings] = useState(
    typeof categoriesStore.categoryBudgets[2] !== undefined
      ? categoriesStore?.categoryBudgets[2].total_amount
      : 0
  );
  const [addSavings, setAddSavings] = useState(false);
  const [savingsList, setSavingsList] = useState([{}]);
  const budgetStore = useBudgetSettingsStore((state: any) => state);
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

      if (savingsList.some((item) => Object.keys(item).length > 0)) {
        macrotypeEntries.push({
          macrotype_name: "Savings",
          data: savingsList,
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
  const [selectedSavingsGoal, setSelectedSavingsGoal] = useState({
    name: "",
  });
  const totalDebt = allTimeDebt.reduce((accumulator, item) => {
    return (accumulator += item.amount);
  }, 0);
  const user = useUserStore((state: any) => state);
  return (
    <div className="h-screen w-screen">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-4 pb-2 pr-3.5">
            <BackButton
              onClick={() => {
                // call save-budget here
                saveBudgetInfo();
                navigate("/budgets-view");
              }}
            />
            <NavBarTitle title="" />
            <div
              className="h-6 w-6 rounded-full flex items-center justify-center"
              onClick={() => navigate("/view-info")}
            >
              {/* <FiInfo color="#101010" size="1.5rem" /> */}
            </div>
          </div>
        }
      />
      <div className="flex flex-col mx-3.5">
        <div className="mb-3 mt-5">
          <GeneralInfoCard
            iconBg="bg-skin-iconPrimary"
            icon={<FiCloud />}
            title="Linked accounts"
            subtitle="Track your spending easily across linked accounts and stay on top of your budget with insights."
            caption={"2"}
            onClick={() => {
              navigate("/linked-accounts");
            }}
          />
        </div>
        <div className="mb-3">
          <GeneralInfoCard
            iconBg="bg-skin-successWithOpacity"
            icon={<FiBriefcase />}
            title="Monthly net income"
            subtitle="This is used as the basis for calculating your overall budget split."
            caption={`${
              budgetSettingsStore.monthlyIncome !== 0
                ? budgetSettingsStore.monthlyIncome.toString()
                : userStore.user?.income?.toString() ?? ""
            }`}
            currencySymbol={currencySymbol}
            onClick={() => navigate("/edit-monthly-income")}
          />
        </div>
        <GeneralInfoCard
          iconBg="bg-skin-secondary3WithOpacity"
          icon={<FiPieChart />}
          title="Budget split"
          subtitle="We recommend reserving 70% of your income after your monthly debt repayment commitments to Essentials then 30% for Wants. Tap here to edit."
          caption={`${categoriesStore.macros?.budget_split ?? ""}`}
          onClick={() => {
            if (categoriesStore.macros?.budget_split) {
              navigate("/edit-split-income");
              budgetStore.setMonthlyIncome(userStore.user?.income);
            }
          }}
        />
        <div className="mb-4 mt-5 flex flex-row items-center justify-center px-3.5">
          <div className="flex-grow h-px bg-skin-accent3"></div>
          <div className="flex flex-col">
            <FiPieChart size="1.5rem" color="#555466" />
          </div>
          <div className="flex-grow h-px bg-skin-accent3"></div>
        </div>
        <div className="shadow-card px-4 pt-5 pb-3 mt-4.5 rounded-lg mb-4">
          <BudgetDisplay
            title="Debt repayment"
            budgetAmount={savingsBudgetAmount}
            percentageOfBudgetCaption={`${
              savingsGoals[0]?.share ?? ""
            }% of overall budget`}
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={0}
            allocatedAmount={totalDebt}
            progressPercentage={100}
            indicatorColor="bg-[#CB960F]"
            progressColor="#CB960F"
          />
          <div className="border mt-4 mb-4.5"></div>
          <div className="flex flex-col">
            <>
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
                  Categories
                </div>
                <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
                  Budget allocation
                </div>
              </div>
              {allTimeDebt?.map((debt: any, index: number) => {
                return (
                  <DebtViewCard
                    key={index}
                    amount={checkNAN(
                      Math.round(debt?.loanDetails.monthlyPayment)
                    )}
                    icon={debt?.icon}
                    goal={debt?.name}
                  />
                );
              })}
            </>
          </div>
        </div>
        <div className="shadow-card px-4 pt-5 pb-3 rounded-lg">
          <BudgetDisplay
            title="Essentials"
            budgetAmount={essentialBudgetAmount ?? 0}
            percentageOfBudgetCaption={`${
              essentialGoals[0]?.share ?? ""
            }% of overall budget`}
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={
              typeof parseInt(essentialBudgetAmount) === "number" &&
              essentialBudgetAmount > 0
                ? Math.max(essentialBudgetAmount - allocatedEssentials, 0)
                : 0 // Ensure perc
            }
            allocatedAmount={allocatedEssentials}
            progressPercentage={
              typeof parseInt(essentialBudgetAmount) === "number" &&
              essentialBudgetAmount > 0
                ? Math.min(
                    (allocatedEssentials / essentialBudgetAmount) * 100,
                    100
                  ) // Ensure percentage stays between 0 and 100
                : 0
            }
            progressColor="#00AB9E"
            indicatorColor="bg-[#00AB9E]"
          />
          <div className="flex flex-row items-center justify-center mt-6 mb-4">
            <div className="text-skin-base font-primary text-xs tracking-wide">
              Add budgets to your Essentials below
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
            {categoriesStore.categoryBudgets[0] &&
            categoriesStore.categoryBudgets[0].data?.length > 0
              ? categoriesStore.categoryBudgets[0].data.map(
                  (category: any, i: any) => {
                    const data = essentialsMapState.get(`data${i}`);
                    const initialAmount = category?.amount || 0;
                    const adjustment = data?.amount || 0;

                    return (
                      <BudgetSettingCard
                        key={i}
                        category={category?.name}
                        emoji={category?.category.emoji}
                        amount={data?.amount}
                        maxValue={Number.MAX_SAFE_INTEGER}
                        unallocatedAmount={
                          typeof parseInt(essentialBudgetAmount) === "number" &&
                          essentialBudgetAmount > 0
                            ? Math.max(
                                essentialBudgetAmount - allocatedEssentials,
                                0
                              )
                            : 0
                        }
                        addValue={(e) => {
                          updateEssentialsMap(i, {
                            ...data,
                            amount: e,
                          });
                          setAllocatedEssentials(allocatedEssentials + e);
                        }}
                        updateValue={(newValue) => {
                          const oldValue = data?.amount || 0;
                          const valueDifference = newValue - oldValue;

                          const newAllocatedEssentials = Math.max(
                            0,
                            allocatedEssentials + valueDifference
                          );

                          if (newAllocatedEssentials <= essentialBudgetAmount) {
                            setAllocatedEssentials(newAllocatedEssentials);
                            updateEssentialsMap(i, {
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
                            allocatedEssentials +
                            categoriesStore.incrementalAmount;

                          if (totalAllocated <= essentialBudgetAmount) {
                            setAllocatedEssentials(totalAllocated);

                            updateEssentialsMap(i, {
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
                          updateEssentialsMap(i, {
                            ...data,
                            amount: Math.max(
                              adjustment - categoriesStore.incrementalAmount,
                              0
                            ),
                          });
                          setAllocatedEssentials(
                            allocatedEssentials -
                              categoriesStore.incrementalAmount
                          );
                        }}
                      />
                    );
                  }
                )
              : null}
          </div>
        </div>
        <div className="shadow-card px-4 pt-5 pb-3 mt-4.5 rounded-lg">
          <BudgetDisplay
            title="Wants"
            budgetAmount={wantsBudgetAmount ?? 0}
            percentageOfBudgetCaption={`${
              wantsGoals[0]?.share ?? ""
            }% of overall budget`}
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={
              typeof wantsBudgetAmount === "number" || wantsBudgetAmount > 0
                ? Math.max(wantsBudgetAmount - allocatedWants, 0) // Ensure percentage stays between 0 and 100
                : 0
            }
            allocatedAmount={allocatedWants ?? 0}
            progressPercentage={
              typeof wantsBudgetAmount === "number" && wantsBudgetAmount > 0
                ? Math.min((allocatedWants / wantsBudgetAmount) * 100, 100) // Ensure percentage stays between 0 and 100
                : 0
            }
            progressColor="#345DAF"
            indicatorColor="bg-[#345DAF]"
          />
          <div className="flex flex-row items-center justify-center mt-6 mb-4">
            <div className="text-skin-base font-primary text-xs tracking-wide">
              Add budgets to your Wants below
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
            {categoriesStore.categoryBudgets[1] &&
            categoriesStore.categoryBudgets[1].data?.length > 0
              ? categoriesStore.categoryBudgets[1].data.map(
                  (category: any, i: any) => {
                    const data = wantsMapState.get(`data${i}`);
                    const initialAmount = category?.amount || 0;
                    const adjustment = data?.amount || 0;

                    return (
                      <BudgetSettingCard
                        key={i}
                        category={category?.name}
                        emoji={category?.category.emoji}
                        amount={data?.amount}
                        maxValue={Number.MAX_SAFE_INTEGER}
                        unallocatedAmount={
                          typeof wantsBudgetAmount === "number" ||
                          wantsBudgetAmount > 0
                            ? Math.max(wantsBudgetAmount - allocatedWants, 0) // Ensure percentage stays between 0 and 100
                            : 0
                        }
                        addValue={(e) => {
                          updateWantsMap(i, {
                            ...data,
                            amount: e,
                          });
                          setAllocatedWants(allocatedWants + e);
                        }}
                        updateValue={(newValue) => {
                          const oldValue = data?.amount || 0;
                          const valueDifference = newValue - oldValue;

                          const newAllocatedWnats = Math.max(
                            0,
                            allocatedWants + valueDifference
                          );

                          if (newAllocatedWnats <= essentialBudgetAmount) {
                            setAllocatedWants(newAllocatedWnats);
                            updateWantsMap(i, {
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
                            allocatedWants + categoriesStore.incrementalAmount;

                          if (totalAllocated <= wantsBudgetAmount) {
                            setAllocatedWants(totalAllocated);

                            updateWantsMap(i, {
                              ...data,
                              amount: newAmount,
                            });
                          } else {
                            showCustomToast({
                              message: "Budget limit exceeded",
                            });
                          }
                        }}
                        decrement={() => {
                          updateWantsMap(i, {
                            ...data,
                            amount: Math.max(
                              adjustment - categoriesStore.incrementalAmount,
                              0
                            ),
                          });
                          setAllocatedWants(
                            allocatedWants - categoriesStore.incrementalAmount
                          );
                        }}
                      />
                    );
                  }
                )
              : null}
          </div>
        </div>
        {/* <div className="shadow-card px-4 pt-5 pb-3 mt-4.5 rounded-lg mb-6">
          <BudgetDisplay
            title="Savings"
            budgetAmount={savingsBudgetAmount ?? 0}
            percentageOfBudgetCaption={`${
              savingsGoals[0]?.share ?? ""
            }% of overall budget`}
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={
              typeof savingsBudgetAmount === "number" && savingsBudgetAmount > 0
                ? Math.max(savingsBudgetAmount - allocatedSavings, 0)
                : 0
            }
            allocatedAmount={allocatedSavings}
            progressPercentage={
              typeof savingsBudgetAmount === "number" && savingsBudgetAmount > 0
                ? Math.min((allocatedSavings / savingsBudgetAmount) * 100, 100) // Ensure percentage stays between 0 and 100
                : 0
            }
            progressColor="#84C1B2"
            indicatorColor="bg-[#84C1B2]"
          />
          <div className="border mt-6 mb-4.5"></div>
          <div className="flex flex-col">
            {categoriesStore.categoryBudgets[2] &&
            categoriesStore.categoryBudgets[2].data?.length === 0 ? (
              <>
                <div className="flex flex-row items-center mb-4">
                  <div className="text-xs tracking-wide font-medium text-skin-subtitle font-primary">
                    Goals
                  </div>
                </div>
                <SavingsSettingCard
                  isAdded={addSavings}
                  goal="Create a Rainy day fund goal"
                  emoji="https://images.unsplash.com/photo-1508698308649-689249ec5455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDcxNTg0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                  amount={savingsBudgetAmount ?? 0}
                  onClick={() => {
                    setAddSavings(true);
                    setAllocatedSavings(savingsBudgetAmount);
                    savingsBottomSheetStore.setSavingsBottomSheet(true);
                    setSavingsList([
                      {
                        amount: savingsBudgetAmount,
                        contribution_amount: 0,
                        percentage: 0,
                        category_id: 13 ?? "",
                        name: "Emergency fund",
                        pseudo_name: "Emergency fund" + " " + "🎯",
                        extern_id: 13,
                        order: 0,
                        contribution_at: "",
                        is_contribute_customized: true,
                      },
                    ]);
                  }}
                  edit={() => {
                    // setAddSavings(false);
                    // setAllocatedSavings(0);
                  }}
                />
              </>
            ) : (
              categoriesStore.categoryBudgets[2].data.map((category: any) => {
                return (
                  <>
                    <div className="flex flex-row justify-between items-center mb-4">
                      <div className="text-xs tracking-wide font-medium text-skin-subtitle font-primary">
                        Goals
                      </div>
                      <div className="text-xs tracking-wide font-medium text-skin-subtitle font-primary">
                        Budget contribution
                      </div>
                    </div>
                    <EditSavingsViewCard
                      amount={savingsBudgetAmount ?? 0}
                      icon="https://images.unsplash.com/photo-1508698308649-689249ec5455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDcxNTg0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                      goal="Rainy day fund"
                    />
                  </>
                );
              })
            )}
          </div>
        </div> */}
        <BottomSheet
          onDismiss={() => {
            savingsBottomSheetStore.setSavingsBottomSheet(false);
          }}
          open={savingsBottomSheetStore.savingsBottomSheet}
          style={{
            borderRadius: 24,
          }}
          children={
            savingsSuccess ? (
              <SuccessfullCreatedView
                image={successIcon}
                title="Whoop! Goal created"
                caption="Duis aute categorize in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident."
                onClick={() => {
                  setSavingsSuccess(false);
                  savingsBottomSheetStore.setSavingsBottomSheet(false);
                }}
              />
            ) : (
              <SavingsGoalConfirmation
                monthlyContribution={savingsBudgetAmount}
                targetAmount={essentialBudgetAmount * 3}
                progressPercentage={
                  typeof savingsBudgetAmount === "number" &&
                  savingsBudgetAmount > 0
                    ? Math.min(
                        (allocatedSavings / savingsBudgetAmount) * 100,
                        100
                      ) // Ensure percentage stays between 0 and 100
                    : 0
                }
                emoji="🎯"
                goal={selectedSavingsGoal.name}
                onClick={() => {
                  saveBudgetInfo().then((results) => {
                    if (results.isSuccess) {
                      setSavingsSuccess(true);
                    }
                  });
                }}
              />
            )
          }
          defaultSnap={400}
        ></BottomSheet>
      </div>
    </div>
  );
};
export default EditBudgetSettings;
