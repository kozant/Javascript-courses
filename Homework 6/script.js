let items = document.getElementById('items');
let addRoute = document.getElementById('addRoute');
let sendRoute = document.getElementById('sendRoute');
let clearRoute = document.getElementById('clearRoute');

let arrItems = [];
let arrDeletes = [];
let arrDestinations = [];

addRoute.addEventListener('click', () => {
	document.getElementById('spoiler').style.display = 'block';
})

sendRoute.addEventListener('click', () => {
	createInstance();
	for (let i = 0; i < arrDeletes.length; i++){
		arrDeletes[i].addEventListener('click', () => {
			deleteLi(arrItems[i]);
		})
	}
	for (let i = 0; i < arrDestinations.length; i++){
		arrItems[i].addEventListener('click', () => {
			weatherBalloon(arrDestinations[i]);
			//Flickr(arrDestinations[i]);
		})
	}
	document.getElementById('spoiler').style.display = 'none';
})

clearRoute.addEventListener('click', () => {

	document.getElementById('transport').value = '';
	document.getElementById('date').value = '';
	document.getElementById('shipment').value = '';
	document.getElementById('destination').value = '';
	document.getElementById('startTime').value = '';
	document.getElementById('endTime').value = '';
	document.getElementById('price').value = '';
})



let createInstance = () => {
	let elem = new Route();
	elem.transport = document.getElementById('transport').value;
	elem.date = document.getElementById('date').value;
	elem.shipment = document.getElementById('shipment').value;
	elem.destination = document.getElementById('destination').value;
	elem.startTime = document.getElementById('startTime').value;
	elem.endTime = document.getElementById('endTime').value;
	elem.price = document.getElementById('price').value;

	createLi(elem);
}


let createLi = (instance) => {
	let li = document.createElement('li');
	let btnDelete = document.createElement('span');
	let icon = document.createElement('svg');
	icon.setAttribute("color", "red");
	icon.classList.add('fas', 'fa-times')
	btnDelete.append(icon);

	li.innerHTML =  instance.transport + " ";
	li.innerHTML += instance.date + " ";
	li.innerHTML += instance.shipment + " ";
	li.innerHTML += instance.destination + " ";
	li.innerHTML += instance.startTime + " ";
	li.innerHTML += instance.endTime + " ";
	li.innerHTML += instance.price + " ";

	items.appendChild(li);
	li.append(btnDelete);

	arrItems.push(li);
	arrDeletes.push(btnDelete);
	arrDestinations.push(instance.destination);
	console.log(arrDestinations);


}

let deleteLi = (item) => {
	item.remove();

}

class Route {
	constructor(transport, date, shipment, destination, startTime, endTime, price){
		this._transport = transport
		this._date = date
		this._shipment = shipment
		this._destination = destination
		this._startTime = startTime
		this._endTime = endTime
		this._price = price
	}
	set transport(transport) 		{this._transport = transport}
	set date(date) 					{this._date = date}
	set shipment(shipment)			{this._shipment = shipment}
	set destination(destination) 	{this._destination = destination}
	set startTime(startTime) 		{this._startTime = startTime}
	set endTime(endTime) 			{this._endTime = endTime}
	set price(price)	 			{this._price = price}

	get transport() 				{return this._transport}
	get date() 						{return this._date}
	get shipment()					{return this._shipment}
	get destination() 				{return this._destination}
	get startTime() 				{return this._startTime}
	get endTime() 					{return this._endTime}
	get price()	 					{return this._price}
}	

let weatherBalloon = (cityID) => {
	let key = "bdcca912865fd23c0920aa6d76c88dec";
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + key + '&lang=ru&units=metric')  
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

// let Flickr = (cityID) => {
// 	let key = "1c58394bdc712610da3f4df04efd37a7"
// 	let secret_key = "f27d884d1c581776"
// 	fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags='+cityID+'&format=json&nojsoncallback=1&api_sig=40049eafb58f8bff275b4fd37fc2c77b'
// 		, {
// 		method: "GET", mode: "no-cors"  })
// 	.then((data) => {
// 		console.log(data);
// 		document.querySelector('.images').innerHTML = data.photos;
// 	})
// }

  