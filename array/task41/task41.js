function rangeBetwee(startElem, endElem) {
  var arr = [];

  for (var i = startElem; i <= endElem; i++) {
    arr.push(i);
  }

  return arr;
}


console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
