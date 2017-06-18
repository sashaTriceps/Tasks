function checkLonger(num, arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      result.push(arr[i]);
    }
  }

  console.log(result);
}

checkLonger(32, [11, 45, 4, 31, 64, 10]);
