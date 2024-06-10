function createAdder(value) {
  const owner = "andi"; // bundle or mengabungkan 

  function add(param) { // seoleh2 mengeluarkan function add
    console.log(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);
// seakan2 membuat seperti berikut
// function AddTwo (param) {
//     console.log('andi');
//     return 2 + param
// }

console.log(addTwo(2));  // output 4