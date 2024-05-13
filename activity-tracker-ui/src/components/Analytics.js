import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Analytics = () => {
  const [websiteData, setWebsiteData] = useState([]);

  useEffect(() => {
    const fetchWebsiteData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/analytics');
        setWebsiteData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWebsiteData();
  }, []);

  const chartData = {
    labels: websiteData.map((data) => data.date),
    datasets: [
      {
        label: 'Time Spent',
        data: websiteData.map((data) => data.timeSpent),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Analytics</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Analytics;
