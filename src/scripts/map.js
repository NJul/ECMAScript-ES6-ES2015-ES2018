// метод arr.map(callback[,thisArg])
/* map служит чтобы трансформировать каждый элемент массива и сформировать новый массив из результов его действия */

var numbers2 = [1, 4, 9];
var roots = numbers2.map(Math.sqrt);
console.log(numbers2);
console.log(roots);
// теперь roots равен [1, 2, 3], а numbers все еще равен [1, 4, 9]

var doubles = numbers2.map(function(num) {
  return num * 2;
});
console.log(numbers2);
console.log(doubles);

var names = ["HTML", "CSS", "JavaScript", "PHP"];
var nameLengths = names.map(function(name) {
  return name.length;
});
// получили массив с длинами
console.log(nameLengths);

/* Click the button to get the square root of each element in the array. */
const numbers = [4, 9, 16, 25];
console.log(numbers);

document.getElementById("button1").onclick = function() {
  document.getElementById("squareRoot").innerHTML = numbers
    .map(Math.sqrt)
    .join(", ");
};

/* Get the full name for each person in the array: */
var persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" }
];

function getFullName(item) {
  var fullname = " " + [item.firstname, item.lastname].join(" ");
  return fullname;
}

document.getElementById("button2").onclick = function fullname() {
  document.getElementById("fullname").innerHTML = persons.map(getFullName);
};

let answers = ["IvAn", "AnnA", "HeLLo"];
answers = answers.map(item => item.toLowerCase());
// В итоге мы получаем новый массив из всех имен, но уже в нижнем регистре
console.log(answers);
