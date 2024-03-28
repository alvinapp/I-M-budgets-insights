import React from "react";
import AnimatedNumber from "./AnimatedNumber";

interface PercentageItemProps {
  color: string;
  percentage: number;
  label: string;
}

const PercentageItem: React.FC<PercentageItemProps> = ({
  color,
  percentage,
  label,
}) => {
  return (
    <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: color,
            borderRadius: "50%",
            width: 13,
            height: 13,
            marginRight: 8,
          }}
        ></div>
        <div className="flex flex-col items-start">
          <span className="font-custom font-medium text-base text-skin-base">
            <AnimatedNumber target={percentage ?? 0} duration={500} />
            {"%"}
          </span>
          <span className="font-primary text-xs text-skin-subtitle font-medium">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PercentageItem;
