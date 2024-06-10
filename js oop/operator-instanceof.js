// instanceof adalah  untuk cek apakah instance dari class tertentu dan bisa juga untuk cek turunan / extends dari class tertentu
// untuk penerapannya sama

class Employee {}
class Manager {}

const andi = new Employee();
const lia = new Manager();

console.log(typeof andi);
console.log(typeof lia);

console.log(andi instanceof Employee); // true
console.log(andi instanceof Manager); // false
console.log(`
`);
console.log(lia instanceof Manager); // true
console.log(lia instanceof Employee); // false
