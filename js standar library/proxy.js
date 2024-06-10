/** 
 * proxy adalah fitur yg digunakan  sbg wakil data
dgn menggunakan proxy,semua interaksi  ke data akan 
 selalu melalui proxy terlebih dahulu

 proxy ibarat kan org ditengah2 jika mau berinteraksi
 
 */

//  target atas
const target = {
  middleName: "awalia",
};

const handler = {
  get: function (target, property) {
    console.log(`Access property : ${property}`);

    // you can add validate

    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Change property ${property} : ${value}`);

    // you can add validate
    if (value === null) {
      target[property] = "";
    } else {
      target[property] = value;
    }
  },
};

const proxy = new Proxy(target, handler);
// target maksud nya yg di object target = {} di atas
proxy.firstName = "andi";
/**  
 * 1. proxy akan mendelagasikan (firstName) property or attribute ke dalam handler nya,yg dimana handler akan memanggil set
 
 */
proxy.lastName = null;

console.log(proxy.firstName);
console.log(proxy.middleName);
console.log(proxy.lastName);

console.log(target);
