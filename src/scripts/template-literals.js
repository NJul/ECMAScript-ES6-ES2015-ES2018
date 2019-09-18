// Template Literals

const user = "Bob";
const num = 17;
const txt = "Hello, " + user + ", you have " + num + " letters in your inbox";

const txt2 = `Hello, ${user}, you have ${num} letters in your inbox. ${10 +
  5}. Now is ${Date.now()}`;

const items = ["tea", "coffee"];

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

const user2 = { firstName: "James", lastName: "Bond" };
console.log(
  `My name is ${user2.lastName}, ${user2.firstName} ${user2.lastName}`
);

/* const query = gql`type User {
  firstName
  lastName
}`;
console.log(query); */

/** */
function fetchData(data, count = 0) {
  /* До ES6: Такая проверка логическим оператором или возвращает только первое значение, которое будет правдой, если аргумент не передан, будет взято значение 0 */
  // count = count || 0;
  console.log(`Даные: ${data} в количестве ${count}`);
}
fetchData("something");
