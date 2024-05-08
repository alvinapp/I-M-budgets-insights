import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

type DebtInfoProps = {
    loanValue: any;
    currency: string;
};

const DebtInfo = ({ loanValue, currency }: DebtInfoProps) => {

    return (
        <div className="flex flex-row rounded-lg py-4 pl-3.5 pr-3.5 bg-skin-accent2">
            <div className="flex flex-col">
                <IoIosInformationCircleOutline color="#101010" size="1rem" />
            </div>
            <div className="flex flex-col ml-2">
                <div className="font-primary text-xs tracking-listtile_subtitle font-medium">
                    You currently have active loans with a combined repayment of {loanValue.toLocaleString("en-US",)}<sup>{currency}</sup>.
                </div>
            </div>
        </div>
    );
};

export default DebtInfo;
