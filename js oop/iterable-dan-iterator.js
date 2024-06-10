// Iterator result,sesuai dng kontrak iterator result
class CounterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}
// CounterIterator sesuai dgn kontrak iterator
class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  //   kontrak iterator
  next() {
    // 2. ini
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

// create counter yg sesuai dengan kontrak iterable
class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }
  [Symbol.iterator]() {
    // 1. memanggil ini lalu
    return new CounterIterator(this.value, this.max);
  }
}

// example of use
const counter = new Counter(1, 10);
for (const value of counter) {
  console.log(value);
}
