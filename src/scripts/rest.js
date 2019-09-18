// Rest parameter
// Обязан идти последним, должен быть только один rest parameter
/*  */

function max(a, b, ...numbers) {
  console.log(numbers);
}

/* ниже 3 будет единственным аргументом массива numbers */
max(1, 2, 3);

/* function max() {
  // pseudo-array
  var numbers = Array.prototype.slice.call(arguments);
} */

/*
finction f(a, b, ...others) {}
Всегда массив, может быть пустым
Получает аргументы, которые не были присвоены обычным параметрам
Должен быть последним в списке
Максимум один rest-параметр в функции
*/

// rest parameters
// const logArgs = (...args) => console.log(args);

// const withRestParams = (a, b, ...rest) => {...};

function max(...numbers) {
  console.log(numbers);
}
max(3, 4, 67);

function max(a, b, ...numbers) {
  console.log(numbers);
}
max(3, 4, 67, 97);
// сворачивает в один массив
// a = 3, b = 4
// [67, 97]
