import React from 'react';
import MacroProgressBar from './MacroProgressBar';

interface MacroProgressBarsContainerProps {
    ratios: string; // format like "50/30/20"
}

const MacroProgressBarsContainer: React.FC<MacroProgressBarsContainerProps> = ({ ratios }) => {
    const ratioArray = ratios.split('/').map(Number);
    const currencySymbol = "₦";
    const budgetAmount = [150000, 90000, 60000]
    const progressString = ["Essentials spend", "Wants spend", "Saved"]


    return (
        <div className="flex flex-row justify-between items-center mt-6 space-x-2" style={{ display: 'flex' }}>
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
                        outsideLength={
                            index === 0 ? 94 : index === 1 ? 64 : 44
                        }
                        height={34}
                    />
                    <div className="flex flex-col justify-end items-start mt-6">
                        <div className="flex flex-row">
                            <div className="relative">
                                <div className="absolute right-0 -top-4" style={{ right: '-7px', color: index == 0 ? "#056489" : index === 1 ? "#935107" : "#117C07" }}>{currencySymbol}</div>
                                <div className="font-workSans font-semibold text-xl" style={{ color: index == 0 ? "#056489" : index === 1 ? "#935107" : "#117C07" }}>
                                    {budgetAmount[index]?.toLocaleString("en-US")}
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
