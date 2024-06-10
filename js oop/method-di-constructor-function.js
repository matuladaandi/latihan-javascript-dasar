// created class js version old
function Person() {
  this.firstName = "";
  this.lastName = "";
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.lastName}`);
  };
}

// semua property/field/attribute dan method/function yg di miliki oleh class Person() akan dimiliki jg oleh object yang terbuat dari class Person

// and adalah nama object dari class Person
const and = new Person();
and.lastName = "matulada";
and.sayHello("joz");

const lia = new Person();
lia.lastName = "lia";
lia.sayHello("andi");
