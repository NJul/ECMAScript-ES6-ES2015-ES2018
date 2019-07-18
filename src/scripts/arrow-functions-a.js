/* Раньше */
[1, 2, 3].map(function mapCb(i) {
  return i + 2;
});
// [3, 4, 5]

/* Теперь */
[1, 2, 3].map(i => i + 2);
// [3, 4, 5]

/* У стрелочных функций нет своего контекста, берут родительский контекст. this нет. */
function old() {
  /* В контексте этой функции есть a */
  this.a = 1;
  /* Сохраняем в контекст переменную self */
  /* const self = this; */
  console.log(a);

  this.printA = () => {
    return self.a; // a = 1, так как своего контекста у стр.ф. нет.
  };
}
old();

/* const getMovie = function (name, start) {
  return `${name} ${start}`;
}

const getMovie2 = (name, start) => {
  return `${name} ${start}`;
}

const getMovie3 = (name, start) => `${name} ${start}`;
const getMovie4 = name => name;
const getMovie5 = () => 'Averages5';


console.log(getMovie('Averages', '2018'));
console.log(getMovie2('Averages2', '2019'));
console.log(getMovie3('Averages3', '2017'));
console.log(getMovie4('Averages4'));
console.log(getMovie5()); */

/* const square = function (x) {
  return x * x;
};

console.log(square(8)); */

/* function square(x) {
  return x * x;
}

console.log(square(3)); */

/* const squareArrow = x => {
  return x * x;
};

console.log(squareArrow(9)); */

/* 
const squareArrow = x => x * x;
console.log(squareArrow(9)); 
*/

/* function getFirstName(fullName) {
  return fullName.split(" ")[0];
}

const firstName = getFirstName("Julie Jen");

console.log(firstName); */

/* const getFirstName = fullName => {
  return fullName.split(" ")[0];
}; */

const getFirstName = fullName => fullName.split(" ")[0];

console.log(getFirstName("Mike Smith"));

/*
function myFnc() {
  ...
}
*/

/* function printMyName(name) {
  console.log(name);
}
printMyName("Max"); */

const printMyName = (name, age) => {
  console.log(name, age);
};
printMyName("Max", 28);

const myFnc = () => {};

const multiply = number => number * 2;

console.log(multiply(2));
