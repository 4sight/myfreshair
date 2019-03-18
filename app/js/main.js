function gettingJSON(){
	var location = document.getElementById('locationQuery').value;
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        document.write(JSON.stringify(json));
    });
}