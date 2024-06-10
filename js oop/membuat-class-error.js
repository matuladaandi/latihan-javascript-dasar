class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total Parameter harus lebih dari 0",
        "numbers"
      );
    }
    let tot = 0;
    for (const number of numbers) {
      tot += number;
    }
    return tot;
  }
}

try {
  console.log(MathUtil.sum());
  console.log("not error");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(
      `Terjadi Error di field ${error.field} dengan error ${error.message}`
    );
  }
  console.log(`Terjadi error: ${error.message}`);
} finally {
  console.log("program is finish");
}
