"use strict";

let clientChoice = prompt("Введите страну доставки:");

if (clientChoice === null) {
  alert("Отменено пользователем");
} else {
  clientChoice = clientChoice[0].toUpperCase() + clientChoice.substr(1).toLowerCase();

  let price;

  switch (clientChoice) {
    case "Китай":
      price = 100;
      break;
    case "Чили":
      price = 250;
      break;
    case "Австралия":
      price = 170;
      break;
    case "Индия":
      price = 80;
      break;
    case "Ямайка":
      price = 120;
      break;
    default:
      alert("В выбранную страну доставка не доступна");

  }
  if (price > 0) {
    alert(`Доставка в ${clientChoice} будет стоить ${price} кредитов`);
  }

}