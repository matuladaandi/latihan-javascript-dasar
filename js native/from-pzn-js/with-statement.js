const person = {
  name: "andi",
  age: 24,
};

// tanpa with statement
console.log(person.name);
console.log(person.age);

console.log('======Batas========');

// menggunakan with statement
// namun no rekomed
with (person) {
  console.log(name);
  console.log(age);
}
