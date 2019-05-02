function gettingJSON(){
	var location = document.getElementById('locationQuery').value;
	if (location.length == 5 && /^[0-9]+$/.test(location)) {
		console.log('Valid zip code')
	}
	else { console.log('Not a zip code')}
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        console.log(JSON.stringify(json));
    });
}