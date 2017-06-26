function find_array_element(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
}

console.log(find_array_element([2, 5, 9, 6], 5));
