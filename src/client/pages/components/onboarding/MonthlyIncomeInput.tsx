import { formatToLocaleString } from "client/utils/Formatters";
import { FiMinus, FiPlus } from "react-icons/fi";
import CurrencyInput from "react-currency-input-field";

type AddMonthlyIncomeInputProps = {
  value: number;
  maxValue: number;
  currencySymbol: string;
  onChange: (e: any) => void;
};

export const MonthlyIncomeInput = ({
  value,
  maxValue,
  currencySymbol,
  onChange,
}: AddMonthlyIncomeInputProps) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className="flex justify-center items-center p-3.5 rounded-full border border-1 border-[#2676B8]"
        onClick={() => onChange(Math.max(0, value - 1))}
      >
        <FiMinus color="#2676B8" />
      </div>
      <div className="relative px-2 flex flex-row justify-center items-center">
        <CurrencyInput
          id="input-example"
          name="input-name"
          className="bg-transparent font-custom text-4xl tracking-title text-skin-base text-center font-medium w-full border-b-2 border-b-skin-base border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-0 focus:border-b-skin-base cursor-none"
          placeholder=""
          value={value}
          defaultValue={value}
          decimalsLimit={2}
          onValueChange={(value) => {
            onChange(value);
          }}
        />
        <div className="absolute right-14 -top-0.5 font-custom text-sm tracking-title text-skin-base font-medium">
          {currencySymbol}
        </div>
      </div>
      <div
        className="flex justify-center items-center rounded-full p-4 border border-1 border-[#2676B8]"
        onClick={() => onChange(Math.min(value + 1, maxValue))}
      >
        <FiPlus color="#2676B8" />
      </div>
    </div>
  );
};

export default MonthlyIncomeInput;
