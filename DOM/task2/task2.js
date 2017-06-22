function getFormvalue() {
  var elem = document.getElementById('form1');

  for (var i = 0; i < elem.length; i++) {
    if (elem.elements[i].value != 'Submit') {
      console.log(elem.elements[i].value);
    }
  }
}
