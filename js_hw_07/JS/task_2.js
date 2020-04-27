"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');

const liItem = ingredients.map(ingredientItem => {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingredientItem;
  return ingredient;
});

ul.append(...liItem);