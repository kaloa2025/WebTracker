fetch('http://localhost:3000/api/v1/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    // Login credentials
  })
})
.then(response => response.json())
.then(data => {
  // Handle login response
})
.catch(error => {
  console.error('Error:', error);
});

// popup.js

// Example: Add event listener to handle login form submission
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
      // Handle login response
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  // Example: Function to add restricted website
  async function addRestrictedWebsite() {
    const websiteUrl = document.getElementById('websiteUrl').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/v1/websites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: websiteUrl })
      });
  
      const data = await response.json();
      // Handle response
    } catch (error) {
      console.error('Error:', error);
    }
  }
  