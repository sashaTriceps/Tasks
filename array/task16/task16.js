function getLeapYear(start, end) {
  var arr = [];
  var leap = [];

  for (var i = start; i < end; i++) {
    arr.push(i);
  }

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] % 4 === 0 && arr[j] % 100 !== 0) {
      leap.push(arr[j]);
    } else if (arr[j] % 400 === 0) {
      leap.push(arr[j]);
    }
  }
  console.log(leap);
}

getLeapYear(1996, 2017);
