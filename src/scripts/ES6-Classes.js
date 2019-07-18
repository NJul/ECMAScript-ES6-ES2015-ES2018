// ES6 Classes Prototypal Inheritance
function Employee(id) {
  this.id = id;
}
Employee.prototype.showId = function() {
  console.log(`My id number is ${this.id}`);
};

const John = new Employee(23);
console.log(John);
John.showId();

function Manager(name, department) {
  this.name = name;
  this.department = department;
}

Manager.prototype.callMeeting = function() {
  console.log(`I'm calling a meeting`);
};

/* У Сары есть метод callMeeting */
const Sara = new Manager("Sara", "sales");
Sara.callMeeting();
console.log(Sara);
