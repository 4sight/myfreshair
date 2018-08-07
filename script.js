function userInput(form){
	var userLocation = form.query.value;
	var zipQuery = /^\d/;
	var isNumber = zipQuery.test(userLocation);
	if (isNumber == true && userLocation.length != 5) {alert('Please enter a location name or a five-digit zip code');}
	var req = new XMLHttpRequest();
	req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + userLocation + '&appid=01205a36e129751e14469a7f443b8441', true);
	req.onreadystatechange = function(){
	    if (req.readyState === 4) {
			data = req.responseText;
	        console.log(data);
	    }
	};
	req.setRequestHeader('Accept', 'application/json');
	req.send();
}