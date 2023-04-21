import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import Clouds from "client/assets/json_lottie/clouds.json";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import { findBookedFlight } from "client/api/flights";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useFlightStore from "client/store/flightStore";
import { showCustomToast } from "client/utils/Toast";
const BookingSuccess = () => {
  const navigate = useNavigate();
  const flightStore = useFlightStore((state: any) => state);
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const { data, refetch: findCurrentBookedFlight } = useQuery(
    "find-booked-flight",
    () =>
      findBookedFlight({
        configuration: configurations,
        flightBookingId: flightStore.bookedFlightId.flightConfirmationId,
      }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const [timer, setTimer] = useState(12);
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
    findCurrentBookedFlight().then((res) => {
      if (res.data && Object.keys(res.data).length > 0) {
        flightStore.setBookedFlightInfo(res.data);
        navigate("/view-flight-details");
      } else {
        showCustomToast({
          message: `${res.data.responseMessage}`,
        });
        navigate(-2);
      }
    });
  }, [timer, timeOutCallback]);
  return (
    <div className="h-screen bg-connectSuccessBg bg-cover w-screen relative">
      <div className="absolute w-full h-full">
        <Lottie options={cloudImage} />
      </div>
      <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
        <div className="mt-72 flex flex-row justify-center mx-4">
          <div className="font-workSans text-skin-white text-2xl text-center font-semibold">
            Whoop! Your flight is booked and waiting for you!
          </div>
        </div>
        <div className="text-xxxs font-poppins tracking-longtext text-skin-white text-center mt-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in
          reprehenderit.
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <BallTriangle
          height={50}
          width={50}
          color="#ffffff"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    </div>
  );
};
export default BookingSuccess;
