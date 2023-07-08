import React from "react";
import { BallTriangle } from "react-loader-spinner";

type SuccessButonProps = {
  title?: string;
  click?: () => void;
  isDisabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
};

const SuccessButton = ({
  title,
  click,
  isDisabled = false,
  loading = false,
  style,
}: SuccessButonProps) => {
  return (
    <button
      className={`my-3.5 bg-skin-base rounded-full text-skin-primary font-poppins font-semibold tracking-widest w-full h-14 text-base ${
        isDisabled ? "disabled:opacity-25 focus:outline-none" : ""
      }`}
      disabled={isDisabled}
      onClick={loading ? () => {} : click}
      style={style}
    >
      <div className="flex flex-row justify-center items-center">
        <div className={`${loading ? "mr-3" : ""}`}>{title}</div>
        {loading ? (
          <BallTriangle height={18} width={18} color="#056489" visible={true} />
        ) : (
          <div></div>
        )}
      </div>
    </button>
  );
};
export default SuccessButton;
