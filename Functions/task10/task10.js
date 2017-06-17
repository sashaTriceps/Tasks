function returnRow(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = '';
    for (var j = 0; j < n; j++) {
      (arr[i] == arr[j]) ? arr[i] += '1' : arr[i] += '0';
    }
  }
  console.log(arr);
}

returnRow(4);
