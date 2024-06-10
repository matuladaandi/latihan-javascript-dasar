// created class js version old
function Person(firstNames, lastNames) {
  this.firstName = firstNames;
  this.lastName = lastNames;

  this.sayHello = function (name) {
    console.log(`Hello ${this.firstName} ${this.lastName} my name is ${name}`);
  };
}

const and = new Person("andi", "matulada");

and.sayHello("lia");

const joz = new Person("andy", "lada");

joz.sayHello('joz')