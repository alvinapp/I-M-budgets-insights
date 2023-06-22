import React from 'react';
import { FiArrowDownRight, FiArrowUpRight, FiChevronRight } from "react-icons/fi";
import PercentageItem from './PercentageItem';

interface CashFlowPieChartProps {
    dimensions: number;
    doughnutThickness: number;
    values: {
        [key: string]: number;
        moneyIn: number;
        moneyOut: number;
    };
    percentageChange: number;
}

const CashFlowPieChart: React.FC<CashFlowPieChartProps> = ({ dimensions, doughnutThickness, values, percentageChange }) => {
    const { moneyIn, moneyOut } = values;
    const total = moneyIn + moneyOut;

    const radius = dimensions / 2;
    const strokeWidth = doughnutThickness;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    let cumulativePercentage = 0;

    return (
        <div className="shadow-card pt-5 mt-10 rounded-lg">
            <div className="flex justify-start items-center px-4">
                <h2 className="font-poppins text-lg font-bold">Cash flow</h2>
                <div style={{ transform: "scale(1.25)", marginLeft: '0.2em' }}>
                    <FiChevronRight />
                </div>
            </div>
            <div className="flex flex-row items-start justify-start">
                <svg height={dimensions} width={dimensions}>
                    <defs>
                        <linearGradient id="moneyInGradient" gradientTransform="rotate(70.18)">
                            <stop offset="20%" stopColor="#66be5f" />
                            <stop offset="100%" stopColor="#47a93e" />
                        </linearGradient>
                    </defs>
                    <g transform={`translate(${radius}, ${radius})`}>
                        {["moneyIn", "moneyOut"].map((type, index) => {
                            const percentage = (values[type] / total) * 100;
                            const color = type === "moneyIn" ? "url(#moneyInGradient)" : "#F99E36";

                            const startX = normalizedRadius * Math.cos(2 * Math.PI * cumulativePercentage / 100);
                            const startY = normalizedRadius * Math.sin(2 * Math.PI * cumulativePercentage / 100);

                            const endX = normalizedRadius * Math.cos(2 * Math.PI * (cumulativePercentage + percentage) / 100);
                            const endY = normalizedRadius * Math.sin(2 * Math.PI * (cumulativePercentage + percentage) / 100);

                            const largeArcFlag = percentage > 50 ? 1 : 0;

                            cumulativePercentage += percentage;

                            return (
                                <path
                                    key={index}
                                    d={`M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                                    fill="none"
                                    stroke={color}
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                />
                            );
                        })}
                        <foreignObject
                            x={-radius}
                            y={-radius}
                            width={radius * 2}
                            height={radius * 2}
                            xmlns="http://www.w3.org/1999/xhtml"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    borderRadius: "50%",
                                    overflow: "hidden"
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            borderRadius: "50%",
                                            backgroundColor: "#D1D5DB",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid #565656"
                                        }}
                                    >
                                        {percentageChange > 0 ? <FiArrowUpRight /> : <FiArrowDownRight />}{/* trend indicator */}
                                    </div>
                                    <span className="font-poppins text-s tracking-wide font-bold" style={{ marginLeft: "4px", color: "#565656" }}>{percentageChange}%</span>{/* percentage change */}
                                </div>
                                <div className="font-poppins text-xxxxs tracking-longest_text mt-2" style={{ color: "#565656" }}>
                                    <span>change this month</span>
                                </div>
                            </div>
                        </foreignObject>
                    </g>
                </svg>
                <div className="flex flex-col justify-end items-start">
                    <div className="flex flex-col justify-end items-start mt-8">
                        <div className="flex flex-row">
                            <div className="relative flex items-end">
                                <div className="absolute -right-1 -top-3 font-bold" style={{ fontSize: "15px" }}>
                                    {"₦"}
                                </div>
                                <div className="font-poppins text-xl">
                                    {(moneyIn + moneyOut).toLocaleString("en-US")}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="font-poppins text-xxs text-skin-subtitle font-semibold tracking-longest_text">
                                {"Total cash flow"}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-start mt-4 space-x-8">
                        <PercentageItem color="#66be5f" percentage={
                            Number((Math.round((moneyIn / total) * 100)).toFixed(0))
                        } label="Money in" />
                        <PercentageItem color="#F99E36" percentage={
                            Number((Math.round((moneyOut / total) * 100)).toFixed(0))
                        } label="Money out" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashFlowPieChart;
