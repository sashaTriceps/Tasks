function getDate() {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var date = new Date();
  var today = date.getDay() - 1;
  console.log('Today is: ' + days[today] + '.');

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var meridiem = (hours >= 12) ? ' PM ':' AM ';
  hours = (hours >= 12) ? hours - 12 : hours;

  console.log('Current time is: ' + hours + ' ' + meridiem + ' : ' + minutes + ' : ' + seconds + '.');
}

getDate();
