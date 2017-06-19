function getFibb(n) {
  if (n == 1) {
    return [0, 1];
  } else {
    var arr = getFibb(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

console.log( getFibb(8) );
