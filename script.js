fetch('http://ip-api.com/json', {
  method: 'POST', // or 'POST', 'PUT', 'DELETE'
  headers: {
    'Content-Type': 'application/json'
  },
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
