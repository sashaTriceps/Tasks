function calcDaysToNextChristmas() {
  var today = new Date();
  var nextChristmas = new Date(2018, 0, 7);
  var diff = nextChristmas - today;
  var answer = Math.round(diff/(86400*1000));

  console.log("Days to next Christmas: " + answer);
}

calcDaysToNextChristmas();
