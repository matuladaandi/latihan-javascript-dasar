class MathUtil {
  static sum(...numbers) {
    let tot = 0;
    for (const number of numbers) {
      tot += number;
    }
    return tot;
  }
}

const result = MathUtil.sum(1,1,1);
console.log(result);
