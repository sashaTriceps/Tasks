function determineYear() {
  var year = +prompt('Type a Year.');
  var answer = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

  console.log(answer);
}

determineYear();
