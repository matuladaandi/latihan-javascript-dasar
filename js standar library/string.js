// saat mengubah string, string aslinya/lama tidak akan berubah melainkan akan menciptakan string baru

const name = "M Andi Matulada"
console.log(name.length);
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.split(" "));

// remove space left and right
const input = "         input data      ";
console.log(input.trim());