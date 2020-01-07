import { arrItems, arrDeletes, arrDestinations, arrStartTime, arrDate } from "../main.js";
import { items, items1, items2 } from "../main.js"
import { dataFilter } from "./dataFilter.js" 

export let createLi = (instance) => {
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

	if(dataFilter() == true) {
		items1.appendChild(li);
	}
	if(dataFilter() == false) {
		items2.appendChild(li);
	}

	arrItems.push(li);
	arrDeletes.push(btnDelete);
	arrDestinations.push(instance.destination);
	arrStartTime.push(instance.startTime);
	arrDate.push(instance.date);
	
	console.log(arrStartTime, arrDate);
	


}