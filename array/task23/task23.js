function difference(arr1, arr2) {
  var result = [];

  arr1 = arr1.toString().split(",");
  arr2 = arr2.toString().split(",");

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      result.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) == -1) {
      result.push(arr2[j]);
    }
  }

  result.sort(function(a, b) {
    return a - b;
  });

  console.log(result);
}

difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);
