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
        onClick={() => onChange(Math.max(0, value - 1))}
      >
        <FiMinus color="#6F89A5" />
      </div>
      <div className="relative px-2 flex flex-row justify-center items-center">
        <input
          className="bg-transparent font-workSans text-4xl tracking-title text-skin-base text-center font-semibold w-full border-b-2 border-b-skin-primary border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-0 focus:border-b-skin-primary"
          type="number"
          value={value}
          min={0}
          max={maxValue}
          onChange={(e) => {
            onChange(parseInt(e.target.value));
          }}
        />
        <div className="absolute right-12 font-workSans text-xl tracking-title text-skin-base font-semibold" style={{ top: '-0.5rem', right: '3.3rem' }}>
          {currencySymbol}
        </div>
      </div>
      <div
        className="flex justify-center items-center rounded-full p-4 border border-1 border-skin-primary"
        onClick={() => onChange(Math.min(value + 1, maxValue))}
      >
        <FiPlus color="#04506e" />
      </div>
    </div>
  );
};

export default MonthlyIncomeInput;
