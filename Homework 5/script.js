

let memory = [];
let btnHistory = document.getElementById('history');
let spanMemory = document.getElementById('memory');

btnHistory.addEventListener('click', () =>{
	(memory.length == 0) ? spanMemory.innerHTML = "Пусто" : spanMemory.innerHTML = memory
})

let selectValue = document.getElementById('selectValue');


const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//All Operators
 const allCalculation = {
  '+': (firstOperand, secondOperand) => Math.round((firstOperand + secondOperand)*10)/10,

  '-': (firstOperand, secondOperand) => Math.round((firstOperand - secondOperand)*10)/10,

  '*': (firstOperand, secondOperand) => Math.round((firstOperand * secondOperand)*10)/10,

  '/': (firstOperand, secondOperand) => (Math.round((firstOperand / secondOperand)*10)/10 == "Infinity") ? "Error" : Math.round((firstOperand / secondOperand)*10)/10,

  '%': (firstOperand, secondOperand) => firstOperand % secondOperand,

  'n!': (firstOperand, secondOperand) => fact(firstOperand),

  '^': (firstOperand, secondOperand) => Math.pow(firstOperand, secondOperand),

  'sin': (firstOperand, secondOperand) => Math.round(Math.sin(firstOperand*(Math.PI/180))*10)/10,

  'cos': (firstOperand, secondOperand) => Math.round(Math.cos(firstOperand*(Math.PI/180))*10)/10,

  'tg': (firstOperand, secondOperand) => (Math.round(Math.tan(firstOperand*(Math.PI/180))*10)/10 > 2) ? "Error" : Math.round(Math.tan(firstOperand*(Math.PI/180))*10)/10,

  'ctg': (firstOperand, secondOperand) => (Math.round(1/Math.tan(firstOperand*(Math.PI/180))*10)/10 > 2) ? "Error" : Math.round(1/Math.tan(firstOperand*(Math.PI/180))*10)/10


};

function fact(n) {
	return n ? n * fact(n - 1) : 1;
}



function inputOperand(ourOperand) {
  const {
      displayValue,
      waitingForSecondOperand
  } = calculator;

  if (waitingForSecondOperand === true) {
      calculator.displayValue = ourOperand;
      calculator.waitingForSecondOperand = false;
  } else {
      calculator.displayValue = displayValue === '0' ? ourOperand : displayValue + ourOperand;
  }

  console.log(calculator);
}



function handleOperator(nextOperator) {
  const {
      firstOperand,
      displayValue,
      operator
  } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
  }

  if (firstOperand == null) {
      calculator.firstOperand = inputValue;
  } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = allCalculation[operator](currentValue, inputValue);

      calculator.displayValue = String(result);
      calculator.firstOperand = result;

      memory.push(currentValue + " " +  calculator.operator + " " + inputValue + " " + "=" + " " + result);
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);

}

function updateDisplay() {
  const display = document.querySelector('.calc_all');
  display.value = calculator.displayValue;
}

updateDisplay();

function clearDisplay() {
	calculator.displayValue = 0;
	calculator.firstOperand = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
}

const keys = document.querySelector('.calc_keys');
keys.addEventListener('click', (event) => {
  const {
      target
  } = event;
  if (!target.matches('button')) {
      return;
  }

  if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
  }

  if (target.classList.contains('add_operator')) {
      handleOperator(target.value);
      calculator.waitingForSecondOperand = false;
      updateDisplay();
      return;
  }

  if (target.classList.contains('clear')) {
  	  clearDisplay();
  	  updateDisplay();
  }

  inputOperand(target.value);
  updateDisplay();
}); 