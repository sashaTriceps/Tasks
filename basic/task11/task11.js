function fCtoF(celsius) {
  var tempInC = celsius;
  var tempInF = tempInC * 9 / 5 + 32;
  console.log(tempInC +'\xB0C is ' + tempInF + ' \xB0F.');
}

function fFtoC(fahrenheit) {
  var tempInF = fahrenheit;
  var tempInC = (fahrenheit - 32) * 5 / 9;
  console.log(tempInF +'\xB0F is ' + tempInC + ' \xB0C.');
}

fCtoF(60);
fFtoC(120);
