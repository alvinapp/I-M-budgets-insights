import React from "react";
import MacroPieChart from "./MacroPieChart";
import MacroPieChartLegend from "./MacroPieChartLegend";
import { checkNAN } from "client/utils/Formatters";
import { essentials } from "client/utils/MockData";

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
  isLoading: boolean;
}

const MacroPieChartWithLegend: React.FC<MacroPieChartWithLegendProps> = ({
  dimensions,
  doughnutThickness,
  values,
  peerValues,
  showComparison,
  showUnallocated,
  isLoading
}) => {
  const total =
    values.wants + values.essentials + values.savings + values.unallocated;

  let percentages = {
    essentials: Math.round((values.essentials / total) * 100),
    wants: Math.round((values.wants / total) * 100),
    savings: Math.round((values.savings / total) * 100),
    unallocated: Math.round((values.unallocated / total) * 100),
  };

  const totalPercentage =
    percentages.essentials +
    percentages.wants +
    percentages.savings +
    percentages.unallocated;

  const peerPercentageDifferences = {
    essentials: calculatePercentageDifference(
      values.essentials,
      peerValues?.essentials
    ),
    wants: calculatePercentageDifference(values.wants, peerValues?.wants),
    savings: calculatePercentageDifference(values.savings, peerValues?.savings),
    unallocated: calculatePercentageDifference(
      values.unallocated,
      peerValues?.unallocated
    ),
  };

  function calculatePercentageDifference(userValue: any, peerValue: any) {
    if ((peerValue === 0 || peerValue === undefined) && userValue === 0) {
      return 0;
    } else if ((peerValue === 0 || peerValue === undefined) && userValue > 0) {
      return 100;
    }
    return ((userValue - peerValue) / peerValue) * 100;
  }

  if (totalPercentage !== 100) {
    const diff = 100 - totalPercentage;
    percentages.unallocated += diff;
  }

  return (
    <div className="flex flex-row items-center space-x-4">
      <MacroPieChart
        dimensions={dimensions}
        doughnutThickness={doughnutThickness}
        values={values}
        isLoading={isLoading}
      />
      <div className="flex flex-col justify-between space-y-2">
        <MacroPieChartLegend
          color="linear-gradient(124.2deg, #4053D0 0%, #051AA3 100%)"
          text="Essentials"
          percentage={checkNAN(percentages.essentials)}
          showComparison={showComparison}
          percentageChange={checkNAN(
            peerPercentageDifferences.essentials.toFixed(2)
          )}
        />
        <MacroPieChartLegend
          color="linear-gradient(124.2deg, #8490E2 0%, #3B4381 100%)"
          text="Wants"
          percentage={checkNAN(percentages.wants)}
          showComparison={showComparison}
          percentageChange={checkNAN(
            peerPercentageDifferences.wants.toFixed(2)
          )}
        />
        <MacroPieChartLegend
          color="linear-gradient(180deg, #71EBD7 0%, #3ED1AE 100%)"
          text="Savings"
          percentage={checkNAN(percentages.savings)}
          showComparison={showComparison}
          percentageChange={checkNAN(
            peerPercentageDifferences.savings.toFixed(2)
          )}
        />
        <MacroPieChartLegend
          color="#C3C3C3"
          text="Unallocated"
          percentage={checkNAN(percentages.unallocated)}
          showComparison={showComparison}
          showUnallocated={showUnallocated}
          percentageChange={checkNAN(
            peerPercentageDifferences.unallocated.toFixed(2)
          )}
        />
      </div>
    </div>
  );
};

export default MacroPieChartWithLegend;
