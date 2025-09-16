import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your mock API endpoint or use random data
        const newData = {
  timestamp: new Date().toISOString(),
  sales: Math.floor(Math.random() * 500)
};

        setDataPoints(prev => [
          ...prev.slice(-9), // Keep last 9 points
          { time: newData.timestamp, sales: newData.sales }
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const chartData = {
    labels: dataPoints.map(point => new Date(point.time).toLocaleTimeString()),
    datasets: [
      {
        label: 'Sales',
        data: dataPoints.map(point => point.sales),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
      }
    ]
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Live Sales Data</h2>
      <Line data={chartData} />
    </div>
  );
}

export default SalesChart;

