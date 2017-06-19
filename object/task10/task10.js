function Sort() {
  this.sortArr = function(arr) {
    for (var obj in arr) {
      Object.keys(obj).sort();
    }
    return arr;
  };
}

var array = new Sort();

var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

console.log( array.sortArr(library) );
