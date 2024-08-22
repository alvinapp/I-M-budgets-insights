import React, { useEffect, useRef } from "react";
import "./BouncingPlane.css";
import planeBackground from "client/assets/images/family-thumb.svg";
import planePNG from "client/assets/images/successHand.svg";

const BouncingPlane = () => {
  const planeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const plane = planeRef.current;
    const animate = () => {
      if (plane) {
        plane.style.animation = "bouncing 1s infinite";
      }
    };
    animate();
  }, []);

  return (
    <div className="">
      <div className="h-[15rem] w-[15rem] ">
        <img
          src={planeBackground}
          alt="plane background"
          className="h-auto w-full"
        />
      </div>
      {/* <img
        ref={planeRef}
        src={planePNG}
        alt="plane"
        className="bouncing-plane"
      /> */}
    </div>
  );
};

export default BouncingPlane;
