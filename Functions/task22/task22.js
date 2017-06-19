function countNumberOfOccurrences(string, letter) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      count += 1;
    }
  }

  console.log(letter + " : " + count);
}

countNumberOfOccurrences('wwwwwwwweeew', 'w');
