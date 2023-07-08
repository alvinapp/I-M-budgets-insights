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

const OnboardingAddIncome = () => {
  const navigate = useNavigate();
  const budgetSettingsStore = useBudgetSettingsStore();
  const [loading, setLoading] = useState(false);
  const { currency } = budgetSettingsStore;
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const [monthlyIncomeValue, setMonthlyIncomeValue] = useState(budgetSettingsStore.monthlyIncome || 300000);

  const postIncome = async (amount: number) => {
    setLoading(true);
    try {
      const response = await postData({
        endpoint: "/users/income",
        token: configuration.token,
        data: { amount },
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const { mutate: addIncome } = useMutation(postIncome);
  

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
        <div className="rounded-full h-11 w-11 bg-skin-successNeutralWithOpacity flex justify-center items-center mx-3.5">
          <FiBriefcase color="#33982A" />
        </div>
        <div className="font-workSans font-semibold text-xl tracking-title mt-1.5 mx-3.5">
          What's your monthly net income?
        </div>
        <div className="bg-splitBudgetBg bg-cover bg-no-repeat h-36 bg-right">
          <div className="text-xs font-poppins text-skin-subtitle tracking-wide mt-6 font-medium mx-3.5">
            We need to use this as a base calculation for your overall monthly
            budget. You can always modify later.
            <br></br>
            <a href="/404-not-found" className="underline">
              Learn More
            </a>
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
        <div className="text-xxxs font-poppins text-[#B0B0B0] text-center mt-2.5 tracking-longest_text">
          *equals your overall monthly budget
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
      <MainButton
        title="Continue"
        isDisabled={false}
        loading={loading}
        click={() => {
          budgetSettingsStore.setMonthlyIncome(monthlyIncomeValue);
          addIncome(monthlyIncomeValue);
          navigate("/onboard-split-income");
        }}
      />
    </div>
    </div>
  );
};

export default OnboardingAddIncome;
