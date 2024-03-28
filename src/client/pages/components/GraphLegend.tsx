import React from "react";

interface GraphLegendProps {
  color: string;
  label: string;
  isGradient?: boolean;
}

const GraphLegend: React.FC<GraphLegendProps> = ({
  color,
  label,
  isGradient = false,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div
        style={{
          background: isGradient ? `url(${color})` : color,
          borderRadius: "50%",
          width: 13,
          height: 13,
          marginRight: 4,
        }}
      ></div>
      <div className="font-primary text-xs text-skin-base">{label}</div>
    </div>
  );
};

export default GraphLegend;
