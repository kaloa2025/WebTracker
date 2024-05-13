import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [restrictedWebsite, setRestrictedWebsite] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/websites', { url: restrictedWebsite });
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add Restricted Website:</label>
          <input type="text" value={restrictedWebsite} onChange={(e) => setRestrictedWebsite(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Settings;
