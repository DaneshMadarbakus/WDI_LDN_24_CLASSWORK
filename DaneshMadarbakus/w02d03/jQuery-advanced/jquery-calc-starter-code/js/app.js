var firstNumber;
var secondNumber;
var operator;
var numbers;
var operators;
var eq;
var clear;
var display;

$(function() {
  // Setup initial state variables
  numbers = $('.number');
  operators = $('.operator');
  eq = $('.eq');
  clear = $('.clear');
  display = $('.display')[0];

  // Initially clear calculator
  reset();

  //Setup eventListeners
  numbers.on('click', setNumber);
  operators.on('click', setOperator);

  eq.on('click', calculate);
  clear.on('click', reset);

  // functions for calculator

  function add() {
    return firstNumber + secondNumber;
  }

  function subtract() {
    return firstNumber - secondNumber;
  }

  function divide() {
    return firstNumber / secondNumber;
  }

  function multiply() {
    return firstNumber * secondNumber;
  }

  function calculate() {
    switch (operator) {
      case '+':
        updateDisplay(add());
        break;
      case '-':
        updateDisplay(subtract());
        break;
      case '/':
        updateDisplay(divide());
        break;
      case 'x':
        updateDisplay(multiply());
        break;
    }
  }

  function reset() {
    firstNumber   = '';
    secondNumber  = '';
    operator;
    display.value = '';
  }

  function setNumber() {
    var value = parseInt(this.value);

    if (firstNumber === '') {
      firstNumber = value;
    } else {
      secondNumber = value;
    }
    console.log(firstNumber);
    updateDisplay(value);
  }

  function setOperator() {
    operator = this.value;
    console.log(operator);
  }

  function updateDisplay(value) {
    display.value = value;
  }



});
