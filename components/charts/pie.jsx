"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ dataList }) => {
    const isEmptyData = dataList.length === 0 || dataList.every(value => value === 0);

    const data = {
        labels: isEmptyData ? ['No Data'] : ['Sales', 'Tips', 'Taxes'],
        datasets: [
            {
                label: 'dollar',
                data: isEmptyData ? [1] : dataList, // Use a default value to display the "No Data" slice
                backgroundColor: isEmptyData ? ['#cccccc'] : ['#fecc02', '#9ab1fe', '#3562ff'],
                borderColor: isEmptyData ? ['#cccccc'] : ['#fecc02', '#9ab1fe', '#3562ff'],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            // Add a tooltip that only shows when there is actual data
            tooltip: {
                callbacks: {
                    label: function (context) {
                        if (isEmptyData) {
                            return "No data available";
                        }
                        return `${context.label}: ${context.parsed}%`;
                    }
                }
            }
        },
        elements: {
            arc: {
                hoverBackgroundColor: isEmptyData ? '#cccccc' : undefined,
                hoverBorderColor: isEmptyData ? '#cccccc' : undefined,
            },
        },
    }
    return <Pie data={data} options={options} />;
}