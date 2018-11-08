let ship

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
}

function draw(){

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW){
    ship.move(1);
  } else if (keyCode === LEFT_ARROW){
    ship.move(-1);
  }
}















class Ship{
  constructor()
  this.x = width/2;
  
  
  
  this.show = function() {
  rect(this.x, height-20, 20, 20);

  }
this.move = function(dir) {
  this.x += dir;
}



}





array for the orbs.