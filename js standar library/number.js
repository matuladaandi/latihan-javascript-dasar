console.log(`----- Static Property -----`);
// static property
const input = "1223";
const number = Number(input);

console.log(typeof input);
console.log(typeof number);

console.log(number);
console.log(Number("tes")); // NaN / Not a Number

console.log(Number.EPSILON);
console.log(Number. NaN);
console.log(Number.MAX_SAFE_INTEGER);

console.log(`
------- Static Method-------
`);
// static method
const data = Number('123');
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

console.log(`
------- Static Method-------
`);
// number instance method
const value = Number(12345)
// toString(2) 2 artinya binner 
console.log(value.toString(2));

// number local Indo
console.log(value.toLocaleString("id-ID"));

