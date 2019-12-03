

var btnStudent = document.getElementById('student');
var btnTeacher = document.getElementById('teacher');
var btnTeacherSend = document.getElementById('btnTeacherSend');
var btnTeacherClear = document.getElementById('btnTeacherClear');
var btnStudentSend = document.getElementById('btnStudentSend');
var btnStudentClear = document.getElementById('btnStudentClear');
var table = document.querySelector('tbody');
var tr = document.createElement('tr');
var editStudent;
var deleteStudent;
var editTeacher;
var deleteTeacher;


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
	
	var _name;
	var _surname;
	var _middlename;
	var _age;

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
	var _children;
	var _position;
	var _experience;
	var _department;

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
	var _faculty;
	var _groupNum;
	var _course;
	var _recordBookNum;

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

btnStudentSend.addEventListener('click', function(){

	var person = new Student();
	person.setName(document.getElementById('studentName').value);
	person.setSurname(document.getElementById('studentSurname').value);
	person.setMiddlename(document.getElementById('studentMiddlename').value);
	person.setAge(document.getElementById('studentAge').value);

	person.setFaculty(document.getElementById('Faculty').value);
	person.setGroupNum(document.getElementById('GroupNum').value);
	person.setCourse(document.getElementById('Course').value);
	person.setRecordBookNum(document.getElementById('RecordBookNum').value);
	
	var tr = document.createElement('tr');
	table.appendChild(tr);

	tr.innerHTML += '<td>' + person.getName() + '</td>';
	tr.innerHTML += '<td>' + person.getSurname() + '</td>';
	tr.innerHTML += '<td>' + person.getMiddlename() + '</td>';
	tr.innerHTML += '<td>' + person.getAge() + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + person.getFaculty() + '</td>';
	tr.innerHTML += '<td>' + person.getGroupNum() + '</td>';
	tr.innerHTML += '<td>' + person.getCourse() + '</td>';
	tr.innerHTML += '<td>' + person.getRecordBookNum() + '</td>';
	tr.innerHTML += '<td>' + "<button>Редактировать</button> <button>Удалить</button>" + '</td>';

	var studentEdit = tr.querySelectorAll("button")[0];

	editEntityStudent(studentEdit, person);

	var studentDelete = tr.querySelectorAll("button")[1];

	deleteEntity(studentDelete);

	document.getElementById('mainStudent').style.display = "none";
	document.getElementById('mainTeacher').style.display = "none";
})

