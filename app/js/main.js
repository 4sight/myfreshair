function gettingJSON(){
	var location = document.getElementById('locationQuery').value;
	if location = /\d\d\d\d\d/gm

    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        document.write(JSON.stringify(json));
    });
}