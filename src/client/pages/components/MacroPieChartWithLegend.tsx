import { checkNAN } from "client/utils/Formatters";
import React from "react";
import MacroPieChart from "./MacroPieChart";
import MacroPieChartLegend from "./MacroPieChartLegend";

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
  isLoading,
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
          color="#01ab9e"
          text="Essentials"
          percentage={checkNAN(percentages.essentials)}
          showComparison={showComparison}
          percentageChange={checkNAN(
            peerPercentageDifferences.essentials.toFixed(2)
          )}
        />
        <MacroPieChartLegend
          color="#345DAF"
          text="Wants"
          percentage={checkNAN(percentages.wants)}
          showComparison={showComparison}
          percentageChange={checkNAN(
            peerPercentageDifferences.wants.toFixed(2)
          )}
        />
        {/* <MacroPieChartLegend
          color="#e5a711"
          text="Debt repayment"
          percentage={checkNAN(percentages.savings)}
          showComparison={showComparison}
          percentageChange={checkNAN(
            peerPercentageDifferences.savings.toFixed(2)
          )}
        /> */}
        <MacroPieChartLegend
          color="#e7e7e7"
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
