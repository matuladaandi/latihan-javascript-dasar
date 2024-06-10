//  Regex defaultNya case sensitive

{
  // create regex / regular expression

  const regex1 = /andi/; // mencari kata andi
  const regex2 = new RegExp("andi");
  const regex3 = new RegExp(/andi/);
}

{
  // test regex

  const name = "ndi matulada ndi joz";
  const regex = /joz/;

  const result = regex.exec(name); // name diatas
  console.log(result); // output nya dlm bentuk array
  console.log(regex.exec("not ada")); // null

  // test ada or not
  const test = regex.test(name);
  console.log(test);
  console.log(regex.test("not ada")); // false
}

console.log(`
regex modifier
`);

{
  // regex modifier

  const name = "andi matuada\n nurawalia\n joz Andi Matulada";

  const regex1 = /andi/g; // utk pencarian g = Global

  //   const regex1 = new RegExp(/andi/, "g");

  const regex2 = /Matulada/gi; // i = incase sensitive = TIDAK SENSITIVE

  let result;
  while ((result = regex1.exec(name)) !== null) {
    console.log(result);
  }
}

console.log(`
 advance regex
`);

{
  // advance regex
  const regex = /ek[ioaeu]/gi; // depan NYa 'ek' dan 'i o a e u'

  const name = "eko eki eka eku ake edo eki edo";
  let result;
  while ((result = regex.exec(name)) !== null) {
    console.log(result);
  }
}

console.log(`
next new
`);

{
    //  penggunaan regex di string
  const name = " edu eko eki eka eku ake edo eki edo";

  console.log(name.match(/ek[ioaeu]/gi));
  console.log(name.search(/ek[ioaeu]/gi)); // index ke 5

  console.log(name.replace(/ek[ioaeu]/i, "kamu")); // boleh Global dan tidak

  console.log(name.replaceAll(/ek[ioaeu]/ig, "kamu")); // wajib Global kalau tdk akan error

  console.log(name.split(/e/ig)); // e di happus
}
