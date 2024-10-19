import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the type for props
interface DonutChartProps {
  percentage: number;
}

export default function DonutChart({ percentage }: DonutChartProps) {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#4D9CE1', '#E5E5E5'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%', // Create the hollow center
    plugins: {
      tooltip: { enabled: false }, // Disable the tooltip
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="relative w-24 h-24">
      {/* The donut chart */}
      <Doughnut data={data} options={options} />

      {/* Centered percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
}
