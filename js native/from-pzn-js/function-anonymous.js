// say itu variable
const say = function (nama) {
  console.log(`hallo ${nama}`);
};

say("andi");

function giveMeName (call) {
    call('jon')
}

giveMeName(say)  // output hallo oke-0
giveMeName(function  (nama) {
    console.log(`hii ${nama}`); // hii jon
})

// pembuatan param sbg anonymous function biasanya saat kasus sederhana