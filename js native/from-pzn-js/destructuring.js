//  bungkus {} agar tidak conflict
//  ON ARRAY
{
  const names = ["andi", "matulada", "nur", "awa", "lia", 1, 3, 4];

  //  cara manual akses data di array
  //  const firstName = names[0];
  //  const lastName = names[1];

  // cara yg di remend
  let [firstName, lastName, ...others] = names;

  // others akan menangkap setelah value matulada
  console.log(firstName);
  console.log(lastName);
  console.log(others);
}

console.log("============================================================");

{
  //  ON OBJECT
  const person = {
    fName: "andi",
    lName: "matulada",
    address: {
      street: "jl. Lintas Sumbawa Bima-Dompu",
      city: "Dompu",
      country: "Indonesia",
    },
    hobby: ["coding", "game", "watch natural"],
    profileGirlFriend: [
      {
        name: "nurawalia",
        age: 22,
        hobbies: ["cooking", "studying"],
      },
      {
        address: {
          street: "jl. Lintas Sumbawa Bima-Dompu",
          city: "Dompu",
          country: "Indonesia",
        },
      },
    ],
    profileUniv: {
      andi: {
        profileUnivMan: ["UNDIPA", "PERINTIS KM7"],
      },
      lia: {
        profileUnivWoman: ["UNISMUH", "SULTAN ALLAUDIN"],
      },
    },
  };

  // langsung sebutkan nama property nya,tapi harus sama dengan nama property nya
  let {
    fName,
    lName,
    hobby,
    address: { street, city, country },
  } = person;
  console.log(fName);
  console.log(lName);
  console.log(hobby);

  console.log(street);
  console.log(city);
  console.log(country);

  console.log("--------------");

  //   console.log(address); // ERROR krn sudah di sudah mengakses di dlm nya yakni (street,city,country)

  const {
    profileGirlFriend: [
      { name: gfName, age: gfAge, hobbies: gfHobbies },
      { address: gfAddress },
    ],
  } = person;

  console.log(gfName);
  console.log(gfAge);
  console.log(gfHobbies);
  console.log(gfAddress.street);
  console.log(gfAddress.city);
  console.log(gfAddress.country);

  console.log("--------------");

  const {
    profileUniv: {
      andi: { profileUnivMan },
      lia: { profileUnivWoman },
    },
  } = person;

  const {
    profileUniv: { andi, lia },
  } = person;

  if (person.profileUniv.hasOwnProperty("andi")) {
    console.log("andi");
  }
  console.log(profileUnivMan);

  console.log(`
  `);

  if (person.profileUniv.hasOwnProperty("lia")) {
    console.log("lia");
  }
  console.log(profileUnivWoman);

}
