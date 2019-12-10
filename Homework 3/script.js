

let btnStudent = document.getElementById('student');
let btnTeacher = document.getElementById('teacher');
let btnTeacherSend = document.getElementById('btnTeacherSend');
let btnTeacherClear = document.getElementById('btnTeacherClear');
let btnStudentSend = document.getElementById('btnStudentSend');
let btnStudentClear = document.getElementById('btnStudentClear');
let table = document.querySelector('tbody');
let editStudent;
let deleteStudent;
let editTeacher;
let deleteTeacher;

let arrEntity = [];
let btnDeletes = [];
let btnEdits = [];

let i = 0;

function add(){
	document.getElementById('spoiler').style.display = 'block';
	document.getElementById('add').style.display = 'none';

	btnStudent.addEventListener('click', function(){
		document.getElementById('mainTeacher').style.display = "none";
		document.getElementById('mainStudent').style.display = "block";

		document.getElementById('newStudent').style.display = "block";
		document.getElementById('reeditStudent').style.display = "none";

		document.getElementById('btnStudentSend').style.display = "block";
		document.getElementById('btnStudentSave').style.display = "none";

		CloseInput();
	});
	btnTeacher.addEventListener('click', function(){
		document.getElementById('mainStudent').style.display = "none";
		document.getElementById('mainTeacher').style.display = "block";

		document.getElementById('newTeacher').style.display = "block";
		document.getElementById('reeditTeacher').style.display = "none";

		document.getElementById('btnTeacherSend').style.display = "block";
		document.getElementById('btnTeacherSave').style.display = "none";

		CloseInput();
	});
}

function CloseInput() {
 document.getElementById('spoiler').style.display = 'none';
 document.getElementById('add').style.display = 'block';
}

function Person(name, surname, middlename, age){
	
	let _name;
	let _surname;
	let _middlename;
	let _age;

	this.setName = function(name){
		this.name = name;
	}

	this.setSurname = function(surname){
		this.surname = surname;
	}

	this.setMiddlename = function(middlename){
		this.middlename = middlename;
	}

	this.setAge = function(age){
		this.age = age;
	}

	this.getName = function(){
		return this.name;
	}
	this.getSurname = function(){
		return this.surname;
	}
	this.getMiddlename = function(){
		return this.middlename;
	}
	this.getAge = function(){
		return this.age;
	}
}

function Teacher(children, position, experience, department){
	Person.call(this);
	let _children;
	let _position;
	let _experience;
	let _department;

	this.setChildren = function(children){
		this.children = children;
	}

	this.setPosition = function(position){
		this.position = position;
	}

	this.setExperience = function(experience){
		this.experience = experience;
	}

	this.setDepartment = function(department){
		this.department = department;
	}

	this.getChildren = function(){
		return this.children;
	}
	this.getPosition = function(){
		return this.position;
	}
	this.getExperience = function(){
		return this.experience;
	}
	this.getDepartment = function(){
		return this.department;
	}
}

function Student(faculty, groupNum, course, recordBookNum){
	Person.call(this);
	let _faculty;
	let _groupNum;
	let _course;
	let _recordBookNum;

	this.setFaculty = function(faculty){
		this.faculty = faculty;
	}

	this.setGroupNum = function(groupNum){
		this.groupNum = groupNum;
	}

	this.setCourse = function(course){
		this.course = course;
	}

	this.setRecordBookNum = function(recordBookNum){
		this.recordBookNum = recordBookNum;
	}

	this.getFaculty = function(){
		return this.faculty;
	}
	this.getGroupNum = function(){
		return this.groupNum;
	}
	this.getCourse = function(){
		return this.course;
	}
	this.getRecordBookNum = function(){
		return this.recordBookNum;
	}
}

// function dataPage(){
// 	let requestURLforStudent = 'http://localhost:3000/Student';
// 	let requestForStudent = new XMLHttpRequest();
// 	requestForStudent.open('GET', requestURLforStudent);

// 	let requestURLforTeacher = 'http://localhost:3000/Teacher';
// 	let requestForTeacher = new XMLHttpRequest();
// 	requestForTeacher.open('GET', requestURLforTeacher);

// 	requestForStudent.responseType = 'text';
// 	requestForStudent.send(); 

// 	requestForTeacher.responseType = 'text';
// 	requestForTeacher.send(); 

// 	requestForStudent.onload = function() {
// 		let studentText = requestForStudent.response; 
// 		let student = JSON.parse(studentText); 

// 		for(let i = 0; i < student.length; i++){
// 			let tr = document.createElement('tr');
// 			table.appendChild(tr);

