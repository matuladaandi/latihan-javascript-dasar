const person = {};

// let country;

// tanpa optional chaining
// if (person.address !== undefined && person.address !== null) {
//   country = person.address.country;
// }


// menggunakan optional chaining

//  jika tdk ada person,maka akses address,jika tidk ada lg maka akses country namum dlm hal ini country tidak ada atau undefined

let country = person?.address?.country; // undefined





console.log(`${country}`);
