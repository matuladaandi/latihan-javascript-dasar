class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.log(`Hello ${name} my name is Employee ${this.firstName}`);
  }
}
class Manager extends Employee {
  // saat MEMBUAT constructor di CHILD class,maka kita wajib memanggil constructor di parent class nya yakni Employee,kalau tdk memanggil akan terjadi error.

  // cara memanggil constructor diparent nya,yakni dgn keyword "super" dan hanya boleh di dalam constructor nya
  // contoh :
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(name) {
    console.log(
      `Hello ${name} my name is Manager ${this.firstName} ${this.lastName}`
    );
  }
}

const andi = new Employee("andi");
andi.sayHello("lia");

const awalia = new Manager("awalia", "andi");
awalia.sayHello("matulada");
