// inheritance disini sama seperti mengcopy isi dari class
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hello ${name} my name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  //   mengcopy content/isi Employee ke Manager
  // dan di assign di object this
  // Employee.call(this, firstName); // comment, Jk di nonAktifkan maka Manager() hanya memiliki lastName saja
  Employee.call(this, firstName);
}

const andy = new Manager("andi", "matulada");
console.log(andy);
