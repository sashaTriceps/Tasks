function func(num) {
  console.log(num);
  var str = String(num);

  var result = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0 && str[i+1] % 2 === 0) {
      result.push(str[i], '-');
    } else {
      result.push(str[i]);
    }
  }

  return result.join('');
}

console.log(func(225468));
