import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);

interface Props {
    earnedData: number[];
    spentData: number[];
    datalabels: string[];
    currencySymbol: string;
}

const CashFlowRangeGraph = ({ earnedData, spentData, datalabels, currencySymbol }: Props) => {
    const [earnedBarData, setEarnedBarData] = useState<number[]>(earnedData);
    const [spentBarData, setSpentBarData] = useState<number[]>(spentData);
    const [labels, setLabels] = useState<string[]>(datalabels);

    useEffect(() => {
        setEarnedBarData(earnedData);
        setSpentBarData(spentData);
        setLabels(datalabels);
    }, [earnedData, spentData, datalabels]);

    const maxLabelsToShow = 12;
    const step = Math.ceil(labels.length / maxLabelsToShow);
    const truncatedLabels = labels.filter((label, index) => index % step === 0);

    const truncateNumber = (num: number): string => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + "K";
        } else {
            return num.toString();
        }
    }

    const data: ChartData<'bar', number[], string> = {
        labels: truncatedLabels,
        datasets: [
            {
                label: 'Earned',
                data: earnedBarData,
                backgroundColor: '#0781a4',
                hoverBorderColor: '#e7e7e7',
                hoverBorderWidth: 3,
                type: 'bar',
                order: 1,
            },
            {
                label: 'Spent',
                data: spentBarData,
                backgroundColor: '#f3b167',
                hoverBorderColor: '#e7e7e7',
                hoverBorderWidth: 3,
                type: 'bar',
                order: 1,
            },
        ]
    };


    let delayed: any;

    const options: ChartOptions<'bar'> = {
        plugins: {
            datalabels: {
                color: '#878787',
                align: 'end',
                anchor: 'end',
                offset: -2,
                formatter: (value: number) => `${truncateNumber(value)}`,
                font: {
                    weight: 'bold',
                    family: 'Poppins SemiBold',
                    size: 12
                }
            },
            legend: {
                display: false
            },
        },
        interaction: {
            mode: 'index',
            intersect: false
        },
        scales: {
            y: {
                beginAtZero: true,
                border: {
                    display: false,
                    dash: [3, 3]
                },
                ticks: {
                    callback: (value, index, values) => {
                        // Format the tick label here
                        return truncateNumber(Number(value));
                    }
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#101010',
                    font: {
                        size: 10,
                        family: 'Poppins',
                        weight: 'bold',
                    },
                    autoSkip: false,
                    minRotation: 0,
                    maxRotation: 0,
                },
                title: {
                    display: false,
                },
            }
        },
        elements: {
            bar: {
                borderRadius: 7,
                borderSkipped: false,
            }
        },
        datasets: {
            bar: {
                barPercentage: 1.8,
                categoryPercentage: 0.5,
            }
        },
        // barThickness: 45,
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    };

    return (
        <div style={{ margin: '20px 0 5px 0' }}>
            <Bar data={data} options={options} style={{ maxHeight: '600px', width: '100%' }} />
        </div>
    );
};

export default CashFlowRangeGraph;
