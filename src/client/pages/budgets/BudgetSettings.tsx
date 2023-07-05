import React, { useEffect, useState } from "react";
import ArrowBackButton from "../components/ArrowBack";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import { FiBriefcase, FiPieChart } from "react-icons/fi";
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
import { saveBudget } from "client/api/budget";
import getToken from "client/api/token";
import { showCustomToast } from "client/utils/Toast";
import useUserStore from "client/store/userStore";
import { error } from "console";

export const BudgetSettings = () => {
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const categoriesStore = useCategoriesStore((state: any) => state);
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const setUser = useUserStore((state: any) => state.setUser);
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
        result
          .filter(
            (element: Category) => element.macro_type?.name === "Essentials"
          )
          .map((essentials: any, i: any) =>
            setEssentialsMapState(
              new Map(
                essentialsMapState.set(`data${i}`, {
                  amount: 0,
                  contribution_amount: 0,
                  percentage: 0,
                  category_id: 0,
                  name: "",
                  pseudo_name: "",
                  extern_id: 0,
                  order: 0,
                  contribution_at: "",
                  is_contribute_customized: true,
                })
              )
            )
          );
        result
          .filter((element: Category) => element.macro_type?.name === "Wants")
          .map((wants: any, i: any) =>
            setWantsMapState(
              new Map(
                essentialsMapState.set(`data${i}`, {
                  amount: 0,
                  contribution_amount: 0,
                  percentage: 0,
                  category_id: 0,
                  name: "",
                  pseudo_name: "",
                  extern_id: 0,
                  order: 0,
                  contribution_at: "",
                  is_contribute_customized: true,
                })
              )
            )
          );
      }),
    { refetchOnWindowFocus: false }
  );
  const wantsCategories = categoriesStore.categories?.filter(
    (element: Category) => element.macro_type?.name === "Wants"
  );
  const essentialsCategories = categoriesStore.categories?.filter(
    (element: Category) => element.macro_type?.name === "Essentials"
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
  //savings
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
          ],
        },
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  return (
    <div className="h-screen w-screen">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-4 pb-2">
            <CloseButton onClick={() => navigate(-1)} />
            <NavBarTitle title="Add Category Budgets" />
            <div className="h-6 w-6 rounded-full"></div>
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
            caption="300,000"
            currencySymbol={currencySymbol}
          />
        </div>
        <GeneralInfoCard
          iconBg="bg-skin-secondary3WithOpacity"
          icon={<FiPieChart />}
          title="Budget split"
          subtitle="We recommend a budget split of 50/30/20 for Essentials, Wants and Savings. Tap to edit your preferred limits."
          caption="50/30/20"
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
            budgetAmount={150000}
            percentageOfBudgetCaption="50% of overall budget"
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={150000}
            allocatedAmount={0}
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
                    increment={() => {
                      setSelectedEssentialId(i);
                      updateEssentialsMap(i, {
                        amount: data?.amount + 500,
                        contribution_amount: 0,
                        percentage: 0,
                        category_id: category?.id,
                        name: category?.name,
                        pseudo_name: "",
                        extern_id: 0,
                        order: 0,
                        contribution_at: "",
                        is_contribute_customized: true,
                      });
                    }}
                    decrement={() => {
                      setSelectedEssentialId(i);
                      updateEssentialsMap(i, {
                        amount: data?.amount - 500,
                        contribution_amount: 0,
                        percentage: 0,
                        category_id: 0,
                        name: "",
                        pseudo_name: "",
                        extern_id: 0,
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
            budgetAmount={90000}
            percentageOfBudgetCaption="30% of overall budget"
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={90000}
            allocatedAmount={0}
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
            {wantsCategories && wantsCategories.length > 0 ? (
              wantsCategories.map((category: Category, i: any) => {
                const isSelected = i === selectedWantsId;
                const data = wantsMapState.get(`data${i}`);
                return (
                  <BudgetSettingCard
                    key={i}
                    category={category?.name}
                    emoji={category?.emoji}
                    amount={data?.amount}
                    selected={isSelected}
                    increment={() => {
                      setSelectedWantsId(i);
                      // categoriesStore.incrementCategoryAmount();
                      updateWantsMap(i, {
                        amount: data?.amount + 500,
                        contribution_amount: 0,
                        percentage: 0,
                        category_id: category?.id,
                        name: category?.name,
                        pseudo_name: "",
                        extern_id: 0,
                        order: 0,
                        contribution_at: "",
                        is_contribute_customized: true,
                      });
                    }}
                    decrement={() => {
                      setSelectedWantsId(i);
                      // categoriesStore.decrementCategoryAmount();
                      updateWantsMap(i, {
                        amount: data?.amount - 500,
                        contribution_amount: 0,
                        percentage: 0,
                        category_id: 0,
                        name: "",
                        pseudo_name: "",
                        extern_id: 0,
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
        <div className="px-4 pt-5 pb-3 mt-4.5 rounded-lg">
          <BudgetDisplay
            title="Savings"
            budgetAmount={60000}
            percentageOfBudgetCaption="20% of overall budget"
            unallocatedCaption="Unallocated"
            allocatedCaption="Allocated"
            unallocatedAmount={60000}
            allocatedAmount={0}
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
            <BudgetSettingCard
              category="Create a goal"
              emoji="🎯"
              amount={categoriesStore.categoryAmount}
              increment={() => {
                categoriesStore.incrementCategoryAmount();
              }}
              decrement={() => {
                categoriesStore.decrementCategoryAmount();
              }}
            />
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
                console.log(res);
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
