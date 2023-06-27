import { FiMinus, FiPlus } from "react-icons/fi";

type AddMonthlyIncomeInputProps = {
  value: number;
  maxValue: number;
  currencySymbol: string;
  onChange: (e: number) => void;
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
        className="flex justify-center items-center p-3.5 rounded-full border border-1 border-skin-primary"
        onClick={(() => onChange(Math.max(0, value - 1)))}
      >
        <FiMinus color="#6F89A5" />
      </div>
      <div className="relative p-3.5 mx-2 flex flex-row justify-center items-center">
        <div>{currencySymbol}</div>
        <input
          className="bg-transparent font-workSans text-xl tracking-title text-skin-base text-center font-semibold w-48 border-0 border-transparent border-b-2 border-b-neutral-800 py-4 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          type="number"
          value={value}
          min={0}
          max={maxValue}
          onChange={(e) => {
            onChange(parseInt(e.target.value));
          }}
        />
      </div>
      <div
        className="flex justify-center items-center rounded-full p-4 border border-1 border-skin-primary"
        onClick={(() => onChange(Math.min(value + 1, maxValue)))}
      >
        <FiPlus color="#04506e" />
      </div>
    </div>
  );
};

export default MonthlyIncomeInput;
