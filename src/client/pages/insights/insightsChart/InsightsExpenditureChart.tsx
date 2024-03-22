import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { formatNumber } from 'client/utils/Formatters';

type DataPoint = {
    x: string; // Assuming the x value is a date in string format
    y: number; // The y value is a numeric value
};

interface InsightsExpenditureChartProps {
    currencySymbol: string;
}

const InsightsExpenditureChart: React.FC<InsightsExpenditureChartProps> = ({ currencySymbol }) => {
    // Define demo data for the chart
    const demoDataSeries = {
        purchaseVolume: [
            { x: '2024-03-01', y: 10000 },
            { x: '2024-03-02', y: 20000 },
            { x: '2024-03-03', y: 30000 },
            // add 10 more data points
            { x: '2024-03-04', y: 40000 },
            { x: '2024-03-05', y: 50000 },
            { x: '2024-03-06', y: 60000 },
            { x: '2024-03-07', y: 65000 },
            { x: '2024-03-08', y: 68000 },
            { x: '2024-03-09', y: 90000 },
            { x: '2024-03-10', y: 100000 },
        ],
        commissionData: [
            { x: '2024-03-01', y: 2000 },
            { x: '2024-03-02', y: 4000 },
            { x: '2024-03-03', y: 6000 },
            // add 10 more data points
            { x: '2024-03-04', y: 8000 },
            { x: '2024-03-05', y: 10000 },
            { x: '2024-03-06', y: 12000 },
            { x: '2024-03-07', y: 12300 },
            { x: '2024-03-08', y: 12700 },
            { x: '2024-03-09', y: 13000 },
            { x: '2024-03-10', y: 13500 },

        ],
        anotherDataSet: [
            { x: '2024-03-01', y: 1500 },
            { x: '2024-03-02', y: 2500 },
            { x: '2024-03-03', y: 3500 },
            // add 10 more data points
            { x: '2024-03-04', y: 4500 },
            { x: '2024-03-05', y: 5500 },
            { x: '2024-03-06', y: 6500 },
            { x: '2024-03-07', y: 7500 },
            { x: '2024-03-08', y: 8500 },
            { x: '2024-03-09', y: 9500 },
            { x: '2024-03-10', y: 10500 },
        ],
    };

    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: 'line',
            height: 300,
            stacked: false,
            toolbar: { show: false },
            zoom: { enabled: false },
            offsetX: -15,
            offsetY: 0,
        },
        markers: {
            size: 0, // Hide all markers by default
            strokeWidth: 2,
            hover: {
                size: 6,
            },
        },
        stroke: {
            width: 2, // Adjust line width here
        },
        tooltip: {
            y: {
                formatter: (value) => `${currencySymbol}${value}`,
            },
        },
        xaxis: {
            type: 'datetime',
            categories: demoDataSeries.purchaseVolume.map((p) => p.x),
            labels: {
                style: {
                    cssClass: 'apexcharts-xaxis-label',
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
            borderColor: '#90A4AE',
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
            name: 'Purchase Volume',
            type: 'line',
            data: demoDataSeries.purchaseVolume,
        },
        {
            name: 'Commission',
            type: 'line',
            data: demoDataSeries.commissionData,
        },
        {
            name: 'Another Data Set',
            type: 'line',
            data: demoDataSeries.anotherDataSet,
        },
    ]);

    useEffect(() => {
        // Logic to set markers on the last data point
        const newSeries = series.map(s => {
            const lastDataIndex = s.data.length - 1;
            return {
                ...s,
                data: s.data.map((d, i) => ({
                    ...d,
                    marker: {
                        size: i === lastDataIndex ? 5 : 0
                    }
                })),
            };
        });
        setSeries(newSeries);
    });

    return (
        <div>
            <Chart options={options} series={series} type="line" width="100%" height={200} />
        </div>
    );
};

export default InsightsExpenditureChart;