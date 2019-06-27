/*
const and let
arrow functions
default parameters' values 
spread operator
destructing
template literals
enhanced object properties
modules
classes
etc...
*/

const MINUTES_IN_HOUR = 60;
let mutableValue = "Default value";
if (/* somethingIsTrue */ mutableValue === "Default value") {
  mutableValue = "Another value";
}

var x = 1;
if (x === 1) {
  var x = 2;
}
console.log(x); // 2

let a = 5;
if (a === 5) {
  let a = 10;
}
console.log(a); /* 5, scope, видимость let a = 10; только в блоке */

/* Раньше ограничивали область видимости, (область памяти scope функции), переменной самовызывающейся функцией var так: Вернет результат, если написать return n, но далее n не определена. */
/* (function module() {
  var n = 1;
  return n;
})(); */
// console.log(n);
// n is not defined
