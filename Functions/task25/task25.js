function getLongestCountryName(arr) {
  var longestName = arr.reduce(function(result, name) {
    return result.length > name.length ? result : name;
  });

  console.log(longestName);
}

getLongestCountryName(["Australia", "Germany", "United States of America"]);
