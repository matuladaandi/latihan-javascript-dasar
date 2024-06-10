// kalau membuat method di constructor itu sama aja akan menempel di instance object nya, best practice nya di letakn di class
class Person {
  constructor(name) {
    console.log(`membuat person ${name}`);
  }

  //   letak method sayHello,akan otomatis di prototype
  sayHello(name) {
    console.log(`Hello ${name} my name is ${this.name}`);
  }
}

const andy = new Person("andy");
console.log(andy);

andy.sayHello("andix");
