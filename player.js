'use strict'

function Player(ctx, width, height) {
  
  var self = this;

  //declare Player variables
  self.ctx = ctx; 
  self.gameWidth = width;
  self.gameHeight = height;
  self.x = 25;
  self.y = 25;
  self.direction = null;

  drawPlayer(); 
  
  //define Player movement
  document.onkeydown = function(event){
  var movePress = event.key.toLowerCase();
    switch(movePress){
    case 'w': self.y -=25; //move up
    break;
    case 'd': self.x +=25; //move right
    break;
    case 's': self.y +=25; //move down
    break;
    case 'a': self.x -=25; //move left
    break;
    }

  //document.addEventListener('keydown', self.HandleKeyDown);

  updateCanvas(); 
  console.log(self.x + ", " + self.y);
  }


  //draw Player 
  function drawPlayer(){
    self.ctx.fillStyle = "green";  
    self.ctx.fillRect(self.x,self.y,50,100);
    }
  
  //functions
  function updateCanvas(){
  self.ctx.clearRect(0,0,self.gameWidth,self.gameHeight);
  drawPlayer(); 
  }
}

 


