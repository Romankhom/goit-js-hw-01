"use strict";

const formatString = function (string) {
  let newString;
  if (string.length >= 40) {
    newString = string.slice(0, 40);
    return newString + "...";
  }
  else {
    return string;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));


console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'),
);
