let s = "test1";
s.startsWith("te");
// true
/* Якщо стрічка починається з такого словополучення, то поверне true, інакше false */

s.repeat(4);

// Раніше
s.indexOf("est");
// 1
s.indexOf("st");
// 2
s.indexOf("st") > -1;
// true

// Зараз
s.includes("st");
// true

var str = "Быть или не быть, вот в чём вопрос.";

console.log(str.startsWith("Быть")); // true
console.log(str.startsWith("не быть")); // false
console.log(str.startsWith("не быть", 9)); // true
