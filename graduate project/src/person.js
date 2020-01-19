let person = JSON.parse(localStorage.getItem('person'));
let btnQuit = document.querySelector('.btnQuit');

for(let key in person){
    if(key == "firstname"){
        document.querySelector('.firstname').innerHTML = "Ваше имя: " + person[key];
    }
    if(key == "lastname"){
        document.querySelector('.lastname').innerHTML = "Ваше фамилия: " + person[key];
    }
    if(key == "login"){
        document.querySelector('.login').innerHTML = "Ваш логин: " + person[key];
    }
}


btnQuit.addEventListener('click', function(){
    localStorage.removeItem('person');
    window.location.href = "main.html"
})