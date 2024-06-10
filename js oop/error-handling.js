class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total Parameter harus lebih dari 0");
    }
    let tot = 0;
    for (const number of numbers) {
      tot += number;
    }
    return tot;
  }
}

try {
  // yg akan berhenti hanya di block try{} jika terjadi error

  // console.log(MathUtil.sum(1,2,3));    // not error
  console.log(MathUtil.sum());
  console.log("not error");
} catch (error) {
  // block catch{} = kalau terjadi error mau ngapian si!,
  // block catch{} akan di eksekusi kalau terjadi error

  console.log(`Terjadi error: ${error.message}`);
} finally {
  // kalau terjadi error maupun tidak block finally{} tetap akan di eksekusi

  console.log("program is finish");
}

console.log("continue");

console.log(`
---------------------`);

class Counter {
  #counter = 0;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
