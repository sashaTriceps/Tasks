function first(arr, n) {
  var arr1 = [];

  if (n == undefined) {
    return arr[0];
  }

  if (arr.length == 0) {
    return arr;
  }

  if (n > arr.length) {
    for (var i = 0; i < arr.length; i++) {
      arr1.push(arr[i]);
    }
  }

  if (n <= arr.length) {
    for (var i = 0; i < n; i++) {
      arr1.push(arr[i]);
    }
  }
  
  return arr1;
}

console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
