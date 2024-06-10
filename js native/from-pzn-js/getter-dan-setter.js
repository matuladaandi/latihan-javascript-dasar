const person = {
  firstName: "andi",
  lastName: "matulada",
  // get fullName akan menjadi property
  // get itu utk mengambil
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // set untuk atur
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

person.fullName = "nur awalia";
console.table(person);

person.fullName = "sah brow";
console.table(person);
