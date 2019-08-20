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

/* Classes, properties and methods */

/* class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Max";
    this.gender = "female";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender(); */

// ES7, constructor удаляем
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
