
//........................................................
//результаты работы кода находятся в одном алерте, в конце
//........................................................


// 2

var term = {
	Sweden: -1,
	Greece: 14,
	Norway: 6,
	England: 7,
	Spain: 9,
	Italy: 12,
	Portugal: 15,
	Estonia: 1,
	Ukraine: 4,
	Hungary: 5,
	Poland: 2,
	Germany: 4
}


function avgTerm(obj){
	var sum = 0;
	var counter = 0;
	var avgValue = 0;

	for(var key in obj){   
		sum += obj[key];
		counter++;
	}

	avgValue = Math.round(sum/counter);
	return avgValue;
}

// 3

function maxTerm(obj){
	var maxValue = 0;

	for(var key in obj){
		if(obj[key] > maxValue){
			maxValue = obj[key];
		}
	}
	return maxValue;
}

alert("Среднее значение температуры: " + avgTerm(term) + "\n" + 
	"Максимальное значение температуры: " + maxTerm(term));


