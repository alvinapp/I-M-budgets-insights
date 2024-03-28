import React from "react";
import macroBudget from "../../assets/images/macro_budget.svg";

interface MacroPieChartProps {
  dimensions: number;
  doughnutThickness: number;
  values: {
    wants: number;
    essentials: number;
    savings: number;
    unallocated: number;
  };
}

const MacroPieChart: React.FC<MacroPieChartProps> = ({
  dimensions,
  doughnutThickness,
  values,
}) => {
  const { wants, essentials, savings, unallocated } = values;
  const total = wants + essentials + savings + unallocated;

  const radius = dimensions / 2;
  const strokeWidth = doughnutThickness;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const items = [
    { percentage: (unallocated / total) * 100, color: "#C3C3C3" },
    { percentage: (savings / total) * 100, color: "#71EBD7" },
    { percentage: (wants / total) * 100, color: "#8490E2" },
    { percentage: (essentials / total) * 100, color: "#4053D05" },
  ];

  let cumulativePercentage = 0;

  return (
    <svg height={dimensions} width={dimensions}>
      <g transform={`translate(${radius}, ${radius})`}>
        {items.map((item, index) => {
          const startX =
            normalizedRadius *
            Math.cos((2 * Math.PI * cumulativePercentage) / 100);
          const startY =
            normalizedRadius *
            Math.sin((2 * Math.PI * cumulativePercentage) / 100);

          const endX =
            normalizedRadius *
            Math.cos(
              (2 * Math.PI * (cumulativePercentage + item.percentage)) / 100
            );
          const endY =
            normalizedRadius *
            Math.sin(
              (2 * Math.PI * (cumulativePercentage + item.percentage)) / 100
            );

          const largeArcFlag = item.percentage > 50 ? 1 : 0;

          cumulativePercentage += item.percentage;

          return (
            <path
              key={index}
              d={`M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
              fill="none"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          );
        })}
        <foreignObject
          x={-radius}
          y={-radius}
          width={radius * 2}
          height={radius * 2}
          xmlns="http://www.w3.org/1999/xhtml"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              borderRadius: "50%", // Makes the content circular
              overflow: "hidden", // Ensures that content does not overflow outside the circle
            }}
          >
            <img
              src={macroBudget}
              alt="icon"
              style={{ width: "24px", height: "24px" }}
            />
            <div className="font-primary text-xxxxxs text-skin-subtitle tracking-longest_text">
              <span>Overall budget split</span>
            </div>
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};

export default MacroPieChart;
