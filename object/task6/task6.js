function BubbleSort(arr) {
  this.arr = arr;
  this.sort = function () {
  return this.arr.sort(function (a,b) {
    return a-b;
  });
};
}
var sortarr = new BubbleSort( [6,4,0, 3,-2,1]);
console.log(sortarr.sort());
