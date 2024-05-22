// quantity di anggap sbg array jika menampung bnayak data
function sumFruit(nameFruit, ...quantity) {
  let total = 0;

  for (const iterator of quantity) {
    total += iterator;
  }
  console.log(`Total fruit ${nameFruit} = ${total}`);
}

sumFruit("appel", 1, 2, 5, 76, 9, 2);
sumFruit("banana", 1, 2, 5, 76, 19, 21);
sumFruit("melon", 0);
sumFruit();


// mengirim array ke rest parameter atau dsb spread syntax
sumFruit('Devil', ...[12,3,1,56,8]);

//! */ sumFruit('tesError',[1,34,6])  // hasilnya tidak akan benar

// oldArgument is kadarluasa
function oldArgument () {
    console.log(arguments);
}

oldArgument(1,2,4,56,7,8)