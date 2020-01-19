class Person {
	constructor(login, pass, firstname, lastname, basket){
		this.login = login
		this.pass = pass
		this.firstname = firstname
        this.lastname = lastname
        this.basket = basket
    }
}

let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");

signupBtn.addEventListener('click', () => {
    let person = new Person(document.getElementById("email").value,
                             document.getElementById("pass").value,
                             document.getElementById("firstname").value,
                             document.getElementById("lastname").value,
                             []
                            );
    if(!localStorage.getItem('users')){                                     //Проверка на существование первого пользователя
        localStorage.setItem('users', JSON.stringify([person]));
    } else {                                                                //Если один пол-тель есть в системе, пушим остальных в этот массив 
        let users = JSON.parse(localStorage.getItem('users'));
        users.push(person);
        localStorage.setItem('users', JSON.stringify(users));
    }

    document.querySelector('.close').click();
})




loginBtn.addEventListener('click', () => {
    let person = JSON.parse(localStorage.getItem('users'));         //достаем массив пользователей
    let user = [];                                                  //будущий авторизированный пользователь
    let entity;
    for(let i = 0; i < person.length; i++){
        for(let k = 0; k < Object.keys(person[i]).length; k++){
            if(person[i].login == document.getElementById("login").value && person[i].pass == document.getElementById("password").value){
                user.push(person[i].login);
                user.push(person[i].pass);
                user.push(person[i].firstname);                         //Если есть совпадение по логину и паролю, добавляем в массив того, у кого совпало
                user.push(person[i].lastname);
                user.push(person[i].basket);
            }
        }
    }
    
    if(user.length == 0){
        document.querySelector(".invalid").textContent = "*Такого пользователя нет";
    }
    if(user.length != 0){
        document.querySelector(".invalid").textContent = "";
        entity = {
            login: user[0], 
            password: user[1],
            firstname: user[2],
            lastname: user[3],
            basket: user[4]
        }
        localStorage.setItem('person', JSON.stringify(entity));     // пользователь, который авторизовался
        window.location.href = "person.html"
    }

})
