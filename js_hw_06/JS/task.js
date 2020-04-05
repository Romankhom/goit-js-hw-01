"use strict";

import users from "./users.js";

// ------------------------------------task_1------------------------------------
const getUserNames = users => users.map(({ name }) => name);

console.log("массив имен всех пользователей");
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ----------------------------------------task_2------------------------------------
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color)
};

console.log("массив объектов пользователей по цвету глаз");
console.log(getUsersWithEyeColor(users, 'blue'));// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ------------------------------------------task_3----------------------------------
const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender).map((user) => user.name);

console.log("массив имен пользователей по полу");
console.log(getUsersWithGender(users, 'male'));// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// --------------------------------------------task_4----------------------------------
const getInactiveUsers = users => users.filter(user => user.isActive !== true);
console.log("массив только неактивных пользователей");
console.log(getInactiveUsers(users));// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ----------------------------------------------task_5----------------------------------
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log("Получить пользоваля (не массив) по email (поле email, он уникальный).");
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// ------------------------------------------------task_6-----------------------------------
const getUsersWithAge = (users, min, max) => users.filter(user => user.age > min && user.age < max);

console.log("массив пользователей попадающих в возрастную категорию от min до max лет (поле age).")
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ------------------------------------------------task_7--------------------------------------
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log("общая сумма баланса");
console.log(calculateTotalBalance(users)); // 20916

// ---------------------------------------------task_8-------------------------------------------
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log("Массив имен всех пользователей у которых есть друг с указанным именем.");
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ----------------------------------------------task_9---------------------------------------------
const getNamesSortedByFriendsCount = users =>
  users
    .filter(user => user.friends)
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(user => user.name);

console.log("Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)");
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// -----------------------------------------------task_10------------------------------------------------
const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((skill, idx, arrayOfAllSkills) => arrayOfAllSkills.indexOf(skill) === idx)
    .sort((a, b) => (a > b ? 1 : -1));

console.log("массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.");
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]