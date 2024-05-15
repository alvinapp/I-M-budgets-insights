import { FiArrowUp, FiCheckCircle, FiInfo, FiTag } from "react-icons/fi";

import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { checkNAN } from "client/utils/Formatters";

type BalanceViewProps = {
  amount?: number;
  transactedAt?: any;
};
const BalanceView = ({ amount, transactedAt }: BalanceViewProps) => {
  const transactionAmount = checkNAN(Math.round(amount!)).toLocaleString(
    "en-us"
  );
  const currency = useCurrencySettingsStore((state: any) => state);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-start">
        <div className="text-4xl text-skin-base font-medium font-workSans">
          {transactionAmount}
        </div>
        <div className="text-lg text-skin-base font-bold font-workSans translate-x-1 -translate-y-2">
          {currency.currencySymbol}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start">
        <div className="text-skin-subtitle text-center font-poppins text-xs font-medium tracking-wide ml-1">
          {transactedAt}
        </div>
      </div>
    </div>
  );
};
export default BalanceView;
