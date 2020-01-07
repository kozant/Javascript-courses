import { createInstance } from "./functions/createInstance.js";
import { deleteLi } from "./functions/deleteLi.js";
import { clear } from "./functions/clearRoute.js"

import { weatherBalloon } from "./api/weather.js";
import { Flickr } from "./api/Flickr.js";




export let items = document.getElementById('items');
export let items1 = document.getElementById('items1');
export let items2 = document.getElementById('items2');

let addRoute = document.getElementById('addRoute');
let sendRoute = document.getElementById('sendRoute');
let clearRoute = document.getElementById('clearRoute');

let main_li = document.querySelector(".main");
let wait_li = document.querySelector(".wait");
let process_li = document.querySelector(".process");

export let arrItems = [];
export let arrDeletes = [];
export let arrDestinations = [];
export let arrStartTime = [];
export let arrDate = [];



main_li.addEventListener('click', () =>{
	document.querySelector(".mainDiv").style.display = 'block';
	document.querySelector(".waitDiv").style.display = 'none';
	document.querySelector(".processDiv").style.display = 'none';
	
})

wait_li.addEventListener('click', () =>{
	document.querySelector(".waitDiv").style.display = 'block';
	document.querySelector(".mainDiv").style.display = 'none';
	document.querySelector(".processDiv").style.display = 'none';
})

process_li.addEventListener('click', () =>{
	document.querySelector(".processDiv").style.display = 'block';
	document.querySelector(".waitDiv").style.display = 'none';
	document.querySelector(".mainDiv").style.display = 'none';
})



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
			Flickr(arrDestinations[i]);
		})
	}
	document.getElementById('spoiler').style.display = 'none';
})

clearRoute.addEventListener('click', () => {
	clear();
})




