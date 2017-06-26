function longest_common_starting_substring(arr) {
  var elem1 = arr[0];
  var elem2 = arr[arr.length-1];
  var i = 0;
  var length = elem1.length;

  while (i < length && elem1[i] === elem2[i]) {
    i++;
  }
  return elem1.slice(0, i);
}

console.log(longest_common_starting_substring(['go', 'google']));

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial']));

console.log(longest_common_starting_substring(['abcd', '1234']));
