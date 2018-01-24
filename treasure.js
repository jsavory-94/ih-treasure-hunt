function Treasure(ctx, width, height) {

  var self = this;

  //declare Treasure variables
  self.ctx = ctx; 
  self.gameWidth = width;
  self.gameHeight = height;
  self.x = Math.floor(Math.random() * self.gameWidth);
  self.y = Math.floor(Math.random() * self.gameHeight);


  self.draw = function() {
    self.ctx.fillStyle = "white";  
    self.ctx.fillRect(self.x - 25, self.y -25, 50, 50);
  }
  console.log("treasure location --- " + "x:" + self.x + ", " + "y:" + self.y);
}