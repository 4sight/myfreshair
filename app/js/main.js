function gettingJSON(){
	var temp;
    var desiredTemp = document.getElementById('desiredTemp').value;
    var forecast;
	var i;
	var location = document.getElementById('location').value + ', us';
	// if (location.length == 5 && /^[0-9]+$/.test(location)) {
	// 	console.log('Valid zip code')
	// }
	// else { console.log('Not a zip code') }
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        console.log(JSON.stringify(json));
        temp = JSON.stringify(json.main.temp);
		console.log('The current temperature is ' + temp + '°K');
    });
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
    	forecast = json.list;
        var forecastID = '';
    	console.log(Object.keys(forecast).length);
        if (heat.checked) {
            if (desiredTemp === '') {
                window.alert('Please enter your desired temperature.')
            } else if (temp > desiredTemp) {
                window.alert('Open your windows now!')
            } else if (temp < desiredTemp) {
                for (i = 0; forecast[i].main.temp < desiredTemp; i++) {
                    console.log(i);
                    console.log(forecast[i].dt);
                    console.log(forecast[i].main.temp);
                    // window.alert('Open your windows at');
                }       
            }
        } else if (cool.checked) {
            if (desiredTemp === '') {
                window.alert('Please enter your desired temperature.')
            } else if (temp < desiredTemp) {
                window.alert('Open your windows now!')
            } else if (temp > desiredTemp) {
                for (i = 0; forecast[i].main.temp > desiredTemp; i++) {
                    console.log(i);
                    console.log(forecast[i].dt);
                    console.log(forecast[i].main.temp);
                    console.log(i + 1);
                    console.log(forecast[i + 1].dt);
                    console.log(forecast[i + 1].main.temp);
                    // window.alert('Open your windows at');
                    forecastID = i;
                }
                console.log(forecastID);     
            }
        }
        else {
            window.alert('Please select either the heat up or cool down option.')
        }
    })
    var time = (new Date).getTime();
    console.log(time / 1000);
    // (9 / 5 * (JSON.stringify(json.main.temp) - 273.15) + 32).toPrecision(5);
}