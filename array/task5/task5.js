function joinElem(arr) {
  var str1 = arr.join('+');
  var str2 = arr.join(',');

  console.log(str1);
  console.log(str2);
}

joinElem(["Red", "Green", "White", "Black"]);
