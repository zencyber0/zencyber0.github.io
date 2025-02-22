setTimeout(() => {
console.log("{+} script.js Loaded!")
console.log("{+} index.html Loaded!")
console.log("{+} style.css Loaded!")
},2000)

fetch('http://ip-api.com/json')
  .then(response => response.json())
  .then(data => console.log(data));
