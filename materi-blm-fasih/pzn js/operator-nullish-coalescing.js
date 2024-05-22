// tanpa operator nullish

let param;
let data = param;

if (data === undefined || data == null) {
    data = 'value default ok';
}

console.log(data);


// menggunakan operator nullish
let element;
let obj = element ?? 'value default use nullish'

console.log(obj);


