import React from "react";

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
            backgroundColor: color,
            borderRadius: "50%",
            width: 13,
            height: 13,
            marginRight: 8,
          }}
        ></div>
        <div className="flex flex-col items-start">
          <span className="font-workSans font-semibold text-base text-skin-base">{`${percentage}%`}</span>
          <span className="font-poppins text-xs text-skin-subtitle font-medium">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PercentageItem;
