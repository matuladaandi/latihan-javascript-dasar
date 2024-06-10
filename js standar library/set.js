const set = new Set();

set.add("andi"); // hanya yg pertama yg diterima krn set sifatnya unix yakni data tdk boleh ada yg sama
set.add("andi");
set.add("matualda");

console.log(set);

set.forEach((value) => console.log(value));
