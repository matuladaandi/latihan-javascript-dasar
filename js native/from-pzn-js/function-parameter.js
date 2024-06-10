let firstName = 'M andi'
let lastName = 'Matulada'

// membuat function parameter,param itu optional
function sayHello(person1, person2) {
  console.log(`Hello ${person1} & ${person2}`);
}

// memanggil function wajib sertai () saat panggil,
sayHello("andi", "lia");
sayHello("and", "li");
sayHello(); // nilai defaultnya undefined
sayHello(null);

// argumenNya dari variabel
sayHello(firstName, lastName)