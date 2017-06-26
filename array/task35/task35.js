function getRandomElem(arr) {
  var min = 0;
  var max = arr.length - 1;
  var i = Math.floor(min + Math.random() * (max - min));

  console.log(arr[i]);
}

getRandomElem([1,2,3,4,5,6]);
