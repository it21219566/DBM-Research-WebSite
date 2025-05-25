import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrainingChart = ({ modelName }) => {
  // Sample data - replace with your actual training metrics
  const labels = Array.from({ length: 20 }, (_, i) => `Epoch ${i + 1}`);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Training Loss',
        data: Array.from({ length: 20 }, (_, i) => 1.5 - (i * 0.06) + Math.random() * 0.1),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Validation Loss',
        data: Array.from({ length: 20 }, (_, i) => 1.6 - (i * 0.05) + Math.random() * 0.15),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Training and Validation Loss - ${modelName}`,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TrainingChart;