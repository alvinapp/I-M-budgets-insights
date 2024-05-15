import React from "react";
import { FiPlus } from "react-icons/fi";

interface EditCategoryCardProps {
  label?: string;
  onClick?: () => void;
  categoryName: string;
}
const EditCategoryCard: React.FC<EditCategoryCardProps> = ({
  label,
  onClick,
  categoryName,
}) => {
  return (
    <div className="flex flex-col rounded shadow-card p-4">
      <div className="flex flex-row">
        <div className="font-custom text-sm text-skin-base font-semibold tracking-wide">
          {label}
        </div>
      </div>
      <div
        className="flex flex-row items-center text-skin-primary mt-4 font-custom text-sm font-medium tracking-wide"
        onClick={onClick}
      >
        {categoryName ? (
          categoryName
        ) : (
          <>
            <FiPlus color="#00BEAF" />
            <div className="ml-2">Assign category</div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditCategoryCard;
