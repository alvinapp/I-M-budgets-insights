import React, { useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import cardImage from "client/assets/images/I&M-acs.png";
import mpesaImage from "client/assets/images/M-pesa-ac.png";
import { IoMdCard } from "react-icons/io";

interface AccountCardProps {
  accountNumber: string;
  accountType: string;
  isActive: boolean;
  isMpesa?: boolean;
  backgroundColor?: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  accountNumber,
  accountType,
  isActive: initialActiveState,
  isMpesa = false,
  backgroundColor,
}) => {
  const [isActive, setIsActive] = useState(initialActiveState);

  // Toggle function to switch active state
  const toggleActive = () => {
    setIsActive(!isActive);
    if (isMpesa && !isActive) {
      if (window.flutter_inappwebview) {
        window.flutter_inappwebview.callHandler('requestPermission').then(result => {
          console.log("Response from Flutter: ", result);
        }).catch(error => {
          console.error("Error calling handler:", error);
        });
      }
    }
  };

  const bgColor = backgroundColor ? `bg-[#5f9f31]` : "bg-[#012bc4]";

  return (
    <div
      onClick={toggleActive}
      className="flex flex-row justify-between items-center p-4 rounded-lg shadow-card w-full cursor-pointer mt-2 mb-2 bg-white"
    >
      <div className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} text-white mx-2 mb-1`}
        >
          <img src={backgroundColor ? mpesaImage : cardImage} alt="plane" />
        </div>
        <div>
          <div className="text-base font-primary">{accountNumber}</div>
          <div className="text-gray-600 text-xs font-primary">
            {accountType}
          </div>
        </div>
      </div>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? "bg-[#00beaf] text-white" : "border border-black"
          } mb-1`}
      >
        {isActive ? <IoCheckmarkSharp className="text-xl" /> : null}
      </div>
    </div>
  );
};

export default AccountCard;