// 			tr.innerHTML += '<td>' + student[i].name + '</td>';
// 			tr.innerHTML += '<td>' + student[i].surname + '</td>';
// 			tr.innerHTML += '<td>' + student[i].middlename + '</td>';
// 			tr.innerHTML += '<td>' + student[i].age + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 			tr.innerHTML += '<td>' + student[i].faculty + '</td>';
// 			tr.innerHTML += '<td>' + student[i].groupNum + '</td>';
// 			tr.innerHTML += '<td>' + student[i].course + '</td>';
// 			tr.innerHTML += '<td>' + student[i].recordBookNum + '</td>';
// 		}
// 	}

// 	requestForTeacher.onload = function(){
// 		let teacherText = requestForTeacher.response; 
// 		let teacher = JSON.parse(teacherText);

// 		for(let i = 0; i < teacher.length; i++){
// 			let tr = document.createElement('tr');
// 			table.appendChild(tr);

// 			tr.innerHTML += '<td>' + teacher[i].name + '</td>';
// 			tr.innerHTML += '<td>' + teacher[i].surname + '</td>';
// 			tr.innerHTML += '<td>' + teacher[i].middlename + '</td>';
// 			tr.innerHTML += '<td>' + teacher[i].age + '</td>';
// 			tr.innerHTML += '<td>' + teacher[i].children + '</td>';
// 			tr.innerHTML += '<td>' + teacher[i].position + '</td>';
// 			tr.innerHTML += '<td>' + teacher[i].experience + '</td>';
// 			tr.innerHTML += '<td>' + teacher[i].department + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 			tr.innerHTML += '<td>' + '-' + '</td>';
// 		}
// 	}
// }

// dataPage();

function loadPage(e){
		
		let tr = document.createElement('tr');
		table.appendChild(tr);
		let item = arrEntity.pop()

		tr.innerHTML += '<td>' + item.getName() + '</td>';
		tr.innerHTML += '<td>' + item.getSurname() + '</td>';
		tr.innerHTML += '<td>' + item.getMiddlename() + '</td>';
		tr.innerHTML += '<td>' + item.getAge() + '</td>';
		if(item instanceof Teacher){
			tr.innerHTML += '<td>' + item.getChildren() + '</td>';
			tr.innerHTML += '<td>' + item.getPosition() + '</td>';
			tr.innerHTML += '<td>' + item.getExperience() + '</td>';
			tr.innerHTML += '<td>' + item.getDepartment() + '</td>';
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + "<button id=edit" + e + ">Редактировать</button> <button id=delete" + e + ">Удалить</button>" + '</td>';
		}
		console.log(item);
		if(item instanceof Student){
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + '-' + '</td>';
			tr.innerHTML += '<td>' + item.getFaculty() + '</td>';
			tr.innerHTML += '<td>' + item.getGroupNum() + '</td>';
			tr.innerHTML += '<td>' + item.getCourse() + '</td>';
			tr.innerHTML += '<td>' + item.getRecordBookNum() + '</td>';
			tr.innerHTML += '<td>' + "<button id=edit" + e + ">Редактировать</button> <button id=delete" + e + ">Удалить</button>" + '</td>';
		}

		btnDeletes.push(document.getElementById("delete" + e));
		for(let i = 0; i < btnDeletes.length; i++){
			btnDeletes[i].addEventListener('click', function(){
				deleteEntity(btnDeletes[i]);
		 	});
		}

		btnEdits.push(document.getElementById("edit" + e));
		for(let i = 0; i < btnEdits.length; i++){
			if(item instanceof Student){
				btnEdits[i].addEventListener('click', function(){
					editEntityStudent(btnEdits[i], item);
		 		});
		 	}
		 	if(item instanceof Teacher){
				btnEdits[i].addEventListener('click', function(){
					editEntityTeacher(btnEdits[i], item);
		 		});
		 	}
		}
}

// function RegExp(){
// 	let expStudentName = /(a-zA-Zа-яА-Я){,10}/;
// 	if(!expStudentName.test(document.getElementById('studentName').value)){
// 		document.getElementById('spanStudentName').style.display = "block";
// 	}
// }

// RegExp();


function createStudent(){

	let person = new Student();
	person.setName(document.getElementById('studentName').value);
	person.setSurname(document.getElementById('studentSurname').value);
	person.setMiddlename(document.getElementById('studentMiddlename').value);
	person.setAge(document.getElementById('studentAge').value);

	person.setFaculty(document.getElementById('Faculty').value);
	person.setGroupNum(document.getElementById('GroupNum').value);
	person.setCourse(document.getElementById('Course').value);
	person.setRecordBookNum(document.getElementById('RecordBookNum').value);

	arrEntity.push(person);
}

function createTeacher(){

	let person = new Teacher();
	person.setName(document.getElementById('teacherName').value);
	person.setSurname(document.getElementById('teacherSurname').value);
	person.setMiddlename(document.getElementById('teacherMiddlename').value);
	person.setAge(document.getElementById('teacherAge').value);

	person.setChildren(document.getElementById('Children').checked);
	person.setPosition(document.getElementById('Position').value);
	person.setExperience(document.getElementById('Experience').value);
	person.setDepartment(document.getElementById('Department').value);

	arrEntity.push(person);
}

