function sortArr(arr) {

  function sort(a, b) {
    return a - b;
  }

  arr.sort(sort);
  console.log(arr);

  var arr2 = [];

  arr2.push(arr[arr.length-2]);
  arr2.unshift(arr[1]);
  console.log(arr2);
}

sortArr([1,15,17,3,4,2,34,76,8,99,100]);
