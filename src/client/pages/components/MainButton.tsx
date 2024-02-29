import React from "react";
import { TailSpin } from "react-loader-spinner";

type MainButonProps = {
  title?: string;
  click?: () => void;
  isDisabled?: boolean;
  loading?: boolean;
};

const MainButton = ({
  title,
  click,
  isDisabled = false,
  loading = false,
}: MainButonProps) => {
  return (
    <button
      className={`my-3.5 bg-skin-primary rounded-full text-white font-primary font-medium tracking-widest w-full h-14 shadow-button text-lg ${
        isDisabled ? "disabled:opacity-25 focus:outline-none" : ""
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
export default MainButton;
