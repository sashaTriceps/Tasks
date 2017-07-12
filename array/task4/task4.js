function last(arr, n) {
  var arr1 = [];
  var s = arr.length - n;

  if (n == undefined) {
    return arr[arr.length - 1];
  }

  if (n > arr.length) {
    for (var i = 0; i < arr.length; i++) {
      arr1.push(arr[i]);
    }
  }

  if (n <= arr.length) {
    for (var i = s; i < arr.length; i++) {
      arr1.push(arr[i]);
    }
  }
  
  return arr1;
}

console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
