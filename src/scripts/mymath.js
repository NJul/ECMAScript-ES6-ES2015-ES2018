function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export default class Graph {
  addNode() {
    console.log('node added');
  }
}
const PI = 3.1415;

/* export {
  add,
  subtract,
  multiply,
  divide,
  PI
}; */

export {
  add as a,
  subtract,
  multiply as mt,
  divide as d,
  PI
};

/* Экспортируем по умолчанию класс Graph */
// export default Graph;
/* Только один дефолтный экспорт разрешен для одного модуля. */

/* 2 способа есть: Именованный экспорт, тогда вам надо в фигурных скобках просто перечислить названия всего того, что вы собираетесь экспортировать */
/* Либо export default единственный экспорт, который не имеет своего собственного имени. Он может идти под любым именем. */
/* Переименовывать можно с обоих сторон, либо со стороны экспорта, либо со стороны импорта. subtract as s */