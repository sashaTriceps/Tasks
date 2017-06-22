function highlight() {
  var str = document.getElementsByTagName('strong');
  for (var i = 0; i < str.length; i++) {
    str[i].style.color = 'red';
  }
}

function return_normal() {
  var str = document.getElementsByTagName('strong');
  for (var i = 0; i < str.length; i++) {
    str[i].style.color = '';
  }
}
