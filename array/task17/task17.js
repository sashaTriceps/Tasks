function shuffle(arr) {
  arr.sort(function(a, b) {
    return Math.random() - 0.5;
  });

  console.log(arr);
}

shuffle([1,2,3,4,5,6]);
