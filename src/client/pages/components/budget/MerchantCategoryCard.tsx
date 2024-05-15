import React from "react";
import cardImage from "client/assets/images/I&M-acs.png";
import mpesaImage from "client/assets/images/M-pesa-ac.png";
interface MerchantEditCardProps {
  label?: string;
  merchant?: string;
}
const MerchantEditCard: React.FC<MerchantEditCardProps> = ({
  label,
  merchant,
}) => {
  return (
    <div className="flex flex-col rounded shadow-card p-4">
      <div className="flex flex-row">
        <div className="font-custom text-sm text-skin-base font-semibold tracking-wide">
          {label}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="font-custom text-sm text-skin-base font-medium tracking-wide">
          {merchant}
        </div>
      </div>
    </div>
  );
};

export default MerchantEditCard;
