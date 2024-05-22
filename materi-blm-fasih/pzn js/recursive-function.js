// factorial loop
function factorialLoop(v) {
  let result = 1;
  for (let i = 1; i <= v; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialLoop(5));
console.log(1 * 2 * 3 * 4 * 5);

// factorial menggunakan recursive function
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

console.info(factorialRecursive(9));

function kurangValue(value) {
  if (value < 1) {
    return;
  } else {
    console.log(value);
    kurangValue(value - 1);
  }
}

// console.log(kurangValue(5));

function angkUrut (value,current = 1) {
  if (current > value) {
    return
  }else{
    console.log(current);
    angkUrut(value,current+1)
  }
}

console.log(angkUrut(5));
