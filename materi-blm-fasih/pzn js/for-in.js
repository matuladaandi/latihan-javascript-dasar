const person = {
  firstName: "andi",
  lastName: "lada",
  age: 24,
};

// for in hanya mengambil name property pada object,
//  sedangkan pada array index Nya
// property / variable di bawah ini utk menampung nilai dan
// object nya person
for (const property in person) {
  console.log(
    `'Name Property' ${property} : 'value Property' ${person[property]}`
  );
}
console.log(``);
console.log("=====WHILE=====");
// Tanpa For in atau menggunakan while

let keys = Object.keys(person);
let i = 0;

while (i < keys.length) {
  let prop = keys[i];
  console.log(`property ${prop} : value ${person[prop]}`);
  i++;
}
console.log(``);
console.log("=====FOR biasa=====");

// Tanpa For in atau menggunakan for saja
//  namun menggunakan let i di atas / pada while
for (let i = 0; i < keys.length; i++) {
  let p = keys[i];
  console.log(`property ${p} : val ${person[p]}`);
}


console.log(``);

const names = ["andi", "lia"];

for (const i in names) {
  console.log(`index ${i} : value ${names[i]}`);
}
