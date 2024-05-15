import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import { FiBriefcase, FiPieChart, FiCloud } from "react-icons/fi";
import { BudgetDisplay } from "../components/budget/BudgetDisplay";
import { useQuery } from "react-query";
import { getCategories } from "client/api/categories";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useCategoriesStore from "client/store/categoriesStore";
import { Category } from "client/models/Categories";
import { BudgetSettingCard } from "../components/budget/BudgetSettingCard";
import MainButton from "../components/MainButton";
import { GeneralInfoCard } from "../components/budget/GeneralInfoCard";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { fetchMacros, saveBudget } from "client/api/budget";
import getToken from "client/api/token";
import { showCustomToast } from "client/utils/Toast";
import useUserStore from "client/store/userStore";
import { SavingsSettingCard } from "../components/budget/SavingsSettingCard";
import { BottomSheet } from "react-spring-bottom-sheet";
import OnboardingSuccess from "../onboarding/OnboardingSuccess";
import useBottomSheetStore, {
  useBudgetSavingsSheetStore,
} from "client/store/bottomSheetStore";
import SavingsGoalConfirmation from "./SavingsGoalConfirmation";
import SuccessfullCreatedView from "../components/budget/SuccessfullCreatedView";
import successIcon from "client/assets/images/success-icon.svg";
import EditSavingsViewCard from "./edit-settings/EditSavingsViewCard";
import { checkNAN, reformatBudgetSplit } from "client/utils/Formatters";
import DebtViewCard from "../components/DebtViewCard";
import { allTimeDebt } from "client/utils/MockData";

