function isArray(str) {
  if (Array.isArray(str)) {
    console.log('array');
  } else {
    console.log('not array');
  }
}

function isArray2(str) {
  if (Array.prototype.constructor === str.__proto__.constructor) {
    console.log('array');
  } else {
    console.log('not array');
  }
}

isArray([1, 2, 3]);
isArray2([1, 2, 3]);