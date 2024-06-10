function displayPerson({ firstName, lastName }) {
  console.log(firstName);
  console.log(lastName);
}

function sum([first, second]) {
  return first + second;
}

const person = {
  firstName: "andi",
  lastName: "matulada",
};

displayPerson(person);

console.log(sum([2, 3]));
console.log(sum([1, 8]));