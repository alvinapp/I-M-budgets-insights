import React from "react";
import { FiChevronLeft } from "react-icons/fi";
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
      <FiChevronLeft color="#6F89A5" size="1.4375rem" />
      <i data-feather="chevron-left"></i>
    </button>
  );
};
export default BackButton;
