import React from "react";
import MainButton from "../MainButton";

interface SuccessfullCreatedViewProps {
  title?: string;
  caption?: string;
  image?: string;
  onClick?: () => void;
}
const SuccessfullCreatedView: React.FC<SuccessfullCreatedViewProps> = ({
  title,
  caption,
  image,
  onClick,
}) => {
  return (
    <div className="flex flex-col mt-8 w-full">
      <div className="flex flex-row justify-center">
        <img src={image} alt="" />
      </div>
      <div className="font-custom font-medium text-xl tracking-title mb-2 mt-5 text-center">
        {title}
      </div>
      <div className="font-custom font-normal text-sm tracking-title mb-8 text-center mx-6">
        {caption}
      </div>
      <div className="flex flex-row mx-4 mb-3">
        <MainButton title="Ok" click={onClick} />
      </div>
    </div>
  );
};

export default SuccessfullCreatedView;
