// Graph.tsx

import React, { FC, useState, useEffect } from "react";
import "./Graph.css";

interface Props {
  earned: number;
  spent: number;
}

const Graph: FC<Props> = ({ earned, spent }) => {
  const maxVal = Math.max(earned, Math.abs(spent));

  const [earnedHeight, setEarnedHeight] = useState(0);
  const [spentHeight, setSpentHeight] = useState(0);
  const [showEarnedValue, setShowEarnedValue] = useState(false);
  const [showSpentValue, setShowSpentValue] = useState(false);

  useEffect(() => {
    const delayHeight = 100; // Adjust as necessary for initial delay
    const earnedHeightTimeout = setTimeout(() => {
      setEarnedHeight((earned / maxVal) * 100);
      setShowEarnedValue(true);
    }, delayHeight);

    const spentHeightTimeout = setTimeout(() => {
      setSpentHeight((Math.abs(spent) / maxVal) * 100);
      setShowSpentValue(true);
    }, delayHeight + 50); // Staggered delay for the second bar

    return () => {
      clearTimeout(earnedHeightTimeout);
      clearTimeout(spentHeightTimeout);
    };
  }, [earned, spent, maxVal]);

  return (
    <div className="graph">
      <div className="graphContainer">
        <div
          className="bar"
          style={{ height: `${earnedHeight}%`, backgroundColor: "#0d40b0" }}
        >
          <div className={`barValue${showEarnedValue ? " show" : ""}`}>
            + {earned.toLocaleString()}
          </div>
        </div>
        <div
          className="bar"
          style={{ height: `${spentHeight}%`, backgroundColor: "#11b1bf" }}
        >
          <div className={`barValue${showSpentValue ? " show" : ""}`}>
            - {Math.abs(spent).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="legend">
        <div className="font-poppins text-xs text-skin-subtitle font-medium tracking-subtitle">
          <span style={{ backgroundColor: "#0d40b0" }}></span> Total earned
        </div>
        <div
          style={{ marginLeft: "1rem" }}
          className="font-poppins text-xs text-skin-subtitle font-medium tracking-subtitle"
        >
          <span style={{ backgroundColor: "#11b1bf" }}></span> Total spent
        </div>
      </div>
    </div>
  );
};

export default Graph;
