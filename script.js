fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    console.log("IP Is:")
    .then(data => console.log(data));
