{
  // object seal & freeze

  const person = {
    firstName: "andi",
    lastName: "matulada",
  };

  // Object.freeze(person); // tidak bisa di ubah kalau freeze(),dan tambah
  Object.seal(person); // tidak bisa menambah dan hapus

  person.firstName = "update";
  // person.middleName = 'tengah'
  delete person.lastName;

  // console.log(person.firstName);
  console.log(person);
}

console.log(`
==============================
`);

{
  // object Assign
  // target = mau dibikin kemana /copy ke mana
  // source = dari mana kita copy /

  const target = {
    // kalau ada yg sama property Nya nanti akan di timpa
    firstName: "andi",
  };

  const source = {
    lastName: "matulada",
  };

  Object.assign(target, source);
  console.log(target); // ada semua lastName & firstName krn sudah di copy kan
  console.log(source); // hanya ada lastName saja
}

console.log(`
==============================
`);

{
  // Object property name & value

  const person = {
    firstName: "andi",
    lastName: "matulada",
  };

  console.log(Object.values(person)); // value on object person
  console.log(Object.getOwnPropertyNames(person)); // name property on object person
}
