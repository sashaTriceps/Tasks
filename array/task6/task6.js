function func(num) {
  var str = num.toString();
  var res = [str[0]];

  for (var i = 1; i < str.length; i++) {
    if ((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)) {
      res.push('-', str[i]);
    } else {
      res.push(str[i]);
    }
  }
  var result = res.join('');
  console.log(result);
}

func(123444556);
