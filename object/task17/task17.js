function getProp(obj, prop) {
  var flag = false;

  for (var key in obj) {
    if (key == prop) {
      flag = true;
    }
  }
  return flag;
}

console.log( getProp({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, 'green') );
