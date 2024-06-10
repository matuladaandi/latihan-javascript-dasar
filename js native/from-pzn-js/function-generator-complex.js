// lazy
function* createOdd(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`Yield ${i}`);
      yield i;
    }
  }
}

// rajin Array = rajin
function createOddArray(value) {
  const result = [];
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`Yield ${i}`);
      result.push(i);
    }
  }
  return result;
}

//  lazy
const numberOdd = createOdd(7);

// for (const number of numberOdd) {
//   console.log(number);
// }

// mwlakukan hanya ketika di panggil
console.log(numberOdd.next().value);
console.log(numberOdd.next().value);

// rajin
// langsung melakukan semua
// const numberOddArray = createOddArray(7);

// for (const number of numberOddArray) {
//   console.log(number);
// }
