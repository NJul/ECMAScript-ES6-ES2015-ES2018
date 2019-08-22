/* Є об'єкт, потрібно розбити кожен ключ на змінну.   */

// Destructuring - Деструктуризация, объекта в нашем примере

/* const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 27
}; */

const person = {
  name: {
    first: "Peter",
    last: "Smith"
  },
  age: 27
  // role: 'admin'
};

// По-старому вытаскиваем значения из объекта
// const firstName = person.firstName;
// const lastName = person.lastName;

/* Мы создали две константы firstName, lastName и сохранили в них значение из аналогичных свойств person Не забываем, что азвание ваших констат должно совпадать с названием полей в объекте. */
/* 
const {
  firstName,
  lastName
} = person; 

console.log(firstName, lastName);
*/

/* 
const {
  name: { first, last }
} = person;
console.log(first, last); 
*/

/* Переименуем извлеченные значения first будет называться firstName, находим поле name сохраняем first в firstName. */
/* const {
  name: { first: firstName, last: lastName }
} = person;
console.log(firstName, lastName); */

/* Присвоим свойство по умолчанию, если его нет в объекте */

// const { role = "user" } = person;
// console.log(role);

// Но вложенность объектов не работает:
// const { permissions: {role = 'user'}  } = person;
// Но добавим значение по умолчанию permissions = {} пустой объект, и все тогда работает
/* const { permissions: { role = "user" } = {} } = person;
console.log(role); */

// Деструктуризация аргументов функции

/* function connect({
  host = "localhost",
  port = 12345,
  user = "guest"
  // по умолчанию если объекта не было вообще, то объект будет пустым = {}:
} = {}) {
  console.log("user:", user, "port:", port, "host:", host);
} */

// connect({});
/* connect({
  port: 1111
}); */
// И все значения функции будут записаны по умолчанию
// connect();

//
/* const dict = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak"
};

const { duck } = dict;
console.log(duck); */

// в otherAnimals попадут все остальные не деструктурированные значения, д.б. послдним в списке и один
/* const { duck, ...otherAnimals } = dict;
console.log(otherAnimals); */

// Деструктуризация
// const { name, age } = person;

// Упрощает получение свойств из объектов
// Поддерживает вложенность и значения по умолчанию
// Работает с параметрами функций
// Поддерживает rest element

const user = {
  _id: "da8Hkjsh098sKY",
  name: "Test User",
  services: { password: "apos8dfuoasidhfn8p9s7yf18" },
  emails: [
    { address: "test@test.com", verified: true },
    { address: "test@test.com", verified: false }
  ]
};

/* password = user.services.password */
/* Розбиваєм services на частинки, її вже нема цілої */
/* { services: {password} } = user */

const {
  _id,
  name = "No name",
  /* password = apos8dfuoasidhfn8p9s7yf18 */
  services: { password },
  emails
} = user;
let [email1, email2] = emails;
console.log(email1);

// Destructuring array
[a, b] = ["Hello", "Max"];
console.log(a); // Hello
console.log(b); // Max

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); // 1 3

// object destructuring
// {name} = {name: 'Max', age: 28};
// console.log(name); // Max
// console.log(age); // undefined
