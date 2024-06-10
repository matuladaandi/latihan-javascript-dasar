class Person {
  constructor(name) {
    console.log(`membuat person ${name}`);
  }
}

const andy = new Person("andy"); // andy di tangkap oleh constructor
console.log(andy);
