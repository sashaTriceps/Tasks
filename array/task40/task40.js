function array_range(startElem, length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(startElem);
    startElem++;
  }

  return arr;
}


console.log(array_range(1, 4));
// [1, 2, 3, 4]
console.log(array_range(-6, 4));
// [-6, -5, -4, -3]
