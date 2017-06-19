function range(a, b) {
  if (b - a === 2) {
    return [a+1];
  } else {
    var arr = range(a, b-1);
    arr.push(b-1);
    return arr;
  }
}

console.log( range(1, 4) );
