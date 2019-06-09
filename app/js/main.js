function gettingJSON(){
    var temp;
    var desiredTempF = document.getElementById('desiredTemp').value;
    console.log(desiredTempF);
    var desiredTemp = (+desiredTempF + 459.67) * 5 / 9;
    var forecast;
    var i;
    var location = document.getElementById('location').value + ', us';
    // if (location.length == 5 && /^[0-9]+$/.test(location)) {
    //  console.log('Valid zip code')
    // }
    // else { console.log('Not a zip code') }
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        temp = JSON.stringify(json.main.temp);
        console.log('The current temperature is ' + (9 / 5 * (temp - 273.15) + 32).toFixed(2) + '°F');
    });
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        forecast = json.list;
        console.log('The first forecast data point is for ' + (9 / 5 * (forecast[0].main.temp - 273.15) + 32).toFixed(2) + '°F');
        var forecastID = '';
        if (heat.checked) {
            if (desiredTemp === '') {
                window.alert('Please enter your desired temperature.')
            } else if (temp > desiredTemp) {
                window.alert('Open your windows now!')
            } else if (temp < desiredTemp) {
                for (i = 0; i < forecast.length - 1; i++) {
                    console.log(i + ': ' + (9 / 5 * (forecast[i].main.temp - 273.15) + 32).toFixed(2) + '°F');
                    if (forecast[i].main.temp > desiredTemp) {
                        var forecastTimeEpoch = forecast[i].dt;
                        console.log(forecast[i].dt);
                        var forecastTime = new Date(forecastTimeEpoch);
                        var day = forecastTime.getDay();
                        console.log(day);
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
                        console.log(forecastTime);
                        window.alert('Open your windows at ' + forecastTime + ' on ' + day + '.');
                        return;
                    } else if (i >= forecast.length - 2) {
                        window.alert('The temperature is not forecast to get that high within the next four days.')
                        return;
                    } else {}}
            }
        } else if (cool.checked) {
            if (desiredTemp === '') {
                window.alert('Please enter your desired temperature.')
            } else if (temp < desiredTemp) {
                window.alert('Open your windows now!')
            } else if (temp > desiredTemp) {
                for (i = 0; i < forecast.length - 1; i++) {
                    if (forecast[i].main.temp < desiredTemp) {
                        var forecastTimeEpoch = forecast[i].dt;
                        console.log(forecast[i].dt);
                        var forecastTime = new Date(forecastTimeEpoch);
                        var day = forecastTime.getDay();
                        console.log(day);
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
                        console.log(forecastTime);
                        window.alert('Open your windows at ' + forecastTime + ' on ' + day + '.');
                        return;
                    } else if (i >= forecast.length - 2) {
                        window.alert('The temperature is not forecast to drop that low within the next four days.')
                        return;
                    } else {}}
                }
        }
        else {
            window.alert('Please select either the heat up or cool down option.')
        }
    })
}