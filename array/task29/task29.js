function num_string_range(start, end, step) {
  var result = [];
  var str = "";

  if (typeof(start) == "number" && typeof(end) === "number") {
    if (start > end) {
      for (var i = start; i > end - step; i -= step) {
        result.push(i);
      }
      // result.reverse();
    } else {
      for (var j = start; j < end; j += step) {
        result.push(j);
      }
    }
  }

  if (typeof(start) == "string" && typeof(end) === "string") {
    var startCode = start.charCodeAt();
    var endCode = end.charCodeAt();

    if (startCode > endCode) {
      for (var x = startCode; x > endCode; x -= step) {
        result.push(String.fromCharCode(x));
      }
      // result.reverse();
    } else {
      for (var y = startCode; y < endCode; y += step) {
        result.push(String.fromCharCode(y));
      }
    }
  }

  return result;
}

console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));
