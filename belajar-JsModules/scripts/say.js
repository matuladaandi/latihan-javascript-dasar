//  WITH MODULE
export function sayHello(name) {
  console.log(`Hello ${name}`);
}

export function sayGoodBye(name) {
  console.log(`Good Bye ${name}`);
}

// tidak di export jadi tidak bisa digunakan
const name = "budy";
