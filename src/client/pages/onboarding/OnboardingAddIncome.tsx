import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import ArrowBackButton from "../components/ArrowBack";
import MonthlyIncomeInput from "../components/onboarding/MonthlyIncomeInput";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { useMutation, useQuery } from "react-query";
import { postData } from "client/api/api";
import { setDefaultIncomeValue } from "client/utils/Formatters";

const OnboardingAddIncome = () => {
  const navigate = useNavigate();
  const budgetSettingsStore = useBudgetSettingsStore();
  const { currency } = budgetSettingsStore;
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const defaultIncome = setDefaultIncomeValue(currency);
  const [monthlyIncomeValue, setMonthlyIncomeValue] = useState(
    budgetSettingsStore.monthlyIncome || defaultIncome
  );

  const postIncome = async (amount: any) => {
    const finalAmount = parseInt(amount);
    try {
      const response = await postData({
        endpoint: "/users/income",
        token: configuration.token,
        data: { amount: finalAmount },
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const { isFetching: settingIncome, refetch: addIncome } = useQuery(
    "set-monthly-income",
    () => postIncome(monthlyIncomeValue),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between pt-6 pb-2 pr-6">
            <ArrowBackButton onClick={() => navigate(-1)} />
          </div>
        }
      />
      <div className="flex-grow h-px bg-skin-accent3"></div>
      <div className="flex flex-col mt-3 items-left">
        <div className="rounded-full h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5">
          <FiBriefcase color="#101010" />
        </div>
        <div className="font-custom font-medium text-2xl mt-1.5 mx-3.5 text-skin-base">
          What's your monthly net income?
        </div>
        <div className="bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right">
          <div className="text-sm font-primary text-skin-base tracking-wide mt-6 font-normal mx-3.5">
            We need to use this as a base calculation for your overall monthly
            budget. You can always modify later.
            <br></br>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-18 mx-4.5 items-center">
        <MonthlyIncomeInput
          value={monthlyIncomeValue}
          maxValue={Number.MAX_SAFE_INTEGER}
          currencySymbol={currency}
          onChange={setMonthlyIncomeValue}
        />
        <div className="text-sm font-primary text-skin-base text-center mt-2.5 tracking-wide">
          *equals your overall monthly budget
        </div>
      </div>

      <div className="fixed bottom-5 left-0 right-0 mx-3.5">
        <MainButton
          title="Continue"
          isDisabled={false}
          loading={settingIncome}
          click={() => {
            budgetSettingsStore.setMonthlyIncome(monthlyIncomeValue);
            addIncome().then((response: any) => {
              if (response?.data.errors) {
                return;
              } else {
                navigate("/onboard-split-income");
              }
            });
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingAddIncome;
