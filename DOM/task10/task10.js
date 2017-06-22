function calc() {
  var radius = document.getElementById('r').value;

  var result = (4/3) * Math.PI * Math.pow(radius, 3);
  result = result.toFixed(3);

  console.log(result);
  document.getElementById('v').value = result;
}
