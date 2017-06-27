class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(Class) {
  	let point = {};
    point.x = this.x + Class.x;
    point.y = this.y + Class.y;

    return point;
  }
}


console.log(new Point(1, 2).plus(new Point(23, 1)));
