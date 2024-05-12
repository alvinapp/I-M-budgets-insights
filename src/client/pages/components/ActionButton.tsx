import React from "react";
import { TailSpin } from "react-loader-spinner";

type ActionButtonProps = {
  title?: string;
  click?: () => void;
  isDisabled?: boolean;
  loading?: boolean;
  titleColor?: string;
  bgColor?: string;
};

const ActionButton = ({
  title,
  click,
  titleColor,
  bgColor,
  isDisabled = false,
  loading = false,
}: ActionButtonProps) => {
  return (
    <button
      className={`rounded-full focus:border-none focus:outline-none ${
        titleColor ?? "text-white"
      } font-primary font-medium tracking-widest w-full h-14 text-sm ${
        isDisabled ? "focus:outline-none bg-skin-disabledBg" : `${bgColor}`
      }`}
      disabled={isDisabled}
      onClick={loading ? () => {} : click}
    >
      <div className="flex flex-row justify-center items-center">
        <div className={`${loading ? "mr-3" : ""}`}>{title}</div>
        {loading ? (
          <TailSpin
            height="30"
            width="30"
            color="#ffffff"
            ariaLabel="tail-spin-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <div></div>
        )}
      </div>
    </button>
  );
};
export default ActionButton;
