function sayHelloAgain(you) {
  console.log(`Hei ${you}`);
}

person = {
  name: "andi",
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
  sayHelloAgain: sayHelloAgain,
};

console.log(person.name);
console.log(person.sayHello("lia"));

console.log(person.sayHelloAgain("joki"));

// add method on object
person.sayOke = function sayOke(say) {
  console.log(`oke brow`);
};



// for(key in person){
//   console.log(`property : ${key} value : ${person[key]}`);
// }