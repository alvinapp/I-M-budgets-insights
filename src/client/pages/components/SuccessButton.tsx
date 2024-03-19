import React from "react";
import { BallTriangle } from "react-loader-spinner";

type SuccessButonProps = {
  label?: string;
  click?: () => void;
  isDisabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
};

const SuccessButton = ({
  label,
  click,
  isDisabled = false,
  loading = false,
  style,
}: SuccessButonProps) => {
  return (
    <button
      className={`my-3.5 bg-skin-primary rounded-full text-skin-white font-primary font-medium tracking-widest w-full h-14 text-lg focus:outline-none ${
        isDisabled ? "disabled:opacity-25 focus:outline-none" : ""
      }`}
      disabled={isDisabled}
      onClick={loading ? () => {} : click}
      style={style}
    >
      <div className="flex flex-row justify-center items-center">
        <div>{label}</div>
      </div>
    </button>
  );
};
export default SuccessButton;
