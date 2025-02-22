setTimeout(() => { // waits to request to prevent rate limit.
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => console.log(data));},250);
setTimeout(() => {
const message = confirm("Tripwire Tripped!")
},500);
