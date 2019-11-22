
//1.1

function AnotherPage(){
	location.href = "https://google.com"
}

//1.2

function AnotherStyle(){
	var color1 = Math.floor(Math.random()*255);
	var color2 = Math.floor(Math.random()*255);
	var color3 = Math.floor(Math.random()*255);
	document.getElementById("body").style.background = "#"+(color1).toString(16)+(color2).toString(16)+(color3).toString(16)
}

//1.3

function DestroyAll(){
	var body = document.getElementById("body");
	document.getElementById("body").style.background = "white";
	body.innerHTML = "";
	
	body.innerHTML += "<header><p>Header</p></header>";
	body.innerHTML += "<main></main>";
		var main = document.querySelector("main");
		main.innerHTML = "<article></article>";
			var article = document.querySelector("article");
			article.innerHTML = "<h1>Что такое Lorem Ipsum?</h1>";
				var tag_p = document.createElement("p");
				tag_p.textContent = "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной";
               	tag_p.textContent += "рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию";
               	tag_p.textContent += "размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без";
               	tag_p.textContent += "заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время";
           		article.appendChild(tag_p);
        main.innerHTML += "<nav><p>Navigation</p></nav><aside><p>Sidebar</p></aside>";
    body.innerHTML += "<footer><p>Footer</p></footer>";
}

var button1 = document.getElementById("button1");
button1.addEventListener("click", AnotherPage);

var button2 = document.getElementById("button2");
button2.addEventListener("click", AnotherStyle);

var button3 = document.getElementById("button3");
button3.addEventListener("click", DestroyAll);