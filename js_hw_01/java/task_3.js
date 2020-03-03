"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const value = prompt('Пожалуйста введите пароль');
console.log(value);

if (value === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (value === null) {
  message = 'Отменено пользователем';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);


