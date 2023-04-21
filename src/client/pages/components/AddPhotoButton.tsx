import React from "react";
import { FiImage } from "react-icons/fi";
type AddPhotoButtonProps = {
  onClick?: () => void;
};
export const AddPhotoButton = ({ onClick }: AddPhotoButtonProps) => {
  return (
    <button
      className={`rounded-full p-2.5 flex items-center justify-center bg-skin-secondary1WithOpacity`}
      onClick={onClick}
    >
      <FiImage color="#FFFFFF" size="1.2rem" />
    </button>
  );
};
