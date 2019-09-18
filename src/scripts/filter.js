let names = ["Ivan", "Goshan", "Ann", "Kseniya", "Oli"];

let shortNames = names.filter(name => {
  return name.length < 5;
});

// При методе .filter создается новый массив

console.log(names);
console.log(shortNames);
