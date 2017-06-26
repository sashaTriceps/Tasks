function filter_array_values(arr) {
  var newArr = arr.filter(function(item) {
    if (item !== false && item !== null && item !== 0 && item !== "") {
      return item;
    }
  });
  return newArr;
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
