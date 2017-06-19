function sumArrElem(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    var sum = arr.pop() + sumArrElem(arr);
    return sum;
  }
}

console.log( sumArrElem([1, 2, 3]) );
