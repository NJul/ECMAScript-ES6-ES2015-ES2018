// Array Destructuring

const fib = [1, 1, 2, 3, 5, 8, 13];
// const [a, b, c] = fib;
const [, c, , d] = fib;

// console.log(a, b, c);
console.log(c, d);

const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);

const people = ['Chris', 'Sandra'];
const [f, g, h = 'guest'] = people;
console.log(f, g, h);

const people2 = ['Chris', 'Sandra', 'Bob', 'Alek'];
const [a, ...others] = people2;
console.log(others);

const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak'
};

/* Нам нужно получить все ключи и значения одновременно. */
/* Эта функция принимает объект, возвращается двумерный массив. */
const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key);

console.log(res);

/* Синтаксис деструктуризации позволяет вам комбинировать деструктуризацию для массивов и дестрктуризацию для объектов. */
const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 15],
    end: [17, 15]
  }
};

const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;
console.log(startX, startY, endX, endY);

// Деструктуризация массивов
// const [a, , b] = [1, 2, 3]
// Поддерживает все те же возможности, что и объекты
// Можно пропускать значения
// Можно использовать синтаксис деструктуризации для массивов и объектов в одном выражении