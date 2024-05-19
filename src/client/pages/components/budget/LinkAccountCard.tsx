import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
interface LinkAccountCardProps {
  logo?: string;
  accountNumber?: string;
  accountType?: string;
  onClick?: () => void;
}
const LinkAccountCard: React.FC<LinkAccountCardProps> = ({
  logo,
  accountNumber,
  accountType,
  onClick,
}) => {
  return (
    <div
      className="flex flex-row justify-between items-center p-4 rounded-lg shadow-card w-full cursor-pointer mt-2 mb-2 bg-white"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 mb-1`}
        >
          <img src={logo} alt="plane" className="w-full h-auto" />
        </div>
        <div>
          <div className="text-base font-primary">
            {accountNumber ?? "M-Pesa"}
          </div>
          <div className="text-gray-600 text-xs font-primary">
            {accountType}
          </div>
        </div>
      </div>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-[#f2f2f2]`}
      >
        <FiMoreHorizontal color="" />
      </div>
    </div>
  );
};

export default LinkAccountCard;
