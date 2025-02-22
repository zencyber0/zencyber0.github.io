setTimeout(() => {
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => console.log(data));},2000);
const message = confirm("IP Fetched!")
