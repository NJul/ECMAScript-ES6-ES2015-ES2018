// spred ...

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 7]; // [1, 2, 3, 7]

console.log(newNumbers);

// for object
const person = {
  name: "Max"
};

const newPerson = {
  ...person,
  age: 28
};

console.log(newPerson); // {name: "Max", age: 28}

// rest ... operator
const filter = (...args) => {
  return args.filter(el => el === 1);
};

console.log(filter(1, 5, 6)); // [1]
