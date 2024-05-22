const person = {
  firstName: "andi",
//   firstName: null,  // tetap true walau tidak ada isi Nya
  lastName: "lada",
};

const result = "firstName" in person; // true, karna ada properties Nya

console.log(`${result}`); // true
