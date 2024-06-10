// DEFAULT VALUE PADA ARRAY
const names = ["andi", "matulada"];

const [firstName, lastName, girlfriend = "lia"] = names; // value default girlfriend = lia.
// jika ada value di array names index ke-2 yakni setelah matulada, maka value default nya tidak dipakai

console.log(firstName);
console.log(lastName);
console.log(girlfriend);

console.log(`
`);

// DEFAULT VALUE PADA OBJECT

const person = {
  name: "andi",
  age: 24,
};

const { name, age, hobby = "coding" } = person;

console.log(name);
console.log(age);
console.log(hobby);
