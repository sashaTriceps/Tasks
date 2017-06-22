function checkPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');

  if (str == reverseStr) {
    console.log('Палиндром');
  } else {
    console.log('не палиндром');
  }
}

checkPalindrome('wqw');
