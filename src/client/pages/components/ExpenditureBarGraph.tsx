import { formatNumber } from 'client/utils/Formatters';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import GraphLegend from './GraphLegend';

interface BarGraphProps {
    previousMonth: { essentials: { spent: number, expenseLimit: number }, wants: { spent: number, expenseLimit: number } },
    currentMonth: { essentials: { spent: number, expenseLimit: number }, wants: { spent: number, expenseLimit: number } },
    budgetLimit: number,
}

const ExpenditureBarGraph: React.FC<BarGraphProps> = ({ previousMonth, currentMonth, budgetLimit }) => {
    const monthNameOffset = 20;
    const [graphWidth, setGraphWidth] = useState(window.innerWidth - 23);
    const graphHeight = 200;
    const graphEffectiveHeight = graphHeight - monthNameOffset;
    const expenseLimit = currentMonth.essentials.expenseLimit + currentMonth.wants.expenseLimit;
    const maxLimit = Math.max(expenseLimit, budgetLimit);
    const scaleFactor = (graphHeight - 70) / maxLimit;
    const barSpacing = graphWidth * 0.2;
    const absoluteMaxHeight = budgetLimit + 100;

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

    const renderStackedBar = (positionFactor: number, essentialsSpent: number, wantsSpent: number, showTooltip = false) => {
        const x = graphWidth * positionFactor;
        const totalSpent = essentialsSpent + wantsSpent;
        const essentialsHeight = Math.min(essentialsSpent, expenseLimit) * scaleFactor;
        const wantsHeight = Math.min(wantsSpent, Math.max(0, expenseLimit - essentialsSpent)) * scaleFactor;
        const exceededHeight = Math.max(0, totalSpent - expenseLimit) * scaleFactor;
        const overlap = 15; // Overlap between the bars}
        const tooltipHeight = 20;
        const tooltipPadding = 5;
        const maxHeight = Math.max(essentialsHeight + wantsHeight + exceededHeight, 0);
        const tooltipPosY = graphHeight - maxHeight - tooltipHeight - tooltipPadding - 60 - overlap;

        const renderBarSegment = (offsetY: number, height: number, color: string) => {
            offsetY = Math.max(offsetY, 0);
            if ((offsetY + height) > graphHeight - 50) {
                offsetY = graphHeight - 50 - height;
            }
            return <rect x={x} y={graphHeight - 50 - height - offsetY} width="46" height={height} fill={color} rx="10" ry="10" />
        };

        return (
            <g>
                {/* Exceeded segment of the bar */}
                {exceededHeight > 0 && renderBarSegment(essentialsHeight + wantsHeight - overlap, exceededHeight + overlap, '#f99e36')}
                {/* Wants segment of the bar */}
                {wantsHeight > 0 && renderBarSegment(essentialsHeight - overlap, wantsHeight + overlap, '#c18a4c')}
                {/* Essentials segment of the bar */}
                {essentialsHeight > 0 && renderBarSegment(0, essentialsHeight + (wantsHeight > 0 ? overlap : 0), "url(#essentialsGradient)")}
                {showTooltip && totalSpent > 0 ? (
                    <>
                        {/* Tooltip */}
                        <rect x={x + 1} y={tooltipPosY} width="47" height={tooltipHeight} fill="#101a25" stroke="#101a25" strokeWidth="1" rx="5" ry="5" />
                        {/* Pointing tip below the tooltip */}
                        <polygon points={`${x + 23},${tooltipPosY + tooltipHeight + 5} ${x + 19},${tooltipPosY + tooltipHeight} ${x + 27},${tooltipPosY + tooltipHeight}`} fill="#101a25" stroke="#101a25" strokeWidth="1" />
                        {/* Tooltip Text */}
                        <text x={x + 23} y={tooltipPosY + tooltipHeight / 2 + 3} textAnchor="middle" fill='#f6f6f7' fontSize="10" fontFamily='Poppins'>Today</text>
                        {/* Text showing total value */}
                        <text x={x + 20} y={tooltipPosY + tooltipHeight + 13} textAnchor="middle" fontSize="10" fontFamily='Poppins'>-{totalSpent.toLocaleString("en-US")}</text>
                    </>
                ) : null}
            </g>
        );
    };



    const renderChangeContainer = () => {
        const totalPrevMonth = previousMonth.essentials.spent + previousMonth.wants.spent;
        const totalCurrMonth = currentMonth.essentials.spent + currentMonth.wants.spent;
        const changePercentage = ((totalCurrMonth - totalPrevMonth) / totalPrevMonth) * 100;
        const isIncrease = changePercentage >= 0;

        if (totalPrevMonth === 0) {
            return <div></div>;
        }

        return (
            <g>
                {/* Grey circular container */}
                <circle cx={graphWidth - 145} cy={graphHeight - 75} r="13" fill="#dddddd" stroke="#565656" strokeWidth="1" />

                {/* Conditionally render the arrow icon */}
                <g transform={`translate(${graphWidth - 157}, ${graphHeight - 87}) scale(1.5)`}>
                    {isIncrease ? <FiArrowUpRight color="#565656" strokeWidth="1" /> : <FiArrowDownRight color="#565656" strokeWidth="1" />}
                </g>

                {/* Change percentage text */}
                <text x={graphWidth - 130} y={graphHeight - 72} textAnchor="start" fontSize="11" fontWeight={"bold"} fontFamily='Poppins'>{Math.abs(changePercentage).toFixed(0)}%</text>
                <text x={graphWidth - 102} y={graphHeight - 72} textAnchor="start" fontSize="10" fontFamily='Poppins'>change this month</text>
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

    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="essentialsGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(124.2)">
                        <stop offset="0%" style={{ stopColor: "#0C9DBE", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#056489", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* Stacked Bars for previous month */}
                {renderStackedBar(0.2, previousMonth.essentials.spent, previousMonth.wants.spent, false)}

                {/* Stacked Bars for current month */}
                {renderStackedBar(0.39, currentMonth.essentials.spent, currentMonth.wants.spent, true)}

                {/* Expense Limit */}
                {renderLimitLine(expenseLimit, 'Expense Limit')}

                {/* Budget Limit */}
                {renderLimitLine(budgetLimit, 'Budget Limit')}

                {/* Month Labels */}
                {(previousMonth.essentials.spent + previousMonth.wants.spent) > 0 ? <text x={graphWidth * 0.2 + 22} y={graphHeight - 35} textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily='Poppins'>
                    {getMonthNames()[0]}
                </text> : <></>}
                <text x={graphWidth * 0.39 + 22} y={graphHeight - 35} textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily='Poppins'>
                    {getMonthNames()[1]}
                </text>
                {/* Change Container */}
                {renderChangeContainer()}
            </svg>
            <div className='space-x-1' style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 10px 2px 10px' }}>
                <GraphLegend color="#0b84a6" label="Essentials spend" />
                <GraphLegend color="#c18a4c" label="Wants spend" />
                <GraphLegend color="#f99e36" label="Over limit" />
            </div>
        </div>
    );
};

export default ExpenditureBarGraph;
