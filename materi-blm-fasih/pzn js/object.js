const person = {};

person["name"] = "andi";
person["age"] = 24;

console.table(person);

delete person["age"];

// console.log(person.name);
// console.log(person.age);

const person2 = {
  name: "lia",
  age: 20,
};

console.table(person2);

const person3 = {
  name: "dou",
  age: 30,
};

console.log(`Name : ${person3.name}`);
console.log(`Age : ${person3.age}`);
console.log(`Age : ${person3['name']}`);