function showLongestWord(sentence) {
  var arr = sentence.split(' ');
  console.log(arr);
  var result = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }
  console.log(result);
}

showLongestWord('Web Development Tutorial');
