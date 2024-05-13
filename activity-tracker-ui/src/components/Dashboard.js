import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/websites');
        setWebsites(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWebsites();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {websites.map((website) => (
          <li key={website.id}>{website.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
