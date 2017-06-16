function upperCase(sentence) {
  var arr = sentence.split(' ');
  console.log(arr);
  var arr2 = [];

  for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }

  var result = arr2.join(' ');
  console.log(result);
}

upperCase('the quick brown fox');
