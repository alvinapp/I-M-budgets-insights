import ProgressBar from "@ramonak/react-progress-bar";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { FiChevronRight } from "react-icons/fi";
import AnimatedNumber from "../AnimatedNumber";
import SegmentedProgressBar from "../SegmentedProgress";

type DebtRepaymentCardProps = {
  category?: string;
  icon?: string;
  iconBg?: string;
  amount?: number;
  progressPercentage: number;
  baseBgColor?: string;
  bgColor?: string;
  spentAmount?: number;
  budgetAmount?: number;
  primaryColor?: string;
  fadedColor?: string;
  caption?: string;
  onClick?: () => void;
};
export const DebtRepaymentCard = ({
  icon,
  iconBg,
  category,
  amount,
  progressPercentage,
  baseBgColor,
  bgColor,
  budgetAmount,
  spentAmount,
  primaryColor,
  fadedColor,
  caption,
  onClick,
}: DebtRepaymentCardProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  const segmentendProgressPercentages: Array<number> = [25, 50, 75, 100];
  return (
    <div className="flex flex-row mb-3" onClick={onClick}>
      <div className="flex flex-col mr-2">
        <div
          className={`rounded-full h-10 w-10 flex justify-center items-center ${iconBg}`}
        >
          <img src={icon} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center mb-2.5">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className="font-primary text-sm text-skin-base font-medium tracking-wider">
                {category}
              </div>
              <FiChevronRight color="#101010" size="0.75rem" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <div className="font-primary text-sm text-skin-base font-semibold">
                {amount?.toLocaleString("en-us")}
                <sup className=" align-super -ml-1 text-[9px]">
                  {currencySymbol ?? ""}
                </sup>
              </div>
            </div>
          </div>
        </div>
        <SegmentedProgressBar
          percentage={progressPercentage}
          height={4}
          progressColorTop={"#CB960F"}
          progressColorBottom={"#f2f2f2"}
        />
        <div className="flex flex-row mb-2.5 items-center"></div>
        <div className="flex flex-row items-center">
          <div
            className={`font-primary text-sm ${primaryColor ?? "text-skin-base"
              } font-medium mr-1`}
          >
            <AnimatedNumber target={spentAmount ?? 0} duration={500} />
          </div>
          <div
            className={`font-primary text-sm ${fadedColor ?? "text-skin-base"
              } font-medium mr-1`}
          >
            of
          </div>
          <div className="relative mr-1">
            <div
              className={`font-primary text-sm ${fadedColor ?? "text-skin-base"
                } font-medium`}
            >
              {budgetAmount?.toLocaleString("en-us")}
              <sup className=" align-super -ml-1 text-[9px]">
                {currencySymbol ?? ""}
              </sup>
            </div>
          </div>
          <div
            className={`font-primary text-sm ${fadedColor ?? "text-skin-base"
              } font-medium`}
          >
            {caption ?? "spent"}
          </div>
        </div>
      </div>
    </div>
  );
};
