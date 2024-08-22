import React from "react";
import RandomExpenditureComparisonCard from "./insights/RandomCompareComparison";

interface MacroPieChartLegendProps {
  color: string;
  text: string;
  percentage: number;
  percentageChange: number;
  showComparison?: boolean;
  showUnallocated?: boolean;
}

const MacroPieChartLegend: React.FC<MacroPieChartLegendProps> = ({
  color,
  text,
  percentage,
  percentageChange = 0,
  showUnallocated = true,
  showComparison = false,
}) => {
  if (!showUnallocated) {
    return <div></div>;
  }
  return (
    <div
      className="flex flex-row items-center justify-start space-x-1.5"
      style={{
        width: "fit-content",
      }}
    >
      <div
        className="rounded-full bg-skin-neutral h-3 w-3"
        style={{
          background: color,
        }}
      ></div>
      <div className="font-primary text-xs text-skin-base tracking-longest_text">
        {text} ({percentage}%){" "}
        {percentage !== 0 && showComparison ? (
          <RandomExpenditureComparisonCard percentage={percentageChange ?? 0} />
        ) : null}
      </div>
    </div>
  );
};

export default MacroPieChartLegend;
