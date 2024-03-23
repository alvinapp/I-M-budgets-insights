import React from 'react';
import MacroPieChart from './MacroPieChart';
import MacroPieChartLegend from './MacroPieChartLegend';
import { checkNAN } from "client/utils/Formatters";
import { essentials } from 'client/utils/MockData';

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
    peerValues?: Values;
    showComparison?: boolean;
    showUnallocated?: boolean;
}

const MacroPieChartWithLegend: React.FC<MacroPieChartWithLegendProps> = ({ dimensions, doughnutThickness, values, peerValues, showComparison, showUnallocated }) => {
    const total = values.wants + values.essentials + values.savings + values.unallocated;

    let percentages = {
        essentials: Math.round((values.essentials / total) * 100),
        wants: Math.round((values.wants / total) * 100),
        savings: Math.round((values.savings / total) * 100),
        unallocated: Math.round((values.unallocated / total) * 100)
    };

    const totalPercentage = percentages.essentials + percentages.wants + percentages.savings + percentages.unallocated;

    console.log("Essentials:", values.essentials, "Wants:", values.wants, "Savings:", values.savings, "Unallocated:", values.unallocated)
    console.log("Peer Essentials:", peerValues?.essentials, "Peer Wants:", peerValues?.wants, "Peer Savings:", peerValues?.savings, "Peer Unallocated:", peerValues?.unallocated)

    const peerPercentageDifferences = {
        essentials: calculatePercentageDifference(values.essentials, peerValues?.essentials),
        wants: calculatePercentageDifference(values.wants, peerValues?.wants),
        savings: calculatePercentageDifference(values.savings, peerValues?.savings),
        unallocated: calculatePercentageDifference(values.unallocated, peerValues?.unallocated),
    };

    function calculatePercentageDifference(userValue: any, peerValue: any) {
        if (peerValue === 0 || peerValue === undefined) {
            return 0;
        }
        return (userValue - peerValue) / peerValue * 100;
    }

    if (totalPercentage !== 100) {
        const diff = 100 - totalPercentage;
        percentages.unallocated += diff;
    }

    return (
        <div className="flex flex-row items-center space-x-4">
            <MacroPieChart dimensions={dimensions} doughnutThickness={doughnutThickness} values={values} />
            <div className="flex flex-col justify-between space-y-2">
                <MacroPieChartLegend color="#0d44b5" text="Essentials" percentage={checkNAN(percentages.essentials)} showComparison={showComparison} percentageChange={checkNAN(peerPercentageDifferences.essentials.toFixed(2))} />
                <MacroPieChartLegend color="#9db2c6" text="Wants" percentage={checkNAN(percentages.wants)} showComparison={showComparison} percentageChange={checkNAN(peerPercentageDifferences.wants.toFixed(2))} />
                <MacroPieChartLegend color="#0dacb9" text="Savings" percentage={checkNAN(percentages.savings)} showComparison={showComparison} percentageChange={checkNAN(peerPercentageDifferences.savings.toFixed(2))} />
                <MacroPieChartLegend color="#d1ddea" text="Unallocated" percentage={checkNAN(percentages.unallocated)} showComparison={showComparison} showUnallocated={showUnallocated} percentageChange={checkNAN(peerPercentageDifferences.unallocated.toFixed(2))} />
            </div>
        </div>
    );
};

export default MacroPieChartWithLegend;
