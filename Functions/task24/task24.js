function BubbleSort(arr) {
  console.log(arr);

  for (var i = 0; i < arr.length; i++ ) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var max = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = max;
      }
    }
  }

  console.log(arr);
}

BubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
