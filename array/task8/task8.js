function getElem() {
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  var count = 0;
  var mf = 1;
  var n = '';

  for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) {
        count++;
      }
      if (mf < count) {
        mf = count;
        n = arr1[i];
      }
    }
    count = 0;
   }
   console.log(n + ' (' + mf + ' times' + ')');
}

getElem();
