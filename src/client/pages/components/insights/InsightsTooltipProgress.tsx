import React from "react";
import "../../components/ToolTipProgressBar/TooltipProgressBar.css";

interface TooltipProgressBarProps {
  backgroundColor?: string;
  progressPercent: number;
}

const InsightsTooltipProgressBar: React.FC<TooltipProgressBarProps> = ({
  backgroundColor = "#E7EDF3",
  progressPercent,
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

  const progressStyle = {
    background:
      "linear-gradient(65.42deg, rgba(8,127,162,0.54) 0%, rgba(193,138,76,0.37) 52.44%, rgba(89,182,81,0.49) 100%)",
    width: `${progressPercent}%`,
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
        <div className="font-poppins text-xs text-skin-subtitle font-medium tracking-wide">
          {monthStart.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="font-poppins text-xs text-skin-subtitle font-medium tracking-wide">
          {monthEnd.toLocaleDateString("en-US", {
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

export default InsightsTooltipProgressBar;
