function sum(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < i+2; j++) {
      if (arr[i] + arr[j] == target) {
        console.log("out : " + i + ", " + j);
      }
    }
  }
}
 sum([10,20,10,40,50,60,70], 50);
