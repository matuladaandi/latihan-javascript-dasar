const map = new Map();
map.set('Name', 'andi')
map.set('Address', 'Indonesia')

console.log(map);
console.log(map.get('Name')); // get value,dgn used key Name
console.log(map.get('Address')); // get value,dgn used key Address
console.log(map.get('no-keyTrue')); // undefined

map.forEach((key,value)=>console.log(`${key} : ${value}`))