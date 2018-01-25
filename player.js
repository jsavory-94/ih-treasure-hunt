'use strict'

function Player(ctx, width, height, ) {
  
  var self = this;

  //declare Player variables
  self.ctx = ctx; 
  self.gameWidth = width;
  self.gameHeight = height;
  self.x = width / 2;
  self.y = height / 2;
  self.direction = null;
  
  //define Player movement
  self.handleKeyDown = function(event) {
    var movePress = event.key.toLowerCase();
    switch(movePress) {
      case 'w': 
        self.y -=25; //move up
        break;
      case 'd':
        self.x +=25; //move right
        break;
      case 's':
        self.y +=25; //move down
        break;
      case 'a': 
        self.x -=25; //move left
        break;
    }

    if (self.x > self.gameWidth) {
      self.x = self.gameWidth;
    }

    if (self.x < 0) {
      self.x = 0;
    }

    if (self.y > self.gameHeight) {
      self.y = self.gameHeight;
    }

    if (self.y < 0) {
      self.y = 0;
    }

    console.log("player position --- x: " + self.x + ", " + "y: " + self.y);
  }

  addEventListener('keydown', self.handleKeyDown);


  //draw Player 
  self.draw = function () {
    self.ctx.fillStyle = "green";  
    self.ctx.fillRect(self.x - 10, self.y - 20, 20, 40);
  }


  self.destroy = function () {
    removeEventListener('keydown', self.handleKeyDown);
  }
  
}
