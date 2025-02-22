fetch('http://ip-api.com/json', {
  method: 'GET', // or 'POST', 'PUT', 'DELETE'
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' }) // Only for methods with a body (POST, PUT)
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); 
})
.then(data => {
  console.log('Data received:', data);
})
.catch(error => {
  console.error('There was an error:', error);
});
