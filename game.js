'use strict'

//---put Game in Index---
function Game (mainElement) {
  var self = this;

  self.score = 0;
  self.finished = false;
  
  //---declare variables of game---
  self.mainElement = mainElement;
  self.width = window.innerWidth;
  self.height = window.innerHeight;
  
  //---create dom elements of game---

  //--dom elements (map) --
  self.gameCanvas = document.createElement('canvas');
  self.gameCanvas.width = self.width;
  self.gameCanvas.height = self.height; 
  self.ctx = self.gameCanvas.getContext('2d');
  mainElement.appendChild(self.gameCanvas);

  //--dom elements (items)--
  self.player = new Player(self.ctx, self.width, self.height);
  self.treasure = new Treasure(self.ctx, self.width, self.height);
  //self.dig = new Dig();
  self.hintMessages = ["cold", "chilly", "warm", "hot"]

  //---logic---

  function getDistance(treasure) {
    var pythagorasA = self.player.x - self.treasure.x
    var pythagorasB = self.player.y - self.treasure.y
    return Math.sqrt(Math.pow(pythagorasA,2) + Math.pow(pythagorasB,2));
  }

  function getMessage(distance) {
    if (distance < 150){
      return self.hintMessages[3];
    }
    else if (distance < 350){
      return self.hintMessages[2];
    }
    else if (distance < 500){
      return self.hintMessages[1];
    }
    else {
      return self.hintMessages[0];
    }
  }

  self.giveHint = function() {
    self.score--;
    var distance = getDistance(self.treasure);
    var message = getMessage(distance);
    console.log(message);
  }

  self.dig = function() {
    var distance = getDistance(self.treasure);
    if (distance < 100) {
      self.score += 10;
      self.treasure = new Treasure(self.ctx, self.width, self.height);
    }
    else {
      self.score -= 5;
    }
  }

  self.handleKeyDown = function(event) {
    var key = event.key.toLowerCase();
    if (key === 'f'){
      self.giveHint();
    }
    if (key === 'v'){
      self.dig();
    }
  }

  addEventListener('keydown', self.handleKeyDown);

  function updateCanvas() {

    self.ctx.clearRect(0, 0, self.width, self.height);

    self.player.draw();
    self.treasure.draw();

    self.ctx.font = '24px serif';
    self.ctx.textAlign = "left";
    
    self.ctx.fillText('Score: ' + self.score, 20, 20);
    
    self.ctx.textAlign = "right"; 
    self.ctx.fillStyle = 'blue';
    self.ctx.fillText('Score: ' +self.score, width - 20, 20);

    // todo if (!self.finished)
    window.requestAnimationFrame(updateCanvas);
  }

  window.requestAnimationFrame(updateCanvas);

  // ---functions
  self.destroy = function () {
    self.gameCanvas.remove();
    removeEventListener('keydown', self.handleKeyDown);
    self.player.destroy();
  }

} 