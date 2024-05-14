import React, { CSSProperties } from "react";
import "./insightsVsTooltipProgress.css";

interface TooltipProgressBarProps {
  backgroundColor?: string;
  othersProgressSpend: number;
  myProgressSpend: number; // Added second progress
  startDate: Date;
  endDate: Date;
}

const InsightsVsTooltipProgressBar: React.FC<TooltipProgressBarProps> = ({
  backgroundColor = "#E7EDF3",
  othersProgressSpend,
  myProgressSpend, // Added second progress
  startDate,
  endDate
}) => {
  const now = new Date();
  const currentDay = now.getDate();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Check if the period is exactly one month and matches the current month
  const isCurrentFullMonth =
    startDate && endDate &&
    startDate.getDate() === startOfCurrentMonth.getDate() &&
    startDate.getMonth() === startOfCurrentMonth.getMonth() &&
    startDate.getFullYear() === startOfCurrentMonth.getFullYear() &&
    endDate.getDate() === endOfCurrentMonth.getDate() &&
    endDate.getMonth() === endOfCurrentMonth.getMonth() &&
    endDate.getFullYear() === endOfCurrentMonth.getFullYear();

  const progress = (currentDay / daysInMonth) * 100;

  const defaultCircleSize = 10;
  let myCircleSize = defaultCircleSize;

  if (othersProgressSpend === 100 && myProgressSpend === 100) {
    myCircleSize += 4;
  }

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
          {startDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="font-primary text-xs text-skin-subtitle font-medium tracking-wide">
          {endDate.toLocaleDateString("en-US", {
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
            <div className="vs-tooltip-progress-bar-circle" style={{
              width: `${myCircleSize}px`,
              height: `${myCircleSize}px`,
            }}></div>
          </div>
          <div
            className="vs-tooltip-progress-bar-progress2"
            style={{ ...progressStyle2, backgroundColor: "#101010" }}
          >
            <div className="vs-tooltip-progress-bar-circle2"></div>
          </div>
          {isCurrentFullMonth && <>
            <div
              className="dotted-divider-container"
              style={{ left: `calc(${Math.ceil(progress)}%)` }}
            >
              <div className="dotted-divider"></div>
            </div>
            <div className="tooltip" style={tooltipStyle}>
              Today
            </div>
          </>}
        </div>
      </div>
    </div>
  );
};

export default InsightsVsTooltipProgressBar;
