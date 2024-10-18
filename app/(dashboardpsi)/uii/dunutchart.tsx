import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  // Chart data
  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: '# of Patients',
        data: [25, 75], // Example data
        backgroundColor: ['#4C82CB', '#E0E0E0'], // Donut colors
        borderWidth: 0,
      },
    ],
  };

  // Chart options
  const options = {
    cutout: '70%', // This will create the "Donut" effect
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      },
      tooltip: {
        enabled: true, // Show tooltips on hover
      },
    },
  };

  return <Doughnut data={data} options={options} width={100} height={100} />;
};

export default DonutChart;
