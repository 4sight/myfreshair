var req = new XMLHttpRequest();

req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=01205a36e129751e14469a7f443b8441', true);
req.onreadystatechange = function() {
    if (req.readyState === 4) {
        console.log(req.responseText);
    }
var data = req.responseText;
// var data = JSON.parse(rawData);
console.log(data);
};
req.setRequestHeader('Accept', 'application/json');
req.send();