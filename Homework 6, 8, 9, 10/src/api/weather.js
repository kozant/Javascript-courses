export let weatherBalloon = (cityID) => {
	let key = "bdcca912865fd23c0920aa6d76c88dec";
	fetch('https:api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + key + '&lang=ru&units=metric')  
	.then((resp) => { return resp.json() }) // Convert data to json
	.then((data) => {
	  document.getElementById('weather').style.display = 'block';
	  document.querySelector('.weather__title').innerHTML = 'Погода в городе: ' + cityID;
	  document.querySelector('.weather__avgtemp').innerHTML = 'Температура: ' + Math.round(data.main.temp) + '&deg;';
	  document.querySelector('.weather__longitude').innerHTML = 'Долгота: ' + data.coord['lon'];
	  document.querySelector('.weather__latitude').innerHTML = 'Широта: ' + data.coord['lat'];
	  document.querySelector('.weather__speed').innerHTML ='Скорость ветра: ' + data.wind['speed'] + " " + "м/c";

	})
}
