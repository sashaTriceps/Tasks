var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function getArr(arr) {
  var elem = '';
  var arr1 = [];

  for (var i = 0; i < arr.length; i++) {
    arr1 = arr[i];
    console.log('row ' + i);
    for (var j = 0; j < arr1.length; j++) {
      console.log(arr1[j]);
    }
  }
}

getArr(a);
