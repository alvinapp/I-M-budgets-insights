import React from "react";
import { FiCheck } from "react-icons/fi";
type BaggageProps = {
  label?: string;
  caption?: string;
  onClick?: (choice: any) => void;
  selected?: boolean;
};

export const Baggage = ({
  selected,
  caption,
  label,
  onClick,
}: BaggageProps) => {
  return (
    <div
      className={`${
        selected ? "border-skin-primary" : "border-skin-base"
      } rounded-lg border px-3.5 py-2.5 mr-3 mb-3 font-poppins tracking-paragraph font-medium flex flex-row justify-between`}
    >
      <div className="flex flex-col mr-3">
        <div className="text-skin-base text-tiny">{label}</div>
        <div className="text-skin-subtitle text-xxs">{caption}</div>
      </div>
      <div className="flex flex-col justify-center">
        <input
          type="checkbox"
          className="h-6 w-6 rounded-full accent-skin-primary"
        />
      </div>
    </div>
  );
};
