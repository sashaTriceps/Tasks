function union(arr1, arr2) {
  var result = [];

  if (arr1.length < arr2.length && arr1.length == arr2.length) {
    for (var i = 0; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
    for (var x = 0; x < arr1.length; x++) {
      if (result.indexOf(arr1[x]) == -1) {
        result.push(arr1[x]);
      }
    }
  } else {
    for (var j = 0; j < arr1.length; j++) {
      result.push(arr1[j]);
    }
    for (var y = 0; y < arr2.length; y++) {
      if (result.indexOf(arr2[y]) == -1) {
        result.push(arr2[y]);
      }
    }
  }

  result.sort(function(a, b) {
    return a - b;
  });

  console.log(result);
}

union([100, 2, 1, 10], [1, 2, 3, 4]);
