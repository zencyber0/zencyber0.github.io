setTimeout(() => {
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(console.log("ip is"))
    .then(data => console.log(data));},2000);
