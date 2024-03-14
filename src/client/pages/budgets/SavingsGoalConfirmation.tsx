import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { SavingsAmountView } from "../components/budget/SavingsAmounView";
/* @ts-ignore */
import SlideButton from "react-slide-button";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
interface SavingsGoalConfirmationProps {
  image?: string;
  monthlyContribution: number;
  targetAmount: number;
  progressPercentage: number;
  onClick: () => void;
}
const SavingsGoalConfirmation: React.FC<SavingsGoalConfirmationProps> = ({
  image,
  monthlyContribution,
  targetAmount,
  progressPercentage,
  onClick,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row rounded-b-lg h-[8.375rem]">
        <img src={image} alt="" className=" object-cover" />
      </div>
      <div className="flex flex-row justify-between items-center mx-4 mb-2">
        <SavingsAmountView
          amount={monthlyContribution}
          caption="Monthly contribution"
          flex="items-start"
        />
        <SavingsAmountView
          amount={targetAmount}
          caption="Target amount"
          flex="items-end"
        />
      </div>
      <ProgressBar
        className="mx-4"
        completed={progressPercentage}
        height="4px"
        baseBgColor="#E7E7E7"
        bgColor="#84C1B2"
        // bgColor="#0131a1"
        isLabelVisible={false}
      />
      <div className="font-custom text-sm font-medium tracking-wide text-skin-base mt-4 mb-5 mx-4">
        Est. goal completion: Wed,Aug 3rd,2024
      </div>
      <div className="font-custom text-lg font-normal text-skin-base tracking-wide mx-4 mb-8">
        🙌🏼 By saving 1,875k/month or 488k/ week, you’ll achieve your goal by the
        next 5 months and 10 days.
      </div>
      <div className="font-custom text-sm font-medium tracking-wide text-skin-base text-center mb-3">
        Swipe to create goal and allocate a monthly budget
      </div>
      <div className="flex flex-row mx-4 mb-3 rounded-full bg-[#f0f3fe]">
        <SlideButton
          mainText="I commit to save"
          caret={<FiChevronRight color="#ffffff" className="absolute" />}
          onSlideDone={onClick}
          classList="my-class"
          caretClassList="my-caret-class"
          overlayClassList="my-overlay-class"
          overlayWrapperClassList="my-overlay-wrapper-class"
        />
      </div>
    </div>
  );
};

export default SavingsGoalConfirmation;
