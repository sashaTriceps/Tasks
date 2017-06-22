function Clock() {
  this.time = setInterval(function() {
    this.date = new Date();
    console.log(this.date.getHours() + " : " + this.date.getMinutes() + " : " + this.date.getSeconds());
  }, 1000);
}

var clock = new Clock();

clock.time();
