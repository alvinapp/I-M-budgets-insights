import React from "react";
import macroBudget from "../../../assets/images/white_macro_budget.svg";

interface BudgetSplitChartProps {
  dimensions: number;
  doughnutThickness: number;
  values: {
    wants: number;
    essentials: number;
    savings: number;
  };
}

const BudgetSplitChart: React.FC<BudgetSplitChartProps> = ({
  dimensions,
  doughnutThickness,
  values,
}) => {
  const { wants, essentials, savings } = values;
  const total = wants + essentials + savings;

  const radius = dimensions / 2;
  const strokeWidth = doughnutThickness;
  const normalizedRadius = radius - strokeWidth * 2;

  const items = [
    { percentage: (essentials / total) * 100, color: "#6f89a5", label: "Essentials" },
    { percentage: (wants / total) * 100, color: "#9db1c6", label: "Wants" },
    { percentage: (savings / total) * 100, color: "#cfddea", label: "Savings" },
  ];

  let cumulativePercentage = 0;

  return (
    <svg height={dimensions + 80} width={dimensions + 100}>
      <g transform={`translate(${radius + 50}, ${radius + 50})`}>
        {items.map((item, index) => {
          const middleX =
            normalizedRadius *
            Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);
          const middleY =
            normalizedRadius *
            Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);

          const controlPointX =
            (normalizedRadius + 15) *
            Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage / 2.5)) / 100);
          const controlPointY =
            (normalizedRadius + 15) *
            Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage / 2.5)) / 100);

          const labelX =
            (normalizedRadius + 50) *
            Math.cos((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);
          const labelY =
            (normalizedRadius + 50) *
            Math.sin((2 * Math.PI * (cumulativePercentage + item.percentage / 2)) / 100);

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
            <>
              <path
                key={index}
                d={`M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d={`M ${middleX} ${middleY} Q ${controlPointX} ${controlPointY}, ${labelX} ${labelY}`}
                stroke="white"
                strokeOpacity={0.5}
                strokeWidth="2"
                fill="none"
              />
              <foreignObject x={labelX - 30} y={labelY - 20} width={60} height={40}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '12px', color: 'white', fontFamily: 'Poppins', fontWeight: 'bold'}}>{item.label}</div>
                  <div style={{fontSize: '12px', color: 'white', fontFamily: 'Poppins', fontWeight: 'bold'}}>({item.percentage.toFixed(0)}%)</div>
                </div>
              </foreignObject>
            </>
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
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={macroBudget}
              alt="icon"
              style={{ width: "24px", height: "24px" }}
            />
            <div className="font-poppins text-xxxxs tracking-longest_text mt-2" style={{ color: "white" }}>
              <span>Overall budget split</span>
            </div>
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};

export default BudgetSplitChart;
