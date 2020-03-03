"use strict";

let credits = 23580;
let prisePerDroid = 3000;
let totalPrice;
const clientChoice = prompt('Сколько дроидов вы покупаете?');
console.log(clientChoice);
totalPrice = prisePerDroid * clientChoice;
if (clientChoice === null) {
  totalPrice = 'отменено пользователем';
  alert(totalPrice);

} else if (Number.isNaN(Number(clientChoice))) {
  alert('Введите число');

} else if (totalPrice > credits) {
  alert('Недостаточно средств на вашем счету');

} else if (totalPrice < credits) {
  alert(`Вы купили ${clientChoice} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}
