function sort(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

console.log( sort([34,7,23,32,5,62]) );
