export class Route {
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
