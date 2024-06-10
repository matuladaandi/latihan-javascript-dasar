function sayHello(name) {
  console.log(`Hello ${name}`);
}

// let say = sayHello();  // sama seperti memanggil function sayHello() jika menambahkan () di variabel
let say = sayHello;

const sayAgain = sayHello();
console.log(sayAgain);

sayHello("andi");
say("lia");

function giveMeName(callback) {
  callback("jon"); // output jon
  // callback() // undefined
}

// giveMeName()  // error
giveMeName(sayHello); // output jon
giveMeName(say); // output jon

function cetakHello(call) {
  call("bud");
}

cetakHello(console.log);
