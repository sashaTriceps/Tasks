function getDuplicate(arr) {
  var result = [];
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    result.push(i);
  }
  console.log(result);
}

getDuplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);
