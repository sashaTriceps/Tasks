function getPairs(obj) {
  var pairs = [];

  for (var key in obj) {
    pairs.push([key, obj[key]]);
  }
  return pairs;
}

console.log( getPairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}) );
