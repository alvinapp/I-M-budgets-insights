import React, { useEffect, useRef } from 'react';
import './BouncingPlane.css';
import planeBackground from 'client/assets/images/plane_backg.png';
import planePNG from 'client/assets/images/successHand.svg';

const BouncingPlane = () => {
  const planeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const plane = planeRef.current;
    const animate = () => {
      if (plane) {
        plane.style.animation = 'bouncing 1s infinite';
      }
    };
    animate();
  }, []);

  return (
    <div className="plane-container">
      <img
        src={planeBackground}
        alt="plane background"
        className="plane-background"
      />
      <img
        ref={planeRef}
        src={planePNG}
        alt="plane"
        className="bouncing-plane"
      />
    </div>
  );
};

export default BouncingPlane;