btnStudentSend.addEventListener('click', function(){

	i++;
	createStudent();
	loadPage(i);

	document.getElementById('mainStudent').style.display = "none";
	document.getElementById('mainTeacher').style.display = "none";
})

btnTeacherSend.addEventListener('click', function(){

	i++;
	createTeacher();
	loadPage(i);


	document.getElementById('mainStudent').style.display = "none";
	document.getElementById('mainTeacher').style.display = "none";
})

btnStudentClear.addEventListener('click', function(){
	document.getElementById('studentName').value = "";
	document.getElementById('studentSurname').value = "";
	document.getElementById('studentMiddlename').value = "";
	document.getElementById('studentAge').value = "";
	document.getElementById('Faculty').value = "";
	document.getElementById('GroupNum').value = "";
	document.getElementById('Course').value = "";
	document.getElementById('RecordBookNum').value = "";
})

btnTeacherClear.addEventListener('click', function(){
	document.getElementById('teacherName').value = "";
	document.getElementById('teacherSurname').value = "";
	document.getElementById('teacherMiddlename').value = "";
	document.getElementById('teacherAge').value = "";
	document.getElementById('Children').value = "";
	document.getElementById('Position').value = "";
	document.getElementById('Experience').value = "";
	document.getElementById('Department').value = "";
})

function editEntityStudent(item, instance){
	document.getElementById('mainStudent').style.display = "block";

	document.getElementById('newStudent').style.display = "none";
	document.getElementById('reeditStudent').style.display = "block";

	document.getElementById('btnStudentSend').style.display = "none";
	document.getElementById('btnStudentSave').style.display = "block";

	document.getElementById('studentName').value = instance.getName();
	document.getElementById('studentSurname').value = instance.getSurname();
	document.getElementById('studentMiddlename').value = instance.getMiddlename();
	document.getElementById('studentAge').value = instance.getAge();
	document.getElementById('Faculty').value = instance.getFaculty();
	document.getElementById('GroupNum').value = instance.getGroupNum();
	document.getElementById('Course').value = instance.getCourse();
	document.getElementById('RecordBookNum').value = instance.getRecordBookNum();

	btnStudentSave.addEventListener('click', function(){
			instance.setName(document.getElementById('studentName').value);
			instance.setSurname(document.getElementById('studentSurname').value);
			instance.setMiddlename(document.getElementById('studentMiddlename').value);
			instance.setAge(document.getElementById('studentAge').value);

			instance.setFaculty(document.getElementById('Faculty').value);
			instance.setGroupNum(document.getElementById('GroupNum').value);
			instance.setCourse(document.getElementById('Course').value);
			instance.setRecordBookNum(document.getElementById('RecordBookNum').value);

			deleteEntity(item);

			arrEntity.push(instance);

			i++;
			loadPage(i);

			document.getElementById('mainStudent').style.display = "none";
			document.getElementById('mainTeacher').style.display = "none";
		})
}

function editEntityTeacher(item, instance){
	document.getElementById('mainTeacher').style.display = "block";

	document.getElementById('newTeacher').style.display = "none";
	document.getElementById('reeditTeacher').style.display = "block";

	document.getElementById('btnTeacherSend').style.display = "none";
	document.getElementById('btnTeacherSave').style.display = "block";

	document.getElementById('teacherName').value = instance.getName();
	document.getElementById('teacherSurname').value = instance.getSurname();
	document.getElementById('teacherMiddlename').value = instance.getMiddlename();
	document.getElementById('teacherAge').value = instance.getAge();
	document.getElementById('Children').value = instance.getChildren();
	document.getElementById('Position').value = instance.getPosition();
	document.getElementById('Experience').value = instance.getExperience();
	document.getElementById('Department').value = instance.getDepartment();

	btnTeacherSave.addEventListener('click', function(){
			instance.setName(document.getElementById('teacherName').value);
			instance.setSurname(document.getElementById('teacherSurname').value);
			instance.setMiddlename(document.getElementById('teacherMiddlename').value);
			instance.setAge(document.getElementById('teacherAge').value);

			instance.setChildren(document.getElementById('Children').checked);
			instance.setPosition(document.getElementById('Position').value);
			instance.setExperience(document.getElementById('Experience').value);
			instance.setDepartment(document.getElementById('Department').value);

			deleteEntity(item);

			arrEntity.push(instance);

			i++;
			loadPage(i);

			document.getElementById('mainStudent').style.display = "none";
			document.getElementById('mainTeacher').style.display = "none";
		})
}

function deleteEntity(item){
	item.parentNode.parentNode.remove();
}

