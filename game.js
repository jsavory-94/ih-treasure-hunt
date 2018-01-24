'use strict'

//---put Game in Index---
function Game (mainElement) {
  var self = this;

  self.score = 0;
  
  //---declare variables of game---
  self.mainElement = mainElement;
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  //---create dom elements of game---

  //--map--
  self.gameCanvas = document.createElement('canvas');
  self.gameCanvas.width = self.width;
  self.gameCanvas.height = self.height; 
  self.ctx = self.gameCanvas.getContext('2d');
  mainElement.appendChild(self.gameCanvas);

  //--gameplay--
  self.player = new Player(self.ctx, self.width, self.height);
  self.treasure = new Treasure(self.ctx, self.width, self.height);
  //self.dig = new Dig();
  
  //--logic--
  var pythagorasA = self.player.x - self.treasure.x
  var pythagorasB = self.player.y - self.treasure.y
  var distanceApart = Math.sqrt(Math.pow(pythagorasA,2) + Math.pow(pythagorasB,2));

  if (Math.abs(distanceApart) < 450){
    console.log("hot");
  }

  else if (Math.abs(distanceApart) >=450) {
    console.log("cold");

  console.log(distanceApart)
  }

  //self.hintMessages = ["cold", "chilly", "warm", "hot"]

  //self.giveHint = function(event){
  //  var digPress = event.key;
  //  if(digPress === 'f'){alert(self.hintMessages[0]);
  //  }
  //}
//
  //addEventListener('keydown', self.giveHint)

  // ---functions
  self.destroy = function () {
    self.gameCanvas.remove();
  };

} 