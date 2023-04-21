import { checkNAN } from "client/utils/Formatters";
type AmountProps = {
  balance?: number;
  textColor?: string;
};
export const Amount = ({ balance, textColor }: AmountProps) => {
  const currency = "₦";
  return (
    <div className="flex flex-row items-center">
      <div
        className={`text-xl ${
          textColor ?? "text-skin-base"
        } font-semibold font-workSans -translate-x-1 translate-y-1`}
      >
        {currency}
      </div>
      <div
        className={`text-4xl ${
          textColor ?? "text-skin-base"
        } font-semibold font-workSans`}
      >
        {checkNAN(Math.round(balance!)).toLocaleString()}
      </div>
    </div>
  );
};
