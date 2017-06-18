function generator(num) {
  var id = "";
  var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < num; i++) {
    id += list[Math.round(Math.random() * list.length)];
  }

  console.log(id);
}

generator(20);
