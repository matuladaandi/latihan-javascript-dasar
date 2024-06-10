// kata kunci this di arrow function itu mengacu ke window,
// sedangkan di anonymous function itu mengacu person misalnya di bawah

const person = {
  name: "andi",
  sayHello: (name) => console.log(`Hello ${name}`),
};

person.sayHello('lia')
