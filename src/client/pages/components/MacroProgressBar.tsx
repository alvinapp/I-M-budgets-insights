import React from "react";

interface MacroProgressBarProps {
  flexValue: number;
  bgColorTop: string;
  bgColorBottom: string;
  outsideLength: number;
  height?: number;
}

const MacroProgressBar: React.FC<MacroProgressBarProps> = ({
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
    backgroundColor: bgColorBottom,
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
    <div style={containerStyle} className="min-w-[100px]">
      <div style={progressBarStyle} className="min-w-[100px]">
        <div style={innerContainerStyle}></div>
      </div>
    </div>
  );
};

export default MacroProgressBar;
