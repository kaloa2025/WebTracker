// content.js

// Example: Track specific parts of the page (e.g., time spent on a specific element)
const targetElement = document.getElementById('targetElementId');

if (targetElement) {
  let startTime = null;
  let endTime = null;

  targetElement.addEventListener('mouseenter', () => {
    startTime = Date.now();
  });

  targetElement.addEventListener('mouseleave', () => {
    if (startTime) {
      endTime = Date.now();
      const timeSpent = endTime - startTime;

      // Send timeSpent data to background.js or backend API for tracking
      chrome.runtime.sendMessage({ type: 'timeSpent', data: { timeSpent } });
    }
  });
}
