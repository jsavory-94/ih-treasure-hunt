'use strict'


  function Game (mainElement) {
    var self = this
    
     self.mainElement = mainElement;

    //create dom elements
    self.gameCanvas = document.createElement('canvas');
    self.gameCanvas.width = window.innerWidth;
    self.gameCanvas.height = window.innerHeight;
    mainElement.appendChild(self.gameCanvas);
    
    self.player = new Player 
} 