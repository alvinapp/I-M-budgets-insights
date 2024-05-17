import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { BallTriangle } from "react-loader-spinner";

const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  justify-content: center;
`;

const textFadeInOut = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
`;

const ProgressBar = styled.div<{ duration: number; color: string }>`
  width: 300px;
  height: 3px;
  background-color: #d3d3d3;
  border-radius: 10px;
  margin-top: 1rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    animation: progressAnimation ${({ duration }) => duration}s linear forwards,
      ${({ duration }) => duration / 1.2}s infinite;
  }

  @keyframes progressAnimation {
    to {
      width: 100%;
    }
  }
`;

const LinearProgress = ({
  duration,
  color,
  messages,
}: {
  duration: number;
  color: string;
  messages: string[];
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex >= messages.length - 1) {
          clearInterval(interval);
          return -1;
        }
        return prevIndex + 1;
      });
    }, (duration * 1000) / messages.length);
  }, [duration, messages.length]);

  return (
    <Container>
      <ContentWrapper>
        <ProgressBar duration={duration} color={color} />
        <div
          className="w-full flex justify-center items-center flex-row gap-2"
          style={{ marginTop: "1rem" }}
        >
          <div
            className="font-custom"
            style={{
              color: "#101010",
              textAlign: "center",
              // fontWeight: 500,
              // animation: `fadeInOut ${(duration * 1000) / messages.length / 1.2}ms infinite`,
            }}
          >
            {currentMessageIndex === -1
              ? "Processing your request"
              : messages[currentMessageIndex]}
          </div>
          <BallTriangle
            height={25}
            width={25}
            color={color}
            visible={true}
            radius={1.5}
          />
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default LinearProgress;
