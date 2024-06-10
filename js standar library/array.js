{
  const arrayName = ["andi", "matulada", "nurawalia"];

  //  singkat snippet nya
  // arrayName.forEach(element => {
  //     console.log(element);
  // });

  arrayName.forEach(function (value, index) {
    console.log(`${index} : ${value}`);
  });

  console.log("------------");

  arrayName.forEach((value, index) => console.log(`${index} : ${value}`));

  console.log("------------");

  arrayName.forEach((value) => console.log(value));
}

console.log("------Queue------");

{
  // Array queue,sifatnya FIFO(first in first out)
  const queue = [];

  queue.push("Muh");
  queue.push("Andi");
  queue.push("Matulada");

  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
}

console.log("------Stack------");

{
  // Stack Sifanya LIFO(last in first out)
  const stack = [];

  stack.push("Muh");
  stack.push("Andi");
  stack.push("Matulada");

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}

console.log("------Array Search------");

{
  // Array search
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3)); // 4
  console.log(source.findIndex((value) => value > 3)); // 3
  console.log(source.includes((value) => value > 7)); // false
  console.log(source.indexOf(5)); //
  console.log(source.lastIndexOf(5)); // 9
}

console.log("------Array Filter------");

{
  // Array filter
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(numbers.filter((val) => val % 2 == 1));
  console.log(numbers.filter((val) => val % 2 == 0));
}

console.log("------Array Transform------");

{
  // Array Transform
  const names = ["Muh", "andi", "matulada"];

  // Tiap valueNya di Transform menjadi Uppercase
  const namesUpper = names.map((value) => value.toUpperCase());
  console.log(namesUpper);

  // dari kiri ke kanan
  const namesReduce = names.reduce((before, value) => before + " " + value);
  console.log(namesReduce);

  // dari Kanan ke kiri
  const namesReduceRight = names.reduceRight(
    (before, value) => before + " " + value
  );
  console.log(namesReduceRight);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const total = numbers.reduce((before, value) => before + value);
  console.log(total);
}
