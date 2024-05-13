import React, { useState } from 'react';
import { MdPhoneIphone } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import cardImage from 'client/assets/images/I&M-acs.png';
import mpesaImage from 'client/assets/images/M-pesa-ac.png';
import { IoMdCard } from "react-icons/io";

interface AccountCardProps {
    accountNumber: string;
    accountType: string;
    isActive: boolean;
    isMpesa?: boolean;
}

const AccountCard: React.FC<AccountCardProps> = ({ accountNumber, accountType, isActive: initialActiveState, isMpesa = false }) => {
    const [isActive, setIsActive] = useState(initialActiveState);
    const toggleActive = () => {
        setIsActive(!isActive);
        if (isMpesa && isActive) {
            window.postMessage('requestPermission', '*');
        }
    };

    const bgColor = isMpesa ? `bg-[#5f9f31]` : 'bg-[#012bc4]';

    return (
        <div onClick={toggleActive} className="flex justify-between items-center p-2 rounded-lg shadow w-96 cursor-pointer mt-2 mb-2 bg-white">
            <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} text-white mx-2 mb-1`}>
                    <img
                        src={isMpesa ? mpesaImage : cardImage}
                        alt="plane"
                    />
                </div>
                <div>
                    <div className="text-lg font-primary">{accountNumber}</div>
                    <div className="text-gray-600 text-sm font-primary">{accountType}</div>
                </div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-[#00beaf] text-white' : 'border border-[1px] border-black'} mb-1`}>
                {isActive ? <IoCheckmarkSharp className="text-xl" /> : null}
            </div>
        </div>
    );
};

export default AccountCard;
