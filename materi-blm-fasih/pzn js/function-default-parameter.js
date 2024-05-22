let age2 = 22;

function register(name, age = "DEFAULT UNKNOT") {
  console.log(`nama : ${name} umur : ${age}`);
}

register("andi", 24);
register("lia", 21);

register("a", undefined); // DEFAULT UNKNOT
register("b", null); // null

register();

register('c',age2 += 2);
