// &&, ||, !
// and,or,not

// and = kedua kondisi harus true,
// or = salah satu kondisi boleh true,
// not = kebalikannya

const age = 17;
const bisaNyetir = true;
const nyogok = true;

// yg pertama di cek kondisi yakni yg di dalam kurung,lalu nanti hasilnya akan
// di cek lagi kondisi nya dgn or ||
if ((age >= 17 && bisaNyetir) || nyogok) {
  console.log("bisa bikin SIM");
} else {
  console.log("oopps tidak bisa bikin sim");
}
