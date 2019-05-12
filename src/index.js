/* Используем стороннюю библиотеку one-liner-joke, в этом случае не ставим ./ Библиотеки экспортируются по своему полному имени. Свои файлы экспортируются по относительному пути ./ */
import oneLinerJoke from 'one-liner-joke';
const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);

// import './scripts/sideeffect';

// import * as calc from './scripts/mymath';
/* теперь у нас есть объект calc */
// console.log(calc.a(1, 2));

/* Здесь не ставим фигурные скобки, при экспотре по умолчанию. */
// import Graph from './scripts/mymath';
/* Пееименуем в G1 */
// import G1 from './scripts/mymath';
/* Можем миксовать, * as calc значит, что все остальные мы хотим импортировать как объект calc */
/* import G1, {
  add,
  subtract
} from './scripts/mymath'; */
// import G1, * as calc from './scripts/mymath';
/* Классы видны как функции. */
// console.log(typeof G1);
// console.log(calc.a(1, 2));

/* import {
  a,
  mt,
  PI
} from './scripts/mymath'; */

/*
Можно переименовывать здесь (или прямо в export из файлов):
import {
  add as a,
  subtract as s,
  PI
} from './scripts/mymath';

console.log(a(1, 1));

 */

/* 
console.log(a(1, 1));
console.log(mt(5, 6));

console.log(PI); 
*/