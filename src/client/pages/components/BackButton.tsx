import React from "react";
import { FiArrowLeft, FiChevronLeft } from "react-icons/fi";
type BackButtonProps = {
  onClick?: () => void;
  background?: string;
};
const BackButton = ({ onClick, background }: BackButtonProps) => {
  return (
    <button
      className={`rounded-full p-3 flex items-center justify-center focus:outline-none focus:rounded-full ${background}`}
      onClick={onClick}
    >
      <FiArrowLeft color="#4E6783" size="1.5rem" />
      <i data-feather="chevron-left"></i>
    </button>
  );
};
export default BackButton;
