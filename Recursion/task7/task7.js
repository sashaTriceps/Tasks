function isEven(n) {
  if (n < 0) {
    n = Math.abs(n);
  }
  if (n < 2) {
    if (n == 1) {
      console.log("не четное");
    } else {
      console.log('четное');
    }
  } else {
    isEven(n-2);
  }
}

isEven(-7);
