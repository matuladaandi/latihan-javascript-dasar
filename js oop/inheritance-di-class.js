

class Employee {
  sayHello(name) {
    console.log(`Hello ${name} my name is Employee ${this.name}`);
  }
}
class Manager extends Employee {
  sayHello(name) {
    console.log(`Hello ${name} my name is Manager ${this.name}`);
  }
}

// akan mengecek keberadaan di instance object dulu,baru ke class nya,lalu di class extends nya

const andi = new Employee();
andi.name = 'andi' // class---

const awalia = new Manager();
awalia.name = 'awalia'
awalia.sayHello('matulada')