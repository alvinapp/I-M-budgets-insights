import React from "react";
import "./TooltipProgressBar.css";

interface TooltipProgressBarProps {
  backgroundColor?: string;
  progressPercent: number;
  progressTooltip: number;
  showProgressTooltip?: boolean;
  activeMonth: Date;
}

const TooltipProgressBar: React.FC<TooltipProgressBarProps> = ({
  backgroundColor = "#E7EDF3",
  progressPercent,
  progressTooltip,
  showProgressTooltip = true,
  activeMonth,
}) => {
  const date = new Date();
  const currentDay = date.getDate();
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const monthStart = new Date(activeMonth.getFullYear(), activeMonth.getMonth(), 1);
  const monthEnd = new Date(activeMonth.getFullYear(), activeMonth.getMonth() + 1, 0);

  const progress = (currentDay / daysInMonth) * 100;

  const progressStyle = {
    background: "linear-gradient(65.42deg, rgba(11, 62, 175, 1) 0%, rgba(157, 177, 198, 1) 52.44%, rgba(20, 181, 195, 1) 100%)",
    width: `${progressPercent}%`,
  };

  const tooltipStyle = {
    left: `calc(${progressTooltip}% - 2.1em)`,
    transform: "scale(0.8)",
    background: "black",
    height: "30px",
    width: "60px",
    fontFamily: "Poppins",
    fontSize: "14px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div className="row">
      <div className="font-poppins text-xxs text-skin-subtitle tracking-longest_text">
        {monthStart.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </div>
      <div className="tooltip-progress-bar" style={{ backgroundColor }}>
        <div
          className="tooltip-progress-bar-progress"
          style={progressStyle}
        ></div>
        {showProgressTooltip && <div
          className="dotted-divider-container"
          style={{ left: `calc(${progressTooltip}%)` }}
        >
          <div className="dotted-divider"></div>
        </div>}
        {showProgressTooltip && <div className="tooltip" style={tooltipStyle}>
          Today
        </div>}
      </div>
      <div className="font-poppins text-xxs text-skin-subtitle tracking-longest_text">
        {monthEnd.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </div>
    </div>
  );
};

export default TooltipProgressBar;
