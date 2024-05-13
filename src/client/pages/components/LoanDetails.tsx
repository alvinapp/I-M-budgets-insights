import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";

interface LoanDetailsProps {
  monthlyPayment: number;
  totalRepaid: number;
  outStandingBalance: number;
  annualInterestRate: number;
  estimatedPayoffTime: "";
  nextPaymentDueDate: string;
}
const LoanDetails: React.FC<LoanDetailsProps> = ({
  monthlyPayment,
  totalRepaid,
  outStandingBalance,
  annualInterestRate,
  estimatedPayoffTime,
  nextPaymentDueDate,
}) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="font-primary text-sm text-skin-base font-medium tracking-wider">
          Monthly payment
        </div>
        <div className="font-primary text-sm text-skin-base font-semibold">
          {monthlyPayment?.toLocaleString("en-us")}
          <sup className=" align-super -ml-1 text-[9px]">
            {currencySymbol ?? ""}
          </sup>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="font-primary text-sm text-skin-base font-medium tracking-wider">
          Total repaid
        </div>
        <div className="font-primary text-sm text-skin-base font-semibold">
          {totalRepaid?.toLocaleString("en-us")}
          <sup className=" align-super -ml-1 text-[9px]">
            {currencySymbol ?? ""}
          </sup>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="font-primary text-sm text-skin-base font-medium tracking-wider">
          Outstanding balance
        </div>
        <div className="font-primary text-sm text-skin-base font-semibold">
          {outStandingBalance?.toLocaleString("en-us")}
          <sup className=" align-super -ml-1 text-[9px]">
            {currencySymbol ?? ""}
          </sup>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="font-primary text-sm text-skin-base font-medium tracking-wider">
          Annual interest rate
        </div>
        <div className="font-primary text-sm text-skin-base font-semibold">
          {annualInterestRate?.toLocaleString("en-us")}
          <sup className=" align-super -ml-1 text-[9px]">{"%"}</sup>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="font-primary text-sm text-skin-base font-medium tracking-wider">
          Estimated payoff time
        </div>
        <div className="font-primary text-sm text-skin-base font-semibold tracking-wider">
          {estimatedPayoffTime}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-4 text-[#7F1788]">
        <div className="font-primary text-sm font-medium tracking-wider">
          Next payment due date
        </div>
        <div className="font-primary text-sm font-semibold tracking-wider">
          {nextPaymentDueDate}
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
