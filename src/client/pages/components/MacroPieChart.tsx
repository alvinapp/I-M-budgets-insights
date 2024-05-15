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
  isLoading: boolean;
}

const MacroPieChart: React.FC<MacroPieChartProps> = ({
  dimensions,
  doughnutThickness,
  values,
  isLoading,
}) => {
  const { wants, essentials, savings, unallocated } = values;
  const total = wants + essentials + savings + unallocated;

  const radius = dimensions / 2;
  const strokeWidth = doughnutThickness;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const emptyItems = [
    { percentage: 70, color: "#e0e0e0" },
    { percentage: 30, color: "#f2f2f2" },
  ];

  let cumulativePercentage = 0;

  if (isLoading) {
    const animationStyles = `
        @keyframes smoothRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    return (
      <div>
        <svg height={dimensions} width={dimensions} style={{
          animation: "smoothRotate 2s linear infinite",
          transformOrigin: "center center",
        }}>
          <g transform={`translate(${radius}, ${radius})`}>
            {emptyItems.map((item, index) => {
              if (item.percentage === 0) return null; // Skip rendering for 0% segments

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
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                />
              );
            })}
          </g>
        </svg>
        <style>{animationStyles}</style>
      </div>
    );
  }

  // Update: Handle all values being zero by drawing a grey doughnut
  if (total === 0) {
    return (
      <svg height={dimensions} width={dimensions}>
        <g transform={`translate(${radius}, ${radius})`}>
          {emptyItems.map((item, index) => {
            if (item.percentage === 0) return null; // Skip rendering for 0% segments

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
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
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
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={macroBudget}
                alt="icon"
                style={{ width: "24px", height: "24px" }}
              />
              <div className="font-primary text-xxxxxs text-skin-subtitle tracking-longest_text">
                <span>Budget spread</span>
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    );
  }

  const items = [
    { percentage: (unallocated / total) * 100, color: "#e7e7e7" },
    { percentage: (savings / total) * 100, color: "#e5a711" },
    { percentage: (wants / total) * 100, color: "#354DAF" },
    { percentage: (essentials / total) * 100, color: "#01ab9e" },
  ];

  return (
    <svg height={dimensions} width={dimensions}>
      <g transform={`translate(${radius}, ${radius})`}>
        {items.map((item, index) => {
          if (item.percentage === 0) return null; // Skip rendering for 0% segments

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
              style={{
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
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
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={macroBudget}
              alt="icon"
              style={{ width: "24px", height: "24px" }}
            />
            <div className="font-primary text-xxxxxs text-skin-subtitle tracking-longest_text">
              <span>Budget spread</span>
            </div>
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};

export default MacroPieChart