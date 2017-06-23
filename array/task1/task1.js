function isArray(str) {
  if (str.push) {
    console.log('array');
  } else {
    console.log('not array');
  }
}

isArray([1, 2, 3]);
