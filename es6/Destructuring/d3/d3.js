let detectCollision = (object, point) => object.find(item => {
  (point.x >= item.x && point.x <= item.x + item.width &&
  point.y >= item.y && point.y <= item.y + item.height)
  return item;
});
  

const myObjects = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

console.log(detectCollision(myObjects, {x: 4, y: 2}))
