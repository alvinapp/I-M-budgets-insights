import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { format, isSameMonth } from "date-fns";
import { ApexOptions } from "apexcharts";
import { formatNumber } from "client/utils/Formatters";
import loaderSvg from "../../../assets/images/Loader.svg";

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
  const [dataLoaded, setDataLoaded] = useState(false);
  const [formattedDates, setFormattedDates] = useState<string[]>([]);
  const [seriesData, setSeriesData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if all necessary data is available
    if (
      earnedData.length > 0 &&
      spentData.length > 0 &&
      fullDataLabels.length > 0
    ) {
      try {
        const finalFormattedDates: any = fullDataLabels?.map((date: any) => {
          const parts = date.split(" ");
          let formattedDate;
          if (parts.length === 2) {
            const monthIndex =
              new Date(Date.parse(parts[0] + " 1, 2000")).getMonth() + 1;
            formattedDate = `${parts[1]}-${monthIndex.toString().padStart(2, "0")}-01`;
          } else if (parts.length === 3) {
            const monthIndex =
              new Date(Date.parse(parts[0] + " 1, 2000")).getMonth() + 1;
            const day = parts[1];
            const year = `20${parts[2]}`;
            formattedDate = `${year}-${monthIndex.toString().padStart(2, "0")}-${day.padStart(2, "0")}`;
          }
          return formattedDate;
        });
        setFormattedDates(finalFormattedDates);
        setDataLoaded(true);
      } catch (e) {
        setError("Error: " + e);
        console.log("xxxxxxxxxxxx", e);
      }
    }
  }, [earnedData, spentData, fullDataLabels]);

  useEffect(() => {
    if (dataLoaded) {
      const newSeries = [
        {
          name: "Earned",
          data: earnedData.map((value, index) => ({
            x: formattedDates[index] || '', // Provide a fallback if index is out of bounds
            y: value,
          })),
          color: "#71EBD7",
        },
        {
          name: "Spent",
          data: spentData.map((value, index) => ({
            x: formattedDates[index] || '', // Provide a fallback if index is out of bounds
            y: value,
          })),
          color: "#4C4C4C",
        },
      ];
      setSeriesData(newSeries);
    }
  }, [dataLoaded, formattedDates, earnedData, spentData]);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
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
                            <span> + ${Number(earnedValue).toLocaleString("en-US", { maximumFractionDigits: 2, })}</span>
                            <sup style="color: #101010; font-size: 10px; font-weight: bold;">
                                ${currencySymbol}
                            </sup>
                        </div>
                        <div style="display: flex; align-items: center; color: #101010; text-align: right;font-weight: bold;">
                            <span> - ${Number(spentValue).toLocaleString("en-US", { maximumFractionDigits: 2, })}</span>
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return dataLoaded ? (
    <div>
      <ReactApexChart options={options} series={seriesData} type="bar" height={300} />
    </div>
  ) : (
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
  );;
};

export default CashFlowRangeGraph;
