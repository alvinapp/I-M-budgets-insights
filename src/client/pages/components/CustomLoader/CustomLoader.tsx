import React from "react";
import BouncingPlane from "./BouncingPlane/BouncingPlane";
import Clouds from "client/assets/json_lottie/clouds.json";
import LinearProgress from "./LinearProgress";

interface LoadingScreenProps {
  duration: number;
  color: string;
  messages: string[];
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  duration,
  color,
  messages,
}) => {
  const planeMarginTop = "150px";

  const ballTriangleStyle = {
    position: "fixed",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const cloudImage = {
    loop: true,
    autoplay: true,
    animationData: Clouds,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div style={{ marginTop: planeMarginTop }}>
        <BouncingPlane />
      </div>
      <div className="font-custom text-skin-base font-bold text-xl mt-7">
        Hurray! Account linked.
      </div>
      <LinearProgress color={color} duration={duration} messages={messages} />
    </div>
  );
};

export default LoadingScreen;
