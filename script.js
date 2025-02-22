var Online = 0;
if (Online == 0) {
    var Online = 1;
}
console.log("{+} Users Online -->", Online)


setTimeout(() => {
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => console.log(data));},250);
    .then(console.log(data))
setTimeout(() => {
const message = confirm("Tripwire Tripped!")
},500);
