function Treasure(ctx, width, height) {

  var self = this;

  //declare Treasure variables
  self.ctx = ctx; 
  self.gameWidth = width;
  self.gameHeight = height;
  self.x = Math.random() * self.gameWidth;
  self.y = Math.random() * self.gameHeight;


  function drawTreasure(){
    self.ctx.fillStyle = "yellow";  
    self.ctx.fillRect(self.x,self.y,50,50);
  }

  drawTreasure();
  console.log(self.x + ", " + self.y);
}