import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { GoLock } from "react-icons/go";

interface SliderThumbComponentProps {
  valueNow: number;
  backgroundColor?: string;
  isLocked?: boolean;
  showPercentage?: boolean;
  props?: any;
}

const SliderThumbComponent: React.FC<SliderThumbComponentProps> = ({
  valueNow,
  showPercentage,
  isLocked,
  backgroundColor,
  props,
}) => {
  console.log("background color", backgroundColor);
  return (
    <div
      {...props}
      style={{
        ...props?.style,
        height: "27px",
        width: "27px",
        borderRadius: "50%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "19px",
          width: "19px",
          borderRadius: "50%",
          backgroundColor: backgroundColor ? backgroundColor : "#144CBC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "-3px",
        }}
      >{isLocked ?
        <GoLock color="white" height={15} width={5} />
        : <>
          <FiMoreVertical color="white" height={15} width={5} style={{ marginRight: "-8px" }} />
          <FiMoreVertical color="white" height={15} width={5} style={{ marginLeft: "1px" }} /></>}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "110%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "fit-content",
        }}
      >
        {showPercentage ? <div
          style={{
            background: "#101010",
            color: "white",
            padding: "4px",
            borderRadius: "50%",
            fontSize: "8px",
            fontFamily: "Poppins",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
            width: "30px",
            position: "relative",
          }}
        >
          {valueNow}%
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderTop: "6px solid #101010",
              borderRight: "6px solid transparent",
              borderLeft: "6px solid transparent",
            }}
          />
        </div> : null}
      </div>
    </div>
  );
};

export default SliderThumbComponent;
