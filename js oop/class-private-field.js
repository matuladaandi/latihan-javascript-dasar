class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }
  decrement() {
    this.#counter--;
  }
  get() {
    return this.#counter;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();

// counter.#counter = 1010 //ERROR

console.log(counter.get());
console.log(counter);
