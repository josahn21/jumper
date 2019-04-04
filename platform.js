function platform() {
  this.x = Math.floor(Math.random()*w);
  this.y = Math.floor(Math.random()*h);
  
  this.show = function() {
    fill(color("orange"));
    rect(this.x, this.y, 50,50);
  }
}