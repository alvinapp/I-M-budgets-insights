import React from "react";
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
const BudgetsView = () => {
  const navigate = useNavigate();
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const setUser = useUserStore((state: any) => state.setUser);
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  //Remove this query for token and make sure its on the first page of this package
  const { data } = useQuery(
    ["token"],
    () =>
      getToken(config).then((res) => {
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
  const { isFetching: fetchingEssentailsBudget } = useQuery(
    "essentials-budgets",
    () =>
      fetchBudgetCategories({
        configuration: config,
        macrogoal_id: 1,
      }).then((result) => console.log(result)),
    { enabled: !!config.token }
  );
  return (
    <div className="h-screen w-screen">
      <div className="px-3.5 flex flex-col">
        <NavBar
          children={
            <div className="flex flex-row items-center justify-between mt-6">
              <NavBarTitle title="Budget" fontSize="text-2xl" />
              <div className="h-6 w-6 rounded-full">
                {/* <FiSettings color="#4E6783" size="1.25rem" /> */}
              </div>
            </div>
          }
        />
        <div className="mt-6">
          <HorizontalDateToggle />
        </div>
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mt-3"></div>
      <div className="flex flex-col mx-3.5  mt-8">
        <div className="flex flex-row items-center justify-between">
          <AvailableBudgetContainer
            amount={160300}
            subtitle="Available budget spend"
            currencySymbol={currencySymbol}
          />
          <div className="flex flex-col justify-center">
            <InsightsButton onClick={() => navigate("/insights-view")} />
          </div>
        </div>
        <div className="mt-11">
          <TooltipProgressBar progressPercent={25} />
        </div>
        <div className="mt-2">
          <MacroProgressBarsContainer
            ratios="50/30/20"
            budgetAmount={{
              wantsBudget: 150000,
              essentialsBudget: 90000,
              savingsBudget: 60000,
            }}
            progressPercentage={{
              wantsProgress: 50,
              essentialsProgress: 30,
              savingsProgress: 40,
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
            amount={52020}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {essentials && essentials.length > 0 ? (
              essentials.map((essential: any, i: any) => {
                return (
                  <CategoryViewCard
                    key={i}
                    category={essential.name}
                    progressPercentage={essential.percentage}
                    icon={essential.emoji}
                    amount={essential.amount}
                    budgetAmount={essential.budget}
                    spentAmount={essential.spent}
                    iconBg="bg-skin-secondaryWithOpacity"
                    baseBgColor="#D0DDEA"
                    bgColor="#056489"
                    primaryColor="text-skin-primary"
                    fadedColor="text-skin-neutral"
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3">
          <CategoryCardHeader
            title="Wants"
            amount={9950}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {wants && wants.length > 0 ? (
              wants.map((want: any, i: any) => {
                return (
                  <CategoryViewCard
                    key={i}
                    category={want.name}
                    progressPercentage={want.percentage}
                    icon={want.emoji}
                    amount={want.amount}
                    budgetAmount={want.budget}
                    spentAmount={want.spent}
                    iconBg="bg-skin-secondary3WithOpacity"
                    baseBgColor="#E8E3DC"
                    bgColor="#A28D72"
                    primaryColor="text-skin-alvinBrown"
                    fadedColor="text-skin-alvinBrownFaded"
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-card pt-6 pb-4 px-3.5 mt-3 mb-8">
          <CategoryCardHeader
            title="Savings"
            amount={15500}
            caption="Available"
            currencySymbol={currencySymbol}
          />
          <div className="mt-6 flex flex-col">
            {savings && savings.length > 0 ? (
              savings.map((savings: any, i: any) => {
                return (
                  <CategoryViewCard
                    key={i}
                    category={savings.name}
                    progressPercentage={savings.percentage}
                    icon={savings.emoji}
                    amount={savings.amount}
                    budgetAmount={savings.budget}
                    spentAmount={savings.spent}
                    iconBg="bg-skin-secondaryWithOpacity"
                    baseBgColor="#D6EAD4"
                    bgColor="#33982A"
                    primaryColor="text-skin-success"
                    fadedColor="text-skin-successSecondary"
                    caption="saved"
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BudgetsView;
