import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'; // Replace 'App' with your main React component

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('react-root')
  );
});
