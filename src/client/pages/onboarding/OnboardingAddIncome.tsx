import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import ArrowBackButton from "../components/ArrowBack";
import MonthlyIncomeInput from "../components/onboarding/MonthlyIncomeInput";

const OnboardingAddIncome = () => {
  const navigate = useNavigate();
  const budgetSettingsStore = useBudgetSettingsStore();
  const { currency } = budgetSettingsStore;
  const [monthlyIncomeValue, setMonthlyIncomeValue] = useState(budgetSettingsStore.monthlyIncome);

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between pt-6 pb-2 pr-6">
            <ArrowBackButton onClick={() => navigate(-1)} />
          </div>
        }
      />

      <div className="h-1/4">
        <div className="flex flex-col mt-6 mx-10 items-left">
          <FiBriefcase height="16.67px" width="18.33px" fill="#33982A" />
          <div className="font-workSans font-semibold text-xl tracking-subtitle mt-4">
            What's your monthly net income?
          </div>
          <div className="text-xs font-poppins text-[#878787] tracking-longtext mt-4">
            We need to use this as a base calculation for your overall monthly budget.
            You can always modify later.
            <br></br>
            <a href="/404-not-found">Learn More</a>
          </div>
        </div>
        <div className="flex flex-col mt-32 mx-10 items-center">
          <MonthlyIncomeInput
            value={monthlyIncomeValue}
            maxValue={Number.MAX_SAFE_INTEGER}
            currencySymbol={currency}
            onChange={setMonthlyIncomeValue}
          />
          <div className="text-[10px] font-poppins text-[#B0B0B0] text-center mt-1">
            *equals your overall monthly budget
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Continue"
          isDisabled={false}
          click={() => {
            budgetSettingsStore.setMonthlyIncome(monthlyIncomeValue);
            navigate("/onboard-split-income");
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingAddIncome;
