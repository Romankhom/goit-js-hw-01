"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Данные не корректны, введите число");
  } else if (input !== null) {
    numbers.push(Number(input));
  }

} while (input !== null);

if (input === null) {
  for (const number of numbers) {
    total += number;

    console.log(total)
  }
}

if (input === null && numbers < 1) {
  alert("Не введено ни одного числа");
} else {
  alert(`Общая сумма введенных чисел равна: ${total}`);
}
