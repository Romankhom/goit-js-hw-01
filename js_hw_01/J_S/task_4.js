"use strict";

let credits = 23580;
let prisePerDroid = 300;
let totalPrice;
const clientChoice = prompt('Сколько дроидов вы покупаете?');
console.log(clientChoice);
totalPrice = prisePerDroid * clientChoice;
if (clientChoice === null) {
  alert('отменено пользователем');

} else if (Number.isNaN(Number(clientChoice))) {
  alert('Введите число');

} else if (totalPrice > credits) {
  alert('Недостаточно средств на вашем счету');

} else if (totalPrice <= credits) {
  alert(`Вы купили ${clientChoice} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
} else if (totalPrice === credits) {

}
