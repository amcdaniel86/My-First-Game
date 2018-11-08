let keysBeingPressed = [];
let theGame;
// ADDED BELOW
let iD1;
let iD2;
let hitP1 = false;
let hitP2 = false;
let player1Dead = false;
let player2Dead = false;
let yesShoot = true;
let yesShoot2 = true;

// let orb = new Orb()  
    calls from the class

//to prevent the movement of the screen when you press the arrow keys

class Game {
  constructor() {
    this.ctx = document.getElementById("game-board").getContext("2d");

    this.player1 = new Player(70, 100, 45, 180);
    this.player2 = new Player(70, 100, 890, 180);
    // create new character automatically when new game is started.
    setInterval(() => {
      this.ctx.clearRect(0, 0, 1000, 800);
      this.player1.draw();
      this.player2.draw();
      this.player1.movePlayer1();
      this.player2.movePlayer2();
      // ADDED BELOW
      this.a1Array = [];
      this.a1FiredArray = [];
      
      this.a2Array = [];
      this.a2FiredArray = [];

      this.h1Array = [];
      this.p1h1 = new Life;
      this.p1h1.x = 178;
      this.h1Array.push(this.p1h1);
      this.p1h2 = new Life;
      this.p1h1.x = 210;
      this.h1Array.push(this.p1h2);
      this.p1h3 = new Life;
      this.p1h3.x = 240;
      this.h1Array.push(this.p1h3);

          this.h2Array = [];
          this.p2h1 = new Life;
          this.p2h1.x = 944;
          this.h1Array.push(this.p2h1);
          this.p2h2 = new Life;
          this.p2h1.x = 975;
          this.h1Array.push(this.p2h2);
          this.p2h3 = new Life;
          this.p2h3.x = 1000;
          this.h1Array.push(this.p2h3);
    }, 80);
  }
}

document.onkeydown = function(e) {
  let commands = ["ArrowUp", "ArrowDown", "S", "W"];
  if (commands.includes(e.key)) {
    e.preventDefault();
  }
  if (!keysBeingPressed.includes(e.key)) {
    keysBeingPressed.push(e.key);
  }
};

document.onkeyup = function(e) {
  let theIndex = keysBeingPressed.indexOf(e.key);
  console.log(keysBeingPressed);
  if (theIndex != -1) {
    keysBeingPressed.splice(theIndex, 1);
  }
};

class Player {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imgsrc = "images/ghost.png";
    this.ctx = document.getElementById("game-board").getContext("2d");
    //NEW ADDS
    this.lives = 5;
    this.score = 0;
    // properties for constructor go within first curlies
  }
  draw() {
    let theImage = new Image();
    theImage.src = this.imgsrc;
    theImage.onload = () => {
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    };
  }
  movePlayer1() {
    this.canMove(this.y);

    if (keysBeingPressed.includes("ArrowUp")) {
      console.log("uppppp");
      if (this.canMove(this.y - 20)) {
        this.y -= 10;
      }
    }
    if (keysBeingPressed.includes("ArrowDown")) {
      console.log("downnnnn");
      if (this.canMove(this.y + 20)) {
        this.y += 10;
      }
    }
  }
  movePlayer2() {
    this.canMove(this.y);

    if (keysBeingPressed.includes("w")) {
      if (this.canMove(this.y - 20)) {
        console.log("uppppp");
        this.y -= 10;
      }
    }
    if (keysBeingPressed.includes("s")) {
      if (this.canMove(this.y + 20)) {
        console.log("downnnnn");
        this.y += 10;
      }
    }
  }
  canMove(futureY) {
    let result = true;
    if (futureY < 0 || futureY > 700) {
      result = false;
    }
    return result;
  }
}

Game.hitCollisionP2 = function(orbNumber){
  if (this.a1Array[orbNumber].x < this.p2.x + this.p2.width && this.a1Array[orbNumber].x + this.a1Array[orbNumber].width > this.p2.x && this.a1Array[orbNumber]).y < this.p2.y + this.p2.height && this.a1Array[orbNumber].height + this.a1Array[orbNumber].y > this.p2.y) {
    collisionP2 = true
  }
    if(collisionP2){
      console.log("You've been hit player 2!");
      this.p2.lives -= 1;
      this.h2Array.shift();
      console.log(this.h2Array);
      console.log(this.p2.lives);
      setTimeout(function(){
        collisionP2 = false;
      }, 300)
    };

Game.hitCollisionP1 = function(orbNumber){
  // let collisionP1 = false;
  if (this.a2Array[orbNumber].x < this.p1.x + this.p1.width && this.a2Array[orbNumber].x + this.a2Array[orbNumber].width > this.p1.x && this.a2Array[orbNumber]).y < this.p1.y + this.p1.height && this.a2Array[orbNumber].height + this.a2Array[orbNumber].y > this.p1.y) {
    collisionP1 = true
  }
    if(collisionP1){
      console.log("You've been hit player 1!");
      this.p1.lives -= 1;
      this.h2Array.shift();
      console.log(this.h2Array);
      console.log(this.p1.lives);
      setTimeout(function(){
        collisionP1 = false;
      }, 300)
    }
  };


//ALL NEW FOR SHOOTING WEAPON
  if (canShoot){
    if(e.keyCode === 65){
      let myOrb = new Orb();
      // this.a1.y = -32;
      myOrb.x = game.p1.x;
      myOrb.img = new Image();
      myOrb.img.src = "images/orb.gif"
      myOrb2.y = game.p2.y + game.p2.height/3;
      game.a2Array.push(myOrb2);
      let index2 = game.a2Array.indexOf(myOrb2);
      console.log('index', index2);
      game.moveOrbLeft(index2);
      canShoot2 = false;
      setTimeout(function(){
        canShoot2 = true;
      }, 800;
    }
  }

  class Orb {
      constructor(){
        // this.y = 0;
        this.width = 70;
        this.height = 20;
        this.img = new Image();
        this.arrows.src = "images/orb.gif"
        this.draw (ctx, image){
          ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
    
    }
  };

  class Life{
    constructor(){
    this.width = 26;
    this.height = 24;
    this.y = 500;
    this.img = new Image();
    this.img.src = "images/small-ghost.png";
    this.draw = function(ctx, image){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    }
  };

//ALL NEW BELOW
if (game.player1.lives < 1) {
  setTimeout(function(){
    player1dead = true;
  },1000)
}

if (game.player2.lives < 1) {
  setTimeout(function(){
    player2dead = true;
  },1000)
}

if (!player1dead && !player2dead){
  setTimeout(startGame, 33.3333);
} else if(player1dead){
  alert("player 2 wins");
  location.reload();
} else if(player2dead){
  alert("player 1 wins");
  location.reload();
}


}
function startGame() {
  theGame = new Game();

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
