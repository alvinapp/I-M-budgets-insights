import React from "react";

interface SegmentedBarProps {
  flexValue: number;
  bgColorTop: string;
  bgColorBottom: string;
  outsideLength: number;
  height?: number;
}

const SegmentedBar: React.FC<SegmentedBarProps> = ({
  flexValue,
  bgColorTop,
  bgColorBottom,
  outsideLength,
  height,
}) => {
  const containerStyle = {
    flex: flexValue,
    // width: `${maxLength}%`,
    borderRadius: "10px",
    height: "20px",
  };

  const progressBarStyle = {
    flex: flexValue,
    // width: `${maxLength}%`,
    // backgroundColor: bgColorBottom,
    background: bgColorBottom,
    overflow: "hidden",
    borderRadius: "500px",
    height: `${height}px`,
  };

  const innerContainerStyle = {
    width: `${outsideLength}%`,
    background: bgColorTop,
    borderRadius: "500px",
    height: `${height}px`,
  };

  return (
    <div style={containerStyle} className="">
      <div style={progressBarStyle} className="">
        <div style={innerContainerStyle}></div>
      </div>
    </div>
  );
};

export default SegmentedBar;
