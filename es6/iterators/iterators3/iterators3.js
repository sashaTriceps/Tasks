class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }
  
  static from(arr) {
  	if (arr[Symbol.iterator]) {
      let result = {};
      arr.sort();
      for (let i = 0; i < arr.length; i++) {
        result.head = arr[i];
        if (result.head == 1) {
          result.tail = null;
        } else {
          result.tail = new List(arr[i-1], result.tail);
        } 
      }
      return result;
    }
  }
}

console.log(List.from([3, 2, 1]))
// → List{head: 3, tail: List{head: 2, tail: List{head: 1, tail: null}}}