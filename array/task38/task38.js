function move(arr, index, pos) {
  var startPos = 0;
  var nextPos = 0;

  if (index < 0 && pos < 0) {
    startPos = arr.length + index;
    nextPos = arr.length + pos;
  } else {
    startPos = index;
    nextPos = pos;
  }

  arr.splice(nextPos, 0, arr.splice(startPos, 1)[0]);

  return arr;
}


console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
