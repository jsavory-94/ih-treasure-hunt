'use strict'

function Player(ctx, width, height) {
  
  var self = this;

  //put Player in game
  self.ctx = ctx; 
  self.gameWidth = width;
  self.gameHeight = height;
  
  //create Player
  var player = {
    x: 25,
    y: 25,
    moveUp:    function(){self.y+=25},
    moveRight: function(){self.x+=25},
    moveDown:  function(){self.y+-25},
    moveLeft:  function(){self.x+-25}
  }
  
  //draw Player 
    function drawPlayer() {
    self.ctx.fillStyle = "yellow";  
    self.ctx.fillRect(player.x,player.y,50,100);
    
    
  }

  drawPlayer(); 

}