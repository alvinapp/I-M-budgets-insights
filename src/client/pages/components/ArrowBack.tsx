import React from "react";
import { FiArrowLeft, FiChevronLeft } from "react-icons/fi";
type ArrowBackButtonProps = {
  onClick?: () => void;
  background?: string;
};
const ArrowBackButton = ({ onClick, background }: ArrowBackButtonProps) => {
  return (
    <button
      className={`rounded-full p-3 flex items-center justify-center focus:outline-none focus:rounded-full ${background}`}
      onClick={onClick}
    >
      <FiArrowLeft color="#101010" size="1.4375rem" />
    </button>
  );
};
export default ArrowBackButton;
