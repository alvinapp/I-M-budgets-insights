import React, { useEffect, useState } from "react";
import ArrowBackButton from "../../components/ArrowBack";
import NavBar from "../../components/NavBar";
import NavBarTitle from "../../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import CloseButton from "../../components/CloseButton";
import { FiBriefcase, FiInfo, FiPieChart } from "react-icons/fi";
import { BudgetDisplay } from "../../components/budget/BudgetDisplay";
import { useQuery } from "react-query";
import { getCategories } from "client/api/categories";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useCategoriesStore from "client/store/categoriesStore";
import { Category } from "client/models/Categories";
import { BudgetSettingCard } from "../../components/budget/BudgetSettingCard";
import MainButton from "../../components/MainButton";
import { GeneralInfoCard } from "../../components/budget/GeneralInfoCard";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { fetchMacros, saveBudget } from "client/api/budget";
import getToken from "client/api/token";
import { showCustomToast } from "client/utils/Toast";
import useUserStore from "client/store/userStore";
import { error } from "console";
import { config } from "process";
import { SavingsSettingCard } from "../../components/budget/SavingsSettingCard";
import BackButton from "client/pages/components/BackButton";
 
const EditBudgetSettings = () => {
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
  let essentialSum = 0
  let wantsSum = 0
  let savingsSum = 0
  categoriesStore.categoryBudgets[0].data?.map((essential:any)=>{
    essentialSum+=essential?.amount
  })
  categoriesStore.categoryBudgets[1].data?.map((want:any)=>{
    wantsSum+=want?.amount
  })
  categoriesStore.categoryBudgets[2].data?.map((saving:any)=>{
    wantsSum+=saving?.amount
  })
  //savings
  const navigator = useNavigate();
  const macroData = categoriesStore.macros?.data ?? [];
  const essentialMacro = macroData[0];
  const wantslMacro = macroData[1];
  const savingsMacro = macroData[2];
  const essentialGoals = essentialMacro?.goals ?? [];
  const wantsGoals = wantslMacro?.goals ?? [];
  const savingsGoals = savingsMacro?.goals ?? [];
  const essentialBudgetAmount = essentialGoals[0]?.amount ?? "";
  const [allocatedEssentials, setAllocatedEssentials] = useState(essentialSum);
  const wantsBudgetAmount = wantsGoals[0]?.amount ?? "";
  const [allocatedWants, setAllocatedWants] = useState(wantsSum);
  const savingsBudgetAmount = savingsGoals[0]?.amount ?? "";
  const [allocatedSavings, setAllocatedSavings] = useState(savingsSum);
  const [addSavings, setAddSavings] = useState(false);
  const [savingsList, setSavingsList] = useState([{}]);
  const { isFetching: savingBudgetDetails, refetch: saveBudgetInfo } = useQuery(
    "save-budget",
    () =>
      saveBudget({
        configuration: configurations,
        data: {
          macrotype_entries: [
            {
              macrotype_name: "Essentials",
              data: essentialsList,
            },
            {
              macrotype_name: "Wants",
              data: wantsList,
            },
            {
              macrotype_name: "Savings",
              data: savingsList,
            },
          ],
        },
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  return (
    <div className="h-screen w-screen">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-4 pb-2 pr-3.5">
            <BackButton onClick={() => navigate(-1)} />
            <NavBarTitle title="Add Category Budgets" />
            <div className="h-6 w-6 rounded-full flex items-center justify-center">
              <FiInfo color="#4E6783" size="1.5rem"/>
            </div>
          </div>
        }
      />
      <div className="flex flex-col mx-3.5">
        <div className="mb-3 mt-7">
          <GeneralInfoCard
            iconBg="bg-skin-successWithOpacity"
            icon={<FiBriefcase />}
            title="Monthly net income"
            subtitle="When set, this will be used as the base calculation for your overall budget split."
            caption={`${
              typeof userStore.user.income === undefined
                ? ""
                : userStore.user.income
            }`}
            currencySymbol={currencySymbol}
          />
        </div>
        <GeneralInfoCard
          iconBg="bg-skin-secondary3WithOpacity"
          icon={<FiPieChart />}
          title="Budget split"
          subtitle="We recommend a budget split of 50/30/20 for Essentials, Wants and Savings. Tap to edit your preferred limits."
          caption={`${
            typeof categoriesStore.macros?.budget_split
              ? categoriesStore.macros?.budget_split
              : ""
          }`}
        />
        <div className="mb-4 mt-5 flex flex-row items-center justify-center px-3.5">
          <div className="flex-grow h-px bg-skin-accent3"></div>
          <div className="flex flex-col">
            <FiPieChart size="1.5rem" color="#555466" />
          </div>
          <div className="flex-grow h-px bg-skin-accent3"></div>
        </div>
        <div className="shadow-card px-4 pt-5 pb-3 rounded-lg">
          <BudgetDisplay
            title="Essentials"
            budgetAmount={essentialBudgetAmount}
            percentageOfBudgetCaption={`${
              essentialGoals[0]?.share ?? ""
            }% of overall budget`}
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={essentialBudgetAmount - allocatedEssentials}
            allocatedAmount={allocatedEssentials}
            progressPercentage={
              typeof essentialBudgetAmount === "undefined"
                ? 0
                : (allocatedEssentials / essentialBudgetAmount) * 100
            }
          />
          <div className="flex flex-row items-center justify-center mt-6 mb-4">
            <div className="text-skin-base font-poppins text-xs tracking-wide">
              Add budgets to your Essentials below
            </div>
          </div>
          <div className="border mt-4 mb-4.5"></div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-poppins">
              Categories
            </div>
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-poppins">
              Budget allocation
            </div>
          </div>
          <div className="flex flex-col">
            {categoriesStore.categoryBudgets[0] && categoriesStore.categoryBudgets[0].data?.length > 0 ? (
              categoriesStore.categoryBudgets[0]?.data.map((category: any, i: any) => {
                const isSelected = i === selectedEssesntialId;
                const data = essentialsMapState.get(`data${i}`);
                essentialsMapState.set(`data${i}`, {
                  amount: category?.amount,
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
                console.log(data?.amount)
                return (
                  <BudgetSettingCard
                    key={i}
                    category={category?.name}
                    emoji={category?.category.emoji}
                    amount={data?.amount}
                    selected={isSelected}
                    maxValue={Number.MAX_SAFE_INTEGER}
                    addValue={(e) =>
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
                      })
                    }
                    increment={() => {
                      setSelectedEssentialId(i);
                      setAllocatedEssentials(
                        allocatedEssentials + categoriesStore.incrementalAmount
                      );
                      updateEssentialsMap(i, {
                        amount:
                        data?.amount + categoriesStore.incrementalAmount,
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
                    }}
                    decrement={() => {
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
                    }}
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="shadow-card px-4 pt-5 pb-3 mt-4.5 rounded-lg">
          <BudgetDisplay
            title="Wants"
            budgetAmount={wantsBudgetAmount}
            percentageOfBudgetCaption={`${
              wantsGoals[0]?.share ?? ""
            }% of overall budget`}
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={wantsBudgetAmount - allocatedWants}
            allocatedAmount={allocatedWants}
            progressPercentage={(allocatedWants / wantsBudgetAmount) * 100}
          />
          <div className="flex flex-row items-center justify-center mt-6 mb-4">
            <div className="text-skin-base font-poppins text-xs tracking-wide">
              Add budgets to your Wants below
            </div>
          </div>
          <div className="border mt-4 mb-4.5"></div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-poppins">
              Categories
            </div>
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-poppins">
              Budget allocation
            </div>
          </div>
          <div className="flex flex-col">
            {categoriesStore.categoryBudgets[1] && categoriesStore.categoryBudgets[1].data?.length > 0
              ? categoriesStore.categoryBudgets[1].data.map((category: any, i: any) => {
                  const isSelected = i === selectedWantsId;
                  const data = wantsMapState.get(`data${i}`);
                  wantsMapState.set(`data${i}`, {
                    amount: category?.amount,
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
                  return (
                    <BudgetSettingCard
                      key={i}
                      maxValue={Number.MAX_SAFE_INTEGER}
                      category={category?.name}
                      emoji={category?.category.emoji}
                      amount={data?.amount}
                      selected={isSelected}
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
                      increment={() => {
                        setSelectedWantsId(i);
                        setAllocatedWants(
                          allocatedWants + categoriesStore.incrementalAmount
                        );
                        updateWantsMap(i, {
                          amount:
                            data?.amount + categoriesStore.incrementalAmount,
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
                      }}
                      decrement={() => {
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
                      }}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div className="px-4 pt-5 pb-3 mt-4.5 rounded-lg">
          <BudgetDisplay
            title="Savings"
            budgetAmount={savingsBudgetAmount}
            percentageOfBudgetCaption={`${
              savingsGoals[0]?.share ?? ""
            }% of overall budget`}
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={savingsBudgetAmount - allocatedSavings}
            allocatedAmount={allocatedSavings}
            progressPercentage={(allocatedSavings / savingsBudgetAmount) * 100}
          />
          <div className="border mt-6 mb-4.5"></div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-poppins">
              Categories
            </div>
            <div className="text-xs tracking-wide font-medium text-skin-subtitle font-poppins">
              Budget allocation
            </div>
          </div>
          <div className="flex flex-col">
            {savingsCategories && savingsCategories.length > 0
              ? savingsCategories.map((category: any) => {
                  return (
                    <SavingsSettingCard
                      isAdded={addSavings}
                      category="Create a goal"
                      emoji="🎯"
                      amount={savingsBudgetAmount}
                      add={() => {
                        setAddSavings(true);
                        setAllocatedSavings(savingsBudgetAmount);
                        setSavingsList([
                          {
                            amount: savingsBudgetAmount,
                            contribution_amount: 0,
                            percentage: 0,
                            category_id: category?.id,
                            name: category?.name,
                            pseudo_name: category?.name + " " + category?.emoji,
                            extern_id: category?.id,
                            order: 0,
                            contribution_at: "",
                            is_contribute_customized: true,
                          },
                        ]);
                      }}
                      edit={() => {
                        setAddSavings(false);
                        setAllocatedSavings(0);
                      }}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div className="flex flex-row mt-18 justify-center items-center">
          <div className="font-poppins text-xs font-medium tracking-wide text-skin-neutral">
            *Setup at least 3 categories
          </div>
        </div>
        <div className="mt-2">
          <MainButton
            title="All set"
            // isDisabled={true}
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
        </div>
      </div>
    </div>
  );
};
export default EditBudgetSettings;