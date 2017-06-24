function sum(arr) {
  var sum = 0;
  var p = 1;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    p *= arr[i];
  }

  console.log(sum);
  console.log(p);
}

sum([1, 2, 3, 4, 5]);
