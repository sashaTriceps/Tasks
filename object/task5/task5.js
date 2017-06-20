function CylinderVolume(r, h) {
  this.r = r;
  this.h = h;
  this.volume = function() {
    return Math.PI * this.r*this.r * this.h;
  };
}

var cylinder = new CylinderVolume(2, 4);

console.log(cylinder.volume());
