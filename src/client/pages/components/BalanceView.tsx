import { checkNAN } from "client/utils/Formatters";
import { Amount } from "client/pages/components/Amount";
type BalanceViewProps = {
  balance?: number;
  visible?: boolean;
  toggleVisibility?: () => void;
  viewBalance?: () => void;
  currency?: string;
};
const BalanceView = ({
  balance,
  visible = true,
  toggleVisibility,
  viewBalance,
  currency,
}: BalanceViewProps) => {
  let accountBalance = balance;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col" onClick={viewBalance}>
        <div className="flex flex-row items-center justify-center">
          <div className="text-skin-subtitle text-center font-poppins text-xs font-medium tracking-wide">
            Total savings
          </div>
        </div>
        <div className="flex flex-col mt-1">
          {<Amount balance={accountBalance} />}
        </div>
      </div>
      <div className="flex flex-col justify-center"></div>
    </div>
  );
};
export default BalanceView;
