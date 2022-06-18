add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

function operate(a, b, operator){
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
  }
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const calculate = document.querySelector('.operate');
const clear = document.querySelector('.clear');
const topDisplay = document.querySelector('.screen1');
const botDisplay = document.querySelector('.screen2');
let num1, num2;
let operator = "";

numbers.forEach(button => button.addEventListener('click', () => {
  if (!operator) {
    botDisplay.textContent += button.textContent;
    num1 = parseInt(botDisplay.textContent);
  }else{
    botDisplay.textContent += button.textContent;
    num2 = parseInt(botDisplay.textContent);
  }}));

operators.forEach(button => button.addEventListener('click', () => {
  if (!operator) {
    operator = button.textContent;
    topDisplay.textContent = botDisplay.textContent + operator;
    botDisplay.textContent = "";
  }}));

calculate.addEventListener('click', () => {
  topDisplay.textContent = topDisplay.textContent + botDisplay.textContent;
  let result = operate(num1, num2, operator);
  botDisplay.textContent = result;
  num1 = result; num2 = null; operator = "";
});

clear.addEventListener('click', () => {
  topDisplay.textContent = "";
  botDisplay.textContent = "";
  num1 = 0; num2 = 0; operator = "";
});