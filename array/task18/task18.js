function binarySearch(arr, item) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var half = Math.floor(arr.length / 2);

  if (item < arr[half]) {
    for (var i = 0; i < half; i++) {
      if (item == arr[i]) {
        return i;
      }
    }
  } else {
    for (var j = half; j < arr.length; j++) {
      if (item == arr[j]) {
        return j;
      }
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 9));
