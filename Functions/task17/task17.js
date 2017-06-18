function calcOccurrences(str) {
  var arr = str.split('');
  var obj = {};

  console.log(arr);

  for (var i in arr) {
    (obj[arr[i]] !== undefined) ? (obj[arr[i]]++) : (obj[arr[i]] = 1);
  }

  console.log(obj);

}

calcOccurrences("The quick brown fox jumps over the lazy dog");
