function replace(array, from, to, ...elements) {
  array.splice.apply(array, [from, to - from].concat(elements))
}

let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, 3, 4, 5)
console.log(testArray)

function copyReplace(array, from, to, ...elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to))
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, 3, 4, 5))

let birdsSeen = []
function recordBirds(time, ...arr) {
  birdsSeen.push({time, birds: Array.prototype.slice.call(arr)})
}

recordBirds(new Date, "sparrow", "robin", "pterodactyl")
console.log(birdsSeen)