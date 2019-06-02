// Objects

const x = 10;
const y = 30;

// Старый синтаксис
const point = {
  x: x,
  y: y,

  draw: function () {
    // ...
  }
};

// Новый синтаксис, если имя переменной и свойство совпадают:
// Обычная функция, которая написана более лаконичным синтаксисом
const p = {
  x,
  y,

  draw(ctx) {
    //
  }
};

const prefix = '_blah_';

// Создаем объект, _blah_name, _blah_age
const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 23
};

console.log(data);

// Функция, которая позволяет копировать свойства
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const opts = {
  user: 'john',
  password: 'utopia'
};

/* В результате у нас получился объект res, который имеет все свойства из defaults, и все свойства из opts */

const res = Object.assign({}, defaults, opts);
console.log(res);

/* Поверхностная копия, если в friends появится новый друг, то он появится и в shallowCopy, они используют один и тот же массив. */
const person = {
  name: 'Bob',
  friends: ['Mark', 'Jacob', 'Oleg']
};

const shallowCopy = Object.assign({}, person);
person.friends.push('Jane');

console.log(shallowCopy);

/*
Объекты в ES-2015 +
const a {x, y}
const a = { sayHi() { ... }}
const a = { [dynamicKey]: value}
const res = Object.assign (dest, src1, src2 ...)
*/