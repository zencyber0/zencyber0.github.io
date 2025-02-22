var Online = 0;
if (Online == 0) {
    var Online = 1;
} else {
    var Online = 0;
}
console.log("{+} Users Online -->", Online)


setTimeout(() => {
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => console.log(data));},250);
setTimeout(() => {
const message = confirm("Tripwire Tripped!")
},500);
