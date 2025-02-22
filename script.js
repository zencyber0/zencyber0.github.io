fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log(`Your IP Address: ${data.ip}`);
    
    return fetch(`https://ipapi.co/${data.ip}/json/`);
  })
  .then(response => response.json())
  .then(details => {
    console.log('IP Details:', details);
  })
  .catch(error => console.error('Error fetching IP details:', error));
