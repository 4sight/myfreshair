function gettingJSON(){
	var temp;
    var forecast;
	var i;
	var location = document.getElementById('locationQuery').value + ', us';
	// if (location.length == 5 && /^[0-9]+$/.test(location)) {
	// 	console.log('Valid zip code')
	// }
	// else { console.log('Not a zip code') }
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        console.log(JSON.stringify(json));
        temp = JSON.stringify(json.main.temp);
		console.log(temp);
    });
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
    	// for (i = 0; i < JSON.stringify(json.length); )
    	forecast = JSON.stringify(json.list);
    	console.log(Object.keys(forecast).length);
    	// console.log(JSON.stringify(json.list[0].main.temp));
    })
    for (i = 0; i < 99; i++) {
        if (heat.checked) {
            console.log(forecast[i].main.temp);
        } else if (cool.checked) {

        }
        else {
            window.alert('Please select one of the two heating or cooling options.')
        }
    }
    var time = (new Date).getTime();
    console.log(time / 1000);

}