'use strict'

// ----- GLOBAL SCOPE

function main () {
  
  var mainElement = document.getElementById("main");
  var game;
  var stage;
  
  // --- SPLASH

  //declare variables of splash screen
  var splashElement 
  var startGameButton

  //create dom elements of splash screen
  function buildSplash() {
      splashElement = document.createElement('div');
      splashElement.setAttribute('id','splash');
      mainElement.appendChild(splashElement);

  var title = document.createElement('h1');
      title.innerText = "Ironhack Treasure Hunt";
      splashElement.appendChild(title);

      startGameButton = document.createElement('button');
      startGameButton.innerText = "Go Treasure Hunting";
      splashElement.appendChild(startGameButton);

  startGameButton.addEventListener("click", destroySplash);
  }

  //destroy splash
  function destroySplash () {
      splashElement.remove();
      buildGame();
    }



  
  // --- GAME

  function buildGame() {
    stage = 'game';
    game = new Game (mainElement);

    window.setTimeout( function() {
      destroyGame();
      buildGameOver();
    }, 5000);
  };

  function destroyGame(){
    game.remove
  }


  // --- GAME OVER
  function buildGameOver(){

    //declare variables of game-over screen
    stage = 'gameOver'
    var gameOverElement;
    var restartGameButton;

    //create dom elements of game-over screen
    gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id','gameOver');
    mainElement.appendChild(gameOverElement);

    var yourScore = document.createElement('h2');
    yourScore.innerText = 'you scored ' + game.score + 'points';
    gameOverElement.appendChild(yourScore);

    restartGameButton = document.createElement('button');
    restartGameButton.innerText = "Play Again";
    splashElement.appendChild(restartGameButton);
  }
  buildSplash();
};

  


window.onload = main;

