// background.js

// Example: Background script initialization
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
  });
  
  // Example: Track website activity and send data to backend API
  chrome.webNavigation.onCompleted.addListener((details) => {
    console.log('Web page loaded:', details.url);
    // Send data to backend API
  });
  
  // Example: Listen for messages from content script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'timeSpent') {
      console.log('Time spent on target element:', message.data.timeSpent);
      // Send data to backend API
    }
  });
  