export const BudgetSettings = () => {
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const categoriesStore = useCategoriesStore((state: any) => state);
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const userStore = useUserStore((state: any) => state);
  const setUser = userStore.setUser;
  const savingsBottomSheetStore = useBudgetSavingsSheetStore(
    (state: any) => state
  );
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
  const { isFetching: fetchingCategories } = useQuery(
    "fetch-categories",
    () =>
      getCategories({ configuration: configurations }).then((result) => {
        categoriesStore.setCategories(result);
        const essentialsData = result
          .filter(
            (element: Category) => element.macro_type?.name === "Essentials"
          )
          .map((essentials: any, i: any) => ({
            amount: 0,
            contribution_amount: 0,
            percentage: 0,
            category_id: essentials.id, // I've set category_id to the actual value
            name: essentials.name,
            pseudo_name: essentials.name + " " + essentials.emoji,
            extern_id: essentials.id,
            order: 0,
            contribution_at: "",
            is_contribute_customized: true,
          }));
        const wantsData = result
          .filter((element: Category) => element.macro_type?.name === "Wants")
          .map((wants: any, i: any) => ({
            amount: 0,
            contribution_amount: 0,
            percentage: 0,
            category_id: wants.id, // Set category_id to the actual value here too
            name: wants.name,
            pseudo_name: wants.name + " " + wants.emoji,
            extern_id: wants.id,
            order: 0,
            contribution_at: "",
            is_contribute_customized: true,
          }));
        setEssentialsMapState(
          new Map(essentialsData.map((data: any, i: any) => [`data${i}`, data]))
        );
        setWantsMapState(
          new Map(wantsData.map((data: any, i: any) => [`data${i}`, data]))
        );
      }),
    { refetchOnWindowFocus: false }
  );
  const { isFetching: fetchingMacros } = useQuery(
    "fetch-macros",
    () =>
      fetchMacros({ configuration: configurations }).then((res) => {
        categoriesStore.setMacros(res);
      }),
    { refetchOnWindowFocus: false, enabled: !!configurations.token }
  );
  const wantsCategories = categoriesStore.categories?.filter(
    (element: Category) => element.macro_type?.name === "Wants"
  );
  const essentialsCategories = categoriesStore.categories?.filter(
    (element: Category) => element.macro_type?.name === "Essentials"
  );
  const savingsCategories = categoriesStore.categories?.filter(
    (element: Category) => element.macro_type?.name === "Savings"
  );
  const navigate = useNavigate();
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const [selectedEssesntialId, setSelectedEssentialId] = useState();
  const [selectedWantsId, setSelectedWantsId] = useState();
  const [essentialsMapState, setEssentialsMapState] = useState(new Map());
  const [wantsMapState, setWantsMapState] = useState(new Map());
  const [savingsMapState, setSavingsMapState] = useState(new Map());
  const updateEssentialsMap = (i: number, data: any) => {
    setEssentialsMapState((map) => new Map(map.set(`data${i}`, data)));
  };
  const updateWantsMap = (i: number, data: any) => {
    setWantsMapState((map) => new Map(map.set(`data${i}`, data)));
  };
  const updateSavingsMap = (i: number, data: any) => {
    setSavingsMapState((map) => new Map(map.set(`data${i}`, data)));
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
  //savings
  const savingsList = Array.from(savingsMapState, ([key, value]) => {
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
  const [allocatedEssentials, setAllocatedEssentials] = useState(0);
  const wantsBudgetAmount = wantsGoals[0]?.amount ?? "";
  const [allocatedWants, setAllocatedWants] = useState(0);
  const savingsBudgetAmount = savingsGoals[0]?.amount ?? "";
  const [allocatedSavings, setAllocatedSavings] = useState(0);
  const [addSavings, setAddSavings] = useState(false);
  // const [savingsList, setSavingsList] = useState([{}]);

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

  const allAddedCategoriesList = essentialsList.concat(wantsList);
  // const finalListCheckForEntries = allAddedCategoriesList.concat(savingsList);
  const listCheckForEntries = allAddedCategoriesList.filter(
    (element) => element.amount > 0
  );
  const bottomSheetStore = useBottomSheetStore((state: any) => state);
  const [savingsSuccess, setSavingsSuccess] = useState(false);
  const totalDebt = allTimeDebt.reduce((accumulator, item) => {
    return (accumulator += item.amount);
  }, 0);
  useEffect(() => {
    if (bottomSheetStore?.successBottomSheet) {
      document
        .getElementById("budget-container")
        ?.classList.add("disable-interaction");
    }
  }, []);

  return (
    <div className="h-screen w-screen" aria-hidden="true" tabIndex={-1}>
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-4 pb-2">
            <CloseButton onClick={() => navigate(-1)} />
            <NavBarTitle title="Set Category Budgets" />
            <div className="h-6 w-6 rounded-full"></div>
          </div>
        }
      />
      <div className="flex flex-col mx-3.5" id="budget-container">
        <div className="mb-3 mt-7">
          <GeneralInfoCard
            iconBg="bg-skin-iconPrimary"
            icon={<FiCloud />}
            title="Linked accounts"
            subtitle="Track your spending easily across linked accounts and stay on top of your budget with insights."
            caption={"2"}
          />
        </div>
        <div className="mb-3">
          <GeneralInfoCard
            iconBg="bg-skin-iconPrimary"
            icon={<FiBriefcase />}
            title="Monthly net income"
            subtitle="When set, this will be used as the base calculation for your overall budget split."
            caption={`${userStore.user.income ?? ""}`}
            currencySymbol={currencySymbol}
            onClick={() => navigate("/edit-monthly-income")}
          />
        </div>
        <GeneralInfoCard
          iconBg="bg-skin-iconPrimary"
          icon={<FiPieChart />}
          title="Budget split"
          subtitle="We recommend a budget split of 50/30/20 for Essentials, Wants and Savings. Tap to edit your preferred limits."
          caption={`${categoriesStore.macros?.budget_split ?? ""}`}
          onClick={() => navigate("/onboard-split-income")}
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
            percentageOfBudgetCaption={`${savingsGoals[0]?.share ?? ""
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
            {/* {savingsCategories &&
              savingsCategories.length > 0 &&
              !addSavings ? (
              <>
                <div className="flex flex-row justify-between items-center mb-4">
                  <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
                    Categories
                  </div>
                  <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
                    Budget allocation
                  </div>
                </div>
                <DebtViewCard
                  amount={Math.round(
                    Math.round(
                      savingsBudgetAmount ? savingsBudgetAmount / 3 : 0
                    )
                  )}
                  icon=""
                  goal="Credit card"
                />
                <DebtViewCard
                  amount={Math.round(
                    savingsBudgetAmount ? savingsBudgetAmount / 3 : 0
                  )}
                  icon=""
                  goal="Auto loan"
                />
                <DebtViewCard
                  amount={Math.round(
                    savingsBudgetAmount ? savingsBudgetAmount / 3 : 0
                  )}
                  icon=""
                  goal="Mortgage"
                />
              </>
            ) : null} */}
          </div>
        </div>
        <div className="shadow-card px-4 pt-5 pb-3 rounded-lg">
          <BudgetDisplay
            title="Essentials"
            budgetAmount={essentialBudgetAmount}
            percentageOfBudgetCaption={`${essentialGoals[0]?.share ?? ""
              }% of overall budget`}
            unallocatedCaption="Unallocated"
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
            indicatorColor="bg-[#00AB9E]"
            progressColor="#00AB9E"
          />
          <div className="flex flex-row items-center justify-center mt-6 mb-4">
            <div className="text-skin-base font-primary text-xs tracking-wider font-semibold">
              Add budgets to your Essentials below
            </div>
          </div>
          <div className="border mt-4 mb-4.5"></div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
              Categories
            </div>
            <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
              Budget allocation
            </div>
          </div>
          <div className="flex flex-col">
            {essentialsCategories && essentialsCategories.length > 0 ? (
              essentialsCategories.map((category: Category, i: any) => {
                const isSelected = i === selectedEssesntialId;
                const data = essentialsMapState.get(`data${i}`);
                return (
                  <BudgetSettingCard
                    key={i}
                    category={category?.name}
                    emoji={category?.emoji}
                    amount={data?.amount}
                    selected={isSelected}
                    maxValue={Number.MAX_SAFE_INTEGER}
                    actionButtonColor="#00AB9E"
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
                      const totalAllocated = allocatedEssentials + e;
                      if (totalAllocated <= essentialBudgetAmount) {
                        setAllocatedEssentials(totalAllocated);
                        updateEssentialsMap(i, {
                          amount: e,
                          contribution_amount: 0,
                          percentage: 0,
                          category_id: category?.id,
                          name: category?.name,
                          pseudo_name: category?.name + " " + category?.emoji,
                          extern_id: category?.id,
                          order: 0,
                          contribution_at: "",
                          is_contribute_customized: true,
                        });
                      } else {
                        showCustomToast({ message: "Budget limit exceeded" });
                      }
                    }}
                    increment={() => {
                      setSelectedEssentialId(i);
                      const newAmount =
                        data?.amount + categoriesStore.incrementalAmount;
                      const totalAllocated =
                        allocatedEssentials + categoriesStore.incrementalAmount;
                      if (totalAllocated <= essentialBudgetAmount) {
                        setAllocatedEssentials(totalAllocated);
                        updateEssentialsMap(i, {
                          amount: newAmount,
                          contribution_amount: 0,
                          percentage: 0,
                          category_id: category?.id,
                          name: category?.name,
                          pseudo_name: category?.name + " " + category?.emoji,
                          extern_id: category?.id,
                          order: 0,
                          contribution_at: "",
                          is_contribute_customized: true,
                        });
                      } else {
                        showCustomToast({ message: "Budget limit exceeded" });
                      }
                    }}
                    updateValue={(newValue) => {
                      const oldValue = data?.amount || 0;
                      const valueDifference = newValue - oldValue;

                      setSelectedEssentialId(i);
                      const newAllocatedEssentials = Math.max(
                        0,
                        allocatedEssentials + valueDifference
                      );

                      if (newAllocatedEssentials <= essentialBudgetAmount) {
                        setAllocatedEssentials(newAllocatedEssentials);
                        updateEssentialsMap(i, {
                          amount: newValue,
                          contribution_amount: 0,
                          percentage: 0,
                          category_id: category?.id,
                          name: category?.name,
                          pseudo_name: category?.name + " " + category?.emoji,
                          extern_id: category?.id,
                          order: 0,
                          contribution_at: "",
                          is_contribute_customized: true,
                        });
                      } else {
                        showCustomToast({ message: "Budget limit exceeded" });
                      }
                    }}
                    decrement={() => {
                      if (
                        data?.amount - categoriesStore.incrementalAmount >=
                        0
                      ) {
                        setSelectedEssentialId(i);
                        setAllocatedEssentials(
                          allocatedEssentials > 0
                            ? allocatedEssentials -
                            categoriesStore.incrementalAmount
                            : 0
                        );
                        updateEssentialsMap(i, {
                          amount:
                            data?.amount - categoriesStore.incrementalAmount,
                          contribution_amount: 0,
                          percentage: 0,
                          category_id: category?.id,
                          name: category?.name,
                          pseudo_name: category?.name + " " + category?.emoji,
                          extern_id: category?.id,
                          order: 0,
                          contribution_at: "",
                          is_contribute_customized: true,
                        });
                      }
                    }}
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="shadow-card px-4 pt-5 pb-3 mt-4.5 mb-40 rounded-lg">
          <BudgetDisplay
            title="Wants"
            budgetAmount={wantsBudgetAmount}
            percentageOfBudgetCaption={`${wantsGoals[0]?.share ?? ""
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
            indicatorColor="bg-[#345DAF]"
            progressColor="#345DAF"
          />
          <div className="flex flex-row items-center justify-center mt-6 mb-4">
            <div className="text-skin-base font-primary text-xs tracking-wider font-semibold">
              Add budgets to your Wants below
            </div>
          </div>
          <div className="border mt-4 mb-4.5"></div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
              Categories
            </div>
            <div className="text-sm tracking-wide font-medium text-skin-subtitle font-primary">
              Budget allocation
            </div>
          </div>
          <div className="flex flex-col">
            {wantsCategories && wantsCategories.length > 0
              ? wantsCategories.map((category: Category, i: any) => {
                const isSelected = i === selectedWantsId;
                const data = wantsMapState.get(`data${i}`);
                const isGoingOut = category?.name === "Going out";
                return (
                  <BudgetSettingCard
                    key={i}
                    maxValue={Number.MAX_SAFE_INTEGER}
                    category={isGoingOut ? "Entertainment" : category?.name}
                    emoji={isGoingOut ? "🤩" : category?.emoji}
                    amount={data?.amount}
                    selected={isSelected}
                    unallocatedAmount={
                      typeof wantsBudgetAmount === "number" ||
                        wantsBudgetAmount > 0
                        ? Math.max(wantsBudgetAmount - allocatedWants, 0)
                        : 0
                    }
                    addValue={(e) =>
                      updateWantsMap(i, {
                        amount: e,
                        contribution_amount: 0,
                        percentage: 0,
                        category_id: category?.id,
                        name: category?.name,
                        pseudo_name: category?.name + " " + category?.emoji,
                        extern_id: category?.id,
                        order: 0,
                        contribution_at: "",
                        is_contribute_customized: true,
                      })
                    }
                    updateValue={(newValue) => {
                      const oldValue = data?.amount || 0;
                      const valueDifference = newValue - oldValue;

                      setSelectedWantsId(i);
                      const newAllocatedWants = Math.max(
                        0,
                        allocatedWants + valueDifference
                      );

                      if (newAllocatedWants <= wantsBudgetAmount) {
                        setAllocatedWants(newAllocatedWants);
                        updateWantsMap(i, {
                          amount: newValue,
                          contribution_amount: 0,
                          percentage: 0,
                          category_id: category?.id,
                          name: category?.name,
                          pseudo_name: category?.name + " " + category?.emoji,
                          extern_id: category?.id,
                          order: 0,
                          contribution_at: "",
                          is_contribute_customized: true,
                        });
                      } else {
                        showCustomToast({ message: "Budget limit exceeded" });
                      }
                    }}
                    increment={() => {
                      setSelectedWantsId(i);
                      const newAmount =
                        data?.amount + categoriesStore.incrementalAmount;
                      const totalAllocated =
                        allocatedWants + categoriesStore.incrementalAmount;
                      if (totalAllocated <= wantsBudgetAmount) {
                        setAllocatedWants(totalAllocated);
                        updateWantsMap(i, {
                          amount: newAmount,
                          contribution_amount: 0,
                          percentage: 0,
                          category_id: category?.id,
                          name: category?.name,
                          pseudo_name: category?.name + " " + category?.emoji,
                          extern_id: category?.id,
                          order: 0,
                          contribution_at: "",
                          is_contribute_customized: true,
                        });
                      } else {
                        showCustomToast({ message: "Budget limit exceeded" });
                      }
                    }}
                    decrement={() => {
                      if (
                        data?.amount - categoriesStore.incrementalAmount >=
                        0
                      ) {
                        setSelectedWantsId(i);
                        setAllocatedWants(
                          allocatedWants - categoriesStore.incrementalAmount
                        );
                        updateWantsMap(i, {
                          amount:
                            data?.amount - categoriesStore.incrementalAmount,
                          contribution_amount: 0,
                          percentage: 0,
                          category_id: category?.id,
                          name: category?.name,
                          pseudo_name: category?.name + " " + category?.emoji,
                          extern_id: category?.id,
                          order: 0,
                          contribution_at: "",
                          is_contribute_customized: true,
                        });
                      }
                    }}
                  />
                );
              })
              : null}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 px-3.5 flex flex-col bg-skin-base pb-5 pt-4">
          <div className="flex flex-row justify-center items-center">
            <div className="font-primary text-sm font-medium tracking-wide text-skin-base mb-2">
              *Setup at least 3 categories
            </div>
          </div>
          {listCheckForEntries.length >= 3 ? (
            <MainButton
              title="All set"
              isDisabled={false}
              loading={savingBudgetDetails}
              click={() => {
                saveBudgetInfo().then((res) => {
                  if (res) {
                    navigator("/budgets-view");
                  } else {
                    showCustomToast({ message: "Failed to save settings" });
                  }
                });
              }}
            />
          ) : (
            <MainButton
              title="All set"
              isDisabled={true}
              loading={savingBudgetDetails}
              click={() => {
                saveBudgetInfo().then((res) => {
                  if (res) {
                    navigator("/budgets-view");
                  } else {
                    showCustomToast({ message: "Failed to save settings" });
                  }
                });
              }}
            />
          )}
        </div>
      </div>
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
              caption="Great start! Your savings journey has just begun. Every coin saved is a step closer to your dream. We’re here to help you make it happen."
              onClick={() => {
                savingsBottomSheetStore.setSavingsBottomSheet(false);
                setSavingsSuccess(false);
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
              onClick={() => {
                setAllocatedSavings(savingsBudgetAmount);
                setSavingsSuccess(true);
                setAddSavings(true);
              }}
            />
          )
        }
        defaultSnap={400}
      ></BottomSheet>
      {/* <BottomSheet
        onDismiss={() => {
          bottomSheetStore?.setSuccessBottomSheet(false);
        }}
        open={bottomSheetStore?.successBottomSheet}
        style={{
          borderRadius: 24,
        }}
        children={<OnboardingSuccess />}
        defaultSnap={400}
        onSpringEnd={(event) => {
          if (event.type === "CLOSE") {
            document
              .getElementById("budget-container")
              ?.classList.remove("disable-interaction");
          }
        }}
      ></BottomSheet> */}
    </div>
  );
};
