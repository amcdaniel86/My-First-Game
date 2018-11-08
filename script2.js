let keysBeingPressed = [];
let theGame;
let orbs = [];
let cd = true;
let cd2 = true;
let collisionCd = true;
//to prevent the movement of the screen when you press the arrow keys

class Game {
  constructor() {
    this.ctx = document.getElementById("game-board").getContext("2d");

    this.player1 = new Player(110, 150, 45, 180);
    this.player2 = new PlayerTwo(110, 150, 1350, 180);
    // create new character automatically when new game is started.
    setInterval(() => {
      this.ctx.clearRect(0, 0, 1600, 1400);
      this.player1.draw();
      this.player2.draw();
      this.player2.shot();
      this.player1.shot();
      this.orbs = [];
      orbs.forEach(fire => {
        fire.draw();
      });
      this.player1.movePlayer();
      this.player2.movePlayer2();
      orbs.forEach(orb => {
        this.player1.chechHit1(orb);
      });
      // this.orb.shootOrb();
      // this.player1.hits();
    }, 50);
  }
}

// document.onclick ("start-button")

document.onkeydown = function(e) {
  let commands = ["ArrowUp", "ArrowDown", "S", "W", "X", "ArrowLeft"];
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
    this.life = 5;
    this.imgsrc = "images/ghost3.png";
    this.ctx = document.getElementById("game-board").getContext("2d");
    // properties for constructor go within first curlies
  }
  draw() {
    let theImage = new Image();
    theImage.src = this.imgsrc;
    theImage.onload = () => {
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    };
  }

  shot() {
    if (cd) {
      if (keysBeingPressed.includes("x")) {
        orbs.push(new Orb(this.x + 100, this.y + 50));
        cd = false;
        setTimeout(() => {
          cd = true;
        }, 0);
      }
    }
  }

  movePlayer() {
    this.canMove(this.y);

    if (keysBeingPressed.includes("w")) {
      if (this.canMove(this.y - 20)) {
        console.log("uppppp");
        this.y -= 15;
      }
    }
    if (keysBeingPressed.includes("s")) {
      if (this.canMove(this.y + 20)) {
        console.log("downnnnn");
        this.y += 15;
      }
    }
  }
  chechHit1(orb) {
    console.log(orb);
    if (
      this.y == orb.y + orb.height ||
      this.y + this.height == orb.y ||
      this.x == orb.x + orb.width ||
      this.x + this.width == orb.x
    ) {
      console.log("booom");
      return;
    }
    this.life -= 1;
    if (this.life > 0) {
      collisionCd = false;
    }

    setTimeout(() => {
      collisionCd = true;
    }, 1000);
  }

  // hits() {
  //   // console.log(theGame.orbs);
  //   this.x;
  //   this.y;
  //   theGame.orbs.forEach(orb => {
  //     console.log("-=-=-=-=-=-=-=-", orb);
  //     if (
  //       this.x < orb.x + orb.width &&
  //       this.x + this.width > orb.x &&
  //       this.y < orb.y + orb.height &&
  //       this.y + this.height > orb.y
  //     ) {
  //       console.log(this.life);
  //       this.life--;
  //     }
  //   });
  // }

  canMove(futureY) {
    let result = true;
    if (futureY < 0 || futureY > 700) {
      result = false;
    }

    return result;
  }
}

class PlayerTwo {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imgsrc = "images/ghost3-2.png";
    this.ctx = document.getElementById("game-board").getContext("2d");
    // properties for constructor go within first curlies
  }
  draw() {
    let theImage = new Image();
    theImage.src = this.imgsrc;
    theImage.onload = () => {
      this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    };
  }

  shot() {
    if (cd) {
      if (keysBeingPressed.includes("ArrowLeft")) {
        orbs.push(new OrbTwo(this.x - 30, this.y + 50));
        cd = false;
        setTimeout(() => {
          cd = true;
        }, 1000);
      }
    }
  }

  movePlayer2() {
    this.canMove(this.y);

    if (keysBeingPressed.includes("ArrowUp")) {
      console.log("uppppp");
      if (this.canMove(this.y - 20)) {
        this.y -= 15;
      }
    }
    if (keysBeingPressed.includes("ArrowDown")) {
      console.log("downnnnn");
      if (this.canMove(this.y + 20)) {
        this.y += 15;
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

class Orb {
  constructor(x, y) {
    this.ctx = document.getElementById("game-board").getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.imgsrc = "images/green-orb.png";
    this.moveOrb();
  }

  draw() {
    let shotImage = new Image();
    shotImage.src = this.imgsrc;
    this.ctx.drawImage(shotImage, this.x, this.y, this.width, this.height);
  }
  moveOrb() {
    setInterval(() => {
      this.x += 10;
    }, 40);
  }
}
class OrbTwo {
  constructor(x, y) {
    this.ctx = document.getElementById("game-board").getContext("2d");
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.imgsrc = "images/green-orb.png";
    this.moveOrbTwo();
  }
  draw() {
    let shotImage = new Image();
    shotImage.src = this.imgsrc;
    this.ctx.drawImage(shotImage, this.x, this.y, this.width, this.height);
  }
  moveOrbTwo() {
    setInterval(() => {
      this.x -= 5;
    }, 40);
  }
}

function startGame() {
  theGame = new Game();
}

startGame();
let canvas = document.getElementById("game-board");
canvas.width = 1600;
canvas.height = 1000;

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