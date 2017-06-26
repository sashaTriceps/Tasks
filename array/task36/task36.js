function array_filled(n, elem) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr.push(elem);
  }

  return arr;
}

console.log(array_filled(6, 0));

console.log(array_filled(4, 11));
