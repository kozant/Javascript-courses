import { createLi } from "./createLi.js";
import { Route } from "../class/route.js";

export let createInstance = () => {
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