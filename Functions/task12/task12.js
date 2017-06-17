function checkPerfect(number) {
  var arr = [];
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }

  for (var j = 0; j < arr.length; j++) {
    sum += arr[j];
  }

  if (sum == number) {
    console.log('it is perfect number');
  } else {
    console.log('it is not perfect number');
  }
  console.log(sum);
  console.log(arr);
}

checkPerfect(8128);
