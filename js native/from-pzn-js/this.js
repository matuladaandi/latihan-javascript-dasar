// this kalau di object dia akan dimiliki oleh pemilik object contoh object person

//  sedangkan di global maupun function dia dimiliki window

// output window
// console.log(this);

// output window
function sample() {
  console.log(this);

  // output window
  function inner() {
    console.log(this);
  }
  inner();
}

// sample();

// const person = {
//   name: "andi",
//   sayHello: function (name) {
//     console.log(this); // this mengacu pada name di person yakni andi
//   },
// };
const person = {
  name: "andi",
  sayHello: function (name) {
    console.log(`Hello ${name} aku adalah ${this.name}`);
  },
};

person.sayHello("lia");
