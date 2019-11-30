
//я ещё не доделал, пока только в таком варианте\

var submit = document.getElementById("submit");
var ul = document.querySelector("ul");
var clearBtn = document.querySelector("#clear");
var saveBtn = document.getElementById("save");


function gtimer(year, month, day, spanTime){
  // текущая дата
  var now = new Date();       
  // дата предстоящего события (год, месяц, число)
  var eventDate = new Date(year, month, day);
  var span = spanTime.querySelectorAll('span');
  var spanLastValue = span[span.length - 1];
  // если событие еще не наступило
  if(now < eventDate){
    window.setInterval(function(){ 
        spanLastValue.innerHTML = timeToEvent(eventDate); 
    },1000);           
  }               
}





//Функция которая загружает todo-app, если список найден в локальном хранилище
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem("todoList");
    var spanElement = document.querySelectorAll("span");
    for (var i = 0; i < spanElement.length; i++) {
      deleteTask(spanElement[i]);
      localStorage.removeItem('todoList');
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

  var span = document.createElement('span');

  icon.classList.add('fas', 'fa-trash-alt'); 

  spanElement.append(icon);
  ul.appendChild(li).append(spanElement, newTodo + " ", span);

  gtimer(newYear, newMonth, newDay, li); 

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




function timeToEvent(eventDate)
  {
      var now = new Date();
      var output = '';      
     // количество дней до события
     var daystoED = Math.floor(Math.round(eventDate-now)/86400000);
     daystoED = (daystoED < 1) ? "0"+daystoED : daystoED;
     // количество часов до события
     var hourstoED = 24 - now.getHours() - 1;
       hourstoED = (hourstoED < 10) ? "0"+hourstoED : hourstoED;
     // количество минут до события
     var minutestoED = 60 - now.getMinutes() - 1;
         minutestoED = (minutestoED < 10) ? "0"+minutestoED : minutestoED;
     // количество секунд до события
     var secondstoED = 60 - now.getSeconds() - 1;
     secondstoED = (secondstoED < 10) ? "0"+secondstoED : secondstoED;       
     //сообщение
       output = daystoED+" дн. "+hourstoED+" час. "+minutestoED+" мин. "+secondstoED+" сек.";
   return output;
}