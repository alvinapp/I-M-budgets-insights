import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { formatNumber } from "client/utils/Formatters";
import { format } from "date-fns";
import { TransactionEmptyState } from "client/pages/components/EmptyState";

interface DataPoint {
  x: string;
  y: number;
}

interface InsightsExpenditureChartProps {
  currencySymbol: string;
  essentialsArray: DataPoint[];
  wantsArray: DataPoint[];
}

const InsightsExpenditureChart: React.FC<InsightsExpenditureChartProps> = ({
  currencySymbol,
  essentialsArray,
  wantsArray,
}) => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "line",
      height: 300,
      stacked: false,
      toolbar: { show: false },
      zoom: { enabled: false },
      offsetX: -15,
      offsetY: 0,
    },
    markers: {
      size: 0, // Hide all markers by default
      strokeWidth: 3,
      hover: {
        size: 6,
      },
    },
    stroke: {
      width: 2, // Adjust line width here
      curve: "smooth",
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const formattedDate =
          w.config.series[0].data[dataPointIndex]?.x.length !== 7
            ? format(w.config.series[0].data[dataPointIndex].x, "MMM dd, yyyy")
            : format(w.config.series[0].data[dataPointIndex].x, "MMM, yyyy");

        const essentialsValue = w.config.series[0].data[dataPointIndex]?.y;
        const wantsValue = w.config.series[1].data[dataPointIndex]?.y;
        const totalSpendValue = essentialsValue + wantsValue;

        return `<div style="padding: 10px; background-color: #f4f9fb; border-radius: 8px; font-size: 14px;" class="custom-tooltip">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <div style="display: flex; align-items: center;">
                            <span style="height: 10px; width: 10px; background-color: #0131A1; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                            <span style="color: #0131A1;margin-right: 5px;">Essentials:</span>
                        </div>
                        <span> ${essentialsValue
                          .toFixed(2)
                          .toLocaleString("en")}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <div style="display: flex; align-items: center;">
                            <span style="height: 10px; width: 10px; background-color: #9DB1C6; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                            <span style="color: #9DB1C6;margin-right: 5px;">Wants:</span>
                        </div>
                        <span> ${wantsValue
                          .toFixed(2)
                          .toLocaleString("en")}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; align-items: center;">
                            <span style="height: 10px; width: 10px; background-color: #101010; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                            <span style="color: #101010;margin-right: 5px;">Total:</span>
                        </div>
                        <span> ${totalSpendValue
                          .toFixed(2)
                          .toLocaleString("en")}</span>
                    </div>
                    <hr style="margin: 8px 0; border-top: 1px solid #90A4AE;" />
                    <div style="padding-top: 5px; color: #101010; text-align: center;" class="title">${formattedDate}</div>
                </div>`;
      },
    },
    xaxis: {
      type: "datetime",
      // categories: demoDataSeries.Essentials.map((p) => p.x),
      labels: {
        style: {
          cssClass: "apexcharts-xaxis-label",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${formatNumber(value)} `,
        offsetX: -5,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "#90A4AE",
      strokeDashArray: 5,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Essentials spend",
      type: "line",
      data: essentialsArray,
      color: "#0131A1",
    },
    {
      name: "Wants spend",
      type: "line",
      data: wantsArray,
      color: "#9DB1C6",
    },
    {
      name: "Total spend",
      type: "line",
      data: calculateTotalSpend(essentialsArray, wantsArray),
      color: "#101010",
    },
  ]);

  useEffect(() => {
    const [updatedEssentialsArray, updatedWantsArray] = alignDataArrays(
      essentialsArray,
      wantsArray
    );
    const totalSpend = calculateTotalSpend(
      updatedEssentialsArray,
      updatedWantsArray
    );
    setSeries([
      {
        ...series[0],
        data: updatedEssentialsArray,
      },
      {
        ...series[1],
        data: updatedWantsArray,
      },
      {
        ...series[2],
        data: totalSpend,
      },
    ]);
    // update
  }, [essentialsArray, wantsArray]);

  if (!essentialsArray.length && !wantsArray.length) {
    return (
      <div className="shadow-card px-4 py-6 mb-3 rounded-lg mt-2">
        <TransactionEmptyState label="No data available" />
      </div>
    );
  }

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height={200}
      />
    </div>
  );
};

export default InsightsExpenditureChart;

const calculateTotalSpend = (
  essentials: { x: any; y: any }[],
  wants: { x: any; y: any }[]
) => {
  // Create a map to sum values by the same date/month
  const totalsMap = new Map();

  // Add essentials to the map
  essentials.forEach(({ x, y }) => {
    totalsMap.set(x, (totalsMap.get(x) || 0) + y);
  });

  // Add wants to the map, summing with existing essentials
  wants.forEach(({ x, y }) => {
    totalsMap.set(x, (totalsMap.get(x) || 0) + y);
  });

  // Convert the map back to an array
  return Array.from(totalsMap, ([x, y]) => ({ x, y }));
};

interface DataPoint {
  x: string; // Date in YYYY-MM or YYYY-MM-DD format
  y: number; // Amount
}

function alignDataArrays(
  essentials: DataPoint[],
  wants: DataPoint[]
): [DataPoint[], DataPoint[]] {
  // if (essentials.length === 0 || wants.length === 0) {
  //     return [essentials, wants];
  // }

  // Determine if the data is monthly or daily
  const isMonthly = [...essentials, ...wants].every((dp) => dp.x.length === 7);

  if (isMonthly) {
    return alignMonthDataArrays(essentials, wants);
  } else {
    return alignDayDataArrays(essentials, wants);
  }
}

function alignMonthDataArrays(
  essentials: DataPoint[],
  wants: DataPoint[]
): [DataPoint[], DataPoint[]] {
  // Helper to increment a month
  const incrementMonth = (ym: string): string => {
    let [year, month] = ym.split("-").map(Number);
    month++;
    if (month > 12) {
      year++;
      month = 1;
    }
    return `${year}-${month.toString().padStart(2, "0")}`;
  };

  // Determine the range of dates
  const allMonths = [...essentials, ...wants].map((dp) => dp.x);
  const earliestMonth = Math.min(
    ...allMonths.map((ym) => new Date(ym).getTime())
  );
  const latestMonth = Math.max(
    ...allMonths.map((ym) => new Date(ym).getTime())
  );

  // Align arrays
  const alignArray = (
    array: DataPoint[],
    earliest: number,
    latest: number
  ): DataPoint[] => {
    const result: DataPoint[] = [];
    let currentDate = new Date(earliest);

    while (currentDate.getTime() <= latest) {
      const monthStr = currentDate.toISOString().substring(0, 7);
      const existingEntry = array.find((dp) => dp.x === monthStr);
      if (!existingEntry) {
        // Future months get a value of 0
        result.push({ x: monthStr, y: 0 });
      } else {
        result.push(existingEntry);
      }
      currentDate = new Date(incrementMonth(monthStr));
    }

    // Ensure no duplicates and return
    return Array.from(new Map(result.map((dp) => [dp.x, dp])).values());
  };

  return [
    alignArray(essentials, earliestMonth, latestMonth),
    alignArray(wants, earliestMonth, latestMonth),
  ];
}

function alignDayDataArrays(
  essentials: DataPoint[],
  wants: DataPoint[]
): [DataPoint[], DataPoint[]] {
  // Determine if the dates are monthly or daily
  const isMonthly = essentials.concat(wants).every((dp) => dp.x.length === 7);

  // Helper to increment date by month or day
  const incrementDate = (date: Date, monthly: boolean): Date => {
    return monthly
      ? new Date(date.getFullYear(), date.getMonth() + 1, 1)
      : new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  };

  // Parse the date strings to Date objects, assuming day 1 for monthly data
  const parseDateString = (dateStr: string): Date =>
    new Date(dateStr + (dateStr.length === 7 ? "-01" : ""));

  // Calculate the overall date range across both arrays
  const allDates = essentials
    .concat(wants)
    .map((dp) => parseDateString(dp.x).getTime());
  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));

  // Align an array within the date range
  const alignArray = (
    array: DataPoint[],
    start: Date,
    end: Date,
    monthly: boolean
  ): DataPoint[] => {
    const result: DataPoint[] = [];
    const dateMap = new Map<string, DataPoint>();
    array.forEach((dp) => dateMap.set(dp.x, dp));

    for (
      let currentDate = new Date(start);
      currentDate <= end;
      currentDate = incrementDate(currentDate, monthly)
    ) {
      const dateKey = monthly
        ? currentDate.toISOString().substring(0, 7)
        : currentDate.toISOString().substring(0, 10);
      if (dateMap.has(dateKey)) {
        // Add existing data point from the map
        result.push(dateMap.get(dateKey)!);
      } else if (!result.find((dp) => dp.x === dateKey)) {
        // Avoid duplicates
        // For monthly data with future dates, y should be 0, otherwise carry forward the last y
        const y =
          monthly && currentDate > parseDateString(array[array.length - 1].x)
            ? 0
            : result.length > 0
            ? result[result.length - 1].y
            : 0;
        result.push({ x: dateKey, y });
      } else {
        const lastAmount = result[result.length - 1].y;
        result.push({ x: dateKey, y: lastAmount });
      }
    }

    return result.sort((a, b) => a.x.localeCompare(b.x)); // Ensure sorted result
  };

  const updatedEssentials = alignArray(essentials, minDate, maxDate, isMonthly);
  const updatedWants = alignArray(wants, minDate, maxDate, isMonthly);

  return [updatedEssentials, updatedWants];
}
