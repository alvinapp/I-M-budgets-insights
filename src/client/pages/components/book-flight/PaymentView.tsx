import { paymentCards } from "client/utils/MockData";
import React from "react";
import PaymentCard from "./PaymentCard";

type PaymentViewProps = {
  discount?: string;
  amount?: string;
  percentageDiscount?: string;
  cards?: Array<any>;
};

export const PaymentView = ({
  discount,
  amount,
  percentageDiscount,
  cards = [],
}: PaymentViewProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start">
          <div className="font-workSans text-base font-semibold tracking-title">
            Total
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex flex-row items-center">
            <div className="font-poppins text-tiny font-semibold tracking-longest_text text-skin-subtitle mr-1 line-through opacity-40 mt-2">
              {discount}
            </div>
            <div className="font-workSans text-2xl font-semibold tracking-title text-skin-base">
              {amount}
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="font-poppins text-xs font-medium text-skin-subtitle tracking-subtitle">
              {percentageDiscount}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border border-skin-accent mt-4"></div> */}
      {/* <div className="font-workSans text-sm font-medium tracking-listtile_subtitle text-skin-base mt-3.5 mb-4.5">
        Pay via
      </div>
      <div className="flex flex-row overflow-x-auto no-scrollbar">
        {cards?.map((card: any) => {
          return <PaymentCard label={card.label} icon={card.icon} />;
        })}
      </div> */}
    </div>
  );
};
