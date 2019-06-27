// JavaScript ES6
/* function checkScope() {
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Block scope i is: ", i);
  return i;
} */

/* function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Block scope i is: ", i);
  return i;
}

checkScope(); */

/* function printManyTimes(str) {
  "use strict";

  var sentence = str + " is cool!";

  sentence = str + " is amazing!"

  for (var i = 0; i < str.length; i += 2) {
    console.log(sentence);
  }

}
printManyTimes("freeCodeCamp"); */

/* function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp"); */

/* const s = [5, 7, 2];
console.log(s);
function editInPlace() {
  // s = [2, 5, 7]; //ошибка
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s); */

// read only
/* function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI); */

/* var magic = function () {
  return new Date();
};

const magic2 = () => new Date();

var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat2 = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat2([1, 2], [3, 4, 5])); */