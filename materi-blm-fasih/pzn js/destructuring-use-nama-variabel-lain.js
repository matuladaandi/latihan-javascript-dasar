const person = {
  firstName: "andi",
  lastName: "lada",
};

const {
  firstName: nDepan,
  middleName: nTengah = "matu",
  lastName: nAkhir,
} = person;

// console.log(firstName); // ERROR krn sudah di ganti dgn nDepan

console.log(nDepan);
console.log(nTengah);
console.log(nAkhir);
