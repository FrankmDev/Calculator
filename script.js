"use strict";
const btns = document.querySelectorAll(".btn-number");
const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");
const btnNumbers = document.querySelectorAll(".btn-number");
const btnOperators = document.querySelectorAll(".btn-op");
const btnEqual = document.querySelector(".btn-equal");
const btnReload = document.querySelector(".btn-reload");
const darkMode = document.querySelector(".modeBtn");
// btnNumbers.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     let value = btn.value;

//   });
// });
// darkMode.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#22252d";
//   document.querySelector(".container").style.backgroundColor = "#b89ab3";
//   document.querySelector(".display").style.backgroundColor = "#22252d";
// });

function toggleDarkMode() {
  const body = document.getElementById("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

document.getElementById("modeBtn").addEventListener("click", toggleDarkMode);
