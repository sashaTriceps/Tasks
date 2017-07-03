class MyMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    return this.map.set(key, value);
  }

  get(key) {
    return this.map.get(key);
  }

  delete(key) {
    this.map.delete(key);
  }

  get size() {
    return this.map.size;
  }

  clear() {
    this.map.clear();
  }
}

const names = new MyMap
names.set(Array, "the array constructor")
names.set(Math, "the math object")
console.log(names.get(Array))
// → "the array constructor"
console.log(names.size)
// → 2
names.delete(Array)
console.log(names.get(Array))
// → undefined
names.clear()
console.log(names.get(Math))
// → undefined