var library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function getProp(arr, prop) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];
    for (var key in obj) {
      if (key == prop) {
        result.push(obj[key]);
      }
    }
  }
  console.log(result);
}

getProp(library, "title");
