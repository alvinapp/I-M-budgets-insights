// Graph.tsx

import React, { FC, useState, useEffect } from "react";
import "./Graph.css";
import AnimatedNumber from "client/pages/components/AnimatedNumber";
import { checkNAN } from "client/utils/Formatters";

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
          style={{
            height: `${checkNAN(earnedHeight)}%`,
            background: "#2676B8",
          }}
        >
          <div className={`barValue${showEarnedValue ? " show" : ""}`}>
            + <AnimatedNumber target={parseInt((earned).toFixed(0))} duration={500} />
          </div>
        </div>
        <div
          className="bar"
          style={{ height: `${checkNAN(spentHeight)}%`, background: "#009FDC" }}
        >
          <div className={`barValue${showSpentValue ? " show" : ""}`}>
            - <AnimatedNumber target={Math.abs(parseInt((spent).toFixed(0)))} duration={500} />
          </div>
        </div>
      </div>
      <div className="legend">
        <div className="font-primary text-xs text-skin-subtitle font-medium tracking-subtitle">
          <span
            style={{
              background: "#2676B8",
            }}
          ></span>{" "}
          Total earned
        </div>
        <div
          style={{ marginLeft: "1rem" }}
          className="font-primary text-xs text-skin-subtitle font-medium tracking-subtitle"
        >
          <span style={{ background: "#009FDC" }}></span> Total spent
        </div>
      </div>
    </div>
  );
};

export default Graph;
