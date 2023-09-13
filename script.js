"use strict";

const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");
const btnNumbers = document.querySelectorAll(".btn-number");
const btnOperators = document.querySelectorAll(".btn-op");
const btnEqual = document.querySelector(".btn-equal");
const btnReload = document.querySelector(".btn-reload");
const darkMode = document.querySelector(".modeBtn");

// DARK MODE
function toggleDarkMode() {
  const body = document.getElementById("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
document.getElementById("modeBtn").addEventListener("click", toggleDarkMode);

// FUNCTIONALITY

let calc = [];
let currentNumber = "";
let currentOperator = "";

btnNumbers.forEach((btnNumber) => {
  btnNumber.addEventListener("click", function () {
    let value = btnNumber.value;
    currentNumber += value;
    inputDisplay.textContent = currentNumber;
  });
});

btnOperators.forEach((btnOperator) => {
  btnOperator.addEventListener("click", function () {
    if (currentNumber !== "") {
      calc.push(parseFloat(currentNumber));
      currentNumber = "";
    }
    currentOperator = btnOperator.textContent;
  });
});

btnEqual.addEventListener("click", (e) => {
  if (currentNumber !== "") {
    calc.push(parseFloat(currentNumber));
    currentNumber = "";
  }

  let result = 0;
  switch (currentOperator) {
    case "+":
      result = calc.reduce((a, b) => a + b, 0);
      break;
    case "-":
      result = calc.reduce((a, b) => a - b);
      break;
    case "*":
      result = calc.reduce((a, b) => a * b, 1);
      break;
    case "/":
      result = calc.reduce((a, b) => a / b).toFixed(4);
      break;
    default:
      result = NaN;
  }
  outputDisplay.textContent = result;

  calc = [];
  currentOperator = "";
});

btnReload.addEventListener("click", (e) => {
  calc = [];
  currentNumber = "";
  currentOperator = "";
  inputDisplay.textContent = "0";
  outputDisplay.textContent = "0";
});
