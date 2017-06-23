function sortArr(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  console.log(arr);
}

sortArr([3, 8, 7, 6, 5, -4, -3, 2, 1]);
