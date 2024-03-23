import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
interface EditSavingsViewCardProps {
  icon?: string;
  goal?: string;
  amount?: number;
  onClick?: () => void;
}

const EditSavingsViewCard: React.FC<EditSavingsViewCardProps> = ({
  icon,
  goal,
  amount,
  onClick,
}) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div
      className="flex flex-row mb-3 justify-between items-center"
      onClick={onClick}
    >
      <div className="flex flex-col mr-2">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-2">
            <div className="h-8 w-8 relative overflow-hidden rounded-full bg-skin-iconSecondary">
              <img src={icon} alt="" className=" inline m-auto h-full w-auto" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
              {goal ?? ""}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="font-primary text-sm text-skin-base font-medium">
            {amount?.toLocaleString("en-us")}
            <sup className=" align-super -ml-1 text-xxs">
              {currencySymbol ?? ""}
            </sup>
          </div>
          <div className="font-custom text-sm text-skin-base font-medium">
            per month
          </div>
          <div className="ml-2">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSavingsViewCard;
