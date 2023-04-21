import React from "react";
import emptyTransaction from "client/assets/images/empty-transaction.svg";
type TransactionEmptyStateProps = {
  label?: string;
};
export const TransactionEmptyState = ({
  label,
}: TransactionEmptyStateProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={emptyTransaction} alt=""></img>
      <div className="flex-col">
        <div className="font-poppins text-tiny text-label font-medium tracking-subtitle">
          {label}
        </div>
      </div>
    </div>
  );
};
