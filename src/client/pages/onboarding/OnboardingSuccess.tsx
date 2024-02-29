import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import Clouds from "client/assets/json_lottie/clouds.json";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { showCustomToast } from "client/utils/Toast";
import SuccessButton from "../components/SuccessButton";
import BudgetSplitChart from "../components/onboarding/BudgetSplitChart";
import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import useUserStore from "client/store/userStore";
const BookingSuccess = () => {
  const navigate = useNavigate();

  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const budgetSettingsStore = useBudgetSettingsStore();
  const user = useUserStore((state) => state.user);
  const [timer, setTimer] = useState(10);
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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 2000);
    if (timer === 0) {
      // navigate("/view-flight-details");
    }
  }, [timer, timeOutCallback]);
  const chartDimensions = 250;
  const doughnutThickness = 20;
  const budgetValues = { ...budgetSettingsStore.incomeSplit };
  return (
    <div className="h-screen bg-connectSuccessBg bg-cover w-screen relative">
      <div className="absolute w-full h-full">
        <Lottie options={cloudImage} />
      </div>
      <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
        <div className="mt-10 flex flex-row justify-center align-center">
          <BudgetSplitChart
            dimensions={chartDimensions}
            doughnutThickness={doughnutThickness}
            values={budgetValues}
          />
        </div>
        <div className="mt-6 flex flex-row justify-center mx-4">
          <div className="font-custom text-skin-white text-xl text-center font-medium">
            Great job, {user.first_name}!
          </div>
        </div>
        <div className="text-sm font-primary tracking-wide text-skin-white text-center mt-4 font-normal">
          This looks like a very balanced budget and a great roadmap for you to
          hit your financial goals. We'll notify you whenever you may be
          overspending in category so you can stay on track.
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex flex-col justify-end items-center mx-3.5">
        {!loading ? (
          <>
            <SuccessButton
              title="Maybe later"
              click={() => navigate("/budgets-view")}
              style={{
                border: "1px solid #fff",
                color: "#c9e0ea",
                backgroundColor: "transparent",
              }}
            />
            <SuccessButton
              title="Set category budgets"
              click={() => navigate("/budget-settings")}
              style={{
                marginTop: -8,
              }}
            />
          </>
        ) : (
          <SuccessButton
            loading={true}
            style={{
              backgroundColor: "#CDE0E7",
            }}
          />
        )}
      </div>
    </div>
  );
};
export default BookingSuccess;
