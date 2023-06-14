import React from 'react';
import MacroProgressBar from './MacroProgressBar';

interface MacroProgressBarsContainerProps {
  ratios: string; // format like "50/30/20"
  budgetAmount: { [key: string]: number };
  progressPercentage: { [key: string]: number };
}

const MacroProgressBarsContainer: React.FC<MacroProgressBarsContainerProps> = ({
  ratios,
  budgetAmount = { wantsBudget: 97980, essentialsBudget: 69617, savingsBudget: 15660 },
  progressPercentage = { wantsProgress: 70, essentialsProgress: 70, savingsProgress: 40 },
}) => {
  const ratioArray = ratios.split('/').map(Number);
  const currencySymbol = "₦";
  const progressString = ["Essentials spend", "Wants spend", "Saved"];

  return (
    <div className="flex flex-row justify-between items-center mt-2 space-x-2" style={{ display: 'flex' }}>
      {ratioArray.map((flexValue, index) => (
        <div
          key={index}
          className="flex flex-col"
          style={{ flex: flexValue }}
        >
          <MacroProgressBar
            flexValue={1}
            bgColorBottom={index === 0 ? "#E7EDF3" : index === 1 ? "#efebe7" : "#e7f3e6"}
            bgColorTop={index === 0 ? "linear-gradient(124.2deg, #0C9DBE 0%, #056489 100%)" : index === 1 ? "linear-gradient(77.97deg, #ca965c 0%, #935107 100%)" : "linear-gradient(70.18deg, #66be5e 0%, #117C07 100%)"}
            outsideLength={progressPercentage[index]}
            height={30}
          />
          <div className="flex flex-col justify-end items-start mt-2">
            <div className="flex flex-row">
              <div className="relative flex items-end">
                <div className="absolute -right-1 -top-2" style={{ color: index === 0 ? "#056489" : index === 1 ? "#c77e2b" : "#117C07", fontSize: '80%' }}>
                  {currencySymbol}
                </div>
                <div className="font-workSans font-semibold text-l" style={{ color: index === 0 ? "#056489" : index === 1 ? "#c77e2b" : "#117C07" }}>
                  {budgetAmount[Object.keys(budgetAmount)[index]]?.toLocaleString("en-US")}
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-poppins text-xxs text-skin-subtitle tracking-longest_text">
                {progressString[index]}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MacroProgressBarsContainer;
