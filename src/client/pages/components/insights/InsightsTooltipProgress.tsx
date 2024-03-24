import React from "react";
import "../../components/ToolTipProgressBar/TooltipProgressBar.css";

interface TooltipProgressBarProps {
  backgroundColor?: string;
  progressPercent: number;
  startDate: Date;
}

const InsightsTooltipProgressBar: React.FC<TooltipProgressBarProps> = ({
  backgroundColor = "#E7EDF3",
  progressPercent,
  startDate,
}) => {
  const date = startDate ?? new Date();
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
      "linear-gradient(65.42deg, rgba(11, 62, 175, 1) 0%, rgba(157, 177, 198, 1) 52.44%, rgba(20, 181, 195, 1) 100%)",
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
