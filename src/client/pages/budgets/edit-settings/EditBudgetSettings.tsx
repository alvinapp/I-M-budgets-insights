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
import { SavingsSettingCard } from "../../components/budget/SavingsSettingCard";
import BackButton from "client/pages/components/BackButton";
import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";

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

        const mapper = (type: string) => (category: any, index: number) =>
          category.macro_type?.name === type
            ? mapCategoryToData(category, index)
            : null;

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
            <div
              className="h-6 w-6 rounded-full flex items-center justify-center"
              onClick={() => navigate("/view-info")}
            >
              <FiInfo color="#4E6783" size="1.5rem" />
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
            onClick={() => navigate("/edit-monthly-income")}
          />
        </div>
        <GeneralInfoCard
          iconBg="bg-skin-secondary3WithOpacity"
          icon={<FiPieChart />}
          title="Budget split"
          subtitle="We recommend a budget split of 50/30/20 for Essentials, Wants and Savings. Tap to edit your preferred limits."
          caption={`${
            typeof categoriesStore.macros?.budget_split === undefined
              ? ""
              : categoriesStore.macros?.budget_split
          }`}
          onClick={() => {
            navigate("/edit-split-income");
            budgetStore.setMonthlyIncome(userStore.user?.income);
          }}
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
            {categoriesStore.categoryBudgets[0] &&
            categoriesStore.categoryBudgets[0].data?.length > 0 ? (
              categoriesStore.categoryBudgets[0].data.map(
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
                      addValue={(e) => {
                        const difference = e - (initialAmount + adjustment);
                        setAllocatedEssentials(
                          allocatedEssentials + difference
                        );
                        updateEssentialsMap(i, {
                          ...data,
                          amount: e - initialAmount,
                        });
                        setAllocatedEssentials(
                          allocatedEssentials + e - initialAmount
                        );
                      }}
                      increment={() => {
                        updateEssentialsMap(i, {
                          ...data,
                          amount:
                            adjustment + categoriesStore.incrementalAmount,
                        });
                        setAllocatedEssentials(
                          allocatedEssentials +
                            categoriesStore.incrementalAmount
                        );
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
                        addValue={(e) => {
                          const difference = e - (initialAmount + adjustment);
                          updateWantsMap(i, {
                            ...data,
                            amount: e - initialAmount,
                          });
                          setAllocatedWants(allocatedWants + difference);
                        }}
                        increment={() => {
                          updateWantsMap(i, {
                            ...data,
                            amount:
                              adjustment + categoriesStore.incrementalAmount,
                          });
                          setAllocatedWants(
                            allocatedWants + categoriesStore.incrementalAmount
                          );
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
            {categoriesStore.categoryBudgets[2] &&
            categoriesStore.categoryBudgets[2].data?.length > 0
              ? categoriesStore.categoryBudgets[2].data.map((category: any) => {
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
                            category_id: category?.category.id,
                            name: category?.name,
                            pseudo_name:
                              category?.name + " " + category?.category.emoji,
                            extern_id: category?.category.id,
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
