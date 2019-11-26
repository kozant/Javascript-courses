
//я ещё не доделал, пока только в таком варианте




var submit = document.getElementById("submit");
var ul = document.querySelector("ul");
var clearBtn = document.querySelector("#clear");
var saveBtn = document.getElementById("save");


var limit = 360; // в секундах
function processTimer() {
  if (limit > 0) {
      setTimeout("processTimer()", 1000);
      limit--;
  } else {
      // здесь действия после завершения таймера
      //..
  }
  var limit_div = parseInt(limit / 60); // минуты
  var limit_mod = limit - limit_div * 60; // секунды
  // строка с оставшимся временем
  limit_str = "&nbsp;&nbsp;";
  if (limit_div < 10) limit_str = limit_str + "0";
  limit_str = limit_str + limit_div + ":";
  if (limit_mod < 10) limit_str = limit_str + "0";
  limit_str = limit_str + limit_mod + "&nbsp;&nbsp;";
  // вывод времени
  var el_timer = document.getElementById("timer");
  if (el_timer) el_timer.innerHTML = limit_str;
}
processTimer();






//Функция которая загружает todo-app, если список найден в локальном хранилище
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem("todoList");
    var spanElement = document.querySelectorAll("span");
    var li = document.querySelectorAll("li");
    for (var i = 0; i < spanElement.length; i++) {
      var spanTime = document.createElement("span");
      spanTime.setAttribute("id", "timer");
      deleteTask(spanElement[i]);
      ul.appendChild(li[i]).append(spanTime);
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

  icon.classList.add('fas', 'fa-trash-alt'); 

  spanElement.append(icon);
  ul.appendChild(li).append(spanElement, newTodo + " "); //таймер

  deleteTask(spanElement);

  localStorage.setItem("todoList", ul.innerHTML); 

});


//удаление конкретной задачи
function deleteTask(elem){
  elem.addEventListener("click", function(){
    elem.parentElement.remove();
  })
}

/*saveBtn.addEventListener('click', function(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem("todoList");
  }
})*/

//Удаление todolist чтобы 
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem("todolist", ul.innerHTML)
});

loadTodo();  
