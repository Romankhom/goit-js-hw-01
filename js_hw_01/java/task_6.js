"use strict";

let total = 0;
let input;
do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Введено не число, измените данные");
    continue;
  } else {
    total += +input;
  }
} while (input !== null);

alert(`Общая сумма равна: ${total}`);