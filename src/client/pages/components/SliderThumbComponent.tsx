import React from "react";
import { FiMoreVertical } from "react-icons/fi";

interface SliderThumbComponentProps {
  valueNow: number;
  showPercentage?: boolean;
  props?: any;
}

const SliderThumbComponent: React.FC<SliderThumbComponentProps> = ({
  valueNow,
  showPercentage,
  props,
}) => {
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
          backgroundColor: "#4e6784",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "-3px",
        }}
      >
        <FiMoreVertical color="white" height={15} width={5} style={{ marginRight: "-8px" }} />
        <FiMoreVertical color="white" height={15} width={5} style={{ marginLeft: "1px" }} />
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
       {showPercentage? <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
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
              borderTop: "6px solid black",
              borderRight: "6px solid transparent",
              borderLeft: "6px solid transparent",
            }}
          />
        </div>: null}
      </div>
    </div>
  );
};

export default SliderThumbComponent;
