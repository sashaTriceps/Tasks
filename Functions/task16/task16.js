function uniqueChar(string) {
  var sortedStr = '';

  for (var i = 0; i < string.length; i++) {
    if (sortedStr.indexOf(string.charAt(i)) == -1) {
      sortedStr += string[i];
    }
  }

  console.log(string);
  console.log("-----------");
  console.log(sortedStr);
}

uniqueChar('thequickbrownfoxjumpsoverthelazydog');
