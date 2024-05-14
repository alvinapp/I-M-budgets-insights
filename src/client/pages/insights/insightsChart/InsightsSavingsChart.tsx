import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { formatNumber } from "client/utils/Formatters";
import { format } from "date-fns";
import { TransactionEmptyState } from "client/pages/components/EmptyState";
import loaderSvg from "../../../assets/images/Loader.svg";
import CustomLoader from "client/pages/components/Loader/CustomLoader";

interface DataPoint {
  x: string;
  y: number;
}

interface InsightsSavingsChartProps {
  currencySymbol: string;
  savingsArray: DataPoint[];
  isLoading: boolean;
}

const InsightsSavingsChart: React.FC<InsightsSavingsChartProps> = ({
  currencySymbol,
  savingsArray,
  isLoading,
}) => {
  const [dataArrayLength, setDataArrayLength] = useState();
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
        const dataPoint = w.config.series[seriesIndex].data[dataPointIndex];
        const formattedDate = dataPoint.x.length !== 7
          ? format(new Date(dataPoint.x), "MMM dd yyyy")
          : format(new Date(dataPoint.x), "MMM yyyy");

        const essentialsValue = Number(dataPoint.y);
        const formattedValue = essentialsValue.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        });

        return `<div style="padding: 10px; background-color: #ffffff; border-radius: 8px; font-size: 14px;" class="custom-tooltip">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <div style="display: flex; align-items: center;">
                      <span style="height: 10px; width: 10px; background-color: #97449E; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
                      <span style="color: #97449E;margin-right: 5px;">${formattedValue}</span>
                    </div>
                  </div>
                  <div style="padding-top: 5px; color: #101010; text-align: center;font-size: 12px;" class="title">${formattedDate}</div>
                </div>`;
      }
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
      tooltip: {
        enabled: false
      }
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
      name: "Total debt",
      type: "line",
      data: savingsArray,
      color: "#97449E",
    }
  ]);

  useEffect(() => {
    if (!savingsArray.length) {
      return;
    }
    const [arrayLength, updatedsavingsArray] = alignDataArrays(
      savingsArray,
    );

    if (arrayLength && dataArrayLength !== arrayLength) {
      setDataArrayLength(arrayLength);
    }

    const totalSpend = calculateTotalSpend(
      updatedsavingsArray,
    );

    //TODO: create a new array by getting the difference between each value of the element in the original array from 6715992
    const newSavingsArray = updatedsavingsArray.map((point) => ({
      x: point.x,
      y: 6715992 - point.y, // Subtract each value from 6715992
    }));

    setSeries([
      {
        ...series[0],
        data: newSavingsArray,
      }
    ]);
  }, [savingsArray, dataArrayLength]);

  if (isLoading) {
    return (
      <div className="shadow-card px-4 py-6 mb-3 rounded-lg mt-2 items-center">
        <img
          src={loaderSvg}
          alt="loader"
          id="loader-image"
          style={{
            width: "40px",
            height: "40px",
            display: "block",
            margin: "4.375rem auto",
          }}
        />
      </div>
    );
  }

  if (!savingsArray.length) {
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

export default InsightsSavingsChart;

const calculateTotalSpend = (
  savings: { x: any; y: any }[],
) => {
  // Create a map to sum values by the same date/month
  const totalsMap = new Map();

  // Add savings to the map
  savings.forEach(({ x, y }) => {
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
  savings: DataPoint[],
): [any, DataPoint[]] {
  // if (savings.length === 0 || wants.length === 0) {
  //     return [savings, wants];
  // }

  // Determine if the data is monthly or daily
  const isMonthly = [...savings].every((dp) => dp.x.length === 7);

  if (isMonthly) {
    return alignMonthDataArrays(savings);
  } else {
    return alignDayDataArrays(savings);
  }
}

function alignMonthDataArrays(
  savings: DataPoint[],
): [any, DataPoint[]] {
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
  const allMonths = [...savings].map((dp) => dp.x);
  if (allMonths.length === 1) {
    const previousMonth = new Date(allMonths[0]);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    allMonths.unshift(previousMonth.toISOString().substring(0, 7));
  }
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
    null,
    alignArray(savings, earliestMonth, latestMonth)
  ];
}

function alignDayDataArrays(savings: DataPoint[],): [number, DataPoint[]] {
  if (savings.length === 0) {
    return [0, []];
  }

  const isMonthly = savings.every((dp) => dp.x.length === 7);
  const parseDateString = (dateStr: string): Date => new Date(dateStr + (dateStr.length === 7 ? "-01" : ""));

  // Parsing all dates directly
  const allDates = savings.map(dp => parseDateString(dp.x));

  if (allDates.length === 1) {
    allDates.unshift(new Date(allDates[0].getTime() - (24 * 60 * 60 * 1000)));
  }

  const alignArray = (array: DataPoint[], dates: Date[], monthly: boolean): DataPoint[] => {
    const result: DataPoint[] = [];
    const dateMap = new Map();

    // Fill map with all relevant dates
    dates.forEach(date => {
      const dateKey = monthly ? date.toISOString().substring(0, 7) : date.toISOString().substring(0, 10);
      dateMap.set(dateKey, { x: dateKey, y: 0 }); // Initialize all dates with 0
    });

    // Set actual values from the data
    array.forEach(dp => {
      const key = monthly ? dp.x.substring(0, 7) : dp.x.substring(0, 10);
      if (dateMap.has(key)) {
        dateMap.set(key, { x: key, y: dp.y });
      }
    });

    // Carry forward the last known value if any dates were initialized to 0
    let lastValue = 0;
    dates.sort((a, b) => a.getTime() - b.getTime()).forEach(date => {
      const dateKey = monthly ? date.toISOString().substring(0, 7) : date.toISOString().substring(0, 10);
      const currentValue = dateMap.get(dateKey);
      if (currentValue.y === 0 && lastValue !== 0) {
        dateMap.set(dateKey, { x: dateKey, y: lastValue });
      } else {
        lastValue = currentValue.y;
      }
    });

    // Convert map to sorted array
    result.push(...dateMap.values());
    // sort dates in ascending order
    result.sort((a, b) => a.x.localeCompare(b.x));
    return result;
  };

  const updatedEssentials = alignArray(savings, allDates, isMonthly);

  const lengthOfDateArrays = updatedEssentials.length;

  return [lengthOfDateArrays, updatedEssentials];
}
