function  filter(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== undefined && arr[i] !== 0 && arr[i] !== "" &&
    arr[i] !== false && !isNaN(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

filter([NaN, 0, 15, false, -22, '',undefined, 47, null]);
