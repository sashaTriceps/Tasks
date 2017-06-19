var obj = {
  name: "",
  age: "",
  sex: ""
};

function getProp() {
  var arr = [];

  for (var key in obj) {
    arr.push(key);
  }
  return arr;
}

console.log( getProp() );
