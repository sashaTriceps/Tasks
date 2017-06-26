function array_filled(n, elem) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr.push(elem);
  }

  return arr;
}

console.log(array_filled(3, 'default value'));

console.log(array_filled(4, 'password'));
