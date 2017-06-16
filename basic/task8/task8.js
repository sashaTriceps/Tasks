function randomInteger() {
  var randomNumber = Math.round(Math.random()*(10 - 1) + 1);
  console.log(randomNumber);

  var userAnswer = +prompt('Type the integer between 1 to 10', 1);

  if (userAnswer == randomNumber) {
    alert('Good work!');
  } else {
    alert('Not matched');
  }
}

randomInteger();
