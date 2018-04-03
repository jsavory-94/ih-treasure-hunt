'use strict'

// ----- GLOBAL SCOPE

function main () {
  
  var mainElement = document.getElementById("main");
  var game;
  var stage;
  var gameOver

  // --- SPLASH

  //declare variables of splash screen
  var splashElement 
  var startGameButton
  var gameInstructions

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

    //instructions
    gameInstructions = document.createElement('div');
    gameInstructions.setAttribute('id','instruction');
    mainElement.appendChild(gameInstructions);

    var instructionHeader = document.createElement('h2');
    instructionHeader.innerText = "Controls";
    gameInstructions.appendChild(instructionHeader);
    
    var instructionList = document.createElement('ul');
    gameInstructions.appendChild(instructionList);

    var moveInstruction = document.createElement('li');
    moveInstruction.innerText = "Movement: WASD";
    instructionList.appendChild(moveInstruction);

    var hintInstruction = document.createElement('li');
    hintInstruction.innerText = "Ask for hint: F";
    instructionList.appendChild(hintInstruction);

    var digInstruction = document.createElement('li');
    digInstruction.innerText = "Dig: V";
    instructionList.appendChild(digInstruction);


    /*var hintInstruction = document.createElement('li');
    hintInstruction.innerText = "F: Ask for a hint";
    splashElement.appendChild(instructions);
    */
    

    startGameButton.addEventListener("click", startGame);
  }

  //start game
  function startGame () {
      splashElement.remove();
      gameInstructions.remove();
      buildGame();
    }

  // --- GAME
  function buildGame() {
    stage = 'game';
    game = new Game(mainElement);

    // window.setTimeout(function() {
    //   destroyGame();
    //   buildGameOver();
    // }, 10000);

    game.onGameOver(function (){
    buildGameOver();  
    });
  }

  function destroyGame(){
    game.destroy();
  }


  // --- GAME OVER
  function buildGameOver(){
    //declare variables of game-over screen
    stage = 'gameOver';
    var gameOverElement;
    var restartGameButton;

    //create dom elements of game-over screen
    gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id','gameOver');
    mainElement.appendChild(gameOverElement);

    var yourScore = document.createElement('h2');
    yourScore.innerText = 'you scored ' + game.score + ' points';
    gameOverElement.appendChild(yourScore);

    restartGameButton = document.createElement('button');
    restartGameButton.innerText = "Play Again";
    gameOverElement.appendChild(restartGameButton);

    restartGameButton.addEventListener("click", restart);

    //restart game
    function restart(){
      gameOverElement.remove();
      buildSplash();
    }
  }

  buildSplash();
};


window.onload = main;

