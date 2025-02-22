setTimeout(() => {
console.log("{+} script.js Loaded!")
console.log("{+} index.html Loaded!")
console.log("{+} style.css Loaded!")
},2000)

fetch('https://jsonip.com', { mode: 'cors'} ) .then((resp)
                    => resp.json()) .then((ip) => { console.log(ip); });
