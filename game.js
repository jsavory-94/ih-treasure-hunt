'use strict'

//---put Game in Index---
function Game (mainElement) {
  var self = this;

  self.score = 0;
  self.finished = false;
  self.onEnded;

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

  self.pointsDug = [];
  self.treasuresDug = [];

  //--dom elements (items)--
  self.player = new Player(self.ctx, self.width, self.height);
  self.treasure = new Treasure(self.ctx, self.width, self.height);
  self.hintMessages = ["cold", "chilly", "warm", "hot"]


  // ---create logic of game ---//

  //--logic (declare functions)--//
  function getDistance(treasure) {
    var pythagorasA = self.player.x - self.treasure.x
    var pythagorasB = self.player.y - self.treasure.y
    return Math.sqrt(Math.pow(pythagorasA,2) + Math.pow(pythagorasB,2));
  }

  function getHintMessage(distance) {
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
    var message = getHintMessage(distance);
    self.hintMessage = message;
  }

  self.dig = function() {
    var distance = getDistance(self.treasure);
        
    if (distance < 50) {
       self.score += 100;
       var treasureDug = {};
       treasureDug.x = self.treasure.x;
       treasureDug.y = self.treasure.y;
       self.treasuresDug.push(treasureDug);

      self.treasure = new Treasure(self.ctx, self.width, self.height);

    }

    else {
      self.score -= 5;
      var pointDug = {};
      pointDug.x = self.player.x;
      pointDug.y = self.player.y;
      self.pointsDug.push(pointDug);
    }
  }


  function countTwoMinutes(){
    self.currentTime = Date.now();
    self.delta = Math.floor(self.currentTime) - Math.floor(self.startTime);
    self.timer -= self.delta/1000;
    self.updateTime(self.delta/1000);
    self.startTime = self.currentTime;
    //check is time is 0
  }
  self.updateTime = function (){
    if (self.timer >=120){
      self.timer = 0;
      self.clearInterval(self.loop);
     
    }
  }
  self.startTime = Date.now();
  self.timer = 10;
  self.loop = setInterval(countTwoMinutes, 1000);

  //self.timeInputHandler = function(durationSeconds) {
  //  var timer = durationSeconds-1;
  //}
//
  //var countdown = self.setInterval(timeInputHandler(120)
  //  ,1000);

 // self.countdown = countdown;

  //--logic (executing functions)--
  self.handleKeyDown = function(event) {
    var key = event.key.toLowerCase();
    if (key === 'f'){
      self.giveHint();
    }
    if (key === 'v'){
      self.dig();
    }
    if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
      self.hintMessage = null;
    }
  }

  addEventListener('keydown', self.handleKeyDown);

  function updateCanvas() {

    self.ctx.clearRect(0, 0, self.width, self.height);

    self.player.draw();

    self.ctx.font = '24px serif';
    // self.ctx.textAlign = "left";
    // self.ctx.fillText('Score: ' + self.score, 20, 20);

    //draw messages
    if (self.hintMessage) {
      self.ctx.textAlign = "center"; 
      self.ctx.fillStyle = 'purple';
      self.ctx.fillText(self.hintMessage, self.width / 2, 20);
    }
    
    self.ctx.textAlign = "right"; 
    self.ctx.fillStyle = 'blue';
    self.ctx.fillText('Score: ' + self.score, self.width - 20, 20);

    self.ctx.textAlign = "left"; 
    self.ctx.fillStyle = 'blue';
    self.ctx.fillText(Math.ceil(self.timer), 20, 20);

    //draw dig outcomes
    self.ctx.fillStyle = 'yellow';
    for (var j = 0; j < self.treasuresDug.length; j++) {
      self.ctx.fillRect(self.treasuresDug[j].x - 5, self.treasuresDug[j].y - 5, 25, 25);
    }

    self.ctx.fillStyle = 'black';
    for (var i = 0; i < self.pointsDug.length; i++) {
      self.ctx.fillRect(self.pointsDug[i].x - 5, self.pointsDug[i].y - 5, 10, 10);
    }

    if (self.timer < 0){
      self.destroy();
      self.onEnded()  ;
        }
    // todo if (!self.finished)
    if(!self.finished){
    window.requestAnimationFrame(updateCanvas)
    };
  }

  // ---functions
  self.destroy = function () {
    self.gameCanvas.remove();
    self.finished = true;
    removeEventListener('keydown', self.handleKeyDown)
  }

  Game.prototype.onGameOver = function (callback) {
    var self = this;
    self.onEnded = callback;
  }
  window.requestAnimationFrame(updateCanvas);
  
} 