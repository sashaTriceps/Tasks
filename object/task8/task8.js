function Clock() {
  this.date = new Date();
  this.hours = this.date.getHours();
  this.minutes = this.date.getMinutes();
  this.seconds = this.date.getSeconds();
}

Clock.prototype.run = function() {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype.update = function() {
  this.updateTime(1);
  setInterval(this.run.bind(this), 1000);
};

Clock.prototype.updateTime = function(sec) {
  this.seconds += sec;

  if (this.seconds >= 60) {
    this.minutes++;
    this.seconds = 0;
  }

  if (this.minutes >=60) {
    this.hours++;
    this.minutes = 0;
  }

  if (this.hours >= 24) {
    this.hours = 0;
  }
};

var clock = new Clock();

clock.update();
