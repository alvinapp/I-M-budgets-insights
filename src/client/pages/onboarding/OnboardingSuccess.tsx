import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import Clouds from "client/assets/json_lottie/clouds.json";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { showCustomToast } from "client/utils/Toast";
import SuccessButton from "../components/SuccessButton";
const BookingSuccess = () => {
  const navigate = useNavigate();

  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const [timer, setTimer] = useState(10);
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
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    if (timer === 0) {
      // navigate("/view-flight-details");
    }
  }, [timer, timeOutCallback]);
  return (
    <div className="h-screen bg-connectSuccessBg bg-cover w-screen relative">
      <div className="absolute w-full h-full">
        <Lottie options={cloudImage} />
      </div>
      <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
        <div className="mt-72 flex flex-row justify-center mx-4">
          <div className="font-workSans text-skin-white text-xl text-center font-semibold">
            Great job,
          </div>
        </div>
        <div className="text-xxxs font-poppins tracking-longtext text-skin-white text-center mt-4">
          This looks like a very balanced budget and a great roadmap for you to
          hit your financial goals. We'll notify you whenever you may be
          overspending in category so you can stay on track.
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center mx-3.5">
        <SuccessButton loading={true} />
      </div>
    </div>
  );
};
export default BookingSuccess;
