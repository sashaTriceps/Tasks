function getDay() {
  for (var i = 2014; i <= 2050; i++) {
    var date = new Date(i, 0, 1);
    if (date.getDay() === 0) {
      console.log('This is the 1st January is being a Sunday in: ' + i);
    }
  }
}

getDay();
