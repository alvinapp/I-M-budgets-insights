import React from "react";
import { FiCheck } from "react-icons/fi";
type ClassCardProps = {
  label?: string;
  onClick?: (choice: any) => void;
  selected?: boolean;
};
const ClassCard = ({ label, onClick, selected = false }: ClassCardProps) => {
  return (
    <div className="relative" onClick={onClick}>
      <div
        className={`${
          selected
            ? "border-skin-primary text-skin-primary"
            : "border-skin-base text-skin-base"
        } rounded-lg border px-3.5 py-2.5 mr-3 mb-3 text-base font-poppins  tracking-paragraph font-medium`}
      >
        {label}
      </div>
      {selected ? (
        <div className="absolute -top-2 right-2">
          <div className="w-6 h-6 rounded-full bg-skin-primary flex items-center justify-center">
            <FiCheck color="#ffffff" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default ClassCard;
