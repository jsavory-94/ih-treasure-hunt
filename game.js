'use strict'

//put Game in Index
function Game (mainElement) {
  var self = this;

  self.score = 0;
  
  //declare variables of game
  self.mainElement = mainElement;
  self.width = window.innerWidth;
  self.height = window.innerHeight;
  

  //create dom elements of game
  self.gameCanvas = document.createElement('canvas');
  self.gameCanvas.width = self.width;
  self.gameCanvas.height = self.height; 
  self.ctx = self.gameCanvas.getContext('2d');

  mainElement.appendChild(self.gameCanvas);

  self.player = new Player(self.ctx, self.width, self.height);

  // -- functions
  self.destroy = function () {
    self.gameCanvas.remove();
  };

} 