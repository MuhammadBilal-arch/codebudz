"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ labels, datalist }) => {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Metrics type",
        data: [19, 30],
        backgroundColor: ["#010A3F", "#FC9803"],
        borderColor: ["#010A3F", "#FC9803"],
        borderWidth: 1,
        pointRadius: 0.5, // Adjust point size here
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "start", // Align legend to end (right)
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
            family: 'Quicksand, sans-serif',

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
  };
  return (
      <Doughnut className="" data={data} options={options} />
  );
};
