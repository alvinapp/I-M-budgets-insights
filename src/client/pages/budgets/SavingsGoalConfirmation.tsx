import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { SavingsAmountView } from "../components/budget/SavingsAmounView";
/* @ts-ignore */
import SlideButton from "react-slide-button";
import { FiChevronRight, FiInfo, FiX } from "react-icons/fi";
import { getGoalCompletionString } from "client/utils/Formatters";
import { useSavingsBottomSheetStore } from "client/store/bottomSheetStore";
import flag from "../../assets/images/flag.png";
interface SavingsGoalConfirmationProps {
  goal?: string;
  monthlyContribution: number;
  targetAmount: number;
  progressPercentage: number;
  emoji: string;
  onClick: () => void;
}
const SavingsGoalConfirmation: React.FC<SavingsGoalConfirmationProps> = ({
  monthlyContribution,
  targetAmount,
  progressPercentage,
  goal,
  onClick,
  emoji,
}) => {
  const contributionText = getGoalCompletionString(
    monthlyContribution,
    targetAmount,
    new Date()
  );
  const { goalCompletionString, estimatedCompletionDate } = contributionText;
  const savingsBottomSheetStore = useSavingsBottomSheetStore(
    (state: any) => state
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row rounded-b-lg rounded-3xl h-[8.375rem] bg-rainyDayFund bg-no-repeat bg-cover fixed top-0 left-0 right-0"></div>
      <div className="flex flex-row justify-between items-center absolute top-10 left-0 right-0 mx-4">
        <div
          onClick={() => {
            savingsBottomSheetStore.setSavingsBottomSheet(false);
          }}
        >
          <FiX color="#ffffff" size="1.5rem" />
        </div>
        <div onClick={() => {}}>
          <FiInfo color="#ffffff" size="1.5rem" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center absolute top-20 left-0 right-0 mx-4">
        <div>{emoji}</div>
        <div className="font-custom text-xl font-medium tracking-title text-skin-white">
          {goal ?? ""}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mx-4 mb-3 mt-36">
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
      <div className="flex flex-row justify-end items-center mr-4">
        <div className="w-4">
          <img src={flag} alt="" />
        </div>
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
        Est. goal completion: {estimatedCompletionDate}
      </div>
      <div className="font-custom text-lg font-normal text-skin-base tracking-wide mx-4 mb-8">
        {goalCompletionString}
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
