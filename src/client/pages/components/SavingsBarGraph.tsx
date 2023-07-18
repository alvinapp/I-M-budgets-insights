import React, { useEffect, useState } from 'react';
import GraphLegend from './GraphLegend';
import { formatNumber } from 'client/utils/Formatters';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

interface BarGraphProps {
    previousMonthSavings: number,
    currentMonthSavings: number,
    savingsTarget: number,
    budgetLimit: number,
}

const SavingsBarGraph: React.FC<BarGraphProps> = ({ previousMonthSavings, currentMonthSavings, savingsTarget, budgetLimit }) => {
    const [graphWidth, setGraphWidth] = useState(window.innerWidth - 23);
    const graphHeight = 200;
    const maxLimit = Math.max(savingsTarget, budgetLimit);
    const scaleFactor = (graphHeight - 70) / maxLimit;
    const barSpacing = graphWidth * 0.2;

    useEffect(() => {
        const handleResize = () => {
            setGraphWidth(window.innerWidth - 20);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getMonthNames = () => {
        const date = new Date();
        const currentMonth = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        date.setMonth(date.getMonth() - 1);
        const previousMonth = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        return [previousMonth, currentMonth];
    };

    // create a const to get the number of days left in the month
    const getDaysLeftInMonth = () => {
        const date = new Date();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const daysLeftInMonth = daysInMonth - date.getDate();
        return daysLeftInMonth;
    };

    const predictHighestPossibleGrowth = (
        lastMonthSavings: number,
        currentMonthSavings: number,
        minimumGrowthFactor: number = 0.01,
        additionalGrowthFactor: number = 1.1
    ): number => {
        // Calculate the actual growth rate
        const actualGrowthRate = lastMonthSavings !== 0
            ? (currentMonthSavings - lastMonthSavings) / lastMonthSavings
            : 0;

        // Calculate the days scaling factor
        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const daysScalingFactor = getDaysLeftInMonth() / daysInMonth;

        // Ensure the projection is always higher than the previous month
        const highestPossibleGrowth = Math.max(
            actualGrowthRate + minimumGrowthFactor + daysScalingFactor,
            (actualGrowthRate * additionalGrowthFactor) + (actualGrowthRate * daysScalingFactor)
        );

        // Convert to percentage
        return highestPossibleGrowth * 100;
    };

    const renderBar = (positionFactor: number, savings: number, showTooltip = false) => {
        const x = graphWidth * positionFactor;
        const savingsHeight = savings * scaleFactor;
    
        const tooltipHeight = 20;
        const tooltipPadding = 5;
        const tooltipPosY = graphHeight - savingsHeight - tooltipHeight - tooltipPadding - 60;
        if(savings === 0) return null;
    
        return (
            <g>
                {/* Bar */}
                <rect x={x} y={graphHeight - 50 - savingsHeight} width="46" height={savingsHeight} fill="url(#savings-gradient)" rx="10" ry="10" />
                {showTooltip && (
                    <>
                        {/* Tooltip */}
                        <rect x={x + 1} y={tooltipPosY} width="47" height={tooltipHeight} fill="#101a25" stroke="#101a25" strokeWidth="1" rx="5" ry="5" />
                        {/* Pointing tip below the tooltip */}
                        <polygon points={`${x + 23},${tooltipPosY + tooltipHeight + 5} ${x + 19},${tooltipPosY + tooltipHeight} ${x + 27},${tooltipPosY + tooltipHeight}`} fill="#101a25" stroke="#101a25" strokeWidth="1" />
                        {/* Tooltip Text */}
                        <text x={x + 23} y={tooltipPosY + tooltipHeight / 2 + 3} textAnchor="middle" fill='#f6f6f7' fontSize="10" fontFamily='Poppins'>Today</text>
                        {/* Text showing total savings */}
                        <text x={x + 20} y={tooltipPosY + tooltipHeight + 13} textAnchor="middle" fontSize="10" fontFamily='Poppins'>{`+${savings.toLocaleString('en-US')}`}</text>
                    </>
                )}
            </g>
        );
    };

    const renderLimitLine = (value: number, label: string) => (
        <g>
            <line x1="34" y1={graphHeight - 50 - value * scaleFactor} x2={graphWidth} y2={graphHeight - 50 - value * scaleFactor} stroke="black" strokeDasharray="4" />
            <text x={2} y={graphHeight - 50 - value * scaleFactor + 5} textAnchor="start" fontSize="11" fill='#878787' fontFamily='Poppins'>{formatNumber(value)}</text>
            <text x={graphWidth - 10} y={graphHeight - 50 - value * scaleFactor - 5} textAnchor="end" fontSize="12" fontFamily='Poppins' fill="#c5c5c5">{label}</text>
        </g>
    );

    const renderChangeContainer = () => {
        // const changePercentage = ((currentMonthSavings - previousMonthSavings) / previousMonthSavings) * 100;
        const changePercentage = predictHighestPossibleGrowth(previousMonthSavings, currentMonthSavings);
        const isIncrease = changePercentage >= 0;
        console.log("currentMonthSavings", currentMonthSavings);
        if (currentMonthSavings === 0) {
            return <div></div>;
        }

        return (
            <g>
                {/* Grey circular container */}
                <circle cx={graphWidth - 143} cy={graphHeight - 75} r="13" fill="#dddddd" stroke="#565656" strokeWidth="1" />

                {/* Conditionally render the arrow icon */}
                <g transform={`translate(${graphWidth - 155}, ${graphHeight - 87}) scale(1.5)`}>
                    {isIncrease ? <FiArrowUpRight color="#565656" strokeWidth="1" /> : <FiArrowDownRight color="#565656" strokeWidth="1" />}
                </g>

                {/* Change percentage text */}
                <text x={graphWidth - 127} y={graphHeight - 72} textAnchor="start" fontSize="11" fontWeight={"bold"} fontFamily='Poppins'>{Math.abs(changePercentage).toFixed(0)}%</text>
                <text x={graphWidth - 103} y={graphHeight - 72} textAnchor="start" fontSize="10" fontFamily='Poppins'>projected change</text>
                <text x={graphWidth - 103} y={graphHeight - 58} textAnchor="start" fontSize="10" fontFamily='Poppins'>this month</text>
            </g>
        );
    };

    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="savings-gradient" gradientTransform="rotate(70.18)">
                        <stop offset="0%" stopColor="#66be5e" />
                        <stop offset="100%" stopColor="#117C07" />
                    </linearGradient>
                </defs>

                {/* Bar for previous month */}
                {renderBar(0.2, previousMonthSavings, false)}

                {/* Bar for current month */}
                {renderBar(0.39, currentMonthSavings, true)}

                {/* Savings Target */}
                {renderLimitLine(savingsTarget, 'Savings Target')}

                {/* Budget Limit */}
                {renderLimitLine(budgetLimit, 'Budget Limit')}

                {/* Month Labels */}
                <text x={graphWidth * 0.2 + 22} y={graphHeight - 35} textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily='Poppins'>
                    {previousMonthSavings>0?getMonthNames()[0]:''}
                </text>
                <text x={graphWidth * 0.39 + 22} y={graphHeight - 35} textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily='Poppins'>
                    {getMonthNames()[1]}
                </text>
                {renderChangeContainer()}
            </svg>
            <div className='space-x-1' style={{ display: 'flex', justifyContent: 'start', margin: '0px 10px 2px 10px' }}>
                <GraphLegend color="#66be5e" label="Savings"/>
            </div>
        </div>
    );
};

export default SavingsBarGraph;
