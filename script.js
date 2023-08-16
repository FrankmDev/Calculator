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

// For each para recorrer el event a cada boton
btnNumbers.forEach(function (btnNumber) {
  btnNumber.addEventListener("click", function () {});
});
