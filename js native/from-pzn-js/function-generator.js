// generator ini sifatnya lazy
// kalau generator artinya bisa kita lakukan iteration

function* createNames () {
    yield 'andi';  // yield itu utk mengembalikan dataNya
    yield 'matulada';
    yield 'bud';
}

const names = createNames();

for (const name of names) {
    console.log(name);
}
