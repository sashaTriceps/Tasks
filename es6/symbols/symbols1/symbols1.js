let compose = Symbol('compose');

Function.prototype[compose] = function(func) {
  let that = this;
  return function(a) {
    return that.call(undefined, func(a));
  }
}

let roundedAbs = Math.round[compose](Math.abs)
console.log(roundedAbs(-5.5))
// → 6