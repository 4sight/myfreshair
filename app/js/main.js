function gettingJSON(){
	var temp;
    var desiredTempF = document.getElementById('desiredTemp').value;
    console.log(desiredTempF);
    var desiredTemp = (+desiredTempF + 459.67) * 5 / 9;
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
		console.log('The current temperature is ' + (9 / 5 * (temp - 273.15) + 32).toFixed(2) + '°F');
    });
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
    	forecast = json.list;
        console.log(forecast.length);
        var forecastID = '';
        if (heat.checked) {
            if (desiredTemp === '') {
                window.alert('Please enter your desired temperature.')
            } else if (temp > desiredTemp) {
                window.alert('Open your windows now!')
            } else if (temp < desiredTemp) {
                for (i = 0; forecast[i].main.temp < desiredTemp; i++) {
                }
                var forecastTimeEpoch = forecast[i].dt;
                var forecastTime = new Date(forecastTimeEpoch);
                var hours = forecastTime.getHours();
                var minutes = '0' + forecastTime.getMinutes();
                var forecastTimeMilitary = hours + ':' + minutes.substr(-2);
                console.log(forecastTimeMilitary);
                forecastTimeMilitary = forecastTimeMilitary.split(':');
                var hours = Number(forecastTimeMilitary[0]);
                var minutes = Number(forecastTimeMilitary[1]);

                // calculate
                var forecastTime;

                if (hours > 0 && hours <= 12) {
                  forecastTime = "" + hours;
                } else if (hours > 12) {
                  forecastTime = "" + (hours - 12);
                } else if (hours == 0) {
                  forecastTime = "12";
                }
                 
                forecastTime += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
                forecastTime += (hours >= 12) ? "pm" : "am";  // get AM/PM
                window.alert('Open your windows at ' + forecastTime);
            }
        } else if (cool.checked) {
            if (desiredTemp === '') {
                window.alert('Please enter your desired temperature.')
            } else if (temp < desiredTemp) {
                window.alert('Open your windows now!')
            } else if (temp > desiredTemp) {
                for (i = 0; i < forecast.length - 1; i++) {
                    if (forecast[i].main.temp < desiredTemp) {
                        return;
                    }
                }
                if (i == forecast.length - 1) {
                    window.alert('The temperature is not forecast to drop that low.')
                    return;
                }
                var forecastTimeEpoch = forecast[i].dt;
                var forecastTime = new Date(forecastTimeEpoch);
                var hours = forecastTime.getHours();
                var minutes = '0' + forecastTime.getMinutes();
                var forecastTimeMilitary = hours + ':' + minutes.substr(-2);
                console.log(forecastTimeMilitary);
                forecastTimeMilitary = forecastTimeMilitary.split(':');
                var hours = Number(forecastTimeMilitary[0]);
                var minutes = Number(forecastTimeMilitary[1]);

                // calculate
                var forecastTime;

                if (hours > 0 && hours <= 12) {
                  forecastTime = "" + hours;
                } else if (hours > 12) {
                  forecastTime = "" + (hours - 12);
                } else if (hours == 0) {
                  forecastTime = "12";
                }
                 
                forecastTime += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
                forecastTime += (hours >= 12) ? "pm" : "am";  // get AM/PM
                window.alert('Open your windows at ' + forecastTime + '.');
            }
        }
        else {
            window.alert('Please select either the heat up or cool down option.')
        }
    })
}