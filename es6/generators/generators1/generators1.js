class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }
}

let list = new List("x", new List("y", new List("z", null)))

list[Symbol.iterator] = function* () {
  let i = 1;
  yield list.head;
  
  while (i < 3) {
    list = list.tail;
    yield list.head;
    i++;
  }
}

for (let elt of list) console.log(elt)
// → x
//   y
//   z
