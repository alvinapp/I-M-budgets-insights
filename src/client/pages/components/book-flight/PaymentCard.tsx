import React from "react";
import { FiCheck } from "react-icons/fi";

type PaymentCardProps = {
  label?: string;
  icon?: string;
  onClick?: (choice: any) => void;
  selected?: boolean;
};
const PaymentCard = ({ label, onClick, selected, icon }: PaymentCardProps) => {
  return (
    <div className="relative mr-3" onClick={onClick}>
      <div
        className={`${
          selected
            ? "border-skin-primary text-skin-primary"
            : "border-skin-base text-skin-base"
        } rounded-lg border px-3.5 py-2.5 text-base font-poppins tracking-paragraph font-medium w-52`}
      >
        <div className="flex flex-row justify-end items-center">
          <div>
            <img src={icon} />
          </div>
          <div>{label}</div>
        </div>
        <div className="flex flex-row justify-end items-center">
          <div className="rounded-lg bg-skin-accent2 flex justify-center items-center py-px px-2">
            <div className="font-poppins text-xxxxs text-skin-base font-medium">
              Default
            </div>
          </div>
        </div>
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
export default PaymentCard;
