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
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="text-2xl text-skin-base font-semibold font-custom">
          {transactionAmount}
          <sup className="align-super -ml-1 text-xxxxxs">
            {currency.currencySymbol}
          </sup>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-skin-subtitle text-center font-custom text-xs font-medium tracking-wide ml-1">
          {transactedAt}
        </div>
      </div>
    </div>
  );
};
export default BalanceView;
