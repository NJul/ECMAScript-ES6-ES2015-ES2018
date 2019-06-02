// Template Literals

const user = 'Bob';
const num = 17;
const txt = 'Hello, ' + user + ', you have ' + num + ' letters in your inbox';

const txt2 = `Hello, ${user}, you have ${num} letters in your inbox. ${10 + 5}. Now is ${Date.now()}`;

const items = ['tea', 'coffee'];

const menu = `
  <ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
  </ul>
`;

console.log(txt);
console.log(txt2);
console.log(menu);

// Шаблонные строки
/*
const s = `My name is ${getName}`
Поддерживают выражения, вызовы функций
Поддерживают перенос строки
Результат - обычная строка (не новый тип)
*/