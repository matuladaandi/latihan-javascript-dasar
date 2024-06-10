{
  // symbol
  // const firstName = Symbol("optional-Deskripsi")
  // const firstName = Symbol()

  const firstName = Symbol("firstName");
  const lastName = Symbol("lastName");

  const person = {};
  person[firstName] = "andi";
  person[lastName] = "matulada";

  console.log(person);
}

{
  // symbol for
  console.log(Symbol.for("firstName") === Symbol.for("firstName"));

  const person = {};
  person[Symbol.for("firstName")] = "nur";
  person[Symbol.for("lastName")] = "awalia";

  console.log(person[Symbol.for("firstName")]);
  console.log(person[Symbol.for("lastName")]);
}
