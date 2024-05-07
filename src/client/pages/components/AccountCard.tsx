import React, { useState } from 'react';
import { MdPhoneIphone } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdCard } from "react-icons/io";

interface AccountCardProps {
    accountNumber: string;
    accountType: string;
    isActive: boolean;
    backgroundColor?: string;
}

const AccountCard: React.FC<AccountCardProps> = ({ accountNumber, accountType, isActive: initialActiveState, backgroundColor }) => {
    const [isActive, setIsActive] = useState(initialActiveState);

    // Toggle function to switch active state
    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const bgColor = backgroundColor ? `bg-[#5f9f31]` : 'bg-[#012bc4]';

    return (
        <div onClick={toggleActive} className="flex justify-between items-center p-2 rounded-lg shadow w-96 cursor-pointer mt-2 mb-2 bg-white">
            <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} text-white mx-2 mb-1`}>
                    {backgroundColor ? <MdPhoneIphone /> : <IoMdCard />}
                </div>
                <div>
                    <div className="text-lg font-medium">{accountNumber}</div>
                    <div className="text-gray-600 text-sm">{accountType}</div>
                </div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-[#00beaf] text-white' : 'border border-[1px] border-black'} mb-1`}>
                {isActive ? <IoCheckmarkSharp className="text-xl" /> : null}
            </div>
        </div>
    );
};

export default AccountCard;
