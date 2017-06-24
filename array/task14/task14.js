function deleteElem(arr) {
  var arr1 = [];

  arr.filter(function(elem , i, arr) {
    if (i == arr.indexOf(elem)) {
      arr1.push(arr[i]);
    }
  });
  console.log(arr1);
}

deleteElem([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]);
