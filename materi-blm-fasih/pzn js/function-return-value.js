function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say;
}

const result = sayHello("andi", "matulada");
console.log(result);

console.log(sayHello("a", "b"));

// function megReturn function lain yakni sayHello
function callFuncTes() {
  return sayHello("dodit", "budi");
}

console.log(callFuncTes());

function isContains(array, searchValue) {
  for (const element of array) {
    console.log(`element ke -> ${element}`);
    if (element === searchValue) {
      return true;
      
    }
  }
  return false;
}

console.log(isContains([1,2,3,4,5,6,7],3));
