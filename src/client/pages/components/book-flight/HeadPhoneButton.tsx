import React from "react";
import { FiHeadphones, FiX } from "react-icons/fi";

type HeadPhoneButtonProps = {
  onClick?: () => void;
  background?: string;
};

export const HeadPhoneButton = ({
  onClick,
  background,
}: HeadPhoneButtonProps) => {
  return (
    <button
      className={`rounded-full p-3 flex items-center justify-center outline outline-none ${background}`}
      onClick={onClick}
    >
      <FiHeadphones color="#6F89A5" size="1.4375rem" />
    </button>
  );
};
