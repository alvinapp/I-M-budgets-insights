import React from "react";

import styled from "styled-components";
import MacroProgressBar from "./MacroProgressBar";
import SegmentedBar from "./SegmentendBar";

interface SegmentedProgressBarProps {
  percentage: number;
  height: number;
  progressColorTop: string;
  progressColorBottom: string;
}

const SegmentedProgressBarContainer = styled.div<{ height: number }>`
  display: flex;
  height: ${({ height }) => height}px;
  width: 100%;
  gap: 4px;
  padding: 2px;
  background-color: transparent;
  border-radius: 12px;
  overflow: hidden;
`;

const SegmentedProgressBar: React.FC<SegmentedProgressBarProps> = ({
  percentage,
  height,
  progressColorTop,
  progressColorBottom,
}) => {
  const totalSegments = 4;
  const segmentValue = 25;

  return (
    <SegmentedProgressBarContainer height={height + 10}>
      {Array.from({ length: totalSegments }).map((_, index) => {
        const segmentStart = segmentValue * index;
        const segmentEnd = segmentValue * (index + 1);
        let filledWidth = 0;

        if (percentage > segmentStart) {
          if (percentage >= segmentEnd) {
            filledWidth = 100;
          } else {
            filledWidth = ((percentage - segmentStart) / segmentValue) * 100;
          }
        }

        return (
          <SegmentedBar
            flexValue={1}
            bgColorTop={progressColorTop}
            bgColorBottom={progressColorBottom}
            outsideLength={filledWidth}
            height={height}
          />
        );
      })}
    </SegmentedProgressBarContainer>
  );
};

export default SegmentedProgressBar;
