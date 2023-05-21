import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import ArrowBackButton from "../components/ArrowBack";

const OnboardingAddIncome = () => {
  const navigate = useNavigate();
  const budgetSettingsStore = useBudgetSettingsStore();
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
        <div className="flex flex-col mt-14 mx-10 items-left">
          <div className="font-workSans font-semibold text-xl tracking-subtitle">
            What's your monthly net income?
          </div>
          <div className="text-xxs font-poppins tracking-longtext mt-4">
            We need to use this as a base calculation for your overall monthly budget.
            You can always modify later.
            <br></br>
            <a href="/404-not-found">Learn More</a>
          </div>
        </div>
        <div className="flex flex-col mt-48 mx-10 px-40 items-center">
          <input
            type="number"
            name="monthly-net-income"
            id="monthlyNetIncome"
            className="block w-full border-0 border-transparent border-b-2 border-b-neutral-800 py-4 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="0"
            value={monthlyIncomeValue}
            onChange={((e) => setMonthlyIncomeValue(Number(e.target.value)))}
          />
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
