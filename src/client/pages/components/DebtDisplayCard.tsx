import { BudgetTransaction } from "client/models/Budget";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";

interface DebtDisplayCardProps {
  icon?: string;
  goal?: string;
  amount?: number;
  percentageChange?: number;
  change: number;
  onClick?: () => void;
}
const DebtDisplayCard = ({
  icon,
  goal,
  amount,
  percentageChange,
  change,
  onClick,
}: DebtDisplayCardProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div
      className="flex flex-row mb-3 justify-between items-center rounded-lg p-4 bg-[#AD6AB3]/10"
      onClick={onClick}
    >
      <div className="flex flex-col mr-2">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-2">
            <div className="h-8 w-8 relative overflow-hidden rounded-full bg-skin-iconSecondary">
              <img src={icon} alt="" className="inline m-auto h-full w-auto" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
              {goal ?? ""}
            </div>
            {percentageChange !== 0 ? (
              <div className="font-primary tracking-wide text-skin-base flex flex-row items-center">
                {change > 0 ? (
                  <FiChevronUp size="0.75rem" />
                ) : (
                  <FiChevronDown size="0.75rem" />
                )}
                <div className="ml-0.5 font-medium text-sm">
                  {`${percentageChange}%`}
                </div>
                <div className="font-normal text-xs">
                  /{`${change > 0 ? "+" : ""}${change}`}
                </div>
              </div>
            ) : (
              <div className="font-primary text-xs font-normal tracking-wide text-skin-subtitle">
                No change
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="font-primary text-sm text-skin-base font-medium">
            {amount?.toLocaleString("en-us")}
            <sup className=" align-super -ml-1 text-xxxxs">
              {currencySymbol ?? ""}
            </sup>
          </div>
          <div className="font-custom text-sm text-skin-base font-medium">
            /month
          </div>
        </div>
      </div>
    </div>
  );
};
export default DebtDisplayCard;
