document.body.addEventListener('load', rotateString('target'));

function rotateString(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

  setInterval(function () {
    text = text[text.length - 1] + text.slice(0, text.length - 1);
    textNode.data = text;
  }, 100);
}
