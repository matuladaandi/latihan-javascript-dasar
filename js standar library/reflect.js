const person = {};

/** 
 *  firstName  & lastName itu property utk object person dan 
 andi itu value untuk property firstName & matulada utk value dr property lastName
 */

Reflect.set(person, "firstName", "andi");
Reflect.set(person, "lastName", "matulada");

// Access
console.log(Reflect.get(person,"firstName"));
console.log(Reflect.get(person,"lastName"));

// cek apakah ada or tidak
console.log(Reflect.has(person,"lastName")); // true
console.log(Reflect.has(person,"middleName")); // false