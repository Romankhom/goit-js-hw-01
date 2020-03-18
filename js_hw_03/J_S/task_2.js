"use strict";

const countProps = function (obj) {
  const arrObj = Object.keys(obj);
  return arrObj.length;
}

console.log(`Kоличество свойств в объете - ${countProps({})}`); // 0

console.log(`Kоличество свойств в объете - ${countProps({ name: 'Mango', age: 2 })}`); // 2

console.log(`Kоличество свойств в объете - ${countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })}`); // 3