function isObj(obj) {
  if (obj === null) {
    console.log("it is not an object");
  }
  if (obj === undefined) {
    console.log("it is object");
  } else {
    return true;
  }
}

function getPropValue(obj) {
  if (isObj(obj)) {
    return Object.values(obj);
  }
}

console.log(getPropValue(null));
