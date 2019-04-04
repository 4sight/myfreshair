function gettingJSON(){
	var clientKey = 'js-9qZHzu2Flc59Eq5rx10JdKERovBlJp3TQ3ApyC4TOa3tA8U7aVRnFwf41RpLgtE7';
	var zipcode = document.getElementById('locationQuery').value;
	function handleResp(data){
		if (data.error_msg)
		else if ('city' in data) {
			var city = data.city;
			var state = data.state;
		}
	if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
		// Build url
		var url = 'https://www.zipcodeapi.com/rest/' + clientKey + '/info.json/' + zipcode + '/radians';
					
		// Make AJAX request
		$.ajax({
			"url": url,
			"dataType": "json"
		}).done(function(data) {
			handleResp(data);

    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=01205a36e129751e14469a7f443b8441',function(json){
        document.write(JSON.stringify(json));
    });
}