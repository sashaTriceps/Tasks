var i = 0;
var arr = [];

function add() {
  var text = document.querySelector('#text').value;

  arr[i] = document.querySelector('#text').value;
  i++;

  console.log(arr);
  document.querySelector('#text').value = "";
}

function display() {
  var e = "<hr/>";

  for (var j = 0; j < arr.length; j++) {
    e += 'Element ' + i + " = " + arr[j] + "<br/>";
  }
  document.querySelector('#res').innerHTML = e;
}
