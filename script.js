let theGame;

class Game{
  constructor() {
    this.ctx = document.getElementById('game-board').getContext('2d');
  
    this.player1 = new Player(70,100,100,180)
   this.player2 = new Player(70,100,850,180)
    // create new character automatically when new game is started.
    this.player1.draw();
    this.player2.draw();
  }


}


class Player{
      constructor(width, height, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.imgsrc = "images/ghost.png";
        this.ctx = document.getElementById('game-board').getContext('2d');
      // properties for constructor go within first curlies
      }
      draw(){
        let theImage = new Image();
        theImage.src = this.imgsrc;
        theImage.onload = ()=>{
          this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
        }
      }
    }
function startGame() {
  theGame = new Game();
}

  startGame();
  
let canvas = document.getElementById("game-board");
canvas.width = 1000;
canvas.height = 800;

    //move players up and down, erase, increase the pixels to follow the player.

    //moving the car up and down. same with my game
    // so 2 squares/images on either side of the canvas, that move up and down.

    //character jumps when they shoot.





// on mouseover, the 'Pong Awaits You' message jumps at screen or shakes, does something.
// mouseover of start game, text shakes

//check manny's slack for putting 1 item on each side of the screen, background = to size of canvas.


// weapon projectile object always at same position as the player 1 or player 2.

//the way the projectile moves laterally, is the same physics as the car Nick moved in class.

















// classes,
// player 1 and 2
// properties and display (canvas) static image background
// hit 2 scores in arow, 3 etc, player 1 is faster, pl 2 slower.
// pong or memory game.
// bunch of if statements to cause changes when certain events happen. like colors changing, points change, effects change.




// Player 1 on right
//Player 2 on left

// let player1 = new Player(30,100,600,150)
//   let player2 = new Player(30,100,0,150)

// positioning for each player.


// get them in correct position. move up and down.
