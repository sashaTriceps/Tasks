function readStatus(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].title + " | " + arr[i].author + " | " + arr[i].readingStatus);
  }
}

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

readStatus(library);
