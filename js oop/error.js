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

// console.log(MathUtil.sum());

const result = MathUtil.sum(1, 1, 1);
console.log(result);
