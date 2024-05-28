import mpesaImage from "client/assets/images/M-pesa-ac.png";
import React from "react";
interface AccountEditCardProps {
  label?: string;
  accountNumber?: string;
  onClick?: () => void;
  type?: string;
}
const AccountEditCard: React.FC<AccountEditCardProps> = ({
  label,
  accountNumber,
  type,
}) => {
  return (
    <div className="flex flex-col rounded shadow-card p-4">
      <div className="flex flex-row">
        <div className="font-custom text-sm text-skin-base font-semibold">
          {label}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center bg-skin-iconSecondary text-white`}
            >
              <img src={mpesaImage} alt="plane" />
            </div>
            <div className="font-custom text-sm text-skin-base font-medium ml-3">
              {accountNumber}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-custom text-xs text-skin-subtitle font-medium">
            {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountEditCard;
