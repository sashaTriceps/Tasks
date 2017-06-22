Object.prototype.getProp = function() {
  var arr = [];

  for (var key in this) {
    arr.push(key);
  }
  return arr;
};

function Animal(name) {
  this.name = name;
  this.speed = 0;
}

var snake = new Animal(snake);

console.log(snake.getProp());
