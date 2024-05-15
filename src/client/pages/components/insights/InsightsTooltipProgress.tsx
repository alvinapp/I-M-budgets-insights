import React from "react";
import "../../components/ToolTipProgressBar/TooltipProgressBar.css";

interface TooltipProgressBarProps {
  backgroundColor?: string;
  progressPercent: number;
  startDate: Date;
  endDate: Date;
}

const InsightsTooltipProgressBar: React.FC<TooltipProgressBarProps> = ({
  backgroundColor = "#E7EDF3",
  progressPercent,
  startDate,
  endDate,
}) => {
  const now = new Date();
  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Check if the period is exactly one month and matches the current month
  const isCurrentFullMonth = startDate && endDate &&
    startDate.getDate() === startOfCurrentMonth.getDate() &&
    startDate.getMonth() === startOfCurrentMonth.getMonth() &&
    startDate.getFullYear() === startOfCurrentMonth.getFullYear() &&
    endDate.getDate() === endOfCurrentMonth.getDate() &&
    endDate.getMonth() === endOfCurrentMonth.getMonth() &&
    endDate.getFullYear() === endOfCurrentMonth.getFullYear();

  // Adjust progress tooltip logic
  const progressStyle = {
    background:
      "linear-gradient(65.42deg, rgba(11, 62, 175, 1) 0%, rgba(157, 177, 198, 1) 52.44%, rgba(20, 181, 195, 1) 100%)",
    width: `${progressPercent}%`,
  };

  const tooltipStyle = {
    left: `calc(${progressPercent}% - 2em)`, // Use progressPercent for tooltip position
    transform: "scale(0.8)",
    background: "black",
    height: "30px",
    width: "60px",
    fontFamily: "Poppins",
    fontSize: "14px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    display: isCurrentFullMonth ? "block" : "none", // Only display if isCurrentFullMonth
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
        <div className="tooltip-progress-bar" style={{ backgroundColor }}>
          <div
            className="tooltip-progress-bar-progress"
            style={progressStyle}
          ></div>
          {isCurrentFullMonth && (
            <div className="tooltip" style={tooltipStyle}>
              Today
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightsTooltipProgressBar;
