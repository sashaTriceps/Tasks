function remove_array_element(arr, target) {
  var index = arr.indexOf(target);
  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}

console.log(remove_array_element([2, 5, 9, 6], 5));
