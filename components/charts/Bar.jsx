"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // Import BarElement
  BarController, // Import BarController (if necessary, depending on Chart.js version)
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Make sure to register BarElement and BarController
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, // Register BarElement
  // BarController, // Register BarController (if necessary)
  Title,
  Tooltip,
  Legend
);

export function BarChart({ title, dates, sales }) {
  // Your existing component logic
  // console.log( dates, sales, title , 'dates', 'sales', 'title', 'dates')
  const data = {
    labels: [
      "6 hrs",
      "12 hrs",
      "18 hrs",
      "24 hrs",
      "30 hrs",
      "36 hrs",
      "42 hrs",
      "48 hrs",
      "54 hrs",
      "60 hrs",
      "66 hrs",
      "72 hrs",
    ],
    datasets: [
      {
        label: "High", // Label for the first dataset
        data: [10, 20, 30, 34], // Array containing data points for the 'High' dataset
        borderColor: "#B7FABC", // Border color
        backgroundColor: "#B7FABC", // Background color
        borderRadius: 10, // Add border radius to bars
      },
      {
        label: "Medium", // Label for the second dataset
        data: [24, 30, 33], // Array containing data points for the 'Medium' dataset
        borderColor: "#CFDEFC", // Border color
        backgroundColor: "#CFDEFC", // Background color
        borderRadius: 10, // Add border radius to bars
      },
      {
        label: "Low", // Label for the third dataset
        data: [32, 45, 2], // Array containing data points for the 'Low' dataset
        borderColor: "#F8D4C5", // Border color
        backgroundColor: "#F8D4C5", // Background color
        borderRadius: 10, // Add border radius to bars
      },
    ],
    // datasets: [
    //     {
    //         fill: true,
    //         label: ['High','Medium','Low'],
    //         data: sales,
    //         borderColor: 'black',
    //         backgroundColor: ({chart}) => {
    //             if (!chart || !chart.ctx || !chart.chartArea) {
    //                 // This case happens on initial chart load
    //                 return null;
    //             }
    //             const gradient = chart.ctx.createLinearGradient(0, chart.chartArea.bottom, 0, chart.chartArea.top);
    //             gradient.addColorStop(0, '#f8f9ff'); // Light color at the bottom
    //             gradient.addColorStop(1, '#d3dcff'); // Dark color at the top
    //             return gradient;
    //         },
    //         pointRadius: 0,
    //         tension: 0.4,
    //     },
    // ],
  };
  const [chartData, setChartData] = useState(data);
  useEffect(() => {
    setChartData(data);
  }, []);

  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "end", // Align legend to end (right)
        padding: {
          top: 100,
        },
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          //   pointStyleWidth: 10,
          color: "black",
          boxWidth: 5,
          boxHeight: 5,
          font: {
            size: 14,
            family: "Quicksand, sans-serif",
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20, // Increase padding to make space for legend at the top
      },
    },
    scales: {
      y: {
        axis: "y", // This is optional to specify the y axis
        stacked: true, // Stack bars horizontally
        title: {
          display: true,
          text: "Security rating", // Text on the left side (y-axis)
          font: {
            size: 14,
            weight: "bold",
          },
        },
        padding: {
          top: 10, // Add space between y-axis title and chart area
        },
        ticks: {
          stepSize: 20, // Gap between ticks
        },

      },
      x: {
        axis: "x", // This is optional to specify the x axis
        stacked: true, // Stack bars horizontally
        title: {
          display: true,
          text: "Month", // Text at the bottom (x-axis)
          font: {
            size: 14,
            weight: "bold",
          },
          padding: {
            top: 10, // Add space between x-axis title and chart area
          },
        },
        grid: {
          display: false, // Hide y-axis grid lines
          drawBorder: false, // Hide y-axis border
        },
      },
    },
  };

  return <Bar options={options} data={chartData} />;
}
