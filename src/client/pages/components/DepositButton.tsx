import React from "react";
import depositIcon from "client/assets/images/savings/deposit.webp";
import warningDepositIcon from "client/assets/images/savings/deposit.webp";
type DepositButtonProps = {
  warning?: boolean;
};
export const DepositButton = ({ warning = false }: DepositButtonProps) => {
  return (
    <div
      className={`${
        warning ? "bg-skin-warningWithOpacity" : "bg-skin-secondaryWithOpacity"
      } px-3 py-1 rounded-3xl`}
    >
      <div className="flex flex-row items-center">
        <div className={`text-skin-warning mr-1 w-4`}>
          <img src={warning ? warningDepositIcon : depositIcon} />
        </div>
        <div
          className={`${
            warning ? "text-skin-warning" : "text-skin-primary"
          } font-primary text-xs font-semibold tracking-tab_text`}
        >
          Deposit
        </div>
      </div>
    </div>
  );
};
