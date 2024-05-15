import useCurrencySettingsStore from "client/store/currencySettingsStore";
import AnimatedNumber from "../AnimatedNumber";
type AmountViewProps = {
  amount: number;
  caption?: string;
  flex?: string;
};
export const AmountView = ({ amount, caption, flex }: AmountViewProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className={`flex flex-col ${flex ?? "items-start"}`}>
      <div className="relative">
        <div className="font-custom text-lg text-skin-base font-semibold">
          <AnimatedNumber target={amount} duration={500} />
          <sup className=" text-[9px] align-super -ml-1">
            {currencySymbol ? currencySymbol : ""}
          </sup>
        </div>
      </div>
      <div className="font-primary text-xs text-skin-base font-medium tracking-wide">
        {caption}
      </div>
    </div>
  );
};
