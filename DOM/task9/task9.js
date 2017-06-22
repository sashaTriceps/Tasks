function getOptions() {
  var select = document.querySelector('#mySelect');
  var counter = 0;
  var arr = [];

  for (var i = 0; i < select.length; i++) {
    counter++;
    arr.push(select[i].value);
  }

  alert(counter + '\n' + arr);
}
