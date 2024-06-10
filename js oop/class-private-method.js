class Person {
  constructor() {
    // initialize properties
  }

  say(name) {
    if (name) {
      return this.#sayWithName(name);
    } else {
      return this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.log(`Hello`);
  }
  #sayWithName(name) {
    console.log(`Hello ${name}`);
  }
}

const andi = new Person();
// andi.#sayWithName() // tidak bisa diakses krn private
andi.say("andi");
