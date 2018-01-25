function Treasure(ctx, width, height) {

  var self = this;

  //declare Treasure variables
  self.ctx = ctx; 
  self.gameWidth = width;
  self.gameHeight = height;
  self.x = Math.floor(Math.random() * self.gameWidth);
  self.y = Math.floor(Math.random() * self.gameHeight);
} 