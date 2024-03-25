import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { format, isSameMonth } from "date-fns";
import { ApexOptions } from "apexcharts";
import { formatNumber } from "client/utils/Formatters";

interface Props {
  earnedData: number[];
  spentData: number[];
  datalabels: string[];
  fullDataLabels: Date[];
  currencySymbol: string;
}

const CashFlowRangeGraph: React.FC<Props> = ({
  earnedData,
  spentData,
  fullDataLabels,
  currencySymbol,
}) => {
  // State to track whether data is loaded
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [formattedDates, setFormattedDates] = useState([]);

  useEffect(() => {
    // Check if all necessary data is available
    if (
      earnedData.length > 0 &&
      spentData.length > 0 &&
      fullDataLabels.length > 0
    ) {
      const finalFormattedDates: any = fullDataLabels?.map((date: any) => {
        const parts = date.split(" ");
        let formattedDate;
        if (parts.length === 2) {
          const monthIndex =
            new Date(Date.parse(parts[0] + " 1, 2000")).getMonth() + 1;
          formattedDate = `${parts[1]}-${monthIndex
            .toString()
            .padStart(2, "0")}-01`;
        } else if (parts.length === 3) {
          const monthIndex =
            new Date(Date.parse(parts[0] + " 1, 2000")).getMonth() + 1;
          const day = parts[1];
          const year = `20${parts[2]}`;
          formattedDate = `${year}-${monthIndex
            .toString()
            .padStart(2, "0")}-${day.padStart(2, "0")}`;
        }
        return formattedDate;
      });
      setFormattedDates(finalFormattedDates);
      setDataLoaded(true);
    }
  }, [earnedData, spentData, fullDataLabels]);

  // Convert Date objects to the expected string format

  const series = [
    {
      name: "Earned",
      data: earnedData.map((value, index) => ({
        x: formattedDates[index],
        y: value,
      })),
      color: "#0d40b0",
    },
    {
      name: "Spent",
      data: spentData.map((value, index) => ({
        x: formattedDates[index],
        y: value,
      })),
      color: "#11b1bf",
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: "70%",
        rangeBarOverlap: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "datetime",
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
      },
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        let date = w.config.series[0].data[dataPointIndex].x;
        const earnedValue = series[0][dataPointIndex];
        const spentValue = series[1][dataPointIndex];
        if (
          isSameMonth(
            new Date(w.config.series[0].data[0].x),
            new Date(
              w.config.series[0].data[w.config.series[0].data.length - 1].x
            )
          )
        ) {
          date = format(new Date(date), "MMM dd, yyyy");
        } else {
          date = format(new Date(date), "MMM, yyyy");
        }
        return `<div style="padding: 10px; background-color: #f4f9fb; border-radius: 8px;" class="custom-tooltip">
                        <div style="display: flex; align-items: center; color: #101010; text-align: right; font-weight: bold;">
                            <span> + ${earnedValue
                              .toFixed(2)
                              .toLocaleString("en")}</span>
                            <sup style="color: #101010; font-size: 10px; font-weight: bold;">
                                ${currencySymbol}
                            </sup>
                        </div>
                        <div style="display: flex; align-items: center; color: #101010; text-align: right;font-weight: bold;">
                            <span> - ${spentValue
                              .toFixed(2)
                              .toLocaleString("en")}</span>
                            <sup style="color: #101010; font-size: 10px; font-weight: bold;">
                                ${currencySymbol}
                            </sup>
                        </div>
                        <hr style="border: 1px solid #f1f1f1;"/>
                        <div style="padding-bottom: 5px; color: #101010; display: flex; justify-content:center;" class="title">${date}</div>
                    </div>`;
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  return (
    <div style={{ display: dataLoaded ? "block" : "none" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default CashFlowRangeGraph;
