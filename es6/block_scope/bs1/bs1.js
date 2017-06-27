// решение для es6

var callbacks = [];
for (let i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) });
}

callbacks[2]();

// решение для es5

var callbacks = [];
for (var i = 0; i < 10; i++) {
  (function(i) {
    callbacks.push(function() { console.log(i) })
  })(i);
}

callbacks[2]();
