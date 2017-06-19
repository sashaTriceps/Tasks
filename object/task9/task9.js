function Calc(r) {
  this.r = r;

  this.area = function(r) {
    return Math.PI * (this.r * this.r);
  };

  this.perimeter = function(r) {
    return 2 * Math.PI * this.r;
  };
}

var circle = new Calc(5);

console.log( circle.area() );
console.log( circle.perimeter() );
