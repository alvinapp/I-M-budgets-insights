import { formatNumber } from 'client/utils/Formatters';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';

interface BarGraphProps {
    previousMonth: { essentials: number, wants: number },
    currentMonth: { essentials: number, wants: number },
    expenseLimit: number,
    budgetLimit: number,
}

const ExpenditureBarGraph: React.FC<BarGraphProps> = ({ previousMonth, currentMonth, expenseLimit, budgetLimit }) => {
    const [graphWidth, setGraphWidth] = useState(window.innerWidth - 23);
    const graphHeight = 200;
    const maxLimit = Math.max(expenseLimit, budgetLimit);
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

    const renderStackedBar = (positionFactor: number, essentials: number, wants: number) => {
        const x = graphWidth * positionFactor;
        const essentialsHeight = essentials * scaleFactor;
        const wantsHeight = wants * scaleFactor;

        const renderBar = (height: number, color: string) => (
            <>
                <rect x={x - 1} y={graphHeight - 50 - height - 1} width="48" height={height + 2} fill="rgba(205, 224, 231, 0.3)" rx="10" ry="10" />
                <rect x={x} y={graphHeight - 50 - height} width="46" height={height} fill={color} rx="10" ry="10" />
            </>
        );

        return (
            <g>
                {essentials > wants ? renderBar(essentialsHeight, "url(#essentialsGradient)") : renderBar(wantsHeight, '#fab362')}
                {essentials > wants ? renderBar(wantsHeight, '#fab362') : renderBar(essentialsHeight, "url(#essentialsGradient)")}
            </g>
        );
    };

    const renderChangeContainer = () => {
        const totalPrevMonth = previousMonth.essentials + previousMonth.wants;
        const totalCurrMonth = currentMonth.essentials + currentMonth.wants;
        const changePercentage = ((totalCurrMonth - totalPrevMonth) / totalPrevMonth) * 100;
        const isIncrease = changePercentage >= 0;

        return (
            <g>
                {/* Grey circular container */}
                <circle cx={graphWidth - 143} cy={graphHeight - 75} r="13" fill="#D3D3D3" stroke="black" strokeWidth="1" />

                {/* Conditionally render the arrow icon */}
                <g transform={`translate(${graphWidth - 155}, ${graphHeight - 87}) scale(1.5)`}>
                    {isIncrease ? <FiArrowUpRight /> : <FiArrowDownRight />}
                </g>

                {/* Change percentage text */}
                <text x={graphWidth - 127} y={graphHeight - 72} textAnchor="start" fontSize="11" fontWeight={"bold"} fontFamily='Poppins'>{Math.abs(changePercentage).toFixed(0)}%</text>
                <text x={graphWidth - 103} y={graphHeight - 72} textAnchor="start" fontSize="10" fontFamily='Poppins'>change this month</text>
            </g>
        );
    };

    const renderLimitLine = (value: number, label: string) => (
        <g>
            <line x1="40" y1={graphHeight - 50 - value * scaleFactor} x2={graphWidth} y2={graphHeight - 50 - value * scaleFactor} stroke="black" strokeDasharray="4" />
            <text x={2} y={graphHeight - 50 - value * scaleFactor + 5} textAnchor="start" fontSize="13" fill='#878787' fontFamily='Poppins'>{formatNumber(value)}</text>
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
                {renderStackedBar(0.2, previousMonth.essentials, previousMonth.wants)}

                {/* Stacked Bars for current month */}
                {renderStackedBar(0.39, currentMonth.essentials, currentMonth.wants)}

                {/* Expense Limit */}
                {renderLimitLine(expenseLimit, 'Expense Limit')}

                {/* Budget Limit */}
                {renderLimitLine(budgetLimit, 'Budget Limit')}

                {/* Month Labels */}
                <text x={graphWidth * 0.2 + 22} y={graphHeight - 30} textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily='Poppins'>
                    {getMonthNames()[0]}
                </text>
                <text x={graphWidth * 0.39 + 22} y={graphHeight - 30} textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily='Poppins'>
                    {getMonthNames()[1]}
                </text>
                {/* Change Container */}
                {renderChangeContainer()}
            </svg>
        </div>
    );
};

export default ExpenditureBarGraph;
