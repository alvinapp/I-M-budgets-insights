import React, { CSSProperties } from "react";
import "./insightsVsTooltipProgress.css";

interface TooltipProgressBarProps {
  backgroundColor?: string;
  othersProgressSpend: number;
  myProgressSpend: number; // Added second progress
}

const InsightsVsTooltipProgressBar: React.FC<TooltipProgressBarProps> = ({
  backgroundColor = "#E7EDF3",
  othersProgressSpend,
  myProgressSpend, // Added second progress
}) => {
  const date = new Date();
  const currentDay = date.getDate();
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const progress = (currentDay / daysInMonth) * 100;

  const progressStyle: CSSProperties = {
    backgroundColor: "#6f89a5",
    width: `${othersProgressSpend}%`,
    height: `100%`,
    zIndex: othersProgressSpend < myProgressSpend ? 2 : 1,
    position: "absolute" as "absolute",
  };

  const progressStyle2: CSSProperties = {
    ...progressStyle,
    width: `${myProgressSpend}%`,
    zIndex: myProgressSpend < othersProgressSpend ? 2 : 1,
    position: "absolute" as "absolute",
  };

  const tooltipStyle = {
    left: `calc(${progress}% - 2em)`,
    transform: "scale(0.8)",
    background: "black",
    height: "30px",
    width: "60px",
    fontFamlily: "Poppins",
    fontSize: "14px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="font-primary text-xs text-skin-subtitle font-medium tracking-wide">
          {monthStart.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="font-primary text-xs text-skin-subtitle font-medium tracking-wide">
          {monthEnd.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
      <div className="flex flex-row mt-2.5 w-full">
        <div className="vs-tooltip-progress-bar" style={{ backgroundColor }}>
          <div
            className="vs-tooltip-progress-bar-progress"
            style={{ ...progressStyle, backgroundColor: "#6f89a5" }}
          >
            <div className="vs-tooltip-progress-bar-circle"></div>
          </div>
          <div
            className="vs-tooltip-progress-bar-progress2"
            style={{ ...progressStyle2, backgroundColor: "#cac969" }}
          >
            <div className="vs-tooltip-progress-bar-circle2"></div>
          </div>
          <div
            className="dotted-divider-container"
            style={{ left: `calc(${Math.ceil(progress)}%)` }}
          >
            <div className="dotted-divider"></div>
          </div>
          <div className="tooltip" style={tooltipStyle}>
            Today
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsVsTooltipProgressBar;
