function getName(func) {
  func();
}

function sum(a, b) {
  var result = a + b;
  console.log(result);
}

getName( sum(2, 2) );