btnTeacherSend.addEventListener('click', function(){

	var person = new Teacher();
	person.setName(document.getElementById('teacherName').value);
	person.setSurname(document.getElementById('teacherSurname').value);
	person.setMiddlename(document.getElementById('teacherMiddlename').value);
	person.setAge(document.getElementById('teacherAge').value);

	person.setChildren(document.getElementById('Children').checked);
	person.setPosition(document.getElementById('Position').value);
	person.setExperience(document.getElementById('Experience').value);
	person.setDepartment(document.getElementById('Department').value);
	
	var tr = document.createElement('tr');
	table.appendChild(tr);

	tr.innerHTML += '<td>' + person.getName() + '</td>';
	tr.innerHTML += '<td>' + person.getSurname() + '</td>';
	tr.innerHTML += '<td>' + person.getMiddlename() + '</td>';
	tr.innerHTML += '<td>' + person.getAge() + '</td>';
	tr.innerHTML += '<td>' + person.getChildren() + '</td>';
	tr.innerHTML += '<td>' + person.getPosition() + '</td>';
	tr.innerHTML += '<td>' + person.getExperience() + '</td>';
	tr.innerHTML += '<td>' + person.getDepartment() + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + "-" + '</td>';
	tr.innerHTML += '<td>' + "<button>Редактировать</button> <button>Удалить</button>" + '</td>';


	var teacherEdit = tr.querySelectorAll("button")[0];
	
	editEntityTeacher(teacherEdit, person);

	var teacherDelete = tr.querySelectorAll("button")[1];

	deleteEntity(teacherDelete);

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
	item.addEventListener('click', function(){
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
	});

	btnStudentSave.addEventListener('click', function(){
			instance.setName(document.getElementById('studentName').value);
			instance.setSurname(document.getElementById('studentSurname').value);
			instance.setMiddlename(document.getElementById('studentMiddlename').value);
			instance.setAge(document.getElementById('studentAge').value);

			instance.setFaculty(document.getElementById('Faculty').value);
			instance.setGroupNum(document.getElementById('GroupNum').value);
			instance.setCourse(document.getElementById('Course').value);
			instance.setRecordBookNum(document.getElementById('RecordBookNum').value);

			item.parentNode.parentNode.remove();

			var tr = document.createElement('tr');
			table.appendChild(tr);

			tr.innerHTML += '<td>' + instance.getName() + '</td>';
			tr.innerHTML += '<td>' + instance.getSurname() + '</td>';
			tr.innerHTML += '<td>' + instance.getMiddlename() + '</td>';
			tr.innerHTML += '<td>' + instance.getAge() + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + instance.getFaculty() + '</td>';
			tr.innerHTML += '<td>' + instance.getGroupNum() + '</td>';
			tr.innerHTML += '<td>' + instance.getCourse() + '</td>';
			tr.innerHTML += '<td>' + instance.getRecordBookNum() + '</td>';
			tr.innerHTML += '<td>' + "<button>Редактировать</button> <button>Удалить</button>" + '</td>';

			var teacherEdit = tr.querySelectorAll("button")[0];
	
			editEntityStudent(studentEdit, instance);

			var studentDelete = tr.querySelectorAll("button")[1];

			deleteEntity(studentDelete);

			document.getElementById('mainStudent').style.display = "none";
			document.getElementById('mainTeacher').style.display = "none";
		})
}

function editEntityTeacher(item, instance){
	item.addEventListener('click', function(){
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
	});

	btnTeacherSave.addEventListener('click', function(){
			instance.setName(document.getElementById('teacherName').value);
			instance.setSurname(document.getElementById('teacherSurname').value);
			instance.setMiddlename(document.getElementById('teacherMiddlename').value);
			instance.setAge(document.getElementById('teacherAge').value);

			instance.setChildren(document.getElementById('Children').checked);
			instance.setPosition(document.getElementById('Position').value);
			instance.setExperience(document.getElementById('Experience').value);
			instance.setDepartment(document.getElementById('Department').value);

			item.parentNode.parentNode.remove();

			var tr = document.createElement('tr');
			table.appendChild(tr);

			tr.innerHTML += '<td>' + instance.getName() + '</td>';
			tr.innerHTML += '<td>' + instance.getSurname() + '</td>';
			tr.innerHTML += '<td>' + instance.getMiddlename() + '</td>';
			tr.innerHTML += '<td>' + instance.getAge() + '</td>';
			tr.innerHTML += '<td>' + instance.getChildren() + '</td>';
			tr.innerHTML += '<td>' + instance.getPosition() + '</td>';
			tr.innerHTML += '<td>' + instance.getExperience() + '</td>';
			tr.innerHTML += '<td>' + instance.getDepartment() + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + "-" + '</td>';
			tr.innerHTML += '<td>' + "<button>Редактировать</button> <button>Удалить</button>" + '</td>';

			var teacherEdit = tr.querySelectorAll("button")[0];
	
			editEntityTeacher(teacherEdit, instance);

			var teacherDelete = tr.querySelectorAll("button")[1];

			deleteEntity(teacherDelete);

			document.getElementById('mainStudent').style.display = "none";
			document.getElementById('mainTeacher').style.display = "none";
		})
}

function deleteEntity(item){
	item.addEventListener('click', function(){
		item.parentNode.parentNode.remove();
	});
}
