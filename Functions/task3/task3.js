function generateComb(str) {
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = i+1; j < str.length+1; j++) {
      arr.push(str.slice(i, j));
    }
  }
  console.log(arr);
}

generateComb('dog');
