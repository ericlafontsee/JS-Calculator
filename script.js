const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
let firstNumber = "";
let secondNumber = '';
let operator = "";

var operations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  }
};

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-depressed"));

    if (!action) {
      if(displayedNum === '0' || previousKeyType === 'operator'){
          display.textContent = keyContent;
      }else{
          display.textContent += keyContent;
      }
    }

    if(action === 'decimal'){
        display.textContent += '.'
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = 'operator';
      firstNumber = displayedNum;
      operator = action;
    }

    if (action === "clear") {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        display.textContent = 0;
    }

    if (action === "calculate") {
        secondNumber = displayedNum;

        display.textContent = calculate(firstNumber, operator, secondNumber);
    }
  }
});

// function calculate(a, operator, b){
//     var a = parseInt(firstNumber);
//     var b = parseInt(secondNumber);
//     var fn = operations[operator];
//     result = fn(a,b);

//     return result;
// }
const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
  
    return result
  }
