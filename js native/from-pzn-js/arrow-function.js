const sayHello = (name) => {
  const say = `Hello ${name} =>`;
  console.log(say);
};

sayHello("andi");

const tesConnect = () => console.log(`connected is ok`);
// const tesConnect = (conn) => console.log(`connected is ok`);
console.info(tesConnect());

const sum = (first, second) => first + second;
console.log(sum(2, 7));

// arrow function tanpa tanda () jika hanya 1 param
const sayAgain = (name) => console.log(`Hello Again ${name}`);
// const sayAgain2 = name,te => console.log(`Hello Again ${name}`); // ERROR
sayAgain("lia");

// arrow function sebagai param
function giveMeName(callback){
    callback('joz')
}
giveMeName((name)=>console.log(`hozz ${name}`) )  // OUTPUT hozz joz