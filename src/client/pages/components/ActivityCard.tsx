import useAccountStore from "client/store/accountStore";
import Accounts from "client/models/Accounts";
import uncategorized from "client/assets/images/uncategorized.svg";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
interface ActivityCardProps {
  id?: number;
  merchant?: string;
  transacted_at?: string;
  amount: number;
  emoji?: string;
}

const ActivityCard = ({
  id,
  merchant,
  transacted_at,
  amount,
  emoji,
}: ActivityCardProps) => {
  const accounts = useAccountStore((state: any) => state.accounts) as Accounts;
  const currencyStore = useCurrencySettingsStore((state: any) => state);

  return (
    <div className="bg-skin-base w-auto mb-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-2">
              <div
                className="rounded-full  bg-skin-secondary1WithOpacity w-9 h-9 flex justify-center items-center
      "
              >
                <img src={emoji ?? ""} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="font-custom text-sm font-medium text-skin-base text-start text-ellipsis overflow-hidden whitespace-nowrap w-40 tracking-title"
                id="al-transaction-card--merchant-name"
              >
                {merchant}
              </div>
              <div
                className="font-custom text-xs font-medium text-skin-subtitle text-start tracking-wider"
                id="al-transaction-card--date"
              >
                {transacted_at}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start mb-2">
          <div className="font-custom text-16 font-medium text-skin-base text-end">
            {/* <span>{checkIfDebitCredit(type)}</span> */}
            {Math.round(amount).toLocaleString("en-US")}
            <sup className="align-super -ml-1 text-xxxxxs">
              {currencyStore.currencySymbol}
            </sup>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityCard;
