"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function LineChart({ title, dates }) {
  const chartRef = useRef(null);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end", // Align legend to end (right)
        padding: {
          top: 10,
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

      title: {
        display: true,
        text: title,
      },
    },
    // hide scales from the chart
    scales: {
      x: {
        display: true,
        ticks: {
          display: true,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        display: true,
        ticks: {
          display: false,
          beginAtZero: false,
        },
        grid: {
          drawBorder: true,
          display: true,
        },
        border: {
            display: false, // Hide the y-axis line
          },
      },
    },
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "High", // Label for the first dataset
        data: [80, 90, 88, 91, 86, 94, 90, 100, 98, 85, 96, 91], // Array containing data points for the 'High' dataset
        borderColor: "#0A8B55", // Border color 
        backgroundColor: "rgba(1, 10, 63, 0.3)",
        pointBackgroundColor: "#0A8B55", // Point color for the line chart
        pointBorderColor: "#0A8B55", // Point border color for the line chart
        pointHoverBackgroundColor: "#0A8B55", // Point hover background color for the line chart
        pointHoverBorderColor: "#0A8B55", // Point hover border color for the line chart
        borderRadius: 10, // Add border radius to bars
        lineTension: 0.8,
        fill: true,
      },
      {
        label: "Medium", // Label for the second dataset
        data: [50, 48, 64, 57, 45, 55, 60, 58, 60, 70, 75, 80], // Array containing data points for the 'Medium' dataset
        borderColor: "#FDC01C", // Border color
        backgroundColor: "rgba(1, 10, 63, 0.3)",
        pointBackgroundColor: "#FDC01C", // Point color for the line chart
        pointBorderColor: "#FDC01C", // Point border color for the line chart
        pointHoverBackgroundColor: "#FDC01C", // Point hover background color for the line chart
        pointHoverBorderColor: "#FDC01C", // Point hover border color for the line chart
        borderRadius: 10, // Add border radius to bars
        lineTension: 0.8,
        fill: true,
      },
      {
        label: "Low", // Label for the third dataset
        data: [30, 25, 32, 33, 35, 40, 45, 50, 55, 65, 70, 75], // Array containing data points for the 'Low' dataset
        borderColor: "#FF0009", // Border color
        backgroundColor: "rgba(1, 10, 63, 0.3)",
        pointBackgroundColor: "#FF0009", // Point color for the line chart
        pointBorderColor: "#FF0009", // Point border color for the line chart
        pointHoverBackgroundColor: "#FF0009", // Point hover background color for the line chart
        pointHoverBorderColor: "#FF0009", // Point hover border color for the line chart
        borderRadius: 10, // Add border radius to bars
        lineTension: 0.8,
        fill: true,
      },
    ],
  };

  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const ctx = chart.ctx;

    const newData = {
      ...data,
      datasets: data.datasets.map((dataset) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
        gradient.addColorStop(1, `rgba(1, 10, 63, 0.1)`); // Starting color at 50% opacity
        gradient.addColorStop(0, `rgba(255, 255, 255, 0.5)`); // Ending color at 0% opacity

        return {
          ...dataset,
          backgroundColor: gradient,
        };
      }),
    };

    setChartData(newData);
  }, [data]);
  return <Line options={options} data={chartData} />;
}
