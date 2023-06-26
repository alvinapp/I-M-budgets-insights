import React from 'react';
import MacroPieChart from './MacroPieChart';
import MacroPieChartLegend from './MacroPieChartLegend';

interface Values {
  wants: number;
  essentials: number;
  savings: number;
  unallocated: number;
}

interface MacroPieChartWithLegendProps {
  dimensions: number;
  doughnutThickness: number;
  values: Values;
}

const MacroPieChartWithLegend: React.FC<MacroPieChartWithLegendProps> = ({ dimensions, doughnutThickness, values }) => {
    const total = values.wants + values.essentials + values.savings + values.unallocated;

    let percentages = {
        essentials: Math.round((values.essentials / total) * 100),
        wants: Math.round((values.wants / total) * 100),
        savings: Math.round((values.savings / total) * 100),
        unallocated: Math.round((values.unallocated / total) * 100)
    };

    const totalPercentage = percentages.essentials + percentages.wants + percentages.savings + percentages.unallocated;

    if (totalPercentage !== 100) {
        const diff = 100 - totalPercentage;
        percentages.unallocated += diff;
    }

    return (
        <div className="flex flex-row items-center space-x-4">
            <MacroPieChart dimensions={dimensions} doughnutThickness={doughnutThickness} values={values} />
            <div className="flex flex-col justify-between space-y-2">
                <MacroPieChartLegend color="#0c8eb0" text="Essentials" percentage={percentages.essentials} />
                <MacroPieChartLegend color="#c69155" text="Wants" percentage={percentages.wants} />
                <MacroPieChartLegend color="#3da134" text="Savings" percentage={percentages.savings} />
                <MacroPieChartLegend color="#cfddea" text="Unallocated" percentage={percentages.unallocated} />
            </div>
        </div>
    );
};

export default MacroPieChartWithLegend;