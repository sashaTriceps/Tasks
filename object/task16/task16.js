function getCopy(obj) {
  var copy = {};

  for (var key in obj) {
    copy[obj[key]] = key;
  }
  return copy;
}

console.log(getCopy({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
