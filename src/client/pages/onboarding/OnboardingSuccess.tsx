import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Clouds from "client/assets/json_lottie/clouds.json";
import { BallTriangle } from "react-loader-spinner";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import BudgetSplitChart from "../components/onboarding/BudgetSplitChart";
import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import cloud1 from "client/assets/images/budgets-insights/cloud1.svg";
import cloud2 from "client/assets/images/budgets-insights/cloud2.svg";
import useUserStore from "client/store/userStore";
const BookingSuccess = () => {
  const navigate = useNavigate();

  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const budgetSettingsStore = useBudgetSettingsStore();
  const user = useUserStore((state) => state.user);
  const [timer, setTimer] = useState(2);
  const [loading, setLoading] = useState(true);
  const timeOutCallback = useCallback(() => {
    setTimer((currTimer): number => currTimer - 1);
  }, []);
  const cloudImage = {
    loop: true,
    autoplay: true,
    animationData: Clouds,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // turn is loading off after 2 seconds

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 5000);
    if (timer === 0) {
      setLoading(false);
      navigate("/budget-settings");
    }
  }, [timer, timeOutCallback]);
  const chartDimensions = 230;
  const doughnutThickness = 18;
  const budgetValues = { ...budgetSettingsStore.incomeSplit };
  return (
    <div className="h-screen bg-successBg bg-cover w-screen relative">
      <div className="absolute top-20 right-4">
        <img src={cloud2} alt="" />
      </div>
      <div className="absolute top-24 left-10">
        <img src={cloud1} alt="" />
      </div>
      <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
        <div className="mt-10 flex flex-row justify-center align-center">
          <BudgetSplitChart
            dimensions={chartDimensions}
            doughnutThickness={doughnutThickness}
            values={budgetValues}
          />
        </div>
        <div className="mt-14 flex flex-row justify-center mx-4">
          <div className="font-custom text-skin-white text-xl text-center font-semibold">
            Great job, {user.first_name}!
          </div>
        </div>
        <div className="text-xs font-custom tracking-longtext text-skin-white text-center mt-4">
          This looks like a very balanced budget and a great roadmap for you to
          hit your financial goals. We'll notify you whenever you may be
          overspending in category so you can stay on track.
        </div>
      </div>
      <div className="fixed bottom-12 left-0 right-0 flex flex-col justify-end items-center mx-3.5">
        {loading ? (
          <BallTriangle
            height={35}
            width={35}
            radius={1.6}
            color="#ffffff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : null}
      </div>
    </div>
  );
};
export default BookingSuccess;
