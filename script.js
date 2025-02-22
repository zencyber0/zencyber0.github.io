fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
