function getLastElem(arr, n) {
  var arr1 = [];
  var s = arr.length - n;

  for (var i = s; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  console.log(arr1);
}

getLastElem([1, 2, 3, 4, 5, 6], 3);
