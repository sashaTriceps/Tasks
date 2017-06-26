var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

function merge_array(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var result = [];

  for (var i = 0; i < newArr.length; i++) {
    if (result.indexOf(newArr[i]) == -1) {
      result.push(newArr[i]);
    }
  }

  console.log(result);
}


merge_array(array1, array2);
