
//я ещё не доделал, пока только в таком варианте\

var submit = document.getElementById("submit");
var ul = document.querySelector("ul");
var clearBtn = document.querySelector("#clear");
var saveBtn = document.getElementById("save");


function timer(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;

    console.log(day);
    var nowDate = new Date();
    var achiveDate = new Date(year, month, day, 0, 0, 0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('timer');
    elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
    setTimeout(timer, 1000);
}





//Функция которая загружает todo-app, если список найден в локальном хранилище
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem("todoList");
    var spanElement = document.querySelectorAll("span");
    for (var i = 0; i < spanElement.length; i++) {
      deleteTask(spanElement[i]);
      localStorage.removeItem('todoList');
      var divTime = document.createElement('div');
      divTime.setAttribute('id', 'timer');
    }
  }
}


//Обработчик каждого события при вводе, чтобы добавлять новое задание в список
submit.addEventListener("click",function(){
  //Создание нового задания при нажатии на enter 
  var li = document.createElement("li");
  var spanElement = document.createElement("span");

  var icon = document.createElement("svg");  
  icon.setAttribute("color", "red");

  var newTodo = document.getElementById("task").value;
  var newDate = document.getElementById("date").value;

  var newDay = Number(newDate[0] + newDate[1]);
  var newMonth = Number(newDate[3] + newDate[4]);
  var newYear = Number(newDate[6] + newDate[7] + newDate[8] + newDate[9]);

  var divTime = document.createElement('div');
  divTime.setAttribute('id', 'timer');

  icon.classList.add('fas', 'fa-trash-alt'); 

  spanElement.append(icon);
  ul.appendChild(li).append(spanElement, newTodo + " ", divTime);
  timer(newYear, newMonth, newDay); 

  deleteTask(spanElement);

  localStorage.setItem("todoList", ul.innerHTML); 

});


//удаление конкретной задачи
function deleteTask(elem){
  elem.addEventListener("click", function(){
    elem.parentElement.remove();
  })
}

//Удаление todolist чтобы 
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.clear();
});

loadTodo();  
