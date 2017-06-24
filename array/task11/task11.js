function func(arr) {
  var i = arr.length;
  var sum = 0;

  while(i--) {
    sum += Math.pow(arr[i], 2);
  }

  return sum;
}

console.log( func([1, 2, 3, 4, 5]) );
