import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import MainButton from "../components/MainButton";

const OnboardingSuccess = () => {
  const navigate = useNavigate();
  const budgetSettingsStore = useBudgetSettingsStore();
  const { incomeSplit } = budgetSettingsStore;

  const [essentialsRatio, setEssentialsRatio] = useState(
    incomeSplit.essentials
  );
  const [wantsRatio, setWantsRatio] = useState(incomeSplit.wants);
  const [savingsRatio, setSavingsRatio] = useState(incomeSplit.savings);

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <div className="h-3/4">
        <div className="flex flex-col mt-4 mx-10 items-left">
          <div className="font-workSans font-semibold text-xl tracking-subtitle">
            Great Job!
          </div>
          <div className="text-xxs font-poppins tracking-longtext mt-4">
            This looks like a very balanced budget and a great roadmap for you
            to hit your financial goals. We will notify you whenever you
            overspend in a category so that you can stay on track.
            <br></br>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Add Category Budgets"
          isDisabled={true}
          click={() => {
            navigate("/category-budgets");
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingSuccess;
