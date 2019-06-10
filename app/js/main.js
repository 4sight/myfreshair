function gettingJSON(){
    var temp;
    var desiredTempF = document.getElementById('desiredTemp').value;
    var desiredTemp = (+desiredTempF + 459.67) * 5 / 9;
    var forecast;
    var i;
    var location = document.getElementById('location').value + ', us';
    if (location === ', us') {
        window.alert('Please enter a location.')
    }
    if (desiredTempF === '') {
        window.alert('Please enter your desired indoor temperature.')
    }
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        temp = JSON.stringify(json.main.temp);
        console.log('The current temperature is ' + (9 / 5 * (temp - 273.15) + 32).toFixed(2) + '°F');
    }).fail(function(jqxhr, textStatus, error) {
        window.alert('Please enter a different location.');
    });
    $.getJSON('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
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
                        var forecastTime = new Date(0);
                        forecastTime.setUTCSeconds(forecastTimeEpoch);
                        var day = moment(forecastTime).format('dddd');
                        var d = moment(forecastTime).format('h:mma');
                        if (day === moment().format('dddd')) {
                            window.alert('Open your windows around ' + d + ' today.');
                        } else {
                            window.alert('Open your windows around ' + d + ' on ' + day + '.');
                        }
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
                        var forecastTime = new Date(0);
                        forecastTime.setUTCSeconds(forecastTimeEpoch);
                        var day = moment(forecastTime).format('dddd');
                        var d = moment(forecastTime).format('h:mma');
                        if (day === moment().format('dddd')) {
                            window.alert('Open your windows around ' + d + ' today.');
                        } else {
                           window.alert('Open your windows around ' + d + ' on ' + day + '.');
                        }
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