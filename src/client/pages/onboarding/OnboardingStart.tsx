import { useNavigate } from "react-router-dom";

import MainButton from "../components/MainButton";
import splashImage from "../../assets/images/splash-1.png";

const OnboardingStart = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <div className="h-1/4 absolute top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute top-16 left-0 right-0 flex flex-col items-center">
            <div className="font-workSans font-semibold text-xl tracking-subtitle">
              Setup Monthly Budget
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
        <div className="flex flex-row justify-center mt-4">
          <div className="w-96 h-96 bg-cover bg-local bg-center" style={{ backgroundImage: `url(${splashImage})` }}>
          </div>
        </div>
          <div className="mt-45 flex flex-row justify-center mx-4">
            <div className="font-workSans text-2xl text-center font-semibold">
              Unlock easy spend tracking and savings.
            </div>
          </div>
          <div className="text-xxs font-poppins tracking-longtext text-center mt-4">
            Set individual savings schedules or fun savings rules for each goal you have.
          </div>
      </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Start Budgeting"
          click={() => {
            navigate("/onboard-add-income");
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingStart;
