// Spread operator for Objects - 2018 year

const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

/* Эти данные переданы от пользователя и должны быть более приоритетны параметров по умолчанию. Свойства из opts перезапишут свойсва defaults */
const opts = {
  user: 'john',
  password: 'utopia'
};

// const result = Object.assign({}, defaults, opts);

/* Раскрывается списко ключей - значений, которые будут присвоен другому объекту. */
// const res = { ...defaults, ...opts };

const port = 8000;
const res = {
  ...defaults,
  ...opts,
  port,
  connect() { }
};

console.log(res);

// Spread оператор для объектов
// const a = { ...opts, ...defaults}
// "Разворачивает" объект, превращая его в список свойсвт.
// Можно комбинировать с любым другим синтаксисом создания объектов.