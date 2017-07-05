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

list[Symbol.iterator] = function() {
  let i = 0;
  return {
    next() {    
      while (i < 2) {
        if (i < 1) {
          head = list.head;
          i++;
          return {
            value: head,
            done: false 
          }
        } else {
          console.log(list);
          list = list.tail;
          if (list === null) {
            return {
              done: true
            }
          } else {
            return {
              value: list.head,
              done: false
            }
          }
        }
      } 
      return {done: true}
    }
  }
}

for (let elt of list) {
  console.log(elt);
} 