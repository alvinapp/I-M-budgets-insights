import useCurrencySettingsStore from 'client/store/currencySettingsStore';
import React from 'react';
import styled from 'styled-components';

interface DebtChartProps {
    mortgage: number;
    autoLoan: number;
    creditCard: number;
    totalDebt: number;
}

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  right: 10%;
  top: 18%;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ColorBox = styled.span<{ color: string }>`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const DebtChart: React.FC<DebtChartProps> = ({ mortgage, autoLoan, creditCard, totalDebt }) => {
    const currencyStore = useCurrencySettingsStore((state: any) => state);
    const total = mortgage + autoLoan + creditCard;
    const mortgageAngle = (mortgage / total) * 250;
    const autoLoanAngle = (autoLoan / total) * 250;
    const creditCardAngle = (creditCard / total) * 250;

    const radius = 70;
    const stroke = 15;
    const viewBoxSize = radius * 3 + stroke * 3;

    const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    };

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI / 180.0);
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    return (
        <ChartContainer>
            <svg width={viewBoxSize - 100} height={viewBoxSize / 2 + stroke} viewBox={`0 0 ${viewBoxSize - 90} ${viewBoxSize / 2 + stroke}`}>
                <g transform={`translate(${radius + stroke}, ${radius + stroke})`}>
                    <g transform="rotate(-124)">
                        <path
                            d={describeArc(0, 0, radius, 0, mortgageAngle)}
                            fill="none"
                            stroke="#62B5B7"
                            strokeWidth={stroke}
                            strokeLinecap="round"
                        />
                        <path
                            d={describeArc(0, 0, radius, mortgageAngle, mortgageAngle + autoLoanAngle)}
                            fill="none"
                            stroke="#F3C07B"
                            strokeWidth={stroke}
                            strokeLinecap="round"
                        />
                        <path
                            d={describeArc(0, 0, radius, mortgageAngle + autoLoanAngle, mortgageAngle + autoLoanAngle + creditCardAngle)}
                            fill="none"
                            stroke="#6C4A4A"
                            strokeWidth={stroke}
                            strokeLinecap="round"
                        />
                    </g>
                    <foreignObject x={-radius - stroke / 2} y={-stroke * 2} width={radius * 2 + stroke} height={radius + stroke}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            <div className="font-custom text-base font-medium">Total Debt</div>
                            <div className="font-custom text-16 font-medium text-skin-base text-end">
                                {Math.round(totalDebt).toLocaleString("en-US")}
                                <sup className="align-super -ml-1 text-xxxxxs">
                                    {currencyStore.currencySymbol}
                                </sup>
                            </div>
                        </div>
                    </foreignObject>
                </g>
            </svg>
            <Legend>
                <LegendItem>
                    <ColorBox color="#62B5B7" /> Mortgage
                </LegendItem>
                <LegendItem>
                    <ColorBox color="#F3C07B" /> Auto loan
                </LegendItem>
                <LegendItem>
                    <ColorBox color="#6C4A4A" /> Credit card
                </LegendItem>
            </Legend>
        </ChartContainer>
    );
};

export default DebtChart;
