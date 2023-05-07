import { useNavigate } from "react-router-dom";

import MainButton from "../components/MainButton";

const OnboardingAddIncome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <div className="h-1/4 absolute top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute top-16 left-0 right-0 flex flex-col items-center">
            <div className="font-workSans font-semibold text-xl tracking-subtitle">
              What's your monthly net income?
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
          <div className="text-xxxs font-poppins tracking-longtext text-center mt-4">
            We need to use this as a base calculation for your overall monthly budget.
            You can always modify later.
            <br></br>
            <a href="/404-not-found">Learn More</a>
          </div>
      </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Continue"
          click={() => {
            navigate("/onboard-split-income");
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingAddIncome;
