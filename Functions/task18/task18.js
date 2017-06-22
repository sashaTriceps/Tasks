Array.prototype.findNumber = function(num) {
  var middle = Math.floor(this.length/2);

  if (num == this[middle]) {
    return middle;
  }

  if (num < this[middle]) {
    return this.slice(0, middle).findNumber(num);
  }

  if (num > this[middle]) {
    return middle + this.slice(middle, this.length).findNumber(num);
  }
};

var l = [0,1,2,3,4,5,6];

console.log(l.findNumber(5));
