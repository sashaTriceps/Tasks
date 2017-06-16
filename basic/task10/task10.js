document.getElementById('mul').addEventListener('click', mul);
document.getElementById('div').addEventListener('click', div);

function mul() {
  var a = document.getElementById('first').value;
  var b = document.getElementById('second').value;
  var result = a * b;
  document.getElementById('result').innerHTML = result;
}

function div() {
  var a = document.getElementById('first').value;
  var b = document.getElementById('second').value;
  var result = a / b;
  document.getElementById('result').innerHTML = result;
}
