import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import Clouds from "client/assets/json_lottie/clouds.json";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import SuccessButton from "../components/SuccessButton";
import BudgetSplitChart from "../components/onboarding/BudgetSplitChart";
import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import useUserStore from "client/store/userStore";
import { capitalize } from "client/utils/Formatters";
import successLoader from "client/assets/images/success-loader.svg";
import useBottomSheetStore from "client/store/bottomSheetStore";
import cloud1 from "client/assets/images/cloud1.svg";
import cloud2 from "client/assets/images/cloud2.svg";
const OnboardingSuccess = () => {
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
  // const cloudImage = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: Clouds,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
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
  const bottomSheetStore = useBottomSheetStore((state: any) => state);
  return (
    <div className="">
      {/* <div className="w-full">
        <img src={cloud1} />
        <img src={cloud2} />
      </div> */}
      <div className="flex flex-col">
        <div className="flex flex-row ml-4">
          <BudgetSplitChart
            dimensions={chartDimensions}
            doughnutThickness={doughnutThickness}
            values={budgetValues}
          />
        </div>
        <div className="mt-4 flex flex-row justify-center mx-4">
          <div className="font-custom text-skin-base text-xl text-center font-medium">
            Great job, {capitalize(user.first_name)}!
          </div>
        </div>
        <div className="text-sm font-primary tracking-wide text-skin-base text-center mt-4 font-normal mx-4">
          This looks like a very balanced budget and a great roadmap for you to
          hit your financial goals. We'll notify you whenever you may be
          overspending in category so you can stay on track.
        </div>
      </div>
      <div className="flex flex-col justify-end items-center mx-3.5 mt-4">
        {loading ? (
          <div className="mb-6">
            <img src={successLoader} alt="" />
          </div>
        ) : (
          <SuccessButton
            label="Ok"
            click={() => {
              bottomSheetStore.setSuccessBottomSheet(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default OnboardingSuccess;
